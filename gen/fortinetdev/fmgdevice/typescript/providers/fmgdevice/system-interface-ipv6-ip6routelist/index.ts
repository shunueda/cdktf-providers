// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6routelist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemInterfaceIpv6Ip6RoutelistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6routelist#device_name SystemInterfaceIpv6Ip6Routelist#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6routelist#id SystemInterfaceIpv6Ip6Routelist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6routelist#interface SystemInterfaceIpv6Ip6Routelist#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6routelist#route SystemInterfaceIpv6Ip6Routelist#route}
  */
  readonly route?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6routelist#route_life_time SystemInterfaceIpv6Ip6Routelist#route_life_time}
  */
  readonly routeLifeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6routelist#route_pref SystemInterfaceIpv6Ip6Routelist#route_pref}
  */
  readonly routePref?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6routelist fmgdevice_system_interface_ipv6_ip6routelist}
*/
export class SystemInterfaceIpv6Ip6Routelist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_interface_ipv6_ip6routelist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemInterfaceIpv6Ip6Routelist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemInterfaceIpv6Ip6Routelist to import
  * @param importFromId The id of the existing SystemInterfaceIpv6Ip6Routelist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6routelist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemInterfaceIpv6Ip6Routelist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_interface_ipv6_ip6routelist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_ip6routelist fmgdevice_system_interface_ipv6_ip6routelist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemInterfaceIpv6Ip6RoutelistConfig
  */
  public constructor(scope: Construct, id: string, config: SystemInterfaceIpv6Ip6RoutelistConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_interface_ipv6_ip6routelist',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._interface = config.interface;
    this._route = config.route;
    this._routeLifeTime = config.routeLifeTime;
    this._routePref = config.routePref;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // route - computed: false, optional: true, required: false
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }

  // route_life_time - computed: false, optional: true, required: false
  private _routeLifeTime?: number; 
  public get routeLifeTime() {
    return this.getNumberAttribute('route_life_time');
  }
  public set routeLifeTime(value: number) {
    this._routeLifeTime = value;
  }
  public resetRouteLifeTime() {
    this._routeLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeLifeTimeInput() {
    return this._routeLifeTime;
  }

  // route_pref - computed: false, optional: true, required: false
  private _routePref?: string; 
  public get routePref() {
    return this.getStringAttribute('route_pref');
  }
  public set routePref(value: string) {
    this._routePref = value;
  }
  public resetRoutePref() {
    this._routePref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePrefInput() {
    return this._routePref;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      route: cdktf.stringToTerraform(this._route),
      route_life_time: cdktf.numberToTerraform(this._routeLifeTime),
      route_pref: cdktf.stringToTerraform(this._routePref),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route: {
        value: cdktf.stringToHclTerraform(this._route),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_life_time: {
        value: cdktf.numberToHclTerraform(this._routeLifeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_pref: {
        value: cdktf.stringToHclTerraform(this._routePref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
