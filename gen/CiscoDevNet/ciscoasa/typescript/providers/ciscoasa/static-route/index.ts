// https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/static_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StaticRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/static_route#gateway StaticRoute#gateway}
  */
  readonly gateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/static_route#id StaticRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/static_route#interface StaticRoute#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/static_route#metric StaticRoute#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/static_route#network StaticRoute#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/static_route#tracked StaticRoute#tracked}
  */
  readonly tracked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/static_route#tunneled StaticRoute#tunneled}
  */
  readonly tunneled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/static_route ciscoasa_static_route}
*/
export class StaticRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscoasa_static_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StaticRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StaticRoute to import
  * @param importFromId The id of the existing StaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/static_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StaticRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscoasa_static_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/static_route ciscoasa_static_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StaticRouteConfig
  */
  public constructor(scope: Construct, id: string, config: StaticRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscoasa_static_route',
      terraformGeneratorMetadata: {
        providerName: 'ciscoasa',
        providerVersion: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gateway = config.gateway;
    this._id = config.id;
    this._interface = config.interface;
    this._metric = config.metric;
    this._network = config.network;
    this._tracked = config.tracked;
    this._tunneled = config.tunneled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // tracked - computed: false, optional: true, required: false
  private _tracked?: boolean | cdktf.IResolvable; 
  public get tracked() {
    return this.getBooleanAttribute('tracked');
  }
  public set tracked(value: boolean | cdktf.IResolvable) {
    this._tracked = value;
  }
  public resetTracked() {
    this._tracked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackedInput() {
    return this._tracked;
  }

  // tunneled - computed: false, optional: true, required: false
  private _tunneled?: boolean | cdktf.IResolvable; 
  public get tunneled() {
    return this.getBooleanAttribute('tunneled');
  }
  public set tunneled(value: boolean | cdktf.IResolvable) {
    this._tunneled = value;
  }
  public resetTunneled() {
    this._tunneled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunneledInput() {
    return this._tunneled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      metric: cdktf.numberToTerraform(this._metric),
      network: cdktf.stringToTerraform(this._network),
      tracked: cdktf.booleanToTerraform(this._tracked),
      tunneled: cdktf.booleanToTerraform(this._tunneled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      metric: {
        value: cdktf.numberToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracked: {
        value: cdktf.booleanToHclTerraform(this._tracked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunneled: {
        value: cdktf.booleanToHclTerraform(this._tunneled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
