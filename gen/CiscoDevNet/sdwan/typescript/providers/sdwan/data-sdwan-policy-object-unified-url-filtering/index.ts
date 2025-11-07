// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/policy_object_unified_url_filtering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanPolicyObjectUnifiedUrlFilteringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/policy_object_unified_url_filtering#feature_profile_id DataSdwanPolicyObjectUnifiedUrlFiltering#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/policy_object_unified_url_filtering#id DataSdwanPolicyObjectUnifiedUrlFiltering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/policy_object_unified_url_filtering sdwan_policy_object_unified_url_filtering}
*/
export class DataSdwanPolicyObjectUnifiedUrlFiltering extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_unified_url_filtering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanPolicyObjectUnifiedUrlFiltering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanPolicyObjectUnifiedUrlFiltering to import
  * @param importFromId The id of the existing DataSdwanPolicyObjectUnifiedUrlFiltering that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/policy_object_unified_url_filtering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanPolicyObjectUnifiedUrlFiltering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_unified_url_filtering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/policy_object_unified_url_filtering sdwan_policy_object_unified_url_filtering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanPolicyObjectUnifiedUrlFilteringConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanPolicyObjectUnifiedUrlFilteringConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_unified_url_filtering',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts - computed: true, optional: false, required: false
  public get alerts() {
    return cdktf.Fn.tolist(this.getListAttribute('alerts'));
  }

  // block_page_action - computed: true, optional: false, required: false
  public get blockPageAction() {
    return this.getStringAttribute('block_page_action');
  }

  // block_page_contents - computed: true, optional: false, required: false
  public get blockPageContents() {
    return this.getStringAttribute('block_page_contents');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_alerts - computed: true, optional: false, required: false
  public get enableAlerts() {
    return this.getBooleanAttribute('enable_alerts');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // url_allow_list_id - computed: true, optional: false, required: false
  public get urlAllowListId() {
    return this.getStringAttribute('url_allow_list_id');
  }

  // url_block_list_id - computed: true, optional: false, required: false
  public get urlBlockListId() {
    return this.getStringAttribute('url_block_list_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // web_categories - computed: true, optional: false, required: false
  public get webCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('web_categories'));
  }

  // web_categories_action - computed: true, optional: false, required: false
  public get webCategoriesAction() {
    return this.getStringAttribute('web_categories_action');
  }

  // web_reputation - computed: true, optional: false, required: false
  public get webReputation() {
    return this.getStringAttribute('web_reputation');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
