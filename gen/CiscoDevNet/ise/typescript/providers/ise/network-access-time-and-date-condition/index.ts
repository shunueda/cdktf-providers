// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAccessTimeAndDateConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Condition description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#description NetworkAccessTimeAndDateCondition#description}
  */
  readonly description?: string;
  /**
  * End date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#end_date NetworkAccessTimeAndDateCondition#end_date}
  */
  readonly endDate?: string;
  /**
  * End time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#end_time NetworkAccessTimeAndDateCondition#end_time}
  */
  readonly endTime?: string;
  /**
  * Exception end date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#exception_end_date NetworkAccessTimeAndDateCondition#exception_end_date}
  */
  readonly exceptionEndDate?: string;
  /**
  * Exception end time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#exception_end_time NetworkAccessTimeAndDateCondition#exception_end_time}
  */
  readonly exceptionEndTime?: string;
  /**
  * Exception start date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#exception_start_date NetworkAccessTimeAndDateCondition#exception_start_date}
  */
  readonly exceptionStartDate?: string;
  /**
  * Exception start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#exception_start_time NetworkAccessTimeAndDateCondition#exception_start_time}
  */
  readonly exceptionStartTime?: string;
  /**
  * Indicates whereas this condition is in negate mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#is_negate NetworkAccessTimeAndDateCondition#is_negate}
  */
  readonly isNegate?: boolean | cdktf.IResolvable;
  /**
  * Condition name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#name NetworkAccessTimeAndDateCondition#name}
  */
  readonly name: string;
  /**
  * Start date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#start_date NetworkAccessTimeAndDateCondition#start_date}
  */
  readonly startDate?: string;
  /**
  * Start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#start_time NetworkAccessTimeAndDateCondition#start_time}
  */
  readonly startTime?: string;
  /**
  * Defines for which days this condition will be matched. List of weekdays - `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`. Default - List of all week days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#week_days NetworkAccessTimeAndDateCondition#week_days}
  */
  readonly weekDays?: string[];
  /**
  * Defines for which days this condition will NOT be matched. List of weekdays - `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#week_days_exception NetworkAccessTimeAndDateCondition#week_days_exception}
  */
  readonly weekDaysException?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition ise_network_access_time_and_date_condition}
*/
export class NetworkAccessTimeAndDateCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_network_access_time_and_date_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkAccessTimeAndDateCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkAccessTimeAndDateCondition to import
  * @param importFromId The id of the existing NetworkAccessTimeAndDateCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkAccessTimeAndDateCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_network_access_time_and_date_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_access_time_and_date_condition ise_network_access_time_and_date_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAccessTimeAndDateConditionConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAccessTimeAndDateConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_network_access_time_and_date_condition',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12',
        providerVersionConstraint: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._endDate = config.endDate;
    this._endTime = config.endTime;
    this._exceptionEndDate = config.exceptionEndDate;
    this._exceptionEndTime = config.exceptionEndTime;
    this._exceptionStartDate = config.exceptionStartDate;
    this._exceptionStartTime = config.exceptionStartTime;
    this._isNegate = config.isNegate;
    this._name = config.name;
    this._startDate = config.startDate;
    this._startTime = config.startTime;
    this._weekDays = config.weekDays;
    this._weekDaysException = config.weekDaysException;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // end_time - computed: false, optional: true, required: false
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

  // exception_end_date - computed: false, optional: true, required: false
  private _exceptionEndDate?: string; 
  public get exceptionEndDate() {
    return this.getStringAttribute('exception_end_date');
  }
  public set exceptionEndDate(value: string) {
    this._exceptionEndDate = value;
  }
  public resetExceptionEndDate() {
    this._exceptionEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionEndDateInput() {
    return this._exceptionEndDate;
  }

  // exception_end_time - computed: false, optional: true, required: false
  private _exceptionEndTime?: string; 
  public get exceptionEndTime() {
    return this.getStringAttribute('exception_end_time');
  }
  public set exceptionEndTime(value: string) {
    this._exceptionEndTime = value;
  }
  public resetExceptionEndTime() {
    this._exceptionEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionEndTimeInput() {
    return this._exceptionEndTime;
  }

  // exception_start_date - computed: false, optional: true, required: false
  private _exceptionStartDate?: string; 
  public get exceptionStartDate() {
    return this.getStringAttribute('exception_start_date');
  }
  public set exceptionStartDate(value: string) {
    this._exceptionStartDate = value;
  }
  public resetExceptionStartDate() {
    this._exceptionStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionStartDateInput() {
    return this._exceptionStartDate;
  }

  // exception_start_time - computed: false, optional: true, required: false
  private _exceptionStartTime?: string; 
  public get exceptionStartTime() {
    return this.getStringAttribute('exception_start_time');
  }
  public set exceptionStartTime(value: string) {
    this._exceptionStartTime = value;
  }
  public resetExceptionStartTime() {
    this._exceptionStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionStartTimeInput() {
    return this._exceptionStartTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_negate - computed: false, optional: true, required: false
  private _isNegate?: boolean | cdktf.IResolvable; 
  public get isNegate() {
    return this.getBooleanAttribute('is_negate');
  }
  public set isNegate(value: boolean | cdktf.IResolvable) {
    this._isNegate = value;
  }
  public resetIsNegate() {
    this._isNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNegateInput() {
    return this._isNegate;
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

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // start_time - computed: false, optional: true, required: false
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

  // week_days - computed: false, optional: true, required: false
  private _weekDays?: string[]; 
  public get weekDays() {
    return cdktf.Fn.tolist(this.getListAttribute('week_days'));
  }
  public set weekDays(value: string[]) {
    this._weekDays = value;
  }
  public resetWeekDays() {
    this._weekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysInput() {
    return this._weekDays;
  }

  // week_days_exception - computed: false, optional: true, required: false
  private _weekDaysException?: string[]; 
  public get weekDaysException() {
    return cdktf.Fn.tolist(this.getListAttribute('week_days_exception'));
  }
  public set weekDaysException(value: string[]) {
    this._weekDaysException = value;
  }
  public resetWeekDaysException() {
    this._weekDaysException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysExceptionInput() {
    return this._weekDaysException;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      end_date: cdktf.stringToTerraform(this._endDate),
      end_time: cdktf.stringToTerraform(this._endTime),
      exception_end_date: cdktf.stringToTerraform(this._exceptionEndDate),
      exception_end_time: cdktf.stringToTerraform(this._exceptionEndTime),
      exception_start_date: cdktf.stringToTerraform(this._exceptionStartDate),
      exception_start_time: cdktf.stringToTerraform(this._exceptionStartTime),
      is_negate: cdktf.booleanToTerraform(this._isNegate),
      name: cdktf.stringToTerraform(this._name),
      start_date: cdktf.stringToTerraform(this._startDate),
      start_time: cdktf.stringToTerraform(this._startTime),
      week_days: cdktf.listMapper(cdktf.stringToTerraform, false)(this._weekDays),
      week_days_exception: cdktf.listMapper(cdktf.stringToTerraform, false)(this._weekDaysException),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_end_date: {
        value: cdktf.stringToHclTerraform(this._exceptionEndDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_end_time: {
        value: cdktf.stringToHclTerraform(this._exceptionEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_start_date: {
        value: cdktf.stringToHclTerraform(this._exceptionStartDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_start_time: {
        value: cdktf.stringToHclTerraform(this._exceptionStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_negate: {
        value: cdktf.booleanToHclTerraform(this._isNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      week_days: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._weekDays),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      week_days_exception: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._weekDaysException),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
