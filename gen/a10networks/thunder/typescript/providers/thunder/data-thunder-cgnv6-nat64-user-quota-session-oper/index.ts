// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6Nat64UserQuotaSessionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#id DataThunderCgnv6Nat64UserQuotaSessionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#oper DataThunderCgnv6Nat64UserQuotaSessionOper#oper}
  */
  readonly oper?: DataThunderCgnv6Nat64UserQuotaSessionOperOper;
}
export interface DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#flags DataThunderCgnv6Nat64UserQuotaSessionOper#flags}
  */
  readonly flags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#icmp_quota DataThunderCgnv6Nat64UserQuotaSessionOper#icmp_quota}
  */
  readonly icmpQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#inside_address DataThunderCgnv6Nat64UserQuotaSessionOper#inside_address}
  */
  readonly insideAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#lid_number DataThunderCgnv6Nat64UserQuotaSessionOper#lid_number}
  */
  readonly lidNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#nat_address DataThunderCgnv6Nat64UserQuotaSessionOper#nat_address}
  */
  readonly natAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#nat_pool_name DataThunderCgnv6Nat64UserQuotaSessionOper#nat_pool_name}
  */
  readonly natPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#prefix_len DataThunderCgnv6Nat64UserQuotaSessionOper#prefix_len}
  */
  readonly prefixLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#session_count DataThunderCgnv6Nat64UserQuotaSessionOper#session_count}
  */
  readonly sessionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#tcp_quota DataThunderCgnv6Nat64UserQuotaSessionOper#tcp_quota}
  */
  readonly tcpQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#udp_quota DataThunderCgnv6Nat64UserQuotaSessionOper#udp_quota}
  */
  readonly udpQuota?: number;
}

export function dataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStructToTerraform(struct?: DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.stringToTerraform(struct!.flags),
    icmp_quota: cdktf.numberToTerraform(struct!.icmpQuota),
    inside_address: cdktf.stringToTerraform(struct!.insideAddress),
    lid_number: cdktf.numberToTerraform(struct!.lidNumber),
    nat_address: cdktf.stringToTerraform(struct!.natAddress),
    nat_pool_name: cdktf.stringToTerraform(struct!.natPoolName),
    prefix_len: cdktf.numberToTerraform(struct!.prefixLen),
    session_count: cdktf.numberToTerraform(struct!.sessionCount),
    tcp_quota: cdktf.numberToTerraform(struct!.tcpQuota),
    udp_quota: cdktf.numberToTerraform(struct!.udpQuota),
  }
}


export function dataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStructToHclTerraform(struct?: DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flags: {
      value: cdktf.stringToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_quota: {
      value: cdktf.numberToHclTerraform(struct!.icmpQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside_address: {
      value: cdktf.stringToHclTerraform(struct!.insideAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lid_number: {
      value: cdktf.numberToHclTerraform(struct!.lidNumber),
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
    nat_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.natPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.prefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_count: {
      value: cdktf.numberToHclTerraform(struct!.sessionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_quota: {
      value: cdktf.numberToHclTerraform(struct!.tcpQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_quota: {
      value: cdktf.numberToHclTerraform(struct!.udpQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._icmpQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpQuota = this._icmpQuota;
    }
    if (this._insideAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddress = this._insideAddress;
    }
    if (this._lidNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidNumber = this._lidNumber;
    }
    if (this._natAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddress = this._natAddress;
    }
    if (this._natPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolName = this._natPoolName;
    }
    if (this._prefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLen = this._prefixLen;
    }
    if (this._sessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCount = this._sessionCount;
    }
    if (this._tcpQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpQuota = this._tcpQuota;
    }
    if (this._udpQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpQuota = this._udpQuota;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._icmpQuota = undefined;
      this._insideAddress = undefined;
      this._lidNumber = undefined;
      this._natAddress = undefined;
      this._natPoolName = undefined;
      this._prefixLen = undefined;
      this._sessionCount = undefined;
      this._tcpQuota = undefined;
      this._udpQuota = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._icmpQuota = value.icmpQuota;
      this._insideAddress = value.insideAddress;
      this._lidNumber = value.lidNumber;
      this._natAddress = value.natAddress;
      this._natPoolName = value.natPoolName;
      this._prefixLen = value.prefixLen;
      this._sessionCount = value.sessionCount;
      this._tcpQuota = value.tcpQuota;
      this._udpQuota = value.udpQuota;
    }
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: string; 
  public get flags() {
    return this.getStringAttribute('flags');
  }
  public set flags(value: string) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // icmp_quota - computed: false, optional: true, required: false
  private _icmpQuota?: number; 
  public get icmpQuota() {
    return this.getNumberAttribute('icmp_quota');
  }
  public set icmpQuota(value: number) {
    this._icmpQuota = value;
  }
  public resetIcmpQuota() {
    this._icmpQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpQuotaInput() {
    return this._icmpQuota;
  }

  // inside_address - computed: false, optional: true, required: false
  private _insideAddress?: string; 
  public get insideAddress() {
    return this.getStringAttribute('inside_address');
  }
  public set insideAddress(value: string) {
    this._insideAddress = value;
  }
  public resetInsideAddress() {
    this._insideAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddressInput() {
    return this._insideAddress;
  }

  // lid_number - computed: false, optional: true, required: false
  private _lidNumber?: number; 
  public get lidNumber() {
    return this.getNumberAttribute('lid_number');
  }
  public set lidNumber(value: number) {
    this._lidNumber = value;
  }
  public resetLidNumber() {
    this._lidNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidNumberInput() {
    return this._lidNumber;
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

  // nat_pool_name - computed: false, optional: true, required: false
  private _natPoolName?: string; 
  public get natPoolName() {
    return this.getStringAttribute('nat_pool_name');
  }
  public set natPoolName(value: string) {
    this._natPoolName = value;
  }
  public resetNatPoolName() {
    this._natPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolNameInput() {
    return this._natPoolName;
  }

  // prefix_len - computed: false, optional: true, required: false
  private _prefixLen?: number; 
  public get prefixLen() {
    return this.getNumberAttribute('prefix_len');
  }
  public set prefixLen(value: number) {
    this._prefixLen = value;
  }
  public resetPrefixLen() {
    this._prefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLenInput() {
    return this._prefixLen;
  }

  // session_count - computed: false, optional: true, required: false
  private _sessionCount?: number; 
  public get sessionCount() {
    return this.getNumberAttribute('session_count');
  }
  public set sessionCount(value: number) {
    this._sessionCount = value;
  }
  public resetSessionCount() {
    this._sessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCountInput() {
    return this._sessionCount;
  }

  // tcp_quota - computed: false, optional: true, required: false
  private _tcpQuota?: number; 
  public get tcpQuota() {
    return this.getNumberAttribute('tcp_quota');
  }
  public set tcpQuota(value: number) {
    this._tcpQuota = value;
  }
  public resetTcpQuota() {
    this._tcpQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpQuotaInput() {
    return this._tcpQuota;
  }

  // udp_quota - computed: false, optional: true, required: false
  private _udpQuota?: number; 
  public get udpQuota() {
    return this.getNumberAttribute('udp_quota');
  }
  public set udpQuota(value: number) {
    this._udpQuota = value;
  }
  public resetUdpQuota() {
    this._udpQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpQuotaInput() {
    return this._udpQuota;
  }
}

export class DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStructOutputReference {
    return new DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6Nat64UserQuotaSessionOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#all_partitions DataThunderCgnv6Nat64UserQuotaSessionOper#all_partitions}
  */
  readonly allPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#display_debug DataThunderCgnv6Nat64UserQuotaSessionOper#display_debug}
  */
  readonly displayDebug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#inside_addr_v6 DataThunderCgnv6Nat64UserQuotaSessionOper#inside_addr_v6}
  */
  readonly insideAddrV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#nat_addr DataThunderCgnv6Nat64UserQuotaSessionOper#nat_addr}
  */
  readonly natAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#nat_pool_name DataThunderCgnv6Nat64UserQuotaSessionOper#nat_pool_name}
  */
  readonly natPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#partition_name DataThunderCgnv6Nat64UserQuotaSessionOper#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#pool_shared DataThunderCgnv6Nat64UserQuotaSessionOper#pool_shared}
  */
  readonly poolShared?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#prefix_filter DataThunderCgnv6Nat64UserQuotaSessionOper#prefix_filter}
  */
  readonly prefixFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#session_count DataThunderCgnv6Nat64UserQuotaSessionOper#session_count}
  */
  readonly sessionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#shared_partition DataThunderCgnv6Nat64UserQuotaSessionOper#shared_partition}
  */
  readonly sharedPartition?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#top_by_all_usage DataThunderCgnv6Nat64UserQuotaSessionOper#top_by_all_usage}
  */
  readonly topByAllUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#top_by_icmp_usage DataThunderCgnv6Nat64UserQuotaSessionOper#top_by_icmp_usage}
  */
  readonly topByIcmpUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#top_by_tcp_usage DataThunderCgnv6Nat64UserQuotaSessionOper#top_by_tcp_usage}
  */
  readonly topByTcpUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#top_by_udp_usage DataThunderCgnv6Nat64UserQuotaSessionOper#top_by_udp_usage}
  */
  readonly topByUdpUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#top_count DataThunderCgnv6Nat64UserQuotaSessionOper#top_count}
  */
  readonly topCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#top_sort_by_cli DataThunderCgnv6Nat64UserQuotaSessionOper#top_sort_by_cli}
  */
  readonly topSortByCli?: number;
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#session_list DataThunderCgnv6Nat64UserQuotaSessionOper#session_list}
  */
  readonly sessionList?: DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6Nat64UserQuotaSessionOperOperToTerraform(struct?: DataThunderCgnv6Nat64UserQuotaSessionOperOperOutputReference | DataThunderCgnv6Nat64UserQuotaSessionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_partitions: cdktf.numberToTerraform(struct!.allPartitions),
    display_debug: cdktf.stringToTerraform(struct!.displayDebug),
    inside_addr_v6: cdktf.stringToTerraform(struct!.insideAddrV6),
    nat_addr: cdktf.stringToTerraform(struct!.natAddr),
    nat_pool_name: cdktf.stringToTerraform(struct!.natPoolName),
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    pool_shared: cdktf.numberToTerraform(struct!.poolShared),
    prefix_filter: cdktf.stringToTerraform(struct!.prefixFilter),
    session_count: cdktf.numberToTerraform(struct!.sessionCount),
    shared_partition: cdktf.numberToTerraform(struct!.sharedPartition),
    top_by_all_usage: cdktf.numberToTerraform(struct!.topByAllUsage),
    top_by_icmp_usage: cdktf.numberToTerraform(struct!.topByIcmpUsage),
    top_by_tcp_usage: cdktf.numberToTerraform(struct!.topByTcpUsage),
    top_by_udp_usage: cdktf.numberToTerraform(struct!.topByUdpUsage),
    top_count: cdktf.numberToTerraform(struct!.topCount),
    top_sort_by_cli: cdktf.numberToTerraform(struct!.topSortByCli),
    session_list: cdktf.listMapper(dataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderCgnv6Nat64UserQuotaSessionOperOperToHclTerraform(struct?: DataThunderCgnv6Nat64UserQuotaSessionOperOperOutputReference | DataThunderCgnv6Nat64UserQuotaSessionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_partitions: {
      value: cdktf.numberToHclTerraform(struct!.allPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_debug: {
      value: cdktf.stringToHclTerraform(struct!.displayDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_addr_v6: {
      value: cdktf.stringToHclTerraform(struct!.insideAddrV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_addr: {
      value: cdktf.stringToHclTerraform(struct!.natAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.natPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_shared: {
      value: cdktf.numberToHclTerraform(struct!.poolShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_filter: {
      value: cdktf.stringToHclTerraform(struct!.prefixFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_count: {
      value: cdktf.numberToHclTerraform(struct!.sessionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_by_all_usage: {
      value: cdktf.numberToHclTerraform(struct!.topByAllUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_by_icmp_usage: {
      value: cdktf.numberToHclTerraform(struct!.topByIcmpUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_by_tcp_usage: {
      value: cdktf.numberToHclTerraform(struct!.topByTcpUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_by_udp_usage: {
      value: cdktf.numberToHclTerraform(struct!.topByUdpUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_count: {
      value: cdktf.numberToHclTerraform(struct!.topCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_sort_by_cli: {
      value: cdktf.numberToHclTerraform(struct!.topSortByCli),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Nat64UserQuotaSessionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6Nat64UserQuotaSessionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPartitions = this._allPartitions;
    }
    if (this._displayDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayDebug = this._displayDebug;
    }
    if (this._insideAddrV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddrV6 = this._insideAddrV6;
    }
    if (this._natAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddr = this._natAddr;
    }
    if (this._natPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolName = this._natPoolName;
    }
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._poolShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolShared = this._poolShared;
    }
    if (this._prefixFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixFilter = this._prefixFilter;
    }
    if (this._sessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCount = this._sessionCount;
    }
    if (this._sharedPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartition = this._sharedPartition;
    }
    if (this._topByAllUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.topByAllUsage = this._topByAllUsage;
    }
    if (this._topByIcmpUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.topByIcmpUsage = this._topByIcmpUsage;
    }
    if (this._topByTcpUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.topByTcpUsage = this._topByTcpUsage;
    }
    if (this._topByUdpUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.topByUdpUsage = this._topByUdpUsage;
    }
    if (this._topCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.topCount = this._topCount;
    }
    if (this._topSortByCli !== undefined) {
      hasAnyValues = true;
      internalValueResult.topSortByCli = this._topSortByCli;
    }
    if (this._sessionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionList = this._sessionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Nat64UserQuotaSessionOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allPartitions = undefined;
      this._displayDebug = undefined;
      this._insideAddrV6 = undefined;
      this._natAddr = undefined;
      this._natPoolName = undefined;
      this._partitionName = undefined;
      this._poolShared = undefined;
      this._prefixFilter = undefined;
      this._sessionCount = undefined;
      this._sharedPartition = undefined;
      this._topByAllUsage = undefined;
      this._topByIcmpUsage = undefined;
      this._topByTcpUsage = undefined;
      this._topByUdpUsage = undefined;
      this._topCount = undefined;
      this._topSortByCli = undefined;
      this._sessionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allPartitions = value.allPartitions;
      this._displayDebug = value.displayDebug;
      this._insideAddrV6 = value.insideAddrV6;
      this._natAddr = value.natAddr;
      this._natPoolName = value.natPoolName;
      this._partitionName = value.partitionName;
      this._poolShared = value.poolShared;
      this._prefixFilter = value.prefixFilter;
      this._sessionCount = value.sessionCount;
      this._sharedPartition = value.sharedPartition;
      this._topByAllUsage = value.topByAllUsage;
      this._topByIcmpUsage = value.topByIcmpUsage;
      this._topByTcpUsage = value.topByTcpUsage;
      this._topByUdpUsage = value.topByUdpUsage;
      this._topCount = value.topCount;
      this._topSortByCli = value.topSortByCli;
      this._sessionList.internalValue = value.sessionList;
    }
  }

  // all_partitions - computed: false, optional: true, required: false
  private _allPartitions?: number; 
  public get allPartitions() {
    return this.getNumberAttribute('all_partitions');
  }
  public set allPartitions(value: number) {
    this._allPartitions = value;
  }
  public resetAllPartitions() {
    this._allPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPartitionsInput() {
    return this._allPartitions;
  }

  // display_debug - computed: false, optional: true, required: false
  private _displayDebug?: string; 
  public get displayDebug() {
    return this.getStringAttribute('display_debug');
  }
  public set displayDebug(value: string) {
    this._displayDebug = value;
  }
  public resetDisplayDebug() {
    this._displayDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayDebugInput() {
    return this._displayDebug;
  }

  // inside_addr_v6 - computed: false, optional: true, required: false
  private _insideAddrV6?: string; 
  public get insideAddrV6() {
    return this.getStringAttribute('inside_addr_v6');
  }
  public set insideAddrV6(value: string) {
    this._insideAddrV6 = value;
  }
  public resetInsideAddrV6() {
    this._insideAddrV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddrV6Input() {
    return this._insideAddrV6;
  }

  // nat_addr - computed: false, optional: true, required: false
  private _natAddr?: string; 
  public get natAddr() {
    return this.getStringAttribute('nat_addr');
  }
  public set natAddr(value: string) {
    this._natAddr = value;
  }
  public resetNatAddr() {
    this._natAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAddrInput() {
    return this._natAddr;
  }

  // nat_pool_name - computed: false, optional: true, required: false
  private _natPoolName?: string; 
  public get natPoolName() {
    return this.getStringAttribute('nat_pool_name');
  }
  public set natPoolName(value: string) {
    this._natPoolName = value;
  }
  public resetNatPoolName() {
    this._natPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolNameInput() {
    return this._natPoolName;
  }

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // pool_shared - computed: false, optional: true, required: false
  private _poolShared?: number; 
  public get poolShared() {
    return this.getNumberAttribute('pool_shared');
  }
  public set poolShared(value: number) {
    this._poolShared = value;
  }
  public resetPoolShared() {
    this._poolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSharedInput() {
    return this._poolShared;
  }

  // prefix_filter - computed: false, optional: true, required: false
  private _prefixFilter?: string; 
  public get prefixFilter() {
    return this.getStringAttribute('prefix_filter');
  }
  public set prefixFilter(value: string) {
    this._prefixFilter = value;
  }
  public resetPrefixFilter() {
    this._prefixFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixFilterInput() {
    return this._prefixFilter;
  }

  // session_count - computed: false, optional: true, required: false
  private _sessionCount?: number; 
  public get sessionCount() {
    return this.getNumberAttribute('session_count');
  }
  public set sessionCount(value: number) {
    this._sessionCount = value;
  }
  public resetSessionCount() {
    this._sessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCountInput() {
    return this._sessionCount;
  }

  // shared_partition - computed: false, optional: true, required: false
  private _sharedPartition?: number; 
  public get sharedPartition() {
    return this.getNumberAttribute('shared_partition');
  }
  public set sharedPartition(value: number) {
    this._sharedPartition = value;
  }
  public resetSharedPartition() {
    this._sharedPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionInput() {
    return this._sharedPartition;
  }

  // top_by_all_usage - computed: false, optional: true, required: false
  private _topByAllUsage?: number; 
  public get topByAllUsage() {
    return this.getNumberAttribute('top_by_all_usage');
  }
  public set topByAllUsage(value: number) {
    this._topByAllUsage = value;
  }
  public resetTopByAllUsage() {
    this._topByAllUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topByAllUsageInput() {
    return this._topByAllUsage;
  }

  // top_by_icmp_usage - computed: false, optional: true, required: false
  private _topByIcmpUsage?: number; 
  public get topByIcmpUsage() {
    return this.getNumberAttribute('top_by_icmp_usage');
  }
  public set topByIcmpUsage(value: number) {
    this._topByIcmpUsage = value;
  }
  public resetTopByIcmpUsage() {
    this._topByIcmpUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topByIcmpUsageInput() {
    return this._topByIcmpUsage;
  }

  // top_by_tcp_usage - computed: false, optional: true, required: false
  private _topByTcpUsage?: number; 
  public get topByTcpUsage() {
    return this.getNumberAttribute('top_by_tcp_usage');
  }
  public set topByTcpUsage(value: number) {
    this._topByTcpUsage = value;
  }
  public resetTopByTcpUsage() {
    this._topByTcpUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topByTcpUsageInput() {
    return this._topByTcpUsage;
  }

  // top_by_udp_usage - computed: false, optional: true, required: false
  private _topByUdpUsage?: number; 
  public get topByUdpUsage() {
    return this.getNumberAttribute('top_by_udp_usage');
  }
  public set topByUdpUsage(value: number) {
    this._topByUdpUsage = value;
  }
  public resetTopByUdpUsage() {
    this._topByUdpUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topByUdpUsageInput() {
    return this._topByUdpUsage;
  }

  // top_count - computed: false, optional: true, required: false
  private _topCount?: number; 
  public get topCount() {
    return this.getNumberAttribute('top_count');
  }
  public set topCount(value: number) {
    this._topCount = value;
  }
  public resetTopCount() {
    this._topCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topCountInput() {
    return this._topCount;
  }

  // top_sort_by_cli - computed: false, optional: true, required: false
  private _topSortByCli?: number; 
  public get topSortByCli() {
    return this.getNumberAttribute('top_sort_by_cli');
  }
  public set topSortByCli(value: number) {
    this._topSortByCli = value;
  }
  public resetTopSortByCli() {
    this._topSortByCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topSortByCliInput() {
    return this._topSortByCli;
  }

  // session_list - computed: false, optional: true, required: false
  private _sessionList = new DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderCgnv6Nat64UserQuotaSessionOperOperSessionListStruct[] | cdktf.IResolvable) {
    this._sessionList.internalValue = value;
  }
  public resetSessionList() {
    this._sessionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionListInput() {
    return this._sessionList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper thunder_cgnv6_nat64_user_quota_session_oper}
*/
export class DataThunderCgnv6Nat64UserQuotaSessionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat64_user_quota_session_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6Nat64UserQuotaSessionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6Nat64UserQuotaSessionOper to import
  * @param importFromId The id of the existing DataThunderCgnv6Nat64UserQuotaSessionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6Nat64UserQuotaSessionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat64_user_quota_session_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_user_quota_session_oper thunder_cgnv6_nat64_user_quota_session_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6Nat64UserQuotaSessionOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6Nat64UserQuotaSessionOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat64_user_quota_session_oper',
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
  private _oper = new DataThunderCgnv6Nat64UserQuotaSessionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6Nat64UserQuotaSessionOperOper) {
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
      oper: dataThunderCgnv6Nat64UserQuotaSessionOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6Nat64UserQuotaSessionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6Nat64UserQuotaSessionOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
