// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfloNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#az EfloNodeGroup#az}
  */
  readonly az: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#cluster_id EfloNodeGroup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#id EfloNodeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#ignore_failed_node_tasks EfloNodeGroup#ignore_failed_node_tasks}
  */
  readonly ignoreFailedNodeTasks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#image_id EfloNodeGroup#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#key_pair_name EfloNodeGroup#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#login_password EfloNodeGroup#login_password}
  */
  readonly loginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#machine_type EfloNodeGroup#machine_type}
  */
  readonly machineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#node_group_description EfloNodeGroup#node_group_description}
  */
  readonly nodeGroupDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#node_group_name EfloNodeGroup#node_group_name}
  */
  readonly nodeGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#user_data EfloNodeGroup#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#vpd_subnets EfloNodeGroup#vpd_subnets}
  */
  readonly vpdSubnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#vswitch_zone_id EfloNodeGroup#vswitch_zone_id}
  */
  readonly vswitchZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#zone_id EfloNodeGroup#zone_id}
  */
  readonly zoneId?: string;
  /**
  * ip_allocation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#ip_allocation_policy EfloNodeGroup#ip_allocation_policy}
  */
  readonly ipAllocationPolicy?: EfloNodeGroupIpAllocationPolicy[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#nodes EfloNodeGroup#nodes}
  */
  readonly nodes?: EfloNodeGroupNodes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#timeouts EfloNodeGroup#timeouts}
  */
  readonly timeouts?: EfloNodeGroupTimeouts;
}
export interface EfloNodeGroupIpAllocationPolicyBondPolicyBonds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#name EfloNodeGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#subnet EfloNodeGroup#subnet}
  */
  readonly subnet?: string;
}

export function efloNodeGroupIpAllocationPolicyBondPolicyBondsToTerraform(struct?: EfloNodeGroupIpAllocationPolicyBondPolicyBonds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function efloNodeGroupIpAllocationPolicyBondPolicyBondsToHclTerraform(struct?: EfloNodeGroupIpAllocationPolicyBondPolicyBonds | cdktf.IResolvable): any {
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

export class EfloNodeGroupIpAllocationPolicyBondPolicyBondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeGroupIpAllocationPolicyBondPolicyBonds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloNodeGroupIpAllocationPolicyBondPolicyBonds | cdktf.IResolvable | undefined) {
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

export class EfloNodeGroupIpAllocationPolicyBondPolicyBondsList extends cdktf.ComplexList {
  public internalValue? : EfloNodeGroupIpAllocationPolicyBondPolicyBonds[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeGroupIpAllocationPolicyBondPolicyBondsOutputReference {
    return new EfloNodeGroupIpAllocationPolicyBondPolicyBondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeGroupIpAllocationPolicyBondPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#bond_default_subnet EfloNodeGroup#bond_default_subnet}
  */
  readonly bondDefaultSubnet?: string;
  /**
  * bonds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#bonds EfloNodeGroup#bonds}
  */
  readonly bonds?: EfloNodeGroupIpAllocationPolicyBondPolicyBonds[] | cdktf.IResolvable;
}

export function efloNodeGroupIpAllocationPolicyBondPolicyToTerraform(struct?: EfloNodeGroupIpAllocationPolicyBondPolicyOutputReference | EfloNodeGroupIpAllocationPolicyBondPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_default_subnet: cdktf.stringToTerraform(struct!.bondDefaultSubnet),
    bonds: cdktf.listMapper(efloNodeGroupIpAllocationPolicyBondPolicyBondsToTerraform, true)(struct!.bonds),
  }
}


export function efloNodeGroupIpAllocationPolicyBondPolicyToHclTerraform(struct?: EfloNodeGroupIpAllocationPolicyBondPolicyOutputReference | EfloNodeGroupIpAllocationPolicyBondPolicy): any {
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
      value: cdktf.listMapperHcl(efloNodeGroupIpAllocationPolicyBondPolicyBondsToHclTerraform, true)(struct!.bonds),
      isBlock: true,
      type: "list",
      storageClassType: "EfloNodeGroupIpAllocationPolicyBondPolicyBondsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloNodeGroupIpAllocationPolicyBondPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EfloNodeGroupIpAllocationPolicyBondPolicy | undefined {
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

  public set internalValue(value: EfloNodeGroupIpAllocationPolicyBondPolicy | undefined) {
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
  private _bonds = new EfloNodeGroupIpAllocationPolicyBondPolicyBondsList(this, "bonds", false);
  public get bonds() {
    return this._bonds;
  }
  public putBonds(value: EfloNodeGroupIpAllocationPolicyBondPolicyBonds[] | cdktf.IResolvable) {
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
export interface EfloNodeGroupIpAllocationPolicyMachineTypePolicyBonds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#name EfloNodeGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#subnet EfloNodeGroup#subnet}
  */
  readonly subnet?: string;
}

export function efloNodeGroupIpAllocationPolicyMachineTypePolicyBondsToTerraform(struct?: EfloNodeGroupIpAllocationPolicyMachineTypePolicyBonds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function efloNodeGroupIpAllocationPolicyMachineTypePolicyBondsToHclTerraform(struct?: EfloNodeGroupIpAllocationPolicyMachineTypePolicyBonds | cdktf.IResolvable): any {
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

export class EfloNodeGroupIpAllocationPolicyMachineTypePolicyBondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeGroupIpAllocationPolicyMachineTypePolicyBonds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloNodeGroupIpAllocationPolicyMachineTypePolicyBonds | cdktf.IResolvable | undefined) {
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

export class EfloNodeGroupIpAllocationPolicyMachineTypePolicyBondsList extends cdktf.ComplexList {
  public internalValue? : EfloNodeGroupIpAllocationPolicyMachineTypePolicyBonds[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeGroupIpAllocationPolicyMachineTypePolicyBondsOutputReference {
    return new EfloNodeGroupIpAllocationPolicyMachineTypePolicyBondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeGroupIpAllocationPolicyMachineTypePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#machine_type EfloNodeGroup#machine_type}
  */
  readonly machineType?: string;
  /**
  * bonds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#bonds EfloNodeGroup#bonds}
  */
  readonly bonds?: EfloNodeGroupIpAllocationPolicyMachineTypePolicyBonds[] | cdktf.IResolvable;
}

export function efloNodeGroupIpAllocationPolicyMachineTypePolicyToTerraform(struct?: EfloNodeGroupIpAllocationPolicyMachineTypePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    bonds: cdktf.listMapper(efloNodeGroupIpAllocationPolicyMachineTypePolicyBondsToTerraform, true)(struct!.bonds),
  }
}


export function efloNodeGroupIpAllocationPolicyMachineTypePolicyToHclTerraform(struct?: EfloNodeGroupIpAllocationPolicyMachineTypePolicy | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(efloNodeGroupIpAllocationPolicyMachineTypePolicyBondsToHclTerraform, true)(struct!.bonds),
      isBlock: true,
      type: "list",
      storageClassType: "EfloNodeGroupIpAllocationPolicyMachineTypePolicyBondsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloNodeGroupIpAllocationPolicyMachineTypePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeGroupIpAllocationPolicyMachineTypePolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloNodeGroupIpAllocationPolicyMachineTypePolicy | cdktf.IResolvable | undefined) {
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
  private _bonds = new EfloNodeGroupIpAllocationPolicyMachineTypePolicyBondsList(this, "bonds", false);
  public get bonds() {
    return this._bonds;
  }
  public putBonds(value: EfloNodeGroupIpAllocationPolicyMachineTypePolicyBonds[] | cdktf.IResolvable) {
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

export class EfloNodeGroupIpAllocationPolicyMachineTypePolicyList extends cdktf.ComplexList {
  public internalValue? : EfloNodeGroupIpAllocationPolicyMachineTypePolicy[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeGroupIpAllocationPolicyMachineTypePolicyOutputReference {
    return new EfloNodeGroupIpAllocationPolicyMachineTypePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeGroupIpAllocationPolicyNodePolicyBonds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#name EfloNodeGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#subnet EfloNodeGroup#subnet}
  */
  readonly subnet?: string;
}

export function efloNodeGroupIpAllocationPolicyNodePolicyBondsToTerraform(struct?: EfloNodeGroupIpAllocationPolicyNodePolicyBonds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function efloNodeGroupIpAllocationPolicyNodePolicyBondsToHclTerraform(struct?: EfloNodeGroupIpAllocationPolicyNodePolicyBonds | cdktf.IResolvable): any {
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

export class EfloNodeGroupIpAllocationPolicyNodePolicyBondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeGroupIpAllocationPolicyNodePolicyBonds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloNodeGroupIpAllocationPolicyNodePolicyBonds | cdktf.IResolvable | undefined) {
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

export class EfloNodeGroupIpAllocationPolicyNodePolicyBondsList extends cdktf.ComplexList {
  public internalValue? : EfloNodeGroupIpAllocationPolicyNodePolicyBonds[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeGroupIpAllocationPolicyNodePolicyBondsOutputReference {
    return new EfloNodeGroupIpAllocationPolicyNodePolicyBondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeGroupIpAllocationPolicyNodePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#node_id EfloNodeGroup#node_id}
  */
  readonly nodeId?: string;
  /**
  * bonds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#bonds EfloNodeGroup#bonds}
  */
  readonly bonds?: EfloNodeGroupIpAllocationPolicyNodePolicyBonds[] | cdktf.IResolvable;
}

export function efloNodeGroupIpAllocationPolicyNodePolicyToTerraform(struct?: EfloNodeGroupIpAllocationPolicyNodePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    bonds: cdktf.listMapper(efloNodeGroupIpAllocationPolicyNodePolicyBondsToTerraform, true)(struct!.bonds),
  }
}


export function efloNodeGroupIpAllocationPolicyNodePolicyToHclTerraform(struct?: EfloNodeGroupIpAllocationPolicyNodePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bonds: {
      value: cdktf.listMapperHcl(efloNodeGroupIpAllocationPolicyNodePolicyBondsToHclTerraform, true)(struct!.bonds),
      isBlock: true,
      type: "list",
      storageClassType: "EfloNodeGroupIpAllocationPolicyNodePolicyBondsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloNodeGroupIpAllocationPolicyNodePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeGroupIpAllocationPolicyNodePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: EfloNodeGroupIpAllocationPolicyNodePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._nodeId = value.nodeId;
      this._bonds.internalValue = value.bonds;
    }
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
  private _bonds = new EfloNodeGroupIpAllocationPolicyNodePolicyBondsList(this, "bonds", false);
  public get bonds() {
    return this._bonds;
  }
  public putBonds(value: EfloNodeGroupIpAllocationPolicyNodePolicyBonds[] | cdktf.IResolvable) {
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

export class EfloNodeGroupIpAllocationPolicyNodePolicyList extends cdktf.ComplexList {
  public internalValue? : EfloNodeGroupIpAllocationPolicyNodePolicy[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeGroupIpAllocationPolicyNodePolicyOutputReference {
    return new EfloNodeGroupIpAllocationPolicyNodePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeGroupIpAllocationPolicy {
  /**
  * bond_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#bond_policy EfloNodeGroup#bond_policy}
  */
  readonly bondPolicy?: EfloNodeGroupIpAllocationPolicyBondPolicy;
  /**
  * machine_type_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#machine_type_policy EfloNodeGroup#machine_type_policy}
  */
  readonly machineTypePolicy?: EfloNodeGroupIpAllocationPolicyMachineTypePolicy[] | cdktf.IResolvable;
  /**
  * node_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#node_policy EfloNodeGroup#node_policy}
  */
  readonly nodePolicy?: EfloNodeGroupIpAllocationPolicyNodePolicy[] | cdktf.IResolvable;
}

export function efloNodeGroupIpAllocationPolicyToTerraform(struct?: EfloNodeGroupIpAllocationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_policy: efloNodeGroupIpAllocationPolicyBondPolicyToTerraform(struct!.bondPolicy),
    machine_type_policy: cdktf.listMapper(efloNodeGroupIpAllocationPolicyMachineTypePolicyToTerraform, true)(struct!.machineTypePolicy),
    node_policy: cdktf.listMapper(efloNodeGroupIpAllocationPolicyNodePolicyToTerraform, true)(struct!.nodePolicy),
  }
}


export function efloNodeGroupIpAllocationPolicyToHclTerraform(struct?: EfloNodeGroupIpAllocationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bond_policy: {
      value: efloNodeGroupIpAllocationPolicyBondPolicyToHclTerraform(struct!.bondPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EfloNodeGroupIpAllocationPolicyBondPolicyList",
    },
    machine_type_policy: {
      value: cdktf.listMapperHcl(efloNodeGroupIpAllocationPolicyMachineTypePolicyToHclTerraform, true)(struct!.machineTypePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EfloNodeGroupIpAllocationPolicyMachineTypePolicyList",
    },
    node_policy: {
      value: cdktf.listMapperHcl(efloNodeGroupIpAllocationPolicyNodePolicyToHclTerraform, true)(struct!.nodePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EfloNodeGroupIpAllocationPolicyNodePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloNodeGroupIpAllocationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeGroupIpAllocationPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloNodeGroupIpAllocationPolicy | cdktf.IResolvable | undefined) {
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
  private _bondPolicy = new EfloNodeGroupIpAllocationPolicyBondPolicyOutputReference(this, "bond_policy");
  public get bondPolicy() {
    return this._bondPolicy;
  }
  public putBondPolicy(value: EfloNodeGroupIpAllocationPolicyBondPolicy) {
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
  private _machineTypePolicy = new EfloNodeGroupIpAllocationPolicyMachineTypePolicyList(this, "machine_type_policy", false);
  public get machineTypePolicy() {
    return this._machineTypePolicy;
  }
  public putMachineTypePolicy(value: EfloNodeGroupIpAllocationPolicyMachineTypePolicy[] | cdktf.IResolvable) {
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
  private _nodePolicy = new EfloNodeGroupIpAllocationPolicyNodePolicyList(this, "node_policy", false);
  public get nodePolicy() {
    return this._nodePolicy;
  }
  public putNodePolicy(value: EfloNodeGroupIpAllocationPolicyNodePolicy[] | cdktf.IResolvable) {
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

export class EfloNodeGroupIpAllocationPolicyList extends cdktf.ComplexList {
  public internalValue? : EfloNodeGroupIpAllocationPolicy[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeGroupIpAllocationPolicyOutputReference {
    return new EfloNodeGroupIpAllocationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeGroupNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#hostname EfloNodeGroup#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#login_password EfloNodeGroup#login_password}
  */
  readonly loginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#node_id EfloNodeGroup#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#vpc_id EfloNodeGroup#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#vswitch_id EfloNodeGroup#vswitch_id}
  */
  readonly vswitchId?: string;
}

export function efloNodeGroupNodesToTerraform(struct?: EfloNodeGroupNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    login_password: cdktf.stringToTerraform(struct!.loginPassword),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
  }
}


export function efloNodeGroupNodesToHclTerraform(struct?: EfloNodeGroupNodes | cdktf.IResolvable): any {
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
    login_password: {
      value: cdktf.stringToHclTerraform(struct!.loginPassword),
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
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloNodeGroupNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloNodeGroupNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._loginPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPassword = this._loginPassword;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloNodeGroupNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._loginPassword = undefined;
      this._nodeId = undefined;
      this._vpcId = undefined;
      this._vswitchId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._loginPassword = value.loginPassword;
      this._nodeId = value.nodeId;
      this._vpcId = value.vpcId;
      this._vswitchId = value.vswitchId;
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

  // vpc_id - computed: false, optional: true, required: false
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

  // vswitch_id - computed: false, optional: true, required: false
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
}

export class EfloNodeGroupNodesList extends cdktf.ComplexList {
  public internalValue? : EfloNodeGroupNodes[] | cdktf.IResolvable

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
  public get(index: number): EfloNodeGroupNodesOutputReference {
    return new EfloNodeGroupNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloNodeGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#create EfloNodeGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#delete EfloNodeGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#update EfloNodeGroup#update}
  */
  readonly update?: string;
}

export function efloNodeGroupTimeoutsToTerraform(struct?: EfloNodeGroupTimeouts | cdktf.IResolvable): any {
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


export function efloNodeGroupTimeoutsToHclTerraform(struct?: EfloNodeGroupTimeouts | cdktf.IResolvable): any {
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

export class EfloNodeGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EfloNodeGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloNodeGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group alicloud_eflo_node_group}
*/
export class EfloNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_eflo_node_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EfloNodeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EfloNodeGroup to import
  * @param importFromId The id of the existing EfloNodeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EfloNodeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_eflo_node_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eflo_node_group alicloud_eflo_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfloNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: EfloNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_eflo_node_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._az = config.az;
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._ignoreFailedNodeTasks = config.ignoreFailedNodeTasks;
    this._imageId = config.imageId;
    this._keyPairName = config.keyPairName;
    this._loginPassword = config.loginPassword;
    this._machineType = config.machineType;
    this._nodeGroupDescription = config.nodeGroupDescription;
    this._nodeGroupName = config.nodeGroupName;
    this._userData = config.userData;
    this._vpdSubnets = config.vpdSubnets;
    this._vswitchZoneId = config.vswitchZoneId;
    this._zoneId = config.zoneId;
    this._ipAllocationPolicy.internalValue = config.ipAllocationPolicy;
    this._nodes.internalValue = config.nodes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // az - computed: false, optional: false, required: true
  private _az?: string; 
  public get az() {
    return this.getStringAttribute('az');
  }
  public set az(value: string) {
    this._az = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azInput() {
    return this._az;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // ignore_failed_node_tasks - computed: false, optional: true, required: false
  private _ignoreFailedNodeTasks?: boolean | cdktf.IResolvable; 
  public get ignoreFailedNodeTasks() {
    return this.getBooleanAttribute('ignore_failed_node_tasks');
  }
  public set ignoreFailedNodeTasks(value: boolean | cdktf.IResolvable) {
    this._ignoreFailedNodeTasks = value;
  }
  public resetIgnoreFailedNodeTasks() {
    this._ignoreFailedNodeTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFailedNodeTasksInput() {
    return this._ignoreFailedNodeTasks;
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // key_pair_name - computed: false, optional: true, required: false
  private _keyPairName?: string; 
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }
  public set keyPairName(value: string) {
    this._keyPairName = value;
  }
  public resetKeyPairName() {
    this._keyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairNameInput() {
    return this._keyPairName;
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

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // node_group_description - computed: false, optional: true, required: false
  private _nodeGroupDescription?: string; 
  public get nodeGroupDescription() {
    return this.getStringAttribute('node_group_description');
  }
  public set nodeGroupDescription(value: string) {
    this._nodeGroupDescription = value;
  }
  public resetNodeGroupDescription() {
    this._nodeGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupDescriptionInput() {
    return this._nodeGroupDescription;
  }

  // node_group_id - computed: true, optional: false, required: false
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }

  // node_group_name - computed: false, optional: false, required: true
  private _nodeGroupName?: string; 
  public get nodeGroupName() {
    return this.getStringAttribute('node_group_name');
  }
  public set nodeGroupName(value: string) {
    this._nodeGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupNameInput() {
    return this._nodeGroupName;
  }

  // user_data - computed: false, optional: true, required: false
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

  // vpd_subnets - computed: false, optional: true, required: false
  private _vpdSubnets?: string[]; 
  public get vpdSubnets() {
    return this.getListAttribute('vpd_subnets');
  }
  public set vpdSubnets(value: string[]) {
    this._vpdSubnets = value;
  }
  public resetVpdSubnets() {
    this._vpdSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpdSubnetsInput() {
    return this._vpdSubnets;
  }

  // vswitch_zone_id - computed: false, optional: true, required: false
  private _vswitchZoneId?: string; 
  public get vswitchZoneId() {
    return this.getStringAttribute('vswitch_zone_id');
  }
  public set vswitchZoneId(value: string) {
    this._vswitchZoneId = value;
  }
  public resetVswitchZoneId() {
    this._vswitchZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchZoneIdInput() {
    return this._vswitchZoneId;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // ip_allocation_policy - computed: false, optional: true, required: false
  private _ipAllocationPolicy = new EfloNodeGroupIpAllocationPolicyList(this, "ip_allocation_policy", false);
  public get ipAllocationPolicy() {
    return this._ipAllocationPolicy;
  }
  public putIpAllocationPolicy(value: EfloNodeGroupIpAllocationPolicy[] | cdktf.IResolvable) {
    this._ipAllocationPolicy.internalValue = value;
  }
  public resetIpAllocationPolicy() {
    this._ipAllocationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationPolicyInput() {
    return this._ipAllocationPolicy.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new EfloNodeGroupNodesList(this, "nodes", true);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: EfloNodeGroupNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EfloNodeGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EfloNodeGroupTimeouts) {
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
      az: cdktf.stringToTerraform(this._az),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      ignore_failed_node_tasks: cdktf.booleanToTerraform(this._ignoreFailedNodeTasks),
      image_id: cdktf.stringToTerraform(this._imageId),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      login_password: cdktf.stringToTerraform(this._loginPassword),
      machine_type: cdktf.stringToTerraform(this._machineType),
      node_group_description: cdktf.stringToTerraform(this._nodeGroupDescription),
      node_group_name: cdktf.stringToTerraform(this._nodeGroupName),
      user_data: cdktf.stringToTerraform(this._userData),
      vpd_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpdSubnets),
      vswitch_zone_id: cdktf.stringToTerraform(this._vswitchZoneId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      ip_allocation_policy: cdktf.listMapper(efloNodeGroupIpAllocationPolicyToTerraform, true)(this._ipAllocationPolicy.internalValue),
      nodes: cdktf.listMapper(efloNodeGroupNodesToTerraform, true)(this._nodes.internalValue),
      timeouts: efloNodeGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      az: {
        value: cdktf.stringToHclTerraform(this._az),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_failed_node_tasks: {
        value: cdktf.booleanToHclTerraform(this._ignoreFailedNodeTasks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair_name: {
        value: cdktf.stringToHclTerraform(this._keyPairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      node_group_description: {
        value: cdktf.stringToHclTerraform(this._nodeGroupDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_group_name: {
        value: cdktf.stringToHclTerraform(this._nodeGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpd_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpdSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vswitch_zone_id: {
        value: cdktf.stringToHclTerraform(this._vswitchZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_allocation_policy: {
        value: cdktf.listMapperHcl(efloNodeGroupIpAllocationPolicyToHclTerraform, true)(this._ipAllocationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EfloNodeGroupIpAllocationPolicyList",
      },
      nodes: {
        value: cdktf.listMapperHcl(efloNodeGroupNodesToHclTerraform, true)(this._nodes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EfloNodeGroupNodesList",
      },
      timeouts: {
        value: efloNodeGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EfloNodeGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
