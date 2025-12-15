// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/eventoptions_generate_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventoptionsGenerateEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the event to be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/eventoptions_generate_event#name EventoptionsGenerateEvent#name}
  */
  readonly name: string;
  /**
  * Avoid event generation delay propagating to next event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/eventoptions_generate_event#no_drift EventoptionsGenerateEvent#no_drift}
  */
  readonly noDrift?: boolean | cdktf.IResolvable;
  /**
  * Start-time to generate event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/eventoptions_generate_event#start_time EventoptionsGenerateEvent#start_time}
  */
  readonly startTime?: string;
  /**
  * Frequency for generating the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/eventoptions_generate_event#time_interval EventoptionsGenerateEvent#time_interval}
  */
  readonly timeInterval?: number;
  /**
  * Time of day at which to generate event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/eventoptions_generate_event#time_of_day EventoptionsGenerateEvent#time_of_day}
  */
  readonly timeOfDay?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/eventoptions_generate_event junos_eventoptions_generate_event}
*/
export class EventoptionsGenerateEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_eventoptions_generate_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventoptionsGenerateEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventoptionsGenerateEvent to import
  * @param importFromId The id of the existing EventoptionsGenerateEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/eventoptions_generate_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventoptionsGenerateEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_eventoptions_generate_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/eventoptions_generate_event junos_eventoptions_generate_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventoptionsGenerateEventConfig
  */
  public constructor(scope: Construct, id: string, config: EventoptionsGenerateEventConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_eventoptions_generate_event',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._noDrift = config.noDrift;
    this._startTime = config.startTime;
    this._timeInterval = config.timeInterval;
    this._timeOfDay = config.timeOfDay;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // no_drift - computed: false, optional: true, required: false
  private _noDrift?: boolean | cdktf.IResolvable; 
  public get noDrift() {
    return this.getBooleanAttribute('no_drift');
  }
  public set noDrift(value: boolean | cdktf.IResolvable) {
    this._noDrift = value;
  }
  public resetNoDrift() {
    this._noDrift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDriftInput() {
    return this._noDrift;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval?: number; 
  public get timeInterval() {
    return this.getNumberAttribute('time_interval');
  }
  public set timeInterval(value: number) {
    this._timeInterval = value;
  }
  public resetTimeInterval() {
    this._timeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval;
  }

  // time_of_day - computed: false, optional: true, required: false
  private _timeOfDay?: string; 
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      no_drift: cdktf.booleanToTerraform(this._noDrift),
      start_time: cdktf.stringToTerraform(this._startTime),
      time_interval: cdktf.numberToTerraform(this._timeInterval),
      time_of_day: cdktf.stringToTerraform(this._timeOfDay),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_drift: {
        value: cdktf.booleanToHclTerraform(this._noDrift),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_interval: {
        value: cdktf.numberToHclTerraform(this._timeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_of_day: {
        value: cdktf.stringToHclTerraform(this._timeOfDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
