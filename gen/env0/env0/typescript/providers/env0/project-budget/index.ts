// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/project_budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * amount of the project budget
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/project_budget#amount ProjectBudget#amount}
  */
  readonly amount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/project_budget#id ProjectBudget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * id of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/project_budget#project_id ProjectBudget#project_id}
  */
  readonly projectId: string;
  /**
  * list of notification thresholds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/project_budget#thresholds ProjectBudget#thresholds}
  */
  readonly thresholds?: number[];
  /**
  * budget timeframe (valid values: WEEKLY, MONTHLY, QUARTERLY, YEARLY)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/project_budget#timeframe ProjectBudget#timeframe}
  */
  readonly timeframe: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/project_budget env0_project_budget}
*/
export class ProjectBudget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_project_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectBudget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectBudget to import
  * @param importFromId The id of the existing ProjectBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/project_budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectBudget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_project_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/project_budget env0_project_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_project_budget',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
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
    this._id = config.id;
    this._projectId = config.projectId;
    this._thresholds = config.thresholds;
    this._timeframe = config.timeframe;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds?: number[]; 
  public get thresholds() {
    return this.getNumberListAttribute('thresholds');
  }
  public set thresholds(value: number[]) {
    this._thresholds = value;
  }
  public resetThresholds() {
    this._thresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds;
  }

  // timeframe - computed: false, optional: false, required: true
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amount: cdktf.numberToTerraform(this._amount),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      thresholds: cdktf.listMapper(cdktf.numberToTerraform, false)(this._thresholds),
      timeframe: cdktf.stringToTerraform(this._timeframe),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thresholds: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._thresholds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      timeframe: {
        value: cdktf.stringToHclTerraform(this._timeframe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
