// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ebs_diskreplicapairs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackEbsDiskreplicapairsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ebs_diskreplicapairs#description_regex DataApsarastackEbsDiskreplicapairs#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ebs_diskreplicapairs#id DataApsarastackEbsDiskreplicapairs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ebs_diskreplicapairs#ids DataApsarastackEbsDiskreplicapairs#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ebs_diskreplicapairs#max_results DataApsarastackEbsDiskreplicapairs#max_results}
  */
  readonly maxResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ebs_diskreplicapairs#name_regex DataApsarastackEbsDiskreplicapairs#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ebs_diskreplicapairs#replica_group_id DataApsarastackEbsDiskreplicapairs#replica_group_id}
  */
  readonly replicaGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ebs_diskreplicapairs#source_region_id DataApsarastackEbsDiskreplicapairs#source_region_id}
  */
  readonly sourceRegionId?: string;
}
export interface DataApsarastackEbsDiskreplicapairsDiskReplicaPairsTags {
}

export function dataApsarastackEbsDiskreplicapairsDiskReplicaPairsTagsToTerraform(struct?: DataApsarastackEbsDiskreplicapairsDiskReplicaPairsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackEbsDiskreplicapairsDiskReplicaPairsTagsToHclTerraform(struct?: DataApsarastackEbsDiskreplicapairsDiskReplicaPairsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackEbsDiskreplicapairsDiskReplicaPairsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackEbsDiskreplicapairsDiskReplicaPairsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackEbsDiskreplicapairsDiskReplicaPairsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataApsarastackEbsDiskreplicapairsDiskReplicaPairsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackEbsDiskreplicapairsDiskReplicaPairsTagsOutputReference {
    return new DataApsarastackEbsDiskreplicapairsDiskReplicaPairsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApsarastackEbsDiskreplicapairsDiskReplicaPairs {
}

export function dataApsarastackEbsDiskreplicapairsDiskReplicaPairsToTerraform(struct?: DataApsarastackEbsDiskreplicapairsDiskReplicaPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackEbsDiskreplicapairsDiskReplicaPairsToHclTerraform(struct?: DataApsarastackEbsDiskreplicapairsDiskReplicaPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackEbsDiskreplicapairsDiskReplicaPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackEbsDiskreplicapairsDiskReplicaPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackEbsDiskreplicapairsDiskReplicaPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_disk_id - computed: true, optional: false, required: false
  public get destinationDiskId() {
    return this.getStringAttribute('destination_disk_id');
  }

  // destination_region_id - computed: true, optional: false, required: false
  public get destinationRegionId() {
    return this.getStringAttribute('destination_region_id');
  }

  // destination_zone_id - computed: true, optional: false, required: false
  public get destinationZoneId() {
    return this.getStringAttribute('destination_zone_id');
  }

  // disk_replica_pair_name - computed: true, optional: false, required: false
  public get diskReplicaPairName() {
    return this.getStringAttribute('disk_replica_pair_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_recover_point - computed: true, optional: false, required: false
  public get lastRecoverPoint() {
    return this.getNumberAttribute('last_recover_point');
  }

  // one_shot - computed: true, optional: false, required: false
  public get oneShot() {
    return this.getBooleanAttribute('one_shot');
  }

  // replica_group_id - computed: true, optional: false, required: false
  public get replicaGroupId() {
    return this.getStringAttribute('replica_group_id');
  }

  // replica_pair_id - computed: true, optional: false, required: false
  public get replicaPairId() {
    return this.getStringAttribute('replica_pair_id');
  }

  // rpo - computed: true, optional: false, required: false
  public get rpo() {
    return this.getNumberAttribute('rpo');
  }

  // source_disk_id - computed: true, optional: false, required: false
  public get sourceDiskId() {
    return this.getStringAttribute('source_disk_id');
  }

  // source_region_id - computed: true, optional: false, required: false
  public get sourceRegionId() {
    return this.getStringAttribute('source_region_id');
  }

  // source_zone_id - computed: true, optional: false, required: false
  public get sourceZoneId() {
    return this.getStringAttribute('source_zone_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataApsarastackEbsDiskreplicapairsDiskReplicaPairsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataApsarastackEbsDiskreplicapairsDiskReplicaPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackEbsDiskreplicapairsDiskReplicaPairsOutputReference {
    return new DataApsarastackEbsDiskreplicapairsDiskReplicaPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ebs_diskreplicapairs apsarastack_ebs_diskreplicapairs}
*/
export class DataApsarastackEbsDiskreplicapairs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ebs_diskreplicapairs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackEbsDiskreplicapairs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackEbsDiskreplicapairs to import
  * @param importFromId The id of the existing DataApsarastackEbsDiskreplicapairs that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ebs_diskreplicapairs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackEbsDiskreplicapairs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ebs_diskreplicapairs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ebs_diskreplicapairs apsarastack_ebs_diskreplicapairs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackEbsDiskreplicapairsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackEbsDiskreplicapairsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ebs_diskreplicapairs',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._descriptionRegex = config.descriptionRegex;
    this._id = config.id;
    this._ids = config.ids;
    this._maxResults = config.maxResults;
    this._nameRegex = config.nameRegex;
    this._replicaGroupId = config.replicaGroupId;
    this._sourceRegionId = config.sourceRegionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description_regex - computed: false, optional: true, required: false
  private _descriptionRegex?: string; 
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }
  public set descriptionRegex(value: string) {
    this._descriptionRegex = value;
  }
  public resetDescriptionRegex() {
    this._descriptionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexInput() {
    return this._descriptionRegex;
  }

  // disk_replica_pairs - computed: true, optional: false, required: false
  private _diskReplicaPairs = new DataApsarastackEbsDiskreplicapairsDiskReplicaPairsList(this, "disk_replica_pairs", false);
  public get diskReplicaPairs() {
    return this._diskReplicaPairs;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // replica_group_id - computed: false, optional: true, required: false
  private _replicaGroupId?: string; 
  public get replicaGroupId() {
    return this.getStringAttribute('replica_group_id');
  }
  public set replicaGroupId(value: string) {
    this._replicaGroupId = value;
  }
  public resetReplicaGroupId() {
    this._replicaGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaGroupIdInput() {
    return this._replicaGroupId;
  }

  // source_region_id - computed: false, optional: true, required: false
  private _sourceRegionId?: string; 
  public get sourceRegionId() {
    return this.getStringAttribute('source_region_id');
  }
  public set sourceRegionId(value: string) {
    this._sourceRegionId = value;
  }
  public resetSourceRegionId() {
    this._sourceRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRegionIdInput() {
    return this._sourceRegionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description_regex: cdktf.stringToTerraform(this._descriptionRegex),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      max_results: cdktf.numberToTerraform(this._maxResults),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      replica_group_id: cdktf.stringToTerraform(this._replicaGroupId),
      source_region_id: cdktf.stringToTerraform(this._sourceRegionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description_regex: {
        value: cdktf.stringToHclTerraform(this._descriptionRegex),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_group_id: {
        value: cdktf.stringToHclTerraform(this._replicaGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_region_id: {
        value: cdktf.stringToHclTerraform(this._sourceRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
