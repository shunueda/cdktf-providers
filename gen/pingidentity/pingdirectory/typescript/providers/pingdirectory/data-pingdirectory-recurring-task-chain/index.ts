// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/recurring_task_chain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryRecurringTaskChainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/recurring_task_chain#name DataPingdirectoryRecurringTaskChain#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/recurring_task_chain pingdirectory_recurring_task_chain}
*/
export class DataPingdirectoryRecurringTaskChain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_recurring_task_chain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryRecurringTaskChain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryRecurringTaskChain to import
  * @param importFromId The id of the existing DataPingdirectoryRecurringTaskChain that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/recurring_task_chain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryRecurringTaskChain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_recurring_task_chain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/recurring_task_chain pingdirectory_recurring_task_chain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryRecurringTaskChainConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryRecurringTaskChainConfig) {
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interrupted_by_shutdown_behavior - computed: true, optional: false, required: false
  public get interruptedByShutdownBehavior() {
    return this.getStringAttribute('interrupted_by_shutdown_behavior');
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

  // recurring_task - computed: true, optional: false, required: false
  public get recurringTask() {
    return cdktf.Fn.tolist(this.getListAttribute('recurring_task'));
  }

  // scheduled_date_selection_type - computed: true, optional: false, required: false
  public get scheduledDateSelectionType() {
    return this.getStringAttribute('scheduled_date_selection_type');
  }

  // scheduled_day_of_the_month - computed: true, optional: false, required: false
  public get scheduledDayOfTheMonth() {
    return cdktf.Fn.tolist(this.getListAttribute('scheduled_day_of_the_month'));
  }

  // scheduled_day_of_the_week - computed: true, optional: false, required: false
  public get scheduledDayOfTheWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('scheduled_day_of_the_week'));
  }

  // scheduled_month - computed: true, optional: false, required: false
  public get scheduledMonth() {
    return cdktf.Fn.tolist(this.getListAttribute('scheduled_month'));
  }

  // scheduled_time_of_day - computed: true, optional: false, required: false
  public get scheduledTimeOfDay() {
    return cdktf.Fn.tolist(this.getListAttribute('scheduled_time_of_day'));
  }

  // server_offline_at_start_time_behavior - computed: true, optional: false, required: false
  public get serverOfflineAtStartTimeBehavior() {
    return this.getStringAttribute('server_offline_at_start_time_behavior');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
