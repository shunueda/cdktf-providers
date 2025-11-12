// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6FixedNatPortMappingOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#id DataThunderCgnv6FixedNatPortMappingOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#oper DataThunderCgnv6FixedNatPortMappingOper#oper}
  */
  readonly oper?: DataThunderCgnv6FixedNatPortMappingOperOper;
}
export interface DataThunderCgnv6FixedNatPortMappingOperOperMappingListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#assigned_to DataThunderCgnv6FixedNatPortMappingOper#assigned_to}
  */
  readonly assignedTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#icmp_port_end DataThunderCgnv6FixedNatPortMappingOper#icmp_port_end}
  */
  readonly icmpPortEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#icmp_port_start DataThunderCgnv6FixedNatPortMappingOper#icmp_port_start}
  */
  readonly icmpPortStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#nat_address DataThunderCgnv6FixedNatPortMappingOper#nat_address}
  */
  readonly natAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#tcp_port_end DataThunderCgnv6FixedNatPortMappingOper#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#tcp_port_start DataThunderCgnv6FixedNatPortMappingOper#tcp_port_start}
  */
  readonly tcpPortStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#udp_port_end DataThunderCgnv6FixedNatPortMappingOper#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#udp_port_start DataThunderCgnv6FixedNatPortMappingOper#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function dataThunderCgnv6FixedNatPortMappingOperOperMappingListStructToTerraform(struct?: DataThunderCgnv6FixedNatPortMappingOperOperMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_to: cdktf.stringToTerraform(struct!.assignedTo),
    icmp_port_end: cdktf.numberToTerraform(struct!.icmpPortEnd),
    icmp_port_start: cdktf.numberToTerraform(struct!.icmpPortStart),
    nat_address: cdktf.stringToTerraform(struct!.natAddress),
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function dataThunderCgnv6FixedNatPortMappingOperOperMappingListStructToHclTerraform(struct?: DataThunderCgnv6FixedNatPortMappingOperOperMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_to: {
      value: cdktf.stringToHclTerraform(struct!.assignedTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.icmpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.icmpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_address: {
      value: cdktf.stringToHclTerraform(struct!.natAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatPortMappingOperOperMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6FixedNatPortMappingOperOperMappingListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedTo = this._assignedTo;
    }
    if (this._icmpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpPortEnd = this._icmpPortEnd;
    }
    if (this._icmpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpPortStart = this._icmpPortStart;
    }
    if (this._natAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddress = this._natAddress;
    }
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatPortMappingOperOperMappingListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignedTo = undefined;
      this._icmpPortEnd = undefined;
      this._icmpPortStart = undefined;
      this._natAddress = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignedTo = value.assignedTo;
      this._icmpPortEnd = value.icmpPortEnd;
      this._icmpPortStart = value.icmpPortStart;
      this._natAddress = value.natAddress;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // assigned_to - computed: false, optional: true, required: false
  private _assignedTo?: string; 
  public get assignedTo() {
    return this.getStringAttribute('assigned_to');
  }
  public set assignedTo(value: string) {
    this._assignedTo = value;
  }
  public resetAssignedTo() {
    this._assignedTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedToInput() {
    return this._assignedTo;
  }

  // icmp_port_end - computed: false, optional: true, required: false
  private _icmpPortEnd?: number; 
  public get icmpPortEnd() {
    return this.getNumberAttribute('icmp_port_end');
  }
  public set icmpPortEnd(value: number) {
    this._icmpPortEnd = value;
  }
  public resetIcmpPortEnd() {
    this._icmpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpPortEndInput() {
    return this._icmpPortEnd;
  }

  // icmp_port_start - computed: false, optional: true, required: false
  private _icmpPortStart?: number; 
  public get icmpPortStart() {
    return this.getNumberAttribute('icmp_port_start');
  }
  public set icmpPortStart(value: number) {
    this._icmpPortStart = value;
  }
  public resetIcmpPortStart() {
    this._icmpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpPortStartInput() {
    return this._icmpPortStart;
  }

  // nat_address - computed: false, optional: true, required: false
  private _natAddress?: string; 
  public get natAddress() {
    return this.getStringAttribute('nat_address');
  }
  public set natAddress(value: string) {
    this._natAddress = value;
  }
  public resetNatAddress() {
    this._natAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAddressInput() {
    return this._natAddress;
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class DataThunderCgnv6FixedNatPortMappingOperOperMappingListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6FixedNatPortMappingOperOperMappingListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6FixedNatPortMappingOperOperMappingListStructOutputReference {
    return new DataThunderCgnv6FixedNatPortMappingOperOperMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6FixedNatPortMappingOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#inside_user_v4 DataThunderCgnv6FixedNatPortMappingOper#inside_user_v4}
  */
  readonly insideUserV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#inside_user_v6 DataThunderCgnv6FixedNatPortMappingOper#inside_user_v6}
  */
  readonly insideUserV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#nat_ip DataThunderCgnv6FixedNatPortMappingOper#nat_ip}
  */
  readonly natIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#nat_port DataThunderCgnv6FixedNatPortMappingOper#nat_port}
  */
  readonly natPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#partition DataThunderCgnv6FixedNatPortMappingOper#partition}
  */
  readonly partition?: string;
  /**
  * mapping_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#mapping_list DataThunderCgnv6FixedNatPortMappingOper#mapping_list}
  */
  readonly mappingList?: DataThunderCgnv6FixedNatPortMappingOperOperMappingListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6FixedNatPortMappingOperOperToTerraform(struct?: DataThunderCgnv6FixedNatPortMappingOperOperOutputReference | DataThunderCgnv6FixedNatPortMappingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_user_v4: cdktf.stringToTerraform(struct!.insideUserV4),
    inside_user_v6: cdktf.stringToTerraform(struct!.insideUserV6),
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    nat_port: cdktf.numberToTerraform(struct!.natPort),
    partition: cdktf.stringToTerraform(struct!.partition),
    mapping_list: cdktf.listMapper(dataThunderCgnv6FixedNatPortMappingOperOperMappingListStructToTerraform, true)(struct!.mappingList),
  }
}


export function dataThunderCgnv6FixedNatPortMappingOperOperToHclTerraform(struct?: DataThunderCgnv6FixedNatPortMappingOperOperOutputReference | DataThunderCgnv6FixedNatPortMappingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_user_v4: {
      value: cdktf.stringToHclTerraform(struct!.insideUserV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_user_v6: {
      value: cdktf.stringToHclTerraform(struct!.insideUserV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.natIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_port: {
      value: cdktf.numberToHclTerraform(struct!.natPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6FixedNatPortMappingOperOperMappingListStructToHclTerraform, true)(struct!.mappingList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6FixedNatPortMappingOperOperMappingListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatPortMappingOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6FixedNatPortMappingOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideUserV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideUserV4 = this._insideUserV4;
    }
    if (this._insideUserV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideUserV6 = this._insideUserV6;
    }
    if (this._natIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIp = this._natIp;
    }
    if (this._natPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPort = this._natPort;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._mappingList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingList = this._mappingList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatPortMappingOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideUserV4 = undefined;
      this._insideUserV6 = undefined;
      this._natIp = undefined;
      this._natPort = undefined;
      this._partition = undefined;
      this._mappingList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideUserV4 = value.insideUserV4;
      this._insideUserV6 = value.insideUserV6;
      this._natIp = value.natIp;
      this._natPort = value.natPort;
      this._partition = value.partition;
      this._mappingList.internalValue = value.mappingList;
    }
  }

  // inside_user_v4 - computed: false, optional: true, required: false
  private _insideUserV4?: string; 
  public get insideUserV4() {
    return this.getStringAttribute('inside_user_v4');
  }
  public set insideUserV4(value: string) {
    this._insideUserV4 = value;
  }
  public resetInsideUserV4() {
    this._insideUserV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideUserV4Input() {
    return this._insideUserV4;
  }

  // inside_user_v6 - computed: false, optional: true, required: false
  private _insideUserV6?: string; 
  public get insideUserV6() {
    return this.getStringAttribute('inside_user_v6');
  }
  public set insideUserV6(value: string) {
    this._insideUserV6 = value;
  }
  public resetInsideUserV6() {
    this._insideUserV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideUserV6Input() {
    return this._insideUserV6;
  }

  // nat_ip - computed: false, optional: true, required: false
  private _natIp?: string; 
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }
  public set natIp(value: string) {
    this._natIp = value;
  }
  public resetNatIp() {
    this._natIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpInput() {
    return this._natIp;
  }

  // nat_port - computed: false, optional: true, required: false
  private _natPort?: number; 
  public get natPort() {
    return this.getNumberAttribute('nat_port');
  }
  public set natPort(value: number) {
    this._natPort = value;
  }
  public resetNatPort() {
    this._natPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortInput() {
    return this._natPort;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // mapping_list - computed: false, optional: true, required: false
  private _mappingList = new DataThunderCgnv6FixedNatPortMappingOperOperMappingListStructList(this, "mapping_list", false);
  public get mappingList() {
    return this._mappingList;
  }
  public putMappingList(value: DataThunderCgnv6FixedNatPortMappingOperOperMappingListStruct[] | cdktf.IResolvable) {
    this._mappingList.internalValue = value;
  }
  public resetMappingList() {
    this._mappingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingListInput() {
    return this._mappingList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper thunder_cgnv6_fixed_nat_port_mapping_oper}
*/
export class DataThunderCgnv6FixedNatPortMappingOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_port_mapping_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6FixedNatPortMappingOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6FixedNatPortMappingOper to import
  * @param importFromId The id of the existing DataThunderCgnv6FixedNatPortMappingOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6FixedNatPortMappingOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_port_mapping_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_oper thunder_cgnv6_fixed_nat_port_mapping_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6FixedNatPortMappingOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6FixedNatPortMappingOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_port_mapping_oper',
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
  private _oper = new DataThunderCgnv6FixedNatPortMappingOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6FixedNatPortMappingOperOper) {
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
      oper: dataThunderCgnv6FixedNatPortMappingOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6FixedNatPortMappingOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6FixedNatPortMappingOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
