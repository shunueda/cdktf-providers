// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentSdnSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A CIDR network address, for example 10.0.0.0/8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet#cidr VirtualEnvironmentSdnSubnet#cidr}
  */
  readonly cidr: string;
  /**
  * The DNS server used for DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet#dhcp_dns_server VirtualEnvironmentSdnSubnet#dhcp_dns_server}
  */
  readonly dhcpDnsServer?: string;
  /**
  * DHCP range (start and end IPs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet#dhcp_range VirtualEnvironmentSdnSubnet#dhcp_range}
  */
  readonly dhcpRange?: VirtualEnvironmentSdnSubnetDhcpRange;
  /**
  * Prefix used for DNS zone delegation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet#dns_zone_prefix VirtualEnvironmentSdnSubnet#dns_zone_prefix}
  */
  readonly dnsZonePrefix?: string;
  /**
  * The gateway address for the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet#gateway VirtualEnvironmentSdnSubnet#gateway}
  */
  readonly gateway?: string;
  /**
  * Whether SNAT is enabled for the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet#snat VirtualEnvironmentSdnSubnet#snat}
  */
  readonly snat?: boolean | cdktf.IResolvable;
  /**
  * The VNet to which this subnet belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet#vnet VirtualEnvironmentSdnSubnet#vnet}
  */
  readonly vnet: string;
}
export interface VirtualEnvironmentSdnSubnetDhcpRange {
  /**
  * End of the DHCP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet#end_address VirtualEnvironmentSdnSubnet#end_address}
  */
  readonly endAddress: string;
  /**
  * Start of the DHCP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet#start_address VirtualEnvironmentSdnSubnet#start_address}
  */
  readonly startAddress: string;
}

export function virtualEnvironmentSdnSubnetDhcpRangeToTerraform(struct?: VirtualEnvironmentSdnSubnetDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function virtualEnvironmentSdnSubnetDhcpRangeToHclTerraform(struct?: VirtualEnvironmentSdnSubnetDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_address: {
      value: cdktf.stringToHclTerraform(struct!.endAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentSdnSubnetDhcpRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentSdnSubnetDhcpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentSdnSubnetDhcpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endAddress = undefined;
      this._startAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endAddress = value.endAddress;
      this._startAddress = value.startAddress;
    }
  }

  // end_address - computed: false, optional: false, required: true
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // start_address - computed: false, optional: false, required: true
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet proxmox_virtual_environment_sdn_subnet}
*/
export class VirtualEnvironmentSdnSubnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_sdn_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentSdnSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentSdnSubnet to import
  * @param importFromId The id of the existing VirtualEnvironmentSdnSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentSdnSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_sdn_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_subnet proxmox_virtual_environment_sdn_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentSdnSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentSdnSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_sdn_subnet',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidr = config.cidr;
    this._dhcpDnsServer = config.dhcpDnsServer;
    this._dhcpRange.internalValue = config.dhcpRange;
    this._dnsZonePrefix = config.dnsZonePrefix;
    this._gateway = config.gateway;
    this._snat = config.snat;
    this._vnet = config.vnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // dhcp_dns_server - computed: false, optional: true, required: false
  private _dhcpDnsServer?: string; 
  public get dhcpDnsServer() {
    return this.getStringAttribute('dhcp_dns_server');
  }
  public set dhcpDnsServer(value: string) {
    this._dhcpDnsServer = value;
  }
  public resetDhcpDnsServer() {
    this._dhcpDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpDnsServerInput() {
    return this._dhcpDnsServer;
  }

  // dhcp_range - computed: false, optional: true, required: false
  private _dhcpRange = new VirtualEnvironmentSdnSubnetDhcpRangeOutputReference(this, "dhcp_range");
  public get dhcpRange() {
    return this._dhcpRange;
  }
  public putDhcpRange(value: VirtualEnvironmentSdnSubnetDhcpRange) {
    this._dhcpRange.internalValue = value;
  }
  public resetDhcpRange() {
    this._dhcpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangeInput() {
    return this._dhcpRange.internalValue;
  }

  // dns_zone_prefix - computed: false, optional: true, required: false
  private _dnsZonePrefix?: string; 
  public get dnsZonePrefix() {
    return this.getStringAttribute('dns_zone_prefix');
  }
  public set dnsZonePrefix(value: string) {
    this._dnsZonePrefix = value;
  }
  public resetDnsZonePrefix() {
    this._dnsZonePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZonePrefixInput() {
    return this._dnsZonePrefix;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // snat - computed: false, optional: true, required: false
  private _snat?: boolean | cdktf.IResolvable; 
  public get snat() {
    return this.getBooleanAttribute('snat');
  }
  public set snat(value: boolean | cdktf.IResolvable) {
    this._snat = value;
  }
  public resetSnat() {
    this._snat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatInput() {
    return this._snat;
  }

  // vnet - computed: false, optional: false, required: true
  private _vnet?: string; 
  public get vnet() {
    return this.getStringAttribute('vnet');
  }
  public set vnet(value: string) {
    this._vnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetInput() {
    return this._vnet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      dhcp_dns_server: cdktf.stringToTerraform(this._dhcpDnsServer),
      dhcp_range: virtualEnvironmentSdnSubnetDhcpRangeToTerraform(this._dhcpRange.internalValue),
      dns_zone_prefix: cdktf.stringToTerraform(this._dnsZonePrefix),
      gateway: cdktf.stringToTerraform(this._gateway),
      snat: cdktf.booleanToTerraform(this._snat),
      vnet: cdktf.stringToTerraform(this._vnet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_dns_server: {
        value: cdktf.stringToHclTerraform(this._dhcpDnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_range: {
        value: virtualEnvironmentSdnSubnetDhcpRangeToHclTerraform(this._dhcpRange.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentSdnSubnetDhcpRange",
      },
      dns_zone_prefix: {
        value: cdktf.stringToHclTerraform(this._dnsZonePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat: {
        value: cdktf.booleanToHclTerraform(this._snat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vnet: {
        value: cdktf.stringToHclTerraform(this._vnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
