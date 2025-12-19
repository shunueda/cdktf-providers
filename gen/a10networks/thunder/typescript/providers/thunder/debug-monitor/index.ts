// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display debug output of both Master and Blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_monitor#all_slots DebugMonitor#all_slots}
  */
  readonly allSlots?: number;
  /**
  * CPU id to debug (0,1,...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_monitor#cpuid DebugMonitor#cpuid}
  */
  readonly cpuid?: number;
  /**
  * Filename to save debug output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_monitor#filename DebugMonitor#filename}
  */
  readonly filename?: string;
  /**
  * maximum file size to save debug messages (MB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_monitor#filesize DebugMonitor#filesize}
  */
  readonly filesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_monitor#id DebugMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Donot spawn another rimacli
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_monitor#no_stop DebugMonitor#no_stop}
  */
  readonly noStop?: number;
  /**
  * timeout to stop debug monitor in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_monitor#timeout DebugMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_monitor#uuid DebugMonitor#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_monitor thunder_debug_monitor}
*/
export class DebugMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugMonitor to import
  * @param importFromId The id of the existing DebugMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_monitor thunder_debug_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugMonitorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugMonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_monitor',
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
    this._allSlots = config.allSlots;
    this._cpuid = config.cpuid;
    this._filename = config.filename;
    this._filesize = config.filesize;
    this._id = config.id;
    this._noStop = config.noStop;
    this._timeout = config.timeout;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_slots - computed: false, optional: true, required: false
  private _allSlots?: number; 
  public get allSlots() {
    return this.getNumberAttribute('all_slots');
  }
  public set allSlots(value: number) {
    this._allSlots = value;
  }
  public resetAllSlots() {
    this._allSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSlotsInput() {
    return this._allSlots;
  }

  // cpuid - computed: false, optional: true, required: false
  private _cpuid?: number; 
  public get cpuid() {
    return this.getNumberAttribute('cpuid');
  }
  public set cpuid(value: number) {
    this._cpuid = value;
  }
  public resetCpuid() {
    this._cpuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuidInput() {
    return this._cpuid;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // filesize - computed: false, optional: true, required: false
  private _filesize?: number; 
  public get filesize() {
    return this.getNumberAttribute('filesize');
  }
  public set filesize(value: number) {
    this._filesize = value;
  }
  public resetFilesize() {
    this._filesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesizeInput() {
    return this._filesize;
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

  // no_stop - computed: false, optional: true, required: false
  private _noStop?: number; 
  public get noStop() {
    return this.getNumberAttribute('no_stop');
  }
  public set noStop(value: number) {
    this._noStop = value;
  }
  public resetNoStop() {
    this._noStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStopInput() {
    return this._noStop;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
      all_slots: cdktf.numberToTerraform(this._allSlots),
      cpuid: cdktf.numberToTerraform(this._cpuid),
      filename: cdktf.stringToTerraform(this._filename),
      filesize: cdktf.numberToTerraform(this._filesize),
      id: cdktf.stringToTerraform(this._id),
      no_stop: cdktf.numberToTerraform(this._noStop),
      timeout: cdktf.numberToTerraform(this._timeout),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_slots: {
        value: cdktf.numberToHclTerraform(this._allSlots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpuid: {
        value: cdktf.numberToHclTerraform(this._cpuid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filesize: {
        value: cdktf.numberToHclTerraform(this._filesize),
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
      no_stop: {
        value: cdktf.numberToHclTerraform(this._noStop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
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
