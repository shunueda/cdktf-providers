// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosNetworkObjectStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#id DataThunderDdosNetworkObjectStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#object_name DataThunderDdosNetworkObjectStats#object_name}
  */
  readonly objectName: string;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#ip_list DataThunderDdosNetworkObjectStats#ip_list}
  */
  readonly ipList?: DataThunderDdosNetworkObjectStatsIpListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#ipv6_list DataThunderDdosNetworkObjectStats#ipv6_list}
  */
  readonly ipv6List?: DataThunderDdosNetworkObjectStatsIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#stats DataThunderDdosNetworkObjectStats#stats}
  */
  readonly stats?: DataThunderDdosNetworkObjectStatsStats;
}
export interface DataThunderDdosNetworkObjectStatsIpListStats {
  /**
  * B(bits)PS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#bit_rate DataThunderDdosNetworkObjectStats#bit_rate}
  */
  readonly bitRate?: number;
  /**
  * PPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#packet_rate DataThunderDdosNetworkObjectStats#packet_rate}
  */
  readonly packetRate?: number;
}

export function dataThunderDdosNetworkObjectStatsIpListStatsToTerraform(struct?: DataThunderDdosNetworkObjectStatsIpListStatsOutputReference | DataThunderDdosNetworkObjectStatsIpListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bit_rate: cdktf.numberToTerraform(struct!.bitRate),
    packet_rate: cdktf.numberToTerraform(struct!.packetRate),
  }
}


export function dataThunderDdosNetworkObjectStatsIpListStatsToHclTerraform(struct?: DataThunderDdosNetworkObjectStatsIpListStatsOutputReference | DataThunderDdosNetworkObjectStatsIpListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.bitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectStatsIpListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosNetworkObjectStatsIpListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRate = this._bitRate;
    }
    if (this._packetRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectStatsIpListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitRate = undefined;
      this._packetRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitRate = value.bitRate;
      this._packetRate = value.packetRate;
    }
  }

  // bit_rate - computed: false, optional: true, required: false
  private _bitRate?: number; 
  public get bitRate() {
    return this.getNumberAttribute('bit_rate');
  }
  public set bitRate(value: number) {
    this._bitRate = value;
  }
  public resetBitRate() {
    this._bitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateInput() {
    return this._bitRate;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate?: number; 
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
  public set packetRate(value: number) {
    this._packetRate = value;
  }
  public resetPacketRate() {
    this._packetRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }
}
export interface DataThunderDdosNetworkObjectStatsIpListStruct {
  /**
  * IP Subnet, supported prefix range is from 8 to 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#subnet_ip_addr DataThunderDdosNetworkObjectStats#subnet_ip_addr}
  */
  readonly subnetIpAddr: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#stats DataThunderDdosNetworkObjectStats#stats}
  */
  readonly stats?: DataThunderDdosNetworkObjectStatsIpListStats;
}

export function dataThunderDdosNetworkObjectStatsIpListStructToTerraform(struct?: DataThunderDdosNetworkObjectStatsIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    stats: dataThunderDdosNetworkObjectStatsIpListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderDdosNetworkObjectStatsIpListStructToHclTerraform(struct?: DataThunderDdosNetworkObjectStatsIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderDdosNetworkObjectStatsIpListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosNetworkObjectStatsIpListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectStatsIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosNetworkObjectStatsIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpAddr = this._subnetIpAddr;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectStatsIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetIpAddr = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetIpAddr = value.subnetIpAddr;
      this._stats.internalValue = value.stats;
    }
  }

  // subnet_ip_addr - computed: false, optional: false, required: true
  private _subnetIpAddr?: string; 
  public get subnetIpAddr() {
    return this.getStringAttribute('subnet_ip_addr');
  }
  public set subnetIpAddr(value: string) {
    this._subnetIpAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddrInput() {
    return this._subnetIpAddr;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosNetworkObjectStatsIpListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosNetworkObjectStatsIpListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderDdosNetworkObjectStatsIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosNetworkObjectStatsIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosNetworkObjectStatsIpListStructOutputReference {
    return new DataThunderDdosNetworkObjectStatsIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosNetworkObjectStatsIpv6ListStats {
  /**
  * B(bits)PS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#bit_rate DataThunderDdosNetworkObjectStats#bit_rate}
  */
  readonly bitRate?: number;
  /**
  * PPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#packet_rate DataThunderDdosNetworkObjectStats#packet_rate}
  */
  readonly packetRate?: number;
}

export function dataThunderDdosNetworkObjectStatsIpv6ListStatsToTerraform(struct?: DataThunderDdosNetworkObjectStatsIpv6ListStatsOutputReference | DataThunderDdosNetworkObjectStatsIpv6ListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bit_rate: cdktf.numberToTerraform(struct!.bitRate),
    packet_rate: cdktf.numberToTerraform(struct!.packetRate),
  }
}


export function dataThunderDdosNetworkObjectStatsIpv6ListStatsToHclTerraform(struct?: DataThunderDdosNetworkObjectStatsIpv6ListStatsOutputReference | DataThunderDdosNetworkObjectStatsIpv6ListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.bitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectStatsIpv6ListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosNetworkObjectStatsIpv6ListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRate = this._bitRate;
    }
    if (this._packetRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectStatsIpv6ListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitRate = undefined;
      this._packetRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitRate = value.bitRate;
      this._packetRate = value.packetRate;
    }
  }

  // bit_rate - computed: false, optional: true, required: false
  private _bitRate?: number; 
  public get bitRate() {
    return this.getNumberAttribute('bit_rate');
  }
  public set bitRate(value: number) {
    this._bitRate = value;
  }
  public resetBitRate() {
    this._bitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateInput() {
    return this._bitRate;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate?: number; 
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
  public set packetRate(value: number) {
    this._packetRate = value;
  }
  public resetPacketRate() {
    this._packetRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }
}
export interface DataThunderDdosNetworkObjectStatsIpv6ListStruct {
  /**
  * IPV6 Subnet, supported prefix range is from 40 to 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#subnet_ipv6_addr DataThunderDdosNetworkObjectStats#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#stats DataThunderDdosNetworkObjectStats#stats}
  */
  readonly stats?: DataThunderDdosNetworkObjectStatsIpv6ListStats;
}

export function dataThunderDdosNetworkObjectStatsIpv6ListStructToTerraform(struct?: DataThunderDdosNetworkObjectStatsIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    stats: dataThunderDdosNetworkObjectStatsIpv6ListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderDdosNetworkObjectStatsIpv6ListStructToHclTerraform(struct?: DataThunderDdosNetworkObjectStatsIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderDdosNetworkObjectStatsIpv6ListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosNetworkObjectStatsIpv6ListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectStatsIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosNetworkObjectStatsIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpv6Addr = this._subnetIpv6Addr;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectStatsIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetIpv6Addr = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._stats.internalValue = value.stats;
    }
  }

  // subnet_ipv6_addr - computed: false, optional: false, required: true
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosNetworkObjectStatsIpv6ListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosNetworkObjectStatsIpv6ListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderDdosNetworkObjectStatsIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosNetworkObjectStatsIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosNetworkObjectStatsIpv6ListStructOutputReference {
    return new DataThunderDdosNetworkObjectStatsIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosNetworkObjectStatsStats {
  /**
  * Agent Group Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#agent_group_aged DataThunderDdosNetworkObjectStats#agent_group_aged}
  */
  readonly agentGroupAged?: number;
  /**
  * Agent Group Entry Create Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#agent_group_create_fail DataThunderDdosNetworkObjectStats#agent_group_create_fail}
  */
  readonly agentGroupCreateFail?: number;
  /**
  * Agent Group Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#agent_group_learned DataThunderDdosNetworkObjectStats#agent_group_learned}
  */
  readonly agentGroupLearned?: number;
  /**
  * B(bits)PS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#bit_rate DataThunderDdosNetworkObjectStats#bit_rate}
  */
  readonly bitRate?: number;
  /**
  * Duplicate Sample Packet Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#duplicate_sample_pkt_rcv DataThunderDdosNetworkObjectStats#duplicate_sample_pkt_rcv}
  */
  readonly duplicateSamplePktRcv?: number;
  /**
  * IP Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#ip_aged DataThunderDdosNetworkObjectStats#ip_aged}
  */
  readonly ipAged?: number;
  /**
  * IP Entry Create Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#ip_create_fail DataThunderDdosNetworkObjectStats#ip_create_fail}
  */
  readonly ipCreateFail?: number;
  /**
  * IP Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#ip_learned DataThunderDdosNetworkObjectStats#ip_learned}
  */
  readonly ipLearned?: number;
  /**
  * PPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#packet_rate DataThunderDdosNetworkObjectStats#packet_rate}
  */
  readonly packetRate?: number;
  /**
  * Service Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#service_aged DataThunderDdosNetworkObjectStats#service_aged}
  */
  readonly serviceAged?: number;
  /**
  * Service Entry Create Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#service_create_fail DataThunderDdosNetworkObjectStats#service_create_fail}
  */
  readonly serviceCreateFail?: number;
  /**
  * Service Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#service_learned DataThunderDdosNetworkObjectStats#service_learned}
  */
  readonly serviceLearned?: number;
  /**
  * Source Port Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#sport_aged DataThunderDdosNetworkObjectStats#sport_aged}
  */
  readonly sportAged?: number;
  /**
  * Source Port Entry Create Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#sport_create_fail DataThunderDdosNetworkObjectStats#sport_create_fail}
  */
  readonly sportCreateFail?: number;
  /**
  * Source Port Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#sport_learned DataThunderDdosNetworkObjectStats#sport_learned}
  */
  readonly sportLearned?: number;
  /**
  * Subnet Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#subnet_aged DataThunderDdosNetworkObjectStats#subnet_aged}
  */
  readonly subnetAged?: number;
  /**
  * Subnet Entry Create Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#subnet_create_fail DataThunderDdosNetworkObjectStats#subnet_create_fail}
  */
  readonly subnetCreateFail?: number;
  /**
  * Subnet Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#subnet_learned DataThunderDdosNetworkObjectStats#subnet_learned}
  */
  readonly subnetLearned?: number;
  /**
  * Topk Allocate Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#topk_allocate_fail DataThunderDdosNetworkObjectStats#topk_allocate_fail}
  */
  readonly topkAllocateFail?: number;
}

export function dataThunderDdosNetworkObjectStatsStatsToTerraform(struct?: DataThunderDdosNetworkObjectStatsStatsOutputReference | DataThunderDdosNetworkObjectStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_group_aged: cdktf.numberToTerraform(struct!.agentGroupAged),
    agent_group_create_fail: cdktf.numberToTerraform(struct!.agentGroupCreateFail),
    agent_group_learned: cdktf.numberToTerraform(struct!.agentGroupLearned),
    bit_rate: cdktf.numberToTerraform(struct!.bitRate),
    duplicate_sample_pkt_rcv: cdktf.numberToTerraform(struct!.duplicateSamplePktRcv),
    ip_aged: cdktf.numberToTerraform(struct!.ipAged),
    ip_create_fail: cdktf.numberToTerraform(struct!.ipCreateFail),
    ip_learned: cdktf.numberToTerraform(struct!.ipLearned),
    packet_rate: cdktf.numberToTerraform(struct!.packetRate),
    service_aged: cdktf.numberToTerraform(struct!.serviceAged),
    service_create_fail: cdktf.numberToTerraform(struct!.serviceCreateFail),
    service_learned: cdktf.numberToTerraform(struct!.serviceLearned),
    sport_aged: cdktf.numberToTerraform(struct!.sportAged),
    sport_create_fail: cdktf.numberToTerraform(struct!.sportCreateFail),
    sport_learned: cdktf.numberToTerraform(struct!.sportLearned),
    subnet_aged: cdktf.numberToTerraform(struct!.subnetAged),
    subnet_create_fail: cdktf.numberToTerraform(struct!.subnetCreateFail),
    subnet_learned: cdktf.numberToTerraform(struct!.subnetLearned),
    topk_allocate_fail: cdktf.numberToTerraform(struct!.topkAllocateFail),
  }
}


export function dataThunderDdosNetworkObjectStatsStatsToHclTerraform(struct?: DataThunderDdosNetworkObjectStatsStatsOutputReference | DataThunderDdosNetworkObjectStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_group_aged: {
      value: cdktf.numberToHclTerraform(struct!.agentGroupAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    agent_group_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.agentGroupCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    agent_group_learned: {
      value: cdktf.numberToHclTerraform(struct!.agentGroupLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.bitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duplicate_sample_pkt_rcv: {
      value: cdktf.numberToHclTerraform(struct!.duplicateSamplePktRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_aged: {
      value: cdktf.numberToHclTerraform(struct!.ipAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_learned: {
      value: cdktf.numberToHclTerraform(struct!.ipLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_aged: {
      value: cdktf.numberToHclTerraform(struct!.serviceAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.serviceCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_learned: {
      value: cdktf.numberToHclTerraform(struct!.serviceLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sport_aged: {
      value: cdktf.numberToHclTerraform(struct!.sportAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sport_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.sportCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sport_learned: {
      value: cdktf.numberToHclTerraform(struct!.sportLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_aged: {
      value: cdktf.numberToHclTerraform(struct!.subnetAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.subnetCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_learned: {
      value: cdktf.numberToHclTerraform(struct!.subnetLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_allocate_fail: {
      value: cdktf.numberToHclTerraform(struct!.topkAllocateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNetworkObjectStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosNetworkObjectStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentGroupAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentGroupAged = this._agentGroupAged;
    }
    if (this._agentGroupCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentGroupCreateFail = this._agentGroupCreateFail;
    }
    if (this._agentGroupLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentGroupLearned = this._agentGroupLearned;
    }
    if (this._bitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRate = this._bitRate;
    }
    if (this._duplicateSamplePktRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicateSamplePktRcv = this._duplicateSamplePktRcv;
    }
    if (this._ipAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAged = this._ipAged;
    }
    if (this._ipCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCreateFail = this._ipCreateFail;
    }
    if (this._ipLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipLearned = this._ipLearned;
    }
    if (this._packetRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate;
    }
    if (this._serviceAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAged = this._serviceAged;
    }
    if (this._serviceCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCreateFail = this._serviceCreateFail;
    }
    if (this._serviceLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLearned = this._serviceLearned;
    }
    if (this._sportAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportAged = this._sportAged;
    }
    if (this._sportCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportCreateFail = this._sportCreateFail;
    }
    if (this._sportLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportLearned = this._sportLearned;
    }
    if (this._subnetAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetAged = this._subnetAged;
    }
    if (this._subnetCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCreateFail = this._subnetCreateFail;
    }
    if (this._subnetLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetLearned = this._subnetLearned;
    }
    if (this._topkAllocateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkAllocateFail = this._topkAllocateFail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNetworkObjectStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentGroupAged = undefined;
      this._agentGroupCreateFail = undefined;
      this._agentGroupLearned = undefined;
      this._bitRate = undefined;
      this._duplicateSamplePktRcv = undefined;
      this._ipAged = undefined;
      this._ipCreateFail = undefined;
      this._ipLearned = undefined;
      this._packetRate = undefined;
      this._serviceAged = undefined;
      this._serviceCreateFail = undefined;
      this._serviceLearned = undefined;
      this._sportAged = undefined;
      this._sportCreateFail = undefined;
      this._sportLearned = undefined;
      this._subnetAged = undefined;
      this._subnetCreateFail = undefined;
      this._subnetLearned = undefined;
      this._topkAllocateFail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentGroupAged = value.agentGroupAged;
      this._agentGroupCreateFail = value.agentGroupCreateFail;
      this._agentGroupLearned = value.agentGroupLearned;
      this._bitRate = value.bitRate;
      this._duplicateSamplePktRcv = value.duplicateSamplePktRcv;
      this._ipAged = value.ipAged;
      this._ipCreateFail = value.ipCreateFail;
      this._ipLearned = value.ipLearned;
      this._packetRate = value.packetRate;
      this._serviceAged = value.serviceAged;
      this._serviceCreateFail = value.serviceCreateFail;
      this._serviceLearned = value.serviceLearned;
      this._sportAged = value.sportAged;
      this._sportCreateFail = value.sportCreateFail;
      this._sportLearned = value.sportLearned;
      this._subnetAged = value.subnetAged;
      this._subnetCreateFail = value.subnetCreateFail;
      this._subnetLearned = value.subnetLearned;
      this._topkAllocateFail = value.topkAllocateFail;
    }
  }

  // agent_group_aged - computed: false, optional: true, required: false
  private _agentGroupAged?: number; 
  public get agentGroupAged() {
    return this.getNumberAttribute('agent_group_aged');
  }
  public set agentGroupAged(value: number) {
    this._agentGroupAged = value;
  }
  public resetAgentGroupAged() {
    this._agentGroupAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGroupAgedInput() {
    return this._agentGroupAged;
  }

  // agent_group_create_fail - computed: false, optional: true, required: false
  private _agentGroupCreateFail?: number; 
  public get agentGroupCreateFail() {
    return this.getNumberAttribute('agent_group_create_fail');
  }
  public set agentGroupCreateFail(value: number) {
    this._agentGroupCreateFail = value;
  }
  public resetAgentGroupCreateFail() {
    this._agentGroupCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGroupCreateFailInput() {
    return this._agentGroupCreateFail;
  }

  // agent_group_learned - computed: false, optional: true, required: false
  private _agentGroupLearned?: number; 
  public get agentGroupLearned() {
    return this.getNumberAttribute('agent_group_learned');
  }
  public set agentGroupLearned(value: number) {
    this._agentGroupLearned = value;
  }
  public resetAgentGroupLearned() {
    this._agentGroupLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGroupLearnedInput() {
    return this._agentGroupLearned;
  }

  // bit_rate - computed: false, optional: true, required: false
  private _bitRate?: number; 
  public get bitRate() {
    return this.getNumberAttribute('bit_rate');
  }
  public set bitRate(value: number) {
    this._bitRate = value;
  }
  public resetBitRate() {
    this._bitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateInput() {
    return this._bitRate;
  }

  // duplicate_sample_pkt_rcv - computed: false, optional: true, required: false
  private _duplicateSamplePktRcv?: number; 
  public get duplicateSamplePktRcv() {
    return this.getNumberAttribute('duplicate_sample_pkt_rcv');
  }
  public set duplicateSamplePktRcv(value: number) {
    this._duplicateSamplePktRcv = value;
  }
  public resetDuplicateSamplePktRcv() {
    this._duplicateSamplePktRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateSamplePktRcvInput() {
    return this._duplicateSamplePktRcv;
  }

  // ip_aged - computed: false, optional: true, required: false
  private _ipAged?: number; 
  public get ipAged() {
    return this.getNumberAttribute('ip_aged');
  }
  public set ipAged(value: number) {
    this._ipAged = value;
  }
  public resetIpAged() {
    this._ipAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAgedInput() {
    return this._ipAged;
  }

  // ip_create_fail - computed: false, optional: true, required: false
  private _ipCreateFail?: number; 
  public get ipCreateFail() {
    return this.getNumberAttribute('ip_create_fail');
  }
  public set ipCreateFail(value: number) {
    this._ipCreateFail = value;
  }
  public resetIpCreateFail() {
    this._ipCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCreateFailInput() {
    return this._ipCreateFail;
  }

  // ip_learned - computed: false, optional: true, required: false
  private _ipLearned?: number; 
  public get ipLearned() {
    return this.getNumberAttribute('ip_learned');
  }
  public set ipLearned(value: number) {
    this._ipLearned = value;
  }
  public resetIpLearned() {
    this._ipLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipLearnedInput() {
    return this._ipLearned;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate?: number; 
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
  public set packetRate(value: number) {
    this._packetRate = value;
  }
  public resetPacketRate() {
    this._packetRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }

  // service_aged - computed: false, optional: true, required: false
  private _serviceAged?: number; 
  public get serviceAged() {
    return this.getNumberAttribute('service_aged');
  }
  public set serviceAged(value: number) {
    this._serviceAged = value;
  }
  public resetServiceAged() {
    this._serviceAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgedInput() {
    return this._serviceAged;
  }

  // service_create_fail - computed: false, optional: true, required: false
  private _serviceCreateFail?: number; 
  public get serviceCreateFail() {
    return this.getNumberAttribute('service_create_fail');
  }
  public set serviceCreateFail(value: number) {
    this._serviceCreateFail = value;
  }
  public resetServiceCreateFail() {
    this._serviceCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCreateFailInput() {
    return this._serviceCreateFail;
  }

  // service_learned - computed: false, optional: true, required: false
  private _serviceLearned?: number; 
  public get serviceLearned() {
    return this.getNumberAttribute('service_learned');
  }
  public set serviceLearned(value: number) {
    this._serviceLearned = value;
  }
  public resetServiceLearned() {
    this._serviceLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLearnedInput() {
    return this._serviceLearned;
  }

  // sport_aged - computed: false, optional: true, required: false
  private _sportAged?: number; 
  public get sportAged() {
    return this.getNumberAttribute('sport_aged');
  }
  public set sportAged(value: number) {
    this._sportAged = value;
  }
  public resetSportAged() {
    this._sportAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportAgedInput() {
    return this._sportAged;
  }

  // sport_create_fail - computed: false, optional: true, required: false
  private _sportCreateFail?: number; 
  public get sportCreateFail() {
    return this.getNumberAttribute('sport_create_fail');
  }
  public set sportCreateFail(value: number) {
    this._sportCreateFail = value;
  }
  public resetSportCreateFail() {
    this._sportCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportCreateFailInput() {
    return this._sportCreateFail;
  }

  // sport_learned - computed: false, optional: true, required: false
  private _sportLearned?: number; 
  public get sportLearned() {
    return this.getNumberAttribute('sport_learned');
  }
  public set sportLearned(value: number) {
    this._sportLearned = value;
  }
  public resetSportLearned() {
    this._sportLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportLearnedInput() {
    return this._sportLearned;
  }

  // subnet_aged - computed: false, optional: true, required: false
  private _subnetAged?: number; 
  public get subnetAged() {
    return this.getNumberAttribute('subnet_aged');
  }
  public set subnetAged(value: number) {
    this._subnetAged = value;
  }
  public resetSubnetAged() {
    this._subnetAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetAgedInput() {
    return this._subnetAged;
  }

  // subnet_create_fail - computed: false, optional: true, required: false
  private _subnetCreateFail?: number; 
  public get subnetCreateFail() {
    return this.getNumberAttribute('subnet_create_fail');
  }
  public set subnetCreateFail(value: number) {
    this._subnetCreateFail = value;
  }
  public resetSubnetCreateFail() {
    this._subnetCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCreateFailInput() {
    return this._subnetCreateFail;
  }

  // subnet_learned - computed: false, optional: true, required: false
  private _subnetLearned?: number; 
  public get subnetLearned() {
    return this.getNumberAttribute('subnet_learned');
  }
  public set subnetLearned(value: number) {
    this._subnetLearned = value;
  }
  public resetSubnetLearned() {
    this._subnetLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetLearnedInput() {
    return this._subnetLearned;
  }

  // topk_allocate_fail - computed: false, optional: true, required: false
  private _topkAllocateFail?: number; 
  public get topkAllocateFail() {
    return this.getNumberAttribute('topk_allocate_fail');
  }
  public set topkAllocateFail(value: number) {
    this._topkAllocateFail = value;
  }
  public resetTopkAllocateFail() {
    this._topkAllocateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkAllocateFailInput() {
    return this._topkAllocateFail;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats thunder_ddos_network_object_stats}
*/
export class DataThunderDdosNetworkObjectStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_network_object_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosNetworkObjectStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosNetworkObjectStats to import
  * @param importFromId The id of the existing DataThunderDdosNetworkObjectStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosNetworkObjectStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_network_object_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_network_object_stats thunder_ddos_network_object_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosNetworkObjectStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosNetworkObjectStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_network_object_stats',
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
    this._objectName = config.objectName;
    this._ipList.internalValue = config.ipList;
    this._ipv6List.internalValue = config.ipv6List;
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

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new DataThunderDdosNetworkObjectStatsIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: DataThunderDdosNetworkObjectStatsIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // ipv6_list - computed: false, optional: true, required: false
  private _ipv6List = new DataThunderDdosNetworkObjectStatsIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: DataThunderDdosNetworkObjectStatsIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosNetworkObjectStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosNetworkObjectStatsStats) {
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
      object_name: cdktf.stringToTerraform(this._objectName),
      ip_list: cdktf.listMapper(dataThunderDdosNetworkObjectStatsIpListStructToTerraform, true)(this._ipList.internalValue),
      ipv6_list: cdktf.listMapper(dataThunderDdosNetworkObjectStatsIpv6ListStructToTerraform, true)(this._ipv6List.internalValue),
      stats: dataThunderDdosNetworkObjectStatsStatsToTerraform(this._stats.internalValue),
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
      object_name: {
        value: cdktf.stringToHclTerraform(this._objectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_list: {
        value: cdktf.listMapperHcl(dataThunderDdosNetworkObjectStatsIpListStructToHclTerraform, true)(this._ipList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosNetworkObjectStatsIpListStructList",
      },
      ipv6_list: {
        value: cdktf.listMapperHcl(dataThunderDdosNetworkObjectStatsIpv6ListStructToHclTerraform, true)(this._ipv6List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosNetworkObjectStatsIpv6ListStructList",
      },
      stats: {
        value: dataThunderDdosNetworkObjectStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosNetworkObjectStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
