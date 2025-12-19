// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_entry_saving
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDetectionSettingsEntrySavingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable auto-restoring when system boots up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_entry_saving#disable_bootup_restore DdosDetectionSettingsEntrySavingA#disable_bootup_restore}
  */
  readonly disableBootupRestore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_entry_saving#id DdosDetectionSettingsEntrySavingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure periodical auto-saving interval in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_entry_saving#interval DdosDetectionSettingsEntrySavingA#interval}
  */
  readonly interval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_entry_saving#uuid DdosDetectionSettingsEntrySavingA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_entry_saving thunder_ddos_detection_settings_entry_saving}
*/
export class DdosDetectionSettingsEntrySavingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection_settings_entry_saving";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDetectionSettingsEntrySavingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDetectionSettingsEntrySavingA to import
  * @param importFromId The id of the existing DdosDetectionSettingsEntrySavingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_entry_saving#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDetectionSettingsEntrySavingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_settings_entry_saving", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_entry_saving thunder_ddos_detection_settings_entry_saving} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDetectionSettingsEntrySavingAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosDetectionSettingsEntrySavingAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection_settings_entry_saving',
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
    this._disableBootupRestore = config.disableBootupRestore;
    this._id = config.id;
    this._interval = config.interval;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_bootup_restore - computed: false, optional: true, required: false
  private _disableBootupRestore?: number; 
  public get disableBootupRestore() {
    return this.getNumberAttribute('disable_bootup_restore');
  }
  public set disableBootupRestore(value: number) {
    this._disableBootupRestore = value;
  }
  public resetDisableBootupRestore() {
    this._disableBootupRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBootupRestoreInput() {
    return this._disableBootupRestore;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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
      disable_bootup_restore: cdktf.numberToTerraform(this._disableBootupRestore),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_bootup_restore: {
        value: cdktf.numberToHclTerraform(this._disableBootupRestore),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
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
