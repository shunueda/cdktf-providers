// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_elinnumber
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerLocationElinnumberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_elinnumber#device_name SwitchcontrollerLocationElinnumber#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_elinnumber#device_vdom SwitchcontrollerLocationElinnumber#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_elinnumber#elin_num SwitchcontrollerLocationElinnumber#elin_num}
  */
  readonly elinNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_elinnumber#id SwitchcontrollerLocationElinnumber#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_elinnumber#location SwitchcontrollerLocationElinnumber#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_elinnumber#parent_key SwitchcontrollerLocationElinnumber#parent_key}
  */
  readonly parentKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_elinnumber fmgdevice_switchcontroller_location_elinnumber}
*/
export class SwitchcontrollerLocationElinnumber extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_location_elinnumber";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerLocationElinnumber resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerLocationElinnumber to import
  * @param importFromId The id of the existing SwitchcontrollerLocationElinnumber that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_elinnumber#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerLocationElinnumber to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_location_elinnumber", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_elinnumber fmgdevice_switchcontroller_location_elinnumber} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerLocationElinnumberConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerLocationElinnumberConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_location_elinnumber',
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
    this._elinNum = config.elinNum;
    this._id = config.id;
    this._location = config.location;
    this._parentKey = config.parentKey;
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

  // elin_num - computed: false, optional: true, required: false
  private _elinNum?: string; 
  public get elinNum() {
    return this.getStringAttribute('elin_num');
  }
  public set elinNum(value: string) {
    this._elinNum = value;
  }
  public resetElinNum() {
    this._elinNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elinNumInput() {
    return this._elinNum;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // parent_key - computed: false, optional: true, required: false
  private _parentKey?: string; 
  public get parentKey() {
    return this.getStringAttribute('parent_key');
  }
  public set parentKey(value: string) {
    this._parentKey = value;
  }
  public resetParentKey() {
    this._parentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentKeyInput() {
    return this._parentKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      elin_num: cdktf.stringToTerraform(this._elinNum),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      parent_key: cdktf.stringToTerraform(this._parentKey),
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
      elin_num: {
        value: cdktf.stringToHclTerraform(this._elinNum),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_key: {
        value: cdktf.stringToHclTerraform(this._parentKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
