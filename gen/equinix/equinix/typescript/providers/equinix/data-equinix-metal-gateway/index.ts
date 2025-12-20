// https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixMetalGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the Metal Gateway to fetch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_gateway#gateway_id DataEquinixMetalGateway#gateway_id}
  */
  readonly gatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_gateway equinix_metal_gateway}
*/
export class DataEquinixMetalGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixMetalGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixMetalGateway to import
  * @param importFromId The id of the existing DataEquinixMetalGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixMetalGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_gateway equinix_metal_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixMetalGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixMetalGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_gateway',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.12.0',
        providerVersionConstraint: '4.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gatewayId = config.gatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_reservation_id - computed: true, optional: false, required: false
  public get ipReservationId() {
    return this.getStringAttribute('ip_reservation_id');
  }

  // private_ipv4_subnet_size - computed: true, optional: false, required: false
  public get privateIpv4SubnetSize() {
    return this.getNumberAttribute('private_ipv4_subnet_size');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
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
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
