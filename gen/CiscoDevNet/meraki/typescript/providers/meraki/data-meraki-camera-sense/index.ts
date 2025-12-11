// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/camera_sense
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiCameraSenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/camera_sense#serial DataMerakiCameraSense#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/camera_sense meraki_camera_sense}
*/
export class DataMerakiCameraSense extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_camera_sense";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiCameraSense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiCameraSense to import
  * @param importFromId The id of the existing DataMerakiCameraSense that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/camera_sense#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiCameraSense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_camera_sense", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/camera_sense meraki_camera_sense} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiCameraSenseConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiCameraSenseConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_camera_sense',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audio_detection_enabled - computed: true, optional: false, required: false
  public get audioDetectionEnabled() {
    return this.getBooleanAttribute('audio_detection_enabled');
  }

  // detection_model_id - computed: true, optional: false, required: false
  public get detectionModelId() {
    return this.getStringAttribute('detection_model_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mqtt_broker_id - computed: true, optional: false, required: false
  public get mqttBrokerId() {
    return this.getStringAttribute('mqtt_broker_id');
  }

  // sense_enabled - computed: true, optional: false, required: false
  public get senseEnabled() {
    return this.getBooleanAttribute('sense_enabled');
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
