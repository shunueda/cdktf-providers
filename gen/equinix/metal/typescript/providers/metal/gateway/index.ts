// https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/gateway#id Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * UUID of the Public or VRF IP Reservation to associate, must be in the same metro as the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/gateway#ip_reservation_id Gateway#ip_reservation_id}
  */
  readonly ipReservationId?: string;
  /**
  * Size of the private IPv4 subnet to create for this gateway, one of [8 16 32 64 128]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/gateway#private_ipv4_subnet_size Gateway#private_ipv4_subnet_size}
  */
  readonly privateIpv4SubnetSize?: number;
  /**
  * UUID of the Project where the Gateway is scoped to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/gateway#project_id Gateway#project_id}
  */
  readonly projectId: string;
  /**
  * UUID of the VLAN to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/gateway#vlan_id Gateway#vlan_id}
  */
  readonly vlanId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/gateway metal_gateway}
*/
export class Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metal_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gateway to import
  * @param importFromId The id of the existing Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metal_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/gateway metal_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'metal_gateway',
      terraformGeneratorMetadata: {
        providerName: 'metal',
        providerVersion: '3.3.0',
        providerVersionConstraint: '3.3.0'
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
    this._ipReservationId = config.ipReservationId;
    this._privateIpv4SubnetSize = config.privateIpv4SubnetSize;
    this._projectId = config.projectId;
    this._vlanId = config.vlanId;
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

  // ip_reservation_id - computed: false, optional: true, required: false
  private _ipReservationId?: string; 
  public get ipReservationId() {
    return this.getStringAttribute('ip_reservation_id');
  }
  public set ipReservationId(value: string) {
    this._ipReservationId = value;
  }
  public resetIpReservationId() {
    this._ipReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReservationIdInput() {
    return this._ipReservationId;
  }

  // private_ipv4_subnet_size - computed: true, optional: true, required: false
  private _privateIpv4SubnetSize?: number; 
  public get privateIpv4SubnetSize() {
    return this.getNumberAttribute('private_ipv4_subnet_size');
  }
  public set privateIpv4SubnetSize(value: number) {
    this._privateIpv4SubnetSize = value;
  }
  public resetPrivateIpv4SubnetSize() {
    this._privateIpv4SubnetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv4SubnetSizeInput() {
    return this._privateIpv4SubnetSize;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
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
      id: cdktf.stringToTerraform(this._id),
      ip_reservation_id: cdktf.stringToTerraform(this._ipReservationId),
      private_ipv4_subnet_size: cdktf.numberToTerraform(this._privateIpv4SubnetSize),
      project_id: cdktf.stringToTerraform(this._projectId),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
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
      ip_reservation_id: {
        value: cdktf.stringToHclTerraform(this._ipReservationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ipv4_subnet_size: {
        value: cdktf.numberToHclTerraform(this._privateIpv4SubnetSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
