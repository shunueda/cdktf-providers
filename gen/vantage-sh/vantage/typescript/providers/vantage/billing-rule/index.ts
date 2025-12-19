// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BillingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The amount for the BillingRule. Required for Charge and Credit rules. Example value: 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#amount BillingRule#amount}
  */
  readonly amount?: number;
  /**
  * Determines if the BillingRule applies to all current and future managed accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#apply_to_all BillingRule#apply_to_all}
  */
  readonly applyToAll?: boolean | cdktf.IResolvable;
  /**
  * The category of the BillingRule. Required for Charge and Credit rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#category BillingRule#category}
  */
  readonly category?: string;
  /**
  * The charge type of the BillingRule. Required for Exclusion rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#charge_type BillingRule#charge_type}
  */
  readonly chargeType?: string;
  /**
  * The end date of the BillingRule. ISO 8601 formatted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#end_date BillingRule#end_date}
  */
  readonly endDate?: string;
  /**
  * The percentage of the cost shown. Required for Adjustment rules. Example value: 75.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#percentage BillingRule#percentage}
  */
  readonly percentage?: number;
  /**
  * The service of the BillingRule. Required for Charge and Credit rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#service BillingRule#service}
  */
  readonly service?: string;
  /**
  * The SQL query for the BillingRule. Required for Custom rules. Example value: UPDATE costs SET costs.amount = costs.amount * 0.95
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#sql_query BillingRule#sql_query}
  */
  readonly sqlQuery?: string;
  /**
  * The start date of the BillingRule. ISO 8601 formatted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#start_date BillingRule#start_date}
  */
  readonly startDate?: string;
  /**
  * The start period of the BillingRule. DEPRECATED: use start_date instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#start_period BillingRule#start_period}
  */
  readonly startPeriod?: string;
  /**
  * The subcategory of the BillingRule. Required for Charge and Credit rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#sub_category BillingRule#sub_category}
  */
  readonly subCategory?: string;
  /**
  * The title of the BillingRule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#title BillingRule#title}
  */
  readonly title: string;
  /**
  * The type of the BillingRule. Note: the values are case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#type BillingRule#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule vantage_billing_rule}
*/
export class BillingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_billing_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BillingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BillingRule to import
  * @param importFromId The id of the existing BillingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BillingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_billing_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/billing_rule vantage_billing_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BillingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: BillingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_billing_rule',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.71',
        providerVersionConstraint: '0.1.71'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amount = config.amount;
    this._applyToAll = config.applyToAll;
    this._category = config.category;
    this._chargeType = config.chargeType;
    this._endDate = config.endDate;
    this._percentage = config.percentage;
    this._service = config.service;
    this._sqlQuery = config.sqlQuery;
    this._startDate = config.startDate;
    this._startPeriod = config.startPeriod;
    this._subCategory = config.subCategory;
    this._title = config.title;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount - computed: true, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // apply_to_all - computed: true, optional: true, required: false
  private _applyToAll?: boolean | cdktf.IResolvable; 
  public get applyToAll() {
    return this.getBooleanAttribute('apply_to_all');
  }
  public set applyToAll(value: boolean | cdktf.IResolvable) {
    this._applyToAll = value;
  }
  public resetApplyToAll() {
    this._applyToAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToAllInput() {
    return this._applyToAll;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // charge_type - computed: true, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by_token - computed: true, optional: false, required: false
  public get createdByToken() {
    return this.getStringAttribute('created_by_token');
  }

  // end_date - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // percentage - computed: true, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // sql_query - computed: true, optional: true, required: false
  private _sqlQuery?: string; 
  public get sqlQuery() {
    return this.getStringAttribute('sql_query');
  }
  public set sqlQuery(value: string) {
    this._sqlQuery = value;
  }
  public resetSqlQuery() {
    this._sqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlQueryInput() {
    return this._sqlQuery;
  }

  // start_date - computed: true, optional: true, required: false
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

  // start_period - computed: true, optional: true, required: false
  private _startPeriod?: string; 
  public get startPeriod() {
    return this.getStringAttribute('start_period');
  }
  public set startPeriod(value: string) {
    this._startPeriod = value;
  }
  public resetStartPeriod() {
    this._startPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPeriodInput() {
    return this._startPeriod;
  }

  // sub_category - computed: true, optional: true, required: false
  private _subCategory?: string; 
  public get subCategory() {
    return this.getStringAttribute('sub_category');
  }
  public set subCategory(value: string) {
    this._subCategory = value;
  }
  public resetSubCategory() {
    this._subCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subCategoryInput() {
    return this._subCategory;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
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
      amount: cdktf.numberToTerraform(this._amount),
      apply_to_all: cdktf.booleanToTerraform(this._applyToAll),
      category: cdktf.stringToTerraform(this._category),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      end_date: cdktf.stringToTerraform(this._endDate),
      percentage: cdktf.numberToTerraform(this._percentage),
      service: cdktf.stringToTerraform(this._service),
      sql_query: cdktf.stringToTerraform(this._sqlQuery),
      start_date: cdktf.stringToTerraform(this._startDate),
      start_period: cdktf.stringToTerraform(this._startPeriod),
      sub_category: cdktf.stringToTerraform(this._subCategory),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amount: {
        value: cdktf.numberToHclTerraform(this._amount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apply_to_all: {
        value: cdktf.booleanToHclTerraform(this._applyToAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
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
      percentage: {
        value: cdktf.numberToHclTerraform(this._percentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_query: {
        value: cdktf.stringToHclTerraform(this._sqlQuery),
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
      start_period: {
        value: cdktf.stringToHclTerraform(this._startPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_category: {
        value: cdktf.stringToHclTerraform(this._subCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
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
