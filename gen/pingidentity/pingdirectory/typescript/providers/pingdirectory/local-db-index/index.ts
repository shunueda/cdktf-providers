// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalDbIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the name of the attribute for which the index is to be maintained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#attribute LocalDbIndex#attribute}
  */
  readonly attribute: string;
  /**
  * Name of the parent Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#backend_name LocalDbIndex#backend_name}
  */
  readonly backendName: string;
  /**
  * Specifies the cache mode that should be used when accessing the records in the database for this index. This controls how much database cache memory can be consumed by this index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#cache_mode LocalDbIndex#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * A search filter that may be used in conjunction with an equality component for the associated attribute type. If an equality index filter is defined, then an additional equality index will be maintained for the associated attribute, but only for entries which match the provided filter. Further, the index will be used only for searches containing an equality component with the associated attribute type ANDed with this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#equality_index_filter LocalDbIndex#equality_index_filter}
  */
  readonly equalityIndexFilter?: string[];
  /**
  * Specifies the maximum number of entries that are allowed to match a given index key before that particular index key is no longer maintained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#index_entry_limit LocalDbIndex#index_entry_limit}
  */
  readonly indexEntryLimit?: number;
  /**
  * Specifies the type(s) of indexing that should be performed for the associated attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#index_type LocalDbIndex#index_type}
  */
  readonly indexType: string[];
  /**
  * Indicates whether to maintain a separate equality index for the associated attribute without any filter, in addition to maintaining an index for each equality index filter that is defined. If this is false, then the attribute will not be indexed for equality by itself but only in conjunction with the defined equality index filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#maintain_equality_index_without_filter LocalDbIndex#maintain_equality_index_without_filter}
  */
  readonly maintainEqualityIndexWithoutFilter?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to continue to maintain a count of the number of matching entries for an index key even after that count exceeds the index entry limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#maintain_match_count_for_keys_exceeding_entry_limit LocalDbIndex#maintain_match_count_for_keys_exceeding_entry_limit}
  */
  readonly maintainMatchCountForKeysExceedingEntryLimit?: boolean | cdktf.IResolvable;
  /**
  * If this option is enabled and this index's backend is configured to prime indexes, then this index will be loaded at startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#prime_index LocalDbIndex#prime_index}
  */
  readonly primeIndex?: boolean | cdktf.IResolvable;
  /**
  * If this option is enabled and this index's backend is configured to prime indexes using the preload method, then only the internal database nodes (i.e., the database keys but not values) should be primed when the backend is initialized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#prime_internal_nodes_only LocalDbIndex#prime_internal_nodes_only}
  */
  readonly primeInternalNodesOnly?: boolean | cdktf.IResolvable;
  /**
  * Specifies, for substring indexes, the maximum number of entries that are allowed to match a given index key before that particular index key is no longer maintained. Setting a large limit can dramatically increase the database size on disk and have a big impact on server performance if the indexed attribute is modified frequently. When a very large limit is required, creating a dedicated composite index with an index-filter-pattern of (attr=*?*) will give the best balance between search and update performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#substring_index_entry_limit LocalDbIndex#substring_index_entry_limit}
  */
  readonly substringIndexEntryLimit?: number;
  /**
  * The length of substrings in a substring index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#substring_length LocalDbIndex#substring_length}
  */
  readonly substringLength?: number;
  /**
  * The type of Local DB Index resource. Options are ['local-db-index']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#type LocalDbIndex#type}
  */
  readonly type?: string;
}
export interface LocalDbIndexRequiredActions {
}

export function localDbIndexRequiredActionsToTerraform(struct?: LocalDbIndexRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function localDbIndexRequiredActionsToHclTerraform(struct?: LocalDbIndexRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LocalDbIndexRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LocalDbIndexRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalDbIndexRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class LocalDbIndexRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): LocalDbIndexRequiredActionsOutputReference {
    return new LocalDbIndexRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index pingdirectory_local_db_index}
*/
export class LocalDbIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_local_db_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalDbIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalDbIndex to import
  * @param importFromId The id of the existing LocalDbIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalDbIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_local_db_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_index pingdirectory_local_db_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalDbIndexConfig
  */
  public constructor(scope: Construct, id: string, config: LocalDbIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_local_db_index',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attribute = config.attribute;
    this._backendName = config.backendName;
    this._cacheMode = config.cacheMode;
    this._equalityIndexFilter = config.equalityIndexFilter;
    this._indexEntryLimit = config.indexEntryLimit;
    this._indexType = config.indexType;
    this._maintainEqualityIndexWithoutFilter = config.maintainEqualityIndexWithoutFilter;
    this._maintainMatchCountForKeysExceedingEntryLimit = config.maintainMatchCountForKeysExceedingEntryLimit;
    this._primeIndex = config.primeIndex;
    this._primeInternalNodesOnly = config.primeInternalNodesOnly;
    this._substringIndexEntryLimit = config.substringIndexEntryLimit;
    this._substringLength = config.substringLength;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // backend_name - computed: false, optional: false, required: true
  private _backendName?: string; 
  public get backendName() {
    return this.getStringAttribute('backend_name');
  }
  public set backendName(value: string) {
    this._backendName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendNameInput() {
    return this._backendName;
  }

  // cache_mode - computed: false, optional: true, required: false
  private _cacheMode?: string; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode;
  }

  // equality_index_filter - computed: true, optional: true, required: false
  private _equalityIndexFilter?: string[]; 
  public get equalityIndexFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('equality_index_filter'));
  }
  public set equalityIndexFilter(value: string[]) {
    this._equalityIndexFilter = value;
  }
  public resetEqualityIndexFilter() {
    this._equalityIndexFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalityIndexFilterInput() {
    return this._equalityIndexFilter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_entry_limit - computed: true, optional: true, required: false
  private _indexEntryLimit?: number; 
  public get indexEntryLimit() {
    return this.getNumberAttribute('index_entry_limit');
  }
  public set indexEntryLimit(value: number) {
    this._indexEntryLimit = value;
  }
  public resetIndexEntryLimit() {
    this._indexEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexEntryLimitInput() {
    return this._indexEntryLimit;
  }

  // index_type - computed: false, optional: false, required: true
  private _indexType?: string[]; 
  public get indexType() {
    return cdktf.Fn.tolist(this.getListAttribute('index_type'));
  }
  public set indexType(value: string[]) {
    this._indexType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexTypeInput() {
    return this._indexType;
  }

  // maintain_equality_index_without_filter - computed: true, optional: true, required: false
  private _maintainEqualityIndexWithoutFilter?: boolean | cdktf.IResolvable; 
  public get maintainEqualityIndexWithoutFilter() {
    return this.getBooleanAttribute('maintain_equality_index_without_filter');
  }
  public set maintainEqualityIndexWithoutFilter(value: boolean | cdktf.IResolvable) {
    this._maintainEqualityIndexWithoutFilter = value;
  }
  public resetMaintainEqualityIndexWithoutFilter() {
    this._maintainEqualityIndexWithoutFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainEqualityIndexWithoutFilterInput() {
    return this._maintainEqualityIndexWithoutFilter;
  }

  // maintain_match_count_for_keys_exceeding_entry_limit - computed: true, optional: true, required: false
  private _maintainMatchCountForKeysExceedingEntryLimit?: boolean | cdktf.IResolvable; 
  public get maintainMatchCountForKeysExceedingEntryLimit() {
    return this.getBooleanAttribute('maintain_match_count_for_keys_exceeding_entry_limit');
  }
  public set maintainMatchCountForKeysExceedingEntryLimit(value: boolean | cdktf.IResolvable) {
    this._maintainMatchCountForKeysExceedingEntryLimit = value;
  }
  public resetMaintainMatchCountForKeysExceedingEntryLimit() {
    this._maintainMatchCountForKeysExceedingEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainMatchCountForKeysExceedingEntryLimitInput() {
    return this._maintainMatchCountForKeysExceedingEntryLimit;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // prime_index - computed: true, optional: true, required: false
  private _primeIndex?: boolean | cdktf.IResolvable; 
  public get primeIndex() {
    return this.getBooleanAttribute('prime_index');
  }
  public set primeIndex(value: boolean | cdktf.IResolvable) {
    this._primeIndex = value;
  }
  public resetPrimeIndex() {
    this._primeIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primeIndexInput() {
    return this._primeIndex;
  }

  // prime_internal_nodes_only - computed: true, optional: true, required: false
  private _primeInternalNodesOnly?: boolean | cdktf.IResolvable; 
  public get primeInternalNodesOnly() {
    return this.getBooleanAttribute('prime_internal_nodes_only');
  }
  public set primeInternalNodesOnly(value: boolean | cdktf.IResolvable) {
    this._primeInternalNodesOnly = value;
  }
  public resetPrimeInternalNodesOnly() {
    this._primeInternalNodesOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primeInternalNodesOnlyInput() {
    return this._primeInternalNodesOnly;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new LocalDbIndexRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // substring_index_entry_limit - computed: false, optional: true, required: false
  private _substringIndexEntryLimit?: number; 
  public get substringIndexEntryLimit() {
    return this.getNumberAttribute('substring_index_entry_limit');
  }
  public set substringIndexEntryLimit(value: number) {
    this._substringIndexEntryLimit = value;
  }
  public resetSubstringIndexEntryLimit() {
    this._substringIndexEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substringIndexEntryLimitInput() {
    return this._substringIndexEntryLimit;
  }

  // substring_length - computed: true, optional: true, required: false
  private _substringLength?: number; 
  public get substringLength() {
    return this.getNumberAttribute('substring_length');
  }
  public set substringLength(value: number) {
    this._substringLength = value;
  }
  public resetSubstringLength() {
    this._substringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substringLengthInput() {
    return this._substringLength;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute: cdktf.stringToTerraform(this._attribute),
      backend_name: cdktf.stringToTerraform(this._backendName),
      cache_mode: cdktf.stringToTerraform(this._cacheMode),
      equality_index_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._equalityIndexFilter),
      index_entry_limit: cdktf.numberToTerraform(this._indexEntryLimit),
      index_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexType),
      maintain_equality_index_without_filter: cdktf.booleanToTerraform(this._maintainEqualityIndexWithoutFilter),
      maintain_match_count_for_keys_exceeding_entry_limit: cdktf.booleanToTerraform(this._maintainMatchCountForKeysExceedingEntryLimit),
      prime_index: cdktf.booleanToTerraform(this._primeIndex),
      prime_internal_nodes_only: cdktf.booleanToTerraform(this._primeInternalNodesOnly),
      substring_index_entry_limit: cdktf.numberToTerraform(this._substringIndexEntryLimit),
      substring_length: cdktf.numberToTerraform(this._substringLength),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute: {
        value: cdktf.stringToHclTerraform(this._attribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_name: {
        value: cdktf.stringToHclTerraform(this._backendName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_mode: {
        value: cdktf.stringToHclTerraform(this._cacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      equality_index_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._equalityIndexFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      index_entry_limit: {
        value: cdktf.numberToHclTerraform(this._indexEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      index_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indexType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      maintain_equality_index_without_filter: {
        value: cdktf.booleanToHclTerraform(this._maintainEqualityIndexWithoutFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maintain_match_count_for_keys_exceeding_entry_limit: {
        value: cdktf.booleanToHclTerraform(this._maintainMatchCountForKeysExceedingEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prime_index: {
        value: cdktf.booleanToHclTerraform(this._primeIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prime_internal_nodes_only: {
        value: cdktf.booleanToHclTerraform(this._primeInternalNodesOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      substring_index_entry_limit: {
        value: cdktf.numberToHclTerraform(this._substringIndexEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      substring_length: {
        value: cdktf.numberToHclTerraform(this._substringLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
