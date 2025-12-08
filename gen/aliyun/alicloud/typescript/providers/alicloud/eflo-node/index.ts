// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfloNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#billing_cycle EfloNode#billing_cycle}
  */
  readonly billingCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#classify EfloNode#classify}
  */
  readonly classify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#cluster_id EfloNode#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#computing_server EfloNode#computing_server}
  */
  readonly computingServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#discount_level EfloNode#discount_level}
  */
  readonly discountLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#hostname EfloNode#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#hpn_zone EfloNode#hpn_zone}
  */
  readonly hpnZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#id EfloNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#install_pai EfloNode#install_pai}
  */
  readonly installPai?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#login_password EfloNode#login_password}
  */
  readonly loginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#machine_type EfloNode#machine_type}
  */
  readonly machineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#node_group_id EfloNode#node_group_id}
  */
  readonly nodeGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#node_type EfloNode#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#payment_ratio EfloNode#payment_ratio}
  */
  readonly paymentRatio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#payment_type EfloNode#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#period EfloNode#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#product_form EfloNode#product_form}
  */
  readonly productForm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#renew_period EfloNode#renew_period}
  */
  readonly renewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#renewal_status EfloNode#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#resource_group_id EfloNode#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#server_arch EfloNode#server_arch}
  */
  readonly serverArch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#stage_num EfloNode#stage_num}
  */
  readonly stageNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#status EfloNode#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#tags EfloNode#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#user_data EfloNode#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#vpc_id EfloNode#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#vswitch_id EfloNode#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#zone EfloNode#zone}
  */
  readonly zone?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#data_disk EfloNode#data_disk}
  */
  readonly dataDisk?: EfloNodeDataDisk[] | cdktf.IResolvable;
  /**
  * ip_allocation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#ip_allocation_policy EfloNode#ip_allocation_policy}
  */
  readonly ipAllocationPolicy?: EfloNodeIpAllocationPolicy[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#timeouts EfloNode#timeouts}
  */
  readonly timeouts?: EfloNodeTimeouts;
}
export interface EfloNodeDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#category EfloNode#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#performance_level EfloNode#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#size EfloNode#size}
  */
  readonly size?: number;
}

export function efloNodeDataDiskToTerraform(struct?: EfloNodeDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    performance_level: cdktf.stringToTerraform(struct!.performanceLevel),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function efloNodeDataDiskToHclTerraform(struct?: EfloNodeDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_level: {
      value: cdktf.stringToHclTerraform(struct!.performanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloNodeDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._performanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceLevel = this._performanceLevel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloNodeDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._performanceLevel = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._performanceLevel = value.performanceLevel;
      this._size = value.size;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // performance_level - computed: false, optional: true, required: false
  private _performanceLevel?: string; 
  public get performanceLevel() {
    return this.getStringAttribute('performance_level');
  }
  public set performanceLevel(value: string) {
    this._performanceLevel = value;
  }
  public resetPerformanceLevel() {
    this._performanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceLevelInput() {
    return this._performanceLevel;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class EfloNodeDataDiskList extends cdktf.ComplexList {
  public internalValue? : EfloNodeDataDisk[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeDataDiskOutputReference {
    return new EfloNodeDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeIpAllocationPolicyBondPolicyBonds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#name EfloNode#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#subnet EfloNode#subnet}
  */
  readonly subnet?: string;
}

export function efloNodeIpAllocationPolicyBondPolicyBondsToTerraform(struct?: EfloNodeIpAllocationPolicyBondPolicyBonds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function efloNodeIpAllocationPolicyBondPolicyBondsToHclTerraform(struct?: EfloNodeIpAllocationPolicyBondPolicyBonds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class EfloNodeIpAllocationPolicyBondPolicyBondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeIpAllocationPolicyBondPolicyBonds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloNodeIpAllocationPolicyBondPolicyBonds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._subnet = value.subnet;
    }
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

export class EfloNodeIpAllocationPolicyBondPolicyBondsList extends cdktf.ComplexList {
  public internalValue? : EfloNodeIpAllocationPolicyBondPolicyBonds[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeIpAllocationPolicyBondPolicyBondsOutputReference {
    return new EfloNodeIpAllocationPolicyBondPolicyBondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeIpAllocationPolicyBondPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#bond_default_subnet EfloNode#bond_default_subnet}
  */
  readonly bondDefaultSubnet?: string;
  /**
  * bonds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#bonds EfloNode#bonds}
  */
  readonly bonds?: EfloNodeIpAllocationPolicyBondPolicyBonds[] | cdktf.IResolvable;
}

export function efloNodeIpAllocationPolicyBondPolicyToTerraform(struct?: EfloNodeIpAllocationPolicyBondPolicyOutputReference | EfloNodeIpAllocationPolicyBondPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_default_subnet: cdktf.stringToTerraform(struct!.bondDefaultSubnet),
    bonds: cdktf.listMapper(efloNodeIpAllocationPolicyBondPolicyBondsToTerraform, true)(struct!.bonds),
  }
}


export function efloNodeIpAllocationPolicyBondPolicyToHclTerraform(struct?: EfloNodeIpAllocationPolicyBondPolicyOutputReference | EfloNodeIpAllocationPolicyBondPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bond_default_subnet: {
      value: cdktf.stringToHclTerraform(struct!.bondDefaultSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bonds: {
      value: cdktf.listMapperHcl(efloNodeIpAllocationPolicyBondPolicyBondsToHclTerraform, true)(struct!.bonds),
      isBlock: true,
      type: "list",
      storageClassType: "EfloNodeIpAllocationPolicyBondPolicyBondsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloNodeIpAllocationPolicyBondPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EfloNodeIpAllocationPolicyBondPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bondDefaultSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondDefaultSubnet = this._bondDefaultSubnet;
    }
    if (this._bonds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bonds = this._bonds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloNodeIpAllocationPolicyBondPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bondDefaultSubnet = undefined;
      this._bonds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bondDefaultSubnet = value.bondDefaultSubnet;
      this._bonds.internalValue = value.bonds;
    }
  }

  // bond_default_subnet - computed: false, optional: true, required: false
  private _bondDefaultSubnet?: string; 
  public get bondDefaultSubnet() {
    return this.getStringAttribute('bond_default_subnet');
  }
  public set bondDefaultSubnet(value: string) {
    this._bondDefaultSubnet = value;
  }
  public resetBondDefaultSubnet() {
    this._bondDefaultSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondDefaultSubnetInput() {
    return this._bondDefaultSubnet;
  }

  // bonds - computed: false, optional: true, required: false
  private _bonds = new EfloNodeIpAllocationPolicyBondPolicyBondsList(this, "bonds", false);
  public get bonds() {
    return this._bonds;
  }
  public putBonds(value: EfloNodeIpAllocationPolicyBondPolicyBonds[] | cdktf.IResolvable) {
    this._bonds.internalValue = value;
  }
  public resetBonds() {
    this._bonds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondsInput() {
    return this._bonds.internalValue;
  }
}
export interface EfloNodeIpAllocationPolicyMachineTypePolicyBonds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#name EfloNode#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#subnet EfloNode#subnet}
  */
  readonly subnet?: string;
}

export function efloNodeIpAllocationPolicyMachineTypePolicyBondsToTerraform(struct?: EfloNodeIpAllocationPolicyMachineTypePolicyBonds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function efloNodeIpAllocationPolicyMachineTypePolicyBondsToHclTerraform(struct?: EfloNodeIpAllocationPolicyMachineTypePolicyBonds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class EfloNodeIpAllocationPolicyMachineTypePolicyBondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeIpAllocationPolicyMachineTypePolicyBonds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloNodeIpAllocationPolicyMachineTypePolicyBonds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._subnet = value.subnet;
    }
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

export class EfloNodeIpAllocationPolicyMachineTypePolicyBondsList extends cdktf.ComplexList {
  public internalValue? : EfloNodeIpAllocationPolicyMachineTypePolicyBonds[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeIpAllocationPolicyMachineTypePolicyBondsOutputReference {
    return new EfloNodeIpAllocationPolicyMachineTypePolicyBondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeIpAllocationPolicyMachineTypePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#machine_type EfloNode#machine_type}
  */
  readonly machineType?: string;
  /**
  * bonds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#bonds EfloNode#bonds}
  */
  readonly bonds?: EfloNodeIpAllocationPolicyMachineTypePolicyBonds[] | cdktf.IResolvable;
}

export function efloNodeIpAllocationPolicyMachineTypePolicyToTerraform(struct?: EfloNodeIpAllocationPolicyMachineTypePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    bonds: cdktf.listMapper(efloNodeIpAllocationPolicyMachineTypePolicyBondsToTerraform, true)(struct!.bonds),
  }
}


export function efloNodeIpAllocationPolicyMachineTypePolicyToHclTerraform(struct?: EfloNodeIpAllocationPolicyMachineTypePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bonds: {
      value: cdktf.listMapperHcl(efloNodeIpAllocationPolicyMachineTypePolicyBondsToHclTerraform, true)(struct!.bonds),
      isBlock: true,
      type: "list",
      storageClassType: "EfloNodeIpAllocationPolicyMachineTypePolicyBondsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloNodeIpAllocationPolicyMachineTypePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeIpAllocationPolicyMachineTypePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._bonds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bonds = this._bonds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloNodeIpAllocationPolicyMachineTypePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineType = undefined;
      this._bonds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineType = value.machineType;
      this._bonds.internalValue = value.bonds;
    }
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // bonds - computed: false, optional: true, required: false
  private _bonds = new EfloNodeIpAllocationPolicyMachineTypePolicyBondsList(this, "bonds", false);
  public get bonds() {
    return this._bonds;
  }
  public putBonds(value: EfloNodeIpAllocationPolicyMachineTypePolicyBonds[] | cdktf.IResolvable) {
    this._bonds.internalValue = value;
  }
  public resetBonds() {
    this._bonds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondsInput() {
    return this._bonds.internalValue;
  }
}

export class EfloNodeIpAllocationPolicyMachineTypePolicyList extends cdktf.ComplexList {
  public internalValue? : EfloNodeIpAllocationPolicyMachineTypePolicy[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeIpAllocationPolicyMachineTypePolicyOutputReference {
    return new EfloNodeIpAllocationPolicyMachineTypePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeIpAllocationPolicyNodePolicyBonds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#name EfloNode#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#subnet EfloNode#subnet}
  */
  readonly subnet?: string;
}

export function efloNodeIpAllocationPolicyNodePolicyBondsToTerraform(struct?: EfloNodeIpAllocationPolicyNodePolicyBonds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function efloNodeIpAllocationPolicyNodePolicyBondsToHclTerraform(struct?: EfloNodeIpAllocationPolicyNodePolicyBonds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class EfloNodeIpAllocationPolicyNodePolicyBondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeIpAllocationPolicyNodePolicyBonds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloNodeIpAllocationPolicyNodePolicyBonds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._subnet = value.subnet;
    }
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

export class EfloNodeIpAllocationPolicyNodePolicyBondsList extends cdktf.ComplexList {
  public internalValue? : EfloNodeIpAllocationPolicyNodePolicyBonds[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeIpAllocationPolicyNodePolicyBondsOutputReference {
    return new EfloNodeIpAllocationPolicyNodePolicyBondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeIpAllocationPolicyNodePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#hostname EfloNode#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#node_id EfloNode#node_id}
  */
  readonly nodeId?: string;
  /**
  * bonds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#bonds EfloNode#bonds}
  */
  readonly bonds?: EfloNodeIpAllocationPolicyNodePolicyBonds[] | cdktf.IResolvable;
}

export function efloNodeIpAllocationPolicyNodePolicyToTerraform(struct?: EfloNodeIpAllocationPolicyNodePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    bonds: cdktf.listMapper(efloNodeIpAllocationPolicyNodePolicyBondsToTerraform, true)(struct!.bonds),
  }
}


export function efloNodeIpAllocationPolicyNodePolicyToHclTerraform(struct?: EfloNodeIpAllocationPolicyNodePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bonds: {
      value: cdktf.listMapperHcl(efloNodeIpAllocationPolicyNodePolicyBondsToHclTerraform, true)(struct!.bonds),
      isBlock: true,
      type: "list",
      storageClassType: "EfloNodeIpAllocationPolicyNodePolicyBondsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloNodeIpAllocationPolicyNodePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeIpAllocationPolicyNodePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._bonds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bonds = this._bonds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloNodeIpAllocationPolicyNodePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._nodeId = undefined;
      this._bonds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._nodeId = value.nodeId;
      this._bonds.internalValue = value.bonds;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // bonds - computed: false, optional: true, required: false
  private _bonds = new EfloNodeIpAllocationPolicyNodePolicyBondsList(this, "bonds", false);
  public get bonds() {
    return this._bonds;
  }
  public putBonds(value: EfloNodeIpAllocationPolicyNodePolicyBonds[] | cdktf.IResolvable) {
    this._bonds.internalValue = value;
  }
  public resetBonds() {
    this._bonds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondsInput() {
    return this._bonds.internalValue;
  }
}

export class EfloNodeIpAllocationPolicyNodePolicyList extends cdktf.ComplexList {
  public internalValue? : EfloNodeIpAllocationPolicyNodePolicy[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeIpAllocationPolicyNodePolicyOutputReference {
    return new EfloNodeIpAllocationPolicyNodePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeIpAllocationPolicy {
  /**
  * bond_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#bond_policy EfloNode#bond_policy}
  */
  readonly bondPolicy?: EfloNodeIpAllocationPolicyBondPolicy;
  /**
  * machine_type_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#machine_type_policy EfloNode#machine_type_policy}
  */
  readonly machineTypePolicy?: EfloNodeIpAllocationPolicyMachineTypePolicy[] | cdktf.IResolvable;
  /**
  * node_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#node_policy EfloNode#node_policy}
  */
  readonly nodePolicy?: EfloNodeIpAllocationPolicyNodePolicy[] | cdktf.IResolvable;
}

export function efloNodeIpAllocationPolicyToTerraform(struct?: EfloNodeIpAllocationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_policy: efloNodeIpAllocationPolicyBondPolicyToTerraform(struct!.bondPolicy),
    machine_type_policy: cdktf.listMapper(efloNodeIpAllocationPolicyMachineTypePolicyToTerraform, true)(struct!.machineTypePolicy),
    node_policy: cdktf.listMapper(efloNodeIpAllocationPolicyNodePolicyToTerraform, true)(struct!.nodePolicy),
  }
}


export function efloNodeIpAllocationPolicyToHclTerraform(struct?: EfloNodeIpAllocationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bond_policy: {
      value: efloNodeIpAllocationPolicyBondPolicyToHclTerraform(struct!.bondPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EfloNodeIpAllocationPolicyBondPolicyList",
    },
    machine_type_policy: {
      value: cdktf.listMapperHcl(efloNodeIpAllocationPolicyMachineTypePolicyToHclTerraform, true)(struct!.machineTypePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EfloNodeIpAllocationPolicyMachineTypePolicyList",
    },
    node_policy: {
      value: cdktf.listMapperHcl(efloNodeIpAllocationPolicyNodePolicyToHclTerraform, true)(struct!.nodePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EfloNodeIpAllocationPolicyNodePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloNodeIpAllocationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeIpAllocationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bondPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondPolicy = this._bondPolicy?.internalValue;
    }
    if (this._machineTypePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineTypePolicy = this._machineTypePolicy?.internalValue;
    }
    if (this._nodePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePolicy = this._nodePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloNodeIpAllocationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bondPolicy.internalValue = undefined;
      this._machineTypePolicy.internalValue = undefined;
      this._nodePolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bondPolicy.internalValue = value.bondPolicy;
      this._machineTypePolicy.internalValue = value.machineTypePolicy;
      this._nodePolicy.internalValue = value.nodePolicy;
    }
  }

  // bond_policy - computed: false, optional: true, required: false
  private _bondPolicy = new EfloNodeIpAllocationPolicyBondPolicyOutputReference(this, "bond_policy");
  public get bondPolicy() {
    return this._bondPolicy;
  }
  public putBondPolicy(value: EfloNodeIpAllocationPolicyBondPolicy) {
    this._bondPolicy.internalValue = value;
  }
  public resetBondPolicy() {
    this._bondPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondPolicyInput() {
    return this._bondPolicy.internalValue;
  }

  // machine_type_policy - computed: false, optional: true, required: false
  private _machineTypePolicy = new EfloNodeIpAllocationPolicyMachineTypePolicyList(this, "machine_type_policy", false);
  public get machineTypePolicy() {
    return this._machineTypePolicy;
  }
  public putMachineTypePolicy(value: EfloNodeIpAllocationPolicyMachineTypePolicy[] | cdktf.IResolvable) {
    this._machineTypePolicy.internalValue = value;
  }
  public resetMachineTypePolicy() {
    this._machineTypePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypePolicyInput() {
    return this._machineTypePolicy.internalValue;
  }

  // node_policy - computed: false, optional: true, required: false
  private _nodePolicy = new EfloNodeIpAllocationPolicyNodePolicyList(this, "node_policy", false);
  public get nodePolicy() {
    return this._nodePolicy;
  }
  public putNodePolicy(value: EfloNodeIpAllocationPolicyNodePolicy[] | cdktf.IResolvable) {
    this._nodePolicy.internalValue = value;
  }
  public resetNodePolicy() {
    this._nodePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePolicyInput() {
    return this._nodePolicy.internalValue;
  }
}

export class EfloNodeIpAllocationPolicyList extends cdktf.ComplexList {
  public internalValue? : EfloNodeIpAllocationPolicy[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeIpAllocationPolicyOutputReference {
    return new EfloNodeIpAllocationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#create EfloNode#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#delete EfloNode#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#update EfloNode#update}
  */
  readonly update?: string;
}

export function efloNodeTimeoutsToTerraform(struct?: EfloNodeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function efloNodeTimeoutsToHclTerraform(struct?: EfloNodeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloNodeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EfloNodeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloNodeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node alicloud_eflo_node}
*/
export class EfloNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_eflo_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EfloNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EfloNode to import
  * @param importFromId The id of the existing EfloNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EfloNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_eflo_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eflo_node alicloud_eflo_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfloNodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EfloNodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_eflo_node',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingCycle = config.billingCycle;
    this._classify = config.classify;
    this._clusterId = config.clusterId;
    this._computingServer = config.computingServer;
    this._discountLevel = config.discountLevel;
    this._hostname = config.hostname;
    this._hpnZone = config.hpnZone;
    this._id = config.id;
    this._installPai = config.installPai;
    this._loginPassword = config.loginPassword;
    this._machineType = config.machineType;
    this._nodeGroupId = config.nodeGroupId;
    this._nodeType = config.nodeType;
    this._paymentRatio = config.paymentRatio;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._productForm = config.productForm;
    this._renewPeriod = config.renewPeriod;
    this._renewalStatus = config.renewalStatus;
    this._resourceGroupId = config.resourceGroupId;
    this._serverArch = config.serverArch;
    this._stageNum = config.stageNum;
    this._status = config.status;
    this._tags = config.tags;
    this._userData = config.userData;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zone = config.zone;
    this._dataDisk.internalValue = config.dataDisk;
    this._ipAllocationPolicy.internalValue = config.ipAllocationPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_cycle - computed: false, optional: true, required: false
  private _billingCycle?: string; 
  public get billingCycle() {
    return this.getStringAttribute('billing_cycle');
  }
  public set billingCycle(value: string) {
    this._billingCycle = value;
  }
  public resetBillingCycle() {
    this._billingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingCycleInput() {
    return this._billingCycle;
  }

  // classify - computed: false, optional: true, required: false
  private _classify?: string; 
  public get classify() {
    return this.getStringAttribute('classify');
  }
  public set classify(value: string) {
    this._classify = value;
  }
  public resetClassify() {
    this._classify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifyInput() {
    return this._classify;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // computing_server - computed: true, optional: true, required: false
  private _computingServer?: string; 
  public get computingServer() {
    return this.getStringAttribute('computing_server');
  }
  public set computingServer(value: string) {
    this._computingServer = value;
  }
  public resetComputingServer() {
    this._computingServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computingServerInput() {
    return this._computingServer;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // discount_level - computed: false, optional: true, required: false
  private _discountLevel?: string; 
  public get discountLevel() {
    return this.getStringAttribute('discount_level');
  }
  public set discountLevel(value: string) {
    this._discountLevel = value;
  }
  public resetDiscountLevel() {
    this._discountLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discountLevelInput() {
    return this._discountLevel;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // hpn_zone - computed: false, optional: true, required: false
  private _hpnZone?: string; 
  public get hpnZone() {
    return this.getStringAttribute('hpn_zone');
  }
  public set hpnZone(value: string) {
    this._hpnZone = value;
  }
  public resetHpnZone() {
    this._hpnZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpnZoneInput() {
    return this._hpnZone;
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

  // install_pai - computed: false, optional: true, required: false
  private _installPai?: boolean | cdktf.IResolvable; 
  public get installPai() {
    return this.getBooleanAttribute('install_pai');
  }
  public set installPai(value: boolean | cdktf.IResolvable) {
    this._installPai = value;
  }
  public resetInstallPai() {
    this._installPai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installPaiInput() {
    return this._installPai;
  }

  // login_password - computed: false, optional: true, required: false
  private _loginPassword?: string; 
  public get loginPassword() {
    return this.getStringAttribute('login_password');
  }
  public set loginPassword(value: string) {
    this._loginPassword = value;
  }
  public resetLoginPassword() {
    this._loginPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPasswordInput() {
    return this._loginPassword;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // node_group_id - computed: true, optional: true, required: false
  private _nodeGroupId?: string; 
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }
  public set nodeGroupId(value: string) {
    this._nodeGroupId = value;
  }
  public resetNodeGroupId() {
    this._nodeGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupIdInput() {
    return this._nodeGroupId;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // payment_ratio - computed: false, optional: true, required: false
  private _paymentRatio?: string; 
  public get paymentRatio() {
    return this.getStringAttribute('payment_ratio');
  }
  public set paymentRatio(value: string) {
    this._paymentRatio = value;
  }
  public resetPaymentRatio() {
    this._paymentRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentRatioInput() {
    return this._paymentRatio;
  }

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // product_form - computed: false, optional: true, required: false
  private _productForm?: string; 
  public get productForm() {
    return this.getStringAttribute('product_form');
  }
  public set productForm(value: string) {
    this._productForm = value;
  }
  public resetProductForm() {
    this._productForm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productFormInput() {
    return this._productForm;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // renew_period - computed: false, optional: true, required: false
  private _renewPeriod?: number; 
  public get renewPeriod() {
    return this.getNumberAttribute('renew_period');
  }
  public set renewPeriod(value: number) {
    this._renewPeriod = value;
  }
  public resetRenewPeriod() {
    this._renewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewPeriodInput() {
    return this._renewPeriod;
  }

  // renewal_status - computed: false, optional: true, required: false
  private _renewalStatus?: string; 
  public get renewalStatus() {
    return this.getStringAttribute('renewal_status');
  }
  public set renewalStatus(value: string) {
    this._renewalStatus = value;
  }
  public resetRenewalStatus() {
    this._renewalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalStatusInput() {
    return this._renewalStatus;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // server_arch - computed: false, optional: true, required: false
  private _serverArch?: string; 
  public get serverArch() {
    return this.getStringAttribute('server_arch');
  }
  public set serverArch(value: string) {
    this._serverArch = value;
  }
  public resetServerArch() {
    this._serverArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverArchInput() {
    return this._serverArch;
  }

  // stage_num - computed: false, optional: true, required: false
  private _stageNum?: string; 
  public get stageNum() {
    return this.getStringAttribute('stage_num');
  }
  public set stageNum(value: string) {
    this._stageNum = value;
  }
  public resetStageNum() {
    this._stageNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNumInput() {
    return this._stageNum;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_data - computed: true, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new EfloNodeDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: EfloNodeDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // ip_allocation_policy - computed: false, optional: true, required: false
  private _ipAllocationPolicy = new EfloNodeIpAllocationPolicyList(this, "ip_allocation_policy", false);
  public get ipAllocationPolicy() {
    return this._ipAllocationPolicy;
  }
  public putIpAllocationPolicy(value: EfloNodeIpAllocationPolicy[] | cdktf.IResolvable) {
    this._ipAllocationPolicy.internalValue = value;
  }
  public resetIpAllocationPolicy() {
    this._ipAllocationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationPolicyInput() {
    return this._ipAllocationPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EfloNodeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EfloNodeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_cycle: cdktf.stringToTerraform(this._billingCycle),
      classify: cdktf.stringToTerraform(this._classify),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      computing_server: cdktf.stringToTerraform(this._computingServer),
      discount_level: cdktf.stringToTerraform(this._discountLevel),
      hostname: cdktf.stringToTerraform(this._hostname),
      hpn_zone: cdktf.stringToTerraform(this._hpnZone),
      id: cdktf.stringToTerraform(this._id),
      install_pai: cdktf.booleanToTerraform(this._installPai),
      login_password: cdktf.stringToTerraform(this._loginPassword),
      machine_type: cdktf.stringToTerraform(this._machineType),
      node_group_id: cdktf.stringToTerraform(this._nodeGroupId),
      node_type: cdktf.stringToTerraform(this._nodeType),
      payment_ratio: cdktf.stringToTerraform(this._paymentRatio),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      product_form: cdktf.stringToTerraform(this._productForm),
      renew_period: cdktf.numberToTerraform(this._renewPeriod),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      server_arch: cdktf.stringToTerraform(this._serverArch),
      stage_num: cdktf.stringToTerraform(this._stageNum),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone: cdktf.stringToTerraform(this._zone),
      data_disk: cdktf.listMapper(efloNodeDataDiskToTerraform, true)(this._dataDisk.internalValue),
      ip_allocation_policy: cdktf.listMapper(efloNodeIpAllocationPolicyToTerraform, true)(this._ipAllocationPolicy.internalValue),
      timeouts: efloNodeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_cycle: {
        value: cdktf.stringToHclTerraform(this._billingCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      classify: {
        value: cdktf.stringToHclTerraform(this._classify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      computing_server: {
        value: cdktf.stringToHclTerraform(this._computingServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discount_level: {
        value: cdktf.stringToHclTerraform(this._discountLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hpn_zone: {
        value: cdktf.stringToHclTerraform(this._hpnZone),
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
      install_pai: {
        value: cdktf.booleanToHclTerraform(this._installPai),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_password: {
        value: cdktf.stringToHclTerraform(this._loginPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_group_id: {
        value: cdktf.stringToHclTerraform(this._nodeGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_ratio: {
        value: cdktf.stringToHclTerraform(this._paymentRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_form: {
        value: cdktf.stringToHclTerraform(this._productForm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_period: {
        value: cdktf.numberToHclTerraform(this._renewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_arch: {
        value: cdktf.stringToHclTerraform(this._serverArch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage_num: {
        value: cdktf.stringToHclTerraform(this._stageNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_disk: {
        value: cdktf.listMapperHcl(efloNodeDataDiskToHclTerraform, true)(this._dataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EfloNodeDataDiskList",
      },
      ip_allocation_policy: {
        value: cdktf.listMapperHcl(efloNodeIpAllocationPolicyToHclTerraform, true)(this._ipAllocationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EfloNodeIpAllocationPolicyList",
      },
      timeouts: {
        value: efloNodeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EfloNodeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
