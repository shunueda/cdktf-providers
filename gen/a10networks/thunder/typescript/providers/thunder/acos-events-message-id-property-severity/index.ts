// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_severity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcosEventsMessageIdPropertySeverityAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_severity#id AcosEventsMessageIdPropertySeverityA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LogMsg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_severity#log_msg AcosEventsMessageIdPropertySeverityA#log_msg}
  */
  readonly logMsg: string;
  /**
  * MessageIdScopeRoute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_severity#message_id_scope_route AcosEventsMessageIdPropertySeverityA#message_id_scope_route}
  */
  readonly messageIdScopeRoute: string;
  /**
  * 'emergency': System unusable log messages (Most Important); 'alert': Action must be taken immediately; 'critical': Critical conditions; 'error': Error conditions; 'warning': Warning conditions; 'notification': Normal but significant conditions; 'information': Informational messages; 'debugging': Debug level messages (Least Important);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_severity#severity_val AcosEventsMessageIdPropertySeverityA#severity_val}
  */
  readonly severityVal?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_severity#uuid AcosEventsMessageIdPropertySeverityA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_severity thunder_acos_events_message_id_property_severity}
*/
export class AcosEventsMessageIdPropertySeverityA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_message_id_property_severity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcosEventsMessageIdPropertySeverityA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcosEventsMessageIdPropertySeverityA to import
  * @param importFromId The id of the existing AcosEventsMessageIdPropertySeverityA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_severity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcosEventsMessageIdPropertySeverityA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_message_id_property_severity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id_property_severity thunder_acos_events_message_id_property_severity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcosEventsMessageIdPropertySeverityAConfig
  */
  public constructor(scope: Construct, id: string, config: AcosEventsMessageIdPropertySeverityAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_message_id_property_severity',
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
    this._severityVal = config.severityVal;
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

  // severity_val - computed: false, optional: true, required: false
  private _severityVal?: string; 
  public get severityVal() {
    return this.getStringAttribute('severity_val');
  }
  public set severityVal(value: string) {
    this._severityVal = value;
  }
  public resetSeverityVal() {
    this._severityVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityValInput() {
    return this._severityVal;
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
      severity_val: cdktf.stringToTerraform(this._severityVal),
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
      severity_val: {
        value: cdktf.stringToHclTerraform(this._severityVal),
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
