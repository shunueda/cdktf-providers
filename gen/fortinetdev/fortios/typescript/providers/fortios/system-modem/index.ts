// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemModemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#action SystemModem#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#altmode SystemModem#altmode}
  */
  readonly altmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#authtype1 SystemModem#authtype1}
  */
  readonly authtype1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#authtype2 SystemModem#authtype2}
  */
  readonly authtype2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#authtype3 SystemModem#authtype3}
  */
  readonly authtype3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#auto_dial SystemModem#auto_dial}
  */
  readonly autoDial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#connect_timeout SystemModem#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#dial_cmd1 SystemModem#dial_cmd1}
  */
  readonly dialCmd1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#dial_cmd2 SystemModem#dial_cmd2}
  */
  readonly dialCmd2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#dial_cmd3 SystemModem#dial_cmd3}
  */
  readonly dialCmd3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#dial_on_demand SystemModem#dial_on_demand}
  */
  readonly dialOnDemand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#distance SystemModem#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#dont_send_cr1 SystemModem#dont_send_cr1}
  */
  readonly dontSendCr1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#dont_send_cr2 SystemModem#dont_send_cr2}
  */
  readonly dontSendCr2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#dont_send_cr3 SystemModem#dont_send_cr3}
  */
  readonly dontSendCr3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#extra_init1 SystemModem#extra_init1}
  */
  readonly extraInit1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#extra_init2 SystemModem#extra_init2}
  */
  readonly extraInit2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#extra_init3 SystemModem#extra_init3}
  */
  readonly extraInit3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#holddown_timer SystemModem#holddown_timer}
  */
  readonly holddownTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#id SystemModem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#idle_timer SystemModem#idle_timer}
  */
  readonly idleTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#interface SystemModem#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#lockdown_lac SystemModem#lockdown_lac}
  */
  readonly lockdownLac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#mode SystemModem#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#network_init SystemModem#network_init}
  */
  readonly networkInit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#passwd1 SystemModem#passwd1}
  */
  readonly passwd1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#passwd2 SystemModem#passwd2}
  */
  readonly passwd2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#passwd3 SystemModem#passwd3}
  */
  readonly passwd3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#peer_modem1 SystemModem#peer_modem1}
  */
  readonly peerModem1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#peer_modem2 SystemModem#peer_modem2}
  */
  readonly peerModem2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#peer_modem3 SystemModem#peer_modem3}
  */
  readonly peerModem3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#phone1 SystemModem#phone1}
  */
  readonly phone1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#phone2 SystemModem#phone2}
  */
  readonly phone2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#phone3 SystemModem#phone3}
  */
  readonly phone3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#pin_init SystemModem#pin_init}
  */
  readonly pinInit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#ppp_echo_request1 SystemModem#ppp_echo_request1}
  */
  readonly pppEchoRequest1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#ppp_echo_request2 SystemModem#ppp_echo_request2}
  */
  readonly pppEchoRequest2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#ppp_echo_request3 SystemModem#ppp_echo_request3}
  */
  readonly pppEchoRequest3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#priority SystemModem#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#redial SystemModem#redial}
  */
  readonly redial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#reset SystemModem#reset}
  */
  readonly reset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#status SystemModem#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#traffic_check SystemModem#traffic_check}
  */
  readonly trafficCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#username1 SystemModem#username1}
  */
  readonly username1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#username2 SystemModem#username2}
  */
  readonly username2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#username3 SystemModem#username3}
  */
  readonly username3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#vdomparam SystemModem#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#wireless_port SystemModem#wireless_port}
  */
  readonly wirelessPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem fortios_system_modem}
*/
export class SystemModem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_modem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemModem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemModem to import
  * @param importFromId The id of the existing SystemModem that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemModem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_modem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_modem fortios_system_modem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemModemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemModemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_modem',
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
    this._action = config.action;
    this._altmode = config.altmode;
    this._authtype1 = config.authtype1;
    this._authtype2 = config.authtype2;
    this._authtype3 = config.authtype3;
    this._autoDial = config.autoDial;
    this._connectTimeout = config.connectTimeout;
    this._dialCmd1 = config.dialCmd1;
    this._dialCmd2 = config.dialCmd2;
    this._dialCmd3 = config.dialCmd3;
    this._dialOnDemand = config.dialOnDemand;
    this._distance = config.distance;
    this._dontSendCr1 = config.dontSendCr1;
    this._dontSendCr2 = config.dontSendCr2;
    this._dontSendCr3 = config.dontSendCr3;
    this._extraInit1 = config.extraInit1;
    this._extraInit2 = config.extraInit2;
    this._extraInit3 = config.extraInit3;
    this._holddownTimer = config.holddownTimer;
    this._id = config.id;
    this._idleTimer = config.idleTimer;
    this._interface = config.interface;
    this._lockdownLac = config.lockdownLac;
    this._mode = config.mode;
    this._networkInit = config.networkInit;
    this._passwd1 = config.passwd1;
    this._passwd2 = config.passwd2;
    this._passwd3 = config.passwd3;
    this._peerModem1 = config.peerModem1;
    this._peerModem2 = config.peerModem2;
    this._peerModem3 = config.peerModem3;
    this._phone1 = config.phone1;
    this._phone2 = config.phone2;
    this._phone3 = config.phone3;
    this._pinInit = config.pinInit;
    this._pppEchoRequest1 = config.pppEchoRequest1;
    this._pppEchoRequest2 = config.pppEchoRequest2;
    this._pppEchoRequest3 = config.pppEchoRequest3;
    this._priority = config.priority;
    this._redial = config.redial;
    this._reset = config.reset;
    this._status = config.status;
    this._trafficCheck = config.trafficCheck;
    this._username1 = config.username1;
    this._username2 = config.username2;
    this._username3 = config.username3;
    this._vdomparam = config.vdomparam;
    this._wirelessPort = config.wirelessPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // altmode - computed: true, optional: true, required: false
  private _altmode?: string; 
  public get altmode() {
    return this.getStringAttribute('altmode');
  }
  public set altmode(value: string) {
    this._altmode = value;
  }
  public resetAltmode() {
    this._altmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altmodeInput() {
    return this._altmode;
  }

  // authtype1 - computed: true, optional: true, required: false
  private _authtype1?: string; 
  public get authtype1() {
    return this.getStringAttribute('authtype1');
  }
  public set authtype1(value: string) {
    this._authtype1 = value;
  }
  public resetAuthtype1() {
    this._authtype1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authtype1Input() {
    return this._authtype1;
  }

  // authtype2 - computed: true, optional: true, required: false
  private _authtype2?: string; 
  public get authtype2() {
    return this.getStringAttribute('authtype2');
  }
  public set authtype2(value: string) {
    this._authtype2 = value;
  }
  public resetAuthtype2() {
    this._authtype2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authtype2Input() {
    return this._authtype2;
  }

  // authtype3 - computed: true, optional: true, required: false
  private _authtype3?: string; 
  public get authtype3() {
    return this.getStringAttribute('authtype3');
  }
  public set authtype3(value: string) {
    this._authtype3 = value;
  }
  public resetAuthtype3() {
    this._authtype3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authtype3Input() {
    return this._authtype3;
  }

  // auto_dial - computed: true, optional: true, required: false
  private _autoDial?: string; 
  public get autoDial() {
    return this.getStringAttribute('auto_dial');
  }
  public set autoDial(value: string) {
    this._autoDial = value;
  }
  public resetAutoDial() {
    this._autoDial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDialInput() {
    return this._autoDial;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // dial_cmd1 - computed: false, optional: true, required: false
  private _dialCmd1?: string; 
  public get dialCmd1() {
    return this.getStringAttribute('dial_cmd1');
  }
  public set dialCmd1(value: string) {
    this._dialCmd1 = value;
  }
  public resetDialCmd1() {
    this._dialCmd1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialCmd1Input() {
    return this._dialCmd1;
  }

  // dial_cmd2 - computed: false, optional: true, required: false
  private _dialCmd2?: string; 
  public get dialCmd2() {
    return this.getStringAttribute('dial_cmd2');
  }
  public set dialCmd2(value: string) {
    this._dialCmd2 = value;
  }
  public resetDialCmd2() {
    this._dialCmd2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialCmd2Input() {
    return this._dialCmd2;
  }

  // dial_cmd3 - computed: false, optional: true, required: false
  private _dialCmd3?: string; 
  public get dialCmd3() {
    return this.getStringAttribute('dial_cmd3');
  }
  public set dialCmd3(value: string) {
    this._dialCmd3 = value;
  }
  public resetDialCmd3() {
    this._dialCmd3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialCmd3Input() {
    return this._dialCmd3;
  }

  // dial_on_demand - computed: true, optional: true, required: false
  private _dialOnDemand?: string; 
  public get dialOnDemand() {
    return this.getStringAttribute('dial_on_demand');
  }
  public set dialOnDemand(value: string) {
    this._dialOnDemand = value;
  }
  public resetDialOnDemand() {
    this._dialOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialOnDemandInput() {
    return this._dialOnDemand;
  }

  // distance - computed: true, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // dont_send_cr1 - computed: true, optional: true, required: false
  private _dontSendCr1?: string; 
  public get dontSendCr1() {
    return this.getStringAttribute('dont_send_cr1');
  }
  public set dontSendCr1(value: string) {
    this._dontSendCr1 = value;
  }
  public resetDontSendCr1() {
    this._dontSendCr1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontSendCr1Input() {
    return this._dontSendCr1;
  }

  // dont_send_cr2 - computed: true, optional: true, required: false
  private _dontSendCr2?: string; 
  public get dontSendCr2() {
    return this.getStringAttribute('dont_send_cr2');
  }
  public set dontSendCr2(value: string) {
    this._dontSendCr2 = value;
  }
  public resetDontSendCr2() {
    this._dontSendCr2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontSendCr2Input() {
    return this._dontSendCr2;
  }

  // dont_send_cr3 - computed: true, optional: true, required: false
  private _dontSendCr3?: string; 
  public get dontSendCr3() {
    return this.getStringAttribute('dont_send_cr3');
  }
  public set dontSendCr3(value: string) {
    this._dontSendCr3 = value;
  }
  public resetDontSendCr3() {
    this._dontSendCr3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontSendCr3Input() {
    return this._dontSendCr3;
  }

  // extra_init1 - computed: false, optional: true, required: false
  private _extraInit1?: string; 
  public get extraInit1() {
    return this.getStringAttribute('extra_init1');
  }
  public set extraInit1(value: string) {
    this._extraInit1 = value;
  }
  public resetExtraInit1() {
    this._extraInit1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInit1Input() {
    return this._extraInit1;
  }

  // extra_init2 - computed: false, optional: true, required: false
  private _extraInit2?: string; 
  public get extraInit2() {
    return this.getStringAttribute('extra_init2');
  }
  public set extraInit2(value: string) {
    this._extraInit2 = value;
  }
  public resetExtraInit2() {
    this._extraInit2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInit2Input() {
    return this._extraInit2;
  }

  // extra_init3 - computed: false, optional: true, required: false
  private _extraInit3?: string; 
  public get extraInit3() {
    return this.getStringAttribute('extra_init3');
  }
  public set extraInit3(value: string) {
    this._extraInit3 = value;
  }
  public resetExtraInit3() {
    this._extraInit3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInit3Input() {
    return this._extraInit3;
  }

  // holddown_timer - computed: true, optional: true, required: false
  private _holddownTimer?: number; 
  public get holddownTimer() {
    return this.getNumberAttribute('holddown_timer');
  }
  public set holddownTimer(value: number) {
    this._holddownTimer = value;
  }
  public resetHolddownTimer() {
    this._holddownTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holddownTimerInput() {
    return this._holddownTimer;
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

  // idle_timer - computed: true, optional: true, required: false
  private _idleTimer?: number; 
  public get idleTimer() {
    return this.getNumberAttribute('idle_timer');
  }
  public set idleTimer(value: number) {
    this._idleTimer = value;
  }
  public resetIdleTimer() {
    this._idleTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimerInput() {
    return this._idleTimer;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // lockdown_lac - computed: false, optional: true, required: false
  private _lockdownLac?: string; 
  public get lockdownLac() {
    return this.getStringAttribute('lockdown_lac');
  }
  public set lockdownLac(value: string) {
    this._lockdownLac = value;
  }
  public resetLockdownLac() {
    this._lockdownLac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockdownLacInput() {
    return this._lockdownLac;
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

  // network_init - computed: false, optional: true, required: false
  private _networkInit?: string; 
  public get networkInit() {
    return this.getStringAttribute('network_init');
  }
  public set networkInit(value: string) {
    this._networkInit = value;
  }
  public resetNetworkInit() {
    this._networkInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInitInput() {
    return this._networkInit;
  }

  // passwd1 - computed: false, optional: true, required: false
  private _passwd1?: string; 
  public get passwd1() {
    return this.getStringAttribute('passwd1');
  }
  public set passwd1(value: string) {
    this._passwd1 = value;
  }
  public resetPasswd1() {
    this._passwd1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwd1Input() {
    return this._passwd1;
  }

  // passwd2 - computed: false, optional: true, required: false
  private _passwd2?: string; 
  public get passwd2() {
    return this.getStringAttribute('passwd2');
  }
  public set passwd2(value: string) {
    this._passwd2 = value;
  }
  public resetPasswd2() {
    this._passwd2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwd2Input() {
    return this._passwd2;
  }

  // passwd3 - computed: false, optional: true, required: false
  private _passwd3?: string; 
  public get passwd3() {
    return this.getStringAttribute('passwd3');
  }
  public set passwd3(value: string) {
    this._passwd3 = value;
  }
  public resetPasswd3() {
    this._passwd3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwd3Input() {
    return this._passwd3;
  }

  // peer_modem1 - computed: true, optional: true, required: false
  private _peerModem1?: string; 
  public get peerModem1() {
    return this.getStringAttribute('peer_modem1');
  }
  public set peerModem1(value: string) {
    this._peerModem1 = value;
  }
  public resetPeerModem1() {
    this._peerModem1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerModem1Input() {
    return this._peerModem1;
  }

  // peer_modem2 - computed: true, optional: true, required: false
  private _peerModem2?: string; 
  public get peerModem2() {
    return this.getStringAttribute('peer_modem2');
  }
  public set peerModem2(value: string) {
    this._peerModem2 = value;
  }
  public resetPeerModem2() {
    this._peerModem2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerModem2Input() {
    return this._peerModem2;
  }

  // peer_modem3 - computed: true, optional: true, required: false
  private _peerModem3?: string; 
  public get peerModem3() {
    return this.getStringAttribute('peer_modem3');
  }
  public set peerModem3(value: string) {
    this._peerModem3 = value;
  }
  public resetPeerModem3() {
    this._peerModem3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerModem3Input() {
    return this._peerModem3;
  }

  // phone1 - computed: false, optional: true, required: false
  private _phone1?: string; 
  public get phone1() {
    return this.getStringAttribute('phone1');
  }
  public set phone1(value: string) {
    this._phone1 = value;
  }
  public resetPhone1() {
    this._phone1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phone1Input() {
    return this._phone1;
  }

  // phone2 - computed: false, optional: true, required: false
  private _phone2?: string; 
  public get phone2() {
    return this.getStringAttribute('phone2');
  }
  public set phone2(value: string) {
    this._phone2 = value;
  }
  public resetPhone2() {
    this._phone2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phone2Input() {
    return this._phone2;
  }

  // phone3 - computed: false, optional: true, required: false
  private _phone3?: string; 
  public get phone3() {
    return this.getStringAttribute('phone3');
  }
  public set phone3(value: string) {
    this._phone3 = value;
  }
  public resetPhone3() {
    this._phone3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phone3Input() {
    return this._phone3;
  }

  // pin_init - computed: false, optional: true, required: false
  private _pinInit?: string; 
  public get pinInit() {
    return this.getStringAttribute('pin_init');
  }
  public set pinInit(value: string) {
    this._pinInit = value;
  }
  public resetPinInit() {
    this._pinInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinInitInput() {
    return this._pinInit;
  }

  // ppp_echo_request1 - computed: true, optional: true, required: false
  private _pppEchoRequest1?: string; 
  public get pppEchoRequest1() {
    return this.getStringAttribute('ppp_echo_request1');
  }
  public set pppEchoRequest1(value: string) {
    this._pppEchoRequest1 = value;
  }
  public resetPppEchoRequest1() {
    this._pppEchoRequest1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppEchoRequest1Input() {
    return this._pppEchoRequest1;
  }

  // ppp_echo_request2 - computed: true, optional: true, required: false
  private _pppEchoRequest2?: string; 
  public get pppEchoRequest2() {
    return this.getStringAttribute('ppp_echo_request2');
  }
  public set pppEchoRequest2(value: string) {
    this._pppEchoRequest2 = value;
  }
  public resetPppEchoRequest2() {
    this._pppEchoRequest2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppEchoRequest2Input() {
    return this._pppEchoRequest2;
  }

  // ppp_echo_request3 - computed: true, optional: true, required: false
  private _pppEchoRequest3?: string; 
  public get pppEchoRequest3() {
    return this.getStringAttribute('ppp_echo_request3');
  }
  public set pppEchoRequest3(value: string) {
    this._pppEchoRequest3 = value;
  }
  public resetPppEchoRequest3() {
    this._pppEchoRequest3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppEchoRequest3Input() {
    return this._pppEchoRequest3;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // redial - computed: true, optional: true, required: false
  private _redial?: string; 
  public get redial() {
    return this.getStringAttribute('redial');
  }
  public set redial(value: string) {
    this._redial = value;
  }
  public resetRedial() {
    this._redial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redialInput() {
    return this._redial;
  }

  // reset - computed: false, optional: true, required: false
  private _reset?: number; 
  public get reset() {
    return this.getNumberAttribute('reset');
  }
  public set reset(value: number) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
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

  // traffic_check - computed: true, optional: true, required: false
  private _trafficCheck?: string; 
  public get trafficCheck() {
    return this.getStringAttribute('traffic_check');
  }
  public set trafficCheck(value: string) {
    this._trafficCheck = value;
  }
  public resetTrafficCheck() {
    this._trafficCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficCheckInput() {
    return this._trafficCheck;
  }

  // username1 - computed: false, optional: true, required: false
  private _username1?: string; 
  public get username1() {
    return this.getStringAttribute('username1');
  }
  public set username1(value: string) {
    this._username1 = value;
  }
  public resetUsername1() {
    this._username1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get username1Input() {
    return this._username1;
  }

  // username2 - computed: false, optional: true, required: false
  private _username2?: string; 
  public get username2() {
    return this.getStringAttribute('username2');
  }
  public set username2(value: string) {
    this._username2 = value;
  }
  public resetUsername2() {
    this._username2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get username2Input() {
    return this._username2;
  }

  // username3 - computed: false, optional: true, required: false
  private _username3?: string; 
  public get username3() {
    return this.getStringAttribute('username3');
  }
  public set username3(value: string) {
    this._username3 = value;
  }
  public resetUsername3() {
    this._username3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get username3Input() {
    return this._username3;
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

  // wireless_port - computed: false, optional: true, required: false
  private _wirelessPort?: number; 
  public get wirelessPort() {
    return this.getNumberAttribute('wireless_port');
  }
  public set wirelessPort(value: number) {
    this._wirelessPort = value;
  }
  public resetWirelessPort() {
    this._wirelessPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessPortInput() {
    return this._wirelessPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      altmode: cdktf.stringToTerraform(this._altmode),
      authtype1: cdktf.stringToTerraform(this._authtype1),
      authtype2: cdktf.stringToTerraform(this._authtype2),
      authtype3: cdktf.stringToTerraform(this._authtype3),
      auto_dial: cdktf.stringToTerraform(this._autoDial),
      connect_timeout: cdktf.numberToTerraform(this._connectTimeout),
      dial_cmd1: cdktf.stringToTerraform(this._dialCmd1),
      dial_cmd2: cdktf.stringToTerraform(this._dialCmd2),
      dial_cmd3: cdktf.stringToTerraform(this._dialCmd3),
      dial_on_demand: cdktf.stringToTerraform(this._dialOnDemand),
      distance: cdktf.numberToTerraform(this._distance),
      dont_send_cr1: cdktf.stringToTerraform(this._dontSendCr1),
      dont_send_cr2: cdktf.stringToTerraform(this._dontSendCr2),
      dont_send_cr3: cdktf.stringToTerraform(this._dontSendCr3),
      extra_init1: cdktf.stringToTerraform(this._extraInit1),
      extra_init2: cdktf.stringToTerraform(this._extraInit2),
      extra_init3: cdktf.stringToTerraform(this._extraInit3),
      holddown_timer: cdktf.numberToTerraform(this._holddownTimer),
      id: cdktf.stringToTerraform(this._id),
      idle_timer: cdktf.numberToTerraform(this._idleTimer),
      interface: cdktf.stringToTerraform(this._interface),
      lockdown_lac: cdktf.stringToTerraform(this._lockdownLac),
      mode: cdktf.stringToTerraform(this._mode),
      network_init: cdktf.stringToTerraform(this._networkInit),
      passwd1: cdktf.stringToTerraform(this._passwd1),
      passwd2: cdktf.stringToTerraform(this._passwd2),
      passwd3: cdktf.stringToTerraform(this._passwd3),
      peer_modem1: cdktf.stringToTerraform(this._peerModem1),
      peer_modem2: cdktf.stringToTerraform(this._peerModem2),
      peer_modem3: cdktf.stringToTerraform(this._peerModem3),
      phone1: cdktf.stringToTerraform(this._phone1),
      phone2: cdktf.stringToTerraform(this._phone2),
      phone3: cdktf.stringToTerraform(this._phone3),
      pin_init: cdktf.stringToTerraform(this._pinInit),
      ppp_echo_request1: cdktf.stringToTerraform(this._pppEchoRequest1),
      ppp_echo_request2: cdktf.stringToTerraform(this._pppEchoRequest2),
      ppp_echo_request3: cdktf.stringToTerraform(this._pppEchoRequest3),
      priority: cdktf.numberToTerraform(this._priority),
      redial: cdktf.stringToTerraform(this._redial),
      reset: cdktf.numberToTerraform(this._reset),
      status: cdktf.stringToTerraform(this._status),
      traffic_check: cdktf.stringToTerraform(this._trafficCheck),
      username1: cdktf.stringToTerraform(this._username1),
      username2: cdktf.stringToTerraform(this._username2),
      username3: cdktf.stringToTerraform(this._username3),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      wireless_port: cdktf.numberToTerraform(this._wirelessPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      altmode: {
        value: cdktf.stringToHclTerraform(this._altmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authtype1: {
        value: cdktf.stringToHclTerraform(this._authtype1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authtype2: {
        value: cdktf.stringToHclTerraform(this._authtype2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authtype3: {
        value: cdktf.stringToHclTerraform(this._authtype3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_dial: {
        value: cdktf.stringToHclTerraform(this._autoDial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_timeout: {
        value: cdktf.numberToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dial_cmd1: {
        value: cdktf.stringToHclTerraform(this._dialCmd1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dial_cmd2: {
        value: cdktf.stringToHclTerraform(this._dialCmd2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dial_cmd3: {
        value: cdktf.stringToHclTerraform(this._dialCmd3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dial_on_demand: {
        value: cdktf.stringToHclTerraform(this._dialOnDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance: {
        value: cdktf.numberToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dont_send_cr1: {
        value: cdktf.stringToHclTerraform(this._dontSendCr1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dont_send_cr2: {
        value: cdktf.stringToHclTerraform(this._dontSendCr2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dont_send_cr3: {
        value: cdktf.stringToHclTerraform(this._dontSendCr3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_init1: {
        value: cdktf.stringToHclTerraform(this._extraInit1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_init2: {
        value: cdktf.stringToHclTerraform(this._extraInit2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_init3: {
        value: cdktf.stringToHclTerraform(this._extraInit3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      holddown_timer: {
        value: cdktf.numberToHclTerraform(this._holddownTimer),
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
      idle_timer: {
        value: cdktf.numberToHclTerraform(this._idleTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lockdown_lac: {
        value: cdktf.stringToHclTerraform(this._lockdownLac),
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
      network_init: {
        value: cdktf.stringToHclTerraform(this._networkInit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwd1: {
        value: cdktf.stringToHclTerraform(this._passwd1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwd2: {
        value: cdktf.stringToHclTerraform(this._passwd2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwd3: {
        value: cdktf.stringToHclTerraform(this._passwd3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_modem1: {
        value: cdktf.stringToHclTerraform(this._peerModem1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_modem2: {
        value: cdktf.stringToHclTerraform(this._peerModem2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_modem3: {
        value: cdktf.stringToHclTerraform(this._peerModem3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone1: {
        value: cdktf.stringToHclTerraform(this._phone1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone2: {
        value: cdktf.stringToHclTerraform(this._phone2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone3: {
        value: cdktf.stringToHclTerraform(this._phone3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pin_init: {
        value: cdktf.stringToHclTerraform(this._pinInit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppp_echo_request1: {
        value: cdktf.stringToHclTerraform(this._pppEchoRequest1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppp_echo_request2: {
        value: cdktf.stringToHclTerraform(this._pppEchoRequest2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppp_echo_request3: {
        value: cdktf.stringToHclTerraform(this._pppEchoRequest3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redial: {
        value: cdktf.stringToHclTerraform(this._redial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset: {
        value: cdktf.numberToHclTerraform(this._reset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_check: {
        value: cdktf.stringToHclTerraform(this._trafficCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username1: {
        value: cdktf.stringToHclTerraform(this._username1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username2: {
        value: cdktf.stringToHclTerraform(this._username2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username3: {
        value: cdktf.stringToHclTerraform(this._username3),
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
      wireless_port: {
        value: cdktf.numberToHclTerraform(this._wirelessPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
