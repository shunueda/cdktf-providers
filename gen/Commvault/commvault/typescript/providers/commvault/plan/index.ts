// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the destination name for the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan#backup_destination_name Plan#backup_destination_name}
  */
  readonly backupDestinationName: string;
  /**
  * Specifies the backup destination storage used for the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan#backup_destination_storage Plan#backup_destination_storage}
  */
  readonly backupDestinationStorage: string;
  /**
  * Specifies the companyid to which the created plan needs to be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan#company_id Plan#company_id}
  */
  readonly companyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan#id Plan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the Plan name used for creation of the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan#plan_name Plan#plan_name}
  */
  readonly planName: string;
  /**
  * Specifies the number of days that the software retains the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan#retention_period_days Plan#retention_period_days}
  */
  readonly retentionPeriodDays: number;
  /**
  * Specifies the rpo in Days for created plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan#rpo_in_days Plan#rpo_in_days}
  */
  readonly rpoInDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan commvault_plan}
*/
export class Plan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Plan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Plan to import
  * @param importFromId The id of the existing Plan that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Plan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan commvault_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlanConfig
  */
  public constructor(scope: Construct, id: string, config: PlanConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_plan',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupDestinationName = config.backupDestinationName;
    this._backupDestinationStorage = config.backupDestinationStorage;
    this._companyId = config.companyId;
    this._id = config.id;
    this._planName = config.planName;
    this._retentionPeriodDays = config.retentionPeriodDays;
    this._rpoInDays = config.rpoInDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_destination_name - computed: false, optional: false, required: true
  private _backupDestinationName?: string; 
  public get backupDestinationName() {
    return this.getStringAttribute('backup_destination_name');
  }
  public set backupDestinationName(value: string) {
    this._backupDestinationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDestinationNameInput() {
    return this._backupDestinationName;
  }

  // backup_destination_storage - computed: false, optional: false, required: true
  private _backupDestinationStorage?: string; 
  public get backupDestinationStorage() {
    return this.getStringAttribute('backup_destination_storage');
  }
  public set backupDestinationStorage(value: string) {
    this._backupDestinationStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDestinationStorageInput() {
    return this._backupDestinationStorage;
  }

  // company_id - computed: false, optional: true, required: false
  private _companyId?: number; 
  public get companyId() {
    return this.getNumberAttribute('company_id');
  }
  public set companyId(value: number) {
    this._companyId = value;
  }
  public resetCompanyId() {
    this._companyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdInput() {
    return this._companyId;
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

  // plan_name - computed: false, optional: false, required: true
  private _planName?: string; 
  public get planName() {
    return this.getStringAttribute('plan_name');
  }
  public set planName(value: string) {
    this._planName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planNameInput() {
    return this._planName;
  }

  // retention_period_days - computed: false, optional: false, required: true
  private _retentionPeriodDays?: number; 
  public get retentionPeriodDays() {
    return this.getNumberAttribute('retention_period_days');
  }
  public set retentionPeriodDays(value: number) {
    this._retentionPeriodDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodDaysInput() {
    return this._retentionPeriodDays;
  }

  // rpo_in_days - computed: false, optional: true, required: false
  private _rpoInDays?: number; 
  public get rpoInDays() {
    return this.getNumberAttribute('rpo_in_days');
  }
  public set rpoInDays(value: number) {
    this._rpoInDays = value;
  }
  public resetRpoInDays() {
    this._rpoInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInDaysInput() {
    return this._rpoInDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_destination_name: cdktf.stringToTerraform(this._backupDestinationName),
      backup_destination_storage: cdktf.stringToTerraform(this._backupDestinationStorage),
      company_id: cdktf.numberToTerraform(this._companyId),
      id: cdktf.stringToTerraform(this._id),
      plan_name: cdktf.stringToTerraform(this._planName),
      retention_period_days: cdktf.numberToTerraform(this._retentionPeriodDays),
      rpo_in_days: cdktf.numberToTerraform(this._rpoInDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_destination_name: {
        value: cdktf.stringToHclTerraform(this._backupDestinationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_destination_storage: {
        value: cdktf.stringToHclTerraform(this._backupDestinationStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_id: {
        value: cdktf.numberToHclTerraform(this._companyId),
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
      plan_name: {
        value: cdktf.stringToHclTerraform(this._planName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_period_days: {
        value: cdktf.numberToHclTerraform(this._retentionPeriodDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rpo_in_days: {
        value: cdktf.numberToHclTerraform(this._rpoInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
