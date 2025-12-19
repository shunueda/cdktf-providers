// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6FixedNatUserQuotaOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#id DataThunderCgnv6FixedNatUserQuotaOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#oper DataThunderCgnv6FixedNatUserQuotaOper#oper}
  */
  readonly oper?: DataThunderCgnv6FixedNatUserQuotaOperOper;
}
export interface DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#icmp_resources_available DataThunderCgnv6FixedNatUserQuotaOper#icmp_resources_available}
  */
  readonly icmpResourcesAvailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#icmp_resources_used DataThunderCgnv6FixedNatUserQuotaOper#icmp_resources_used}
  */
  readonly icmpResourcesUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#inside_user DataThunderCgnv6FixedNatUserQuotaOper#inside_user}
  */
  readonly insideUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#nat_address DataThunderCgnv6FixedNatUserQuotaOper#nat_address}
  */
  readonly natAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#session_quota_used DataThunderCgnv6FixedNatUserQuotaOper#session_quota_used}
  */
  readonly sessionQuotaUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#tcp_ports_available DataThunderCgnv6FixedNatUserQuotaOper#tcp_ports_available}
  */
  readonly tcpPortsAvailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#tcp_ports_used DataThunderCgnv6FixedNatUserQuotaOper#tcp_ports_used}
  */
  readonly tcpPortsUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#udp_ports_available DataThunderCgnv6FixedNatUserQuotaOper#udp_ports_available}
  */
  readonly udpPortsAvailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#udp_ports_used DataThunderCgnv6FixedNatUserQuotaOper#udp_ports_used}
  */
  readonly udpPortsUsed?: number;
}

export function dataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStructToTerraform(struct?: DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_resources_available: cdktf.numberToTerraform(struct!.icmpResourcesAvailable),
    icmp_resources_used: cdktf.numberToTerraform(struct!.icmpResourcesUsed),
    inside_user: cdktf.stringToTerraform(struct!.insideUser),
    nat_address: cdktf.stringToTerraform(struct!.natAddress),
    session_quota_used: cdktf.numberToTerraform(struct!.sessionQuotaUsed),
    tcp_ports_available: cdktf.numberToTerraform(struct!.tcpPortsAvailable),
    tcp_ports_used: cdktf.numberToTerraform(struct!.tcpPortsUsed),
    udp_ports_available: cdktf.numberToTerraform(struct!.udpPortsAvailable),
    udp_ports_used: cdktf.numberToTerraform(struct!.udpPortsUsed),
  }
}


export function dataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStructToHclTerraform(struct?: DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_resources_available: {
      value: cdktf.numberToHclTerraform(struct!.icmpResourcesAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_resources_used: {
      value: cdktf.numberToHclTerraform(struct!.icmpResourcesUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside_user: {
      value: cdktf.stringToHclTerraform(struct!.insideUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_address: {
      value: cdktf.stringToHclTerraform(struct!.natAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_quota_used: {
      value: cdktf.numberToHclTerraform(struct!.sessionQuotaUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ports_available: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ports_used: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortsUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_ports_available: {
      value: cdktf.numberToHclTerraform(struct!.udpPortsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_ports_used: {
      value: cdktf.numberToHclTerraform(struct!.udpPortsUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpResourcesAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpResourcesAvailable = this._icmpResourcesAvailable;
    }
    if (this._icmpResourcesUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpResourcesUsed = this._icmpResourcesUsed;
    }
    if (this._insideUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideUser = this._insideUser;
    }
    if (this._natAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddress = this._natAddress;
    }
    if (this._sessionQuotaUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionQuotaUsed = this._sessionQuotaUsed;
    }
    if (this._tcpPortsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortsAvailable = this._tcpPortsAvailable;
    }
    if (this._tcpPortsUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortsUsed = this._tcpPortsUsed;
    }
    if (this._udpPortsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortsAvailable = this._udpPortsAvailable;
    }
    if (this._udpPortsUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortsUsed = this._udpPortsUsed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpResourcesAvailable = undefined;
      this._icmpResourcesUsed = undefined;
      this._insideUser = undefined;
      this._natAddress = undefined;
      this._sessionQuotaUsed = undefined;
      this._tcpPortsAvailable = undefined;
      this._tcpPortsUsed = undefined;
      this._udpPortsAvailable = undefined;
      this._udpPortsUsed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpResourcesAvailable = value.icmpResourcesAvailable;
      this._icmpResourcesUsed = value.icmpResourcesUsed;
      this._insideUser = value.insideUser;
      this._natAddress = value.natAddress;
      this._sessionQuotaUsed = value.sessionQuotaUsed;
      this._tcpPortsAvailable = value.tcpPortsAvailable;
      this._tcpPortsUsed = value.tcpPortsUsed;
      this._udpPortsAvailable = value.udpPortsAvailable;
      this._udpPortsUsed = value.udpPortsUsed;
    }
  }

  // icmp_resources_available - computed: false, optional: true, required: false
  private _icmpResourcesAvailable?: number; 
  public get icmpResourcesAvailable() {
    return this.getNumberAttribute('icmp_resources_available');
  }
  public set icmpResourcesAvailable(value: number) {
    this._icmpResourcesAvailable = value;
  }
  public resetIcmpResourcesAvailable() {
    this._icmpResourcesAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpResourcesAvailableInput() {
    return this._icmpResourcesAvailable;
  }

  // icmp_resources_used - computed: false, optional: true, required: false
  private _icmpResourcesUsed?: number; 
  public get icmpResourcesUsed() {
    return this.getNumberAttribute('icmp_resources_used');
  }
  public set icmpResourcesUsed(value: number) {
    this._icmpResourcesUsed = value;
  }
  public resetIcmpResourcesUsed() {
    this._icmpResourcesUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpResourcesUsedInput() {
    return this._icmpResourcesUsed;
  }

  // inside_user - computed: false, optional: true, required: false
  private _insideUser?: string; 
  public get insideUser() {
    return this.getStringAttribute('inside_user');
  }
  public set insideUser(value: string) {
    this._insideUser = value;
  }
  public resetInsideUser() {
    this._insideUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideUserInput() {
    return this._insideUser;
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

  // session_quota_used - computed: false, optional: true, required: false
  private _sessionQuotaUsed?: number; 
  public get sessionQuotaUsed() {
    return this.getNumberAttribute('session_quota_used');
  }
  public set sessionQuotaUsed(value: number) {
    this._sessionQuotaUsed = value;
  }
  public resetSessionQuotaUsed() {
    this._sessionQuotaUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionQuotaUsedInput() {
    return this._sessionQuotaUsed;
  }

  // tcp_ports_available - computed: false, optional: true, required: false
  private _tcpPortsAvailable?: number; 
  public get tcpPortsAvailable() {
    return this.getNumberAttribute('tcp_ports_available');
  }
  public set tcpPortsAvailable(value: number) {
    this._tcpPortsAvailable = value;
  }
  public resetTcpPortsAvailable() {
    this._tcpPortsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortsAvailableInput() {
    return this._tcpPortsAvailable;
  }

  // tcp_ports_used - computed: false, optional: true, required: false
  private _tcpPortsUsed?: number; 
  public get tcpPortsUsed() {
    return this.getNumberAttribute('tcp_ports_used');
  }
  public set tcpPortsUsed(value: number) {
    this._tcpPortsUsed = value;
  }
  public resetTcpPortsUsed() {
    this._tcpPortsUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortsUsedInput() {
    return this._tcpPortsUsed;
  }

  // udp_ports_available - computed: false, optional: true, required: false
  private _udpPortsAvailable?: number; 
  public get udpPortsAvailable() {
    return this.getNumberAttribute('udp_ports_available');
  }
  public set udpPortsAvailable(value: number) {
    this._udpPortsAvailable = value;
  }
  public resetUdpPortsAvailable() {
    this._udpPortsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortsAvailableInput() {
    return this._udpPortsAvailable;
  }

  // udp_ports_used - computed: false, optional: true, required: false
  private _udpPortsUsed?: number; 
  public get udpPortsUsed() {
    return this.getNumberAttribute('udp_ports_used');
  }
  public set udpPortsUsed(value: number) {
    this._udpPortsUsed = value;
  }
  public resetUdpPortsUsed() {
    this._udpPortsUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortsUsedInput() {
    return this._udpPortsUsed;
  }
}

export class DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStructOutputReference {
    return new DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6FixedNatUserQuotaOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#inside_user_v4 DataThunderCgnv6FixedNatUserQuotaOper#inside_user_v4}
  */
  readonly insideUserV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#inside_user_v6 DataThunderCgnv6FixedNatUserQuotaOper#inside_user_v6}
  */
  readonly insideUserV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#partition DataThunderCgnv6FixedNatUserQuotaOper#partition}
  */
  readonly partition?: string;
  /**
  * quota_usage_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#quota_usage_list DataThunderCgnv6FixedNatUserQuotaOper#quota_usage_list}
  */
  readonly quotaUsageList?: DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6FixedNatUserQuotaOperOperToTerraform(struct?: DataThunderCgnv6FixedNatUserQuotaOperOperOutputReference | DataThunderCgnv6FixedNatUserQuotaOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_user_v4: cdktf.stringToTerraform(struct!.insideUserV4),
    inside_user_v6: cdktf.stringToTerraform(struct!.insideUserV6),
    partition: cdktf.stringToTerraform(struct!.partition),
    quota_usage_list: cdktf.listMapper(dataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStructToTerraform, true)(struct!.quotaUsageList),
  }
}


export function dataThunderCgnv6FixedNatUserQuotaOperOperToHclTerraform(struct?: DataThunderCgnv6FixedNatUserQuotaOperOperOutputReference | DataThunderCgnv6FixedNatUserQuotaOperOper): any {
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
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quota_usage_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStructToHclTerraform, true)(struct!.quotaUsageList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatUserQuotaOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6FixedNatUserQuotaOperOper | undefined {
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
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._quotaUsageList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaUsageList = this._quotaUsageList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatUserQuotaOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideUserV4 = undefined;
      this._insideUserV6 = undefined;
      this._partition = undefined;
      this._quotaUsageList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideUserV4 = value.insideUserV4;
      this._insideUserV6 = value.insideUserV6;
      this._partition = value.partition;
      this._quotaUsageList.internalValue = value.quotaUsageList;
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

  // quota_usage_list - computed: false, optional: true, required: false
  private _quotaUsageList = new DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStructList(this, "quota_usage_list", false);
  public get quotaUsageList() {
    return this._quotaUsageList;
  }
  public putQuotaUsageList(value: DataThunderCgnv6FixedNatUserQuotaOperOperQuotaUsageListStruct[] | cdktf.IResolvable) {
    this._quotaUsageList.internalValue = value;
  }
  public resetQuotaUsageList() {
    this._quotaUsageList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaUsageListInput() {
    return this._quotaUsageList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper thunder_cgnv6_fixed_nat_user_quota_oper}
*/
export class DataThunderCgnv6FixedNatUserQuotaOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_user_quota_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6FixedNatUserQuotaOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6FixedNatUserQuotaOper to import
  * @param importFromId The id of the existing DataThunderCgnv6FixedNatUserQuotaOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6FixedNatUserQuotaOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_user_quota_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_user_quota_oper thunder_cgnv6_fixed_nat_user_quota_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6FixedNatUserQuotaOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6FixedNatUserQuotaOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_user_quota_oper',
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
  private _oper = new DataThunderCgnv6FixedNatUserQuotaOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6FixedNatUserQuotaOperOper) {
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
      oper: dataThunderCgnv6FixedNatUserQuotaOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6FixedNatUserQuotaOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6FixedNatUserQuotaOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
