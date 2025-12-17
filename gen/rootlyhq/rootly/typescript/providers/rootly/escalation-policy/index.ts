// https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EscalationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * User who created the escalation policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#created_by_user_id EscalationPolicy#created_by_user_id}
  */
  readonly createdByUserId?: number;
  /**
  * The description of the escalation policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#description EscalationPolicy#description}
  */
  readonly description?: string;
  /**
  * Associated groups (alerting the group will trigger escalation policy)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#group_ids EscalationPolicy#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#id EscalationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User who updated the escalation policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#last_updated_by_user_id EscalationPolicy#last_updated_by_user_id}
  */
  readonly lastUpdatedByUserId?: number;
  /**
  * The name of the escalation policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#name EscalationPolicy#name}
  */
  readonly name: string;
  /**
  * The number of times this policy will be executed until someone acknowledges the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#repeat_count EscalationPolicy#repeat_count}
  */
  readonly repeatCount?: number;
  /**
  * Associated services (alerting the service will trigger escalation policy)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#service_ids EscalationPolicy#service_ids}
  */
  readonly serviceIds?: string[];
  /**
  * business_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#business_hours EscalationPolicy#business_hours}
  */
  readonly businessHours?: EscalationPolicyBusinessHours;
}
export interface EscalationPolicyBusinessHours {
  /**
  * Business days. Value must be one of `M`, `T`, `W`, `R`, `F`, `U`, `S`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#days EscalationPolicy#days}
  */
  readonly days?: string[];
  /**
  * End time for business hours (HH:MM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#end_time EscalationPolicy#end_time}
  */
  readonly endTime?: string;
  /**
  * Start time for business hours (HH:MM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#start_time EscalationPolicy#start_time}
  */
  readonly startTime?: string;
  /**
  * Time zone for business hours. Value must be one of `International Date Line West`, `Etc/GMT+12`, `American Samoa`, `Pacific/Pago_Pago`, `Midway Island`, `Pacific/Midway`, `Hawaii`, `Pacific/Honolulu`, `Alaska`, `America/Juneau`, `Pacific Time (US & Canada)`, `America/Los_Angeles`, `Tijuana`, `America/Tijuana`, `Arizona`, `America/Phoenix`, `Mazatlan`, `America/Mazatlan`, `Mountain Time (US & Canada)`, `America/Denver`, `Central America`, `America/Guatemala`, `Central Time (US & Canada)`, `America/Chicago`, `Chihuahua`, `America/Chihuahua`, `Guadalajara`, `America/Mexico_City`, `Mexico City`, `America/Mexico_City`, `Monterrey`, `America/Monterrey`, `Saskatchewan`, `America/Regina`, `Bogota`, `America/Bogota`, `Eastern Time (US & Canada)`, `America/New_York`, `Indiana (East)`, `America/Indiana/Indianapolis`, `Lima`, `America/Lima`, `Quito`, `America/Lima`, `Atlantic Time (Canada)`, `America/Halifax`, `Caracas`, `America/Caracas`, `Georgetown`, `America/Guyana`, `La Paz`, `America/La_Paz`, `Puerto Rico`, `America/Puerto_Rico`, `Santiago`, `America/Santiago`, `Newfoundland`, `America/St_Johns`, `Asuncion`, `America/Asuncion`, `Brasilia`, `America/Sao_Paulo`, `Buenos Aires`, `America/Argentina/Buenos_Aires`, `Montevideo`, `America/Montevideo`, `Greenland`, `America/Nuuk`, `Mid-Atlantic`, `Atlantic/South_Georgia`, `Azores`, `Atlantic/Azores`, `Cape Verde Is.`, `Atlantic/Cape_Verde`, `Casablanca`, `Africa/Casablanca`, `Dublin`, `Europe/Dublin`, `Edinburgh`, `Europe/London`, `Lisbon`, `Europe/Lisbon`, `London`, `Europe/London`, `Monrovia`, `Africa/Monrovia`, `UTC`, `Etc/UTC`, `Amsterdam`, `Europe/Amsterdam`, `Belgrade`, `Europe/Belgrade`, `Berlin`, `Europe/Berlin`, `Bern`, `Europe/Zurich`, `Bratislava`, `Europe/Bratislava`, `Brussels`, `Europe/Brussels`, `Budapest`, `Europe/Budapest`, `Copenhagen`, `Europe/Copenhagen`, `Ljubljana`, `Europe/Ljubljana`, `Madrid`, `Europe/Madrid`, `Paris`, `Europe/Paris`, `Prague`, `Europe/Prague`, `Rome`, `Europe/Rome`, `Sarajevo`, `Europe/Sarajevo`, `Skopje`, `Europe/Skopje`, `Stockholm`, `Europe/Stockholm`, `Vienna`, `Europe/Vienna`, `Warsaw`, `Europe/Warsaw`, `West Central Africa`, `Africa/Algiers`, `Zagreb`, `Europe/Zagreb`, `Zurich`, `Europe/Zurich`, `Athens`, `Europe/Athens`, `Bucharest`, `Europe/Bucharest`, `Cairo`, `Africa/Cairo`, `Harare`, `Africa/Harare`, `Helsinki`, `Europe/Helsinki`, `Jerusalem`, `Asia/Jerusalem`, `Kaliningrad`, `Europe/Kaliningrad`, `Kyiv`, `Europe/Kiev`, `Pretoria`, `Africa/Johannesburg`, `Riga`, `Europe/Riga`, `Sofia`, `Europe/Sofia`, `Tallinn`, `Europe/Tallinn`, `Vilnius`, `Europe/Vilnius`, `Baghdad`, `Asia/Baghdad`, `Istanbul`, `Europe/Istanbul`, `Kuwait`, `Asia/Kuwait`, `Minsk`, `Europe/Minsk`, `Moscow`, `Europe/Moscow`, `Nairobi`, `Africa/Nairobi`, `Riyadh`, `Asia/Riyadh`, `St. Petersburg`, `Europe/Moscow`, `Volgograd`, `Europe/Volgograd`, `Tehran`, `Asia/Tehran`, `Abu Dhabi`, `Asia/Muscat`, `Baku`, `Asia/Baku`, `Muscat`, `Asia/Muscat`, `Samara`, `Europe/Samara`, `Tbilisi`, `Asia/Tbilisi`, `Yerevan`, `Asia/Yerevan`, `Kabul`, `Asia/Kabul`, `Almaty`, `Asia/Almaty`, `Astana`, `Asia/Almaty`, `Ekaterinburg`, `Asia/Yekaterinburg`, `Islamabad`, `Asia/Karachi`, `Karachi`, `Asia/Karachi`, `Tashkent`, `Asia/Tashkent`, `Chennai`, `Asia/Kolkata`, `Kolkata`, `Asia/Kolkata`, `Mumbai`, `Asia/Kolkata`, `New Delhi`, `Asia/Kolkata`, `Sri Jayawardenepura`, `Asia/Colombo`, `Kathmandu`, `Asia/Kathmandu`, `Dhaka`, `Asia/Dhaka`, `Urumqi`, `Asia/Urumqi`, `Rangoon`, `Asia/Rangoon`, `Bangkok`, `Asia/Bangkok`, `Hanoi`, `Asia/Bangkok`, `Jakarta`, `Asia/Jakarta`, `Krasnoyarsk`, `Asia/Krasnoyarsk`, `Novosibirsk`, `Asia/Novosibirsk`, `Beijing`, `Asia/Shanghai`, `Chongqing`, `Asia/Chongqing`, `Hong Kong`, `Asia/Hong_Kong`, `Irkutsk`, `Asia/Irkutsk`, `Kuala Lumpur`, `Asia/Kuala_Lumpur`, `Perth`, `Australia/Perth`, `Singapore`, `Asia/Singapore`, `Taipei`, `Asia/Taipei`, `Ulaanbaatar`, `Asia/Ulaanbaatar`, `Osaka`, `Asia/Tokyo`, `Sapporo`, `Asia/Tokyo`, `Seoul`, `Asia/Seoul`, `Tokyo`, `Asia/Tokyo`, `Yakutsk`, `Asia/Yakutsk`, `Adelaide`, `Australia/Adelaide`, `Darwin`, `Australia/Darwin`, `Brisbane`, `Australia/Brisbane`, `Canberra`, `Australia/Canberra`, `Guam`, `Pacific/Guam`, `Hobart`, `Australia/Hobart`, `Melbourne`, `Australia/Melbourne`, `Port Moresby`, `Pacific/Port_Moresby`, `Sydney`, `Australia/Sydney`, `Vladivostok`, `Asia/Vladivostok`, `Magadan`, `Asia/Magadan`, `New Caledonia`, `Pacific/Noumea`, `Solomon Is.`, `Pacific/Guadalcanal`, `Srednekolymsk`, `Asia/Srednekolymsk`, `Auckland`, `Pacific/Auckland`, `Fiji`, `Pacific/Fiji`, `Kamchatka`, `Asia/Kamchatka`, `Marshall Is.`, `Pacific/Majuro`, `Wellington`, `Pacific/Auckland`, `Chatham Is.`, `Pacific/Chatham`, `Nuku'alofa`, `Pacific/Tongatapu`, `Samoa`, `Pacific/Apia`, `Tokelau Is.`, `Pacific/Fakaofo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#time_zone EscalationPolicy#time_zone}
  */
  readonly timeZone?: string;
}

export function escalationPolicyBusinessHoursToTerraform(struct?: EscalationPolicyBusinessHoursOutputReference | EscalationPolicyBusinessHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function escalationPolicyBusinessHoursToHclTerraform(struct?: EscalationPolicyBusinessHoursOutputReference | EscalationPolicyBusinessHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPolicyBusinessHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EscalationPolicyBusinessHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPolicyBusinessHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return cdktf.Fn.tolist(this.getListAttribute('days'));
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy rootly_escalation_policy}
*/
export class EscalationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_escalation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EscalationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EscalationPolicy to import
  * @param importFromId The id of the existing EscalationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EscalationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_escalation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_policy rootly_escalation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EscalationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EscalationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_escalation_policy',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdByUserId = config.createdByUserId;
    this._description = config.description;
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._lastUpdatedByUserId = config.lastUpdatedByUserId;
    this._name = config.name;
    this._repeatCount = config.repeatCount;
    this._serviceIds = config.serviceIds;
    this._businessHours.internalValue = config.businessHours;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by_user_id - computed: true, optional: true, required: false
  private _createdByUserId?: number; 
  public get createdByUserId() {
    return this.getNumberAttribute('created_by_user_id');
  }
  public set createdByUserId(value: number) {
    this._createdByUserId = value;
  }
  public resetCreatedByUserId() {
    this._createdByUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByUserIdInput() {
    return this._createdByUserId;
  }

  // description - computed: true, optional: true, required: false
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

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // last_updated_by_user_id - computed: true, optional: true, required: false
  private _lastUpdatedByUserId?: number; 
  public get lastUpdatedByUserId() {
    return this.getNumberAttribute('last_updated_by_user_id');
  }
  public set lastUpdatedByUserId(value: number) {
    this._lastUpdatedByUserId = value;
  }
  public resetLastUpdatedByUserId() {
    this._lastUpdatedByUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedByUserIdInput() {
    return this._lastUpdatedByUserId;
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

  // repeat_count - computed: true, optional: true, required: false
  private _repeatCount?: number; 
  public get repeatCount() {
    return this.getNumberAttribute('repeat_count');
  }
  public set repeatCount(value: number) {
    this._repeatCount = value;
  }
  public resetRepeatCount() {
    this._repeatCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCountInput() {
    return this._repeatCount;
  }

  // service_ids - computed: false, optional: true, required: false
  private _serviceIds?: string[]; 
  public get serviceIds() {
    return this.getListAttribute('service_ids');
  }
  public set serviceIds(value: string[]) {
    this._serviceIds = value;
  }
  public resetServiceIds() {
    this._serviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }

  // business_hours - computed: false, optional: true, required: false
  private _businessHours = new EscalationPolicyBusinessHoursOutputReference(this, "business_hours");
  public get businessHours() {
    return this._businessHours;
  }
  public putBusinessHours(value: EscalationPolicyBusinessHours) {
    this._businessHours.internalValue = value;
  }
  public resetBusinessHours() {
    this._businessHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessHoursInput() {
    return this._businessHours.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by_user_id: cdktf.numberToTerraform(this._createdByUserId),
      description: cdktf.stringToTerraform(this._description),
      group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      last_updated_by_user_id: cdktf.numberToTerraform(this._lastUpdatedByUserId),
      name: cdktf.stringToTerraform(this._name),
      repeat_count: cdktf.numberToTerraform(this._repeatCount),
      service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceIds),
      business_hours: escalationPolicyBusinessHoursToTerraform(this._businessHours.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by_user_id: {
        value: cdktf.numberToHclTerraform(this._createdByUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated_by_user_id: {
        value: cdktf.numberToHclTerraform(this._lastUpdatedByUserId),
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
      repeat_count: {
        value: cdktf.numberToHclTerraform(this._repeatCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      business_hours: {
        value: escalationPolicyBusinessHoursToHclTerraform(this._businessHours.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EscalationPolicyBusinessHoursList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
