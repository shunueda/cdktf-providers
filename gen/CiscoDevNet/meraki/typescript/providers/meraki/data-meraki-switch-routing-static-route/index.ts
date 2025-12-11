// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_static_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchRoutingStaticRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_static_route#id DataMerakiSwitchRoutingStaticRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name or description for layer 3 static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_static_route#name DataMerakiSwitchRoutingStaticRoute#name}
  */
  readonly name?: string;
  /**
  * Switch serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_static_route#serial DataMerakiSwitchRoutingStaticRoute#serial}
  */
  readonly serial: string;
  /**
  * The name of the VRF this static route belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_static_route#vrf_name DataMerakiSwitchRoutingStaticRoute#vrf_name}
  */
  readonly vrfName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_static_route meraki_switch_routing_static_route}
*/
export class DataMerakiSwitchRoutingStaticRoute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_routing_static_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchRoutingStaticRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchRoutingStaticRoute to import
  * @param importFromId The id of the existing DataMerakiSwitchRoutingStaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_static_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchRoutingStaticRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_routing_static_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_static_route meraki_switch_routing_static_route} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchRoutingStaticRouteConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchRoutingStaticRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_routing_static_route',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
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
    this._name = config.name;
    this._serial = config.serial;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_via_ospf_enabled - computed: true, optional: false, required: false
  public get advertiseViaOspfEnabled() {
    return this.getBooleanAttribute('advertise_via_ospf_enabled');
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

  // name - computed: true, optional: true, required: false
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

  // next_hop_ip - computed: true, optional: false, required: false
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }

  // prefer_over_ospf_routes_enabled - computed: true, optional: false, required: false
  public get preferOverOspfRoutesEnabled() {
    return this.getBooleanAttribute('prefer_over_ospf_routes_enabled');
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // vrf_leak_route_to_default_vrf - computed: true, optional: false, required: false
  public get vrfLeakRouteToDefaultVrf() {
    return this.getBooleanAttribute('vrf_leak_route_to_default_vrf');
  }

  // vrf_name - computed: true, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      serial: cdktf.stringToTerraform(this._serial),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
