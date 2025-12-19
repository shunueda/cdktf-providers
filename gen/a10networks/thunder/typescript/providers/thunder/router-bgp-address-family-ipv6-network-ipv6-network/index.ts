// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpAddressFamilyIpv6NetworkIpv6NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * AsNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network#as_number RouterBgpAddressFamilyIpv6NetworkIpv6Network#as_number}
  */
  readonly asNumber: string;
  /**
  * Specify a BGP backdoor route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network#backdoor RouterBgpAddressFamilyIpv6NetworkIpv6Network#backdoor}
  */
  readonly backdoor?: number;
  /**
  * community value in the format 1-4294967295|AA:NN|internet|local-AS|no-advertise|no-export
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network#comm_value RouterBgpAddressFamilyIpv6NetworkIpv6Network#comm_value}
  */
  readonly commValue?: string;
  /**
  * Network specific description (Up to 80 characters describing this network)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network#description RouterBgpAddressFamilyIpv6NetworkIpv6Network#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network#id RouterBgpAddressFamilyIpv6NetworkIpv6Network#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Large community value in the format XX:YY:ZZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network#lcomm_value RouterBgpAddressFamilyIpv6NetworkIpv6Network#lcomm_value}
  */
  readonly lcommValue?: string;
  /**
  * Specify a network to announce via BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network#network_ipv6 RouterBgpAddressFamilyIpv6NetworkIpv6Network#network_ipv6}
  */
  readonly networkIpv6: string;
  /**
  * Route-map to modify the attributes (Name of the route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network#route_map RouterBgpAddressFamilyIpv6NetworkIpv6Network#route_map}
  */
  readonly routeMap?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network#uuid RouterBgpAddressFamilyIpv6NetworkIpv6Network#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network thunder_router_bgp_address_family_ipv6_network_ipv6_network}
*/
export class RouterBgpAddressFamilyIpv6NetworkIpv6Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_bgp_address_family_ipv6_network_ipv6_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpAddressFamilyIpv6NetworkIpv6Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpAddressFamilyIpv6NetworkIpv6Network to import
  * @param importFromId The id of the existing RouterBgpAddressFamilyIpv6NetworkIpv6Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpAddressFamilyIpv6NetworkIpv6Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_bgp_address_family_ipv6_network_ipv6_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_network_ipv6_network thunder_router_bgp_address_family_ipv6_network_ipv6_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpAddressFamilyIpv6NetworkIpv6NetworkConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpAddressFamilyIpv6NetworkIpv6NetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_bgp_address_family_ipv6_network_ipv6_network',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asNumber = config.asNumber;
    this._backdoor = config.backdoor;
    this._commValue = config.commValue;
    this._description = config.description;
    this._id = config.id;
    this._lcommValue = config.lcommValue;
    this._networkIpv6 = config.networkIpv6;
    this._routeMap = config.routeMap;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: string; 
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
  public set asNumber(value: string) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // backdoor - computed: false, optional: true, required: false
  private _backdoor?: number; 
  public get backdoor() {
    return this.getNumberAttribute('backdoor');
  }
  public set backdoor(value: number) {
    this._backdoor = value;
  }
  public resetBackdoor() {
    this._backdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorInput() {
    return this._backdoor;
  }

  // comm_value - computed: false, optional: true, required: false
  private _commValue?: string; 
  public get commValue() {
    return this.getStringAttribute('comm_value');
  }
  public set commValue(value: string) {
    this._commValue = value;
  }
  public resetCommValue() {
    this._commValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commValueInput() {
    return this._commValue;
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

  // lcomm_value - computed: false, optional: true, required: false
  private _lcommValue?: string; 
  public get lcommValue() {
    return this.getStringAttribute('lcomm_value');
  }
  public set lcommValue(value: string) {
    this._lcommValue = value;
  }
  public resetLcommValue() {
    this._lcommValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcommValueInput() {
    return this._lcommValue;
  }

  // network_ipv6 - computed: false, optional: false, required: true
  private _networkIpv6?: string; 
  public get networkIpv6() {
    return this.getStringAttribute('network_ipv6');
  }
  public set networkIpv6(value: string) {
    this._networkIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIpv6Input() {
    return this._networkIpv6;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_number: cdktf.stringToTerraform(this._asNumber),
      backdoor: cdktf.numberToTerraform(this._backdoor),
      comm_value: cdktf.stringToTerraform(this._commValue),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lcomm_value: cdktf.stringToTerraform(this._lcommValue),
      network_ipv6: cdktf.stringToTerraform(this._networkIpv6),
      route_map: cdktf.stringToTerraform(this._routeMap),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_number: {
        value: cdktf.stringToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backdoor: {
        value: cdktf.numberToHclTerraform(this._backdoor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comm_value: {
        value: cdktf.stringToHclTerraform(this._commValue),
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
      lcomm_value: {
        value: cdktf.stringToHclTerraform(this._lcommValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_ipv6: {
        value: cdktf.stringToHclTerraform(this._networkIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map: {
        value: cdktf.stringToHclTerraform(this._routeMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
