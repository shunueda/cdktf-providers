// https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_usage_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SearchUsageGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_usage_group#coordinator_heap_memory_limit SearchUsageGroup#coordinator_heap_memory_limit}
  */
  readonly coordinatorHeapMemoryLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_usage_group#description SearchUsageGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_usage_group#enabled SearchUsageGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Unique ID to PATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_usage_group#id SearchUsageGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_usage_group#rules SearchUsageGroup#rules}
  */
  readonly rules: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_usage_group#users_count SearchUsageGroup#users_count}
  */
  readonly usersCount?: number;
}
export interface SearchUsageGroupItems {
}

export function searchUsageGroupItemsToTerraform(struct?: SearchUsageGroupItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function searchUsageGroupItemsToHclTerraform(struct?: SearchUsageGroupItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SearchUsageGroupItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchUsageGroupItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchUsageGroupItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coordinator_heap_memory_limit - computed: true, optional: false, required: false
  public get coordinatorHeapMemoryLimit() {
    return this.getNumberAttribute('coordinator_heap_memory_limit');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rules - computed: true, optional: false, required: false
  public get rules() {
    return this.getStringAttribute('rules');
  }

  // users_count - computed: true, optional: false, required: false
  public get usersCount() {
    return this.getNumberAttribute('users_count');
  }
}

export class SearchUsageGroupItemsList extends cdktf.ComplexList {

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
  public get(index: number): SearchUsageGroupItemsOutputReference {
    return new SearchUsageGroupItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_usage_group criblio_search_usage_group}
*/
export class SearchUsageGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_search_usage_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SearchUsageGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SearchUsageGroup to import
  * @param importFromId The id of the existing SearchUsageGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_usage_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SearchUsageGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_search_usage_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/search_usage_group criblio_search_usage_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SearchUsageGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SearchUsageGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_search_usage_group',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.72',
        providerVersionConstraint: '1.20.72'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._coordinatorHeapMemoryLimit = config.coordinatorHeapMemoryLimit;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._rules = config.rules;
    this._usersCount = config.usersCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // coordinator_heap_memory_limit - computed: true, optional: true, required: false
  private _coordinatorHeapMemoryLimit?: number; 
  public get coordinatorHeapMemoryLimit() {
    return this.getNumberAttribute('coordinator_heap_memory_limit');
  }
  public set coordinatorHeapMemoryLimit(value: number) {
    this._coordinatorHeapMemoryLimit = value;
  }
  public resetCoordinatorHeapMemoryLimit() {
    this._coordinatorHeapMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatorHeapMemoryLimitInput() {
    return this._coordinatorHeapMemoryLimit;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // items - computed: true, optional: false, required: false
  private _items = new SearchUsageGroupItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // rules - computed: false, optional: false, required: true
  private _rules?: string; 
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // users_count - computed: true, optional: true, required: false
  private _usersCount?: number; 
  public get usersCount() {
    return this.getNumberAttribute('users_count');
  }
  public set usersCount(value: number) {
    this._usersCount = value;
  }
  public resetUsersCount() {
    this._usersCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersCountInput() {
    return this._usersCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      coordinator_heap_memory_limit: cdktf.numberToTerraform(this._coordinatorHeapMemoryLimit),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      rules: cdktf.stringToTerraform(this._rules),
      users_count: cdktf.numberToTerraform(this._usersCount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      coordinator_heap_memory_limit: {
        value: cdktf.numberToHclTerraform(this._coordinatorHeapMemoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.stringToHclTerraform(this._rules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users_count: {
        value: cdktf.numberToHclTerraform(this._usersCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
