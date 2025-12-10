// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DHCP server(s) for this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool#address_space_dhcp_servers IpPool#address_space_dhcp_servers}
  */
  readonly addressSpaceDhcpServers?: string[];
  /**
  * The DNS server(s) for this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool#address_space_dns_servers IpPool#address_space_dns_servers}
  */
  readonly addressSpaceDnsServers?: string[];
  /**
  * The gateway IP address for this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool#address_space_gateway IpPool#address_space_gateway}
  */
  readonly addressSpaceGateway?: string;
  /**
  * The network mask component, as a decimal, for the CIDR notation of this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool#address_space_prefix_length IpPool#address_space_prefix_length}
  */
  readonly addressSpacePrefixLength: number;
  /**
  * The IP address component of the CIDR notation for this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool#address_space_subnet IpPool#address_space_subnet}
  */
  readonly addressSpaceSubnet: string;
  /**
  * The name for this global IP pool. Only letters, numbers, '-', '_', '.', and '/' are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool#name IpPool#name}
  */
  readonly name: string;
  /**
  * The type of the global IP pool. Once created, this cannot be changed.
  *   - Choices: `Generic`, `Tunnel`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool#pool_type IpPool#pool_type}
  */
  readonly poolType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool catalystcenter_ip_pool}
*/
export class IpPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_ip_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpPool to import
  * @param importFromId The id of the existing IpPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_ip_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool catalystcenter_ip_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpPoolConfig
  */
  public constructor(scope: Construct, id: string, config: IpPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_ip_pool',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressSpaceDhcpServers = config.addressSpaceDhcpServers;
    this._addressSpaceDnsServers = config.addressSpaceDnsServers;
    this._addressSpaceGateway = config.addressSpaceGateway;
    this._addressSpacePrefixLength = config.addressSpacePrefixLength;
    this._addressSpaceSubnet = config.addressSpaceSubnet;
    this._name = config.name;
    this._poolType = config.poolType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_space_dhcp_servers - computed: false, optional: true, required: false
  private _addressSpaceDhcpServers?: string[]; 
  public get addressSpaceDhcpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('address_space_dhcp_servers'));
  }
  public set addressSpaceDhcpServers(value: string[]) {
    this._addressSpaceDhcpServers = value;
  }
  public resetAddressSpaceDhcpServers() {
    this._addressSpaceDhcpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceDhcpServersInput() {
    return this._addressSpaceDhcpServers;
  }

  // address_space_dns_servers - computed: false, optional: true, required: false
  private _addressSpaceDnsServers?: string[]; 
  public get addressSpaceDnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('address_space_dns_servers'));
  }
  public set addressSpaceDnsServers(value: string[]) {
    this._addressSpaceDnsServers = value;
  }
  public resetAddressSpaceDnsServers() {
    this._addressSpaceDnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceDnsServersInput() {
    return this._addressSpaceDnsServers;
  }

  // address_space_gateway - computed: false, optional: true, required: false
  private _addressSpaceGateway?: string; 
  public get addressSpaceGateway() {
    return this.getStringAttribute('address_space_gateway');
  }
  public set addressSpaceGateway(value: string) {
    this._addressSpaceGateway = value;
  }
  public resetAddressSpaceGateway() {
    this._addressSpaceGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceGatewayInput() {
    return this._addressSpaceGateway;
  }

  // address_space_prefix_length - computed: false, optional: false, required: true
  private _addressSpacePrefixLength?: number; 
  public get addressSpacePrefixLength() {
    return this.getNumberAttribute('address_space_prefix_length');
  }
  public set addressSpacePrefixLength(value: number) {
    this._addressSpacePrefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpacePrefixLengthInput() {
    return this._addressSpacePrefixLength;
  }

  // address_space_subnet - computed: false, optional: false, required: true
  private _addressSpaceSubnet?: string; 
  public get addressSpaceSubnet() {
    return this.getStringAttribute('address_space_subnet');
  }
  public set addressSpaceSubnet(value: string) {
    this._addressSpaceSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceSubnetInput() {
    return this._addressSpaceSubnet;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // pool_type - computed: false, optional: false, required: true
  private _poolType?: string; 
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }
  public set poolType(value: string) {
    this._poolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTypeInput() {
    return this._poolType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_space_dhcp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addressSpaceDhcpServers),
      address_space_dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addressSpaceDnsServers),
      address_space_gateway: cdktf.stringToTerraform(this._addressSpaceGateway),
      address_space_prefix_length: cdktf.numberToTerraform(this._addressSpacePrefixLength),
      address_space_subnet: cdktf.stringToTerraform(this._addressSpaceSubnet),
      name: cdktf.stringToTerraform(this._name),
      pool_type: cdktf.stringToTerraform(this._poolType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_space_dhcp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addressSpaceDhcpServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      address_space_dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addressSpaceDnsServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      address_space_gateway: {
        value: cdktf.stringToHclTerraform(this._addressSpaceGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_space_prefix_length: {
        value: cdktf.numberToHclTerraform(this._addressSpacePrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      address_space_subnet: {
        value: cdktf.stringToHclTerraform(this._addressSpaceSubnet),
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
      pool_type: {
        value: cdktf.stringToHclTerraform(this._poolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
