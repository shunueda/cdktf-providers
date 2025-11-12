// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_advanced_inspection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectUnifiedAdvancedInspectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_advanced_inspection_profile#advanced_malware_protection_list_id PolicyObjectUnifiedAdvancedInspectionProfile#advanced_malware_protection_list_id}
  */
  readonly advancedMalwareProtectionListId?: string;
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_advanced_inspection_profile#description PolicyObjectUnifiedAdvancedInspectionProfile#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_advanced_inspection_profile#feature_profile_id PolicyObjectUnifiedAdvancedInspectionProfile#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_advanced_inspection_profile#intrusion_prevention_list_id PolicyObjectUnifiedAdvancedInspectionProfile#intrusion_prevention_list_id}
  */
  readonly intrusionPreventionListId?: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_advanced_inspection_profile#name PolicyObjectUnifiedAdvancedInspectionProfile#name}
  */
  readonly name: string;
  /**
  * 
  *   - Choices: `decrypt`, `neverDecrypt`, `skipDecrypt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_advanced_inspection_profile#tls_decryption_action PolicyObjectUnifiedAdvancedInspectionProfile#tls_decryption_action}
  */
  readonly tlsDecryptionAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_advanced_inspection_profile#tls_ssl_profile_list_id PolicyObjectUnifiedAdvancedInspectionProfile#tls_ssl_profile_list_id}
  */
  readonly tlsSslProfileListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_advanced_inspection_profile#url_filtering_list_id PolicyObjectUnifiedAdvancedInspectionProfile#url_filtering_list_id}
  */
  readonly urlFilteringListId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_advanced_inspection_profile sdwan_policy_object_unified_advanced_inspection_profile}
*/
export class PolicyObjectUnifiedAdvancedInspectionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_unified_advanced_inspection_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectUnifiedAdvancedInspectionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectUnifiedAdvancedInspectionProfile to import
  * @param importFromId The id of the existing PolicyObjectUnifiedAdvancedInspectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_advanced_inspection_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectUnifiedAdvancedInspectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_unified_advanced_inspection_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_advanced_inspection_profile sdwan_policy_object_unified_advanced_inspection_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectUnifiedAdvancedInspectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectUnifiedAdvancedInspectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_unified_advanced_inspection_profile',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedMalwareProtectionListId = config.advancedMalwareProtectionListId;
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._intrusionPreventionListId = config.intrusionPreventionListId;
    this._name = config.name;
    this._tlsDecryptionAction = config.tlsDecryptionAction;
    this._tlsSslProfileListId = config.tlsSslProfileListId;
    this._urlFilteringListId = config.urlFilteringListId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_malware_protection_list_id - computed: false, optional: true, required: false
  private _advancedMalwareProtectionListId?: string; 
  public get advancedMalwareProtectionListId() {
    return this.getStringAttribute('advanced_malware_protection_list_id');
  }
  public set advancedMalwareProtectionListId(value: string) {
    this._advancedMalwareProtectionListId = value;
  }
  public resetAdvancedMalwareProtectionListId() {
    this._advancedMalwareProtectionListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMalwareProtectionListIdInput() {
    return this._advancedMalwareProtectionListId;
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

  // intrusion_prevention_list_id - computed: false, optional: true, required: false
  private _intrusionPreventionListId?: string; 
  public get intrusionPreventionListId() {
    return this.getStringAttribute('intrusion_prevention_list_id');
  }
  public set intrusionPreventionListId(value: string) {
    this._intrusionPreventionListId = value;
  }
  public resetIntrusionPreventionListId() {
    this._intrusionPreventionListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intrusionPreventionListIdInput() {
    return this._intrusionPreventionListId;
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

  // tls_decryption_action - computed: false, optional: false, required: true
  private _tlsDecryptionAction?: string; 
  public get tlsDecryptionAction() {
    return this.getStringAttribute('tls_decryption_action');
  }
  public set tlsDecryptionAction(value: string) {
    this._tlsDecryptionAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsDecryptionActionInput() {
    return this._tlsDecryptionAction;
  }

  // tls_ssl_profile_list_id - computed: false, optional: true, required: false
  private _tlsSslProfileListId?: string; 
  public get tlsSslProfileListId() {
    return this.getStringAttribute('tls_ssl_profile_list_id');
  }
  public set tlsSslProfileListId(value: string) {
    this._tlsSslProfileListId = value;
  }
  public resetTlsSslProfileListId() {
    this._tlsSslProfileListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSslProfileListIdInput() {
    return this._tlsSslProfileListId;
  }

  // url_filtering_list_id - computed: false, optional: true, required: false
  private _urlFilteringListId?: string; 
  public get urlFilteringListId() {
    return this.getStringAttribute('url_filtering_list_id');
  }
  public set urlFilteringListId(value: string) {
    this._urlFilteringListId = value;
  }
  public resetUrlFilteringListId() {
    this._urlFilteringListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringListIdInput() {
    return this._urlFilteringListId;
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
      advanced_malware_protection_list_id: cdktf.stringToTerraform(this._advancedMalwareProtectionListId),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      intrusion_prevention_list_id: cdktf.stringToTerraform(this._intrusionPreventionListId),
      name: cdktf.stringToTerraform(this._name),
      tls_decryption_action: cdktf.stringToTerraform(this._tlsDecryptionAction),
      tls_ssl_profile_list_id: cdktf.stringToTerraform(this._tlsSslProfileListId),
      url_filtering_list_id: cdktf.stringToTerraform(this._urlFilteringListId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_malware_protection_list_id: {
        value: cdktf.stringToHclTerraform(this._advancedMalwareProtectionListId),
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
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intrusion_prevention_list_id: {
        value: cdktf.stringToHclTerraform(this._intrusionPreventionListId),
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
      tls_decryption_action: {
        value: cdktf.stringToHclTerraform(this._tlsDecryptionAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_ssl_profile_list_id: {
        value: cdktf.stringToHclTerraform(this._tlsSslProfileListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_filtering_list_id: {
        value: cdktf.stringToHclTerraform(this._urlFilteringListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
