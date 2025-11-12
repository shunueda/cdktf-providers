// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/advanced_inspection_profile_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanAdvancedInspectionProfilePolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/advanced_inspection_profile_policy_definition#id DataSdwanAdvancedInspectionProfilePolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/advanced_inspection_profile_policy_definition sdwan_advanced_inspection_profile_policy_definition}
*/
export class DataSdwanAdvancedInspectionProfilePolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_advanced_inspection_profile_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanAdvancedInspectionProfilePolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanAdvancedInspectionProfilePolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanAdvancedInspectionProfilePolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/advanced_inspection_profile_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanAdvancedInspectionProfilePolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_advanced_inspection_profile_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/advanced_inspection_profile_policy_definition sdwan_advanced_inspection_profile_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanAdvancedInspectionProfilePolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanAdvancedInspectionProfilePolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_advanced_inspection_profile_policy_definition',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_malware_protection_id - computed: true, optional: false, required: false
  public get advancedMalwareProtectionId() {
    return this.getStringAttribute('advanced_malware_protection_id');
  }

  // advanced_malware_protection_version - computed: true, optional: false, required: false
  public get advancedMalwareProtectionVersion() {
    return this.getNumberAttribute('advanced_malware_protection_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // intrusion_prevention_id - computed: true, optional: false, required: false
  public get intrusionPreventionId() {
    return this.getStringAttribute('intrusion_prevention_id');
  }

  // intrusion_prevention_version - computed: true, optional: false, required: false
  public get intrusionPreventionVersion() {
    return this.getNumberAttribute('intrusion_prevention_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tls_action - computed: true, optional: false, required: false
  public get tlsAction() {
    return this.getStringAttribute('tls_action');
  }

  // tls_ssl_decryption_id - computed: true, optional: false, required: false
  public get tlsSslDecryptionId() {
    return this.getStringAttribute('tls_ssl_decryption_id');
  }

  // tls_ssl_decryption_version - computed: true, optional: false, required: false
  public get tlsSslDecryptionVersion() {
    return this.getNumberAttribute('tls_ssl_decryption_version');
  }

  // url_filtering_id - computed: true, optional: false, required: false
  public get urlFilteringId() {
    return this.getStringAttribute('url_filtering_id');
  }

  // url_filtering_version - computed: true, optional: false, required: false
  public get urlFilteringVersion() {
    return this.getNumberAttribute('url_filtering_version');
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
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
