// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdvancedInspectionProfilePolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Advanced malware protection ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition#advanced_malware_protection_id AdvancedInspectionProfilePolicyDefinition#advanced_malware_protection_id}
  */
  readonly advancedMalwareProtectionId?: string;
  /**
  * Advanced malware protection version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition#advanced_malware_protection_version AdvancedInspectionProfilePolicyDefinition#advanced_malware_protection_version}
  */
  readonly advancedMalwareProtectionVersion?: number;
  /**
  * The description of the policy definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition#description AdvancedInspectionProfilePolicyDefinition#description}
  */
  readonly description: string;
  /**
  * Intrusion prevention ID (unified mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition#intrusion_prevention_id AdvancedInspectionProfilePolicyDefinition#intrusion_prevention_id}
  */
  readonly intrusionPreventionId?: string;
  /**
  * Intrusion prevention version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition#intrusion_prevention_version AdvancedInspectionProfilePolicyDefinition#intrusion_prevention_version}
  */
  readonly intrusionPreventionVersion?: number;
  /**
  * The name of the policy definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition#name AdvancedInspectionProfilePolicyDefinition#name}
  */
  readonly name: string;
  /**
  * TLS Action
  *   - Choices: `decrypt`, `skipDecrypt`, `doNotDecrypt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition#tls_action AdvancedInspectionProfilePolicyDefinition#tls_action}
  */
  readonly tlsAction?: string;
  /**
  * TLS/SSL decryption ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition#tls_ssl_decryption_id AdvancedInspectionProfilePolicyDefinition#tls_ssl_decryption_id}
  */
  readonly tlsSslDecryptionId?: string;
  /**
  * TLS/SSL decryption version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition#tls_ssl_decryption_version AdvancedInspectionProfilePolicyDefinition#tls_ssl_decryption_version}
  */
  readonly tlsSslDecryptionVersion?: number;
  /**
  * URL filtering ID (unified mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition#url_filtering_id AdvancedInspectionProfilePolicyDefinition#url_filtering_id}
  */
  readonly urlFilteringId?: string;
  /**
  * URL filtering version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition#url_filtering_version AdvancedInspectionProfilePolicyDefinition#url_filtering_version}
  */
  readonly urlFilteringVersion?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition sdwan_advanced_inspection_profile_policy_definition}
*/
export class AdvancedInspectionProfilePolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_advanced_inspection_profile_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdvancedInspectionProfilePolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdvancedInspectionProfilePolicyDefinition to import
  * @param importFromId The id of the existing AdvancedInspectionProfilePolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdvancedInspectionProfilePolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_advanced_inspection_profile_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/advanced_inspection_profile_policy_definition sdwan_advanced_inspection_profile_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdvancedInspectionProfilePolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: AdvancedInspectionProfilePolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_advanced_inspection_profile_policy_definition',
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
    this._advancedMalwareProtectionId = config.advancedMalwareProtectionId;
    this._advancedMalwareProtectionVersion = config.advancedMalwareProtectionVersion;
    this._description = config.description;
    this._intrusionPreventionId = config.intrusionPreventionId;
    this._intrusionPreventionVersion = config.intrusionPreventionVersion;
    this._name = config.name;
    this._tlsAction = config.tlsAction;
    this._tlsSslDecryptionId = config.tlsSslDecryptionId;
    this._tlsSslDecryptionVersion = config.tlsSslDecryptionVersion;
    this._urlFilteringId = config.urlFilteringId;
    this._urlFilteringVersion = config.urlFilteringVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_malware_protection_id - computed: false, optional: true, required: false
  private _advancedMalwareProtectionId?: string; 
  public get advancedMalwareProtectionId() {
    return this.getStringAttribute('advanced_malware_protection_id');
  }
  public set advancedMalwareProtectionId(value: string) {
    this._advancedMalwareProtectionId = value;
  }
  public resetAdvancedMalwareProtectionId() {
    this._advancedMalwareProtectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMalwareProtectionIdInput() {
    return this._advancedMalwareProtectionId;
  }

  // advanced_malware_protection_version - computed: false, optional: true, required: false
  private _advancedMalwareProtectionVersion?: number; 
  public get advancedMalwareProtectionVersion() {
    return this.getNumberAttribute('advanced_malware_protection_version');
  }
  public set advancedMalwareProtectionVersion(value: number) {
    this._advancedMalwareProtectionVersion = value;
  }
  public resetAdvancedMalwareProtectionVersion() {
    this._advancedMalwareProtectionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMalwareProtectionVersionInput() {
    return this._advancedMalwareProtectionVersion;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intrusion_prevention_id - computed: false, optional: true, required: false
  private _intrusionPreventionId?: string; 
  public get intrusionPreventionId() {
    return this.getStringAttribute('intrusion_prevention_id');
  }
  public set intrusionPreventionId(value: string) {
    this._intrusionPreventionId = value;
  }
  public resetIntrusionPreventionId() {
    this._intrusionPreventionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intrusionPreventionIdInput() {
    return this._intrusionPreventionId;
  }

  // intrusion_prevention_version - computed: false, optional: true, required: false
  private _intrusionPreventionVersion?: number; 
  public get intrusionPreventionVersion() {
    return this.getNumberAttribute('intrusion_prevention_version');
  }
  public set intrusionPreventionVersion(value: number) {
    this._intrusionPreventionVersion = value;
  }
  public resetIntrusionPreventionVersion() {
    this._intrusionPreventionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intrusionPreventionVersionInput() {
    return this._intrusionPreventionVersion;
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

  // tls_action - computed: false, optional: true, required: false
  private _tlsAction?: string; 
  public get tlsAction() {
    return this.getStringAttribute('tls_action');
  }
  public set tlsAction(value: string) {
    this._tlsAction = value;
  }
  public resetTlsAction() {
    this._tlsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsActionInput() {
    return this._tlsAction;
  }

  // tls_ssl_decryption_id - computed: false, optional: true, required: false
  private _tlsSslDecryptionId?: string; 
  public get tlsSslDecryptionId() {
    return this.getStringAttribute('tls_ssl_decryption_id');
  }
  public set tlsSslDecryptionId(value: string) {
    this._tlsSslDecryptionId = value;
  }
  public resetTlsSslDecryptionId() {
    this._tlsSslDecryptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSslDecryptionIdInput() {
    return this._tlsSslDecryptionId;
  }

  // tls_ssl_decryption_version - computed: false, optional: true, required: false
  private _tlsSslDecryptionVersion?: number; 
  public get tlsSslDecryptionVersion() {
    return this.getNumberAttribute('tls_ssl_decryption_version');
  }
  public set tlsSslDecryptionVersion(value: number) {
    this._tlsSslDecryptionVersion = value;
  }
  public resetTlsSslDecryptionVersion() {
    this._tlsSslDecryptionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSslDecryptionVersionInput() {
    return this._tlsSslDecryptionVersion;
  }

  // url_filtering_id - computed: false, optional: true, required: false
  private _urlFilteringId?: string; 
  public get urlFilteringId() {
    return this.getStringAttribute('url_filtering_id');
  }
  public set urlFilteringId(value: string) {
    this._urlFilteringId = value;
  }
  public resetUrlFilteringId() {
    this._urlFilteringId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringIdInput() {
    return this._urlFilteringId;
  }

  // url_filtering_version - computed: false, optional: true, required: false
  private _urlFilteringVersion?: number; 
  public get urlFilteringVersion() {
    return this.getNumberAttribute('url_filtering_version');
  }
  public set urlFilteringVersion(value: number) {
    this._urlFilteringVersion = value;
  }
  public resetUrlFilteringVersion() {
    this._urlFilteringVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringVersionInput() {
    return this._urlFilteringVersion;
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
      advanced_malware_protection_id: cdktf.stringToTerraform(this._advancedMalwareProtectionId),
      advanced_malware_protection_version: cdktf.numberToTerraform(this._advancedMalwareProtectionVersion),
      description: cdktf.stringToTerraform(this._description),
      intrusion_prevention_id: cdktf.stringToTerraform(this._intrusionPreventionId),
      intrusion_prevention_version: cdktf.numberToTerraform(this._intrusionPreventionVersion),
      name: cdktf.stringToTerraform(this._name),
      tls_action: cdktf.stringToTerraform(this._tlsAction),
      tls_ssl_decryption_id: cdktf.stringToTerraform(this._tlsSslDecryptionId),
      tls_ssl_decryption_version: cdktf.numberToTerraform(this._tlsSslDecryptionVersion),
      url_filtering_id: cdktf.stringToTerraform(this._urlFilteringId),
      url_filtering_version: cdktf.numberToTerraform(this._urlFilteringVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_malware_protection_id: {
        value: cdktf.stringToHclTerraform(this._advancedMalwareProtectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_malware_protection_version: {
        value: cdktf.numberToHclTerraform(this._advancedMalwareProtectionVersion),
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
      intrusion_prevention_id: {
        value: cdktf.stringToHclTerraform(this._intrusionPreventionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intrusion_prevention_version: {
        value: cdktf.numberToHclTerraform(this._intrusionPreventionVersion),
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
      tls_action: {
        value: cdktf.stringToHclTerraform(this._tlsAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_ssl_decryption_id: {
        value: cdktf.stringToHclTerraform(this._tlsSslDecryptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_ssl_decryption_version: {
        value: cdktf.numberToHclTerraform(this._tlsSslDecryptionVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url_filtering_id: {
        value: cdktf.stringToHclTerraform(this._urlFilteringId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_filtering_version: {
        value: cdktf.numberToHclTerraform(this._urlFilteringVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
