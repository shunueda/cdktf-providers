// https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/resources/entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * list of attribute patterns for base64 encoded attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/resources/entry#base64encode_attribute_patterns Entry#base64encode_attribute_patterns}
  */
  readonly base64EncodeAttributePatterns?: string[];
  /**
  * list of base64 encoded attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/resources/entry#base64encode_attributes Entry#base64encode_attributes}
  */
  readonly base64EncodeAttributes?: string[];
  /**
  * list of attributes with case-sensitive names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/resources/entry#case_sensitive_attribute_names Entry#case_sensitive_attribute_names}
  */
  readonly caseSensitiveAttributeNames?: string[];
  /**
  * JSON-encoded string with the values of the attributes of the entry (s. https://pkg.go.dev/github.com/go-ldap/ldap/v3#EntryAttribute)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/resources/entry#data_json Entry#data_json}
  */
  readonly dataJson: string;
  /**
  * DN of the LDAP entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/resources/entry#dn Entry#dn}
  */
  readonly dn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/resources/entry#id Entry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * list of attribute patterns to ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/resources/entry#ignore_attribute_patterns Entry#ignore_attribute_patterns}
  */
  readonly ignoreAttributePatterns?: string[];
  /**
  * list of attributes to ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/resources/entry#ignore_attributes Entry#ignore_attributes}
  */
  readonly ignoreAttributes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/resources/entry ldap_entry}
*/
export class Entry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ldap_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Entry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Entry to import
  * @param importFromId The id of the existing Entry that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/resources/entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Entry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/resources/entry ldap_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntryConfig
  */
  public constructor(scope: Construct, id: string, config: EntryConfig) {
    super(scope, id, {
      terraformResourceType: 'ldap_entry',
      terraformGeneratorMetadata: {
        providerName: 'ldap',
        providerVersion: '0.11.1',
        providerVersionConstraint: '0.11.1'
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
    this._caseSensitiveAttributeNames = config.caseSensitiveAttributeNames;
    this._dataJson = config.dataJson;
    this._dn = config.dn;
    this._id = config.id;
    this._ignoreAttributePatterns = config.ignoreAttributePatterns;
    this._ignoreAttributes = config.ignoreAttributes;
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

  // case_sensitive_attribute_names - computed: false, optional: true, required: false
  private _caseSensitiveAttributeNames?: string[]; 
  public get caseSensitiveAttributeNames() {
    return this.getListAttribute('case_sensitive_attribute_names');
  }
  public set caseSensitiveAttributeNames(value: string[]) {
    this._caseSensitiveAttributeNames = value;
  }
  public resetCaseSensitiveAttributeNames() {
    this._caseSensitiveAttributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveAttributeNamesInput() {
    return this._caseSensitiveAttributeNames;
  }

  // data_json - computed: false, optional: false, required: true
  private _dataJson?: string; 
  public get dataJson() {
    return this.getStringAttribute('data_json');
  }
  public set dataJson(value: string) {
    this._dataJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataJsonInput() {
    return this._dataJson;
  }

  // dn - computed: false, optional: false, required: true
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64encode_attribute_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._base64EncodeAttributePatterns),
      base64encode_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._base64EncodeAttributes),
      case_sensitive_attribute_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._caseSensitiveAttributeNames),
      data_json: cdktf.stringToTerraform(this._dataJson),
      dn: cdktf.stringToTerraform(this._dn),
      id: cdktf.stringToTerraform(this._id),
      ignore_attribute_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreAttributePatterns),
      ignore_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreAttributes),
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
      case_sensitive_attribute_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._caseSensitiveAttributeNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_json: {
        value: cdktf.stringToHclTerraform(this._dataJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
