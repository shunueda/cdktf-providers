// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_pptp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnPptpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_pptp#eip VpnPptp#eip}
  */
  readonly eip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_pptp#id VpnPptp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_pptp#ip_mode VpnPptp#ip_mode}
  */
  readonly ipMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_pptp#local_ip VpnPptp#local_ip}
  */
  readonly localIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_pptp#sip VpnPptp#sip}
  */
  readonly sip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_pptp#status VpnPptp#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_pptp#usrgrp VpnPptp#usrgrp}
  */
  readonly usrgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_pptp#vdomparam VpnPptp#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_pptp fortios_vpn_pptp}
*/
export class VpnPptp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_vpn_pptp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnPptp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnPptp to import
  * @param importFromId The id of the existing VpnPptp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_pptp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnPptp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_vpn_pptp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_pptp fortios_vpn_pptp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnPptpConfig
  */
  public constructor(scope: Construct, id: string, config: VpnPptpConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_vpn_pptp',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eip = config.eip;
    this._id = config.id;
    this._ipMode = config.ipMode;
    this._localIp = config.localIp;
    this._sip = config.sip;
    this._status = config.status;
    this._usrgrp = config.usrgrp;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip_mode - computed: true, optional: true, required: false
  private _ipMode?: string; 
  public get ipMode() {
    return this.getStringAttribute('ip_mode');
  }
  public set ipMode(value: string) {
    this._ipMode = value;
  }
  public resetIpMode() {
    this._ipMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipModeInput() {
    return this._ipMode;
  }

  // local_ip - computed: true, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // usrgrp - computed: false, optional: true, required: false
  private _usrgrp?: string; 
  public get usrgrp() {
    return this.getStringAttribute('usrgrp');
  }
  public set usrgrp(value: string) {
    this._usrgrp = value;
  }
  public resetUsrgrp() {
    this._usrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usrgrpInput() {
    return this._usrgrp;
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
      eip: cdktf.stringToTerraform(this._eip),
      id: cdktf.stringToTerraform(this._id),
      ip_mode: cdktf.stringToTerraform(this._ipMode),
      local_ip: cdktf.stringToTerraform(this._localIp),
      sip: cdktf.stringToTerraform(this._sip),
      status: cdktf.stringToTerraform(this._status),
      usrgrp: cdktf.stringToTerraform(this._usrgrp),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eip: {
        value: cdktf.stringToHclTerraform(this._eip),
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
      ip_mode: {
        value: cdktf.stringToHclTerraform(this._ipMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ip: {
        value: cdktf.stringToHclTerraform(this._localIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._usrgrp),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
