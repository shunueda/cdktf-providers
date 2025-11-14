// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert#adom ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert#data_exhausted ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA#data_exhausted}
  */
  readonly dataExhausted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert#extender_profile ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA#extender_profile}
  */
  readonly extenderProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert#fgt_backup_mode_switch ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA#fgt_backup_mode_switch}
  */
  readonly fgtBackupModeSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert#id ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert#low_signal_strength ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA#low_signal_strength}
  */
  readonly lowSignalStrength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert#mode_switch ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA#mode_switch}
  */
  readonly modeSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert#os_image_fallback ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA#os_image_fallback}
  */
  readonly osImageFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert#scopetype ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert#session_disconnect ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA#session_disconnect}
  */
  readonly sessionDisconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert#system_reboot ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA#system_reboot}
  */
  readonly systemReboot?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert fortimanager_object_extensioncontroller_extenderprofile_cellular_smsnotification_alert}
*/
export class ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extensioncontroller_extenderprofile_cellular_smsnotification_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA to import
  * @param importFromId The id of the existing ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extensioncontroller_extenderprofile_cellular_smsnotification_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification_alert fortimanager_object_extensioncontroller_extenderprofile_cellular_smsnotification_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extensioncontroller_extenderprofile_cellular_smsnotification_alert',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dataExhausted = config.dataExhausted;
    this._extenderProfile = config.extenderProfile;
    this._fgtBackupModeSwitch = config.fgtBackupModeSwitch;
    this._id = config.id;
    this._lowSignalStrength = config.lowSignalStrength;
    this._modeSwitch = config.modeSwitch;
    this._osImageFallback = config.osImageFallback;
    this._scopetype = config.scopetype;
    this._sessionDisconnect = config.sessionDisconnect;
    this._systemReboot = config.systemReboot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // data_exhausted - computed: true, optional: true, required: false
  private _dataExhausted?: string; 
  public get dataExhausted() {
    return this.getStringAttribute('data_exhausted');
  }
  public set dataExhausted(value: string) {
    this._dataExhausted = value;
  }
  public resetDataExhausted() {
    this._dataExhausted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExhaustedInput() {
    return this._dataExhausted;
  }

  // extender_profile - computed: false, optional: false, required: true
  private _extenderProfile?: string; 
  public get extenderProfile() {
    return this.getStringAttribute('extender_profile');
  }
  public set extenderProfile(value: string) {
    this._extenderProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extenderProfileInput() {
    return this._extenderProfile;
  }

  // fgt_backup_mode_switch - computed: true, optional: true, required: false
  private _fgtBackupModeSwitch?: string; 
  public get fgtBackupModeSwitch() {
    return this.getStringAttribute('fgt_backup_mode_switch');
  }
  public set fgtBackupModeSwitch(value: string) {
    this._fgtBackupModeSwitch = value;
  }
  public resetFgtBackupModeSwitch() {
    this._fgtBackupModeSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtBackupModeSwitchInput() {
    return this._fgtBackupModeSwitch;
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

  // low_signal_strength - computed: true, optional: true, required: false
  private _lowSignalStrength?: string; 
  public get lowSignalStrength() {
    return this.getStringAttribute('low_signal_strength');
  }
  public set lowSignalStrength(value: string) {
    this._lowSignalStrength = value;
  }
  public resetLowSignalStrength() {
    this._lowSignalStrength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSignalStrengthInput() {
    return this._lowSignalStrength;
  }

  // mode_switch - computed: true, optional: true, required: false
  private _modeSwitch?: string; 
  public get modeSwitch() {
    return this.getStringAttribute('mode_switch');
  }
  public set modeSwitch(value: string) {
    this._modeSwitch = value;
  }
  public resetModeSwitch() {
    this._modeSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeSwitchInput() {
    return this._modeSwitch;
  }

  // os_image_fallback - computed: true, optional: true, required: false
  private _osImageFallback?: string; 
  public get osImageFallback() {
    return this.getStringAttribute('os_image_fallback');
  }
  public set osImageFallback(value: string) {
    this._osImageFallback = value;
  }
  public resetOsImageFallback() {
    this._osImageFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageFallbackInput() {
    return this._osImageFallback;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // session_disconnect - computed: true, optional: true, required: false
  private _sessionDisconnect?: string; 
  public get sessionDisconnect() {
    return this.getStringAttribute('session_disconnect');
  }
  public set sessionDisconnect(value: string) {
    this._sessionDisconnect = value;
  }
  public resetSessionDisconnect() {
    this._sessionDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDisconnectInput() {
    return this._sessionDisconnect;
  }

  // system_reboot - computed: true, optional: true, required: false
  private _systemReboot?: string; 
  public get systemReboot() {
    return this.getStringAttribute('system_reboot');
  }
  public set systemReboot(value: string) {
    this._systemReboot = value;
  }
  public resetSystemReboot() {
    this._systemReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemRebootInput() {
    return this._systemReboot;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      data_exhausted: cdktf.stringToTerraform(this._dataExhausted),
      extender_profile: cdktf.stringToTerraform(this._extenderProfile),
      fgt_backup_mode_switch: cdktf.stringToTerraform(this._fgtBackupModeSwitch),
      id: cdktf.stringToTerraform(this._id),
      low_signal_strength: cdktf.stringToTerraform(this._lowSignalStrength),
      mode_switch: cdktf.stringToTerraform(this._modeSwitch),
      os_image_fallback: cdktf.stringToTerraform(this._osImageFallback),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      session_disconnect: cdktf.stringToTerraform(this._sessionDisconnect),
      system_reboot: cdktf.stringToTerraform(this._systemReboot),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_exhausted: {
        value: cdktf.stringToHclTerraform(this._dataExhausted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extender_profile: {
        value: cdktf.stringToHclTerraform(this._extenderProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgt_backup_mode_switch: {
        value: cdktf.stringToHclTerraform(this._fgtBackupModeSwitch),
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
      low_signal_strength: {
        value: cdktf.stringToHclTerraform(this._lowSignalStrength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode_switch: {
        value: cdktf.stringToHclTerraform(this._modeSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_image_fallback: {
        value: cdktf.stringToHclTerraform(this._osImageFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_disconnect: {
        value: cdktf.stringToHclTerraform(this._sessionDisconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_reboot: {
        value: cdktf.stringToHclTerraform(this._systemReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
