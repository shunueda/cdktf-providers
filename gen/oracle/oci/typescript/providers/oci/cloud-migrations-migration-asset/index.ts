// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudMigrationsMigrationAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#availability_domain CloudMigrationsMigrationAsset#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#display_name CloudMigrationsMigrationAsset#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#id CloudMigrationsMigrationAsset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#inventory_asset_id CloudMigrationsMigrationAsset#inventory_asset_id}
  */
  readonly inventoryAssetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#migration_asset_depends_on CloudMigrationsMigrationAsset#migration_asset_depends_on}
  */
  readonly migrationAssetDependsOn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#migration_id CloudMigrationsMigrationAsset#migration_id}
  */
  readonly migrationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#replication_compartment_id CloudMigrationsMigrationAsset#replication_compartment_id}
  */
  readonly replicationCompartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#replication_schedule_id CloudMigrationsMigrationAsset#replication_schedule_id}
  */
  readonly replicationScheduleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#snap_shot_bucket_name CloudMigrationsMigrationAsset#snap_shot_bucket_name}
  */
  readonly snapShotBucketName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#timeouts CloudMigrationsMigrationAsset#timeouts}
  */
  readonly timeouts?: CloudMigrationsMigrationAssetTimeouts;
}
export interface CloudMigrationsMigrationAssetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#create CloudMigrationsMigrationAsset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#delete CloudMigrationsMigrationAsset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#update CloudMigrationsMigrationAsset#update}
  */
  readonly update?: string;
}

export function cloudMigrationsMigrationAssetTimeoutsToTerraform(struct?: CloudMigrationsMigrationAssetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudMigrationsMigrationAssetTimeoutsToHclTerraform(struct?: CloudMigrationsMigrationAssetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMigrationsMigrationAssetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudMigrationsMigrationAssetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsMigrationAssetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset oci_cloud_migrations_migration_asset}
*/
export class CloudMigrationsMigrationAsset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_migrations_migration_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudMigrationsMigrationAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudMigrationsMigrationAsset to import
  * @param importFromId The id of the existing CloudMigrationsMigrationAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudMigrationsMigrationAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_migrations_migration_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_migrations_migration_asset oci_cloud_migrations_migration_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudMigrationsMigrationAssetConfig
  */
  public constructor(scope: Construct, id: string, config: CloudMigrationsMigrationAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_migrations_migration_asset',
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
    this._availabilityDomain = config.availabilityDomain;
    this._displayName = config.displayName;
    this._id = config.id;
    this._inventoryAssetId = config.inventoryAssetId;
    this._migrationAssetDependsOn = config.migrationAssetDependsOn;
    this._migrationId = config.migrationId;
    this._replicationCompartmentId = config.replicationCompartmentId;
    this._replicationScheduleId = config.replicationScheduleId;
    this._snapShotBucketName = config.snapShotBucketName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // depended_on_by - computed: true, optional: false, required: false
  public get dependedOnBy() {
    return this.getListAttribute('depended_on_by');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // inventory_asset_id - computed: false, optional: false, required: true
  private _inventoryAssetId?: string; 
  public get inventoryAssetId() {
    return this.getStringAttribute('inventory_asset_id');
  }
  public set inventoryAssetId(value: string) {
    this._inventoryAssetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryAssetIdInput() {
    return this._inventoryAssetId;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // migration_asset_depends_on - computed: true, optional: true, required: false
  private _migrationAssetDependsOn?: string[]; 
  public get migrationAssetDependsOn() {
    return this.getListAttribute('migration_asset_depends_on');
  }
  public set migrationAssetDependsOn(value: string[]) {
    this._migrationAssetDependsOn = value;
  }
  public resetMigrationAssetDependsOn() {
    this._migrationAssetDependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationAssetDependsOnInput() {
    return this._migrationAssetDependsOn;
  }

  // migration_id - computed: false, optional: false, required: true
  private _migrationId?: string; 
  public get migrationId() {
    return this.getStringAttribute('migration_id');
  }
  public set migrationId(value: string) {
    this._migrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationIdInput() {
    return this._migrationId;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return this.getListAttribute('notifications');
  }

  // parent_snapshot - computed: true, optional: false, required: false
  public get parentSnapshot() {
    return this.getStringAttribute('parent_snapshot');
  }

  // replication_compartment_id - computed: false, optional: false, required: true
  private _replicationCompartmentId?: string; 
  public get replicationCompartmentId() {
    return this.getStringAttribute('replication_compartment_id');
  }
  public set replicationCompartmentId(value: string) {
    this._replicationCompartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationCompartmentIdInput() {
    return this._replicationCompartmentId;
  }

  // replication_schedule_id - computed: true, optional: true, required: false
  private _replicationScheduleId?: string; 
  public get replicationScheduleId() {
    return this.getStringAttribute('replication_schedule_id');
  }
  public set replicationScheduleId(value: string) {
    this._replicationScheduleId = value;
  }
  public resetReplicationScheduleId() {
    this._replicationScheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationScheduleIdInput() {
    return this._replicationScheduleId;
  }

  // snap_shot_bucket_name - computed: false, optional: false, required: true
  private _snapShotBucketName?: string; 
  public get snapShotBucketName() {
    return this.getStringAttribute('snap_shot_bucket_name');
  }
  public set snapShotBucketName(value: string) {
    this._snapShotBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapShotBucketNameInput() {
    return this._snapShotBucketName;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudMigrationsMigrationAssetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudMigrationsMigrationAssetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      inventory_asset_id: cdktf.stringToTerraform(this._inventoryAssetId),
      migration_asset_depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(this._migrationAssetDependsOn),
      migration_id: cdktf.stringToTerraform(this._migrationId),
      replication_compartment_id: cdktf.stringToTerraform(this._replicationCompartmentId),
      replication_schedule_id: cdktf.stringToTerraform(this._replicationScheduleId),
      snap_shot_bucket_name: cdktf.stringToTerraform(this._snapShotBucketName),
      timeouts: cloudMigrationsMigrationAssetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      inventory_asset_id: {
        value: cdktf.stringToHclTerraform(this._inventoryAssetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_asset_depends_on: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._migrationAssetDependsOn),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      migration_id: {
        value: cdktf.stringToHclTerraform(this._migrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_compartment_id: {
        value: cdktf.stringToHclTerraform(this._replicationCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_schedule_id: {
        value: cdktf.stringToHclTerraform(this._replicationScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snap_shot_bucket_name: {
        value: cdktf.stringToHclTerraform(this._snapShotBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cloudMigrationsMigrationAssetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudMigrationsMigrationAssetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
