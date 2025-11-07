// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_centralmanagement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchSystemCentralmanagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_centralmanagement#id DataFortiswitchSystemCentralmanagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_centralmanagement fortiswitch_system_centralmanagement}
*/
export class DataFortiswitchSystemCentralmanagement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_centralmanagement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchSystemCentralmanagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchSystemCentralmanagement to import
  * @param importFromId The id of the existing DataFortiswitchSystemCentralmanagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_centralmanagement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchSystemCentralmanagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_centralmanagement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_centralmanagement fortiswitch_system_centralmanagement} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchSystemCentralmanagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchSystemCentralmanagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_centralmanagement',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_monitor - computed: true, optional: false, required: false
  public get allowMonitor() {
    return this.getStringAttribute('allow_monitor');
  }

  // allow_push_configuration - computed: true, optional: false, required: false
  public get allowPushConfiguration() {
    return this.getStringAttribute('allow_push_configuration');
  }

  // allow_pushd_firmware - computed: true, optional: false, required: false
  public get allowPushdFirmware() {
    return this.getStringAttribute('allow_pushd_firmware');
  }

  // allow_remote_firmware_upgrade - computed: true, optional: false, required: false
  public get allowRemoteFirmwareUpgrade() {
    return this.getStringAttribute('allow_remote_firmware_upgrade');
  }

  // enc_algorithm - computed: true, optional: false, required: false
  public get encAlgorithm() {
    return this.getStringAttribute('enc_algorithm');
  }

  // fmg - computed: true, optional: false, required: false
  public get fmg() {
    return this.getStringAttribute('fmg');
  }

  // fmg_source_ip - computed: true, optional: false, required: false
  public get fmgSourceIp() {
    return this.getStringAttribute('fmg_source_ip');
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

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // schedule_config_restore - computed: true, optional: false, required: false
  public get scheduleConfigRestore() {
    return this.getStringAttribute('schedule_config_restore');
  }

  // schedule_script_restore - computed: true, optional: false, required: false
  public get scheduleScriptRestore() {
    return this.getStringAttribute('schedule_script_restore');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
