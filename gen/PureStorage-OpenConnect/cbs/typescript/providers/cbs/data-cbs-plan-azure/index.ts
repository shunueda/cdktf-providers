// https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/data-sources/plan_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCbsPlanAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/data-sources/plan_azure#id DataCbsPlanAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/data-sources/plan_azure#plan_version DataCbsPlanAzure#plan_version}
  */
  readonly planVersion: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/data-sources/plan_azure cbs_plan_azure}
*/
export class DataCbsPlanAzure extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cbs_plan_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCbsPlanAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCbsPlanAzure to import
  * @param importFromId The id of the existing DataCbsPlanAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/data-sources/plan_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCbsPlanAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cbs_plan_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/purestorage-openconnect/cbs/0.11.2/docs/data-sources/plan_azure cbs_plan_azure} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCbsPlanAzureConfig
  */
  public constructor(scope: Construct, id: string, config: DataCbsPlanAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'cbs_plan_azure',
      terraformGeneratorMetadata: {
        providerName: 'cbs',
        providerVersion: '0.11.2',
        providerVersionConstraint: '0.11.2'
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
    this._planVersion = config.planVersion;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plan_version - computed: false, optional: false, required: true
  private _planVersion?: string; 
  public get planVersion() {
    return this.getStringAttribute('plan_version');
  }
  public set planVersion(value: string) {
    this._planVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planVersionInput() {
    return this._planVersion;
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // publisher - computed: true, optional: false, required: false
  public get publisher() {
    return this.getStringAttribute('publisher');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      plan_version: cdktf.stringToTerraform(this._planVersion),
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
      plan_version: {
        value: cdktf.stringToHclTerraform(this._planVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
