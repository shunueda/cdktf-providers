// https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentSdnZoneEvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable subnet advertisement for EVPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#advertise_subnets VirtualEnvironmentSdnZoneEvpn#advertise_subnets}
  */
  readonly advertiseSubnets?: boolean | cdktf.IResolvable;
  /**
  * EVPN controller address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#controller VirtualEnvironmentSdnZoneEvpn#controller}
  */
  readonly controller: string;
  /**
  * Disable ARP/ND suppression for EVPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#disable_arp_nd_suppression VirtualEnvironmentSdnZoneEvpn#disable_arp_nd_suppression}
  */
  readonly disableArpNdSuppression?: boolean | cdktf.IResolvable;
  /**
  * DNS API server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#dns VirtualEnvironmentSdnZoneEvpn#dns}
  */
  readonly dns?: string;
  /**
  * DNS domain name. Used to register hostnames, such as `<hostname>.<domain>`. The DNS zone must already exist on the DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#dns_zone VirtualEnvironmentSdnZoneEvpn#dns_zone}
  */
  readonly dnsZone?: string;
  /**
  * List of exit nodes for EVPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#exit_nodes VirtualEnvironmentSdnZoneEvpn#exit_nodes}
  */
  readonly exitNodes?: string[];
  /**
  * Enable local routing for EVPN exit nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#exit_nodes_local_routing VirtualEnvironmentSdnZoneEvpn#exit_nodes_local_routing}
  */
  readonly exitNodesLocalRouting?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of the SDN zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#id VirtualEnvironmentSdnZoneEvpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * IP Address Management system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#ipam VirtualEnvironmentSdnZoneEvpn#ipam}
  */
  readonly ipam?: string;
  /**
  * MTU value for the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#mtu VirtualEnvironmentSdnZoneEvpn#mtu}
  */
  readonly mtu?: number;
  /**
  * The Proxmox nodes which the zone and associated VNets should be deployed on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#nodes VirtualEnvironmentSdnZoneEvpn#nodes}
  */
  readonly nodes?: string[];
  /**
  * Primary exit node for EVPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#primary_exit_node VirtualEnvironmentSdnZoneEvpn#primary_exit_node}
  */
  readonly primaryExitNode?: string;
  /**
  * Reverse DNS API server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#reverse_dns VirtualEnvironmentSdnZoneEvpn#reverse_dns}
  */
  readonly reverseDns?: string;
  /**
  * Route target import for EVPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#rt_import VirtualEnvironmentSdnZoneEvpn#rt_import}
  */
  readonly rtImport?: string;
  /**
  * VRF VXLAN-ID used for dedicated routing interconnect between VNets. It must be different than the VXLAN-ID of the VNets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#vrf_vxlan VirtualEnvironmentSdnZoneEvpn#vrf_vxlan}
  */
  readonly vrfVxlan: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn proxmox_virtual_environment_sdn_zone_evpn}
*/
export class VirtualEnvironmentSdnZoneEvpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_sdn_zone_evpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentSdnZoneEvpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentSdnZoneEvpn to import
  * @param importFromId The id of the existing VirtualEnvironmentSdnZoneEvpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentSdnZoneEvpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_sdn_zone_evpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_evpn proxmox_virtual_environment_sdn_zone_evpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentSdnZoneEvpnConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentSdnZoneEvpnConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_sdn_zone_evpn',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.89.0',
        providerVersionConstraint: '0.89.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseSubnets = config.advertiseSubnets;
    this._controller = config.controller;
    this._disableArpNdSuppression = config.disableArpNdSuppression;
    this._dns = config.dns;
    this._dnsZone = config.dnsZone;
    this._exitNodes = config.exitNodes;
    this._exitNodesLocalRouting = config.exitNodesLocalRouting;
    this._id = config.id;
    this._ipam = config.ipam;
    this._mtu = config.mtu;
    this._nodes = config.nodes;
    this._primaryExitNode = config.primaryExitNode;
    this._reverseDns = config.reverseDns;
    this._rtImport = config.rtImport;
    this._vrfVxlan = config.vrfVxlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_subnets - computed: false, optional: true, required: false
  private _advertiseSubnets?: boolean | cdktf.IResolvable; 
  public get advertiseSubnets() {
    return this.getBooleanAttribute('advertise_subnets');
  }
  public set advertiseSubnets(value: boolean | cdktf.IResolvable) {
    this._advertiseSubnets = value;
  }
  public resetAdvertiseSubnets() {
    this._advertiseSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseSubnetsInput() {
    return this._advertiseSubnets;
  }

  // controller - computed: false, optional: false, required: true
  private _controller?: string; 
  public get controller() {
    return this.getStringAttribute('controller');
  }
  public set controller(value: string) {
    this._controller = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller;
  }

  // disable_arp_nd_suppression - computed: false, optional: true, required: false
  private _disableArpNdSuppression?: boolean | cdktf.IResolvable; 
  public get disableArpNdSuppression() {
    return this.getBooleanAttribute('disable_arp_nd_suppression');
  }
  public set disableArpNdSuppression(value: boolean | cdktf.IResolvable) {
    this._disableArpNdSuppression = value;
  }
  public resetDisableArpNdSuppression() {
    this._disableArpNdSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableArpNdSuppressionInput() {
    return this._disableArpNdSuppression;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // dns_zone - computed: false, optional: true, required: false
  private _dnsZone?: string; 
  public get dnsZone() {
    return this.getStringAttribute('dns_zone');
  }
  public set dnsZone(value: string) {
    this._dnsZone = value;
  }
  public resetDnsZone() {
    this._dnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneInput() {
    return this._dnsZone;
  }

  // exit_nodes - computed: true, optional: true, required: false
  private _exitNodes?: string[]; 
  public get exitNodes() {
    return cdktf.Fn.tolist(this.getListAttribute('exit_nodes'));
  }
  public set exitNodes(value: string[]) {
    this._exitNodes = value;
  }
  public resetExitNodes() {
    this._exitNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitNodesInput() {
    return this._exitNodes;
  }

  // exit_nodes_local_routing - computed: false, optional: true, required: false
  private _exitNodesLocalRouting?: boolean | cdktf.IResolvable; 
  public get exitNodesLocalRouting() {
    return this.getBooleanAttribute('exit_nodes_local_routing');
  }
  public set exitNodesLocalRouting(value: boolean | cdktf.IResolvable) {
    this._exitNodesLocalRouting = value;
  }
  public resetExitNodesLocalRouting() {
    this._exitNodesLocalRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitNodesLocalRoutingInput() {
    return this._exitNodesLocalRouting;
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

  // ipam - computed: false, optional: true, required: false
  private _ipam?: string; 
  public get ipam() {
    return this.getStringAttribute('ipam');
  }
  public set ipam(value: string) {
    this._ipam = value;
  }
  public resetIpam() {
    this._ipam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamInput() {
    return this._ipam;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // nodes - computed: true, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return cdktf.Fn.tolist(this.getListAttribute('nodes'));
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // pending - computed: true, optional: false, required: false
  public get pending() {
    return this.getBooleanAttribute('pending');
  }

  // primary_exit_node - computed: false, optional: true, required: false
  private _primaryExitNode?: string; 
  public get primaryExitNode() {
    return this.getStringAttribute('primary_exit_node');
  }
  public set primaryExitNode(value: string) {
    this._primaryExitNode = value;
  }
  public resetPrimaryExitNode() {
    this._primaryExitNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryExitNodeInput() {
    return this._primaryExitNode;
  }

  // reverse_dns - computed: false, optional: true, required: false
  private _reverseDns?: string; 
  public get reverseDns() {
    return this.getStringAttribute('reverse_dns');
  }
  public set reverseDns(value: string) {
    this._reverseDns = value;
  }
  public resetReverseDns() {
    this._reverseDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseDnsInput() {
    return this._reverseDns;
  }

  // rt_import - computed: false, optional: true, required: false
  private _rtImport?: string; 
  public get rtImport() {
    return this.getStringAttribute('rt_import');
  }
  public set rtImport(value: string) {
    this._rtImport = value;
  }
  public resetRtImport() {
    this._rtImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtImportInput() {
    return this._rtImport;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vrf_vxlan - computed: false, optional: false, required: true
  private _vrfVxlan?: number; 
  public get vrfVxlan() {
    return this.getNumberAttribute('vrf_vxlan');
  }
  public set vrfVxlan(value: number) {
    this._vrfVxlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfVxlanInput() {
    return this._vrfVxlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_subnets: cdktf.booleanToTerraform(this._advertiseSubnets),
      controller: cdktf.stringToTerraform(this._controller),
      disable_arp_nd_suppression: cdktf.booleanToTerraform(this._disableArpNdSuppression),
      dns: cdktf.stringToTerraform(this._dns),
      dns_zone: cdktf.stringToTerraform(this._dnsZone),
      exit_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exitNodes),
      exit_nodes_local_routing: cdktf.booleanToTerraform(this._exitNodesLocalRouting),
      id: cdktf.stringToTerraform(this._id),
      ipam: cdktf.stringToTerraform(this._ipam),
      mtu: cdktf.numberToTerraform(this._mtu),
      nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodes),
      primary_exit_node: cdktf.stringToTerraform(this._primaryExitNode),
      reverse_dns: cdktf.stringToTerraform(this._reverseDns),
      rt_import: cdktf.stringToTerraform(this._rtImport),
      vrf_vxlan: cdktf.numberToTerraform(this._vrfVxlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_subnets: {
        value: cdktf.booleanToHclTerraform(this._advertiseSubnets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      controller: {
        value: cdktf.stringToHclTerraform(this._controller),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_arp_nd_suppression: {
        value: cdktf.booleanToHclTerraform(this._disableArpNdSuppression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns: {
        value: cdktf.stringToHclTerraform(this._dns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_zone: {
        value: cdktf.stringToHclTerraform(this._dnsZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exit_nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exitNodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      exit_nodes_local_routing: {
        value: cdktf.booleanToHclTerraform(this._exitNodesLocalRouting),
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
      ipam: {
        value: cdktf.stringToHclTerraform(this._ipam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      primary_exit_node: {
        value: cdktf.stringToHclTerraform(this._primaryExitNode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse_dns: {
        value: cdktf.stringToHclTerraform(this._reverseDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rt_import: {
        value: cdktf.stringToHclTerraform(this._rtImport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_vxlan: {
        value: cdktf.numberToHclTerraform(this._vrfVxlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
