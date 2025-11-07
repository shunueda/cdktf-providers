// https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#attribute_for_distinct Index#attribute_for_distinct}
  */
  readonly attributeForDistinct?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#attributes_for_faceting Index#attributes_for_faceting}
  */
  readonly attributesForFaceting?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#attributes_to_retrieve Index#attributes_to_retrieve}
  */
  readonly attributesToRetrieve?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#custom_ranking Index#custom_ranking}
  */
  readonly customRanking?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#distinct Index#distinct}
  */
  readonly distinct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#hits_per_page Index#hits_per_page}
  */
  readonly hitsPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#id Index#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#max_values_per_facet Index#max_values_per_facet}
  */
  readonly maxValuesPerFacet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#name Index#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#pagination_limited_to Index#pagination_limited_to}
  */
  readonly paginationLimitedTo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#ranking Index#ranking}
  */
  readonly ranking?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#replicas Index#replicas}
  */
  readonly replicas?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#searchable_attributes Index#searchable_attributes}
  */
  readonly searchableAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#sort_facet_values_by Index#sort_facet_values_by}
  */
  readonly sortFacetValuesBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#unretrievable_attributes Index#unretrievable_attributes}
  */
  readonly unretrievableAttributes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index algolia_index}
*/
export class Index extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "algolia_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Index resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Index to import
  * @param importFromId The id of the existing Index that should be imported. Refer to the {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Index to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "algolia_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/resources/index algolia_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexConfig
  */
  public constructor(scope: Construct, id: string, config: IndexConfig) {
    super(scope, id, {
      terraformResourceType: 'algolia_index',
      terraformGeneratorMetadata: {
        providerName: 'algolia',
        providerVersion: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeForDistinct = config.attributeForDistinct;
    this._attributesForFaceting = config.attributesForFaceting;
    this._attributesToRetrieve = config.attributesToRetrieve;
    this._customRanking = config.customRanking;
    this._distinct = config.distinct;
    this._hitsPerPage = config.hitsPerPage;
    this._id = config.id;
    this._maxValuesPerFacet = config.maxValuesPerFacet;
    this._name = config.name;
    this._paginationLimitedTo = config.paginationLimitedTo;
    this._ranking = config.ranking;
    this._replicas = config.replicas;
    this._searchableAttributes = config.searchableAttributes;
    this._sortFacetValuesBy = config.sortFacetValuesBy;
    this._unretrievableAttributes = config.unretrievableAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_for_distinct - computed: false, optional: true, required: false
  private _attributeForDistinct?: string; 
  public get attributeForDistinct() {
    return this.getStringAttribute('attribute_for_distinct');
  }
  public set attributeForDistinct(value: string) {
    this._attributeForDistinct = value;
  }
  public resetAttributeForDistinct() {
    this._attributeForDistinct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeForDistinctInput() {
    return this._attributeForDistinct;
  }

  // attributes_for_faceting - computed: true, optional: true, required: false
  private _attributesForFaceting?: string[]; 
  public get attributesForFaceting() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_for_faceting'));
  }
  public set attributesForFaceting(value: string[]) {
    this._attributesForFaceting = value;
  }
  public resetAttributesForFaceting() {
    this._attributesForFaceting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesForFacetingInput() {
    return this._attributesForFaceting;
  }

  // attributes_to_retrieve - computed: true, optional: true, required: false
  private _attributesToRetrieve?: string[]; 
  public get attributesToRetrieve() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_to_retrieve'));
  }
  public set attributesToRetrieve(value: string[]) {
    this._attributesToRetrieve = value;
  }
  public resetAttributesToRetrieve() {
    this._attributesToRetrieve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesToRetrieveInput() {
    return this._attributesToRetrieve;
  }

  // custom_ranking - computed: true, optional: true, required: false
  private _customRanking?: string[]; 
  public get customRanking() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_ranking'));
  }
  public set customRanking(value: string[]) {
    this._customRanking = value;
  }
  public resetCustomRanking() {
    this._customRanking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRankingInput() {
    return this._customRanking;
  }

  // distinct - computed: false, optional: true, required: false
  private _distinct?: number; 
  public get distinct() {
    return this.getNumberAttribute('distinct');
  }
  public set distinct(value: number) {
    this._distinct = value;
  }
  public resetDistinct() {
    this._distinct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinctInput() {
    return this._distinct;
  }

  // hits_per_page - computed: false, optional: true, required: false
  private _hitsPerPage?: number; 
  public get hitsPerPage() {
    return this.getNumberAttribute('hits_per_page');
  }
  public set hitsPerPage(value: number) {
    this._hitsPerPage = value;
  }
  public resetHitsPerPage() {
    this._hitsPerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsPerPageInput() {
    return this._hitsPerPage;
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

  // max_values_per_facet - computed: false, optional: true, required: false
  private _maxValuesPerFacet?: number; 
  public get maxValuesPerFacet() {
    return this.getNumberAttribute('max_values_per_facet');
  }
  public set maxValuesPerFacet(value: number) {
    this._maxValuesPerFacet = value;
  }
  public resetMaxValuesPerFacet() {
    this._maxValuesPerFacet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValuesPerFacetInput() {
    return this._maxValuesPerFacet;
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

  // pagination_limited_to - computed: false, optional: true, required: false
  private _paginationLimitedTo?: number; 
  public get paginationLimitedTo() {
    return this.getNumberAttribute('pagination_limited_to');
  }
  public set paginationLimitedTo(value: number) {
    this._paginationLimitedTo = value;
  }
  public resetPaginationLimitedTo() {
    this._paginationLimitedTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationLimitedToInput() {
    return this._paginationLimitedTo;
  }

  // ranking - computed: true, optional: true, required: false
  private _ranking?: string[]; 
  public get ranking() {
    return cdktf.Fn.tolist(this.getListAttribute('ranking'));
  }
  public set ranking(value: string[]) {
    this._ranking = value;
  }
  public resetRanking() {
    this._ranking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankingInput() {
    return this._ranking;
  }

  // replicas - computed: true, optional: true, required: false
  private _replicas?: string[]; 
  public get replicas() {
    return cdktf.Fn.tolist(this.getListAttribute('replicas'));
  }
  public set replicas(value: string[]) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // searchable_attributes - computed: true, optional: true, required: false
  private _searchableAttributes?: string[]; 
  public get searchableAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('searchable_attributes'));
  }
  public set searchableAttributes(value: string[]) {
    this._searchableAttributes = value;
  }
  public resetSearchableAttributes() {
    this._searchableAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchableAttributesInput() {
    return this._searchableAttributes;
  }

  // sort_facet_values_by - computed: false, optional: true, required: false
  private _sortFacetValuesBy?: string; 
  public get sortFacetValuesBy() {
    return this.getStringAttribute('sort_facet_values_by');
  }
  public set sortFacetValuesBy(value: string) {
    this._sortFacetValuesBy = value;
  }
  public resetSortFacetValuesBy() {
    this._sortFacetValuesBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortFacetValuesByInput() {
    return this._sortFacetValuesBy;
  }

  // unretrievable_attributes - computed: true, optional: true, required: false
  private _unretrievableAttributes?: string[]; 
  public get unretrievableAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('unretrievable_attributes'));
  }
  public set unretrievableAttributes(value: string[]) {
    this._unretrievableAttributes = value;
  }
  public resetUnretrievableAttributes() {
    this._unretrievableAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unretrievableAttributesInput() {
    return this._unretrievableAttributes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_for_distinct: cdktf.stringToTerraform(this._attributeForDistinct),
      attributes_for_faceting: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributesForFaceting),
      attributes_to_retrieve: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributesToRetrieve),
      custom_ranking: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customRanking),
      distinct: cdktf.numberToTerraform(this._distinct),
      hits_per_page: cdktf.numberToTerraform(this._hitsPerPage),
      id: cdktf.stringToTerraform(this._id),
      max_values_per_facet: cdktf.numberToTerraform(this._maxValuesPerFacet),
      name: cdktf.stringToTerraform(this._name),
      pagination_limited_to: cdktf.numberToTerraform(this._paginationLimitedTo),
      ranking: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ranking),
      replicas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replicas),
      searchable_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._searchableAttributes),
      sort_facet_values_by: cdktf.stringToTerraform(this._sortFacetValuesBy),
      unretrievable_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unretrievableAttributes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_for_distinct: {
        value: cdktf.stringToHclTerraform(this._attributeForDistinct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes_for_faceting: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributesForFaceting),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      attributes_to_retrieve: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributesToRetrieve),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_ranking: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customRanking),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      distinct: {
        value: cdktf.numberToHclTerraform(this._distinct),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hits_per_page: {
        value: cdktf.numberToHclTerraform(this._hitsPerPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_values_per_facet: {
        value: cdktf.numberToHclTerraform(this._maxValuesPerFacet),
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
      pagination_limited_to: {
        value: cdktf.numberToHclTerraform(this._paginationLimitedTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ranking: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ranking),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      replicas: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replicas),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      searchable_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._searchableAttributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sort_facet_values_by: {
        value: cdktf.stringToHclTerraform(this._sortFacetValuesBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unretrievable_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unretrievableAttributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
