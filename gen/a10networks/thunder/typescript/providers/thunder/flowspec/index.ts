// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowspecConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'ip': IPv4 Address; 'ipv6': IPv6 Address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#dest_addr_type Flowspec#dest_addr_type}
  */
  readonly destAddrType?: string;
  /**
  * IPv4 host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#dest_ip_host Flowspec#dest_ip_host}
  */
  readonly destIpHost?: string;
  /**
  * IPv4 Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#dest_ip_subnet Flowspec#dest_ip_subnet}
  */
  readonly destIpSubnet?: string;
  /**
  * IPv6 host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#dest_ipv6_host Flowspec#dest_ipv6_host}
  */
  readonly destIpv6Host?: string;
  /**
  * IPv6 Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#dest_ipv6_subnet Flowspec#dest_ipv6_subnet}
  */
  readonly destIpv6Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#id Flowspec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flowspec name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#name Flowspec#name}
  */
  readonly name: string;
  /**
  * 'ip': IPv4 Address; 'ipv6': IPv6 Address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#src_addr_type Flowspec#src_addr_type}
  */
  readonly srcAddrType?: string;
  /**
  * IPv4 host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#src_ip_host Flowspec#src_ip_host}
  */
  readonly srcIpHost?: string;
  /**
  * IPv4 Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#src_ip_subnet Flowspec#src_ip_subnet}
  */
  readonly srcIpSubnet?: string;
  /**
  * IPv6 host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#src_ipv6_host Flowspec#src_ipv6_host}
  */
  readonly srcIpv6Host?: string;
  /**
  * IPv6 Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#src_ipv6_subnet Flowspec#src_ipv6_subnet}
  */
  readonly srcIpv6Subnet?: string;
  /**
  * 'match-all': not = 0 match = 1; 'none-of': not = 1 match = 0; 'not-match': not = 1 match = 1; 'match-any': not = 0 match = 0;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#tcp_flags Flowspec#tcp_flags}
  */
  readonly tcpFlags?: string;
  /**
  * Bitmask in Hex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#tcp_flags_bitmask Flowspec#tcp_flags_bitmask}
  */
  readonly tcpFlagsBitmask?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#user_tag Flowspec#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#uuid Flowspec#uuid}
  */
  readonly uuid?: string;
  /**
  * destination_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#destination_port_list Flowspec#destination_port_list}
  */
  readonly destinationPortList?: FlowspecDestinationPortListStruct[] | cdktf.IResolvable;
  /**
  * dscp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#dscp_list Flowspec#dscp_list}
  */
  readonly dscpList?: FlowspecDscpListStruct[] | cdktf.IResolvable;
  /**
  * filtering_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#filtering_action Flowspec#filtering_action}
  */
  readonly filteringAction?: FlowspecFilteringAction;
  /**
  * fragmentation_option_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#fragmentation_option_list Flowspec#fragmentation_option_list}
  */
  readonly fragmentationOptionList?: FlowspecFragmentationOptionListStruct[] | cdktf.IResolvable;
  /**
  * icmp_code_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#icmp_code_list Flowspec#icmp_code_list}
  */
  readonly icmpCodeList?: FlowspecIcmpCodeListStruct[] | cdktf.IResolvable;
  /**
  * icmp_type_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#icmp_type_list Flowspec#icmp_type_list}
  */
  readonly icmpTypeList?: FlowspecIcmpTypeListStruct[] | cdktf.IResolvable;
  /**
  * operational_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#operational_mode Flowspec#operational_mode}
  */
  readonly operationalMode?: FlowspecOperationalMode;
  /**
  * packet_length_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#packet_length_list Flowspec#packet_length_list}
  */
  readonly packetLengthList?: FlowspecPacketLengthListStruct[] | cdktf.IResolvable;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#port_list Flowspec#port_list}
  */
  readonly portList?: FlowspecPortListStruct[] | cdktf.IResolvable;
  /**
  * protocol_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#protocol_list Flowspec#protocol_list}
  */
  readonly protocolList?: FlowspecProtocolListStruct[] | cdktf.IResolvable;
  /**
  * source_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#source_port_list Flowspec#source_port_list}
  */
  readonly sourcePortList?: FlowspecSourcePortListStruct[] | cdktf.IResolvable;
}
export interface FlowspecDestinationPortListStruct {
  /**
  * 'eq': Match only packets on a given destination port; 'gt': Match only packets with a greater port number; 'lt': Match only packets with a lower port number; 'range': match only packets in the range of port numbers;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#port_attribute Flowspec#port_attribute}
  */
  readonly portAttribute: string;
  /**
  * Specify the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#port_num Flowspec#port_num}
  */
  readonly portNum: number;
  /**
  * Specify the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#port_num_end Flowspec#port_num_end}
  */
  readonly portNumEnd: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#uuid Flowspec#uuid}
  */
  readonly uuid?: string;
}

export function flowspecDestinationPortListStructToTerraform(struct?: FlowspecDestinationPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_attribute: cdktf.stringToTerraform(struct!.portAttribute),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    port_num_end: cdktf.numberToTerraform(struct!.portNumEnd),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function flowspecDestinationPortListStructToHclTerraform(struct?: FlowspecDestinationPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_attribute: {
      value: cdktf.stringToHclTerraform(struct!.portAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_num_end: {
      value: cdktf.numberToHclTerraform(struct!.portNumEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowspecDestinationPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowspecDestinationPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.portAttribute = this._portAttribute;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._portNumEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumEnd = this._portNumEnd;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowspecDestinationPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portAttribute = undefined;
      this._portNum = undefined;
      this._portNumEnd = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portAttribute = value.portAttribute;
      this._portNum = value.portNum;
      this._portNumEnd = value.portNumEnd;
      this._uuid = value.uuid;
    }
  }

  // port_attribute - computed: false, optional: false, required: true
  private _portAttribute?: string; 
  public get portAttribute() {
    return this.getStringAttribute('port_attribute');
  }
  public set portAttribute(value: string) {
    this._portAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portAttributeInput() {
    return this._portAttribute;
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // port_num_end - computed: false, optional: false, required: true
  private _portNumEnd?: number; 
  public get portNumEnd() {
    return this.getNumberAttribute('port_num_end');
  }
  public set portNumEnd(value: number) {
    this._portNumEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumEndInput() {
    return this._portNumEnd;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class FlowspecDestinationPortListStructList extends cdktf.ComplexList {
  public internalValue? : FlowspecDestinationPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): FlowspecDestinationPortListStructOutputReference {
    return new FlowspecDestinationPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlowspecDscpListStruct {
  /**
  * 'eq': Match only packets on a given DSCP; 'gt': Match only packets with a greater DSCP; 'lt': Match only packets with a lower DSCP; 'range': match only packets in the range of DSCPs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#dscp_attribute Flowspec#dscp_attribute}
  */
  readonly dscpAttribute: string;
  /**
  * Specify the DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#dscp_val Flowspec#dscp_val}
  */
  readonly dscpVal: number;
  /**
  * Specify the DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#dscp_val_end Flowspec#dscp_val_end}
  */
  readonly dscpValEnd: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#uuid Flowspec#uuid}
  */
  readonly uuid?: string;
}

export function flowspecDscpListStructToTerraform(struct?: FlowspecDscpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp_attribute: cdktf.stringToTerraform(struct!.dscpAttribute),
    dscp_val: cdktf.numberToTerraform(struct!.dscpVal),
    dscp_val_end: cdktf.numberToTerraform(struct!.dscpValEnd),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function flowspecDscpListStructToHclTerraform(struct?: FlowspecDscpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp_attribute: {
      value: cdktf.stringToHclTerraform(struct!.dscpAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_val: {
      value: cdktf.numberToHclTerraform(struct!.dscpVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp_val_end: {
      value: cdktf.numberToHclTerraform(struct!.dscpValEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowspecDscpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowspecDscpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscpAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpAttribute = this._dscpAttribute;
    }
    if (this._dscpVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpVal = this._dscpVal;
    }
    if (this._dscpValEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValEnd = this._dscpValEnd;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowspecDscpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dscpAttribute = undefined;
      this._dscpVal = undefined;
      this._dscpValEnd = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dscpAttribute = value.dscpAttribute;
      this._dscpVal = value.dscpVal;
      this._dscpValEnd = value.dscpValEnd;
      this._uuid = value.uuid;
    }
  }

  // dscp_attribute - computed: false, optional: false, required: true
  private _dscpAttribute?: string; 
  public get dscpAttribute() {
    return this.getStringAttribute('dscp_attribute');
  }
  public set dscpAttribute(value: string) {
    this._dscpAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpAttributeInput() {
    return this._dscpAttribute;
  }

  // dscp_val - computed: false, optional: false, required: true
  private _dscpVal?: number; 
  public get dscpVal() {
    return this.getNumberAttribute('dscp_val');
  }
  public set dscpVal(value: number) {
    this._dscpVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValInput() {
    return this._dscpVal;
  }

  // dscp_val_end - computed: false, optional: false, required: true
  private _dscpValEnd?: number; 
  public get dscpValEnd() {
    return this.getNumberAttribute('dscp_val_end');
  }
  public set dscpValEnd(value: number) {
    this._dscpValEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValEndInput() {
    return this._dscpValEnd;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class FlowspecDscpListStructList extends cdktf.ComplexList {
  public internalValue? : FlowspecDscpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FlowspecDscpListStructOutputReference {
    return new FlowspecDscpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlowspecFilteringAction {
  /**
  * Copy bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#copy_ip_host Flowspec#copy_ip_host}
  */
  readonly copyIpHost?: number;
  /**
  * Copy bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#copy_ip_host_nlri Flowspec#copy_ip_host_nlri}
  */
  readonly copyIpHostNlri?: number;
  /**
  * Copy bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#copy_ipv6_host Flowspec#copy_ipv6_host}
  */
  readonly copyIpv6Host?: number;
  /**
  * Copy bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#copy_ipv6_host_nlri Flowspec#copy_ipv6_host_nlri}
  */
  readonly copyIpv6HostNlri?: number;
  /**
  * Set DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#dscp_val Flowspec#dscp_val}
  */
  readonly dscpVal?: number;
  /**
  * Custom Extended Community in Hex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#ecomm_custom_hex Flowspec#ecomm_custom_hex}
  */
  readonly ecommCustomHex?: string;
  /**
  * IPv4 host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#ip_host Flowspec#ip_host}
  */
  readonly ipHost?: string;
  /**
  * IPv4 host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#ip_host_nlri Flowspec#ip_host_nlri}
  */
  readonly ipHostNlri?: string;
  /**
  * Type 0x8108 - Route Target IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#ip_host_rt Flowspec#ip_host_rt}
  */
  readonly ipHostRt?: string;
  /**
  * IPv6 host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#ipv6_host Flowspec#ipv6_host}
  */
  readonly ipv6Host?: string;
  /**
  * IPv6 host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#ipv6_host_nlri Flowspec#ipv6_host_nlri}
  */
  readonly ipv6HostNlri?: string;
  /**
  * 'ip': Type 0x0800 - IPv4 Address; 'ipv6': Type 0x0800 - IPv6 Address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#next_hop_nlri_type Flowspec#next_hop_nlri_type}
  */
  readonly nextHopNlriType?: string;
  /**
  * 'ip': Type 0x0800 - IPv4 Address; 'ipv6': Type 0x0800 - IPv6 Address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#next_hop_type Flowspec#next_hop_type}
  */
  readonly nextHopType?: string;
  /**
  * 'next-hop-nlri': Type 0x0800 - IP encoded in MP_REACH_NLRI Next-hop network; 'next-hop': Type 0x0800 - Extended community Next-hop (Per v2 dated Feb 2015); 'vrf-route-target': Type 0x8008 - Redirect to VRF Route Target;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#redirect Flowspec#redirect}
  */
  readonly redirect?: string;
  /**
  * Enable traffic sampling and logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#sample_log Flowspec#sample_log}
  */
  readonly sampleLog?: number;
  /**
  * Evaluation stops after this rule if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#terminal_action Flowspec#terminal_action}
  */
  readonly terminalAction?: number;
  /**
  * Set IPv6 Traffic Class value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#traffic_class Flowspec#traffic_class}
  */
  readonly trafficClass?: number;
  /**
  * 'dscp': IPv4 DSCP; 'ipv6-traffic-class': IPv6 Traffic Class;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#traffic_marking Flowspec#traffic_marking}
  */
  readonly trafficMarking?: string;
  /**
  * Type 0x8006 - Apply rate (in Bytes per second) for this class of traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#traffic_rate Flowspec#traffic_rate}
  */
  readonly trafficRate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#uuid Flowspec#uuid}
  */
  readonly uuid?: string;
  /**
  * 2-byte decimal value(local-administrator)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#value_ip_host Flowspec#value_ip_host}
  */
  readonly valueIpHost?: number;
  /**
  * 'ip': Type 0x8108 - Redirect to route-target IP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#vrf_target_ip Flowspec#vrf_target_ip}
  */
  readonly vrfTargetIp?: string;
  /**
  * Type 0x8008(ASN-2:Index), 0x8208(ASN-4:Index) - Route Target AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#vrf_target_string Flowspec#vrf_target_string}
  */
  readonly vrfTargetString?: string;
}

export function flowspecFilteringActionToTerraform(struct?: FlowspecFilteringActionOutputReference | FlowspecFilteringAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_ip_host: cdktf.numberToTerraform(struct!.copyIpHost),
    copy_ip_host_nlri: cdktf.numberToTerraform(struct!.copyIpHostNlri),
    copy_ipv6_host: cdktf.numberToTerraform(struct!.copyIpv6Host),
    copy_ipv6_host_nlri: cdktf.numberToTerraform(struct!.copyIpv6HostNlri),
    dscp_val: cdktf.numberToTerraform(struct!.dscpVal),
    ecomm_custom_hex: cdktf.stringToTerraform(struct!.ecommCustomHex),
    ip_host: cdktf.stringToTerraform(struct!.ipHost),
    ip_host_nlri: cdktf.stringToTerraform(struct!.ipHostNlri),
    ip_host_rt: cdktf.stringToTerraform(struct!.ipHostRt),
    ipv6_host: cdktf.stringToTerraform(struct!.ipv6Host),
    ipv6_host_nlri: cdktf.stringToTerraform(struct!.ipv6HostNlri),
    next_hop_nlri_type: cdktf.stringToTerraform(struct!.nextHopNlriType),
    next_hop_type: cdktf.stringToTerraform(struct!.nextHopType),
    redirect: cdktf.stringToTerraform(struct!.redirect),
    sample_log: cdktf.numberToTerraform(struct!.sampleLog),
    terminal_action: cdktf.numberToTerraform(struct!.terminalAction),
    traffic_class: cdktf.numberToTerraform(struct!.trafficClass),
    traffic_marking: cdktf.stringToTerraform(struct!.trafficMarking),
    traffic_rate: cdktf.numberToTerraform(struct!.trafficRate),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value_ip_host: cdktf.numberToTerraform(struct!.valueIpHost),
    vrf_target_ip: cdktf.stringToTerraform(struct!.vrfTargetIp),
    vrf_target_string: cdktf.stringToTerraform(struct!.vrfTargetString),
  }
}


export function flowspecFilteringActionToHclTerraform(struct?: FlowspecFilteringActionOutputReference | FlowspecFilteringAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_ip_host: {
      value: cdktf.numberToHclTerraform(struct!.copyIpHost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    copy_ip_host_nlri: {
      value: cdktf.numberToHclTerraform(struct!.copyIpHostNlri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    copy_ipv6_host: {
      value: cdktf.numberToHclTerraform(struct!.copyIpv6Host),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    copy_ipv6_host_nlri: {
      value: cdktf.numberToHclTerraform(struct!.copyIpv6HostNlri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp_val: {
      value: cdktf.numberToHclTerraform(struct!.dscpVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ecomm_custom_hex: {
      value: cdktf.stringToHclTerraform(struct!.ecommCustomHex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_host: {
      value: cdktf.stringToHclTerraform(struct!.ipHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_host_nlri: {
      value: cdktf.stringToHclTerraform(struct!.ipHostNlri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_host_rt: {
      value: cdktf.stringToHclTerraform(struct!.ipHostRt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_host_nlri: {
      value: cdktf.stringToHclTerraform(struct!.ipv6HostNlri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_nlri_type: {
      value: cdktf.stringToHclTerraform(struct!.nextHopNlriType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_type: {
      value: cdktf.stringToHclTerraform(struct!.nextHopType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect: {
      value: cdktf.stringToHclTerraform(struct!.redirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_log: {
      value: cdktf.numberToHclTerraform(struct!.sampleLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    terminal_action: {
      value: cdktf.numberToHclTerraform(struct!.terminalAction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_class: {
      value: cdktf.numberToHclTerraform(struct!.trafficClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_marking: {
      value: cdktf.stringToHclTerraform(struct!.trafficMarking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_rate: {
      value: cdktf.numberToHclTerraform(struct!.trafficRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_ip_host: {
      value: cdktf.numberToHclTerraform(struct!.valueIpHost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrf_target_ip: {
      value: cdktf.stringToHclTerraform(struct!.vrfTargetIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_target_string: {
      value: cdktf.stringToHclTerraform(struct!.vrfTargetString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowspecFilteringActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlowspecFilteringAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyIpHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyIpHost = this._copyIpHost;
    }
    if (this._copyIpHostNlri !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyIpHostNlri = this._copyIpHostNlri;
    }
    if (this._copyIpv6Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyIpv6Host = this._copyIpv6Host;
    }
    if (this._copyIpv6HostNlri !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyIpv6HostNlri = this._copyIpv6HostNlri;
    }
    if (this._dscpVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpVal = this._dscpVal;
    }
    if (this._ecommCustomHex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecommCustomHex = this._ecommCustomHex;
    }
    if (this._ipHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipHost = this._ipHost;
    }
    if (this._ipHostNlri !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipHostNlri = this._ipHostNlri;
    }
    if (this._ipHostRt !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipHostRt = this._ipHostRt;
    }
    if (this._ipv6Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Host = this._ipv6Host;
    }
    if (this._ipv6HostNlri !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6HostNlri = this._ipv6HostNlri;
    }
    if (this._nextHopNlriType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopNlriType = this._nextHopNlriType;
    }
    if (this._nextHopType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopType = this._nextHopType;
    }
    if (this._redirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect;
    }
    if (this._sampleLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleLog = this._sampleLog;
    }
    if (this._terminalAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminalAction = this._terminalAction;
    }
    if (this._trafficClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClass = this._trafficClass;
    }
    if (this._trafficMarking !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficMarking = this._trafficMarking;
    }
    if (this._trafficRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficRate = this._trafficRate;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._valueIpHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueIpHost = this._valueIpHost;
    }
    if (this._vrfTargetIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfTargetIp = this._vrfTargetIp;
    }
    if (this._vrfTargetString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfTargetString = this._vrfTargetString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowspecFilteringAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._copyIpHost = undefined;
      this._copyIpHostNlri = undefined;
      this._copyIpv6Host = undefined;
      this._copyIpv6HostNlri = undefined;
      this._dscpVal = undefined;
      this._ecommCustomHex = undefined;
      this._ipHost = undefined;
      this._ipHostNlri = undefined;
      this._ipHostRt = undefined;
      this._ipv6Host = undefined;
      this._ipv6HostNlri = undefined;
      this._nextHopNlriType = undefined;
      this._nextHopType = undefined;
      this._redirect = undefined;
      this._sampleLog = undefined;
      this._terminalAction = undefined;
      this._trafficClass = undefined;
      this._trafficMarking = undefined;
      this._trafficRate = undefined;
      this._uuid = undefined;
      this._valueIpHost = undefined;
      this._vrfTargetIp = undefined;
      this._vrfTargetString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._copyIpHost = value.copyIpHost;
      this._copyIpHostNlri = value.copyIpHostNlri;
      this._copyIpv6Host = value.copyIpv6Host;
      this._copyIpv6HostNlri = value.copyIpv6HostNlri;
      this._dscpVal = value.dscpVal;
      this._ecommCustomHex = value.ecommCustomHex;
      this._ipHost = value.ipHost;
      this._ipHostNlri = value.ipHostNlri;
      this._ipHostRt = value.ipHostRt;
      this._ipv6Host = value.ipv6Host;
      this._ipv6HostNlri = value.ipv6HostNlri;
      this._nextHopNlriType = value.nextHopNlriType;
      this._nextHopType = value.nextHopType;
      this._redirect = value.redirect;
      this._sampleLog = value.sampleLog;
      this._terminalAction = value.terminalAction;
      this._trafficClass = value.trafficClass;
      this._trafficMarking = value.trafficMarking;
      this._trafficRate = value.trafficRate;
      this._uuid = value.uuid;
      this._valueIpHost = value.valueIpHost;
      this._vrfTargetIp = value.vrfTargetIp;
      this._vrfTargetString = value.vrfTargetString;
    }
  }

  // copy_ip_host - computed: false, optional: true, required: false
  private _copyIpHost?: number; 
  public get copyIpHost() {
    return this.getNumberAttribute('copy_ip_host');
  }
  public set copyIpHost(value: number) {
    this._copyIpHost = value;
  }
  public resetCopyIpHost() {
    this._copyIpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIpHostInput() {
    return this._copyIpHost;
  }

  // copy_ip_host_nlri - computed: false, optional: true, required: false
  private _copyIpHostNlri?: number; 
  public get copyIpHostNlri() {
    return this.getNumberAttribute('copy_ip_host_nlri');
  }
  public set copyIpHostNlri(value: number) {
    this._copyIpHostNlri = value;
  }
  public resetCopyIpHostNlri() {
    this._copyIpHostNlri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIpHostNlriInput() {
    return this._copyIpHostNlri;
  }

  // copy_ipv6_host - computed: false, optional: true, required: false
  private _copyIpv6Host?: number; 
  public get copyIpv6Host() {
    return this.getNumberAttribute('copy_ipv6_host');
  }
  public set copyIpv6Host(value: number) {
    this._copyIpv6Host = value;
  }
  public resetCopyIpv6Host() {
    this._copyIpv6Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIpv6HostInput() {
    return this._copyIpv6Host;
  }

  // copy_ipv6_host_nlri - computed: false, optional: true, required: false
  private _copyIpv6HostNlri?: number; 
  public get copyIpv6HostNlri() {
    return this.getNumberAttribute('copy_ipv6_host_nlri');
  }
  public set copyIpv6HostNlri(value: number) {
    this._copyIpv6HostNlri = value;
  }
  public resetCopyIpv6HostNlri() {
    this._copyIpv6HostNlri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIpv6HostNlriInput() {
    return this._copyIpv6HostNlri;
  }

  // dscp_val - computed: false, optional: true, required: false
  private _dscpVal?: number; 
  public get dscpVal() {
    return this.getNumberAttribute('dscp_val');
  }
  public set dscpVal(value: number) {
    this._dscpVal = value;
  }
  public resetDscpVal() {
    this._dscpVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValInput() {
    return this._dscpVal;
  }

  // ecomm_custom_hex - computed: false, optional: true, required: false
  private _ecommCustomHex?: string; 
  public get ecommCustomHex() {
    return this.getStringAttribute('ecomm_custom_hex');
  }
  public set ecommCustomHex(value: string) {
    this._ecommCustomHex = value;
  }
  public resetEcommCustomHex() {
    this._ecommCustomHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecommCustomHexInput() {
    return this._ecommCustomHex;
  }

  // ip_host - computed: false, optional: true, required: false
  private _ipHost?: string; 
  public get ipHost() {
    return this.getStringAttribute('ip_host');
  }
  public set ipHost(value: string) {
    this._ipHost = value;
  }
  public resetIpHost() {
    this._ipHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHostInput() {
    return this._ipHost;
  }

  // ip_host_nlri - computed: false, optional: true, required: false
  private _ipHostNlri?: string; 
  public get ipHostNlri() {
    return this.getStringAttribute('ip_host_nlri');
  }
  public set ipHostNlri(value: string) {
    this._ipHostNlri = value;
  }
  public resetIpHostNlri() {
    this._ipHostNlri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHostNlriInput() {
    return this._ipHostNlri;
  }

  // ip_host_rt - computed: false, optional: true, required: false
  private _ipHostRt?: string; 
  public get ipHostRt() {
    return this.getStringAttribute('ip_host_rt');
  }
  public set ipHostRt(value: string) {
    this._ipHostRt = value;
  }
  public resetIpHostRt() {
    this._ipHostRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHostRtInput() {
    return this._ipHostRt;
  }

  // ipv6_host - computed: false, optional: true, required: false
  private _ipv6Host?: string; 
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }
  public set ipv6Host(value: string) {
    this._ipv6Host = value;
  }
  public resetIpv6Host() {
    this._ipv6Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostInput() {
    return this._ipv6Host;
  }

  // ipv6_host_nlri - computed: false, optional: true, required: false
  private _ipv6HostNlri?: string; 
  public get ipv6HostNlri() {
    return this.getStringAttribute('ipv6_host_nlri');
  }
  public set ipv6HostNlri(value: string) {
    this._ipv6HostNlri = value;
  }
  public resetIpv6HostNlri() {
    this._ipv6HostNlri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostNlriInput() {
    return this._ipv6HostNlri;
  }

  // next_hop_nlri_type - computed: false, optional: true, required: false
  private _nextHopNlriType?: string; 
  public get nextHopNlriType() {
    return this.getStringAttribute('next_hop_nlri_type');
  }
  public set nextHopNlriType(value: string) {
    this._nextHopNlriType = value;
  }
  public resetNextHopNlriType() {
    this._nextHopNlriType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopNlriTypeInput() {
    return this._nextHopNlriType;
  }

  // next_hop_type - computed: false, optional: true, required: false
  private _nextHopType?: string; 
  public get nextHopType() {
    return this.getStringAttribute('next_hop_type');
  }
  public set nextHopType(value: string) {
    this._nextHopType = value;
  }
  public resetNextHopType() {
    this._nextHopType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopTypeInput() {
    return this._nextHopType;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect?: string; 
  public get redirect() {
    return this.getStringAttribute('redirect');
  }
  public set redirect(value: string) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // sample_log - computed: false, optional: true, required: false
  private _sampleLog?: number; 
  public get sampleLog() {
    return this.getNumberAttribute('sample_log');
  }
  public set sampleLog(value: number) {
    this._sampleLog = value;
  }
  public resetSampleLog() {
    this._sampleLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleLogInput() {
    return this._sampleLog;
  }

  // terminal_action - computed: false, optional: true, required: false
  private _terminalAction?: number; 
  public get terminalAction() {
    return this.getNumberAttribute('terminal_action');
  }
  public set terminalAction(value: number) {
    this._terminalAction = value;
  }
  public resetTerminalAction() {
    this._terminalAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalActionInput() {
    return this._terminalAction;
  }

  // traffic_class - computed: false, optional: true, required: false
  private _trafficClass?: number; 
  public get trafficClass() {
    return this.getNumberAttribute('traffic_class');
  }
  public set trafficClass(value: number) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
  }

  // traffic_marking - computed: false, optional: true, required: false
  private _trafficMarking?: string; 
  public get trafficMarking() {
    return this.getStringAttribute('traffic_marking');
  }
  public set trafficMarking(value: string) {
    this._trafficMarking = value;
  }
  public resetTrafficMarking() {
    this._trafficMarking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMarkingInput() {
    return this._trafficMarking;
  }

  // traffic_rate - computed: false, optional: true, required: false
  private _trafficRate?: number; 
  public get trafficRate() {
    return this.getNumberAttribute('traffic_rate');
  }
  public set trafficRate(value: number) {
    this._trafficRate = value;
  }
  public resetTrafficRate() {
    this._trafficRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRateInput() {
    return this._trafficRate;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // value_ip_host - computed: false, optional: true, required: false
  private _valueIpHost?: number; 
  public get valueIpHost() {
    return this.getNumberAttribute('value_ip_host');
  }
  public set valueIpHost(value: number) {
    this._valueIpHost = value;
  }
  public resetValueIpHost() {
    this._valueIpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueIpHostInput() {
    return this._valueIpHost;
  }

  // vrf_target_ip - computed: false, optional: true, required: false
  private _vrfTargetIp?: string; 
  public get vrfTargetIp() {
    return this.getStringAttribute('vrf_target_ip');
  }
  public set vrfTargetIp(value: string) {
    this._vrfTargetIp = value;
  }
  public resetVrfTargetIp() {
    this._vrfTargetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTargetIpInput() {
    return this._vrfTargetIp;
  }

  // vrf_target_string - computed: false, optional: true, required: false
  private _vrfTargetString?: string; 
  public get vrfTargetString() {
    return this.getStringAttribute('vrf_target_string');
  }
  public set vrfTargetString(value: string) {
    this._vrfTargetString = value;
  }
  public resetVrfTargetString() {
    this._vrfTargetString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTargetStringInput() {
    return this._vrfTargetString;
  }
}
export interface FlowspecFragmentationOptionListStruct {
  /**
  * 'is-fragment': Is fragmented packet; 'first-fragment': Is the first fragment packet; 'last-fragment': Is the last fragment; 'dont-fragment': Is DF bit set;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#frag_attribute Flowspec#frag_attribute}
  */
  readonly fragAttribute: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#uuid Flowspec#uuid}
  */
  readonly uuid?: string;
}

export function flowspecFragmentationOptionListStructToTerraform(struct?: FlowspecFragmentationOptionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frag_attribute: cdktf.stringToTerraform(struct!.fragAttribute),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function flowspecFragmentationOptionListStructToHclTerraform(struct?: FlowspecFragmentationOptionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frag_attribute: {
      value: cdktf.stringToHclTerraform(struct!.fragAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowspecFragmentationOptionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowspecFragmentationOptionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fragAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragAttribute = this._fragAttribute;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowspecFragmentationOptionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fragAttribute = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fragAttribute = value.fragAttribute;
      this._uuid = value.uuid;
    }
  }

  // frag_attribute - computed: false, optional: false, required: true
  private _fragAttribute?: string; 
  public get fragAttribute() {
    return this.getStringAttribute('frag_attribute');
  }
  public set fragAttribute(value: string) {
    this._fragAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fragAttributeInput() {
    return this._fragAttribute;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class FlowspecFragmentationOptionListStructList extends cdktf.ComplexList {
  public internalValue? : FlowspecFragmentationOptionListStruct[] | cdktf.IResolvable

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
  public get(index: number): FlowspecFragmentationOptionListStructOutputReference {
    return new FlowspecFragmentationOptionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlowspecIcmpCodeListStruct {
  /**
  * Specify the ICMP Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#code Flowspec#code}
  */
  readonly code: number;
  /**
  * Specify the ICMP Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#code_end Flowspec#code_end}
  */
  readonly codeEnd: number;
  /**
  * 'eq': Match only packets on a given ICMP Code; 'gt': Match only packets with a greater ICMP Code; 'lt': Match only packets with a lower ICMP Code; 'range': match only packets in the range of ICMP Codes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#icmp_code_attribute Flowspec#icmp_code_attribute}
  */
  readonly icmpCodeAttribute: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#uuid Flowspec#uuid}
  */
  readonly uuid?: string;
}

export function flowspecIcmpCodeListStructToTerraform(struct?: FlowspecIcmpCodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    code_end: cdktf.numberToTerraform(struct!.codeEnd),
    icmp_code_attribute: cdktf.stringToTerraform(struct!.icmpCodeAttribute),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function flowspecIcmpCodeListStructToHclTerraform(struct?: FlowspecIcmpCodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_end: {
      value: cdktf.numberToHclTerraform(struct!.codeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_code_attribute: {
      value: cdktf.stringToHclTerraform(struct!.icmpCodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowspecIcmpCodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowspecIcmpCodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._codeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeEnd = this._codeEnd;
    }
    if (this._icmpCodeAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCodeAttribute = this._icmpCodeAttribute;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowspecIcmpCodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._codeEnd = undefined;
      this._icmpCodeAttribute = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._codeEnd = value.codeEnd;
      this._icmpCodeAttribute = value.icmpCodeAttribute;
      this._uuid = value.uuid;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // code_end - computed: false, optional: false, required: true
  private _codeEnd?: number; 
  public get codeEnd() {
    return this.getNumberAttribute('code_end');
  }
  public set codeEnd(value: number) {
    this._codeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEndInput() {
    return this._codeEnd;
  }

  // icmp_code_attribute - computed: false, optional: false, required: true
  private _icmpCodeAttribute?: string; 
  public get icmpCodeAttribute() {
    return this.getStringAttribute('icmp_code_attribute');
  }
  public set icmpCodeAttribute(value: string) {
    this._icmpCodeAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeAttributeInput() {
    return this._icmpCodeAttribute;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class FlowspecIcmpCodeListStructList extends cdktf.ComplexList {
  public internalValue? : FlowspecIcmpCodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): FlowspecIcmpCodeListStructOutputReference {
    return new FlowspecIcmpCodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlowspecIcmpTypeListStruct {
  /**
  * 'eq': Match only packets on a given ICMP Type; 'gt': Match only packets with a greater ICMP Type; 'lt': Match only packets with a lower ICMP Type; 'range': match only packets in the range of ICMP Types;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#icmp_type_attribute Flowspec#icmp_type_attribute}
  */
  readonly icmpTypeAttribute: string;
  /**
  * Specify the ICMP Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#type Flowspec#type}
  */
  readonly type: number;
  /**
  * Specify the ICMP Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#type_end Flowspec#type_end}
  */
  readonly typeEnd: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#uuid Flowspec#uuid}
  */
  readonly uuid?: string;
}

export function flowspecIcmpTypeListStructToTerraform(struct?: FlowspecIcmpTypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_type_attribute: cdktf.stringToTerraform(struct!.icmpTypeAttribute),
    type: cdktf.numberToTerraform(struct!.type),
    type_end: cdktf.numberToTerraform(struct!.typeEnd),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function flowspecIcmpTypeListStructToHclTerraform(struct?: FlowspecIcmpTypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_type_attribute: {
      value: cdktf.stringToHclTerraform(struct!.icmpTypeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_end: {
      value: cdktf.numberToHclTerraform(struct!.typeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowspecIcmpTypeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowspecIcmpTypeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpTypeAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeAttribute = this._icmpTypeAttribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeEnd = this._typeEnd;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowspecIcmpTypeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpTypeAttribute = undefined;
      this._type = undefined;
      this._typeEnd = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpTypeAttribute = value.icmpTypeAttribute;
      this._type = value.type;
      this._typeEnd = value.typeEnd;
      this._uuid = value.uuid;
    }
  }

  // icmp_type_attribute - computed: false, optional: false, required: true
  private _icmpTypeAttribute?: string; 
  public get icmpTypeAttribute() {
    return this.getStringAttribute('icmp_type_attribute');
  }
  public set icmpTypeAttribute(value: string) {
    this._icmpTypeAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeAttributeInput() {
    return this._icmpTypeAttribute;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_end - computed: false, optional: false, required: true
  private _typeEnd?: number; 
  public get typeEnd() {
    return this.getNumberAttribute('type_end');
  }
  public set typeEnd(value: number) {
    this._typeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEndInput() {
    return this._typeEnd;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class FlowspecIcmpTypeListStructList extends cdktf.ComplexList {
  public internalValue? : FlowspecIcmpTypeListStruct[] | cdktf.IResolvable

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
  public get(index: number): FlowspecIcmpTypeListStructOutputReference {
    return new FlowspecIcmpTypeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlowspecOperationalMode {
  /**
  * 'enabled': Enable the flowspec and send the prefix to BGP; 'disabled': Disable the flowspec and remove the prefix from BGP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#mode Flowspec#mode}
  */
  readonly mode?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#uuid Flowspec#uuid}
  */
  readonly uuid?: string;
}

export function flowspecOperationalModeToTerraform(struct?: FlowspecOperationalModeOutputReference | FlowspecOperationalMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function flowspecOperationalModeToHclTerraform(struct?: FlowspecOperationalModeOutputReference | FlowspecOperationalMode): any {
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowspecOperationalModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlowspecOperationalMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowspecOperationalMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._uuid = value.uuid;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FlowspecPacketLengthListStruct {
  /**
  * Specify the Packet Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#length Flowspec#length}
  */
  readonly length: number;
  /**
  * Specify the Packet Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#length_end Flowspec#length_end}
  */
  readonly lengthEnd: number;
  /**
  * 'eq': Match only packets on a given Packet Length; 'gt': Match only packets with a greater Packet Length; 'lt': Match only packets with a lower Packet Length; 'range': match only packets in the range of Packet Lengths;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#packet_length_attribute Flowspec#packet_length_attribute}
  */
  readonly packetLengthAttribute: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#uuid Flowspec#uuid}
  */
  readonly uuid?: string;
}

export function flowspecPacketLengthListStructToTerraform(struct?: FlowspecPacketLengthListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    length_end: cdktf.numberToTerraform(struct!.lengthEnd),
    packet_length_attribute: cdktf.stringToTerraform(struct!.packetLengthAttribute),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function flowspecPacketLengthListStructToHclTerraform(struct?: FlowspecPacketLengthListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length_end: {
      value: cdktf.numberToHclTerraform(struct!.lengthEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_length_attribute: {
      value: cdktf.stringToHclTerraform(struct!.packetLengthAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowspecPacketLengthListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowspecPacketLengthListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._lengthEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.lengthEnd = this._lengthEnd;
    }
    if (this._packetLengthAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLengthAttribute = this._packetLengthAttribute;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowspecPacketLengthListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._length = undefined;
      this._lengthEnd = undefined;
      this._packetLengthAttribute = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._length = value.length;
      this._lengthEnd = value.lengthEnd;
      this._packetLengthAttribute = value.packetLengthAttribute;
      this._uuid = value.uuid;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // length_end - computed: false, optional: false, required: true
  private _lengthEnd?: number; 
  public get lengthEnd() {
    return this.getNumberAttribute('length_end');
  }
  public set lengthEnd(value: number) {
    this._lengthEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthEndInput() {
    return this._lengthEnd;
  }

  // packet_length_attribute - computed: false, optional: false, required: true
  private _packetLengthAttribute?: string; 
  public get packetLengthAttribute() {
    return this.getStringAttribute('packet_length_attribute');
  }
  public set packetLengthAttribute(value: string) {
    this._packetLengthAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthAttributeInput() {
    return this._packetLengthAttribute;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class FlowspecPacketLengthListStructList extends cdktf.ComplexList {
  public internalValue? : FlowspecPacketLengthListStruct[] | cdktf.IResolvable

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
  public get(index: number): FlowspecPacketLengthListStructOutputReference {
    return new FlowspecPacketLengthListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlowspecPortListStruct {
  /**
  * 'eq': Match only packets on a given port; 'gt': Match only packets with a greater port number; 'lt': Match only packets with a lower port number; 'range': match only packets in the range of port numbers;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#port_attribute Flowspec#port_attribute}
  */
  readonly portAttribute: string;
  /**
  * Specify the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#port_num Flowspec#port_num}
  */
  readonly portNum: number;
  /**
  * Specify the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#port_num_end Flowspec#port_num_end}
  */
  readonly portNumEnd: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#uuid Flowspec#uuid}
  */
  readonly uuid?: string;
}

export function flowspecPortListStructToTerraform(struct?: FlowspecPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_attribute: cdktf.stringToTerraform(struct!.portAttribute),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    port_num_end: cdktf.numberToTerraform(struct!.portNumEnd),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function flowspecPortListStructToHclTerraform(struct?: FlowspecPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_attribute: {
      value: cdktf.stringToHclTerraform(struct!.portAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_num_end: {
      value: cdktf.numberToHclTerraform(struct!.portNumEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowspecPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowspecPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.portAttribute = this._portAttribute;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._portNumEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumEnd = this._portNumEnd;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowspecPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portAttribute = undefined;
      this._portNum = undefined;
      this._portNumEnd = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portAttribute = value.portAttribute;
      this._portNum = value.portNum;
      this._portNumEnd = value.portNumEnd;
      this._uuid = value.uuid;
    }
  }

  // port_attribute - computed: false, optional: false, required: true
  private _portAttribute?: string; 
  public get portAttribute() {
    return this.getStringAttribute('port_attribute');
  }
  public set portAttribute(value: string) {
    this._portAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portAttributeInput() {
    return this._portAttribute;
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // port_num_end - computed: false, optional: false, required: true
  private _portNumEnd?: number; 
  public get portNumEnd() {
    return this.getNumberAttribute('port_num_end');
  }
  public set portNumEnd(value: number) {
    this._portNumEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumEndInput() {
    return this._portNumEnd;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class FlowspecPortListStructList extends cdktf.ComplexList {
  public internalValue? : FlowspecPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): FlowspecPortListStructOutputReference {
    return new FlowspecPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlowspecProtocolListStruct {
  /**
  * 'eq': Match only packets on a given protocol; 'gt': Match only packets with a greater protocol number; 'lt': Match only packets with a lower protocol number; 'range': match only packets in the range of protocol numbers;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#proto_attribute Flowspec#proto_attribute}
  */
  readonly protoAttribute: string;
  /**
  * Specify the protocol number(6 for TCP and 17 for UDP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#proto_num Flowspec#proto_num}
  */
  readonly protoNum: number;
  /**
  * Specify the protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#proto_num_end Flowspec#proto_num_end}
  */
  readonly protoNumEnd: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#uuid Flowspec#uuid}
  */
  readonly uuid?: string;
}

export function flowspecProtocolListStructToTerraform(struct?: FlowspecProtocolListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proto_attribute: cdktf.stringToTerraform(struct!.protoAttribute),
    proto_num: cdktf.numberToTerraform(struct!.protoNum),
    proto_num_end: cdktf.numberToTerraform(struct!.protoNumEnd),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function flowspecProtocolListStructToHclTerraform(struct?: FlowspecProtocolListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proto_attribute: {
      value: cdktf.stringToHclTerraform(struct!.protoAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto_num: {
      value: cdktf.numberToHclTerraform(struct!.protoNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto_num_end: {
      value: cdktf.numberToHclTerraform(struct!.protoNumEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowspecProtocolListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowspecProtocolListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protoAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoAttribute = this._protoAttribute;
    }
    if (this._protoNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoNum = this._protoNum;
    }
    if (this._protoNumEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoNumEnd = this._protoNumEnd;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowspecProtocolListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protoAttribute = undefined;
      this._protoNum = undefined;
      this._protoNumEnd = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protoAttribute = value.protoAttribute;
      this._protoNum = value.protoNum;
      this._protoNumEnd = value.protoNumEnd;
      this._uuid = value.uuid;
    }
  }

  // proto_attribute - computed: false, optional: false, required: true
  private _protoAttribute?: string; 
  public get protoAttribute() {
    return this.getStringAttribute('proto_attribute');
  }
  public set protoAttribute(value: string) {
    this._protoAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoAttributeInput() {
    return this._protoAttribute;
  }

  // proto_num - computed: false, optional: false, required: true
  private _protoNum?: number; 
  public get protoNum() {
    return this.getNumberAttribute('proto_num');
  }
  public set protoNum(value: number) {
    this._protoNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoNumInput() {
    return this._protoNum;
  }

  // proto_num_end - computed: false, optional: false, required: true
  private _protoNumEnd?: number; 
  public get protoNumEnd() {
    return this.getNumberAttribute('proto_num_end');
  }
  public set protoNumEnd(value: number) {
    this._protoNumEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoNumEndInput() {
    return this._protoNumEnd;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class FlowspecProtocolListStructList extends cdktf.ComplexList {
  public internalValue? : FlowspecProtocolListStruct[] | cdktf.IResolvable

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
  public get(index: number): FlowspecProtocolListStructOutputReference {
    return new FlowspecProtocolListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlowspecSourcePortListStruct {
  /**
  * 'eq': Match only packets on a given source port; 'gt': Match only packets with a greater port number; 'lt': Match only packets with a lower port number; 'range': match only packets in the range of port numbers;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#port_attribute Flowspec#port_attribute}
  */
  readonly portAttribute: string;
  /**
  * Specify the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#port_num Flowspec#port_num}
  */
  readonly portNum: number;
  /**
  * Specify the port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#port_num_end Flowspec#port_num_end}
  */
  readonly portNumEnd: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#uuid Flowspec#uuid}
  */
  readonly uuid?: string;
}

export function flowspecSourcePortListStructToTerraform(struct?: FlowspecSourcePortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_attribute: cdktf.stringToTerraform(struct!.portAttribute),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    port_num_end: cdktf.numberToTerraform(struct!.portNumEnd),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function flowspecSourcePortListStructToHclTerraform(struct?: FlowspecSourcePortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_attribute: {
      value: cdktf.stringToHclTerraform(struct!.portAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_num_end: {
      value: cdktf.numberToHclTerraform(struct!.portNumEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowspecSourcePortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowspecSourcePortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.portAttribute = this._portAttribute;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._portNumEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumEnd = this._portNumEnd;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowspecSourcePortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portAttribute = undefined;
      this._portNum = undefined;
      this._portNumEnd = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portAttribute = value.portAttribute;
      this._portNum = value.portNum;
      this._portNumEnd = value.portNumEnd;
      this._uuid = value.uuid;
    }
  }

  // port_attribute - computed: false, optional: false, required: true
  private _portAttribute?: string; 
  public get portAttribute() {
    return this.getStringAttribute('port_attribute');
  }
  public set portAttribute(value: string) {
    this._portAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portAttributeInput() {
    return this._portAttribute;
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // port_num_end - computed: false, optional: false, required: true
  private _portNumEnd?: number; 
  public get portNumEnd() {
    return this.getNumberAttribute('port_num_end');
  }
  public set portNumEnd(value: number) {
    this._portNumEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumEndInput() {
    return this._portNumEnd;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class FlowspecSourcePortListStructList extends cdktf.ComplexList {
  public internalValue? : FlowspecSourcePortListStruct[] | cdktf.IResolvable

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
  public get(index: number): FlowspecSourcePortListStructOutputReference {
    return new FlowspecSourcePortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec thunder_flowspec}
*/
export class Flowspec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_flowspec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Flowspec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Flowspec to import
  * @param importFromId The id of the existing Flowspec that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Flowspec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_flowspec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/flowspec thunder_flowspec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowspecConfig
  */
  public constructor(scope: Construct, id: string, config: FlowspecConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_flowspec',
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
    this._destAddrType = config.destAddrType;
    this._destIpHost = config.destIpHost;
    this._destIpSubnet = config.destIpSubnet;
    this._destIpv6Host = config.destIpv6Host;
    this._destIpv6Subnet = config.destIpv6Subnet;
    this._id = config.id;
    this._name = config.name;
    this._srcAddrType = config.srcAddrType;
    this._srcIpHost = config.srcIpHost;
    this._srcIpSubnet = config.srcIpSubnet;
    this._srcIpv6Host = config.srcIpv6Host;
    this._srcIpv6Subnet = config.srcIpv6Subnet;
    this._tcpFlags = config.tcpFlags;
    this._tcpFlagsBitmask = config.tcpFlagsBitmask;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._destinationPortList.internalValue = config.destinationPortList;
    this._dscpList.internalValue = config.dscpList;
    this._filteringAction.internalValue = config.filteringAction;
    this._fragmentationOptionList.internalValue = config.fragmentationOptionList;
    this._icmpCodeList.internalValue = config.icmpCodeList;
    this._icmpTypeList.internalValue = config.icmpTypeList;
    this._operationalMode.internalValue = config.operationalMode;
    this._packetLengthList.internalValue = config.packetLengthList;
    this._portList.internalValue = config.portList;
    this._protocolList.internalValue = config.protocolList;
    this._sourcePortList.internalValue = config.sourcePortList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dest_addr_type - computed: false, optional: true, required: false
  private _destAddrType?: string; 
  public get destAddrType() {
    return this.getStringAttribute('dest_addr_type');
  }
  public set destAddrType(value: string) {
    this._destAddrType = value;
  }
  public resetDestAddrType() {
    this._destAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destAddrTypeInput() {
    return this._destAddrType;
  }

  // dest_ip_host - computed: false, optional: true, required: false
  private _destIpHost?: string; 
  public get destIpHost() {
    return this.getStringAttribute('dest_ip_host');
  }
  public set destIpHost(value: string) {
    this._destIpHost = value;
  }
  public resetDestIpHost() {
    this._destIpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpHostInput() {
    return this._destIpHost;
  }

  // dest_ip_subnet - computed: false, optional: true, required: false
  private _destIpSubnet?: string; 
  public get destIpSubnet() {
    return this.getStringAttribute('dest_ip_subnet');
  }
  public set destIpSubnet(value: string) {
    this._destIpSubnet = value;
  }
  public resetDestIpSubnet() {
    this._destIpSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpSubnetInput() {
    return this._destIpSubnet;
  }

  // dest_ipv6_host - computed: false, optional: true, required: false
  private _destIpv6Host?: string; 
  public get destIpv6Host() {
    return this.getStringAttribute('dest_ipv6_host');
  }
  public set destIpv6Host(value: string) {
    this._destIpv6Host = value;
  }
  public resetDestIpv6Host() {
    this._destIpv6Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpv6HostInput() {
    return this._destIpv6Host;
  }

  // dest_ipv6_subnet - computed: false, optional: true, required: false
  private _destIpv6Subnet?: string; 
  public get destIpv6Subnet() {
    return this.getStringAttribute('dest_ipv6_subnet');
  }
  public set destIpv6Subnet(value: string) {
    this._destIpv6Subnet = value;
  }
  public resetDestIpv6Subnet() {
    this._destIpv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpv6SubnetInput() {
    return this._destIpv6Subnet;
  }

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // src_addr_type - computed: false, optional: true, required: false
  private _srcAddrType?: string; 
  public get srcAddrType() {
    return this.getStringAttribute('src_addr_type');
  }
  public set srcAddrType(value: string) {
    this._srcAddrType = value;
  }
  public resetSrcAddrType() {
    this._srcAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddrTypeInput() {
    return this._srcAddrType;
  }

  // src_ip_host - computed: false, optional: true, required: false
  private _srcIpHost?: string; 
  public get srcIpHost() {
    return this.getStringAttribute('src_ip_host');
  }
  public set srcIpHost(value: string) {
    this._srcIpHost = value;
  }
  public resetSrcIpHost() {
    this._srcIpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpHostInput() {
    return this._srcIpHost;
  }

  // src_ip_subnet - computed: false, optional: true, required: false
  private _srcIpSubnet?: string; 
  public get srcIpSubnet() {
    return this.getStringAttribute('src_ip_subnet');
  }
  public set srcIpSubnet(value: string) {
    this._srcIpSubnet = value;
  }
  public resetSrcIpSubnet() {
    this._srcIpSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpSubnetInput() {
    return this._srcIpSubnet;
  }

  // src_ipv6_host - computed: false, optional: true, required: false
  private _srcIpv6Host?: string; 
  public get srcIpv6Host() {
    return this.getStringAttribute('src_ipv6_host');
  }
  public set srcIpv6Host(value: string) {
    this._srcIpv6Host = value;
  }
  public resetSrcIpv6Host() {
    this._srcIpv6Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6HostInput() {
    return this._srcIpv6Host;
  }

  // src_ipv6_subnet - computed: false, optional: true, required: false
  private _srcIpv6Subnet?: string; 
  public get srcIpv6Subnet() {
    return this.getStringAttribute('src_ipv6_subnet');
  }
  public set srcIpv6Subnet(value: string) {
    this._srcIpv6Subnet = value;
  }
  public resetSrcIpv6Subnet() {
    this._srcIpv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6SubnetInput() {
    return this._srcIpv6Subnet;
  }

  // tcp_flags - computed: false, optional: true, required: false
  private _tcpFlags?: string; 
  public get tcpFlags() {
    return this.getStringAttribute('tcp_flags');
  }
  public set tcpFlags(value: string) {
    this._tcpFlags = value;
  }
  public resetTcpFlags() {
    this._tcpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsInput() {
    return this._tcpFlags;
  }

  // tcp_flags_bitmask - computed: false, optional: true, required: false
  private _tcpFlagsBitmask?: string; 
  public get tcpFlagsBitmask() {
    return this.getStringAttribute('tcp_flags_bitmask');
  }
  public set tcpFlagsBitmask(value: string) {
    this._tcpFlagsBitmask = value;
  }
  public resetTcpFlagsBitmask() {
    this._tcpFlagsBitmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsBitmaskInput() {
    return this._tcpFlagsBitmask;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // destination_port_list - computed: false, optional: true, required: false
  private _destinationPortList = new FlowspecDestinationPortListStructList(this, "destination_port_list", false);
  public get destinationPortList() {
    return this._destinationPortList;
  }
  public putDestinationPortList(value: FlowspecDestinationPortListStruct[] | cdktf.IResolvable) {
    this._destinationPortList.internalValue = value;
  }
  public resetDestinationPortList() {
    this._destinationPortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortListInput() {
    return this._destinationPortList.internalValue;
  }

  // dscp_list - computed: false, optional: true, required: false
  private _dscpList = new FlowspecDscpListStructList(this, "dscp_list", false);
  public get dscpList() {
    return this._dscpList;
  }
  public putDscpList(value: FlowspecDscpListStruct[] | cdktf.IResolvable) {
    this._dscpList.internalValue = value;
  }
  public resetDscpList() {
    this._dscpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpListInput() {
    return this._dscpList.internalValue;
  }

  // filtering_action - computed: false, optional: true, required: false
  private _filteringAction = new FlowspecFilteringActionOutputReference(this, "filtering_action");
  public get filteringAction() {
    return this._filteringAction;
  }
  public putFilteringAction(value: FlowspecFilteringAction) {
    this._filteringAction.internalValue = value;
  }
  public resetFilteringAction() {
    this._filteringAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringActionInput() {
    return this._filteringAction.internalValue;
  }

  // fragmentation_option_list - computed: false, optional: true, required: false
  private _fragmentationOptionList = new FlowspecFragmentationOptionListStructList(this, "fragmentation_option_list", false);
  public get fragmentationOptionList() {
    return this._fragmentationOptionList;
  }
  public putFragmentationOptionList(value: FlowspecFragmentationOptionListStruct[] | cdktf.IResolvable) {
    this._fragmentationOptionList.internalValue = value;
  }
  public resetFragmentationOptionList() {
    this._fragmentationOptionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentationOptionListInput() {
    return this._fragmentationOptionList.internalValue;
  }

  // icmp_code_list - computed: false, optional: true, required: false
  private _icmpCodeList = new FlowspecIcmpCodeListStructList(this, "icmp_code_list", false);
  public get icmpCodeList() {
    return this._icmpCodeList;
  }
  public putIcmpCodeList(value: FlowspecIcmpCodeListStruct[] | cdktf.IResolvable) {
    this._icmpCodeList.internalValue = value;
  }
  public resetIcmpCodeList() {
    this._icmpCodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeListInput() {
    return this._icmpCodeList.internalValue;
  }

  // icmp_type_list - computed: false, optional: true, required: false
  private _icmpTypeList = new FlowspecIcmpTypeListStructList(this, "icmp_type_list", false);
  public get icmpTypeList() {
    return this._icmpTypeList;
  }
  public putIcmpTypeList(value: FlowspecIcmpTypeListStruct[] | cdktf.IResolvable) {
    this._icmpTypeList.internalValue = value;
  }
  public resetIcmpTypeList() {
    this._icmpTypeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeListInput() {
    return this._icmpTypeList.internalValue;
  }

  // operational_mode - computed: false, optional: true, required: false
  private _operationalMode = new FlowspecOperationalModeOutputReference(this, "operational_mode");
  public get operationalMode() {
    return this._operationalMode;
  }
  public putOperationalMode(value: FlowspecOperationalMode) {
    this._operationalMode.internalValue = value;
  }
  public resetOperationalMode() {
    this._operationalMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalModeInput() {
    return this._operationalMode.internalValue;
  }

  // packet_length_list - computed: false, optional: true, required: false
  private _packetLengthList = new FlowspecPacketLengthListStructList(this, "packet_length_list", false);
  public get packetLengthList() {
    return this._packetLengthList;
  }
  public putPacketLengthList(value: FlowspecPacketLengthListStruct[] | cdktf.IResolvable) {
    this._packetLengthList.internalValue = value;
  }
  public resetPacketLengthList() {
    this._packetLengthList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthListInput() {
    return this._packetLengthList.internalValue;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList = new FlowspecPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: FlowspecPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }

  // protocol_list - computed: false, optional: true, required: false
  private _protocolList = new FlowspecProtocolListStructList(this, "protocol_list", false);
  public get protocolList() {
    return this._protocolList;
  }
  public putProtocolList(value: FlowspecProtocolListStruct[] | cdktf.IResolvable) {
    this._protocolList.internalValue = value;
  }
  public resetProtocolList() {
    this._protocolList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolListInput() {
    return this._protocolList.internalValue;
  }

  // source_port_list - computed: false, optional: true, required: false
  private _sourcePortList = new FlowspecSourcePortListStructList(this, "source_port_list", false);
  public get sourcePortList() {
    return this._sourcePortList;
  }
  public putSourcePortList(value: FlowspecSourcePortListStruct[] | cdktf.IResolvable) {
    this._sourcePortList.internalValue = value;
  }
  public resetSourcePortList() {
    this._sourcePortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortListInput() {
    return this._sourcePortList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dest_addr_type: cdktf.stringToTerraform(this._destAddrType),
      dest_ip_host: cdktf.stringToTerraform(this._destIpHost),
      dest_ip_subnet: cdktf.stringToTerraform(this._destIpSubnet),
      dest_ipv6_host: cdktf.stringToTerraform(this._destIpv6Host),
      dest_ipv6_subnet: cdktf.stringToTerraform(this._destIpv6Subnet),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      src_addr_type: cdktf.stringToTerraform(this._srcAddrType),
      src_ip_host: cdktf.stringToTerraform(this._srcIpHost),
      src_ip_subnet: cdktf.stringToTerraform(this._srcIpSubnet),
      src_ipv6_host: cdktf.stringToTerraform(this._srcIpv6Host),
      src_ipv6_subnet: cdktf.stringToTerraform(this._srcIpv6Subnet),
      tcp_flags: cdktf.stringToTerraform(this._tcpFlags),
      tcp_flags_bitmask: cdktf.stringToTerraform(this._tcpFlagsBitmask),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      destination_port_list: cdktf.listMapper(flowspecDestinationPortListStructToTerraform, true)(this._destinationPortList.internalValue),
      dscp_list: cdktf.listMapper(flowspecDscpListStructToTerraform, true)(this._dscpList.internalValue),
      filtering_action: flowspecFilteringActionToTerraform(this._filteringAction.internalValue),
      fragmentation_option_list: cdktf.listMapper(flowspecFragmentationOptionListStructToTerraform, true)(this._fragmentationOptionList.internalValue),
      icmp_code_list: cdktf.listMapper(flowspecIcmpCodeListStructToTerraform, true)(this._icmpCodeList.internalValue),
      icmp_type_list: cdktf.listMapper(flowspecIcmpTypeListStructToTerraform, true)(this._icmpTypeList.internalValue),
      operational_mode: flowspecOperationalModeToTerraform(this._operationalMode.internalValue),
      packet_length_list: cdktf.listMapper(flowspecPacketLengthListStructToTerraform, true)(this._packetLengthList.internalValue),
      port_list: cdktf.listMapper(flowspecPortListStructToTerraform, true)(this._portList.internalValue),
      protocol_list: cdktf.listMapper(flowspecProtocolListStructToTerraform, true)(this._protocolList.internalValue),
      source_port_list: cdktf.listMapper(flowspecSourcePortListStructToTerraform, true)(this._sourcePortList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dest_addr_type: {
        value: cdktf.stringToHclTerraform(this._destAddrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_ip_host: {
        value: cdktf.stringToHclTerraform(this._destIpHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_ip_subnet: {
        value: cdktf.stringToHclTerraform(this._destIpSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_ipv6_host: {
        value: cdktf.stringToHclTerraform(this._destIpv6Host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_ipv6_subnet: {
        value: cdktf.stringToHclTerraform(this._destIpv6Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_addr_type: {
        value: cdktf.stringToHclTerraform(this._srcAddrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ip_host: {
        value: cdktf.stringToHclTerraform(this._srcIpHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ip_subnet: {
        value: cdktf.stringToHclTerraform(this._srcIpSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ipv6_host: {
        value: cdktf.stringToHclTerraform(this._srcIpv6Host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ipv6_subnet: {
        value: cdktf.stringToHclTerraform(this._srcIpv6Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_flags: {
        value: cdktf.stringToHclTerraform(this._tcpFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_flags_bitmask: {
        value: cdktf.stringToHclTerraform(this._tcpFlagsBitmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_list: {
        value: cdktf.listMapperHcl(flowspecDestinationPortListStructToHclTerraform, true)(this._destinationPortList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowspecDestinationPortListStructList",
      },
      dscp_list: {
        value: cdktf.listMapperHcl(flowspecDscpListStructToHclTerraform, true)(this._dscpList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowspecDscpListStructList",
      },
      filtering_action: {
        value: flowspecFilteringActionToHclTerraform(this._filteringAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowspecFilteringActionList",
      },
      fragmentation_option_list: {
        value: cdktf.listMapperHcl(flowspecFragmentationOptionListStructToHclTerraform, true)(this._fragmentationOptionList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowspecFragmentationOptionListStructList",
      },
      icmp_code_list: {
        value: cdktf.listMapperHcl(flowspecIcmpCodeListStructToHclTerraform, true)(this._icmpCodeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowspecIcmpCodeListStructList",
      },
      icmp_type_list: {
        value: cdktf.listMapperHcl(flowspecIcmpTypeListStructToHclTerraform, true)(this._icmpTypeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowspecIcmpTypeListStructList",
      },
      operational_mode: {
        value: flowspecOperationalModeToHclTerraform(this._operationalMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowspecOperationalModeList",
      },
      packet_length_list: {
        value: cdktf.listMapperHcl(flowspecPacketLengthListStructToHclTerraform, true)(this._packetLengthList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowspecPacketLengthListStructList",
      },
      port_list: {
        value: cdktf.listMapperHcl(flowspecPortListStructToHclTerraform, true)(this._portList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowspecPortListStructList",
      },
      protocol_list: {
        value: cdktf.listMapperHcl(flowspecProtocolListStructToHclTerraform, true)(this._protocolList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowspecProtocolListStructList",
      },
      source_port_list: {
        value: cdktf.listMapperHcl(flowspecSourcePortListStructToHclTerraform, true)(this._sourcePortList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowspecSourcePortListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
