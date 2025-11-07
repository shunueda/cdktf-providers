// https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set parameter value>0 to allocate next available network with prefix=value from network container defined by parent_cidr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network#allocate_prefix_len Network#allocate_prefix_len}
  */
  readonly allocatePrefixLen?: number;
  /**
  * The network block in cidr format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network#cidr Network#cidr}
  */
  readonly cidr?: string;
  /**
  * gateway ip address of your network block.By default first IPv4 address is set as gateway address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network#gateway Network#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network#id Network#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of your network block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network#network_name Network#network_name}
  */
  readonly networkName?: string;
  /**
  * Network view name available in NIOS Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network#network_view_name Network#network_view_name}
  */
  readonly networkViewName?: string;
  /**
  * The parent network container block in cidr format to allocate from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network#parent_cidr Network#parent_cidr}
  */
  readonly parentCidr?: string;
  /**
  * The no of IP's you want to reserve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network#reserve_ip Network#reserve_ip}
  */
  readonly reserveIp?: number;
  /**
  * Unique identifier of your tenant in cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network#tenant_id Network#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network infoblox_network}
*/
export class Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Network to import
  * @param importFromId The id of the existing Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/network infoblox_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_network',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '1.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocatePrefixLen = config.allocatePrefixLen;
    this._cidr = config.cidr;
    this._gateway = config.gateway;
    this._id = config.id;
    this._networkName = config.networkName;
    this._networkViewName = config.networkViewName;
    this._parentCidr = config.parentCidr;
    this._reserveIp = config.reserveIp;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocate_prefix_len - computed: false, optional: true, required: false
  private _allocatePrefixLen?: number; 
  public get allocatePrefixLen() {
    return this.getNumberAttribute('allocate_prefix_len');
  }
  public set allocatePrefixLen(value: number) {
    this._allocatePrefixLen = value;
  }
  public resetAllocatePrefixLen() {
    this._allocatePrefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatePrefixLenInput() {
    return this._allocatePrefixLen;
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // gateway - computed: true, optional: true, required: false
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

  // network_name - computed: false, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // network_view_name - computed: false, optional: true, required: false
  private _networkViewName?: string; 
  public get networkViewName() {
    return this.getStringAttribute('network_view_name');
  }
  public set networkViewName(value: string) {
    this._networkViewName = value;
  }
  public resetNetworkViewName() {
    this._networkViewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewNameInput() {
    return this._networkViewName;
  }

  // parent_cidr - computed: false, optional: true, required: false
  private _parentCidr?: string; 
  public get parentCidr() {
    return this.getStringAttribute('parent_cidr');
  }
  public set parentCidr(value: string) {
    this._parentCidr = value;
  }
  public resetParentCidr() {
    this._parentCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentCidrInput() {
    return this._parentCidr;
  }

  // reserve_ip - computed: false, optional: true, required: false
  private _reserveIp?: number; 
  public get reserveIp() {
    return this.getNumberAttribute('reserve_ip');
  }
  public set reserveIp(value: number) {
    this._reserveIp = value;
  }
  public resetReserveIp() {
    this._reserveIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveIpInput() {
    return this._reserveIp;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocate_prefix_len: cdktf.numberToTerraform(this._allocatePrefixLen),
      cidr: cdktf.stringToTerraform(this._cidr),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      network_name: cdktf.stringToTerraform(this._networkName),
      network_view_name: cdktf.stringToTerraform(this._networkViewName),
      parent_cidr: cdktf.stringToTerraform(this._parentCidr),
      reserve_ip: cdktf.numberToTerraform(this._reserveIp),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocate_prefix_len: {
        value: cdktf.numberToHclTerraform(this._allocatePrefixLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_name: {
        value: cdktf.stringToHclTerraform(this._networkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_view_name: {
        value: cdktf.stringToHclTerraform(this._networkViewName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_cidr: {
        value: cdktf.stringToHclTerraform(this._parentCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserve_ip: {
        value: cdktf.numberToHclTerraform(this._reserveIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
