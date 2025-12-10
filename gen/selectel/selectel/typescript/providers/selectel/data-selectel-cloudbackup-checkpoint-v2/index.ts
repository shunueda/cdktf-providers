// https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/cloudbackup_checkpoint_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSelectelCloudbackupCheckpointV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/cloudbackup_checkpoint_v2#id DataSelectelCloudbackupCheckpointV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/cloudbackup_checkpoint_v2#project_id DataSelectelCloudbackupCheckpointV2#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/cloudbackup_checkpoint_v2#region DataSelectelCloudbackupCheckpointV2#region}
  */
  readonly region: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/cloudbackup_checkpoint_v2#filter DataSelectelCloudbackupCheckpointV2#filter}
  */
  readonly filter?: DataSelectelCloudbackupCheckpointV2Filter;
}
export interface DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsResource {
}

export function dataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsResourceToTerraform(struct?: DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsResourceToHclTerraform(struct?: DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsResourceList extends cdktf.ComplexList {

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
  public get(index: number): DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsResourceOutputReference {
    return new DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItems {
}

export function dataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsToTerraform(struct?: DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsToHclTerraform(struct?: DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_created_at - computed: true, optional: false, required: false
  public get backupCreatedAt() {
    return this.getStringAttribute('backup_created_at');
  }

  // backup_id - computed: true, optional: false, required: false
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }

  // chain_id - computed: true, optional: false, required: false
  public get chainId() {
    return this.getStringAttribute('chain_id');
  }

  // checkpoint_id - computed: true, optional: false, required: false
  public get checkpointId() {
    return this.getStringAttribute('checkpoint_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_incremental - computed: true, optional: false, required: false
  public get isIncremental() {
    return this.getBooleanAttribute('is_incremental');
  }

  // resource - computed: true, optional: false, required: false
  private _resource = new DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsResourceList(this, "resource", false);
  public get resource() {
    return this._resource;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsOutputReference {
    return new DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSelectelCloudbackupCheckpointV2CheckpointsListStruct {
}

export function dataSelectelCloudbackupCheckpointV2CheckpointsListStructToTerraform(struct?: DataSelectelCloudbackupCheckpointV2CheckpointsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSelectelCloudbackupCheckpointV2CheckpointsListStructToHclTerraform(struct?: DataSelectelCloudbackupCheckpointV2CheckpointsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSelectelCloudbackupCheckpointV2CheckpointsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSelectelCloudbackupCheckpointV2CheckpointsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSelectelCloudbackupCheckpointV2CheckpointsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checkpoint_items - computed: true, optional: false, required: false
  private _checkpointItems = new DataSelectelCloudbackupCheckpointV2CheckpointsListCheckpointItemsList(this, "checkpoint_items", false);
  public get checkpointItems() {
    return this._checkpointItems;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataSelectelCloudbackupCheckpointV2CheckpointsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSelectelCloudbackupCheckpointV2CheckpointsListStructOutputReference {
    return new DataSelectelCloudbackupCheckpointV2CheckpointsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSelectelCloudbackupCheckpointV2Checkpoints {
}

export function dataSelectelCloudbackupCheckpointV2CheckpointsToTerraform(struct?: DataSelectelCloudbackupCheckpointV2Checkpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSelectelCloudbackupCheckpointV2CheckpointsToHclTerraform(struct?: DataSelectelCloudbackupCheckpointV2Checkpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSelectelCloudbackupCheckpointV2CheckpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSelectelCloudbackupCheckpointV2Checkpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSelectelCloudbackupCheckpointV2Checkpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // list - computed: true, optional: false, required: false
  private _list = new DataSelectelCloudbackupCheckpointV2CheckpointsListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class DataSelectelCloudbackupCheckpointV2CheckpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataSelectelCloudbackupCheckpointV2CheckpointsOutputReference {
    return new DataSelectelCloudbackupCheckpointV2CheckpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSelectelCloudbackupCheckpointV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/cloudbackup_checkpoint_v2#plan_name DataSelectelCloudbackupCheckpointV2#plan_name}
  */
  readonly planName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/cloudbackup_checkpoint_v2#volume_name DataSelectelCloudbackupCheckpointV2#volume_name}
  */
  readonly volumeName?: string;
}

export function dataSelectelCloudbackupCheckpointV2FilterToTerraform(struct?: DataSelectelCloudbackupCheckpointV2FilterOutputReference | DataSelectelCloudbackupCheckpointV2Filter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plan_name: cdktf.stringToTerraform(struct!.planName),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataSelectelCloudbackupCheckpointV2FilterToHclTerraform(struct?: DataSelectelCloudbackupCheckpointV2FilterOutputReference | DataSelectelCloudbackupCheckpointV2Filter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plan_name: {
      value: cdktf.stringToHclTerraform(struct!.planName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSelectelCloudbackupCheckpointV2FilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSelectelCloudbackupCheckpointV2Filter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._planName !== undefined) {
      hasAnyValues = true;
      internalValueResult.planName = this._planName;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSelectelCloudbackupCheckpointV2Filter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._planName = undefined;
      this._volumeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._planName = value.planName;
      this._volumeName = value.volumeName;
    }
  }

  // plan_name - computed: false, optional: true, required: false
  private _planName?: string; 
  public get planName() {
    return this.getStringAttribute('plan_name');
  }
  public set planName(value: string) {
    this._planName = value;
  }
  public resetPlanName() {
    this._planName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planNameInput() {
    return this._planName;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/cloudbackup_checkpoint_v2 selectel_cloudbackup_checkpoint_v2}
*/
export class DataSelectelCloudbackupCheckpointV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_cloudbackup_checkpoint_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSelectelCloudbackupCheckpointV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSelectelCloudbackupCheckpointV2 to import
  * @param importFromId The id of the existing DataSelectelCloudbackupCheckpointV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/cloudbackup_checkpoint_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSelectelCloudbackupCheckpointV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_cloudbackup_checkpoint_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/cloudbackup_checkpoint_v2 selectel_cloudbackup_checkpoint_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSelectelCloudbackupCheckpointV2Config
  */
  public constructor(scope: Construct, id: string, config: DataSelectelCloudbackupCheckpointV2Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_cloudbackup_checkpoint_v2',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.2.1',
        providerVersionConstraint: '7.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._projectId = config.projectId;
    this._region = config.region;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checkpoints - computed: true, optional: false, required: false
  private _checkpoints = new DataSelectelCloudbackupCheckpointV2CheckpointsList(this, "checkpoints", true);
  public get checkpoints() {
    return this._checkpoints;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataSelectelCloudbackupCheckpointV2FilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataSelectelCloudbackupCheckpointV2Filter) {
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
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      filter: dataSelectelCloudbackupCheckpointV2FilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataSelectelCloudbackupCheckpointV2FilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSelectelCloudbackupCheckpointV2FilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
