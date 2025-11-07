// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_schedulegroups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchitectSchedulegroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The schedules defining the hours an organization is closed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_schedulegroups#closed_schedules_id ArchitectSchedulegroups#closed_schedules_id}
  */
  readonly closedSchedulesId?: string[];
  /**
  * Description of the schedule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_schedulegroups#description ArchitectSchedulegroups#description}
  */
  readonly description?: string;
  /**
  * The division to which this schedule group will belong. If not set, the home division will be used. If set, you must have all divisions and future divisions selected in your OAuth client role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_schedulegroups#division_id ArchitectSchedulegroups#division_id}
  */
  readonly divisionId?: string;
  /**
  * The schedules defining the hours an organization is closed for the holidays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_schedulegroups#holiday_schedules_id ArchitectSchedulegroups#holiday_schedules_id}
  */
  readonly holidaySchedulesId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_schedulegroups#id ArchitectSchedulegroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the schedule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_schedulegroups#name ArchitectSchedulegroups#name}
  */
  readonly name: string;
  /**
  * The schedules defining the hours an organization is open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_schedulegroups#open_schedules_id ArchitectSchedulegroups#open_schedules_id}
  */
  readonly openSchedulesId: string[];
  /**
  * The timezone the schedules are a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_schedulegroups#time_zone ArchitectSchedulegroups#time_zone}
  */
  readonly timeZone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_schedulegroups genesyscloud_architect_schedulegroups}
*/
export class ArchitectSchedulegroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_architect_schedulegroups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArchitectSchedulegroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArchitectSchedulegroups to import
  * @param importFromId The id of the existing ArchitectSchedulegroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_schedulegroups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArchitectSchedulegroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_architect_schedulegroups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_schedulegroups genesyscloud_architect_schedulegroups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArchitectSchedulegroupsConfig
  */
  public constructor(scope: Construct, id: string, config: ArchitectSchedulegroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_architect_schedulegroups',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._closedSchedulesId = config.closedSchedulesId;
    this._description = config.description;
    this._divisionId = config.divisionId;
    this._holidaySchedulesId = config.holidaySchedulesId;
    this._id = config.id;
    this._name = config.name;
    this._openSchedulesId = config.openSchedulesId;
    this._timeZone = config.timeZone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // closed_schedules_id - computed: false, optional: true, required: false
  private _closedSchedulesId?: string[]; 
  public get closedSchedulesId() {
    return cdktf.Fn.tolist(this.getListAttribute('closed_schedules_id'));
  }
  public set closedSchedulesId(value: string[]) {
    this._closedSchedulesId = value;
  }
  public resetClosedSchedulesId() {
    this._closedSchedulesId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closedSchedulesIdInput() {
    return this._closedSchedulesId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
  }

  // holiday_schedules_id - computed: false, optional: true, required: false
  private _holidaySchedulesId?: string[]; 
  public get holidaySchedulesId() {
    return cdktf.Fn.tolist(this.getListAttribute('holiday_schedules_id'));
  }
  public set holidaySchedulesId(value: string[]) {
    this._holidaySchedulesId = value;
  }
  public resetHolidaySchedulesId() {
    this._holidaySchedulesId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holidaySchedulesIdInput() {
    return this._holidaySchedulesId;
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

  // open_schedules_id - computed: false, optional: false, required: true
  private _openSchedulesId?: string[]; 
  public get openSchedulesId() {
    return cdktf.Fn.tolist(this.getListAttribute('open_schedules_id'));
  }
  public set openSchedulesId(value: string[]) {
    this._openSchedulesId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openSchedulesIdInput() {
    return this._openSchedulesId;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      closed_schedules_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._closedSchedulesId),
      description: cdktf.stringToTerraform(this._description),
      division_id: cdktf.stringToTerraform(this._divisionId),
      holiday_schedules_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._holidaySchedulesId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      open_schedules_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._openSchedulesId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      closed_schedules_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._closedSchedulesId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      holiday_schedules_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._holidaySchedulesId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      open_schedules_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._openSchedulesId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
