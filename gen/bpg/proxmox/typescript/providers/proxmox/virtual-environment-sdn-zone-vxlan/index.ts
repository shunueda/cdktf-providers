// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_zone_vxlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentSdnZoneVxlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * DNS API server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_zone_vxlan#dns VirtualEnvironmentSdnZoneVxlan#dns}
  */
  readonly dns?: string;
  /**
  * DNS domain name. Used to register hostnames, such as `<hostname>.<domain>`. The DNS zone must already exist on the DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_zone_vxlan#dns_zone VirtualEnvironmentSdnZoneVxlan#dns_zone}
  */
  readonly dnsZone?: string;
  /**
  * The unique identifier of the SDN zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_zone_vxlan#id VirtualEnvironmentSdnZoneVxlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * IP Address Management system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_zone_vxlan#ipam VirtualEnvironmentSdnZoneVxlan#ipam}
  */
  readonly ipam?: string;
  /**
  * MTU value for the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_zone_vxlan#mtu VirtualEnvironmentSdnZoneVxlan#mtu}
  */
  readonly mtu?: number;
  /**
  * The Proxmox nodes which the zone and associated VNets should be deployed on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_zone_vxlan#nodes VirtualEnvironmentSdnZoneVxlan#nodes}
  */
  readonly nodes?: string[];
  /**
  * A list of IP addresses of each node in the VXLAN zone. This can be external nodes reachable at this IP address. All nodes in the cluster need to be mentioned here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_zone_vxlan#peers VirtualEnvironmentSdnZoneVxlan#peers}
  */
  readonly peers: string[];
  /**
  * Reverse DNS API server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_zone_vxlan#reverse_dns VirtualEnvironmentSdnZoneVxlan#reverse_dns}
  */
  readonly reverseDns?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_zone_vxlan proxmox_virtual_environment_sdn_zone_vxlan}
*/
export class VirtualEnvironmentSdnZoneVxlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_sdn_zone_vxlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentSdnZoneVxlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentSdnZoneVxlan to import
  * @param importFromId The id of the existing VirtualEnvironmentSdnZoneVxlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_zone_vxlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentSdnZoneVxlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_sdn_zone_vxlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_sdn_zone_vxlan proxmox_virtual_environment_sdn_zone_vxlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentSdnZoneVxlanConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentSdnZoneVxlanConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_sdn_zone_vxlan',
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
    this._dns = config.dns;
    this._dnsZone = config.dnsZone;
    this._id = config.id;
    this._ipam = config.ipam;
    this._mtu = config.mtu;
    this._nodes = config.nodes;
    this._peers = config.peers;
    this._reverseDns = config.reverseDns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // peers - computed: false, optional: false, required: true
  private _peers?: string[]; 
  public get peers() {
    return cdktf.Fn.tolist(this.getListAttribute('peers'));
  }
  public set peers(value: string[]) {
    this._peers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers;
  }

  // pending - computed: true, optional: false, required: false
  public get pending() {
    return this.getBooleanAttribute('pending');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns: cdktf.stringToTerraform(this._dns),
      dns_zone: cdktf.stringToTerraform(this._dnsZone),
      id: cdktf.stringToTerraform(this._id),
      ipam: cdktf.stringToTerraform(this._ipam),
      mtu: cdktf.numberToTerraform(this._mtu),
      nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodes),
      peers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peers),
      reverse_dns: cdktf.stringToTerraform(this._reverseDns),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      peers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      reverse_dns: {
        value: cdktf.stringToHclTerraform(this._reverseDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
