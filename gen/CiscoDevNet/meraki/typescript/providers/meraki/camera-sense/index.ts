// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_sense
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CameraSenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean indicating if audio detection is enabled(true) or disabled(false) on the camera
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_sense#audio_detection_enabled CameraSense#audio_detection_enabled}
  */
  readonly audioDetectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the object detection model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_sense#detection_model_id CameraSense#detection_model_id}
  */
  readonly detectionModelId?: string;
  /**
  * The ID of the MQTT broker to be enabled on the camera. A value of null will disable MQTT on the camera
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_sense#mqtt_broker_id CameraSense#mqtt_broker_id}
  */
  readonly mqttBrokerId?: string;
  /**
  * Boolean indicating if sense(license) is enabled(true) or disabled(false) on the camera
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_sense#sense_enabled CameraSense#sense_enabled}
  */
  readonly senseEnabled?: boolean | cdktf.IResolvable;
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_sense#serial CameraSense#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_sense meraki_camera_sense}
*/
export class CameraSense extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_camera_sense";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CameraSense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CameraSense to import
  * @param importFromId The id of the existing CameraSense that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_sense#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CameraSense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_camera_sense", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_sense meraki_camera_sense} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CameraSenseConfig
  */
  public constructor(scope: Construct, id: string, config: CameraSenseConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_camera_sense',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audioDetectionEnabled = config.audioDetectionEnabled;
    this._detectionModelId = config.detectionModelId;
    this._mqttBrokerId = config.mqttBrokerId;
    this._senseEnabled = config.senseEnabled;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audio_detection_enabled - computed: false, optional: true, required: false
  private _audioDetectionEnabled?: boolean | cdktf.IResolvable; 
  public get audioDetectionEnabled() {
    return this.getBooleanAttribute('audio_detection_enabled');
  }
  public set audioDetectionEnabled(value: boolean | cdktf.IResolvable) {
    this._audioDetectionEnabled = value;
  }
  public resetAudioDetectionEnabled() {
    this._audioDetectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioDetectionEnabledInput() {
    return this._audioDetectionEnabled;
  }

  // detection_model_id - computed: false, optional: true, required: false
  private _detectionModelId?: string; 
  public get detectionModelId() {
    return this.getStringAttribute('detection_model_id');
  }
  public set detectionModelId(value: string) {
    this._detectionModelId = value;
  }
  public resetDetectionModelId() {
    this._detectionModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModelIdInput() {
    return this._detectionModelId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mqtt_broker_id - computed: false, optional: true, required: false
  private _mqttBrokerId?: string; 
  public get mqttBrokerId() {
    return this.getStringAttribute('mqtt_broker_id');
  }
  public set mqttBrokerId(value: string) {
    this._mqttBrokerId = value;
  }
  public resetMqttBrokerId() {
    this._mqttBrokerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttBrokerIdInput() {
    return this._mqttBrokerId;
  }

  // sense_enabled - computed: false, optional: true, required: false
  private _senseEnabled?: boolean | cdktf.IResolvable; 
  public get senseEnabled() {
    return this.getBooleanAttribute('sense_enabled');
  }
  public set senseEnabled(value: boolean | cdktf.IResolvable) {
    this._senseEnabled = value;
  }
  public resetSenseEnabled() {
    this._senseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senseEnabledInput() {
    return this._senseEnabled;
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
      audio_detection_enabled: cdktf.booleanToTerraform(this._audioDetectionEnabled),
      detection_model_id: cdktf.stringToTerraform(this._detectionModelId),
      mqtt_broker_id: cdktf.stringToTerraform(this._mqttBrokerId),
      sense_enabled: cdktf.booleanToTerraform(this._senseEnabled),
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audio_detection_enabled: {
        value: cdktf.booleanToHclTerraform(this._audioDetectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detection_model_id: {
        value: cdktf.stringToHclTerraform(this._detectionModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mqtt_broker_id: {
        value: cdktf.stringToHclTerraform(this._mqttBrokerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sense_enabled: {
        value: cdktf.booleanToHclTerraform(this._senseEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
