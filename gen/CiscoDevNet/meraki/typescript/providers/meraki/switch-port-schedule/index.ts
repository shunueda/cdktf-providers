// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchPortScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name for your port schedule. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#name SwitchPortSchedule#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#network_id SwitchPortSchedule#network_id}
  */
  readonly networkId: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_friday_active SwitchPortSchedule#port_schedule_friday_active}
  */
  readonly portScheduleFridayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_friday_from SwitchPortSchedule#port_schedule_friday_from}
  */
  readonly portScheduleFridayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_friday_to SwitchPortSchedule#port_schedule_friday_to}
  */
  readonly portScheduleFridayTo?: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_monday_active SwitchPortSchedule#port_schedule_monday_active}
  */
  readonly portScheduleMondayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_monday_from SwitchPortSchedule#port_schedule_monday_from}
  */
  readonly portScheduleMondayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_monday_to SwitchPortSchedule#port_schedule_monday_to}
  */
  readonly portScheduleMondayTo?: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_saturday_active SwitchPortSchedule#port_schedule_saturday_active}
  */
  readonly portScheduleSaturdayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_saturday_from SwitchPortSchedule#port_schedule_saturday_from}
  */
  readonly portScheduleSaturdayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_saturday_to SwitchPortSchedule#port_schedule_saturday_to}
  */
  readonly portScheduleSaturdayTo?: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_sunday_active SwitchPortSchedule#port_schedule_sunday_active}
  */
  readonly portScheduleSundayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_sunday_from SwitchPortSchedule#port_schedule_sunday_from}
  */
  readonly portScheduleSundayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_sunday_to SwitchPortSchedule#port_schedule_sunday_to}
  */
  readonly portScheduleSundayTo?: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_thursday_active SwitchPortSchedule#port_schedule_thursday_active}
  */
  readonly portScheduleThursdayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_thursday_from SwitchPortSchedule#port_schedule_thursday_from}
  */
  readonly portScheduleThursdayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_thursday_to SwitchPortSchedule#port_schedule_thursday_to}
  */
  readonly portScheduleThursdayTo?: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_tuesday_active SwitchPortSchedule#port_schedule_tuesday_active}
  */
  readonly portScheduleTuesdayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_tuesday_from SwitchPortSchedule#port_schedule_tuesday_from}
  */
  readonly portScheduleTuesdayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_tuesday_to SwitchPortSchedule#port_schedule_tuesday_to}
  */
  readonly portScheduleTuesdayTo?: string;
  /**
  * Whether the schedule is active (true) or inactive (false) during the time specified between `from` and `to`. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_wednesday_active SwitchPortSchedule#port_schedule_wednesday_active}
  */
  readonly portScheduleWednesdayActive?: boolean | cdktf.IResolvable;
  /**
  * The time, from `00:00` to `24:00`. Must be less than the time specified in `to`. Defaults to `00:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_wednesday_from SwitchPortSchedule#port_schedule_wednesday_from}
  */
  readonly portScheduleWednesdayFrom?: string;
  /**
  * The time, from `00:00` to `24:00`. Must be greater than the time specified in `from`. Defaults to `24:00`. Only 30 minute increments are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#port_schedule_wednesday_to SwitchPortSchedule#port_schedule_wednesday_to}
  */
  readonly portScheduleWednesdayTo?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule meraki_switch_port_schedule}
*/
export class SwitchPortSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_port_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchPortSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchPortSchedule to import
  * @param importFromId The id of the existing SwitchPortSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchPortSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_port_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_port_schedule meraki_switch_port_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchPortScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchPortScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_port_schedule',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
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
    this._networkId = config.networkId;
    this._portScheduleFridayActive = config.portScheduleFridayActive;
    this._portScheduleFridayFrom = config.portScheduleFridayFrom;
    this._portScheduleFridayTo = config.portScheduleFridayTo;
    this._portScheduleMondayActive = config.portScheduleMondayActive;
    this._portScheduleMondayFrom = config.portScheduleMondayFrom;
    this._portScheduleMondayTo = config.portScheduleMondayTo;
    this._portScheduleSaturdayActive = config.portScheduleSaturdayActive;
    this._portScheduleSaturdayFrom = config.portScheduleSaturdayFrom;
    this._portScheduleSaturdayTo = config.portScheduleSaturdayTo;
    this._portScheduleSundayActive = config.portScheduleSundayActive;
    this._portScheduleSundayFrom = config.portScheduleSundayFrom;
    this._portScheduleSundayTo = config.portScheduleSundayTo;
    this._portScheduleThursdayActive = config.portScheduleThursdayActive;
    this._portScheduleThursdayFrom = config.portScheduleThursdayFrom;
    this._portScheduleThursdayTo = config.portScheduleThursdayTo;
    this._portScheduleTuesdayActive = config.portScheduleTuesdayActive;
    this._portScheduleTuesdayFrom = config.portScheduleTuesdayFrom;
    this._portScheduleTuesdayTo = config.portScheduleTuesdayTo;
    this._portScheduleWednesdayActive = config.portScheduleWednesdayActive;
    this._portScheduleWednesdayFrom = config.portScheduleWednesdayFrom;
    this._portScheduleWednesdayTo = config.portScheduleWednesdayTo;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // port_schedule_friday_active - computed: false, optional: true, required: false
  private _portScheduleFridayActive?: boolean | cdktf.IResolvable; 
  public get portScheduleFridayActive() {
    return this.getBooleanAttribute('port_schedule_friday_active');
  }
  public set portScheduleFridayActive(value: boolean | cdktf.IResolvable) {
    this._portScheduleFridayActive = value;
  }
  public resetPortScheduleFridayActive() {
    this._portScheduleFridayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleFridayActiveInput() {
    return this._portScheduleFridayActive;
  }

  // port_schedule_friday_from - computed: false, optional: true, required: false
  private _portScheduleFridayFrom?: string; 
  public get portScheduleFridayFrom() {
    return this.getStringAttribute('port_schedule_friday_from');
  }
  public set portScheduleFridayFrom(value: string) {
    this._portScheduleFridayFrom = value;
  }
  public resetPortScheduleFridayFrom() {
    this._portScheduleFridayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleFridayFromInput() {
    return this._portScheduleFridayFrom;
  }

  // port_schedule_friday_to - computed: false, optional: true, required: false
  private _portScheduleFridayTo?: string; 
  public get portScheduleFridayTo() {
    return this.getStringAttribute('port_schedule_friday_to');
  }
  public set portScheduleFridayTo(value: string) {
    this._portScheduleFridayTo = value;
  }
  public resetPortScheduleFridayTo() {
    this._portScheduleFridayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleFridayToInput() {
    return this._portScheduleFridayTo;
  }

  // port_schedule_monday_active - computed: false, optional: true, required: false
  private _portScheduleMondayActive?: boolean | cdktf.IResolvable; 
  public get portScheduleMondayActive() {
    return this.getBooleanAttribute('port_schedule_monday_active');
  }
  public set portScheduleMondayActive(value: boolean | cdktf.IResolvable) {
    this._portScheduleMondayActive = value;
  }
  public resetPortScheduleMondayActive() {
    this._portScheduleMondayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleMondayActiveInput() {
    return this._portScheduleMondayActive;
  }

  // port_schedule_monday_from - computed: false, optional: true, required: false
  private _portScheduleMondayFrom?: string; 
  public get portScheduleMondayFrom() {
    return this.getStringAttribute('port_schedule_monday_from');
  }
  public set portScheduleMondayFrom(value: string) {
    this._portScheduleMondayFrom = value;
  }
  public resetPortScheduleMondayFrom() {
    this._portScheduleMondayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleMondayFromInput() {
    return this._portScheduleMondayFrom;
  }

  // port_schedule_monday_to - computed: false, optional: true, required: false
  private _portScheduleMondayTo?: string; 
  public get portScheduleMondayTo() {
    return this.getStringAttribute('port_schedule_monday_to');
  }
  public set portScheduleMondayTo(value: string) {
    this._portScheduleMondayTo = value;
  }
  public resetPortScheduleMondayTo() {
    this._portScheduleMondayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleMondayToInput() {
    return this._portScheduleMondayTo;
  }

  // port_schedule_saturday_active - computed: false, optional: true, required: false
  private _portScheduleSaturdayActive?: boolean | cdktf.IResolvable; 
  public get portScheduleSaturdayActive() {
    return this.getBooleanAttribute('port_schedule_saturday_active');
  }
  public set portScheduleSaturdayActive(value: boolean | cdktf.IResolvable) {
    this._portScheduleSaturdayActive = value;
  }
  public resetPortScheduleSaturdayActive() {
    this._portScheduleSaturdayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleSaturdayActiveInput() {
    return this._portScheduleSaturdayActive;
  }

  // port_schedule_saturday_from - computed: false, optional: true, required: false
  private _portScheduleSaturdayFrom?: string; 
  public get portScheduleSaturdayFrom() {
    return this.getStringAttribute('port_schedule_saturday_from');
  }
  public set portScheduleSaturdayFrom(value: string) {
    this._portScheduleSaturdayFrom = value;
  }
  public resetPortScheduleSaturdayFrom() {
    this._portScheduleSaturdayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleSaturdayFromInput() {
    return this._portScheduleSaturdayFrom;
  }

  // port_schedule_saturday_to - computed: false, optional: true, required: false
  private _portScheduleSaturdayTo?: string; 
  public get portScheduleSaturdayTo() {
    return this.getStringAttribute('port_schedule_saturday_to');
  }
  public set portScheduleSaturdayTo(value: string) {
    this._portScheduleSaturdayTo = value;
  }
  public resetPortScheduleSaturdayTo() {
    this._portScheduleSaturdayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleSaturdayToInput() {
    return this._portScheduleSaturdayTo;
  }

  // port_schedule_sunday_active - computed: false, optional: true, required: false
  private _portScheduleSundayActive?: boolean | cdktf.IResolvable; 
  public get portScheduleSundayActive() {
    return this.getBooleanAttribute('port_schedule_sunday_active');
  }
  public set portScheduleSundayActive(value: boolean | cdktf.IResolvable) {
    this._portScheduleSundayActive = value;
  }
  public resetPortScheduleSundayActive() {
    this._portScheduleSundayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleSundayActiveInput() {
    return this._portScheduleSundayActive;
  }

  // port_schedule_sunday_from - computed: false, optional: true, required: false
  private _portScheduleSundayFrom?: string; 
  public get portScheduleSundayFrom() {
    return this.getStringAttribute('port_schedule_sunday_from');
  }
  public set portScheduleSundayFrom(value: string) {
    this._portScheduleSundayFrom = value;
  }
  public resetPortScheduleSundayFrom() {
    this._portScheduleSundayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleSundayFromInput() {
    return this._portScheduleSundayFrom;
  }

  // port_schedule_sunday_to - computed: false, optional: true, required: false
  private _portScheduleSundayTo?: string; 
  public get portScheduleSundayTo() {
    return this.getStringAttribute('port_schedule_sunday_to');
  }
  public set portScheduleSundayTo(value: string) {
    this._portScheduleSundayTo = value;
  }
  public resetPortScheduleSundayTo() {
    this._portScheduleSundayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleSundayToInput() {
    return this._portScheduleSundayTo;
  }

  // port_schedule_thursday_active - computed: false, optional: true, required: false
  private _portScheduleThursdayActive?: boolean | cdktf.IResolvable; 
  public get portScheduleThursdayActive() {
    return this.getBooleanAttribute('port_schedule_thursday_active');
  }
  public set portScheduleThursdayActive(value: boolean | cdktf.IResolvable) {
    this._portScheduleThursdayActive = value;
  }
  public resetPortScheduleThursdayActive() {
    this._portScheduleThursdayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleThursdayActiveInput() {
    return this._portScheduleThursdayActive;
  }

  // port_schedule_thursday_from - computed: false, optional: true, required: false
  private _portScheduleThursdayFrom?: string; 
  public get portScheduleThursdayFrom() {
    return this.getStringAttribute('port_schedule_thursday_from');
  }
  public set portScheduleThursdayFrom(value: string) {
    this._portScheduleThursdayFrom = value;
  }
  public resetPortScheduleThursdayFrom() {
    this._portScheduleThursdayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleThursdayFromInput() {
    return this._portScheduleThursdayFrom;
  }

  // port_schedule_thursday_to - computed: false, optional: true, required: false
  private _portScheduleThursdayTo?: string; 
  public get portScheduleThursdayTo() {
    return this.getStringAttribute('port_schedule_thursday_to');
  }
  public set portScheduleThursdayTo(value: string) {
    this._portScheduleThursdayTo = value;
  }
  public resetPortScheduleThursdayTo() {
    this._portScheduleThursdayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleThursdayToInput() {
    return this._portScheduleThursdayTo;
  }

  // port_schedule_tuesday_active - computed: false, optional: true, required: false
  private _portScheduleTuesdayActive?: boolean | cdktf.IResolvable; 
  public get portScheduleTuesdayActive() {
    return this.getBooleanAttribute('port_schedule_tuesday_active');
  }
  public set portScheduleTuesdayActive(value: boolean | cdktf.IResolvable) {
    this._portScheduleTuesdayActive = value;
  }
  public resetPortScheduleTuesdayActive() {
    this._portScheduleTuesdayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleTuesdayActiveInput() {
    return this._portScheduleTuesdayActive;
  }

  // port_schedule_tuesday_from - computed: false, optional: true, required: false
  private _portScheduleTuesdayFrom?: string; 
  public get portScheduleTuesdayFrom() {
    return this.getStringAttribute('port_schedule_tuesday_from');
  }
  public set portScheduleTuesdayFrom(value: string) {
    this._portScheduleTuesdayFrom = value;
  }
  public resetPortScheduleTuesdayFrom() {
    this._portScheduleTuesdayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleTuesdayFromInput() {
    return this._portScheduleTuesdayFrom;
  }

  // port_schedule_tuesday_to - computed: false, optional: true, required: false
  private _portScheduleTuesdayTo?: string; 
  public get portScheduleTuesdayTo() {
    return this.getStringAttribute('port_schedule_tuesday_to');
  }
  public set portScheduleTuesdayTo(value: string) {
    this._portScheduleTuesdayTo = value;
  }
  public resetPortScheduleTuesdayTo() {
    this._portScheduleTuesdayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleTuesdayToInput() {
    return this._portScheduleTuesdayTo;
  }

  // port_schedule_wednesday_active - computed: false, optional: true, required: false
  private _portScheduleWednesdayActive?: boolean | cdktf.IResolvable; 
  public get portScheduleWednesdayActive() {
    return this.getBooleanAttribute('port_schedule_wednesday_active');
  }
  public set portScheduleWednesdayActive(value: boolean | cdktf.IResolvable) {
    this._portScheduleWednesdayActive = value;
  }
  public resetPortScheduleWednesdayActive() {
    this._portScheduleWednesdayActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleWednesdayActiveInput() {
    return this._portScheduleWednesdayActive;
  }

  // port_schedule_wednesday_from - computed: false, optional: true, required: false
  private _portScheduleWednesdayFrom?: string; 
  public get portScheduleWednesdayFrom() {
    return this.getStringAttribute('port_schedule_wednesday_from');
  }
  public set portScheduleWednesdayFrom(value: string) {
    this._portScheduleWednesdayFrom = value;
  }
  public resetPortScheduleWednesdayFrom() {
    this._portScheduleWednesdayFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleWednesdayFromInput() {
    return this._portScheduleWednesdayFrom;
  }

  // port_schedule_wednesday_to - computed: false, optional: true, required: false
  private _portScheduleWednesdayTo?: string; 
  public get portScheduleWednesdayTo() {
    return this.getStringAttribute('port_schedule_wednesday_to');
  }
  public set portScheduleWednesdayTo(value: string) {
    this._portScheduleWednesdayTo = value;
  }
  public resetPortScheduleWednesdayTo() {
    this._portScheduleWednesdayTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleWednesdayToInput() {
    return this._portScheduleWednesdayTo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      port_schedule_friday_active: cdktf.booleanToTerraform(this._portScheduleFridayActive),
      port_schedule_friday_from: cdktf.stringToTerraform(this._portScheduleFridayFrom),
      port_schedule_friday_to: cdktf.stringToTerraform(this._portScheduleFridayTo),
      port_schedule_monday_active: cdktf.booleanToTerraform(this._portScheduleMondayActive),
      port_schedule_monday_from: cdktf.stringToTerraform(this._portScheduleMondayFrom),
      port_schedule_monday_to: cdktf.stringToTerraform(this._portScheduleMondayTo),
      port_schedule_saturday_active: cdktf.booleanToTerraform(this._portScheduleSaturdayActive),
      port_schedule_saturday_from: cdktf.stringToTerraform(this._portScheduleSaturdayFrom),
      port_schedule_saturday_to: cdktf.stringToTerraform(this._portScheduleSaturdayTo),
      port_schedule_sunday_active: cdktf.booleanToTerraform(this._portScheduleSundayActive),
      port_schedule_sunday_from: cdktf.stringToTerraform(this._portScheduleSundayFrom),
      port_schedule_sunday_to: cdktf.stringToTerraform(this._portScheduleSundayTo),
      port_schedule_thursday_active: cdktf.booleanToTerraform(this._portScheduleThursdayActive),
      port_schedule_thursday_from: cdktf.stringToTerraform(this._portScheduleThursdayFrom),
      port_schedule_thursday_to: cdktf.stringToTerraform(this._portScheduleThursdayTo),
      port_schedule_tuesday_active: cdktf.booleanToTerraform(this._portScheduleTuesdayActive),
      port_schedule_tuesday_from: cdktf.stringToTerraform(this._portScheduleTuesdayFrom),
      port_schedule_tuesday_to: cdktf.stringToTerraform(this._portScheduleTuesdayTo),
      port_schedule_wednesday_active: cdktf.booleanToTerraform(this._portScheduleWednesdayActive),
      port_schedule_wednesday_from: cdktf.stringToTerraform(this._portScheduleWednesdayFrom),
      port_schedule_wednesday_to: cdktf.stringToTerraform(this._portScheduleWednesdayTo),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_friday_active: {
        value: cdktf.booleanToHclTerraform(this._portScheduleFridayActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_schedule_friday_from: {
        value: cdktf.stringToHclTerraform(this._portScheduleFridayFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_friday_to: {
        value: cdktf.stringToHclTerraform(this._portScheduleFridayTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_monday_active: {
        value: cdktf.booleanToHclTerraform(this._portScheduleMondayActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_schedule_monday_from: {
        value: cdktf.stringToHclTerraform(this._portScheduleMondayFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_monday_to: {
        value: cdktf.stringToHclTerraform(this._portScheduleMondayTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_saturday_active: {
        value: cdktf.booleanToHclTerraform(this._portScheduleSaturdayActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_schedule_saturday_from: {
        value: cdktf.stringToHclTerraform(this._portScheduleSaturdayFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_saturday_to: {
        value: cdktf.stringToHclTerraform(this._portScheduleSaturdayTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_sunday_active: {
        value: cdktf.booleanToHclTerraform(this._portScheduleSundayActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_schedule_sunday_from: {
        value: cdktf.stringToHclTerraform(this._portScheduleSundayFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_sunday_to: {
        value: cdktf.stringToHclTerraform(this._portScheduleSundayTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_thursday_active: {
        value: cdktf.booleanToHclTerraform(this._portScheduleThursdayActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_schedule_thursday_from: {
        value: cdktf.stringToHclTerraform(this._portScheduleThursdayFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_thursday_to: {
        value: cdktf.stringToHclTerraform(this._portScheduleThursdayTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_tuesday_active: {
        value: cdktf.booleanToHclTerraform(this._portScheduleTuesdayActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_schedule_tuesday_from: {
        value: cdktf.stringToHclTerraform(this._portScheduleTuesdayFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_tuesday_to: {
        value: cdktf.stringToHclTerraform(this._portScheduleTuesdayTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_wednesday_active: {
        value: cdktf.booleanToHclTerraform(this._portScheduleWednesdayActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_schedule_wednesday_from: {
        value: cdktf.stringToHclTerraform(this._portScheduleWednesdayFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_wednesday_to: {
        value: cdktf.stringToHclTerraform(this._portScheduleWednesdayTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
