// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosMultiPuTrafficStatsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#id DataThunderDdosMultiPuTrafficStatsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#oper DataThunderDdosMultiPuTrafficStatsOper#oper}
  */
  readonly oper?: DataThunderDdosMultiPuTrafficStatsOperOper;
}
export interface DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pu1_cpu DataThunderDdosMultiPuTrafficStatsOper#pu1_cpu}
  */
  readonly pu1Cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pu2_cpu DataThunderDdosMultiPuTrafficStatsOper#pu2_cpu}
  */
  readonly pu2Cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#zone_name DataThunderDdosMultiPuTrafficStatsOper#zone_name}
  */
  readonly zoneName?: string;
}

export function dataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTopToTerraform(struct?: DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pu1_cpu: cdktf.numberToTerraform(struct!.pu1Cpu),
    pu2_cpu: cdktf.numberToTerraform(struct!.pu2Cpu),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function dataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTopToHclTerraform(struct?: DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pu1_cpu: {
      value: cdktf.numberToHclTerraform(struct!.pu1Cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pu2_cpu: {
      value: cdktf.numberToHclTerraform(struct!.pu2Cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pu1Cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu1Cpu = this._pu1Cpu;
    }
    if (this._pu2Cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu2Cpu = this._pu2Cpu;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pu1Cpu = undefined;
      this._pu2Cpu = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pu1Cpu = value.pu1Cpu;
      this._pu2Cpu = value.pu2Cpu;
      this._zoneName = value.zoneName;
    }
  }

  // pu1_cpu - computed: false, optional: true, required: false
  private _pu1Cpu?: number; 
  public get pu1Cpu() {
    return this.getNumberAttribute('pu1_cpu');
  }
  public set pu1Cpu(value: number) {
    this._pu1Cpu = value;
  }
  public resetPu1Cpu() {
    this._pu1Cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu1CpuInput() {
    return this._pu1Cpu;
  }

  // pu2_cpu - computed: false, optional: true, required: false
  private _pu2Cpu?: number; 
  public get pu2Cpu() {
    return this.getNumberAttribute('pu2_cpu');
  }
  public set pu2Cpu(value: number) {
    this._pu2Cpu = value;
  }
  public resetPu2Cpu() {
    this._pu2Cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu2CpuInput() {
    return this._pu2Cpu;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

export class DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTopList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTop[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTopOutputReference {
    return new DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pu1_kbit DataThunderDdosMultiPuTrafficStatsOper#pu1_kbit}
  */
  readonly pu1Kbit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pu2_kbit DataThunderDdosMultiPuTrafficStatsOper#pu2_kbit}
  */
  readonly pu2Kbit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#zone_name DataThunderDdosMultiPuTrafficStatsOper#zone_name}
  */
  readonly zoneName?: string;
}

export function dataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTopToTerraform(struct?: DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pu1_kbit: cdktf.numberToTerraform(struct!.pu1Kbit),
    pu2_kbit: cdktf.numberToTerraform(struct!.pu2Kbit),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function dataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTopToHclTerraform(struct?: DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pu1_kbit: {
      value: cdktf.numberToHclTerraform(struct!.pu1Kbit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pu2_kbit: {
      value: cdktf.numberToHclTerraform(struct!.pu2Kbit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pu1Kbit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu1Kbit = this._pu1Kbit;
    }
    if (this._pu2Kbit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu2Kbit = this._pu2Kbit;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pu1Kbit = undefined;
      this._pu2Kbit = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pu1Kbit = value.pu1Kbit;
      this._pu2Kbit = value.pu2Kbit;
      this._zoneName = value.zoneName;
    }
  }

  // pu1_kbit - computed: false, optional: true, required: false
  private _pu1Kbit?: number; 
  public get pu1Kbit() {
    return this.getNumberAttribute('pu1_kbit');
  }
  public set pu1Kbit(value: number) {
    this._pu1Kbit = value;
  }
  public resetPu1Kbit() {
    this._pu1Kbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu1KbitInput() {
    return this._pu1Kbit;
  }

  // pu2_kbit - computed: false, optional: true, required: false
  private _pu2Kbit?: number; 
  public get pu2Kbit() {
    return this.getNumberAttribute('pu2_kbit');
  }
  public set pu2Kbit(value: number) {
    this._pu2Kbit = value;
  }
  public resetPu2Kbit() {
    this._pu2Kbit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu2KbitInput() {
    return this._pu2Kbit;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

export class DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTopList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTop[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTopOutputReference {
    return new DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pu1_pkt DataThunderDdosMultiPuTrafficStatsOper#pu1_pkt}
  */
  readonly pu1Pkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pu2_pkt DataThunderDdosMultiPuTrafficStatsOper#pu2_pkt}
  */
  readonly pu2Pkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#zone_name DataThunderDdosMultiPuTrafficStatsOper#zone_name}
  */
  readonly zoneName?: string;
}

export function dataThunderDdosMultiPuTrafficStatsOperOperPuListPktTopToTerraform(struct?: DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pu1_pkt: cdktf.numberToTerraform(struct!.pu1Pkt),
    pu2_pkt: cdktf.numberToTerraform(struct!.pu2Pkt),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function dataThunderDdosMultiPuTrafficStatsOperOperPuListPktTopToHclTerraform(struct?: DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pu1_pkt: {
      value: cdktf.numberToHclTerraform(struct!.pu1Pkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pu2_pkt: {
      value: cdktf.numberToHclTerraform(struct!.pu2Pkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pu1Pkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu1Pkt = this._pu1Pkt;
    }
    if (this._pu2Pkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu2Pkt = this._pu2Pkt;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pu1Pkt = undefined;
      this._pu2Pkt = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pu1Pkt = value.pu1Pkt;
      this._pu2Pkt = value.pu2Pkt;
      this._zoneName = value.zoneName;
    }
  }

  // pu1_pkt - computed: false, optional: true, required: false
  private _pu1Pkt?: number; 
  public get pu1Pkt() {
    return this.getNumberAttribute('pu1_pkt');
  }
  public set pu1Pkt(value: number) {
    this._pu1Pkt = value;
  }
  public resetPu1Pkt() {
    this._pu1Pkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu1PktInput() {
    return this._pu1Pkt;
  }

  // pu2_pkt - computed: false, optional: true, required: false
  private _pu2Pkt?: number; 
  public get pu2Pkt() {
    return this.getNumberAttribute('pu2_pkt');
  }
  public set pu2Pkt(value: number) {
    this._pu2Pkt = value;
  }
  public resetPu2Pkt() {
    this._pu2Pkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu2PktInput() {
    return this._pu2Pkt;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

export class DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTopList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTop[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTopOutputReference {
    return new DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosMultiPuTrafficStatsOperOperPuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pu_index DataThunderDdosMultiPuTrafficStatsOper#pu_index}
  */
  readonly puIndex?: number;
  /**
  * cpu_top block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#cpu_top DataThunderDdosMultiPuTrafficStatsOper#cpu_top}
  */
  readonly cpuTop?: DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTop[] | cdktf.IResolvable;
  /**
  * kbit_top block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#kbit_top DataThunderDdosMultiPuTrafficStatsOper#kbit_top}
  */
  readonly kbitTop?: DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTop[] | cdktf.IResolvable;
  /**
  * pkt_top block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pkt_top DataThunderDdosMultiPuTrafficStatsOper#pkt_top}
  */
  readonly pktTop?: DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTop[] | cdktf.IResolvable;
}

export function dataThunderDdosMultiPuTrafficStatsOperOperPuListStructToTerraform(struct?: DataThunderDdosMultiPuTrafficStatsOperOperPuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pu_index: cdktf.numberToTerraform(struct!.puIndex),
    cpu_top: cdktf.listMapper(dataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTopToTerraform, true)(struct!.cpuTop),
    kbit_top: cdktf.listMapper(dataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTopToTerraform, true)(struct!.kbitTop),
    pkt_top: cdktf.listMapper(dataThunderDdosMultiPuTrafficStatsOperOperPuListPktTopToTerraform, true)(struct!.pktTop),
  }
}


export function dataThunderDdosMultiPuTrafficStatsOperOperPuListStructToHclTerraform(struct?: DataThunderDdosMultiPuTrafficStatsOperOperPuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pu_index: {
      value: cdktf.numberToHclTerraform(struct!.puIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_top: {
      value: cdktf.listMapperHcl(dataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTopToHclTerraform, true)(struct!.cpuTop),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTopList",
    },
    kbit_top: {
      value: cdktf.listMapperHcl(dataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTopToHclTerraform, true)(struct!.kbitTop),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTopList",
    },
    pkt_top: {
      value: cdktf.listMapperHcl(dataThunderDdosMultiPuTrafficStatsOperOperPuListPktTopToHclTerraform, true)(struct!.pktTop),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTopList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosMultiPuTrafficStatsOperOperPuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosMultiPuTrafficStatsOperOperPuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._puIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.puIndex = this._puIndex;
    }
    if (this._cpuTop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuTop = this._cpuTop?.internalValue;
    }
    if (this._kbitTop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitTop = this._kbitTop?.internalValue;
    }
    if (this._pktTop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktTop = this._pktTop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosMultiPuTrafficStatsOperOperPuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._puIndex = undefined;
      this._cpuTop.internalValue = undefined;
      this._kbitTop.internalValue = undefined;
      this._pktTop.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._puIndex = value.puIndex;
      this._cpuTop.internalValue = value.cpuTop;
      this._kbitTop.internalValue = value.kbitTop;
      this._pktTop.internalValue = value.pktTop;
    }
  }

  // pu_index - computed: false, optional: true, required: false
  private _puIndex?: number; 
  public get puIndex() {
    return this.getNumberAttribute('pu_index');
  }
  public set puIndex(value: number) {
    this._puIndex = value;
  }
  public resetPuIndex() {
    this._puIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puIndexInput() {
    return this._puIndex;
  }

  // cpu_top - computed: false, optional: true, required: false
  private _cpuTop = new DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTopList(this, "cpu_top", false);
  public get cpuTop() {
    return this._cpuTop;
  }
  public putCpuTop(value: DataThunderDdosMultiPuTrafficStatsOperOperPuListCpuTop[] | cdktf.IResolvable) {
    this._cpuTop.internalValue = value;
  }
  public resetCpuTop() {
    this._cpuTop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTopInput() {
    return this._cpuTop.internalValue;
  }

  // kbit_top - computed: false, optional: true, required: false
  private _kbitTop = new DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTopList(this, "kbit_top", false);
  public get kbitTop() {
    return this._kbitTop;
  }
  public putKbitTop(value: DataThunderDdosMultiPuTrafficStatsOperOperPuListKbitTop[] | cdktf.IResolvable) {
    this._kbitTop.internalValue = value;
  }
  public resetKbitTop() {
    this._kbitTop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitTopInput() {
    return this._kbitTop.internalValue;
  }

  // pkt_top - computed: false, optional: true, required: false
  private _pktTop = new DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTopList(this, "pkt_top", false);
  public get pktTop() {
    return this._pktTop;
  }
  public putPktTop(value: DataThunderDdosMultiPuTrafficStatsOperOperPuListPktTop[] | cdktf.IResolvable) {
    this._pktTop.internalValue = value;
  }
  public resetPktTop() {
    this._pktTop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktTopInput() {
    return this._pktTop.internalValue;
  }
}

export class DataThunderDdosMultiPuTrafficStatsOperOperPuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosMultiPuTrafficStatsOperOperPuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosMultiPuTrafficStatsOperOperPuListStructOutputReference {
    return new DataThunderDdosMultiPuTrafficStatsOperOperPuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosMultiPuTrafficStatsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pu1_cpu_rate DataThunderDdosMultiPuTrafficStatsOper#pu1_cpu_rate}
  */
  readonly pu1CpuRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pu1_throughput_rate DataThunderDdosMultiPuTrafficStatsOper#pu1_throughput_rate}
  */
  readonly pu1ThroughputRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pu2_cpu_rate DataThunderDdosMultiPuTrafficStatsOper#pu2_cpu_rate}
  */
  readonly pu2CpuRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pu2_throughput_rate DataThunderDdosMultiPuTrafficStatsOper#pu2_throughput_rate}
  */
  readonly pu2ThroughputRate?: number;
  /**
  * pu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#pu_list DataThunderDdosMultiPuTrafficStatsOper#pu_list}
  */
  readonly puList?: DataThunderDdosMultiPuTrafficStatsOperOperPuListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosMultiPuTrafficStatsOperOperToTerraform(struct?: DataThunderDdosMultiPuTrafficStatsOperOperOutputReference | DataThunderDdosMultiPuTrafficStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pu1_cpu_rate: cdktf.numberToTerraform(struct!.pu1CpuRate),
    pu1_throughput_rate: cdktf.numberToTerraform(struct!.pu1ThroughputRate),
    pu2_cpu_rate: cdktf.numberToTerraform(struct!.pu2CpuRate),
    pu2_throughput_rate: cdktf.numberToTerraform(struct!.pu2ThroughputRate),
    pu_list: cdktf.listMapper(dataThunderDdosMultiPuTrafficStatsOperOperPuListStructToTerraform, true)(struct!.puList),
  }
}


export function dataThunderDdosMultiPuTrafficStatsOperOperToHclTerraform(struct?: DataThunderDdosMultiPuTrafficStatsOperOperOutputReference | DataThunderDdosMultiPuTrafficStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pu1_cpu_rate: {
      value: cdktf.numberToHclTerraform(struct!.pu1CpuRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pu1_throughput_rate: {
      value: cdktf.numberToHclTerraform(struct!.pu1ThroughputRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pu2_cpu_rate: {
      value: cdktf.numberToHclTerraform(struct!.pu2CpuRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pu2_throughput_rate: {
      value: cdktf.numberToHclTerraform(struct!.pu2ThroughputRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pu_list: {
      value: cdktf.listMapperHcl(dataThunderDdosMultiPuTrafficStatsOperOperPuListStructToHclTerraform, true)(struct!.puList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosMultiPuTrafficStatsOperOperPuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosMultiPuTrafficStatsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosMultiPuTrafficStatsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pu1CpuRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu1CpuRate = this._pu1CpuRate;
    }
    if (this._pu1ThroughputRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu1ThroughputRate = this._pu1ThroughputRate;
    }
    if (this._pu2CpuRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu2CpuRate = this._pu2CpuRate;
    }
    if (this._pu2ThroughputRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu2ThroughputRate = this._pu2ThroughputRate;
    }
    if (this._puList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.puList = this._puList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosMultiPuTrafficStatsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pu1CpuRate = undefined;
      this._pu1ThroughputRate = undefined;
      this._pu2CpuRate = undefined;
      this._pu2ThroughputRate = undefined;
      this._puList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pu1CpuRate = value.pu1CpuRate;
      this._pu1ThroughputRate = value.pu1ThroughputRate;
      this._pu2CpuRate = value.pu2CpuRate;
      this._pu2ThroughputRate = value.pu2ThroughputRate;
      this._puList.internalValue = value.puList;
    }
  }

  // pu1_cpu_rate - computed: false, optional: true, required: false
  private _pu1CpuRate?: number; 
  public get pu1CpuRate() {
    return this.getNumberAttribute('pu1_cpu_rate');
  }
  public set pu1CpuRate(value: number) {
    this._pu1CpuRate = value;
  }
  public resetPu1CpuRate() {
    this._pu1CpuRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu1CpuRateInput() {
    return this._pu1CpuRate;
  }

  // pu1_throughput_rate - computed: false, optional: true, required: false
  private _pu1ThroughputRate?: number; 
  public get pu1ThroughputRate() {
    return this.getNumberAttribute('pu1_throughput_rate');
  }
  public set pu1ThroughputRate(value: number) {
    this._pu1ThroughputRate = value;
  }
  public resetPu1ThroughputRate() {
    this._pu1ThroughputRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu1ThroughputRateInput() {
    return this._pu1ThroughputRate;
  }

  // pu2_cpu_rate - computed: false, optional: true, required: false
  private _pu2CpuRate?: number; 
  public get pu2CpuRate() {
    return this.getNumberAttribute('pu2_cpu_rate');
  }
  public set pu2CpuRate(value: number) {
    this._pu2CpuRate = value;
  }
  public resetPu2CpuRate() {
    this._pu2CpuRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu2CpuRateInput() {
    return this._pu2CpuRate;
  }

  // pu2_throughput_rate - computed: false, optional: true, required: false
  private _pu2ThroughputRate?: number; 
  public get pu2ThroughputRate() {
    return this.getNumberAttribute('pu2_throughput_rate');
  }
  public set pu2ThroughputRate(value: number) {
    this._pu2ThroughputRate = value;
  }
  public resetPu2ThroughputRate() {
    this._pu2ThroughputRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu2ThroughputRateInput() {
    return this._pu2ThroughputRate;
  }

  // pu_list - computed: false, optional: true, required: false
  private _puList = new DataThunderDdosMultiPuTrafficStatsOperOperPuListStructList(this, "pu_list", false);
  public get puList() {
    return this._puList;
  }
  public putPuList(value: DataThunderDdosMultiPuTrafficStatsOperOperPuListStruct[] | cdktf.IResolvable) {
    this._puList.internalValue = value;
  }
  public resetPuList() {
    this._puList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puListInput() {
    return this._puList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper thunder_ddos_multi_pu_traffic_stats_oper}
*/
export class DataThunderDdosMultiPuTrafficStatsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_multi_pu_traffic_stats_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosMultiPuTrafficStatsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosMultiPuTrafficStatsOper to import
  * @param importFromId The id of the existing DataThunderDdosMultiPuTrafficStatsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosMultiPuTrafficStatsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_multi_pu_traffic_stats_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_multi_pu_traffic_stats_oper thunder_ddos_multi_pu_traffic_stats_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosMultiPuTrafficStatsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosMultiPuTrafficStatsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_multi_pu_traffic_stats_oper',
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
  private _oper = new DataThunderDdosMultiPuTrafficStatsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosMultiPuTrafficStatsOperOper) {
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
      oper: dataThunderDdosMultiPuTrafficStatsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosMultiPuTrafficStatsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosMultiPuTrafficStatsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
