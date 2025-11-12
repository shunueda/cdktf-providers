// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkVlanOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#id DataThunderNetworkVlanOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VLAN number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#vlan_num DataThunderNetworkVlanOper#vlan_num}
  */
  readonly vlanNum: number;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#oper DataThunderNetworkVlanOper#oper}
  */
  readonly oper?: DataThunderNetworkVlanOperOper;
}
export interface DataThunderNetworkVlanOperOperTaggEthPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#ports DataThunderNetworkVlanOper#ports}
  */
  readonly ports?: number;
}

export function dataThunderNetworkVlanOperOperTaggEthPortsToTerraform(struct?: DataThunderNetworkVlanOperOperTaggEthPortsOutputReference | DataThunderNetworkVlanOperOperTaggEthPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.numberToTerraform(struct!.ports),
  }
}


export function dataThunderNetworkVlanOperOperTaggEthPortsToHclTerraform(struct?: DataThunderNetworkVlanOperOperTaggEthPortsOutputReference | DataThunderNetworkVlanOperOperTaggEthPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVlanOperOperTaggEthPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVlanOperOperTaggEthPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVlanOperOperTaggEthPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ports = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ports = value.ports;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface DataThunderNetworkVlanOperOperTaggLogicalPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#ports DataThunderNetworkVlanOper#ports}
  */
  readonly ports?: number;
}

export function dataThunderNetworkVlanOperOperTaggLogicalPortsToTerraform(struct?: DataThunderNetworkVlanOperOperTaggLogicalPortsOutputReference | DataThunderNetworkVlanOperOperTaggLogicalPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.numberToTerraform(struct!.ports),
  }
}


export function dataThunderNetworkVlanOperOperTaggLogicalPortsToHclTerraform(struct?: DataThunderNetworkVlanOperOperTaggLogicalPortsOutputReference | DataThunderNetworkVlanOperOperTaggLogicalPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVlanOperOperTaggLogicalPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVlanOperOperTaggLogicalPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVlanOperOperTaggLogicalPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ports = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ports = value.ports;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface DataThunderNetworkVlanOperOperUnTaggEthPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#ports DataThunderNetworkVlanOper#ports}
  */
  readonly ports?: number;
}

export function dataThunderNetworkVlanOperOperUnTaggEthPortsToTerraform(struct?: DataThunderNetworkVlanOperOperUnTaggEthPortsOutputReference | DataThunderNetworkVlanOperOperUnTaggEthPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.numberToTerraform(struct!.ports),
  }
}


export function dataThunderNetworkVlanOperOperUnTaggEthPortsToHclTerraform(struct?: DataThunderNetworkVlanOperOperUnTaggEthPortsOutputReference | DataThunderNetworkVlanOperOperUnTaggEthPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVlanOperOperUnTaggEthPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVlanOperOperUnTaggEthPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVlanOperOperUnTaggEthPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ports = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ports = value.ports;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface DataThunderNetworkVlanOperOperUnTaggLogicalPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#ports DataThunderNetworkVlanOper#ports}
  */
  readonly ports?: number;
}

export function dataThunderNetworkVlanOperOperUnTaggLogicalPortsToTerraform(struct?: DataThunderNetworkVlanOperOperUnTaggLogicalPortsOutputReference | DataThunderNetworkVlanOperOperUnTaggLogicalPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.numberToTerraform(struct!.ports),
  }
}


export function dataThunderNetworkVlanOperOperUnTaggLogicalPortsToHclTerraform(struct?: DataThunderNetworkVlanOperOperUnTaggLogicalPortsOutputReference | DataThunderNetworkVlanOperOperUnTaggLogicalPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.numberToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVlanOperOperUnTaggLogicalPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVlanOperOperUnTaggLogicalPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVlanOperOperUnTaggLogicalPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ports = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ports = value.ports;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface DataThunderNetworkVlanOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#is_shared_vlan DataThunderNetworkVlanOper#is_shared_vlan}
  */
  readonly isSharedVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#span_tree DataThunderNetworkVlanOper#span_tree}
  */
  readonly spanTree?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#ve_num DataThunderNetworkVlanOper#ve_num}
  */
  readonly veNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#vlan_name DataThunderNetworkVlanOper#vlan_name}
  */
  readonly vlanName?: string;
  /**
  * tagg_eth_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#tagg_eth_ports DataThunderNetworkVlanOper#tagg_eth_ports}
  */
  readonly taggEthPorts?: DataThunderNetworkVlanOperOperTaggEthPorts;
  /**
  * tagg_logical_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#tagg_logical_ports DataThunderNetworkVlanOper#tagg_logical_ports}
  */
  readonly taggLogicalPorts?: DataThunderNetworkVlanOperOperTaggLogicalPorts;
  /**
  * un_tagg_eth_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#un_tagg_eth_ports DataThunderNetworkVlanOper#un_tagg_eth_ports}
  */
  readonly unTaggEthPorts?: DataThunderNetworkVlanOperOperUnTaggEthPorts;
  /**
  * un_tagg_logical_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#un_tagg_logical_ports DataThunderNetworkVlanOper#un_tagg_logical_ports}
  */
  readonly unTaggLogicalPorts?: DataThunderNetworkVlanOperOperUnTaggLogicalPorts;
}

export function dataThunderNetworkVlanOperOperToTerraform(struct?: DataThunderNetworkVlanOperOperOutputReference | DataThunderNetworkVlanOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_shared_vlan: cdktf.stringToTerraform(struct!.isSharedVlan),
    span_tree: cdktf.stringToTerraform(struct!.spanTree),
    ve_num: cdktf.numberToTerraform(struct!.veNum),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
    tagg_eth_ports: dataThunderNetworkVlanOperOperTaggEthPortsToTerraform(struct!.taggEthPorts),
    tagg_logical_ports: dataThunderNetworkVlanOperOperTaggLogicalPortsToTerraform(struct!.taggLogicalPorts),
    un_tagg_eth_ports: dataThunderNetworkVlanOperOperUnTaggEthPortsToTerraform(struct!.unTaggEthPorts),
    un_tagg_logical_ports: dataThunderNetworkVlanOperOperUnTaggLogicalPortsToTerraform(struct!.unTaggLogicalPorts),
  }
}


export function dataThunderNetworkVlanOperOperToHclTerraform(struct?: DataThunderNetworkVlanOperOperOutputReference | DataThunderNetworkVlanOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_shared_vlan: {
      value: cdktf.stringToHclTerraform(struct!.isSharedVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    span_tree: {
      value: cdktf.stringToHclTerraform(struct!.spanTree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ve_num: {
      value: cdktf.numberToHclTerraform(struct!.veNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tagg_eth_ports: {
      value: dataThunderNetworkVlanOperOperTaggEthPortsToHclTerraform(struct!.taggEthPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkVlanOperOperTaggEthPortsList",
    },
    tagg_logical_ports: {
      value: dataThunderNetworkVlanOperOperTaggLogicalPortsToHclTerraform(struct!.taggLogicalPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkVlanOperOperTaggLogicalPortsList",
    },
    un_tagg_eth_ports: {
      value: dataThunderNetworkVlanOperOperUnTaggEthPortsToHclTerraform(struct!.unTaggEthPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkVlanOperOperUnTaggEthPortsList",
    },
    un_tagg_logical_ports: {
      value: dataThunderNetworkVlanOperOperUnTaggLogicalPortsToHclTerraform(struct!.unTaggLogicalPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkVlanOperOperUnTaggLogicalPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVlanOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVlanOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSharedVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSharedVlan = this._isSharedVlan;
    }
    if (this._spanTree !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanTree = this._spanTree;
    }
    if (this._veNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.veNum = this._veNum;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    if (this._taggEthPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taggEthPorts = this._taggEthPorts?.internalValue;
    }
    if (this._taggLogicalPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taggLogicalPorts = this._taggLogicalPorts?.internalValue;
    }
    if (this._unTaggEthPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unTaggEthPorts = this._unTaggEthPorts?.internalValue;
    }
    if (this._unTaggLogicalPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unTaggLogicalPorts = this._unTaggLogicalPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVlanOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isSharedVlan = undefined;
      this._spanTree = undefined;
      this._veNum = undefined;
      this._vlanName = undefined;
      this._taggEthPorts.internalValue = undefined;
      this._taggLogicalPorts.internalValue = undefined;
      this._unTaggEthPorts.internalValue = undefined;
      this._unTaggLogicalPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isSharedVlan = value.isSharedVlan;
      this._spanTree = value.spanTree;
      this._veNum = value.veNum;
      this._vlanName = value.vlanName;
      this._taggEthPorts.internalValue = value.taggEthPorts;
      this._taggLogicalPorts.internalValue = value.taggLogicalPorts;
      this._unTaggEthPorts.internalValue = value.unTaggEthPorts;
      this._unTaggLogicalPorts.internalValue = value.unTaggLogicalPorts;
    }
  }

  // is_shared_vlan - computed: false, optional: true, required: false
  private _isSharedVlan?: string; 
  public get isSharedVlan() {
    return this.getStringAttribute('is_shared_vlan');
  }
  public set isSharedVlan(value: string) {
    this._isSharedVlan = value;
  }
  public resetIsSharedVlan() {
    this._isSharedVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSharedVlanInput() {
    return this._isSharedVlan;
  }

  // span_tree - computed: false, optional: true, required: false
  private _spanTree?: string; 
  public get spanTree() {
    return this.getStringAttribute('span_tree');
  }
  public set spanTree(value: string) {
    this._spanTree = value;
  }
  public resetSpanTree() {
    this._spanTree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanTreeInput() {
    return this._spanTree;
  }

  // ve_num - computed: false, optional: true, required: false
  private _veNum?: number; 
  public get veNum() {
    return this.getNumberAttribute('ve_num');
  }
  public set veNum(value: number) {
    this._veNum = value;
  }
  public resetVeNum() {
    this._veNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veNumInput() {
    return this._veNum;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }

  // tagg_eth_ports - computed: false, optional: true, required: false
  private _taggEthPorts = new DataThunderNetworkVlanOperOperTaggEthPortsOutputReference(this, "tagg_eth_ports");
  public get taggEthPorts() {
    return this._taggEthPorts;
  }
  public putTaggEthPorts(value: DataThunderNetworkVlanOperOperTaggEthPorts) {
    this._taggEthPorts.internalValue = value;
  }
  public resetTaggEthPorts() {
    this._taggEthPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggEthPortsInput() {
    return this._taggEthPorts.internalValue;
  }

  // tagg_logical_ports - computed: false, optional: true, required: false
  private _taggLogicalPorts = new DataThunderNetworkVlanOperOperTaggLogicalPortsOutputReference(this, "tagg_logical_ports");
  public get taggLogicalPorts() {
    return this._taggLogicalPorts;
  }
  public putTaggLogicalPorts(value: DataThunderNetworkVlanOperOperTaggLogicalPorts) {
    this._taggLogicalPorts.internalValue = value;
  }
  public resetTaggLogicalPorts() {
    this._taggLogicalPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggLogicalPortsInput() {
    return this._taggLogicalPorts.internalValue;
  }

  // un_tagg_eth_ports - computed: false, optional: true, required: false
  private _unTaggEthPorts = new DataThunderNetworkVlanOperOperUnTaggEthPortsOutputReference(this, "un_tagg_eth_ports");
  public get unTaggEthPorts() {
    return this._unTaggEthPorts;
  }
  public putUnTaggEthPorts(value: DataThunderNetworkVlanOperOperUnTaggEthPorts) {
    this._unTaggEthPorts.internalValue = value;
  }
  public resetUnTaggEthPorts() {
    this._unTaggEthPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unTaggEthPortsInput() {
    return this._unTaggEthPorts.internalValue;
  }

  // un_tagg_logical_ports - computed: false, optional: true, required: false
  private _unTaggLogicalPorts = new DataThunderNetworkVlanOperOperUnTaggLogicalPortsOutputReference(this, "un_tagg_logical_ports");
  public get unTaggLogicalPorts() {
    return this._unTaggLogicalPorts;
  }
  public putUnTaggLogicalPorts(value: DataThunderNetworkVlanOperOperUnTaggLogicalPorts) {
    this._unTaggLogicalPorts.internalValue = value;
  }
  public resetUnTaggLogicalPorts() {
    this._unTaggLogicalPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unTaggLogicalPortsInput() {
    return this._unTaggLogicalPorts.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper thunder_network_vlan_oper}
*/
export class DataThunderNetworkVlanOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_vlan_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkVlanOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkVlanOper to import
  * @param importFromId The id of the existing DataThunderNetworkVlanOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkVlanOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_vlan_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_oper thunder_network_vlan_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkVlanOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkVlanOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_vlan_oper',
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
    this._vlanNum = config.vlanNum;
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

  // vlan_num - computed: false, optional: false, required: true
  private _vlanNum?: number; 
  public get vlanNum() {
    return this.getNumberAttribute('vlan_num');
  }
  public set vlanNum(value: number) {
    this._vlanNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNumInput() {
    return this._vlanNum;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderNetworkVlanOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNetworkVlanOperOper) {
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
      vlan_num: cdktf.numberToTerraform(this._vlanNum),
      oper: dataThunderNetworkVlanOperOperToTerraform(this._oper.internalValue),
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
      vlan_num: {
        value: cdktf.numberToHclTerraform(this._vlanNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oper: {
        value: dataThunderNetworkVlanOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkVlanOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
