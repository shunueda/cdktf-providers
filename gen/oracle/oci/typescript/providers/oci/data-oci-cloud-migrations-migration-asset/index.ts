// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/cloud_migrations_migration_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudMigrationsMigrationAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/cloud_migrations_migration_asset#migration_asset_id DataOciCloudMigrationsMigrationAsset#migration_asset_id}
  */
  readonly migrationAssetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/cloud_migrations_migration_asset oci_cloud_migrations_migration_asset}
*/
export class DataOciCloudMigrationsMigrationAsset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_migrations_migration_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCloudMigrationsMigrationAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCloudMigrationsMigrationAsset to import
  * @param importFromId The id of the existing DataOciCloudMigrationsMigrationAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/cloud_migrations_migration_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCloudMigrationsMigrationAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_migrations_migration_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/cloud_migrations_migration_asset oci_cloud_migrations_migration_asset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudMigrationsMigrationAssetConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudMigrationsMigrationAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_migrations_migration_asset',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._migrationAssetId = config.migrationAssetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // depended_on_by - computed: true, optional: false, required: false
  public get dependedOnBy() {
    return this.getListAttribute('depended_on_by');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inventory_asset_id - computed: true, optional: false, required: false
  public get inventoryAssetId() {
    return this.getStringAttribute('inventory_asset_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // migration_asset_depends_on - computed: true, optional: false, required: false
  public get migrationAssetDependsOn() {
    return this.getListAttribute('migration_asset_depends_on');
  }

  // migration_asset_id - computed: false, optional: false, required: true
  private _migrationAssetId?: string; 
  public get migrationAssetId() {
    return this.getStringAttribute('migration_asset_id');
  }
  public set migrationAssetId(value: string) {
    this._migrationAssetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationAssetIdInput() {
    return this._migrationAssetId;
  }

  // migration_id - computed: true, optional: false, required: false
  public get migrationId() {
    return this.getStringAttribute('migration_id');
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return this.getListAttribute('notifications');
  }

  // parent_snapshot - computed: true, optional: false, required: false
  public get parentSnapshot() {
    return this.getStringAttribute('parent_snapshot');
  }

  // replication_compartment_id - computed: true, optional: false, required: false
  public get replicationCompartmentId() {
    return this.getStringAttribute('replication_compartment_id');
  }

  // replication_schedule_id - computed: true, optional: false, required: false
  public get replicationScheduleId() {
    return this.getStringAttribute('replication_schedule_id');
  }

  // snap_shot_bucket_name - computed: true, optional: false, required: false
  public get snapShotBucketName() {
    return this.getStringAttribute('snap_shot_bucket_name');
  }

  // snapshots - computed: true, optional: false, required: false
  private _snapshots = new cdktf.StringMap(this, "snapshots");
  public get snapshots() {
    return this._snapshots;
  }

  // source_asset_id - computed: true, optional: false, required: false
  public get sourceAssetId() {
    return this.getStringAttribute('source_asset_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      migration_asset_id: cdktf.stringToTerraform(this._migrationAssetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      migration_asset_id: {
        value: cdktf.stringToHclTerraform(this._migrationAssetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
