// https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetalVirtualCircuitConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of Connection where the VC is scoped to.  Only used for dedicated connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#connection_id MetalVirtualCircuit#connection_id}
  */
  readonly connectionId?: string;
  /**
  * The Customer IP address which the CSR switch will peer with. Will default to the other usable IP in the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#customer_ip MetalVirtualCircuit#customer_ip}
  */
  readonly customerIp?: string;
  /**
  * The Customer IPv6 address which the CSR switch will peer with. Will default to the other usable IP in the IPv6 subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#customer_ipv6 MetalVirtualCircuit#customer_ipv6}
  */
  readonly customerIpv6?: string;
  /**
  * Description of the Virtual Circuit resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#description MetalVirtualCircuit#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#id MetalVirtualCircuit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The password that can be set for the VRF BGP peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#md5 MetalVirtualCircuit#md5}
  */
  readonly md5?: string;
  /**
  * The Metal IP address for the SVI (Switch Virtual Interface) of the VirtualCircuit. Will default to the first usable IP in the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#metal_ip MetalVirtualCircuit#metal_ip}
  */
  readonly metalIp?: string;
  /**
  * The Metal IPv6 address for the SVI (Switch Virtual Interface) of the VirtualCircuit. Will default to the first usable IP in the IPv6 subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#metal_ipv6 MetalVirtualCircuit#metal_ipv6}
  */
  readonly metalIpv6?: string;
  /**
  * Name of the Virtual Circuit resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#name MetalVirtualCircuit#name}
  */
  readonly name?: string;
  /**
  * Equinix Metal network-to-network VLAN ID (optional when the connection has mode=tunnel)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#nni_vlan MetalVirtualCircuit#nni_vlan}
  */
  readonly nniVlan?: number;
  /**
  * The BGP ASN of the peer. The same ASN may be the used across several VCs, but it cannot be the same as the local_asn of the VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#peer_asn MetalVirtualCircuit#peer_asn}
  */
  readonly peerAsn?: number;
  /**
  * UUID of the Connection Port where the VC is scoped to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#port_id MetalVirtualCircuit#port_id}
  */
  readonly portId: string;
  /**
  * UUID of the Project where the VC is scoped to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#project_id MetalVirtualCircuit#project_id}
  */
  readonly projectId: string;
  /**
  * Description of the Virtual Circuit speed. This is for information purposes and is computed when the connection type is shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#speed MetalVirtualCircuit#speed}
  */
  readonly speed?: string;
  /**
  * A subnet from one of the IP blocks associated with the VRF that we will help create an IP reservation for. Can only be either a /30 or /31.
  * 				 * For a /31 block, it will only have two IP addresses, which will be used for the metal_ip and customer_ip.
  * 				 * For a /30 block, it will have four IP addresses, but the first and last IP addresses are not usable. We will default to the first usable IP address for the metal_ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#subnet MetalVirtualCircuit#subnet}
  */
  readonly subnet?: string;
  /**
  * A subnet from one of the IPv6 blocks associated with the VRF that we will help create an IP reservation for. Can only be either a /126 or /127.
  * 				 * For a /127 block, it will only have two IP addresses, which will be used for the metal_ip and customer_ip.
  * 				 * For a /126 block, it will have four IP addresses, but the first and last IP addresses are not usable. We will default to the first usable IP address for the metal_ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#subnet_ipv6 MetalVirtualCircuit#subnet_ipv6}
  */
  readonly subnetIpv6?: string;
  /**
  * Tags attached to the virtual circuit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#tags MetalVirtualCircuit#tags}
  */
  readonly tags?: string[];
  /**
  * UUID of an existing VC to configure. Used in the case of shared interconnections where the VC has already been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#virtual_circuit_id MetalVirtualCircuit#virtual_circuit_id}
  */
  readonly virtualCircuitId?: string;
  /**
  * UUID of the VLAN to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#vlan_id MetalVirtualCircuit#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * UUID of the VRF to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#vrf_id MetalVirtualCircuit#vrf_id}
  */
  readonly vrfId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit equinix_metal_virtual_circuit}
*/
export class MetalVirtualCircuit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_virtual_circuit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetalVirtualCircuit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetalVirtualCircuit to import
  * @param importFromId The id of the existing MetalVirtualCircuit that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetalVirtualCircuit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_virtual_circuit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/metal_virtual_circuit equinix_metal_virtual_circuit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetalVirtualCircuitConfig
  */
  public constructor(scope: Construct, id: string, config: MetalVirtualCircuitConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_virtual_circuit',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.10.0',
        providerVersionConstraint: '4.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._customerIp = config.customerIp;
    this._customerIpv6 = config.customerIpv6;
    this._description = config.description;
    this._id = config.id;
    this._md5 = config.md5;
    this._metalIp = config.metalIp;
    this._metalIpv6 = config.metalIpv6;
    this._name = config.name;
    this._nniVlan = config.nniVlan;
    this._peerAsn = config.peerAsn;
    this._portId = config.portId;
    this._projectId = config.projectId;
    this._speed = config.speed;
    this._subnet = config.subnet;
    this._subnetIpv6 = config.subnetIpv6;
    this._tags = config.tags;
    this._virtualCircuitId = config.virtualCircuitId;
    this._vlanId = config.vlanId;
    this._vrfId = config.vrfId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // customer_ip - computed: true, optional: true, required: false
  private _customerIp?: string; 
  public get customerIp() {
    return this.getStringAttribute('customer_ip');
  }
  public set customerIp(value: string) {
    this._customerIp = value;
  }
  public resetCustomerIp() {
    this._customerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIpInput() {
    return this._customerIp;
  }

  // customer_ipv6 - computed: true, optional: true, required: false
  private _customerIpv6?: string; 
  public get customerIpv6() {
    return this.getStringAttribute('customer_ipv6');
  }
  public set customerIpv6(value: string) {
    this._customerIpv6 = value;
  }
  public resetCustomerIpv6() {
    this._customerIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIpv6Input() {
    return this._customerIpv6;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // md5 - computed: false, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
  }

  // metal_ip - computed: true, optional: true, required: false
  private _metalIp?: string; 
  public get metalIp() {
    return this.getStringAttribute('metal_ip');
  }
  public set metalIp(value: string) {
    this._metalIp = value;
  }
  public resetMetalIp() {
    this._metalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metalIpInput() {
    return this._metalIp;
  }

  // metal_ipv6 - computed: true, optional: true, required: false
  private _metalIpv6?: string; 
  public get metalIpv6() {
    return this.getStringAttribute('metal_ipv6');
  }
  public set metalIpv6(value: string) {
    this._metalIpv6 = value;
  }
  public resetMetalIpv6() {
    this._metalIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metalIpv6Input() {
    return this._metalIpv6;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nni_vlan - computed: true, optional: true, required: false
  private _nniVlan?: number; 
  public get nniVlan() {
    return this.getNumberAttribute('nni_vlan');
  }
  public set nniVlan(value: number) {
    this._nniVlan = value;
  }
  public resetNniVlan() {
    this._nniVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nniVlanInput() {
    return this._nniVlan;
  }

  // nni_vnid - computed: true, optional: false, required: false
  public get nniVnid() {
    return this.getNumberAttribute('nni_vnid');
  }

  // peer_asn - computed: false, optional: true, required: false
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // speed - computed: true, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // subnet_ipv6 - computed: false, optional: true, required: false
  private _subnetIpv6?: string; 
  public get subnetIpv6() {
    return this.getStringAttribute('subnet_ipv6');
  }
  public set subnetIpv6(value: string) {
    this._subnetIpv6 = value;
  }
  public resetSubnetIpv6() {
    this._subnetIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6Input() {
    return this._subnetIpv6;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // virtual_circuit_id - computed: false, optional: true, required: false
  private _virtualCircuitId?: string; 
  public get virtualCircuitId() {
    return this.getStringAttribute('virtual_circuit_id');
  }
  public set virtualCircuitId(value: string) {
    this._virtualCircuitId = value;
  }
  public resetVirtualCircuitId() {
    this._virtualCircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualCircuitIdInput() {
    return this._virtualCircuitId;
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

  // vnid - computed: true, optional: false, required: false
  public get vnid() {
    return this.getNumberAttribute('vnid');
  }

  // vrf_id - computed: false, optional: true, required: false
  private _vrfId?: string; 
  public get vrfId() {
    return this.getStringAttribute('vrf_id');
  }
  public set vrfId(value: string) {
    this._vrfId = value;
  }
  public resetVrfId() {
    this._vrfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfIdInput() {
    return this._vrfId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      customer_ip: cdktf.stringToTerraform(this._customerIp),
      customer_ipv6: cdktf.stringToTerraform(this._customerIpv6),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      md5: cdktf.stringToTerraform(this._md5),
      metal_ip: cdktf.stringToTerraform(this._metalIp),
      metal_ipv6: cdktf.stringToTerraform(this._metalIpv6),
      name: cdktf.stringToTerraform(this._name),
      nni_vlan: cdktf.numberToTerraform(this._nniVlan),
      peer_asn: cdktf.numberToTerraform(this._peerAsn),
      port_id: cdktf.stringToTerraform(this._portId),
      project_id: cdktf.stringToTerraform(this._projectId),
      speed: cdktf.stringToTerraform(this._speed),
      subnet: cdktf.stringToTerraform(this._subnet),
      subnet_ipv6: cdktf.stringToTerraform(this._subnetIpv6),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      virtual_circuit_id: cdktf.stringToTerraform(this._virtualCircuitId),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
      vrf_id: cdktf.stringToTerraform(this._vrfId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_ip: {
        value: cdktf.stringToHclTerraform(this._customerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_ipv6: {
        value: cdktf.stringToHclTerraform(this._customerIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      md5: {
        value: cdktf.stringToHclTerraform(this._md5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metal_ip: {
        value: cdktf.stringToHclTerraform(this._metalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metal_ipv6: {
        value: cdktf.stringToHclTerraform(this._metalIpv6),
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
      nni_vlan: {
        value: cdktf.numberToHclTerraform(this._nniVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_asn: {
        value: cdktf.numberToHclTerraform(this._peerAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_id: {
        value: cdktf.stringToHclTerraform(this._portId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ipv6: {
        value: cdktf.stringToHclTerraform(this._subnetIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      virtual_circuit_id: {
        value: cdktf.stringToHclTerraform(this._virtualCircuitId),
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
      vrf_id: {
        value: cdktf.stringToHclTerraform(this._vrfId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
