// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#addrgrp_log WirelesscontrollerLog#addrgrp_log}
  */
  readonly addrgrpLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#ble_log WirelesscontrollerLog#ble_log}
  */
  readonly bleLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#clb_log WirelesscontrollerLog#clb_log}
  */
  readonly clbLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#dhcp_starv_log WirelesscontrollerLog#dhcp_starv_log}
  */
  readonly dhcpStarvLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#id WirelesscontrollerLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#led_sched_log WirelesscontrollerLog#led_sched_log}
  */
  readonly ledSchedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#radio_event_log WirelesscontrollerLog#radio_event_log}
  */
  readonly radioEventLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#rogue_event_log WirelesscontrollerLog#rogue_event_log}
  */
  readonly rogueEventLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#sta_event_log WirelesscontrollerLog#sta_event_log}
  */
  readonly staEventLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#sta_locate_log WirelesscontrollerLog#sta_locate_log}
  */
  readonly staLocateLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#status WirelesscontrollerLog#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#vdomparam WirelesscontrollerLog#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#wids_log WirelesscontrollerLog#wids_log}
  */
  readonly widsLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#wtp_event_log WirelesscontrollerLog#wtp_event_log}
  */
  readonly wtpEventLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#wtp_fips_event_log WirelesscontrollerLog#wtp_fips_event_log}
  */
  readonly wtpFipsEventLog?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log fortios_wirelesscontroller_log}
*/
export class WirelesscontrollerLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontroller_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerLog to import
  * @param importFromId The id of the existing WirelesscontrollerLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontroller_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_log fortios_wirelesscontroller_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerLogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerLogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontroller_log',
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
    this._addrgrpLog = config.addrgrpLog;
    this._bleLog = config.bleLog;
    this._clbLog = config.clbLog;
    this._dhcpStarvLog = config.dhcpStarvLog;
    this._id = config.id;
    this._ledSchedLog = config.ledSchedLog;
    this._radioEventLog = config.radioEventLog;
    this._rogueEventLog = config.rogueEventLog;
    this._staEventLog = config.staEventLog;
    this._staLocateLog = config.staLocateLog;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
    this._widsLog = config.widsLog;
    this._wtpEventLog = config.wtpEventLog;
    this._wtpFipsEventLog = config.wtpFipsEventLog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addrgrp_log - computed: true, optional: true, required: false
  private _addrgrpLog?: string; 
  public get addrgrpLog() {
    return this.getStringAttribute('addrgrp_log');
  }
  public set addrgrpLog(value: string) {
    this._addrgrpLog = value;
  }
  public resetAddrgrpLog() {
    this._addrgrpLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrgrpLogInput() {
    return this._addrgrpLog;
  }

  // ble_log - computed: true, optional: true, required: false
  private _bleLog?: string; 
  public get bleLog() {
    return this.getStringAttribute('ble_log');
  }
  public set bleLog(value: string) {
    this._bleLog = value;
  }
  public resetBleLog() {
    this._bleLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleLogInput() {
    return this._bleLog;
  }

  // clb_log - computed: true, optional: true, required: false
  private _clbLog?: string; 
  public get clbLog() {
    return this.getStringAttribute('clb_log');
  }
  public set clbLog(value: string) {
    this._clbLog = value;
  }
  public resetClbLog() {
    this._clbLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clbLogInput() {
    return this._clbLog;
  }

  // dhcp_starv_log - computed: true, optional: true, required: false
  private _dhcpStarvLog?: string; 
  public get dhcpStarvLog() {
    return this.getStringAttribute('dhcp_starv_log');
  }
  public set dhcpStarvLog(value: string) {
    this._dhcpStarvLog = value;
  }
  public resetDhcpStarvLog() {
    this._dhcpStarvLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpStarvLogInput() {
    return this._dhcpStarvLog;
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

  // led_sched_log - computed: true, optional: true, required: false
  private _ledSchedLog?: string; 
  public get ledSchedLog() {
    return this.getStringAttribute('led_sched_log');
  }
  public set ledSchedLog(value: string) {
    this._ledSchedLog = value;
  }
  public resetLedSchedLog() {
    this._ledSchedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ledSchedLogInput() {
    return this._ledSchedLog;
  }

  // radio_event_log - computed: true, optional: true, required: false
  private _radioEventLog?: string; 
  public get radioEventLog() {
    return this.getStringAttribute('radio_event_log');
  }
  public set radioEventLog(value: string) {
    this._radioEventLog = value;
  }
  public resetRadioEventLog() {
    this._radioEventLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioEventLogInput() {
    return this._radioEventLog;
  }

  // rogue_event_log - computed: true, optional: true, required: false
  private _rogueEventLog?: string; 
  public get rogueEventLog() {
    return this.getStringAttribute('rogue_event_log');
  }
  public set rogueEventLog(value: string) {
    this._rogueEventLog = value;
  }
  public resetRogueEventLog() {
    this._rogueEventLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rogueEventLogInput() {
    return this._rogueEventLog;
  }

  // sta_event_log - computed: true, optional: true, required: false
  private _staEventLog?: string; 
  public get staEventLog() {
    return this.getStringAttribute('sta_event_log');
  }
  public set staEventLog(value: string) {
    this._staEventLog = value;
  }
  public resetStaEventLog() {
    this._staEventLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staEventLogInput() {
    return this._staEventLog;
  }

  // sta_locate_log - computed: true, optional: true, required: false
  private _staLocateLog?: string; 
  public get staLocateLog() {
    return this.getStringAttribute('sta_locate_log');
  }
  public set staLocateLog(value: string) {
    this._staLocateLog = value;
  }
  public resetStaLocateLog() {
    this._staLocateLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staLocateLogInput() {
    return this._staLocateLog;
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

  // wids_log - computed: true, optional: true, required: false
  private _widsLog?: string; 
  public get widsLog() {
    return this.getStringAttribute('wids_log');
  }
  public set widsLog(value: string) {
    this._widsLog = value;
  }
  public resetWidsLog() {
    this._widsLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widsLogInput() {
    return this._widsLog;
  }

  // wtp_event_log - computed: true, optional: true, required: false
  private _wtpEventLog?: string; 
  public get wtpEventLog() {
    return this.getStringAttribute('wtp_event_log');
  }
  public set wtpEventLog(value: string) {
    this._wtpEventLog = value;
  }
  public resetWtpEventLog() {
    this._wtpEventLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpEventLogInput() {
    return this._wtpEventLog;
  }

  // wtp_fips_event_log - computed: true, optional: true, required: false
  private _wtpFipsEventLog?: string; 
  public get wtpFipsEventLog() {
    return this.getStringAttribute('wtp_fips_event_log');
  }
  public set wtpFipsEventLog(value: string) {
    this._wtpFipsEventLog = value;
  }
  public resetWtpFipsEventLog() {
    this._wtpFipsEventLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpFipsEventLogInput() {
    return this._wtpFipsEventLog;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addrgrp_log: cdktf.stringToTerraform(this._addrgrpLog),
      ble_log: cdktf.stringToTerraform(this._bleLog),
      clb_log: cdktf.stringToTerraform(this._clbLog),
      dhcp_starv_log: cdktf.stringToTerraform(this._dhcpStarvLog),
      id: cdktf.stringToTerraform(this._id),
      led_sched_log: cdktf.stringToTerraform(this._ledSchedLog),
      radio_event_log: cdktf.stringToTerraform(this._radioEventLog),
      rogue_event_log: cdktf.stringToTerraform(this._rogueEventLog),
      sta_event_log: cdktf.stringToTerraform(this._staEventLog),
      sta_locate_log: cdktf.stringToTerraform(this._staLocateLog),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      wids_log: cdktf.stringToTerraform(this._widsLog),
      wtp_event_log: cdktf.stringToTerraform(this._wtpEventLog),
      wtp_fips_event_log: cdktf.stringToTerraform(this._wtpFipsEventLog),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addrgrp_log: {
        value: cdktf.stringToHclTerraform(this._addrgrpLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ble_log: {
        value: cdktf.stringToHclTerraform(this._bleLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clb_log: {
        value: cdktf.stringToHclTerraform(this._clbLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_starv_log: {
        value: cdktf.stringToHclTerraform(this._dhcpStarvLog),
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
      led_sched_log: {
        value: cdktf.stringToHclTerraform(this._ledSchedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_event_log: {
        value: cdktf.stringToHclTerraform(this._radioEventLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rogue_event_log: {
        value: cdktf.stringToHclTerraform(this._rogueEventLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sta_event_log: {
        value: cdktf.stringToHclTerraform(this._staEventLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sta_locate_log: {
        value: cdktf.stringToHclTerraform(this._staLocateLog),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wids_log: {
        value: cdktf.stringToHclTerraform(this._widsLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wtp_event_log: {
        value: cdktf.stringToHclTerraform(this._wtpEventLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wtp_fips_event_log: {
        value: cdktf.stringToHclTerraform(this._wtpFipsEventLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
