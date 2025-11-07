// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectUnifiedTlsSslProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#decrypt_categories PolicyObjectUnifiedTlsSslProfile#decrypt_categories}
  */
  readonly decryptCategories: string[];
  /**
  * , Attribute conditional on `reputation` being equal to `true`
  *   - Choices: `high-risk`, `low-risk`, `moderate-risk`, `suspicious`, `trustworthy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#decrypt_threshold PolicyObjectUnifiedTlsSslProfile#decrypt_threshold}
  */
  readonly decryptThreshold?: string;
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#description PolicyObjectUnifiedTlsSslProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#fail_decrypt PolicyObjectUnifiedTlsSslProfile#fail_decrypt}
  */
  readonly failDecrypt: boolean | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#feature_profile_id PolicyObjectUnifiedTlsSslProfile#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#name PolicyObjectUnifiedTlsSslProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#no_decrypt_categories PolicyObjectUnifiedTlsSslProfile#no_decrypt_categories}
  */
  readonly noDecryptCategories: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#pass_through_categories PolicyObjectUnifiedTlsSslProfile#pass_through_categories}
  */
  readonly passThroughCategories: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#reputation PolicyObjectUnifiedTlsSslProfile#reputation}
  */
  readonly reputation: boolean | cdktf.IResolvable;
  /**
  * , Attribute conditional on `reputation` being equal to `true`
  *   - Choices: `high-risk`, `low-risk`, `moderate-risk`, `suspicious`, `trustworthy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#threshold_categories PolicyObjectUnifiedTlsSslProfile#threshold_categories}
  */
  readonly thresholdCategories?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#url_allow_list_id PolicyObjectUnifiedTlsSslProfile#url_allow_list_id}
  */
  readonly urlAllowListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#url_block_list_id PolicyObjectUnifiedTlsSslProfile#url_block_list_id}
  */
  readonly urlBlockListId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile sdwan_policy_object_unified_tls_ssl_profile}
*/
export class PolicyObjectUnifiedTlsSslProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_unified_tls_ssl_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectUnifiedTlsSslProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectUnifiedTlsSslProfile to import
  * @param importFromId The id of the existing PolicyObjectUnifiedTlsSslProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectUnifiedTlsSslProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_unified_tls_ssl_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_profile sdwan_policy_object_unified_tls_ssl_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectUnifiedTlsSslProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectUnifiedTlsSslProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_unified_tls_ssl_profile',
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
    this._decryptCategories = config.decryptCategories;
    this._decryptThreshold = config.decryptThreshold;
    this._description = config.description;
    this._failDecrypt = config.failDecrypt;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._noDecryptCategories = config.noDecryptCategories;
    this._passThroughCategories = config.passThroughCategories;
    this._reputation = config.reputation;
    this._thresholdCategories = config.thresholdCategories;
    this._urlAllowListId = config.urlAllowListId;
    this._urlBlockListId = config.urlBlockListId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // decrypt_categories - computed: false, optional: false, required: true
  private _decryptCategories?: string[]; 
  public get decryptCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('decrypt_categories'));
  }
  public set decryptCategories(value: string[]) {
    this._decryptCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptCategoriesInput() {
    return this._decryptCategories;
  }

  // decrypt_threshold - computed: false, optional: true, required: false
  private _decryptThreshold?: string; 
  public get decryptThreshold() {
    return this.getStringAttribute('decrypt_threshold');
  }
  public set decryptThreshold(value: string) {
    this._decryptThreshold = value;
  }
  public resetDecryptThreshold() {
    this._decryptThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptThresholdInput() {
    return this._decryptThreshold;
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

  // fail_decrypt - computed: false, optional: false, required: true
  private _failDecrypt?: boolean | cdktf.IResolvable; 
  public get failDecrypt() {
    return this.getBooleanAttribute('fail_decrypt');
  }
  public set failDecrypt(value: boolean | cdktf.IResolvable) {
    this._failDecrypt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failDecryptInput() {
    return this._failDecrypt;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // no_decrypt_categories - computed: false, optional: false, required: true
  private _noDecryptCategories?: string[]; 
  public get noDecryptCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('no_decrypt_categories'));
  }
  public set noDecryptCategories(value: string[]) {
    this._noDecryptCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noDecryptCategoriesInput() {
    return this._noDecryptCategories;
  }

  // pass_through_categories - computed: false, optional: false, required: true
  private _passThroughCategories?: string[]; 
  public get passThroughCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('pass_through_categories'));
  }
  public set passThroughCategories(value: string[]) {
    this._passThroughCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughCategoriesInput() {
    return this._passThroughCategories;
  }

  // reputation - computed: false, optional: false, required: true
  private _reputation?: boolean | cdktf.IResolvable; 
  public get reputation() {
    return this.getBooleanAttribute('reputation');
  }
  public set reputation(value: boolean | cdktf.IResolvable) {
    this._reputation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationInput() {
    return this._reputation;
  }

  // threshold_categories - computed: false, optional: true, required: false
  private _thresholdCategories?: string; 
  public get thresholdCategories() {
    return this.getStringAttribute('threshold_categories');
  }
  public set thresholdCategories(value: string) {
    this._thresholdCategories = value;
  }
  public resetThresholdCategories() {
    this._thresholdCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCategoriesInput() {
    return this._thresholdCategories;
  }

  // url_allow_list_id - computed: false, optional: true, required: false
  private _urlAllowListId?: string; 
  public get urlAllowListId() {
    return this.getStringAttribute('url_allow_list_id');
  }
  public set urlAllowListId(value: string) {
    this._urlAllowListId = value;
  }
  public resetUrlAllowListId() {
    this._urlAllowListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlAllowListIdInput() {
    return this._urlAllowListId;
  }

  // url_block_list_id - computed: false, optional: true, required: false
  private _urlBlockListId?: string; 
  public get urlBlockListId() {
    return this.getStringAttribute('url_block_list_id');
  }
  public set urlBlockListId(value: string) {
    this._urlBlockListId = value;
  }
  public resetUrlBlockListId() {
    this._urlBlockListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlBlockListIdInput() {
    return this._urlBlockListId;
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
      decrypt_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._decryptCategories),
      decrypt_threshold: cdktf.stringToTerraform(this._decryptThreshold),
      description: cdktf.stringToTerraform(this._description),
      fail_decrypt: cdktf.booleanToTerraform(this._failDecrypt),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      no_decrypt_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noDecryptCategories),
      pass_through_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passThroughCategories),
      reputation: cdktf.booleanToTerraform(this._reputation),
      threshold_categories: cdktf.stringToTerraform(this._thresholdCategories),
      url_allow_list_id: cdktf.stringToTerraform(this._urlAllowListId),
      url_block_list_id: cdktf.stringToTerraform(this._urlBlockListId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      decrypt_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._decryptCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      decrypt_threshold: {
        value: cdktf.stringToHclTerraform(this._decryptThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_decrypt: {
        value: cdktf.booleanToHclTerraform(this._failDecrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_decrypt_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noDecryptCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pass_through_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passThroughCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      reputation: {
        value: cdktf.booleanToHclTerraform(this._reputation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      threshold_categories: {
        value: cdktf.stringToHclTerraform(this._thresholdCategories),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_allow_list_id: {
        value: cdktf.stringToHclTerraform(this._urlAllowListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_block_list_id: {
        value: cdktf.stringToHclTerraform(this._urlBlockListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
