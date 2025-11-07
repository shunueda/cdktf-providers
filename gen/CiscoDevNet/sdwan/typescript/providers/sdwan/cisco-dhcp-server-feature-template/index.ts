// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoDhcpServerFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure IPv4 prefix range of the DHCP address pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#address_pool CiscoDhcpServerFeatureTemplate#address_pool}
  */
  readonly addressPool?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#address_pool_variable CiscoDhcpServerFeatureTemplate#address_pool_variable}
  */
  readonly addressPoolVariable?: string;
  /**
  * Set IP address of default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#default_gateway CiscoDhcpServerFeatureTemplate#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#default_gateway_variable CiscoDhcpServerFeatureTemplate#default_gateway_variable}
  */
  readonly defaultGatewayVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#description CiscoDhcpServerFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#device_types CiscoDhcpServerFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Configure one or more DNS server IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#dns_servers CiscoDhcpServerFeatureTemplate#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#dns_servers_variable CiscoDhcpServerFeatureTemplate#dns_servers_variable}
  */
  readonly dnsServersVariable?: string;
  /**
  * Set domain name client uses to resolve hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#domain_name CiscoDhcpServerFeatureTemplate#domain_name}
  */
  readonly domainName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#domain_name_variable CiscoDhcpServerFeatureTemplate#domain_name_variable}
  */
  readonly domainNameVariable?: string;
  /**
  * Configure IPv4 address to exclude from DHCP address pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#exclude_addresses CiscoDhcpServerFeatureTemplate#exclude_addresses}
  */
  readonly excludeAddresses?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#exclude_addresses_variable CiscoDhcpServerFeatureTemplate#exclude_addresses_variable}
  */
  readonly excludeAddressesVariable?: string;
  /**
  * Set MTU on interface to DHCP client
  *   - Range: `68`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#interface_mtu CiscoDhcpServerFeatureTemplate#interface_mtu}
  */
  readonly interfaceMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#interface_mtu_variable CiscoDhcpServerFeatureTemplate#interface_mtu_variable}
  */
  readonly interfaceMtuVariable?: string;
  /**
  * Configure how long a DHCP-assigned IP address is valid
  *   - Range: `60`-`31536000`
  *   - Default value: `86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#lease_time CiscoDhcpServerFeatureTemplate#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#lease_time_variable CiscoDhcpServerFeatureTemplate#lease_time_variable}
  */
  readonly leaseTimeVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#name CiscoDhcpServerFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Configure Options Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#options CiscoDhcpServerFeatureTemplate#options}
  */
  readonly options?: CiscoDhcpServerFeatureTemplateOptions[] | cdktf.IResolvable;
  /**
  * Configure static IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#static_leases CiscoDhcpServerFeatureTemplate#static_leases}
  */
  readonly staticLeases?: CiscoDhcpServerFeatureTemplateStaticLeases[] | cdktf.IResolvable;
  /**
  * Configure TFTP server IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#tftp_servers CiscoDhcpServerFeatureTemplate#tftp_servers}
  */
  readonly tftpServers?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#tftp_servers_variable CiscoDhcpServerFeatureTemplate#tftp_servers_variable}
  */
  readonly tftpServersVariable?: string;
}
export interface CiscoDhcpServerFeatureTemplateOptions {
  /**
  * Set ASCII value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#ascii CiscoDhcpServerFeatureTemplate#ascii}
  */
  readonly ascii?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#ascii_variable CiscoDhcpServerFeatureTemplate#ascii_variable}
  */
  readonly asciiVariable?: string;
  /**
  * Set HEX value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#hex CiscoDhcpServerFeatureTemplate#hex}
  */
  readonly hex?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#hex_variable CiscoDhcpServerFeatureTemplate#hex_variable}
  */
  readonly hexVariable?: string;
  /**
  * Set ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#ip_address CiscoDhcpServerFeatureTemplate#ip_address}
  */
  readonly ipAddress?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#ip_address_variable CiscoDhcpServerFeatureTemplate#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * Set Option Code
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#option_code CiscoDhcpServerFeatureTemplate#option_code}
  */
  readonly optionCode?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#option_code_variable CiscoDhcpServerFeatureTemplate#option_code_variable}
  */
  readonly optionCodeVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#optional CiscoDhcpServerFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoDhcpServerFeatureTemplateOptionsToTerraform(struct?: CiscoDhcpServerFeatureTemplateOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ascii: cdktf.stringToTerraform(struct!.ascii),
    ascii_variable: cdktf.stringToTerraform(struct!.asciiVariable),
    hex: cdktf.stringToTerraform(struct!.hex),
    hex_variable: cdktf.stringToTerraform(struct!.hexVariable),
    ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddress),
    ip_address_variable: cdktf.stringToTerraform(struct!.ipAddressVariable),
    option_code: cdktf.numberToTerraform(struct!.optionCode),
    option_code_variable: cdktf.stringToTerraform(struct!.optionCodeVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoDhcpServerFeatureTemplateOptionsToHclTerraform(struct?: CiscoDhcpServerFeatureTemplateOptions | cdktf.IResolvable): any {
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
    ip_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_code: {
      value: cdktf.numberToHclTerraform(struct!.optionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    option_code_variable: {
      value: cdktf.stringToHclTerraform(struct!.optionCodeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoDhcpServerFeatureTemplateOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoDhcpServerFeatureTemplateOptions | cdktf.IResolvable | undefined {
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
    if (this._hex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hex = this._hex;
    }
    if (this._hexVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hexVariable = this._hexVariable;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressVariable = this._ipAddressVariable;
    }
    if (this._optionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionCode = this._optionCode;
    }
    if (this._optionCodeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionCodeVariable = this._optionCodeVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoDhcpServerFeatureTemplateOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ascii = undefined;
      this._asciiVariable = undefined;
      this._hex = undefined;
      this._hexVariable = undefined;
      this._ipAddress = undefined;
      this._ipAddressVariable = undefined;
      this._optionCode = undefined;
      this._optionCodeVariable = undefined;
      this._optional = undefined;
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
      this._hex = value.hex;
      this._hexVariable = value.hexVariable;
      this._ipAddress = value.ipAddress;
      this._ipAddressVariable = value.ipAddressVariable;
      this._optionCode = value.optionCode;
      this._optionCodeVariable = value.optionCodeVariable;
      this._optional = value.optional;
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string[]; 
  public get ipAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_address'));
  }
  public set ipAddress(value: string[]) {
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

  // option_code - computed: false, optional: true, required: false
  private _optionCode?: number; 
  public get optionCode() {
    return this.getNumberAttribute('option_code');
  }
  public set optionCode(value: number) {
    this._optionCode = value;
  }
  public resetOptionCode() {
    this._optionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionCodeInput() {
    return this._optionCode;
  }

  // option_code_variable - computed: false, optional: true, required: false
  private _optionCodeVariable?: string; 
  public get optionCodeVariable() {
    return this.getStringAttribute('option_code_variable');
  }
  public set optionCodeVariable(value: string) {
    this._optionCodeVariable = value;
  }
  public resetOptionCodeVariable() {
    this._optionCodeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionCodeVariableInput() {
    return this._optionCodeVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoDhcpServerFeatureTemplateOptionsList extends cdktf.ComplexList {
  public internalValue? : CiscoDhcpServerFeatureTemplateOptions[] | cdktf.IResolvable

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
  public get(index: number): CiscoDhcpServerFeatureTemplateOptionsOutputReference {
    return new CiscoDhcpServerFeatureTemplateOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoDhcpServerFeatureTemplateStaticLeases {
  /**
  * Set client’s hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#hostname CiscoDhcpServerFeatureTemplate#hostname}
  */
  readonly hostname?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#hostname_variable CiscoDhcpServerFeatureTemplate#hostname_variable}
  */
  readonly hostnameVariable?: string;
  /**
  * Set client’s static IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#ip_address CiscoDhcpServerFeatureTemplate#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#ip_address_variable CiscoDhcpServerFeatureTemplate#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * Set MAC address of client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#mac_address CiscoDhcpServerFeatureTemplate#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#mac_address_variable CiscoDhcpServerFeatureTemplate#mac_address_variable}
  */
  readonly macAddressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#optional CiscoDhcpServerFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoDhcpServerFeatureTemplateStaticLeasesToTerraform(struct?: CiscoDhcpServerFeatureTemplateStaticLeases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    hostname_variable: cdktf.stringToTerraform(struct!.hostnameVariable),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_variable: cdktf.stringToTerraform(struct!.ipAddressVariable),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mac_address_variable: cdktf.stringToTerraform(struct!.macAddressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoDhcpServerFeatureTemplateStaticLeasesToHclTerraform(struct?: CiscoDhcpServerFeatureTemplateStaticLeases | cdktf.IResolvable): any {
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
    hostname_variable: {
      value: cdktf.stringToHclTerraform(struct!.hostnameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoDhcpServerFeatureTemplateStaticLeasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoDhcpServerFeatureTemplateStaticLeases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._hostnameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameVariable = this._hostnameVariable;
    }
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoDhcpServerFeatureTemplateStaticLeases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._hostnameVariable = undefined;
      this._ipAddress = undefined;
      this._ipAddressVariable = undefined;
      this._macAddress = undefined;
      this._macAddressVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._hostnameVariable = value.hostnameVariable;
      this._ipAddress = value.ipAddress;
      this._ipAddressVariable = value.ipAddressVariable;
      this._macAddress = value.macAddress;
      this._macAddressVariable = value.macAddressVariable;
      this._optional = value.optional;
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

  // hostname_variable - computed: false, optional: true, required: false
  private _hostnameVariable?: string; 
  public get hostnameVariable() {
    return this.getStringAttribute('hostname_variable');
  }
  public set hostnameVariable(value: string) {
    this._hostnameVariable = value;
  }
  public resetHostnameVariable() {
    this._hostnameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameVariableInput() {
    return this._hostnameVariable;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoDhcpServerFeatureTemplateStaticLeasesList extends cdktf.ComplexList {
  public internalValue? : CiscoDhcpServerFeatureTemplateStaticLeases[] | cdktf.IResolvable

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
  public get(index: number): CiscoDhcpServerFeatureTemplateStaticLeasesOutputReference {
    return new CiscoDhcpServerFeatureTemplateStaticLeasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template sdwan_cisco_dhcp_server_feature_template}
*/
export class CiscoDhcpServerFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_dhcp_server_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoDhcpServerFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoDhcpServerFeatureTemplate to import
  * @param importFromId The id of the existing CiscoDhcpServerFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoDhcpServerFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_dhcp_server_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_dhcp_server_feature_template sdwan_cisco_dhcp_server_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoDhcpServerFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoDhcpServerFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_dhcp_server_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressPool = config.addressPool;
    this._addressPoolVariable = config.addressPoolVariable;
    this._defaultGateway = config.defaultGateway;
    this._defaultGatewayVariable = config.defaultGatewayVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._dnsServers = config.dnsServers;
    this._dnsServersVariable = config.dnsServersVariable;
    this._domainName = config.domainName;
    this._domainNameVariable = config.domainNameVariable;
    this._excludeAddresses = config.excludeAddresses;
    this._excludeAddressesVariable = config.excludeAddressesVariable;
    this._interfaceMtu = config.interfaceMtu;
    this._interfaceMtuVariable = config.interfaceMtuVariable;
    this._leaseTime = config.leaseTime;
    this._leaseTimeVariable = config.leaseTimeVariable;
    this._name = config.name;
    this._options.internalValue = config.options;
    this._staticLeases.internalValue = config.staticLeases;
    this._tftpServers = config.tftpServers;
    this._tftpServersVariable = config.tftpServersVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_pool - computed: false, optional: true, required: false
  private _addressPool?: string; 
  public get addressPool() {
    return this.getStringAttribute('address_pool');
  }
  public set addressPool(value: string) {
    this._addressPool = value;
  }
  public resetAddressPool() {
    this._addressPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolInput() {
    return this._addressPool;
  }

  // address_pool_variable - computed: false, optional: true, required: false
  private _addressPoolVariable?: string; 
  public get addressPoolVariable() {
    return this.getStringAttribute('address_pool_variable');
  }
  public set addressPoolVariable(value: string) {
    this._addressPoolVariable = value;
  }
  public resetAddressPoolVariable() {
    this._addressPoolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolVariableInput() {
    return this._addressPoolVariable;
  }

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

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
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

  // exclude_addresses - computed: false, optional: true, required: false
  private _excludeAddresses?: string[]; 
  public get excludeAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_addresses'));
  }
  public set excludeAddresses(value: string[]) {
    this._excludeAddresses = value;
  }
  public resetExcludeAddresses() {
    this._excludeAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAddressesInput() {
    return this._excludeAddresses;
  }

  // exclude_addresses_variable - computed: false, optional: true, required: false
  private _excludeAddressesVariable?: string; 
  public get excludeAddressesVariable() {
    return this.getStringAttribute('exclude_addresses_variable');
  }
  public set excludeAddressesVariable(value: string) {
    this._excludeAddressesVariable = value;
  }
  public resetExcludeAddressesVariable() {
    this._excludeAddressesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAddressesVariableInput() {
    return this._excludeAddressesVariable;
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

  // options - computed: false, optional: true, required: false
  private _options = new CiscoDhcpServerFeatureTemplateOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: CiscoDhcpServerFeatureTemplateOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // static_leases - computed: false, optional: true, required: false
  private _staticLeases = new CiscoDhcpServerFeatureTemplateStaticLeasesList(this, "static_leases", false);
  public get staticLeases() {
    return this._staticLeases;
  }
  public putStaticLeases(value: CiscoDhcpServerFeatureTemplateStaticLeases[] | cdktf.IResolvable) {
    this._staticLeases.internalValue = value;
  }
  public resetStaticLeases() {
    this._staticLeases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticLeasesInput() {
    return this._staticLeases.internalValue;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
      address_pool: cdktf.stringToTerraform(this._addressPool),
      address_pool_variable: cdktf.stringToTerraform(this._addressPoolVariable),
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      default_gateway_variable: cdktf.stringToTerraform(this._defaultGatewayVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      dns_servers_variable: cdktf.stringToTerraform(this._dnsServersVariable),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_name_variable: cdktf.stringToTerraform(this._domainNameVariable),
      exclude_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeAddresses),
      exclude_addresses_variable: cdktf.stringToTerraform(this._excludeAddressesVariable),
      interface_mtu: cdktf.numberToTerraform(this._interfaceMtu),
      interface_mtu_variable: cdktf.stringToTerraform(this._interfaceMtuVariable),
      lease_time: cdktf.numberToTerraform(this._leaseTime),
      lease_time_variable: cdktf.stringToTerraform(this._leaseTimeVariable),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.listMapper(ciscoDhcpServerFeatureTemplateOptionsToTerraform, false)(this._options.internalValue),
      static_leases: cdktf.listMapper(ciscoDhcpServerFeatureTemplateStaticLeasesToTerraform, false)(this._staticLeases.internalValue),
      tftp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tftpServers),
      tftp_servers_variable: cdktf.stringToTerraform(this._tftpServersVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_pool: {
        value: cdktf.stringToHclTerraform(this._addressPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_pool_variable: {
        value: cdktf.stringToHclTerraform(this._addressPoolVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      exclude_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      exclude_addresses_variable: {
        value: cdktf.stringToHclTerraform(this._excludeAddressesVariable),
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
      options: {
        value: cdktf.listMapperHcl(ciscoDhcpServerFeatureTemplateOptionsToHclTerraform, false)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoDhcpServerFeatureTemplateOptionsList",
      },
      static_leases: {
        value: cdktf.listMapperHcl(ciscoDhcpServerFeatureTemplateStaticLeasesToHclTerraform, false)(this._staticLeases.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoDhcpServerFeatureTemplateStaticLeasesList",
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
