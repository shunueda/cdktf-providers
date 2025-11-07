// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/budget_budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBudgetBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/budget_budget#budget_id DataOciBudgetBudget#budget_id}
  */
  readonly budgetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/budget_budget oci_budget_budget}
*/
export class DataOciBudgetBudget extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_budget_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBudgetBudget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBudgetBudget to import
  * @param importFromId The id of the existing DataOciBudgetBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/budget_budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBudgetBudget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_budget_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/budget_budget oci_budget_budget} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBudgetBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBudgetBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_budget_budget',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._budgetId = config.budgetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_spend - computed: true, optional: false, required: false
  public get actualSpend() {
    return this.getNumberAttribute('actual_spend');
  }

  // alert_rule_count - computed: true, optional: false, required: false
  public get alertRuleCount() {
    return this.getNumberAttribute('alert_rule_count');
  }

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getNumberAttribute('amount');
  }

  // budget_id - computed: false, optional: false, required: true
  private _budgetId?: string; 
  public get budgetId() {
    return this.getStringAttribute('budget_id');
  }
  public set budgetId(value: string) {
    this._budgetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetIdInput() {
    return this._budgetId;
  }

  // budget_processing_period_start_offset - computed: true, optional: false, required: false
  public get budgetProcessingPeriodStartOffset() {
    return this.getNumberAttribute('budget_processing_period_start_offset');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // forecasted_spend - computed: true, optional: false, required: false
  public get forecastedSpend() {
    return this.getNumberAttribute('forecasted_spend');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // processing_period_type - computed: true, optional: false, required: false
  public get processingPeriodType() {
    return this.getStringAttribute('processing_period_type');
  }

  // reset_period - computed: true, optional: false, required: false
  public get resetPeriod() {
    return this.getStringAttribute('reset_period');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_compartment_id - computed: true, optional: false, required: false
  public get targetCompartmentId() {
    return this.getStringAttribute('target_compartment_id');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // targets - computed: true, optional: false, required: false
  public get targets() {
    return this.getListAttribute('targets');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_spend_computed - computed: true, optional: false, required: false
  public get timeSpendComputed() {
    return this.getStringAttribute('time_spend_computed');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      budget_id: cdktf.stringToTerraform(this._budgetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      budget_id: {
        value: cdktf.stringToHclTerraform(this._budgetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
