// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchstpSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#flood SwitchstpSettings#flood}
  */
  readonly flood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#forward_time SwitchstpSettings#forward_time}
  */
  readonly forwardTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#hello_time SwitchstpSettings#hello_time}
  */
  readonly helloTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#id SwitchstpSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#max_age SwitchstpSettings#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#max_hops SwitchstpSettings#max_hops}
  */
  readonly maxHops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#mclag_stp_bpdu SwitchstpSettings#mclag_stp_bpdu}
  */
  readonly mclagStpBpdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#mclag_stp_mac SwitchstpSettings#mclag_stp_mac}
  */
  readonly mclagStpMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#name SwitchstpSettings#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#pending_timer SwitchstpSettings#pending_timer}
  */
  readonly pendingTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#revision SwitchstpSettings#revision}
  */
  readonly revision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#status SwitchstpSettings#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings fortiswitch_switchstp_settings}
*/
export class SwitchstpSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchstp_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchstpSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchstpSettings to import
  * @param importFromId The id of the existing SwitchstpSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchstpSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchstp_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchstp_settings fortiswitch_switchstp_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchstpSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchstpSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchstp_settings',
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
    this._flood = config.flood;
    this._forwardTime = config.forwardTime;
    this._helloTime = config.helloTime;
    this._id = config.id;
    this._maxAge = config.maxAge;
    this._maxHops = config.maxHops;
    this._mclagStpBpdu = config.mclagStpBpdu;
    this._mclagStpMac = config.mclagStpMac;
    this._name = config.name;
    this._pendingTimer = config.pendingTimer;
    this._revision = config.revision;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flood - computed: true, optional: true, required: false
  private _flood?: string; 
  public get flood() {
    return this.getStringAttribute('flood');
  }
  public set flood(value: string) {
    this._flood = value;
  }
  public resetFlood() {
    this._flood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodInput() {
    return this._flood;
  }

  // forward_time - computed: true, optional: true, required: false
  private _forwardTime?: number; 
  public get forwardTime() {
    return this.getNumberAttribute('forward_time');
  }
  public set forwardTime(value: number) {
    this._forwardTime = value;
  }
  public resetForwardTime() {
    this._forwardTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTimeInput() {
    return this._forwardTime;
  }

  // hello_time - computed: true, optional: true, required: false
  private _helloTime?: number; 
  public get helloTime() {
    return this.getNumberAttribute('hello_time');
  }
  public set helloTime(value: number) {
    this._helloTime = value;
  }
  public resetHelloTime() {
    this._helloTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloTimeInput() {
    return this._helloTime;
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

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_hops - computed: true, optional: true, required: false
  private _maxHops?: number; 
  public get maxHops() {
    return this.getNumberAttribute('max_hops');
  }
  public set maxHops(value: number) {
    this._maxHops = value;
  }
  public resetMaxHops() {
    this._maxHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopsInput() {
    return this._maxHops;
  }

  // mclag_stp_bpdu - computed: true, optional: true, required: false
  private _mclagStpBpdu?: string; 
  public get mclagStpBpdu() {
    return this.getStringAttribute('mclag_stp_bpdu');
  }
  public set mclagStpBpdu(value: string) {
    this._mclagStpBpdu = value;
  }
  public resetMclagStpBpdu() {
    this._mclagStpBpdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagStpBpduInput() {
    return this._mclagStpBpdu;
  }

  // mclag_stp_mac - computed: true, optional: true, required: false
  private _mclagStpMac?: string; 
  public get mclagStpMac() {
    return this.getStringAttribute('mclag_stp_mac');
  }
  public set mclagStpMac(value: string) {
    this._mclagStpMac = value;
  }
  public resetMclagStpMac() {
    this._mclagStpMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagStpMacInput() {
    return this._mclagStpMac;
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

  // pending_timer - computed: true, optional: true, required: false
  private _pendingTimer?: number; 
  public get pendingTimer() {
    return this.getNumberAttribute('pending_timer');
  }
  public set pendingTimer(value: number) {
    this._pendingTimer = value;
  }
  public resetPendingTimer() {
    this._pendingTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingTimerInput() {
    return this._pendingTimer;
  }

  // revision - computed: true, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flood: cdktf.stringToTerraform(this._flood),
      forward_time: cdktf.numberToTerraform(this._forwardTime),
      hello_time: cdktf.numberToTerraform(this._helloTime),
      id: cdktf.stringToTerraform(this._id),
      max_age: cdktf.numberToTerraform(this._maxAge),
      max_hops: cdktf.numberToTerraform(this._maxHops),
      mclag_stp_bpdu: cdktf.stringToTerraform(this._mclagStpBpdu),
      mclag_stp_mac: cdktf.stringToTerraform(this._mclagStpMac),
      name: cdktf.stringToTerraform(this._name),
      pending_timer: cdktf.numberToTerraform(this._pendingTimer),
      revision: cdktf.numberToTerraform(this._revision),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flood: {
        value: cdktf.stringToHclTerraform(this._flood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_time: {
        value: cdktf.numberToHclTerraform(this._forwardTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hello_time: {
        value: cdktf.numberToHclTerraform(this._helloTime),
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
      max_age: {
        value: cdktf.numberToHclTerraform(this._maxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_hops: {
        value: cdktf.numberToHclTerraform(this._maxHops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mclag_stp_bpdu: {
        value: cdktf.stringToHclTerraform(this._mclagStpBpdu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mclag_stp_mac: {
        value: cdktf.stringToHclTerraform(this._mclagStpMac),
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
      pending_timer: {
        value: cdktf.numberToHclTerraform(this._pendingTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      revision: {
        value: cdktf.numberToHclTerraform(this._revision),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
