// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceBriefOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#id DataThunderInterfaceBriefOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#oper DataThunderInterfaceBriefOper#oper}
  */
  readonly oper?: DataThunderInterfaceBriefOperOper;
}
export interface DataThunderInterfaceBriefOperOperInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#duplexity DataThunderInterfaceBriefOper#duplexity}
  */
  readonly duplexity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#encap_info DataThunderInterfaceBriefOper#encap_info}
  */
  readonly encapInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#intf_name DataThunderInterfaceBriefOper#intf_name}
  */
  readonly intfName?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#ipv4_addr DataThunderInterfaceBriefOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#ipv4_addr_count DataThunderInterfaceBriefOper#ipv4_addr_count}
  */
  readonly ipv4AddrCount?: number;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#ipv4_mask DataThunderInterfaceBriefOper#ipv4_mask}
  */
  readonly ipv4Mask?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#ipv6_addr DataThunderInterfaceBriefOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#ipv6_addr_count DataThunderInterfaceBriefOper#ipv6_addr_count}
  */
  readonly ipv6AddrCount?: number;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#ipv6_prefix DataThunderInterfaceBriefOper#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#mac DataThunderInterfaceBriefOper#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#port_num DataThunderInterfaceBriefOper#port_num}
  */
  readonly portNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#speed DataThunderInterfaceBriefOper#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#state DataThunderInterfaceBriefOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#trunk_group DataThunderInterfaceBriefOper#trunk_group}
  */
  readonly trunkGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#unnumbered_oper DataThunderInterfaceBriefOper#unnumbered_oper}
  */
  readonly unnumberedOper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#vlan_info DataThunderInterfaceBriefOper#vlan_info}
  */
  readonly vlanInfo?: string;
}

export function dataThunderInterfaceBriefOperOperInterfacesToTerraform(struct?: DataThunderInterfaceBriefOperOperInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duplexity: cdktf.stringToTerraform(struct!.duplexity),
    encap_info: cdktf.stringToTerraform(struct!.encapInfo),
    intf_name: cdktf.stringToTerraform(struct!.intfName),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv4_addr_count: cdktf.numberToTerraform(struct!.ipv4AddrCount),
    ipv4_mask: cdktf.stringToTerraform(struct!.ipv4Mask),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    ipv6_addr_count: cdktf.numberToTerraform(struct!.ipv6AddrCount),
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    mac: cdktf.stringToTerraform(struct!.mac),
    port_num: cdktf.stringToTerraform(struct!.portNum),
    speed: cdktf.stringToTerraform(struct!.speed),
    state: cdktf.stringToTerraform(struct!.state),
    trunk_group: cdktf.stringToTerraform(struct!.trunkGroup),
    unnumbered_oper: cdktf.stringToTerraform(struct!.unnumberedOper),
    vlan_info: cdktf.stringToTerraform(struct!.vlanInfo),
  }
}


export function dataThunderInterfaceBriefOperOperInterfacesToHclTerraform(struct?: DataThunderInterfaceBriefOperOperInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duplexity: {
      value: cdktf.stringToHclTerraform(struct!.duplexity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap_info: {
      value: cdktf.stringToHclTerraform(struct!.encapInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intf_name: {
      value: cdktf.stringToHclTerraform(struct!.intfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_addr_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AddrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AddrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.stringToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
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
    trunk_group: {
      value: cdktf.stringToHclTerraform(struct!.trunkGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unnumbered_oper: {
      value: cdktf.stringToHclTerraform(struct!.unnumberedOper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_info: {
      value: cdktf.stringToHclTerraform(struct!.vlanInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceBriefOperOperInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceBriefOperOperInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duplexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplexity = this._duplexity;
    }
    if (this._encapInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapInfo = this._encapInfo;
    }
    if (this._intfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfName = this._intfName;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv4AddrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddrCount = this._ipv4AddrCount;
    }
    if (this._ipv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mask = this._ipv4Mask;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._ipv6AddrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddrCount = this._ipv6AddrCount;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._trunkGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkGroup = this._trunkGroup;
    }
    if (this._unnumberedOper !== undefined) {
      hasAnyValues = true;
      internalValueResult.unnumberedOper = this._unnumberedOper;
    }
    if (this._vlanInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanInfo = this._vlanInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceBriefOperOperInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duplexity = undefined;
      this._encapInfo = undefined;
      this._intfName = undefined;
      this._ipv4Addr = undefined;
      this._ipv4AddrCount = undefined;
      this._ipv4Mask = undefined;
      this._ipv6Addr = undefined;
      this._ipv6AddrCount = undefined;
      this._ipv6Prefix = undefined;
      this._mac = undefined;
      this._portNum = undefined;
      this._speed = undefined;
      this._state = undefined;
      this._trunkGroup = undefined;
      this._unnumberedOper = undefined;
      this._vlanInfo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duplexity = value.duplexity;
      this._encapInfo = value.encapInfo;
      this._intfName = value.intfName;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv4AddrCount = value.ipv4AddrCount;
      this._ipv4Mask = value.ipv4Mask;
      this._ipv6Addr = value.ipv6Addr;
      this._ipv6AddrCount = value.ipv6AddrCount;
      this._ipv6Prefix = value.ipv6Prefix;
      this._mac = value.mac;
      this._portNum = value.portNum;
      this._speed = value.speed;
      this._state = value.state;
      this._trunkGroup = value.trunkGroup;
      this._unnumberedOper = value.unnumberedOper;
      this._vlanInfo = value.vlanInfo;
    }
  }

  // duplexity - computed: false, optional: true, required: false
  private _duplexity?: string; 
  public get duplexity() {
    return this.getStringAttribute('duplexity');
  }
  public set duplexity(value: string) {
    this._duplexity = value;
  }
  public resetDuplexity() {
    this._duplexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexityInput() {
    return this._duplexity;
  }

  // encap_info - computed: false, optional: true, required: false
  private _encapInfo?: string; 
  public get encapInfo() {
    return this.getStringAttribute('encap_info');
  }
  public set encapInfo(value: string) {
    this._encapInfo = value;
  }
  public resetEncapInfo() {
    this._encapInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInfoInput() {
    return this._encapInfo;
  }

  // intf_name - computed: false, optional: true, required: false
  private _intfName?: string; 
  public get intfName() {
    return this.getStringAttribute('intf_name');
  }
  public set intfName(value: string) {
    this._intfName = value;
  }
  public resetIntfName() {
    this._intfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfNameInput() {
    return this._intfName;
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv4_addr_count - computed: false, optional: true, required: false
  private _ipv4AddrCount?: number; 
  public get ipv4AddrCount() {
    return this.getNumberAttribute('ipv4_addr_count');
  }
  public set ipv4AddrCount(value: number) {
    this._ipv4AddrCount = value;
  }
  public resetIpv4AddrCount() {
    this._ipv4AddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrCountInput() {
    return this._ipv4AddrCount;
  }

  // ipv4_mask - computed: false, optional: true, required: false
  private _ipv4Mask?: string; 
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
  public set ipv4Mask(value: string) {
    this._ipv4Mask = value;
  }
  public resetIpv4Mask() {
    this._ipv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskInput() {
    return this._ipv4Mask;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // ipv6_addr_count - computed: false, optional: true, required: false
  private _ipv6AddrCount?: number; 
  public get ipv6AddrCount() {
    return this.getNumberAttribute('ipv6_addr_count');
  }
  public set ipv6AddrCount(value: number) {
    this._ipv6AddrCount = value;
  }
  public resetIpv6AddrCount() {
    this._ipv6AddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrCountInput() {
    return this._ipv6AddrCount;
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // port_num - computed: false, optional: true, required: false
  private _portNum?: string; 
  public get portNum() {
    return this.getStringAttribute('port_num');
  }
  public set portNum(value: string) {
    this._portNum = value;
  }
  public resetPortNum() {
    this._portNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
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

  // trunk_group - computed: false, optional: true, required: false
  private _trunkGroup?: string; 
  public get trunkGroup() {
    return this.getStringAttribute('trunk_group');
  }
  public set trunkGroup(value: string) {
    this._trunkGroup = value;
  }
  public resetTrunkGroup() {
    this._trunkGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkGroupInput() {
    return this._trunkGroup;
  }

  // unnumbered_oper - computed: false, optional: true, required: false
  private _unnumberedOper?: string; 
  public get unnumberedOper() {
    return this.getStringAttribute('unnumbered_oper');
  }
  public set unnumberedOper(value: string) {
    this._unnumberedOper = value;
  }
  public resetUnnumberedOper() {
    this._unnumberedOper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedOperInput() {
    return this._unnumberedOper;
  }

  // vlan_info - computed: false, optional: true, required: false
  private _vlanInfo?: string; 
  public get vlanInfo() {
    return this.getStringAttribute('vlan_info');
  }
  public set vlanInfo(value: string) {
    this._vlanInfo = value;
  }
  public resetVlanInfo() {
    this._vlanInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInfoInput() {
    return this._vlanInfo;
  }
}

export class DataThunderInterfaceBriefOperOperInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceBriefOperOperInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceBriefOperOperInterfacesOutputReference {
    return new DataThunderInterfaceBriefOperOperInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceBriefOperOper {
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#interfaces DataThunderInterfaceBriefOper#interfaces}
  */
  readonly interfaces?: DataThunderInterfaceBriefOperOperInterfaces[] | cdktf.IResolvable;
}

export function dataThunderInterfaceBriefOperOperToTerraform(struct?: DataThunderInterfaceBriefOperOperOutputReference | DataThunderInterfaceBriefOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(dataThunderInterfaceBriefOperOperInterfacesToTerraform, true)(struct!.interfaces),
  }
}


export function dataThunderInterfaceBriefOperOperToHclTerraform(struct?: DataThunderInterfaceBriefOperOperOutputReference | DataThunderInterfaceBriefOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(dataThunderInterfaceBriefOperOperInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceBriefOperOperInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceBriefOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceBriefOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceBriefOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new DataThunderInterfaceBriefOperOperInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataThunderInterfaceBriefOperOperInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper thunder_interface_brief_oper}
*/
export class DataThunderInterfaceBriefOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_brief_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceBriefOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceBriefOper to import
  * @param importFromId The id of the existing DataThunderInterfaceBriefOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceBriefOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_brief_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_brief_oper thunder_interface_brief_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceBriefOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceBriefOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_brief_oper',
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
  private _oper = new DataThunderInterfaceBriefOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderInterfaceBriefOperOper) {
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
      oper: dataThunderInterfaceBriefOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderInterfaceBriefOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceBriefOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
