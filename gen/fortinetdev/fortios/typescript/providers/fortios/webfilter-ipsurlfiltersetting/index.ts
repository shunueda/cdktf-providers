// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_ipsurlfiltersetting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebfilterIpsurlfiltersettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_ipsurlfiltersetting#device WebfilterIpsurlfiltersetting#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_ipsurlfiltersetting#distance WebfilterIpsurlfiltersetting#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_ipsurlfiltersetting#gateway WebfilterIpsurlfiltersetting#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_ipsurlfiltersetting#geo_filter WebfilterIpsurlfiltersetting#geo_filter}
  */
  readonly geoFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_ipsurlfiltersetting#id WebfilterIpsurlfiltersetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_ipsurlfiltersetting#vdomparam WebfilterIpsurlfiltersetting#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_ipsurlfiltersetting fortios_webfilter_ipsurlfiltersetting}
*/
export class WebfilterIpsurlfiltersetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_webfilter_ipsurlfiltersetting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebfilterIpsurlfiltersetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebfilterIpsurlfiltersetting to import
  * @param importFromId The id of the existing WebfilterIpsurlfiltersetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_ipsurlfiltersetting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebfilterIpsurlfiltersetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_webfilter_ipsurlfiltersetting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_ipsurlfiltersetting fortios_webfilter_ipsurlfiltersetting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebfilterIpsurlfiltersettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebfilterIpsurlfiltersettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_webfilter_ipsurlfiltersetting',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._distance = config.distance;
    this._gateway = config.gateway;
    this._geoFilter = config.geoFilter;
    this._id = config.id;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // distance - computed: true, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // geo_filter - computed: false, optional: true, required: false
  private _geoFilter?: string; 
  public get geoFilter() {
    return this.getStringAttribute('geo_filter');
  }
  public set geoFilter(value: string) {
    this._geoFilter = value;
  }
  public resetGeoFilter() {
    this._geoFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoFilterInput() {
    return this._geoFilter;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      distance: cdktf.numberToTerraform(this._distance),
      gateway: cdktf.stringToTerraform(this._gateway),
      geo_filter: cdktf.stringToTerraform(this._geoFilter),
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance: {
        value: cdktf.numberToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_filter: {
        value: cdktf.stringToHclTerraform(this._geoFilter),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
