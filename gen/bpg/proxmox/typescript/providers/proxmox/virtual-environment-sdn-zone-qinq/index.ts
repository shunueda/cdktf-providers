// https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentSdnZoneQinqConfig extends cdktf.TerraformMetaArguments {
  /**
  * A local, VLAN-aware bridge that is already configured on each local node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq#bridge VirtualEnvironmentSdnZoneQinq#bridge}
  */
  readonly bridge: string;
  /**
  * DNS API server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq#dns VirtualEnvironmentSdnZoneQinq#dns}
  */
  readonly dns?: string;
  /**
  * DNS domain name. Used to register hostnames, such as `<hostname>.<domain>`. The DNS zone must already exist on the DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq#dns_zone VirtualEnvironmentSdnZoneQinq#dns_zone}
  */
  readonly dnsZone?: string;
  /**
  * The unique identifier of the SDN zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq#id VirtualEnvironmentSdnZoneQinq#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * IP Address Management system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq#ipam VirtualEnvironmentSdnZoneQinq#ipam}
  */
  readonly ipam?: string;
  /**
  * MTU value for the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq#mtu VirtualEnvironmentSdnZoneQinq#mtu}
  */
  readonly mtu?: number;
  /**
  * The Proxmox nodes which the zone and associated VNets should be deployed on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq#nodes VirtualEnvironmentSdnZoneQinq#nodes}
  */
  readonly nodes?: string[];
  /**
  * Reverse DNS API server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq#reverse_dns VirtualEnvironmentSdnZoneQinq#reverse_dns}
  */
  readonly reverseDns?: string;
  /**
  * Service VLAN tag for QinQ. The tag must be between `1` and `4094`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq#service_vlan VirtualEnvironmentSdnZoneQinq#service_vlan}
  */
  readonly serviceVlan: number;
  /**
  * Service VLAN protocol for QinQ. The protocol must be `802.1ad` or `802.1q`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq#service_vlan_protocol VirtualEnvironmentSdnZoneQinq#service_vlan_protocol}
  */
  readonly serviceVlanProtocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq proxmox_virtual_environment_sdn_zone_qinq}
*/
export class VirtualEnvironmentSdnZoneQinq extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_sdn_zone_qinq";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentSdnZoneQinq resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentSdnZoneQinq to import
  * @param importFromId The id of the existing VirtualEnvironmentSdnZoneQinq that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentSdnZoneQinq to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_sdn_zone_qinq", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_sdn_zone_qinq proxmox_virtual_environment_sdn_zone_qinq} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentSdnZoneQinqConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentSdnZoneQinqConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_sdn_zone_qinq',
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
    this._bridge = config.bridge;
    this._dns = config.dns;
    this._dnsZone = config.dnsZone;
    this._id = config.id;
    this._ipam = config.ipam;
    this._mtu = config.mtu;
    this._nodes = config.nodes;
    this._reverseDns = config.reverseDns;
    this._serviceVlan = config.serviceVlan;
    this._serviceVlanProtocol = config.serviceVlanProtocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridge - computed: false, optional: false, required: true
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
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

  // service_vlan - computed: false, optional: false, required: true
  private _serviceVlan?: number; 
  public get serviceVlan() {
    return this.getNumberAttribute('service_vlan');
  }
  public set serviceVlan(value: number) {
    this._serviceVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVlanInput() {
    return this._serviceVlan;
  }

  // service_vlan_protocol - computed: false, optional: true, required: false
  private _serviceVlanProtocol?: string; 
  public get serviceVlanProtocol() {
    return this.getStringAttribute('service_vlan_protocol');
  }
  public set serviceVlanProtocol(value: string) {
    this._serviceVlanProtocol = value;
  }
  public resetServiceVlanProtocol() {
    this._serviceVlanProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVlanProtocolInput() {
    return this._serviceVlanProtocol;
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
      bridge: cdktf.stringToTerraform(this._bridge),
      dns: cdktf.stringToTerraform(this._dns),
      dns_zone: cdktf.stringToTerraform(this._dnsZone),
      id: cdktf.stringToTerraform(this._id),
      ipam: cdktf.stringToTerraform(this._ipam),
      mtu: cdktf.numberToTerraform(this._mtu),
      nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodes),
      reverse_dns: cdktf.stringToTerraform(this._reverseDns),
      service_vlan: cdktf.numberToTerraform(this._serviceVlan),
      service_vlan_protocol: cdktf.stringToTerraform(this._serviceVlanProtocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridge: {
        value: cdktf.stringToHclTerraform(this._bridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      reverse_dns: {
        value: cdktf.stringToHclTerraform(this._reverseDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_vlan: {
        value: cdktf.numberToHclTerraform(this._serviceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_vlan_protocol: {
        value: cdktf.stringToHclTerraform(this._serviceVlanProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
