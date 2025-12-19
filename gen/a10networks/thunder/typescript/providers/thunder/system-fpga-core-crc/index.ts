// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fpga_core_crc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFpgaCoreCrcAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fpga_core_crc#id SystemFpgaCoreCrcA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Disable FPGA Core CRC error monitoring and act on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fpga_core_crc#monitor_disable SystemFpgaCoreCrcA#monitor_disable}
  */
  readonly monitorDisable?: number;
  /**
  * Enable system reboot if system encounters FPGA Core CRC error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fpga_core_crc#reboot_enable SystemFpgaCoreCrcA#reboot_enable}
  */
  readonly rebootEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fpga_core_crc#uuid SystemFpgaCoreCrcA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fpga_core_crc thunder_system_fpga_core_crc}
*/
export class SystemFpgaCoreCrcA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_fpga_core_crc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFpgaCoreCrcA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFpgaCoreCrcA to import
  * @param importFromId The id of the existing SystemFpgaCoreCrcA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fpga_core_crc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFpgaCoreCrcA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_fpga_core_crc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fpga_core_crc thunder_system_fpga_core_crc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFpgaCoreCrcAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFpgaCoreCrcAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_fpga_core_crc',
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
    this._id = config.id;
    this._monitorDisable = config.monitorDisable;
    this._rebootEnable = config.rebootEnable;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // monitor_disable - computed: false, optional: true, required: false
  private _monitorDisable?: number; 
  public get monitorDisable() {
    return this.getNumberAttribute('monitor_disable');
  }
  public set monitorDisable(value: number) {
    this._monitorDisable = value;
  }
  public resetMonitorDisable() {
    this._monitorDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisableInput() {
    return this._monitorDisable;
  }

  // reboot_enable - computed: false, optional: true, required: false
  private _rebootEnable?: number; 
  public get rebootEnable() {
    return this.getNumberAttribute('reboot_enable');
  }
  public set rebootEnable(value: number) {
    this._rebootEnable = value;
  }
  public resetRebootEnable() {
    this._rebootEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootEnableInput() {
    return this._rebootEnable;
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
      id: cdktf.stringToTerraform(this._id),
      monitor_disable: cdktf.numberToTerraform(this._monitorDisable),
      reboot_enable: cdktf.numberToTerraform(this._rebootEnable),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_disable: {
        value: cdktf.numberToHclTerraform(this._monitorDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reboot_enable: {
        value: cdktf.numberToHclTerraform(this._rebootEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
