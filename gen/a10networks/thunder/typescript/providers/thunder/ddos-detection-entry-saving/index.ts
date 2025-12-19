// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_entry_saving
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDetectionEntrySavingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clear all saved network-object-based detection entries and learned indicators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_entry_saving#clear_saved_data DdosDetectionEntrySavingA#clear_saved_data}
  */
  readonly clearSavedData?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_entry_saving#id DdosDetectionEntrySavingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Manually restore network-object-based detection entries and learned indicators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_entry_saving#manual_restore DdosDetectionEntrySavingA#manual_restore}
  */
  readonly manualRestore?: number;
  /**
  * Manually save network-object-based detection entries and learned indicators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_entry_saving#manual_save DdosDetectionEntrySavingA#manual_save}
  */
  readonly manualSave?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_entry_saving#uuid DdosDetectionEntrySavingA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_entry_saving thunder_ddos_detection_entry_saving}
*/
export class DdosDetectionEntrySavingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection_entry_saving";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDetectionEntrySavingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDetectionEntrySavingA to import
  * @param importFromId The id of the existing DdosDetectionEntrySavingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_entry_saving#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDetectionEntrySavingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_entry_saving", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_entry_saving thunder_ddos_detection_entry_saving} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDetectionEntrySavingAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosDetectionEntrySavingAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection_entry_saving',
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
    this._clearSavedData = config.clearSavedData;
    this._id = config.id;
    this._manualRestore = config.manualRestore;
    this._manualSave = config.manualSave;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clear_saved_data - computed: false, optional: true, required: false
  private _clearSavedData?: number; 
  public get clearSavedData() {
    return this.getNumberAttribute('clear_saved_data');
  }
  public set clearSavedData(value: number) {
    this._clearSavedData = value;
  }
  public resetClearSavedData() {
    this._clearSavedData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSavedDataInput() {
    return this._clearSavedData;
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

  // manual_restore - computed: false, optional: true, required: false
  private _manualRestore?: number; 
  public get manualRestore() {
    return this.getNumberAttribute('manual_restore');
  }
  public set manualRestore(value: number) {
    this._manualRestore = value;
  }
  public resetManualRestore() {
    this._manualRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualRestoreInput() {
    return this._manualRestore;
  }

  // manual_save - computed: false, optional: true, required: false
  private _manualSave?: number; 
  public get manualSave() {
    return this.getNumberAttribute('manual_save');
  }
  public set manualSave(value: number) {
    this._manualSave = value;
  }
  public resetManualSave() {
    this._manualSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualSaveInput() {
    return this._manualSave;
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
      clear_saved_data: cdktf.numberToTerraform(this._clearSavedData),
      id: cdktf.stringToTerraform(this._id),
      manual_restore: cdktf.numberToTerraform(this._manualRestore),
      manual_save: cdktf.numberToTerraform(this._manualSave),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clear_saved_data: {
        value: cdktf.numberToHclTerraform(this._clearSavedData),
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
      manual_restore: {
        value: cdktf.numberToHclTerraform(this._manualRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      manual_save: {
        value: cdktf.numberToHclTerraform(this._manualSave),
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
