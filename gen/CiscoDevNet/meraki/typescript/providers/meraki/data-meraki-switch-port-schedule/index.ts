// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchPortScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port_schedule#id DataMerakiSwitchPortSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name for your port schedule. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port_schedule#name DataMerakiSwitchPortSchedule#name}
  */
  readonly name?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port_schedule#network_id DataMerakiSwitchPortSchedule#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port_schedule meraki_switch_port_schedule}
*/
export class DataMerakiSwitchPortSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_port_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchPortSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchPortSchedule to import
  * @param importFromId The id of the existing DataMerakiSwitchPortSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchPortSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_port_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port_schedule meraki_switch_port_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchPortScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchPortScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_port_schedule',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
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
    this._name = config.name;
    this._networkId = config.networkId;
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

  // port_schedule_friday_active - computed: true, optional: false, required: false
  public get portScheduleFridayActive() {
    return this.getBooleanAttribute('port_schedule_friday_active');
  }

  // port_schedule_friday_from - computed: true, optional: false, required: false
  public get portScheduleFridayFrom() {
    return this.getStringAttribute('port_schedule_friday_from');
  }

  // port_schedule_friday_to - computed: true, optional: false, required: false
  public get portScheduleFridayTo() {
    return this.getStringAttribute('port_schedule_friday_to');
  }

  // port_schedule_monday_active - computed: true, optional: false, required: false
  public get portScheduleMondayActive() {
    return this.getBooleanAttribute('port_schedule_monday_active');
  }

  // port_schedule_monday_from - computed: true, optional: false, required: false
  public get portScheduleMondayFrom() {
    return this.getStringAttribute('port_schedule_monday_from');
  }

  // port_schedule_monday_to - computed: true, optional: false, required: false
  public get portScheduleMondayTo() {
    return this.getStringAttribute('port_schedule_monday_to');
  }

  // port_schedule_saturday_active - computed: true, optional: false, required: false
  public get portScheduleSaturdayActive() {
    return this.getBooleanAttribute('port_schedule_saturday_active');
  }

  // port_schedule_saturday_from - computed: true, optional: false, required: false
  public get portScheduleSaturdayFrom() {
    return this.getStringAttribute('port_schedule_saturday_from');
  }

  // port_schedule_saturday_to - computed: true, optional: false, required: false
  public get portScheduleSaturdayTo() {
    return this.getStringAttribute('port_schedule_saturday_to');
  }

  // port_schedule_sunday_active - computed: true, optional: false, required: false
  public get portScheduleSundayActive() {
    return this.getBooleanAttribute('port_schedule_sunday_active');
  }

  // port_schedule_sunday_from - computed: true, optional: false, required: false
  public get portScheduleSundayFrom() {
    return this.getStringAttribute('port_schedule_sunday_from');
  }

  // port_schedule_sunday_to - computed: true, optional: false, required: false
  public get portScheduleSundayTo() {
    return this.getStringAttribute('port_schedule_sunday_to');
  }

  // port_schedule_thursday_active - computed: true, optional: false, required: false
  public get portScheduleThursdayActive() {
    return this.getBooleanAttribute('port_schedule_thursday_active');
  }

  // port_schedule_thursday_from - computed: true, optional: false, required: false
  public get portScheduleThursdayFrom() {
    return this.getStringAttribute('port_schedule_thursday_from');
  }

  // port_schedule_thursday_to - computed: true, optional: false, required: false
  public get portScheduleThursdayTo() {
    return this.getStringAttribute('port_schedule_thursday_to');
  }

  // port_schedule_tuesday_active - computed: true, optional: false, required: false
  public get portScheduleTuesdayActive() {
    return this.getBooleanAttribute('port_schedule_tuesday_active');
  }

  // port_schedule_tuesday_from - computed: true, optional: false, required: false
  public get portScheduleTuesdayFrom() {
    return this.getStringAttribute('port_schedule_tuesday_from');
  }

  // port_schedule_tuesday_to - computed: true, optional: false, required: false
  public get portScheduleTuesdayTo() {
    return this.getStringAttribute('port_schedule_tuesday_to');
  }

  // port_schedule_wednesday_active - computed: true, optional: false, required: false
  public get portScheduleWednesdayActive() {
    return this.getBooleanAttribute('port_schedule_wednesday_active');
  }

  // port_schedule_wednesday_from - computed: true, optional: false, required: false
  public get portScheduleWednesdayFrom() {
    return this.getStringAttribute('port_schedule_wednesday_from');
  }

  // port_schedule_wednesday_to - computed: true, optional: false, required: false
  public get portScheduleWednesdayTo() {
    return this.getStringAttribute('port_schedule_wednesday_to');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
