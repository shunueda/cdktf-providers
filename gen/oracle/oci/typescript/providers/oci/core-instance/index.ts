// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#async CoreInstance#async}
  */
  readonly async?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}
  */
  readonly computeClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}
  */
  readonly dedicatedVmHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#display_name CoreInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}
  */
  readonly extendedMetadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}
  */
  readonly hostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#id CoreInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#image CoreInstance#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}
  */
  readonly instanceConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}
  */
  readonly ipxeScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_ai_enterprise_enabled CoreInstance#is_ai_enterprise_enabled}
  */
  readonly isAiEnterpriseEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#metadata CoreInstance#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}
  */
  readonly preserveBootVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}
  */
  readonly preserveDataVolumesCreatedAtLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#shape CoreInstance#shape}
  */
  readonly shape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#state CoreInstance#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}
  */
  readonly updateOperationConstraint?: string;
  /**
  * agent_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#agent_config CoreInstance#agent_config}
  */
  readonly agentConfig?: CoreInstanceAgentConfig;
  /**
  * availability_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#availability_config CoreInstance#availability_config}
  */
  readonly availabilityConfig?: CoreInstanceAvailabilityConfig;
  /**
  * create_vnic_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#create_vnic_details CoreInstance#create_vnic_details}
  */
  readonly createVnicDetails?: CoreInstanceCreateVnicDetails;
  /**
  * instance_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#instance_options CoreInstance#instance_options}
  */
  readonly instanceOptions?: CoreInstanceInstanceOptions;
  /**
  * launch_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#launch_options CoreInstance#launch_options}
  */
  readonly launchOptions?: CoreInstanceLaunchOptions;
  /**
  * launch_volume_attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#launch_volume_attachments CoreInstance#launch_volume_attachments}
  */
  readonly launchVolumeAttachments?: CoreInstanceLaunchVolumeAttachments[] | cdktf.IResolvable;
  /**
  * licensing_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#licensing_configs CoreInstance#licensing_configs}
  */
  readonly licensingConfigs?: CoreInstanceLicensingConfigs;
  /**
  * placement_constraint_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#placement_constraint_details CoreInstance#placement_constraint_details}
  */
  readonly placementConstraintDetails?: CoreInstancePlacementConstraintDetails;
  /**
  * platform_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#platform_config CoreInstance#platform_config}
  */
  readonly platformConfig?: CoreInstancePlatformConfig;
  /**
  * preemptible_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#preemptible_instance_config CoreInstance#preemptible_instance_config}
  */
  readonly preemptibleInstanceConfig?: CoreInstancePreemptibleInstanceConfig;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#shape_config CoreInstance#shape_config}
  */
  readonly shapeConfig?: CoreInstanceShapeConfig;
  /**
  * source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#source_details CoreInstance#source_details}
  */
  readonly sourceDetails?: CoreInstanceSourceDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#timeouts CoreInstance#timeouts}
  */
  readonly timeouts?: CoreInstanceTimeouts;
}
export interface CoreInstanceAgentConfigPluginsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#desired_state CoreInstance#desired_state}
  */
  readonly desiredState: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#name CoreInstance#name}
  */
  readonly name: string;
}

export function coreInstanceAgentConfigPluginsConfigToTerraform(struct?: CoreInstanceAgentConfigPluginsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function coreInstanceAgentConfigPluginsConfigToHclTerraform(struct?: CoreInstanceAgentConfigPluginsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_state: {
      value: cdktf.stringToHclTerraform(struct!.desiredState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceAgentConfigPluginsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CoreInstanceAgentConfigPluginsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceAgentConfigPluginsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredState = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredState = value.desiredState;
      this._name = value.name;
    }
  }

  // desired_state - computed: false, optional: false, required: true
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class CoreInstanceAgentConfigPluginsConfigList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceAgentConfigPluginsConfig[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceAgentConfigPluginsConfigOutputReference {
    return new CoreInstanceAgentConfigPluginsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceAgentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#are_all_plugins_disabled CoreInstance#are_all_plugins_disabled}
  */
  readonly areAllPluginsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_management_disabled CoreInstance#is_management_disabled}
  */
  readonly isManagementDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_monitoring_disabled CoreInstance#is_monitoring_disabled}
  */
  readonly isMonitoringDisabled?: boolean | cdktf.IResolvable;
  /**
  * plugins_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#plugins_config CoreInstance#plugins_config}
  */
  readonly pluginsConfig?: CoreInstanceAgentConfigPluginsConfig[] | cdktf.IResolvable;
}

export function coreInstanceAgentConfigToTerraform(struct?: CoreInstanceAgentConfigOutputReference | CoreInstanceAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_all_plugins_disabled: cdktf.booleanToTerraform(struct!.areAllPluginsDisabled),
    is_management_disabled: cdktf.booleanToTerraform(struct!.isManagementDisabled),
    is_monitoring_disabled: cdktf.booleanToTerraform(struct!.isMonitoringDisabled),
    plugins_config: cdktf.listMapper(coreInstanceAgentConfigPluginsConfigToTerraform, true)(struct!.pluginsConfig),
  }
}


export function coreInstanceAgentConfigToHclTerraform(struct?: CoreInstanceAgentConfigOutputReference | CoreInstanceAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_all_plugins_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.areAllPluginsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_management_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isManagementDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_monitoring_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMonitoringDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plugins_config: {
      value: cdktf.listMapperHcl(coreInstanceAgentConfigPluginsConfigToHclTerraform, true)(struct!.pluginsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceAgentConfigPluginsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areAllPluginsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.areAllPluginsDisabled = this._areAllPluginsDisabled;
    }
    if (this._isManagementDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isManagementDisabled = this._isManagementDisabled;
    }
    if (this._isMonitoringDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMonitoringDisabled = this._isMonitoringDisabled;
    }
    if (this._pluginsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginsConfig = this._pluginsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areAllPluginsDisabled = undefined;
      this._isManagementDisabled = undefined;
      this._isMonitoringDisabled = undefined;
      this._pluginsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areAllPluginsDisabled = value.areAllPluginsDisabled;
      this._isManagementDisabled = value.isManagementDisabled;
      this._isMonitoringDisabled = value.isMonitoringDisabled;
      this._pluginsConfig.internalValue = value.pluginsConfig;
    }
  }

  // are_all_plugins_disabled - computed: true, optional: true, required: false
  private _areAllPluginsDisabled?: boolean | cdktf.IResolvable; 
  public get areAllPluginsDisabled() {
    return this.getBooleanAttribute('are_all_plugins_disabled');
  }
  public set areAllPluginsDisabled(value: boolean | cdktf.IResolvable) {
    this._areAllPluginsDisabled = value;
  }
  public resetAreAllPluginsDisabled() {
    this._areAllPluginsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areAllPluginsDisabledInput() {
    return this._areAllPluginsDisabled;
  }

  // is_management_disabled - computed: true, optional: true, required: false
  private _isManagementDisabled?: boolean | cdktf.IResolvable; 
  public get isManagementDisabled() {
    return this.getBooleanAttribute('is_management_disabled');
  }
  public set isManagementDisabled(value: boolean | cdktf.IResolvable) {
    this._isManagementDisabled = value;
  }
  public resetIsManagementDisabled() {
    this._isManagementDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManagementDisabledInput() {
    return this._isManagementDisabled;
  }

  // is_monitoring_disabled - computed: true, optional: true, required: false
  private _isMonitoringDisabled?: boolean | cdktf.IResolvable; 
  public get isMonitoringDisabled() {
    return this.getBooleanAttribute('is_monitoring_disabled');
  }
  public set isMonitoringDisabled(value: boolean | cdktf.IResolvable) {
    this._isMonitoringDisabled = value;
  }
  public resetIsMonitoringDisabled() {
    this._isMonitoringDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMonitoringDisabledInput() {
    return this._isMonitoringDisabled;
  }

  // plugins_config - computed: false, optional: true, required: false
  private _pluginsConfig = new CoreInstanceAgentConfigPluginsConfigList(this, "plugins_config", false);
  public get pluginsConfig() {
    return this._pluginsConfig;
  }
  public putPluginsConfig(value: CoreInstanceAgentConfigPluginsConfig[] | cdktf.IResolvable) {
    this._pluginsConfig.internalValue = value;
  }
  public resetPluginsConfig() {
    this._pluginsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsConfigInput() {
    return this._pluginsConfig.internalValue;
  }
}
export interface CoreInstanceAvailabilityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_live_migration_preferred CoreInstance#is_live_migration_preferred}
  */
  readonly isLiveMigrationPreferred?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#recovery_action CoreInstance#recovery_action}
  */
  readonly recoveryAction?: string;
}

export function coreInstanceAvailabilityConfigToTerraform(struct?: CoreInstanceAvailabilityConfigOutputReference | CoreInstanceAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_live_migration_preferred: cdktf.booleanToTerraform(struct!.isLiveMigrationPreferred),
    recovery_action: cdktf.stringToTerraform(struct!.recoveryAction),
  }
}


export function coreInstanceAvailabilityConfigToHclTerraform(struct?: CoreInstanceAvailabilityConfigOutputReference | CoreInstanceAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_live_migration_preferred: {
      value: cdktf.booleanToHclTerraform(struct!.isLiveMigrationPreferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recovery_action: {
      value: cdktf.stringToHclTerraform(struct!.recoveryAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceAvailabilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceAvailabilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLiveMigrationPreferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLiveMigrationPreferred = this._isLiveMigrationPreferred;
    }
    if (this._recoveryAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryAction = this._recoveryAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceAvailabilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isLiveMigrationPreferred = undefined;
      this._recoveryAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isLiveMigrationPreferred = value.isLiveMigrationPreferred;
      this._recoveryAction = value.recoveryAction;
    }
  }

  // is_live_migration_preferred - computed: true, optional: true, required: false
  private _isLiveMigrationPreferred?: boolean | cdktf.IResolvable; 
  public get isLiveMigrationPreferred() {
    return this.getBooleanAttribute('is_live_migration_preferred');
  }
  public set isLiveMigrationPreferred(value: boolean | cdktf.IResolvable) {
    this._isLiveMigrationPreferred = value;
  }
  public resetIsLiveMigrationPreferred() {
    this._isLiveMigrationPreferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLiveMigrationPreferredInput() {
    return this._isLiveMigrationPreferred;
  }

  // recovery_action - computed: true, optional: true, required: false
  private _recoveryAction?: string; 
  public get recoveryAction() {
    return this.getStringAttribute('recovery_action');
  }
  public set recoveryAction(value: string) {
    this._recoveryAction = value;
  }
  public resetRecoveryAction() {
    this._recoveryAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryActionInput() {
    return this._recoveryAction;
  }
}
export interface CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#ipv6address CoreInstance#ipv6address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#ipv6subnet_cidr CoreInstance#ipv6subnet_cidr}
  */
  readonly ipv6SubnetCidr?: string;
}

export function coreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6subnet_cidr: cdktf.stringToTerraform(struct!.ipv6SubnetCidr),
  }
}


export function coreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6SubnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6SubnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SubnetCidr = this._ipv6SubnetCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
      this._ipv6SubnetCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
      this._ipv6SubnetCidr = value.ipv6SubnetCidr;
    }
  }

  // ipv6address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6subnet_cidr - computed: true, optional: true, required: false
  private _ipv6SubnetCidr?: string; 
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
  public set ipv6SubnetCidr(value: string) {
    this._ipv6SubnetCidr = value;
  }
  public resetIpv6SubnetCidr() {
    this._ipv6SubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetCidrInput() {
    return this._ipv6SubnetCidr;
  }
}

export class CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceCreateVnicDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#assign_ipv6ip CoreInstance#assign_ipv6ip}
  */
  readonly assignIpv6Ip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#assign_private_dns_record CoreInstance#assign_private_dns_record}
  */
  readonly assignPrivateDnsRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#assign_public_ip CoreInstance#assign_public_ip}
  */
  readonly assignPublicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#display_name CoreInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}
  */
  readonly hostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#nsg_ids CoreInstance#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#private_ip CoreInstance#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#skip_source_dest_check CoreInstance#skip_source_dest_check}
  */
  readonly skipSourceDestCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#subnet_cidr CoreInstance#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#vlan_id CoreInstance#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * ipv6address_ipv6subnet_cidr_pair_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#ipv6address_ipv6subnet_cidr_pair_details CoreInstance#ipv6address_ipv6subnet_cidr_pair_details}
  */
  readonly ipv6AddressIpv6SubnetCidrPairDetails?: CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable;
}

export function coreInstanceCreateVnicDetailsToTerraform(struct?: CoreInstanceCreateVnicDetailsOutputReference | CoreInstanceCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_ipv6ip: cdktf.booleanToTerraform(struct!.assignIpv6Ip),
    assign_private_dns_record: cdktf.booleanToTerraform(struct!.assignPrivateDnsRecord),
    assign_public_ip: cdktf.stringToTerraform(struct!.assignPublicIp),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    hostname_label: cdktf.stringToTerraform(struct!.hostnameLabel),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityAttributes),
    skip_source_dest_check: cdktf.booleanToTerraform(struct!.skipSourceDestCheck),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
    ipv6address_ipv6subnet_cidr_pair_details: cdktf.listMapper(coreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
  }
}


export function coreInstanceCreateVnicDetailsToHclTerraform(struct?: CoreInstanceCreateVnicDetailsOutputReference | CoreInstanceCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_ipv6ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignIpv6Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_private_dns_record: {
      value: cdktf.booleanToHclTerraform(struct!.assignPrivateDnsRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_public_ip: {
      value: cdktf.stringToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hostname_label: {
      value: cdktf.stringToHclTerraform(struct!.hostnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skip_source_dest_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipSourceDestCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6address_ipv6subnet_cidr_pair_details: {
      value: cdktf.listMapperHcl(coreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIpv6Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIpv6Ip = this._assignIpv6Ip;
    }
    if (this._assignPrivateDnsRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPrivateDnsRecord = this._assignPrivateDnsRecord;
    }
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._hostnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameLabel = this._hostnameLabel;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._securityAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityAttributes = this._securityAttributes;
    }
    if (this._skipSourceDestCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSourceDestCheck = this._skipSourceDestCheck;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressIpv6SubnetCidrPairDetails = this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignIpv6Ip = undefined;
      this._assignPrivateDnsRecord = undefined;
      this._assignPublicIp = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._hostnameLabel = undefined;
      this._nsgIds = undefined;
      this._privateIp = undefined;
      this._securityAttributes = undefined;
      this._skipSourceDestCheck = undefined;
      this._subnetCidr = undefined;
      this._subnetId = undefined;
      this._vlanId = undefined;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignIpv6Ip = value.assignIpv6Ip;
      this._assignPrivateDnsRecord = value.assignPrivateDnsRecord;
      this._assignPublicIp = value.assignPublicIp;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._hostnameLabel = value.hostnameLabel;
      this._nsgIds = value.nsgIds;
      this._privateIp = value.privateIp;
      this._securityAttributes = value.securityAttributes;
      this._skipSourceDestCheck = value.skipSourceDestCheck;
      this._subnetCidr = value.subnetCidr;
      this._subnetId = value.subnetId;
      this._vlanId = value.vlanId;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value.ipv6AddressIpv6SubnetCidrPairDetails;
    }
  }

  // assign_ipv6ip - computed: true, optional: true, required: false
  private _assignIpv6Ip?: boolean | cdktf.IResolvable; 
  public get assignIpv6Ip() {
    return this.getBooleanAttribute('assign_ipv6ip');
  }
  public set assignIpv6Ip(value: boolean | cdktf.IResolvable) {
    this._assignIpv6Ip = value;
  }
  public resetAssignIpv6Ip() {
    this._assignIpv6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpv6IpInput() {
    return this._assignIpv6Ip;
  }

  // assign_private_dns_record - computed: false, optional: true, required: false
  private _assignPrivateDnsRecord?: boolean | cdktf.IResolvable; 
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }
  public set assignPrivateDnsRecord(value: boolean | cdktf.IResolvable) {
    this._assignPrivateDnsRecord = value;
  }
  public resetAssignPrivateDnsRecord() {
    this._assignPrivateDnsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPrivateDnsRecordInput() {
    return this._assignPrivateDnsRecord;
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: string; 
  public get assignPublicIp() {
    return this.getStringAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: string) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
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

  // hostname_label - computed: true, optional: true, required: false
  private _hostnameLabel?: string; 
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }
  public set hostnameLabel(value: string) {
    this._hostnameLabel = value;
  }
  public resetHostnameLabel() {
    this._hostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLabelInput() {
    return this._hostnameLabel;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // skip_source_dest_check - computed: true, optional: true, required: false
  private _skipSourceDestCheck?: boolean | cdktf.IResolvable; 
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }
  public set skipSourceDestCheck(value: boolean | cdktf.IResolvable) {
    this._skipSourceDestCheck = value;
  }
  public resetSkipSourceDestCheck() {
    this._skipSourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSourceDestCheckInput() {
    return this._skipSourceDestCheck;
  }

  // subnet_cidr - computed: true, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: false, optional: true, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }
  public putIpv6AddressIpv6SubnetCidrPairDetails(value: CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable) {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value;
  }
  public resetIpv6AddressIpv6SubnetCidrPairDetails() {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIpv6SubnetCidrPairDetailsInput() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue;
  }
}
export interface CoreInstanceInstanceOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#are_legacy_imds_endpoints_disabled CoreInstance#are_legacy_imds_endpoints_disabled}
  */
  readonly areLegacyImdsEndpointsDisabled?: boolean | cdktf.IResolvable;
}

export function coreInstanceInstanceOptionsToTerraform(struct?: CoreInstanceInstanceOptionsOutputReference | CoreInstanceInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_legacy_imds_endpoints_disabled: cdktf.booleanToTerraform(struct!.areLegacyImdsEndpointsDisabled),
  }
}


export function coreInstanceInstanceOptionsToHclTerraform(struct?: CoreInstanceInstanceOptionsOutputReference | CoreInstanceInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_legacy_imds_endpoints_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.areLegacyImdsEndpointsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceInstanceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceInstanceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areLegacyImdsEndpointsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.areLegacyImdsEndpointsDisabled = this._areLegacyImdsEndpointsDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceInstanceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areLegacyImdsEndpointsDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areLegacyImdsEndpointsDisabled = value.areLegacyImdsEndpointsDisabled;
    }
  }

  // are_legacy_imds_endpoints_disabled - computed: true, optional: true, required: false
  private _areLegacyImdsEndpointsDisabled?: boolean | cdktf.IResolvable; 
  public get areLegacyImdsEndpointsDisabled() {
    return this.getBooleanAttribute('are_legacy_imds_endpoints_disabled');
  }
  public set areLegacyImdsEndpointsDisabled(value: boolean | cdktf.IResolvable) {
    this._areLegacyImdsEndpointsDisabled = value;
  }
  public resetAreLegacyImdsEndpointsDisabled() {
    this._areLegacyImdsEndpointsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areLegacyImdsEndpointsDisabledInput() {
    return this._areLegacyImdsEndpointsDisabled;
  }
}
export interface CoreInstanceLaunchOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#boot_volume_type CoreInstance#boot_volume_type}
  */
  readonly bootVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#firmware CoreInstance#firmware}
  */
  readonly firmware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_consistent_volume_naming_enabled CoreInstance#is_consistent_volume_naming_enabled}
  */
  readonly isConsistentVolumeNamingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#network_type CoreInstance#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#remote_data_volume_type CoreInstance#remote_data_volume_type}
  */
  readonly remoteDataVolumeType?: string;
}

export function coreInstanceLaunchOptionsToTerraform(struct?: CoreInstanceLaunchOptionsOutputReference | CoreInstanceLaunchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_volume_type: cdktf.stringToTerraform(struct!.bootVolumeType),
    firmware: cdktf.stringToTerraform(struct!.firmware),
    is_consistent_volume_naming_enabled: cdktf.booleanToTerraform(struct!.isConsistentVolumeNamingEnabled),
    is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(struct!.isPvEncryptionInTransitEnabled),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    remote_data_volume_type: cdktf.stringToTerraform(struct!.remoteDataVolumeType),
  }
}


export function coreInstanceLaunchOptionsToHclTerraform(struct?: CoreInstanceLaunchOptionsOutputReference | CoreInstanceLaunchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firmware: {
      value: cdktf.stringToHclTerraform(struct!.firmware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_consistent_volume_naming_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isConsistentVolumeNamingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_pv_encryption_in_transit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPvEncryptionInTransitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_data_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.remoteDataVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceLaunchOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceLaunchOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeType = this._bootVolumeType;
    }
    if (this._firmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmware = this._firmware;
    }
    if (this._isConsistentVolumeNamingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConsistentVolumeNamingEnabled = this._isConsistentVolumeNamingEnabled;
    }
    if (this._isPvEncryptionInTransitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPvEncryptionInTransitEnabled = this._isPvEncryptionInTransitEnabled;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._remoteDataVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDataVolumeType = this._remoteDataVolumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceLaunchOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootVolumeType = undefined;
      this._firmware = undefined;
      this._isConsistentVolumeNamingEnabled = undefined;
      this._isPvEncryptionInTransitEnabled = undefined;
      this._networkType = undefined;
      this._remoteDataVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootVolumeType = value.bootVolumeType;
      this._firmware = value.firmware;
      this._isConsistentVolumeNamingEnabled = value.isConsistentVolumeNamingEnabled;
      this._isPvEncryptionInTransitEnabled = value.isPvEncryptionInTransitEnabled;
      this._networkType = value.networkType;
      this._remoteDataVolumeType = value.remoteDataVolumeType;
    }
  }

  // boot_volume_type - computed: true, optional: true, required: false
  private _bootVolumeType?: string; 
  public get bootVolumeType() {
    return this.getStringAttribute('boot_volume_type');
  }
  public set bootVolumeType(value: string) {
    this._bootVolumeType = value;
  }
  public resetBootVolumeType() {
    this._bootVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeTypeInput() {
    return this._bootVolumeType;
  }

  // firmware - computed: true, optional: true, required: false
  private _firmware?: string; 
  public get firmware() {
    return this.getStringAttribute('firmware');
  }
  public set firmware(value: string) {
    this._firmware = value;
  }
  public resetFirmware() {
    this._firmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareInput() {
    return this._firmware;
  }

  // is_consistent_volume_naming_enabled - computed: true, optional: true, required: false
  private _isConsistentVolumeNamingEnabled?: boolean | cdktf.IResolvable; 
  public get isConsistentVolumeNamingEnabled() {
    return this.getBooleanAttribute('is_consistent_volume_naming_enabled');
  }
  public set isConsistentVolumeNamingEnabled(value: boolean | cdktf.IResolvable) {
    this._isConsistentVolumeNamingEnabled = value;
  }
  public resetIsConsistentVolumeNamingEnabled() {
    this._isConsistentVolumeNamingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConsistentVolumeNamingEnabledInput() {
    return this._isConsistentVolumeNamingEnabled;
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isPvEncryptionInTransitEnabled = value;
  }
  public resetIsPvEncryptionInTransitEnabled() {
    this._isPvEncryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPvEncryptionInTransitEnabledInput() {
    return this._isPvEncryptionInTransitEnabled;
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // remote_data_volume_type - computed: true, optional: true, required: false
  private _remoteDataVolumeType?: string; 
  public get remoteDataVolumeType() {
    return this.getStringAttribute('remote_data_volume_type');
  }
  public set remoteDataVolumeType(value: string) {
    this._remoteDataVolumeType = value;
  }
  public resetRemoteDataVolumeType() {
    this._remoteDataVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDataVolumeTypeInput() {
    return this._remoteDataVolumeType;
  }
}
export interface CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#display_name CoreInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#size_in_gbs CoreInstance#size_in_gbs}
  */
  readonly sizeInGbs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#volume_creation_type CoreInstance#volume_creation_type}
  */
  readonly volumeCreationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#vpus_per_gb CoreInstance#vpus_per_gb}
  */
  readonly vpusPerGb?: string;
}

export function coreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsToTerraform(struct?: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference | CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    size_in_gbs: cdktf.stringToTerraform(struct!.sizeInGbs),
    volume_creation_type: cdktf.stringToTerraform(struct!.volumeCreationType),
    vpus_per_gb: cdktf.stringToTerraform(struct!.vpusPerGb),
  }
}


export function coreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsToHclTerraform(struct?: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference | CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.sizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_creation_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeCreationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpus_per_gb: {
      value: cdktf.stringToHclTerraform(struct!.vpusPerGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._sizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGbs = this._sizeInGbs;
    }
    if (this._volumeCreationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeCreationType = this._volumeCreationType;
    }
    if (this._vpusPerGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpusPerGb = this._vpusPerGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._displayName = undefined;
      this._kmsKeyId = undefined;
      this._sizeInGbs = undefined;
      this._volumeCreationType = undefined;
      this._vpusPerGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._displayName = value.displayName;
      this._kmsKeyId = value.kmsKeyId;
      this._sizeInGbs = value.sizeInGbs;
      this._volumeCreationType = value.volumeCreationType;
      this._vpusPerGb = value.vpusPerGb;
    }
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // size_in_gbs - computed: false, optional: false, required: true
  private _sizeInGbs?: string; 
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }
  public set sizeInGbs(value: string) {
    this._sizeInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbsInput() {
    return this._sizeInGbs;
  }

  // volume_creation_type - computed: false, optional: false, required: true
  private _volumeCreationType?: string; 
  public get volumeCreationType() {
    return this.getStringAttribute('volume_creation_type');
  }
  public set volumeCreationType(value: string) {
    this._volumeCreationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeCreationTypeInput() {
    return this._volumeCreationType;
  }

  // vpus_per_gb - computed: true, optional: true, required: false
  private _vpusPerGb?: string; 
  public get vpusPerGb() {
    return this.getStringAttribute('vpus_per_gb');
  }
  public set vpusPerGb(value: string) {
    this._vpusPerGb = value;
  }
  public resetVpusPerGb() {
    this._vpusPerGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpusPerGbInput() {
    return this._vpusPerGb;
  }
}
export interface CoreInstanceLaunchVolumeAttachments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#device CoreInstance#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#display_name CoreInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#encryption_in_transit_type CoreInstance#encryption_in_transit_type}
  */
  readonly encryptionInTransitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_agent_auto_iscsi_login_enabled CoreInstance#is_agent_auto_iscsi_login_enabled}
  */
  readonly isAgentAutoIscsiLoginEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_read_only CoreInstance#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_shareable CoreInstance#is_shareable}
  */
  readonly isShareable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#type CoreInstance#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#use_chap CoreInstance#use_chap}
  */
  readonly useChap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#volume_id CoreInstance#volume_id}
  */
  readonly volumeId?: string;
  /**
  * launch_create_volume_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#launch_create_volume_details CoreInstance#launch_create_volume_details}
  */
  readonly launchCreateVolumeDetails?: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails;
}

export function coreInstanceLaunchVolumeAttachmentsToTerraform(struct?: CoreInstanceLaunchVolumeAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    encryption_in_transit_type: cdktf.stringToTerraform(struct!.encryptionInTransitType),
    is_agent_auto_iscsi_login_enabled: cdktf.booleanToTerraform(struct!.isAgentAutoIscsiLoginEnabled),
    is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(struct!.isPvEncryptionInTransitEnabled),
    is_read_only: cdktf.booleanToTerraform(struct!.isReadOnly),
    is_shareable: cdktf.booleanToTerraform(struct!.isShareable),
    type: cdktf.stringToTerraform(struct!.type),
    use_chap: cdktf.booleanToTerraform(struct!.useChap),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
    launch_create_volume_details: coreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsToTerraform(struct!.launchCreateVolumeDetails),
  }
}


export function coreInstanceLaunchVolumeAttachmentsToHclTerraform(struct?: CoreInstanceLaunchVolumeAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_in_transit_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionInTransitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_agent_auto_iscsi_login_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAgentAutoIscsiLoginEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_pv_encryption_in_transit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPvEncryptionInTransitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.isReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_shareable: {
      value: cdktf.booleanToHclTerraform(struct!.isShareable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_chap: {
      value: cdktf.booleanToHclTerraform(struct!.useChap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_create_volume_details: {
      value: coreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsToHclTerraform(struct!.launchCreateVolumeDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceLaunchVolumeAttachmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CoreInstanceLaunchVolumeAttachments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._encryptionInTransitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionInTransitType = this._encryptionInTransitType;
    }
    if (this._isAgentAutoIscsiLoginEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAgentAutoIscsiLoginEnabled = this._isAgentAutoIscsiLoginEnabled;
    }
    if (this._isPvEncryptionInTransitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPvEncryptionInTransitEnabled = this._isPvEncryptionInTransitEnabled;
    }
    if (this._isReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReadOnly = this._isReadOnly;
    }
    if (this._isShareable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isShareable = this._isShareable;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useChap !== undefined) {
      hasAnyValues = true;
      internalValueResult.useChap = this._useChap;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    if (this._launchCreateVolumeDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchCreateVolumeDetails = this._launchCreateVolumeDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceLaunchVolumeAttachments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
      this._displayName = undefined;
      this._encryptionInTransitType = undefined;
      this._isAgentAutoIscsiLoginEnabled = undefined;
      this._isPvEncryptionInTransitEnabled = undefined;
      this._isReadOnly = undefined;
      this._isShareable = undefined;
      this._type = undefined;
      this._useChap = undefined;
      this._volumeId = undefined;
      this._launchCreateVolumeDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
      this._displayName = value.displayName;
      this._encryptionInTransitType = value.encryptionInTransitType;
      this._isAgentAutoIscsiLoginEnabled = value.isAgentAutoIscsiLoginEnabled;
      this._isPvEncryptionInTransitEnabled = value.isPvEncryptionInTransitEnabled;
      this._isReadOnly = value.isReadOnly;
      this._isShareable = value.isShareable;
      this._type = value.type;
      this._useChap = value.useChap;
      this._volumeId = value.volumeId;
      this._launchCreateVolumeDetails.internalValue = value.launchCreateVolumeDetails;
    }
  }

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
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

  // encryption_in_transit_type - computed: true, optional: true, required: false
  private _encryptionInTransitType?: string; 
  public get encryptionInTransitType() {
    return this.getStringAttribute('encryption_in_transit_type');
  }
  public set encryptionInTransitType(value: string) {
    this._encryptionInTransitType = value;
  }
  public resetEncryptionInTransitType() {
    this._encryptionInTransitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInTransitTypeInput() {
    return this._encryptionInTransitType;
  }

  // is_agent_auto_iscsi_login_enabled - computed: true, optional: true, required: false
  private _isAgentAutoIscsiLoginEnabled?: boolean | cdktf.IResolvable; 
  public get isAgentAutoIscsiLoginEnabled() {
    return this.getBooleanAttribute('is_agent_auto_iscsi_login_enabled');
  }
  public set isAgentAutoIscsiLoginEnabled(value: boolean | cdktf.IResolvable) {
    this._isAgentAutoIscsiLoginEnabled = value;
  }
  public resetIsAgentAutoIscsiLoginEnabled() {
    this._isAgentAutoIscsiLoginEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAgentAutoIscsiLoginEnabledInput() {
    return this._isAgentAutoIscsiLoginEnabled;
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isPvEncryptionInTransitEnabled = value;
  }
  public resetIsPvEncryptionInTransitEnabled() {
    this._isPvEncryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPvEncryptionInTransitEnabledInput() {
    return this._isPvEncryptionInTransitEnabled;
  }

  // is_read_only - computed: true, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // is_shareable - computed: true, optional: true, required: false
  private _isShareable?: boolean | cdktf.IResolvable; 
  public get isShareable() {
    return this.getBooleanAttribute('is_shareable');
  }
  public set isShareable(value: boolean | cdktf.IResolvable) {
    this._isShareable = value;
  }
  public resetIsShareable() {
    this._isShareable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isShareableInput() {
    return this._isShareable;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_chap - computed: true, optional: true, required: false
  private _useChap?: boolean | cdktf.IResolvable; 
  public get useChap() {
    return this.getBooleanAttribute('use_chap');
  }
  public set useChap(value: boolean | cdktf.IResolvable) {
    this._useChap = value;
  }
  public resetUseChap() {
    this._useChap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useChapInput() {
    return this._useChap;
  }

  // volume_id - computed: true, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // launch_create_volume_details - computed: false, optional: true, required: false
  private _launchCreateVolumeDetails = new CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference(this, "launch_create_volume_details");
  public get launchCreateVolumeDetails() {
    return this._launchCreateVolumeDetails;
  }
  public putLaunchCreateVolumeDetails(value: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails) {
    this._launchCreateVolumeDetails.internalValue = value;
  }
  public resetLaunchCreateVolumeDetails() {
    this._launchCreateVolumeDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchCreateVolumeDetailsInput() {
    return this._launchCreateVolumeDetails.internalValue;
  }
}

export class CoreInstanceLaunchVolumeAttachmentsList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceLaunchVolumeAttachments[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceLaunchVolumeAttachmentsOutputReference {
    return new CoreInstanceLaunchVolumeAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceLicensingConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#license_type CoreInstance#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#type CoreInstance#type}
  */
  readonly type: string;
}

export function coreInstanceLicensingConfigsToTerraform(struct?: CoreInstanceLicensingConfigsOutputReference | CoreInstanceLicensingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstanceLicensingConfigsToHclTerraform(struct?: CoreInstanceLicensingConfigsOutputReference | CoreInstanceLicensingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceLicensingConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceLicensingConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceLicensingConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._licenseType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._licenseType = value.licenseType;
      this._type = value.type;
    }
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstancePlacementConstraintDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#compute_bare_metal_host_id CoreInstance#compute_bare_metal_host_id}
  */
  readonly computeBareMetalHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#compute_host_group_id CoreInstance#compute_host_group_id}
  */
  readonly computeHostGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#type CoreInstance#type}
  */
  readonly type: string;
}

export function coreInstancePlacementConstraintDetailsToTerraform(struct?: CoreInstancePlacementConstraintDetailsOutputReference | CoreInstancePlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_bare_metal_host_id: cdktf.stringToTerraform(struct!.computeBareMetalHostId),
    compute_host_group_id: cdktf.stringToTerraform(struct!.computeHostGroupId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstancePlacementConstraintDetailsToHclTerraform(struct?: CoreInstancePlacementConstraintDetailsOutputReference | CoreInstancePlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_bare_metal_host_id: {
      value: cdktf.stringToHclTerraform(struct!.computeBareMetalHostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_host_group_id: {
      value: cdktf.stringToHclTerraform(struct!.computeHostGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePlacementConstraintDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstancePlacementConstraintDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeBareMetalHostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeBareMetalHostId = this._computeBareMetalHostId;
    }
    if (this._computeHostGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeHostGroupId = this._computeHostGroupId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePlacementConstraintDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeBareMetalHostId = undefined;
      this._computeHostGroupId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeBareMetalHostId = value.computeBareMetalHostId;
      this._computeHostGroupId = value.computeHostGroupId;
      this._type = value.type;
    }
  }

  // compute_bare_metal_host_id - computed: true, optional: true, required: false
  private _computeBareMetalHostId?: string; 
  public get computeBareMetalHostId() {
    return this.getStringAttribute('compute_bare_metal_host_id');
  }
  public set computeBareMetalHostId(value: string) {
    this._computeBareMetalHostId = value;
  }
  public resetComputeBareMetalHostId() {
    this._computeBareMetalHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeBareMetalHostIdInput() {
    return this._computeBareMetalHostId;
  }

  // compute_host_group_id - computed: true, optional: true, required: false
  private _computeHostGroupId?: string; 
  public get computeHostGroupId() {
    return this.getStringAttribute('compute_host_group_id');
  }
  public set computeHostGroupId(value: string) {
    this._computeHostGroupId = value;
  }
  public resetComputeHostGroupId() {
    this._computeHostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeHostGroupIdInput() {
    return this._computeHostGroupId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstancePlatformConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#are_virtual_instructions_enabled CoreInstance#are_virtual_instructions_enabled}
  */
  readonly areVirtualInstructionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#config_map CoreInstance#config_map}
  */
  readonly configMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_access_control_service_enabled CoreInstance#is_access_control_service_enabled}
  */
  readonly isAccessControlServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_input_output_memory_management_unit_enabled CoreInstance#is_input_output_memory_management_unit_enabled}
  */
  readonly isInputOutputMemoryManagementUnitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_measured_boot_enabled CoreInstance#is_measured_boot_enabled}
  */
  readonly isMeasuredBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_memory_encryption_enabled CoreInstance#is_memory_encryption_enabled}
  */
  readonly isMemoryEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_secure_boot_enabled CoreInstance#is_secure_boot_enabled}
  */
  readonly isSecureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_symmetric_multi_threading_enabled CoreInstance#is_symmetric_multi_threading_enabled}
  */
  readonly isSymmetricMultiThreadingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_trusted_platform_module_enabled CoreInstance#is_trusted_platform_module_enabled}
  */
  readonly isTrustedPlatformModuleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#numa_nodes_per_socket CoreInstance#numa_nodes_per_socket}
  */
  readonly numaNodesPerSocket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#percentage_of_cores_enabled CoreInstance#percentage_of_cores_enabled}
  */
  readonly percentageOfCoresEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#type CoreInstance#type}
  */
  readonly type: string;
}

export function coreInstancePlatformConfigToTerraform(struct?: CoreInstancePlatformConfigOutputReference | CoreInstancePlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_virtual_instructions_enabled: cdktf.booleanToTerraform(struct!.areVirtualInstructionsEnabled),
    config_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configMap),
    is_access_control_service_enabled: cdktf.booleanToTerraform(struct!.isAccessControlServiceEnabled),
    is_input_output_memory_management_unit_enabled: cdktf.booleanToTerraform(struct!.isInputOutputMemoryManagementUnitEnabled),
    is_measured_boot_enabled: cdktf.booleanToTerraform(struct!.isMeasuredBootEnabled),
    is_memory_encryption_enabled: cdktf.booleanToTerraform(struct!.isMemoryEncryptionEnabled),
    is_secure_boot_enabled: cdktf.booleanToTerraform(struct!.isSecureBootEnabled),
    is_symmetric_multi_threading_enabled: cdktf.booleanToTerraform(struct!.isSymmetricMultiThreadingEnabled),
    is_trusted_platform_module_enabled: cdktf.booleanToTerraform(struct!.isTrustedPlatformModuleEnabled),
    numa_nodes_per_socket: cdktf.stringToTerraform(struct!.numaNodesPerSocket),
    percentage_of_cores_enabled: cdktf.numberToTerraform(struct!.percentageOfCoresEnabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstancePlatformConfigToHclTerraform(struct?: CoreInstancePlatformConfigOutputReference | CoreInstancePlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_virtual_instructions_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.areVirtualInstructionsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    is_access_control_service_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAccessControlServiceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_input_output_memory_management_unit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isInputOutputMemoryManagementUnitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_measured_boot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMeasuredBootEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_memory_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMemoryEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_secure_boot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSecureBootEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_symmetric_multi_threading_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSymmetricMultiThreadingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_trusted_platform_module_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isTrustedPlatformModuleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    numa_nodes_per_socket: {
      value: cdktf.stringToHclTerraform(struct!.numaNodesPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage_of_cores_enabled: {
      value: cdktf.numberToHclTerraform(struct!.percentageOfCoresEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePlatformConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstancePlatformConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areVirtualInstructionsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.areVirtualInstructionsEnabled = this._areVirtualInstructionsEnabled;
    }
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    if (this._isAccessControlServiceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAccessControlServiceEnabled = this._isAccessControlServiceEnabled;
    }
    if (this._isInputOutputMemoryManagementUnitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInputOutputMemoryManagementUnitEnabled = this._isInputOutputMemoryManagementUnitEnabled;
    }
    if (this._isMeasuredBootEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMeasuredBootEnabled = this._isMeasuredBootEnabled;
    }
    if (this._isMemoryEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMemoryEncryptionEnabled = this._isMemoryEncryptionEnabled;
    }
    if (this._isSecureBootEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSecureBootEnabled = this._isSecureBootEnabled;
    }
    if (this._isSymmetricMultiThreadingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSymmetricMultiThreadingEnabled = this._isSymmetricMultiThreadingEnabled;
    }
    if (this._isTrustedPlatformModuleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTrustedPlatformModuleEnabled = this._isTrustedPlatformModuleEnabled;
    }
    if (this._numaNodesPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.numaNodesPerSocket = this._numaNodesPerSocket;
    }
    if (this._percentageOfCoresEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageOfCoresEnabled = this._percentageOfCoresEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePlatformConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areVirtualInstructionsEnabled = undefined;
      this._configMap = undefined;
      this._isAccessControlServiceEnabled = undefined;
      this._isInputOutputMemoryManagementUnitEnabled = undefined;
      this._isMeasuredBootEnabled = undefined;
      this._isMemoryEncryptionEnabled = undefined;
      this._isSecureBootEnabled = undefined;
      this._isSymmetricMultiThreadingEnabled = undefined;
      this._isTrustedPlatformModuleEnabled = undefined;
      this._numaNodesPerSocket = undefined;
      this._percentageOfCoresEnabled = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areVirtualInstructionsEnabled = value.areVirtualInstructionsEnabled;
      this._configMap = value.configMap;
      this._isAccessControlServiceEnabled = value.isAccessControlServiceEnabled;
      this._isInputOutputMemoryManagementUnitEnabled = value.isInputOutputMemoryManagementUnitEnabled;
      this._isMeasuredBootEnabled = value.isMeasuredBootEnabled;
      this._isMemoryEncryptionEnabled = value.isMemoryEncryptionEnabled;
      this._isSecureBootEnabled = value.isSecureBootEnabled;
      this._isSymmetricMultiThreadingEnabled = value.isSymmetricMultiThreadingEnabled;
      this._isTrustedPlatformModuleEnabled = value.isTrustedPlatformModuleEnabled;
      this._numaNodesPerSocket = value.numaNodesPerSocket;
      this._percentageOfCoresEnabled = value.percentageOfCoresEnabled;
      this._type = value.type;
    }
  }

  // are_virtual_instructions_enabled - computed: true, optional: true, required: false
  private _areVirtualInstructionsEnabled?: boolean | cdktf.IResolvable; 
  public get areVirtualInstructionsEnabled() {
    return this.getBooleanAttribute('are_virtual_instructions_enabled');
  }
  public set areVirtualInstructionsEnabled(value: boolean | cdktf.IResolvable) {
    this._areVirtualInstructionsEnabled = value;
  }
  public resetAreVirtualInstructionsEnabled() {
    this._areVirtualInstructionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areVirtualInstructionsEnabledInput() {
    return this._areVirtualInstructionsEnabled;
  }

  // config_map - computed: true, optional: true, required: false
  private _configMap?: { [key: string]: string }; 
  public get configMap() {
    return this.getStringMapAttribute('config_map');
  }
  public set configMap(value: { [key: string]: string }) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }

  // is_access_control_service_enabled - computed: true, optional: true, required: false
  private _isAccessControlServiceEnabled?: boolean | cdktf.IResolvable; 
  public get isAccessControlServiceEnabled() {
    return this.getBooleanAttribute('is_access_control_service_enabled');
  }
  public set isAccessControlServiceEnabled(value: boolean | cdktf.IResolvable) {
    this._isAccessControlServiceEnabled = value;
  }
  public resetIsAccessControlServiceEnabled() {
    this._isAccessControlServiceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAccessControlServiceEnabledInput() {
    return this._isAccessControlServiceEnabled;
  }

  // is_input_output_memory_management_unit_enabled - computed: true, optional: true, required: false
  private _isInputOutputMemoryManagementUnitEnabled?: boolean | cdktf.IResolvable; 
  public get isInputOutputMemoryManagementUnitEnabled() {
    return this.getBooleanAttribute('is_input_output_memory_management_unit_enabled');
  }
  public set isInputOutputMemoryManagementUnitEnabled(value: boolean | cdktf.IResolvable) {
    this._isInputOutputMemoryManagementUnitEnabled = value;
  }
  public resetIsInputOutputMemoryManagementUnitEnabled() {
    this._isInputOutputMemoryManagementUnitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInputOutputMemoryManagementUnitEnabledInput() {
    return this._isInputOutputMemoryManagementUnitEnabled;
  }

  // is_measured_boot_enabled - computed: true, optional: true, required: false
  private _isMeasuredBootEnabled?: boolean | cdktf.IResolvable; 
  public get isMeasuredBootEnabled() {
    return this.getBooleanAttribute('is_measured_boot_enabled');
  }
  public set isMeasuredBootEnabled(value: boolean | cdktf.IResolvable) {
    this._isMeasuredBootEnabled = value;
  }
  public resetIsMeasuredBootEnabled() {
    this._isMeasuredBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMeasuredBootEnabledInput() {
    return this._isMeasuredBootEnabled;
  }

  // is_memory_encryption_enabled - computed: true, optional: true, required: false
  private _isMemoryEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get isMemoryEncryptionEnabled() {
    return this.getBooleanAttribute('is_memory_encryption_enabled');
  }
  public set isMemoryEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._isMemoryEncryptionEnabled = value;
  }
  public resetIsMemoryEncryptionEnabled() {
    this._isMemoryEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMemoryEncryptionEnabledInput() {
    return this._isMemoryEncryptionEnabled;
  }

  // is_secure_boot_enabled - computed: true, optional: true, required: false
  private _isSecureBootEnabled?: boolean | cdktf.IResolvable; 
  public get isSecureBootEnabled() {
    return this.getBooleanAttribute('is_secure_boot_enabled');
  }
  public set isSecureBootEnabled(value: boolean | cdktf.IResolvable) {
    this._isSecureBootEnabled = value;
  }
  public resetIsSecureBootEnabled() {
    this._isSecureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecureBootEnabledInput() {
    return this._isSecureBootEnabled;
  }

  // is_symmetric_multi_threading_enabled - computed: true, optional: true, required: false
  private _isSymmetricMultiThreadingEnabled?: boolean | cdktf.IResolvable; 
  public get isSymmetricMultiThreadingEnabled() {
    return this.getBooleanAttribute('is_symmetric_multi_threading_enabled');
  }
  public set isSymmetricMultiThreadingEnabled(value: boolean | cdktf.IResolvable) {
    this._isSymmetricMultiThreadingEnabled = value;
  }
  public resetIsSymmetricMultiThreadingEnabled() {
    this._isSymmetricMultiThreadingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSymmetricMultiThreadingEnabledInput() {
    return this._isSymmetricMultiThreadingEnabled;
  }

  // is_trusted_platform_module_enabled - computed: true, optional: true, required: false
  private _isTrustedPlatformModuleEnabled?: boolean | cdktf.IResolvable; 
  public get isTrustedPlatformModuleEnabled() {
    return this.getBooleanAttribute('is_trusted_platform_module_enabled');
  }
  public set isTrustedPlatformModuleEnabled(value: boolean | cdktf.IResolvable) {
    this._isTrustedPlatformModuleEnabled = value;
  }
  public resetIsTrustedPlatformModuleEnabled() {
    this._isTrustedPlatformModuleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTrustedPlatformModuleEnabledInput() {
    return this._isTrustedPlatformModuleEnabled;
  }

  // numa_nodes_per_socket - computed: true, optional: true, required: false
  private _numaNodesPerSocket?: string; 
  public get numaNodesPerSocket() {
    return this.getStringAttribute('numa_nodes_per_socket');
  }
  public set numaNodesPerSocket(value: string) {
    this._numaNodesPerSocket = value;
  }
  public resetNumaNodesPerSocket() {
    this._numaNodesPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaNodesPerSocketInput() {
    return this._numaNodesPerSocket;
  }

  // percentage_of_cores_enabled - computed: true, optional: true, required: false
  private _percentageOfCoresEnabled?: number; 
  public get percentageOfCoresEnabled() {
    return this.getNumberAttribute('percentage_of_cores_enabled');
  }
  public set percentageOfCoresEnabled(value: number) {
    this._percentageOfCoresEnabled = value;
  }
  public resetPercentageOfCoresEnabled() {
    this._percentageOfCoresEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageOfCoresEnabledInput() {
    return this._percentageOfCoresEnabled;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstancePreemptibleInstanceConfigPreemptionAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}
  */
  readonly preserveBootVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#type CoreInstance#type}
  */
  readonly type: string;
}

export function coreInstancePreemptibleInstanceConfigPreemptionActionToTerraform(struct?: CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference | CoreInstancePreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_boot_volume: cdktf.booleanToTerraform(struct!.preserveBootVolume),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstancePreemptibleInstanceConfigPreemptionActionToHclTerraform(struct?: CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference | CoreInstancePreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preserve_boot_volume: {
      value: cdktf.booleanToHclTerraform(struct!.preserveBootVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstancePreemptibleInstanceConfigPreemptionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveBootVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveBootVolume = this._preserveBootVolume;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePreemptibleInstanceConfigPreemptionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preserveBootVolume = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preserveBootVolume = value.preserveBootVolume;
      this._type = value.type;
    }
  }

  // preserve_boot_volume - computed: true, optional: true, required: false
  private _preserveBootVolume?: boolean | cdktf.IResolvable; 
  public get preserveBootVolume() {
    return this.getBooleanAttribute('preserve_boot_volume');
  }
  public set preserveBootVolume(value: boolean | cdktf.IResolvable) {
    this._preserveBootVolume = value;
  }
  public resetPreserveBootVolume() {
    this._preserveBootVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveBootVolumeInput() {
    return this._preserveBootVolume;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstancePreemptibleInstanceConfig {
  /**
  * preemption_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#preemption_action CoreInstance#preemption_action}
  */
  readonly preemptionAction: CoreInstancePreemptibleInstanceConfigPreemptionAction;
}

export function coreInstancePreemptibleInstanceConfigToTerraform(struct?: CoreInstancePreemptibleInstanceConfigOutputReference | CoreInstancePreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemption_action: coreInstancePreemptibleInstanceConfigPreemptionActionToTerraform(struct!.preemptionAction),
  }
}


export function coreInstancePreemptibleInstanceConfigToHclTerraform(struct?: CoreInstancePreemptibleInstanceConfigOutputReference | CoreInstancePreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preemption_action: {
      value: coreInstancePreemptibleInstanceConfigPreemptionActionToHclTerraform(struct!.preemptionAction),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstancePreemptibleInstanceConfigPreemptionActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePreemptibleInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstancePreemptibleInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptionAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionAction = this._preemptionAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePreemptibleInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preemptionAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preemptionAction.internalValue = value.preemptionAction;
    }
  }

  // preemption_action - computed: false, optional: false, required: true
  private _preemptionAction = new CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference(this, "preemption_action");
  public get preemptionAction() {
    return this._preemptionAction;
  }
  public putPreemptionAction(value: CoreInstancePreemptibleInstanceConfigPreemptionAction) {
    this._preemptionAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionActionInput() {
    return this._preemptionAction.internalValue;
  }
}
export interface CoreInstanceShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#baseline_ocpu_utilization CoreInstance#baseline_ocpu_utilization}
  */
  readonly baselineOcpuUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#memory_in_gbs CoreInstance#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#nvmes CoreInstance#nvmes}
  */
  readonly nvmes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#ocpus CoreInstance#ocpus}
  */
  readonly ocpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#resource_management CoreInstance#resource_management}
  */
  readonly resourceManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#vcpus CoreInstance#vcpus}
  */
  readonly vcpus?: number;
}

export function coreInstanceShapeConfigToTerraform(struct?: CoreInstanceShapeConfigOutputReference | CoreInstanceShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_ocpu_utilization: cdktf.stringToTerraform(struct!.baselineOcpuUtilization),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    nvmes: cdktf.numberToTerraform(struct!.nvmes),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
    resource_management: cdktf.stringToTerraform(struct!.resourceManagement),
    vcpus: cdktf.numberToTerraform(struct!.vcpus),
  }
}


export function coreInstanceShapeConfigToHclTerraform(struct?: CoreInstanceShapeConfigOutputReference | CoreInstanceShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline_ocpu_utilization: {
      value: cdktf.stringToHclTerraform(struct!.baselineOcpuUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvmes: {
      value: cdktf.numberToHclTerraform(struct!.nvmes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_management: {
      value: cdktf.stringToHclTerraform(struct!.resourceManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcpus: {
      value: cdktf.numberToHclTerraform(struct!.vcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineOcpuUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineOcpuUtilization = this._baselineOcpuUtilization;
    }
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._nvmes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvmes = this._nvmes;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    if (this._resourceManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagement = this._resourceManagement;
    }
    if (this._vcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpus = this._vcpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineOcpuUtilization = undefined;
      this._memoryInGbs = undefined;
      this._nvmes = undefined;
      this._ocpus = undefined;
      this._resourceManagement = undefined;
      this._vcpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineOcpuUtilization = value.baselineOcpuUtilization;
      this._memoryInGbs = value.memoryInGbs;
      this._nvmes = value.nvmes;
      this._ocpus = value.ocpus;
      this._resourceManagement = value.resourceManagement;
      this._vcpus = value.vcpus;
    }
  }

  // baseline_ocpu_utilization - computed: true, optional: true, required: false
  private _baselineOcpuUtilization?: string; 
  public get baselineOcpuUtilization() {
    return this.getStringAttribute('baseline_ocpu_utilization');
  }
  public set baselineOcpuUtilization(value: string) {
    this._baselineOcpuUtilization = value;
  }
  public resetBaselineOcpuUtilization() {
    this._baselineOcpuUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineOcpuUtilizationInput() {
    return this._baselineOcpuUtilization;
  }

  // gpu_description - computed: true, optional: false, required: false
  public get gpuDescription() {
    return this.getStringAttribute('gpu_description');
  }

  // gpus - computed: true, optional: false, required: false
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }

  // local_disk_description - computed: true, optional: false, required: false
  public get localDiskDescription() {
    return this.getStringAttribute('local_disk_description');
  }

  // local_disks - computed: true, optional: false, required: false
  public get localDisks() {
    return this.getNumberAttribute('local_disks');
  }

  // local_disks_total_size_in_gbs - computed: true, optional: false, required: false
  public get localDisksTotalSizeInGbs() {
    return this.getNumberAttribute('local_disks_total_size_in_gbs');
  }

  // max_vnic_attachments - computed: true, optional: false, required: false
  public get maxVnicAttachments() {
    return this.getNumberAttribute('max_vnic_attachments');
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // networking_bandwidth_in_gbps - computed: true, optional: false, required: false
  public get networkingBandwidthInGbps() {
    return this.getNumberAttribute('networking_bandwidth_in_gbps');
  }

  // nvmes - computed: true, optional: true, required: false
  private _nvmes?: number; 
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }
  public set nvmes(value: number) {
    this._nvmes = value;
  }
  public resetNvmes() {
    this._nvmes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmesInput() {
    return this._nvmes;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }

  // processor_description - computed: true, optional: false, required: false
  public get processorDescription() {
    return this.getStringAttribute('processor_description');
  }

  // resource_management - computed: true, optional: true, required: false
  private _resourceManagement?: string; 
  public get resourceManagement() {
    return this.getStringAttribute('resource_management');
  }
  public set resourceManagement(value: string) {
    this._resourceManagement = value;
  }
  public resetResourceManagement() {
    this._resourceManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagementInput() {
    return this._resourceManagement;
  }

  // vcpus - computed: true, optional: true, required: false
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }
}
export interface CoreInstanceSourceDetailsInstanceSourceImageFilterDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#defined_tags_filter CoreInstance#defined_tags_filter}
  */
  readonly definedTagsFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#operating_system CoreInstance#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#operating_system_version CoreInstance#operating_system_version}
  */
  readonly operatingSystemVersion?: string;
}

export function coreInstanceSourceDetailsInstanceSourceImageFilterDetailsToTerraform(struct?: CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference | CoreInstanceSourceDetailsInstanceSourceImageFilterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    defined_tags_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTagsFilter),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    operating_system_version: cdktf.stringToTerraform(struct!.operatingSystemVersion),
  }
}


export function coreInstanceSourceDetailsInstanceSourceImageFilterDetailsToHclTerraform(struct?: CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference | CoreInstanceSourceDetailsInstanceSourceImageFilterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTagsFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system_version: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystemVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceSourceDetailsInstanceSourceImageFilterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._definedTagsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTagsFilter = this._definedTagsFilter;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._operatingSystemVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystemVersion = this._operatingSystemVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceSourceDetailsInstanceSourceImageFilterDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._definedTagsFilter = undefined;
      this._operatingSystem = undefined;
      this._operatingSystemVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._definedTagsFilter = value.definedTagsFilter;
      this._operatingSystem = value.operatingSystem;
      this._operatingSystemVersion = value.operatingSystemVersion;
    }
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

  // defined_tags_filter - computed: true, optional: true, required: false
  private _definedTagsFilter?: { [key: string]: string }; 
  public get definedTagsFilter() {
    return this.getStringMapAttribute('defined_tags_filter');
  }
  public set definedTagsFilter(value: { [key: string]: string }) {
    this._definedTagsFilter = value;
  }
  public resetDefinedTagsFilter() {
    this._definedTagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsFilterInput() {
    return this._definedTagsFilter;
  }

  // operating_system - computed: true, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // operating_system_version - computed: true, optional: true, required: false
  private _operatingSystemVersion?: string; 
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
  public set operatingSystemVersion(value: string) {
    this._operatingSystemVersion = value;
  }
  public resetOperatingSystemVersion() {
    this._operatingSystemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemVersionInput() {
    return this._operatingSystemVersion;
  }
}
export interface CoreInstanceSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#boot_volume_size_in_gbs CoreInstance#boot_volume_size_in_gbs}
  */
  readonly bootVolumeSizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#boot_volume_vpus_per_gb CoreInstance#boot_volume_vpus_per_gb}
  */
  readonly bootVolumeVpusPerGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#is_preserve_boot_volume_enabled CoreInstance#is_preserve_boot_volume_enabled}
  */
  readonly isPreserveBootVolumeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#source_id CoreInstance#source_id}
  */
  readonly sourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#source_type CoreInstance#source_type}
  */
  readonly sourceType: string;
  /**
  * instance_source_image_filter_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#instance_source_image_filter_details CoreInstance#instance_source_image_filter_details}
  */
  readonly instanceSourceImageFilterDetails?: CoreInstanceSourceDetailsInstanceSourceImageFilterDetails;
}

export function coreInstanceSourceDetailsToTerraform(struct?: CoreInstanceSourceDetailsOutputReference | CoreInstanceSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_volume_size_in_gbs: cdktf.stringToTerraform(struct!.bootVolumeSizeInGbs),
    boot_volume_vpus_per_gb: cdktf.stringToTerraform(struct!.bootVolumeVpusPerGb),
    is_preserve_boot_volume_enabled: cdktf.booleanToTerraform(struct!.isPreserveBootVolumeEnabled),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    instance_source_image_filter_details: coreInstanceSourceDetailsInstanceSourceImageFilterDetailsToTerraform(struct!.instanceSourceImageFilterDetails),
  }
}


export function coreInstanceSourceDetailsToHclTerraform(struct?: CoreInstanceSourceDetailsOutputReference | CoreInstanceSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_volume_size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_volume_vpus_per_gb: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeVpusPerGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_preserve_boot_volume_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPreserveBootVolumeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_source_image_filter_details: {
      value: coreInstanceSourceDetailsInstanceSourceImageFilterDetailsToHclTerraform(struct!.instanceSourceImageFilterDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootVolumeSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeSizeInGbs = this._bootVolumeSizeInGbs;
    }
    if (this._bootVolumeVpusPerGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeVpusPerGb = this._bootVolumeVpusPerGb;
    }
    if (this._isPreserveBootVolumeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPreserveBootVolumeEnabled = this._isPreserveBootVolumeEnabled;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._instanceSourceImageFilterDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSourceImageFilterDetails = this._instanceSourceImageFilterDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootVolumeSizeInGbs = undefined;
      this._bootVolumeVpusPerGb = undefined;
      this._isPreserveBootVolumeEnabled = undefined;
      this._kmsKeyId = undefined;
      this._sourceId = undefined;
      this._sourceType = undefined;
      this._instanceSourceImageFilterDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootVolumeSizeInGbs = value.bootVolumeSizeInGbs;
      this._bootVolumeVpusPerGb = value.bootVolumeVpusPerGb;
      this._isPreserveBootVolumeEnabled = value.isPreserveBootVolumeEnabled;
      this._kmsKeyId = value.kmsKeyId;
      this._sourceId = value.sourceId;
      this._sourceType = value.sourceType;
      this._instanceSourceImageFilterDetails.internalValue = value.instanceSourceImageFilterDetails;
    }
  }

  // boot_volume_size_in_gbs - computed: true, optional: true, required: false
  private _bootVolumeSizeInGbs?: string; 
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }
  public set bootVolumeSizeInGbs(value: string) {
    this._bootVolumeSizeInGbs = value;
  }
  public resetBootVolumeSizeInGbs() {
    this._bootVolumeSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeSizeInGbsInput() {
    return this._bootVolumeSizeInGbs;
  }

  // boot_volume_vpus_per_gb - computed: true, optional: true, required: false
  private _bootVolumeVpusPerGb?: string; 
  public get bootVolumeVpusPerGb() {
    return this.getStringAttribute('boot_volume_vpus_per_gb');
  }
  public set bootVolumeVpusPerGb(value: string) {
    this._bootVolumeVpusPerGb = value;
  }
  public resetBootVolumeVpusPerGb() {
    this._bootVolumeVpusPerGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeVpusPerGbInput() {
    return this._bootVolumeVpusPerGb;
  }

  // is_preserve_boot_volume_enabled - computed: false, optional: true, required: false
  private _isPreserveBootVolumeEnabled?: boolean | cdktf.IResolvable; 
  public get isPreserveBootVolumeEnabled() {
    return this.getBooleanAttribute('is_preserve_boot_volume_enabled');
  }
  public set isPreserveBootVolumeEnabled(value: boolean | cdktf.IResolvable) {
    this._isPreserveBootVolumeEnabled = value;
  }
  public resetIsPreserveBootVolumeEnabled() {
    this._isPreserveBootVolumeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPreserveBootVolumeEnabledInput() {
    return this._isPreserveBootVolumeEnabled;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // source_id - computed: true, optional: true, required: false
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // instance_source_image_filter_details - computed: false, optional: true, required: false
  private _instanceSourceImageFilterDetails = new CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference(this, "instance_source_image_filter_details");
  public get instanceSourceImageFilterDetails() {
    return this._instanceSourceImageFilterDetails;
  }
  public putInstanceSourceImageFilterDetails(value: CoreInstanceSourceDetailsInstanceSourceImageFilterDetails) {
    this._instanceSourceImageFilterDetails.internalValue = value;
  }
  public resetInstanceSourceImageFilterDetails() {
    this._instanceSourceImageFilterDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSourceImageFilterDetailsInput() {
    return this._instanceSourceImageFilterDetails.internalValue;
  }
}
export interface CoreInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#create CoreInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#delete CoreInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#update CoreInstance#update}
  */
  readonly update?: string;
}

export function coreInstanceTimeoutsToTerraform(struct?: CoreInstanceTimeouts | cdktf.IResolvable): any {
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


export function coreInstanceTimeoutsToHclTerraform(struct?: CoreInstanceTimeouts | cdktf.IResolvable): any {
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

export class CoreInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance oci_core_instance}
*/
export class CoreInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreInstance to import
  * @param importFromId The id of the existing CoreInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance oci_core_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CoreInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance',
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
    this._async = config.async;
    this._availabilityDomain = config.availabilityDomain;
    this._capacityReservationId = config.capacityReservationId;
    this._clusterPlacementGroupId = config.clusterPlacementGroupId;
    this._compartmentId = config.compartmentId;
    this._computeClusterId = config.computeClusterId;
    this._dedicatedVmHostId = config.dedicatedVmHostId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._extendedMetadata = config.extendedMetadata;
    this._faultDomain = config.faultDomain;
    this._freeformTags = config.freeformTags;
    this._hostnameLabel = config.hostnameLabel;
    this._id = config.id;
    this._image = config.image;
    this._instanceConfigurationId = config.instanceConfigurationId;
    this._ipxeScript = config.ipxeScript;
    this._isAiEnterpriseEnabled = config.isAiEnterpriseEnabled;
    this._isPvEncryptionInTransitEnabled = config.isPvEncryptionInTransitEnabled;
    this._metadata = config.metadata;
    this._preserveBootVolume = config.preserveBootVolume;
    this._preserveDataVolumesCreatedAtLaunch = config.preserveDataVolumesCreatedAtLaunch;
    this._securityAttributes = config.securityAttributes;
    this._shape = config.shape;
    this._state = config.state;
    this._subnetId = config.subnetId;
    this._updateOperationConstraint = config.updateOperationConstraint;
    this._agentConfig.internalValue = config.agentConfig;
    this._availabilityConfig.internalValue = config.availabilityConfig;
    this._createVnicDetails.internalValue = config.createVnicDetails;
    this._instanceOptions.internalValue = config.instanceOptions;
    this._launchOptions.internalValue = config.launchOptions;
    this._launchVolumeAttachments.internalValue = config.launchVolumeAttachments;
    this._licensingConfigs.internalValue = config.licensingConfigs;
    this._placementConstraintDetails.internalValue = config.placementConstraintDetails;
    this._platformConfig.internalValue = config.platformConfig;
    this._preemptibleInstanceConfig.internalValue = config.preemptibleInstanceConfig;
    this._shapeConfig.internalValue = config.shapeConfig;
    this._sourceDetails.internalValue = config.sourceDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // async - computed: false, optional: true, required: false
  private _async?: boolean | cdktf.IResolvable; 
  public get async() {
    return this.getBooleanAttribute('async');
  }
  public set async(value: boolean | cdktf.IResolvable) {
    this._async = value;
  }
  public resetAsync() {
    this._async = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInput() {
    return this._async;
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

  // boot_volume_id - computed: true, optional: false, required: false
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

  // capacity_reservation_id - computed: true, optional: true, required: false
  private _capacityReservationId?: string; 
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }
  public set capacityReservationId(value: string) {
    this._capacityReservationId = value;
  }
  public resetCapacityReservationId() {
    this._capacityReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationIdInput() {
    return this._capacityReservationId;
  }

  // cluster_placement_group_id - computed: false, optional: true, required: false
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

  // compute_cluster_id - computed: true, optional: true, required: false
  private _computeClusterId?: string; 
  public get computeClusterId() {
    return this.getStringAttribute('compute_cluster_id');
  }
  public set computeClusterId(value: string) {
    this._computeClusterId = value;
  }
  public resetComputeClusterId() {
    this._computeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeClusterIdInput() {
    return this._computeClusterId;
  }

  // dedicated_vm_host_id - computed: true, optional: true, required: false
  private _dedicatedVmHostId?: string; 
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
  }
  public set dedicatedVmHostId(value: string) {
    this._dedicatedVmHostId = value;
  }
  public resetDedicatedVmHostId() {
    this._dedicatedVmHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedVmHostIdInput() {
    return this._dedicatedVmHostId;
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

  // extended_metadata - computed: true, optional: true, required: false
  private _extendedMetadata?: { [key: string]: string }; 
  public get extendedMetadata() {
    return this.getStringMapAttribute('extended_metadata');
  }
  public set extendedMetadata(value: { [key: string]: string }) {
    this._extendedMetadata = value;
  }
  public resetExtendedMetadata() {
    this._extendedMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedMetadataInput() {
    return this._extendedMetadata;
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string; 
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
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

  // hostname_label - computed: true, optional: true, required: false
  private _hostnameLabel?: string; 
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }
  public set hostnameLabel(value: string) {
    this._hostnameLabel = value;
  }
  public resetHostnameLabel() {
    this._hostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLabelInput() {
    return this._hostnameLabel;
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

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // instance_configuration_id - computed: true, optional: true, required: false
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  public resetInstanceConfigurationId() {
    this._instanceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // ipxe_script - computed: true, optional: true, required: false
  private _ipxeScript?: string; 
  public get ipxeScript() {
    return this.getStringAttribute('ipxe_script');
  }
  public set ipxeScript(value: string) {
    this._ipxeScript = value;
  }
  public resetIpxeScript() {
    this._ipxeScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeScriptInput() {
    return this._ipxeScript;
  }

  // is_ai_enterprise_enabled - computed: true, optional: true, required: false
  private _isAiEnterpriseEnabled?: boolean | cdktf.IResolvable; 
  public get isAiEnterpriseEnabled() {
    return this.getBooleanAttribute('is_ai_enterprise_enabled');
  }
  public set isAiEnterpriseEnabled(value: boolean | cdktf.IResolvable) {
    this._isAiEnterpriseEnabled = value;
  }
  public resetIsAiEnterpriseEnabled() {
    this._isAiEnterpriseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAiEnterpriseEnabledInput() {
    return this._isAiEnterpriseEnabled;
  }

  // is_cross_numa_node - computed: true, optional: false, required: false
  public get isCrossNumaNode() {
    return this.getBooleanAttribute('is_cross_numa_node');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isPvEncryptionInTransitEnabled = value;
  }
  public resetIsPvEncryptionInTransitEnabled() {
    this._isPvEncryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPvEncryptionInTransitEnabledInput() {
    return this._isPvEncryptionInTransitEnabled;
  }

  // launch_mode - computed: true, optional: false, required: false
  public get launchMode() {
    return this.getStringAttribute('launch_mode');
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // preserve_boot_volume - computed: false, optional: true, required: false
  private _preserveBootVolume?: boolean | cdktf.IResolvable; 
  public get preserveBootVolume() {
    return this.getBooleanAttribute('preserve_boot_volume');
  }
  public set preserveBootVolume(value: boolean | cdktf.IResolvable) {
    this._preserveBootVolume = value;
  }
  public resetPreserveBootVolume() {
    this._preserveBootVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveBootVolumeInput() {
    return this._preserveBootVolume;
  }

  // preserve_data_volumes_created_at_launch - computed: false, optional: true, required: false
  private _preserveDataVolumesCreatedAtLaunch?: boolean | cdktf.IResolvable; 
  public get preserveDataVolumesCreatedAtLaunch() {
    return this.getBooleanAttribute('preserve_data_volumes_created_at_launch');
  }
  public set preserveDataVolumesCreatedAtLaunch(value: boolean | cdktf.IResolvable) {
    this._preserveDataVolumesCreatedAtLaunch = value;
  }
  public resetPreserveDataVolumesCreatedAtLaunch() {
    this._preserveDataVolumesCreatedAtLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDataVolumesCreatedAtLaunchInput() {
    return this._preserveDataVolumesCreatedAtLaunch;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // security_attributes_state - computed: true, optional: false, required: false
  public get securityAttributesState() {
    return this.getStringAttribute('security_attributes_state');
  }

  // shape - computed: true, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // time_maintenance_reboot_due - computed: true, optional: false, required: false
  public get timeMaintenanceRebootDue() {
    return this.getStringAttribute('time_maintenance_reboot_due');
  }

  // update_operation_constraint - computed: false, optional: true, required: false
  private _updateOperationConstraint?: string; 
  public get updateOperationConstraint() {
    return this.getStringAttribute('update_operation_constraint');
  }
  public set updateOperationConstraint(value: string) {
    this._updateOperationConstraint = value;
  }
  public resetUpdateOperationConstraint() {
    this._updateOperationConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOperationConstraintInput() {
    return this._updateOperationConstraint;
  }

  // agent_config - computed: false, optional: true, required: false
  private _agentConfig = new CoreInstanceAgentConfigOutputReference(this, "agent_config");
  public get agentConfig() {
    return this._agentConfig;
  }
  public putAgentConfig(value: CoreInstanceAgentConfig) {
    this._agentConfig.internalValue = value;
  }
  public resetAgentConfig() {
    this._agentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentConfigInput() {
    return this._agentConfig.internalValue;
  }

  // availability_config - computed: false, optional: true, required: false
  private _availabilityConfig = new CoreInstanceAvailabilityConfigOutputReference(this, "availability_config");
  public get availabilityConfig() {
    return this._availabilityConfig;
  }
  public putAvailabilityConfig(value: CoreInstanceAvailabilityConfig) {
    this._availabilityConfig.internalValue = value;
  }
  public resetAvailabilityConfig() {
    this._availabilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityConfigInput() {
    return this._availabilityConfig.internalValue;
  }

  // create_vnic_details - computed: false, optional: true, required: false
  private _createVnicDetails = new CoreInstanceCreateVnicDetailsOutputReference(this, "create_vnic_details");
  public get createVnicDetails() {
    return this._createVnicDetails;
  }
  public putCreateVnicDetails(value: CoreInstanceCreateVnicDetails) {
    this._createVnicDetails.internalValue = value;
  }
  public resetCreateVnicDetails() {
    this._createVnicDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVnicDetailsInput() {
    return this._createVnicDetails.internalValue;
  }

  // instance_options - computed: false, optional: true, required: false
  private _instanceOptions = new CoreInstanceInstanceOptionsOutputReference(this, "instance_options");
  public get instanceOptions() {
    return this._instanceOptions;
  }
  public putInstanceOptions(value: CoreInstanceInstanceOptions) {
    this._instanceOptions.internalValue = value;
  }
  public resetInstanceOptions() {
    this._instanceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceOptionsInput() {
    return this._instanceOptions.internalValue;
  }

  // launch_options - computed: false, optional: true, required: false
  private _launchOptions = new CoreInstanceLaunchOptionsOutputReference(this, "launch_options");
  public get launchOptions() {
    return this._launchOptions;
  }
  public putLaunchOptions(value: CoreInstanceLaunchOptions) {
    this._launchOptions.internalValue = value;
  }
  public resetLaunchOptions() {
    this._launchOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchOptionsInput() {
    return this._launchOptions.internalValue;
  }

  // launch_volume_attachments - computed: false, optional: true, required: false
  private _launchVolumeAttachments = new CoreInstanceLaunchVolumeAttachmentsList(this, "launch_volume_attachments", false);
  public get launchVolumeAttachments() {
    return this._launchVolumeAttachments;
  }
  public putLaunchVolumeAttachments(value: CoreInstanceLaunchVolumeAttachments[] | cdktf.IResolvable) {
    this._launchVolumeAttachments.internalValue = value;
  }
  public resetLaunchVolumeAttachments() {
    this._launchVolumeAttachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchVolumeAttachmentsInput() {
    return this._launchVolumeAttachments.internalValue;
  }

  // licensing_configs - computed: false, optional: true, required: false
  private _licensingConfigs = new CoreInstanceLicensingConfigsOutputReference(this, "licensing_configs");
  public get licensingConfigs() {
    return this._licensingConfigs;
  }
  public putLicensingConfigs(value: CoreInstanceLicensingConfigs) {
    this._licensingConfigs.internalValue = value;
  }
  public resetLicensingConfigs() {
    this._licensingConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensingConfigsInput() {
    return this._licensingConfigs.internalValue;
  }

  // placement_constraint_details - computed: false, optional: true, required: false
  private _placementConstraintDetails = new CoreInstancePlacementConstraintDetailsOutputReference(this, "placement_constraint_details");
  public get placementConstraintDetails() {
    return this._placementConstraintDetails;
  }
  public putPlacementConstraintDetails(value: CoreInstancePlacementConstraintDetails) {
    this._placementConstraintDetails.internalValue = value;
  }
  public resetPlacementConstraintDetails() {
    this._placementConstraintDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintDetailsInput() {
    return this._placementConstraintDetails.internalValue;
  }

  // platform_config - computed: false, optional: true, required: false
  private _platformConfig = new CoreInstancePlatformConfigOutputReference(this, "platform_config");
  public get platformConfig() {
    return this._platformConfig;
  }
  public putPlatformConfig(value: CoreInstancePlatformConfig) {
    this._platformConfig.internalValue = value;
  }
  public resetPlatformConfig() {
    this._platformConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformConfigInput() {
    return this._platformConfig.internalValue;
  }

  // preemptible_instance_config - computed: false, optional: true, required: false
  private _preemptibleInstanceConfig = new CoreInstancePreemptibleInstanceConfigOutputReference(this, "preemptible_instance_config");
  public get preemptibleInstanceConfig() {
    return this._preemptibleInstanceConfig;
  }
  public putPreemptibleInstanceConfig(value: CoreInstancePreemptibleInstanceConfig) {
    this._preemptibleInstanceConfig.internalValue = value;
  }
  public resetPreemptibleInstanceConfig() {
    this._preemptibleInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInstanceConfigInput() {
    return this._preemptibleInstanceConfig.internalValue;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig = new CoreInstanceShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: CoreInstanceShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  public resetShapeConfig() {
    this._shapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }

  // source_details - computed: false, optional: true, required: false
  private _sourceDetails = new CoreInstanceSourceDetailsOutputReference(this, "source_details");
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public putSourceDetails(value: CoreInstanceSourceDetails) {
    this._sourceDetails.internalValue = value;
  }
  public resetSourceDetails() {
    this._sourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailsInput() {
    return this._sourceDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreInstanceTimeouts) {
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
      async: cdktf.booleanToTerraform(this._async),
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      capacity_reservation_id: cdktf.stringToTerraform(this._capacityReservationId),
      cluster_placement_group_id: cdktf.stringToTerraform(this._clusterPlacementGroupId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compute_cluster_id: cdktf.stringToTerraform(this._computeClusterId),
      dedicated_vm_host_id: cdktf.stringToTerraform(this._dedicatedVmHostId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      extended_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._extendedMetadata),
      fault_domain: cdktf.stringToTerraform(this._faultDomain),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      hostname_label: cdktf.stringToTerraform(this._hostnameLabel),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      instance_configuration_id: cdktf.stringToTerraform(this._instanceConfigurationId),
      ipxe_script: cdktf.stringToTerraform(this._ipxeScript),
      is_ai_enterprise_enabled: cdktf.booleanToTerraform(this._isAiEnterpriseEnabled),
      is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(this._isPvEncryptionInTransitEnabled),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      preserve_boot_volume: cdktf.booleanToTerraform(this._preserveBootVolume),
      preserve_data_volumes_created_at_launch: cdktf.booleanToTerraform(this._preserveDataVolumesCreatedAtLaunch),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      shape: cdktf.stringToTerraform(this._shape),
      state: cdktf.stringToTerraform(this._state),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      update_operation_constraint: cdktf.stringToTerraform(this._updateOperationConstraint),
      agent_config: coreInstanceAgentConfigToTerraform(this._agentConfig.internalValue),
      availability_config: coreInstanceAvailabilityConfigToTerraform(this._availabilityConfig.internalValue),
      create_vnic_details: coreInstanceCreateVnicDetailsToTerraform(this._createVnicDetails.internalValue),
      instance_options: coreInstanceInstanceOptionsToTerraform(this._instanceOptions.internalValue),
      launch_options: coreInstanceLaunchOptionsToTerraform(this._launchOptions.internalValue),
      launch_volume_attachments: cdktf.listMapper(coreInstanceLaunchVolumeAttachmentsToTerraform, true)(this._launchVolumeAttachments.internalValue),
      licensing_configs: coreInstanceLicensingConfigsToTerraform(this._licensingConfigs.internalValue),
      placement_constraint_details: coreInstancePlacementConstraintDetailsToTerraform(this._placementConstraintDetails.internalValue),
      platform_config: coreInstancePlatformConfigToTerraform(this._platformConfig.internalValue),
      preemptible_instance_config: coreInstancePreemptibleInstanceConfigToTerraform(this._preemptibleInstanceConfig.internalValue),
      shape_config: coreInstanceShapeConfigToTerraform(this._shapeConfig.internalValue),
      source_details: coreInstanceSourceDetailsToTerraform(this._sourceDetails.internalValue),
      timeouts: coreInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      async: {
        value: cdktf.booleanToHclTerraform(this._async),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_reservation_id: {
        value: cdktf.stringToHclTerraform(this._capacityReservationId),
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
      compute_cluster_id: {
        value: cdktf.stringToHclTerraform(this._computeClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_vm_host_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedVmHostId),
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
      extended_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extendedMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      fault_domain: {
        value: cdktf.stringToHclTerraform(this._faultDomain),
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
      hostname_label: {
        value: cdktf.stringToHclTerraform(this._hostnameLabel),
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
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_configuration_id: {
        value: cdktf.stringToHclTerraform(this._instanceConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipxe_script: {
        value: cdktf.stringToHclTerraform(this._ipxeScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_ai_enterprise_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAiEnterpriseEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_pv_encryption_in_transit_enabled: {
        value: cdktf.booleanToHclTerraform(this._isPvEncryptionInTransitEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      preserve_boot_volume: {
        value: cdktf.booleanToHclTerraform(this._preserveBootVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preserve_data_volumes_created_at_launch: {
        value: cdktf.booleanToHclTerraform(this._preserveDataVolumesCreatedAtLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_operation_constraint: {
        value: cdktf.stringToHclTerraform(this._updateOperationConstraint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_config: {
        value: coreInstanceAgentConfigToHclTerraform(this._agentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstanceAgentConfigList",
      },
      availability_config: {
        value: coreInstanceAvailabilityConfigToHclTerraform(this._availabilityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstanceAvailabilityConfigList",
      },
      create_vnic_details: {
        value: coreInstanceCreateVnicDetailsToHclTerraform(this._createVnicDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstanceCreateVnicDetailsList",
      },
      instance_options: {
        value: coreInstanceInstanceOptionsToHclTerraform(this._instanceOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstanceInstanceOptionsList",
      },
      launch_options: {
        value: coreInstanceLaunchOptionsToHclTerraform(this._launchOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstanceLaunchOptionsList",
      },
      launch_volume_attachments: {
        value: cdktf.listMapperHcl(coreInstanceLaunchVolumeAttachmentsToHclTerraform, true)(this._launchVolumeAttachments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstanceLaunchVolumeAttachmentsList",
      },
      licensing_configs: {
        value: coreInstanceLicensingConfigsToHclTerraform(this._licensingConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstanceLicensingConfigsList",
      },
      placement_constraint_details: {
        value: coreInstancePlacementConstraintDetailsToHclTerraform(this._placementConstraintDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstancePlacementConstraintDetailsList",
      },
      platform_config: {
        value: coreInstancePlatformConfigToHclTerraform(this._platformConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstancePlatformConfigList",
      },
      preemptible_instance_config: {
        value: coreInstancePreemptibleInstanceConfigToHclTerraform(this._preemptibleInstanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstancePreemptibleInstanceConfigList",
      },
      shape_config: {
        value: coreInstanceShapeConfigToHclTerraform(this._shapeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstanceShapeConfigList",
      },
      source_details: {
        value: coreInstanceSourceDetailsToHclTerraform(this._sourceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstanceSourceDetailsList",
      },
      timeouts: {
        value: coreInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
