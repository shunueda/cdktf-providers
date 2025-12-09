// https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_sdn_vnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentSdnVnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional alias for this VNet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_sdn_vnet#alias VirtualEnvironmentSdnVnet#alias}
  */
  readonly alias?: string;
  /**
  * The unique identifier of the SDN VNet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_sdn_vnet#id VirtualEnvironmentSdnVnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Isolate ports within this VNet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_sdn_vnet#isolate_ports VirtualEnvironmentSdnVnet#isolate_ports}
  */
  readonly isolatePorts?: boolean | cdktf.IResolvable;
  /**
  * Tag value for VLAN/VXLAN (can't be used with other zone types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_sdn_vnet#tag VirtualEnvironmentSdnVnet#tag}
  */
  readonly tag?: number;
  /**
  * Allow VM VLANs to pass through this VNet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_sdn_vnet#vlan_aware VirtualEnvironmentSdnVnet#vlan_aware}
  */
  readonly vlanAware?: boolean | cdktf.IResolvable;
  /**
  * The zone to which this VNet belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_sdn_vnet#zone VirtualEnvironmentSdnVnet#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_sdn_vnet proxmox_virtual_environment_sdn_vnet}
*/
export class VirtualEnvironmentSdnVnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_sdn_vnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentSdnVnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentSdnVnet to import
  * @param importFromId The id of the existing VirtualEnvironmentSdnVnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_sdn_vnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentSdnVnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_sdn_vnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_sdn_vnet proxmox_virtual_environment_sdn_vnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentSdnVnetConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentSdnVnetConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_sdn_vnet',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.89.1',
        providerVersionConstraint: '0.89.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._id = config.id;
    this._isolatePorts = config.isolatePorts;
    this._tag = config.tag;
    this._vlanAware = config.vlanAware;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // isolate_ports - computed: false, optional: true, required: false
  private _isolatePorts?: boolean | cdktf.IResolvable; 
  public get isolatePorts() {
    return this.getBooleanAttribute('isolate_ports');
  }
  public set isolatePorts(value: boolean | cdktf.IResolvable) {
    this._isolatePorts = value;
  }
  public resetIsolatePorts() {
    this._isolatePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatePortsInput() {
    return this._isolatePorts;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // vlan_aware - computed: false, optional: true, required: false
  private _vlanAware?: boolean | cdktf.IResolvable; 
  public get vlanAware() {
    return this.getBooleanAttribute('vlan_aware');
  }
  public set vlanAware(value: boolean | cdktf.IResolvable) {
    this._vlanAware = value;
  }
  public resetVlanAware() {
    this._vlanAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanAwareInput() {
    return this._vlanAware;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      id: cdktf.stringToTerraform(this._id),
      isolate_ports: cdktf.booleanToTerraform(this._isolatePorts),
      tag: cdktf.numberToTerraform(this._tag),
      vlan_aware: cdktf.booleanToTerraform(this._vlanAware),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
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
      isolate_ports: {
        value: cdktf.booleanToHclTerraform(this._isolatePorts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag: {
        value: cdktf.numberToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_aware: {
        value: cdktf.booleanToHclTerraform(this._vlanAware),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
