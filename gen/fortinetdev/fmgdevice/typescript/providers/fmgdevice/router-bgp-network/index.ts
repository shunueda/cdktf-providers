// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpNetworkAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network#backdoor RouterBgpNetworkA#backdoor}
  */
  readonly backdoor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network#device_name RouterBgpNetworkA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network#device_vdom RouterBgpNetworkA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network#fosid RouterBgpNetworkA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network#id RouterBgpNetworkA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network#network_import_check RouterBgpNetworkA#network_import_check}
  */
  readonly networkImportCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network#prefix RouterBgpNetworkA#prefix}
  */
  readonly prefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network#prefix_name RouterBgpNetworkA#prefix_name}
  */
  readonly prefixName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network#route_map RouterBgpNetworkA#route_map}
  */
  readonly routeMap?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network fmgdevice_router_bgp_network}
*/
export class RouterBgpNetworkA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_bgp_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpNetworkA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpNetworkA to import
  * @param importFromId The id of the existing RouterBgpNetworkA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpNetworkA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_bgp_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_network fmgdevice_router_bgp_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpNetworkAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterBgpNetworkAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_bgp_network',
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
    this._backdoor = config.backdoor;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fosid = config.fosid;
    this._id = config.id;
    this._networkImportCheck = config.networkImportCheck;
    this._prefix = config.prefix;
    this._prefixName = config.prefixName;
    this._routeMap = config.routeMap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backdoor - computed: true, optional: true, required: false
  private _backdoor?: string; 
  public get backdoor() {
    return this.getStringAttribute('backdoor');
  }
  public set backdoor(value: string) {
    this._backdoor = value;
  }
  public resetBackdoor() {
    this._backdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorInput() {
    return this._backdoor;
  }

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

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // network_import_check - computed: true, optional: true, required: false
  private _networkImportCheck?: string; 
  public get networkImportCheck() {
    return this.getStringAttribute('network_import_check');
  }
  public set networkImportCheck(value: string) {
    this._networkImportCheck = value;
  }
  public resetNetworkImportCheck() {
    this._networkImportCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkImportCheckInput() {
    return this._networkImportCheck;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_name - computed: true, optional: true, required: false
  private _prefixName?: string[]; 
  public get prefixName() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_name'));
  }
  public set prefixName(value: string[]) {
    this._prefixName = value;
  }
  public resetPrefixName() {
    this._prefixName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNameInput() {
    return this._prefixName;
  }

  // route_map - computed: true, optional: true, required: false
  private _routeMap?: string[]; 
  public get routeMap() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map'));
  }
  public set routeMap(value: string[]) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backdoor: cdktf.stringToTerraform(this._backdoor),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      network_import_check: cdktf.stringToTerraform(this._networkImportCheck),
      prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefix),
      prefix_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixName),
      route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routeMap),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backdoor: {
        value: cdktf.stringToHclTerraform(this._backdoor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_import_check: {
        value: cdktf.stringToHclTerraform(this._networkImportCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefix),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      prefix_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route_map: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routeMap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
