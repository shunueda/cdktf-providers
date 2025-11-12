// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectGroupNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the object-group instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#description ObjectGroupNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#id ObjectGroupNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'v4': IPv4 rule; 'v6': IPv6 rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#ip_version ObjectGroupNetwork#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Network Object Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#net_name ObjectGroupNetwork#net_name}
  */
  readonly netName: string;
  /**
  * 'acl': Use for access-lists (default).; 'fw': Use for Firewall rule-set;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#usage ObjectGroupNetwork#usage}
  */
  readonly usage?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#user_tag ObjectGroupNetwork#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#uuid ObjectGroupNetwork#uuid}
  */
  readonly uuid?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#rules ObjectGroupNetwork#rules}
  */
  readonly rules?: ObjectGroupNetworkRules[] | cdktf.IResolvable;
}
export interface ObjectGroupNetworkRules {
  /**
  * Any host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#any ObjectGroupNetwork#any}
  */
  readonly any?: number;
  /**
  * IPv4 Network Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#fw_ipv4_address ObjectGroupNetwork#fw_ipv4_address}
  */
  readonly fwIpv4Address?: string;
  /**
  * IPv6 Network Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#fw_ipv6_subnet ObjectGroupNetwork#fw_ipv6_subnet}
  */
  readonly fwIpv6Subnet?: string;
  /**
  * IPv4 Host Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#host_v4 ObjectGroupNetwork#host_v4}
  */
  readonly hostV4?: string;
  /**
  * IPv6 Host Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#host_v6 ObjectGroupNetwork#host_v6}
  */
  readonly hostV6?: string;
  /**
  * IPV4 Host address end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#ip_range_end ObjectGroupNetwork#ip_range_end}
  */
  readonly ipRangeEnd?: string;
  /**
  * IPv4 Host Address start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#ip_range_start ObjectGroupNetwork#ip_range_start}
  */
  readonly ipRangeStart?: string;
  /**
  * IPV6 Host address end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#ipv6_range_end ObjectGroupNetwork#ipv6_range_end}
  */
  readonly ipv6RangeEnd?: string;
  /**
  * IPv6 Host Address start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#ipv6_range_start ObjectGroupNetwork#ipv6_range_start}
  */
  readonly ipv6RangeStart?: string;
  /**
  * IPv6 Network Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#ipv6_subnet ObjectGroupNetwork#ipv6_subnet}
  */
  readonly ipv6Subnet?: string;
  /**
  * Network Object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#obj_network ObjectGroupNetwork#obj_network}
  */
  readonly objNetwork?: string;
  /**
  * Network Mask. 0=apply, 255=ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#rev_subnet_mask ObjectGroupNetwork#rev_subnet_mask}
  */
  readonly revSubnetMask?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#seq_num ObjectGroupNetwork#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#slb_server ObjectGroupNetwork#slb_server}
  */
  readonly slbServer?: string;
  /**
  * Virtual Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#slb_vserver ObjectGroupNetwork#slb_vserver}
  */
  readonly slbVserver?: string;
  /**
  * IPv4 Network Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#subnet ObjectGroupNetwork#subnet}
  */
  readonly subnet?: string;
}

export function objectGroupNetworkRulesToTerraform(struct?: ObjectGroupNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: cdktf.numberToTerraform(struct!.any),
    fw_ipv4_address: cdktf.stringToTerraform(struct!.fwIpv4Address),
    fw_ipv6_subnet: cdktf.stringToTerraform(struct!.fwIpv6Subnet),
    host_v4: cdktf.stringToTerraform(struct!.hostV4),
    host_v6: cdktf.stringToTerraform(struct!.hostV6),
    ip_range_end: cdktf.stringToTerraform(struct!.ipRangeEnd),
    ip_range_start: cdktf.stringToTerraform(struct!.ipRangeStart),
    ipv6_range_end: cdktf.stringToTerraform(struct!.ipv6RangeEnd),
    ipv6_range_start: cdktf.stringToTerraform(struct!.ipv6RangeStart),
    ipv6_subnet: cdktf.stringToTerraform(struct!.ipv6Subnet),
    obj_network: cdktf.stringToTerraform(struct!.objNetwork),
    rev_subnet_mask: cdktf.stringToTerraform(struct!.revSubnetMask),
    seq_num: cdktf.numberToTerraform(struct!.seqNum),
    slb_server: cdktf.stringToTerraform(struct!.slbServer),
    slb_vserver: cdktf.stringToTerraform(struct!.slbVserver),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function objectGroupNetworkRulesToHclTerraform(struct?: ObjectGroupNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: cdktf.numberToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.fwIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw_ipv6_subnet: {
      value: cdktf.stringToHclTerraform(struct!.fwIpv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_v4: {
      value: cdktf.stringToHclTerraform(struct!.hostV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_v6: {
      value: cdktf.stringToHclTerraform(struct!.hostV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_range_end: {
      value: cdktf.stringToHclTerraform(struct!.ipRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_range_start: {
      value: cdktf.stringToHclTerraform(struct!.ipRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_range_end: {
      value: cdktf.stringToHclTerraform(struct!.ipv6RangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_range_start: {
      value: cdktf.stringToHclTerraform(struct!.ipv6RangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    obj_network: {
      value: cdktf.stringToHclTerraform(struct!.objNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.revSubnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq_num: {
      value: cdktf.numberToHclTerraform(struct!.seqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_server: {
      value: cdktf.stringToHclTerraform(struct!.slbServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slb_vserver: {
      value: cdktf.stringToHclTerraform(struct!.slbVserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectGroupNetworkRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectGroupNetworkRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._fwIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwIpv4Address = this._fwIpv4Address;
    }
    if (this._fwIpv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwIpv6Subnet = this._fwIpv6Subnet;
    }
    if (this._hostV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostV4 = this._hostV4;
    }
    if (this._hostV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostV6 = this._hostV6;
    }
    if (this._ipRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRangeEnd = this._ipRangeEnd;
    }
    if (this._ipRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRangeStart = this._ipRangeStart;
    }
    if (this._ipv6RangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6RangeEnd = this._ipv6RangeEnd;
    }
    if (this._ipv6RangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6RangeStart = this._ipv6RangeStart;
    }
    if (this._ipv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Subnet = this._ipv6Subnet;
    }
    if (this._objNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.objNetwork = this._objNetwork;
    }
    if (this._revSubnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.revSubnetMask = this._revSubnetMask;
    }
    if (this._seqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNum = this._seqNum;
    }
    if (this._slbServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbServer = this._slbServer;
    }
    if (this._slbVserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbVserver = this._slbVserver;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectGroupNetworkRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._any = undefined;
      this._fwIpv4Address = undefined;
      this._fwIpv6Subnet = undefined;
      this._hostV4 = undefined;
      this._hostV6 = undefined;
      this._ipRangeEnd = undefined;
      this._ipRangeStart = undefined;
      this._ipv6RangeEnd = undefined;
      this._ipv6RangeStart = undefined;
      this._ipv6Subnet = undefined;
      this._objNetwork = undefined;
      this._revSubnetMask = undefined;
      this._seqNum = undefined;
      this._slbServer = undefined;
      this._slbVserver = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._any = value.any;
      this._fwIpv4Address = value.fwIpv4Address;
      this._fwIpv6Subnet = value.fwIpv6Subnet;
      this._hostV4 = value.hostV4;
      this._hostV6 = value.hostV6;
      this._ipRangeEnd = value.ipRangeEnd;
      this._ipRangeStart = value.ipRangeStart;
      this._ipv6RangeEnd = value.ipv6RangeEnd;
      this._ipv6RangeStart = value.ipv6RangeStart;
      this._ipv6Subnet = value.ipv6Subnet;
      this._objNetwork = value.objNetwork;
      this._revSubnetMask = value.revSubnetMask;
      this._seqNum = value.seqNum;
      this._slbServer = value.slbServer;
      this._slbVserver = value.slbVserver;
      this._subnet = value.subnet;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any?: number; 
  public get any() {
    return this.getNumberAttribute('any');
  }
  public set any(value: number) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // fw_ipv4_address - computed: false, optional: true, required: false
  private _fwIpv4Address?: string; 
  public get fwIpv4Address() {
    return this.getStringAttribute('fw_ipv4_address');
  }
  public set fwIpv4Address(value: string) {
    this._fwIpv4Address = value;
  }
  public resetFwIpv4Address() {
    this._fwIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwIpv4AddressInput() {
    return this._fwIpv4Address;
  }

  // fw_ipv6_subnet - computed: false, optional: true, required: false
  private _fwIpv6Subnet?: string; 
  public get fwIpv6Subnet() {
    return this.getStringAttribute('fw_ipv6_subnet');
  }
  public set fwIpv6Subnet(value: string) {
    this._fwIpv6Subnet = value;
  }
  public resetFwIpv6Subnet() {
    this._fwIpv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwIpv6SubnetInput() {
    return this._fwIpv6Subnet;
  }

  // host_v4 - computed: false, optional: true, required: false
  private _hostV4?: string; 
  public get hostV4() {
    return this.getStringAttribute('host_v4');
  }
  public set hostV4(value: string) {
    this._hostV4 = value;
  }
  public resetHostV4() {
    this._hostV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostV4Input() {
    return this._hostV4;
  }

  // host_v6 - computed: false, optional: true, required: false
  private _hostV6?: string; 
  public get hostV6() {
    return this.getStringAttribute('host_v6');
  }
  public set hostV6(value: string) {
    this._hostV6 = value;
  }
  public resetHostV6() {
    this._hostV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostV6Input() {
    return this._hostV6;
  }

  // ip_range_end - computed: false, optional: true, required: false
  private _ipRangeEnd?: string; 
  public get ipRangeEnd() {
    return this.getStringAttribute('ip_range_end');
  }
  public set ipRangeEnd(value: string) {
    this._ipRangeEnd = value;
  }
  public resetIpRangeEnd() {
    this._ipRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeEndInput() {
    return this._ipRangeEnd;
  }

  // ip_range_start - computed: false, optional: true, required: false
  private _ipRangeStart?: string; 
  public get ipRangeStart() {
    return this.getStringAttribute('ip_range_start');
  }
  public set ipRangeStart(value: string) {
    this._ipRangeStart = value;
  }
  public resetIpRangeStart() {
    this._ipRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeStartInput() {
    return this._ipRangeStart;
  }

  // ipv6_range_end - computed: false, optional: true, required: false
  private _ipv6RangeEnd?: string; 
  public get ipv6RangeEnd() {
    return this.getStringAttribute('ipv6_range_end');
  }
  public set ipv6RangeEnd(value: string) {
    this._ipv6RangeEnd = value;
  }
  public resetIpv6RangeEnd() {
    this._ipv6RangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RangeEndInput() {
    return this._ipv6RangeEnd;
  }

  // ipv6_range_start - computed: false, optional: true, required: false
  private _ipv6RangeStart?: string; 
  public get ipv6RangeStart() {
    return this.getStringAttribute('ipv6_range_start');
  }
  public set ipv6RangeStart(value: string) {
    this._ipv6RangeStart = value;
  }
  public resetIpv6RangeStart() {
    this._ipv6RangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RangeStartInput() {
    return this._ipv6RangeStart;
  }

  // ipv6_subnet - computed: false, optional: true, required: false
  private _ipv6Subnet?: string; 
  public get ipv6Subnet() {
    return this.getStringAttribute('ipv6_subnet');
  }
  public set ipv6Subnet(value: string) {
    this._ipv6Subnet = value;
  }
  public resetIpv6Subnet() {
    this._ipv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetInput() {
    return this._ipv6Subnet;
  }

  // obj_network - computed: false, optional: true, required: false
  private _objNetwork?: string; 
  public get objNetwork() {
    return this.getStringAttribute('obj_network');
  }
  public set objNetwork(value: string) {
    this._objNetwork = value;
  }
  public resetObjNetwork() {
    this._objNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objNetworkInput() {
    return this._objNetwork;
  }

  // rev_subnet_mask - computed: false, optional: true, required: false
  private _revSubnetMask?: string; 
  public get revSubnetMask() {
    return this.getStringAttribute('rev_subnet_mask');
  }
  public set revSubnetMask(value: string) {
    this._revSubnetMask = value;
  }
  public resetRevSubnetMask() {
    this._revSubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revSubnetMaskInput() {
    return this._revSubnetMask;
  }

  // seq_num - computed: false, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // slb_server - computed: false, optional: true, required: false
  private _slbServer?: string; 
  public get slbServer() {
    return this.getStringAttribute('slb_server');
  }
  public set slbServer(value: string) {
    this._slbServer = value;
  }
  public resetSlbServer() {
    this._slbServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbServerInput() {
    return this._slbServer;
  }

  // slb_vserver - computed: false, optional: true, required: false
  private _slbVserver?: string; 
  public get slbVserver() {
    return this.getStringAttribute('slb_vserver');
  }
  public set slbVserver(value: string) {
    this._slbVserver = value;
  }
  public resetSlbVserver() {
    this._slbVserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbVserverInput() {
    return this._slbVserver;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

export class ObjectGroupNetworkRulesList extends cdktf.ComplexList {
  public internalValue? : ObjectGroupNetworkRules[] | cdktf.IResolvable

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
  public get(index: number): ObjectGroupNetworkRulesOutputReference {
    return new ObjectGroupNetworkRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network thunder_object_group_network}
*/
export class ObjectGroupNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_object_group_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectGroupNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectGroupNetwork to import
  * @param importFromId The id of the existing ObjectGroupNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectGroupNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_object_group_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_network thunder_object_group_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectGroupNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectGroupNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_object_group_network',
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
    this._description = config.description;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._netName = config.netName;
    this._usage = config.usage;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // net_name - computed: false, optional: false, required: true
  private _netName?: string; 
  public get netName() {
    return this.getStringAttribute('net_name');
  }
  public set netName(value: string) {
    this._netName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netNameInput() {
    return this._netName;
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
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

  // rules - computed: false, optional: true, required: false
  private _rules = new ObjectGroupNetworkRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ObjectGroupNetworkRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      net_name: cdktf.stringToTerraform(this._netName),
      usage: cdktf.stringToTerraform(this._usage),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      rules: cdktf.listMapper(objectGroupNetworkRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_name: {
        value: cdktf.stringToHclTerraform(this._netName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage: {
        value: cdktf.stringToHclTerraform(this._usage),
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
      rules: {
        value: cdktf.listMapperHcl(objectGroupNetworkRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectGroupNetworkRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
