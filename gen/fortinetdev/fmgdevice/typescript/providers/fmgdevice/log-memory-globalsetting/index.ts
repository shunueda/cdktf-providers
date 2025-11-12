// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_memory_globalsetting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogMemoryGlobalsettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_memory_globalsetting#device_name LogMemoryGlobalsetting#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_memory_globalsetting#full_final_warning_threshold LogMemoryGlobalsetting#full_final_warning_threshold}
  */
  readonly fullFinalWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_memory_globalsetting#full_first_warning_threshold LogMemoryGlobalsetting#full_first_warning_threshold}
  */
  readonly fullFirstWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_memory_globalsetting#full_second_warning_threshold LogMemoryGlobalsetting#full_second_warning_threshold}
  */
  readonly fullSecondWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_memory_globalsetting#id LogMemoryGlobalsetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_memory_globalsetting#max_size LogMemoryGlobalsetting#max_size}
  */
  readonly maxSize?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_memory_globalsetting fmgdevice_log_memory_globalsetting}
*/
export class LogMemoryGlobalsetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_log_memory_globalsetting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogMemoryGlobalsetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogMemoryGlobalsetting to import
  * @param importFromId The id of the existing LogMemoryGlobalsetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_memory_globalsetting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogMemoryGlobalsetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_log_memory_globalsetting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_memory_globalsetting fmgdevice_log_memory_globalsetting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogMemoryGlobalsettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogMemoryGlobalsettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_log_memory_globalsetting',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
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
    this._fullFinalWarningThreshold = config.fullFinalWarningThreshold;
    this._fullFirstWarningThreshold = config.fullFirstWarningThreshold;
    this._fullSecondWarningThreshold = config.fullSecondWarningThreshold;
    this._id = config.id;
    this._maxSize = config.maxSize;
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

  // full_final_warning_threshold - computed: true, optional: true, required: false
  private _fullFinalWarningThreshold?: number; 
  public get fullFinalWarningThreshold() {
    return this.getNumberAttribute('full_final_warning_threshold');
  }
  public set fullFinalWarningThreshold(value: number) {
    this._fullFinalWarningThreshold = value;
  }
  public resetFullFinalWarningThreshold() {
    this._fullFinalWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullFinalWarningThresholdInput() {
    return this._fullFinalWarningThreshold;
  }

  // full_first_warning_threshold - computed: true, optional: true, required: false
  private _fullFirstWarningThreshold?: number; 
  public get fullFirstWarningThreshold() {
    return this.getNumberAttribute('full_first_warning_threshold');
  }
  public set fullFirstWarningThreshold(value: number) {
    this._fullFirstWarningThreshold = value;
  }
  public resetFullFirstWarningThreshold() {
    this._fullFirstWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullFirstWarningThresholdInput() {
    return this._fullFirstWarningThreshold;
  }

  // full_second_warning_threshold - computed: true, optional: true, required: false
  private _fullSecondWarningThreshold?: number; 
  public get fullSecondWarningThreshold() {
    return this.getNumberAttribute('full_second_warning_threshold');
  }
  public set fullSecondWarningThreshold(value: number) {
    this._fullSecondWarningThreshold = value;
  }
  public resetFullSecondWarningThreshold() {
    this._fullSecondWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullSecondWarningThresholdInput() {
    return this._fullSecondWarningThreshold;
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

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      full_final_warning_threshold: cdktf.numberToTerraform(this._fullFinalWarningThreshold),
      full_first_warning_threshold: cdktf.numberToTerraform(this._fullFirstWarningThreshold),
      full_second_warning_threshold: cdktf.numberToTerraform(this._fullSecondWarningThreshold),
      id: cdktf.stringToTerraform(this._id),
      max_size: cdktf.numberToTerraform(this._maxSize),
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
      full_final_warning_threshold: {
        value: cdktf.numberToHclTerraform(this._fullFinalWarningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      full_first_warning_threshold: {
        value: cdktf.numberToHclTerraform(this._fullFirstWarningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      full_second_warning_threshold: {
        value: cdktf.numberToHclTerraform(this._fullSecondWarningThreshold),
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
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
