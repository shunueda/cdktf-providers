// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchlldpSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings#device_detection SwitchlldpSettings#device_detection}
  */
  readonly deviceDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings#fast_start_interval SwitchlldpSettings#fast_start_interval}
  */
  readonly fastStartInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings#forward_profinet_packet SwitchlldpSettings#forward_profinet_packet}
  */
  readonly forwardProfinetPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings#id SwitchlldpSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings#management_address SwitchlldpSettings#management_address}
  */
  readonly managementAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings#management_interface SwitchlldpSettings#management_interface}
  */
  readonly managementInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings#status SwitchlldpSettings#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings#tx_hold SwitchlldpSettings#tx_hold}
  */
  readonly txHold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings#tx_interval SwitchlldpSettings#tx_interval}
  */
  readonly txInterval?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings fortiswitch_switchlldp_settings}
*/
export class SwitchlldpSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchlldp_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchlldpSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchlldpSettings to import
  * @param importFromId The id of the existing SwitchlldpSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchlldpSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchlldp_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchlldp_settings fortiswitch_switchlldp_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchlldpSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchlldpSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchlldp_settings',
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
    this._deviceDetection = config.deviceDetection;
    this._fastStartInterval = config.fastStartInterval;
    this._forwardProfinetPacket = config.forwardProfinetPacket;
    this._id = config.id;
    this._managementAddress = config.managementAddress;
    this._managementInterface = config.managementInterface;
    this._status = config.status;
    this._txHold = config.txHold;
    this._txInterval = config.txInterval;
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

  // forward_profinet_packet - computed: true, optional: true, required: false
  private _forwardProfinetPacket?: string; 
  public get forwardProfinetPacket() {
    return this.getStringAttribute('forward_profinet_packet');
  }
  public set forwardProfinetPacket(value: string) {
    this._forwardProfinetPacket = value;
  }
  public resetForwardProfinetPacket() {
    this._forwardProfinetPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProfinetPacketInput() {
    return this._forwardProfinetPacket;
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

  // management_address - computed: true, optional: true, required: false
  private _managementAddress?: string; 
  public get managementAddress() {
    return this.getStringAttribute('management_address');
  }
  public set managementAddress(value: string) {
    this._managementAddress = value;
  }
  public resetManagementAddress() {
    this._managementAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAddressInput() {
    return this._managementAddress;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_detection: cdktf.stringToTerraform(this._deviceDetection),
      fast_start_interval: cdktf.numberToTerraform(this._fastStartInterval),
      forward_profinet_packet: cdktf.stringToTerraform(this._forwardProfinetPacket),
      id: cdktf.stringToTerraform(this._id),
      management_address: cdktf.stringToTerraform(this._managementAddress),
      management_interface: cdktf.stringToTerraform(this._managementInterface),
      status: cdktf.stringToTerraform(this._status),
      tx_hold: cdktf.numberToTerraform(this._txHold),
      tx_interval: cdktf.numberToTerraform(this._txInterval),
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
      forward_profinet_packet: {
        value: cdktf.stringToHclTerraform(this._forwardProfinetPacket),
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
      management_address: {
        value: cdktf.stringToHclTerraform(this._managementAddress),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
