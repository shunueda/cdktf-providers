// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalDbCompositeIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index#backend_name LocalDbCompositeIndex#backend_name}
  */
  readonly backendName: string;
  /**
  * The behavior that the server should exhibit when storing information from this index in the database cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index#cache_mode LocalDbCompositeIndex#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * A description for this Local DB Composite Index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index#description LocalDbCompositeIndex#description}
  */
  readonly description?: string;
  /**
  * An optional base DN pattern that identifies portions of the DIT in which entries to index may exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index#index_base_dn_pattern LocalDbCompositeIndex#index_base_dn_pattern}
  */
  readonly indexBaseDnPattern?: string;
  /**
  * The maximum number of entries that any single index key will be allowed to match before the server stops maintaining the ID set for that index key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index#index_entry_limit LocalDbCompositeIndex#index_entry_limit}
  */
  readonly indexEntryLimit?: number;
  /**
  * A filter pattern that identifies which entries to include in the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index#index_filter_pattern LocalDbCompositeIndex#index_filter_pattern}
  */
  readonly indexFilterPattern: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index#name LocalDbCompositeIndex#name}
  */
  readonly name: string;
  /**
  * Indicates whether the server should load the contents of this index into memory when the backend is being opened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index#prime_index LocalDbCompositeIndex#prime_index}
  */
  readonly primeIndex?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to only prime the internal nodes of the index database, rather than priming both internal and leaf nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index#prime_internal_nodes_only LocalDbCompositeIndex#prime_internal_nodes_only}
  */
  readonly primeInternalNodesOnly?: boolean | cdktf.IResolvable;
  /**
  * The type of Local DB Composite Index resource. Options are ['local-db-composite-index']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index#type LocalDbCompositeIndex#type}
  */
  readonly type?: string;
}
export interface LocalDbCompositeIndexRequiredActions {
}

export function localDbCompositeIndexRequiredActionsToTerraform(struct?: LocalDbCompositeIndexRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function localDbCompositeIndexRequiredActionsToHclTerraform(struct?: LocalDbCompositeIndexRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LocalDbCompositeIndexRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LocalDbCompositeIndexRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalDbCompositeIndexRequiredActions | undefined) {
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

export class LocalDbCompositeIndexRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): LocalDbCompositeIndexRequiredActionsOutputReference {
    return new LocalDbCompositeIndexRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index pingdirectory_local_db_composite_index}
*/
export class LocalDbCompositeIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_local_db_composite_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalDbCompositeIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalDbCompositeIndex to import
  * @param importFromId The id of the existing LocalDbCompositeIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalDbCompositeIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_local_db_composite_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/local_db_composite_index pingdirectory_local_db_composite_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalDbCompositeIndexConfig
  */
  public constructor(scope: Construct, id: string, config: LocalDbCompositeIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_local_db_composite_index',
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
    this._backendName = config.backendName;
    this._cacheMode = config.cacheMode;
    this._description = config.description;
    this._indexBaseDnPattern = config.indexBaseDnPattern;
    this._indexEntryLimit = config.indexEntryLimit;
    this._indexFilterPattern = config.indexFilterPattern;
    this._name = config.name;
    this._primeIndex = config.primeIndex;
    this._primeInternalNodesOnly = config.primeInternalNodesOnly;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_base_dn_pattern - computed: false, optional: true, required: false
  private _indexBaseDnPattern?: string; 
  public get indexBaseDnPattern() {
    return this.getStringAttribute('index_base_dn_pattern');
  }
  public set indexBaseDnPattern(value: string) {
    this._indexBaseDnPattern = value;
  }
  public resetIndexBaseDnPattern() {
    this._indexBaseDnPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexBaseDnPatternInput() {
    return this._indexBaseDnPattern;
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

  // index_filter_pattern - computed: false, optional: false, required: true
  private _indexFilterPattern?: string; 
  public get indexFilterPattern() {
    return this.getStringAttribute('index_filter_pattern');
  }
  public set indexFilterPattern(value: string) {
    this._indexFilterPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFilterPatternInput() {
    return this._indexFilterPattern;
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
  private _requiredActions = new LocalDbCompositeIndexRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
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
      backend_name: cdktf.stringToTerraform(this._backendName),
      cache_mode: cdktf.stringToTerraform(this._cacheMode),
      description: cdktf.stringToTerraform(this._description),
      index_base_dn_pattern: cdktf.stringToTerraform(this._indexBaseDnPattern),
      index_entry_limit: cdktf.numberToTerraform(this._indexEntryLimit),
      index_filter_pattern: cdktf.stringToTerraform(this._indexFilterPattern),
      name: cdktf.stringToTerraform(this._name),
      prime_index: cdktf.booleanToTerraform(this._primeIndex),
      prime_internal_nodes_only: cdktf.booleanToTerraform(this._primeInternalNodesOnly),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_base_dn_pattern: {
        value: cdktf.stringToHclTerraform(this._indexBaseDnPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_entry_limit: {
        value: cdktf.numberToHclTerraform(this._indexEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      index_filter_pattern: {
        value: cdktf.stringToHclTerraform(this._indexFilterPattern),
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
