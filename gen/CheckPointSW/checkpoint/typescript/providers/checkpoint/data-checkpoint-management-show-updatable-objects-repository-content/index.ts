// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_updatable_objects_repository_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementShowUpdatableObjectsRepositoryContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Return results matching the specified filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_updatable_objects_repository_content#filter DataCheckpointManagementShowUpdatableObjectsRepositoryContent#filter}
  */
  readonly filter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_updatable_objects_repository_content#id DataCheckpointManagementShowUpdatableObjectsRepositoryContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximal number of returned results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_updatable_objects_repository_content#limit DataCheckpointManagementShowUpdatableObjectsRepositoryContent#limit}
  */
  readonly limit?: number;
  /**
  * Number of the results to initially skip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_updatable_objects_repository_content#offset DataCheckpointManagementShowUpdatableObjectsRepositoryContent#offset}
  */
  readonly offset?: number;
  /**
  * The object's unique identifier in the Updatable Objects repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_updatable_objects_repository_content#uid_in_updatable_objects_repository DataCheckpointManagementShowUpdatableObjectsRepositoryContent#uid_in_updatable_objects_repository}
  */
  readonly uidInUpdatableObjectsRepository?: string;
  /**
  * order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_updatable_objects_repository_content#order DataCheckpointManagementShowUpdatableObjectsRepositoryContent#order}
  */
  readonly order?: DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrder[] | cdktf.IResolvable;
}
export interface DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsUpdatableObject {
}

export function dataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsUpdatableObjectToTerraform(struct?: DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsUpdatableObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsUpdatableObjectToHclTerraform(struct?: DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsUpdatableObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsUpdatableObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsUpdatableObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsUpdatableObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsUpdatableObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsUpdatableObjectOutputReference {
    return new DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsUpdatableObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjects {
}

export function dataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsToTerraform(struct?: DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsToHclTerraform(struct?: DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // name_in_updatable_objects_repository - computed: true, optional: false, required: false
  public get nameInUpdatableObjectsRepository() {
    return this.getStringAttribute('name_in_updatable_objects_repository');
  }

  // uid_in_updatable_objects_repository - computed: true, optional: false, required: false
  public get uidInUpdatableObjectsRepository() {
    return this.getStringAttribute('uid_in_updatable_objects_repository');
  }

  // updatable_object - computed: true, optional: false, required: false
  private _updatableObject = new DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsUpdatableObjectList(this, "updatable_object", false);
  public get updatableObject() {
    return this._updatableObject;
  }
}

export class DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsOutputReference {
    return new DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrder {
  /**
  * Sorts results by the given field in ascending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_updatable_objects_repository_content#asc DataCheckpointManagementShowUpdatableObjectsRepositoryContent#asc}
  */
  readonly asc?: string;
  /**
  * Sorts results by the given field in descending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_updatable_objects_repository_content#desc DataCheckpointManagementShowUpdatableObjectsRepositoryContent#desc}
  */
  readonly desc?: string;
}

export function dataCheckpointManagementShowUpdatableObjectsRepositoryContentOrderToTerraform(struct?: DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asc: cdktf.stringToTerraform(struct!.asc),
    desc: cdktf.stringToTerraform(struct!.desc),
  }
}


export function dataCheckpointManagementShowUpdatableObjectsRepositoryContentOrderToHclTerraform(struct?: DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asc: {
      value: cdktf.stringToHclTerraform(struct!.asc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desc: {
      value: cdktf.stringToHclTerraform(struct!.desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asc !== undefined) {
      hasAnyValues = true;
      internalValueResult.asc = this._asc;
    }
    if (this._desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asc = undefined;
      this._desc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asc = value.asc;
      this._desc = value.desc;
    }
  }

  // asc - computed: false, optional: true, required: false
  private _asc?: string; 
  public get asc() {
    return this.getStringAttribute('asc');
  }
  public set asc(value: string) {
    this._asc = value;
  }
  public resetAsc() {
    this._asc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ascInput() {
    return this._asc;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }
}

export class DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrderList extends cdktf.ComplexList {
  public internalValue? : DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrder[] | cdktf.IResolvable

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
  public get(index: number): DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrderOutputReference {
    return new DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_updatable_objects_repository_content checkpoint_management_show_updatable_objects_repository_content}
*/
export class DataCheckpointManagementShowUpdatableObjectsRepositoryContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_show_updatable_objects_repository_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementShowUpdatableObjectsRepositoryContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementShowUpdatableObjectsRepositoryContent to import
  * @param importFromId The id of the existing DataCheckpointManagementShowUpdatableObjectsRepositoryContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_updatable_objects_repository_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementShowUpdatableObjectsRepositoryContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_show_updatable_objects_repository_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_show_updatable_objects_repository_content checkpoint_management_show_updatable_objects_repository_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementShowUpdatableObjectsRepositoryContentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementShowUpdatableObjectsRepositoryContentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_show_updatable_objects_repository_content',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._id = config.id;
    this._limit = config.limit;
    this._offset = config.offset;
    this._uidInUpdatableObjectsRepository = config.uidInUpdatableObjectsRepository;
    this._order.internalValue = config.order;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: { [key: string]: string }; 
  public get filter() {
    return this.getStringMapAttribute('filter');
  }
  public set filter(value: { [key: string]: string }) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // objects - computed: true, optional: false, required: false
  private _objects = new DataCheckpointManagementShowUpdatableObjectsRepositoryContentObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // uid_in_updatable_objects_repository - computed: false, optional: true, required: false
  private _uidInUpdatableObjectsRepository?: string; 
  public get uidInUpdatableObjectsRepository() {
    return this.getStringAttribute('uid_in_updatable_objects_repository');
  }
  public set uidInUpdatableObjectsRepository(value: string) {
    this._uidInUpdatableObjectsRepository = value;
  }
  public resetUidInUpdatableObjectsRepository() {
    this._uidInUpdatableObjectsRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInUpdatableObjectsRepositoryInput() {
    return this._uidInUpdatableObjectsRepository;
  }

  // order - computed: false, optional: true, required: false
  private _order = new DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrderList(this, "order", false);
  public get order() {
    return this._order;
  }
  public putOrder(value: DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrder[] | cdktf.IResolvable) {
    this._order.internalValue = value;
  }
  public resetOrder() {
    this._order.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.hashMapper(cdktf.stringToTerraform)(this._filter),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      uid_in_updatable_objects_repository: cdktf.stringToTerraform(this._uidInUpdatableObjectsRepository),
      order: cdktf.listMapper(dataCheckpointManagementShowUpdatableObjectsRepositoryContentOrderToTerraform, true)(this._order.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filter),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uid_in_updatable_objects_repository: {
        value: cdktf.stringToHclTerraform(this._uidInUpdatableObjectsRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.listMapperHcl(dataCheckpointManagementShowUpdatableObjectsRepositoryContentOrderToHclTerraform, true)(this._order.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCheckpointManagementShowUpdatableObjectsRepositoryContentOrderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
