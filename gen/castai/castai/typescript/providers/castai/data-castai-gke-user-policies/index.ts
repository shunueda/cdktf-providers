// https://registry.terraform.io/providers/castai/castai/8.2.1/docs/data-sources/gke_user_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCastaiGkeUserPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Provide a list of GCP feature names to include the necessary policies for them to work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/data-sources/gke_user_policies#features DataCastaiGkeUserPolicies#features}
  */
  readonly features?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/data-sources/gke_user_policies#id DataCastaiGkeUserPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/data-sources/gke_user_policies castai_gke_user_policies}
*/
export class DataCastaiGkeUserPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_gke_user_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCastaiGkeUserPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCastaiGkeUserPolicies to import
  * @param importFromId The id of the existing DataCastaiGkeUserPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/data-sources/gke_user_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCastaiGkeUserPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_gke_user_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/data-sources/gke_user_policies castai_gke_user_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCastaiGkeUserPoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCastaiGkeUserPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'castai_gke_user_policies',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.2.1',
        providerVersionConstraint: '8.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._features = config.features;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // features - computed: false, optional: true, required: false
  private _features?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get features() {
    return this.getBooleanMapAttribute('features');
  }
  public set features(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getListAttribute('policy');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      features: cdktf.hashMapper(cdktf.booleanToTerraform)(this._features),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      features: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._features),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
