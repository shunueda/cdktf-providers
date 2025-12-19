// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbForwardProxyTimeRangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Daily enables after this time (HH:MM, 24-hour notation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#daily_begin SlbForwardProxyTimeRange#daily_begin}
  */
  readonly dailyBegin?: string;
  /**
  * Daily enables until thie time (HH:MM, 24-hour notation, inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#daily_end SlbForwardProxyTimeRange#daily_end}
  */
  readonly dailyEnd?: string;
  /**
  * Recurring enables after this day per month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#days_of_month_begin SlbForwardProxyTimeRange#days_of_month_begin}
  */
  readonly daysOfMonthBegin?: number;
  /**
  * Recurring enables until this day per month (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#days_of_month_end SlbForwardProxyTimeRange#days_of_month_end}
  */
  readonly daysOfMonthEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#id SlbForwardProxyTimeRange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Recurring enables after this month per year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#months_of_year_begin SlbForwardProxyTimeRange#months_of_year_begin}
  */
  readonly monthsOfYearBegin?: number;
  /**
  * Recurring enables until this month per year (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#months_of_year_end SlbForwardProxyTimeRange#months_of_year_end}
  */
  readonly monthsOfYearEnd?: number;
  /**
  * Name of this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#name SlbForwardProxyTimeRange#name}
  */
  readonly name: string;
  /**
  * Use UTC+0 time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#use_utc_time SlbForwardProxyTimeRange#use_utc_time}
  */
  readonly useUtcTime?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#user_tag SlbForwardProxyTimeRange#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#uuid SlbForwardProxyTimeRange#uuid}
  */
  readonly uuid?: string;
  /**
  * Recurring enables on Friday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#weekday_fr SlbForwardProxyTimeRange#weekday_fr}
  */
  readonly weekdayFr?: number;
  /**
  * Recurring enables on Monday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#weekday_mo SlbForwardProxyTimeRange#weekday_mo}
  */
  readonly weekdayMo?: number;
  /**
  * Recurring enables on Saturday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#weekday_sa SlbForwardProxyTimeRange#weekday_sa}
  */
  readonly weekdaySa?: number;
  /**
  * Recurring enables on Sunday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#weekday_su SlbForwardProxyTimeRange#weekday_su}
  */
  readonly weekdaySu?: number;
  /**
  * Recurring enables on Thursday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#weekday_th SlbForwardProxyTimeRange#weekday_th}
  */
  readonly weekdayTh?: number;
  /**
  * Recurring enables on Tuesday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#weekday_tu SlbForwardProxyTimeRange#weekday_tu}
  */
  readonly weekdayTu?: number;
  /**
  * Recurring enables on Wednesday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#weekday_we SlbForwardProxyTimeRange#weekday_we}
  */
  readonly weekdayWe?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range thunder_slb_forward_proxy_time_range}
*/
export class SlbForwardProxyTimeRange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_forward_proxy_time_range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbForwardProxyTimeRange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbForwardProxyTimeRange to import
  * @param importFromId The id of the existing SlbForwardProxyTimeRange that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbForwardProxyTimeRange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_forward_proxy_time_range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_forward_proxy_time_range thunder_slb_forward_proxy_time_range} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbForwardProxyTimeRangeConfig
  */
  public constructor(scope: Construct, id: string, config: SlbForwardProxyTimeRangeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_forward_proxy_time_range',
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
    this._dailyBegin = config.dailyBegin;
    this._dailyEnd = config.dailyEnd;
    this._daysOfMonthBegin = config.daysOfMonthBegin;
    this._daysOfMonthEnd = config.daysOfMonthEnd;
    this._id = config.id;
    this._monthsOfYearBegin = config.monthsOfYearBegin;
    this._monthsOfYearEnd = config.monthsOfYearEnd;
    this._name = config.name;
    this._useUtcTime = config.useUtcTime;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._weekdayFr = config.weekdayFr;
    this._weekdayMo = config.weekdayMo;
    this._weekdaySa = config.weekdaySa;
    this._weekdaySu = config.weekdaySu;
    this._weekdayTh = config.weekdayTh;
    this._weekdayTu = config.weekdayTu;
    this._weekdayWe = config.weekdayWe;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daily_begin - computed: false, optional: true, required: false
  private _dailyBegin?: string; 
  public get dailyBegin() {
    return this.getStringAttribute('daily_begin');
  }
  public set dailyBegin(value: string) {
    this._dailyBegin = value;
  }
  public resetDailyBegin() {
    this._dailyBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyBeginInput() {
    return this._dailyBegin;
  }

  // daily_end - computed: false, optional: true, required: false
  private _dailyEnd?: string; 
  public get dailyEnd() {
    return this.getStringAttribute('daily_end');
  }
  public set dailyEnd(value: string) {
    this._dailyEnd = value;
  }
  public resetDailyEnd() {
    this._dailyEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyEndInput() {
    return this._dailyEnd;
  }

  // days_of_month_begin - computed: false, optional: true, required: false
  private _daysOfMonthBegin?: number; 
  public get daysOfMonthBegin() {
    return this.getNumberAttribute('days_of_month_begin');
  }
  public set daysOfMonthBegin(value: number) {
    this._daysOfMonthBegin = value;
  }
  public resetDaysOfMonthBegin() {
    this._daysOfMonthBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthBeginInput() {
    return this._daysOfMonthBegin;
  }

  // days_of_month_end - computed: false, optional: true, required: false
  private _daysOfMonthEnd?: number; 
  public get daysOfMonthEnd() {
    return this.getNumberAttribute('days_of_month_end');
  }
  public set daysOfMonthEnd(value: number) {
    this._daysOfMonthEnd = value;
  }
  public resetDaysOfMonthEnd() {
    this._daysOfMonthEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthEndInput() {
    return this._daysOfMonthEnd;
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

  // months_of_year_begin - computed: false, optional: true, required: false
  private _monthsOfYearBegin?: number; 
  public get monthsOfYearBegin() {
    return this.getNumberAttribute('months_of_year_begin');
  }
  public set monthsOfYearBegin(value: number) {
    this._monthsOfYearBegin = value;
  }
  public resetMonthsOfYearBegin() {
    this._monthsOfYearBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsOfYearBeginInput() {
    return this._monthsOfYearBegin;
  }

  // months_of_year_end - computed: false, optional: true, required: false
  private _monthsOfYearEnd?: number; 
  public get monthsOfYearEnd() {
    return this.getNumberAttribute('months_of_year_end');
  }
  public set monthsOfYearEnd(value: number) {
    this._monthsOfYearEnd = value;
  }
  public resetMonthsOfYearEnd() {
    this._monthsOfYearEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsOfYearEndInput() {
    return this._monthsOfYearEnd;
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

  // use_utc_time - computed: false, optional: true, required: false
  private _useUtcTime?: number; 
  public get useUtcTime() {
    return this.getNumberAttribute('use_utc_time');
  }
  public set useUtcTime(value: number) {
    this._useUtcTime = value;
  }
  public resetUseUtcTime() {
    this._useUtcTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUtcTimeInput() {
    return this._useUtcTime;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // weekday_fr - computed: false, optional: true, required: false
  private _weekdayFr?: number; 
  public get weekdayFr() {
    return this.getNumberAttribute('weekday_fr');
  }
  public set weekdayFr(value: number) {
    this._weekdayFr = value;
  }
  public resetWeekdayFr() {
    this._weekdayFr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayFrInput() {
    return this._weekdayFr;
  }

  // weekday_mo - computed: false, optional: true, required: false
  private _weekdayMo?: number; 
  public get weekdayMo() {
    return this.getNumberAttribute('weekday_mo');
  }
  public set weekdayMo(value: number) {
    this._weekdayMo = value;
  }
  public resetWeekdayMo() {
    this._weekdayMo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayMoInput() {
    return this._weekdayMo;
  }

  // weekday_sa - computed: false, optional: true, required: false
  private _weekdaySa?: number; 
  public get weekdaySa() {
    return this.getNumberAttribute('weekday_sa');
  }
  public set weekdaySa(value: number) {
    this._weekdaySa = value;
  }
  public resetWeekdaySa() {
    this._weekdaySa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaySaInput() {
    return this._weekdaySa;
  }

  // weekday_su - computed: false, optional: true, required: false
  private _weekdaySu?: number; 
  public get weekdaySu() {
    return this.getNumberAttribute('weekday_su');
  }
  public set weekdaySu(value: number) {
    this._weekdaySu = value;
  }
  public resetWeekdaySu() {
    this._weekdaySu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaySuInput() {
    return this._weekdaySu;
  }

  // weekday_th - computed: false, optional: true, required: false
  private _weekdayTh?: number; 
  public get weekdayTh() {
    return this.getNumberAttribute('weekday_th');
  }
  public set weekdayTh(value: number) {
    this._weekdayTh = value;
  }
  public resetWeekdayTh() {
    this._weekdayTh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayThInput() {
    return this._weekdayTh;
  }

  // weekday_tu - computed: false, optional: true, required: false
  private _weekdayTu?: number; 
  public get weekdayTu() {
    return this.getNumberAttribute('weekday_tu');
  }
  public set weekdayTu(value: number) {
    this._weekdayTu = value;
  }
  public resetWeekdayTu() {
    this._weekdayTu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayTuInput() {
    return this._weekdayTu;
  }

  // weekday_we - computed: false, optional: true, required: false
  private _weekdayWe?: number; 
  public get weekdayWe() {
    return this.getNumberAttribute('weekday_we');
  }
  public set weekdayWe(value: number) {
    this._weekdayWe = value;
  }
  public resetWeekdayWe() {
    this._weekdayWe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayWeInput() {
    return this._weekdayWe;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      daily_begin: cdktf.stringToTerraform(this._dailyBegin),
      daily_end: cdktf.stringToTerraform(this._dailyEnd),
      days_of_month_begin: cdktf.numberToTerraform(this._daysOfMonthBegin),
      days_of_month_end: cdktf.numberToTerraform(this._daysOfMonthEnd),
      id: cdktf.stringToTerraform(this._id),
      months_of_year_begin: cdktf.numberToTerraform(this._monthsOfYearBegin),
      months_of_year_end: cdktf.numberToTerraform(this._monthsOfYearEnd),
      name: cdktf.stringToTerraform(this._name),
      use_utc_time: cdktf.numberToTerraform(this._useUtcTime),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      weekday_fr: cdktf.numberToTerraform(this._weekdayFr),
      weekday_mo: cdktf.numberToTerraform(this._weekdayMo),
      weekday_sa: cdktf.numberToTerraform(this._weekdaySa),
      weekday_su: cdktf.numberToTerraform(this._weekdaySu),
      weekday_th: cdktf.numberToTerraform(this._weekdayTh),
      weekday_tu: cdktf.numberToTerraform(this._weekdayTu),
      weekday_we: cdktf.numberToTerraform(this._weekdayWe),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      daily_begin: {
        value: cdktf.stringToHclTerraform(this._dailyBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daily_end: {
        value: cdktf.stringToHclTerraform(this._dailyEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      days_of_month_begin: {
        value: cdktf.numberToHclTerraform(this._daysOfMonthBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      days_of_month_end: {
        value: cdktf.numberToHclTerraform(this._daysOfMonthEnd),
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
      months_of_year_begin: {
        value: cdktf.numberToHclTerraform(this._monthsOfYearBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      months_of_year_end: {
        value: cdktf.numberToHclTerraform(this._monthsOfYearEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_utc_time: {
        value: cdktf.numberToHclTerraform(this._useUtcTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      weekday_fr: {
        value: cdktf.numberToHclTerraform(this._weekdayFr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weekday_mo: {
        value: cdktf.numberToHclTerraform(this._weekdayMo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weekday_sa: {
        value: cdktf.numberToHclTerraform(this._weekdaySa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weekday_su: {
        value: cdktf.numberToHclTerraform(this._weekdaySu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weekday_th: {
        value: cdktf.numberToHclTerraform(this._weekdayTh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weekday_tu: {
        value: cdktf.numberToHclTerraform(this._weekdayTu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weekday_we: {
        value: cdktf.numberToHclTerraform(this._weekdayWe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
