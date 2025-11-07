// https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/data-sources/end_entity_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEjbcaEndEntityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the end entity profile to return data for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/data-sources/end_entity_profile#end_entity_profile_name DataEjbcaEndEntityProfile#end_entity_profile_name}
  */
  readonly endEntityProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/data-sources/end_entity_profile ejbca_end_entity_profile}
*/
export class DataEjbcaEndEntityProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ejbca_end_entity_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEjbcaEndEntityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEjbcaEndEntityProfile to import
  * @param importFromId The id of the existing DataEjbcaEndEntityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/data-sources/end_entity_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEjbcaEndEntityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ejbca_end_entity_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/data-sources/end_entity_profile ejbca_end_entity_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEjbcaEndEntityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataEjbcaEndEntityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'ejbca_end_entity_profile',
      terraformGeneratorMetadata: {
        providerName: 'ejbca',
        providerVersion: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endEntityProfileName = config.endEntityProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_cas - computed: true, optional: false, required: false
  public get availableCas() {
    return cdktf.Fn.tolist(this.getListAttribute('available_cas'));
  }

  // available_certificate_profiles - computed: true, optional: false, required: false
  public get availableCertificateProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('available_certificate_profiles'));
  }

  // end_entity_profile_name - computed: false, optional: false, required: true
  private _endEntityProfileName?: string; 
  public get endEntityProfileName() {
    return this.getStringAttribute('end_entity_profile_name');
  }
  public set endEntityProfileName(value: string) {
    this._endEntityProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endEntityProfileNameInput() {
    return this._endEntityProfileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subject_alternative_name_fields - computed: true, optional: false, required: false
  public get subjectAlternativeNameFields() {
    return this.getListAttribute('subject_alternative_name_fields');
  }

  // subject_distinguished_name_fields - computed: true, optional: false, required: false
  public get subjectDistinguishedNameFields() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_distinguished_name_fields'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_entity_profile_name: cdktf.stringToTerraform(this._endEntityProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_entity_profile_name: {
        value: cdktf.stringToHclTerraform(this._endEntityProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
