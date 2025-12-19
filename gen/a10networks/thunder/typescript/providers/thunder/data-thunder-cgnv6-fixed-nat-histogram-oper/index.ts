// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6FixedNatHistogramOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#id DataThunderCgnv6FixedNatHistogramOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#oper DataThunderCgnv6FixedNatHistogramOper#oper}
  */
  readonly oper?: DataThunderCgnv6FixedNatHistogramOperOper;
}
export interface DataThunderCgnv6FixedNatHistogramOperOperHistogramListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#active_tcp_users DataThunderCgnv6FixedNatHistogramOper#active_tcp_users}
  */
  readonly activeTcpUsers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#active_udp_users DataThunderCgnv6FixedNatHistogramOper#active_udp_users}
  */
  readonly activeUdpUsers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#bin_end DataThunderCgnv6FixedNatHistogramOper#bin_end}
  */
  readonly binEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#bin_start DataThunderCgnv6FixedNatHistogramOper#bin_start}
  */
  readonly binStart?: number;
}

export function dataThunderCgnv6FixedNatHistogramOperOperHistogramListStructToTerraform(struct?: DataThunderCgnv6FixedNatHistogramOperOperHistogramListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_tcp_users: cdktf.numberToTerraform(struct!.activeTcpUsers),
    active_udp_users: cdktf.numberToTerraform(struct!.activeUdpUsers),
    bin_end: cdktf.numberToTerraform(struct!.binEnd),
    bin_start: cdktf.numberToTerraform(struct!.binStart),
  }
}


export function dataThunderCgnv6FixedNatHistogramOperOperHistogramListStructToHclTerraform(struct?: DataThunderCgnv6FixedNatHistogramOperOperHistogramListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_tcp_users: {
      value: cdktf.numberToHclTerraform(struct!.activeTcpUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_udp_users: {
      value: cdktf.numberToHclTerraform(struct!.activeUdpUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bin_end: {
      value: cdktf.numberToHclTerraform(struct!.binEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bin_start: {
      value: cdktf.numberToHclTerraform(struct!.binStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatHistogramOperOperHistogramListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6FixedNatHistogramOperOperHistogramListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTcpUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTcpUsers = this._activeTcpUsers;
    }
    if (this._activeUdpUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeUdpUsers = this._activeUdpUsers;
    }
    if (this._binEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.binEnd = this._binEnd;
    }
    if (this._binStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.binStart = this._binStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatHistogramOperOperHistogramListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeTcpUsers = undefined;
      this._activeUdpUsers = undefined;
      this._binEnd = undefined;
      this._binStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeTcpUsers = value.activeTcpUsers;
      this._activeUdpUsers = value.activeUdpUsers;
      this._binEnd = value.binEnd;
      this._binStart = value.binStart;
    }
  }

  // active_tcp_users - computed: false, optional: true, required: false
  private _activeTcpUsers?: number; 
  public get activeTcpUsers() {
    return this.getNumberAttribute('active_tcp_users');
  }
  public set activeTcpUsers(value: number) {
    this._activeTcpUsers = value;
  }
  public resetActiveTcpUsers() {
    this._activeTcpUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTcpUsersInput() {
    return this._activeTcpUsers;
  }

  // active_udp_users - computed: false, optional: true, required: false
  private _activeUdpUsers?: number; 
  public get activeUdpUsers() {
    return this.getNumberAttribute('active_udp_users');
  }
  public set activeUdpUsers(value: number) {
    this._activeUdpUsers = value;
  }
  public resetActiveUdpUsers() {
    this._activeUdpUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeUdpUsersInput() {
    return this._activeUdpUsers;
  }

  // bin_end - computed: false, optional: true, required: false
  private _binEnd?: number; 
  public get binEnd() {
    return this.getNumberAttribute('bin_end');
  }
  public set binEnd(value: number) {
    this._binEnd = value;
  }
  public resetBinEnd() {
    this._binEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binEndInput() {
    return this._binEnd;
  }

  // bin_start - computed: false, optional: true, required: false
  private _binStart?: number; 
  public get binStart() {
    return this.getNumberAttribute('bin_start');
  }
  public set binStart(value: number) {
    this._binStart = value;
  }
  public resetBinStart() {
    this._binStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binStartInput() {
    return this._binStart;
  }
}

export class DataThunderCgnv6FixedNatHistogramOperOperHistogramListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6FixedNatHistogramOperOperHistogramListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6FixedNatHistogramOperOperHistogramListStructOutputReference {
    return new DataThunderCgnv6FixedNatHistogramOperOperHistogramListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6FixedNatHistogramOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#inside_end_ipv4 DataThunderCgnv6FixedNatHistogramOper#inside_end_ipv4}
  */
  readonly insideEndIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#inside_end_ipv6 DataThunderCgnv6FixedNatHistogramOper#inside_end_ipv6}
  */
  readonly insideEndIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#inside_start_ipv4 DataThunderCgnv6FixedNatHistogramOper#inside_start_ipv4}
  */
  readonly insideStartIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#inside_start_ipv6 DataThunderCgnv6FixedNatHistogramOper#inside_start_ipv6}
  */
  readonly insideStartIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#inside_user_v4 DataThunderCgnv6FixedNatHistogramOper#inside_user_v4}
  */
  readonly insideUserV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#inside_user_v6 DataThunderCgnv6FixedNatHistogramOper#inside_user_v6}
  */
  readonly insideUserV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#nat_address DataThunderCgnv6FixedNatHistogramOper#nat_address}
  */
  readonly natAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#outside_end_ip DataThunderCgnv6FixedNatHistogramOper#outside_end_ip}
  */
  readonly outsideEndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#outside_start_ip DataThunderCgnv6FixedNatHistogramOper#outside_start_ip}
  */
  readonly outsideStartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#total_users DataThunderCgnv6FixedNatHistogramOper#total_users}
  */
  readonly totalUsers?: number;
  /**
  * histogram_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#histogram_list DataThunderCgnv6FixedNatHistogramOper#histogram_list}
  */
  readonly histogramList?: DataThunderCgnv6FixedNatHistogramOperOperHistogramListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6FixedNatHistogramOperOperToTerraform(struct?: DataThunderCgnv6FixedNatHistogramOperOperOutputReference | DataThunderCgnv6FixedNatHistogramOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_end_ipv4: cdktf.stringToTerraform(struct!.insideEndIpv4),
    inside_end_ipv6: cdktf.stringToTerraform(struct!.insideEndIpv6),
    inside_start_ipv4: cdktf.stringToTerraform(struct!.insideStartIpv4),
    inside_start_ipv6: cdktf.stringToTerraform(struct!.insideStartIpv6),
    inside_user_v4: cdktf.stringToTerraform(struct!.insideUserV4),
    inside_user_v6: cdktf.stringToTerraform(struct!.insideUserV6),
    nat_address: cdktf.stringToTerraform(struct!.natAddress),
    outside_end_ip: cdktf.stringToTerraform(struct!.outsideEndIp),
    outside_start_ip: cdktf.stringToTerraform(struct!.outsideStartIp),
    total_users: cdktf.numberToTerraform(struct!.totalUsers),
    histogram_list: cdktf.listMapper(dataThunderCgnv6FixedNatHistogramOperOperHistogramListStructToTerraform, true)(struct!.histogramList),
  }
}


export function dataThunderCgnv6FixedNatHistogramOperOperToHclTerraform(struct?: DataThunderCgnv6FixedNatHistogramOperOperOutputReference | DataThunderCgnv6FixedNatHistogramOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_end_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.insideEndIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_end_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.insideEndIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_start_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.insideStartIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_start_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.insideStartIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    nat_address: {
      value: cdktf.stringToHclTerraform(struct!.natAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_end_ip: {
      value: cdktf.stringToHclTerraform(struct!.outsideEndIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_start_ip: {
      value: cdktf.stringToHclTerraform(struct!.outsideStartIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_users: {
      value: cdktf.numberToHclTerraform(struct!.totalUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    histogram_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6FixedNatHistogramOperOperHistogramListStructToHclTerraform, true)(struct!.histogramList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6FixedNatHistogramOperOperHistogramListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatHistogramOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6FixedNatHistogramOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideEndIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideEndIpv4 = this._insideEndIpv4;
    }
    if (this._insideEndIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideEndIpv6 = this._insideEndIpv6;
    }
    if (this._insideStartIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideStartIpv4 = this._insideStartIpv4;
    }
    if (this._insideStartIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideStartIpv6 = this._insideStartIpv6;
    }
    if (this._insideUserV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideUserV4 = this._insideUserV4;
    }
    if (this._insideUserV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideUserV6 = this._insideUserV6;
    }
    if (this._natAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddress = this._natAddress;
    }
    if (this._outsideEndIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideEndIp = this._outsideEndIp;
    }
    if (this._outsideStartIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideStartIp = this._outsideStartIp;
    }
    if (this._totalUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUsers = this._totalUsers;
    }
    if (this._histogramList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogramList = this._histogramList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatHistogramOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideEndIpv4 = undefined;
      this._insideEndIpv6 = undefined;
      this._insideStartIpv4 = undefined;
      this._insideStartIpv6 = undefined;
      this._insideUserV4 = undefined;
      this._insideUserV6 = undefined;
      this._natAddress = undefined;
      this._outsideEndIp = undefined;
      this._outsideStartIp = undefined;
      this._totalUsers = undefined;
      this._histogramList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideEndIpv4 = value.insideEndIpv4;
      this._insideEndIpv6 = value.insideEndIpv6;
      this._insideStartIpv4 = value.insideStartIpv4;
      this._insideStartIpv6 = value.insideStartIpv6;
      this._insideUserV4 = value.insideUserV4;
      this._insideUserV6 = value.insideUserV6;
      this._natAddress = value.natAddress;
      this._outsideEndIp = value.outsideEndIp;
      this._outsideStartIp = value.outsideStartIp;
      this._totalUsers = value.totalUsers;
      this._histogramList.internalValue = value.histogramList;
    }
  }

  // inside_end_ipv4 - computed: false, optional: true, required: false
  private _insideEndIpv4?: string; 
  public get insideEndIpv4() {
    return this.getStringAttribute('inside_end_ipv4');
  }
  public set insideEndIpv4(value: string) {
    this._insideEndIpv4 = value;
  }
  public resetInsideEndIpv4() {
    this._insideEndIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideEndIpv4Input() {
    return this._insideEndIpv4;
  }

  // inside_end_ipv6 - computed: false, optional: true, required: false
  private _insideEndIpv6?: string; 
  public get insideEndIpv6() {
    return this.getStringAttribute('inside_end_ipv6');
  }
  public set insideEndIpv6(value: string) {
    this._insideEndIpv6 = value;
  }
  public resetInsideEndIpv6() {
    this._insideEndIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideEndIpv6Input() {
    return this._insideEndIpv6;
  }

  // inside_start_ipv4 - computed: false, optional: true, required: false
  private _insideStartIpv4?: string; 
  public get insideStartIpv4() {
    return this.getStringAttribute('inside_start_ipv4');
  }
  public set insideStartIpv4(value: string) {
    this._insideStartIpv4 = value;
  }
  public resetInsideStartIpv4() {
    this._insideStartIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideStartIpv4Input() {
    return this._insideStartIpv4;
  }

  // inside_start_ipv6 - computed: false, optional: true, required: false
  private _insideStartIpv6?: string; 
  public get insideStartIpv6() {
    return this.getStringAttribute('inside_start_ipv6');
  }
  public set insideStartIpv6(value: string) {
    this._insideStartIpv6 = value;
  }
  public resetInsideStartIpv6() {
    this._insideStartIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideStartIpv6Input() {
    return this._insideStartIpv6;
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

  // outside_end_ip - computed: false, optional: true, required: false
  private _outsideEndIp?: string; 
  public get outsideEndIp() {
    return this.getStringAttribute('outside_end_ip');
  }
  public set outsideEndIp(value: string) {
    this._outsideEndIp = value;
  }
  public resetOutsideEndIp() {
    this._outsideEndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideEndIpInput() {
    return this._outsideEndIp;
  }

  // outside_start_ip - computed: false, optional: true, required: false
  private _outsideStartIp?: string; 
  public get outsideStartIp() {
    return this.getStringAttribute('outside_start_ip');
  }
  public set outsideStartIp(value: string) {
    this._outsideStartIp = value;
  }
  public resetOutsideStartIp() {
    this._outsideStartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideStartIpInput() {
    return this._outsideStartIp;
  }

  // total_users - computed: false, optional: true, required: false
  private _totalUsers?: number; 
  public get totalUsers() {
    return this.getNumberAttribute('total_users');
  }
  public set totalUsers(value: number) {
    this._totalUsers = value;
  }
  public resetTotalUsers() {
    this._totalUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUsersInput() {
    return this._totalUsers;
  }

  // histogram_list - computed: false, optional: true, required: false
  private _histogramList = new DataThunderCgnv6FixedNatHistogramOperOperHistogramListStructList(this, "histogram_list", false);
  public get histogramList() {
    return this._histogramList;
  }
  public putHistogramList(value: DataThunderCgnv6FixedNatHistogramOperOperHistogramListStruct[] | cdktf.IResolvable) {
    this._histogramList.internalValue = value;
  }
  public resetHistogramList() {
    this._histogramList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramListInput() {
    return this._histogramList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper thunder_cgnv6_fixed_nat_histogram_oper}
*/
export class DataThunderCgnv6FixedNatHistogramOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_histogram_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6FixedNatHistogramOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6FixedNatHistogramOper to import
  * @param importFromId The id of the existing DataThunderCgnv6FixedNatHistogramOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6FixedNatHistogramOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_histogram_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_histogram_oper thunder_cgnv6_fixed_nat_histogram_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6FixedNatHistogramOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6FixedNatHistogramOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_histogram_oper',
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
  private _oper = new DataThunderCgnv6FixedNatHistogramOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6FixedNatHistogramOperOper) {
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
      oper: dataThunderCgnv6FixedNatHistogramOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6FixedNatHistogramOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6FixedNatHistogramOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
