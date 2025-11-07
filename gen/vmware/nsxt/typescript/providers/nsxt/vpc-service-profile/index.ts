// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcServiceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#description VpcServiceProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#display_name VpcServiceProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#id VpcServiceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#ip_discovery_profile VpcServiceProfile#ip_discovery_profile}
  */
  readonly ipDiscoveryProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#mac_discovery_profile VpcServiceProfile#mac_discovery_profile}
  */
  readonly macDiscoveryProfile?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#nsx_id VpcServiceProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#qos_profile VpcServiceProfile#qos_profile}
  */
  readonly qosProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#security_profile VpcServiceProfile#security_profile}
  */
  readonly securityProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#spoof_guard_profile VpcServiceProfile#spoof_guard_profile}
  */
  readonly spoofGuardProfile?: string;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#context VpcServiceProfile#context}
  */
  readonly context: VpcServiceProfileContext;
  /**
  * dhcp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#dhcp_config VpcServiceProfile#dhcp_config}
  */
  readonly dhcpConfig: VpcServiceProfileDhcpConfig;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#tag VpcServiceProfile#tag}
  */
  readonly tag?: VpcServiceProfileTag[] | cdktf.IResolvable;
}
export interface VpcServiceProfileContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#project_id VpcServiceProfile#project_id}
  */
  readonly projectId: string;
}

export function vpcServiceProfileContextToTerraform(struct?: VpcServiceProfileContextOutputReference | VpcServiceProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function vpcServiceProfileContextToHclTerraform(struct?: VpcServiceProfileContextOutputReference | VpcServiceProfileContext): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcServiceProfileContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcServiceProfileContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcServiceProfileContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
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
}
export interface VpcServiceProfileDhcpConfigDhcpRelayConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#server_addresses VpcServiceProfile#server_addresses}
  */
  readonly serverAddresses?: string[];
}

export function vpcServiceProfileDhcpConfigDhcpRelayConfigToTerraform(struct?: VpcServiceProfileDhcpConfigDhcpRelayConfigOutputReference | VpcServiceProfileDhcpConfigDhcpRelayConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverAddresses),
  }
}


export function vpcServiceProfileDhcpConfigDhcpRelayConfigToHclTerraform(struct?: VpcServiceProfileDhcpConfigDhcpRelayConfigOutputReference | VpcServiceProfileDhcpConfigDhcpRelayConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcServiceProfileDhcpConfigDhcpRelayConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcServiceProfileDhcpConfigDhcpRelayConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddresses = this._serverAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcServiceProfileDhcpConfigDhcpRelayConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverAddresses = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverAddresses = value.serverAddresses;
    }
  }

  // server_addresses - computed: false, optional: true, required: false
  private _serverAddresses?: string[]; 
  public get serverAddresses() {
    return this.getListAttribute('server_addresses');
  }
  public set serverAddresses(value: string[]) {
    this._serverAddresses = value;
  }
  public resetServerAddresses() {
    this._serverAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressesInput() {
    return this._serverAddresses;
  }
}
export interface VpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#is_distributed_dhcp VpcServiceProfile#is_distributed_dhcp}
  */
  readonly isDistributedDhcp?: boolean | cdktf.IResolvable;
}

export function vpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfigToTerraform(struct?: VpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfigOutputReference | VpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_distributed_dhcp: cdktf.booleanToTerraform(struct!.isDistributedDhcp),
  }
}


export function vpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfigToHclTerraform(struct?: VpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfigOutputReference | VpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_distributed_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.isDistributedDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDistributedDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDistributedDhcp = this._isDistributedDhcp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isDistributedDhcp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isDistributedDhcp = value.isDistributedDhcp;
    }
  }

  // is_distributed_dhcp - computed: true, optional: true, required: false
  private _isDistributedDhcp?: boolean | cdktf.IResolvable; 
  public get isDistributedDhcp() {
    return this.getBooleanAttribute('is_distributed_dhcp');
  }
  public set isDistributedDhcp(value: boolean | cdktf.IResolvable) {
    this._isDistributedDhcp = value;
  }
  public resetIsDistributedDhcp() {
    this._isDistributedDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDistributedDhcpInput() {
    return this._isDistributedDhcp;
  }
}
export interface VpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#dns_server_ips VpcServiceProfile#dns_server_ips}
  */
  readonly dnsServerIps?: string[];
}

export function vpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfigToTerraform(struct?: VpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfigOutputReference | VpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServerIps),
  }
}


export function vpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfigToHclTerraform(struct?: VpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfigOutputReference | VpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfig): any {
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

export class VpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServerIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerIps = this._dnsServerIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServerIps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServerIps = value.dnsServerIps;
    }
  }

  // dns_server_ips - computed: false, optional: true, required: false
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
}
export interface VpcServiceProfileDhcpConfigDhcpServerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#lease_time VpcServiceProfile#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#ntp_servers VpcServiceProfile#ntp_servers}
  */
  readonly ntpServers?: string[];
  /**
  * advanced_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#advanced_config VpcServiceProfile#advanced_config}
  */
  readonly advancedConfig?: VpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfig;
  /**
  * dns_client_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#dns_client_config VpcServiceProfile#dns_client_config}
  */
  readonly dnsClientConfig?: VpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfig;
}

export function vpcServiceProfileDhcpConfigDhcpServerConfigToTerraform(struct?: VpcServiceProfileDhcpConfigDhcpServerConfigOutputReference | VpcServiceProfileDhcpConfigDhcpServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ntpServers),
    advanced_config: vpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfigToTerraform(struct!.advancedConfig),
    dns_client_config: vpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfigToTerraform(struct!.dnsClientConfig),
  }
}


export function vpcServiceProfileDhcpConfigDhcpServerConfigToHclTerraform(struct?: VpcServiceProfileDhcpConfigDhcpServerConfigOutputReference | VpcServiceProfileDhcpConfigDhcpServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ntpServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_config: {
      value: vpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfigToHclTerraform(struct!.advancedConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfigList",
    },
    dns_client_config: {
      value: vpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfigToHclTerraform(struct!.dnsClientConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcServiceProfileDhcpConfigDhcpServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcServiceProfileDhcpConfigDhcpServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._ntpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers;
    }
    if (this._advancedConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedConfig = this._advancedConfig?.internalValue;
    }
    if (this._dnsClientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsClientConfig = this._dnsClientConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcServiceProfileDhcpConfigDhcpServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leaseTime = undefined;
      this._ntpServers = undefined;
      this._advancedConfig.internalValue = undefined;
      this._dnsClientConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leaseTime = value.leaseTime;
      this._ntpServers = value.ntpServers;
      this._advancedConfig.internalValue = value.advancedConfig;
      this._dnsClientConfig.internalValue = value.dnsClientConfig;
    }
  }

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // advanced_config - computed: false, optional: true, required: false
  private _advancedConfig = new VpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfigOutputReference(this, "advanced_config");
  public get advancedConfig() {
    return this._advancedConfig;
  }
  public putAdvancedConfig(value: VpcServiceProfileDhcpConfigDhcpServerConfigAdvancedConfig) {
    this._advancedConfig.internalValue = value;
  }
  public resetAdvancedConfig() {
    this._advancedConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigInput() {
    return this._advancedConfig.internalValue;
  }

  // dns_client_config - computed: false, optional: true, required: false
  private _dnsClientConfig = new VpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfigOutputReference(this, "dns_client_config");
  public get dnsClientConfig() {
    return this._dnsClientConfig;
  }
  public putDnsClientConfig(value: VpcServiceProfileDhcpConfigDhcpServerConfigDnsClientConfig) {
    this._dnsClientConfig.internalValue = value;
  }
  public resetDnsClientConfig() {
    this._dnsClientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsClientConfigInput() {
    return this._dnsClientConfig.internalValue;
  }
}
export interface VpcServiceProfileDhcpConfig {
  /**
  * dhcp_relay_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#dhcp_relay_config VpcServiceProfile#dhcp_relay_config}
  */
  readonly dhcpRelayConfig?: VpcServiceProfileDhcpConfigDhcpRelayConfig;
  /**
  * dhcp_server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#dhcp_server_config VpcServiceProfile#dhcp_server_config}
  */
  readonly dhcpServerConfig?: VpcServiceProfileDhcpConfigDhcpServerConfig;
}

export function vpcServiceProfileDhcpConfigToTerraform(struct?: VpcServiceProfileDhcpConfigOutputReference | VpcServiceProfileDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_relay_config: vpcServiceProfileDhcpConfigDhcpRelayConfigToTerraform(struct!.dhcpRelayConfig),
    dhcp_server_config: vpcServiceProfileDhcpConfigDhcpServerConfigToTerraform(struct!.dhcpServerConfig),
  }
}


export function vpcServiceProfileDhcpConfigToHclTerraform(struct?: VpcServiceProfileDhcpConfigOutputReference | VpcServiceProfileDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_relay_config: {
      value: vpcServiceProfileDhcpConfigDhcpRelayConfigToHclTerraform(struct!.dhcpRelayConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpcServiceProfileDhcpConfigDhcpRelayConfigList",
    },
    dhcp_server_config: {
      value: vpcServiceProfileDhcpConfigDhcpServerConfigToHclTerraform(struct!.dhcpServerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpcServiceProfileDhcpConfigDhcpServerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcServiceProfileDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcServiceProfileDhcpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpRelayConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayConfig = this._dhcpRelayConfig?.internalValue;
    }
    if (this._dhcpServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServerConfig = this._dhcpServerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcServiceProfileDhcpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcpRelayConfig.internalValue = undefined;
      this._dhcpServerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcpRelayConfig.internalValue = value.dhcpRelayConfig;
      this._dhcpServerConfig.internalValue = value.dhcpServerConfig;
    }
  }

  // dhcp_relay_config - computed: false, optional: true, required: false
  private _dhcpRelayConfig = new VpcServiceProfileDhcpConfigDhcpRelayConfigOutputReference(this, "dhcp_relay_config");
  public get dhcpRelayConfig() {
    return this._dhcpRelayConfig;
  }
  public putDhcpRelayConfig(value: VpcServiceProfileDhcpConfigDhcpRelayConfig) {
    this._dhcpRelayConfig.internalValue = value;
  }
  public resetDhcpRelayConfig() {
    this._dhcpRelayConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayConfigInput() {
    return this._dhcpRelayConfig.internalValue;
  }

  // dhcp_server_config - computed: false, optional: true, required: false
  private _dhcpServerConfig = new VpcServiceProfileDhcpConfigDhcpServerConfigOutputReference(this, "dhcp_server_config");
  public get dhcpServerConfig() {
    return this._dhcpServerConfig;
  }
  public putDhcpServerConfig(value: VpcServiceProfileDhcpConfigDhcpServerConfig) {
    this._dhcpServerConfig.internalValue = value;
  }
  public resetDhcpServerConfig() {
    this._dhcpServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerConfigInput() {
    return this._dhcpServerConfig.internalValue;
  }
}
export interface VpcServiceProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#scope VpcServiceProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#tag VpcServiceProfile#tag}
  */
  readonly tag?: string;
}

export function vpcServiceProfileTagToTerraform(struct?: VpcServiceProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function vpcServiceProfileTagToHclTerraform(struct?: VpcServiceProfileTag | cdktf.IResolvable): any {
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

export class VpcServiceProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcServiceProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcServiceProfileTag | cdktf.IResolvable | undefined) {
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

export class VpcServiceProfileTagList extends cdktf.ComplexList {
  public internalValue? : VpcServiceProfileTag[] | cdktf.IResolvable

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
  public get(index: number): VpcServiceProfileTagOutputReference {
    return new VpcServiceProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile nsxt_vpc_service_profile}
*/
export class VpcServiceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_vpc_service_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcServiceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcServiceProfile to import
  * @param importFromId The id of the existing VpcServiceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcServiceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_vpc_service_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_service_profile nsxt_vpc_service_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcServiceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: VpcServiceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_vpc_service_profile',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._ipDiscoveryProfile = config.ipDiscoveryProfile;
    this._macDiscoveryProfile = config.macDiscoveryProfile;
    this._nsxId = config.nsxId;
    this._qosProfile = config.qosProfile;
    this._securityProfile = config.securityProfile;
    this._spoofGuardProfile = config.spoofGuardProfile;
    this._context.internalValue = config.context;
    this._dhcpConfig.internalValue = config.dhcpConfig;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip_discovery_profile - computed: false, optional: true, required: false
  private _ipDiscoveryProfile?: string; 
  public get ipDiscoveryProfile() {
    return this.getStringAttribute('ip_discovery_profile');
  }
  public set ipDiscoveryProfile(value: string) {
    this._ipDiscoveryProfile = value;
  }
  public resetIpDiscoveryProfile() {
    this._ipDiscoveryProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDiscoveryProfileInput() {
    return this._ipDiscoveryProfile;
  }

  // mac_discovery_profile - computed: false, optional: true, required: false
  private _macDiscoveryProfile?: string; 
  public get macDiscoveryProfile() {
    return this.getStringAttribute('mac_discovery_profile');
  }
  public set macDiscoveryProfile(value: string) {
    this._macDiscoveryProfile = value;
  }
  public resetMacDiscoveryProfile() {
    this._macDiscoveryProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macDiscoveryProfileInput() {
    return this._macDiscoveryProfile;
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

  // qos_profile - computed: false, optional: true, required: false
  private _qosProfile?: string; 
  public get qosProfile() {
    return this.getStringAttribute('qos_profile');
  }
  public set qosProfile(value: string) {
    this._qosProfile = value;
  }
  public resetQosProfile() {
    this._qosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosProfileInput() {
    return this._qosProfile;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // security_profile - computed: false, optional: true, required: false
  private _securityProfile?: string; 
  public get securityProfile() {
    return this.getStringAttribute('security_profile');
  }
  public set securityProfile(value: string) {
    this._securityProfile = value;
  }
  public resetSecurityProfile() {
    this._securityProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileInput() {
    return this._securityProfile;
  }

  // spoof_guard_profile - computed: false, optional: true, required: false
  private _spoofGuardProfile?: string; 
  public get spoofGuardProfile() {
    return this.getStringAttribute('spoof_guard_profile');
  }
  public set spoofGuardProfile(value: string) {
    this._spoofGuardProfile = value;
  }
  public resetSpoofGuardProfile() {
    this._spoofGuardProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofGuardProfileInput() {
    return this._spoofGuardProfile;
  }

  // context - computed: false, optional: false, required: true
  private _context = new VpcServiceProfileContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: VpcServiceProfileContext) {
    this._context.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // dhcp_config - computed: false, optional: false, required: true
  private _dhcpConfig = new VpcServiceProfileDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: VpcServiceProfileDhcpConfig) {
    this._dhcpConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigInput() {
    return this._dhcpConfig.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new VpcServiceProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: VpcServiceProfileTag[] | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ip_discovery_profile: cdktf.stringToTerraform(this._ipDiscoveryProfile),
      mac_discovery_profile: cdktf.stringToTerraform(this._macDiscoveryProfile),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      qos_profile: cdktf.stringToTerraform(this._qosProfile),
      security_profile: cdktf.stringToTerraform(this._securityProfile),
      spoof_guard_profile: cdktf.stringToTerraform(this._spoofGuardProfile),
      context: vpcServiceProfileContextToTerraform(this._context.internalValue),
      dhcp_config: vpcServiceProfileDhcpConfigToTerraform(this._dhcpConfig.internalValue),
      tag: cdktf.listMapper(vpcServiceProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ip_discovery_profile: {
        value: cdktf.stringToHclTerraform(this._ipDiscoveryProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_discovery_profile: {
        value: cdktf.stringToHclTerraform(this._macDiscoveryProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_profile: {
        value: cdktf.stringToHclTerraform(this._qosProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_profile: {
        value: cdktf.stringToHclTerraform(this._securityProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoof_guard_profile: {
        value: cdktf.stringToHclTerraform(this._spoofGuardProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: vpcServiceProfileContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcServiceProfileContextList",
      },
      dhcp_config: {
        value: vpcServiceProfileDhcpConfigToHclTerraform(this._dhcpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcServiceProfileDhcpConfigList",
      },
      tag: {
        value: cdktf.listMapperHcl(vpcServiceProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpcServiceProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
