// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbSlaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla#continuous_retention NdbSla#continuous_retention}
  */
  readonly continuousRetention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla#daily_retention NdbSla#daily_retention}
  */
  readonly dailyRetention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla#description NdbSla#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla#id NdbSla#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla#monthly_retention NdbSla#monthly_retention}
  */
  readonly monthlyRetention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla#name NdbSla#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla#quarterly_retention NdbSla#quarterly_retention}
  */
  readonly quarterlyRetention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla#weekly_retention NdbSla#weekly_retention}
  */
  readonly weeklyRetention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla#yearly_retention NdbSla#yearly_retention}
  */
  readonly yearlyRetention?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla nutanix_ndb_sla}
*/
export class NdbSla extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_sla";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbSla resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbSla to import
  * @param importFromId The id of the existing NdbSla that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbSla to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_sla", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_sla nutanix_ndb_sla} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbSlaConfig
  */
  public constructor(scope: Construct, id: string, config: NdbSlaConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_sla',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._continuousRetention = config.continuousRetention;
    this._dailyRetention = config.dailyRetention;
    this._description = config.description;
    this._id = config.id;
    this._monthlyRetention = config.monthlyRetention;
    this._name = config.name;
    this._quarterlyRetention = config.quarterlyRetention;
    this._weeklyRetention = config.weeklyRetention;
    this._yearlyRetention = config.yearlyRetention;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // continuous_retention - computed: false, optional: true, required: false
  private _continuousRetention?: number; 
  public get continuousRetention() {
    return this.getNumberAttribute('continuous_retention');
  }
  public set continuousRetention(value: number) {
    this._continuousRetention = value;
  }
  public resetContinuousRetention() {
    this._continuousRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousRetentionInput() {
    return this._continuousRetention;
  }

  // current_active_frequency - computed: true, optional: false, required: false
  public get currentActiveFrequency() {
    return this.getStringAttribute('current_active_frequency');
  }

  // daily_retention - computed: false, optional: true, required: false
  private _dailyRetention?: number; 
  public get dailyRetention() {
    return this.getNumberAttribute('daily_retention');
  }
  public set dailyRetention(value: number) {
    this._dailyRetention = value;
  }
  public resetDailyRetention() {
    this._dailyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyRetentionInput() {
    return this._dailyRetention;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
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

  // monthly_retention - computed: false, optional: true, required: false
  private _monthlyRetention?: number; 
  public get monthlyRetention() {
    return this.getNumberAttribute('monthly_retention');
  }
  public set monthlyRetention(value: number) {
    this._monthlyRetention = value;
  }
  public resetMonthlyRetention() {
    this._monthlyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyRetentionInput() {
    return this._monthlyRetention;
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // pitr_enabled - computed: true, optional: false, required: false
  public get pitrEnabled() {
    return this.getBooleanAttribute('pitr_enabled');
  }

  // quarterly_retention - computed: false, optional: true, required: false
  private _quarterlyRetention?: number; 
  public get quarterlyRetention() {
    return this.getNumberAttribute('quarterly_retention');
  }
  public set quarterlyRetention(value: number) {
    this._quarterlyRetention = value;
  }
  public resetQuarterlyRetention() {
    this._quarterlyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarterlyRetentionInput() {
    return this._quarterlyRetention;
  }

  // reference_count - computed: true, optional: false, required: false
  public get referenceCount() {
    return this.getNumberAttribute('reference_count');
  }

  // system_sla - computed: true, optional: false, required: false
  public get systemSla() {
    return this.getBooleanAttribute('system_sla');
  }

  // unique_name - computed: true, optional: false, required: false
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }

  // weekly_retention - computed: false, optional: true, required: false
  private _weeklyRetention?: number; 
  public get weeklyRetention() {
    return this.getNumberAttribute('weekly_retention');
  }
  public set weeklyRetention(value: number) {
    this._weeklyRetention = value;
  }
  public resetWeeklyRetention() {
    this._weeklyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRetentionInput() {
    return this._weeklyRetention;
  }

  // yearly_retention - computed: true, optional: true, required: false
  private _yearlyRetention?: number; 
  public get yearlyRetention() {
    return this.getNumberAttribute('yearly_retention');
  }
  public set yearlyRetention(value: number) {
    this._yearlyRetention = value;
  }
  public resetYearlyRetention() {
    this._yearlyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearlyRetentionInput() {
    return this._yearlyRetention;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      continuous_retention: cdktf.numberToTerraform(this._continuousRetention),
      daily_retention: cdktf.numberToTerraform(this._dailyRetention),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      monthly_retention: cdktf.numberToTerraform(this._monthlyRetention),
      name: cdktf.stringToTerraform(this._name),
      quarterly_retention: cdktf.numberToTerraform(this._quarterlyRetention),
      weekly_retention: cdktf.numberToTerraform(this._weeklyRetention),
      yearly_retention: cdktf.numberToTerraform(this._yearlyRetention),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      continuous_retention: {
        value: cdktf.numberToHclTerraform(this._continuousRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      daily_retention: {
        value: cdktf.numberToHclTerraform(this._dailyRetention),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monthly_retention: {
        value: cdktf.numberToHclTerraform(this._monthlyRetention),
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
      quarterly_retention: {
        value: cdktf.numberToHclTerraform(this._quarterlyRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weekly_retention: {
        value: cdktf.numberToHclTerraform(this._weeklyRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      yearly_retention: {
        value: cdktf.numberToHclTerraform(this._yearlyRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
