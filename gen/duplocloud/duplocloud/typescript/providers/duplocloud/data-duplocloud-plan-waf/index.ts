// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/plan_waf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDuplocloudPlanWafConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/plan_waf#id DataDuplocloudPlanWaf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the plan for waf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/plan_waf#plan_id DataDuplocloudPlanWaf#plan_id}
  */
  readonly planId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/plan_waf#waf_name DataDuplocloudPlanWaf#waf_name}
  */
  readonly wafName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/plan_waf duplocloud_plan_waf}
*/
export class DataDuplocloudPlanWaf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_plan_waf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDuplocloudPlanWaf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDuplocloudPlanWaf to import
  * @param importFromId The id of the existing DataDuplocloudPlanWaf that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/plan_waf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDuplocloudPlanWaf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_plan_waf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/plan_waf duplocloud_plan_waf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDuplocloudPlanWafConfig
  */
  public constructor(scope: Construct, id: string, config: DataDuplocloudPlanWafConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_plan_waf',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.31',
        providerVersionConstraint: '0.11.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._planId = config.planId;
    this._wafName = config.wafName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_url - computed: true, optional: false, required: false
  public get dashboardUrl() {
    return this.getStringAttribute('dashboard_url');
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

  // plan_id - computed: false, optional: false, required: true
  private _planId?: string; 
  public get planId() {
    return this.getStringAttribute('plan_id');
  }
  public set planId(value: string) {
    this._planId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId;
  }

  // waf_arn - computed: true, optional: false, required: false
  public get wafArn() {
    return this.getStringAttribute('waf_arn');
  }

  // waf_name - computed: false, optional: false, required: true
  private _wafName?: string; 
  public get wafName() {
    return this.getStringAttribute('waf_name');
  }
  public set wafName(value: string) {
    this._wafName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafNameInput() {
    return this._wafName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      plan_id: cdktf.stringToTerraform(this._planId),
      waf_name: cdktf.stringToTerraform(this._wafName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_id: {
        value: cdktf.stringToHclTerraform(this._planId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_name: {
        value: cdktf.stringToHclTerraform(this._wafName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
