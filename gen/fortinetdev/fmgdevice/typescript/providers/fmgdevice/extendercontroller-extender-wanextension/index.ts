// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender_wanextension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtendercontrollerExtenderWanextensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender_wanextension#device_name ExtendercontrollerExtenderWanextension#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender_wanextension#device_vdom ExtendercontrollerExtenderWanextension#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender_wanextension#extender ExtendercontrollerExtenderWanextension#extender}
  */
  readonly extender: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender_wanextension#id ExtendercontrollerExtenderWanextension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender_wanextension#modem1_extension ExtendercontrollerExtenderWanextension#modem1_extension}
  */
  readonly modem1Extension?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender_wanextension#modem2_extension ExtendercontrollerExtenderWanextension#modem2_extension}
  */
  readonly modem2Extension?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender_wanextension fmgdevice_extendercontroller_extender_wanextension}
*/
export class ExtendercontrollerExtenderWanextension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_extendercontroller_extender_wanextension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtendercontrollerExtenderWanextension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtendercontrollerExtenderWanextension to import
  * @param importFromId The id of the existing ExtendercontrollerExtenderWanextension that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender_wanextension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtendercontrollerExtenderWanextension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_extendercontroller_extender_wanextension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender_wanextension fmgdevice_extendercontroller_extender_wanextension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtendercontrollerExtenderWanextensionConfig
  */
  public constructor(scope: Construct, id: string, config: ExtendercontrollerExtenderWanextensionConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_extendercontroller_extender_wanextension',
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
    this._extender = config.extender;
    this._id = config.id;
    this._modem1Extension = config.modem1Extension;
    this._modem2Extension = config.modem2Extension;
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

  // extender - computed: false, optional: false, required: true
  private _extender?: string; 
  public get extender() {
    return this.getStringAttribute('extender');
  }
  public set extender(value: string) {
    this._extender = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extenderInput() {
    return this._extender;
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

  // modem1_extension - computed: true, optional: true, required: false
  private _modem1Extension?: string[]; 
  public get modem1Extension() {
    return cdktf.Fn.tolist(this.getListAttribute('modem1_extension'));
  }
  public set modem1Extension(value: string[]) {
    this._modem1Extension = value;
  }
  public resetModem1Extension() {
    this._modem1Extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem1ExtensionInput() {
    return this._modem1Extension;
  }

  // modem2_extension - computed: true, optional: true, required: false
  private _modem2Extension?: string[]; 
  public get modem2Extension() {
    return cdktf.Fn.tolist(this.getListAttribute('modem2_extension'));
  }
  public set modem2Extension(value: string[]) {
    this._modem2Extension = value;
  }
  public resetModem2Extension() {
    this._modem2Extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem2ExtensionInput() {
    return this._modem2Extension;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      extender: cdktf.stringToTerraform(this._extender),
      id: cdktf.stringToTerraform(this._id),
      modem1_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(this._modem1Extension),
      modem2_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(this._modem2Extension),
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
      extender: {
        value: cdktf.stringToHclTerraform(this._extender),
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
      modem1_extension: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._modem1Extension),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      modem2_extension: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._modem2Extension),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
