// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/ebs_diskreplicagroups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackEbsDiskreplicagroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/ebs_diskreplicagroups#description_regex DataAlibabacloudstackEbsDiskreplicagroups#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/ebs_diskreplicagroups#id DataAlibabacloudstackEbsDiskreplicagroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/ebs_diskreplicagroups#ids DataAlibabacloudstackEbsDiskreplicagroups#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/ebs_diskreplicagroups#name_regex DataAlibabacloudstackEbsDiskreplicagroups#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/ebs_diskreplicagroups#site DataAlibabacloudstackEbsDiskreplicagroups#site}
  */
  readonly site?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/ebs_diskreplicagroups#source_region_id DataAlibabacloudstackEbsDiskreplicagroups#source_region_id}
  */
  readonly sourceRegionId?: string;
}
export interface DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsTags {
}

export function dataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsTagsToTerraform(struct?: DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsTagsToHclTerraform(struct?: DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsTags | undefined) {
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

export class DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsTagsOutputReference {
    return new DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroups {
}

export function dataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsToTerraform(struct?: DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsToHclTerraform(struct?: DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_region_id - computed: true, optional: false, required: false
  public get destinationRegionId() {
    return this.getStringAttribute('destination_region_id');
  }

  // destination_zone_id - computed: true, optional: false, required: false
  public get destinationZoneId() {
    return this.getStringAttribute('destination_zone_id');
  }

  // disk_replica_group_name - computed: true, optional: false, required: false
  public get diskReplicaGroupName() {
    return this.getStringAttribute('disk_replica_group_name');
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

  // pair_ids - computed: true, optional: false, required: false
  public get pairIds() {
    return this.getListAttribute('pair_ids');
  }

  // pair_number - computed: true, optional: false, required: false
  public get pairNumber() {
    return this.getNumberAttribute('pair_number');
  }

  // replica_group_id - computed: true, optional: false, required: false
  public get replicaGroupId() {
    return this.getStringAttribute('replica_group_id');
  }

  // rpo - computed: true, optional: false, required: false
  public get rpo() {
    return this.getNumberAttribute('rpo');
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
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
  private _tags = new DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsOutputReference {
    return new DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/ebs_diskreplicagroups alibabacloudstack_ebs_diskreplicagroups}
*/
export class DataAlibabacloudstackEbsDiskreplicagroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ebs_diskreplicagroups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackEbsDiskreplicagroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackEbsDiskreplicagroups to import
  * @param importFromId The id of the existing DataAlibabacloudstackEbsDiskreplicagroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/ebs_diskreplicagroups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackEbsDiskreplicagroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ebs_diskreplicagroups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/ebs_diskreplicagroups alibabacloudstack_ebs_diskreplicagroups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackEbsDiskreplicagroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackEbsDiskreplicagroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ebs_diskreplicagroups',
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
    this._nameRegex = config.nameRegex;
    this._site = config.site;
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

  // disk_replica_groups - computed: true, optional: false, required: false
  private _diskReplicaGroups = new DataAlibabacloudstackEbsDiskreplicagroupsDiskReplicaGroupsList(this, "disk_replica_groups", false);
  public get diskReplicaGroups() {
    return this._diskReplicaGroups;
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

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
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
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      site: cdktf.stringToTerraform(this._site),
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
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
