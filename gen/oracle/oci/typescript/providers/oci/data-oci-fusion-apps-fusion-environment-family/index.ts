// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFusionAppsFusionEnvironmentFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_family#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamily#fusion_environment_family_id}
  */
  readonly fusionEnvironmentFamilyId: string;
}
export interface DataOciFusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy {
}

export function dataOciFusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyToTerraform(struct?: DataOciFusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrent_maintenance - computed: true, optional: false, required: false
  public get concurrentMaintenance() {
    return this.getStringAttribute('concurrent_maintenance');
  }

  // is_monthly_patching_enabled - computed: true, optional: false, required: false
  public get isMonthlyPatchingEnabled() {
    return this.getBooleanAttribute('is_monthly_patching_enabled');
  }

  // quarterly_upgrade_begin_times - computed: true, optional: false, required: false
  public get quarterlyUpgradeBeginTimes() {
    return this.getStringAttribute('quarterly_upgrade_begin_times');
  }
}

export class DataOciFusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference {
    return new DataOciFusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_family oci_fusion_apps_fusion_environment_family}
*/
export class DataOciFusionAppsFusionEnvironmentFamily extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fusion_apps_fusion_environment_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentFamily to import
  * @param importFromId The id of the existing DataOciFusionAppsFusionEnvironmentFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fusion_apps_fusion_environment_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_family oci_fusion_apps_fusion_environment_family} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFusionAppsFusionEnvironmentFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fusion_apps_fusion_environment_family',
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
    this._fusionEnvironmentFamilyId = config.fusionEnvironmentFamilyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // family_maintenance_policy - computed: true, optional: false, required: false
  private _familyMaintenancePolicy = new DataOciFusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyList(this, "family_maintenance_policy", false);
  public get familyMaintenancePolicy() {
    return this._familyMaintenancePolicy;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // fusion_environment_family_id - computed: false, optional: false, required: true
  private _fusionEnvironmentFamilyId?: string; 
  public get fusionEnvironmentFamilyId() {
    return this.getStringAttribute('fusion_environment_family_id');
  }
  public set fusionEnvironmentFamilyId(value: string) {
    this._fusionEnvironmentFamilyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fusionEnvironmentFamilyIdInput() {
    return this._fusionEnvironmentFamilyId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_subscription_update_needed - computed: true, optional: false, required: false
  public get isSubscriptionUpdateNeeded() {
    return this.getBooleanAttribute('is_subscription_update_needed');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_ids - computed: true, optional: false, required: false
  public get subscriptionIds() {
    return this.getListAttribute('subscription_ids');
  }

  // system_name - computed: true, optional: false, required: false
  public get systemName() {
    return this.getStringAttribute('system_name');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fusion_environment_family_id: cdktf.stringToTerraform(this._fusionEnvironmentFamilyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fusion_environment_family_id: {
        value: cdktf.stringToHclTerraform(this._fusionEnvironmentFamilyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
