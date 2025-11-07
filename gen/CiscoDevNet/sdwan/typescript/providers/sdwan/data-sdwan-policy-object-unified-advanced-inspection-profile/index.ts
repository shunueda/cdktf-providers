// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/policy_object_unified_advanced_inspection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanPolicyObjectUnifiedAdvancedInspectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/policy_object_unified_advanced_inspection_profile#feature_profile_id DataSdwanPolicyObjectUnifiedAdvancedInspectionProfile#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/policy_object_unified_advanced_inspection_profile#id DataSdwanPolicyObjectUnifiedAdvancedInspectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/policy_object_unified_advanced_inspection_profile sdwan_policy_object_unified_advanced_inspection_profile}
*/
export class DataSdwanPolicyObjectUnifiedAdvancedInspectionProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_unified_advanced_inspection_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanPolicyObjectUnifiedAdvancedInspectionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanPolicyObjectUnifiedAdvancedInspectionProfile to import
  * @param importFromId The id of the existing DataSdwanPolicyObjectUnifiedAdvancedInspectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/policy_object_unified_advanced_inspection_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanPolicyObjectUnifiedAdvancedInspectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_unified_advanced_inspection_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/policy_object_unified_advanced_inspection_profile sdwan_policy_object_unified_advanced_inspection_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanPolicyObjectUnifiedAdvancedInspectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanPolicyObjectUnifiedAdvancedInspectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_unified_advanced_inspection_profile',
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

  // advanced_malware_protection_list_id - computed: true, optional: false, required: false
  public get advancedMalwareProtectionListId() {
    return this.getStringAttribute('advanced_malware_protection_list_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // intrusion_prevention_list_id - computed: true, optional: false, required: false
  public get intrusionPreventionListId() {
    return this.getStringAttribute('intrusion_prevention_list_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tls_decryption_action - computed: true, optional: false, required: false
  public get tlsDecryptionAction() {
    return this.getStringAttribute('tls_decryption_action');
  }

  // tls_ssl_profile_list_id - computed: true, optional: false, required: false
  public get tlsSslProfileListId() {
    return this.getStringAttribute('tls_ssl_profile_list_id');
  }

  // url_filtering_list_id - computed: true, optional: false, required: false
  public get urlFilteringListId() {
    return this.getStringAttribute('url_filtering_list_id');
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
