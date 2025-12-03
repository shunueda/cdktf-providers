// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/plan_kms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDuplocloudPlanKmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/plan_kms#id DataDuplocloudPlanKms#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/plan_kms#kms_name DataDuplocloudPlanKms#kms_name}
  */
  readonly kmsName: string;
  /**
  * The ID of the plan to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/plan_kms#plan_id DataDuplocloudPlanKms#plan_id}
  */
  readonly planId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/plan_kms duplocloud_plan_kms}
*/
export class DataDuplocloudPlanKms extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_plan_kms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDuplocloudPlanKms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDuplocloudPlanKms to import
  * @param importFromId The id of the existing DataDuplocloudPlanKms that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/plan_kms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDuplocloudPlanKms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_plan_kms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/plan_kms duplocloud_plan_kms} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDuplocloudPlanKmsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDuplocloudPlanKmsConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_plan_kms',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
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
    this._kmsName = config.kmsName;
    this._planId = config.planId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // kms_arn - computed: true, optional: false, required: false
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }

  // kms_id - computed: true, optional: false, required: false
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }

  // kms_name - computed: false, optional: false, required: true
  private _kmsName?: string; 
  public get kmsName() {
    return this.getStringAttribute('kms_name');
  }
  public set kmsName(value: string) {
    this._kmsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsNameInput() {
    return this._kmsName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      kms_name: cdktf.stringToTerraform(this._kmsName),
      plan_id: cdktf.stringToTerraform(this._planId),
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
      kms_name: {
        value: cdktf.stringToHclTerraform(this._kmsName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
