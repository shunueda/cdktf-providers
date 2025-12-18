// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsManagementHubScheduledJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#compartment_id OsManagementHubScheduledJob#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#defined_tags OsManagementHubScheduledJob#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#description OsManagementHubScheduledJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#display_name OsManagementHubScheduledJob#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#freeform_tags OsManagementHubScheduledJob#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#id OsManagementHubScheduledJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#is_managed_by_autonomous_linux OsManagementHubScheduledJob#is_managed_by_autonomous_linux}
  */
  readonly isManagedByAutonomousLinux?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#is_subcompartment_included OsManagementHubScheduledJob#is_subcompartment_included}
  */
  readonly isSubcompartmentIncluded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#lifecycle_stage_ids OsManagementHubScheduledJob#lifecycle_stage_ids}
  */
  readonly lifecycleStageIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#locations OsManagementHubScheduledJob#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#managed_compartment_ids OsManagementHubScheduledJob#managed_compartment_ids}
  */
  readonly managedCompartmentIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#managed_instance_group_ids OsManagementHubScheduledJob#managed_instance_group_ids}
  */
  readonly managedInstanceGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#managed_instance_ids OsManagementHubScheduledJob#managed_instance_ids}
  */
  readonly managedInstanceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#recurring_rule OsManagementHubScheduledJob#recurring_rule}
  */
  readonly recurringRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#retry_intervals OsManagementHubScheduledJob#retry_intervals}
  */
  readonly retryIntervals?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#schedule_type OsManagementHubScheduledJob#schedule_type}
  */
  readonly scheduleType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#time_next_execution OsManagementHubScheduledJob#time_next_execution}
  */
  readonly timeNextExecution: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#work_request_id OsManagementHubScheduledJob#work_request_id}
  */
  readonly workRequestId?: string;
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#operations OsManagementHubScheduledJob#operations}
  */
  readonly operations: OsManagementHubScheduledJobOperations[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#timeouts OsManagementHubScheduledJob#timeouts}
  */
  readonly timeouts?: OsManagementHubScheduledJobTimeouts;
}
export interface OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}
  */
  readonly moduleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}
  */
  readonly softwareSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}
  */
  readonly streamName: string;
}

export function osManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableToTerraform(struct?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    module_name: cdktf.stringToTerraform(struct!.moduleName),
    software_source_id: cdktf.stringToTerraform(struct!.softwareSourceId),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function osManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableToHclTerraform(struct?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    module_name: {
      value: cdktf.stringToHclTerraform(struct!.moduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_source_id: {
      value: cdktf.stringToHclTerraform(struct!.softwareSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._moduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleName = this._moduleName;
    }
    if (this._softwareSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareSourceId = this._softwareSourceId;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._moduleName = undefined;
      this._softwareSourceId = undefined;
      this._streamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._moduleName = value.moduleName;
      this._softwareSourceId = value.softwareSourceId;
      this._streamName = value.streamName;
    }
  }

  // module_name - computed: false, optional: false, required: true
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }

  // software_source_id - computed: true, optional: true, required: false
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

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference {
    return new OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}
  */
  readonly moduleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}
  */
  readonly softwareSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}
  */
  readonly streamName: string;
}

export function osManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableToTerraform(struct?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    module_name: cdktf.stringToTerraform(struct!.moduleName),
    software_source_id: cdktf.stringToTerraform(struct!.softwareSourceId),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function osManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableToHclTerraform(struct?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    module_name: {
      value: cdktf.stringToHclTerraform(struct!.moduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_source_id: {
      value: cdktf.stringToHclTerraform(struct!.softwareSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._moduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleName = this._moduleName;
    }
    if (this._softwareSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareSourceId = this._softwareSourceId;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._moduleName = undefined;
      this._softwareSourceId = undefined;
      this._streamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._moduleName = value.moduleName;
      this._softwareSourceId = value.softwareSourceId;
      this._streamName = value.streamName;
    }
  }

  // module_name - computed: false, optional: false, required: true
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }

  // software_source_id - computed: true, optional: true, required: false
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

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference {
    return new OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}
  */
  readonly moduleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#profile_name OsManagementHubScheduledJob#profile_name}
  */
  readonly profileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}
  */
  readonly softwareSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}
  */
  readonly streamName: string;
}

export function osManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallToTerraform(struct?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    module_name: cdktf.stringToTerraform(struct!.moduleName),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
    software_source_id: cdktf.stringToTerraform(struct!.softwareSourceId),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function osManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallToHclTerraform(struct?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    module_name: {
      value: cdktf.stringToHclTerraform(struct!.moduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_source_id: {
      value: cdktf.stringToHclTerraform(struct!.softwareSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._moduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleName = this._moduleName;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._softwareSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareSourceId = this._softwareSourceId;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._moduleName = undefined;
      this._profileName = undefined;
      this._softwareSourceId = undefined;
      this._streamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._moduleName = value.moduleName;
      this._profileName = value.profileName;
      this._softwareSourceId = value.softwareSourceId;
      this._streamName = value.streamName;
    }
  }

  // module_name - computed: false, optional: false, required: true
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // software_source_id - computed: true, optional: true, required: false
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

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference {
    return new OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}
  */
  readonly moduleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#profile_name OsManagementHubScheduledJob#profile_name}
  */
  readonly profileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}
  */
  readonly softwareSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}
  */
  readonly streamName: string;
}

export function osManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveToTerraform(struct?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    module_name: cdktf.stringToTerraform(struct!.moduleName),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
    software_source_id: cdktf.stringToTerraform(struct!.softwareSourceId),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function osManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveToHclTerraform(struct?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    module_name: {
      value: cdktf.stringToHclTerraform(struct!.moduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_source_id: {
      value: cdktf.stringToHclTerraform(struct!.softwareSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._moduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleName = this._moduleName;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._softwareSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareSourceId = this._softwareSourceId;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._moduleName = undefined;
      this._profileName = undefined;
      this._softwareSourceId = undefined;
      this._streamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._moduleName = value.moduleName;
      this._profileName = value.profileName;
      this._softwareSourceId = value.softwareSourceId;
      this._streamName = value.streamName;
    }
  }

  // module_name - computed: false, optional: false, required: true
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // software_source_id - computed: true, optional: true, required: false
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

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference {
    return new OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubScheduledJobOperationsManageModuleStreamsDetails {
  /**
  * disable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#disable OsManagementHubScheduledJob#disable}
  */
  readonly disable?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable[] | cdktf.IResolvable;
  /**
  * enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#enable OsManagementHubScheduledJob#enable}
  */
  readonly enable?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable[] | cdktf.IResolvable;
  /**
  * install block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#install OsManagementHubScheduledJob#install}
  */
  readonly install?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall[] | cdktf.IResolvable;
  /**
  * remove block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#remove OsManagementHubScheduledJob#remove}
  */
  readonly remove?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove[] | cdktf.IResolvable;
}

export function osManagementHubScheduledJobOperationsManageModuleStreamsDetailsToTerraform(struct?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference | OsManagementHubScheduledJobOperationsManageModuleStreamsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.listMapper(osManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableToTerraform, true)(struct!.disable),
    enable: cdktf.listMapper(osManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableToTerraform, true)(struct!.enable),
    install: cdktf.listMapper(osManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallToTerraform, true)(struct!.install),
    remove: cdktf.listMapper(osManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveToTerraform, true)(struct!.remove),
  }
}


export function osManagementHubScheduledJobOperationsManageModuleStreamsDetailsToHclTerraform(struct?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference | OsManagementHubScheduledJobOperationsManageModuleStreamsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.listMapperHcl(osManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableToHclTerraform, true)(struct!.disable),
      isBlock: true,
      type: "list",
      storageClassType: "OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList",
    },
    enable: {
      value: cdktf.listMapperHcl(osManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableToHclTerraform, true)(struct!.enable),
      isBlock: true,
      type: "list",
      storageClassType: "OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList",
    },
    install: {
      value: cdktf.listMapperHcl(osManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallToHclTerraform, true)(struct!.install),
      isBlock: true,
      type: "list",
      storageClassType: "OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList",
    },
    remove: {
      value: cdktf.listMapperHcl(osManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveToHclTerraform, true)(struct!.remove),
      isBlock: true,
      type: "list",
      storageClassType: "OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsManagementHubScheduledJobOperationsManageModuleStreamsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable?.internalValue;
    }
    if (this._enable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable?.internalValue;
    }
    if (this._install?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.install = this._install?.internalValue;
    }
    if (this._remove?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubScheduledJobOperationsManageModuleStreamsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable.internalValue = undefined;
      this._enable.internalValue = undefined;
      this._install.internalValue = undefined;
      this._remove.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable.internalValue = value.disable;
      this._enable.internalValue = value.enable;
      this._install.internalValue = value.install;
      this._remove.internalValue = value.remove;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable = new OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList(this, "disable", false);
  public get disable() {
    return this._disable;
  }
  public putDisable(value: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable[] | cdktf.IResolvable) {
    this._disable.internalValue = value;
  }
  public resetDisable() {
    this._disable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable = new OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList(this, "enable", false);
  public get enable() {
    return this._enable;
  }
  public putEnable(value: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable[] | cdktf.IResolvable) {
    this._enable.internalValue = value;
  }
  public resetEnable() {
    this._enable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable.internalValue;
  }

  // install - computed: false, optional: true, required: false
  private _install = new OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList(this, "install", false);
  public get install() {
    return this._install;
  }
  public putInstall(value: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall[] | cdktf.IResolvable) {
    this._install.internalValue = value;
  }
  public resetInstall() {
    this._install.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install.internalValue;
  }

  // remove - computed: false, optional: true, required: false
  private _remove = new OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList(this, "remove", false);
  public get remove() {
    return this._remove;
  }
  public putRemove(value: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove[] | cdktf.IResolvable) {
    this._remove.internalValue = value;
  }
  public resetRemove() {
    this._remove.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove.internalValue;
  }
}
export interface OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}
  */
  readonly moduleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}
  */
  readonly softwareSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}
  */
  readonly streamName: string;
}

export function osManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsToTerraform(struct?: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference | OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    module_name: cdktf.stringToTerraform(struct!.moduleName),
    software_source_id: cdktf.stringToTerraform(struct!.softwareSourceId),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function osManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsToHclTerraform(struct?: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference | OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    module_name: {
      value: cdktf.stringToHclTerraform(struct!.moduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_source_id: {
      value: cdktf.stringToHclTerraform(struct!.softwareSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._moduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleName = this._moduleName;
    }
    if (this._softwareSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareSourceId = this._softwareSourceId;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._moduleName = undefined;
      this._softwareSourceId = undefined;
      this._streamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._moduleName = value.moduleName;
      this._softwareSourceId = value.softwareSourceId;
      this._streamName = value.streamName;
    }
  }

  // module_name - computed: false, optional: false, required: true
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }

  // software_source_id - computed: true, optional: true, required: false
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

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}
export interface OsManagementHubScheduledJobOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#operation_type OsManagementHubScheduledJob#operation_type}
  */
  readonly operationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#package_names OsManagementHubScheduledJob#package_names}
  */
  readonly packageNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#reboot_timeout_in_mins OsManagementHubScheduledJob#reboot_timeout_in_mins}
  */
  readonly rebootTimeoutInMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#software_source_ids OsManagementHubScheduledJob#software_source_ids}
  */
  readonly softwareSourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#windows_update_names OsManagementHubScheduledJob#windows_update_names}
  */
  readonly windowsUpdateNames?: string[];
  /**
  * manage_module_streams_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#manage_module_streams_details OsManagementHubScheduledJob#manage_module_streams_details}
  */
  readonly manageModuleStreamsDetails?: OsManagementHubScheduledJobOperationsManageModuleStreamsDetails;
  /**
  * switch_module_streams_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#switch_module_streams_details OsManagementHubScheduledJob#switch_module_streams_details}
  */
  readonly switchModuleStreamsDetails?: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails;
}

export function osManagementHubScheduledJobOperationsToTerraform(struct?: OsManagementHubScheduledJobOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation_type: cdktf.stringToTerraform(struct!.operationType),
    package_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageNames),
    reboot_timeout_in_mins: cdktf.numberToTerraform(struct!.rebootTimeoutInMins),
    software_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.softwareSourceIds),
    windows_update_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.windowsUpdateNames),
    manage_module_streams_details: osManagementHubScheduledJobOperationsManageModuleStreamsDetailsToTerraform(struct!.manageModuleStreamsDetails),
    switch_module_streams_details: osManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsToTerraform(struct!.switchModuleStreamsDetails),
  }
}


export function osManagementHubScheduledJobOperationsToHclTerraform(struct?: OsManagementHubScheduledJobOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation_type: {
      value: cdktf.stringToHclTerraform(struct!.operationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packageNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reboot_timeout_in_mins: {
      value: cdktf.numberToHclTerraform(struct!.rebootTimeoutInMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    software_source_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.softwareSourceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    windows_update_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.windowsUpdateNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    manage_module_streams_details: {
      value: osManagementHubScheduledJobOperationsManageModuleStreamsDetailsToHclTerraform(struct!.manageModuleStreamsDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList",
    },
    switch_module_streams_details: {
      value: osManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsToHclTerraform(struct!.switchModuleStreamsDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubScheduledJobOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubScheduledJobOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationType = this._operationType;
    }
    if (this._packageNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageNames = this._packageNames;
    }
    if (this._rebootTimeoutInMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootTimeoutInMins = this._rebootTimeoutInMins;
    }
    if (this._softwareSourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareSourceIds = this._softwareSourceIds;
    }
    if (this._windowsUpdateNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsUpdateNames = this._windowsUpdateNames;
    }
    if (this._manageModuleStreamsDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageModuleStreamsDetails = this._manageModuleStreamsDetails?.internalValue;
    }
    if (this._switchModuleStreamsDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchModuleStreamsDetails = this._switchModuleStreamsDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubScheduledJobOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operationType = undefined;
      this._packageNames = undefined;
      this._rebootTimeoutInMins = undefined;
      this._softwareSourceIds = undefined;
      this._windowsUpdateNames = undefined;
      this._manageModuleStreamsDetails.internalValue = undefined;
      this._switchModuleStreamsDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operationType = value.operationType;
      this._packageNames = value.packageNames;
      this._rebootTimeoutInMins = value.rebootTimeoutInMins;
      this._softwareSourceIds = value.softwareSourceIds;
      this._windowsUpdateNames = value.windowsUpdateNames;
      this._manageModuleStreamsDetails.internalValue = value.manageModuleStreamsDetails;
      this._switchModuleStreamsDetails.internalValue = value.switchModuleStreamsDetails;
    }
  }

  // operation_type - computed: false, optional: false, required: true
  private _operationType?: string; 
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }
  public set operationType(value: string) {
    this._operationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTypeInput() {
    return this._operationType;
  }

  // package_names - computed: true, optional: true, required: false
  private _packageNames?: string[]; 
  public get packageNames() {
    return this.getListAttribute('package_names');
  }
  public set packageNames(value: string[]) {
    this._packageNames = value;
  }
  public resetPackageNames() {
    this._packageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNamesInput() {
    return this._packageNames;
  }

  // reboot_timeout_in_mins - computed: true, optional: true, required: false
  private _rebootTimeoutInMins?: number; 
  public get rebootTimeoutInMins() {
    return this.getNumberAttribute('reboot_timeout_in_mins');
  }
  public set rebootTimeoutInMins(value: number) {
    this._rebootTimeoutInMins = value;
  }
  public resetRebootTimeoutInMins() {
    this._rebootTimeoutInMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootTimeoutInMinsInput() {
    return this._rebootTimeoutInMins;
  }

  // software_source_ids - computed: true, optional: true, required: false
  private _softwareSourceIds?: string[]; 
  public get softwareSourceIds() {
    return this.getListAttribute('software_source_ids');
  }
  public set softwareSourceIds(value: string[]) {
    this._softwareSourceIds = value;
  }
  public resetSoftwareSourceIds() {
    this._softwareSourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceIdsInput() {
    return this._softwareSourceIds;
  }

  // windows_update_names - computed: true, optional: true, required: false
  private _windowsUpdateNames?: string[]; 
  public get windowsUpdateNames() {
    return this.getListAttribute('windows_update_names');
  }
  public set windowsUpdateNames(value: string[]) {
    this._windowsUpdateNames = value;
  }
  public resetWindowsUpdateNames() {
    this._windowsUpdateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsUpdateNamesInput() {
    return this._windowsUpdateNames;
  }

  // manage_module_streams_details - computed: false, optional: true, required: false
  private _manageModuleStreamsDetails = new OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference(this, "manage_module_streams_details");
  public get manageModuleStreamsDetails() {
    return this._manageModuleStreamsDetails;
  }
  public putManageModuleStreamsDetails(value: OsManagementHubScheduledJobOperationsManageModuleStreamsDetails) {
    this._manageModuleStreamsDetails.internalValue = value;
  }
  public resetManageModuleStreamsDetails() {
    this._manageModuleStreamsDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageModuleStreamsDetailsInput() {
    return this._manageModuleStreamsDetails.internalValue;
  }

  // switch_module_streams_details - computed: false, optional: true, required: false
  private _switchModuleStreamsDetails = new OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference(this, "switch_module_streams_details");
  public get switchModuleStreamsDetails() {
    return this._switchModuleStreamsDetails;
  }
  public putSwitchModuleStreamsDetails(value: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails) {
    this._switchModuleStreamsDetails.internalValue = value;
  }
  public resetSwitchModuleStreamsDetails() {
    this._switchModuleStreamsDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchModuleStreamsDetailsInput() {
    return this._switchModuleStreamsDetails.internalValue;
  }
}

export class OsManagementHubScheduledJobOperationsList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubScheduledJobOperations[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubScheduledJobOperationsOutputReference {
    return new OsManagementHubScheduledJobOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubScheduledJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#create OsManagementHubScheduledJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#delete OsManagementHubScheduledJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#update OsManagementHubScheduledJob#update}
  */
  readonly update?: string;
}

export function osManagementHubScheduledJobTimeoutsToTerraform(struct?: OsManagementHubScheduledJobTimeouts | cdktf.IResolvable): any {
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


export function osManagementHubScheduledJobTimeoutsToHclTerraform(struct?: OsManagementHubScheduledJobTimeouts | cdktf.IResolvable): any {
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

export class OsManagementHubScheduledJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsManagementHubScheduledJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsManagementHubScheduledJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job oci_os_management_hub_scheduled_job}
*/
export class OsManagementHubScheduledJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_scheduled_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsManagementHubScheduledJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsManagementHubScheduledJob to import
  * @param importFromId The id of the existing OsManagementHubScheduledJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsManagementHubScheduledJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_scheduled_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_scheduled_job oci_os_management_hub_scheduled_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsManagementHubScheduledJobConfig
  */
  public constructor(scope: Construct, id: string, config: OsManagementHubScheduledJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_scheduled_job',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isManagedByAutonomousLinux = config.isManagedByAutonomousLinux;
    this._isSubcompartmentIncluded = config.isSubcompartmentIncluded;
    this._lifecycleStageIds = config.lifecycleStageIds;
    this._locations = config.locations;
    this._managedCompartmentIds = config.managedCompartmentIds;
    this._managedInstanceGroupIds = config.managedInstanceGroupIds;
    this._managedInstanceIds = config.managedInstanceIds;
    this._recurringRule = config.recurringRule;
    this._retryIntervals = config.retryIntervals;
    this._scheduleType = config.scheduleType;
    this._timeNextExecution = config.timeNextExecution;
    this._workRequestId = config.workRequestId;
    this._operations.internalValue = config.operations;
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

  // is_managed_by_autonomous_linux - computed: true, optional: true, required: false
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

  // is_restricted - computed: true, optional: false, required: false
  public get isRestricted() {
    return this.getBooleanAttribute('is_restricted');
  }

  // is_subcompartment_included - computed: true, optional: true, required: false
  private _isSubcompartmentIncluded?: boolean | cdktf.IResolvable; 
  public get isSubcompartmentIncluded() {
    return this.getBooleanAttribute('is_subcompartment_included');
  }
  public set isSubcompartmentIncluded(value: boolean | cdktf.IResolvable) {
    this._isSubcompartmentIncluded = value;
  }
  public resetIsSubcompartmentIncluded() {
    this._isSubcompartmentIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSubcompartmentIncludedInput() {
    return this._isSubcompartmentIncluded;
  }

  // lifecycle_stage_ids - computed: true, optional: true, required: false
  private _lifecycleStageIds?: string[]; 
  public get lifecycleStageIds() {
    return this.getListAttribute('lifecycle_stage_ids');
  }
  public set lifecycleStageIds(value: string[]) {
    this._lifecycleStageIds = value;
  }
  public resetLifecycleStageIds() {
    this._lifecycleStageIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStageIdsInput() {
    return this._lifecycleStageIds;
  }

  // locations - computed: true, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // managed_compartment_ids - computed: true, optional: true, required: false
  private _managedCompartmentIds?: string[]; 
  public get managedCompartmentIds() {
    return this.getListAttribute('managed_compartment_ids');
  }
  public set managedCompartmentIds(value: string[]) {
    this._managedCompartmentIds = value;
  }
  public resetManagedCompartmentIds() {
    this._managedCompartmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedCompartmentIdsInput() {
    return this._managedCompartmentIds;
  }

  // managed_instance_group_ids - computed: true, optional: true, required: false
  private _managedInstanceGroupIds?: string[]; 
  public get managedInstanceGroupIds() {
    return this.getListAttribute('managed_instance_group_ids');
  }
  public set managedInstanceGroupIds(value: string[]) {
    this._managedInstanceGroupIds = value;
  }
  public resetManagedInstanceGroupIds() {
    this._managedInstanceGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceGroupIdsInput() {
    return this._managedInstanceGroupIds;
  }

  // managed_instance_ids - computed: true, optional: true, required: false
  private _managedInstanceIds?: string[]; 
  public get managedInstanceIds() {
    return this.getListAttribute('managed_instance_ids');
  }
  public set managedInstanceIds(value: string[]) {
    this._managedInstanceIds = value;
  }
  public resetManagedInstanceIds() {
    this._managedInstanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdsInput() {
    return this._managedInstanceIds;
  }

  // recurring_rule - computed: true, optional: true, required: false
  private _recurringRule?: string; 
  public get recurringRule() {
    return this.getStringAttribute('recurring_rule');
  }
  public set recurringRule(value: string) {
    this._recurringRule = value;
  }
  public resetRecurringRule() {
    this._recurringRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringRuleInput() {
    return this._recurringRule;
  }

  // retry_intervals - computed: true, optional: true, required: false
  private _retryIntervals?: number[]; 
  public get retryIntervals() {
    return this.getNumberListAttribute('retry_intervals');
  }
  public set retryIntervals(value: number[]) {
    this._retryIntervals = value;
  }
  public resetRetryIntervals() {
    this._retryIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalsInput() {
    return this._retryIntervals;
  }

  // schedule_type - computed: false, optional: false, required: true
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
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

  // time_last_execution - computed: true, optional: false, required: false
  public get timeLastExecution() {
    return this.getStringAttribute('time_last_execution');
  }

  // time_next_execution - computed: false, optional: false, required: true
  private _timeNextExecution?: string; 
  public get timeNextExecution() {
    return this.getStringAttribute('time_next_execution');
  }
  public set timeNextExecution(value: string) {
    this._timeNextExecution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeNextExecutionInput() {
    return this._timeNextExecution;
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // work_request_id - computed: true, optional: true, required: false
  private _workRequestId?: string; 
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }
  public set workRequestId(value: string) {
    this._workRequestId = value;
  }
  public resetWorkRequestId() {
    this._workRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workRequestIdInput() {
    return this._workRequestId;
  }

  // work_request_ids - computed: true, optional: false, required: false
  public get workRequestIds() {
    return this.getListAttribute('work_request_ids');
  }

  // operations - computed: false, optional: false, required: true
  private _operations = new OsManagementHubScheduledJobOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: OsManagementHubScheduledJobOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsManagementHubScheduledJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsManagementHubScheduledJobTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_managed_by_autonomous_linux: cdktf.booleanToTerraform(this._isManagedByAutonomousLinux),
      is_subcompartment_included: cdktf.booleanToTerraform(this._isSubcompartmentIncluded),
      lifecycle_stage_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lifecycleStageIds),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      managed_compartment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedCompartmentIds),
      managed_instance_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedInstanceGroupIds),
      managed_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedInstanceIds),
      recurring_rule: cdktf.stringToTerraform(this._recurringRule),
      retry_intervals: cdktf.listMapper(cdktf.numberToTerraform, false)(this._retryIntervals),
      schedule_type: cdktf.stringToTerraform(this._scheduleType),
      time_next_execution: cdktf.stringToTerraform(this._timeNextExecution),
      work_request_id: cdktf.stringToTerraform(this._workRequestId),
      operations: cdktf.listMapper(osManagementHubScheduledJobOperationsToTerraform, true)(this._operations.internalValue),
      timeouts: osManagementHubScheduledJobTimeoutsToTerraform(this._timeouts.internalValue),
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
      is_managed_by_autonomous_linux: {
        value: cdktf.booleanToHclTerraform(this._isManagedByAutonomousLinux),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_subcompartment_included: {
        value: cdktf.booleanToHclTerraform(this._isSubcompartmentIncluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lifecycle_stage_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lifecycleStageIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      managed_compartment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedCompartmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      managed_instance_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedInstanceGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      managed_instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedInstanceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      recurring_rule: {
        value: cdktf.stringToHclTerraform(this._recurringRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_intervals: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._retryIntervals),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      schedule_type: {
        value: cdktf.stringToHclTerraform(this._scheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_next_execution: {
        value: cdktf.stringToHclTerraform(this._timeNextExecution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_request_id: {
        value: cdktf.stringToHclTerraform(this._workRequestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operations: {
        value: cdktf.listMapperHcl(osManagementHubScheduledJobOperationsToHclTerraform, true)(this._operations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubScheduledJobOperationsList",
      },
      timeouts: {
        value: osManagementHubScheduledJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsManagementHubScheduledJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
