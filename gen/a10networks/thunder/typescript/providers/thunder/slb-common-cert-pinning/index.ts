// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbCommonCertPinningAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#id SlbCommonCertPinningA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ttl of local cert pinning candidate list, multiple of 10 minutes, default is 144 (1440 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#ttl SlbCommonCertPinningA#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#uuid SlbCommonCertPinningA#uuid}
  */
  readonly uuid?: string;
  /**
  * candidate_list_feedback_opt_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#candidate_list_feedback_opt_in SlbCommonCertPinningA#candidate_list_feedback_opt_in}
  */
  readonly candidateListFeedbackOptIn?: SlbCommonCertPinningCandidateListFeedbackOptInA;
}
export interface SlbCommonCertPinningCandidateListFeedbackOptInA {
  /**
  * Every day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#daily SlbCommonCertPinningA#daily}
  */
  readonly daily?: number;
  /**
  * Time of day to update (hh:mm) in 24 hour local time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#day_time SlbCommonCertPinningA#day_time}
  */
  readonly dayTime?: string;
  /**
  * Enable the feedback function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#enable SlbCommonCertPinningA#enable}
  */
  readonly enable?: number;
  /**
  * schedule the uploading time, default is daily 00:00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#schedule SlbCommonCertPinningA#schedule}
  */
  readonly schedule?: number;
  /**
  * Use management port to connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#use_mgmt_port SlbCommonCertPinningA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#uuid SlbCommonCertPinningA#uuid}
  */
  readonly uuid?: string;
  /**
  * 'Monday': Monday; 'Tuesday': Tuesday; 'Wednesday': Wednesday; 'Thursday': Thursday; 'Friday': Friday; 'Saturday': Saturday; 'Sunday': Sunday;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#week_day SlbCommonCertPinningA#week_day}
  */
  readonly weekDay?: string;
  /**
  * Time of day to update (hh:mm) in 24 hour local time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#week_time SlbCommonCertPinningA#week_time}
  */
  readonly weekTime?: string;
  /**
  * Every week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#weekly SlbCommonCertPinningA#weekly}
  */
  readonly weekly?: number;
}

export function slbCommonCertPinningCandidateListFeedbackOptInAToTerraform(struct?: SlbCommonCertPinningCandidateListFeedbackOptInAOutputReference | SlbCommonCertPinningCandidateListFeedbackOptInA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: cdktf.numberToTerraform(struct!.daily),
    day_time: cdktf.stringToTerraform(struct!.dayTime),
    enable: cdktf.numberToTerraform(struct!.enable),
    schedule: cdktf.numberToTerraform(struct!.schedule),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    week_day: cdktf.stringToTerraform(struct!.weekDay),
    week_time: cdktf.stringToTerraform(struct!.weekTime),
    weekly: cdktf.numberToTerraform(struct!.weekly),
  }
}


export function slbCommonCertPinningCandidateListFeedbackOptInAToHclTerraform(struct?: SlbCommonCertPinningCandidateListFeedbackOptInAOutputReference | SlbCommonCertPinningCandidateListFeedbackOptInA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: cdktf.numberToHclTerraform(struct!.daily),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_time: {
      value: cdktf.stringToHclTerraform(struct!.dayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule: {
      value: cdktf.numberToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_day: {
      value: cdktf.stringToHclTerraform(struct!.weekDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_time: {
      value: cdktf.stringToHclTerraform(struct!.weekTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekly: {
      value: cdktf.numberToHclTerraform(struct!.weekly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonCertPinningCandidateListFeedbackOptInAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonCertPinningCandidateListFeedbackOptInA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily;
    }
    if (this._dayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayTime = this._dayTime;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weekDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDay = this._weekDay;
    }
    if (this._weekTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekTime = this._weekTime;
    }
    if (this._weekly !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonCertPinningCandidateListFeedbackOptInA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daily = undefined;
      this._dayTime = undefined;
      this._enable = undefined;
      this._schedule = undefined;
      this._useMgmtPort = undefined;
      this._uuid = undefined;
      this._weekDay = undefined;
      this._weekTime = undefined;
      this._weekly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daily = value.daily;
      this._dayTime = value.dayTime;
      this._enable = value.enable;
      this._schedule = value.schedule;
      this._useMgmtPort = value.useMgmtPort;
      this._uuid = value.uuid;
      this._weekDay = value.weekDay;
      this._weekTime = value.weekTime;
      this._weekly = value.weekly;
    }
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning thunder_slb_common_cert_pinning}
*/
export class SlbCommonCertPinningA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_common_cert_pinning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbCommonCertPinningA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbCommonCertPinningA to import
  * @param importFromId The id of the existing SlbCommonCertPinningA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbCommonCertPinningA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_common_cert_pinning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_cert_pinning thunder_slb_common_cert_pinning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbCommonCertPinningAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbCommonCertPinningAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_common_cert_pinning',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._ttl = config.ttl;
    this._uuid = config.uuid;
    this._candidateListFeedbackOptIn.internalValue = config.candidateListFeedbackOptIn;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // candidate_list_feedback_opt_in - computed: false, optional: true, required: false
  private _candidateListFeedbackOptIn = new SlbCommonCertPinningCandidateListFeedbackOptInAOutputReference(this, "candidate_list_feedback_opt_in");
  public get candidateListFeedbackOptIn() {
    return this._candidateListFeedbackOptIn;
  }
  public putCandidateListFeedbackOptIn(value: SlbCommonCertPinningCandidateListFeedbackOptInA) {
    this._candidateListFeedbackOptIn.internalValue = value;
  }
  public resetCandidateListFeedbackOptIn() {
    this._candidateListFeedbackOptIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateListFeedbackOptInInput() {
    return this._candidateListFeedbackOptIn.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ttl: cdktf.numberToTerraform(this._ttl),
      uuid: cdktf.stringToTerraform(this._uuid),
      candidate_list_feedback_opt_in: slbCommonCertPinningCandidateListFeedbackOptInAToTerraform(this._candidateListFeedbackOptIn.internalValue),
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
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
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
      candidate_list_feedback_opt_in: {
        value: slbCommonCertPinningCandidateListFeedbackOptInAToHclTerraform(this._candidateListFeedbackOptIn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbCommonCertPinningCandidateListFeedbackOptInAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
