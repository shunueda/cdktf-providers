// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensioncontrollerExtendervapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#allowaccess ExtensioncontrollerExtendervap#allowaccess}
  */
  readonly allowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#auth_server_address ExtensioncontrollerExtendervap#auth_server_address}
  */
  readonly authServerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#auth_server_port ExtensioncontrollerExtendervap#auth_server_port}
  */
  readonly authServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#auth_server_secret ExtensioncontrollerExtendervap#auth_server_secret}
  */
  readonly authServerSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#broadcast_ssid ExtensioncontrollerExtendervap#broadcast_ssid}
  */
  readonly broadcastSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#bss_color_partial ExtensioncontrollerExtendervap#bss_color_partial}
  */
  readonly bssColorPartial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#dtim ExtensioncontrollerExtendervap#dtim}
  */
  readonly dtim?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#end_ip ExtensioncontrollerExtendervap#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#id ExtensioncontrollerExtendervap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#ip_address ExtensioncontrollerExtendervap#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#max_clients ExtensioncontrollerExtendervap#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#mu_mimo ExtensioncontrollerExtendervap#mu_mimo}
  */
  readonly muMimo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#name ExtensioncontrollerExtendervap#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#passphrase ExtensioncontrollerExtendervap#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#pmf ExtensioncontrollerExtendervap#pmf}
  */
  readonly pmf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#rts_threshold ExtensioncontrollerExtendervap#rts_threshold}
  */
  readonly rtsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#sae_password ExtensioncontrollerExtendervap#sae_password}
  */
  readonly saePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#security ExtensioncontrollerExtendervap#security}
  */
  readonly security?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#ssid ExtensioncontrollerExtendervap#ssid}
  */
  readonly ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#start_ip ExtensioncontrollerExtendervap#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#target_wake_time ExtensioncontrollerExtendervap#target_wake_time}
  */
  readonly targetWakeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#type ExtensioncontrollerExtendervap#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#vdomparam ExtensioncontrollerExtendervap#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap fortios_extensioncontroller_extendervap}
*/
export class ExtensioncontrollerExtendervap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_extensioncontroller_extendervap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtensioncontrollerExtendervap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtensioncontrollerExtendervap to import
  * @param importFromId The id of the existing ExtensioncontrollerExtendervap that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtensioncontrollerExtendervap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_extensioncontroller_extendervap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extendervap fortios_extensioncontroller_extendervap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtensioncontrollerExtendervapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ExtensioncontrollerExtendervapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_extensioncontroller_extendervap',
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
    this._allowaccess = config.allowaccess;
    this._authServerAddress = config.authServerAddress;
    this._authServerPort = config.authServerPort;
    this._authServerSecret = config.authServerSecret;
    this._broadcastSsid = config.broadcastSsid;
    this._bssColorPartial = config.bssColorPartial;
    this._dtim = config.dtim;
    this._endIp = config.endIp;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._maxClients = config.maxClients;
    this._muMimo = config.muMimo;
    this._name = config.name;
    this._passphrase = config.passphrase;
    this._pmf = config.pmf;
    this._rtsThreshold = config.rtsThreshold;
    this._saePassword = config.saePassword;
    this._security = config.security;
    this._ssid = config.ssid;
    this._startIp = config.startIp;
    this._targetWakeTime = config.targetWakeTime;
    this._type = config.type;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowaccess - computed: false, optional: true, required: false
  private _allowaccess?: string; 
  public get allowaccess() {
    return this.getStringAttribute('allowaccess');
  }
  public set allowaccess(value: string) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // auth_server_address - computed: false, optional: true, required: false
  private _authServerAddress?: string; 
  public get authServerAddress() {
    return this.getStringAttribute('auth_server_address');
  }
  public set authServerAddress(value: string) {
    this._authServerAddress = value;
  }
  public resetAuthServerAddress() {
    this._authServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerAddressInput() {
    return this._authServerAddress;
  }

  // auth_server_port - computed: false, optional: true, required: false
  private _authServerPort?: number; 
  public get authServerPort() {
    return this.getNumberAttribute('auth_server_port');
  }
  public set authServerPort(value: number) {
    this._authServerPort = value;
  }
  public resetAuthServerPort() {
    this._authServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerPortInput() {
    return this._authServerPort;
  }

  // auth_server_secret - computed: false, optional: true, required: false
  private _authServerSecret?: string; 
  public get authServerSecret() {
    return this.getStringAttribute('auth_server_secret');
  }
  public set authServerSecret(value: string) {
    this._authServerSecret = value;
  }
  public resetAuthServerSecret() {
    this._authServerSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerSecretInput() {
    return this._authServerSecret;
  }

  // broadcast_ssid - computed: true, optional: true, required: false
  private _broadcastSsid?: string; 
  public get broadcastSsid() {
    return this.getStringAttribute('broadcast_ssid');
  }
  public set broadcastSsid(value: string) {
    this._broadcastSsid = value;
  }
  public resetBroadcastSsid() {
    this._broadcastSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastSsidInput() {
    return this._broadcastSsid;
  }

  // bss_color_partial - computed: true, optional: true, required: false
  private _bssColorPartial?: string; 
  public get bssColorPartial() {
    return this.getStringAttribute('bss_color_partial');
  }
  public set bssColorPartial(value: string) {
    this._bssColorPartial = value;
  }
  public resetBssColorPartial() {
    this._bssColorPartial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssColorPartialInput() {
    return this._bssColorPartial;
  }

  // dtim - computed: true, optional: true, required: false
  private _dtim?: number; 
  public get dtim() {
    return this.getNumberAttribute('dtim');
  }
  public set dtim(value: number) {
    this._dtim = value;
  }
  public resetDtim() {
    this._dtim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtimInput() {
    return this._dtim;
  }

  // end_ip - computed: true, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
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

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // max_clients - computed: false, optional: true, required: false
  private _maxClients?: number; 
  public get maxClients() {
    return this.getNumberAttribute('max_clients');
  }
  public set maxClients(value: number) {
    this._maxClients = value;
  }
  public resetMaxClients() {
    this._maxClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientsInput() {
    return this._maxClients;
  }

  // mu_mimo - computed: true, optional: true, required: false
  private _muMimo?: string; 
  public get muMimo() {
    return this.getStringAttribute('mu_mimo');
  }
  public set muMimo(value: string) {
    this._muMimo = value;
  }
  public resetMuMimo() {
    this._muMimo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muMimoInput() {
    return this._muMimo;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // pmf - computed: true, optional: true, required: false
  private _pmf?: string; 
  public get pmf() {
    return this.getStringAttribute('pmf');
  }
  public set pmf(value: string) {
    this._pmf = value;
  }
  public resetPmf() {
    this._pmf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmfInput() {
    return this._pmf;
  }

  // rts_threshold - computed: true, optional: true, required: false
  private _rtsThreshold?: number; 
  public get rtsThreshold() {
    return this.getNumberAttribute('rts_threshold');
  }
  public set rtsThreshold(value: number) {
    this._rtsThreshold = value;
  }
  public resetRtsThreshold() {
    this._rtsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsThresholdInput() {
    return this._rtsThreshold;
  }

  // sae_password - computed: false, optional: true, required: false
  private _saePassword?: string; 
  public get saePassword() {
    return this.getStringAttribute('sae_password');
  }
  public set saePassword(value: string) {
    this._saePassword = value;
  }
  public resetSaePassword() {
    this._saePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saePasswordInput() {
    return this._saePassword;
  }

  // security - computed: true, optional: true, required: false
  private _security?: string; 
  public get security() {
    return this.getStringAttribute('security');
  }
  public set security(value: string) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // ssid - computed: false, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // start_ip - computed: true, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }

  // target_wake_time - computed: true, optional: true, required: false
  private _targetWakeTime?: string; 
  public get targetWakeTime() {
    return this.getStringAttribute('target_wake_time');
  }
  public set targetWakeTime(value: string) {
    this._targetWakeTime = value;
  }
  public resetTargetWakeTime() {
    this._targetWakeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWakeTimeInput() {
    return this._targetWakeTime;
  }

  // type - computed: false, optional: true, required: false
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
      allowaccess: cdktf.stringToTerraform(this._allowaccess),
      auth_server_address: cdktf.stringToTerraform(this._authServerAddress),
      auth_server_port: cdktf.numberToTerraform(this._authServerPort),
      auth_server_secret: cdktf.stringToTerraform(this._authServerSecret),
      broadcast_ssid: cdktf.stringToTerraform(this._broadcastSsid),
      bss_color_partial: cdktf.stringToTerraform(this._bssColorPartial),
      dtim: cdktf.numberToTerraform(this._dtim),
      end_ip: cdktf.stringToTerraform(this._endIp),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      max_clients: cdktf.numberToTerraform(this._maxClients),
      mu_mimo: cdktf.stringToTerraform(this._muMimo),
      name: cdktf.stringToTerraform(this._name),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      pmf: cdktf.stringToTerraform(this._pmf),
      rts_threshold: cdktf.numberToTerraform(this._rtsThreshold),
      sae_password: cdktf.stringToTerraform(this._saePassword),
      security: cdktf.stringToTerraform(this._security),
      ssid: cdktf.stringToTerraform(this._ssid),
      start_ip: cdktf.stringToTerraform(this._startIp),
      target_wake_time: cdktf.stringToTerraform(this._targetWakeTime),
      type: cdktf.stringToTerraform(this._type),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowaccess: {
        value: cdktf.stringToHclTerraform(this._allowaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_server_address: {
        value: cdktf.stringToHclTerraform(this._authServerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_server_port: {
        value: cdktf.numberToHclTerraform(this._authServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_server_secret: {
        value: cdktf.stringToHclTerraform(this._authServerSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broadcast_ssid: {
        value: cdktf.stringToHclTerraform(this._broadcastSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bss_color_partial: {
        value: cdktf.stringToHclTerraform(this._bssColorPartial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtim: {
        value: cdktf.numberToHclTerraform(this._dtim),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_ip: {
        value: cdktf.stringToHclTerraform(this._endIp),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_clients: {
        value: cdktf.numberToHclTerraform(this._maxClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mu_mimo: {
        value: cdktf.stringToHclTerraform(this._muMimo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pmf: {
        value: cdktf.stringToHclTerraform(this._pmf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rts_threshold: {
        value: cdktf.numberToHclTerraform(this._rtsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sae_password: {
        value: cdktf.stringToHclTerraform(this._saePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security: {
        value: cdktf.stringToHclTerraform(this._security),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid: {
        value: cdktf.stringToHclTerraform(this._ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_ip: {
        value: cdktf.stringToHclTerraform(this._startIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_wake_time: {
        value: cdktf.stringToHclTerraform(this._targetWakeTime),
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
