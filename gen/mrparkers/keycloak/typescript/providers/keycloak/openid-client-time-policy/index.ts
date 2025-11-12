// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenidClientTimePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#day_month OpenidClientTimePolicy#day_month}
  */
  readonly dayMonth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#day_month_end OpenidClientTimePolicy#day_month_end}
  */
  readonly dayMonthEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#decision_strategy OpenidClientTimePolicy#decision_strategy}
  */
  readonly decisionStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#description OpenidClientTimePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#hour OpenidClientTimePolicy#hour}
  */
  readonly hour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#hour_end OpenidClientTimePolicy#hour_end}
  */
  readonly hourEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#id OpenidClientTimePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#logic OpenidClientTimePolicy#logic}
  */
  readonly logic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#minute OpenidClientTimePolicy#minute}
  */
  readonly minute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#minute_end OpenidClientTimePolicy#minute_end}
  */
  readonly minuteEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#month OpenidClientTimePolicy#month}
  */
  readonly month?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#month_end OpenidClientTimePolicy#month_end}
  */
  readonly monthEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#name OpenidClientTimePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#not_before OpenidClientTimePolicy#not_before}
  */
  readonly notBefore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#not_on_or_after OpenidClientTimePolicy#not_on_or_after}
  */
  readonly notOnOrAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#realm_id OpenidClientTimePolicy#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#resource_server_id OpenidClientTimePolicy#resource_server_id}
  */
  readonly resourceServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#year OpenidClientTimePolicy#year}
  */
  readonly year?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#year_end OpenidClientTimePolicy#year_end}
  */
  readonly yearEnd?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy keycloak_openid_client_time_policy}
*/
export class OpenidClientTimePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_openid_client_time_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenidClientTimePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenidClientTimePolicy to import
  * @param importFromId The id of the existing OpenidClientTimePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenidClientTimePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_openid_client_time_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_time_policy keycloak_openid_client_time_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenidClientTimePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OpenidClientTimePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_openid_client_time_policy',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0',
        providerVersionConstraint: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dayMonth = config.dayMonth;
    this._dayMonthEnd = config.dayMonthEnd;
    this._decisionStrategy = config.decisionStrategy;
    this._description = config.description;
    this._hour = config.hour;
    this._hourEnd = config.hourEnd;
    this._id = config.id;
    this._logic = config.logic;
    this._minute = config.minute;
    this._minuteEnd = config.minuteEnd;
    this._month = config.month;
    this._monthEnd = config.monthEnd;
    this._name = config.name;
    this._notBefore = config.notBefore;
    this._notOnOrAfter = config.notOnOrAfter;
    this._realmId = config.realmId;
    this._resourceServerId = config.resourceServerId;
    this._year = config.year;
    this._yearEnd = config.yearEnd;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // day_month - computed: false, optional: true, required: false
  private _dayMonth?: string; 
  public get dayMonth() {
    return this.getStringAttribute('day_month');
  }
  public set dayMonth(value: string) {
    this._dayMonth = value;
  }
  public resetDayMonth() {
    this._dayMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayMonthInput() {
    return this._dayMonth;
  }

  // day_month_end - computed: false, optional: true, required: false
  private _dayMonthEnd?: string; 
  public get dayMonthEnd() {
    return this.getStringAttribute('day_month_end');
  }
  public set dayMonthEnd(value: string) {
    this._dayMonthEnd = value;
  }
  public resetDayMonthEnd() {
    this._dayMonthEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayMonthEndInput() {
    return this._dayMonthEnd;
  }

  // decision_strategy - computed: false, optional: false, required: true
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
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

  // hour - computed: false, optional: true, required: false
  private _hour?: string; 
  public get hour() {
    return this.getStringAttribute('hour');
  }
  public set hour(value: string) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // hour_end - computed: false, optional: true, required: false
  private _hourEnd?: string; 
  public get hourEnd() {
    return this.getStringAttribute('hour_end');
  }
  public set hourEnd(value: string) {
    this._hourEnd = value;
  }
  public resetHourEnd() {
    this._hourEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourEndInput() {
    return this._hourEnd;
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

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: string; 
  public get minute() {
    return this.getStringAttribute('minute');
  }
  public set minute(value: string) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // minute_end - computed: false, optional: true, required: false
  private _minuteEnd?: string; 
  public get minuteEnd() {
    return this.getStringAttribute('minute_end');
  }
  public set minuteEnd(value: string) {
    this._minuteEnd = value;
  }
  public resetMinuteEnd() {
    this._minuteEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteEndInput() {
    return this._minuteEnd;
  }

  // month - computed: false, optional: true, required: false
  private _month?: string; 
  public get month() {
    return this.getStringAttribute('month');
  }
  public set month(value: string) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // month_end - computed: false, optional: true, required: false
  private _monthEnd?: string; 
  public get monthEnd() {
    return this.getStringAttribute('month_end');
  }
  public set monthEnd(value: string) {
    this._monthEnd = value;
  }
  public resetMonthEnd() {
    this._monthEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthEndInput() {
    return this._monthEnd;
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

  // not_before - computed: false, optional: true, required: false
  private _notBefore?: string; 
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }
  public set notBefore(value: string) {
    this._notBefore = value;
  }
  public resetNotBefore() {
    this._notBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeInput() {
    return this._notBefore;
  }

  // not_on_or_after - computed: false, optional: true, required: false
  private _notOnOrAfter?: string; 
  public get notOnOrAfter() {
    return this.getStringAttribute('not_on_or_after');
  }
  public set notOnOrAfter(value: string) {
    this._notOnOrAfter = value;
  }
  public resetNotOnOrAfter() {
    this._notOnOrAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notOnOrAfterInput() {
    return this._notOnOrAfter;
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // resource_server_id - computed: false, optional: false, required: true
  private _resourceServerId?: string; 
  public get resourceServerId() {
    return this.getStringAttribute('resource_server_id');
  }
  public set resourceServerId(value: string) {
    this._resourceServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerIdInput() {
    return this._resourceServerId;
  }

  // year - computed: false, optional: true, required: false
  private _year?: string; 
  public get year() {
    return this.getStringAttribute('year');
  }
  public set year(value: string) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }

  // year_end - computed: false, optional: true, required: false
  private _yearEnd?: string; 
  public get yearEnd() {
    return this.getStringAttribute('year_end');
  }
  public set yearEnd(value: string) {
    this._yearEnd = value;
  }
  public resetYearEnd() {
    this._yearEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearEndInput() {
    return this._yearEnd;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      day_month: cdktf.stringToTerraform(this._dayMonth),
      day_month_end: cdktf.stringToTerraform(this._dayMonthEnd),
      decision_strategy: cdktf.stringToTerraform(this._decisionStrategy),
      description: cdktf.stringToTerraform(this._description),
      hour: cdktf.stringToTerraform(this._hour),
      hour_end: cdktf.stringToTerraform(this._hourEnd),
      id: cdktf.stringToTerraform(this._id),
      logic: cdktf.stringToTerraform(this._logic),
      minute: cdktf.stringToTerraform(this._minute),
      minute_end: cdktf.stringToTerraform(this._minuteEnd),
      month: cdktf.stringToTerraform(this._month),
      month_end: cdktf.stringToTerraform(this._monthEnd),
      name: cdktf.stringToTerraform(this._name),
      not_before: cdktf.stringToTerraform(this._notBefore),
      not_on_or_after: cdktf.stringToTerraform(this._notOnOrAfter),
      realm_id: cdktf.stringToTerraform(this._realmId),
      resource_server_id: cdktf.stringToTerraform(this._resourceServerId),
      year: cdktf.stringToTerraform(this._year),
      year_end: cdktf.stringToTerraform(this._yearEnd),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      day_month: {
        value: cdktf.stringToHclTerraform(this._dayMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      day_month_end: {
        value: cdktf.stringToHclTerraform(this._dayMonthEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decision_strategy: {
        value: cdktf.stringToHclTerraform(this._decisionStrategy),
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
      hour: {
        value: cdktf.stringToHclTerraform(this._hour),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hour_end: {
        value: cdktf.stringToHclTerraform(this._hourEnd),
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
      logic: {
        value: cdktf.stringToHclTerraform(this._logic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minute: {
        value: cdktf.stringToHclTerraform(this._minute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minute_end: {
        value: cdktf.stringToHclTerraform(this._minuteEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      month: {
        value: cdktf.stringToHclTerraform(this._month),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      month_end: {
        value: cdktf.stringToHclTerraform(this._monthEnd),
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
      not_before: {
        value: cdktf.stringToHclTerraform(this._notBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      not_on_or_after: {
        value: cdktf.stringToHclTerraform(this._notOnOrAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_server_id: {
        value: cdktf.stringToHclTerraform(this._resourceServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      year: {
        value: cdktf.stringToHclTerraform(this._year),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      year_end: {
        value: cdktf.stringToHclTerraform(this._yearEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
