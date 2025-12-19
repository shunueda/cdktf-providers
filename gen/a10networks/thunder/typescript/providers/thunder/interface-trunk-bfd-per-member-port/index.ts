// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_bfd_per_member_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceTrunkBfdPerMemberPortAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_bfd_per_member_port#id InterfaceTrunkBfdPerMemberPortA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifnum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_bfd_per_member_port#ifnum InterfaceTrunkBfdPerMemberPortA#ifnum}
  */
  readonly ifnum: string;
  /**
  * IPv6 local-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_bfd_per_member_port#ipv6_local InterfaceTrunkBfdPerMemberPortA#ipv6_local}
  */
  readonly ipv6Local?: string;
  /**
  * IPv6 neighbor-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_bfd_per_member_port#ipv6_nbr InterfaceTrunkBfdPerMemberPortA#ipv6_nbr}
  */
  readonly ipv6Nbr?: string;
  /**
  * IPv4 local-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_bfd_per_member_port#local_address InterfaceTrunkBfdPerMemberPortA#local_address}
  */
  readonly localAddress?: string;
  /**
  * IPv4 neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_bfd_per_member_port#neighbor_address InterfaceTrunkBfdPerMemberPortA#neighbor_address}
  */
  readonly neighborAddress?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_bfd_per_member_port#uuid InterfaceTrunkBfdPerMemberPortA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_bfd_per_member_port thunder_interface_trunk_bfd_per_member_port}
*/
export class InterfaceTrunkBfdPerMemberPortA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_trunk_bfd_per_member_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceTrunkBfdPerMemberPortA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceTrunkBfdPerMemberPortA to import
  * @param importFromId The id of the existing InterfaceTrunkBfdPerMemberPortA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_bfd_per_member_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceTrunkBfdPerMemberPortA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_trunk_bfd_per_member_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_bfd_per_member_port thunder_interface_trunk_bfd_per_member_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceTrunkBfdPerMemberPortAConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceTrunkBfdPerMemberPortAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_trunk_bfd_per_member_port',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._ipv6Local = config.ipv6Local;
    this._ipv6Nbr = config.ipv6Nbr;
    this._localAddress = config.localAddress;
    this._neighborAddress = config.neighborAddress;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: string; 
  public get ifnum() {
    return this.getStringAttribute('ifnum');
  }
  public set ifnum(value: string) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // ipv6_local - computed: false, optional: true, required: false
  private _ipv6Local?: string; 
  public get ipv6Local() {
    return this.getStringAttribute('ipv6_local');
  }
  public set ipv6Local(value: string) {
    this._ipv6Local = value;
  }
  public resetIpv6Local() {
    this._ipv6Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LocalInput() {
    return this._ipv6Local;
  }

  // ipv6_nbr - computed: false, optional: true, required: false
  private _ipv6Nbr?: string; 
  public get ipv6Nbr() {
    return this.getStringAttribute('ipv6_nbr');
  }
  public set ipv6Nbr(value: string) {
    this._ipv6Nbr = value;
  }
  public resetIpv6Nbr() {
    this._ipv6Nbr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NbrInput() {
    return this._ipv6Nbr;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
  }

  // neighbor_address - computed: false, optional: true, required: false
  private _neighborAddress?: string; 
  public get neighborAddress() {
    return this.getStringAttribute('neighbor_address');
  }
  public set neighborAddress(value: string) {
    this._neighborAddress = value;
  }
  public resetNeighborAddress() {
    this._neighborAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAddressInput() {
    return this._neighborAddress;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      ipv6_local: cdktf.stringToTerraform(this._ipv6Local),
      ipv6_nbr: cdktf.stringToTerraform(this._ipv6Nbr),
      local_address: cdktf.stringToTerraform(this._localAddress),
      neighbor_address: cdktf.stringToTerraform(this._neighborAddress),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ifnum: {
        value: cdktf.stringToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_local: {
        value: cdktf.stringToHclTerraform(this._ipv6Local),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_nbr: {
        value: cdktf.stringToHclTerraform(this._ipv6Nbr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_address: {
        value: cdktf.stringToHclTerraform(this._localAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_address: {
        value: cdktf.stringToHclTerraform(this._neighborAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
