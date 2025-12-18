// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_cloud_autonomous_vm_cluster_resource_usage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_cloud_autonomous_vm_cluster_resource_usage#cloud_autonomous_vm_cluster_id DataOciDatabaseCloudAutonomousVmClusterResourceUsage#cloud_autonomous_vm_cluster_id}
  */
  readonly cloudAutonomousVmClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_cloud_autonomous_vm_cluster_resource_usage#id DataOciDatabaseCloudAutonomousVmClusterResourceUsage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage {
}

export function dataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageToTerraform(struct?: DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageToHclTerraform(struct?: DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_cpus - computed: true, optional: false, required: false
  public get availableCpus() {
    return this.getNumberAttribute('available_cpus');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provisioned_cpus - computed: true, optional: false, required: false
  public get provisionedCpus() {
    return this.getNumberAttribute('provisioned_cpus');
  }

  // reclaimable_cpus - computed: true, optional: false, required: false
  public get reclaimableCpus() {
    return this.getNumberAttribute('reclaimable_cpus');
  }

  // reserved_cpus - computed: true, optional: false, required: false
  public get reservedCpus() {
    return this.getNumberAttribute('reserved_cpus');
  }

  // used_cpus - computed: true, optional: false, required: false
  public get usedCpus() {
    return this.getNumberAttribute('used_cpus');
  }
}

export class DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference {
    return new DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage {
}

export function dataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageToTerraform(struct?: DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageToHclTerraform(struct?: DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autonomous_container_database_usage - computed: true, optional: false, required: false
  private _autonomousContainerDatabaseUsage = new DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList(this, "autonomous_container_database_usage", false);
  public get autonomousContainerDatabaseUsage() {
    return this._autonomousContainerDatabaseUsage;
  }

  // available_cpus - computed: true, optional: false, required: false
  public get availableCpus() {
    return this.getNumberAttribute('available_cpus');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provisioned_cpus - computed: true, optional: false, required: false
  public get provisionedCpus() {
    return this.getNumberAttribute('provisioned_cpus');
  }

  // reclaimable_cpus - computed: true, optional: false, required: false
  public get reclaimableCpus() {
    return this.getNumberAttribute('reclaimable_cpus');
  }

  // reserved_cpus - computed: true, optional: false, required: false
  public get reservedCpus() {
    return this.getNumberAttribute('reserved_cpus');
  }

  // used_cpus - computed: true, optional: false, required: false
  public get usedCpus() {
    return this.getNumberAttribute('used_cpus');
  }
}

export class DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference {
    return new DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_cloud_autonomous_vm_cluster_resource_usage oci_database_cloud_autonomous_vm_cluster_resource_usage}
*/
export class DataOciDatabaseCloudAutonomousVmClusterResourceUsage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_cloud_autonomous_vm_cluster_resource_usage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusterResourceUsage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseCloudAutonomousVmClusterResourceUsage to import
  * @param importFromId The id of the existing DataOciDatabaseCloudAutonomousVmClusterResourceUsage that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_cloud_autonomous_vm_cluster_resource_usage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseCloudAutonomousVmClusterResourceUsage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_cloud_autonomous_vm_cluster_resource_usage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_cloud_autonomous_vm_cluster_resource_usage oci_database_cloud_autonomous_vm_cluster_resource_usage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseCloudAutonomousVmClusterResourceUsageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_cloud_autonomous_vm_cluster_resource_usage',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudAutonomousVmClusterId = config.cloudAutonomousVmClusterId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get autonomousDataStorageSizeInTbs() {
    return this.getNumberAttribute('autonomous_data_storage_size_in_tbs');
  }

  // autonomous_vm_resource_usage - computed: true, optional: false, required: false
  private _autonomousVmResourceUsage = new DataOciDatabaseCloudAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList(this, "autonomous_vm_resource_usage", false);
  public get autonomousVmResourceUsage() {
    return this._autonomousVmResourceUsage;
  }

  // available_autonomous_data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get availableAutonomousDataStorageSizeInTbs() {
    return this.getNumberAttribute('available_autonomous_data_storage_size_in_tbs');
  }

  // available_cpus - computed: true, optional: false, required: false
  public get availableCpus() {
    return this.getNumberAttribute('available_cpus');
  }

  // cloud_autonomous_vm_cluster_id - computed: false, optional: false, required: true
  private _cloudAutonomousVmClusterId?: string; 
  public get cloudAutonomousVmClusterId() {
    return this.getStringAttribute('cloud_autonomous_vm_cluster_id');
  }
  public set cloudAutonomousVmClusterId(value: string) {
    this._cloudAutonomousVmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAutonomousVmClusterIdInput() {
    return this._cloudAutonomousVmClusterId;
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // exadata_storage_in_tbs - computed: true, optional: false, required: false
  public get exadataStorageInTbs() {
    return this.getNumberAttribute('exadata_storage_in_tbs');
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

  // memory_per_compute_unit_in_gbs - computed: true, optional: false, required: false
  public get memoryPerComputeUnitInGbs() {
    return this.getNumberAttribute('memory_per_compute_unit_in_gbs');
  }

  // memory_per_oracle_compute_unit_in_gbs - computed: true, optional: false, required: false
  public get memoryPerOracleComputeUnitInGbs() {
    return this.getNumberAttribute('memory_per_oracle_compute_unit_in_gbs');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: false
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // non_provisionable_autonomous_container_databases - computed: true, optional: false, required: false
  public get nonProvisionableAutonomousContainerDatabases() {
    return this.getNumberAttribute('non_provisionable_autonomous_container_databases');
  }

  // provisionable_autonomous_container_databases - computed: true, optional: false, required: false
  public get provisionableAutonomousContainerDatabases() {
    return this.getNumberAttribute('provisionable_autonomous_container_databases');
  }

  // provisioned_autonomous_container_databases - computed: true, optional: false, required: false
  public get provisionedAutonomousContainerDatabases() {
    return this.getNumberAttribute('provisioned_autonomous_container_databases');
  }

  // provisioned_cpus - computed: true, optional: false, required: false
  public get provisionedCpus() {
    return this.getNumberAttribute('provisioned_cpus');
  }

  // reclaimable_cpus - computed: true, optional: false, required: false
  public get reclaimableCpus() {
    return this.getNumberAttribute('reclaimable_cpus');
  }

  // reserved_cpus - computed: true, optional: false, required: false
  public get reservedCpus() {
    return this.getNumberAttribute('reserved_cpus');
  }

  // total_container_databases - computed: true, optional: false, required: false
  public get totalContainerDatabases() {
    return this.getNumberAttribute('total_container_databases');
  }

  // total_cpus - computed: true, optional: false, required: false
  public get totalCpus() {
    return this.getNumberAttribute('total_cpus');
  }

  // used_autonomous_data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get usedAutonomousDataStorageSizeInTbs() {
    return this.getNumberAttribute('used_autonomous_data_storage_size_in_tbs');
  }

  // used_cpus - computed: true, optional: false, required: false
  public get usedCpus() {
    return this.getNumberAttribute('used_cpus');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_autonomous_vm_cluster_id: cdktf.stringToTerraform(this._cloudAutonomousVmClusterId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_autonomous_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._cloudAutonomousVmClusterId),
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
