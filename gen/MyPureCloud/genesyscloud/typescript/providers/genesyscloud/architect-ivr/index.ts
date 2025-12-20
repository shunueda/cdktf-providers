// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchitectIvrConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of inbound call flow for closed hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr#closed_hours_flow_id ArchitectIvr#closed_hours_flow_id}
  */
  readonly closedHoursFlowId?: string;
  /**
  * IVR Config description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr#description ArchitectIvr#description}
  */
  readonly description?: string;
  /**
  * Division ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr#division_id ArchitectIvr#division_id}
  */
  readonly divisionId?: string;
  /**
  * The phone number(s) to contact the IVR by. Each phone number in the array must be in an E.164 number format. (Note: An array with a length greater than 50 will be broken into chunks and uploaded in subsequent PUT requests.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr#dnis ArchitectIvr#dnis}
  */
  readonly dnis?: string[];
  /**
  * ID of inbound call flow for holidays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr#holiday_hours_flow_id ArchitectIvr#holiday_hours_flow_id}
  */
  readonly holidayHoursFlowId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr#id ArchitectIvr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the IVR config. Note: If the name changes, the existing Genesys Cloud IVR config will be dropped and recreated with a new ID. This can cause an Architect Flow to become invalid if the old flow is reference in the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr#name ArchitectIvr#name}
  */
  readonly name: string;
  /**
  * ID of inbound call flow for open hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr#open_hours_flow_id ArchitectIvr#open_hours_flow_id}
  */
  readonly openHoursFlowId?: string;
  /**
  * Schedule group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr#schedule_group_id ArchitectIvr#schedule_group_id}
  */
  readonly scheduleGroupId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr genesyscloud_architect_ivr}
*/
export class ArchitectIvr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_architect_ivr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArchitectIvr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArchitectIvr to import
  * @param importFromId The id of the existing ArchitectIvr that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArchitectIvr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_architect_ivr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_ivr genesyscloud_architect_ivr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArchitectIvrConfig
  */
  public constructor(scope: Construct, id: string, config: ArchitectIvrConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_architect_ivr',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._closedHoursFlowId = config.closedHoursFlowId;
    this._description = config.description;
    this._divisionId = config.divisionId;
    this._dnis = config.dnis;
    this._holidayHoursFlowId = config.holidayHoursFlowId;
    this._id = config.id;
    this._name = config.name;
    this._openHoursFlowId = config.openHoursFlowId;
    this._scheduleGroupId = config.scheduleGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // closed_hours_flow_id - computed: false, optional: true, required: false
  private _closedHoursFlowId?: string; 
  public get closedHoursFlowId() {
    return this.getStringAttribute('closed_hours_flow_id');
  }
  public set closedHoursFlowId(value: string) {
    this._closedHoursFlowId = value;
  }
  public resetClosedHoursFlowId() {
    this._closedHoursFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closedHoursFlowIdInput() {
    return this._closedHoursFlowId;
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

  // dnis - computed: false, optional: true, required: false
  private _dnis?: string[]; 
  public get dnis() {
    return cdktf.Fn.tolist(this.getListAttribute('dnis'));
  }
  public set dnis(value: string[]) {
    this._dnis = value;
  }
  public resetDnis() {
    this._dnis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnisInput() {
    return this._dnis;
  }

  // holiday_hours_flow_id - computed: false, optional: true, required: false
  private _holidayHoursFlowId?: string; 
  public get holidayHoursFlowId() {
    return this.getStringAttribute('holiday_hours_flow_id');
  }
  public set holidayHoursFlowId(value: string) {
    this._holidayHoursFlowId = value;
  }
  public resetHolidayHoursFlowId() {
    this._holidayHoursFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holidayHoursFlowIdInput() {
    return this._holidayHoursFlowId;
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

  // open_hours_flow_id - computed: false, optional: true, required: false
  private _openHoursFlowId?: string; 
  public get openHoursFlowId() {
    return this.getStringAttribute('open_hours_flow_id');
  }
  public set openHoursFlowId(value: string) {
    this._openHoursFlowId = value;
  }
  public resetOpenHoursFlowId() {
    this._openHoursFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openHoursFlowIdInput() {
    return this._openHoursFlowId;
  }

  // schedule_group_id - computed: false, optional: true, required: false
  private _scheduleGroupId?: string; 
  public get scheduleGroupId() {
    return this.getStringAttribute('schedule_group_id');
  }
  public set scheduleGroupId(value: string) {
    this._scheduleGroupId = value;
  }
  public resetScheduleGroupId() {
    this._scheduleGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleGroupIdInput() {
    return this._scheduleGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      closed_hours_flow_id: cdktf.stringToTerraform(this._closedHoursFlowId),
      description: cdktf.stringToTerraform(this._description),
      division_id: cdktf.stringToTerraform(this._divisionId),
      dnis: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnis),
      holiday_hours_flow_id: cdktf.stringToTerraform(this._holidayHoursFlowId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      open_hours_flow_id: cdktf.stringToTerraform(this._openHoursFlowId),
      schedule_group_id: cdktf.stringToTerraform(this._scheduleGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      closed_hours_flow_id: {
        value: cdktf.stringToHclTerraform(this._closedHoursFlowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      dnis: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnis),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      holiday_hours_flow_id: {
        value: cdktf.stringToHclTerraform(this._holidayHoursFlowId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_hours_flow_id: {
        value: cdktf.stringToHclTerraform(this._openHoursFlowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_group_id: {
        value: cdktf.stringToHclTerraform(this._scheduleGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
