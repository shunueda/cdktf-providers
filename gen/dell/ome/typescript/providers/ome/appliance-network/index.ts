// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ome Adapter Setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#adapter_setting ApplianceNetwork#adapter_setting}
  */
  readonly adapterSetting?: ApplianceNetworkAdapterSetting;
  /**
  * Ome Proxy Setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#proxy_setting ApplianceNetwork#proxy_setting}
  */
  readonly proxySetting?: ApplianceNetworkProxySetting;
  /**
  * Ome Session Setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#session_setting ApplianceNetwork#session_setting}
  */
  readonly sessionSetting?: ApplianceNetworkSessionSetting;
  /**
  * Ome Time Setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#time_setting ApplianceNetwork#time_setting}
  */
  readonly timeSetting?: ApplianceNetworkTimeSetting;
}
export interface ApplianceNetworkAdapterSettingDnsConfiguration {
  /**
  * Static DNS domain name. This is applicable when "use_dhcp_for_dns_domain_name" is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#dns_domain_name ApplianceNetwork#dns_domain_name}
  */
  readonly dnsDomainName?: string;
  /**
  * DNS name for "hostname". This is applicable when "register_with_dns" is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#dns_name ApplianceNetwork#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Register/Unregister I(dns_name) on the DNS Server.This option cannot be updated if vLAN configuration changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#register_with_dns ApplianceNetwork#register_with_dns}
  */
  readonly registerWithDns?: boolean | cdktf.IResolvable;
  /**
  * Get the "dns_domain_name" using a DHCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#use_dhcp_for_dns_server_names ApplianceNetwork#use_dhcp_for_dns_server_names}
  */
  readonly useDhcpForDnsServerNames?: boolean | cdktf.IResolvable;
}

export function applianceNetworkAdapterSettingDnsConfigurationToTerraform(struct?: ApplianceNetworkAdapterSettingDnsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_domain_name: cdktf.stringToTerraform(struct!.dnsDomainName),
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    register_with_dns: cdktf.booleanToTerraform(struct!.registerWithDns),
    use_dhcp_for_dns_server_names: cdktf.booleanToTerraform(struct!.useDhcpForDnsServerNames),
  }
}


export function applianceNetworkAdapterSettingDnsConfigurationToHclTerraform(struct?: ApplianceNetworkAdapterSettingDnsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register_with_dns: {
      value: cdktf.booleanToHclTerraform(struct!.registerWithDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_dhcp_for_dns_server_names: {
      value: cdktf.booleanToHclTerraform(struct!.useDhcpForDnsServerNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceNetworkAdapterSettingDnsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplianceNetworkAdapterSettingDnsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainName = this._dnsDomainName;
    }
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._registerWithDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerWithDns = this._registerWithDns;
    }
    if (this._useDhcpForDnsServerNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDhcpForDnsServerNames = this._useDhcpForDnsServerNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceNetworkAdapterSettingDnsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsDomainName = undefined;
      this._dnsName = undefined;
      this._registerWithDns = undefined;
      this._useDhcpForDnsServerNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsDomainName = value.dnsDomainName;
      this._dnsName = value.dnsName;
      this._registerWithDns = value.registerWithDns;
      this._useDhcpForDnsServerNames = value.useDhcpForDnsServerNames;
    }
  }

  // dns_domain_name - computed: true, optional: true, required: false
  private _dnsDomainName?: string; 
  public get dnsDomainName() {
    return this.getStringAttribute('dns_domain_name');
  }
  public set dnsDomainName(value: string) {
    this._dnsDomainName = value;
  }
  public resetDnsDomainName() {
    this._dnsDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainNameInput() {
    return this._dnsDomainName;
  }

  // dns_name - computed: true, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // register_with_dns - computed: true, optional: true, required: false
  private _registerWithDns?: boolean | cdktf.IResolvable; 
  public get registerWithDns() {
    return this.getBooleanAttribute('register_with_dns');
  }
  public set registerWithDns(value: boolean | cdktf.IResolvable) {
    this._registerWithDns = value;
  }
  public resetRegisterWithDns() {
    this._registerWithDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerWithDnsInput() {
    return this._registerWithDns;
  }

  // use_dhcp_for_dns_server_names - computed: true, optional: true, required: false
  private _useDhcpForDnsServerNames?: boolean | cdktf.IResolvable; 
  public get useDhcpForDnsServerNames() {
    return this.getBooleanAttribute('use_dhcp_for_dns_server_names');
  }
  public set useDhcpForDnsServerNames(value: boolean | cdktf.IResolvable) {
    this._useDhcpForDnsServerNames = value;
  }
  public resetUseDhcpForDnsServerNames() {
    this._useDhcpForDnsServerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDhcpForDnsServerNamesInput() {
    return this._useDhcpForDnsServerNames;
  }
}
export interface ApplianceNetworkAdapterSettingIpv4Configuration {
  /**
  * Enable or disable the automatic request to get an IPv4 address from the IPv4 Dynamic Host Configuration Protocol (DHCP) server. If enable_dhcp option is true, OpenManage Enterprise retrieves the IP configuration—IPv4 address, subnet mask, and gateway from a DHCP server on the existing network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#enable_dhcp ApplianceNetwork#enable_dhcp}
  */
  readonly enableDhcp?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable access to the network using IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#enable_ipv4 ApplianceNetwork#enable_ipv4}
  */
  readonly enableIpv4: boolean | cdktf.IResolvable;
  /**
  * Static IPv4 DNS alternate server. This option is applicable when "use_dhcp_for_dns_server_names" is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#static_alternate_dns_server ApplianceNetwork#static_alternate_dns_server}
  */
  readonly staticAlternateDnsServer?: string;
  /**
  * Static IPv4 gateway address. This option is applicable when "enable_dhcp" is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#static_gateway ApplianceNetwork#static_gateway}
  */
  readonly staticGateway?: string;
  /**
  * Static IPv4 address. This option is applicable when "enable_dhcp" is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#static_ip_address ApplianceNetwork#static_ip_address}
  */
  readonly staticIpAddress?: string;
  /**
  * Static IPv4 DNS preferred server. This option is applicable when "use_dhcp_for_dns_server_names" is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#static_preferred_dns_server ApplianceNetwork#static_preferred_dns_server}
  */
  readonly staticPreferredDnsServer?: string;
  /**
  * Static IPv4 subnet mask address. This option is applicable when "enable_dhcp" is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#static_subnet_mask ApplianceNetwork#static_subnet_mask}
  */
  readonly staticSubnetMask?: string;
  /**
  * This option allows to automatically request and obtain a DNS server IPv4 address from the DHCP server. This option is applicable when "enable_dhcp" is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#use_dhcp_for_dns_server_names ApplianceNetwork#use_dhcp_for_dns_server_names}
  */
  readonly useDhcpForDnsServerNames?: boolean | cdktf.IResolvable;
}

export function applianceNetworkAdapterSettingIpv4ConfigurationToTerraform(struct?: ApplianceNetworkAdapterSettingIpv4Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_dhcp: cdktf.booleanToTerraform(struct!.enableDhcp),
    enable_ipv4: cdktf.booleanToTerraform(struct!.enableIpv4),
    static_alternate_dns_server: cdktf.stringToTerraform(struct!.staticAlternateDnsServer),
    static_gateway: cdktf.stringToTerraform(struct!.staticGateway),
    static_ip_address: cdktf.stringToTerraform(struct!.staticIpAddress),
    static_preferred_dns_server: cdktf.stringToTerraform(struct!.staticPreferredDnsServer),
    static_subnet_mask: cdktf.stringToTerraform(struct!.staticSubnetMask),
    use_dhcp_for_dns_server_names: cdktf.booleanToTerraform(struct!.useDhcpForDnsServerNames),
  }
}


export function applianceNetworkAdapterSettingIpv4ConfigurationToHclTerraform(struct?: ApplianceNetworkAdapterSettingIpv4Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.enableDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_alternate_dns_server: {
      value: cdktf.stringToHclTerraform(struct!.staticAlternateDnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_gateway: {
      value: cdktf.stringToHclTerraform(struct!.staticGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.staticIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_preferred_dns_server: {
      value: cdktf.stringToHclTerraform(struct!.staticPreferredDnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.staticSubnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_dhcp_for_dns_server_names: {
      value: cdktf.booleanToHclTerraform(struct!.useDhcpForDnsServerNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceNetworkAdapterSettingIpv4ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplianceNetworkAdapterSettingIpv4Configuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDhcp = this._enableDhcp;
    }
    if (this._enableIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpv4 = this._enableIpv4;
    }
    if (this._staticAlternateDnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticAlternateDnsServer = this._staticAlternateDnsServer;
    }
    if (this._staticGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticGateway = this._staticGateway;
    }
    if (this._staticIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpAddress = this._staticIpAddress;
    }
    if (this._staticPreferredDnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticPreferredDnsServer = this._staticPreferredDnsServer;
    }
    if (this._staticSubnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticSubnetMask = this._staticSubnetMask;
    }
    if (this._useDhcpForDnsServerNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDhcpForDnsServerNames = this._useDhcpForDnsServerNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceNetworkAdapterSettingIpv4Configuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableDhcp = undefined;
      this._enableIpv4 = undefined;
      this._staticAlternateDnsServer = undefined;
      this._staticGateway = undefined;
      this._staticIpAddress = undefined;
      this._staticPreferredDnsServer = undefined;
      this._staticSubnetMask = undefined;
      this._useDhcpForDnsServerNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableDhcp = value.enableDhcp;
      this._enableIpv4 = value.enableIpv4;
      this._staticAlternateDnsServer = value.staticAlternateDnsServer;
      this._staticGateway = value.staticGateway;
      this._staticIpAddress = value.staticIpAddress;
      this._staticPreferredDnsServer = value.staticPreferredDnsServer;
      this._staticSubnetMask = value.staticSubnetMask;
      this._useDhcpForDnsServerNames = value.useDhcpForDnsServerNames;
    }
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

  // enable_ipv4 - computed: false, optional: false, required: true
  private _enableIpv4?: boolean | cdktf.IResolvable; 
  public get enableIpv4() {
    return this.getBooleanAttribute('enable_ipv4');
  }
  public set enableIpv4(value: boolean | cdktf.IResolvable) {
    this._enableIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv4Input() {
    return this._enableIpv4;
  }

  // static_alternate_dns_server - computed: true, optional: true, required: false
  private _staticAlternateDnsServer?: string; 
  public get staticAlternateDnsServer() {
    return this.getStringAttribute('static_alternate_dns_server');
  }
  public set staticAlternateDnsServer(value: string) {
    this._staticAlternateDnsServer = value;
  }
  public resetStaticAlternateDnsServer() {
    this._staticAlternateDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAlternateDnsServerInput() {
    return this._staticAlternateDnsServer;
  }

  // static_gateway - computed: true, optional: true, required: false
  private _staticGateway?: string; 
  public get staticGateway() {
    return this.getStringAttribute('static_gateway');
  }
  public set staticGateway(value: string) {
    this._staticGateway = value;
  }
  public resetStaticGateway() {
    this._staticGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticGatewayInput() {
    return this._staticGateway;
  }

  // static_ip_address - computed: true, optional: true, required: false
  private _staticIpAddress?: string; 
  public get staticIpAddress() {
    return this.getStringAttribute('static_ip_address');
  }
  public set staticIpAddress(value: string) {
    this._staticIpAddress = value;
  }
  public resetStaticIpAddress() {
    this._staticIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpAddressInput() {
    return this._staticIpAddress;
  }

  // static_preferred_dns_server - computed: true, optional: true, required: false
  private _staticPreferredDnsServer?: string; 
  public get staticPreferredDnsServer() {
    return this.getStringAttribute('static_preferred_dns_server');
  }
  public set staticPreferredDnsServer(value: string) {
    this._staticPreferredDnsServer = value;
  }
  public resetStaticPreferredDnsServer() {
    this._staticPreferredDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPreferredDnsServerInput() {
    return this._staticPreferredDnsServer;
  }

  // static_subnet_mask - computed: true, optional: true, required: false
  private _staticSubnetMask?: string; 
  public get staticSubnetMask() {
    return this.getStringAttribute('static_subnet_mask');
  }
  public set staticSubnetMask(value: string) {
    this._staticSubnetMask = value;
  }
  public resetStaticSubnetMask() {
    this._staticSubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSubnetMaskInput() {
    return this._staticSubnetMask;
  }

  // use_dhcp_for_dns_server_names - computed: true, optional: true, required: false
  private _useDhcpForDnsServerNames?: boolean | cdktf.IResolvable; 
  public get useDhcpForDnsServerNames() {
    return this.getBooleanAttribute('use_dhcp_for_dns_server_names');
  }
  public set useDhcpForDnsServerNames(value: boolean | cdktf.IResolvable) {
    this._useDhcpForDnsServerNames = value;
  }
  public resetUseDhcpForDnsServerNames() {
    this._useDhcpForDnsServerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDhcpForDnsServerNamesInput() {
    return this._useDhcpForDnsServerNames;
  }
}
export interface ApplianceNetworkAdapterSettingIpv6Configuration {
  /**
  * Enable or disable the automatic request to get an IPv6 address from the IPv6 DHCP server or router advertisements(RA). If "enable_auto_configuration" is true, OME retrieves IP configuration-IPv6 address, prefix, and gateway, from a DHCPv6 server on the existing network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#enable_auto_configuration ApplianceNetwork#enable_auto_configuration}
  */
  readonly enableAutoConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable access to the network using the IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#enable_ipv6 ApplianceNetwork#enable_ipv6}
  */
  readonly enableIpv6: boolean | cdktf.IResolvable;
  /**
  * Static IPv6 DNS alternate server. This option is applicable when "use_dhcp_for_dns_server_names" is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#static_alternate_dns_server ApplianceNetwork#static_alternate_dns_server}
  */
  readonly staticAlternateDnsServer?: string;
  /**
  * Static IPv6 gateway address. This option is applicable when "enable_auto_configuration" is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#static_gateway ApplianceNetwork#static_gateway}
  */
  readonly staticGateway?: string;
  /**
  * Static IPv6 address. This option is applicable when "enable_auto_configuration" is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#static_ip_address ApplianceNetwork#static_ip_address}
  */
  readonly staticIpAddress?: string;
  /**
  * Static IPv6 DNS preferred server. This option is applicable when "use_dhcp_for_dns_server_names" is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#static_preferred_dns_server ApplianceNetwork#static_preferred_dns_server}
  */
  readonly staticPreferredDnsServer?: string;
  /**
  * Static IPv6 prefix length. This option is applicable when "enable_auto_configuration" is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#static_prefix_length ApplianceNetwork#static_prefix_length}
  */
  readonly staticPrefixLength?: number;
  /**
  * This option allows to automatically request and obtain a DNS server IPv6 address from the DHCP server. This option is applicable when "enable_auto_configuration" is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#use_dhcp_for_dns_server_names ApplianceNetwork#use_dhcp_for_dns_server_names}
  */
  readonly useDhcpForDnsServerNames?: boolean | cdktf.IResolvable;
}

export function applianceNetworkAdapterSettingIpv6ConfigurationToTerraform(struct?: ApplianceNetworkAdapterSettingIpv6Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_configuration: cdktf.booleanToTerraform(struct!.enableAutoConfiguration),
    enable_ipv6: cdktf.booleanToTerraform(struct!.enableIpv6),
    static_alternate_dns_server: cdktf.stringToTerraform(struct!.staticAlternateDnsServer),
    static_gateway: cdktf.stringToTerraform(struct!.staticGateway),
    static_ip_address: cdktf.stringToTerraform(struct!.staticIpAddress),
    static_preferred_dns_server: cdktf.stringToTerraform(struct!.staticPreferredDnsServer),
    static_prefix_length: cdktf.numberToTerraform(struct!.staticPrefixLength),
    use_dhcp_for_dns_server_names: cdktf.booleanToTerraform(struct!.useDhcpForDnsServerNames),
  }
}


export function applianceNetworkAdapterSettingIpv6ConfigurationToHclTerraform(struct?: ApplianceNetworkAdapterSettingIpv6Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_configuration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_alternate_dns_server: {
      value: cdktf.stringToHclTerraform(struct!.staticAlternateDnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_gateway: {
      value: cdktf.stringToHclTerraform(struct!.staticGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.staticIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_preferred_dns_server: {
      value: cdktf.stringToHclTerraform(struct!.staticPreferredDnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.staticPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_dhcp_for_dns_server_names: {
      value: cdktf.booleanToHclTerraform(struct!.useDhcpForDnsServerNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceNetworkAdapterSettingIpv6ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplianceNetworkAdapterSettingIpv6Configuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoConfiguration = this._enableAutoConfiguration;
    }
    if (this._enableIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpv6 = this._enableIpv6;
    }
    if (this._staticAlternateDnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticAlternateDnsServer = this._staticAlternateDnsServer;
    }
    if (this._staticGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticGateway = this._staticGateway;
    }
    if (this._staticIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpAddress = this._staticIpAddress;
    }
    if (this._staticPreferredDnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticPreferredDnsServer = this._staticPreferredDnsServer;
    }
    if (this._staticPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticPrefixLength = this._staticPrefixLength;
    }
    if (this._useDhcpForDnsServerNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDhcpForDnsServerNames = this._useDhcpForDnsServerNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceNetworkAdapterSettingIpv6Configuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAutoConfiguration = undefined;
      this._enableIpv6 = undefined;
      this._staticAlternateDnsServer = undefined;
      this._staticGateway = undefined;
      this._staticIpAddress = undefined;
      this._staticPreferredDnsServer = undefined;
      this._staticPrefixLength = undefined;
      this._useDhcpForDnsServerNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAutoConfiguration = value.enableAutoConfiguration;
      this._enableIpv6 = value.enableIpv6;
      this._staticAlternateDnsServer = value.staticAlternateDnsServer;
      this._staticGateway = value.staticGateway;
      this._staticIpAddress = value.staticIpAddress;
      this._staticPreferredDnsServer = value.staticPreferredDnsServer;
      this._staticPrefixLength = value.staticPrefixLength;
      this._useDhcpForDnsServerNames = value.useDhcpForDnsServerNames;
    }
  }

  // enable_auto_configuration - computed: true, optional: true, required: false
  private _enableAutoConfiguration?: boolean | cdktf.IResolvable; 
  public get enableAutoConfiguration() {
    return this.getBooleanAttribute('enable_auto_configuration');
  }
  public set enableAutoConfiguration(value: boolean | cdktf.IResolvable) {
    this._enableAutoConfiguration = value;
  }
  public resetEnableAutoConfiguration() {
    this._enableAutoConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoConfigurationInput() {
    return this._enableAutoConfiguration;
  }

  // enable_ipv6 - computed: false, optional: false, required: true
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
  }

  // static_alternate_dns_server - computed: true, optional: true, required: false
  private _staticAlternateDnsServer?: string; 
  public get staticAlternateDnsServer() {
    return this.getStringAttribute('static_alternate_dns_server');
  }
  public set staticAlternateDnsServer(value: string) {
    this._staticAlternateDnsServer = value;
  }
  public resetStaticAlternateDnsServer() {
    this._staticAlternateDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAlternateDnsServerInput() {
    return this._staticAlternateDnsServer;
  }

  // static_gateway - computed: true, optional: true, required: false
  private _staticGateway?: string; 
  public get staticGateway() {
    return this.getStringAttribute('static_gateway');
  }
  public set staticGateway(value: string) {
    this._staticGateway = value;
  }
  public resetStaticGateway() {
    this._staticGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticGatewayInput() {
    return this._staticGateway;
  }

  // static_ip_address - computed: true, optional: true, required: false
  private _staticIpAddress?: string; 
  public get staticIpAddress() {
    return this.getStringAttribute('static_ip_address');
  }
  public set staticIpAddress(value: string) {
    this._staticIpAddress = value;
  }
  public resetStaticIpAddress() {
    this._staticIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpAddressInput() {
    return this._staticIpAddress;
  }

  // static_preferred_dns_server - computed: true, optional: true, required: false
  private _staticPreferredDnsServer?: string; 
  public get staticPreferredDnsServer() {
    return this.getStringAttribute('static_preferred_dns_server');
  }
  public set staticPreferredDnsServer(value: string) {
    this._staticPreferredDnsServer = value;
  }
  public resetStaticPreferredDnsServer() {
    this._staticPreferredDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPreferredDnsServerInput() {
    return this._staticPreferredDnsServer;
  }

  // static_prefix_length - computed: true, optional: true, required: false
  private _staticPrefixLength?: number; 
  public get staticPrefixLength() {
    return this.getNumberAttribute('static_prefix_length');
  }
  public set staticPrefixLength(value: number) {
    this._staticPrefixLength = value;
  }
  public resetStaticPrefixLength() {
    this._staticPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPrefixLengthInput() {
    return this._staticPrefixLength;
  }

  // use_dhcp_for_dns_server_names - computed: true, optional: true, required: false
  private _useDhcpForDnsServerNames?: boolean | cdktf.IResolvable; 
  public get useDhcpForDnsServerNames() {
    return this.getBooleanAttribute('use_dhcp_for_dns_server_names');
  }
  public set useDhcpForDnsServerNames(value: boolean | cdktf.IResolvable) {
    this._useDhcpForDnsServerNames = value;
  }
  public resetUseDhcpForDnsServerNames() {
    this._useDhcpForDnsServerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDhcpForDnsServerNamesInput() {
    return this._useDhcpForDnsServerNames;
  }
}
export interface ApplianceNetworkAdapterSettingManagementVlan {
  /**
  * Enable or disable vLAN for management.The vLAN configuration cannot be updated if the "register_with_dns" field under "dns_configuration" is true. WARNING: Ensure that the network cable is plugged to the correct port after the vLAN configurationchanges have been made. If not, the configuration change may not be effective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#enable_vlan ApplianceNetwork#enable_vlan}
  */
  readonly enableVlan: boolean | cdktf.IResolvable;
  /**
  * vLAN ID. This option is applicable when "enable_vlan" is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#id ApplianceNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function applianceNetworkAdapterSettingManagementVlanToTerraform(struct?: ApplianceNetworkAdapterSettingManagementVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_vlan: cdktf.booleanToTerraform(struct!.enableVlan),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function applianceNetworkAdapterSettingManagementVlanToHclTerraform(struct?: ApplianceNetworkAdapterSettingManagementVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_vlan: {
      value: cdktf.booleanToHclTerraform(struct!.enableVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceNetworkAdapterSettingManagementVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplianceNetworkAdapterSettingManagementVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVlan = this._enableVlan;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceNetworkAdapterSettingManagementVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableVlan = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableVlan = value.enableVlan;
      this._id = value.id;
    }
  }

  // enable_vlan - computed: false, optional: false, required: true
  private _enableVlan?: boolean | cdktf.IResolvable; 
  public get enableVlan() {
    return this.getBooleanAttribute('enable_vlan');
  }
  public set enableVlan(value: boolean | cdktf.IResolvable) {
    this._enableVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVlanInput() {
    return this._enableVlan;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ApplianceNetworkAdapterSetting {
  /**
  * Domain Name System(DNS) settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#dns_configuration ApplianceNetwork#dns_configuration}
  */
  readonly dnsConfiguration?: ApplianceNetworkAdapterSettingDnsConfiguration;
  /**
  * Enable or disable Network Interface Card (NIC) configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#enable_nic ApplianceNetwork#enable_nic}
  */
  readonly enableNic: boolean | cdktf.IResolvable;
  /**
  * If there are multiple interfaces, network configuration changes can be applied to a single interface using the `interface name` of the NIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#interface_name ApplianceNetwork#interface_name}
  */
  readonly interfaceName: string;
  /**
  * IPv4 network configuration. (Warning) Ensure that you have an alternate interface to access OpenManage Enterprise as these options can change the current IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#ipv4_configuration ApplianceNetwork#ipv4_configuration}
  */
  readonly ipv4Configuration?: ApplianceNetworkAdapterSettingIpv4Configuration;
  /**
  * IPv6 network configuration. (Warning) Ensure that you have an alternate interface to access OpenManage Enterprise as these options can change the current IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#ipv6_configuration ApplianceNetwork#ipv6_configuration}
  */
  readonly ipv6Configuration?: ApplianceNetworkAdapterSettingIpv6Configuration;
  /**
  * Job ID 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#job_id ApplianceNetwork#job_id}
  */
  readonly jobId?: number;
  /**
  * vLAN configuration. settings are applicable for OpenManage Enterprise Modular
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#management_vlan ApplianceNetwork#management_vlan}
  */
  readonly managementVlan?: ApplianceNetworkAdapterSettingManagementVlan;
  /**
  * The time in seconds, after which settings are applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#reboot_delay ApplianceNetwork#reboot_delay}
  */
  readonly rebootDelay?: number;
}

export function applianceNetworkAdapterSettingToTerraform(struct?: ApplianceNetworkAdapterSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_configuration: applianceNetworkAdapterSettingDnsConfigurationToTerraform(struct!.dnsConfiguration),
    enable_nic: cdktf.booleanToTerraform(struct!.enableNic),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    ipv4_configuration: applianceNetworkAdapterSettingIpv4ConfigurationToTerraform(struct!.ipv4Configuration),
    ipv6_configuration: applianceNetworkAdapterSettingIpv6ConfigurationToTerraform(struct!.ipv6Configuration),
    job_id: cdktf.numberToTerraform(struct!.jobId),
    management_vlan: applianceNetworkAdapterSettingManagementVlanToTerraform(struct!.managementVlan),
    reboot_delay: cdktf.numberToTerraform(struct!.rebootDelay),
  }
}


export function applianceNetworkAdapterSettingToHclTerraform(struct?: ApplianceNetworkAdapterSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_configuration: {
      value: applianceNetworkAdapterSettingDnsConfigurationToHclTerraform(struct!.dnsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplianceNetworkAdapterSettingDnsConfiguration",
    },
    enable_nic: {
      value: cdktf.booleanToHclTerraform(struct!.enableNic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_configuration: {
      value: applianceNetworkAdapterSettingIpv4ConfigurationToHclTerraform(struct!.ipv4Configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplianceNetworkAdapterSettingIpv4Configuration",
    },
    ipv6_configuration: {
      value: applianceNetworkAdapterSettingIpv6ConfigurationToHclTerraform(struct!.ipv6Configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplianceNetworkAdapterSettingIpv6Configuration",
    },
    job_id: {
      value: cdktf.numberToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management_vlan: {
      value: applianceNetworkAdapterSettingManagementVlanToHclTerraform(struct!.managementVlan),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplianceNetworkAdapterSettingManagementVlan",
    },
    reboot_delay: {
      value: cdktf.numberToHclTerraform(struct!.rebootDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceNetworkAdapterSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplianceNetworkAdapterSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfiguration = this._dnsConfiguration?.internalValue;
    }
    if (this._enableNic !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNic = this._enableNic;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipv4Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Configuration = this._ipv4Configuration?.internalValue;
    }
    if (this._ipv6Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Configuration = this._ipv6Configuration?.internalValue;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._managementVlan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementVlan = this._managementVlan?.internalValue;
    }
    if (this._rebootDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootDelay = this._rebootDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceNetworkAdapterSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsConfiguration.internalValue = undefined;
      this._enableNic = undefined;
      this._interfaceName = undefined;
      this._ipv4Configuration.internalValue = undefined;
      this._ipv6Configuration.internalValue = undefined;
      this._jobId = undefined;
      this._managementVlan.internalValue = undefined;
      this._rebootDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsConfiguration.internalValue = value.dnsConfiguration;
      this._enableNic = value.enableNic;
      this._interfaceName = value.interfaceName;
      this._ipv4Configuration.internalValue = value.ipv4Configuration;
      this._ipv6Configuration.internalValue = value.ipv6Configuration;
      this._jobId = value.jobId;
      this._managementVlan.internalValue = value.managementVlan;
      this._rebootDelay = value.rebootDelay;
    }
  }

  // dns_configuration - computed: false, optional: true, required: false
  private _dnsConfiguration = new ApplianceNetworkAdapterSettingDnsConfigurationOutputReference(this, "dns_configuration");
  public get dnsConfiguration() {
    return this._dnsConfiguration;
  }
  public putDnsConfiguration(value: ApplianceNetworkAdapterSettingDnsConfiguration) {
    this._dnsConfiguration.internalValue = value;
  }
  public resetDnsConfiguration() {
    this._dnsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigurationInput() {
    return this._dnsConfiguration.internalValue;
  }

  // enable_nic - computed: false, optional: false, required: true
  private _enableNic?: boolean | cdktf.IResolvable; 
  public get enableNic() {
    return this.getBooleanAttribute('enable_nic');
  }
  public set enableNic(value: boolean | cdktf.IResolvable) {
    this._enableNic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNicInput() {
    return this._enableNic;
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // ipv4_configuration - computed: false, optional: true, required: false
  private _ipv4Configuration = new ApplianceNetworkAdapterSettingIpv4ConfigurationOutputReference(this, "ipv4_configuration");
  public get ipv4Configuration() {
    return this._ipv4Configuration;
  }
  public putIpv4Configuration(value: ApplianceNetworkAdapterSettingIpv4Configuration) {
    this._ipv4Configuration.internalValue = value;
  }
  public resetIpv4Configuration() {
    this._ipv4Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ConfigurationInput() {
    return this._ipv4Configuration.internalValue;
  }

  // ipv6_configuration - computed: false, optional: true, required: false
  private _ipv6Configuration = new ApplianceNetworkAdapterSettingIpv6ConfigurationOutputReference(this, "ipv6_configuration");
  public get ipv6Configuration() {
    return this._ipv6Configuration;
  }
  public putIpv6Configuration(value: ApplianceNetworkAdapterSettingIpv6Configuration) {
    this._ipv6Configuration.internalValue = value;
  }
  public resetIpv6Configuration() {
    this._ipv6Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ConfigurationInput() {
    return this._ipv6Configuration.internalValue;
  }

  // job_id - computed: true, optional: true, required: false
  private _jobId?: number; 
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }
  public set jobId(value: number) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // management_vlan - computed: false, optional: true, required: false
  private _managementVlan = new ApplianceNetworkAdapterSettingManagementVlanOutputReference(this, "management_vlan");
  public get managementVlan() {
    return this._managementVlan;
  }
  public putManagementVlan(value: ApplianceNetworkAdapterSettingManagementVlan) {
    this._managementVlan.internalValue = value;
  }
  public resetManagementVlan() {
    this._managementVlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementVlanInput() {
    return this._managementVlan.internalValue;
  }

  // reboot_delay - computed: true, optional: true, required: false
  private _rebootDelay?: number; 
  public get rebootDelay() {
    return this.getNumberAttribute('reboot_delay');
  }
  public set rebootDelay(value: number) {
    this._rebootDelay = value;
  }
  public resetRebootDelay() {
    this._rebootDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDelayInput() {
    return this._rebootDelay;
  }
}
export interface ApplianceNetworkProxySetting {
  /**
  * Enable or disable proxy authentication. If "enable_authentication" is true, "proxy_username" and "proxy_password" must be provided. If "enable_authentication" is false, the proxy username and password are set to its default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#enable_authentication ApplianceNetwork#enable_authentication}
  */
  readonly enableAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables the HTTP proxy configuration. If "enable proxy" is false, then the HTTP proxy configuration is set to its default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#enable_proxy ApplianceNetwork#enable_proxy}
  */
  readonly enableProxy: boolean | cdktf.IResolvable;
  /**
  * Proxy server address. This option is mandatory when "enable_proxy" is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#ip_address ApplianceNetwork#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Proxy server password. This option is mandatory when "enable_authentication" is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#password ApplianceNetwork#password}
  */
  readonly password?: string;
  /**
  * Proxy server's port number. This option is mandatory when "enable_proxy" is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#proxy_port ApplianceNetwork#proxy_port}
  */
  readonly proxyPort?: number;
  /**
  * Proxy server username. This option is mandatory when "enable_authentication" is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#username ApplianceNetwork#username}
  */
  readonly username?: string;
}

export function applianceNetworkProxySettingToTerraform(struct?: ApplianceNetworkProxySetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_authentication: cdktf.booleanToTerraform(struct!.enableAuthentication),
    enable_proxy: cdktf.booleanToTerraform(struct!.enableProxy),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    password: cdktf.stringToTerraform(struct!.password),
    proxy_port: cdktf.numberToTerraform(struct!.proxyPort),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function applianceNetworkProxySettingToHclTerraform(struct?: ApplianceNetworkProxySetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.enableAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.enableProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.proxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceNetworkProxySettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplianceNetworkProxySetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAuthentication = this._enableAuthentication;
    }
    if (this._enableProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableProxy = this._enableProxy;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._proxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPort = this._proxyPort;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceNetworkProxySetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAuthentication = undefined;
      this._enableProxy = undefined;
      this._ipAddress = undefined;
      this._password = undefined;
      this._proxyPort = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAuthentication = value.enableAuthentication;
      this._enableProxy = value.enableProxy;
      this._ipAddress = value.ipAddress;
      this._password = value.password;
      this._proxyPort = value.proxyPort;
      this._username = value.username;
    }
  }

  // enable_authentication - computed: true, optional: true, required: false
  private _enableAuthentication?: boolean | cdktf.IResolvable; 
  public get enableAuthentication() {
    return this.getBooleanAttribute('enable_authentication');
  }
  public set enableAuthentication(value: boolean | cdktf.IResolvable) {
    this._enableAuthentication = value;
  }
  public resetEnableAuthentication() {
    this._enableAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAuthenticationInput() {
    return this._enableAuthentication;
  }

  // enable_proxy - computed: false, optional: false, required: true
  private _enableProxy?: boolean | cdktf.IResolvable; 
  public get enableProxy() {
    return this.getBooleanAttribute('enable_proxy');
  }
  public set enableProxy(value: boolean | cdktf.IResolvable) {
    this._enableProxy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProxyInput() {
    return this._enableProxy;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // proxy_port - computed: true, optional: true, required: false
  private _proxyPort?: number; 
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }
  public set proxyPort(value: number) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ApplianceNetworkSessionSetting {
  /**
  * The maximum number of API sessions to be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#api_session ApplianceNetwork#api_session}
  */
  readonly apiSession?: number;
  /**
  * Duration of inactivity in minutes after which the API session ends. This is mutually exclusive with "universal_timeout".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#api_timeout ApplianceNetwork#api_timeout}
  */
  readonly apiTimeout?: number;
  /**
  * Enable or disable the universal inactivity timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#enable_universal_timeout ApplianceNetwork#enable_universal_timeout}
  */
  readonly enableUniversalTimeout?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of GUI sessions to be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#gui_session ApplianceNetwork#gui_session}
  */
  readonly guiSession?: number;
  /**
  * Duration of inactivity in minutes after which the web interface of Graphical User Interface (GUI) session ends. This is mutually exclusive with "universal_timeout".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#gui_timeout ApplianceNetwork#gui_timeout}
  */
  readonly guiTimeout?: number;
  /**
  * The maximum number of serial console sessions to be allowed. This is applicable only for OpenManage Enterprise Modular.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#serial_session ApplianceNetwork#serial_session}
  */
  readonly serialSession?: number;
  /**
  * Duration of inactivity in minutes after which the serial console session ends.This is applicable only for OpenManage Enterprise Modular. This is mutually exclusive with "universal_timeout".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#serial_timeout ApplianceNetwork#serial_timeout}
  */
  readonly serialTimeout?: number;
  /**
  * The maximum number of SSH sessions to be allowed. This is applicable to OME-M only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#ssh_session ApplianceNetwork#ssh_session}
  */
  readonly sshSession?: number;
  /**
  * Duration of inactivity in minutes after which the SSH session ends. This is applicable only for OpenManage Enterprise Modular. This is mutually exclusive with "universal_timeout".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#ssh_timeout ApplianceNetwork#ssh_timeout}
  */
  readonly sshTimeout?: number;
  /**
  * Duration of inactivity in minutes after which all sessions end. This is applicable when "enable_universal_timeout" is true. This is mutually exclusive with "api_timeout", "gui_timeout", "ssh_timeout" and "serial_timeout".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#universal_timeout ApplianceNetwork#universal_timeout}
  */
  readonly universalTimeout?: number;
}

export function applianceNetworkSessionSettingToTerraform(struct?: ApplianceNetworkSessionSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_session: cdktf.numberToTerraform(struct!.apiSession),
    api_timeout: cdktf.numberToTerraform(struct!.apiTimeout),
    enable_universal_timeout: cdktf.booleanToTerraform(struct!.enableUniversalTimeout),
    gui_session: cdktf.numberToTerraform(struct!.guiSession),
    gui_timeout: cdktf.numberToTerraform(struct!.guiTimeout),
    serial_session: cdktf.numberToTerraform(struct!.serialSession),
    serial_timeout: cdktf.numberToTerraform(struct!.serialTimeout),
    ssh_session: cdktf.numberToTerraform(struct!.sshSession),
    ssh_timeout: cdktf.numberToTerraform(struct!.sshTimeout),
    universal_timeout: cdktf.numberToTerraform(struct!.universalTimeout),
  }
}


export function applianceNetworkSessionSettingToHclTerraform(struct?: ApplianceNetworkSessionSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_session: {
      value: cdktf.numberToHclTerraform(struct!.apiSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    api_timeout: {
      value: cdktf.numberToHclTerraform(struct!.apiTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_universal_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.enableUniversalTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gui_session: {
      value: cdktf.numberToHclTerraform(struct!.guiSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gui_timeout: {
      value: cdktf.numberToHclTerraform(struct!.guiTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serial_session: {
      value: cdktf.numberToHclTerraform(struct!.serialSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serial_timeout: {
      value: cdktf.numberToHclTerraform(struct!.serialTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_session: {
      value: cdktf.numberToHclTerraform(struct!.sshSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sshTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    universal_timeout: {
      value: cdktf.numberToHclTerraform(struct!.universalTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceNetworkSessionSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplianceNetworkSessionSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSession = this._apiSession;
    }
    if (this._apiTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTimeout = this._apiTimeout;
    }
    if (this._enableUniversalTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUniversalTimeout = this._enableUniversalTimeout;
    }
    if (this._guiSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.guiSession = this._guiSession;
    }
    if (this._guiTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.guiTimeout = this._guiTimeout;
    }
    if (this._serialSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialSession = this._serialSession;
    }
    if (this._serialTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialTimeout = this._serialTimeout;
    }
    if (this._sshSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshSession = this._sshSession;
    }
    if (this._sshTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshTimeout = this._sshTimeout;
    }
    if (this._universalTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.universalTimeout = this._universalTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceNetworkSessionSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiSession = undefined;
      this._apiTimeout = undefined;
      this._enableUniversalTimeout = undefined;
      this._guiSession = undefined;
      this._guiTimeout = undefined;
      this._serialSession = undefined;
      this._serialTimeout = undefined;
      this._sshSession = undefined;
      this._sshTimeout = undefined;
      this._universalTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiSession = value.apiSession;
      this._apiTimeout = value.apiTimeout;
      this._enableUniversalTimeout = value.enableUniversalTimeout;
      this._guiSession = value.guiSession;
      this._guiTimeout = value.guiTimeout;
      this._serialSession = value.serialSession;
      this._serialTimeout = value.serialTimeout;
      this._sshSession = value.sshSession;
      this._sshTimeout = value.sshTimeout;
      this._universalTimeout = value.universalTimeout;
    }
  }

  // api_session - computed: true, optional: true, required: false
  private _apiSession?: number; 
  public get apiSession() {
    return this.getNumberAttribute('api_session');
  }
  public set apiSession(value: number) {
    this._apiSession = value;
  }
  public resetApiSession() {
    this._apiSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSessionInput() {
    return this._apiSession;
  }

  // api_timeout - computed: true, optional: true, required: false
  private _apiTimeout?: number; 
  public get apiTimeout() {
    return this.getNumberAttribute('api_timeout');
  }
  public set apiTimeout(value: number) {
    this._apiTimeout = value;
  }
  public resetApiTimeout() {
    this._apiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTimeoutInput() {
    return this._apiTimeout;
  }

  // enable_universal_timeout - computed: true, optional: true, required: false
  private _enableUniversalTimeout?: boolean | cdktf.IResolvable; 
  public get enableUniversalTimeout() {
    return this.getBooleanAttribute('enable_universal_timeout');
  }
  public set enableUniversalTimeout(value: boolean | cdktf.IResolvable) {
    this._enableUniversalTimeout = value;
  }
  public resetEnableUniversalTimeout() {
    this._enableUniversalTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUniversalTimeoutInput() {
    return this._enableUniversalTimeout;
  }

  // gui_session - computed: true, optional: true, required: false
  private _guiSession?: number; 
  public get guiSession() {
    return this.getNumberAttribute('gui_session');
  }
  public set guiSession(value: number) {
    this._guiSession = value;
  }
  public resetGuiSession() {
    this._guiSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiSessionInput() {
    return this._guiSession;
  }

  // gui_timeout - computed: true, optional: true, required: false
  private _guiTimeout?: number; 
  public get guiTimeout() {
    return this.getNumberAttribute('gui_timeout');
  }
  public set guiTimeout(value: number) {
    this._guiTimeout = value;
  }
  public resetGuiTimeout() {
    this._guiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiTimeoutInput() {
    return this._guiTimeout;
  }

  // serial_session - computed: true, optional: true, required: false
  private _serialSession?: number; 
  public get serialSession() {
    return this.getNumberAttribute('serial_session');
  }
  public set serialSession(value: number) {
    this._serialSession = value;
  }
  public resetSerialSession() {
    this._serialSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialSessionInput() {
    return this._serialSession;
  }

  // serial_timeout - computed: true, optional: true, required: false
  private _serialTimeout?: number; 
  public get serialTimeout() {
    return this.getNumberAttribute('serial_timeout');
  }
  public set serialTimeout(value: number) {
    this._serialTimeout = value;
  }
  public resetSerialTimeout() {
    this._serialTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialTimeoutInput() {
    return this._serialTimeout;
  }

  // ssh_session - computed: true, optional: true, required: false
  private _sshSession?: number; 
  public get sshSession() {
    return this.getNumberAttribute('ssh_session');
  }
  public set sshSession(value: number) {
    this._sshSession = value;
  }
  public resetSshSession() {
    this._sshSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshSessionInput() {
    return this._sshSession;
  }

  // ssh_timeout - computed: true, optional: true, required: false
  private _sshTimeout?: number; 
  public get sshTimeout() {
    return this.getNumberAttribute('ssh_timeout');
  }
  public set sshTimeout(value: number) {
    this._sshTimeout = value;
  }
  public resetSshTimeout() {
    this._sshTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTimeoutInput() {
    return this._sshTimeout;
  }

  // universal_timeout - computed: true, optional: true, required: false
  private _universalTimeout?: number; 
  public get universalTimeout() {
    return this.getNumberAttribute('universal_timeout');
  }
  public set universalTimeout(value: number) {
    this._universalTimeout = value;
  }
  public resetUniversalTimeout() {
    this._universalTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get universalTimeoutInput() {
    return this._universalTimeout;
  }
}
export interface ApplianceNetworkTimeSetting {
  /**
  * Enables or disables Network Time Protocol(NTP).If "enable_ntp" is false, then the NTP addresses reset to their default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#enable_ntp ApplianceNetwork#enable_ntp}
  */
  readonly enableNtp?: boolean | cdktf.IResolvable;
  /**
  * The primary NTP address. This option is applicable when "enable_ntp" is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#primary_ntp_address ApplianceNetwork#primary_ntp_address}
  */
  readonly primaryNtpAddress?: string;
  /**
  * The first secondary NTP address. This option is applicable when "enable_ntp" is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#secondary_ntp_address1 ApplianceNetwork#secondary_ntp_address1}
  */
  readonly secondaryNtpAddress1?: string;
  /**
  * The second secondary NTP address. This option is applicable when "enable_ntp" is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#secondary_ntp_address2 ApplianceNetwork#secondary_ntp_address2}
  */
  readonly secondaryNtpAddress2?: string;
  /**
  * Time in the current system. This option is only applicable when "enable_ntp" is false. This option must be provided in following format 'yyyy-mm-dd hh:mm:ss'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#system_time ApplianceNetwork#system_time}
  */
  readonly systemTime?: string;
  /**
  * The valid timezone ID to be used. This option is applicable for both system time and NTP time synchronization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#time_zone ApplianceNetwork#time_zone}
  */
  readonly timeZone: string;
}

export function applianceNetworkTimeSettingToTerraform(struct?: ApplianceNetworkTimeSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_ntp: cdktf.booleanToTerraform(struct!.enableNtp),
    primary_ntp_address: cdktf.stringToTerraform(struct!.primaryNtpAddress),
    secondary_ntp_address1: cdktf.stringToTerraform(struct!.secondaryNtpAddress1),
    secondary_ntp_address2: cdktf.stringToTerraform(struct!.secondaryNtpAddress2),
    system_time: cdktf.stringToTerraform(struct!.systemTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function applianceNetworkTimeSettingToHclTerraform(struct?: ApplianceNetworkTimeSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_ntp: {
      value: cdktf.booleanToHclTerraform(struct!.enableNtp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary_ntp_address: {
      value: cdktf.stringToHclTerraform(struct!.primaryNtpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_ntp_address1: {
      value: cdktf.stringToHclTerraform(struct!.secondaryNtpAddress1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_ntp_address2: {
      value: cdktf.stringToHclTerraform(struct!.secondaryNtpAddress2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_time: {
      value: cdktf.stringToHclTerraform(struct!.systemTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceNetworkTimeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplianceNetworkTimeSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNtp = this._enableNtp;
    }
    if (this._primaryNtpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryNtpAddress = this._primaryNtpAddress;
    }
    if (this._secondaryNtpAddress1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryNtpAddress1 = this._secondaryNtpAddress1;
    }
    if (this._secondaryNtpAddress2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryNtpAddress2 = this._secondaryNtpAddress2;
    }
    if (this._systemTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemTime = this._systemTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceNetworkTimeSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableNtp = undefined;
      this._primaryNtpAddress = undefined;
      this._secondaryNtpAddress1 = undefined;
      this._secondaryNtpAddress2 = undefined;
      this._systemTime = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableNtp = value.enableNtp;
      this._primaryNtpAddress = value.primaryNtpAddress;
      this._secondaryNtpAddress1 = value.secondaryNtpAddress1;
      this._secondaryNtpAddress2 = value.secondaryNtpAddress2;
      this._systemTime = value.systemTime;
      this._timeZone = value.timeZone;
    }
  }

  // enable_ntp - computed: true, optional: true, required: false
  private _enableNtp?: boolean | cdktf.IResolvable; 
  public get enableNtp() {
    return this.getBooleanAttribute('enable_ntp');
  }
  public set enableNtp(value: boolean | cdktf.IResolvable) {
    this._enableNtp = value;
  }
  public resetEnableNtp() {
    this._enableNtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNtpInput() {
    return this._enableNtp;
  }

  // primary_ntp_address - computed: true, optional: true, required: false
  private _primaryNtpAddress?: string; 
  public get primaryNtpAddress() {
    return this.getStringAttribute('primary_ntp_address');
  }
  public set primaryNtpAddress(value: string) {
    this._primaryNtpAddress = value;
  }
  public resetPrimaryNtpAddress() {
    this._primaryNtpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNtpAddressInput() {
    return this._primaryNtpAddress;
  }

  // secondary_ntp_address1 - computed: true, optional: true, required: false
  private _secondaryNtpAddress1?: string; 
  public get secondaryNtpAddress1() {
    return this.getStringAttribute('secondary_ntp_address1');
  }
  public set secondaryNtpAddress1(value: string) {
    this._secondaryNtpAddress1 = value;
  }
  public resetSecondaryNtpAddress1() {
    this._secondaryNtpAddress1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryNtpAddress1Input() {
    return this._secondaryNtpAddress1;
  }

  // secondary_ntp_address2 - computed: true, optional: true, required: false
  private _secondaryNtpAddress2?: string; 
  public get secondaryNtpAddress2() {
    return this.getStringAttribute('secondary_ntp_address2');
  }
  public set secondaryNtpAddress2(value: string) {
    this._secondaryNtpAddress2 = value;
  }
  public resetSecondaryNtpAddress2() {
    this._secondaryNtpAddress2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryNtpAddress2Input() {
    return this._secondaryNtpAddress2;
  }

  // system_time - computed: true, optional: true, required: false
  private _systemTime?: string; 
  public get systemTime() {
    return this.getStringAttribute('system_time');
  }
  public set systemTime(value: string) {
    this._systemTime = value;
  }
  public resetSystemTime() {
    this._systemTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTimeInput() {
    return this._systemTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network ome_appliance_network}
*/
export class ApplianceNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_appliance_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceNetwork to import
  * @param importFromId The id of the existing ApplianceNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_appliance_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/appliance_network ome_appliance_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceNetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplianceNetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ome_appliance_network',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adapterSetting.internalValue = config.adapterSetting;
    this._proxySetting.internalValue = config.proxySetting;
    this._sessionSetting.internalValue = config.sessionSetting;
    this._timeSetting.internalValue = config.timeSetting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adapter_setting - computed: false, optional: true, required: false
  private _adapterSetting = new ApplianceNetworkAdapterSettingOutputReference(this, "adapter_setting");
  public get adapterSetting() {
    return this._adapterSetting;
  }
  public putAdapterSetting(value: ApplianceNetworkAdapterSetting) {
    this._adapterSetting.internalValue = value;
  }
  public resetAdapterSetting() {
    this._adapterSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterSettingInput() {
    return this._adapterSetting.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // proxy_setting - computed: false, optional: true, required: false
  private _proxySetting = new ApplianceNetworkProxySettingOutputReference(this, "proxy_setting");
  public get proxySetting() {
    return this._proxySetting;
  }
  public putProxySetting(value: ApplianceNetworkProxySetting) {
    this._proxySetting.internalValue = value;
  }
  public resetProxySetting() {
    this._proxySetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySettingInput() {
    return this._proxySetting.internalValue;
  }

  // session_setting - computed: false, optional: true, required: false
  private _sessionSetting = new ApplianceNetworkSessionSettingOutputReference(this, "session_setting");
  public get sessionSetting() {
    return this._sessionSetting;
  }
  public putSessionSetting(value: ApplianceNetworkSessionSetting) {
    this._sessionSetting.internalValue = value;
  }
  public resetSessionSetting() {
    this._sessionSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSettingInput() {
    return this._sessionSetting.internalValue;
  }

  // time_setting - computed: false, optional: true, required: false
  private _timeSetting = new ApplianceNetworkTimeSettingOutputReference(this, "time_setting");
  public get timeSetting() {
    return this._timeSetting;
  }
  public putTimeSetting(value: ApplianceNetworkTimeSetting) {
    this._timeSetting.internalValue = value;
  }
  public resetTimeSetting() {
    this._timeSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSettingInput() {
    return this._timeSetting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adapter_setting: applianceNetworkAdapterSettingToTerraform(this._adapterSetting.internalValue),
      proxy_setting: applianceNetworkProxySettingToTerraform(this._proxySetting.internalValue),
      session_setting: applianceNetworkSessionSettingToTerraform(this._sessionSetting.internalValue),
      time_setting: applianceNetworkTimeSettingToTerraform(this._timeSetting.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adapter_setting: {
        value: applianceNetworkAdapterSettingToHclTerraform(this._adapterSetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplianceNetworkAdapterSetting",
      },
      proxy_setting: {
        value: applianceNetworkProxySettingToHclTerraform(this._proxySetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplianceNetworkProxySetting",
      },
      session_setting: {
        value: applianceNetworkSessionSettingToHclTerraform(this._sessionSetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplianceNetworkSessionSetting",
      },
      time_setting: {
        value: applianceNetworkTimeSettingToHclTerraform(this._timeSetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplianceNetworkTimeSetting",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
