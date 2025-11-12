// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnL2TpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#compress VpnL2Tp#compress}
  */
  readonly compress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#device_name VpnL2Tp#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#device_vdom VpnL2Tp#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#eip VpnL2Tp#eip}
  */
  readonly eip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#enforce_ipsec VpnL2Tp#enforce_ipsec}
  */
  readonly enforceIpsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#hello_interval VpnL2Tp#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#id VpnL2Tp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#lcp_echo_interval VpnL2Tp#lcp_echo_interval}
  */
  readonly lcpEchoInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#lcp_max_echo_fails VpnL2Tp#lcp_max_echo_fails}
  */
  readonly lcpMaxEchoFails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#sip VpnL2Tp#sip}
  */
  readonly sip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#status VpnL2Tp#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#usrgrp VpnL2Tp#usrgrp}
  */
  readonly usrgrp?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp fmgdevice_vpn_l2tp}
*/
export class VpnL2Tp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_vpn_l2tp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnL2Tp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnL2Tp to import
  * @param importFromId The id of the existing VpnL2Tp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnL2Tp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_vpn_l2tp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_l2tp fmgdevice_vpn_l2tp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnL2TpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnL2TpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_vpn_l2tp',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compress = config.compress;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._eip = config.eip;
    this._enforceIpsec = config.enforceIpsec;
    this._helloInterval = config.helloInterval;
    this._id = config.id;
    this._lcpEchoInterval = config.lcpEchoInterval;
    this._lcpMaxEchoFails = config.lcpMaxEchoFails;
    this._sip = config.sip;
    this._status = config.status;
    this._usrgrp = config.usrgrp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compress - computed: false, optional: true, required: false
  private _compress?: string; 
  public get compress() {
    return this.getStringAttribute('compress');
  }
  public set compress(value: string) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // eip - computed: true, optional: true, required: false
  private _eip?: string; 
  public get eip() {
    return this.getStringAttribute('eip');
  }
  public set eip(value: string) {
    this._eip = value;
  }
  public resetEip() {
    this._eip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInput() {
    return this._eip;
  }

  // enforce_ipsec - computed: true, optional: true, required: false
  private _enforceIpsec?: string; 
  public get enforceIpsec() {
    return this.getStringAttribute('enforce_ipsec');
  }
  public set enforceIpsec(value: string) {
    this._enforceIpsec = value;
  }
  public resetEnforceIpsec() {
    this._enforceIpsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceIpsecInput() {
    return this._enforceIpsec;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
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

  // lcp_echo_interval - computed: true, optional: true, required: false
  private _lcpEchoInterval?: number; 
  public get lcpEchoInterval() {
    return this.getNumberAttribute('lcp_echo_interval');
  }
  public set lcpEchoInterval(value: number) {
    this._lcpEchoInterval = value;
  }
  public resetLcpEchoInterval() {
    this._lcpEchoInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcpEchoIntervalInput() {
    return this._lcpEchoInterval;
  }

  // lcp_max_echo_fails - computed: true, optional: true, required: false
  private _lcpMaxEchoFails?: number; 
  public get lcpMaxEchoFails() {
    return this.getNumberAttribute('lcp_max_echo_fails');
  }
  public set lcpMaxEchoFails(value: number) {
    this._lcpMaxEchoFails = value;
  }
  public resetLcpMaxEchoFails() {
    this._lcpMaxEchoFails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcpMaxEchoFailsInput() {
    return this._lcpMaxEchoFails;
  }

  // sip - computed: true, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
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

  // usrgrp - computed: true, optional: true, required: false
  private _usrgrp?: string[]; 
  public get usrgrp() {
    return cdktf.Fn.tolist(this.getListAttribute('usrgrp'));
  }
  public set usrgrp(value: string[]) {
    this._usrgrp = value;
  }
  public resetUsrgrp() {
    this._usrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usrgrpInput() {
    return this._usrgrp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compress: cdktf.stringToTerraform(this._compress),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      eip: cdktf.stringToTerraform(this._eip),
      enforce_ipsec: cdktf.stringToTerraform(this._enforceIpsec),
      hello_interval: cdktf.numberToTerraform(this._helloInterval),
      id: cdktf.stringToTerraform(this._id),
      lcp_echo_interval: cdktf.numberToTerraform(this._lcpEchoInterval),
      lcp_max_echo_fails: cdktf.numberToTerraform(this._lcpMaxEchoFails),
      sip: cdktf.stringToTerraform(this._sip),
      status: cdktf.stringToTerraform(this._status),
      usrgrp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usrgrp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compress: {
        value: cdktf.stringToHclTerraform(this._compress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eip: {
        value: cdktf.stringToHclTerraform(this._eip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_ipsec: {
        value: cdktf.stringToHclTerraform(this._enforceIpsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_interval: {
        value: cdktf.numberToHclTerraform(this._helloInterval),
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
      lcp_echo_interval: {
        value: cdktf.numberToHclTerraform(this._lcpEchoInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lcp_max_echo_fails: {
        value: cdktf.numberToHclTerraform(this._lcpMaxEchoFails),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip: {
        value: cdktf.stringToHclTerraform(this._sip),
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
      usrgrp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usrgrp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
