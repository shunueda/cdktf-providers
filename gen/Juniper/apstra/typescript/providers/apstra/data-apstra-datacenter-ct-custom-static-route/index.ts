// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_custom_static_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterCtCustomStaticRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Primitive name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_custom_static_route#name DataApstraDatacenterCtCustomStaticRoute#name}
  */
  readonly name?: string;
  /**
  * IPv4 or IPv6 prefix in CIDR notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_custom_static_route#network DataApstraDatacenterCtCustomStaticRoute#network}
  */
  readonly network: string;
  /**
  * IPv4 or IPv6 address of next hop router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_custom_static_route#next_hop DataApstraDatacenterCtCustomStaticRoute#next_hop}
  */
  readonly nextHop: string;
  /**
  * Apstra ID of Routing Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_custom_static_route#routing_zone_id DataApstraDatacenterCtCustomStaticRoute#routing_zone_id}
  */
  readonly routingZoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_custom_static_route apstra_datacenter_ct_custom_static_route}
*/
export class DataApstraDatacenterCtCustomStaticRoute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_ct_custom_static_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterCtCustomStaticRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterCtCustomStaticRoute to import
  * @param importFromId The id of the existing DataApstraDatacenterCtCustomStaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_custom_static_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterCtCustomStaticRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_ct_custom_static_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_custom_static_route apstra_datacenter_ct_custom_static_route} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterCtCustomStaticRouteConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterCtCustomStaticRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_ct_custom_static_route',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._network = config.network;
    this._nextHop = config.nextHop;
    this._routingZoneId = config.routingZoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // primitive - computed: true, optional: false, required: false
  public get primitive() {
    return this.getStringAttribute('primitive');
  }

  // routing_zone_id - computed: false, optional: false, required: true
  private _routingZoneId?: string; 
  public get routingZoneId() {
    return this.getStringAttribute('routing_zone_id');
  }
  public set routingZoneId(value: string) {
    this._routingZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZoneIdInput() {
    return this._routingZoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      next_hop: cdktf.stringToTerraform(this._nextHop),
      routing_zone_id: cdktf.stringToTerraform(this._routingZoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop: {
        value: cdktf.stringToHclTerraform(this._nextHop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_zone_id: {
        value: cdktf.stringToHclTerraform(this._routingZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
