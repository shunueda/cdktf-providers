// https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Should snapshots be deleted when the resource is destroyed. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#delete_snapshots_on_destroy AzureSubscription#delete_snapshots_on_destroy}
  */
  readonly deleteSnapshotsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Azure subscription ID. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#subscription_id AzureSubscription#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Azure subscription name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#subscription_name AzureSubscription#subscription_name}
  */
  readonly subscriptionName?: string;
  /**
  * Azure tenant primary domain. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#tenant_domain AzureSubscription#tenant_domain}
  */
  readonly tenantDomain: string;
  /**
  * cloud_native_archival block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#cloud_native_archival AzureSubscription#cloud_native_archival}
  */
  readonly cloudNativeArchival?: AzureSubscriptionCloudNativeArchival;
  /**
  * cloud_native_archival_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#cloud_native_archival_encryption AzureSubscription#cloud_native_archival_encryption}
  */
  readonly cloudNativeArchivalEncryption?: AzureSubscriptionCloudNativeArchivalEncryption;
  /**
  * cloud_native_blob_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#cloud_native_blob_protection AzureSubscription#cloud_native_blob_protection}
  */
  readonly cloudNativeBlobProtection?: AzureSubscriptionCloudNativeBlobProtection;
  /**
  * cloud_native_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#cloud_native_protection AzureSubscription#cloud_native_protection}
  */
  readonly cloudNativeProtection?: AzureSubscriptionCloudNativeProtection;
  /**
  * exocompute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#exocompute AzureSubscription#exocompute}
  */
  readonly exocompute?: AzureSubscriptionExocompute;
  /**
  * sql_db_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#sql_db_protection AzureSubscription#sql_db_protection}
  */
  readonly sqlDbProtection?: AzureSubscriptionSqlDbProtection;
  /**
  * sql_mi_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#sql_mi_protection AzureSubscription#sql_mi_protection}
  */
  readonly sqlMiProtection?: AzureSubscriptionSqlMiProtection;
}
export interface AzureSubscriptionCloudNativeArchival {
  /**
  * Permission groups to assign to the Cloud Native Archival feature. Possible values are `BASIC`, `ENCRYPTION` and `SQL_ARCHIVAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permission_groups AzureSubscription#permission_groups}
  */
  readonly permissionGroups?: string[];
  /**
  * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris_azure_permissions` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permissions AzureSubscription#permissions}
  */
  readonly permissions?: string;
  /**
  * Azure regions to enable the Cloud Native Archival feature in. Should be specified in the standard Azure style, e.g. `eastus`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#regions AzureSubscription#regions}
  */
  readonly regions: string[];
  /**
  * Name of the Azure resource group where RSC places all resources created by the feature. RSC assumes the resource group already exists. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_name AzureSubscription#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Region of the Azure resource group. Should be specified in the standard Azure style, e.g. `eastus`. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_region AzureSubscription#resource_group_region}
  */
  readonly resourceGroupRegion?: string;
  /**
  * Tags to add to the Azure resource group. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_tags AzureSubscription#resource_group_tags}
  */
  readonly resourceGroupTags?: { [key: string]: string };
}

export function azureSubscriptionCloudNativeArchivalToTerraform(struct?: AzureSubscriptionCloudNativeArchivalOutputReference | AzureSubscriptionCloudNativeArchival): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    resource_group_region: cdktf.stringToTerraform(struct!.resourceGroupRegion),
    resource_group_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceGroupTags),
  }
}


export function azureSubscriptionCloudNativeArchivalToHclTerraform(struct?: AzureSubscriptionCloudNativeArchivalOutputReference | AzureSubscriptionCloudNativeArchival): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_region: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceGroupTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSubscriptionCloudNativeArchivalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureSubscriptionCloudNativeArchival | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._resourceGroupRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupRegion = this._resourceGroupRegion;
    }
    if (this._resourceGroupTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupTags = this._resourceGroupTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSubscriptionCloudNativeArchival | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissionGroups = undefined;
      this._permissions = undefined;
      this._regions = undefined;
      this._resourceGroupName = undefined;
      this._resourceGroupRegion = undefined;
      this._resourceGroupTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissionGroups = value.permissionGroups;
      this._permissions = value.permissions;
      this._regions = value.regions;
      this._resourceGroupName = value.resourceGroupName;
      this._resourceGroupRegion = value.resourceGroupRegion;
      this._resourceGroupTags = value.resourceGroupTags;
    }
  }

  // permission_groups - computed: false, optional: true, required: false
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  public resetPermissionGroups() {
    this._permissionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // resource_group_region - computed: false, optional: true, required: false
  private _resourceGroupRegion?: string; 
  public get resourceGroupRegion() {
    return this.getStringAttribute('resource_group_region');
  }
  public set resourceGroupRegion(value: string) {
    this._resourceGroupRegion = value;
  }
  public resetResourceGroupRegion() {
    this._resourceGroupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupRegionInput() {
    return this._resourceGroupRegion;
  }

  // resource_group_tags - computed: false, optional: true, required: false
  private _resourceGroupTags?: { [key: string]: string }; 
  public get resourceGroupTags() {
    return this.getStringMapAttribute('resource_group_tags');
  }
  public set resourceGroupTags(value: { [key: string]: string }) {
    this._resourceGroupTags = value;
  }
  public resetResourceGroupTags() {
    this._resourceGroupTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupTagsInput() {
    return this._resourceGroupTags;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface AzureSubscriptionCloudNativeArchivalEncryption {
  /**
  * Permission groups to assign to the Cloud Native Archival Encryption feature. Possible values are `BASIC` and `ENCRYPTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permission_groups AzureSubscription#permission_groups}
  */
  readonly permissionGroups?: string[];
  /**
  * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris_azure_permissions` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permissions AzureSubscription#permissions}
  */
  readonly permissions?: string;
  /**
  * Azure regions to enable the Cloud Native Archival Encryption feature in. Should be specified in the standard Azure style, e.g. `eastus`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#regions AzureSubscription#regions}
  */
  readonly regions: string[];
  /**
  * Name of the Azure resource group where RSC places all resources created by the feature. RSC assumes the resource group already exists. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_name AzureSubscription#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Region of the Azure resource group. Should be specified in the standard Azure style, e.g. `eastus`. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_region AzureSubscription#resource_group_region}
  */
  readonly resourceGroupRegion?: string;
  /**
  * Tags to add to the Azure resource group. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_tags AzureSubscription#resource_group_tags}
  */
  readonly resourceGroupTags?: { [key: string]: string };
  /**
  * User-assigned managed identity name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#user_assigned_managed_identity_name AzureSubscription#user_assigned_managed_identity_name}
  */
  readonly userAssignedManagedIdentityName: string;
  /**
  * ID of the service principal object associated with the user-assigned managed identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#user_assigned_managed_identity_principal_id AzureSubscription#user_assigned_managed_identity_principal_id}
  */
  readonly userAssignedManagedIdentityPrincipalId: string;
  /**
  * User-assigned managed identity region. Should be specified in the standard Azure style, e.g. `eastus`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#user_assigned_managed_identity_region AzureSubscription#user_assigned_managed_identity_region}
  */
  readonly userAssignedManagedIdentityRegion: string;
  /**
  * User-assigned managed identity resource group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#user_assigned_managed_identity_resource_group_name AzureSubscription#user_assigned_managed_identity_resource_group_name}
  */
  readonly userAssignedManagedIdentityResourceGroupName: string;
}

export function azureSubscriptionCloudNativeArchivalEncryptionToTerraform(struct?: AzureSubscriptionCloudNativeArchivalEncryptionOutputReference | AzureSubscriptionCloudNativeArchivalEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    resource_group_region: cdktf.stringToTerraform(struct!.resourceGroupRegion),
    resource_group_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceGroupTags),
    user_assigned_managed_identity_name: cdktf.stringToTerraform(struct!.userAssignedManagedIdentityName),
    user_assigned_managed_identity_principal_id: cdktf.stringToTerraform(struct!.userAssignedManagedIdentityPrincipalId),
    user_assigned_managed_identity_region: cdktf.stringToTerraform(struct!.userAssignedManagedIdentityRegion),
    user_assigned_managed_identity_resource_group_name: cdktf.stringToTerraform(struct!.userAssignedManagedIdentityResourceGroupName),
  }
}


export function azureSubscriptionCloudNativeArchivalEncryptionToHclTerraform(struct?: AzureSubscriptionCloudNativeArchivalEncryptionOutputReference | AzureSubscriptionCloudNativeArchivalEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_region: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceGroupTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    user_assigned_managed_identity_name: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedManagedIdentityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_managed_identity_principal_id: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedManagedIdentityPrincipalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_managed_identity_region: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedManagedIdentityRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_managed_identity_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedManagedIdentityResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSubscriptionCloudNativeArchivalEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureSubscriptionCloudNativeArchivalEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._resourceGroupRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupRegion = this._resourceGroupRegion;
    }
    if (this._resourceGroupTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupTags = this._resourceGroupTags;
    }
    if (this._userAssignedManagedIdentityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedManagedIdentityName = this._userAssignedManagedIdentityName;
    }
    if (this._userAssignedManagedIdentityPrincipalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedManagedIdentityPrincipalId = this._userAssignedManagedIdentityPrincipalId;
    }
    if (this._userAssignedManagedIdentityRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedManagedIdentityRegion = this._userAssignedManagedIdentityRegion;
    }
    if (this._userAssignedManagedIdentityResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedManagedIdentityResourceGroupName = this._userAssignedManagedIdentityResourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSubscriptionCloudNativeArchivalEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissionGroups = undefined;
      this._permissions = undefined;
      this._regions = undefined;
      this._resourceGroupName = undefined;
      this._resourceGroupRegion = undefined;
      this._resourceGroupTags = undefined;
      this._userAssignedManagedIdentityName = undefined;
      this._userAssignedManagedIdentityPrincipalId = undefined;
      this._userAssignedManagedIdentityRegion = undefined;
      this._userAssignedManagedIdentityResourceGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissionGroups = value.permissionGroups;
      this._permissions = value.permissions;
      this._regions = value.regions;
      this._resourceGroupName = value.resourceGroupName;
      this._resourceGroupRegion = value.resourceGroupRegion;
      this._resourceGroupTags = value.resourceGroupTags;
      this._userAssignedManagedIdentityName = value.userAssignedManagedIdentityName;
      this._userAssignedManagedIdentityPrincipalId = value.userAssignedManagedIdentityPrincipalId;
      this._userAssignedManagedIdentityRegion = value.userAssignedManagedIdentityRegion;
      this._userAssignedManagedIdentityResourceGroupName = value.userAssignedManagedIdentityResourceGroupName;
    }
  }

  // permission_groups - computed: false, optional: true, required: false
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  public resetPermissionGroups() {
    this._permissionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // resource_group_region - computed: false, optional: true, required: false
  private _resourceGroupRegion?: string; 
  public get resourceGroupRegion() {
    return this.getStringAttribute('resource_group_region');
  }
  public set resourceGroupRegion(value: string) {
    this._resourceGroupRegion = value;
  }
  public resetResourceGroupRegion() {
    this._resourceGroupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupRegionInput() {
    return this._resourceGroupRegion;
  }

  // resource_group_tags - computed: false, optional: true, required: false
  private _resourceGroupTags?: { [key: string]: string }; 
  public get resourceGroupTags() {
    return this.getStringMapAttribute('resource_group_tags');
  }
  public set resourceGroupTags(value: { [key: string]: string }) {
    this._resourceGroupTags = value;
  }
  public resetResourceGroupTags() {
    this._resourceGroupTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupTagsInput() {
    return this._resourceGroupTags;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_assigned_managed_identity_name - computed: false, optional: false, required: true
  private _userAssignedManagedIdentityName?: string; 
  public get userAssignedManagedIdentityName() {
    return this.getStringAttribute('user_assigned_managed_identity_name');
  }
  public set userAssignedManagedIdentityName(value: string) {
    this._userAssignedManagedIdentityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedManagedIdentityNameInput() {
    return this._userAssignedManagedIdentityName;
  }

  // user_assigned_managed_identity_principal_id - computed: false, optional: false, required: true
  private _userAssignedManagedIdentityPrincipalId?: string; 
  public get userAssignedManagedIdentityPrincipalId() {
    return this.getStringAttribute('user_assigned_managed_identity_principal_id');
  }
  public set userAssignedManagedIdentityPrincipalId(value: string) {
    this._userAssignedManagedIdentityPrincipalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedManagedIdentityPrincipalIdInput() {
    return this._userAssignedManagedIdentityPrincipalId;
  }

  // user_assigned_managed_identity_region - computed: false, optional: false, required: true
  private _userAssignedManagedIdentityRegion?: string; 
  public get userAssignedManagedIdentityRegion() {
    return this.getStringAttribute('user_assigned_managed_identity_region');
  }
  public set userAssignedManagedIdentityRegion(value: string) {
    this._userAssignedManagedIdentityRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedManagedIdentityRegionInput() {
    return this._userAssignedManagedIdentityRegion;
  }

  // user_assigned_managed_identity_resource_group_name - computed: false, optional: false, required: true
  private _userAssignedManagedIdentityResourceGroupName?: string; 
  public get userAssignedManagedIdentityResourceGroupName() {
    return this.getStringAttribute('user_assigned_managed_identity_resource_group_name');
  }
  public set userAssignedManagedIdentityResourceGroupName(value: string) {
    this._userAssignedManagedIdentityResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedManagedIdentityResourceGroupNameInput() {
    return this._userAssignedManagedIdentityResourceGroupName;
  }
}
export interface AzureSubscriptionCloudNativeBlobProtection {
  /**
  * Permission groups to assign to the Cloud Native Blob Protection feature. Possible values are `BASIC` and `RECOVERY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permission_groups AzureSubscription#permission_groups}
  */
  readonly permissionGroups?: string[];
  /**
  * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris_azure_permissions` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permissions AzureSubscription#permissions}
  */
  readonly permissions?: string;
  /**
  * Azure regions that RSC will monitor for resources to protect according to SLA Domains. Should be specified in the standard Azure style, e.g. `eastus`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#regions AzureSubscription#regions}
  */
  readonly regions: string[];
}

export function azureSubscriptionCloudNativeBlobProtectionToTerraform(struct?: AzureSubscriptionCloudNativeBlobProtectionOutputReference | AzureSubscriptionCloudNativeBlobProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}


export function azureSubscriptionCloudNativeBlobProtectionToHclTerraform(struct?: AzureSubscriptionCloudNativeBlobProtectionOutputReference | AzureSubscriptionCloudNativeBlobProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSubscriptionCloudNativeBlobProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureSubscriptionCloudNativeBlobProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSubscriptionCloudNativeBlobProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissionGroups = undefined;
      this._permissions = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissionGroups = value.permissionGroups;
      this._permissions = value.permissions;
      this._regions = value.regions;
    }
  }

  // permission_groups - computed: false, optional: true, required: false
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  public resetPermissionGroups() {
    this._permissionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface AzureSubscriptionCloudNativeProtection {
  /**
  * Permission groups to assign to the Cloud Native Protection feature. Possible values are `BASIC`, `EXPORT_AND_RESTORE`, `FILE_LEVEL_RECOVERY`, `CLOUD_CLUSTER_ES` and `SNAPSHOT_PRIVATE_ACCESS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permission_groups AzureSubscription#permission_groups}
  */
  readonly permissionGroups?: string[];
  /**
  * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris_azure_permissions` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permissions AzureSubscription#permissions}
  */
  readonly permissions?: string;
  /**
  * Azure regions that RSC will monitor for resources to protect according to SLA Domains. Should be specified in the standard Azure style, e.g. `eastus`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#regions AzureSubscription#regions}
  */
  readonly regions: string[];
  /**
  * Name of the Azure resource group where RSC places all resources created by the feature. RSC assumes the resource group already exists. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_name AzureSubscription#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Region of the Azure resource group. Should be specified in the standard Azure style, e.g. `eastus`. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_region AzureSubscription#resource_group_region}
  */
  readonly resourceGroupRegion?: string;
  /**
  * Tags to add to the Azure resource group. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_tags AzureSubscription#resource_group_tags}
  */
  readonly resourceGroupTags?: { [key: string]: string };
}

export function azureSubscriptionCloudNativeProtectionToTerraform(struct?: AzureSubscriptionCloudNativeProtectionOutputReference | AzureSubscriptionCloudNativeProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    resource_group_region: cdktf.stringToTerraform(struct!.resourceGroupRegion),
    resource_group_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceGroupTags),
  }
}


export function azureSubscriptionCloudNativeProtectionToHclTerraform(struct?: AzureSubscriptionCloudNativeProtectionOutputReference | AzureSubscriptionCloudNativeProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_region: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceGroupTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSubscriptionCloudNativeProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureSubscriptionCloudNativeProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._resourceGroupRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupRegion = this._resourceGroupRegion;
    }
    if (this._resourceGroupTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupTags = this._resourceGroupTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSubscriptionCloudNativeProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissionGroups = undefined;
      this._permissions = undefined;
      this._regions = undefined;
      this._resourceGroupName = undefined;
      this._resourceGroupRegion = undefined;
      this._resourceGroupTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissionGroups = value.permissionGroups;
      this._permissions = value.permissions;
      this._regions = value.regions;
      this._resourceGroupName = value.resourceGroupName;
      this._resourceGroupRegion = value.resourceGroupRegion;
      this._resourceGroupTags = value.resourceGroupTags;
    }
  }

  // permission_groups - computed: false, optional: true, required: false
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  public resetPermissionGroups() {
    this._permissionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // resource_group_region - computed: false, optional: true, required: false
  private _resourceGroupRegion?: string; 
  public get resourceGroupRegion() {
    return this.getStringAttribute('resource_group_region');
  }
  public set resourceGroupRegion(value: string) {
    this._resourceGroupRegion = value;
  }
  public resetResourceGroupRegion() {
    this._resourceGroupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupRegionInput() {
    return this._resourceGroupRegion;
  }

  // resource_group_tags - computed: false, optional: true, required: false
  private _resourceGroupTags?: { [key: string]: string }; 
  public get resourceGroupTags() {
    return this.getStringMapAttribute('resource_group_tags');
  }
  public set resourceGroupTags(value: { [key: string]: string }) {
    this._resourceGroupTags = value;
  }
  public resetResourceGroupTags() {
    this._resourceGroupTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupTagsInput() {
    return this._resourceGroupTags;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface AzureSubscriptionExocompute {
  /**
  * Permission groups to assign to the Exocompute feature. Possible values are `BASIC`, `PRIVATE_ENDPOINTS` and `CUSTOMER_MANAGED_BASIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permission_groups AzureSubscription#permission_groups}
  */
  readonly permissionGroups?: string[];
  /**
  * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris_azure_permissions` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permissions AzureSubscription#permissions}
  */
  readonly permissions?: string;
  /**
  * Azure regions to enable the Exocompute feature in. Should be specified in the standard Azure style, e.g. `eastus`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#regions AzureSubscription#regions}
  */
  readonly regions: string[];
  /**
  * Name of the Azure resource group where RSC places all resources created by the feature. RSC assumes the resource group already exists. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_name AzureSubscription#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Region of the Azure resource group. Should be specified in the standard Azure style, e.g. `eastus`. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_region AzureSubscription#resource_group_region}
  */
  readonly resourceGroupRegion?: string;
  /**
  * Tags to add to the Azure resource group. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_tags AzureSubscription#resource_group_tags}
  */
  readonly resourceGroupTags?: { [key: string]: string };
}

export function azureSubscriptionExocomputeToTerraform(struct?: AzureSubscriptionExocomputeOutputReference | AzureSubscriptionExocompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    resource_group_region: cdktf.stringToTerraform(struct!.resourceGroupRegion),
    resource_group_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceGroupTags),
  }
}


export function azureSubscriptionExocomputeToHclTerraform(struct?: AzureSubscriptionExocomputeOutputReference | AzureSubscriptionExocompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_region: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceGroupTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSubscriptionExocomputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureSubscriptionExocompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._resourceGroupRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupRegion = this._resourceGroupRegion;
    }
    if (this._resourceGroupTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupTags = this._resourceGroupTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSubscriptionExocompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissionGroups = undefined;
      this._permissions = undefined;
      this._regions = undefined;
      this._resourceGroupName = undefined;
      this._resourceGroupRegion = undefined;
      this._resourceGroupTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissionGroups = value.permissionGroups;
      this._permissions = value.permissions;
      this._regions = value.regions;
      this._resourceGroupName = value.resourceGroupName;
      this._resourceGroupRegion = value.resourceGroupRegion;
      this._resourceGroupTags = value.resourceGroupTags;
    }
  }

  // permission_groups - computed: false, optional: true, required: false
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  public resetPermissionGroups() {
    this._permissionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // resource_group_region - computed: false, optional: true, required: false
  private _resourceGroupRegion?: string; 
  public get resourceGroupRegion() {
    return this.getStringAttribute('resource_group_region');
  }
  public set resourceGroupRegion(value: string) {
    this._resourceGroupRegion = value;
  }
  public resetResourceGroupRegion() {
    this._resourceGroupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupRegionInput() {
    return this._resourceGroupRegion;
  }

  // resource_group_tags - computed: false, optional: true, required: false
  private _resourceGroupTags?: { [key: string]: string }; 
  public get resourceGroupTags() {
    return this.getStringMapAttribute('resource_group_tags');
  }
  public set resourceGroupTags(value: { [key: string]: string }) {
    this._resourceGroupTags = value;
  }
  public resetResourceGroupTags() {
    this._resourceGroupTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupTagsInput() {
    return this._resourceGroupTags;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface AzureSubscriptionSqlDbProtection {
  /**
  * Permission groups to assign to the SQL DB Protection feature. Possible values are `BASIC`, `RECOVERY` and `BACKUP_V2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permission_groups AzureSubscription#permission_groups}
  */
  readonly permissionGroups?: string[];
  /**
  * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris_azure_permissions` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permissions AzureSubscription#permissions}
  */
  readonly permissions?: string;
  /**
  * Azure regions to enable the SQL DB Protection feature in. Should be specified in the standard Azure style, e.g. `eastus`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#regions AzureSubscription#regions}
  */
  readonly regions: string[];
  /**
  * Name of the Azure resource group where RSC places all resources created by the feature. RSC assumes the resource group already exists. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_name AzureSubscription#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Region of the Azure resource group. Should be specified in the standard Azure style, e.g. `eastus`. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_region AzureSubscription#resource_group_region}
  */
  readonly resourceGroupRegion?: string;
  /**
  * Tags to add to the Azure resource group. Changing this forces the RSC feature to be re-onboarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#resource_group_tags AzureSubscription#resource_group_tags}
  */
  readonly resourceGroupTags?: { [key: string]: string };
}

export function azureSubscriptionSqlDbProtectionToTerraform(struct?: AzureSubscriptionSqlDbProtectionOutputReference | AzureSubscriptionSqlDbProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    resource_group_region: cdktf.stringToTerraform(struct!.resourceGroupRegion),
    resource_group_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceGroupTags),
  }
}


export function azureSubscriptionSqlDbProtectionToHclTerraform(struct?: AzureSubscriptionSqlDbProtectionOutputReference | AzureSubscriptionSqlDbProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_region: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceGroupTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSubscriptionSqlDbProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureSubscriptionSqlDbProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._resourceGroupRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupRegion = this._resourceGroupRegion;
    }
    if (this._resourceGroupTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupTags = this._resourceGroupTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSubscriptionSqlDbProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissionGroups = undefined;
      this._permissions = undefined;
      this._regions = undefined;
      this._resourceGroupName = undefined;
      this._resourceGroupRegion = undefined;
      this._resourceGroupTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissionGroups = value.permissionGroups;
      this._permissions = value.permissions;
      this._regions = value.regions;
      this._resourceGroupName = value.resourceGroupName;
      this._resourceGroupRegion = value.resourceGroupRegion;
      this._resourceGroupTags = value.resourceGroupTags;
    }
  }

  // permission_groups - computed: false, optional: true, required: false
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  public resetPermissionGroups() {
    this._permissionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // resource_group_region - computed: false, optional: true, required: false
  private _resourceGroupRegion?: string; 
  public get resourceGroupRegion() {
    return this.getStringAttribute('resource_group_region');
  }
  public set resourceGroupRegion(value: string) {
    this._resourceGroupRegion = value;
  }
  public resetResourceGroupRegion() {
    this._resourceGroupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupRegionInput() {
    return this._resourceGroupRegion;
  }

  // resource_group_tags - computed: false, optional: true, required: false
  private _resourceGroupTags?: { [key: string]: string }; 
  public get resourceGroupTags() {
    return this.getStringMapAttribute('resource_group_tags');
  }
  public set resourceGroupTags(value: { [key: string]: string }) {
    this._resourceGroupTags = value;
  }
  public resetResourceGroupTags() {
    this._resourceGroupTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupTagsInput() {
    return this._resourceGroupTags;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface AzureSubscriptionSqlMiProtection {
  /**
  * Permission groups to assign to the SQL MI Protection feature. Possible values are `BASIC`, `RECOVERY` and `BACKUP_V2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permission_groups AzureSubscription#permission_groups}
  */
  readonly permissionGroups?: string[];
  /**
  * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris_azure_permissions` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#permissions AzureSubscription#permissions}
  */
  readonly permissions?: string;
  /**
  * Azure regions to enable the SQL MI Protection feature in. Should be specified in the standard Azure style, e.g. `eastus`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#regions AzureSubscription#regions}
  */
  readonly regions: string[];
}

export function azureSubscriptionSqlMiProtectionToTerraform(struct?: AzureSubscriptionSqlMiProtectionOutputReference | AzureSubscriptionSqlMiProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}


export function azureSubscriptionSqlMiProtectionToHclTerraform(struct?: AzureSubscriptionSqlMiProtectionOutputReference | AzureSubscriptionSqlMiProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSubscriptionSqlMiProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureSubscriptionSqlMiProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSubscriptionSqlMiProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissionGroups = undefined;
      this._permissions = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissionGroups = value.permissionGroups;
      this._permissions = value.permissions;
      this._regions = value.regions;
    }
  }

  // permission_groups - computed: false, optional: true, required: false
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  public resetPermissionGroups() {
    this._permissionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription polaris_azure_subscription}
*/
export class AzureSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_azure_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureSubscription to import
  * @param importFromId The id of the existing AzureSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_azure_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/azure_subscription polaris_azure_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: AzureSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_azure_subscription',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteSnapshotsOnDestroy = config.deleteSnapshotsOnDestroy;
    this._subscriptionId = config.subscriptionId;
    this._subscriptionName = config.subscriptionName;
    this._tenantDomain = config.tenantDomain;
    this._cloudNativeArchival.internalValue = config.cloudNativeArchival;
    this._cloudNativeArchivalEncryption.internalValue = config.cloudNativeArchivalEncryption;
    this._cloudNativeBlobProtection.internalValue = config.cloudNativeBlobProtection;
    this._cloudNativeProtection.internalValue = config.cloudNativeProtection;
    this._exocompute.internalValue = config.exocompute;
    this._sqlDbProtection.internalValue = config.sqlDbProtection;
    this._sqlMiProtection.internalValue = config.sqlMiProtection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_snapshots_on_destroy - computed: false, optional: true, required: false
  private _deleteSnapshotsOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteSnapshotsOnDestroy() {
    return this.getBooleanAttribute('delete_snapshots_on_destroy');
  }
  public set deleteSnapshotsOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteSnapshotsOnDestroy = value;
  }
  public resetDeleteSnapshotsOnDestroy() {
    this._deleteSnapshotsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSnapshotsOnDestroyInput() {
    return this._deleteSnapshotsOnDestroy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // subscription_name - computed: false, optional: true, required: false
  private _subscriptionName?: string; 
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  public resetSubscriptionName() {
    this._subscriptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName;
  }

  // tenant_domain - computed: false, optional: false, required: true
  private _tenantDomain?: string; 
  public get tenantDomain() {
    return this.getStringAttribute('tenant_domain');
  }
  public set tenantDomain(value: string) {
    this._tenantDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDomainInput() {
    return this._tenantDomain;
  }

  // cloud_native_archival - computed: false, optional: true, required: false
  private _cloudNativeArchival = new AzureSubscriptionCloudNativeArchivalOutputReference(this, "cloud_native_archival");
  public get cloudNativeArchival() {
    return this._cloudNativeArchival;
  }
  public putCloudNativeArchival(value: AzureSubscriptionCloudNativeArchival) {
    this._cloudNativeArchival.internalValue = value;
  }
  public resetCloudNativeArchival() {
    this._cloudNativeArchival.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNativeArchivalInput() {
    return this._cloudNativeArchival.internalValue;
  }

  // cloud_native_archival_encryption - computed: false, optional: true, required: false
  private _cloudNativeArchivalEncryption = new AzureSubscriptionCloudNativeArchivalEncryptionOutputReference(this, "cloud_native_archival_encryption");
  public get cloudNativeArchivalEncryption() {
    return this._cloudNativeArchivalEncryption;
  }
  public putCloudNativeArchivalEncryption(value: AzureSubscriptionCloudNativeArchivalEncryption) {
    this._cloudNativeArchivalEncryption.internalValue = value;
  }
  public resetCloudNativeArchivalEncryption() {
    this._cloudNativeArchivalEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNativeArchivalEncryptionInput() {
    return this._cloudNativeArchivalEncryption.internalValue;
  }

  // cloud_native_blob_protection - computed: false, optional: true, required: false
  private _cloudNativeBlobProtection = new AzureSubscriptionCloudNativeBlobProtectionOutputReference(this, "cloud_native_blob_protection");
  public get cloudNativeBlobProtection() {
    return this._cloudNativeBlobProtection;
  }
  public putCloudNativeBlobProtection(value: AzureSubscriptionCloudNativeBlobProtection) {
    this._cloudNativeBlobProtection.internalValue = value;
  }
  public resetCloudNativeBlobProtection() {
    this._cloudNativeBlobProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNativeBlobProtectionInput() {
    return this._cloudNativeBlobProtection.internalValue;
  }

  // cloud_native_protection - computed: false, optional: true, required: false
  private _cloudNativeProtection = new AzureSubscriptionCloudNativeProtectionOutputReference(this, "cloud_native_protection");
  public get cloudNativeProtection() {
    return this._cloudNativeProtection;
  }
  public putCloudNativeProtection(value: AzureSubscriptionCloudNativeProtection) {
    this._cloudNativeProtection.internalValue = value;
  }
  public resetCloudNativeProtection() {
    this._cloudNativeProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNativeProtectionInput() {
    return this._cloudNativeProtection.internalValue;
  }

  // exocompute - computed: false, optional: true, required: false
  private _exocompute = new AzureSubscriptionExocomputeOutputReference(this, "exocompute");
  public get exocompute() {
    return this._exocompute;
  }
  public putExocompute(value: AzureSubscriptionExocompute) {
    this._exocompute.internalValue = value;
  }
  public resetExocompute() {
    this._exocompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exocomputeInput() {
    return this._exocompute.internalValue;
  }

  // sql_db_protection - computed: false, optional: true, required: false
  private _sqlDbProtection = new AzureSubscriptionSqlDbProtectionOutputReference(this, "sql_db_protection");
  public get sqlDbProtection() {
    return this._sqlDbProtection;
  }
  public putSqlDbProtection(value: AzureSubscriptionSqlDbProtection) {
    this._sqlDbProtection.internalValue = value;
  }
  public resetSqlDbProtection() {
    this._sqlDbProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlDbProtectionInput() {
    return this._sqlDbProtection.internalValue;
  }

  // sql_mi_protection - computed: false, optional: true, required: false
  private _sqlMiProtection = new AzureSubscriptionSqlMiProtectionOutputReference(this, "sql_mi_protection");
  public get sqlMiProtection() {
    return this._sqlMiProtection;
  }
  public putSqlMiProtection(value: AzureSubscriptionSqlMiProtection) {
    this._sqlMiProtection.internalValue = value;
  }
  public resetSqlMiProtection() {
    this._sqlMiProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlMiProtectionInput() {
    return this._sqlMiProtection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_snapshots_on_destroy: cdktf.booleanToTerraform(this._deleteSnapshotsOnDestroy),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      subscription_name: cdktf.stringToTerraform(this._subscriptionName),
      tenant_domain: cdktf.stringToTerraform(this._tenantDomain),
      cloud_native_archival: azureSubscriptionCloudNativeArchivalToTerraform(this._cloudNativeArchival.internalValue),
      cloud_native_archival_encryption: azureSubscriptionCloudNativeArchivalEncryptionToTerraform(this._cloudNativeArchivalEncryption.internalValue),
      cloud_native_blob_protection: azureSubscriptionCloudNativeBlobProtectionToTerraform(this._cloudNativeBlobProtection.internalValue),
      cloud_native_protection: azureSubscriptionCloudNativeProtectionToTerraform(this._cloudNativeProtection.internalValue),
      exocompute: azureSubscriptionExocomputeToTerraform(this._exocompute.internalValue),
      sql_db_protection: azureSubscriptionSqlDbProtectionToTerraform(this._sqlDbProtection.internalValue),
      sql_mi_protection: azureSubscriptionSqlMiProtectionToTerraform(this._sqlMiProtection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_snapshots_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteSnapshotsOnDestroy),
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
      subscription_name: {
        value: cdktf.stringToHclTerraform(this._subscriptionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_domain: {
        value: cdktf.stringToHclTerraform(this._tenantDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_native_archival: {
        value: azureSubscriptionCloudNativeArchivalToHclTerraform(this._cloudNativeArchival.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureSubscriptionCloudNativeArchivalList",
      },
      cloud_native_archival_encryption: {
        value: azureSubscriptionCloudNativeArchivalEncryptionToHclTerraform(this._cloudNativeArchivalEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureSubscriptionCloudNativeArchivalEncryptionList",
      },
      cloud_native_blob_protection: {
        value: azureSubscriptionCloudNativeBlobProtectionToHclTerraform(this._cloudNativeBlobProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureSubscriptionCloudNativeBlobProtectionList",
      },
      cloud_native_protection: {
        value: azureSubscriptionCloudNativeProtectionToHclTerraform(this._cloudNativeProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureSubscriptionCloudNativeProtectionList",
      },
      exocompute: {
        value: azureSubscriptionExocomputeToHclTerraform(this._exocompute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureSubscriptionExocomputeList",
      },
      sql_db_protection: {
        value: azureSubscriptionSqlDbProtectionToHclTerraform(this._sqlDbProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureSubscriptionSqlDbProtectionList",
      },
      sql_mi_protection: {
        value: azureSubscriptionSqlMiProtectionToHclTerraform(this._sqlMiProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureSubscriptionSqlMiProtectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
