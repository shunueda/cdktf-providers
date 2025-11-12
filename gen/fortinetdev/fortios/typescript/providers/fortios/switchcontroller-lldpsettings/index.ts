// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_lldpsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerLldpsettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_lldpsettings#device_detection SwitchcontrollerLldpsettings#device_detection}
  */
  readonly deviceDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_lldpsettings#fast_start_interval SwitchcontrollerLldpsettings#fast_start_interval}
  */
  readonly fastStartInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_lldpsettings#id SwitchcontrollerLldpsettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_lldpsettings#management_interface SwitchcontrollerLldpsettings#management_interface}
  */
  readonly managementInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_lldpsettings#status SwitchcontrollerLldpsettings#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_lldpsettings#tx_hold SwitchcontrollerLldpsettings#tx_hold}
  */
  readonly txHold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_lldpsettings#tx_interval SwitchcontrollerLldpsettings#tx_interval}
  */
  readonly txInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_lldpsettings#vdomparam SwitchcontrollerLldpsettings#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_lldpsettings fortios_switchcontroller_lldpsettings}
*/
export class SwitchcontrollerLldpsettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_lldpsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerLldpsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerLldpsettings to import
  * @param importFromId The id of the existing SwitchcontrollerLldpsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_lldpsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerLldpsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_lldpsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_lldpsettings fortios_switchcontroller_lldpsettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerLldpsettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerLldpsettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_lldpsettings',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceDetection = config.deviceDetection;
    this._fastStartInterval = config.fastStartInterval;
    this._id = config.id;
    this._managementInterface = config.managementInterface;
    this._status = config.status;
    this._txHold = config.txHold;
    this._txInterval = config.txInterval;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_detection - computed: true, optional: true, required: false
  private _deviceDetection?: string; 
  public get deviceDetection() {
    return this.getStringAttribute('device_detection');
  }
  public set deviceDetection(value: string) {
    this._deviceDetection = value;
  }
  public resetDeviceDetection() {
    this._deviceDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDetectionInput() {
    return this._deviceDetection;
  }

  // fast_start_interval - computed: true, optional: true, required: false
  private _fastStartInterval?: number; 
  public get fastStartInterval() {
    return this.getNumberAttribute('fast_start_interval');
  }
  public set fastStartInterval(value: number) {
    this._fastStartInterval = value;
  }
  public resetFastStartInterval() {
    this._fastStartInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastStartIntervalInput() {
    return this._fastStartInterval;
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

  // management_interface - computed: true, optional: true, required: false
  private _managementInterface?: string; 
  public get managementInterface() {
    return this.getStringAttribute('management_interface');
  }
  public set managementInterface(value: string) {
    this._managementInterface = value;
  }
  public resetManagementInterface() {
    this._managementInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInterfaceInput() {
    return this._managementInterface;
  }

  // status - computed: false, optional: true, required: false
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

  // tx_hold - computed: true, optional: true, required: false
  private _txHold?: number; 
  public get txHold() {
    return this.getNumberAttribute('tx_hold');
  }
  public set txHold(value: number) {
    this._txHold = value;
  }
  public resetTxHold() {
    this._txHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txHoldInput() {
    return this._txHold;
  }

  // tx_interval - computed: true, optional: true, required: false
  private _txInterval?: number; 
  public get txInterval() {
    return this.getNumberAttribute('tx_interval');
  }
  public set txInterval(value: number) {
    this._txInterval = value;
  }
  public resetTxInterval() {
    this._txInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txIntervalInput() {
    return this._txInterval;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_detection: cdktf.stringToTerraform(this._deviceDetection),
      fast_start_interval: cdktf.numberToTerraform(this._fastStartInterval),
      id: cdktf.stringToTerraform(this._id),
      management_interface: cdktf.stringToTerraform(this._managementInterface),
      status: cdktf.stringToTerraform(this._status),
      tx_hold: cdktf.numberToTerraform(this._txHold),
      tx_interval: cdktf.numberToTerraform(this._txInterval),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_detection: {
        value: cdktf.stringToHclTerraform(this._deviceDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_start_interval: {
        value: cdktf.numberToHclTerraform(this._fastStartInterval),
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
      management_interface: {
        value: cdktf.stringToHclTerraform(this._managementInterface),
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
      tx_hold: {
        value: cdktf.numberToHclTerraform(this._txHold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tx_interval: {
        value: cdktf.numberToHclTerraform(this._txInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
