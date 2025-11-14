// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#cloud_exadata_infrastructure_id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#cloud_exadata_infrastructure_id}
  */
  readonly cloudExadataInfrastructureId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#db_servers}
  */
  readonly dbServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters {
}

export function dataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersToTerraform(struct?: DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersToHclTerraform(struct?: DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters | undefined) {
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

  // un_allocated_adb_storage_in_tbs - computed: true, optional: false, required: false
  public get unAllocatedAdbStorageInTbs() {
    return this.getNumberAttribute('un_allocated_adb_storage_in_tbs');
  }
}

export class DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference {
    return new DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource oci_database_cloud_exadata_infrastructure_un_allocated_resource}
*/
export class DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_cloud_exadata_infrastructure_un_allocated_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource to import
  * @param importFromId The id of the existing DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_cloud_exadata_infrastructure_un_allocated_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource oci_database_cloud_exadata_infrastructure_un_allocated_resource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_cloud_exadata_infrastructure_un_allocated_resource',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudExadataInfrastructureId = config.cloudExadataInfrastructureId;
    this._dbServers = config.dbServers;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_autonomous_vm_clusters - computed: true, optional: false, required: false
  private _cloudAutonomousVmClusters = new DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList(this, "cloud_autonomous_vm_clusters", false);
  public get cloudAutonomousVmClusters() {
    return this._cloudAutonomousVmClusters;
  }

  // cloud_exadata_infrastructure_display_name - computed: true, optional: false, required: false
  public get cloudExadataInfrastructureDisplayName() {
    return this.getStringAttribute('cloud_exadata_infrastructure_display_name');
  }

  // cloud_exadata_infrastructure_id - computed: false, optional: false, required: true
  private _cloudExadataInfrastructureId?: string; 
  public get cloudExadataInfrastructureId() {
    return this.getStringAttribute('cloud_exadata_infrastructure_id');
  }
  public set cloudExadataInfrastructureId(value: string) {
    this._cloudExadataInfrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudExadataInfrastructureIdInput() {
    return this._cloudExadataInfrastructureId;
  }

  // db_servers - computed: false, optional: true, required: false
  private _dbServers?: string[]; 
  public get dbServers() {
    return this.getListAttribute('db_servers');
  }
  public set dbServers(value: string[]) {
    this._dbServers = value;
  }
  public resetDbServers() {
    this._dbServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServersInput() {
    return this._dbServers;
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

  // local_storage_in_gbs - computed: true, optional: false, required: false
  public get localStorageInGbs() {
    return this.getNumberAttribute('local_storage_in_gbs');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_exadata_infrastructure_id: cdktf.stringToTerraform(this._cloudExadataInfrastructureId),
      db_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbServers),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._cloudExadataInfrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
