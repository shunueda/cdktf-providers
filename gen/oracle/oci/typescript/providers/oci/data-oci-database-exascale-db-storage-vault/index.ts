// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseExascaleDbStorageVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vault#exascale_db_storage_vault_id DataOciDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}
  */
  readonly exascaleDbStorageVaultId: string;
}
export interface DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage {
}

export function dataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageToTerraform(struct?: DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageToHclTerraform(struct?: DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_size_in_gbs - computed: true, optional: false, required: false
  public get availableSizeInGbs() {
    return this.getNumberAttribute('available_size_in_gbs');
  }

  // total_size_in_gbs - computed: true, optional: false, required: false
  public get totalSizeInGbs() {
    return this.getNumberAttribute('total_size_in_gbs');
  }
}

export class DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference {
    return new DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vault oci_database_exascale_db_storage_vault}
*/
export class DataOciDatabaseExascaleDbStorageVault extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_exascale_db_storage_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseExascaleDbStorageVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseExascaleDbStorageVault to import
  * @param importFromId The id of the existing DataOciDatabaseExascaleDbStorageVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseExascaleDbStorageVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_exascale_db_storage_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vault oci_database_exascale_db_storage_vault} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseExascaleDbStorageVaultConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseExascaleDbStorageVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_exascale_db_storage_vault',
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
    this._exascaleDbStorageVaultId = config.exascaleDbStorageVaultId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_flash_cache_in_percent - computed: true, optional: false, required: false
  public get additionalFlashCacheInPercent() {
    return this.getNumberAttribute('additional_flash_cache_in_percent');
  }

  // attached_shape_attributes - computed: true, optional: false, required: false
  public get attachedShapeAttributes() {
    return this.getListAttribute('attached_shape_attributes');
  }

  // autoscale_limit_in_gbs - computed: true, optional: false, required: false
  public get autoscaleLimitInGbs() {
    return this.getNumberAttribute('autoscale_limit_in_gbs');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // exadata_infrastructure_id - computed: true, optional: false, required: false
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }

  // exascale_db_storage_vault_id - computed: false, optional: false, required: true
  private _exascaleDbStorageVaultId?: string; 
  public get exascaleDbStorageVaultId() {
    return this.getStringAttribute('exascale_db_storage_vault_id');
  }
  public set exascaleDbStorageVaultId(value: string) {
    this._exascaleDbStorageVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exascaleDbStorageVaultIdInput() {
    return this._exascaleDbStorageVaultId;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // high_capacity_database_storage - computed: true, optional: false, required: false
  private _highCapacityDatabaseStorage = new DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList(this, "high_capacity_database_storage", false);
  public get highCapacityDatabaseStorage() {
    return this._highCapacityDatabaseStorage;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_autoscale_enabled - computed: true, optional: false, required: false
  public get isAutoscaleEnabled() {
    return this.getBooleanAttribute('is_autoscale_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // vm_cluster_count - computed: true, optional: false, required: false
  public get vmClusterCount() {
    return this.getNumberAttribute('vm_cluster_count');
  }

  // vm_cluster_ids - computed: true, optional: false, required: false
  public get vmClusterIds() {
    return this.getListAttribute('vm_cluster_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exascale_db_storage_vault_id: cdktf.stringToTerraform(this._exascaleDbStorageVaultId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exascale_db_storage_vault_id: {
        value: cdktf.stringToHclTerraform(this._exascaleDbStorageVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
