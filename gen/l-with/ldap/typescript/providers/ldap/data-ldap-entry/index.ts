// https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLdapEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * list of attribute patterns to be encoded to base64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry#base64encode_attribute_patterns DataLdapEntry#base64encode_attribute_patterns}
  */
  readonly base64EncodeAttributePatterns?: string[];
  /**
  * list of attributes to be encoded to base64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry#base64encode_attributes DataLdapEntry#base64encode_attributes}
  */
  readonly base64EncodeAttributes?: string[];
  /**
  * DN of the LDAP entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry#dn DataLdapEntry#dn}
  */
  readonly dn?: string;
  /**
  * filter for selecting the LDAP entry, ignored if 'dn' is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry#filter DataLdapEntry#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry#id DataLdapEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * list of attribute patterns to ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry#ignore_attribute_patterns DataLdapEntry#ignore_attribute_patterns}
  */
  readonly ignoreAttributePatterns?: string[];
  /**
  * list of attributes to ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry#ignore_attributes DataLdapEntry#ignore_attributes}
  */
  readonly ignoreAttributes?: string[];
  /**
  * OU where LDAP entry will be searched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry#ou DataLdapEntry#ou}
  */
  readonly ou?: string;
  /**
  * list of attributes to which reading is restricted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry#restrict_attributes DataLdapEntry#restrict_attributes}
  */
  readonly restrictAttributes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry ldap_entry}
*/
export class DataLdapEntry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ldap_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLdapEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLdapEntry to import
  * @param importFromId The id of the existing DataLdapEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLdapEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/ldap/0.12.0/docs/data-sources/entry ldap_entry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLdapEntryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLdapEntryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ldap_entry',
      terraformGeneratorMetadata: {
        providerName: 'ldap',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._base64EncodeAttributePatterns = config.base64EncodeAttributePatterns;
    this._base64EncodeAttributes = config.base64EncodeAttributes;
    this._dn = config.dn;
    this._filter = config.filter;
    this._id = config.id;
    this._ignoreAttributePatterns = config.ignoreAttributePatterns;
    this._ignoreAttributes = config.ignoreAttributes;
    this._ou = config.ou;
    this._restrictAttributes = config.restrictAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64encode_attribute_patterns - computed: false, optional: true, required: false
  private _base64EncodeAttributePatterns?: string[]; 
  public get base64EncodeAttributePatterns() {
    return this.getListAttribute('base64encode_attribute_patterns');
  }
  public set base64EncodeAttributePatterns(value: string[]) {
    this._base64EncodeAttributePatterns = value;
  }
  public resetBase64EncodeAttributePatterns() {
    this._base64EncodeAttributePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodeAttributePatternsInput() {
    return this._base64EncodeAttributePatterns;
  }

  // base64encode_attributes - computed: false, optional: true, required: false
  private _base64EncodeAttributes?: string[]; 
  public get base64EncodeAttributes() {
    return this.getListAttribute('base64encode_attributes');
  }
  public set base64EncodeAttributes(value: string[]) {
    this._base64EncodeAttributes = value;
  }
  public resetBase64EncodeAttributes() {
    this._base64EncodeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodeAttributesInput() {
    return this._base64EncodeAttributes;
  }

  // data_json - computed: true, optional: false, required: false
  public get dataJson() {
    return this.getStringAttribute('data_json');
  }

  // dn - computed: false, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // ignore_attribute_patterns - computed: false, optional: true, required: false
  private _ignoreAttributePatterns?: string[]; 
  public get ignoreAttributePatterns() {
    return this.getListAttribute('ignore_attribute_patterns');
  }
  public set ignoreAttributePatterns(value: string[]) {
    this._ignoreAttributePatterns = value;
  }
  public resetIgnoreAttributePatterns() {
    this._ignoreAttributePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAttributePatternsInput() {
    return this._ignoreAttributePatterns;
  }

  // ignore_attributes - computed: false, optional: true, required: false
  private _ignoreAttributes?: string[]; 
  public get ignoreAttributes() {
    return this.getListAttribute('ignore_attributes');
  }
  public set ignoreAttributes(value: string[]) {
    this._ignoreAttributes = value;
  }
  public resetIgnoreAttributes() {
    this._ignoreAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAttributesInput() {
    return this._ignoreAttributes;
  }

  // ou - computed: false, optional: true, required: false
  private _ou?: string; 
  public get ou() {
    return this.getStringAttribute('ou');
  }
  public set ou(value: string) {
    this._ou = value;
  }
  public resetOu() {
    this._ou = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ouInput() {
    return this._ou;
  }

  // restrict_attributes - computed: false, optional: true, required: false
  private _restrictAttributes?: string[]; 
  public get restrictAttributes() {
    return this.getListAttribute('restrict_attributes');
  }
  public set restrictAttributes(value: string[]) {
    this._restrictAttributes = value;
  }
  public resetRestrictAttributes() {
    this._restrictAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAttributesInput() {
    return this._restrictAttributes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64encode_attribute_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._base64EncodeAttributePatterns),
      base64encode_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._base64EncodeAttributes),
      dn: cdktf.stringToTerraform(this._dn),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      ignore_attribute_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreAttributePatterns),
      ignore_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreAttributes),
      ou: cdktf.stringToTerraform(this._ou),
      restrict_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictAttributes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base64encode_attribute_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._base64EncodeAttributePatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      base64encode_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._base64EncodeAttributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      ignore_attribute_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreAttributePatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ignore_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreAttributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ou: {
        value: cdktf.stringToHclTerraform(this._ou),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restrictAttributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
