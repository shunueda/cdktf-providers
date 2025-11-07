// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseExascaleDbStorageVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#additional_flash_cache_in_percent DatabaseExascaleDbStorageVault#additional_flash_cache_in_percent}
  */
  readonly additionalFlashCacheInPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#autoscale_limit_in_gbs DatabaseExascaleDbStorageVault#autoscale_limit_in_gbs}
  */
  readonly autoscaleLimitInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#availability_domain DatabaseExascaleDbStorageVault#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#cluster_placement_group_id DatabaseExascaleDbStorageVault#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#compartment_id DatabaseExascaleDbStorageVault#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#defined_tags DatabaseExascaleDbStorageVault#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#description DatabaseExascaleDbStorageVault#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#display_name DatabaseExascaleDbStorageVault#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#exadata_infrastructure_id DatabaseExascaleDbStorageVault#exadata_infrastructure_id}
  */
  readonly exadataInfrastructureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#freeform_tags DatabaseExascaleDbStorageVault#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#id DatabaseExascaleDbStorageVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#is_autoscale_enabled DatabaseExascaleDbStorageVault#is_autoscale_enabled}
  */
  readonly isAutoscaleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#subscription_id DatabaseExascaleDbStorageVault#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#time_zone DatabaseExascaleDbStorageVault#time_zone}
  */
  readonly timeZone?: string;
  /**
  * high_capacity_database_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#high_capacity_database_storage DatabaseExascaleDbStorageVault#high_capacity_database_storage}
  */
  readonly highCapacityDatabaseStorage: DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#timeouts DatabaseExascaleDbStorageVault#timeouts}
  */
  readonly timeouts?: DatabaseExascaleDbStorageVaultTimeouts;
}
export interface DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#total_size_in_gbs DatabaseExascaleDbStorageVault#total_size_in_gbs}
  */
  readonly totalSizeInGbs: number;
}

export function databaseExascaleDbStorageVaultHighCapacityDatabaseStorageToTerraform(struct?: DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference | DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_size_in_gbs: cdktf.numberToTerraform(struct!.totalSizeInGbs),
  }
}


export function databaseExascaleDbStorageVaultHighCapacityDatabaseStorageToHclTerraform(struct?: DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference | DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_size_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.totalSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSizeInGbs = this._totalSizeInGbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalSizeInGbs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalSizeInGbs = value.totalSizeInGbs;
    }
  }

  // available_size_in_gbs - computed: true, optional: false, required: false
  public get availableSizeInGbs() {
    return this.getNumberAttribute('available_size_in_gbs');
  }

  // total_size_in_gbs - computed: false, optional: false, required: true
  private _totalSizeInGbs?: number; 
  public get totalSizeInGbs() {
    return this.getNumberAttribute('total_size_in_gbs');
  }
  public set totalSizeInGbs(value: number) {
    this._totalSizeInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSizeInGbsInput() {
    return this._totalSizeInGbs;
  }
}
export interface DatabaseExascaleDbStorageVaultTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#create DatabaseExascaleDbStorageVault#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#delete DatabaseExascaleDbStorageVault#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#update DatabaseExascaleDbStorageVault#update}
  */
  readonly update?: string;
}

export function databaseExascaleDbStorageVaultTimeoutsToTerraform(struct?: DatabaseExascaleDbStorageVaultTimeouts | cdktf.IResolvable): any {
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


export function databaseExascaleDbStorageVaultTimeoutsToHclTerraform(struct?: DatabaseExascaleDbStorageVaultTimeouts | cdktf.IResolvable): any {
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

export class DatabaseExascaleDbStorageVaultTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseExascaleDbStorageVaultTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseExascaleDbStorageVaultTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault oci_database_exascale_db_storage_vault}
*/
export class DatabaseExascaleDbStorageVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_exascale_db_storage_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseExascaleDbStorageVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseExascaleDbStorageVault to import
  * @param importFromId The id of the existing DatabaseExascaleDbStorageVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseExascaleDbStorageVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_exascale_db_storage_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exascale_db_storage_vault oci_database_exascale_db_storage_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseExascaleDbStorageVaultConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseExascaleDbStorageVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_exascale_db_storage_vault',
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
    this._additionalFlashCacheInPercent = config.additionalFlashCacheInPercent;
    this._autoscaleLimitInGbs = config.autoscaleLimitInGbs;
    this._availabilityDomain = config.availabilityDomain;
    this._clusterPlacementGroupId = config.clusterPlacementGroupId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAutoscaleEnabled = config.isAutoscaleEnabled;
    this._subscriptionId = config.subscriptionId;
    this._timeZone = config.timeZone;
    this._highCapacityDatabaseStorage.internalValue = config.highCapacityDatabaseStorage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_flash_cache_in_percent - computed: true, optional: true, required: false
  private _additionalFlashCacheInPercent?: number; 
  public get additionalFlashCacheInPercent() {
    return this.getNumberAttribute('additional_flash_cache_in_percent');
  }
  public set additionalFlashCacheInPercent(value: number) {
    this._additionalFlashCacheInPercent = value;
  }
  public resetAdditionalFlashCacheInPercent() {
    this._additionalFlashCacheInPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalFlashCacheInPercentInput() {
    return this._additionalFlashCacheInPercent;
  }

  // attached_shape_attributes - computed: true, optional: false, required: false
  public get attachedShapeAttributes() {
    return this.getListAttribute('attached_shape_attributes');
  }

  // autoscale_limit_in_gbs - computed: true, optional: true, required: false
  private _autoscaleLimitInGbs?: number; 
  public get autoscaleLimitInGbs() {
    return this.getNumberAttribute('autoscale_limit_in_gbs');
  }
  public set autoscaleLimitInGbs(value: number) {
    this._autoscaleLimitInGbs = value;
  }
  public resetAutoscaleLimitInGbs() {
    this._autoscaleLimitInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleLimitInGbsInput() {
    return this._autoscaleLimitInGbs;
  }

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

  // cluster_placement_group_id - computed: true, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // exadata_infrastructure_id - computed: true, optional: true, required: false
  private _exadataInfrastructureId?: string; 
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }
  public resetExadataInfrastructureId() {
    this._exadataInfrastructureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataInfrastructureIdInput() {
    return this._exadataInfrastructureId;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_autoscale_enabled - computed: true, optional: true, required: false
  private _isAutoscaleEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoscaleEnabled() {
    return this.getBooleanAttribute('is_autoscale_enabled');
  }
  public set isAutoscaleEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoscaleEnabled = value;
  }
  public resetIsAutoscaleEnabled() {
    this._isAutoscaleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoscaleEnabledInput() {
    return this._isAutoscaleEnabled;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
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

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // vm_cluster_count - computed: true, optional: false, required: false
  public get vmClusterCount() {
    return this.getNumberAttribute('vm_cluster_count');
  }

  // vm_cluster_ids - computed: true, optional: false, required: false
  public get vmClusterIds() {
    return this.getListAttribute('vm_cluster_ids');
  }

  // high_capacity_database_storage - computed: false, optional: false, required: true
  private _highCapacityDatabaseStorage = new DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference(this, "high_capacity_database_storage");
  public get highCapacityDatabaseStorage() {
    return this._highCapacityDatabaseStorage;
  }
  public putHighCapacityDatabaseStorage(value: DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage) {
    this._highCapacityDatabaseStorage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highCapacityDatabaseStorageInput() {
    return this._highCapacityDatabaseStorage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseExascaleDbStorageVaultTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseExascaleDbStorageVaultTimeouts) {
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
      additional_flash_cache_in_percent: cdktf.numberToTerraform(this._additionalFlashCacheInPercent),
      autoscale_limit_in_gbs: cdktf.numberToTerraform(this._autoscaleLimitInGbs),
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      cluster_placement_group_id: cdktf.stringToTerraform(this._clusterPlacementGroupId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      exadata_infrastructure_id: cdktf.stringToTerraform(this._exadataInfrastructureId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_autoscale_enabled: cdktf.booleanToTerraform(this._isAutoscaleEnabled),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      high_capacity_database_storage: databaseExascaleDbStorageVaultHighCapacityDatabaseStorageToTerraform(this._highCapacityDatabaseStorage.internalValue),
      timeouts: databaseExascaleDbStorageVaultTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_flash_cache_in_percent: {
        value: cdktf.numberToHclTerraform(this._additionalFlashCacheInPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autoscale_limit_in_gbs: {
        value: cdktf.numberToHclTerraform(this._autoscaleLimitInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_placement_group_id: {
        value: cdktf.stringToHclTerraform(this._clusterPlacementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._exadataInfrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_autoscale_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutoscaleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_capacity_database_storage: {
        value: databaseExascaleDbStorageVaultHighCapacityDatabaseStorageToHclTerraform(this._highCapacityDatabaseStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList",
      },
      timeouts: {
        value: databaseExascaleDbStorageVaultTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseExascaleDbStorageVaultTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
