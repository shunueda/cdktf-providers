// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/vtree
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexVtreeConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/vtree#filter DataPowerflexVtree#filter}
  */
  readonly filter?: DataPowerflexVtreeFilter;
}
export interface DataPowerflexVtreeVtreeDetailsLinks {
}

export function dataPowerflexVtreeVtreeDetailsLinksToTerraform(struct?: DataPowerflexVtreeVtreeDetailsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexVtreeVtreeDetailsLinksToHclTerraform(struct?: DataPowerflexVtreeVtreeDetailsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexVtreeVtreeDetailsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexVtreeVtreeDetailsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexVtreeVtreeDetailsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataPowerflexVtreeVtreeDetailsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexVtreeVtreeDetailsLinksOutputReference {
    return new DataPowerflexVtreeVtreeDetailsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexVtreeVtreeDetailsVtreeMigrationInfo {
}

export function dataPowerflexVtreeVtreeDetailsVtreeMigrationInfoToTerraform(struct?: DataPowerflexVtreeVtreeDetailsVtreeMigrationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexVtreeVtreeDetailsVtreeMigrationInfoToHclTerraform(struct?: DataPowerflexVtreeVtreeDetailsVtreeMigrationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexVtreeVtreeDetailsVtreeMigrationInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexVtreeVtreeDetailsVtreeMigrationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexVtreeVtreeDetailsVtreeMigrationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_storage_pool_id - computed: true, optional: false, required: false
  public get destinationStoragePoolId() {
    return this.getStringAttribute('destination_storage_pool_id');
  }

  // migration_pause_reason - computed: true, optional: false, required: false
  public get migrationPauseReason() {
    return this.getStringAttribute('migration_pause_reason');
  }

  // migration_queue_position - computed: true, optional: false, required: false
  public get migrationQueuePosition() {
    return this.getNumberAttribute('migration_queue_position');
  }

  // migration_status - computed: true, optional: false, required: false
  public get migrationStatus() {
    return this.getStringAttribute('migration_status');
  }

  // source_storage_pool_id - computed: true, optional: false, required: false
  public get sourceStoragePoolId() {
    return this.getStringAttribute('source_storage_pool_id');
  }

  // thickness_conversion_type - computed: true, optional: false, required: false
  public get thicknessConversionType() {
    return this.getStringAttribute('thickness_conversion_type');
  }
}
export interface DataPowerflexVtreeVtreeDetails {
}

export function dataPowerflexVtreeVtreeDetailsToTerraform(struct?: DataPowerflexVtreeVtreeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexVtreeVtreeDetailsToHclTerraform(struct?: DataPowerflexVtreeVtreeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexVtreeVtreeDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexVtreeVtreeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexVtreeVtreeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_method - computed: true, optional: false, required: false
  public get compressionMethod() {
    return this.getStringAttribute('compression_method');
  }

  // data_layout - computed: true, optional: false, required: false
  public get dataLayout() {
    return this.getStringAttribute('data_layout');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_deletion - computed: true, optional: false, required: false
  public get inDeletion() {
    return this.getBooleanAttribute('in_deletion');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataPowerflexVtreeVtreeDetailsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // root_volumes - computed: true, optional: false, required: false
  public get rootVolumes() {
    return cdktf.Fn.tolist(this.getListAttribute('root_volumes'));
  }

  // storage_pool_id - computed: true, optional: false, required: false
  public get storagePoolId() {
    return this.getStringAttribute('storage_pool_id');
  }

  // vtree_migration_info - computed: true, optional: false, required: false
  private _vtreeMigrationInfo = new DataPowerflexVtreeVtreeDetailsVtreeMigrationInfoOutputReference(this, "vtree_migration_info");
  public get vtreeMigrationInfo() {
    return this._vtreeMigrationInfo;
  }
}

export class DataPowerflexVtreeVtreeDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexVtreeVtreeDetailsOutputReference {
    return new DataPowerflexVtreeVtreeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexVtreeFilter {
  /**
  * List of compression_method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/vtree#compression_method DataPowerflexVtree#compression_method}
  */
  readonly compressionMethod?: string[];
  /**
  * List of data_layout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/vtree#data_layout DataPowerflexVtree#data_layout}
  */
  readonly dataLayout?: string[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/vtree#id DataPowerflexVtree#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * Value for in_deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/vtree#in_deletion DataPowerflexVtree#in_deletion}
  */
  readonly inDeletion?: boolean | cdktf.IResolvable;
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/vtree#name DataPowerflexVtree#name}
  */
  readonly name?: string[];
  /**
  * List of storage_pool_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/vtree#storage_pool_id DataPowerflexVtree#storage_pool_id}
  */
  readonly storagePoolId?: string[];
}

export function dataPowerflexVtreeFilterToTerraform(struct?: DataPowerflexVtreeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compressionMethod),
    data_layout: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataLayout),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    in_deletion: cdktf.booleanToTerraform(struct!.inDeletion),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    storage_pool_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storagePoolId),
  }
}


export function dataPowerflexVtreeFilterToHclTerraform(struct?: DataPowerflexVtreeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_method: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.compressionMethod),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_layout: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataLayout),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    in_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.inDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    storage_pool_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storagePoolId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexVtreeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexVtreeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMethod = this._compressionMethod;
    }
    if (this._dataLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLayout = this._dataLayout;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inDeletion = this._inDeletion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storagePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePoolId = this._storagePoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexVtreeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionMethod = undefined;
      this._dataLayout = undefined;
      this._id = undefined;
      this._inDeletion = undefined;
      this._name = undefined;
      this._storagePoolId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionMethod = value.compressionMethod;
      this._dataLayout = value.dataLayout;
      this._id = value.id;
      this._inDeletion = value.inDeletion;
      this._name = value.name;
      this._storagePoolId = value.storagePoolId;
    }
  }

  // compression_method - computed: false, optional: true, required: false
  private _compressionMethod?: string[]; 
  public get compressionMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('compression_method'));
  }
  public set compressionMethod(value: string[]) {
    this._compressionMethod = value;
  }
  public resetCompressionMethod() {
    this._compressionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMethodInput() {
    return this._compressionMethod;
  }

  // data_layout - computed: false, optional: true, required: false
  private _dataLayout?: string[]; 
  public get dataLayout() {
    return cdktf.Fn.tolist(this.getListAttribute('data_layout'));
  }
  public set dataLayout(value: string[]) {
    this._dataLayout = value;
  }
  public resetDataLayout() {
    this._dataLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLayoutInput() {
    return this._dataLayout;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // in_deletion - computed: false, optional: true, required: false
  private _inDeletion?: boolean | cdktf.IResolvable; 
  public get inDeletion() {
    return this.getBooleanAttribute('in_deletion');
  }
  public set inDeletion(value: boolean | cdktf.IResolvable) {
    this._inDeletion = value;
  }
  public resetInDeletion() {
    this._inDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inDeletionInput() {
    return this._inDeletion;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // storage_pool_id - computed: false, optional: true, required: false
  private _storagePoolId?: string[]; 
  public get storagePoolId() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_pool_id'));
  }
  public set storagePoolId(value: string[]) {
    this._storagePoolId = value;
  }
  public resetStoragePoolId() {
    this._storagePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolIdInput() {
    return this._storagePoolId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/vtree powerflex_vtree}
*/
export class DataPowerflexVtree extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_vtree";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexVtree resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexVtree to import
  * @param importFromId The id of the existing DataPowerflexVtree that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/vtree#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexVtree to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_vtree", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/vtree powerflex_vtree} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexVtreeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexVtreeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_vtree',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vtree_details - computed: true, optional: false, required: false
  private _vtreeDetails = new DataPowerflexVtreeVtreeDetailsList(this, "vtree_details", true);
  public get vtreeDetails() {
    return this._vtreeDetails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexVtreeFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexVtreeFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerflexVtreeFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexVtreeFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexVtreeFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
