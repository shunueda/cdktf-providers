// https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLdapEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * list of attribute patterns to be encoded to base64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries#base64encode_attribute_patterns DataLdapEntries#base64encode_attribute_patterns}
  */
  readonly base64EncodeAttributePatterns?: string[];
  /**
  * list of attributes to be encoded to base64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries#base64encode_attributes DataLdapEntries#base64encode_attributes}
  */
  readonly base64EncodeAttributes?: string[];
  /**
  * filter for selecting the LDAP entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries#filter DataLdapEntries#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries#id DataLdapEntries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * list of attribute patterns to ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries#ignore_attribute_patterns DataLdapEntries#ignore_attribute_patterns}
  */
  readonly ignoreAttributePatterns?: string[];
  /**
  * list of attributes to ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries#ignore_attributes DataLdapEntries#ignore_attributes}
  */
  readonly ignoreAttributes?: string[];
  /**
  * OU where LDAP entry will be searched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries#ou DataLdapEntries#ou}
  */
  readonly ou: string;
  /**
  * Desired page size for the search request. Use 0 to retrieve all results without pagination, or a value greater than 0 to enable paginated queries. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries#paging_size DataLdapEntries#paging_size}
  */
  readonly pagingSize?: number;
  /**
  * list of attributes to which reading from the LDAP server is restricted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries#restrict_attributes DataLdapEntries#restrict_attributes}
  */
  readonly restrictAttributes?: string[];
}
export interface DataLdapEntriesEntries {
}

export function dataLdapEntriesEntriesToTerraform(struct?: DataLdapEntriesEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLdapEntriesEntriesToHclTerraform(struct?: DataLdapEntriesEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLdapEntriesEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLdapEntriesEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLdapEntriesEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_json - computed: true, optional: false, required: false
  public get dataJson() {
    return this.getStringAttribute('data_json');
  }

  // dn - computed: true, optional: false, required: false
  public get dn() {
    return this.getStringAttribute('dn');
  }
}

export class DataLdapEntriesEntriesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLdapEntriesEntriesOutputReference {
    return new DataLdapEntriesEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries ldap_entries}
*/
export class DataLdapEntries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ldap_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLdapEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLdapEntries to import
  * @param importFromId The id of the existing DataLdapEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLdapEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs/data-sources/entries ldap_entries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLdapEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataLdapEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'ldap_entries',
      terraformGeneratorMetadata: {
        providerName: 'ldap',
        providerVersion: '0.11.1'
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
    this._filter = config.filter;
    this._id = config.id;
    this._ignoreAttributePatterns = config.ignoreAttributePatterns;
    this._ignoreAttributes = config.ignoreAttributes;
    this._ou = config.ou;
    this._pagingSize = config.pagingSize;
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

  // entries - computed: true, optional: false, required: false
  private _entries = new DataLdapEntriesEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
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

  // ou - computed: false, optional: false, required: true
  private _ou?: string; 
  public get ou() {
    return this.getStringAttribute('ou');
  }
  public set ou(value: string) {
    this._ou = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ouInput() {
    return this._ou;
  }

  // paging_size - computed: false, optional: true, required: false
  private _pagingSize?: number; 
  public get pagingSize() {
    return this.getNumberAttribute('paging_size');
  }
  public set pagingSize(value: number) {
    this._pagingSize = value;
  }
  public resetPagingSize() {
    this._pagingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingSizeInput() {
    return this._pagingSize;
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
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      ignore_attribute_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreAttributePatterns),
      ignore_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreAttributes),
      ou: cdktf.stringToTerraform(this._ou),
      paging_size: cdktf.numberToTerraform(this._pagingSize),
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
      paging_size: {
        value: cdktf.numberToHclTerraform(this._pagingSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
