// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ips#device_name SystemIps#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ips#device_vdom SystemIps#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ips#id SystemIps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ips#override_signature_hold_by_id SystemIps#override_signature_hold_by_id}
  */
  readonly overrideSignatureHoldById?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ips#signature_hold_time SystemIps#signature_hold_time}
  */
  readonly signatureHoldTime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ips fmgdevice_system_ips}
*/
export class SystemIps extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_ips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIps to import
  * @param importFromId The id of the existing SystemIps that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_ips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ips fmgdevice_system_ips} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIpsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_ips',
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
    this._overrideSignatureHoldById = config.overrideSignatureHoldById;
    this._signatureHoldTime = config.signatureHoldTime;
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

  // override_signature_hold_by_id - computed: false, optional: true, required: false
  private _overrideSignatureHoldById?: string; 
  public get overrideSignatureHoldById() {
    return this.getStringAttribute('override_signature_hold_by_id');
  }
  public set overrideSignatureHoldById(value: string) {
    this._overrideSignatureHoldById = value;
  }
  public resetOverrideSignatureHoldById() {
    this._overrideSignatureHoldById = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSignatureHoldByIdInput() {
    return this._overrideSignatureHoldById;
  }

  // signature_hold_time - computed: true, optional: true, required: false
  private _signatureHoldTime?: string; 
  public get signatureHoldTime() {
    return this.getStringAttribute('signature_hold_time');
  }
  public set signatureHoldTime(value: string) {
    this._signatureHoldTime = value;
  }
  public resetSignatureHoldTime() {
    this._signatureHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureHoldTimeInput() {
    return this._signatureHoldTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      override_signature_hold_by_id: cdktf.stringToTerraform(this._overrideSignatureHoldById),
      signature_hold_time: cdktf.stringToTerraform(this._signatureHoldTime),
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
      override_signature_hold_by_id: {
        value: cdktf.stringToHclTerraform(this._overrideSignatureHoldById),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_hold_time: {
        value: cdktf.stringToHclTerraform(this._signatureHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
