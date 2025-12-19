// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#id NetworkVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VLAN name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#name NetworkVlan#name}
  */
  readonly name?: string;
  /**
  * Configure VLAN as a shared VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#shared_vlan NetworkVlan#shared_vlan}
  */
  readonly sharedVlan?: number;
  /**
  * 'sip': sip; 'dip': dip; 'l3-lookup': l3-lookup; 'primary': primary; 'blade': blade; 'l4-src-port': l4-src-port; 'l4-dst-port': l4-dst-port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#traffic_distribution_mode NetworkVlan#traffic_distribution_mode}
  */
  readonly trafficDistributionMode?: string;
  /**
  * Logical tunnel interface (Logical interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#untagged_lif NetworkVlan#untagged_lif}
  */
  readonly untaggedLif?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#user_tag NetworkVlan#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#uuid NetworkVlan#uuid}
  */
  readonly uuid?: string;
  /**
  * ve number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#ve NetworkVlan#ve}
  */
  readonly ve?: number;
  /**
  * VLAN number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#vlan_num NetworkVlan#vlan_num}
  */
  readonly vlanNum: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#sampling_enable NetworkVlan#sampling_enable}
  */
  readonly samplingEnable?: NetworkVlanSamplingEnable[] | cdktf.IResolvable;
  /**
  * tagged_eth_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#tagged_eth_list NetworkVlan#tagged_eth_list}
  */
  readonly taggedEthList?: NetworkVlanTaggedEthListStruct[] | cdktf.IResolvable;
  /**
  * tagged_trunk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#tagged_trunk_list NetworkVlan#tagged_trunk_list}
  */
  readonly taggedTrunkList?: NetworkVlanTaggedTrunkListStruct[] | cdktf.IResolvable;
  /**
  * untagged_eth_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#untagged_eth_list NetworkVlan#untagged_eth_list}
  */
  readonly untaggedEthList?: NetworkVlanUntaggedEthListStruct[] | cdktf.IResolvable;
  /**
  * untagged_trunk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#untagged_trunk_list NetworkVlan#untagged_trunk_list}
  */
  readonly untaggedTrunkList?: NetworkVlanUntaggedTrunkListStruct[] | cdktf.IResolvable;
}
export interface NetworkVlanSamplingEnable {
  /**
  * 'all': all; 'broadcast_count': Broadcast counter; 'multicast_count': Multicast counter; 'ip_multicast_count': IP Multicast counter; 'unknown_unicast_count': Unknown Unicast counter; 'mac_movement_count': Mac Movement counter; 'shared_vlan_partition_switched_counter': SVLAN Partition switched counter;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#counters1 NetworkVlan#counters1}
  */
  readonly counters1?: string;
}

export function networkVlanSamplingEnableToTerraform(struct?: NetworkVlanSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function networkVlanSamplingEnableToHclTerraform(struct?: NetworkVlanSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVlanSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkVlanSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVlanSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class NetworkVlanSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : NetworkVlanSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): NetworkVlanSamplingEnableOutputReference {
    return new NetworkVlanSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkVlanTaggedEthListStruct {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#tagged_ethernet_end NetworkVlan#tagged_ethernet_end}
  */
  readonly taggedEthernetEnd?: number;
  /**
  * Ethernet port (Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#tagged_ethernet_start NetworkVlan#tagged_ethernet_start}
  */
  readonly taggedEthernetStart?: number;
}

export function networkVlanTaggedEthListStructToTerraform(struct?: NetworkVlanTaggedEthListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tagged_ethernet_end: cdktf.numberToTerraform(struct!.taggedEthernetEnd),
    tagged_ethernet_start: cdktf.numberToTerraform(struct!.taggedEthernetStart),
  }
}


export function networkVlanTaggedEthListStructToHclTerraform(struct?: NetworkVlanTaggedEthListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tagged_ethernet_end: {
      value: cdktf.numberToHclTerraform(struct!.taggedEthernetEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tagged_ethernet_start: {
      value: cdktf.numberToHclTerraform(struct!.taggedEthernetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVlanTaggedEthListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkVlanTaggedEthListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taggedEthernetEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.taggedEthernetEnd = this._taggedEthernetEnd;
    }
    if (this._taggedEthernetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.taggedEthernetStart = this._taggedEthernetStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVlanTaggedEthListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._taggedEthernetEnd = undefined;
      this._taggedEthernetStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._taggedEthernetEnd = value.taggedEthernetEnd;
      this._taggedEthernetStart = value.taggedEthernetStart;
    }
  }

  // tagged_ethernet_end - computed: false, optional: true, required: false
  private _taggedEthernetEnd?: number; 
  public get taggedEthernetEnd() {
    return this.getNumberAttribute('tagged_ethernet_end');
  }
  public set taggedEthernetEnd(value: number) {
    this._taggedEthernetEnd = value;
  }
  public resetTaggedEthernetEnd() {
    this._taggedEthernetEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedEthernetEndInput() {
    return this._taggedEthernetEnd;
  }

  // tagged_ethernet_start - computed: false, optional: true, required: false
  private _taggedEthernetStart?: number; 
  public get taggedEthernetStart() {
    return this.getNumberAttribute('tagged_ethernet_start');
  }
  public set taggedEthernetStart(value: number) {
    this._taggedEthernetStart = value;
  }
  public resetTaggedEthernetStart() {
    this._taggedEthernetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedEthernetStartInput() {
    return this._taggedEthernetStart;
  }
}

export class NetworkVlanTaggedEthListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkVlanTaggedEthListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkVlanTaggedEthListStructOutputReference {
    return new NetworkVlanTaggedEthListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkVlanTaggedTrunkListStruct {
  /**
  * Trunk Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#tagged_trunk_end NetworkVlan#tagged_trunk_end}
  */
  readonly taggedTrunkEnd?: number;
  /**
  * Trunk groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#tagged_trunk_start NetworkVlan#tagged_trunk_start}
  */
  readonly taggedTrunkStart?: number;
}

export function networkVlanTaggedTrunkListStructToTerraform(struct?: NetworkVlanTaggedTrunkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tagged_trunk_end: cdktf.numberToTerraform(struct!.taggedTrunkEnd),
    tagged_trunk_start: cdktf.numberToTerraform(struct!.taggedTrunkStart),
  }
}


export function networkVlanTaggedTrunkListStructToHclTerraform(struct?: NetworkVlanTaggedTrunkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tagged_trunk_end: {
      value: cdktf.numberToHclTerraform(struct!.taggedTrunkEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tagged_trunk_start: {
      value: cdktf.numberToHclTerraform(struct!.taggedTrunkStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVlanTaggedTrunkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkVlanTaggedTrunkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taggedTrunkEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.taggedTrunkEnd = this._taggedTrunkEnd;
    }
    if (this._taggedTrunkStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.taggedTrunkStart = this._taggedTrunkStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVlanTaggedTrunkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._taggedTrunkEnd = undefined;
      this._taggedTrunkStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._taggedTrunkEnd = value.taggedTrunkEnd;
      this._taggedTrunkStart = value.taggedTrunkStart;
    }
  }

  // tagged_trunk_end - computed: false, optional: true, required: false
  private _taggedTrunkEnd?: number; 
  public get taggedTrunkEnd() {
    return this.getNumberAttribute('tagged_trunk_end');
  }
  public set taggedTrunkEnd(value: number) {
    this._taggedTrunkEnd = value;
  }
  public resetTaggedTrunkEnd() {
    this._taggedTrunkEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedTrunkEndInput() {
    return this._taggedTrunkEnd;
  }

  // tagged_trunk_start - computed: false, optional: true, required: false
  private _taggedTrunkStart?: number; 
  public get taggedTrunkStart() {
    return this.getNumberAttribute('tagged_trunk_start');
  }
  public set taggedTrunkStart(value: number) {
    this._taggedTrunkStart = value;
  }
  public resetTaggedTrunkStart() {
    this._taggedTrunkStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedTrunkStartInput() {
    return this._taggedTrunkStart;
  }
}

export class NetworkVlanTaggedTrunkListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkVlanTaggedTrunkListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkVlanTaggedTrunkListStructOutputReference {
    return new NetworkVlanTaggedTrunkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkVlanUntaggedEthListStruct {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#untagged_ethernet_end NetworkVlan#untagged_ethernet_end}
  */
  readonly untaggedEthernetEnd?: number;
  /**
  * Ethernet port (Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#untagged_ethernet_start NetworkVlan#untagged_ethernet_start}
  */
  readonly untaggedEthernetStart?: number;
}

export function networkVlanUntaggedEthListStructToTerraform(struct?: NetworkVlanUntaggedEthListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    untagged_ethernet_end: cdktf.numberToTerraform(struct!.untaggedEthernetEnd),
    untagged_ethernet_start: cdktf.numberToTerraform(struct!.untaggedEthernetStart),
  }
}


export function networkVlanUntaggedEthListStructToHclTerraform(struct?: NetworkVlanUntaggedEthListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    untagged_ethernet_end: {
      value: cdktf.numberToHclTerraform(struct!.untaggedEthernetEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    untagged_ethernet_start: {
      value: cdktf.numberToHclTerraform(struct!.untaggedEthernetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVlanUntaggedEthListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkVlanUntaggedEthListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._untaggedEthernetEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.untaggedEthernetEnd = this._untaggedEthernetEnd;
    }
    if (this._untaggedEthernetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.untaggedEthernetStart = this._untaggedEthernetStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVlanUntaggedEthListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._untaggedEthernetEnd = undefined;
      this._untaggedEthernetStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._untaggedEthernetEnd = value.untaggedEthernetEnd;
      this._untaggedEthernetStart = value.untaggedEthernetStart;
    }
  }

  // untagged_ethernet_end - computed: false, optional: true, required: false
  private _untaggedEthernetEnd?: number; 
  public get untaggedEthernetEnd() {
    return this.getNumberAttribute('untagged_ethernet_end');
  }
  public set untaggedEthernetEnd(value: number) {
    this._untaggedEthernetEnd = value;
  }
  public resetUntaggedEthernetEnd() {
    this._untaggedEthernetEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedEthernetEndInput() {
    return this._untaggedEthernetEnd;
  }

  // untagged_ethernet_start - computed: false, optional: true, required: false
  private _untaggedEthernetStart?: number; 
  public get untaggedEthernetStart() {
    return this.getNumberAttribute('untagged_ethernet_start');
  }
  public set untaggedEthernetStart(value: number) {
    this._untaggedEthernetStart = value;
  }
  public resetUntaggedEthernetStart() {
    this._untaggedEthernetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedEthernetStartInput() {
    return this._untaggedEthernetStart;
  }
}

export class NetworkVlanUntaggedEthListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkVlanUntaggedEthListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkVlanUntaggedEthListStructOutputReference {
    return new NetworkVlanUntaggedEthListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkVlanUntaggedTrunkListStruct {
  /**
  * Trunk Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#untagged_trunk_end NetworkVlan#untagged_trunk_end}
  */
  readonly untaggedTrunkEnd?: number;
  /**
  * Trunk groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#untagged_trunk_start NetworkVlan#untagged_trunk_start}
  */
  readonly untaggedTrunkStart?: number;
}

export function networkVlanUntaggedTrunkListStructToTerraform(struct?: NetworkVlanUntaggedTrunkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    untagged_trunk_end: cdktf.numberToTerraform(struct!.untaggedTrunkEnd),
    untagged_trunk_start: cdktf.numberToTerraform(struct!.untaggedTrunkStart),
  }
}


export function networkVlanUntaggedTrunkListStructToHclTerraform(struct?: NetworkVlanUntaggedTrunkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    untagged_trunk_end: {
      value: cdktf.numberToHclTerraform(struct!.untaggedTrunkEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    untagged_trunk_start: {
      value: cdktf.numberToHclTerraform(struct!.untaggedTrunkStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVlanUntaggedTrunkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkVlanUntaggedTrunkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._untaggedTrunkEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.untaggedTrunkEnd = this._untaggedTrunkEnd;
    }
    if (this._untaggedTrunkStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.untaggedTrunkStart = this._untaggedTrunkStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVlanUntaggedTrunkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._untaggedTrunkEnd = undefined;
      this._untaggedTrunkStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._untaggedTrunkEnd = value.untaggedTrunkEnd;
      this._untaggedTrunkStart = value.untaggedTrunkStart;
    }
  }

  // untagged_trunk_end - computed: false, optional: true, required: false
  private _untaggedTrunkEnd?: number; 
  public get untaggedTrunkEnd() {
    return this.getNumberAttribute('untagged_trunk_end');
  }
  public set untaggedTrunkEnd(value: number) {
    this._untaggedTrunkEnd = value;
  }
  public resetUntaggedTrunkEnd() {
    this._untaggedTrunkEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedTrunkEndInput() {
    return this._untaggedTrunkEnd;
  }

  // untagged_trunk_start - computed: false, optional: true, required: false
  private _untaggedTrunkStart?: number; 
  public get untaggedTrunkStart() {
    return this.getNumberAttribute('untagged_trunk_start');
  }
  public set untaggedTrunkStart(value: number) {
    this._untaggedTrunkStart = value;
  }
  public resetUntaggedTrunkStart() {
    this._untaggedTrunkStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedTrunkStartInput() {
    return this._untaggedTrunkStart;
  }
}

export class NetworkVlanUntaggedTrunkListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkVlanUntaggedTrunkListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkVlanUntaggedTrunkListStructOutputReference {
    return new NetworkVlanUntaggedTrunkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan thunder_network_vlan}
*/
export class NetworkVlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkVlan to import
  * @param importFromId The id of the existing NetworkVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_vlan thunder_network_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkVlanConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_vlan',
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
    this._name = config.name;
    this._sharedVlan = config.sharedVlan;
    this._trafficDistributionMode = config.trafficDistributionMode;
    this._untaggedLif = config.untaggedLif;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ve = config.ve;
    this._vlanNum = config.vlanNum;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._taggedEthList.internalValue = config.taggedEthList;
    this._taggedTrunkList.internalValue = config.taggedTrunkList;
    this._untaggedEthList.internalValue = config.untaggedEthList;
    this._untaggedTrunkList.internalValue = config.untaggedTrunkList;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // shared_vlan - computed: false, optional: true, required: false
  private _sharedVlan?: number; 
  public get sharedVlan() {
    return this.getNumberAttribute('shared_vlan');
  }
  public set sharedVlan(value: number) {
    this._sharedVlan = value;
  }
  public resetSharedVlan() {
    this._sharedVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedVlanInput() {
    return this._sharedVlan;
  }

  // traffic_distribution_mode - computed: false, optional: true, required: false
  private _trafficDistributionMode?: string; 
  public get trafficDistributionMode() {
    return this.getStringAttribute('traffic_distribution_mode');
  }
  public set trafficDistributionMode(value: string) {
    this._trafficDistributionMode = value;
  }
  public resetTrafficDistributionMode() {
    this._trafficDistributionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDistributionModeInput() {
    return this._trafficDistributionMode;
  }

  // untagged_lif - computed: false, optional: true, required: false
  private _untaggedLif?: string; 
  public get untaggedLif() {
    return this.getStringAttribute('untagged_lif');
  }
  public set untaggedLif(value: string) {
    this._untaggedLif = value;
  }
  public resetUntaggedLif() {
    this._untaggedLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedLifInput() {
    return this._untaggedLif;
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

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new NetworkVlanSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: NetworkVlanSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // tagged_eth_list - computed: false, optional: true, required: false
  private _taggedEthList = new NetworkVlanTaggedEthListStructList(this, "tagged_eth_list", false);
  public get taggedEthList() {
    return this._taggedEthList;
  }
  public putTaggedEthList(value: NetworkVlanTaggedEthListStruct[] | cdktf.IResolvable) {
    this._taggedEthList.internalValue = value;
  }
  public resetTaggedEthList() {
    this._taggedEthList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedEthListInput() {
    return this._taggedEthList.internalValue;
  }

  // tagged_trunk_list - computed: false, optional: true, required: false
  private _taggedTrunkList = new NetworkVlanTaggedTrunkListStructList(this, "tagged_trunk_list", false);
  public get taggedTrunkList() {
    return this._taggedTrunkList;
  }
  public putTaggedTrunkList(value: NetworkVlanTaggedTrunkListStruct[] | cdktf.IResolvable) {
    this._taggedTrunkList.internalValue = value;
  }
  public resetTaggedTrunkList() {
    this._taggedTrunkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedTrunkListInput() {
    return this._taggedTrunkList.internalValue;
  }

  // untagged_eth_list - computed: false, optional: true, required: false
  private _untaggedEthList = new NetworkVlanUntaggedEthListStructList(this, "untagged_eth_list", false);
  public get untaggedEthList() {
    return this._untaggedEthList;
  }
  public putUntaggedEthList(value: NetworkVlanUntaggedEthListStruct[] | cdktf.IResolvable) {
    this._untaggedEthList.internalValue = value;
  }
  public resetUntaggedEthList() {
    this._untaggedEthList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedEthListInput() {
    return this._untaggedEthList.internalValue;
  }

  // untagged_trunk_list - computed: false, optional: true, required: false
  private _untaggedTrunkList = new NetworkVlanUntaggedTrunkListStructList(this, "untagged_trunk_list", false);
  public get untaggedTrunkList() {
    return this._untaggedTrunkList;
  }
  public putUntaggedTrunkList(value: NetworkVlanUntaggedTrunkListStruct[] | cdktf.IResolvable) {
    this._untaggedTrunkList.internalValue = value;
  }
  public resetUntaggedTrunkList() {
    this._untaggedTrunkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedTrunkListInput() {
    return this._untaggedTrunkList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      shared_vlan: cdktf.numberToTerraform(this._sharedVlan),
      traffic_distribution_mode: cdktf.stringToTerraform(this._trafficDistributionMode),
      untagged_lif: cdktf.stringToTerraform(this._untaggedLif),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      ve: cdktf.numberToTerraform(this._ve),
      vlan_num: cdktf.numberToTerraform(this._vlanNum),
      sampling_enable: cdktf.listMapper(networkVlanSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      tagged_eth_list: cdktf.listMapper(networkVlanTaggedEthListStructToTerraform, true)(this._taggedEthList.internalValue),
      tagged_trunk_list: cdktf.listMapper(networkVlanTaggedTrunkListStructToTerraform, true)(this._taggedTrunkList.internalValue),
      untagged_eth_list: cdktf.listMapper(networkVlanUntaggedEthListStructToTerraform, true)(this._untaggedEthList.internalValue),
      untagged_trunk_list: cdktf.listMapper(networkVlanUntaggedTrunkListStructToTerraform, true)(this._untaggedTrunkList.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_vlan: {
        value: cdktf.numberToHclTerraform(this._sharedVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_distribution_mode: {
        value: cdktf.stringToHclTerraform(this._trafficDistributionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      untagged_lif: {
        value: cdktf.stringToHclTerraform(this._untaggedLif),
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
      ve: {
        value: cdktf.numberToHclTerraform(this._ve),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_num: {
        value: cdktf.numberToHclTerraform(this._vlanNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(networkVlanSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkVlanSamplingEnableList",
      },
      tagged_eth_list: {
        value: cdktf.listMapperHcl(networkVlanTaggedEthListStructToHclTerraform, true)(this._taggedEthList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkVlanTaggedEthListStructList",
      },
      tagged_trunk_list: {
        value: cdktf.listMapperHcl(networkVlanTaggedTrunkListStructToHclTerraform, true)(this._taggedTrunkList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkVlanTaggedTrunkListStructList",
      },
      untagged_eth_list: {
        value: cdktf.listMapperHcl(networkVlanUntaggedEthListStructToHclTerraform, true)(this._untaggedEthList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkVlanUntaggedEthListStructList",
      },
      untagged_trunk_list: {
        value: cdktf.listMapperHcl(networkVlanUntaggedTrunkListStructToHclTerraform, true)(this._untaggedTrunkList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkVlanUntaggedTrunkListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
