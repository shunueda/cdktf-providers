// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbCommonCertPinningCandidateListFeedbackOptInAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Every day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in#daily SlbCommonCertPinningCandidateListFeedbackOptInA#daily}
  */
  readonly daily?: number;
  /**
  * Time of day to update (hh:mm) in 24 hour local time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in#day_time SlbCommonCertPinningCandidateListFeedbackOptInA#day_time}
  */
  readonly dayTime?: string;
  /**
  * Enable the feedback function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in#enable SlbCommonCertPinningCandidateListFeedbackOptInA#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in#id SlbCommonCertPinningCandidateListFeedbackOptInA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * schedule the uploading time, default is daily 00:00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in#schedule SlbCommonCertPinningCandidateListFeedbackOptInA#schedule}
  */
  readonly schedule?: number;
  /**
  * Use management port to connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in#use_mgmt_port SlbCommonCertPinningCandidateListFeedbackOptInA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in#uuid SlbCommonCertPinningCandidateListFeedbackOptInA#uuid}
  */
  readonly uuid?: string;
  /**
  * 'Monday': Monday; 'Tuesday': Tuesday; 'Wednesday': Wednesday; 'Thursday': Thursday; 'Friday': Friday; 'Saturday': Saturday; 'Sunday': Sunday;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in#week_day SlbCommonCertPinningCandidateListFeedbackOptInA#week_day}
  */
  readonly weekDay?: string;
  /**
  * Time of day to update (hh:mm) in 24 hour local time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in#week_time SlbCommonCertPinningCandidateListFeedbackOptInA#week_time}
  */
  readonly weekTime?: string;
  /**
  * Every week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in#weekly SlbCommonCertPinningCandidateListFeedbackOptInA#weekly}
  */
  readonly weekly?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in thunder_slb_common_cert_pinning_candidate_list_feedback_opt_in}
*/
export class SlbCommonCertPinningCandidateListFeedbackOptInA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_common_cert_pinning_candidate_list_feedback_opt_in";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbCommonCertPinningCandidateListFeedbackOptInA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbCommonCertPinningCandidateListFeedbackOptInA to import
  * @param importFromId The id of the existing SlbCommonCertPinningCandidateListFeedbackOptInA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbCommonCertPinningCandidateListFeedbackOptInA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_common_cert_pinning_candidate_list_feedback_opt_in", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning_candidate_list_feedback_opt_in thunder_slb_common_cert_pinning_candidate_list_feedback_opt_in} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbCommonCertPinningCandidateListFeedbackOptInAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbCommonCertPinningCandidateListFeedbackOptInAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_common_cert_pinning_candidate_list_feedback_opt_in',
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
    this._daily = config.daily;
    this._dayTime = config.dayTime;
    this._enable = config.enable;
    this._id = config.id;
    this._schedule = config.schedule;
    this._useMgmtPort = config.useMgmtPort;
    this._uuid = config.uuid;
    this._weekDay = config.weekDay;
    this._weekTime = config.weekTime;
    this._weekly = config.weekly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daily - computed: false, optional: true, required: false
  private _daily?: number; 
  public get daily() {
    return this.getNumberAttribute('daily');
  }
  public set daily(value: number) {
    this._daily = value;
  }
  public resetDaily() {
    this._daily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily;
  }

  // day_time - computed: false, optional: true, required: false
  private _dayTime?: string; 
  public get dayTime() {
    return this.getStringAttribute('day_time');
  }
  public set dayTime(value: string) {
    this._dayTime = value;
  }
  public resetDayTime() {
    this._dayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayTimeInput() {
    return this._dayTime;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: number; 
  public get schedule() {
    return this.getNumberAttribute('schedule');
  }
  public set schedule(value: number) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
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

  // week_day - computed: false, optional: true, required: false
  private _weekDay?: string; 
  public get weekDay() {
    return this.getStringAttribute('week_day');
  }
  public set weekDay(value: string) {
    this._weekDay = value;
  }
  public resetWeekDay() {
    this._weekDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayInput() {
    return this._weekDay;
  }

  // week_time - computed: false, optional: true, required: false
  private _weekTime?: string; 
  public get weekTime() {
    return this.getStringAttribute('week_time');
  }
  public set weekTime(value: string) {
    this._weekTime = value;
  }
  public resetWeekTime() {
    this._weekTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekTimeInput() {
    return this._weekTime;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly?: number; 
  public get weekly() {
    return this.getNumberAttribute('weekly');
  }
  public set weekly(value: number) {
    this._weekly = value;
  }
  public resetWeekly() {
    this._weekly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      daily: cdktf.numberToTerraform(this._daily),
      day_time: cdktf.stringToTerraform(this._dayTime),
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      schedule: cdktf.numberToTerraform(this._schedule),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      week_day: cdktf.stringToTerraform(this._weekDay),
      week_time: cdktf.stringToTerraform(this._weekTime),
      weekly: cdktf.numberToTerraform(this._weekly),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      daily: {
        value: cdktf.numberToHclTerraform(this._daily),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      day_time: {
        value: cdktf.stringToHclTerraform(this._dayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
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
      schedule: {
        value: cdktf.numberToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
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
      week_day: {
        value: cdktf.stringToHclTerraform(this._weekDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      week_time: {
        value: cdktf.stringToHclTerraform(this._weekTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weekly: {
        value: cdktf.numberToHclTerraform(this._weekly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
