// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6FixedNatFullConeSessionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#id DataThunderCgnv6FixedNatFullConeSessionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#oper DataThunderCgnv6FixedNatFullConeSessionOper#oper}
  */
  readonly oper?: DataThunderCgnv6FixedNatFullConeSessionOperOper;
}
export interface DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#age DataThunderCgnv6FixedNatFullConeSessionOper#age}
  */
  readonly age?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#cpu DataThunderCgnv6FixedNatFullConeSessionOper#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#eif DataThunderCgnv6FixedNatFullConeSessionOper#eif}
  */
  readonly eif?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#eim DataThunderCgnv6FixedNatFullConeSessionOper#eim}
  */
  readonly eim?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#flags DataThunderCgnv6FixedNatFullConeSessionOper#flags}
  */
  readonly flags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#inside_address DataThunderCgnv6FixedNatFullConeSessionOper#inside_address}
  */
  readonly insideAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#inside_port DataThunderCgnv6FixedNatFullConeSessionOper#inside_port}
  */
  readonly insidePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#inside_v6_address DataThunderCgnv6FixedNatFullConeSessionOper#inside_v6_address}
  */
  readonly insideV6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#nat_address DataThunderCgnv6FixedNatFullConeSessionOper#nat_address}
  */
  readonly natAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#nat_port DataThunderCgnv6FixedNatFullConeSessionOper#nat_port}
  */
  readonly natPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#protocol DataThunderCgnv6FixedNatFullConeSessionOper#protocol}
  */
  readonly protocol?: string;
}

export function dataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStructToTerraform(struct?: DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.stringToTerraform(struct!.age),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    eif: cdktf.numberToTerraform(struct!.eif),
    eim: cdktf.numberToTerraform(struct!.eim),
    flags: cdktf.stringToTerraform(struct!.flags),
    inside_address: cdktf.stringToTerraform(struct!.insideAddress),
    inside_port: cdktf.numberToTerraform(struct!.insidePort),
    inside_v6_address: cdktf.stringToTerraform(struct!.insideV6Address),
    nat_address: cdktf.stringToTerraform(struct!.natAddress),
    nat_port: cdktf.numberToTerraform(struct!.natPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStructToHclTerraform(struct?: DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.stringToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eif: {
      value: cdktf.numberToHclTerraform(struct!.eif),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eim: {
      value: cdktf.numberToHclTerraform(struct!.eim),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flags: {
      value: cdktf.stringToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_address: {
      value: cdktf.stringToHclTerraform(struct!.insideAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_port: {
      value: cdktf.numberToHclTerraform(struct!.insidePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside_v6_address: {
      value: cdktf.stringToHclTerraform(struct!.insideV6Address),
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
    nat_port: {
      value: cdktf.numberToHclTerraform(struct!.natPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._eif !== undefined) {
      hasAnyValues = true;
      internalValueResult.eif = this._eif;
    }
    if (this._eim !== undefined) {
      hasAnyValues = true;
      internalValueResult.eim = this._eim;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._insideAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddress = this._insideAddress;
    }
    if (this._insidePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.insidePort = this._insidePort;
    }
    if (this._insideV6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideV6Address = this._insideV6Address;
    }
    if (this._natAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddress = this._natAddress;
    }
    if (this._natPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPort = this._natPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._cpu = undefined;
      this._eif = undefined;
      this._eim = undefined;
      this._flags = undefined;
      this._insideAddress = undefined;
      this._insidePort = undefined;
      this._insideV6Address = undefined;
      this._natAddress = undefined;
      this._natPort = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._cpu = value.cpu;
      this._eif = value.eif;
      this._eim = value.eim;
      this._flags = value.flags;
      this._insideAddress = value.insideAddress;
      this._insidePort = value.insidePort;
      this._insideV6Address = value.insideV6Address;
      this._natAddress = value.natAddress;
      this._natPort = value.natPort;
      this._protocol = value.protocol;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: string; 
  public get age() {
    return this.getStringAttribute('age');
  }
  public set age(value: string) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // eif - computed: false, optional: true, required: false
  private _eif?: number; 
  public get eif() {
    return this.getNumberAttribute('eif');
  }
  public set eif(value: number) {
    this._eif = value;
  }
  public resetEif() {
    this._eif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eifInput() {
    return this._eif;
  }

  // eim - computed: false, optional: true, required: false
  private _eim?: number; 
  public get eim() {
    return this.getNumberAttribute('eim');
  }
  public set eim(value: number) {
    this._eim = value;
  }
  public resetEim() {
    this._eim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eimInput() {
    return this._eim;
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

  // inside_port - computed: false, optional: true, required: false
  private _insidePort?: number; 
  public get insidePort() {
    return this.getNumberAttribute('inside_port');
  }
  public set insidePort(value: number) {
    this._insidePort = value;
  }
  public resetInsidePort() {
    this._insidePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insidePortInput() {
    return this._insidePort;
  }

  // inside_v6_address - computed: false, optional: true, required: false
  private _insideV6Address?: string; 
  public get insideV6Address() {
    return this.getStringAttribute('inside_v6_address');
  }
  public set insideV6Address(value: string) {
    this._insideV6Address = value;
  }
  public resetInsideV6Address() {
    this._insideV6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideV6AddressInput() {
    return this._insideV6Address;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStructOutputReference {
    return new DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6FixedNatFullConeSessionOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#all_partitions DataThunderCgnv6FixedNatFullConeSessionOper#all_partitions}
  */
  readonly allPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#debug_session DataThunderCgnv6FixedNatFullConeSessionOper#debug_session}
  */
  readonly debugSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#dslite_total_session_count DataThunderCgnv6FixedNatFullConeSessionOper#dslite_total_session_count}
  */
  readonly dsliteTotalSessionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#graceful DataThunderCgnv6FixedNatFullConeSessionOper#graceful}
  */
  readonly graceful?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#inside_addr DataThunderCgnv6FixedNatFullConeSessionOper#inside_addr}
  */
  readonly insideAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#inside_addr_end DataThunderCgnv6FixedNatFullConeSessionOper#inside_addr_end}
  */
  readonly insideAddrEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#inside_addr_start DataThunderCgnv6FixedNatFullConeSessionOper#inside_addr_start}
  */
  readonly insideAddrStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#inside_addr_v6 DataThunderCgnv6FixedNatFullConeSessionOper#inside_addr_v6}
  */
  readonly insideAddrV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#inside_addr_v6_end DataThunderCgnv6FixedNatFullConeSessionOper#inside_addr_v6_end}
  */
  readonly insideAddrV6End?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#inside_addr_v6_start DataThunderCgnv6FixedNatFullConeSessionOper#inside_addr_v6_start}
  */
  readonly insideAddrV6Start?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#inside_port DataThunderCgnv6FixedNatFullConeSessionOper#inside_port}
  */
  readonly insidePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#nat44_total_session_count DataThunderCgnv6FixedNatFullConeSessionOper#nat44_total_session_count}
  */
  readonly nat44TotalSessionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#nat64_total_session_count DataThunderCgnv6FixedNatFullConeSessionOper#nat64_total_session_count}
  */
  readonly nat64TotalSessionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#nat_addr DataThunderCgnv6FixedNatFullConeSessionOper#nat_addr}
  */
  readonly natAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#nat_addr_end DataThunderCgnv6FixedNatFullConeSessionOper#nat_addr_end}
  */
  readonly natAddrEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#nat_addr_start DataThunderCgnv6FixedNatFullConeSessionOper#nat_addr_start}
  */
  readonly natAddrStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#nat_port DataThunderCgnv6FixedNatFullConeSessionOper#nat_port}
  */
  readonly natPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#partition_name DataThunderCgnv6FixedNatFullConeSessionOper#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#pcp DataThunderCgnv6FixedNatFullConeSessionOper#pcp}
  */
  readonly pcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#session_count DataThunderCgnv6FixedNatFullConeSessionOper#session_count}
  */
  readonly sessionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#session_type DataThunderCgnv6FixedNatFullConeSessionOper#session_type}
  */
  readonly sessionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#shared_partition DataThunderCgnv6FixedNatFullConeSessionOper#shared_partition}
  */
  readonly sharedPartition?: number;
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#session_list DataThunderCgnv6FixedNatFullConeSessionOper#session_list}
  */
  readonly sessionList?: DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6FixedNatFullConeSessionOperOperToTerraform(struct?: DataThunderCgnv6FixedNatFullConeSessionOperOperOutputReference | DataThunderCgnv6FixedNatFullConeSessionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_partitions: cdktf.numberToTerraform(struct!.allPartitions),
    debug_session: cdktf.numberToTerraform(struct!.debugSession),
    dslite_total_session_count: cdktf.numberToTerraform(struct!.dsliteTotalSessionCount),
    graceful: cdktf.numberToTerraform(struct!.graceful),
    inside_addr: cdktf.stringToTerraform(struct!.insideAddr),
    inside_addr_end: cdktf.stringToTerraform(struct!.insideAddrEnd),
    inside_addr_start: cdktf.stringToTerraform(struct!.insideAddrStart),
    inside_addr_v6: cdktf.stringToTerraform(struct!.insideAddrV6),
    inside_addr_v6_end: cdktf.stringToTerraform(struct!.insideAddrV6End),
    inside_addr_v6_start: cdktf.stringToTerraform(struct!.insideAddrV6Start),
    inside_port: cdktf.numberToTerraform(struct!.insidePort),
    nat44_total_session_count: cdktf.numberToTerraform(struct!.nat44TotalSessionCount),
    nat64_total_session_count: cdktf.numberToTerraform(struct!.nat64TotalSessionCount),
    nat_addr: cdktf.stringToTerraform(struct!.natAddr),
    nat_addr_end: cdktf.stringToTerraform(struct!.natAddrEnd),
    nat_addr_start: cdktf.stringToTerraform(struct!.natAddrStart),
    nat_port: cdktf.numberToTerraform(struct!.natPort),
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    pcp: cdktf.numberToTerraform(struct!.pcp),
    session_count: cdktf.numberToTerraform(struct!.sessionCount),
    session_type: cdktf.stringToTerraform(struct!.sessionType),
    shared_partition: cdktf.numberToTerraform(struct!.sharedPartition),
    session_list: cdktf.listMapper(dataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderCgnv6FixedNatFullConeSessionOperOperToHclTerraform(struct?: DataThunderCgnv6FixedNatFullConeSessionOperOperOutputReference | DataThunderCgnv6FixedNatFullConeSessionOperOper): any {
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
    debug_session: {
      value: cdktf.numberToHclTerraform(struct!.debugSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_total_session_count: {
      value: cdktf.numberToHclTerraform(struct!.dsliteTotalSessionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graceful: {
      value: cdktf.numberToHclTerraform(struct!.graceful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside_addr: {
      value: cdktf.stringToHclTerraform(struct!.insideAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_addr_end: {
      value: cdktf.stringToHclTerraform(struct!.insideAddrEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_addr_start: {
      value: cdktf.stringToHclTerraform(struct!.insideAddrStart),
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
    inside_addr_v6_end: {
      value: cdktf.stringToHclTerraform(struct!.insideAddrV6End),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_addr_v6_start: {
      value: cdktf.stringToHclTerraform(struct!.insideAddrV6Start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_port: {
      value: cdktf.numberToHclTerraform(struct!.insidePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_total_session_count: {
      value: cdktf.numberToHclTerraform(struct!.nat44TotalSessionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_total_session_count: {
      value: cdktf.numberToHclTerraform(struct!.nat64TotalSessionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_addr: {
      value: cdktf.stringToHclTerraform(struct!.natAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_addr_end: {
      value: cdktf.stringToHclTerraform(struct!.natAddrEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_addr_start: {
      value: cdktf.stringToHclTerraform(struct!.natAddrStart),
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
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pcp: {
      value: cdktf.numberToHclTerraform(struct!.pcp),
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
    session_type: {
      value: cdktf.stringToHclTerraform(struct!.sessionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_partition: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatFullConeSessionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6FixedNatFullConeSessionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPartitions = this._allPartitions;
    }
    if (this._debugSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugSession = this._debugSession;
    }
    if (this._dsliteTotalSessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteTotalSessionCount = this._dsliteTotalSessionCount;
    }
    if (this._graceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.graceful = this._graceful;
    }
    if (this._insideAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddr = this._insideAddr;
    }
    if (this._insideAddrEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddrEnd = this._insideAddrEnd;
    }
    if (this._insideAddrStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddrStart = this._insideAddrStart;
    }
    if (this._insideAddrV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddrV6 = this._insideAddrV6;
    }
    if (this._insideAddrV6End !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddrV6End = this._insideAddrV6End;
    }
    if (this._insideAddrV6Start !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddrV6Start = this._insideAddrV6Start;
    }
    if (this._insidePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.insidePort = this._insidePort;
    }
    if (this._nat44TotalSessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44TotalSessionCount = this._nat44TotalSessionCount;
    }
    if (this._nat64TotalSessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64TotalSessionCount = this._nat64TotalSessionCount;
    }
    if (this._natAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddr = this._natAddr;
    }
    if (this._natAddrEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddrEnd = this._natAddrEnd;
    }
    if (this._natAddrStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddrStart = this._natAddrStart;
    }
    if (this._natPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPort = this._natPort;
    }
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._pcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcp = this._pcp;
    }
    if (this._sessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCount = this._sessionCount;
    }
    if (this._sessionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionType = this._sessionType;
    }
    if (this._sharedPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartition = this._sharedPartition;
    }
    if (this._sessionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionList = this._sessionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatFullConeSessionOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allPartitions = undefined;
      this._debugSession = undefined;
      this._dsliteTotalSessionCount = undefined;
      this._graceful = undefined;
      this._insideAddr = undefined;
      this._insideAddrEnd = undefined;
      this._insideAddrStart = undefined;
      this._insideAddrV6 = undefined;
      this._insideAddrV6End = undefined;
      this._insideAddrV6Start = undefined;
      this._insidePort = undefined;
      this._nat44TotalSessionCount = undefined;
      this._nat64TotalSessionCount = undefined;
      this._natAddr = undefined;
      this._natAddrEnd = undefined;
      this._natAddrStart = undefined;
      this._natPort = undefined;
      this._partitionName = undefined;
      this._pcp = undefined;
      this._sessionCount = undefined;
      this._sessionType = undefined;
      this._sharedPartition = undefined;
      this._sessionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allPartitions = value.allPartitions;
      this._debugSession = value.debugSession;
      this._dsliteTotalSessionCount = value.dsliteTotalSessionCount;
      this._graceful = value.graceful;
      this._insideAddr = value.insideAddr;
      this._insideAddrEnd = value.insideAddrEnd;
      this._insideAddrStart = value.insideAddrStart;
      this._insideAddrV6 = value.insideAddrV6;
      this._insideAddrV6End = value.insideAddrV6End;
      this._insideAddrV6Start = value.insideAddrV6Start;
      this._insidePort = value.insidePort;
      this._nat44TotalSessionCount = value.nat44TotalSessionCount;
      this._nat64TotalSessionCount = value.nat64TotalSessionCount;
      this._natAddr = value.natAddr;
      this._natAddrEnd = value.natAddrEnd;
      this._natAddrStart = value.natAddrStart;
      this._natPort = value.natPort;
      this._partitionName = value.partitionName;
      this._pcp = value.pcp;
      this._sessionCount = value.sessionCount;
      this._sessionType = value.sessionType;
      this._sharedPartition = value.sharedPartition;
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

  // debug_session - computed: false, optional: true, required: false
  private _debugSession?: number; 
  public get debugSession() {
    return this.getNumberAttribute('debug_session');
  }
  public set debugSession(value: number) {
    this._debugSession = value;
  }
  public resetDebugSession() {
    this._debugSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugSessionInput() {
    return this._debugSession;
  }

  // dslite_total_session_count - computed: false, optional: true, required: false
  private _dsliteTotalSessionCount?: number; 
  public get dsliteTotalSessionCount() {
    return this.getNumberAttribute('dslite_total_session_count');
  }
  public set dsliteTotalSessionCount(value: number) {
    this._dsliteTotalSessionCount = value;
  }
  public resetDsliteTotalSessionCount() {
    this._dsliteTotalSessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteTotalSessionCountInput() {
    return this._dsliteTotalSessionCount;
  }

  // graceful - computed: false, optional: true, required: false
  private _graceful?: number; 
  public get graceful() {
    return this.getNumberAttribute('graceful');
  }
  public set graceful(value: number) {
    this._graceful = value;
  }
  public resetGraceful() {
    this._graceful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulInput() {
    return this._graceful;
  }

  // inside_addr - computed: false, optional: true, required: false
  private _insideAddr?: string; 
  public get insideAddr() {
    return this.getStringAttribute('inside_addr');
  }
  public set insideAddr(value: string) {
    this._insideAddr = value;
  }
  public resetInsideAddr() {
    this._insideAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddrInput() {
    return this._insideAddr;
  }

  // inside_addr_end - computed: false, optional: true, required: false
  private _insideAddrEnd?: string; 
  public get insideAddrEnd() {
    return this.getStringAttribute('inside_addr_end');
  }
  public set insideAddrEnd(value: string) {
    this._insideAddrEnd = value;
  }
  public resetInsideAddrEnd() {
    this._insideAddrEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddrEndInput() {
    return this._insideAddrEnd;
  }

  // inside_addr_start - computed: false, optional: true, required: false
  private _insideAddrStart?: string; 
  public get insideAddrStart() {
    return this.getStringAttribute('inside_addr_start');
  }
  public set insideAddrStart(value: string) {
    this._insideAddrStart = value;
  }
  public resetInsideAddrStart() {
    this._insideAddrStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddrStartInput() {
    return this._insideAddrStart;
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

  // inside_addr_v6_end - computed: false, optional: true, required: false
  private _insideAddrV6End?: string; 
  public get insideAddrV6End() {
    return this.getStringAttribute('inside_addr_v6_end');
  }
  public set insideAddrV6End(value: string) {
    this._insideAddrV6End = value;
  }
  public resetInsideAddrV6End() {
    this._insideAddrV6End = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddrV6EndInput() {
    return this._insideAddrV6End;
  }

  // inside_addr_v6_start - computed: false, optional: true, required: false
  private _insideAddrV6Start?: string; 
  public get insideAddrV6Start() {
    return this.getStringAttribute('inside_addr_v6_start');
  }
  public set insideAddrV6Start(value: string) {
    this._insideAddrV6Start = value;
  }
  public resetInsideAddrV6Start() {
    this._insideAddrV6Start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddrV6StartInput() {
    return this._insideAddrV6Start;
  }

  // inside_port - computed: false, optional: true, required: false
  private _insidePort?: number; 
  public get insidePort() {
    return this.getNumberAttribute('inside_port');
  }
  public set insidePort(value: number) {
    this._insidePort = value;
  }
  public resetInsidePort() {
    this._insidePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insidePortInput() {
    return this._insidePort;
  }

  // nat44_total_session_count - computed: false, optional: true, required: false
  private _nat44TotalSessionCount?: number; 
  public get nat44TotalSessionCount() {
    return this.getNumberAttribute('nat44_total_session_count');
  }
  public set nat44TotalSessionCount(value: number) {
    this._nat44TotalSessionCount = value;
  }
  public resetNat44TotalSessionCount() {
    this._nat44TotalSessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44TotalSessionCountInput() {
    return this._nat44TotalSessionCount;
  }

  // nat64_total_session_count - computed: false, optional: true, required: false
  private _nat64TotalSessionCount?: number; 
  public get nat64TotalSessionCount() {
    return this.getNumberAttribute('nat64_total_session_count');
  }
  public set nat64TotalSessionCount(value: number) {
    this._nat64TotalSessionCount = value;
  }
  public resetNat64TotalSessionCount() {
    this._nat64TotalSessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64TotalSessionCountInput() {
    return this._nat64TotalSessionCount;
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

  // nat_addr_end - computed: false, optional: true, required: false
  private _natAddrEnd?: string; 
  public get natAddrEnd() {
    return this.getStringAttribute('nat_addr_end');
  }
  public set natAddrEnd(value: string) {
    this._natAddrEnd = value;
  }
  public resetNatAddrEnd() {
    this._natAddrEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAddrEndInput() {
    return this._natAddrEnd;
  }

  // nat_addr_start - computed: false, optional: true, required: false
  private _natAddrStart?: string; 
  public get natAddrStart() {
    return this.getStringAttribute('nat_addr_start');
  }
  public set natAddrStart(value: string) {
    this._natAddrStart = value;
  }
  public resetNatAddrStart() {
    this._natAddrStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAddrStartInput() {
    return this._natAddrStart;
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

  // pcp - computed: false, optional: true, required: false
  private _pcp?: number; 
  public get pcp() {
    return this.getNumberAttribute('pcp');
  }
  public set pcp(value: number) {
    this._pcp = value;
  }
  public resetPcp() {
    this._pcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcpInput() {
    return this._pcp;
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

  // session_type - computed: false, optional: true, required: false
  private _sessionType?: string; 
  public get sessionType() {
    return this.getStringAttribute('session_type');
  }
  public set sessionType(value: string) {
    this._sessionType = value;
  }
  public resetSessionType() {
    this._sessionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTypeInput() {
    return this._sessionType;
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

  // session_list - computed: false, optional: true, required: false
  private _sessionList = new DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderCgnv6FixedNatFullConeSessionOperOperSessionListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper thunder_cgnv6_fixed_nat_full_cone_session_oper}
*/
export class DataThunderCgnv6FixedNatFullConeSessionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_full_cone_session_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6FixedNatFullConeSessionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6FixedNatFullConeSessionOper to import
  * @param importFromId The id of the existing DataThunderCgnv6FixedNatFullConeSessionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6FixedNatFullConeSessionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_full_cone_session_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_full_cone_session_oper thunder_cgnv6_fixed_nat_full_cone_session_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6FixedNatFullConeSessionOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6FixedNatFullConeSessionOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_full_cone_session_oper',
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
  private _oper = new DataThunderCgnv6FixedNatFullConeSessionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6FixedNatFullConeSessionOperOper) {
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
      oper: dataThunderCgnv6FixedNatFullConeSessionOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6FixedNatFullConeSessionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6FixedNatFullConeSessionOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
