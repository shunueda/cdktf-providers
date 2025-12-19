// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_rate_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcosEventsMessageIdPropertyRateLimitAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_rate_limit#id AcosEventsMessageIdPropertyRateLimitA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LogMsg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_rate_limit#log_msg AcosEventsMessageIdPropertyRateLimitA#log_msg}
  */
  readonly logMsg: string;
  /**
  * MessageIdScopeRoute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_rate_limit#message_id_scope_route AcosEventsMessageIdPropertyRateLimitA#message_id_scope_route}
  */
  readonly messageIdScopeRoute: string;
  /**
  * 'enable': enable rate-limiting of logs; 'disable': disable rate-limiting of logs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_rate_limit#rate_limit_val AcosEventsMessageIdPropertyRateLimitA#rate_limit_val}
  */
  readonly rateLimitVal?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_rate_limit#uuid AcosEventsMessageIdPropertyRateLimitA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_rate_limit thunder_acos_events_message_id_property_rate_limit}
*/
export class AcosEventsMessageIdPropertyRateLimitA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_message_id_property_rate_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcosEventsMessageIdPropertyRateLimitA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcosEventsMessageIdPropertyRateLimitA to import
  * @param importFromId The id of the existing AcosEventsMessageIdPropertyRateLimitA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_rate_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcosEventsMessageIdPropertyRateLimitA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_message_id_property_rate_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_rate_limit thunder_acos_events_message_id_property_rate_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcosEventsMessageIdPropertyRateLimitAConfig
  */
  public constructor(scope: Construct, id: string, config: AcosEventsMessageIdPropertyRateLimitAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_message_id_property_rate_limit',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._logMsg = config.logMsg;
    this._messageIdScopeRoute = config.messageIdScopeRoute;
    this._rateLimitVal = config.rateLimitVal;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // log_msg - computed: false, optional: false, required: true
  private _logMsg?: string; 
  public get logMsg() {
    return this.getStringAttribute('log_msg');
  }
  public set logMsg(value: string) {
    this._logMsg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logMsgInput() {
    return this._logMsg;
  }

  // message_id_scope_route - computed: false, optional: false, required: true
  private _messageIdScopeRoute?: string; 
  public get messageIdScopeRoute() {
    return this.getStringAttribute('message_id_scope_route');
  }
  public set messageIdScopeRoute(value: string) {
    this._messageIdScopeRoute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdScopeRouteInput() {
    return this._messageIdScopeRoute;
  }

  // rate_limit_val - computed: false, optional: true, required: false
  private _rateLimitVal?: string; 
  public get rateLimitVal() {
    return this.getStringAttribute('rate_limit_val');
  }
  public set rateLimitVal(value: string) {
    this._rateLimitVal = value;
  }
  public resetRateLimitVal() {
    this._rateLimitVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitValInput() {
    return this._rateLimitVal;
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
      id: cdktf.stringToTerraform(this._id),
      log_msg: cdktf.stringToTerraform(this._logMsg),
      message_id_scope_route: cdktf.stringToTerraform(this._messageIdScopeRoute),
      rate_limit_val: cdktf.stringToTerraform(this._rateLimitVal),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      log_msg: {
        value: cdktf.stringToHclTerraform(this._logMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_id_scope_route: {
        value: cdktf.stringToHclTerraform(this._messageIdScopeRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_val: {
        value: cdktf.stringToHclTerraform(this._rateLimitVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
