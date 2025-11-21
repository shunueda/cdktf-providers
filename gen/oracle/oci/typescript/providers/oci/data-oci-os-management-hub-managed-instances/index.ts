// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsManagementHubManagedInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#advisory_name DataOciOsManagementHubManagedInstances#advisory_name}
  */
  readonly advisoryName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#agent_version DataOciOsManagementHubManagedInstances#agent_version}
  */
  readonly agentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#arch_type DataOciOsManagementHubManagedInstances#arch_type}
  */
  readonly archType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#compartment_id DataOciOsManagementHubManagedInstances#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#display_name DataOciOsManagementHubManagedInstances#display_name}
  */
  readonly displayName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#display_name_contains DataOciOsManagementHubManagedInstances#display_name_contains}
  */
  readonly displayNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#group DataOciOsManagementHubManagedInstances#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#group_not_equal_to DataOciOsManagementHubManagedInstances#group_not_equal_to}
  */
  readonly groupNotEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#id DataOciOsManagementHubManagedInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#is_attached_to_group_or_lifecycle_stage DataOciOsManagementHubManagedInstances#is_attached_to_group_or_lifecycle_stage}
  */
  readonly isAttachedToGroupOrLifecycleStage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstances#is_managed_by_autonomous_linux}
  */
  readonly isManagedByAutonomousLinux?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#is_management_station DataOciOsManagementHubManagedInstances#is_management_station}
  */
  readonly isManagementStation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#is_profile_attached DataOciOsManagementHubManagedInstances#is_profile_attached}
  */
  readonly isProfileAttached?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#is_reboot_required DataOciOsManagementHubManagedInstances#is_reboot_required}
  */
  readonly isRebootRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment DataOciOsManagementHubManagedInstances#lifecycle_environment}
  */
  readonly lifecycleEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_environment_not_equal_to}
  */
  readonly lifecycleEnvironmentNotEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage DataOciOsManagementHubManagedInstances#lifecycle_stage}
  */
  readonly lifecycleStage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_stage_not_equal_to}
  */
  readonly lifecycleStageNotEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#location DataOciOsManagementHubManagedInstances#location}
  */
  readonly location?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#location_not_equal_to DataOciOsManagementHubManagedInstances#location_not_equal_to}
  */
  readonly locationNotEqualTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#managed_instance_id DataOciOsManagementHubManagedInstances#managed_instance_id}
  */
  readonly managedInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#management_station DataOciOsManagementHubManagedInstances#management_station}
  */
  readonly managementStation?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#management_station_not_equal_to DataOciOsManagementHubManagedInstances#management_station_not_equal_to}
  */
  readonly managementStationNotEqualTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#os_family DataOciOsManagementHubManagedInstances#os_family}
  */
  readonly osFamily?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#profile DataOciOsManagementHubManagedInstances#profile}
  */
  readonly profile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#profile_not_equal_to DataOciOsManagementHubManagedInstances#profile_not_equal_to}
  */
  readonly profileNotEqualTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#software_source_id DataOciOsManagementHubManagedInstances#software_source_id}
  */
  readonly softwareSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#status DataOciOsManagementHubManagedInstances#status}
  */
  readonly status?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#filter DataOciOsManagementHubManagedInstances#filter}
  */
  readonly filter?: DataOciOsManagementHubManagedInstancesFilter[] | cdktf.IResolvable;
}
export interface DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings {
}

export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsToTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsToHclTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_data_collection_authorized - computed: true, optional: false, required: false
  public get isDataCollectionAuthorized() {
    return this.getBooleanAttribute('is_data_collection_authorized');
  }

  // scheduled_job_id - computed: true, optional: false, required: false
  public get scheduledJobId() {
    return this.getStringAttribute('scheduled_job_id');
  }
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference {
    return new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment {
}

export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentToTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentToHclTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference {
    return new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage {
}

export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageToTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageToHclTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference {
    return new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup {
}

export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupToTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupToHclTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference {
    return new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources {
}

export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesToTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesToHclTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_mandatory_for_autonomous_linux - computed: true, optional: false, required: false
  public get isMandatoryForAutonomousLinux() {
    return this.getBooleanAttribute('is_mandatory_for_autonomous_linux');
  }

  // software_source_type - computed: true, optional: false, required: false
  public get softwareSourceType() {
    return this.getStringAttribute('software_source_type');
  }
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference {
    return new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems {
}

export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsToTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsToHclTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // autonomous_settings - computed: true, optional: false, required: false
  private _autonomousSettings = new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList(this, "autonomous_settings", false);
  public get autonomousSettings() {
    return this._autonomousSettings;
  }

  // bug_updates_available - computed: true, optional: false, required: false
  public get bugUpdatesAvailable() {
    return this.getNumberAttribute('bug_updates_available');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enhancement_updates_available - computed: true, optional: false, required: false
  public get enhancementUpdatesAvailable() {
    return this.getNumberAttribute('enhancement_updates_available');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installed_packages - computed: true, optional: false, required: false
  public get installedPackages() {
    return this.getNumberAttribute('installed_packages');
  }

  // installed_windows_updates - computed: true, optional: false, required: false
  public get installedWindowsUpdates() {
    return this.getNumberAttribute('installed_windows_updates');
  }

  // is_managed_by_autonomous_linux - computed: true, optional: false, required: false
  public get isManagedByAutonomousLinux() {
    return this.getBooleanAttribute('is_managed_by_autonomous_linux');
  }

  // is_management_station - computed: true, optional: false, required: false
  public get isManagementStation() {
    return this.getBooleanAttribute('is_management_station');
  }

  // is_reboot_required - computed: true, optional: false, required: false
  public get isRebootRequired() {
    return this.getBooleanAttribute('is_reboot_required');
  }

  // ksplice_effective_kernel_version - computed: true, optional: false, required: false
  public get kspliceEffectiveKernelVersion() {
    return this.getStringAttribute('ksplice_effective_kernel_version');
  }

  // lifecycle_environment - computed: true, optional: false, required: false
  private _lifecycleEnvironment = new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList(this, "lifecycle_environment", false);
  public get lifecycleEnvironment() {
    return this._lifecycleEnvironment;
  }

  // lifecycle_stage - computed: true, optional: false, required: false
  private _lifecycleStage = new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList(this, "lifecycle_stage", false);
  public get lifecycleStage() {
    return this._lifecycleStage;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // managed_instance_group - computed: true, optional: false, required: false
  private _managedInstanceGroup = new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList(this, "managed_instance_group", false);
  public get managedInstanceGroup() {
    return this._managedInstanceGroup;
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }

  // notification_topic_id - computed: true, optional: false, required: false
  public get notificationTopicId() {
    return this.getStringAttribute('notification_topic_id');
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // os_kernel_version - computed: true, optional: false, required: false
  public get osKernelVersion() {
    return this.getStringAttribute('os_kernel_version');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // other_updates_available - computed: true, optional: false, required: false
  public get otherUpdatesAvailable() {
    return this.getNumberAttribute('other_updates_available');
  }

  // primary_management_station_id - computed: true, optional: false, required: false
  public get primaryManagementStationId() {
    return this.getStringAttribute('primary_management_station_id');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // profile_version - computed: true, optional: false, required: false
  public get profileVersion() {
    return this.getStringAttribute('profile_version');
  }

  // scheduled_job_count - computed: true, optional: false, required: false
  public get scheduledJobCount() {
    return this.getNumberAttribute('scheduled_job_count');
  }

  // secondary_management_station_id - computed: true, optional: false, required: false
  public get secondaryManagementStationId() {
    return this.getStringAttribute('secondary_management_station_id');
  }

  // security_updates_available - computed: true, optional: false, required: false
  public get securityUpdatesAvailable() {
    return this.getNumberAttribute('security_updates_available');
  }

  // software_sources - computed: true, optional: false, required: false
  private _softwareSources = new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList(this, "software_sources", false);
  public get softwareSources() {
    return this._softwareSources;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_boot - computed: true, optional: false, required: false
  public get timeLastBoot() {
    return this.getStringAttribute('time_last_boot');
  }

  // time_last_checkin - computed: true, optional: false, required: false
  public get timeLastCheckin() {
    return this.getStringAttribute('time_last_checkin');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // updates_available - computed: true, optional: false, required: false
  public get updatesAvailable() {
    return this.getNumberAttribute('updates_available');
  }

  // work_request_count - computed: true, optional: false, required: false
  public get workRequestCount() {
    return this.getNumberAttribute('work_request_count');
  }
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference {
    return new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstancesManagedInstanceCollection {
}

export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionToTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubManagedInstancesManagedInstanceCollectionToHclTerraform(struct?: DataOciOsManagementHubManagedInstancesManagedInstanceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstancesManagedInstanceCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstancesManagedInstanceCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference {
    return new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstancesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#name DataOciOsManagementHubManagedInstances#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#regex DataOciOsManagementHubManagedInstances#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#values DataOciOsManagementHubManagedInstances#values}
  */
  readonly values: string[];
}

export function dataOciOsManagementHubManagedInstancesFilterToTerraform(struct?: DataOciOsManagementHubManagedInstancesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciOsManagementHubManagedInstancesFilterToHclTerraform(struct?: DataOciOsManagementHubManagedInstancesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciOsManagementHubManagedInstancesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstancesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstancesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciOsManagementHubManagedInstancesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOsManagementHubManagedInstancesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOsManagementHubManagedInstancesFilterOutputReference {
    return new DataOciOsManagementHubManagedInstancesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances oci_os_management_hub_managed_instances}
*/
export class DataOciOsManagementHubManagedInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_managed_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsManagementHubManagedInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsManagementHubManagedInstances to import
  * @param importFromId The id of the existing DataOciOsManagementHubManagedInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsManagementHubManagedInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_managed_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_managed_instances oci_os_management_hub_managed_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsManagementHubManagedInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciOsManagementHubManagedInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_managed_instances',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advisoryName = config.advisoryName;
    this._agentVersion = config.agentVersion;
    this._archType = config.archType;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._displayNameContains = config.displayNameContains;
    this._group = config.group;
    this._groupNotEqualTo = config.groupNotEqualTo;
    this._id = config.id;
    this._isAttachedToGroupOrLifecycleStage = config.isAttachedToGroupOrLifecycleStage;
    this._isManagedByAutonomousLinux = config.isManagedByAutonomousLinux;
    this._isManagementStation = config.isManagementStation;
    this._isProfileAttached = config.isProfileAttached;
    this._isRebootRequired = config.isRebootRequired;
    this._lifecycleEnvironment = config.lifecycleEnvironment;
    this._lifecycleEnvironmentNotEqualTo = config.lifecycleEnvironmentNotEqualTo;
    this._lifecycleStage = config.lifecycleStage;
    this._lifecycleStageNotEqualTo = config.lifecycleStageNotEqualTo;
    this._location = config.location;
    this._locationNotEqualTo = config.locationNotEqualTo;
    this._managedInstanceId = config.managedInstanceId;
    this._managementStation = config.managementStation;
    this._managementStationNotEqualTo = config.managementStationNotEqualTo;
    this._osFamily = config.osFamily;
    this._profile = config.profile;
    this._profileNotEqualTo = config.profileNotEqualTo;
    this._softwareSourceId = config.softwareSourceId;
    this._status = config.status;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advisory_name - computed: false, optional: true, required: false
  private _advisoryName?: string[]; 
  public get advisoryName() {
    return this.getListAttribute('advisory_name');
  }
  public set advisoryName(value: string[]) {
    this._advisoryName = value;
  }
  public resetAdvisoryName() {
    this._advisoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advisoryNameInput() {
    return this._advisoryName;
  }

  // agent_version - computed: false, optional: true, required: false
  private _agentVersion?: string; 
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }
  public set agentVersion(value: string) {
    this._agentVersion = value;
  }
  public resetAgentVersion() {
    this._agentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentVersionInput() {
    return this._agentVersion;
  }

  // arch_type - computed: false, optional: true, required: false
  private _archType?: string[]; 
  public get archType() {
    return this.getListAttribute('arch_type');
  }
  public set archType(value: string[]) {
    this._archType = value;
  }
  public resetArchType() {
    this._archType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archTypeInput() {
    return this._archType;
  }

  // compartment_id - computed: false, optional: true, required: false
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string[]; 
  public get displayName() {
    return this.getListAttribute('display_name');
  }
  public set displayName(value: string[]) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // display_name_contains - computed: false, optional: true, required: false
  private _displayNameContains?: string; 
  public get displayNameContains() {
    return this.getStringAttribute('display_name_contains');
  }
  public set displayNameContains(value: string) {
    this._displayNameContains = value;
  }
  public resetDisplayNameContains() {
    this._displayNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameContainsInput() {
    return this._displayNameContains;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // group_not_equal_to - computed: false, optional: true, required: false
  private _groupNotEqualTo?: string; 
  public get groupNotEqualTo() {
    return this.getStringAttribute('group_not_equal_to');
  }
  public set groupNotEqualTo(value: string) {
    this._groupNotEqualTo = value;
  }
  public resetGroupNotEqualTo() {
    this._groupNotEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNotEqualToInput() {
    return this._groupNotEqualTo;
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

  // is_attached_to_group_or_lifecycle_stage - computed: false, optional: true, required: false
  private _isAttachedToGroupOrLifecycleStage?: boolean | cdktf.IResolvable; 
  public get isAttachedToGroupOrLifecycleStage() {
    return this.getBooleanAttribute('is_attached_to_group_or_lifecycle_stage');
  }
  public set isAttachedToGroupOrLifecycleStage(value: boolean | cdktf.IResolvable) {
    this._isAttachedToGroupOrLifecycleStage = value;
  }
  public resetIsAttachedToGroupOrLifecycleStage() {
    this._isAttachedToGroupOrLifecycleStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAttachedToGroupOrLifecycleStageInput() {
    return this._isAttachedToGroupOrLifecycleStage;
  }

  // is_managed_by_autonomous_linux - computed: false, optional: true, required: false
  private _isManagedByAutonomousLinux?: boolean | cdktf.IResolvable; 
  public get isManagedByAutonomousLinux() {
    return this.getBooleanAttribute('is_managed_by_autonomous_linux');
  }
  public set isManagedByAutonomousLinux(value: boolean | cdktf.IResolvable) {
    this._isManagedByAutonomousLinux = value;
  }
  public resetIsManagedByAutonomousLinux() {
    this._isManagedByAutonomousLinux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManagedByAutonomousLinuxInput() {
    return this._isManagedByAutonomousLinux;
  }

  // is_management_station - computed: false, optional: true, required: false
  private _isManagementStation?: boolean | cdktf.IResolvable; 
  public get isManagementStation() {
    return this.getBooleanAttribute('is_management_station');
  }
  public set isManagementStation(value: boolean | cdktf.IResolvable) {
    this._isManagementStation = value;
  }
  public resetIsManagementStation() {
    this._isManagementStation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManagementStationInput() {
    return this._isManagementStation;
  }

  // is_profile_attached - computed: false, optional: true, required: false
  private _isProfileAttached?: boolean | cdktf.IResolvable; 
  public get isProfileAttached() {
    return this.getBooleanAttribute('is_profile_attached');
  }
  public set isProfileAttached(value: boolean | cdktf.IResolvable) {
    this._isProfileAttached = value;
  }
  public resetIsProfileAttached() {
    this._isProfileAttached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProfileAttachedInput() {
    return this._isProfileAttached;
  }

  // is_reboot_required - computed: false, optional: true, required: false
  private _isRebootRequired?: boolean | cdktf.IResolvable; 
  public get isRebootRequired() {
    return this.getBooleanAttribute('is_reboot_required');
  }
  public set isRebootRequired(value: boolean | cdktf.IResolvable) {
    this._isRebootRequired = value;
  }
  public resetIsRebootRequired() {
    this._isRebootRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRebootRequiredInput() {
    return this._isRebootRequired;
  }

  // lifecycle_environment - computed: false, optional: true, required: false
  private _lifecycleEnvironment?: string; 
  public get lifecycleEnvironment() {
    return this.getStringAttribute('lifecycle_environment');
  }
  public set lifecycleEnvironment(value: string) {
    this._lifecycleEnvironment = value;
  }
  public resetLifecycleEnvironment() {
    this._lifecycleEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleEnvironmentInput() {
    return this._lifecycleEnvironment;
  }

  // lifecycle_environment_not_equal_to - computed: false, optional: true, required: false
  private _lifecycleEnvironmentNotEqualTo?: string; 
  public get lifecycleEnvironmentNotEqualTo() {
    return this.getStringAttribute('lifecycle_environment_not_equal_to');
  }
  public set lifecycleEnvironmentNotEqualTo(value: string) {
    this._lifecycleEnvironmentNotEqualTo = value;
  }
  public resetLifecycleEnvironmentNotEqualTo() {
    this._lifecycleEnvironmentNotEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleEnvironmentNotEqualToInput() {
    return this._lifecycleEnvironmentNotEqualTo;
  }

  // lifecycle_stage - computed: false, optional: true, required: false
  private _lifecycleStage?: string; 
  public get lifecycleStage() {
    return this.getStringAttribute('lifecycle_stage');
  }
  public set lifecycleStage(value: string) {
    this._lifecycleStage = value;
  }
  public resetLifecycleStage() {
    this._lifecycleStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStageInput() {
    return this._lifecycleStage;
  }

  // lifecycle_stage_not_equal_to - computed: false, optional: true, required: false
  private _lifecycleStageNotEqualTo?: string; 
  public get lifecycleStageNotEqualTo() {
    return this.getStringAttribute('lifecycle_stage_not_equal_to');
  }
  public set lifecycleStageNotEqualTo(value: string) {
    this._lifecycleStageNotEqualTo = value;
  }
  public resetLifecycleStageNotEqualTo() {
    this._lifecycleStageNotEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStageNotEqualToInput() {
    return this._lifecycleStageNotEqualTo;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string[]; 
  public get location() {
    return this.getListAttribute('location');
  }
  public set location(value: string[]) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // location_not_equal_to - computed: false, optional: true, required: false
  private _locationNotEqualTo?: string[]; 
  public get locationNotEqualTo() {
    return this.getListAttribute('location_not_equal_to');
  }
  public set locationNotEqualTo(value: string[]) {
    this._locationNotEqualTo = value;
  }
  public resetLocationNotEqualTo() {
    this._locationNotEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNotEqualToInput() {
    return this._locationNotEqualTo;
  }

  // managed_instance_collection - computed: true, optional: false, required: false
  private _managedInstanceCollection = new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList(this, "managed_instance_collection", false);
  public get managedInstanceCollection() {
    return this._managedInstanceCollection;
  }

  // managed_instance_id - computed: false, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // management_station - computed: false, optional: true, required: false
  private _managementStation?: string[]; 
  public get managementStation() {
    return this.getListAttribute('management_station');
  }
  public set managementStation(value: string[]) {
    this._managementStation = value;
  }
  public resetManagementStation() {
    this._managementStation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementStationInput() {
    return this._managementStation;
  }

  // management_station_not_equal_to - computed: false, optional: true, required: false
  private _managementStationNotEqualTo?: string[]; 
  public get managementStationNotEqualTo() {
    return this.getListAttribute('management_station_not_equal_to');
  }
  public set managementStationNotEqualTo(value: string[]) {
    this._managementStationNotEqualTo = value;
  }
  public resetManagementStationNotEqualTo() {
    this._managementStationNotEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementStationNotEqualToInput() {
    return this._managementStationNotEqualTo;
  }

  // os_family - computed: false, optional: true, required: false
  private _osFamily?: string[]; 
  public get osFamily() {
    return this.getListAttribute('os_family');
  }
  public set osFamily(value: string[]) {
    this._osFamily = value;
  }
  public resetOsFamily() {
    this._osFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string[]; 
  public get profile() {
    return this.getListAttribute('profile');
  }
  public set profile(value: string[]) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // profile_not_equal_to - computed: false, optional: true, required: false
  private _profileNotEqualTo?: string[]; 
  public get profileNotEqualTo() {
    return this.getListAttribute('profile_not_equal_to');
  }
  public set profileNotEqualTo(value: string[]) {
    this._profileNotEqualTo = value;
  }
  public resetProfileNotEqualTo() {
    this._profileNotEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNotEqualToInput() {
    return this._profileNotEqualTo;
  }

  // software_source_id - computed: false, optional: true, required: false
  private _softwareSourceId?: string; 
  public get softwareSourceId() {
    return this.getStringAttribute('software_source_id');
  }
  public set softwareSourceId(value: string) {
    this._softwareSourceId = value;
  }
  public resetSoftwareSourceId() {
    this._softwareSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceIdInput() {
    return this._softwareSourceId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return this.getListAttribute('status');
  }
  public set status(value: string[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOsManagementHubManagedInstancesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOsManagementHubManagedInstancesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advisory_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._advisoryName),
      agent_version: cdktf.stringToTerraform(this._agentVersion),
      arch_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._archType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._displayName),
      display_name_contains: cdktf.stringToTerraform(this._displayNameContains),
      group: cdktf.stringToTerraform(this._group),
      group_not_equal_to: cdktf.stringToTerraform(this._groupNotEqualTo),
      id: cdktf.stringToTerraform(this._id),
      is_attached_to_group_or_lifecycle_stage: cdktf.booleanToTerraform(this._isAttachedToGroupOrLifecycleStage),
      is_managed_by_autonomous_linux: cdktf.booleanToTerraform(this._isManagedByAutonomousLinux),
      is_management_station: cdktf.booleanToTerraform(this._isManagementStation),
      is_profile_attached: cdktf.booleanToTerraform(this._isProfileAttached),
      is_reboot_required: cdktf.booleanToTerraform(this._isRebootRequired),
      lifecycle_environment: cdktf.stringToTerraform(this._lifecycleEnvironment),
      lifecycle_environment_not_equal_to: cdktf.stringToTerraform(this._lifecycleEnvironmentNotEqualTo),
      lifecycle_stage: cdktf.stringToTerraform(this._lifecycleStage),
      lifecycle_stage_not_equal_to: cdktf.stringToTerraform(this._lifecycleStageNotEqualTo),
      location: cdktf.listMapper(cdktf.stringToTerraform, false)(this._location),
      location_not_equal_to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locationNotEqualTo),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      management_station: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementStation),
      management_station_not_equal_to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementStationNotEqualTo),
      os_family: cdktf.listMapper(cdktf.stringToTerraform, false)(this._osFamily),
      profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profile),
      profile_not_equal_to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profileNotEqualTo),
      software_source_id: cdktf.stringToTerraform(this._softwareSourceId),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
      filter: cdktf.listMapper(dataOciOsManagementHubManagedInstancesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advisory_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._advisoryName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      agent_version: {
        value: cdktf.stringToHclTerraform(this._agentVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arch_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._archType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._displayName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name_contains: {
        value: cdktf.stringToHclTerraform(this._displayNameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_not_equal_to: {
        value: cdktf.stringToHclTerraform(this._groupNotEqualTo),
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
      is_attached_to_group_or_lifecycle_stage: {
        value: cdktf.booleanToHclTerraform(this._isAttachedToGroupOrLifecycleStage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_managed_by_autonomous_linux: {
        value: cdktf.booleanToHclTerraform(this._isManagedByAutonomousLinux),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_management_station: {
        value: cdktf.booleanToHclTerraform(this._isManagementStation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_profile_attached: {
        value: cdktf.booleanToHclTerraform(this._isProfileAttached),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_reboot_required: {
        value: cdktf.booleanToHclTerraform(this._isRebootRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lifecycle_environment: {
        value: cdktf.stringToHclTerraform(this._lifecycleEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_environment_not_equal_to: {
        value: cdktf.stringToHclTerraform(this._lifecycleEnvironmentNotEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_stage: {
        value: cdktf.stringToHclTerraform(this._lifecycleStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_stage_not_equal_to: {
        value: cdktf.stringToHclTerraform(this._lifecycleStageNotEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._location),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location_not_equal_to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locationNotEqualTo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_station: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementStation),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      management_station_not_equal_to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementStationNotEqualTo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      os_family: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._osFamily),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profile),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      profile_not_equal_to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profileNotEqualTo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      software_source_id: {
        value: cdktf.stringToHclTerraform(this._softwareSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._status),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOsManagementHubManagedInstancesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOsManagementHubManagedInstancesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
