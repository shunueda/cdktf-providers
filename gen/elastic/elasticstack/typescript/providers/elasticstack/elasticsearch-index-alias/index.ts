// https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchIndexAliasAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The alias name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#name ElasticsearchIndexAliasA#name}
  */
  readonly name: string;
  /**
  * Set of read indices for the alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#read_indices ElasticsearchIndexAliasA#read_indices}
  */
  readonly readIndices?: ElasticsearchIndexAliasReadIndices[] | cdktf.IResolvable;
  /**
  * The write index for the alias. Only one write index is allowed per alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#write_index ElasticsearchIndexAliasA#write_index}
  */
  readonly writeIndex?: ElasticsearchIndexAliasWriteIndex;
}
export interface ElasticsearchIndexAliasReadIndices {
  /**
  * Query used to limit documents the alias can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#filter ElasticsearchIndexAliasA#filter}
  */
  readonly filter?: string;
  /**
  * Value used to route indexing operations to a specific shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#index_routing ElasticsearchIndexAliasA#index_routing}
  */
  readonly indexRouting?: string;
  /**
  * If true, the alias is hidden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#is_hidden ElasticsearchIndexAliasA#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * Name of the read index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#name ElasticsearchIndexAliasA#name}
  */
  readonly name: string;
  /**
  * Value used to route indexing and search operations to a specific shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#routing ElasticsearchIndexAliasA#routing}
  */
  readonly routing?: string;
  /**
  * Value used to route search operations to a specific shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#search_routing ElasticsearchIndexAliasA#search_routing}
  */
  readonly searchRouting?: string;
}

export function elasticsearchIndexAliasReadIndicesToTerraform(struct?: ElasticsearchIndexAliasReadIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    index_routing: cdktf.stringToTerraform(struct!.indexRouting),
    is_hidden: cdktf.booleanToTerraform(struct!.isHidden),
    name: cdktf.stringToTerraform(struct!.name),
    routing: cdktf.stringToTerraform(struct!.routing),
    search_routing: cdktf.stringToTerraform(struct!.searchRouting),
  }
}


export function elasticsearchIndexAliasReadIndicesToHclTerraform(struct?: ElasticsearchIndexAliasReadIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_routing: {
      value: cdktf.stringToHclTerraform(struct!.indexRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_hidden: {
      value: cdktf.booleanToHclTerraform(struct!.isHidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing: {
      value: cdktf.stringToHclTerraform(struct!.routing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_routing: {
      value: cdktf.stringToHclTerraform(struct!.searchRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexAliasReadIndicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ElasticsearchIndexAliasReadIndices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._indexRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexRouting = this._indexRouting;
    }
    if (this._isHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHidden = this._isHidden;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routing !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing;
    }
    if (this._searchRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchRouting = this._searchRouting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexAliasReadIndices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._indexRouting = undefined;
      this._isHidden = undefined;
      this._name = undefined;
      this._routing = undefined;
      this._searchRouting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._indexRouting = value.indexRouting;
      this._isHidden = value.isHidden;
      this._name = value.name;
      this._routing = value.routing;
      this._searchRouting = value.searchRouting;
    }
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

  // index_routing - computed: false, optional: true, required: false
  private _indexRouting?: string; 
  public get indexRouting() {
    return this.getStringAttribute('index_routing');
  }
  public set indexRouting(value: string) {
    this._indexRouting = value;
  }
  public resetIndexRouting() {
    this._indexRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRoutingInput() {
    return this._indexRouting;
  }

  // is_hidden - computed: true, optional: true, required: false
  private _isHidden?: boolean | cdktf.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktf.IResolvable) {
    this._isHidden = value;
  }
  public resetIsHidden() {
    this._isHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
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

  // routing - computed: false, optional: true, required: false
  private _routing?: string; 
  public get routing() {
    return this.getStringAttribute('routing');
  }
  public set routing(value: string) {
    this._routing = value;
  }
  public resetRouting() {
    this._routing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing;
  }

  // search_routing - computed: false, optional: true, required: false
  private _searchRouting?: string; 
  public get searchRouting() {
    return this.getStringAttribute('search_routing');
  }
  public set searchRouting(value: string) {
    this._searchRouting = value;
  }
  public resetSearchRouting() {
    this._searchRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchRoutingInput() {
    return this._searchRouting;
  }
}

export class ElasticsearchIndexAliasReadIndicesList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchIndexAliasReadIndices[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchIndexAliasReadIndicesOutputReference {
    return new ElasticsearchIndexAliasReadIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchIndexAliasWriteIndex {
  /**
  * Query used to limit documents the alias can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#filter ElasticsearchIndexAliasA#filter}
  */
  readonly filter?: string;
  /**
  * Value used to route indexing operations to a specific shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#index_routing ElasticsearchIndexAliasA#index_routing}
  */
  readonly indexRouting?: string;
  /**
  * If true, the alias is hidden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#is_hidden ElasticsearchIndexAliasA#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * Name of the write index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#name ElasticsearchIndexAliasA#name}
  */
  readonly name: string;
  /**
  * Value used to route indexing and search operations to a specific shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#routing ElasticsearchIndexAliasA#routing}
  */
  readonly routing?: string;
  /**
  * Value used to route search operations to a specific shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#search_routing ElasticsearchIndexAliasA#search_routing}
  */
  readonly searchRouting?: string;
}

export function elasticsearchIndexAliasWriteIndexToTerraform(struct?: ElasticsearchIndexAliasWriteIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    index_routing: cdktf.stringToTerraform(struct!.indexRouting),
    is_hidden: cdktf.booleanToTerraform(struct!.isHidden),
    name: cdktf.stringToTerraform(struct!.name),
    routing: cdktf.stringToTerraform(struct!.routing),
    search_routing: cdktf.stringToTerraform(struct!.searchRouting),
  }
}


export function elasticsearchIndexAliasWriteIndexToHclTerraform(struct?: ElasticsearchIndexAliasWriteIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_routing: {
      value: cdktf.stringToHclTerraform(struct!.indexRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_hidden: {
      value: cdktf.booleanToHclTerraform(struct!.isHidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing: {
      value: cdktf.stringToHclTerraform(struct!.routing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_routing: {
      value: cdktf.stringToHclTerraform(struct!.searchRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexAliasWriteIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchIndexAliasWriteIndex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._indexRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexRouting = this._indexRouting;
    }
    if (this._isHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHidden = this._isHidden;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routing !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing;
    }
    if (this._searchRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchRouting = this._searchRouting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexAliasWriteIndex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._indexRouting = undefined;
      this._isHidden = undefined;
      this._name = undefined;
      this._routing = undefined;
      this._searchRouting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._indexRouting = value.indexRouting;
      this._isHidden = value.isHidden;
      this._name = value.name;
      this._routing = value.routing;
      this._searchRouting = value.searchRouting;
    }
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

  // index_routing - computed: false, optional: true, required: false
  private _indexRouting?: string; 
  public get indexRouting() {
    return this.getStringAttribute('index_routing');
  }
  public set indexRouting(value: string) {
    this._indexRouting = value;
  }
  public resetIndexRouting() {
    this._indexRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRoutingInput() {
    return this._indexRouting;
  }

  // is_hidden - computed: true, optional: true, required: false
  private _isHidden?: boolean | cdktf.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktf.IResolvable) {
    this._isHidden = value;
  }
  public resetIsHidden() {
    this._isHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
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

  // routing - computed: false, optional: true, required: false
  private _routing?: string; 
  public get routing() {
    return this.getStringAttribute('routing');
  }
  public set routing(value: string) {
    this._routing = value;
  }
  public resetRouting() {
    this._routing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing;
  }

  // search_routing - computed: false, optional: true, required: false
  private _searchRouting?: string; 
  public get searchRouting() {
    return this.getStringAttribute('search_routing');
  }
  public set searchRouting(value: string) {
    this._searchRouting = value;
  }
  public resetSearchRouting() {
    this._searchRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchRoutingInput() {
    return this._searchRouting;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias elasticstack_elasticsearch_index_alias}
*/
export class ElasticsearchIndexAliasA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_index_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchIndexAliasA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchIndexAliasA to import
  * @param importFromId The id of the existing ElasticsearchIndexAliasA that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchIndexAliasA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_index_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_index_alias elasticstack_elasticsearch_index_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchIndexAliasAConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchIndexAliasAConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_index_alias',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.1',
        providerVersionConstraint: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._readIndices.internalValue = config.readIndices;
    this._writeIndex.internalValue = config.writeIndex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // read_indices - computed: false, optional: true, required: false
  private _readIndices = new ElasticsearchIndexAliasReadIndicesList(this, "read_indices", true);
  public get readIndices() {
    return this._readIndices;
  }
  public putReadIndices(value: ElasticsearchIndexAliasReadIndices[] | cdktf.IResolvable) {
    this._readIndices.internalValue = value;
  }
  public resetReadIndices() {
    this._readIndices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readIndicesInput() {
    return this._readIndices.internalValue;
  }

  // write_index - computed: false, optional: true, required: false
  private _writeIndex = new ElasticsearchIndexAliasWriteIndexOutputReference(this, "write_index");
  public get writeIndex() {
    return this._writeIndex;
  }
  public putWriteIndex(value: ElasticsearchIndexAliasWriteIndex) {
    this._writeIndex.internalValue = value;
  }
  public resetWriteIndex() {
    this._writeIndex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeIndexInput() {
    return this._writeIndex.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      read_indices: cdktf.listMapper(elasticsearchIndexAliasReadIndicesToTerraform, false)(this._readIndices.internalValue),
      write_index: elasticsearchIndexAliasWriteIndexToTerraform(this._writeIndex.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_indices: {
        value: cdktf.listMapperHcl(elasticsearchIndexAliasReadIndicesToHclTerraform, false)(this._readIndices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElasticsearchIndexAliasReadIndicesList",
      },
      write_index: {
        value: elasticsearchIndexAliasWriteIndexToHclTerraform(this._writeIndex.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticsearchIndexAliasWriteIndex",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
