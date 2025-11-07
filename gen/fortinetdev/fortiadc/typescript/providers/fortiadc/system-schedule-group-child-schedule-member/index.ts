// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemScheduleGroupChildScheduleMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member#day_of_month SystemScheduleGroupChildScheduleMember#day_of_month}
  */
  readonly dayOfMonth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member#day_of_week SystemScheduleGroupChildScheduleMember#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member#enddate SystemScheduleGroupChildScheduleMember#enddate}
  */
  readonly enddate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member#endtime_of_enddate SystemScheduleGroupChildScheduleMember#endtime_of_enddate}
  */
  readonly endtimeOfEnddate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member#id SystemScheduleGroupChildScheduleMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member#mkey SystemScheduleGroupChildScheduleMember#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member#pkey SystemScheduleGroupChildScheduleMember#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member#startdate SystemScheduleGroupChildScheduleMember#startdate}
  */
  readonly startdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member#starttime_of_startdate SystemScheduleGroupChildScheduleMember#starttime_of_startdate}
  */
  readonly starttimeOfStartdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member#type SystemScheduleGroupChildScheduleMember#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member#vdom SystemScheduleGroupChildScheduleMember#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member fortiadc_system_schedule_group_child_schedule_member}
*/
export class SystemScheduleGroupChildScheduleMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_schedule_group_child_schedule_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemScheduleGroupChildScheduleMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemScheduleGroupChildScheduleMember to import
  * @param importFromId The id of the existing SystemScheduleGroupChildScheduleMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemScheduleGroupChildScheduleMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_schedule_group_child_schedule_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_schedule_group_child_schedule_member fortiadc_system_schedule_group_child_schedule_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemScheduleGroupChildScheduleMemberConfig
  */
  public constructor(scope: Construct, id: string, config: SystemScheduleGroupChildScheduleMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_schedule_group_child_schedule_member',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dayOfMonth = config.dayOfMonth;
    this._dayOfWeek = config.dayOfWeek;
    this._enddate = config.enddate;
    this._endtimeOfEnddate = config.endtimeOfEnddate;
    this._id = config.id;
    this._mkey = config.mkey;
    this._pkey = config.pkey;
    this._startdate = config.startdate;
    this._starttimeOfStartdate = config.starttimeOfStartdate;
    this._type = config.type;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: string; 
  public get dayOfMonth() {
    return this.getStringAttribute('day_of_month');
  }
  public set dayOfMonth(value: string) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // enddate - computed: true, optional: true, required: false
  private _enddate?: string; 
  public get enddate() {
    return this.getStringAttribute('enddate');
  }
  public set enddate(value: string) {
    this._enddate = value;
  }
  public resetEnddate() {
    this._enddate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enddateInput() {
    return this._enddate;
  }

  // endtime_of_enddate - computed: true, optional: true, required: false
  private _endtimeOfEnddate?: string; 
  public get endtimeOfEnddate() {
    return this.getStringAttribute('endtime_of_enddate');
  }
  public set endtimeOfEnddate(value: string) {
    this._endtimeOfEnddate = value;
  }
  public resetEndtimeOfEnddate() {
    this._endtimeOfEnddate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endtimeOfEnddateInput() {
    return this._endtimeOfEnddate;
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // pkey - computed: false, optional: false, required: true
  private _pkey?: string; 
  public get pkey() {
    return this.getStringAttribute('pkey');
  }
  public set pkey(value: string) {
    this._pkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkeyInput() {
    return this._pkey;
  }

  // startdate - computed: true, optional: true, required: false
  private _startdate?: string; 
  public get startdate() {
    return this.getStringAttribute('startdate');
  }
  public set startdate(value: string) {
    this._startdate = value;
  }
  public resetStartdate() {
    this._startdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startdateInput() {
    return this._startdate;
  }

  // starttime_of_startdate - computed: true, optional: true, required: false
  private _starttimeOfStartdate?: string; 
  public get starttimeOfStartdate() {
    return this.getStringAttribute('starttime_of_startdate');
  }
  public set starttimeOfStartdate(value: string) {
    this._starttimeOfStartdate = value;
  }
  public resetStarttimeOfStartdate() {
    this._starttimeOfStartdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttimeOfStartdateInput() {
    return this._starttimeOfStartdate;
  }

  // type - computed: true, optional: true, required: false
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      day_of_month: cdktf.stringToTerraform(this._dayOfMonth),
      day_of_week: cdktf.stringToTerraform(this._dayOfWeek),
      enddate: cdktf.stringToTerraform(this._enddate),
      endtime_of_enddate: cdktf.stringToTerraform(this._endtimeOfEnddate),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      pkey: cdktf.stringToTerraform(this._pkey),
      startdate: cdktf.stringToTerraform(this._startdate),
      starttime_of_startdate: cdktf.stringToTerraform(this._starttimeOfStartdate),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      day_of_month: {
        value: cdktf.stringToHclTerraform(this._dayOfMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      day_of_week: {
        value: cdktf.stringToHclTerraform(this._dayOfWeek),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enddate: {
        value: cdktf.stringToHclTerraform(this._enddate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endtime_of_enddate: {
        value: cdktf.stringToHclTerraform(this._endtimeOfEnddate),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startdate: {
        value: cdktf.stringToHclTerraform(this._startdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starttime_of_startdate: {
        value: cdktf.stringToHclTerraform(this._starttimeOfStartdate),
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
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
