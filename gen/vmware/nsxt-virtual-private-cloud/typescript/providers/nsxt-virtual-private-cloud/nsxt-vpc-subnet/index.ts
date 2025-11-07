// https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtVpcSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#access_mode NsxtVpcSubnet#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#description NsxtVpcSubnet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#display_name NsxtVpcSubnet#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#id NsxtVpcSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#ip_addresses NsxtVpcSubnet#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#ipv4_subnet_size NsxtVpcSubnet#ipv4_subnet_size}
  */
  readonly ipv4SubnetSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#nsx_id NsxtVpcSubnet#nsx_id}
  */
  readonly nsxId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#resource_type NsxtVpcSubnet#resource_type}
  */
  readonly resourceType?: string;
  /**
  * advanced_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#advanced_config NsxtVpcSubnet#advanced_config}
  */
  readonly advancedConfig?: NsxtVpcSubnetAdvancedConfig;
  /**
  * dhcp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#dhcp_config NsxtVpcSubnet#dhcp_config}
  */
  readonly dhcpConfig?: NsxtVpcSubnetDhcpConfig;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#tags NsxtVpcSubnet#tags}
  */
  readonly tags?: NsxtVpcSubnetTags[] | cdktf.IResolvable;
}
export interface NsxtVpcSubnetAdvancedConfigStaticIpAllocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#enabled NsxtVpcSubnet#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function nsxtVpcSubnetAdvancedConfigStaticIpAllocationToTerraform(struct?: NsxtVpcSubnetAdvancedConfigStaticIpAllocationOutputReference | NsxtVpcSubnetAdvancedConfigStaticIpAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function nsxtVpcSubnetAdvancedConfigStaticIpAllocationToHclTerraform(struct?: NsxtVpcSubnetAdvancedConfigStaticIpAllocationOutputReference | NsxtVpcSubnetAdvancedConfigStaticIpAllocation): any {
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

export class NsxtVpcSubnetAdvancedConfigStaticIpAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtVpcSubnetAdvancedConfigStaticIpAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSubnetAdvancedConfigStaticIpAllocation | undefined) {
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface NsxtVpcSubnetAdvancedConfig {
  /**
  * static_ip_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#static_ip_allocation NsxtVpcSubnet#static_ip_allocation}
  */
  readonly staticIpAllocation?: NsxtVpcSubnetAdvancedConfigStaticIpAllocation;
}

export function nsxtVpcSubnetAdvancedConfigToTerraform(struct?: NsxtVpcSubnetAdvancedConfigOutputReference | NsxtVpcSubnetAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_ip_allocation: nsxtVpcSubnetAdvancedConfigStaticIpAllocationToTerraform(struct!.staticIpAllocation),
  }
}


export function nsxtVpcSubnetAdvancedConfigToHclTerraform(struct?: NsxtVpcSubnetAdvancedConfigOutputReference | NsxtVpcSubnetAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_ip_allocation: {
      value: nsxtVpcSubnetAdvancedConfigStaticIpAllocationToHclTerraform(struct!.staticIpAllocation),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtVpcSubnetAdvancedConfigStaticIpAllocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcSubnetAdvancedConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtVpcSubnetAdvancedConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticIpAllocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpAllocation = this._staticIpAllocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSubnetAdvancedConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticIpAllocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticIpAllocation.internalValue = value.staticIpAllocation;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // static_ip_allocation - computed: false, optional: true, required: false
  private _staticIpAllocation = new NsxtVpcSubnetAdvancedConfigStaticIpAllocationOutputReference(this, "static_ip_allocation");
  public get staticIpAllocation() {
    return this._staticIpAllocation;
  }
  public putStaticIpAllocation(value: NsxtVpcSubnetAdvancedConfigStaticIpAllocation) {
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
export interface NsxtVpcSubnetDhcpConfigDnsClientConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#dns_server_ips NsxtVpcSubnet#dns_server_ips}
  */
  readonly dnsServerIps?: string[];
}

export function nsxtVpcSubnetDhcpConfigDnsClientConfigToTerraform(struct?: NsxtVpcSubnetDhcpConfigDnsClientConfigOutputReference | NsxtVpcSubnetDhcpConfigDnsClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServerIps),
  }
}


export function nsxtVpcSubnetDhcpConfigDnsClientConfigToHclTerraform(struct?: NsxtVpcSubnetDhcpConfigDnsClientConfigOutputReference | NsxtVpcSubnetDhcpConfigDnsClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_server_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServerIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcSubnetDhcpConfigDnsClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtVpcSubnetDhcpConfigDnsClientConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServerIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerIps = this._dnsServerIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSubnetDhcpConfigDnsClientConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServerIps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServerIps = value.dnsServerIps;
    }
  }

  // dns_server_ips - computed: true, optional: true, required: false
  private _dnsServerIps?: string[]; 
  public get dnsServerIps() {
    return this.getListAttribute('dns_server_ips');
  }
  public set dnsServerIps(value: string[]) {
    this._dnsServerIps = value;
  }
  public resetDnsServerIps() {
    this._dnsServerIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpsInput() {
    return this._dnsServerIps;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface NsxtVpcSubnetDhcpConfigStaticPoolConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#ipv4_pool_size NsxtVpcSubnet#ipv4_pool_size}
  */
  readonly ipv4PoolSize?: number;
}

export function nsxtVpcSubnetDhcpConfigStaticPoolConfigToTerraform(struct?: NsxtVpcSubnetDhcpConfigStaticPoolConfigOutputReference | NsxtVpcSubnetDhcpConfigStaticPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_pool_size: cdktf.numberToTerraform(struct!.ipv4PoolSize),
  }
}


export function nsxtVpcSubnetDhcpConfigStaticPoolConfigToHclTerraform(struct?: NsxtVpcSubnetDhcpConfigStaticPoolConfigOutputReference | NsxtVpcSubnetDhcpConfigStaticPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.ipv4PoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcSubnetDhcpConfigStaticPoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtVpcSubnetDhcpConfigStaticPoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4PoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PoolSize = this._ipv4PoolSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSubnetDhcpConfigStaticPoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4PoolSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4PoolSize = value.ipv4PoolSize;
    }
  }

  // ipv4_pool_size - computed: false, optional: true, required: false
  private _ipv4PoolSize?: number; 
  public get ipv4PoolSize() {
    return this.getNumberAttribute('ipv4_pool_size');
  }
  public set ipv4PoolSize(value: number) {
    this._ipv4PoolSize = value;
  }
  public resetIpv4PoolSize() {
    this._ipv4PoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PoolSizeInput() {
    return this._ipv4PoolSize;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface NsxtVpcSubnetDhcpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#dhcp_relay_config_path NsxtVpcSubnet#dhcp_relay_config_path}
  */
  readonly dhcpRelayConfigPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#enable_dhcp NsxtVpcSubnet#enable_dhcp}
  */
  readonly enableDhcp?: boolean | cdktf.IResolvable;
  /**
  * dns_client_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#dns_client_config NsxtVpcSubnet#dns_client_config}
  */
  readonly dnsClientConfig?: NsxtVpcSubnetDhcpConfigDnsClientConfig;
  /**
  * static_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#static_pool_config NsxtVpcSubnet#static_pool_config}
  */
  readonly staticPoolConfig?: NsxtVpcSubnetDhcpConfigStaticPoolConfig;
}

export function nsxtVpcSubnetDhcpConfigToTerraform(struct?: NsxtVpcSubnetDhcpConfigOutputReference | NsxtVpcSubnetDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_relay_config_path: cdktf.stringToTerraform(struct!.dhcpRelayConfigPath),
    enable_dhcp: cdktf.booleanToTerraform(struct!.enableDhcp),
    dns_client_config: nsxtVpcSubnetDhcpConfigDnsClientConfigToTerraform(struct!.dnsClientConfig),
    static_pool_config: nsxtVpcSubnetDhcpConfigStaticPoolConfigToTerraform(struct!.staticPoolConfig),
  }
}


export function nsxtVpcSubnetDhcpConfigToHclTerraform(struct?: NsxtVpcSubnetDhcpConfigOutputReference | NsxtVpcSubnetDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_relay_config_path: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayConfigPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.enableDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_client_config: {
      value: nsxtVpcSubnetDhcpConfigDnsClientConfigToHclTerraform(struct!.dnsClientConfig),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtVpcSubnetDhcpConfigDnsClientConfigList",
    },
    static_pool_config: {
      value: nsxtVpcSubnetDhcpConfigStaticPoolConfigToHclTerraform(struct!.staticPoolConfig),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtVpcSubnetDhcpConfigStaticPoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcSubnetDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtVpcSubnetDhcpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpRelayConfigPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayConfigPath = this._dhcpRelayConfigPath;
    }
    if (this._enableDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDhcp = this._enableDhcp;
    }
    if (this._dnsClientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsClientConfig = this._dnsClientConfig?.internalValue;
    }
    if (this._staticPoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticPoolConfig = this._staticPoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSubnetDhcpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcpRelayConfigPath = undefined;
      this._enableDhcp = undefined;
      this._dnsClientConfig.internalValue = undefined;
      this._staticPoolConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcpRelayConfigPath = value.dhcpRelayConfigPath;
      this._enableDhcp = value.enableDhcp;
      this._dnsClientConfig.internalValue = value.dnsClientConfig;
      this._staticPoolConfig.internalValue = value.staticPoolConfig;
    }
  }

  // dhcp_relay_config_path - computed: true, optional: true, required: false
  private _dhcpRelayConfigPath?: string; 
  public get dhcpRelayConfigPath() {
    return this.getStringAttribute('dhcp_relay_config_path');
  }
  public set dhcpRelayConfigPath(value: string) {
    this._dhcpRelayConfigPath = value;
  }
  public resetDhcpRelayConfigPath() {
    this._dhcpRelayConfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayConfigPathInput() {
    return this._dhcpRelayConfigPath;
  }

  // enable_dhcp - computed: true, optional: true, required: false
  private _enableDhcp?: boolean | cdktf.IResolvable; 
  public get enableDhcp() {
    return this.getBooleanAttribute('enable_dhcp');
  }
  public set enableDhcp(value: boolean | cdktf.IResolvable) {
    this._enableDhcp = value;
  }
  public resetEnableDhcp() {
    this._enableDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpInput() {
    return this._enableDhcp;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // dns_client_config - computed: false, optional: true, required: false
  private _dnsClientConfig = new NsxtVpcSubnetDhcpConfigDnsClientConfigOutputReference(this, "dns_client_config");
  public get dnsClientConfig() {
    return this._dnsClientConfig;
  }
  public putDnsClientConfig(value: NsxtVpcSubnetDhcpConfigDnsClientConfig) {
    this._dnsClientConfig.internalValue = value;
  }
  public resetDnsClientConfig() {
    this._dnsClientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsClientConfigInput() {
    return this._dnsClientConfig.internalValue;
  }

  // static_pool_config - computed: false, optional: true, required: false
  private _staticPoolConfig = new NsxtVpcSubnetDhcpConfigStaticPoolConfigOutputReference(this, "static_pool_config");
  public get staticPoolConfig() {
    return this._staticPoolConfig;
  }
  public putStaticPoolConfig(value: NsxtVpcSubnetDhcpConfigStaticPoolConfig) {
    this._staticPoolConfig.internalValue = value;
  }
  public resetStaticPoolConfig() {
    this._staticPoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPoolConfigInput() {
    return this._staticPoolConfig.internalValue;
  }
}
export interface NsxtVpcSubnetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#scope NsxtVpcSubnet#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#tag NsxtVpcSubnet#tag}
  */
  readonly tag?: string;
}

export function nsxtVpcSubnetTagsToTerraform(struct?: NsxtVpcSubnetTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function nsxtVpcSubnetTagsToHclTerraform(struct?: NsxtVpcSubnetTags | cdktf.IResolvable): any {
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

export class NsxtVpcSubnetTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtVpcSubnetTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NsxtVpcSubnetTags | cdktf.IResolvable | undefined) {
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
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

export class NsxtVpcSubnetTagsList extends cdktf.ComplexList {
  public internalValue? : NsxtVpcSubnetTags[] | cdktf.IResolvable

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
  public get(index: number): NsxtVpcSubnetTagsOutputReference {
    return new NsxtVpcSubnetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet nsxt_vpc_subnet}
*/
export class NsxtVpcSubnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_vpc_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtVpcSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtVpcSubnet to import
  * @param importFromId The id of the existing NsxtVpcSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtVpcSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_vpc_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet nsxt_vpc_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtVpcSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtVpcSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_vpc_subnet',
      terraformGeneratorMetadata: {
        providerName: 'nsxt-virtual-private-cloud',
        providerVersion: '1.0.0'
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
    this._ipv4SubnetSize = config.ipv4SubnetSize;
    this._nsxId = config.nsxId;
    this._resourceType = config.resourceType;
    this._advancedConfig.internalValue = config.advancedConfig;
    this._dhcpConfig.internalValue = config.dhcpConfig;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('_revision');
  }

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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // ip_addresses - computed: false, optional: true, required: false
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

  // nsx_id - computed: false, optional: false, required: true
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // advanced_config - computed: false, optional: true, required: false
  private _advancedConfig = new NsxtVpcSubnetAdvancedConfigOutputReference(this, "advanced_config");
  public get advancedConfig() {
    return this._advancedConfig;
  }
  public putAdvancedConfig(value: NsxtVpcSubnetAdvancedConfig) {
    this._advancedConfig.internalValue = value;
  }
  public resetAdvancedConfig() {
    this._advancedConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigInput() {
    return this._advancedConfig.internalValue;
  }

  // dhcp_config - computed: false, optional: true, required: false
  private _dhcpConfig = new NsxtVpcSubnetDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: NsxtVpcSubnetDhcpConfig) {
    this._dhcpConfig.internalValue = value;
  }
  public resetDhcpConfig() {
    this._dhcpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigInput() {
    return this._dhcpConfig.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NsxtVpcSubnetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NsxtVpcSubnetTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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
      ipv4_subnet_size: cdktf.numberToTerraform(this._ipv4SubnetSize),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      advanced_config: nsxtVpcSubnetAdvancedConfigToTerraform(this._advancedConfig.internalValue),
      dhcp_config: nsxtVpcSubnetDhcpConfigToTerraform(this._dhcpConfig.internalValue),
      tags: cdktf.listMapper(nsxtVpcSubnetTagsToTerraform, true)(this._tags.internalValue),
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
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_config: {
        value: nsxtVpcSubnetAdvancedConfigToHclTerraform(this._advancedConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtVpcSubnetAdvancedConfigList",
      },
      dhcp_config: {
        value: nsxtVpcSubnetDhcpConfigToHclTerraform(this._dhcpConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtVpcSubnetDhcpConfigList",
      },
      tags: {
        value: cdktf.listMapperHcl(nsxtVpcSubnetTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtVpcSubnetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
