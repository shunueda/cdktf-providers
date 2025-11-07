// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_redistribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterRipRedistributeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_redistribute#device_name RouterRipRedistributeA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_redistribute#device_vdom RouterRipRedistributeA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_redistribute#id RouterRipRedistributeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_redistribute#metric RouterRipRedistributeA#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_redistribute#name RouterRipRedistributeA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_redistribute#routemap RouterRipRedistributeA#routemap}
  */
  readonly routemap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_redistribute#status RouterRipRedistributeA#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_redistribute fmgdevice_router_rip_redistribute}
*/
export class RouterRipRedistributeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_rip_redistribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterRipRedistributeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterRipRedistributeA to import
  * @param importFromId The id of the existing RouterRipRedistributeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_redistribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterRipRedistributeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_rip_redistribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip_redistribute fmgdevice_router_rip_redistribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterRipRedistributeAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterRipRedistributeAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_rip_redistribute',
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
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._metric = config.metric;
    this._name = config.name;
    this._routemap = config.routemap;
    this._status = config.status;
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

  // routemap - computed: true, optional: true, required: false
  private _routemap?: string[]; 
  public get routemap() {
    return cdktf.Fn.tolist(this.getListAttribute('routemap'));
  }
  public set routemap(value: string[]) {
    this._routemap = value;
  }
  public resetRoutemap() {
    this._routemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routemapInput() {
    return this._routemap;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      metric: cdktf.numberToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      routemap: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routemap),
      status: cdktf.stringToTerraform(this._status),
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
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
      metric: {
        value: cdktf.numberToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routemap: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routemap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
