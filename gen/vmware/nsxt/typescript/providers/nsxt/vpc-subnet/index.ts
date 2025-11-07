// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#access_mode VpcSubnet#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#description VpcSubnet#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#display_name VpcSubnet#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#id VpcSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#ip_addresses VpcSubnet#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#ip_blocks VpcSubnet#ip_blocks}
  */
  readonly ipBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#ipv4_subnet_size VpcSubnet#ipv4_subnet_size}
  */
  readonly ipv4SubnetSize?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#nsx_id VpcSubnet#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * advanced_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#advanced_config VpcSubnet#advanced_config}
  */
  readonly advancedConfig?: VpcSubnetAdvancedConfig;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#context VpcSubnet#context}
  */
  readonly context: VpcSubnetContext;
  /**
  * dhcp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#dhcp_config VpcSubnet#dhcp_config}
  */
  readonly dhcpConfig?: VpcSubnetDhcpConfig;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#tag VpcSubnet#tag}
  */
  readonly tag?: VpcSubnetTag[] | cdktf.IResolvable;
}
export interface VpcSubnetAdvancedConfigExtraConfigConfigPair {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#key VpcSubnet#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#value VpcSubnet#value}
  */
  readonly value: string;
}

export function vpcSubnetAdvancedConfigExtraConfigConfigPairToTerraform(struct?: VpcSubnetAdvancedConfigExtraConfigConfigPairOutputReference | VpcSubnetAdvancedConfigExtraConfigConfigPair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vpcSubnetAdvancedConfigExtraConfigConfigPairToHclTerraform(struct?: VpcSubnetAdvancedConfigExtraConfigConfigPairOutputReference | VpcSubnetAdvancedConfigExtraConfigConfigPair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetAdvancedConfigExtraConfigConfigPairOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcSubnetAdvancedConfigExtraConfigConfigPair | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetAdvancedConfigExtraConfigConfigPair | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VpcSubnetAdvancedConfigExtraConfig {
  /**
  * config_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#config_pair VpcSubnet#config_pair}
  */
  readonly configPair: VpcSubnetAdvancedConfigExtraConfigConfigPair;
}

export function vpcSubnetAdvancedConfigExtraConfigToTerraform(struct?: VpcSubnetAdvancedConfigExtraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_pair: vpcSubnetAdvancedConfigExtraConfigConfigPairToTerraform(struct!.configPair),
  }
}


export function vpcSubnetAdvancedConfigExtraConfigToHclTerraform(struct?: VpcSubnetAdvancedConfigExtraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_pair: {
      value: vpcSubnetAdvancedConfigExtraConfigConfigPairToHclTerraform(struct!.configPair),
      isBlock: true,
      type: "list",
      storageClassType: "VpcSubnetAdvancedConfigExtraConfigConfigPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetAdvancedConfigExtraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcSubnetAdvancedConfigExtraConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configPair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configPair = this._configPair?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetAdvancedConfigExtraConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configPair.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configPair.internalValue = value.configPair;
    }
  }

  // config_pair - computed: false, optional: false, required: true
  private _configPair = new VpcSubnetAdvancedConfigExtraConfigConfigPairOutputReference(this, "config_pair");
  public get configPair() {
    return this._configPair;
  }
  public putConfigPair(value: VpcSubnetAdvancedConfigExtraConfigConfigPair) {
    this._configPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configPairInput() {
    return this._configPair.internalValue;
  }
}

export class VpcSubnetAdvancedConfigExtraConfigList extends cdktf.ComplexList {
  public internalValue? : VpcSubnetAdvancedConfigExtraConfig[] | cdktf.IResolvable

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
  public get(index: number): VpcSubnetAdvancedConfigExtraConfigOutputReference {
    return new VpcSubnetAdvancedConfigExtraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcSubnetAdvancedConfigStaticIpAllocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#enabled VpcSubnet#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function vpcSubnetAdvancedConfigStaticIpAllocationToTerraform(struct?: VpcSubnetAdvancedConfigStaticIpAllocationOutputReference | VpcSubnetAdvancedConfigStaticIpAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function vpcSubnetAdvancedConfigStaticIpAllocationToHclTerraform(struct?: VpcSubnetAdvancedConfigStaticIpAllocationOutputReference | VpcSubnetAdvancedConfigStaticIpAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetAdvancedConfigStaticIpAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcSubnetAdvancedConfigStaticIpAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetAdvancedConfigStaticIpAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface VpcSubnetAdvancedConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#connectivity_state VpcSubnet#connectivity_state}
  */
  readonly connectivityState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#dhcp_server_addresses VpcSubnet#dhcp_server_addresses}
  */
  readonly dhcpServerAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#gateway_addresses VpcSubnet#gateway_addresses}
  */
  readonly gatewayAddresses?: string[];
  /**
  * extra_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#extra_config VpcSubnet#extra_config}
  */
  readonly extraConfig?: VpcSubnetAdvancedConfigExtraConfig[] | cdktf.IResolvable;
  /**
  * static_ip_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#static_ip_allocation VpcSubnet#static_ip_allocation}
  */
  readonly staticIpAllocation?: VpcSubnetAdvancedConfigStaticIpAllocation;
}

export function vpcSubnetAdvancedConfigToTerraform(struct?: VpcSubnetAdvancedConfigOutputReference | VpcSubnetAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity_state: cdktf.stringToTerraform(struct!.connectivityState),
    dhcp_server_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpServerAddresses),
    gateway_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gatewayAddresses),
    extra_config: cdktf.listMapper(vpcSubnetAdvancedConfigExtraConfigToTerraform, true)(struct!.extraConfig),
    static_ip_allocation: vpcSubnetAdvancedConfigStaticIpAllocationToTerraform(struct!.staticIpAllocation),
  }
}


export function vpcSubnetAdvancedConfigToHclTerraform(struct?: VpcSubnetAdvancedConfigOutputReference | VpcSubnetAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivity_state: {
      value: cdktf.stringToHclTerraform(struct!.connectivityState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_server_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcpServerAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateway_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gatewayAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_config: {
      value: cdktf.listMapperHcl(vpcSubnetAdvancedConfigExtraConfigToHclTerraform, true)(struct!.extraConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpcSubnetAdvancedConfigExtraConfigList",
    },
    static_ip_allocation: {
      value: vpcSubnetAdvancedConfigStaticIpAllocationToHclTerraform(struct!.staticIpAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "VpcSubnetAdvancedConfigStaticIpAllocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetAdvancedConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcSubnetAdvancedConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivityState !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityState = this._connectivityState;
    }
    if (this._dhcpServerAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServerAddresses = this._dhcpServerAddresses;
    }
    if (this._gatewayAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayAddresses = this._gatewayAddresses;
    }
    if (this._extraConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraConfig = this._extraConfig?.internalValue;
    }
    if (this._staticIpAllocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpAllocation = this._staticIpAllocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetAdvancedConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivityState = undefined;
      this._dhcpServerAddresses = undefined;
      this._gatewayAddresses = undefined;
      this._extraConfig.internalValue = undefined;
      this._staticIpAllocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivityState = value.connectivityState;
      this._dhcpServerAddresses = value.dhcpServerAddresses;
      this._gatewayAddresses = value.gatewayAddresses;
      this._extraConfig.internalValue = value.extraConfig;
      this._staticIpAllocation.internalValue = value.staticIpAllocation;
    }
  }

  // connectivity_state - computed: false, optional: true, required: false
  private _connectivityState?: string; 
  public get connectivityState() {
    return this.getStringAttribute('connectivity_state');
  }
  public set connectivityState(value: string) {
    this._connectivityState = value;
  }
  public resetConnectivityState() {
    this._connectivityState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityStateInput() {
    return this._connectivityState;
  }

  // dhcp_server_addresses - computed: false, optional: true, required: false
  private _dhcpServerAddresses?: string[]; 
  public get dhcpServerAddresses() {
    return this.getListAttribute('dhcp_server_addresses');
  }
  public set dhcpServerAddresses(value: string[]) {
    this._dhcpServerAddresses = value;
  }
  public resetDhcpServerAddresses() {
    this._dhcpServerAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerAddressesInput() {
    return this._dhcpServerAddresses;
  }

  // gateway_addresses - computed: false, optional: true, required: false
  private _gatewayAddresses?: string[]; 
  public get gatewayAddresses() {
    return this.getListAttribute('gateway_addresses');
  }
  public set gatewayAddresses(value: string[]) {
    this._gatewayAddresses = value;
  }
  public resetGatewayAddresses() {
    this._gatewayAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAddressesInput() {
    return this._gatewayAddresses;
  }

  // extra_config - computed: false, optional: true, required: false
  private _extraConfig = new VpcSubnetAdvancedConfigExtraConfigList(this, "extra_config", false);
  public get extraConfig() {
    return this._extraConfig;
  }
  public putExtraConfig(value: VpcSubnetAdvancedConfigExtraConfig[] | cdktf.IResolvable) {
    this._extraConfig.internalValue = value;
  }
  public resetExtraConfig() {
    this._extraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig.internalValue;
  }

  // static_ip_allocation - computed: false, optional: true, required: false
  private _staticIpAllocation = new VpcSubnetAdvancedConfigStaticIpAllocationOutputReference(this, "static_ip_allocation");
  public get staticIpAllocation() {
    return this._staticIpAllocation;
  }
  public putStaticIpAllocation(value: VpcSubnetAdvancedConfigStaticIpAllocation) {
    this._staticIpAllocation.internalValue = value;
  }
  public resetStaticIpAllocation() {
    this._staticIpAllocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpAllocationInput() {
    return this._staticIpAllocation.internalValue;
  }
}
export interface VpcSubnetContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#project_id VpcSubnet#project_id}
  */
  readonly projectId: string;
  /**
  * Id of the VPC which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#vpc_id VpcSubnet#vpc_id}
  */
  readonly vpcId: string;
}

export function vpcSubnetContextToTerraform(struct?: VpcSubnetContextOutputReference | VpcSubnetContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function vpcSubnetContextToHclTerraform(struct?: VpcSubnetContextOutputReference | VpcSubnetContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcSubnetContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
      this._vpcId = value.vpcId;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#network VpcSubnet#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#next_hop VpcSubnet#next_hop}
  */
  readonly nextHop?: string;
}

export function vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRouteToTerraform(struct?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
  }
}


export function vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRouteToHclTerraform(struct?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._nextHop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._nextHop = value.nextHop;
    }
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }
}

export class VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRouteList extends cdktf.ComplexList {
  public internalValue? : VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRoute[] | cdktf.IResolvable

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
  public get(index: number): VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRouteOutputReference {
    return new VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121 {
  /**
  * static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#static_route VpcSubnet#static_route}
  */
  readonly staticRoute?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRoute[] | cdktf.IResolvable;
}

export function vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121ToTerraform(struct?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121OutputReference | VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route: cdktf.listMapper(vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRouteToTerraform, true)(struct!.staticRoute),
  }
}


export function vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121ToHclTerraform(struct?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121OutputReference | VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route: {
      value: cdktf.listMapperHcl(vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRouteToHclTerraform, true)(struct!.staticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoute = this._staticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRoute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRoute.internalValue = value.staticRoute;
    }
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute = new VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121StaticRoute[] | cdktf.IResolvable) {
    this._staticRoute.internalValue = value;
  }
  public resetStaticRoute() {
    this._staticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute.internalValue;
  }
}
export interface VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOther {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#code VpcSubnet#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#values VpcSubnet#values}
  */
  readonly values?: string[];
}

export function vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOtherToTerraform(struct?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOther | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOtherToHclTerraform(struct?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOther | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOtherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOther | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOther | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._values = value.values;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOtherList extends cdktf.ComplexList {
  public internalValue? : VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOther[] | cdktf.IResolvable

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
  public get(index: number): VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOtherOutputReference {
    return new VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOtherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptions {
  /**
  * option121 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#option121 VpcSubnet#option121}
  */
  readonly option121?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121;
  /**
  * other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#other VpcSubnet#other}
  */
  readonly other?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOther[] | cdktf.IResolvable;
}

export function vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsToTerraform(struct?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOutputReference | VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option121: vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121ToTerraform(struct!.option121),
    other: cdktf.listMapper(vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOtherToTerraform, true)(struct!.other),
  }
}


export function vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsToHclTerraform(struct?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOutputReference | VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option121: {
      value: vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121ToHclTerraform(struct!.option121),
      isBlock: true,
      type: "list",
      storageClassType: "VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121List",
    },
    other: {
      value: cdktf.listMapperHcl(vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOtherToHclTerraform, true)(struct!.other),
      isBlock: true,
      type: "list",
      storageClassType: "VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOtherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._option121?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option121 = this._option121?.internalValue;
    }
    if (this._other?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._option121.internalValue = undefined;
      this._other.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._option121.internalValue = value.option121;
      this._other.internalValue = value.other;
    }
  }

  // option121 - computed: false, optional: true, required: false
  private _option121 = new VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121OutputReference(this, "option121");
  public get option121() {
    return this._option121;
  }
  public putOption121(value: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOption121) {
    this._option121.internalValue = value;
  }
  public resetOption121() {
    this._option121.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option121Input() {
    return this._option121.internalValue;
  }

  // other - computed: false, optional: true, required: false
  private _other = new VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOtherList(this, "other", false);
  public get other() {
    return this._other;
  }
  public putOther(value: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOther[] | cdktf.IResolvable) {
    this._other.internalValue = value;
  }
  public resetOther() {
    this._other.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other.internalValue;
  }
}
export interface VpcSubnetDhcpConfigDhcpServerAdditionalConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#reserved_ip_ranges VpcSubnet#reserved_ip_ranges}
  */
  readonly reservedIpRanges?: string[];
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#options VpcSubnet#options}
  */
  readonly options?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptions;
}

export function vpcSubnetDhcpConfigDhcpServerAdditionalConfigToTerraform(struct?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOutputReference | VpcSubnetDhcpConfigDhcpServerAdditionalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reserved_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reservedIpRanges),
    options: vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsToTerraform(struct!.options),
  }
}


export function vpcSubnetDhcpConfigDhcpServerAdditionalConfigToHclTerraform(struct?: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOutputReference | VpcSubnetDhcpConfigDhcpServerAdditionalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reserved_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reservedIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    options: {
      value: vpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetDhcpConfigDhcpServerAdditionalConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcSubnetDhcpConfigDhcpServerAdditionalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reservedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedIpRanges = this._reservedIpRanges;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetDhcpConfigDhcpServerAdditionalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reservedIpRanges = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reservedIpRanges = value.reservedIpRanges;
      this._options.internalValue = value.options;
    }
  }

  // reserved_ip_ranges - computed: false, optional: true, required: false
  private _reservedIpRanges?: string[]; 
  public get reservedIpRanges() {
    return this.getListAttribute('reserved_ip_ranges');
  }
  public set reservedIpRanges(value: string[]) {
    this._reservedIpRanges = value;
  }
  public resetReservedIpRanges() {
    this._reservedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangesInput() {
    return this._reservedIpRanges;
  }

  // options - computed: false, optional: true, required: false
  private _options = new VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: VpcSubnetDhcpConfigDhcpServerAdditionalConfigOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface VpcSubnetDhcpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#mode VpcSubnet#mode}
  */
  readonly mode?: string;
  /**
  * dhcp_server_additional_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#dhcp_server_additional_config VpcSubnet#dhcp_server_additional_config}
  */
  readonly dhcpServerAdditionalConfig?: VpcSubnetDhcpConfigDhcpServerAdditionalConfig;
}

export function vpcSubnetDhcpConfigToTerraform(struct?: VpcSubnetDhcpConfigOutputReference | VpcSubnetDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    dhcp_server_additional_config: vpcSubnetDhcpConfigDhcpServerAdditionalConfigToTerraform(struct!.dhcpServerAdditionalConfig),
  }
}


export function vpcSubnetDhcpConfigToHclTerraform(struct?: VpcSubnetDhcpConfigOutputReference | VpcSubnetDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_server_additional_config: {
      value: vpcSubnetDhcpConfigDhcpServerAdditionalConfigToHclTerraform(struct!.dhcpServerAdditionalConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpcSubnetDhcpConfigDhcpServerAdditionalConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcSubnetDhcpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._dhcpServerAdditionalConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServerAdditionalConfig = this._dhcpServerAdditionalConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetDhcpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._dhcpServerAdditionalConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._dhcpServerAdditionalConfig.internalValue = value.dhcpServerAdditionalConfig;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // dhcp_server_additional_config - computed: false, optional: true, required: false
  private _dhcpServerAdditionalConfig = new VpcSubnetDhcpConfigDhcpServerAdditionalConfigOutputReference(this, "dhcp_server_additional_config");
  public get dhcpServerAdditionalConfig() {
    return this._dhcpServerAdditionalConfig;
  }
  public putDhcpServerAdditionalConfig(value: VpcSubnetDhcpConfigDhcpServerAdditionalConfig) {
    this._dhcpServerAdditionalConfig.internalValue = value;
  }
  public resetDhcpServerAdditionalConfig() {
    this._dhcpServerAdditionalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerAdditionalConfigInput() {
    return this._dhcpServerAdditionalConfig.internalValue;
  }
}
export interface VpcSubnetTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#scope VpcSubnet#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#tag VpcSubnet#tag}
  */
  readonly tag?: string;
}

export function vpcSubnetTagToTerraform(struct?: VpcSubnetTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function vpcSubnetTagToHclTerraform(struct?: VpcSubnetTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcSubnetTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class VpcSubnetTagList extends cdktf.ComplexList {
  public internalValue? : VpcSubnetTag[] | cdktf.IResolvable

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
  public get(index: number): VpcSubnetTagOutputReference {
    return new VpcSubnetTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet nsxt_vpc_subnet}
*/
export class VpcSubnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_vpc_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcSubnet to import
  * @param importFromId The id of the existing VpcSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_vpc_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_subnet nsxt_vpc_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: VpcSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_vpc_subnet',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessMode = config.accessMode;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._ipAddresses = config.ipAddresses;
    this._ipBlocks = config.ipBlocks;
    this._ipv4SubnetSize = config.ipv4SubnetSize;
    this._nsxId = config.nsxId;
    this._advancedConfig.internalValue = config.advancedConfig;
    this._context.internalValue = config.context;
    this._dhcpConfig.internalValue = config.dhcpConfig;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // ip_addresses - computed: true, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ip_blocks - computed: true, optional: true, required: false
  private _ipBlocks?: string[]; 
  public get ipBlocks() {
    return this.getListAttribute('ip_blocks');
  }
  public set ipBlocks(value: string[]) {
    this._ipBlocks = value;
  }
  public resetIpBlocks() {
    this._ipBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksInput() {
    return this._ipBlocks;
  }

  // ipv4_subnet_size - computed: true, optional: true, required: false
  private _ipv4SubnetSize?: number; 
  public get ipv4SubnetSize() {
    return this.getNumberAttribute('ipv4_subnet_size');
  }
  public set ipv4SubnetSize(value: number) {
    this._ipv4SubnetSize = value;
  }
  public resetIpv4SubnetSize() {
    this._ipv4SubnetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetSizeInput() {
    return this._ipv4SubnetSize;
  }

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // advanced_config - computed: false, optional: true, required: false
  private _advancedConfig = new VpcSubnetAdvancedConfigOutputReference(this, "advanced_config");
  public get advancedConfig() {
    return this._advancedConfig;
  }
  public putAdvancedConfig(value: VpcSubnetAdvancedConfig) {
    this._advancedConfig.internalValue = value;
  }
  public resetAdvancedConfig() {
    this._advancedConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigInput() {
    return this._advancedConfig.internalValue;
  }

  // context - computed: false, optional: false, required: true
  private _context = new VpcSubnetContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: VpcSubnetContext) {
    this._context.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // dhcp_config - computed: false, optional: true, required: false
  private _dhcpConfig = new VpcSubnetDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: VpcSubnetDhcpConfig) {
    this._dhcpConfig.internalValue = value;
  }
  public resetDhcpConfig() {
    this._dhcpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigInput() {
    return this._dhcpConfig.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new VpcSubnetTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: VpcSubnetTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      ip_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipBlocks),
      ipv4_subnet_size: cdktf.numberToTerraform(this._ipv4SubnetSize),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      advanced_config: vpcSubnetAdvancedConfigToTerraform(this._advancedConfig.internalValue),
      context: vpcSubnetContextToTerraform(this._context.internalValue),
      dhcp_config: vpcSubnetDhcpConfigToTerraform(this._dhcpConfig.internalValue),
      tag: cdktf.listMapper(vpcSubnetTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ip_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv4_subnet_size: {
        value: cdktf.numberToHclTerraform(this._ipv4SubnetSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_config: {
        value: vpcSubnetAdvancedConfigToHclTerraform(this._advancedConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcSubnetAdvancedConfigList",
      },
      context: {
        value: vpcSubnetContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcSubnetContextList",
      },
      dhcp_config: {
        value: vpcSubnetDhcpConfigToHclTerraform(this._dhcpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcSubnetDhcpConfigList",
      },
      tag: {
        value: cdktf.listMapperHcl(vpcSubnetTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpcSubnetTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
