// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/vpn_tunnel_termination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnTunnelTerminationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Exactly one of `virtual_machine_interface_id` or `device_interface_id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/vpn_tunnel_termination#device_interface_id VpnTunnelTermination#device_interface_id}
  */
  readonly deviceInterfaceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/vpn_tunnel_termination#id VpnTunnelTermination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/vpn_tunnel_termination#outside_ip_address_id VpnTunnelTermination#outside_ip_address_id}
  */
  readonly outsideIpAddressId?: number;
  /**
  * Valid values are `peer`, `hub` and `spoke`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/vpn_tunnel_termination#role VpnTunnelTermination#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/vpn_tunnel_termination#tags VpnTunnelTermination#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/vpn_tunnel_termination#tunnel_id VpnTunnelTermination#tunnel_id}
  */
  readonly tunnelId: number;
  /**
  * Exactly one of `virtual_machine_interface_id` or `device_interface_id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/vpn_tunnel_termination#virtual_machine_interface_id VpnTunnelTermination#virtual_machine_interface_id}
  */
  readonly virtualMachineInterfaceId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/vpn_tunnel_termination netbox_vpn_tunnel_termination}
*/
export class VpnTunnelTermination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_vpn_tunnel_termination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnTunnelTermination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnTunnelTermination to import
  * @param importFromId The id of the existing VpnTunnelTermination that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/vpn_tunnel_termination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnTunnelTermination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_vpn_tunnel_termination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/vpn_tunnel_termination netbox_vpn_tunnel_termination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnTunnelTerminationConfig
  */
  public constructor(scope: Construct, id: string, config: VpnTunnelTerminationConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_vpn_tunnel_termination',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceInterfaceId = config.deviceInterfaceId;
    this._id = config.id;
    this._outsideIpAddressId = config.outsideIpAddressId;
    this._role = config.role;
    this._tags = config.tags;
    this._tunnelId = config.tunnelId;
    this._virtualMachineInterfaceId = config.virtualMachineInterfaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_interface_id - computed: false, optional: true, required: false
  private _deviceInterfaceId?: number; 
  public get deviceInterfaceId() {
    return this.getNumberAttribute('device_interface_id');
  }
  public set deviceInterfaceId(value: number) {
    this._deviceInterfaceId = value;
  }
  public resetDeviceInterfaceId() {
    this._deviceInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInterfaceIdInput() {
    return this._deviceInterfaceId;
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

  // outside_ip_address_id - computed: false, optional: true, required: false
  private _outsideIpAddressId?: number; 
  public get outsideIpAddressId() {
    return this.getNumberAttribute('outside_ip_address_id');
  }
  public set outsideIpAddressId(value: number) {
    this._outsideIpAddressId = value;
  }
  public resetOutsideIpAddressId() {
    this._outsideIpAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideIpAddressIdInput() {
    return this._outsideIpAddressId;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  public get tagsAll() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_all'));
  }

  // tunnel_id - computed: false, optional: false, required: true
  private _tunnelId?: number; 
  public get tunnelId() {
    return this.getNumberAttribute('tunnel_id');
  }
  public set tunnelId(value: number) {
    this._tunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
  }

  // virtual_machine_interface_id - computed: false, optional: true, required: false
  private _virtualMachineInterfaceId?: number; 
  public get virtualMachineInterfaceId() {
    return this.getNumberAttribute('virtual_machine_interface_id');
  }
  public set virtualMachineInterfaceId(value: number) {
    this._virtualMachineInterfaceId = value;
  }
  public resetVirtualMachineInterfaceId() {
    this._virtualMachineInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInterfaceIdInput() {
    return this._virtualMachineInterfaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_interface_id: cdktf.numberToTerraform(this._deviceInterfaceId),
      id: cdktf.stringToTerraform(this._id),
      outside_ip_address_id: cdktf.numberToTerraform(this._outsideIpAddressId),
      role: cdktf.stringToTerraform(this._role),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tunnel_id: cdktf.numberToTerraform(this._tunnelId),
      virtual_machine_interface_id: cdktf.numberToTerraform(this._virtualMachineInterfaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_interface_id: {
        value: cdktf.numberToHclTerraform(this._deviceInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outside_ip_address_id: {
        value: cdktf.numberToHclTerraform(this._outsideIpAddressId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel_id: {
        value: cdktf.numberToHclTerraform(this._tunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_machine_interface_id: {
        value: cdktf.numberToHclTerraform(this._virtualMachineInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
