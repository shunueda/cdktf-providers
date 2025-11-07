// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6ServerPortOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#id DataThunderCgnv6ServerPortOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#name DataThunderCgnv6ServerPortOper#name}
  */
  readonly name: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#port_number DataThunderCgnv6ServerPortOper#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#protocol DataThunderCgnv6ServerPortOper#protocol}
  */
  readonly protocol: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#oper DataThunderCgnv6ServerPortOper#oper}
  */
  readonly oper?: DataThunderCgnv6ServerPortOperOper;
}
export interface DataThunderCgnv6ServerPortOperOperAutoNatAddrListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#alloc_failed DataThunderCgnv6ServerPortOper#alloc_failed}
  */
  readonly allocFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#auto_nat_ip DataThunderCgnv6ServerPortOper#auto_nat_ip}
  */
  readonly autoNatIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ha_group_id DataThunderCgnv6ServerPortOper#ha_group_id}
  */
  readonly haGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ip_rr DataThunderCgnv6ServerPortOper#ip_rr}
  */
  readonly ipRr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ports_consumed DataThunderCgnv6ServerPortOper#ports_consumed}
  */
  readonly portsConsumed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ports_consumed_total DataThunderCgnv6ServerPortOper#ports_consumed_total}
  */
  readonly portsConsumedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ports_freed_total DataThunderCgnv6ServerPortOper#ports_freed_total}
  */
  readonly portsFreedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#vrid DataThunderCgnv6ServerPortOper#vrid}
  */
  readonly vrid?: number;
}

export function dataThunderCgnv6ServerPortOperOperAutoNatAddrListStructToTerraform(struct?: DataThunderCgnv6ServerPortOperOperAutoNatAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_failed: cdktf.numberToTerraform(struct!.allocFailed),
    auto_nat_ip: cdktf.stringToTerraform(struct!.autoNatIp),
    ha_group_id: cdktf.numberToTerraform(struct!.haGroupId),
    ip_rr: cdktf.numberToTerraform(struct!.ipRr),
    ports_consumed: cdktf.numberToTerraform(struct!.portsConsumed),
    ports_consumed_total: cdktf.numberToTerraform(struct!.portsConsumedTotal),
    ports_freed_total: cdktf.numberToTerraform(struct!.portsFreedTotal),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function dataThunderCgnv6ServerPortOperOperAutoNatAddrListStructToHclTerraform(struct?: DataThunderCgnv6ServerPortOperOperAutoNatAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.allocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.autoNatIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_group_id: {
      value: cdktf.numberToHclTerraform(struct!.haGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_rr: {
      value: cdktf.numberToHclTerraform(struct!.ipRr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_freed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsFreedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServerPortOperOperAutoNatAddrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ServerPortOperOperAutoNatAddrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailed = this._allocFailed;
    }
    if (this._autoNatIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoNatIp = this._autoNatIp;
    }
    if (this._haGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.haGroupId = this._haGroupId;
    }
    if (this._ipRr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRr = this._ipRr;
    }
    if (this._portsConsumed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumed = this._portsConsumed;
    }
    if (this._portsConsumedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumedTotal = this._portsConsumedTotal;
    }
    if (this._portsFreedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsFreedTotal = this._portsFreedTotal;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServerPortOperOperAutoNatAddrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocFailed = undefined;
      this._autoNatIp = undefined;
      this._haGroupId = undefined;
      this._ipRr = undefined;
      this._portsConsumed = undefined;
      this._portsConsumedTotal = undefined;
      this._portsFreedTotal = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocFailed = value.allocFailed;
      this._autoNatIp = value.autoNatIp;
      this._haGroupId = value.haGroupId;
      this._ipRr = value.ipRr;
      this._portsConsumed = value.portsConsumed;
      this._portsConsumedTotal = value.portsConsumedTotal;
      this._portsFreedTotal = value.portsFreedTotal;
      this._vrid = value.vrid;
    }
  }

  // alloc_failed - computed: false, optional: true, required: false
  private _allocFailed?: number; 
  public get allocFailed() {
    return this.getNumberAttribute('alloc_failed');
  }
  public set allocFailed(value: number) {
    this._allocFailed = value;
  }
  public resetAllocFailed() {
    this._allocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailedInput() {
    return this._allocFailed;
  }

  // auto_nat_ip - computed: false, optional: true, required: false
  private _autoNatIp?: string; 
  public get autoNatIp() {
    return this.getStringAttribute('auto_nat_ip');
  }
  public set autoNatIp(value: string) {
    this._autoNatIp = value;
  }
  public resetAutoNatIp() {
    this._autoNatIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNatIpInput() {
    return this._autoNatIp;
  }

  // ha_group_id - computed: false, optional: true, required: false
  private _haGroupId?: number; 
  public get haGroupId() {
    return this.getNumberAttribute('ha_group_id');
  }
  public set haGroupId(value: number) {
    this._haGroupId = value;
  }
  public resetHaGroupId() {
    this._haGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haGroupIdInput() {
    return this._haGroupId;
  }

  // ip_rr - computed: false, optional: true, required: false
  private _ipRr?: number; 
  public get ipRr() {
    return this.getNumberAttribute('ip_rr');
  }
  public set ipRr(value: number) {
    this._ipRr = value;
  }
  public resetIpRr() {
    this._ipRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRrInput() {
    return this._ipRr;
  }

  // ports_consumed - computed: false, optional: true, required: false
  private _portsConsumed?: number; 
  public get portsConsumed() {
    return this.getNumberAttribute('ports_consumed');
  }
  public set portsConsumed(value: number) {
    this._portsConsumed = value;
  }
  public resetPortsConsumed() {
    this._portsConsumed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedInput() {
    return this._portsConsumed;
  }

  // ports_consumed_total - computed: false, optional: true, required: false
  private _portsConsumedTotal?: number; 
  public get portsConsumedTotal() {
    return this.getNumberAttribute('ports_consumed_total');
  }
  public set portsConsumedTotal(value: number) {
    this._portsConsumedTotal = value;
  }
  public resetPortsConsumedTotal() {
    this._portsConsumedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedTotalInput() {
    return this._portsConsumedTotal;
  }

  // ports_freed_total - computed: false, optional: true, required: false
  private _portsFreedTotal?: number; 
  public get portsFreedTotal() {
    return this.getNumberAttribute('ports_freed_total');
  }
  public set portsFreedTotal(value: number) {
    this._portsFreedTotal = value;
  }
  public resetPortsFreedTotal() {
    this._portsFreedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsFreedTotalInput() {
    return this._portsFreedTotal;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class DataThunderCgnv6ServerPortOperOperAutoNatAddrListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ServerPortOperOperAutoNatAddrListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ServerPortOperOperAutoNatAddrListStructOutputReference {
    return new DataThunderCgnv6ServerPortOperOperAutoNatAddrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#alloc_failed DataThunderCgnv6ServerPortOper#alloc_failed}
  */
  readonly allocFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#auto_nat_ip DataThunderCgnv6ServerPortOper#auto_nat_ip}
  */
  readonly autoNatIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ha_group_id DataThunderCgnv6ServerPortOper#ha_group_id}
  */
  readonly haGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ip_rr DataThunderCgnv6ServerPortOper#ip_rr}
  */
  readonly ipRr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ports_consumed DataThunderCgnv6ServerPortOper#ports_consumed}
  */
  readonly portsConsumed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ports_consumed_total DataThunderCgnv6ServerPortOper#ports_consumed_total}
  */
  readonly portsConsumedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ports_freed_total DataThunderCgnv6ServerPortOper#ports_freed_total}
  */
  readonly portsFreedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#vrid DataThunderCgnv6ServerPortOper#vrid}
  */
  readonly vrid?: number;
}

export function dataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStructToTerraform(struct?: DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_failed: cdktf.numberToTerraform(struct!.allocFailed),
    auto_nat_ip: cdktf.stringToTerraform(struct!.autoNatIp),
    ha_group_id: cdktf.numberToTerraform(struct!.haGroupId),
    ip_rr: cdktf.numberToTerraform(struct!.ipRr),
    ports_consumed: cdktf.numberToTerraform(struct!.portsConsumed),
    ports_consumed_total: cdktf.numberToTerraform(struct!.portsConsumedTotal),
    ports_freed_total: cdktf.numberToTerraform(struct!.portsFreedTotal),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function dataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStructToHclTerraform(struct?: DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.allocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.autoNatIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_group_id: {
      value: cdktf.numberToHclTerraform(struct!.haGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_rr: {
      value: cdktf.numberToHclTerraform(struct!.ipRr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_freed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsFreedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailed = this._allocFailed;
    }
    if (this._autoNatIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoNatIp = this._autoNatIp;
    }
    if (this._haGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.haGroupId = this._haGroupId;
    }
    if (this._ipRr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRr = this._ipRr;
    }
    if (this._portsConsumed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumed = this._portsConsumed;
    }
    if (this._portsConsumedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumedTotal = this._portsConsumedTotal;
    }
    if (this._portsFreedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsFreedTotal = this._portsFreedTotal;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocFailed = undefined;
      this._autoNatIp = undefined;
      this._haGroupId = undefined;
      this._ipRr = undefined;
      this._portsConsumed = undefined;
      this._portsConsumedTotal = undefined;
      this._portsFreedTotal = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocFailed = value.allocFailed;
      this._autoNatIp = value.autoNatIp;
      this._haGroupId = value.haGroupId;
      this._ipRr = value.ipRr;
      this._portsConsumed = value.portsConsumed;
      this._portsConsumedTotal = value.portsConsumedTotal;
      this._portsFreedTotal = value.portsFreedTotal;
      this._vrid = value.vrid;
    }
  }

  // alloc_failed - computed: false, optional: true, required: false
  private _allocFailed?: number; 
  public get allocFailed() {
    return this.getNumberAttribute('alloc_failed');
  }
  public set allocFailed(value: number) {
    this._allocFailed = value;
  }
  public resetAllocFailed() {
    this._allocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailedInput() {
    return this._allocFailed;
  }

  // auto_nat_ip - computed: false, optional: true, required: false
  private _autoNatIp?: string; 
  public get autoNatIp() {
    return this.getStringAttribute('auto_nat_ip');
  }
  public set autoNatIp(value: string) {
    this._autoNatIp = value;
  }
  public resetAutoNatIp() {
    this._autoNatIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNatIpInput() {
    return this._autoNatIp;
  }

  // ha_group_id - computed: false, optional: true, required: false
  private _haGroupId?: number; 
  public get haGroupId() {
    return this.getNumberAttribute('ha_group_id');
  }
  public set haGroupId(value: number) {
    this._haGroupId = value;
  }
  public resetHaGroupId() {
    this._haGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haGroupIdInput() {
    return this._haGroupId;
  }

  // ip_rr - computed: false, optional: true, required: false
  private _ipRr?: number; 
  public get ipRr() {
    return this.getNumberAttribute('ip_rr');
  }
  public set ipRr(value: number) {
    this._ipRr = value;
  }
  public resetIpRr() {
    this._ipRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRrInput() {
    return this._ipRr;
  }

  // ports_consumed - computed: false, optional: true, required: false
  private _portsConsumed?: number; 
  public get portsConsumed() {
    return this.getNumberAttribute('ports_consumed');
  }
  public set portsConsumed(value: number) {
    this._portsConsumed = value;
  }
  public resetPortsConsumed() {
    this._portsConsumed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedInput() {
    return this._portsConsumed;
  }

  // ports_consumed_total - computed: false, optional: true, required: false
  private _portsConsumedTotal?: number; 
  public get portsConsumedTotal() {
    return this.getNumberAttribute('ports_consumed_total');
  }
  public set portsConsumedTotal(value: number) {
    this._portsConsumedTotal = value;
  }
  public resetPortsConsumedTotal() {
    this._portsConsumedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedTotalInput() {
    return this._portsConsumedTotal;
  }

  // ports_freed_total - computed: false, optional: true, required: false
  private _portsFreedTotal?: number; 
  public get portsFreedTotal() {
    return this.getNumberAttribute('ports_freed_total');
  }
  public set portsFreedTotal(value: number) {
    this._portsFreedTotal = value;
  }
  public resetPortsFreedTotal() {
    this._portsFreedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsFreedTotalInput() {
    return this._portsFreedTotal;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStructOutputReference {
    return new DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ServerPortOperOperDrsAutoNatListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#drs_name DataThunderCgnv6ServerPortOper#drs_name}
  */
  readonly drsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#drs_port DataThunderCgnv6ServerPortOper#drs_port}
  */
  readonly drsPort?: number;
  /**
  * drs_auto_nat_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#drs_auto_nat_address_list DataThunderCgnv6ServerPortOper#drs_auto_nat_address_list}
  */
  readonly drsAutoNatAddressList?: DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6ServerPortOperOperDrsAutoNatListStructToTerraform(struct?: DataThunderCgnv6ServerPortOperOperDrsAutoNatListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drs_name: cdktf.stringToTerraform(struct!.drsName),
    drs_port: cdktf.numberToTerraform(struct!.drsPort),
    drs_auto_nat_address_list: cdktf.listMapper(dataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStructToTerraform, true)(struct!.drsAutoNatAddressList),
  }
}


export function dataThunderCgnv6ServerPortOperOperDrsAutoNatListStructToHclTerraform(struct?: DataThunderCgnv6ServerPortOperOperDrsAutoNatListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drs_name: {
      value: cdktf.stringToHclTerraform(struct!.drsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_port: {
      value: cdktf.numberToHclTerraform(struct!.drsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drs_auto_nat_address_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStructToHclTerraform, true)(struct!.drsAutoNatAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServerPortOperOperDrsAutoNatListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ServerPortOperOperDrsAutoNatListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsName = this._drsName;
    }
    if (this._drsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsPort = this._drsPort;
    }
    if (this._drsAutoNatAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsAutoNatAddressList = this._drsAutoNatAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServerPortOperOperDrsAutoNatListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drsName = undefined;
      this._drsPort = undefined;
      this._drsAutoNatAddressList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drsName = value.drsName;
      this._drsPort = value.drsPort;
      this._drsAutoNatAddressList.internalValue = value.drsAutoNatAddressList;
    }
  }

  // drs_name - computed: false, optional: true, required: false
  private _drsName?: string; 
  public get drsName() {
    return this.getStringAttribute('drs_name');
  }
  public set drsName(value: string) {
    this._drsName = value;
  }
  public resetDrsName() {
    this._drsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsNameInput() {
    return this._drsName;
  }

  // drs_port - computed: false, optional: true, required: false
  private _drsPort?: number; 
  public get drsPort() {
    return this.getNumberAttribute('drs_port');
  }
  public set drsPort(value: number) {
    this._drsPort = value;
  }
  public resetDrsPort() {
    this._drsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsPortInput() {
    return this._drsPort;
  }

  // drs_auto_nat_address_list - computed: false, optional: true, required: false
  private _drsAutoNatAddressList = new DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStructList(this, "drs_auto_nat_address_list", false);
  public get drsAutoNatAddressList() {
    return this._drsAutoNatAddressList;
  }
  public putDrsAutoNatAddressList(value: DataThunderCgnv6ServerPortOperOperDrsAutoNatListDrsAutoNatAddressListStruct[] | cdktf.IResolvable) {
    this._drsAutoNatAddressList.internalValue = value;
  }
  public resetDrsAutoNatAddressList() {
    this._drsAutoNatAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsAutoNatAddressListInput() {
    return this._drsAutoNatAddressList.internalValue;
  }
}

export class DataThunderCgnv6ServerPortOperOperDrsAutoNatListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ServerPortOperOperDrsAutoNatListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ServerPortOperOperDrsAutoNatListStructOutputReference {
    return new DataThunderCgnv6ServerPortOperOperDrsAutoNatListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#alloc_failed DataThunderCgnv6ServerPortOper#alloc_failed}
  */
  readonly allocFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#nat_ip DataThunderCgnv6ServerPortOper#nat_ip}
  */
  readonly natIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ports_consumed DataThunderCgnv6ServerPortOper#ports_consumed}
  */
  readonly portsConsumed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ports_consumed_total DataThunderCgnv6ServerPortOper#ports_consumed_total}
  */
  readonly portsConsumedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ports_freed_total DataThunderCgnv6ServerPortOper#ports_freed_total}
  */
  readonly portsFreedTotal?: number;
}

export function dataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStructToTerraform(struct?: DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_failed: cdktf.numberToTerraform(struct!.allocFailed),
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    ports_consumed: cdktf.numberToTerraform(struct!.portsConsumed),
    ports_consumed_total: cdktf.numberToTerraform(struct!.portsConsumedTotal),
    ports_freed_total: cdktf.numberToTerraform(struct!.portsFreedTotal),
  }
}


export function dataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStructToHclTerraform(struct?: DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.allocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.natIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports_consumed: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_freed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsFreedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailed = this._allocFailed;
    }
    if (this._natIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIp = this._natIp;
    }
    if (this._portsConsumed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumed = this._portsConsumed;
    }
    if (this._portsConsumedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumedTotal = this._portsConsumedTotal;
    }
    if (this._portsFreedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsFreedTotal = this._portsFreedTotal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocFailed = undefined;
      this._natIp = undefined;
      this._portsConsumed = undefined;
      this._portsConsumedTotal = undefined;
      this._portsFreedTotal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocFailed = value.allocFailed;
      this._natIp = value.natIp;
      this._portsConsumed = value.portsConsumed;
      this._portsConsumedTotal = value.portsConsumedTotal;
      this._portsFreedTotal = value.portsFreedTotal;
    }
  }

  // alloc_failed - computed: false, optional: true, required: false
  private _allocFailed?: number; 
  public get allocFailed() {
    return this.getNumberAttribute('alloc_failed');
  }
  public set allocFailed(value: number) {
    this._allocFailed = value;
  }
  public resetAllocFailed() {
    this._allocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailedInput() {
    return this._allocFailed;
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

  // ports_consumed - computed: false, optional: true, required: false
  private _portsConsumed?: number; 
  public get portsConsumed() {
    return this.getNumberAttribute('ports_consumed');
  }
  public set portsConsumed(value: number) {
    this._portsConsumed = value;
  }
  public resetPortsConsumed() {
    this._portsConsumed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedInput() {
    return this._portsConsumed;
  }

  // ports_consumed_total - computed: false, optional: true, required: false
  private _portsConsumedTotal?: number; 
  public get portsConsumedTotal() {
    return this.getNumberAttribute('ports_consumed_total');
  }
  public set portsConsumedTotal(value: number) {
    this._portsConsumedTotal = value;
  }
  public resetPortsConsumedTotal() {
    this._portsConsumedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedTotalInput() {
    return this._portsConsumedTotal;
  }

  // ports_freed_total - computed: false, optional: true, required: false
  private _portsFreedTotal?: number; 
  public get portsFreedTotal() {
    return this.getNumberAttribute('ports_freed_total');
  }
  public set portsFreedTotal(value: number) {
    this._portsFreedTotal = value;
  }
  public resetPortsFreedTotal() {
    this._portsFreedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsFreedTotalInput() {
    return this._portsFreedTotal;
  }
}

export class DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStructOutputReference {
    return new DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ServerPortOperOperDrsIpNatListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#drs_name DataThunderCgnv6ServerPortOper#drs_name}
  */
  readonly drsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#drs_port DataThunderCgnv6ServerPortOper#drs_port}
  */
  readonly drsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#pool_name DataThunderCgnv6ServerPortOper#pool_name}
  */
  readonly poolName?: string;
  /**
  * nat_pool_addr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#nat_pool_addr_list DataThunderCgnv6ServerPortOper#nat_pool_addr_list}
  */
  readonly natPoolAddrList?: DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6ServerPortOperOperDrsIpNatListStructToTerraform(struct?: DataThunderCgnv6ServerPortOperOperDrsIpNatListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drs_name: cdktf.stringToTerraform(struct!.drsName),
    drs_port: cdktf.numberToTerraform(struct!.drsPort),
    pool_name: cdktf.stringToTerraform(struct!.poolName),
    nat_pool_addr_list: cdktf.listMapper(dataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStructToTerraform, true)(struct!.natPoolAddrList),
  }
}


export function dataThunderCgnv6ServerPortOperOperDrsIpNatListStructToHclTerraform(struct?: DataThunderCgnv6ServerPortOperOperDrsIpNatListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drs_name: {
      value: cdktf.stringToHclTerraform(struct!.drsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs_port: {
      value: cdktf.numberToHclTerraform(struct!.drsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_name: {
      value: cdktf.stringToHclTerraform(struct!.poolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_pool_addr_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStructToHclTerraform, true)(struct!.natPoolAddrList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServerPortOperOperDrsIpNatListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ServerPortOperOperDrsIpNatListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsName = this._drsName;
    }
    if (this._drsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsPort = this._drsPort;
    }
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    if (this._natPoolAddrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrList = this._natPoolAddrList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServerPortOperOperDrsIpNatListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drsName = undefined;
      this._drsPort = undefined;
      this._poolName = undefined;
      this._natPoolAddrList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drsName = value.drsName;
      this._drsPort = value.drsPort;
      this._poolName = value.poolName;
      this._natPoolAddrList.internalValue = value.natPoolAddrList;
    }
  }

  // drs_name - computed: false, optional: true, required: false
  private _drsName?: string; 
  public get drsName() {
    return this.getStringAttribute('drs_name');
  }
  public set drsName(value: string) {
    this._drsName = value;
  }
  public resetDrsName() {
    this._drsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsNameInput() {
    return this._drsName;
  }

  // drs_port - computed: false, optional: true, required: false
  private _drsPort?: number; 
  public get drsPort() {
    return this.getNumberAttribute('drs_port');
  }
  public set drsPort(value: number) {
    this._drsPort = value;
  }
  public resetDrsPort() {
    this._drsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsPortInput() {
    return this._drsPort;
  }

  // pool_name - computed: false, optional: true, required: false
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  public resetPoolName() {
    this._poolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // nat_pool_addr_list - computed: false, optional: true, required: false
  private _natPoolAddrList = new DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStructList(this, "nat_pool_addr_list", false);
  public get natPoolAddrList() {
    return this._natPoolAddrList;
  }
  public putNatPoolAddrList(value: DataThunderCgnv6ServerPortOperOperDrsIpNatListNatPoolAddrListStruct[] | cdktf.IResolvable) {
    this._natPoolAddrList.internalValue = value;
  }
  public resetNatPoolAddrList() {
    this._natPoolAddrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrListInput() {
    return this._natPoolAddrList.internalValue;
  }
}

export class DataThunderCgnv6ServerPortOperOperDrsIpNatListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ServerPortOperOperDrsIpNatListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ServerPortOperOperDrsIpNatListStructOutputReference {
    return new DataThunderCgnv6ServerPortOperOperDrsIpNatListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ServerPortOperOperNatPoolAddrListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#alloc_failed DataThunderCgnv6ServerPortOper#alloc_failed}
  */
  readonly allocFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#nat_ip DataThunderCgnv6ServerPortOper#nat_ip}
  */
  readonly natIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ports_consumed DataThunderCgnv6ServerPortOper#ports_consumed}
  */
  readonly portsConsumed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ports_consumed_total DataThunderCgnv6ServerPortOper#ports_consumed_total}
  */
  readonly portsConsumedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#ports_freed_total DataThunderCgnv6ServerPortOper#ports_freed_total}
  */
  readonly portsFreedTotal?: number;
}

export function dataThunderCgnv6ServerPortOperOperNatPoolAddrListStructToTerraform(struct?: DataThunderCgnv6ServerPortOperOperNatPoolAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_failed: cdktf.numberToTerraform(struct!.allocFailed),
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    ports_consumed: cdktf.numberToTerraform(struct!.portsConsumed),
    ports_consumed_total: cdktf.numberToTerraform(struct!.portsConsumedTotal),
    ports_freed_total: cdktf.numberToTerraform(struct!.portsFreedTotal),
  }
}


export function dataThunderCgnv6ServerPortOperOperNatPoolAddrListStructToHclTerraform(struct?: DataThunderCgnv6ServerPortOperOperNatPoolAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.allocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.natIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports_consumed: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_freed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsFreedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServerPortOperOperNatPoolAddrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ServerPortOperOperNatPoolAddrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailed = this._allocFailed;
    }
    if (this._natIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIp = this._natIp;
    }
    if (this._portsConsumed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumed = this._portsConsumed;
    }
    if (this._portsConsumedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumedTotal = this._portsConsumedTotal;
    }
    if (this._portsFreedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsFreedTotal = this._portsFreedTotal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServerPortOperOperNatPoolAddrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocFailed = undefined;
      this._natIp = undefined;
      this._portsConsumed = undefined;
      this._portsConsumedTotal = undefined;
      this._portsFreedTotal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocFailed = value.allocFailed;
      this._natIp = value.natIp;
      this._portsConsumed = value.portsConsumed;
      this._portsConsumedTotal = value.portsConsumedTotal;
      this._portsFreedTotal = value.portsFreedTotal;
    }
  }

  // alloc_failed - computed: false, optional: true, required: false
  private _allocFailed?: number; 
  public get allocFailed() {
    return this.getNumberAttribute('alloc_failed');
  }
  public set allocFailed(value: number) {
    this._allocFailed = value;
  }
  public resetAllocFailed() {
    this._allocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailedInput() {
    return this._allocFailed;
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

  // ports_consumed - computed: false, optional: true, required: false
  private _portsConsumed?: number; 
  public get portsConsumed() {
    return this.getNumberAttribute('ports_consumed');
  }
  public set portsConsumed(value: number) {
    this._portsConsumed = value;
  }
  public resetPortsConsumed() {
    this._portsConsumed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedInput() {
    return this._portsConsumed;
  }

  // ports_consumed_total - computed: false, optional: true, required: false
  private _portsConsumedTotal?: number; 
  public get portsConsumedTotal() {
    return this.getNumberAttribute('ports_consumed_total');
  }
  public set portsConsumedTotal(value: number) {
    this._portsConsumedTotal = value;
  }
  public resetPortsConsumedTotal() {
    this._portsConsumedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedTotalInput() {
    return this._portsConsumedTotal;
  }

  // ports_freed_total - computed: false, optional: true, required: false
  private _portsFreedTotal?: number; 
  public get portsFreedTotal() {
    return this.getNumberAttribute('ports_freed_total');
  }
  public set portsFreedTotal(value: number) {
    this._portsFreedTotal = value;
  }
  public resetPortsFreedTotal() {
    this._portsFreedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsFreedTotalInput() {
    return this._portsFreedTotal;
  }
}

export class DataThunderCgnv6ServerPortOperOperNatPoolAddrListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ServerPortOperOperNatPoolAddrListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ServerPortOperOperNatPoolAddrListStructOutputReference {
    return new DataThunderCgnv6ServerPortOperOperNatPoolAddrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ServerPortOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#aflow_conn_limit DataThunderCgnv6ServerPortOper#aflow_conn_limit}
  */
  readonly aflowConnLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#aflow_queue_size DataThunderCgnv6ServerPortOper#aflow_queue_size}
  */
  readonly aflowQueueSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#conn_rate_unit DataThunderCgnv6ServerPortOper#conn_rate_unit}
  */
  readonly connRateUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#curr_conn_rate DataThunderCgnv6ServerPortOper#curr_conn_rate}
  */
  readonly currConnRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#curr_observe_rate DataThunderCgnv6ServerPortOper#curr_observe_rate}
  */
  readonly currObserveRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#current_time DataThunderCgnv6ServerPortOper#current_time}
  */
  readonly currentTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#diameter_enabled DataThunderCgnv6ServerPortOper#diameter_enabled}
  */
  readonly diameterEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#disable DataThunderCgnv6ServerPortOper#disable}
  */
  readonly disable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#down_grace_period_allowed DataThunderCgnv6ServerPortOper#down_grace_period_allowed}
  */
  readonly downGracePeriodAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#down_time_grace_period DataThunderCgnv6ServerPortOper#down_time_grace_period}
  */
  readonly downTimeGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#es_resp_time DataThunderCgnv6ServerPortOper#es_resp_time}
  */
  readonly esRespTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#hm_index DataThunderCgnv6ServerPortOper#hm_index}
  */
  readonly hmIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#hm_key DataThunderCgnv6ServerPortOper#hm_key}
  */
  readonly hmKey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#inband_hm_reassign_num DataThunderCgnv6ServerPortOper#inband_hm_reassign_num}
  */
  readonly inbandHmReassignNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#pool_name DataThunderCgnv6ServerPortOper#pool_name}
  */
  readonly poolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#resv_conn DataThunderCgnv6ServerPortOper#resv_conn}
  */
  readonly resvConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#slow_start_conn_limit DataThunderCgnv6ServerPortOper#slow_start_conn_limit}
  */
  readonly slowStartConnLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#soft_down_time DataThunderCgnv6ServerPortOper#soft_down_time}
  */
  readonly softDownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#state DataThunderCgnv6ServerPortOper#state}
  */
  readonly state?: string;
  /**
  * auto_nat_addr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#auto_nat_addr_list DataThunderCgnv6ServerPortOper#auto_nat_addr_list}
  */
  readonly autoNatAddrList?: DataThunderCgnv6ServerPortOperOperAutoNatAddrListStruct[] | cdktf.IResolvable;
  /**
  * drs_auto_nat_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#drs_auto_nat_list DataThunderCgnv6ServerPortOper#drs_auto_nat_list}
  */
  readonly drsAutoNatList?: DataThunderCgnv6ServerPortOperOperDrsAutoNatListStruct[] | cdktf.IResolvable;
  /**
  * drs_ip_nat_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#drs_ip_nat_list DataThunderCgnv6ServerPortOper#drs_ip_nat_list}
  */
  readonly drsIpNatList?: DataThunderCgnv6ServerPortOperOperDrsIpNatListStruct[] | cdktf.IResolvable;
  /**
  * nat_pool_addr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#nat_pool_addr_list DataThunderCgnv6ServerPortOper#nat_pool_addr_list}
  */
  readonly natPoolAddrList?: DataThunderCgnv6ServerPortOperOperNatPoolAddrListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6ServerPortOperOperToTerraform(struct?: DataThunderCgnv6ServerPortOperOperOutputReference | DataThunderCgnv6ServerPortOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflow_conn_limit: cdktf.numberToTerraform(struct!.aflowConnLimit),
    aflow_queue_size: cdktf.numberToTerraform(struct!.aflowQueueSize),
    conn_rate_unit: cdktf.stringToTerraform(struct!.connRateUnit),
    curr_conn_rate: cdktf.numberToTerraform(struct!.currConnRate),
    curr_observe_rate: cdktf.numberToTerraform(struct!.currObserveRate),
    current_time: cdktf.numberToTerraform(struct!.currentTime),
    diameter_enabled: cdktf.numberToTerraform(struct!.diameterEnabled),
    disable: cdktf.numberToTerraform(struct!.disable),
    down_grace_period_allowed: cdktf.numberToTerraform(struct!.downGracePeriodAllowed),
    down_time_grace_period: cdktf.numberToTerraform(struct!.downTimeGracePeriod),
    es_resp_time: cdktf.numberToTerraform(struct!.esRespTime),
    hm_index: cdktf.numberToTerraform(struct!.hmIndex),
    hm_key: cdktf.numberToTerraform(struct!.hmKey),
    inband_hm_reassign_num: cdktf.numberToTerraform(struct!.inbandHmReassignNum),
    pool_name: cdktf.stringToTerraform(struct!.poolName),
    resv_conn: cdktf.numberToTerraform(struct!.resvConn),
    slow_start_conn_limit: cdktf.numberToTerraform(struct!.slowStartConnLimit),
    soft_down_time: cdktf.numberToTerraform(struct!.softDownTime),
    state: cdktf.stringToTerraform(struct!.state),
    auto_nat_addr_list: cdktf.listMapper(dataThunderCgnv6ServerPortOperOperAutoNatAddrListStructToTerraform, true)(struct!.autoNatAddrList),
    drs_auto_nat_list: cdktf.listMapper(dataThunderCgnv6ServerPortOperOperDrsAutoNatListStructToTerraform, true)(struct!.drsAutoNatList),
    drs_ip_nat_list: cdktf.listMapper(dataThunderCgnv6ServerPortOperOperDrsIpNatListStructToTerraform, true)(struct!.drsIpNatList),
    nat_pool_addr_list: cdktf.listMapper(dataThunderCgnv6ServerPortOperOperNatPoolAddrListStructToTerraform, true)(struct!.natPoolAddrList),
  }
}


export function dataThunderCgnv6ServerPortOperOperToHclTerraform(struct?: DataThunderCgnv6ServerPortOperOperOutputReference | DataThunderCgnv6ServerPortOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflow_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.aflowConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflow_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.aflowQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rate_unit: {
      value: cdktf.stringToHclTerraform(struct!.connRateUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curr_conn_rate: {
      value: cdktf.numberToHclTerraform(struct!.currConnRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_observe_rate: {
      value: cdktf.numberToHclTerraform(struct!.currObserveRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_time: {
      value: cdktf.numberToHclTerraform(struct!.currentTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    diameter_enabled: {
      value: cdktf.numberToHclTerraform(struct!.diameterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    down_grace_period_allowed: {
      value: cdktf.numberToHclTerraform(struct!.downGracePeriodAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    down_time_grace_period: {
      value: cdktf.numberToHclTerraform(struct!.downTimeGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_resp_time: {
      value: cdktf.numberToHclTerraform(struct!.esRespTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hm_index: {
      value: cdktf.numberToHclTerraform(struct!.hmIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hm_key: {
      value: cdktf.numberToHclTerraform(struct!.hmKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inband_hm_reassign_num: {
      value: cdktf.numberToHclTerraform(struct!.inbandHmReassignNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_name: {
      value: cdktf.stringToHclTerraform(struct!.poolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resv_conn: {
      value: cdktf.numberToHclTerraform(struct!.resvConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow_start_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.slowStartConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soft_down_time: {
      value: cdktf.numberToHclTerraform(struct!.softDownTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_nat_addr_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6ServerPortOperOperAutoNatAddrListStructToHclTerraform, true)(struct!.autoNatAddrList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ServerPortOperOperAutoNatAddrListStructList",
    },
    drs_auto_nat_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6ServerPortOperOperDrsAutoNatListStructToHclTerraform, true)(struct!.drsAutoNatList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ServerPortOperOperDrsAutoNatListStructList",
    },
    drs_ip_nat_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6ServerPortOperOperDrsIpNatListStructToHclTerraform, true)(struct!.drsIpNatList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ServerPortOperOperDrsIpNatListStructList",
    },
    nat_pool_addr_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6ServerPortOperOperNatPoolAddrListStructToHclTerraform, true)(struct!.natPoolAddrList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ServerPortOperOperNatPoolAddrListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ServerPortOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6ServerPortOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflowConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflowConnLimit = this._aflowConnLimit;
    }
    if (this._aflowQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflowQueueSize = this._aflowQueueSize;
    }
    if (this._connRateUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateUnit = this._connRateUnit;
    }
    if (this._currConnRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConnRate = this._currConnRate;
    }
    if (this._currObserveRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currObserveRate = this._currObserveRate;
    }
    if (this._currentTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentTime = this._currentTime;
    }
    if (this._diameterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.diameterEnabled = this._diameterEnabled;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._downGracePeriodAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.downGracePeriodAllowed = this._downGracePeriodAllowed;
    }
    if (this._downTimeGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.downTimeGracePeriod = this._downTimeGracePeriod;
    }
    if (this._esRespTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.esRespTime = this._esRespTime;
    }
    if (this._hmIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmIndex = this._hmIndex;
    }
    if (this._hmKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmKey = this._hmKey;
    }
    if (this._inbandHmReassignNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbandHmReassignNum = this._inbandHmReassignNum;
    }
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    if (this._resvConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resvConn = this._resvConn;
    }
    if (this._slowStartConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowStartConnLimit = this._slowStartConnLimit;
    }
    if (this._softDownTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.softDownTime = this._softDownTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._autoNatAddrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoNatAddrList = this._autoNatAddrList?.internalValue;
    }
    if (this._drsAutoNatList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsAutoNatList = this._drsAutoNatList?.internalValue;
    }
    if (this._drsIpNatList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drsIpNatList = this._drsIpNatList?.internalValue;
    }
    if (this._natPoolAddrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrList = this._natPoolAddrList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ServerPortOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aflowConnLimit = undefined;
      this._aflowQueueSize = undefined;
      this._connRateUnit = undefined;
      this._currConnRate = undefined;
      this._currObserveRate = undefined;
      this._currentTime = undefined;
      this._diameterEnabled = undefined;
      this._disable = undefined;
      this._downGracePeriodAllowed = undefined;
      this._downTimeGracePeriod = undefined;
      this._esRespTime = undefined;
      this._hmIndex = undefined;
      this._hmKey = undefined;
      this._inbandHmReassignNum = undefined;
      this._poolName = undefined;
      this._resvConn = undefined;
      this._slowStartConnLimit = undefined;
      this._softDownTime = undefined;
      this._state = undefined;
      this._autoNatAddrList.internalValue = undefined;
      this._drsAutoNatList.internalValue = undefined;
      this._drsIpNatList.internalValue = undefined;
      this._natPoolAddrList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aflowConnLimit = value.aflowConnLimit;
      this._aflowQueueSize = value.aflowQueueSize;
      this._connRateUnit = value.connRateUnit;
      this._currConnRate = value.currConnRate;
      this._currObserveRate = value.currObserveRate;
      this._currentTime = value.currentTime;
      this._diameterEnabled = value.diameterEnabled;
      this._disable = value.disable;
      this._downGracePeriodAllowed = value.downGracePeriodAllowed;
      this._downTimeGracePeriod = value.downTimeGracePeriod;
      this._esRespTime = value.esRespTime;
      this._hmIndex = value.hmIndex;
      this._hmKey = value.hmKey;
      this._inbandHmReassignNum = value.inbandHmReassignNum;
      this._poolName = value.poolName;
      this._resvConn = value.resvConn;
      this._slowStartConnLimit = value.slowStartConnLimit;
      this._softDownTime = value.softDownTime;
      this._state = value.state;
      this._autoNatAddrList.internalValue = value.autoNatAddrList;
      this._drsAutoNatList.internalValue = value.drsAutoNatList;
      this._drsIpNatList.internalValue = value.drsIpNatList;
      this._natPoolAddrList.internalValue = value.natPoolAddrList;
    }
  }

  // aflow_conn_limit - computed: false, optional: true, required: false
  private _aflowConnLimit?: number; 
  public get aflowConnLimit() {
    return this.getNumberAttribute('aflow_conn_limit');
  }
  public set aflowConnLimit(value: number) {
    this._aflowConnLimit = value;
  }
  public resetAflowConnLimit() {
    this._aflowConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflowConnLimitInput() {
    return this._aflowConnLimit;
  }

  // aflow_queue_size - computed: false, optional: true, required: false
  private _aflowQueueSize?: number; 
  public get aflowQueueSize() {
    return this.getNumberAttribute('aflow_queue_size');
  }
  public set aflowQueueSize(value: number) {
    this._aflowQueueSize = value;
  }
  public resetAflowQueueSize() {
    this._aflowQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflowQueueSizeInput() {
    return this._aflowQueueSize;
  }

  // conn_rate_unit - computed: false, optional: true, required: false
  private _connRateUnit?: string; 
  public get connRateUnit() {
    return this.getStringAttribute('conn_rate_unit');
  }
  public set connRateUnit(value: string) {
    this._connRateUnit = value;
  }
  public resetConnRateUnit() {
    this._connRateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateUnitInput() {
    return this._connRateUnit;
  }

  // curr_conn_rate - computed: false, optional: true, required: false
  private _currConnRate?: number; 
  public get currConnRate() {
    return this.getNumberAttribute('curr_conn_rate');
  }
  public set currConnRate(value: number) {
    this._currConnRate = value;
  }
  public resetCurrConnRate() {
    this._currConnRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConnRateInput() {
    return this._currConnRate;
  }

  // curr_observe_rate - computed: false, optional: true, required: false
  private _currObserveRate?: number; 
  public get currObserveRate() {
    return this.getNumberAttribute('curr_observe_rate');
  }
  public set currObserveRate(value: number) {
    this._currObserveRate = value;
  }
  public resetCurrObserveRate() {
    this._currObserveRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currObserveRateInput() {
    return this._currObserveRate;
  }

  // current_time - computed: false, optional: true, required: false
  private _currentTime?: number; 
  public get currentTime() {
    return this.getNumberAttribute('current_time');
  }
  public set currentTime(value: number) {
    this._currentTime = value;
  }
  public resetCurrentTime() {
    this._currentTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentTimeInput() {
    return this._currentTime;
  }

  // diameter_enabled - computed: false, optional: true, required: false
  private _diameterEnabled?: number; 
  public get diameterEnabled() {
    return this.getNumberAttribute('diameter_enabled');
  }
  public set diameterEnabled(value: number) {
    this._diameterEnabled = value;
  }
  public resetDiameterEnabled() {
    this._diameterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diameterEnabledInput() {
    return this._diameterEnabled;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // down_grace_period_allowed - computed: false, optional: true, required: false
  private _downGracePeriodAllowed?: number; 
  public get downGracePeriodAllowed() {
    return this.getNumberAttribute('down_grace_period_allowed');
  }
  public set downGracePeriodAllowed(value: number) {
    this._downGracePeriodAllowed = value;
  }
  public resetDownGracePeriodAllowed() {
    this._downGracePeriodAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downGracePeriodAllowedInput() {
    return this._downGracePeriodAllowed;
  }

  // down_time_grace_period - computed: false, optional: true, required: false
  private _downTimeGracePeriod?: number; 
  public get downTimeGracePeriod() {
    return this.getNumberAttribute('down_time_grace_period');
  }
  public set downTimeGracePeriod(value: number) {
    this._downTimeGracePeriod = value;
  }
  public resetDownTimeGracePeriod() {
    this._downTimeGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downTimeGracePeriodInput() {
    return this._downTimeGracePeriod;
  }

  // es_resp_time - computed: false, optional: true, required: false
  private _esRespTime?: number; 
  public get esRespTime() {
    return this.getNumberAttribute('es_resp_time');
  }
  public set esRespTime(value: number) {
    this._esRespTime = value;
  }
  public resetEsRespTime() {
    this._esRespTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esRespTimeInput() {
    return this._esRespTime;
  }

  // hm_index - computed: false, optional: true, required: false
  private _hmIndex?: number; 
  public get hmIndex() {
    return this.getNumberAttribute('hm_index');
  }
  public set hmIndex(value: number) {
    this._hmIndex = value;
  }
  public resetHmIndex() {
    this._hmIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmIndexInput() {
    return this._hmIndex;
  }

  // hm_key - computed: false, optional: true, required: false
  private _hmKey?: number; 
  public get hmKey() {
    return this.getNumberAttribute('hm_key');
  }
  public set hmKey(value: number) {
    this._hmKey = value;
  }
  public resetHmKey() {
    this._hmKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmKeyInput() {
    return this._hmKey;
  }

  // inband_hm_reassign_num - computed: false, optional: true, required: false
  private _inbandHmReassignNum?: number; 
  public get inbandHmReassignNum() {
    return this.getNumberAttribute('inband_hm_reassign_num');
  }
  public set inbandHmReassignNum(value: number) {
    this._inbandHmReassignNum = value;
  }
  public resetInbandHmReassignNum() {
    this._inbandHmReassignNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandHmReassignNumInput() {
    return this._inbandHmReassignNum;
  }

  // pool_name - computed: false, optional: true, required: false
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  public resetPoolName() {
    this._poolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // resv_conn - computed: false, optional: true, required: false
  private _resvConn?: number; 
  public get resvConn() {
    return this.getNumberAttribute('resv_conn');
  }
  public set resvConn(value: number) {
    this._resvConn = value;
  }
  public resetResvConn() {
    this._resvConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resvConnInput() {
    return this._resvConn;
  }

  // slow_start_conn_limit - computed: false, optional: true, required: false
  private _slowStartConnLimit?: number; 
  public get slowStartConnLimit() {
    return this.getNumberAttribute('slow_start_conn_limit');
  }
  public set slowStartConnLimit(value: number) {
    this._slowStartConnLimit = value;
  }
  public resetSlowStartConnLimit() {
    this._slowStartConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartConnLimitInput() {
    return this._slowStartConnLimit;
  }

  // soft_down_time - computed: false, optional: true, required: false
  private _softDownTime?: number; 
  public get softDownTime() {
    return this.getNumberAttribute('soft_down_time');
  }
  public set softDownTime(value: number) {
    this._softDownTime = value;
  }
  public resetSoftDownTime() {
    this._softDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDownTimeInput() {
    return this._softDownTime;
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

  // auto_nat_addr_list - computed: false, optional: true, required: false
  private _autoNatAddrList = new DataThunderCgnv6ServerPortOperOperAutoNatAddrListStructList(this, "auto_nat_addr_list", false);
  public get autoNatAddrList() {
    return this._autoNatAddrList;
  }
  public putAutoNatAddrList(value: DataThunderCgnv6ServerPortOperOperAutoNatAddrListStruct[] | cdktf.IResolvable) {
    this._autoNatAddrList.internalValue = value;
  }
  public resetAutoNatAddrList() {
    this._autoNatAddrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNatAddrListInput() {
    return this._autoNatAddrList.internalValue;
  }

  // drs_auto_nat_list - computed: false, optional: true, required: false
  private _drsAutoNatList = new DataThunderCgnv6ServerPortOperOperDrsAutoNatListStructList(this, "drs_auto_nat_list", false);
  public get drsAutoNatList() {
    return this._drsAutoNatList;
  }
  public putDrsAutoNatList(value: DataThunderCgnv6ServerPortOperOperDrsAutoNatListStruct[] | cdktf.IResolvable) {
    this._drsAutoNatList.internalValue = value;
  }
  public resetDrsAutoNatList() {
    this._drsAutoNatList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsAutoNatListInput() {
    return this._drsAutoNatList.internalValue;
  }

  // drs_ip_nat_list - computed: false, optional: true, required: false
  private _drsIpNatList = new DataThunderCgnv6ServerPortOperOperDrsIpNatListStructList(this, "drs_ip_nat_list", false);
  public get drsIpNatList() {
    return this._drsIpNatList;
  }
  public putDrsIpNatList(value: DataThunderCgnv6ServerPortOperOperDrsIpNatListStruct[] | cdktf.IResolvable) {
    this._drsIpNatList.internalValue = value;
  }
  public resetDrsIpNatList() {
    this._drsIpNatList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drsIpNatListInput() {
    return this._drsIpNatList.internalValue;
  }

  // nat_pool_addr_list - computed: false, optional: true, required: false
  private _natPoolAddrList = new DataThunderCgnv6ServerPortOperOperNatPoolAddrListStructList(this, "nat_pool_addr_list", false);
  public get natPoolAddrList() {
    return this._natPoolAddrList;
  }
  public putNatPoolAddrList(value: DataThunderCgnv6ServerPortOperOperNatPoolAddrListStruct[] | cdktf.IResolvable) {
    this._natPoolAddrList.internalValue = value;
  }
  public resetNatPoolAddrList() {
    this._natPoolAddrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrListInput() {
    return this._natPoolAddrList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper thunder_cgnv6_server_port_oper}
*/
export class DataThunderCgnv6ServerPortOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_server_port_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6ServerPortOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6ServerPortOper to import
  * @param importFromId The id of the existing DataThunderCgnv6ServerPortOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6ServerPortOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_server_port_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_server_port_oper thunder_cgnv6_server_port_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6ServerPortOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6ServerPortOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_server_port_oper',
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
    this._name = config.name;
    this._portNumber = config.portNumber;
    this._protocol = config.protocol;
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

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderCgnv6ServerPortOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6ServerPortOperOper) {
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
      name: cdktf.stringToTerraform(this._name),
      port_number: cdktf.numberToTerraform(this._portNumber),
      protocol: cdktf.stringToTerraform(this._protocol),
      oper: dataThunderCgnv6ServerPortOperOperToTerraform(this._oper.internalValue),
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
      port_number: {
        value: cdktf.numberToHclTerraform(this._portNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderCgnv6ServerPortOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6ServerPortOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
