// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCentralmanagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#allow_monitor SystemCentralmanagement#allow_monitor}
  */
  readonly allowMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#allow_push_configuration SystemCentralmanagement#allow_push_configuration}
  */
  readonly allowPushConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#allow_pushd_firmware SystemCentralmanagement#allow_pushd_firmware}
  */
  readonly allowPushdFirmware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#allow_remote_firmware_upgrade SystemCentralmanagement#allow_remote_firmware_upgrade}
  */
  readonly allowRemoteFirmwareUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#enc_algorithm SystemCentralmanagement#enc_algorithm}
  */
  readonly encAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#fmg SystemCentralmanagement#fmg}
  */
  readonly fmg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#fmg_source_ip SystemCentralmanagement#fmg_source_ip}
  */
  readonly fmgSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#id SystemCentralmanagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#mode SystemCentralmanagement#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#schedule_config_restore SystemCentralmanagement#schedule_config_restore}
  */
  readonly scheduleConfigRestore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#schedule_script_restore SystemCentralmanagement#schedule_script_restore}
  */
  readonly scheduleScriptRestore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#serial_number SystemCentralmanagement#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#status SystemCentralmanagement#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#type SystemCentralmanagement#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement fortiswitch_system_centralmanagement}
*/
export class SystemCentralmanagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_centralmanagement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCentralmanagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCentralmanagement to import
  * @param importFromId The id of the existing SystemCentralmanagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCentralmanagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_centralmanagement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_centralmanagement fortiswitch_system_centralmanagement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCentralmanagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemCentralmanagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_centralmanagement',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowMonitor = config.allowMonitor;
    this._allowPushConfiguration = config.allowPushConfiguration;
    this._allowPushdFirmware = config.allowPushdFirmware;
    this._allowRemoteFirmwareUpgrade = config.allowRemoteFirmwareUpgrade;
    this._encAlgorithm = config.encAlgorithm;
    this._fmg = config.fmg;
    this._fmgSourceIp = config.fmgSourceIp;
    this._id = config.id;
    this._mode = config.mode;
    this._scheduleConfigRestore = config.scheduleConfigRestore;
    this._scheduleScriptRestore = config.scheduleScriptRestore;
    this._serialNumber = config.serialNumber;
    this._status = config.status;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_monitor - computed: true, optional: true, required: false
  private _allowMonitor?: string; 
  public get allowMonitor() {
    return this.getStringAttribute('allow_monitor');
  }
  public set allowMonitor(value: string) {
    this._allowMonitor = value;
  }
  public resetAllowMonitor() {
    this._allowMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMonitorInput() {
    return this._allowMonitor;
  }

  // allow_push_configuration - computed: true, optional: true, required: false
  private _allowPushConfiguration?: string; 
  public get allowPushConfiguration() {
    return this.getStringAttribute('allow_push_configuration');
  }
  public set allowPushConfiguration(value: string) {
    this._allowPushConfiguration = value;
  }
  public resetAllowPushConfiguration() {
    this._allowPushConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPushConfigurationInput() {
    return this._allowPushConfiguration;
  }

  // allow_pushd_firmware - computed: true, optional: true, required: false
  private _allowPushdFirmware?: string; 
  public get allowPushdFirmware() {
    return this.getStringAttribute('allow_pushd_firmware');
  }
  public set allowPushdFirmware(value: string) {
    this._allowPushdFirmware = value;
  }
  public resetAllowPushdFirmware() {
    this._allowPushdFirmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPushdFirmwareInput() {
    return this._allowPushdFirmware;
  }

  // allow_remote_firmware_upgrade - computed: true, optional: true, required: false
  private _allowRemoteFirmwareUpgrade?: string; 
  public get allowRemoteFirmwareUpgrade() {
    return this.getStringAttribute('allow_remote_firmware_upgrade');
  }
  public set allowRemoteFirmwareUpgrade(value: string) {
    this._allowRemoteFirmwareUpgrade = value;
  }
  public resetAllowRemoteFirmwareUpgrade() {
    this._allowRemoteFirmwareUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteFirmwareUpgradeInput() {
    return this._allowRemoteFirmwareUpgrade;
  }

  // enc_algorithm - computed: true, optional: true, required: false
  private _encAlgorithm?: string; 
  public get encAlgorithm() {
    return this.getStringAttribute('enc_algorithm');
  }
  public set encAlgorithm(value: string) {
    this._encAlgorithm = value;
  }
  public resetEncAlgorithm() {
    this._encAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgorithmInput() {
    return this._encAlgorithm;
  }

  // fmg - computed: true, optional: true, required: false
  private _fmg?: string; 
  public get fmg() {
    return this.getStringAttribute('fmg');
  }
  public set fmg(value: string) {
    this._fmg = value;
  }
  public resetFmg() {
    this._fmg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgInput() {
    return this._fmg;
  }

  // fmg_source_ip - computed: true, optional: true, required: false
  private _fmgSourceIp?: string; 
  public get fmgSourceIp() {
    return this.getStringAttribute('fmg_source_ip');
  }
  public set fmgSourceIp(value: string) {
    this._fmgSourceIp = value;
  }
  public resetFmgSourceIp() {
    this._fmgSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgSourceIpInput() {
    return this._fmgSourceIp;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // schedule_config_restore - computed: true, optional: true, required: false
  private _scheduleConfigRestore?: string; 
  public get scheduleConfigRestore() {
    return this.getStringAttribute('schedule_config_restore');
  }
  public set scheduleConfigRestore(value: string) {
    this._scheduleConfigRestore = value;
  }
  public resetScheduleConfigRestore() {
    this._scheduleConfigRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleConfigRestoreInput() {
    return this._scheduleConfigRestore;
  }

  // schedule_script_restore - computed: true, optional: true, required: false
  private _scheduleScriptRestore?: string; 
  public get scheduleScriptRestore() {
    return this.getStringAttribute('schedule_script_restore');
  }
  public set scheduleScriptRestore(value: string) {
    this._scheduleScriptRestore = value;
  }
  public resetScheduleScriptRestore() {
    this._scheduleScriptRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleScriptRestoreInput() {
    return this._scheduleScriptRestore;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_monitor: cdktf.stringToTerraform(this._allowMonitor),
      allow_push_configuration: cdktf.stringToTerraform(this._allowPushConfiguration),
      allow_pushd_firmware: cdktf.stringToTerraform(this._allowPushdFirmware),
      allow_remote_firmware_upgrade: cdktf.stringToTerraform(this._allowRemoteFirmwareUpgrade),
      enc_algorithm: cdktf.stringToTerraform(this._encAlgorithm),
      fmg: cdktf.stringToTerraform(this._fmg),
      fmg_source_ip: cdktf.stringToTerraform(this._fmgSourceIp),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      schedule_config_restore: cdktf.stringToTerraform(this._scheduleConfigRestore),
      schedule_script_restore: cdktf.stringToTerraform(this._scheduleScriptRestore),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_monitor: {
        value: cdktf.stringToHclTerraform(this._allowMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_push_configuration: {
        value: cdktf.stringToHclTerraform(this._allowPushConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_pushd_firmware: {
        value: cdktf.stringToHclTerraform(this._allowPushdFirmware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_remote_firmware_upgrade: {
        value: cdktf.stringToHclTerraform(this._allowRemoteFirmwareUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enc_algorithm: {
        value: cdktf.stringToHclTerraform(this._encAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmg: {
        value: cdktf.stringToHclTerraform(this._fmg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmg_source_ip: {
        value: cdktf.stringToHclTerraform(this._fmgSourceIp),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_config_restore: {
        value: cdktf.stringToHclTerraform(this._scheduleConfigRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_script_restore: {
        value: cdktf.stringToHclTerraform(this._scheduleScriptRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
