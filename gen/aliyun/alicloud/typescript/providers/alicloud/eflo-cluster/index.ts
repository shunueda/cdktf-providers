// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfloClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#cluster_description EfloCluster#cluster_description}
  */
  readonly clusterDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#cluster_name EfloCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#cluster_type EfloCluster#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#hpn_zone EfloCluster#hpn_zone}
  */
  readonly hpnZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#id EfloCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#ignore_failed_node_tasks EfloCluster#ignore_failed_node_tasks}
  */
  readonly ignoreFailedNodeTasks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#nimiz_vswitches EfloCluster#nimiz_vswitches}
  */
  readonly nimizVswitches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#open_eni_jumbo_frame EfloCluster#open_eni_jumbo_frame}
  */
  readonly openEniJumboFrame?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#resource_group_id EfloCluster#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#tags EfloCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * components block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#components EfloCluster#components}
  */
  readonly components?: EfloClusterComponents[] | cdktf.IResolvable;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#networks EfloCluster#networks}
  */
  readonly networks?: EfloClusterNetworks;
  /**
  * node_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#node_groups EfloCluster#node_groups}
  */
  readonly nodeGroups?: EfloClusterNodeGroups[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#timeouts EfloCluster#timeouts}
  */
  readonly timeouts?: EfloClusterTimeouts;
}
export interface EfloClusterComponentsComponentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#basic_args EfloCluster#basic_args}
  */
  readonly basicArgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#node_units EfloCluster#node_units}
  */
  readonly nodeUnits?: string[];
}

export function efloClusterComponentsComponentConfigToTerraform(struct?: EfloClusterComponentsComponentConfigOutputReference | EfloClusterComponentsComponentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_args: cdktf.stringToTerraform(struct!.basicArgs),
    node_units: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeUnits),
  }
}


export function efloClusterComponentsComponentConfigToHclTerraform(struct?: EfloClusterComponentsComponentConfigOutputReference | EfloClusterComponentsComponentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_args: {
      value: cdktf.stringToHclTerraform(struct!.basicArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_units: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeUnits),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloClusterComponentsComponentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EfloClusterComponentsComponentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicArgs = this._basicArgs;
    }
    if (this._nodeUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeUnits = this._nodeUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloClusterComponentsComponentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicArgs = undefined;
      this._nodeUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicArgs = value.basicArgs;
      this._nodeUnits = value.nodeUnits;
    }
  }

  // basic_args - computed: false, optional: true, required: false
  private _basicArgs?: string; 
  public get basicArgs() {
    return this.getStringAttribute('basic_args');
  }
  public set basicArgs(value: string) {
    this._basicArgs = value;
  }
  public resetBasicArgs() {
    this._basicArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicArgsInput() {
    return this._basicArgs;
  }

  // node_units - computed: false, optional: true, required: false
  private _nodeUnits?: string[]; 
  public get nodeUnits() {
    return this.getListAttribute('node_units');
  }
  public set nodeUnits(value: string[]) {
    this._nodeUnits = value;
  }
  public resetNodeUnits() {
    this._nodeUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeUnitsInput() {
    return this._nodeUnits;
  }
}
export interface EfloClusterComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#component_type EfloCluster#component_type}
  */
  readonly componentType?: string;
  /**
  * component_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#component_config EfloCluster#component_config}
  */
  readonly componentConfig?: EfloClusterComponentsComponentConfig;
}

export function efloClusterComponentsToTerraform(struct?: EfloClusterComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_type: cdktf.stringToTerraform(struct!.componentType),
    component_config: efloClusterComponentsComponentConfigToTerraform(struct!.componentConfig),
  }
}


export function efloClusterComponentsToHclTerraform(struct?: EfloClusterComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_type: {
      value: cdktf.stringToHclTerraform(struct!.componentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component_config: {
      value: efloClusterComponentsComponentConfigToHclTerraform(struct!.componentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EfloClusterComponentsComponentConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloClusterComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloClusterComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentType = this._componentType;
    }
    if (this._componentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentConfig = this._componentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloClusterComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentType = undefined;
      this._componentConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentType = value.componentType;
      this._componentConfig.internalValue = value.componentConfig;
    }
  }

  // component_type - computed: false, optional: true, required: false
  private _componentType?: string; 
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
  public set componentType(value: string) {
    this._componentType = value;
  }
  public resetComponentType() {
    this._componentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType;
  }

  // component_config - computed: false, optional: true, required: false
  private _componentConfig = new EfloClusterComponentsComponentConfigOutputReference(this, "component_config");
  public get componentConfig() {
    return this._componentConfig;
  }
  public putComponentConfig(value: EfloClusterComponentsComponentConfig) {
    this._componentConfig.internalValue = value;
  }
  public resetComponentConfig() {
    this._componentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentConfigInput() {
    return this._componentConfig.internalValue;
  }
}

export class EfloClusterComponentsList extends cdktf.ComplexList {
  public internalValue? : EfloClusterComponents[] | cdktf.IResolvable

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
  public get(index: number): EfloClusterComponentsOutputReference {
    return new EfloClusterComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloClusterNetworksIpAllocationPolicyBondPolicyBonds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#name EfloCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#subnet EfloCluster#subnet}
  */
  readonly subnet?: string;
}

export function efloClusterNetworksIpAllocationPolicyBondPolicyBondsToTerraform(struct?: EfloClusterNetworksIpAllocationPolicyBondPolicyBonds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function efloClusterNetworksIpAllocationPolicyBondPolicyBondsToHclTerraform(struct?: EfloClusterNetworksIpAllocationPolicyBondPolicyBonds | cdktf.IResolvable): any {
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

export class EfloClusterNetworksIpAllocationPolicyBondPolicyBondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloClusterNetworksIpAllocationPolicyBondPolicyBonds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloClusterNetworksIpAllocationPolicyBondPolicyBonds | cdktf.IResolvable | undefined) {
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

export class EfloClusterNetworksIpAllocationPolicyBondPolicyBondsList extends cdktf.ComplexList {
  public internalValue? : EfloClusterNetworksIpAllocationPolicyBondPolicyBonds[] | cdktf.IResolvable

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
  public get(index: number): EfloClusterNetworksIpAllocationPolicyBondPolicyBondsOutputReference {
    return new EfloClusterNetworksIpAllocationPolicyBondPolicyBondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloClusterNetworksIpAllocationPolicyBondPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#bond_default_subnet EfloCluster#bond_default_subnet}
  */
  readonly bondDefaultSubnet?: string;
  /**
  * bonds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#bonds EfloCluster#bonds}
  */
  readonly bonds?: EfloClusterNetworksIpAllocationPolicyBondPolicyBonds[] | cdktf.IResolvable;
}

export function efloClusterNetworksIpAllocationPolicyBondPolicyToTerraform(struct?: EfloClusterNetworksIpAllocationPolicyBondPolicyOutputReference | EfloClusterNetworksIpAllocationPolicyBondPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_default_subnet: cdktf.stringToTerraform(struct!.bondDefaultSubnet),
    bonds: cdktf.listMapper(efloClusterNetworksIpAllocationPolicyBondPolicyBondsToTerraform, true)(struct!.bonds),
  }
}


export function efloClusterNetworksIpAllocationPolicyBondPolicyToHclTerraform(struct?: EfloClusterNetworksIpAllocationPolicyBondPolicyOutputReference | EfloClusterNetworksIpAllocationPolicyBondPolicy): any {
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
      value: cdktf.listMapperHcl(efloClusterNetworksIpAllocationPolicyBondPolicyBondsToHclTerraform, true)(struct!.bonds),
      isBlock: true,
      type: "list",
      storageClassType: "EfloClusterNetworksIpAllocationPolicyBondPolicyBondsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloClusterNetworksIpAllocationPolicyBondPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EfloClusterNetworksIpAllocationPolicyBondPolicy | undefined {
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

  public set internalValue(value: EfloClusterNetworksIpAllocationPolicyBondPolicy | undefined) {
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
  private _bonds = new EfloClusterNetworksIpAllocationPolicyBondPolicyBondsList(this, "bonds", false);
  public get bonds() {
    return this._bonds;
  }
  public putBonds(value: EfloClusterNetworksIpAllocationPolicyBondPolicyBonds[] | cdktf.IResolvable) {
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
export interface EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBonds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#name EfloCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#subnet EfloCluster#subnet}
  */
  readonly subnet?: string;
}

export function efloClusterNetworksIpAllocationPolicyMachineTypePolicyBondsToTerraform(struct?: EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBonds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function efloClusterNetworksIpAllocationPolicyMachineTypePolicyBondsToHclTerraform(struct?: EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBonds | cdktf.IResolvable): any {
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

export class EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBonds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBonds | cdktf.IResolvable | undefined) {
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

export class EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBondsList extends cdktf.ComplexList {
  public internalValue? : EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBonds[] | cdktf.IResolvable

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
  public get(index: number): EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBondsOutputReference {
    return new EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloClusterNetworksIpAllocationPolicyMachineTypePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#machine_type EfloCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * bonds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#bonds EfloCluster#bonds}
  */
  readonly bonds?: EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBonds[] | cdktf.IResolvable;
}

export function efloClusterNetworksIpAllocationPolicyMachineTypePolicyToTerraform(struct?: EfloClusterNetworksIpAllocationPolicyMachineTypePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    bonds: cdktf.listMapper(efloClusterNetworksIpAllocationPolicyMachineTypePolicyBondsToTerraform, true)(struct!.bonds),
  }
}


export function efloClusterNetworksIpAllocationPolicyMachineTypePolicyToHclTerraform(struct?: EfloClusterNetworksIpAllocationPolicyMachineTypePolicy | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(efloClusterNetworksIpAllocationPolicyMachineTypePolicyBondsToHclTerraform, true)(struct!.bonds),
      isBlock: true,
      type: "list",
      storageClassType: "EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBondsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloClusterNetworksIpAllocationPolicyMachineTypePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloClusterNetworksIpAllocationPolicyMachineTypePolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloClusterNetworksIpAllocationPolicyMachineTypePolicy | cdktf.IResolvable | undefined) {
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
  private _bonds = new EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBondsList(this, "bonds", false);
  public get bonds() {
    return this._bonds;
  }
  public putBonds(value: EfloClusterNetworksIpAllocationPolicyMachineTypePolicyBonds[] | cdktf.IResolvable) {
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

export class EfloClusterNetworksIpAllocationPolicyMachineTypePolicyList extends cdktf.ComplexList {
  public internalValue? : EfloClusterNetworksIpAllocationPolicyMachineTypePolicy[] | cdktf.IResolvable

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
  public get(index: number): EfloClusterNetworksIpAllocationPolicyMachineTypePolicyOutputReference {
    return new EfloClusterNetworksIpAllocationPolicyMachineTypePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloClusterNetworksIpAllocationPolicyNodePolicyBonds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#name EfloCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#subnet EfloCluster#subnet}
  */
  readonly subnet?: string;
}

export function efloClusterNetworksIpAllocationPolicyNodePolicyBondsToTerraform(struct?: EfloClusterNetworksIpAllocationPolicyNodePolicyBonds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function efloClusterNetworksIpAllocationPolicyNodePolicyBondsToHclTerraform(struct?: EfloClusterNetworksIpAllocationPolicyNodePolicyBonds | cdktf.IResolvable): any {
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

export class EfloClusterNetworksIpAllocationPolicyNodePolicyBondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloClusterNetworksIpAllocationPolicyNodePolicyBonds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloClusterNetworksIpAllocationPolicyNodePolicyBonds | cdktf.IResolvable | undefined) {
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

export class EfloClusterNetworksIpAllocationPolicyNodePolicyBondsList extends cdktf.ComplexList {
  public internalValue? : EfloClusterNetworksIpAllocationPolicyNodePolicyBonds[] | cdktf.IResolvable

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
  public get(index: number): EfloClusterNetworksIpAllocationPolicyNodePolicyBondsOutputReference {
    return new EfloClusterNetworksIpAllocationPolicyNodePolicyBondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloClusterNetworksIpAllocationPolicyNodePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#node_id EfloCluster#node_id}
  */
  readonly nodeId?: string;
  /**
  * bonds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#bonds EfloCluster#bonds}
  */
  readonly bonds?: EfloClusterNetworksIpAllocationPolicyNodePolicyBonds[] | cdktf.IResolvable;
}

export function efloClusterNetworksIpAllocationPolicyNodePolicyToTerraform(struct?: EfloClusterNetworksIpAllocationPolicyNodePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    bonds: cdktf.listMapper(efloClusterNetworksIpAllocationPolicyNodePolicyBondsToTerraform, true)(struct!.bonds),
  }
}


export function efloClusterNetworksIpAllocationPolicyNodePolicyToHclTerraform(struct?: EfloClusterNetworksIpAllocationPolicyNodePolicy | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(efloClusterNetworksIpAllocationPolicyNodePolicyBondsToHclTerraform, true)(struct!.bonds),
      isBlock: true,
      type: "list",
      storageClassType: "EfloClusterNetworksIpAllocationPolicyNodePolicyBondsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloClusterNetworksIpAllocationPolicyNodePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloClusterNetworksIpAllocationPolicyNodePolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloClusterNetworksIpAllocationPolicyNodePolicy | cdktf.IResolvable | undefined) {
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
  private _bonds = new EfloClusterNetworksIpAllocationPolicyNodePolicyBondsList(this, "bonds", false);
  public get bonds() {
    return this._bonds;
  }
  public putBonds(value: EfloClusterNetworksIpAllocationPolicyNodePolicyBonds[] | cdktf.IResolvable) {
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

export class EfloClusterNetworksIpAllocationPolicyNodePolicyList extends cdktf.ComplexList {
  public internalValue? : EfloClusterNetworksIpAllocationPolicyNodePolicy[] | cdktf.IResolvable

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
  public get(index: number): EfloClusterNetworksIpAllocationPolicyNodePolicyOutputReference {
    return new EfloClusterNetworksIpAllocationPolicyNodePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloClusterNetworksIpAllocationPolicy {
  /**
  * bond_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#bond_policy EfloCluster#bond_policy}
  */
  readonly bondPolicy?: EfloClusterNetworksIpAllocationPolicyBondPolicy;
  /**
  * machine_type_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#machine_type_policy EfloCluster#machine_type_policy}
  */
  readonly machineTypePolicy?: EfloClusterNetworksIpAllocationPolicyMachineTypePolicy[] | cdktf.IResolvable;
  /**
  * node_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#node_policy EfloCluster#node_policy}
  */
  readonly nodePolicy?: EfloClusterNetworksIpAllocationPolicyNodePolicy[] | cdktf.IResolvable;
}

export function efloClusterNetworksIpAllocationPolicyToTerraform(struct?: EfloClusterNetworksIpAllocationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_policy: efloClusterNetworksIpAllocationPolicyBondPolicyToTerraform(struct!.bondPolicy),
    machine_type_policy: cdktf.listMapper(efloClusterNetworksIpAllocationPolicyMachineTypePolicyToTerraform, true)(struct!.machineTypePolicy),
    node_policy: cdktf.listMapper(efloClusterNetworksIpAllocationPolicyNodePolicyToTerraform, true)(struct!.nodePolicy),
  }
}


export function efloClusterNetworksIpAllocationPolicyToHclTerraform(struct?: EfloClusterNetworksIpAllocationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bond_policy: {
      value: efloClusterNetworksIpAllocationPolicyBondPolicyToHclTerraform(struct!.bondPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EfloClusterNetworksIpAllocationPolicyBondPolicyList",
    },
    machine_type_policy: {
      value: cdktf.listMapperHcl(efloClusterNetworksIpAllocationPolicyMachineTypePolicyToHclTerraform, true)(struct!.machineTypePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EfloClusterNetworksIpAllocationPolicyMachineTypePolicyList",
    },
    node_policy: {
      value: cdktf.listMapperHcl(efloClusterNetworksIpAllocationPolicyNodePolicyToHclTerraform, true)(struct!.nodePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EfloClusterNetworksIpAllocationPolicyNodePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloClusterNetworksIpAllocationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloClusterNetworksIpAllocationPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloClusterNetworksIpAllocationPolicy | cdktf.IResolvable | undefined) {
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
  private _bondPolicy = new EfloClusterNetworksIpAllocationPolicyBondPolicyOutputReference(this, "bond_policy");
  public get bondPolicy() {
    return this._bondPolicy;
  }
  public putBondPolicy(value: EfloClusterNetworksIpAllocationPolicyBondPolicy) {
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
  private _machineTypePolicy = new EfloClusterNetworksIpAllocationPolicyMachineTypePolicyList(this, "machine_type_policy", false);
  public get machineTypePolicy() {
    return this._machineTypePolicy;
  }
  public putMachineTypePolicy(value: EfloClusterNetworksIpAllocationPolicyMachineTypePolicy[] | cdktf.IResolvable) {
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
  private _nodePolicy = new EfloClusterNetworksIpAllocationPolicyNodePolicyList(this, "node_policy", false);
  public get nodePolicy() {
    return this._nodePolicy;
  }
  public putNodePolicy(value: EfloClusterNetworksIpAllocationPolicyNodePolicy[] | cdktf.IResolvable) {
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

export class EfloClusterNetworksIpAllocationPolicyList extends cdktf.ComplexList {
  public internalValue? : EfloClusterNetworksIpAllocationPolicy[] | cdktf.IResolvable

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
  public get(index: number): EfloClusterNetworksIpAllocationPolicyOutputReference {
    return new EfloClusterNetworksIpAllocationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloClusterNetworksNewVpdInfoVpdSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#subnet_cidr EfloCluster#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#subnet_type EfloCluster#subnet_type}
  */
  readonly subnetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#zone_id EfloCluster#zone_id}
  */
  readonly zoneId?: string;
}

export function efloClusterNetworksNewVpdInfoVpdSubnetsToTerraform(struct?: EfloClusterNetworksNewVpdInfoVpdSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnet_type: cdktf.stringToTerraform(struct!.subnetType),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function efloClusterNetworksNewVpdInfoVpdSubnetsToHclTerraform(struct?: EfloClusterNetworksNewVpdInfoVpdSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_type: {
      value: cdktf.stringToHclTerraform(struct!.subnetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloClusterNetworksNewVpdInfoVpdSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloClusterNetworksNewVpdInfoVpdSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._subnetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetType = this._subnetType;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloClusterNetworksNewVpdInfoVpdSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetCidr = undefined;
      this._subnetType = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetCidr = value.subnetCidr;
      this._subnetType = value.subnetType;
      this._zoneId = value.zoneId;
    }
  }

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // subnet_type - computed: false, optional: true, required: false
  private _subnetType?: string; 
  public get subnetType() {
    return this.getStringAttribute('subnet_type');
  }
  public set subnetType(value: string) {
    this._subnetType = value;
  }
  public resetSubnetType() {
    this._subnetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetTypeInput() {
    return this._subnetType;
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
}

export class EfloClusterNetworksNewVpdInfoVpdSubnetsList extends cdktf.ComplexList {
  public internalValue? : EfloClusterNetworksNewVpdInfoVpdSubnets[] | cdktf.IResolvable

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
  public get(index: number): EfloClusterNetworksNewVpdInfoVpdSubnetsOutputReference {
    return new EfloClusterNetworksNewVpdInfoVpdSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloClusterNetworksNewVpdInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#cen_id EfloCluster#cen_id}
  */
  readonly cenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#cloud_link_cidr EfloCluster#cloud_link_cidr}
  */
  readonly cloudLinkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#cloud_link_id EfloCluster#cloud_link_id}
  */
  readonly cloudLinkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#monitor_vpc_id EfloCluster#monitor_vpc_id}
  */
  readonly monitorVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#monitor_vswitch_id EfloCluster#monitor_vswitch_id}
  */
  readonly monitorVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#vpd_cidr EfloCluster#vpd_cidr}
  */
  readonly vpdCidr?: string;
  /**
  * vpd_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#vpd_subnets EfloCluster#vpd_subnets}
  */
  readonly vpdSubnets?: EfloClusterNetworksNewVpdInfoVpdSubnets[] | cdktf.IResolvable;
}

export function efloClusterNetworksNewVpdInfoToTerraform(struct?: EfloClusterNetworksNewVpdInfoOutputReference | EfloClusterNetworksNewVpdInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cen_id: cdktf.stringToTerraform(struct!.cenId),
    cloud_link_cidr: cdktf.stringToTerraform(struct!.cloudLinkCidr),
    cloud_link_id: cdktf.stringToTerraform(struct!.cloudLinkId),
    monitor_vpc_id: cdktf.stringToTerraform(struct!.monitorVpcId),
    monitor_vswitch_id: cdktf.stringToTerraform(struct!.monitorVswitchId),
    vpd_cidr: cdktf.stringToTerraform(struct!.vpdCidr),
    vpd_subnets: cdktf.listMapper(efloClusterNetworksNewVpdInfoVpdSubnetsToTerraform, true)(struct!.vpdSubnets),
  }
}


export function efloClusterNetworksNewVpdInfoToHclTerraform(struct?: EfloClusterNetworksNewVpdInfoOutputReference | EfloClusterNetworksNewVpdInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cen_id: {
      value: cdktf.stringToHclTerraform(struct!.cenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_link_cidr: {
      value: cdktf.stringToHclTerraform(struct!.cloudLinkCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_link_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudLinkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.monitorVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.monitorVswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpd_cidr: {
      value: cdktf.stringToHclTerraform(struct!.vpdCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpd_subnets: {
      value: cdktf.listMapperHcl(efloClusterNetworksNewVpdInfoVpdSubnetsToHclTerraform, true)(struct!.vpdSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "EfloClusterNetworksNewVpdInfoVpdSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloClusterNetworksNewVpdInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EfloClusterNetworksNewVpdInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cenId = this._cenId;
    }
    if (this._cloudLinkCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLinkCidr = this._cloudLinkCidr;
    }
    if (this._cloudLinkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLinkId = this._cloudLinkId;
    }
    if (this._monitorVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorVpcId = this._monitorVpcId;
    }
    if (this._monitorVswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorVswitchId = this._monitorVswitchId;
    }
    if (this._vpdCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpdCidr = this._vpdCidr;
    }
    if (this._vpdSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpdSubnets = this._vpdSubnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloClusterNetworksNewVpdInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cenId = undefined;
      this._cloudLinkCidr = undefined;
      this._cloudLinkId = undefined;
      this._monitorVpcId = undefined;
      this._monitorVswitchId = undefined;
      this._vpdCidr = undefined;
      this._vpdSubnets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cenId = value.cenId;
      this._cloudLinkCidr = value.cloudLinkCidr;
      this._cloudLinkId = value.cloudLinkId;
      this._monitorVpcId = value.monitorVpcId;
      this._monitorVswitchId = value.monitorVswitchId;
      this._vpdCidr = value.vpdCidr;
      this._vpdSubnets.internalValue = value.vpdSubnets;
    }
  }

  // cen_id - computed: false, optional: true, required: false
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  public resetCenId() {
    this._cenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
  }

  // cloud_link_cidr - computed: false, optional: true, required: false
  private _cloudLinkCidr?: string; 
  public get cloudLinkCidr() {
    return this.getStringAttribute('cloud_link_cidr');
  }
  public set cloudLinkCidr(value: string) {
    this._cloudLinkCidr = value;
  }
  public resetCloudLinkCidr() {
    this._cloudLinkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLinkCidrInput() {
    return this._cloudLinkCidr;
  }

  // cloud_link_id - computed: false, optional: true, required: false
  private _cloudLinkId?: string; 
  public get cloudLinkId() {
    return this.getStringAttribute('cloud_link_id');
  }
  public set cloudLinkId(value: string) {
    this._cloudLinkId = value;
  }
  public resetCloudLinkId() {
    this._cloudLinkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLinkIdInput() {
    return this._cloudLinkId;
  }

  // monitor_vpc_id - computed: false, optional: true, required: false
  private _monitorVpcId?: string; 
  public get monitorVpcId() {
    return this.getStringAttribute('monitor_vpc_id');
  }
  public set monitorVpcId(value: string) {
    this._monitorVpcId = value;
  }
  public resetMonitorVpcId() {
    this._monitorVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorVpcIdInput() {
    return this._monitorVpcId;
  }

  // monitor_vswitch_id - computed: false, optional: true, required: false
  private _monitorVswitchId?: string; 
  public get monitorVswitchId() {
    return this.getStringAttribute('monitor_vswitch_id');
  }
  public set monitorVswitchId(value: string) {
    this._monitorVswitchId = value;
  }
  public resetMonitorVswitchId() {
    this._monitorVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorVswitchIdInput() {
    return this._monitorVswitchId;
  }

  // vpd_cidr - computed: false, optional: true, required: false
  private _vpdCidr?: string; 
  public get vpdCidr() {
    return this.getStringAttribute('vpd_cidr');
  }
  public set vpdCidr(value: string) {
    this._vpdCidr = value;
  }
  public resetVpdCidr() {
    this._vpdCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpdCidrInput() {
    return this._vpdCidr;
  }

  // vpd_subnets - computed: false, optional: true, required: false
  private _vpdSubnets = new EfloClusterNetworksNewVpdInfoVpdSubnetsList(this, "vpd_subnets", false);
  public get vpdSubnets() {
    return this._vpdSubnets;
  }
  public putVpdSubnets(value: EfloClusterNetworksNewVpdInfoVpdSubnets[] | cdktf.IResolvable) {
    this._vpdSubnets.internalValue = value;
  }
  public resetVpdSubnets() {
    this._vpdSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpdSubnetsInput() {
    return this._vpdSubnets.internalValue;
  }
}
export interface EfloClusterNetworksVpdInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#vpd_id EfloCluster#vpd_id}
  */
  readonly vpdId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#vpd_subnets EfloCluster#vpd_subnets}
  */
  readonly vpdSubnets?: string[];
}

export function efloClusterNetworksVpdInfoToTerraform(struct?: EfloClusterNetworksVpdInfoOutputReference | EfloClusterNetworksVpdInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpd_id: cdktf.stringToTerraform(struct!.vpdId),
    vpd_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpdSubnets),
  }
}


export function efloClusterNetworksVpdInfoToHclTerraform(struct?: EfloClusterNetworksVpdInfoOutputReference | EfloClusterNetworksVpdInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpd_id: {
      value: cdktf.stringToHclTerraform(struct!.vpdId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpd_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpdSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloClusterNetworksVpdInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EfloClusterNetworksVpdInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpdId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpdId = this._vpdId;
    }
    if (this._vpdSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpdSubnets = this._vpdSubnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloClusterNetworksVpdInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vpdId = undefined;
      this._vpdSubnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vpdId = value.vpdId;
      this._vpdSubnets = value.vpdSubnets;
    }
  }

  // vpd_id - computed: false, optional: true, required: false
  private _vpdId?: string; 
  public get vpdId() {
    return this.getStringAttribute('vpd_id');
  }
  public set vpdId(value: string) {
    this._vpdId = value;
  }
  public resetVpdId() {
    this._vpdId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpdIdInput() {
    return this._vpdId;
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
}
export interface EfloClusterNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#security_group_id EfloCluster#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#tail_ip_version EfloCluster#tail_ip_version}
  */
  readonly tailIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#vpc_id EfloCluster#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#vswitch_id EfloCluster#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#vswitch_zone_id EfloCluster#vswitch_zone_id}
  */
  readonly vswitchZoneId?: string;
  /**
  * ip_allocation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#ip_allocation_policy EfloCluster#ip_allocation_policy}
  */
  readonly ipAllocationPolicy?: EfloClusterNetworksIpAllocationPolicy[] | cdktf.IResolvable;
  /**
  * new_vpd_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#new_vpd_info EfloCluster#new_vpd_info}
  */
  readonly newVpdInfo?: EfloClusterNetworksNewVpdInfo;
  /**
  * vpd_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#vpd_info EfloCluster#vpd_info}
  */
  readonly vpdInfo?: EfloClusterNetworksVpdInfo;
}

export function efloClusterNetworksToTerraform(struct?: EfloClusterNetworksOutputReference | EfloClusterNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    tail_ip_version: cdktf.stringToTerraform(struct!.tailIpVersion),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
    vswitch_zone_id: cdktf.stringToTerraform(struct!.vswitchZoneId),
    ip_allocation_policy: cdktf.listMapper(efloClusterNetworksIpAllocationPolicyToTerraform, true)(struct!.ipAllocationPolicy),
    new_vpd_info: efloClusterNetworksNewVpdInfoToTerraform(struct!.newVpdInfo),
    vpd_info: efloClusterNetworksVpdInfoToTerraform(struct!.vpdInfo),
  }
}


export function efloClusterNetworksToHclTerraform(struct?: EfloClusterNetworksOutputReference | EfloClusterNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tail_ip_version: {
      value: cdktf.stringToHclTerraform(struct!.tailIpVersion),
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
    vswitch_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_allocation_policy: {
      value: cdktf.listMapperHcl(efloClusterNetworksIpAllocationPolicyToHclTerraform, true)(struct!.ipAllocationPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EfloClusterNetworksIpAllocationPolicyList",
    },
    new_vpd_info: {
      value: efloClusterNetworksNewVpdInfoToHclTerraform(struct!.newVpdInfo),
      isBlock: true,
      type: "list",
      storageClassType: "EfloClusterNetworksNewVpdInfoList",
    },
    vpd_info: {
      value: efloClusterNetworksVpdInfoToHclTerraform(struct!.vpdInfo),
      isBlock: true,
      type: "list",
      storageClassType: "EfloClusterNetworksVpdInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloClusterNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EfloClusterNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._tailIpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tailIpVersion = this._tailIpVersion;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    if (this._vswitchZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchZoneId = this._vswitchZoneId;
    }
    if (this._ipAllocationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllocationPolicy = this._ipAllocationPolicy?.internalValue;
    }
    if (this._newVpdInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newVpdInfo = this._newVpdInfo?.internalValue;
    }
    if (this._vpdInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpdInfo = this._vpdInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloClusterNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupId = undefined;
      this._tailIpVersion = undefined;
      this._vpcId = undefined;
      this._vswitchId = undefined;
      this._vswitchZoneId = undefined;
      this._ipAllocationPolicy.internalValue = undefined;
      this._newVpdInfo.internalValue = undefined;
      this._vpdInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupId = value.securityGroupId;
      this._tailIpVersion = value.tailIpVersion;
      this._vpcId = value.vpcId;
      this._vswitchId = value.vswitchId;
      this._vswitchZoneId = value.vswitchZoneId;
      this._ipAllocationPolicy.internalValue = value.ipAllocationPolicy;
      this._newVpdInfo.internalValue = value.newVpdInfo;
      this._vpdInfo.internalValue = value.vpdInfo;
    }
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // tail_ip_version - computed: false, optional: true, required: false
  private _tailIpVersion?: string; 
  public get tailIpVersion() {
    return this.getStringAttribute('tail_ip_version');
  }
  public set tailIpVersion(value: string) {
    this._tailIpVersion = value;
  }
  public resetTailIpVersion() {
    this._tailIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailIpVersionInput() {
    return this._tailIpVersion;
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

  // ip_allocation_policy - computed: false, optional: true, required: false
  private _ipAllocationPolicy = new EfloClusterNetworksIpAllocationPolicyList(this, "ip_allocation_policy", false);
  public get ipAllocationPolicy() {
    return this._ipAllocationPolicy;
  }
  public putIpAllocationPolicy(value: EfloClusterNetworksIpAllocationPolicy[] | cdktf.IResolvable) {
    this._ipAllocationPolicy.internalValue = value;
  }
  public resetIpAllocationPolicy() {
    this._ipAllocationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationPolicyInput() {
    return this._ipAllocationPolicy.internalValue;
  }

  // new_vpd_info - computed: false, optional: true, required: false
  private _newVpdInfo = new EfloClusterNetworksNewVpdInfoOutputReference(this, "new_vpd_info");
  public get newVpdInfo() {
    return this._newVpdInfo;
  }
  public putNewVpdInfo(value: EfloClusterNetworksNewVpdInfo) {
    this._newVpdInfo.internalValue = value;
  }
  public resetNewVpdInfo() {
    this._newVpdInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newVpdInfoInput() {
    return this._newVpdInfo.internalValue;
  }

  // vpd_info - computed: false, optional: true, required: false
  private _vpdInfo = new EfloClusterNetworksVpdInfoOutputReference(this, "vpd_info");
  public get vpdInfo() {
    return this._vpdInfo;
  }
  public putVpdInfo(value: EfloClusterNetworksVpdInfo) {
    this._vpdInfo.internalValue = value;
  }
  public resetVpdInfo() {
    this._vpdInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpdInfoInput() {
    return this._vpdInfo.internalValue;
  }
}
export interface EfloClusterNodeGroupsNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#hostname EfloCluster#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#login_password EfloCluster#login_password}
  */
  readonly loginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#node_id EfloCluster#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#vpc_id EfloCluster#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#vswitch_id EfloCluster#vswitch_id}
  */
  readonly vswitchId?: string;
}

export function efloClusterNodeGroupsNodesToTerraform(struct?: EfloClusterNodeGroupsNodes | cdktf.IResolvable): any {
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


export function efloClusterNodeGroupsNodesToHclTerraform(struct?: EfloClusterNodeGroupsNodes | cdktf.IResolvable): any {
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

export class EfloClusterNodeGroupsNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloClusterNodeGroupsNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloClusterNodeGroupsNodes | cdktf.IResolvable | undefined) {
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

export class EfloClusterNodeGroupsNodesList extends cdktf.ComplexList {
  public internalValue? : EfloClusterNodeGroupsNodes[] | cdktf.IResolvable

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
  public get(index: number): EfloClusterNodeGroupsNodesOutputReference {
    return new EfloClusterNodeGroupsNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloClusterNodeGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#image_id EfloCluster#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#machine_type EfloCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#node_group_description EfloCluster#node_group_description}
  */
  readonly nodeGroupDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#node_group_name EfloCluster#node_group_name}
  */
  readonly nodeGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#user_data EfloCluster#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#zone_id EfloCluster#zone_id}
  */
  readonly zoneId?: string;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#nodes EfloCluster#nodes}
  */
  readonly nodes?: EfloClusterNodeGroupsNodes[] | cdktf.IResolvable;
}

export function efloClusterNodeGroupsToTerraform(struct?: EfloClusterNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_id: cdktf.stringToTerraform(struct!.imageId),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    node_group_description: cdktf.stringToTerraform(struct!.nodeGroupDescription),
    node_group_name: cdktf.stringToTerraform(struct!.nodeGroupName),
    user_data: cdktf.stringToTerraform(struct!.userData),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
    nodes: cdktf.listMapper(efloClusterNodeGroupsNodesToTerraform, true)(struct!.nodes),
  }
}


export function efloClusterNodeGroupsToHclTerraform(struct?: EfloClusterNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group_description: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroupDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodes: {
      value: cdktf.listMapperHcl(efloClusterNodeGroupsNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "EfloClusterNodeGroupsNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloClusterNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloClusterNodeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._nodeGroupDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupDescription = this._nodeGroupDescription;
    }
    if (this._nodeGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupName = this._nodeGroupName;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloClusterNodeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageId = undefined;
      this._machineType = undefined;
      this._nodeGroupDescription = undefined;
      this._nodeGroupName = undefined;
      this._userData = undefined;
      this._zoneId = undefined;
      this._nodes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageId = value.imageId;
      this._machineType = value.machineType;
      this._nodeGroupDescription = value.nodeGroupDescription;
      this._nodeGroupName = value.nodeGroupName;
      this._userData = value.userData;
      this._zoneId = value.zoneId;
      this._nodes.internalValue = value.nodes;
    }
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
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

  // node_group_name - computed: false, optional: true, required: false
  private _nodeGroupName?: string; 
  public get nodeGroupName() {
    return this.getStringAttribute('node_group_name');
  }
  public set nodeGroupName(value: string) {
    this._nodeGroupName = value;
  }
  public resetNodeGroupName() {
    this._nodeGroupName = undefined;
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

  // nodes - computed: false, optional: true, required: false
  private _nodes = new EfloClusterNodeGroupsNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: EfloClusterNodeGroupsNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }
}

export class EfloClusterNodeGroupsList extends cdktf.ComplexList {
  public internalValue? : EfloClusterNodeGroups[] | cdktf.IResolvable

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
  public get(index: number): EfloClusterNodeGroupsOutputReference {
    return new EfloClusterNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#create EfloCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#delete EfloCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#update EfloCluster#update}
  */
  readonly update?: string;
}

export function efloClusterTimeoutsToTerraform(struct?: EfloClusterTimeouts | cdktf.IResolvable): any {
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


export function efloClusterTimeoutsToHclTerraform(struct?: EfloClusterTimeouts | cdktf.IResolvable): any {
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

export class EfloClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EfloClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EfloClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster alicloud_eflo_cluster}
*/
export class EfloCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_eflo_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EfloCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EfloCluster to import
  * @param importFromId The id of the existing EfloCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EfloCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_eflo_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/eflo_cluster alicloud_eflo_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfloClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EfloClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_eflo_cluster',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterDescription = config.clusterDescription;
    this._clusterName = config.clusterName;
    this._clusterType = config.clusterType;
    this._hpnZone = config.hpnZone;
    this._id = config.id;
    this._ignoreFailedNodeTasks = config.ignoreFailedNodeTasks;
    this._nimizVswitches = config.nimizVswitches;
    this._openEniJumboFrame = config.openEniJumboFrame;
    this._resourceGroupId = config.resourceGroupId;
    this._tags = config.tags;
    this._components.internalValue = config.components;
    this._networks.internalValue = config.networks;
    this._nodeGroups.internalValue = config.nodeGroups;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_description - computed: false, optional: true, required: false
  private _clusterDescription?: string; 
  public get clusterDescription() {
    return this.getStringAttribute('cluster_description');
  }
  public set clusterDescription(value: string) {
    this._clusterDescription = value;
  }
  public resetClusterDescription() {
    this._clusterDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDescriptionInput() {
    return this._clusterDescription;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // nimiz_vswitches - computed: false, optional: true, required: false
  private _nimizVswitches?: string[]; 
  public get nimizVswitches() {
    return this.getListAttribute('nimiz_vswitches');
  }
  public set nimizVswitches(value: string[]) {
    this._nimizVswitches = value;
  }
  public resetNimizVswitches() {
    this._nimizVswitches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nimizVswitchesInput() {
    return this._nimizVswitches;
  }

  // open_eni_jumbo_frame - computed: false, optional: true, required: false
  private _openEniJumboFrame?: boolean | cdktf.IResolvable; 
  public get openEniJumboFrame() {
    return this.getBooleanAttribute('open_eni_jumbo_frame');
  }
  public set openEniJumboFrame(value: boolean | cdktf.IResolvable) {
    this._openEniJumboFrame = value;
  }
  public resetOpenEniJumboFrame() {
    this._openEniJumboFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openEniJumboFrameInput() {
    return this._openEniJumboFrame;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // components - computed: false, optional: true, required: false
  private _components = new EfloClusterComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: EfloClusterComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new EfloClusterNetworksOutputReference(this, "networks");
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: EfloClusterNetworks) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // node_groups - computed: false, optional: true, required: false
  private _nodeGroups = new EfloClusterNodeGroupsList(this, "node_groups", false);
  public get nodeGroups() {
    return this._nodeGroups;
  }
  public putNodeGroups(value: EfloClusterNodeGroups[] | cdktf.IResolvable) {
    this._nodeGroups.internalValue = value;
  }
  public resetNodeGroups() {
    this._nodeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupsInput() {
    return this._nodeGroups.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EfloClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EfloClusterTimeouts) {
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
      cluster_description: cdktf.stringToTerraform(this._clusterDescription),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      hpn_zone: cdktf.stringToTerraform(this._hpnZone),
      id: cdktf.stringToTerraform(this._id),
      ignore_failed_node_tasks: cdktf.booleanToTerraform(this._ignoreFailedNodeTasks),
      nimiz_vswitches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nimizVswitches),
      open_eni_jumbo_frame: cdktf.booleanToTerraform(this._openEniJumboFrame),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      components: cdktf.listMapper(efloClusterComponentsToTerraform, true)(this._components.internalValue),
      networks: efloClusterNetworksToTerraform(this._networks.internalValue),
      node_groups: cdktf.listMapper(efloClusterNodeGroupsToTerraform, true)(this._nodeGroups.internalValue),
      timeouts: efloClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_description: {
        value: cdktf.stringToHclTerraform(this._clusterDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
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
      ignore_failed_node_tasks: {
        value: cdktf.booleanToHclTerraform(this._ignoreFailedNodeTasks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nimiz_vswitches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nimizVswitches),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      open_eni_jumbo_frame: {
        value: cdktf.booleanToHclTerraform(this._openEniJumboFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
      components: {
        value: cdktf.listMapperHcl(efloClusterComponentsToHclTerraform, true)(this._components.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EfloClusterComponentsList",
      },
      networks: {
        value: efloClusterNetworksToHclTerraform(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EfloClusterNetworksList",
      },
      node_groups: {
        value: cdktf.listMapperHcl(efloClusterNodeGroupsToHclTerraform, true)(this._nodeGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EfloClusterNodeGroupsList",
      },
      timeouts: {
        value: efloClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EfloClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
