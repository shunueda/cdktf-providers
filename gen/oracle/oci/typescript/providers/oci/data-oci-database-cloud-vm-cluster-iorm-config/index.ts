// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_cloud_vm_cluster_iorm_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseCloudVmClusterIormConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DataOciDatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}
  */
  readonly cloudVmClusterId: string;
}
export interface DataOciDatabaseCloudVmClusterIormConfigDbPlans {
}

export function dataOciDatabaseCloudVmClusterIormConfigDbPlansToTerraform(struct?: DataOciDatabaseCloudVmClusterIormConfigDbPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseCloudVmClusterIormConfigDbPlansToHclTerraform(struct?: DataOciDatabaseCloudVmClusterIormConfigDbPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseCloudVmClusterIormConfigDbPlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseCloudVmClusterIormConfigDbPlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // flash_cache_limit - computed: true, optional: false, required: false
  public get flashCacheLimit() {
    return this.getStringAttribute('flash_cache_limit');
  }

  // share - computed: true, optional: false, required: false
  public get share() {
    return this.getNumberAttribute('share');
  }
}

export class DataOciDatabaseCloudVmClusterIormConfigDbPlansList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference {
    return new DataOciDatabaseCloudVmClusterIormConfigDbPlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_cloud_vm_cluster_iorm_config oci_database_cloud_vm_cluster_iorm_config}
*/
export class DataOciDatabaseCloudVmClusterIormConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_cloud_vm_cluster_iorm_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseCloudVmClusterIormConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseCloudVmClusterIormConfig to import
  * @param importFromId The id of the existing DataOciDatabaseCloudVmClusterIormConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_cloud_vm_cluster_iorm_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseCloudVmClusterIormConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_cloud_vm_cluster_iorm_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_cloud_vm_cluster_iorm_config oci_database_cloud_vm_cluster_iorm_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseCloudVmClusterIormConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseCloudVmClusterIormConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_cloud_vm_cluster_iorm_config',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudVmClusterId = config.cloudVmClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_vm_cluster_id - computed: false, optional: false, required: true
  private _cloudVmClusterId?: string; 
  public get cloudVmClusterId() {
    return this.getStringAttribute('cloud_vm_cluster_id');
  }
  public set cloudVmClusterId(value: string) {
    this._cloudVmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudVmClusterIdInput() {
    return this._cloudVmClusterId;
  }

  // db_plans - computed: true, optional: false, required: false
  private _dbPlans = new DataOciDatabaseCloudVmClusterIormConfigDbPlansList(this, "db_plans", false);
  public get dbPlans() {
    return this._dbPlans;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // objective - computed: true, optional: false, required: false
  public get objective() {
    return this.getStringAttribute('objective');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_vm_cluster_id: cdktf.stringToTerraform(this._cloudVmClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._cloudVmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
