// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_polardb_cluster_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackPolardbClusterInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_polardb_cluster_instances#description_regex DataApsarastackPolardbClusterInstances#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_polardb_cluster_instances#id DataApsarastackPolardbClusterInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_polardb_cluster_instances#ids DataApsarastackPolardbClusterInstances#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_polardb_cluster_instances#name_regex DataApsarastackPolardbClusterInstances#name_regex}
  */
  readonly nameRegex?: string;
}
export interface DataApsarastackPolardbClusterInstancesDbClusterInstancesDbNodes {
}

export function dataApsarastackPolardbClusterInstancesDbClusterInstancesDbNodesToTerraform(struct?: DataApsarastackPolardbClusterInstancesDbClusterInstancesDbNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackPolardbClusterInstancesDbClusterInstancesDbNodesToHclTerraform(struct?: DataApsarastackPolardbClusterInstancesDbClusterInstancesDbNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackPolardbClusterInstancesDbClusterInstancesDbNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackPolardbClusterInstancesDbClusterInstancesDbNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackPolardbClusterInstancesDbClusterInstancesDbNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_node_class - computed: true, optional: false, required: false
  public get dbNodeClass() {
    return this.getStringAttribute('db_node_class');
  }

  // db_node_id - computed: true, optional: false, required: false
  public get dbNodeId() {
    return this.getStringAttribute('db_node_id');
  }

  // db_node_role - computed: true, optional: false, required: false
  public get dbNodeRole() {
    return this.getStringAttribute('db_node_role');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataApsarastackPolardbClusterInstancesDbClusterInstancesDbNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackPolardbClusterInstancesDbClusterInstancesDbNodesOutputReference {
    return new DataApsarastackPolardbClusterInstancesDbClusterInstancesDbNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApsarastackPolardbClusterInstancesDbClusterInstancesTags {
}

export function dataApsarastackPolardbClusterInstancesDbClusterInstancesTagsToTerraform(struct?: DataApsarastackPolardbClusterInstancesDbClusterInstancesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackPolardbClusterInstancesDbClusterInstancesTagsToHclTerraform(struct?: DataApsarastackPolardbClusterInstancesDbClusterInstancesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackPolardbClusterInstancesDbClusterInstancesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackPolardbClusterInstancesDbClusterInstancesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackPolardbClusterInstancesDbClusterInstancesTags | undefined) {
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

export class DataApsarastackPolardbClusterInstancesDbClusterInstancesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackPolardbClusterInstancesDbClusterInstancesTagsOutputReference {
    return new DataApsarastackPolardbClusterInstancesDbClusterInstancesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApsarastackPolardbClusterInstancesDbClusterInstances {
}

export function dataApsarastackPolardbClusterInstancesDbClusterInstancesToTerraform(struct?: DataApsarastackPolardbClusterInstancesDbClusterInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackPolardbClusterInstancesDbClusterInstancesToHclTerraform(struct?: DataApsarastackPolardbClusterInstancesDbClusterInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackPolardbClusterInstancesDbClusterInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackPolardbClusterInstancesDbClusterInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackPolardbClusterInstancesDbClusterInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // ascm_create_user - computed: true, optional: false, required: false
  public get ascmCreateUser() {
    return this.getStringAttribute('ascm_create_user');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_cluster_description - computed: true, optional: false, required: false
  public get dbClusterDescription() {
    return this.getStringAttribute('db_cluster_description');
  }

  // db_cluster_id - computed: true, optional: false, required: false
  public get dbClusterId() {
    return this.getStringAttribute('db_cluster_id');
  }

  // db_cluster_network_type - computed: true, optional: false, required: false
  public get dbClusterNetworkType() {
    return this.getStringAttribute('db_cluster_network_type');
  }

  // db_cluster_status - computed: true, optional: false, required: false
  public get dbClusterStatus() {
    return this.getStringAttribute('db_cluster_status');
  }

  // db_node_class - computed: true, optional: false, required: false
  public get dbNodeClass() {
    return this.getStringAttribute('db_node_class');
  }

  // db_node_number - computed: true, optional: false, required: false
  public get dbNodeNumber() {
    return this.getStringAttribute('db_node_number');
  }

  // db_nodes - computed: true, optional: false, required: false
  private _dbNodes = new DataApsarastackPolardbClusterInstancesDbClusterInstancesDbNodesList(this, "db_nodes", false);
  public get dbNodes() {
    return this._dbNodes;
  }

  // db_proxy_cluster_class - computed: true, optional: false, required: false
  public get dbProxyClusterClass() {
    return this.getStringAttribute('db_proxy_cluster_class');
  }

  // db_type - computed: true, optional: false, required: false
  public get dbType() {
    return this.getStringAttribute('db_type');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // deletion_lock - computed: true, optional: false, required: false
  public get deletionLock() {
    return this.getNumberAttribute('deletion_lock');
  }

  // department - computed: true, optional: false, required: false
  public get department() {
    return this.getNumberAttribute('department');
  }

  // department_name - computed: true, optional: false, required: false
  public get departmentName() {
    return this.getStringAttribute('department_name');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // hot_standby_cluster - computed: true, optional: false, required: false
  public get hotStandbyCluster() {
    return this.getStringAttribute('hot_standby_cluster');
  }

  // lock_mode - computed: true, optional: false, required: false
  public get lockMode() {
    return this.getStringAttribute('lock_mode');
  }

  // pay_type - computed: true, optional: false, required: false
  public get payType() {
    return this.getStringAttribute('pay_type');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getNumberAttribute('resource_group');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // serverless_type - computed: true, optional: false, required: false
  public get serverlessType() {
    return this.getStringAttribute('serverless_type');
  }

  // storage_pay_type - computed: true, optional: false, required: false
  public get storagePayType() {
    return this.getStringAttribute('storage_pay_type');
  }

  // storage_space - computed: true, optional: false, required: false
  public get storageSpace() {
    return this.getNumberAttribute('storage_space');
  }

  // storage_used - computed: true, optional: false, required: false
  public get storageUsed() {
    return this.getNumberAttribute('storage_used');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataApsarastackPolardbClusterInstancesDbClusterInstancesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataApsarastackPolardbClusterInstancesDbClusterInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackPolardbClusterInstancesDbClusterInstancesOutputReference {
    return new DataApsarastackPolardbClusterInstancesDbClusterInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_polardb_cluster_instances apsarastack_polardb_cluster_instances}
*/
export class DataApsarastackPolardbClusterInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_polardb_cluster_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackPolardbClusterInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackPolardbClusterInstances to import
  * @param importFromId The id of the existing DataApsarastackPolardbClusterInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_polardb_cluster_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackPolardbClusterInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_polardb_cluster_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_polardb_cluster_instances apsarastack_polardb_cluster_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackPolardbClusterInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackPolardbClusterInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_polardb_cluster_instances',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_cluster_instances - computed: true, optional: false, required: false
  private _dbClusterInstances = new DataApsarastackPolardbClusterInstancesDbClusterInstancesList(this, "db_cluster_instances", false);
  public get dbClusterInstances() {
    return this._dbClusterInstances;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description_regex: cdktf.stringToTerraform(this._descriptionRegex),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
