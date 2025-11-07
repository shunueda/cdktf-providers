// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_intrusion_prevention
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectUnifiedIntrusionPreventionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Can be one of the enum value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_intrusion_prevention#custom_signature PolicyObjectUnifiedIntrusionPrevention#custom_signature}
  */
  readonly customSignature?: boolean | cdktf.IResolvable;
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_intrusion_prevention#description PolicyObjectUnifiedIntrusionPrevention#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_intrusion_prevention#feature_profile_id PolicyObjectUnifiedIntrusionPrevention#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Can be one of the enum value
  *   - Choices: `detection`, `protection`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_intrusion_prevention#inspection_mode PolicyObjectUnifiedIntrusionPrevention#inspection_mode}
  */
  readonly inspectionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_intrusion_prevention#ips_signature_allow_list_id PolicyObjectUnifiedIntrusionPrevention#ips_signature_allow_list_id}
  */
  readonly ipsSignatureAllowListId?: string;
  /**
  * Can be one of the enum value
  *   - Choices: `emergency`, `alert`, `critical`, `error`, `warning`, `notice`, `info`, `debug`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_intrusion_prevention#log_level PolicyObjectUnifiedIntrusionPrevention#log_level}
  */
  readonly logLevel: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_intrusion_prevention#name PolicyObjectUnifiedIntrusionPrevention#name}
  */
  readonly name: string;
  /**
  * Can be one of the enum value
  *   - Choices: `balanced`, `connectivity`, `security`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_intrusion_prevention#signature_set PolicyObjectUnifiedIntrusionPrevention#signature_set}
  */
  readonly signatureSet: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_intrusion_prevention sdwan_policy_object_unified_intrusion_prevention}
*/
export class PolicyObjectUnifiedIntrusionPrevention extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_unified_intrusion_prevention";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectUnifiedIntrusionPrevention resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectUnifiedIntrusionPrevention to import
  * @param importFromId The id of the existing PolicyObjectUnifiedIntrusionPrevention that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_intrusion_prevention#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectUnifiedIntrusionPrevention to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_unified_intrusion_prevention", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_intrusion_prevention sdwan_policy_object_unified_intrusion_prevention} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectUnifiedIntrusionPreventionConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectUnifiedIntrusionPreventionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_unified_intrusion_prevention',
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
    this._customSignature = config.customSignature;
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._inspectionMode = config.inspectionMode;
    this._ipsSignatureAllowListId = config.ipsSignatureAllowListId;
    this._logLevel = config.logLevel;
    this._name = config.name;
    this._signatureSet = config.signatureSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_signature - computed: false, optional: true, required: false
  private _customSignature?: boolean | cdktf.IResolvable; 
  public get customSignature() {
    return this.getBooleanAttribute('custom_signature');
  }
  public set customSignature(value: boolean | cdktf.IResolvable) {
    this._customSignature = value;
  }
  public resetCustomSignature() {
    this._customSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSignatureInput() {
    return this._customSignature;
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

  // inspection_mode - computed: false, optional: false, required: true
  private _inspectionMode?: string; 
  public get inspectionMode() {
    return this.getStringAttribute('inspection_mode');
  }
  public set inspectionMode(value: string) {
    this._inspectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionModeInput() {
    return this._inspectionMode;
  }

  // ips_signature_allow_list_id - computed: false, optional: true, required: false
  private _ipsSignatureAllowListId?: string; 
  public get ipsSignatureAllowListId() {
    return this.getStringAttribute('ips_signature_allow_list_id');
  }
  public set ipsSignatureAllowListId(value: string) {
    this._ipsSignatureAllowListId = value;
  }
  public resetIpsSignatureAllowListId() {
    this._ipsSignatureAllowListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSignatureAllowListIdInput() {
    return this._ipsSignatureAllowListId;
  }

  // log_level - computed: false, optional: false, required: true
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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

  // signature_set - computed: false, optional: false, required: true
  private _signatureSet?: string; 
  public get signatureSet() {
    return this.getStringAttribute('signature_set');
  }
  public set signatureSet(value: string) {
    this._signatureSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureSetInput() {
    return this._signatureSet;
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
      custom_signature: cdktf.booleanToTerraform(this._customSignature),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      ips_signature_allow_list_id: cdktf.stringToTerraform(this._ipsSignatureAllowListId),
      log_level: cdktf.stringToTerraform(this._logLevel),
      name: cdktf.stringToTerraform(this._name),
      signature_set: cdktf.stringToTerraform(this._signatureSet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_signature: {
        value: cdktf.booleanToHclTerraform(this._customSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      inspection_mode: {
        value: cdktf.stringToHclTerraform(this._inspectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_signature_allow_list_id: {
        value: cdktf.stringToHclTerraform(this._ipsSignatureAllowListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
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
      signature_set: {
        value: cdktf.stringToHclTerraform(this._signatureSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
