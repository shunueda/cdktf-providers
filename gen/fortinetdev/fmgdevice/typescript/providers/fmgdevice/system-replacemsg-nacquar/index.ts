// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_replacemsg_nacquar
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemReplacemsgNacquarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_replacemsg_nacquar#buffer SystemReplacemsgNacquar#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_replacemsg_nacquar#device_name SystemReplacemsgNacquar#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_replacemsg_nacquar#format SystemReplacemsgNacquar#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_replacemsg_nacquar#header SystemReplacemsgNacquar#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_replacemsg_nacquar#id SystemReplacemsgNacquar#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_replacemsg_nacquar#msg_type SystemReplacemsgNacquar#msg_type}
  */
  readonly msgType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_replacemsg_nacquar fmgdevice_system_replacemsg_nacquar}
*/
export class SystemReplacemsgNacquar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_replacemsg_nacquar";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemReplacemsgNacquar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemReplacemsgNacquar to import
  * @param importFromId The id of the existing SystemReplacemsgNacquar that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_replacemsg_nacquar#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemReplacemsgNacquar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_replacemsg_nacquar", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_replacemsg_nacquar fmgdevice_system_replacemsg_nacquar} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemReplacemsgNacquarConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemReplacemsgNacquarConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_replacemsg_nacquar',
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
    this._buffer = config.buffer;
    this._deviceName = config.deviceName;
    this._format = config.format;
    this._header = config.header;
    this._id = config.id;
    this._msgType = config.msgType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // buffer - computed: true, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
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

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
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

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      buffer: cdktf.stringToTerraform(this._buffer),
      device_name: cdktf.stringToTerraform(this._deviceName),
      format: cdktf.stringToTerraform(this._format),
      header: cdktf.stringToTerraform(this._header),
      id: cdktf.stringToTerraform(this._id),
      msg_type: cdktf.stringToTerraform(this._msgType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      buffer: {
        value: cdktf.stringToHclTerraform(this._buffer),
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
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header: {
        value: cdktf.stringToHclTerraform(this._header),
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
      msg_type: {
        value: cdktf.stringToHclTerraform(this._msgType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
