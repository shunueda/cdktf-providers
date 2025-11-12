// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecurringTaskChainConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for this Recurring Task Chain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#description RecurringTaskChain#description}
  */
  readonly description?: string;
  /**
  * Indicates whether this Recurring Task Chain is enabled for use. Recurring Task Chains that are disabled will not have any new instances scheduled, but instances that are already scheduled will be preserved. Those instances may be manually canceled if desired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#enabled RecurringTaskChain#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the behavior that the server should exhibit if it is shut down or abnormally terminated while an instance of this Recurring Task Chain is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#interrupted_by_shutdown_behavior RecurringTaskChain#interrupted_by_shutdown_behavior}
  */
  readonly interruptedByShutdownBehavior?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#name RecurringTaskChain#name}
  */
  readonly name: string;
  /**
  * The set of recurring tasks that make up this chain. At least one value must be provided. If multiple values are given, then the task instances will be invoked in the order in which they are listed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#recurring_task RecurringTaskChain#recurring_task}
  */
  readonly recurringTask: string[];
  /**
  * The mechanism used to determine the dates on which instances of this Recurring Task Chain may be scheduled to start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#scheduled_date_selection_type RecurringTaskChain#scheduled_date_selection_type}
  */
  readonly scheduledDateSelectionType: string;
  /**
  * The specific days of the month on which instances of this Recurring Task Chain may be scheduled to start. If the scheduled-day-selection-type property has a value of selected-days-of-the-month, then this property must have one or more values; otherwise, it must be left undefined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#scheduled_day_of_the_month RecurringTaskChain#scheduled_day_of_the_month}
  */
  readonly scheduledDayOfTheMonth?: string[];
  /**
  * The specific days of the week on which instances of this Recurring Task Chain may be scheduled to start. If the scheduled-day-selection-type property has a value of selected-days-of-the-week, then this property must have one or more values; otherwise, it must be left undefined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#scheduled_day_of_the_week RecurringTaskChain#scheduled_day_of_the_week}
  */
  readonly scheduledDayOfTheWeek?: string[];
  /**
  * The months of the year in which instances of this Recurring Task Chain may be scheduled to start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#scheduled_month RecurringTaskChain#scheduled_month}
  */
  readonly scheduledMonth?: string[];
  /**
  * The time of day at which instances of the Recurring Task Chain should be eligible to start running. Values should be in the format HH:MM (where HH is a two-digit representation of the hour of the day, between 00 and 23, inclusive), and MM is a two-digit representation of the minute of the hour (between 00 and 59, inclusive). Alternately, the value can be in the form *:MM, which indicates that the task should be eligible to start at the specified minute of every hour. At least one value must be provided, but multiple values may be given to indicate multiple start times within the same day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#scheduled_time_of_day RecurringTaskChain#scheduled_time_of_day}
  */
  readonly scheduledTimeOfDay: string[];
  /**
  * Specifies the behavior that the server should exhibit if it is offline when the start time arrives for the tasks in this Recurring Task Chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#server_offline_at_start_time_behavior RecurringTaskChain#server_offline_at_start_time_behavior}
  */
  readonly serverOfflineAtStartTimeBehavior?: string;
  /**
  * The time zone that will be used to interpret the scheduled-time-of-day values. If no value is provided, then the JVM's default time zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#time_zone RecurringTaskChain#time_zone}
  */
  readonly timeZone?: string;
  /**
  * The type of Recurring Task Chain resource. Options are ['recurring-task-chain']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#type RecurringTaskChain#type}
  */
  readonly type?: string;
}
export interface RecurringTaskChainRequiredActions {
}

export function recurringTaskChainRequiredActionsToTerraform(struct?: RecurringTaskChainRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function recurringTaskChainRequiredActionsToHclTerraform(struct?: RecurringTaskChainRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RecurringTaskChainRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RecurringTaskChainRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecurringTaskChainRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class RecurringTaskChainRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RecurringTaskChainRequiredActionsOutputReference {
    return new RecurringTaskChainRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain pingdirectory_recurring_task_chain}
*/
export class RecurringTaskChain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_recurring_task_chain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RecurringTaskChain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RecurringTaskChain to import
  * @param importFromId The id of the existing RecurringTaskChain that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RecurringTaskChain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_recurring_task_chain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/recurring_task_chain pingdirectory_recurring_task_chain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecurringTaskChainConfig
  */
  public constructor(scope: Construct, id: string, config: RecurringTaskChainConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_recurring_task_chain',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._interruptedByShutdownBehavior = config.interruptedByShutdownBehavior;
    this._name = config.name;
    this._recurringTask = config.recurringTask;
    this._scheduledDateSelectionType = config.scheduledDateSelectionType;
    this._scheduledDayOfTheMonth = config.scheduledDayOfTheMonth;
    this._scheduledDayOfTheWeek = config.scheduledDayOfTheWeek;
    this._scheduledMonth = config.scheduledMonth;
    this._scheduledTimeOfDay = config.scheduledTimeOfDay;
    this._serverOfflineAtStartTimeBehavior = config.serverOfflineAtStartTimeBehavior;
    this._timeZone = config.timeZone;
    this._type = config.type;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interrupted_by_shutdown_behavior - computed: true, optional: true, required: false
  private _interruptedByShutdownBehavior?: string; 
  public get interruptedByShutdownBehavior() {
    return this.getStringAttribute('interrupted_by_shutdown_behavior');
  }
  public set interruptedByShutdownBehavior(value: string) {
    this._interruptedByShutdownBehavior = value;
  }
  public resetInterruptedByShutdownBehavior() {
    this._interruptedByShutdownBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptedByShutdownBehaviorInput() {
    return this._interruptedByShutdownBehavior;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // recurring_task - computed: false, optional: false, required: true
  private _recurringTask?: string[]; 
  public get recurringTask() {
    return cdktf.Fn.tolist(this.getListAttribute('recurring_task'));
  }
  public set recurringTask(value: string[]) {
    this._recurringTask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringTaskInput() {
    return this._recurringTask;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new RecurringTaskChainRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // scheduled_date_selection_type - computed: false, optional: false, required: true
  private _scheduledDateSelectionType?: string; 
  public get scheduledDateSelectionType() {
    return this.getStringAttribute('scheduled_date_selection_type');
  }
  public set scheduledDateSelectionType(value: string) {
    this._scheduledDateSelectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledDateSelectionTypeInput() {
    return this._scheduledDateSelectionType;
  }

  // scheduled_day_of_the_month - computed: true, optional: true, required: false
  private _scheduledDayOfTheMonth?: string[]; 
  public get scheduledDayOfTheMonth() {
    return cdktf.Fn.tolist(this.getListAttribute('scheduled_day_of_the_month'));
  }
  public set scheduledDayOfTheMonth(value: string[]) {
    this._scheduledDayOfTheMonth = value;
  }
  public resetScheduledDayOfTheMonth() {
    this._scheduledDayOfTheMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledDayOfTheMonthInput() {
    return this._scheduledDayOfTheMonth;
  }

  // scheduled_day_of_the_week - computed: true, optional: true, required: false
  private _scheduledDayOfTheWeek?: string[]; 
  public get scheduledDayOfTheWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('scheduled_day_of_the_week'));
  }
  public set scheduledDayOfTheWeek(value: string[]) {
    this._scheduledDayOfTheWeek = value;
  }
  public resetScheduledDayOfTheWeek() {
    this._scheduledDayOfTheWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledDayOfTheWeekInput() {
    return this._scheduledDayOfTheWeek;
  }

  // scheduled_month - computed: true, optional: true, required: false
  private _scheduledMonth?: string[]; 
  public get scheduledMonth() {
    return cdktf.Fn.tolist(this.getListAttribute('scheduled_month'));
  }
  public set scheduledMonth(value: string[]) {
    this._scheduledMonth = value;
  }
  public resetScheduledMonth() {
    this._scheduledMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledMonthInput() {
    return this._scheduledMonth;
  }

  // scheduled_time_of_day - computed: false, optional: false, required: true
  private _scheduledTimeOfDay?: string[]; 
  public get scheduledTimeOfDay() {
    return cdktf.Fn.tolist(this.getListAttribute('scheduled_time_of_day'));
  }
  public set scheduledTimeOfDay(value: string[]) {
    this._scheduledTimeOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTimeOfDayInput() {
    return this._scheduledTimeOfDay;
  }

  // server_offline_at_start_time_behavior - computed: true, optional: true, required: false
  private _serverOfflineAtStartTimeBehavior?: string; 
  public get serverOfflineAtStartTimeBehavior() {
    return this.getStringAttribute('server_offline_at_start_time_behavior');
  }
  public set serverOfflineAtStartTimeBehavior(value: string) {
    this._serverOfflineAtStartTimeBehavior = value;
  }
  public resetServerOfflineAtStartTimeBehavior() {
    this._serverOfflineAtStartTimeBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverOfflineAtStartTimeBehaviorInput() {
    return this._serverOfflineAtStartTimeBehavior;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      interrupted_by_shutdown_behavior: cdktf.stringToTerraform(this._interruptedByShutdownBehavior),
      name: cdktf.stringToTerraform(this._name),
      recurring_task: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recurringTask),
      scheduled_date_selection_type: cdktf.stringToTerraform(this._scheduledDateSelectionType),
      scheduled_day_of_the_month: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scheduledDayOfTheMonth),
      scheduled_day_of_the_week: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scheduledDayOfTheWeek),
      scheduled_month: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scheduledMonth),
      scheduled_time_of_day: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scheduledTimeOfDay),
      server_offline_at_start_time_behavior: cdktf.stringToTerraform(this._serverOfflineAtStartTimeBehavior),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      type: cdktf.stringToTerraform(this._type),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interrupted_by_shutdown_behavior: {
        value: cdktf.stringToHclTerraform(this._interruptedByShutdownBehavior),
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
      recurring_task: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recurringTask),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scheduled_date_selection_type: {
        value: cdktf.stringToHclTerraform(this._scheduledDateSelectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_day_of_the_month: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scheduledDayOfTheMonth),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scheduled_day_of_the_week: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scheduledDayOfTheWeek),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scheduled_month: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scheduledMonth),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scheduled_time_of_day: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scheduledTimeOfDay),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_offline_at_start_time_behavior: {
        value: cdktf.stringToHclTerraform(this._serverOfflineAtStartTimeBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
