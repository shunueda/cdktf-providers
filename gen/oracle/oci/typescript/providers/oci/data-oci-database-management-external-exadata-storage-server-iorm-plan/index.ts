// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#external_exadata_storage_server_id}
  */
  readonly externalExadataStorageServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems {
}

export function dataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsToTerraform(struct?: DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsToHclTerraform(struct?: DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocation - computed: true, optional: false, required: false
  public get allocation() {
    return this.getNumberAttribute('allocation');
  }

  // asm_cluster - computed: true, optional: false, required: false
  public get asmCluster() {
    return this.getStringAttribute('asm_cluster');
  }

  // flash_cache_limit - computed: true, optional: false, required: false
  public get flashCacheLimit() {
    return this.getStringAttribute('flash_cache_limit');
  }

  // flash_cache_min - computed: true, optional: false, required: false
  public get flashCacheMin() {
    return this.getStringAttribute('flash_cache_min');
  }

  // flash_cache_size - computed: true, optional: false, required: false
  public get flashCacheSize() {
    return this.getStringAttribute('flash_cache_size');
  }

  // is_flash_cache_on - computed: true, optional: false, required: false
  public get isFlashCacheOn() {
    return this.getBooleanAttribute('is_flash_cache_on');
  }

  // is_flash_log_on - computed: true, optional: false, required: false
  public get isFlashLogOn() {
    return this.getBooleanAttribute('is_flash_log_on');
  }

  // is_pmem_cache_on - computed: true, optional: false, required: false
  public get isPmemCacheOn() {
    return this.getBooleanAttribute('is_pmem_cache_on');
  }

  // is_pmem_log_on - computed: true, optional: false, required: false
  public get isPmemLogOn() {
    return this.getBooleanAttribute('is_pmem_log_on');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getNumberAttribute('level');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pmem_cache_limit - computed: true, optional: false, required: false
  public get pmemCacheLimit() {
    return this.getStringAttribute('pmem_cache_limit');
  }

  // pmem_cache_min - computed: true, optional: false, required: false
  public get pmemCacheMin() {
    return this.getStringAttribute('pmem_cache_min');
  }

  // pmem_cache_size - computed: true, optional: false, required: false
  public get pmemCacheSize() {
    return this.getStringAttribute('pmem_cache_size');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // share - computed: true, optional: false, required: false
  public get share() {
    return this.getNumberAttribute('share');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference {
    return new DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan {
}

export function dataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanToTerraform(struct?: DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanToHclTerraform(struct?: DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference {
    return new DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan oci_database_management_external_exadata_storage_server_iorm_plan}
*/
export class DataOciDatabaseManagementExternalExadataStorageServerIormPlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_exadata_storage_server_iorm_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerIormPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageServerIormPlan to import
  * @param importFromId The id of the existing DataOciDatabaseManagementExternalExadataStorageServerIormPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageServerIormPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_exadata_storage_server_iorm_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan oci_database_management_external_exadata_storage_server_iorm_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_exadata_storage_server_iorm_plan',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalExadataStorageServerId = config.externalExadataStorageServerId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_plan - computed: true, optional: false, required: false
  private _dbPlan = new DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList(this, "db_plan", false);
  public get dbPlan() {
    return this._dbPlan;
  }

  // external_exadata_storage_server_id - computed: false, optional: false, required: true
  private _externalExadataStorageServerId?: string; 
  public get externalExadataStorageServerId() {
    return this.getStringAttribute('external_exadata_storage_server_id');
  }
  public set externalExadataStorageServerId(value: string) {
    this._externalExadataStorageServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalExadataStorageServerIdInput() {
    return this._externalExadataStorageServerId;
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

  // plan_objective - computed: true, optional: false, required: false
  public get planObjective() {
    return this.getStringAttribute('plan_objective');
  }

  // plan_status - computed: true, optional: false, required: false
  public get planStatus() {
    return this.getStringAttribute('plan_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_exadata_storage_server_id: cdktf.stringToTerraform(this._externalExadataStorageServerId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_exadata_storage_server_id: {
        value: cdktf.stringToHclTerraform(this._externalExadataStorageServerId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
