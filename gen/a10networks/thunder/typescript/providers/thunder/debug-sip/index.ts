// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugSipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Method ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#ack DebugSip#ack}
  */
  readonly ack?: number;
  /**
  * SIP Method BYE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#bye DebugSip#bye}
  */
  readonly bye?: number;
  /**
  * SIP Method CANCEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#cancel DebugSip#cancel}
  */
  readonly cancel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#id DebugSip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SIP Method INFO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#info DebugSip#info}
  */
  readonly info?: number;
  /**
  * Method INVITE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#invite DebugSip#invite}
  */
  readonly invite?: number;
  /**
  * SIP Method MESSAGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#message DebugSip#message}
  */
  readonly message?: number;
  /**
  * Set filter with SIP method types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#method DebugSip#method}
  */
  readonly method?: number;
  /**
  * SIP Method NOTIFY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#notify DebugSip#notify}
  */
  readonly notify?: number;
  /**
  * SIP Method OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#options DebugSip#options}
  */
  readonly options?: number;
  /**
  * SIP Method PRACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#prack DebugSip#prack}
  */
  readonly prack?: number;
  /**
  * SIP Method PUBLISH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#publish DebugSip#publish}
  */
  readonly publish?: number;
  /**
  * SIP Method REFER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#refer DebugSip#refer}
  */
  readonly refer?: number;
  /**
  * SIP Method REGISTER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#register DebugSip#register}
  */
  readonly register?: number;
  /**
  * SIP Method SUBSCRIBE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#subscribe DebugSip#subscribe}
  */
  readonly subscribe?: number;
  /**
  * SIP Method UPDATE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#update DebugSip#update}
  */
  readonly update?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#uuid DebugSip#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip thunder_debug_sip}
*/
export class DebugSip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_sip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugSip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugSip to import
  * @param importFromId The id of the existing DebugSip that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugSip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_sip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_sip thunder_debug_sip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugSipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugSipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_sip',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ack = config.ack;
    this._bye = config.bye;
    this._cancel = config.cancel;
    this._id = config.id;
    this._info = config.info;
    this._invite = config.invite;
    this._message = config.message;
    this._method = config.method;
    this._notify = config.notify;
    this._options = config.options;
    this._prack = config.prack;
    this._publish = config.publish;
    this._refer = config.refer;
    this._register = config.register;
    this._subscribe = config.subscribe;
    this._update = config.update;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack - computed: false, optional: true, required: false
  private _ack?: number; 
  public get ack() {
    return this.getNumberAttribute('ack');
  }
  public set ack(value: number) {
    this._ack = value;
  }
  public resetAck() {
    this._ack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackInput() {
    return this._ack;
  }

  // bye - computed: false, optional: true, required: false
  private _bye?: number; 
  public get bye() {
    return this.getNumberAttribute('bye');
  }
  public set bye(value: number) {
    this._bye = value;
  }
  public resetBye() {
    this._bye = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byeInput() {
    return this._bye;
  }

  // cancel - computed: false, optional: true, required: false
  private _cancel?: number; 
  public get cancel() {
    return this.getNumberAttribute('cancel');
  }
  public set cancel(value: number) {
    this._cancel = value;
  }
  public resetCancel() {
    this._cancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelInput() {
    return this._cancel;
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

  // info - computed: false, optional: true, required: false
  private _info?: number; 
  public get info() {
    return this.getNumberAttribute('info');
  }
  public set info(value: number) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
  }

  // invite - computed: false, optional: true, required: false
  private _invite?: number; 
  public get invite() {
    return this.getNumberAttribute('invite');
  }
  public set invite(value: number) {
    this._invite = value;
  }
  public resetInvite() {
    this._invite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteInput() {
    return this._invite;
  }

  // message - computed: false, optional: true, required: false
  private _message?: number; 
  public get message() {
    return this.getNumberAttribute('message');
  }
  public set message(value: number) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // method - computed: false, optional: true, required: false
  private _method?: number; 
  public get method() {
    return this.getNumberAttribute('method');
  }
  public set method(value: number) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // notify - computed: false, optional: true, required: false
  private _notify?: number; 
  public get notify() {
    return this.getNumberAttribute('notify');
  }
  public set notify(value: number) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }

  // options - computed: false, optional: true, required: false
  private _options?: number; 
  public get options() {
    return this.getNumberAttribute('options');
  }
  public set options(value: number) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // prack - computed: false, optional: true, required: false
  private _prack?: number; 
  public get prack() {
    return this.getNumberAttribute('prack');
  }
  public set prack(value: number) {
    this._prack = value;
  }
  public resetPrack() {
    this._prack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prackInput() {
    return this._prack;
  }

  // publish - computed: false, optional: true, required: false
  private _publish?: number; 
  public get publish() {
    return this.getNumberAttribute('publish');
  }
  public set publish(value: number) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish;
  }

  // refer - computed: false, optional: true, required: false
  private _refer?: number; 
  public get refer() {
    return this.getNumberAttribute('refer');
  }
  public set refer(value: number) {
    this._refer = value;
  }
  public resetRefer() {
    this._refer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referInput() {
    return this._refer;
  }

  // register - computed: false, optional: true, required: false
  private _register?: number; 
  public get register() {
    return this.getNumberAttribute('register');
  }
  public set register(value: number) {
    this._register = value;
  }
  public resetRegister() {
    this._register = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerInput() {
    return this._register;
  }

  // subscribe - computed: false, optional: true, required: false
  private _subscribe?: number; 
  public get subscribe() {
    return this.getNumberAttribute('subscribe');
  }
  public set subscribe(value: number) {
    this._subscribe = value;
  }
  public resetSubscribe() {
    this._subscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeInput() {
    return this._subscribe;
  }

  // update - computed: false, optional: true, required: false
  private _update?: number; 
  public get update() {
    return this.getNumberAttribute('update');
  }
  public set update(value: number) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ack: cdktf.numberToTerraform(this._ack),
      bye: cdktf.numberToTerraform(this._bye),
      cancel: cdktf.numberToTerraform(this._cancel),
      id: cdktf.stringToTerraform(this._id),
      info: cdktf.numberToTerraform(this._info),
      invite: cdktf.numberToTerraform(this._invite),
      message: cdktf.numberToTerraform(this._message),
      method: cdktf.numberToTerraform(this._method),
      notify: cdktf.numberToTerraform(this._notify),
      options: cdktf.numberToTerraform(this._options),
      prack: cdktf.numberToTerraform(this._prack),
      publish: cdktf.numberToTerraform(this._publish),
      refer: cdktf.numberToTerraform(this._refer),
      register: cdktf.numberToTerraform(this._register),
      subscribe: cdktf.numberToTerraform(this._subscribe),
      update: cdktf.numberToTerraform(this._update),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack: {
        value: cdktf.numberToHclTerraform(this._ack),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bye: {
        value: cdktf.numberToHclTerraform(this._bye),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cancel: {
        value: cdktf.numberToHclTerraform(this._cancel),
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
      info: {
        value: cdktf.numberToHclTerraform(this._info),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invite: {
        value: cdktf.numberToHclTerraform(this._invite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message: {
        value: cdktf.numberToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      method: {
        value: cdktf.numberToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notify: {
        value: cdktf.numberToHclTerraform(this._notify),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      options: {
        value: cdktf.numberToHclTerraform(this._options),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prack: {
        value: cdktf.numberToHclTerraform(this._prack),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publish: {
        value: cdktf.numberToHclTerraform(this._publish),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refer: {
        value: cdktf.numberToHclTerraform(this._refer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      register: {
        value: cdktf.numberToHclTerraform(this._register),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subscribe: {
        value: cdktf.numberToHclTerraform(this._subscribe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update: {
        value: cdktf.numberToHclTerraform(this._update),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
