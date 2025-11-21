// https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/metal_virtual_circuit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixMetalVirtualCircuitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Customer IPv6 address which the CSR switch will peer with. Will default to the other usable IP in the IPv6 subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/metal_virtual_circuit#customer_ipv6 DataEquinixMetalVirtualCircuit#customer_ipv6}
  */
  readonly customerIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/metal_virtual_circuit#id DataEquinixMetalVirtualCircuit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Metal IPv6 address for the SVI (Switch Virtual Interface) of the VirtualCircuit. Will default to the first usable IP in the IPv6 subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/metal_virtual_circuit#metal_ipv6 DataEquinixMetalVirtualCircuit#metal_ipv6}
  */
  readonly metalIpv6?: string;
  /**
  * A subnet from one of the IPv6 blocks associated with the VRF that we will help create an IP reservation for. Can only be either a /126 or /127.
  * 				 * For a /127 block, it will only have two IP addresses, which will be used for the metal_ip and customer_ip.
  * 				 * For a /126 block, it will have four IP addresses, but the first and last IP addresses are not usable. We will default to the first usable IP address for the metal_ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/metal_virtual_circuit#subnet_ipv6 DataEquinixMetalVirtualCircuit#subnet_ipv6}
  */
  readonly subnetIpv6?: string;
  /**
  * ID of the virtual circuit to lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/metal_virtual_circuit#virtual_circuit_id DataEquinixMetalVirtualCircuit#virtual_circuit_id}
  */
  readonly virtualCircuitId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/metal_virtual_circuit equinix_metal_virtual_circuit}
*/
export class DataEquinixMetalVirtualCircuit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_virtual_circuit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixMetalVirtualCircuit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixMetalVirtualCircuit to import
  * @param importFromId The id of the existing DataEquinixMetalVirtualCircuit that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/metal_virtual_circuit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixMetalVirtualCircuit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_virtual_circuit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/metal_virtual_circuit equinix_metal_virtual_circuit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixMetalVirtualCircuitConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixMetalVirtualCircuitConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_virtual_circuit',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.0',
        providerVersionConstraint: '4.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customerIpv6 = config.customerIpv6;
    this._id = config.id;
    this._metalIpv6 = config.metalIpv6;
    this._subnetIpv6 = config.subnetIpv6;
    this._virtualCircuitId = config.virtualCircuitId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // customer_ip - computed: true, optional: false, required: false
  public get customerIp() {
    return this.getStringAttribute('customer_ip');
  }

  // customer_ipv6 - computed: false, optional: true, required: false
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // md5 - computed: true, optional: false, required: false
  public get md5() {
    return this.getStringAttribute('md5');
  }

  // metal_ip - computed: true, optional: false, required: false
  public get metalIp() {
    return this.getStringAttribute('metal_ip');
  }

  // metal_ipv6 - computed: false, optional: true, required: false
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nni_vlan - computed: true, optional: false, required: false
  public get nniVlan() {
    return this.getNumberAttribute('nni_vlan');
  }

  // nni_vnid - computed: true, optional: false, required: false
  public get nniVnid() {
    return this.getNumberAttribute('nni_vnid');
  }

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // virtual_circuit_id - computed: false, optional: false, required: true
  private _virtualCircuitId?: string; 
  public get virtualCircuitId() {
    return this.getStringAttribute('virtual_circuit_id');
  }
  public set virtualCircuitId(value: string) {
    this._virtualCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualCircuitIdInput() {
    return this._virtualCircuitId;
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vnid - computed: true, optional: false, required: false
  public get vnid() {
    return this.getNumberAttribute('vnid');
  }

  // vrf_id - computed: true, optional: false, required: false
  public get vrfId() {
    return this.getStringAttribute('vrf_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_ipv6: cdktf.stringToTerraform(this._customerIpv6),
      id: cdktf.stringToTerraform(this._id),
      metal_ipv6: cdktf.stringToTerraform(this._metalIpv6),
      subnet_ipv6: cdktf.stringToTerraform(this._subnetIpv6),
      virtual_circuit_id: cdktf.stringToTerraform(this._virtualCircuitId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_ipv6: {
        value: cdktf.stringToHclTerraform(this._customerIpv6),
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
      metal_ipv6: {
        value: cdktf.stringToHclTerraform(this._metalIpv6),
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
      virtual_circuit_id: {
        value: cdktf.stringToHclTerraform(this._virtualCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
