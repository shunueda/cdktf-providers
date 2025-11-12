// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/aaep_to_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciAaepToDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/aaep_to_domain#annotation DataAciAaepToDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/aaep_to_domain#attachable_access_entity_profile_dn DataAciAaepToDomain#attachable_access_entity_profile_dn}
  */
  readonly attachableAccessEntityProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/aaep_to_domain#description DataAciAaepToDomain#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/aaep_to_domain#domain_dn DataAciAaepToDomain#domain_dn}
  */
  readonly domainDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/aaep_to_domain#id DataAciAaepToDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/aaep_to_domain aci_aaep_to_domain}
*/
export class DataAciAaepToDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_aaep_to_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciAaepToDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciAaepToDomain to import
  * @param importFromId The id of the existing DataAciAaepToDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/aaep_to_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciAaepToDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_aaep_to_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/aaep_to_domain aci_aaep_to_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciAaepToDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciAaepToDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_aaep_to_domain',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._attachableAccessEntityProfileDn = config.attachableAccessEntityProfileDn;
    this._description = config.description;
    this._domainDn = config.domainDn;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // attachable_access_entity_profile_dn - computed: false, optional: false, required: true
  private _attachableAccessEntityProfileDn?: string; 
  public get attachableAccessEntityProfileDn() {
    return this.getStringAttribute('attachable_access_entity_profile_dn');
  }
  public set attachableAccessEntityProfileDn(value: string) {
    this._attachableAccessEntityProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachableAccessEntityProfileDnInput() {
    return this._attachableAccessEntityProfileDn;
  }

  // description - computed: true, optional: true, required: false
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

  // domain_dn - computed: true, optional: true, required: false
  private _domainDn?: string; 
  public get domainDn() {
    return this.getStringAttribute('domain_dn');
  }
  public set domainDn(value: string) {
    this._domainDn = value;
  }
  public resetDomainDn() {
    this._domainDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainDnInput() {
    return this._domainDn;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      attachable_access_entity_profile_dn: cdktf.stringToTerraform(this._attachableAccessEntityProfileDn),
      description: cdktf.stringToTerraform(this._description),
      domain_dn: cdktf.stringToTerraform(this._domainDn),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachable_access_entity_profile_dn: {
        value: cdktf.stringToHclTerraform(this._attachableAccessEntityProfileDn),
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
      domain_dn: {
        value: cdktf.stringToHclTerraform(this._domainDn),
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
