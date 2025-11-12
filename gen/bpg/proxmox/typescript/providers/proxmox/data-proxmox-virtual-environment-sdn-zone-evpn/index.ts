// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_sdn_zone_evpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentSdnZoneEvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the SDN zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_sdn_zone_evpn#id DataProxmoxVirtualEnvironmentSdnZoneEvpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_sdn_zone_evpn proxmox_virtual_environment_sdn_zone_evpn}
*/
export class DataProxmoxVirtualEnvironmentSdnZoneEvpn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_sdn_zone_evpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentSdnZoneEvpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentSdnZoneEvpn to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentSdnZoneEvpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_sdn_zone_evpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentSdnZoneEvpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_sdn_zone_evpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_sdn_zone_evpn proxmox_virtual_environment_sdn_zone_evpn} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentSdnZoneEvpnConfig
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentSdnZoneEvpnConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_sdn_zone_evpn',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0',
        providerVersionConstraint: '0.86.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_subnets - computed: true, optional: false, required: false
  public get advertiseSubnets() {
    return this.getBooleanAttribute('advertise_subnets');
  }

  // controller - computed: true, optional: false, required: false
  public get controller() {
    return this.getStringAttribute('controller');
  }

  // disable_arp_nd_suppression - computed: true, optional: false, required: false
  public get disableArpNdSuppression() {
    return this.getBooleanAttribute('disable_arp_nd_suppression');
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getStringAttribute('dns');
  }

  // dns_zone - computed: true, optional: false, required: false
  public get dnsZone() {
    return this.getStringAttribute('dns_zone');
  }

  // exit_nodes - computed: true, optional: false, required: false
  public get exitNodes() {
    return cdktf.Fn.tolist(this.getListAttribute('exit_nodes'));
  }

  // exit_nodes_local_routing - computed: true, optional: false, required: false
  public get exitNodesLocalRouting() {
    return this.getBooleanAttribute('exit_nodes_local_routing');
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

  // ipam - computed: true, optional: false, required: false
  public get ipam() {
    return this.getStringAttribute('ipam');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return cdktf.Fn.tolist(this.getListAttribute('nodes'));
  }

  // pending - computed: true, optional: false, required: false
  public get pending() {
    return this.getBooleanAttribute('pending');
  }

  // primary_exit_node - computed: true, optional: false, required: false
  public get primaryExitNode() {
    return this.getStringAttribute('primary_exit_node');
  }

  // reverse_dns - computed: true, optional: false, required: false
  public get reverseDns() {
    return this.getStringAttribute('reverse_dns');
  }

  // rt_import - computed: true, optional: false, required: false
  public get rtImport() {
    return this.getStringAttribute('rt_import');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vrf_vxlan - computed: true, optional: false, required: false
  public get vrfVxlan() {
    return this.getNumberAttribute('vrf_vxlan');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
