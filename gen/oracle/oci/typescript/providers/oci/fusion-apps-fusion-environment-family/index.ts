// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FusionAppsFusionEnvironmentFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#compartment_id FusionAppsFusionEnvironmentFamily#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#defined_tags FusionAppsFusionEnvironmentFamily#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#display_name FusionAppsFusionEnvironmentFamily#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#freeform_tags FusionAppsFusionEnvironmentFamily#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#id FusionAppsFusionEnvironmentFamily#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#subscription_ids FusionAppsFusionEnvironmentFamily#subscription_ids}
  */
  readonly subscriptionIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#time_updated FusionAppsFusionEnvironmentFamily#time_updated}
  */
  readonly timeUpdated?: string;
  /**
  * family_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#family_maintenance_policy FusionAppsFusionEnvironmentFamily#family_maintenance_policy}
  */
  readonly familyMaintenancePolicy?: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#timeouts FusionAppsFusionEnvironmentFamily#timeouts}
  */
  readonly timeouts?: FusionAppsFusionEnvironmentFamilyTimeouts;
}
export interface FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#concurrent_maintenance FusionAppsFusionEnvironmentFamily#concurrent_maintenance}
  */
  readonly concurrentMaintenance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#is_monthly_patching_enabled FusionAppsFusionEnvironmentFamily#is_monthly_patching_enabled}
  */
  readonly isMonthlyPatchingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#quarterly_upgrade_begin_times FusionAppsFusionEnvironmentFamily#quarterly_upgrade_begin_times}
  */
  readonly quarterlyUpgradeBeginTimes?: string;
}

export function fusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyToTerraform(struct?: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference | FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_maintenance: cdktf.stringToTerraform(struct!.concurrentMaintenance),
    is_monthly_patching_enabled: cdktf.booleanToTerraform(struct!.isMonthlyPatchingEnabled),
    quarterly_upgrade_begin_times: cdktf.stringToTerraform(struct!.quarterlyUpgradeBeginTimes),
  }
}


export function fusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyToHclTerraform(struct?: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference | FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrent_maintenance: {
      value: cdktf.stringToHclTerraform(struct!.concurrentMaintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_monthly_patching_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMonthlyPatchingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    quarterly_upgrade_begin_times: {
      value: cdktf.stringToHclTerraform(struct!.quarterlyUpgradeBeginTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentMaintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentMaintenance = this._concurrentMaintenance;
    }
    if (this._isMonthlyPatchingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMonthlyPatchingEnabled = this._isMonthlyPatchingEnabled;
    }
    if (this._quarterlyUpgradeBeginTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarterlyUpgradeBeginTimes = this._quarterlyUpgradeBeginTimes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._concurrentMaintenance = undefined;
      this._isMonthlyPatchingEnabled = undefined;
      this._quarterlyUpgradeBeginTimes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._concurrentMaintenance = value.concurrentMaintenance;
      this._isMonthlyPatchingEnabled = value.isMonthlyPatchingEnabled;
      this._quarterlyUpgradeBeginTimes = value.quarterlyUpgradeBeginTimes;
    }
  }

  // concurrent_maintenance - computed: true, optional: true, required: false
  private _concurrentMaintenance?: string; 
  public get concurrentMaintenance() {
    return this.getStringAttribute('concurrent_maintenance');
  }
  public set concurrentMaintenance(value: string) {
    this._concurrentMaintenance = value;
  }
  public resetConcurrentMaintenance() {
    this._concurrentMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentMaintenanceInput() {
    return this._concurrentMaintenance;
  }

  // is_monthly_patching_enabled - computed: true, optional: true, required: false
  private _isMonthlyPatchingEnabled?: boolean | cdktf.IResolvable; 
  public get isMonthlyPatchingEnabled() {
    return this.getBooleanAttribute('is_monthly_patching_enabled');
  }
  public set isMonthlyPatchingEnabled(value: boolean | cdktf.IResolvable) {
    this._isMonthlyPatchingEnabled = value;
  }
  public resetIsMonthlyPatchingEnabled() {
    this._isMonthlyPatchingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMonthlyPatchingEnabledInput() {
    return this._isMonthlyPatchingEnabled;
  }

  // quarterly_upgrade_begin_times - computed: true, optional: true, required: false
  private _quarterlyUpgradeBeginTimes?: string; 
  public get quarterlyUpgradeBeginTimes() {
    return this.getStringAttribute('quarterly_upgrade_begin_times');
  }
  public set quarterlyUpgradeBeginTimes(value: string) {
    this._quarterlyUpgradeBeginTimes = value;
  }
  public resetQuarterlyUpgradeBeginTimes() {
    this._quarterlyUpgradeBeginTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarterlyUpgradeBeginTimesInput() {
    return this._quarterlyUpgradeBeginTimes;
  }
}
export interface FusionAppsFusionEnvironmentFamilyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#create FusionAppsFusionEnvironmentFamily#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#delete FusionAppsFusionEnvironmentFamily#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#update FusionAppsFusionEnvironmentFamily#update}
  */
  readonly update?: string;
}

export function fusionAppsFusionEnvironmentFamilyTimeoutsToTerraform(struct?: FusionAppsFusionEnvironmentFamilyTimeouts | cdktf.IResolvable): any {
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


export function fusionAppsFusionEnvironmentFamilyTimeoutsToHclTerraform(struct?: FusionAppsFusionEnvironmentFamilyTimeouts | cdktf.IResolvable): any {
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

export class FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FusionAppsFusionEnvironmentFamilyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FusionAppsFusionEnvironmentFamilyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family oci_fusion_apps_fusion_environment_family}
*/
export class FusionAppsFusionEnvironmentFamily extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fusion_apps_fusion_environment_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FusionAppsFusionEnvironmentFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FusionAppsFusionEnvironmentFamily to import
  * @param importFromId The id of the existing FusionAppsFusionEnvironmentFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FusionAppsFusionEnvironmentFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fusion_apps_fusion_environment_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fusion_apps_fusion_environment_family oci_fusion_apps_fusion_environment_family} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FusionAppsFusionEnvironmentFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: FusionAppsFusionEnvironmentFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fusion_apps_fusion_environment_family',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._subscriptionIds = config.subscriptionIds;
    this._timeUpdated = config.timeUpdated;
    this._familyMaintenancePolicy.internalValue = config.familyMaintenancePolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // subscription_ids - computed: false, optional: false, required: true
  private _subscriptionIds?: string[]; 
  public get subscriptionIds() {
    return this.getListAttribute('subscription_ids');
  }
  public set subscriptionIds(value: string[]) {
    this._subscriptionIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdsInput() {
    return this._subscriptionIds;
  }

  // system_name - computed: true, optional: false, required: false
  public get systemName() {
    return this.getStringAttribute('system_name');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: false, optional: true, required: false
  private _timeUpdated?: string; 
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
  public set timeUpdated(value: string) {
    this._timeUpdated = value;
  }
  public resetTimeUpdated() {
    this._timeUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUpdatedInput() {
    return this._timeUpdated;
  }

  // family_maintenance_policy - computed: false, optional: true, required: false
  private _familyMaintenancePolicy = new FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference(this, "family_maintenance_policy");
  public get familyMaintenancePolicy() {
    return this._familyMaintenancePolicy;
  }
  public putFamilyMaintenancePolicy(value: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy) {
    this._familyMaintenancePolicy.internalValue = value;
  }
  public resetFamilyMaintenancePolicy() {
    this._familyMaintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyMaintenancePolicyInput() {
    return this._familyMaintenancePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FusionAppsFusionEnvironmentFamilyTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriptionIds),
      time_updated: cdktf.stringToTerraform(this._timeUpdated),
      family_maintenance_policy: fusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyToTerraform(this._familyMaintenancePolicy.internalValue),
      timeouts: fusionAppsFusionEnvironmentFamilyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      subscription_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriptionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      time_updated: {
        value: cdktf.stringToHclTerraform(this._timeUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family_maintenance_policy: {
        value: fusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyToHclTerraform(this._familyMaintenancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyList",
      },
      timeouts: {
        value: fusionAppsFusionEnvironmentFamilyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FusionAppsFusionEnvironmentFamilyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
