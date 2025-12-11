// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_automatic_dr_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDisasterRecoveryAutomaticDrConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_automatic_dr_configuration#automatic_dr_configuration_id DataOciDisasterRecoveryAutomaticDrConfiguration#automatic_dr_configuration_id}
  */
  readonly automaticDrConfigurationId: string;
}
export interface DataOciDisasterRecoveryAutomaticDrConfigurationMembers {
}

export function dataOciDisasterRecoveryAutomaticDrConfigurationMembersToTerraform(struct?: DataOciDisasterRecoveryAutomaticDrConfigurationMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryAutomaticDrConfigurationMembersToHclTerraform(struct?: DataOciDisasterRecoveryAutomaticDrConfigurationMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryAutomaticDrConfigurationMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryAutomaticDrConfigurationMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryAutomaticDrConfigurationMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_auto_failover_enabled - computed: true, optional: false, required: false
  public get isAutoFailoverEnabled() {
    return this.getBooleanAttribute('is_auto_failover_enabled');
  }

  // is_auto_switchover_enabled - computed: true, optional: false, required: false
  public get isAutoSwitchoverEnabled() {
    return this.getBooleanAttribute('is_auto_switchover_enabled');
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getStringAttribute('member_id');
  }

  // member_type - computed: true, optional: false, required: false
  public get memberType() {
    return this.getStringAttribute('member_type');
  }
}

export class DataOciDisasterRecoveryAutomaticDrConfigurationMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryAutomaticDrConfigurationMembersOutputReference {
    return new DataOciDisasterRecoveryAutomaticDrConfigurationMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_automatic_dr_configuration oci_disaster_recovery_automatic_dr_configuration}
*/
export class DataOciDisasterRecoveryAutomaticDrConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_disaster_recovery_automatic_dr_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDisasterRecoveryAutomaticDrConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDisasterRecoveryAutomaticDrConfiguration to import
  * @param importFromId The id of the existing DataOciDisasterRecoveryAutomaticDrConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_automatic_dr_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDisasterRecoveryAutomaticDrConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_disaster_recovery_automatic_dr_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_automatic_dr_configuration oci_disaster_recovery_automatic_dr_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDisasterRecoveryAutomaticDrConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDisasterRecoveryAutomaticDrConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_disaster_recovery_automatic_dr_configuration',
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
    this._automaticDrConfigurationId = config.automaticDrConfigurationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_dr_configuration_id - computed: false, optional: false, required: true
  private _automaticDrConfigurationId?: string; 
  public get automaticDrConfigurationId() {
    return this.getStringAttribute('automatic_dr_configuration_id');
  }
  public set automaticDrConfigurationId(value: string) {
    this._automaticDrConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticDrConfigurationIdInput() {
    return this._automaticDrConfigurationId;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // default_failover_dr_plan_id - computed: true, optional: false, required: false
  public get defaultFailoverDrPlanId() {
    return this.getStringAttribute('default_failover_dr_plan_id');
  }

  // default_switchover_dr_plan_id - computed: true, optional: false, required: false
  public get defaultSwitchoverDrPlanId() {
    return this.getStringAttribute('default_switchover_dr_plan_id');
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

  // dr_protection_group_id - computed: true, optional: false, required: false
  public get drProtectionGroupId() {
    return this.getStringAttribute('dr_protection_group_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_automatic_dr_execution_submit_details - computed: true, optional: false, required: false
  public get lastAutomaticDrExecutionSubmitDetails() {
    return this.getStringAttribute('last_automatic_dr_execution_submit_details');
  }

  // last_automatic_dr_execution_submit_status - computed: true, optional: false, required: false
  public get lastAutomaticDrExecutionSubmitStatus() {
    return this.getStringAttribute('last_automatic_dr_execution_submit_status');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataOciDisasterRecoveryAutomaticDrConfigurationMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // time_last_automatic_dr_execution_submit_attempt - computed: true, optional: false, required: false
  public get timeLastAutomaticDrExecutionSubmitAttempt() {
    return this.getStringAttribute('time_last_automatic_dr_execution_submit_attempt');
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
      automatic_dr_configuration_id: cdktf.stringToTerraform(this._automaticDrConfigurationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_dr_configuration_id: {
        value: cdktf.stringToHclTerraform(this._automaticDrConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
