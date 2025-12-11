// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#is_dry_run OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#is_dry_run}
  */
  readonly isDryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#managed_instance_group_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#managed_instance_group_id}
  */
  readonly managedInstanceGroupId: string;
  /**
  * disable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#disable OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#disable}
  */
  readonly disable?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable[] | cdktf.IResolvable;
  /**
  * enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#enable OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#enable}
  */
  readonly enable?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable[] | cdktf.IResolvable;
  /**
  * install block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#install OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#install}
  */
  readonly install?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall[] | cdktf.IResolvable;
  /**
  * remove block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#remove OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#remove}
  */
  readonly remove?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#timeouts OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#timeouts}
  */
  readonly timeouts?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts;
  /**
  * work_request_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#work_request_details OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#work_request_details}
  */
  readonly workRequestDetails?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails;
}
export interface OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}
  */
  readonly moduleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}
  */
  readonly softwareSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}
  */
  readonly streamName: string;
}

export function osManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableToTerraform(struct?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable | cdktf.IResolvable): any {
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


export function osManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableToHclTerraform(struct?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable | cdktf.IResolvable): any {
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

export class OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable | cdktf.IResolvable | undefined) {
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

export class OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference {
    return new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}
  */
  readonly moduleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}
  */
  readonly softwareSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}
  */
  readonly streamName: string;
}

export function osManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableToTerraform(struct?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable | cdktf.IResolvable): any {
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


export function osManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableToHclTerraform(struct?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable | cdktf.IResolvable): any {
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

export class OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable | cdktf.IResolvable | undefined) {
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

export class OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference {
    return new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}
  */
  readonly moduleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}
  */
  readonly profileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}
  */
  readonly softwareSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}
  */
  readonly streamName: string;
}

export function osManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallToTerraform(struct?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall | cdktf.IResolvable): any {
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


export function osManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallToHclTerraform(struct?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall | cdktf.IResolvable): any {
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

export class OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall | cdktf.IResolvable | undefined) {
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

export class OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference {
    return new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}
  */
  readonly moduleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}
  */
  readonly profileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}
  */
  readonly softwareSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}
  */
  readonly streamName: string;
}

export function osManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveToTerraform(struct?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove | cdktf.IResolvable): any {
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


export function osManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveToHclTerraform(struct?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove | cdktf.IResolvable): any {
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

export class OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove | cdktf.IResolvable | undefined) {
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

export class OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference {
    return new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#create OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#delete OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#update OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#update}
  */
  readonly update?: string;
}

export function osManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsToTerraform(struct?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts | cdktf.IResolvable): any {
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


export function osManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsToHclTerraform(struct?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts | cdktf.IResolvable): any {
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

export class OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts | cdktf.IResolvable | undefined) {
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
export interface OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#description OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#display_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#display_name}
  */
  readonly displayName?: string;
}

export function osManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsToTerraform(struct?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function osManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsToHclTerraform(struct?: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management oci_os_management_hub_managed_instance_group_manage_module_streams_management}
*/
export class OsManagementHubManagedInstanceGroupManageModuleStreamsManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_managed_instance_group_manage_module_streams_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupManageModuleStreamsManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsManagementHubManagedInstanceGroupManageModuleStreamsManagement to import
  * @param importFromId The id of the existing OsManagementHubManagedInstanceGroupManageModuleStreamsManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsManagementHubManagedInstanceGroupManageModuleStreamsManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_managed_instance_group_manage_module_streams_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management oci_os_management_hub_managed_instance_group_manage_module_streams_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig
  */
  public constructor(scope: Construct, id: string, config: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_managed_instance_group_manage_module_streams_management',
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
    this._id = config.id;
    this._isDryRun = config.isDryRun;
    this._managedInstanceGroupId = config.managedInstanceGroupId;
    this._disable.internalValue = config.disable;
    this._enable.internalValue = config.enable;
    this._install.internalValue = config.install;
    this._remove.internalValue = config.remove;
    this._timeouts.internalValue = config.timeouts;
    this._workRequestDetails.internalValue = config.workRequestDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_dry_run - computed: true, optional: true, required: false
  private _isDryRun?: boolean | cdktf.IResolvable; 
  public get isDryRun() {
    return this.getBooleanAttribute('is_dry_run');
  }
  public set isDryRun(value: boolean | cdktf.IResolvable) {
    this._isDryRun = value;
  }
  public resetIsDryRun() {
    this._isDryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDryRunInput() {
    return this._isDryRun;
  }

  // managed_instance_group_id - computed: false, optional: false, required: true
  private _managedInstanceGroupId?: string; 
  public get managedInstanceGroupId() {
    return this.getStringAttribute('managed_instance_group_id');
  }
  public set managedInstanceGroupId(value: string) {
    this._managedInstanceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceGroupIdInput() {
    return this._managedInstanceGroupId;
  }

  // disable - computed: false, optional: true, required: false
  private _disable = new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList(this, "disable", false);
  public get disable() {
    return this._disable;
  }
  public putDisable(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable[] | cdktf.IResolvable) {
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
  private _enable = new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList(this, "enable", false);
  public get enable() {
    return this._enable;
  }
  public putEnable(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable[] | cdktf.IResolvable) {
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
  private _install = new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList(this, "install", false);
  public get install() {
    return this._install;
  }
  public putInstall(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall[] | cdktf.IResolvable) {
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
  private _remove = new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList(this, "remove", false);
  public get remove() {
    return this._remove;
  }
  public putRemove(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove[] | cdktf.IResolvable) {
    this._remove.internalValue = value;
  }
  public resetRemove() {
    this._remove.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // work_request_details - computed: false, optional: true, required: false
  private _workRequestDetails = new OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference(this, "work_request_details");
  public get workRequestDetails() {
    return this._workRequestDetails;
  }
  public putWorkRequestDetails(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails) {
    this._workRequestDetails.internalValue = value;
  }
  public resetWorkRequestDetails() {
    this._workRequestDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workRequestDetailsInput() {
    return this._workRequestDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_dry_run: cdktf.booleanToTerraform(this._isDryRun),
      managed_instance_group_id: cdktf.stringToTerraform(this._managedInstanceGroupId),
      disable: cdktf.listMapper(osManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableToTerraform, true)(this._disable.internalValue),
      enable: cdktf.listMapper(osManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableToTerraform, true)(this._enable.internalValue),
      install: cdktf.listMapper(osManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallToTerraform, true)(this._install.internalValue),
      remove: cdktf.listMapper(osManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveToTerraform, true)(this._remove.internalValue),
      timeouts: osManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsToTerraform(this._timeouts.internalValue),
      work_request_details: osManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsToTerraform(this._workRequestDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_dry_run: {
        value: cdktf.booleanToHclTerraform(this._isDryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      managed_instance_group_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.listMapperHcl(osManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableToHclTerraform, true)(this._disable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList",
      },
      enable: {
        value: cdktf.listMapperHcl(osManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableToHclTerraform, true)(this._enable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList",
      },
      install: {
        value: cdktf.listMapperHcl(osManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallToHclTerraform, true)(this._install.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList",
      },
      remove: {
        value: cdktf.listMapperHcl(osManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveToHclTerraform, true)(this._remove.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList",
      },
      timeouts: {
        value: osManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts",
      },
      work_request_details: {
        value: osManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsToHclTerraform(this._workRequestDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
