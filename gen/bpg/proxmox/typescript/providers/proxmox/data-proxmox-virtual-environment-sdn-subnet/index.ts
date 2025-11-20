// https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_sdn_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentSdnSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A CIDR network address, for example 10.0.0.0/8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_sdn_subnet#cidr DataProxmoxVirtualEnvironmentSdnSubnet#cidr}
  */
  readonly cidr: string;
  /**
  * DHCP range (start and end IPs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_sdn_subnet#dhcp_range DataProxmoxVirtualEnvironmentSdnSubnet#dhcp_range}
  */
  readonly dhcpRange?: DataProxmoxVirtualEnvironmentSdnSubnetDhcpRange;
  /**
  * The VNet this subnet belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_sdn_subnet#vnet DataProxmoxVirtualEnvironmentSdnSubnet#vnet}
  */
  readonly vnet: string;
}
export interface DataProxmoxVirtualEnvironmentSdnSubnetDhcpRange {
}

export function dataProxmoxVirtualEnvironmentSdnSubnetDhcpRangeToTerraform(struct?: DataProxmoxVirtualEnvironmentSdnSubnetDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProxmoxVirtualEnvironmentSdnSubnetDhcpRangeToHclTerraform(struct?: DataProxmoxVirtualEnvironmentSdnSubnetDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProxmoxVirtualEnvironmentSdnSubnetDhcpRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualEnvironmentSdnSubnetDhcpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentSdnSubnetDhcpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // end_address - computed: true, optional: false, required: false
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }

  // start_address - computed: true, optional: false, required: false
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_sdn_subnet proxmox_virtual_environment_sdn_subnet}
*/
export class DataProxmoxVirtualEnvironmentSdnSubnet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_sdn_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentSdnSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentSdnSubnet to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentSdnSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_sdn_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentSdnSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_sdn_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_sdn_subnet proxmox_virtual_environment_sdn_subnet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentSdnSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentSdnSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_sdn_subnet',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.87.0',
        providerVersionConstraint: '0.87.0'
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
    this._dhcpRange.internalValue = config.dhcpRange;
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

  // dhcp_dns_server - computed: true, optional: false, required: false
  public get dhcpDnsServer() {
    return this.getStringAttribute('dhcp_dns_server');
  }

  // dhcp_range - computed: true, optional: true, required: false
  private _dhcpRange = new DataProxmoxVirtualEnvironmentSdnSubnetDhcpRangeOutputReference(this, "dhcp_range");
  public get dhcpRange() {
    return this._dhcpRange;
  }
  public putDhcpRange(value: DataProxmoxVirtualEnvironmentSdnSubnetDhcpRange) {
    this._dhcpRange.internalValue = value;
  }
  public resetDhcpRange() {
    this._dhcpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangeInput() {
    return this._dhcpRange.internalValue;
  }

  // dns_zone_prefix - computed: true, optional: false, required: false
  public get dnsZonePrefix() {
    return this.getStringAttribute('dns_zone_prefix');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // snat - computed: true, optional: false, required: false
  public get snat() {
    return this.getBooleanAttribute('snat');
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
      dhcp_range: dataProxmoxVirtualEnvironmentSdnSubnetDhcpRangeToTerraform(this._dhcpRange.internalValue),
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
      dhcp_range: {
        value: dataProxmoxVirtualEnvironmentSdnSubnetDhcpRangeToHclTerraform(this._dhcpRange.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProxmoxVirtualEnvironmentSdnSubnetDhcpRange",
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
