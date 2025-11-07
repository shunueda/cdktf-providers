// https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EscalationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#action_to_trigger Escalation#action_to_trigger}
  */
  readonly actionToTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#duration Escalation#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#group_to_notify Escalation#group_to_notify}
  */
  readonly groupToNotify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#id Escalation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#important Escalation#important}
  */
  readonly important?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#notify_if_time_from Escalation#notify_if_time_from}
  */
  readonly notifyIfTimeFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#notify_if_time_to Escalation#notify_if_time_to}
  */
  readonly notifyIfTimeTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#notify_on_call_from_schedule Escalation#notify_on_call_from_schedule}
  */
  readonly notifyOnCallFromSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#persons_to_notify Escalation#persons_to_notify}
  */
  readonly personsToNotify?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#persons_to_notify_next_each_time Escalation#persons_to_notify_next_each_time}
  */
  readonly personsToNotifyNextEachTime?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#position Escalation#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#route_id Escalation#route_id}
  */
  readonly routeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#type Escalation#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation amixr_escalation}
*/
export class Escalation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "amixr_escalation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Escalation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Escalation to import
  * @param importFromId The id of the existing Escalation that should be imported. Refer to the {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Escalation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "amixr_escalation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alertmixer/amixr/0.2.3/docs/resources/escalation amixr_escalation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EscalationConfig
  */
  public constructor(scope: Construct, id: string, config: EscalationConfig) {
    super(scope, id, {
      terraformResourceType: 'amixr_escalation',
      terraformGeneratorMetadata: {
        providerName: 'amixr',
        providerVersion: '0.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionToTrigger = config.actionToTrigger;
    this._duration = config.duration;
    this._groupToNotify = config.groupToNotify;
    this._id = config.id;
    this._important = config.important;
    this._notifyIfTimeFrom = config.notifyIfTimeFrom;
    this._notifyIfTimeTo = config.notifyIfTimeTo;
    this._notifyOnCallFromSchedule = config.notifyOnCallFromSchedule;
    this._personsToNotify = config.personsToNotify;
    this._personsToNotifyNextEachTime = config.personsToNotifyNextEachTime;
    this._position = config.position;
    this._routeId = config.routeId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_to_trigger - computed: false, optional: true, required: false
  private _actionToTrigger?: string; 
  public get actionToTrigger() {
    return this.getStringAttribute('action_to_trigger');
  }
  public set actionToTrigger(value: string) {
    this._actionToTrigger = value;
  }
  public resetActionToTrigger() {
    this._actionToTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionToTriggerInput() {
    return this._actionToTrigger;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // group_to_notify - computed: false, optional: true, required: false
  private _groupToNotify?: string; 
  public get groupToNotify() {
    return this.getStringAttribute('group_to_notify');
  }
  public set groupToNotify(value: string) {
    this._groupToNotify = value;
  }
  public resetGroupToNotify() {
    this._groupToNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupToNotifyInput() {
    return this._groupToNotify;
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

  // important - computed: false, optional: true, required: false
  private _important?: boolean | cdktf.IResolvable; 
  public get important() {
    return this.getBooleanAttribute('important');
  }
  public set important(value: boolean | cdktf.IResolvable) {
    this._important = value;
  }
  public resetImportant() {
    this._important = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importantInput() {
    return this._important;
  }

  // notify_if_time_from - computed: false, optional: true, required: false
  private _notifyIfTimeFrom?: string; 
  public get notifyIfTimeFrom() {
    return this.getStringAttribute('notify_if_time_from');
  }
  public set notifyIfTimeFrom(value: string) {
    this._notifyIfTimeFrom = value;
  }
  public resetNotifyIfTimeFrom() {
    this._notifyIfTimeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyIfTimeFromInput() {
    return this._notifyIfTimeFrom;
  }

  // notify_if_time_to - computed: false, optional: true, required: false
  private _notifyIfTimeTo?: string; 
  public get notifyIfTimeTo() {
    return this.getStringAttribute('notify_if_time_to');
  }
  public set notifyIfTimeTo(value: string) {
    this._notifyIfTimeTo = value;
  }
  public resetNotifyIfTimeTo() {
    this._notifyIfTimeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyIfTimeToInput() {
    return this._notifyIfTimeTo;
  }

  // notify_on_call_from_schedule - computed: false, optional: true, required: false
  private _notifyOnCallFromSchedule?: string; 
  public get notifyOnCallFromSchedule() {
    return this.getStringAttribute('notify_on_call_from_schedule');
  }
  public set notifyOnCallFromSchedule(value: string) {
    this._notifyOnCallFromSchedule = value;
  }
  public resetNotifyOnCallFromSchedule() {
    this._notifyOnCallFromSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnCallFromScheduleInput() {
    return this._notifyOnCallFromSchedule;
  }

  // persons_to_notify - computed: false, optional: true, required: false
  private _personsToNotify?: string[]; 
  public get personsToNotify() {
    return cdktf.Fn.tolist(this.getListAttribute('persons_to_notify'));
  }
  public set personsToNotify(value: string[]) {
    this._personsToNotify = value;
  }
  public resetPersonsToNotify() {
    this._personsToNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personsToNotifyInput() {
    return this._personsToNotify;
  }

  // persons_to_notify_next_each_time - computed: false, optional: true, required: false
  private _personsToNotifyNextEachTime?: string[]; 
  public get personsToNotifyNextEachTime() {
    return cdktf.Fn.tolist(this.getListAttribute('persons_to_notify_next_each_time'));
  }
  public set personsToNotifyNextEachTime(value: string[]) {
    this._personsToNotifyNextEachTime = value;
  }
  public resetPersonsToNotifyNextEachTime() {
    this._personsToNotifyNextEachTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personsToNotifyNextEachTimeInput() {
    return this._personsToNotifyNextEachTime;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // route_id - computed: false, optional: false, required: true
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_to_trigger: cdktf.stringToTerraform(this._actionToTrigger),
      duration: cdktf.numberToTerraform(this._duration),
      group_to_notify: cdktf.stringToTerraform(this._groupToNotify),
      id: cdktf.stringToTerraform(this._id),
      important: cdktf.booleanToTerraform(this._important),
      notify_if_time_from: cdktf.stringToTerraform(this._notifyIfTimeFrom),
      notify_if_time_to: cdktf.stringToTerraform(this._notifyIfTimeTo),
      notify_on_call_from_schedule: cdktf.stringToTerraform(this._notifyOnCallFromSchedule),
      persons_to_notify: cdktf.listMapper(cdktf.stringToTerraform, false)(this._personsToNotify),
      persons_to_notify_next_each_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._personsToNotifyNextEachTime),
      position: cdktf.numberToTerraform(this._position),
      route_id: cdktf.stringToTerraform(this._routeId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_to_trigger: {
        value: cdktf.stringToHclTerraform(this._actionToTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_to_notify: {
        value: cdktf.stringToHclTerraform(this._groupToNotify),
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
      important: {
        value: cdktf.booleanToHclTerraform(this._important),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_if_time_from: {
        value: cdktf.stringToHclTerraform(this._notifyIfTimeFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_if_time_to: {
        value: cdktf.stringToHclTerraform(this._notifyIfTimeTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_on_call_from_schedule: {
        value: cdktf.stringToHclTerraform(this._notifyOnCallFromSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persons_to_notify: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._personsToNotify),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      persons_to_notify_next_each_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._personsToNotifyNextEachTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_id: {
        value: cdktf.stringToHclTerraform(this._routeId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
