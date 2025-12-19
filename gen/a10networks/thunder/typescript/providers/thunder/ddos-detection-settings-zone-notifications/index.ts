// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_zone_notifications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDetectionSettingsZoneNotificationsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_zone_notifications#id DdosDetectionSettingsZoneNotificationsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable source entry detection notification; 'disable': Disable source entry detection notification(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_zone_notifications#source_entry DdosDetectionSettingsZoneNotificationsA#source_entry}
  */
  readonly sourceEntry?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_zone_notifications#uuid DdosDetectionSettingsZoneNotificationsA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_zone_notifications thunder_ddos_detection_settings_zone_notifications}
*/
export class DdosDetectionSettingsZoneNotificationsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection_settings_zone_notifications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDetectionSettingsZoneNotificationsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDetectionSettingsZoneNotificationsA to import
  * @param importFromId The id of the existing DdosDetectionSettingsZoneNotificationsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_zone_notifications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDetectionSettingsZoneNotificationsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_settings_zone_notifications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_zone_notifications thunder_ddos_detection_settings_zone_notifications} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDetectionSettingsZoneNotificationsAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosDetectionSettingsZoneNotificationsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection_settings_zone_notifications',
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
    this._sourceEntry = config.sourceEntry;
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

  // source_entry - computed: false, optional: true, required: false
  private _sourceEntry?: string; 
  public get sourceEntry() {
    return this.getStringAttribute('source_entry');
  }
  public set sourceEntry(value: string) {
    this._sourceEntry = value;
  }
  public resetSourceEntry() {
    this._sourceEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntryInput() {
    return this._sourceEntry;
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
      source_entry: cdktf.stringToTerraform(this._sourceEntry),
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
      source_entry: {
        value: cdktf.stringToHclTerraform(this._sourceEntry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
