// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceDhcpServerFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set IP address of default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#default_gateway ServiceDhcpServerFeature#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#default_gateway_variable ServiceDhcpServerFeature#default_gateway_variable}
  */
  readonly defaultGatewayVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#description ServiceDhcpServerFeature#description}
  */
  readonly description?: string;
  /**
  * Configure one or more DNS server IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#dns_servers ServiceDhcpServerFeature#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#dns_servers_variable ServiceDhcpServerFeature#dns_servers_variable}
  */
  readonly dnsServersVariable?: string;
  /**
  * Set domain name client uses to resolve hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#domain_name ServiceDhcpServerFeature#domain_name}
  */
  readonly domainName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#domain_name_variable ServiceDhcpServerFeature#domain_name_variable}
  */
  readonly domainNameVariable?: string;
  /**
  * Configure IPv4 address to exclude from DHCP address pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#exclude ServiceDhcpServerFeature#exclude}
  */
  readonly exclude?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#exclude_variable ServiceDhcpServerFeature#exclude_variable}
  */
  readonly excludeVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#feature_profile_id ServiceDhcpServerFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Set MTU on interface to DHCP client
  *   - Range: `68`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#interface_mtu ServiceDhcpServerFeature#interface_mtu}
  */
  readonly interfaceMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#interface_mtu_variable ServiceDhcpServerFeature#interface_mtu_variable}
  */
  readonly interfaceMtuVariable?: string;
  /**
  * Configure how long a DHCP-assigned IP address is valid
  *   - Range: `60`-`31536000`
  *   - Default value: `86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#lease_time ServiceDhcpServerFeature#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#lease_time_variable ServiceDhcpServerFeature#lease_time_variable}
  */
  readonly leaseTimeVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#name ServiceDhcpServerFeature#name}
  */
  readonly name: string;
  /**
  * Network Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#network_address ServiceDhcpServerFeature#network_address}
  */
  readonly networkAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#network_address_variable ServiceDhcpServerFeature#network_address_variable}
  */
  readonly networkAddressVariable?: string;
  /**
  * Configure Options Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#option_codes ServiceDhcpServerFeature#option_codes}
  */
  readonly optionCodes?: ServiceDhcpServerFeatureOptionCodes[] | cdktf.IResolvable;
  /**
  * Configure static IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#static_leases ServiceDhcpServerFeature#static_leases}
  */
  readonly staticLeases?: ServiceDhcpServerFeatureStaticLeases[] | cdktf.IResolvable;
  /**
  * Subnet Mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#subnet_mask ServiceDhcpServerFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#subnet_mask_variable ServiceDhcpServerFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
  /**
  * Configure TFTP server IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#tftp_servers ServiceDhcpServerFeature#tftp_servers}
  */
  readonly tftpServers?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#tftp_servers_variable ServiceDhcpServerFeature#tftp_servers_variable}
  */
  readonly tftpServersVariable?: string;
}
export interface ServiceDhcpServerFeatureOptionCodes {
  /**
  * Set ASCII value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#ascii ServiceDhcpServerFeature#ascii}
  */
  readonly ascii?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#ascii_variable ServiceDhcpServerFeature#ascii_variable}
  */
  readonly asciiVariable?: string;
  /**
  * Set Option Code
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#code ServiceDhcpServerFeature#code}
  */
  readonly code?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#code_variable ServiceDhcpServerFeature#code_variable}
  */
  readonly codeVariable?: string;
  /**
  * Set HEX value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#hex ServiceDhcpServerFeature#hex}
  */
  readonly hex?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#hex_variable ServiceDhcpServerFeature#hex_variable}
  */
  readonly hexVariable?: string;
  /**
  * Set ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#ip ServiceDhcpServerFeature#ip}
  */
  readonly ip?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#ip_variable ServiceDhcpServerFeature#ip_variable}
  */
  readonly ipVariable?: string;
}

export function serviceDhcpServerFeatureOptionCodesToTerraform(struct?: ServiceDhcpServerFeatureOptionCodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ascii: cdktf.stringToTerraform(struct!.ascii),
    ascii_variable: cdktf.stringToTerraform(struct!.asciiVariable),
    code: cdktf.numberToTerraform(struct!.code),
    code_variable: cdktf.stringToTerraform(struct!.codeVariable),
    hex: cdktf.stringToTerraform(struct!.hex),
    hex_variable: cdktf.stringToTerraform(struct!.hexVariable),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    ip_variable: cdktf.stringToTerraform(struct!.ipVariable),
  }
}


export function serviceDhcpServerFeatureOptionCodesToHclTerraform(struct?: ServiceDhcpServerFeatureOptionCodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ascii: {
      value: cdktf.stringToHclTerraform(struct!.ascii),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ascii_variable: {
      value: cdktf.stringToHclTerraform(struct!.asciiVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_variable: {
      value: cdktf.stringToHclTerraform(struct!.codeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hex: {
      value: cdktf.stringToHclTerraform(struct!.hex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hex_variable: {
      value: cdktf.stringToHclTerraform(struct!.hexVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDhcpServerFeatureOptionCodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDhcpServerFeatureOptionCodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ascii !== undefined) {
      hasAnyValues = true;
      internalValueResult.ascii = this._ascii;
    }
    if (this._asciiVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asciiVariable = this._asciiVariable;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._codeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeVariable = this._codeVariable;
    }
    if (this._hex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hex = this._hex;
    }
    if (this._hexVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hexVariable = this._hexVariable;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVariable = this._ipVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDhcpServerFeatureOptionCodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ascii = undefined;
      this._asciiVariable = undefined;
      this._code = undefined;
      this._codeVariable = undefined;
      this._hex = undefined;
      this._hexVariable = undefined;
      this._ip = undefined;
      this._ipVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ascii = value.ascii;
      this._asciiVariable = value.asciiVariable;
      this._code = value.code;
      this._codeVariable = value.codeVariable;
      this._hex = value.hex;
      this._hexVariable = value.hexVariable;
      this._ip = value.ip;
      this._ipVariable = value.ipVariable;
    }
  }

  // ascii - computed: false, optional: true, required: false
  private _ascii?: string; 
  public get ascii() {
    return this.getStringAttribute('ascii');
  }
  public set ascii(value: string) {
    this._ascii = value;
  }
  public resetAscii() {
    this._ascii = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asciiInput() {
    return this._ascii;
  }

  // ascii_variable - computed: false, optional: true, required: false
  private _asciiVariable?: string; 
  public get asciiVariable() {
    return this.getStringAttribute('ascii_variable');
  }
  public set asciiVariable(value: string) {
    this._asciiVariable = value;
  }
  public resetAsciiVariable() {
    this._asciiVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asciiVariableInput() {
    return this._asciiVariable;
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

  // code_variable - computed: false, optional: true, required: false
  private _codeVariable?: string; 
  public get codeVariable() {
    return this.getStringAttribute('code_variable');
  }
  public set codeVariable(value: string) {
    this._codeVariable = value;
  }
  public resetCodeVariable() {
    this._codeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeVariableInput() {
    return this._codeVariable;
  }

  // hex - computed: false, optional: true, required: false
  private _hex?: string; 
  public get hex() {
    return this.getStringAttribute('hex');
  }
  public set hex(value: string) {
    this._hex = value;
  }
  public resetHex() {
    this._hex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hexInput() {
    return this._hex;
  }

  // hex_variable - computed: false, optional: true, required: false
  private _hexVariable?: string; 
  public get hexVariable() {
    return this.getStringAttribute('hex_variable');
  }
  public set hexVariable(value: string) {
    this._hexVariable = value;
  }
  public resetHexVariable() {
    this._hexVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hexVariableInput() {
    return this._hexVariable;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return cdktf.Fn.tolist(this.getListAttribute('ip'));
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_variable - computed: false, optional: true, required: false
  private _ipVariable?: string; 
  public get ipVariable() {
    return this.getStringAttribute('ip_variable');
  }
  public set ipVariable(value: string) {
    this._ipVariable = value;
  }
  public resetIpVariable() {
    this._ipVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVariableInput() {
    return this._ipVariable;
  }
}

export class ServiceDhcpServerFeatureOptionCodesList extends cdktf.ComplexList {
  public internalValue? : ServiceDhcpServerFeatureOptionCodes[] | cdktf.IResolvable

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
  public get(index: number): ServiceDhcpServerFeatureOptionCodesOutputReference {
    return new ServiceDhcpServerFeatureOptionCodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDhcpServerFeatureStaticLeases {
  /**
  * Set client’s static IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#ip_address ServiceDhcpServerFeature#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#ip_address_variable ServiceDhcpServerFeature#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * Set MAC address of client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#mac_address ServiceDhcpServerFeature#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#mac_address_variable ServiceDhcpServerFeature#mac_address_variable}
  */
  readonly macAddressVariable?: string;
}

export function serviceDhcpServerFeatureStaticLeasesToTerraform(struct?: ServiceDhcpServerFeatureStaticLeases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_variable: cdktf.stringToTerraform(struct!.ipAddressVariable),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mac_address_variable: cdktf.stringToTerraform(struct!.macAddressVariable),
  }
}


export function serviceDhcpServerFeatureStaticLeasesToHclTerraform(struct?: ServiceDhcpServerFeatureStaticLeases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.macAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDhcpServerFeatureStaticLeasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDhcpServerFeatureStaticLeases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressVariable = this._ipAddressVariable;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._macAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddressVariable = this._macAddressVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDhcpServerFeatureStaticLeases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipAddressVariable = undefined;
      this._macAddress = undefined;
      this._macAddressVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipAddressVariable = value.ipAddressVariable;
      this._macAddress = value.macAddress;
      this._macAddressVariable = value.macAddressVariable;
    }
  }

  // ip_address - computed: false, optional: true, required: false
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

  // ip_address_variable - computed: false, optional: true, required: false
  private _ipAddressVariable?: string; 
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }
  public set ipAddressVariable(value: string) {
    this._ipAddressVariable = value;
  }
  public resetIpAddressVariable() {
    this._ipAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressVariableInput() {
    return this._ipAddressVariable;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // mac_address_variable - computed: false, optional: true, required: false
  private _macAddressVariable?: string; 
  public get macAddressVariable() {
    return this.getStringAttribute('mac_address_variable');
  }
  public set macAddressVariable(value: string) {
    this._macAddressVariable = value;
  }
  public resetMacAddressVariable() {
    this._macAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressVariableInput() {
    return this._macAddressVariable;
  }
}

export class ServiceDhcpServerFeatureStaticLeasesList extends cdktf.ComplexList {
  public internalValue? : ServiceDhcpServerFeatureStaticLeases[] | cdktf.IResolvable

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
  public get(index: number): ServiceDhcpServerFeatureStaticLeasesOutputReference {
    return new ServiceDhcpServerFeatureStaticLeasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature sdwan_service_dhcp_server_feature}
*/
export class ServiceDhcpServerFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_dhcp_server_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceDhcpServerFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceDhcpServerFeature to import
  * @param importFromId The id of the existing ServiceDhcpServerFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceDhcpServerFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_dhcp_server_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_dhcp_server_feature sdwan_service_dhcp_server_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDhcpServerFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDhcpServerFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_dhcp_server_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultGateway = config.defaultGateway;
    this._defaultGatewayVariable = config.defaultGatewayVariable;
    this._description = config.description;
    this._dnsServers = config.dnsServers;
    this._dnsServersVariable = config.dnsServersVariable;
    this._domainName = config.domainName;
    this._domainNameVariable = config.domainNameVariable;
    this._exclude = config.exclude;
    this._excludeVariable = config.excludeVariable;
    this._featureProfileId = config.featureProfileId;
    this._interfaceMtu = config.interfaceMtu;
    this._interfaceMtuVariable = config.interfaceMtuVariable;
    this._leaseTime = config.leaseTime;
    this._leaseTimeVariable = config.leaseTimeVariable;
    this._name = config.name;
    this._networkAddress = config.networkAddress;
    this._networkAddressVariable = config.networkAddressVariable;
    this._optionCodes.internalValue = config.optionCodes;
    this._staticLeases.internalValue = config.staticLeases;
    this._subnetMask = config.subnetMask;
    this._subnetMaskVariable = config.subnetMaskVariable;
    this._tftpServers = config.tftpServers;
    this._tftpServersVariable = config.tftpServersVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // default_gateway_variable - computed: false, optional: true, required: false
  private _defaultGatewayVariable?: string; 
  public get defaultGatewayVariable() {
    return this.getStringAttribute('default_gateway_variable');
  }
  public set defaultGatewayVariable(value: string) {
    this._defaultGatewayVariable = value;
  }
  public resetDefaultGatewayVariable() {
    this._defaultGatewayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayVariableInput() {
    return this._defaultGatewayVariable;
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

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_servers'));
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // dns_servers_variable - computed: false, optional: true, required: false
  private _dnsServersVariable?: string; 
  public get dnsServersVariable() {
    return this.getStringAttribute('dns_servers_variable');
  }
  public set dnsServersVariable(value: string) {
    this._dnsServersVariable = value;
  }
  public resetDnsServersVariable() {
    this._dnsServersVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersVariableInput() {
    return this._dnsServersVariable;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_name_variable - computed: false, optional: true, required: false
  private _domainNameVariable?: string; 
  public get domainNameVariable() {
    return this.getStringAttribute('domain_name_variable');
  }
  public set domainNameVariable(value: string) {
    this._domainNameVariable = value;
  }
  public resetDomainNameVariable() {
    this._domainNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameVariableInput() {
    return this._domainNameVariable;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // exclude_variable - computed: false, optional: true, required: false
  private _excludeVariable?: string; 
  public get excludeVariable() {
    return this.getStringAttribute('exclude_variable');
  }
  public set excludeVariable(value: string) {
    this._excludeVariable = value;
  }
  public resetExcludeVariable() {
    this._excludeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVariableInput() {
    return this._excludeVariable;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_mtu - computed: false, optional: true, required: false
  private _interfaceMtu?: number; 
  public get interfaceMtu() {
    return this.getNumberAttribute('interface_mtu');
  }
  public set interfaceMtu(value: number) {
    this._interfaceMtu = value;
  }
  public resetInterfaceMtu() {
    this._interfaceMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceMtuInput() {
    return this._interfaceMtu;
  }

  // interface_mtu_variable - computed: false, optional: true, required: false
  private _interfaceMtuVariable?: string; 
  public get interfaceMtuVariable() {
    return this.getStringAttribute('interface_mtu_variable');
  }
  public set interfaceMtuVariable(value: string) {
    this._interfaceMtuVariable = value;
  }
  public resetInterfaceMtuVariable() {
    this._interfaceMtuVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceMtuVariableInput() {
    return this._interfaceMtuVariable;
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

  // lease_time_variable - computed: false, optional: true, required: false
  private _leaseTimeVariable?: string; 
  public get leaseTimeVariable() {
    return this.getStringAttribute('lease_time_variable');
  }
  public set leaseTimeVariable(value: string) {
    this._leaseTimeVariable = value;
  }
  public resetLeaseTimeVariable() {
    this._leaseTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeVariableInput() {
    return this._leaseTimeVariable;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_address - computed: false, optional: true, required: false
  private _networkAddress?: string; 
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }
  public set networkAddress(value: string) {
    this._networkAddress = value;
  }
  public resetNetworkAddress() {
    this._networkAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress;
  }

  // network_address_variable - computed: false, optional: true, required: false
  private _networkAddressVariable?: string; 
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }
  public set networkAddressVariable(value: string) {
    this._networkAddressVariable = value;
  }
  public resetNetworkAddressVariable() {
    this._networkAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressVariableInput() {
    return this._networkAddressVariable;
  }

  // option_codes - computed: false, optional: true, required: false
  private _optionCodes = new ServiceDhcpServerFeatureOptionCodesList(this, "option_codes", false);
  public get optionCodes() {
    return this._optionCodes;
  }
  public putOptionCodes(value: ServiceDhcpServerFeatureOptionCodes[] | cdktf.IResolvable) {
    this._optionCodes.internalValue = value;
  }
  public resetOptionCodes() {
    this._optionCodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionCodesInput() {
    return this._optionCodes.internalValue;
  }

  // static_leases - computed: false, optional: true, required: false
  private _staticLeases = new ServiceDhcpServerFeatureStaticLeasesList(this, "static_leases", false);
  public get staticLeases() {
    return this._staticLeases;
  }
  public putStaticLeases(value: ServiceDhcpServerFeatureStaticLeases[] | cdktf.IResolvable) {
    this._staticLeases.internalValue = value;
  }
  public resetStaticLeases() {
    this._staticLeases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticLeasesInput() {
    return this._staticLeases.internalValue;
  }

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // subnet_mask_variable - computed: false, optional: true, required: false
  private _subnetMaskVariable?: string; 
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
  public set subnetMaskVariable(value: string) {
    this._subnetMaskVariable = value;
  }
  public resetSubnetMaskVariable() {
    this._subnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskVariableInput() {
    return this._subnetMaskVariable;
  }

  // tftp_servers - computed: false, optional: true, required: false
  private _tftpServers?: string[]; 
  public get tftpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('tftp_servers'));
  }
  public set tftpServers(value: string[]) {
    this._tftpServers = value;
  }
  public resetTftpServers() {
    this._tftpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpServersInput() {
    return this._tftpServers;
  }

  // tftp_servers_variable - computed: false, optional: true, required: false
  private _tftpServersVariable?: string; 
  public get tftpServersVariable() {
    return this.getStringAttribute('tftp_servers_variable');
  }
  public set tftpServersVariable(value: string) {
    this._tftpServersVariable = value;
  }
  public resetTftpServersVariable() {
    this._tftpServersVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpServersVariableInput() {
    return this._tftpServersVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      default_gateway_variable: cdktf.stringToTerraform(this._defaultGatewayVariable),
      description: cdktf.stringToTerraform(this._description),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      dns_servers_variable: cdktf.stringToTerraform(this._dnsServersVariable),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_name_variable: cdktf.stringToTerraform(this._domainNameVariable),
      exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exclude),
      exclude_variable: cdktf.stringToTerraform(this._excludeVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      interface_mtu: cdktf.numberToTerraform(this._interfaceMtu),
      interface_mtu_variable: cdktf.stringToTerraform(this._interfaceMtuVariable),
      lease_time: cdktf.numberToTerraform(this._leaseTime),
      lease_time_variable: cdktf.stringToTerraform(this._leaseTimeVariable),
      name: cdktf.stringToTerraform(this._name),
      network_address: cdktf.stringToTerraform(this._networkAddress),
      network_address_variable: cdktf.stringToTerraform(this._networkAddressVariable),
      option_codes: cdktf.listMapper(serviceDhcpServerFeatureOptionCodesToTerraform, false)(this._optionCodes.internalValue),
      static_leases: cdktf.listMapper(serviceDhcpServerFeatureStaticLeasesToTerraform, false)(this._staticLeases.internalValue),
      subnet_mask: cdktf.stringToTerraform(this._subnetMask),
      subnet_mask_variable: cdktf.stringToTerraform(this._subnetMaskVariable),
      tftp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tftpServers),
      tftp_servers_variable: cdktf.stringToTerraform(this._tftpServersVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gateway_variable: {
        value: cdktf.stringToHclTerraform(this._defaultGatewayVariable),
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
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_servers_variable: {
        value: cdktf.stringToHclTerraform(this._dnsServersVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name_variable: {
        value: cdktf.stringToHclTerraform(this._domainNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      exclude_variable: {
        value: cdktf.stringToHclTerraform(this._excludeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_mtu: {
        value: cdktf.numberToHclTerraform(this._interfaceMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_mtu_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceMtuVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease_time: {
        value: cdktf.numberToHclTerraform(this._leaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lease_time_variable: {
        value: cdktf.stringToHclTerraform(this._leaseTimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_address: {
        value: cdktf.stringToHclTerraform(this._networkAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_address_variable: {
        value: cdktf.stringToHclTerraform(this._networkAddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option_codes: {
        value: cdktf.listMapperHcl(serviceDhcpServerFeatureOptionCodesToHclTerraform, false)(this._optionCodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceDhcpServerFeatureOptionCodesList",
      },
      static_leases: {
        value: cdktf.listMapperHcl(serviceDhcpServerFeatureStaticLeasesToHclTerraform, false)(this._staticLeases.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceDhcpServerFeatureStaticLeasesList",
      },
      subnet_mask: {
        value: cdktf.stringToHclTerraform(this._subnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_mask_variable: {
        value: cdktf.stringToHclTerraform(this._subnetMaskVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tftp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tftpServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tftp_servers_variable: {
        value: cdktf.stringToHclTerraform(this._tftpServersVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
