// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6OneToOneMappingOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#id DataThunderCgnv6OneToOneMappingOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#oper DataThunderCgnv6OneToOneMappingOper#oper}
  */
  readonly oper?: DataThunderCgnv6OneToOneMappingOperOper;
}
export interface DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#age DataThunderCgnv6OneToOneMappingOper#age}
  */
  readonly age?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#inside_ipv4_address DataThunderCgnv6OneToOneMappingOper#inside_ipv4_address}
  */
  readonly insideIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#inside_ipv6_address DataThunderCgnv6OneToOneMappingOper#inside_ipv6_address}
  */
  readonly insideIpv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#nat_address DataThunderCgnv6OneToOneMappingOper#nat_address}
  */
  readonly natAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#pool DataThunderCgnv6OneToOneMappingOper#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#sessions DataThunderCgnv6OneToOneMappingOper#sessions}
  */
  readonly sessions?: number;
}

export function dataThunderCgnv6OneToOneMappingOperOperSessionMappingListStructToTerraform(struct?: DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.stringToTerraform(struct!.age),
    inside_ipv4_address: cdktf.stringToTerraform(struct!.insideIpv4Address),
    inside_ipv6_address: cdktf.stringToTerraform(struct!.insideIpv6Address),
    nat_address: cdktf.stringToTerraform(struct!.natAddress),
    pool: cdktf.stringToTerraform(struct!.pool),
    sessions: cdktf.numberToTerraform(struct!.sessions),
  }
}


export function dataThunderCgnv6OneToOneMappingOperOperSessionMappingListStructToHclTerraform(struct?: DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStruct | cdktf.IResolvable): any {
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
    inside_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.insideIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.insideIpv6Address),
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
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sessions: {
      value: cdktf.numberToHclTerraform(struct!.sessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._insideIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideIpv4Address = this._insideIpv4Address;
    }
    if (this._insideIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideIpv6Address = this._insideIpv6Address;
    }
    if (this._natAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddress = this._natAddress;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._sessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessions = this._sessions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._insideIpv4Address = undefined;
      this._insideIpv6Address = undefined;
      this._natAddress = undefined;
      this._pool = undefined;
      this._sessions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._insideIpv4Address = value.insideIpv4Address;
      this._insideIpv6Address = value.insideIpv6Address;
      this._natAddress = value.natAddress;
      this._pool = value.pool;
      this._sessions = value.sessions;
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

  // inside_ipv4_address - computed: false, optional: true, required: false
  private _insideIpv4Address?: string; 
  public get insideIpv4Address() {
    return this.getStringAttribute('inside_ipv4_address');
  }
  public set insideIpv4Address(value: string) {
    this._insideIpv4Address = value;
  }
  public resetInsideIpv4Address() {
    this._insideIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideIpv4AddressInput() {
    return this._insideIpv4Address;
  }

  // inside_ipv6_address - computed: false, optional: true, required: false
  private _insideIpv6Address?: string; 
  public get insideIpv6Address() {
    return this.getStringAttribute('inside_ipv6_address');
  }
  public set insideIpv6Address(value: string) {
    this._insideIpv6Address = value;
  }
  public resetInsideIpv6Address() {
    this._insideIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideIpv6AddressInput() {
    return this._insideIpv6Address;
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

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // sessions - computed: false, optional: true, required: false
  private _sessions?: number; 
  public get sessions() {
    return this.getNumberAttribute('sessions');
  }
  public set sessions(value: number) {
    this._sessions = value;
  }
  public resetSessions() {
    this._sessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsInput() {
    return this._sessions;
  }
}

export class DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStructOutputReference {
    return new DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6OneToOneMappingOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#all_partitions DataThunderCgnv6OneToOneMappingOper#all_partitions}
  */
  readonly allPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#inside_addr_end DataThunderCgnv6OneToOneMappingOper#inside_addr_end}
  */
  readonly insideAddrEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#inside_addr_start DataThunderCgnv6OneToOneMappingOper#inside_addr_start}
  */
  readonly insideAddrStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#inside_address_ipv4 DataThunderCgnv6OneToOneMappingOper#inside_address_ipv4}
  */
  readonly insideAddressIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#inside_address_ipv6 DataThunderCgnv6OneToOneMappingOper#inside_address_ipv6}
  */
  readonly insideAddressIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#nat_addr_end DataThunderCgnv6OneToOneMappingOper#nat_addr_end}
  */
  readonly natAddrEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#nat_addr_start DataThunderCgnv6OneToOneMappingOper#nat_addr_start}
  */
  readonly natAddrStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#nat_addr_val DataThunderCgnv6OneToOneMappingOper#nat_addr_val}
  */
  readonly natAddrVal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#partition_name DataThunderCgnv6OneToOneMappingOper#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#pool_name DataThunderCgnv6OneToOneMappingOper#pool_name}
  */
  readonly poolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#shared_partition DataThunderCgnv6OneToOneMappingOper#shared_partition}
  */
  readonly sharedPartition?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#shared_pool_name DataThunderCgnv6OneToOneMappingOper#shared_pool_name}
  */
  readonly sharedPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#total DataThunderCgnv6OneToOneMappingOper#total}
  */
  readonly total?: number;
  /**
  * session_mapping_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#session_mapping_list DataThunderCgnv6OneToOneMappingOper#session_mapping_list}
  */
  readonly sessionMappingList?: DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6OneToOneMappingOperOperToTerraform(struct?: DataThunderCgnv6OneToOneMappingOperOperOutputReference | DataThunderCgnv6OneToOneMappingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_partitions: cdktf.numberToTerraform(struct!.allPartitions),
    inside_addr_end: cdktf.stringToTerraform(struct!.insideAddrEnd),
    inside_addr_start: cdktf.stringToTerraform(struct!.insideAddrStart),
    inside_address_ipv4: cdktf.stringToTerraform(struct!.insideAddressIpv4),
    inside_address_ipv6: cdktf.stringToTerraform(struct!.insideAddressIpv6),
    nat_addr_end: cdktf.stringToTerraform(struct!.natAddrEnd),
    nat_addr_start: cdktf.stringToTerraform(struct!.natAddrStart),
    nat_addr_val: cdktf.stringToTerraform(struct!.natAddrVal),
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    pool_name: cdktf.stringToTerraform(struct!.poolName),
    shared_partition: cdktf.numberToTerraform(struct!.sharedPartition),
    shared_pool_name: cdktf.stringToTerraform(struct!.sharedPoolName),
    total: cdktf.numberToTerraform(struct!.total),
    session_mapping_list: cdktf.listMapper(dataThunderCgnv6OneToOneMappingOperOperSessionMappingListStructToTerraform, true)(struct!.sessionMappingList),
  }
}


export function dataThunderCgnv6OneToOneMappingOperOperToHclTerraform(struct?: DataThunderCgnv6OneToOneMappingOperOperOutputReference | DataThunderCgnv6OneToOneMappingOperOper): any {
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
    inside_address_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.insideAddressIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_address_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.insideAddressIpv6),
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
    nat_addr_val: {
      value: cdktf.stringToHclTerraform(struct!.natAddrVal),
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
    pool_name: {
      value: cdktf.stringToHclTerraform(struct!.poolName),
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
    shared_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.sharedPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_mapping_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6OneToOneMappingOperOperSessionMappingListStructToHclTerraform, true)(struct!.sessionMappingList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6OneToOneMappingOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6OneToOneMappingOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPartitions = this._allPartitions;
    }
    if (this._insideAddrEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddrEnd = this._insideAddrEnd;
    }
    if (this._insideAddrStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddrStart = this._insideAddrStart;
    }
    if (this._insideAddressIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddressIpv4 = this._insideAddressIpv4;
    }
    if (this._insideAddressIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddressIpv6 = this._insideAddressIpv6;
    }
    if (this._natAddrEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddrEnd = this._natAddrEnd;
    }
    if (this._natAddrStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddrStart = this._natAddrStart;
    }
    if (this._natAddrVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddrVal = this._natAddrVal;
    }
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    if (this._sharedPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartition = this._sharedPartition;
    }
    if (this._sharedPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPoolName = this._sharedPoolName;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._sessionMappingList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMappingList = this._sessionMappingList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6OneToOneMappingOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allPartitions = undefined;
      this._insideAddrEnd = undefined;
      this._insideAddrStart = undefined;
      this._insideAddressIpv4 = undefined;
      this._insideAddressIpv6 = undefined;
      this._natAddrEnd = undefined;
      this._natAddrStart = undefined;
      this._natAddrVal = undefined;
      this._partitionName = undefined;
      this._poolName = undefined;
      this._sharedPartition = undefined;
      this._sharedPoolName = undefined;
      this._total = undefined;
      this._sessionMappingList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allPartitions = value.allPartitions;
      this._insideAddrEnd = value.insideAddrEnd;
      this._insideAddrStart = value.insideAddrStart;
      this._insideAddressIpv4 = value.insideAddressIpv4;
      this._insideAddressIpv6 = value.insideAddressIpv6;
      this._natAddrEnd = value.natAddrEnd;
      this._natAddrStart = value.natAddrStart;
      this._natAddrVal = value.natAddrVal;
      this._partitionName = value.partitionName;
      this._poolName = value.poolName;
      this._sharedPartition = value.sharedPartition;
      this._sharedPoolName = value.sharedPoolName;
      this._total = value.total;
      this._sessionMappingList.internalValue = value.sessionMappingList;
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

  // inside_address_ipv4 - computed: false, optional: true, required: false
  private _insideAddressIpv4?: string; 
  public get insideAddressIpv4() {
    return this.getStringAttribute('inside_address_ipv4');
  }
  public set insideAddressIpv4(value: string) {
    this._insideAddressIpv4 = value;
  }
  public resetInsideAddressIpv4() {
    this._insideAddressIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddressIpv4Input() {
    return this._insideAddressIpv4;
  }

  // inside_address_ipv6 - computed: false, optional: true, required: false
  private _insideAddressIpv6?: string; 
  public get insideAddressIpv6() {
    return this.getStringAttribute('inside_address_ipv6');
  }
  public set insideAddressIpv6(value: string) {
    this._insideAddressIpv6 = value;
  }
  public resetInsideAddressIpv6() {
    this._insideAddressIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddressIpv6Input() {
    return this._insideAddressIpv6;
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

  // nat_addr_val - computed: false, optional: true, required: false
  private _natAddrVal?: string; 
  public get natAddrVal() {
    return this.getStringAttribute('nat_addr_val');
  }
  public set natAddrVal(value: string) {
    this._natAddrVal = value;
  }
  public resetNatAddrVal() {
    this._natAddrVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAddrValInput() {
    return this._natAddrVal;
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

  // shared_pool_name - computed: false, optional: true, required: false
  private _sharedPoolName?: string; 
  public get sharedPoolName() {
    return this.getStringAttribute('shared_pool_name');
  }
  public set sharedPoolName(value: string) {
    this._sharedPoolName = value;
  }
  public resetSharedPoolName() {
    this._sharedPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPoolNameInput() {
    return this._sharedPoolName;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // session_mapping_list - computed: false, optional: true, required: false
  private _sessionMappingList = new DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStructList(this, "session_mapping_list", false);
  public get sessionMappingList() {
    return this._sessionMappingList;
  }
  public putSessionMappingList(value: DataThunderCgnv6OneToOneMappingOperOperSessionMappingListStruct[] | cdktf.IResolvable) {
    this._sessionMappingList.internalValue = value;
  }
  public resetSessionMappingList() {
    this._sessionMappingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMappingListInput() {
    return this._sessionMappingList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper thunder_cgnv6_one_to_one_mapping_oper}
*/
export class DataThunderCgnv6OneToOneMappingOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_one_to_one_mapping_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6OneToOneMappingOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6OneToOneMappingOper to import
  * @param importFromId The id of the existing DataThunderCgnv6OneToOneMappingOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6OneToOneMappingOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_one_to_one_mapping_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_mapping_oper thunder_cgnv6_one_to_one_mapping_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6OneToOneMappingOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6OneToOneMappingOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_one_to_one_mapping_oper',
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
  private _oper = new DataThunderCgnv6OneToOneMappingOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6OneToOneMappingOperOper) {
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
      oper: dataThunderCgnv6OneToOneMappingOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6OneToOneMappingOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6OneToOneMappingOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
