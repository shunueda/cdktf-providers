// https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetSwitchHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host#___path___ InterfaceEthernetSwitchHost#___path___}
  */
  readonly path?: string;
  /**
  * Whether to send a frame copy to switch CPU port from a frame with matching MAC destination address (matching destination or source address for CRS3xx series switches).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host#copy_to_cpu InterfaceEthernetSwitchHost#copy_to_cpu}
  */
  readonly copyToCpu?: boolean | cdktf.IResolvable;
  /**
  * Whether to drop a frame with matching MAC source address received on a certain port (matching destination or source address for CRS3xx series switches).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host#drop InterfaceEthernetSwitchHost#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host#id InterfaceEthernetSwitchHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Host's MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host#mac_address InterfaceEthernetSwitchHost#mac_address}
  */
  readonly macAddress: string;
  /**
  * Whether to send a frame copy to mirror-target port from a frame with matching MAC destination address (matching destination or source address for CRS3xx series switches).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host#mirror InterfaceEthernetSwitchHost#mirror}
  */
  readonly mirror?: boolean | cdktf.IResolvable;
  /**
  * Name of the interface, static MAC address can be mapped to more that one port, including switch CPU port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host#ports InterfaceEthernetSwitchHost#ports}
  */
  readonly ports: string[];
  /**
  * Whether to redirect a frame to switch CPU port from a frame with matching MAC destination address (matching destination or source address for CRS3xx series switches).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host#redirect_to_cpu InterfaceEthernetSwitchHost#redirect_to_cpu}
  */
  readonly redirectToCpu?: boolean | cdktf.IResolvable;
  /**
  * Whether the static host MAC address lookup is used with shared-VLAN-learning (SVL) or independent-VLAN-learning (IVL). The SVL mode is used for those VLAN entries that do not support IVL or IVL is disabled (independent-learning=no).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host#share_vlan_learned InterfaceEthernetSwitchHost#share_vlan_learned}
  */
  readonly shareVlanLearned?: boolean | cdktf.IResolvable;
  /**
  * Name of the switch to which the MAC address is going to be assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host#switch InterfaceEthernetSwitchHost#switch}
  */
  readonly switch: string;
  /**
  * VLAN ID for the statically added MAC address entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host#vlan_id InterfaceEthernetSwitchHost#vlan_id}
  */
  readonly vlanId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host routeros_interface_ethernet_switch_host}
*/
export class InterfaceEthernetSwitchHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_ethernet_switch_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetSwitchHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetSwitchHost to import
  * @param importFromId The id of the existing InterfaceEthernetSwitchHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetSwitchHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_ethernet_switch_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_ethernet_switch_host routeros_interface_ethernet_switch_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetSwitchHostConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetSwitchHostConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_ethernet_switch_host',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.90.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._copyToCpu = config.copyToCpu;
    this._drop = config.drop;
    this._id = config.id;
    this._macAddress = config.macAddress;
    this._mirror = config.mirror;
    this._ports = config.ports;
    this._redirectToCpu = config.redirectToCpu;
    this._shareVlanLearned = config.shareVlanLearned;
    this._switch = config.switch;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // copy_to_cpu - computed: false, optional: true, required: false
  private _copyToCpu?: boolean | cdktf.IResolvable; 
  public get copyToCpu() {
    return this.getBooleanAttribute('copy_to_cpu');
  }
  public set copyToCpu(value: boolean | cdktf.IResolvable) {
    this._copyToCpu = value;
  }
  public resetCopyToCpu() {
    this._copyToCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyToCpuInput() {
    return this._copyToCpu;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
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

  // mirror - computed: false, optional: true, required: false
  private _mirror?: boolean | cdktf.IResolvable; 
  public get mirror() {
    return this.getBooleanAttribute('mirror');
  }
  public set mirror(value: boolean | cdktf.IResolvable) {
    this._mirror = value;
  }
  public resetMirror() {
    this._mirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror;
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // redirect_to_cpu - computed: false, optional: true, required: false
  private _redirectToCpu?: boolean | cdktf.IResolvable; 
  public get redirectToCpu() {
    return this.getBooleanAttribute('redirect_to_cpu');
  }
  public set redirectToCpu(value: boolean | cdktf.IResolvable) {
    this._redirectToCpu = value;
  }
  public resetRedirectToCpu() {
    this._redirectToCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectToCpuInput() {
    return this._redirectToCpu;
  }

  // share_vlan_learned - computed: false, optional: true, required: false
  private _shareVlanLearned?: boolean | cdktf.IResolvable; 
  public get shareVlanLearned() {
    return this.getBooleanAttribute('share_vlan_learned');
  }
  public set shareVlanLearned(value: boolean | cdktf.IResolvable) {
    this._shareVlanLearned = value;
  }
  public resetShareVlanLearned() {
    this._shareVlanLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareVlanLearnedInput() {
    return this._shareVlanLearned;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      copy_to_cpu: cdktf.booleanToTerraform(this._copyToCpu),
      drop: cdktf.booleanToTerraform(this._drop),
      id: cdktf.stringToTerraform(this._id),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      mirror: cdktf.booleanToTerraform(this._mirror),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      redirect_to_cpu: cdktf.booleanToTerraform(this._redirectToCpu),
      share_vlan_learned: cdktf.booleanToTerraform(this._shareVlanLearned),
      switch: cdktf.stringToTerraform(this._switch),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_to_cpu: {
        value: cdktf.booleanToHclTerraform(this._copyToCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drop: {
        value: cdktf.booleanToHclTerraform(this._drop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror: {
        value: cdktf.booleanToHclTerraform(this._mirror),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      redirect_to_cpu: {
        value: cdktf.booleanToHclTerraform(this._redirectToCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      share_vlan_learned: {
        value: cdktf.booleanToHclTerraform(this._shareVlanLearned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switch: {
        value: cdktf.stringToHclTerraform(this._switch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
