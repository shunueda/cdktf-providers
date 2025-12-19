// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomaticUpdateConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Every day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config#daily AutomaticUpdateConfigA#daily}
  */
  readonly daily?: number;
  /**
  * Time of day to update (hh:mm) in 24 hour local time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config#day_time AutomaticUpdateConfigA#day_time}
  */
  readonly dayTime?: string;
  /**
  * Enable libcurl debug option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config#debug AutomaticUpdateConfigA#debug}
  */
  readonly debug?: number;
  /**
  * Disable peer server certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config#disable_ssl_verify AutomaticUpdateConfigA#disable_ssl_verify}
  */
  readonly disableSslVerify?: number;
  /**
  * 'app-fw': Application Firewall Configuration; 'ca-bundle': CA Certificate Bundle; 'a10-threat-intel': A10 Threat intel class list; 'central-cert-pin-list': Central updated cert pinning list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config#feature_name AutomaticUpdateConfigA#feature_name}
  */
  readonly featureName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config#id AutomaticUpdateConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config#schedule AutomaticUpdateConfigA#schedule}
  */
  readonly schedule?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config#uuid AutomaticUpdateConfigA#uuid}
  */
  readonly uuid?: string;
  /**
  * 'Monday': Monday; 'Tuesday': Tuesday; 'Wednesday': Wednesday; 'Thursday': Thursday; 'Friday': Friday; 'Saturday': Saturday; 'Sunday': Sunday;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config#week_day AutomaticUpdateConfigA#week_day}
  */
  readonly weekDay?: string;
  /**
  * Time of day to update (hh:mm) in 24 hour local time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config#week_time AutomaticUpdateConfigA#week_time}
  */
  readonly weekTime?: string;
  /**
  * Every week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config#weekly AutomaticUpdateConfigA#weekly}
  */
  readonly weekly?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config thunder_automatic_update_config}
*/
export class AutomaticUpdateConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_automatic_update_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomaticUpdateConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomaticUpdateConfigA to import
  * @param importFromId The id of the existing AutomaticUpdateConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomaticUpdateConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_automatic_update_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_config thunder_automatic_update_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomaticUpdateConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: AutomaticUpdateConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_automatic_update_config',
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
    this._daily = config.daily;
    this._dayTime = config.dayTime;
    this._debug = config.debug;
    this._disableSslVerify = config.disableSslVerify;
    this._featureName = config.featureName;
    this._id = config.id;
    this._schedule = config.schedule;
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

  // debug - computed: false, optional: true, required: false
  private _debug?: number; 
  public get debug() {
    return this.getNumberAttribute('debug');
  }
  public set debug(value: number) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // disable_ssl_verify - computed: false, optional: true, required: false
  private _disableSslVerify?: number; 
  public get disableSslVerify() {
    return this.getNumberAttribute('disable_ssl_verify');
  }
  public set disableSslVerify(value: number) {
    this._disableSslVerify = value;
  }
  public resetDisableSslVerify() {
    this._disableSslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSslVerifyInput() {
    return this._disableSslVerify;
  }

  // feature_name - computed: false, optional: false, required: true
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
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
      debug: cdktf.numberToTerraform(this._debug),
      disable_ssl_verify: cdktf.numberToTerraform(this._disableSslVerify),
      feature_name: cdktf.stringToTerraform(this._featureName),
      id: cdktf.stringToTerraform(this._id),
      schedule: cdktf.numberToTerraform(this._schedule),
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
      debug: {
        value: cdktf.numberToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_ssl_verify: {
        value: cdktf.numberToHclTerraform(this._disableSslVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      feature_name: {
        value: cdktf.stringToHclTerraform(this._featureName),
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
      schedule: {
        value: cdktf.numberToHclTerraform(this._schedule),
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
