// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtNetworkDhcpBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Binding type 'IPV4' or 'IPV6'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#binding_type NsxtNetworkDhcpBinding#binding_type}
  */
  readonly bindingType: string;
  /**
  * Description of DHCP binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#description NsxtNetworkDhcpBinding#description}
  */
  readonly description?: string;
  /**
  * The DNS server IPs to be assigned . 2 values maximum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#dns_servers NsxtNetworkDhcpBinding#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#id NsxtNetworkDhcpBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address of the DHCP binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#ip_address NsxtNetworkDhcpBinding#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Lease time in seconds. Minimum value is 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#lease_time NsxtNetworkDhcpBinding#lease_time}
  */
  readonly leaseTime: number;
  /**
  * MAC address of the DHCP binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#mac_address NsxtNetworkDhcpBinding#mac_address}
  */
  readonly macAddress: string;
  /**
  * Name of DHCP binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#name NsxtNetworkDhcpBinding#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#org NsxtNetworkDhcpBinding#org}
  */
  readonly org?: string;
  /**
  * Parent Org VDC network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#org_network_id NsxtNetworkDhcpBinding#org_network_id}
  */
  readonly orgNetworkId: string;
  /**
  * dhcp_v4_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#dhcp_v4_config NsxtNetworkDhcpBinding#dhcp_v4_config}
  */
  readonly dhcpV4Config?: NsxtNetworkDhcpBindingDhcpV4Config;
  /**
  * dhcp_v6_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#dhcp_v6_config NsxtNetworkDhcpBinding#dhcp_v6_config}
  */
  readonly dhcpV6Config?: NsxtNetworkDhcpBindingDhcpV6Config;
}
export interface NsxtNetworkDhcpBindingDhcpV4Config {
  /**
  * IPv4 gateway address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#gateway_ip_address NsxtNetworkDhcpBinding#gateway_ip_address}
  */
  readonly gatewayIpAddress?: string;
  /**
  * Hostname for the DHCP client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#hostname NsxtNetworkDhcpBinding#hostname}
  */
  readonly hostname?: string;
}

export function nsxtNetworkDhcpBindingDhcpV4ConfigToTerraform(struct?: NsxtNetworkDhcpBindingDhcpV4ConfigOutputReference | NsxtNetworkDhcpBindingDhcpV4Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_ip_address: cdktf.stringToTerraform(struct!.gatewayIpAddress),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function nsxtNetworkDhcpBindingDhcpV4ConfigToHclTerraform(struct?: NsxtNetworkDhcpBindingDhcpV4ConfigOutputReference | NsxtNetworkDhcpBindingDhcpV4Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtNetworkDhcpBindingDhcpV4ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtNetworkDhcpBindingDhcpV4Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIpAddress = this._gatewayIpAddress;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtNetworkDhcpBindingDhcpV4Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatewayIpAddress = undefined;
      this._hostname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatewayIpAddress = value.gatewayIpAddress;
      this._hostname = value.hostname;
    }
  }

  // gateway_ip_address - computed: false, optional: true, required: false
  private _gatewayIpAddress?: string; 
  public get gatewayIpAddress() {
    return this.getStringAttribute('gateway_ip_address');
  }
  public set gatewayIpAddress(value: string) {
    this._gatewayIpAddress = value;
  }
  public resetGatewayIpAddress() {
    this._gatewayIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpAddressInput() {
    return this._gatewayIpAddress;
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
}
export interface NsxtNetworkDhcpBindingDhcpV6Config {
  /**
  * Set of domain names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#domain_names NsxtNetworkDhcpBinding#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * Set of SNTP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#sntp_servers NsxtNetworkDhcpBinding#sntp_servers}
  */
  readonly sntpServers?: string[];
}

export function nsxtNetworkDhcpBindingDhcpV6ConfigToTerraform(struct?: NsxtNetworkDhcpBindingDhcpV6ConfigOutputReference | NsxtNetworkDhcpBindingDhcpV6Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNames),
    sntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sntpServers),
  }
}


export function nsxtNetworkDhcpBindingDhcpV6ConfigToHclTerraform(struct?: NsxtNetworkDhcpBindingDhcpV6ConfigOutputReference | NsxtNetworkDhcpBindingDhcpV6Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sntpServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtNetworkDhcpBindingDhcpV6ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtNetworkDhcpBindingDhcpV6Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNames = this._domainNames;
    }
    if (this._sntpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.sntpServers = this._sntpServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtNetworkDhcpBindingDhcpV6Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainNames = undefined;
      this._sntpServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainNames = value.domainNames;
      this._sntpServers = value.sntpServers;
    }
  }

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // sntp_servers - computed: false, optional: true, required: false
  private _sntpServers?: string[]; 
  public get sntpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('sntp_servers'));
  }
  public set sntpServers(value: string[]) {
    this._sntpServers = value;
  }
  public resetSntpServers() {
    this._sntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sntpServersInput() {
    return this._sntpServers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding vcd_nsxt_network_dhcp_binding}
*/
export class NsxtNetworkDhcpBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_network_dhcp_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtNetworkDhcpBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtNetworkDhcpBinding to import
  * @param importFromId The id of the existing NsxtNetworkDhcpBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtNetworkDhcpBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_network_dhcp_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_dhcp_binding vcd_nsxt_network_dhcp_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtNetworkDhcpBindingConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtNetworkDhcpBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_network_dhcp_binding',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bindingType = config.bindingType;
    this._description = config.description;
    this._dnsServers = config.dnsServers;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._leaseTime = config.leaseTime;
    this._macAddress = config.macAddress;
    this._name = config.name;
    this._org = config.org;
    this._orgNetworkId = config.orgNetworkId;
    this._dhcpV4Config.internalValue = config.dhcpV4Config;
    this._dhcpV6Config.internalValue = config.dhcpV6Config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binding_type - computed: false, optional: false, required: true
  private _bindingType?: string; 
  public get bindingType() {
    return this.getStringAttribute('binding_type');
  }
  public set bindingType(value: string) {
    this._bindingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingTypeInput() {
    return this._bindingType;
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
    return this.getListAttribute('dns_servers');
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // lease_time - computed: false, optional: false, required: true
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // mac_address - computed: false, optional: false, required: true
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // org_network_id - computed: false, optional: false, required: true
  private _orgNetworkId?: string; 
  public get orgNetworkId() {
    return this.getStringAttribute('org_network_id');
  }
  public set orgNetworkId(value: string) {
    this._orgNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNetworkIdInput() {
    return this._orgNetworkId;
  }

  // dhcp_v4_config - computed: false, optional: true, required: false
  private _dhcpV4Config = new NsxtNetworkDhcpBindingDhcpV4ConfigOutputReference(this, "dhcp_v4_config");
  public get dhcpV4Config() {
    return this._dhcpV4Config;
  }
  public putDhcpV4Config(value: NsxtNetworkDhcpBindingDhcpV4Config) {
    this._dhcpV4Config.internalValue = value;
  }
  public resetDhcpV4Config() {
    this._dhcpV4Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV4ConfigInput() {
    return this._dhcpV4Config.internalValue;
  }

  // dhcp_v6_config - computed: false, optional: true, required: false
  private _dhcpV6Config = new NsxtNetworkDhcpBindingDhcpV6ConfigOutputReference(this, "dhcp_v6_config");
  public get dhcpV6Config() {
    return this._dhcpV6Config;
  }
  public putDhcpV6Config(value: NsxtNetworkDhcpBindingDhcpV6Config) {
    this._dhcpV6Config.internalValue = value;
  }
  public resetDhcpV6Config() {
    this._dhcpV6Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV6ConfigInput() {
    return this._dhcpV6Config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binding_type: cdktf.stringToTerraform(this._bindingType),
      description: cdktf.stringToTerraform(this._description),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      lease_time: cdktf.numberToTerraform(this._leaseTime),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      org_network_id: cdktf.stringToTerraform(this._orgNetworkId),
      dhcp_v4_config: nsxtNetworkDhcpBindingDhcpV4ConfigToTerraform(this._dhcpV4Config.internalValue),
      dhcp_v6_config: nsxtNetworkDhcpBindingDhcpV6ConfigToTerraform(this._dhcpV6Config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binding_type: {
        value: cdktf.stringToHclTerraform(this._bindingType),
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
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
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
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_network_id: {
        value: cdktf.stringToHclTerraform(this._orgNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_v4_config: {
        value: nsxtNetworkDhcpBindingDhcpV4ConfigToHclTerraform(this._dhcpV4Config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtNetworkDhcpBindingDhcpV4ConfigList",
      },
      dhcp_v6_config: {
        value: nsxtNetworkDhcpBindingDhcpV6ConfigToHclTerraform(this._dhcpV6Config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtNetworkDhcpBindingDhcpV6ConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
