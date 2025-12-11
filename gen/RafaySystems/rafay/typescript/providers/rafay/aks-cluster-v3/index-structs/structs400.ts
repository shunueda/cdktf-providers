import * as cdktf from 'cdktf';
import { AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKms,
aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKmsToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKmsToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKmsOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfile,
aksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfileToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfileToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfileOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfiles,
aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfile,
aksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfileToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfileToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfileOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfile,
aksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfileToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfileToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfileOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfile,
aksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfileToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfileToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfileOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfig,
aksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfigToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfigToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfigOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfile,
aksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfile,
aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfile,
aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfile,
aksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfileToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfileToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfileOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfile,
aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerState,
aksClusterV3SpecConfigSpecManagedClusterPropertiesPowerStateToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesPowerStateToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerStateOutputReference,
AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResources,
aksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesToTerraform,
aksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesList,
AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadata,
aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataToTerraform,
aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataOutputReference,
AksClusterV3SpecConfigSpecManagedClusterExtendedLocation,
aksClusterV3SpecConfigSpecManagedClusterExtendedLocationToTerraform,
aksClusterV3SpecConfigSpecManagedClusterExtendedLocationToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterExtendedLocationOutputReference,
AksClusterV3SpecConfigSpecManagedClusterIdentity,
aksClusterV3SpecConfigSpecManagedClusterIdentityToTerraform,
aksClusterV3SpecConfigSpecManagedClusterIdentityToHclTerraform,
AksClusterV3SpecConfigSpecManagedClusterIdentityOutputReference,
AksClusterV3SpecConfigSpecMaintenanceConfigurations,
aksClusterV3SpecConfigSpecMaintenanceConfigurationsToTerraform,
aksClusterV3SpecConfigSpecMaintenanceConfigurationsToHclTerraform,
AksClusterV3SpecConfigSpecMaintenanceConfigurationsList,
AksClusterV3SpecConfigControlPlane,
aksClusterV3SpecConfigControlPlaneToTerraform,
aksClusterV3SpecConfigControlPlaneToHclTerraform,
AksClusterV3SpecConfigControlPlaneOutputReference,
AksClusterV3SpecConfigEksaClusterConfig,
aksClusterV3SpecConfigEksaClusterConfigToTerraform,
aksClusterV3SpecConfigEksaClusterConfigToHclTerraform,
AksClusterV3SpecConfigEksaClusterConfigOutputReference,
AksClusterV3SpecConfigFeatures,
aksClusterV3SpecConfigFeaturesToTerraform,
aksClusterV3SpecConfigFeaturesToHclTerraform,
AksClusterV3SpecConfigFeaturesOutputReference,
AksClusterV3SpecConfigLocation,
aksClusterV3SpecConfigLocationToTerraform,
aksClusterV3SpecConfigLocationToHclTerraform,
AksClusterV3SpecConfigLocationOutputReference,
AksClusterV3SpecConfigMachineHealthChecks,
aksClusterV3SpecConfigMachineHealthChecksToTerraform,
aksClusterV3SpecConfigMachineHealthChecksToHclTerraform,
AksClusterV3SpecConfigMachineHealthChecksList,
AksClusterV3SpecConfigMetadata,
aksClusterV3SpecConfigMetadataToTerraform,
aksClusterV3SpecConfigMetadataToHclTerraform,
AksClusterV3SpecConfigMetadataOutputReference,
AksClusterV3SpecConfigNetwork,
aksClusterV3SpecConfigNetworkToTerraform,
aksClusterV3SpecConfigNetworkToHclTerraform,
AksClusterV3SpecConfigNetworkOutputReference,
AksClusterV3SpecConfigNodePools,
aksClusterV3SpecConfigNodePoolsToTerraform,
aksClusterV3SpecConfigNodePoolsToHclTerraform,
AksClusterV3SpecConfigNodePoolsList,
AksClusterV3SpecConfigProxy,
aksClusterV3SpecConfigProxyToTerraform,
aksClusterV3SpecConfigProxyToHclTerraform,
AksClusterV3SpecConfigProxyOutputReference,
AksClusterV3SpecConfigSecurity,
aksClusterV3SpecConfigSecurityToTerraform,
aksClusterV3SpecConfigSecurityToHclTerraform,
AksClusterV3SpecConfigSecurityOutputReference,
AksClusterV3SpecBlueprint,
aksClusterV3SpecBlueprintToTerraform,
aksClusterV3SpecBlueprintToHclTerraform,
AksClusterV3SpecBlueprintOutputReference,
AksClusterV3SpecBlueprintConfig,
aksClusterV3SpecBlueprintConfigToTerraform,
aksClusterV3SpecBlueprintConfigToHclTerraform,
AksClusterV3SpecBlueprintConfigOutputReference } from './structs0'
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoring {
  /**
  * Whether to enable Defender threat detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoringToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoringOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoringToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoringOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefender {
  /**
  * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#log_analytics_workspace_resource_id AksClusterV3#log_analytics_workspace_resource_id}
  */
  readonly logAnalyticsWorkspaceResourceId?: string;
  /**
  * security_monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#security_monitoring AksClusterV3#security_monitoring}
  */
  readonly securityMonitoring?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoring;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_workspace_resource_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceResourceId),
    security_monitoring: aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoringToTerraform(struct!.securityMonitoring),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_workspace_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsWorkspaceResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_monitoring: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoringToHclTerraform(struct!.securityMonitoring),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsWorkspaceResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceResourceId = this._logAnalyticsWorkspaceResourceId;
    }
    if (this._securityMonitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMonitoring = this._securityMonitoring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsWorkspaceResourceId = undefined;
      this._securityMonitoring.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsWorkspaceResourceId = value.logAnalyticsWorkspaceResourceId;
      this._securityMonitoring.internalValue = value.securityMonitoring;
    }
  }

  // log_analytics_workspace_resource_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceResourceId?: string; 
  public get logAnalyticsWorkspaceResourceId() {
    return this.getStringAttribute('log_analytics_workspace_resource_id');
  }
  public set logAnalyticsWorkspaceResourceId(value: string) {
    this._logAnalyticsWorkspaceResourceId = value;
  }
  public resetLogAnalyticsWorkspaceResourceId() {
    this._logAnalyticsWorkspaceResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceResourceIdInput() {
    return this._logAnalyticsWorkspaceResourceId;
  }

  // security_monitoring - computed: false, optional: true, required: false
  private _securityMonitoring = new AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoringOutputReference(this, "security_monitoring");
  public get securityMonitoring() {
    return this._securityMonitoring;
  }
  public putSecurityMonitoring(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderSecurityMonitoring) {
    this._securityMonitoring.internalValue = value;
  }
  public resetSecurityMonitoring() {
    this._securityMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityMonitoringInput() {
    return this._securityMonitoring.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity {
  /**
  * The Enabled field in the WorkloadIdentity struct within AKS specifies whether the Azure AD Workload Identity feature is turned on for the Kubernetes cluster. This feature integrates Azure Active Directory (Azure AD) with Kubernetes to provide a streamlined and secure way for pods running on the cluster to authenticate to Azure services without managing secrets like connection strings or access keys. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfile {
  /**
  * azure_key_vault_kms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#azure_key_vault_kms AksClusterV3#azure_key_vault_kms}
  */
  readonly azureKeyVaultKms?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKms;
  /**
  * defender block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#defender AksClusterV3#defender}
  */
  readonly defender?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefender;
  /**
  * workload_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#workload_identity AksClusterV3#workload_identity}
  */
  readonly workloadIdentity?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_key_vault_kms: aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKmsToTerraform(struct!.azureKeyVaultKms),
    defender: aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderToTerraform(struct!.defender),
    workload_identity: aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityToTerraform(struct!.workloadIdentity),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_key_vault_kms: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKmsToHclTerraform(struct!.azureKeyVaultKms),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKmsList",
    },
    defender: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderToHclTerraform(struct!.defender),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderList",
    },
    workload_identity: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityToHclTerraform(struct!.workloadIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureKeyVaultKms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureKeyVaultKms = this._azureKeyVaultKms?.internalValue;
    }
    if (this._defender?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defender = this._defender?.internalValue;
    }
    if (this._workloadIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadIdentity = this._workloadIdentity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureKeyVaultKms.internalValue = undefined;
      this._defender.internalValue = undefined;
      this._workloadIdentity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureKeyVaultKms.internalValue = value.azureKeyVaultKms;
      this._defender.internalValue = value.defender;
      this._workloadIdentity.internalValue = value.workloadIdentity;
    }
  }

  // azure_key_vault_kms - computed: false, optional: true, required: false
  private _azureKeyVaultKms = new AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKmsOutputReference(this, "azure_key_vault_kms");
  public get azureKeyVaultKms() {
    return this._azureKeyVaultKms;
  }
  public putAzureKeyVaultKms(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileAzureKeyVaultKms) {
    this._azureKeyVaultKms.internalValue = value;
  }
  public resetAzureKeyVaultKms() {
    this._azureKeyVaultKms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultKmsInput() {
    return this._azureKeyVaultKms.internalValue;
  }

  // defender - computed: false, optional: true, required: false
  private _defender = new AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefenderOutputReference(this, "defender");
  public get defender() {
    return this._defender;
  }
  public putDefender(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileDefender) {
    this._defender.internalValue = value;
  }
  public resetDefender() {
    this._defender.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defenderInput() {
    return this._defender.internalValue;
  }

  // workload_identity - computed: false, optional: true, required: false
  private _workloadIdentity = new AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentityOutputReference(this, "workload_identity");
  public get workloadIdentity() {
    return this._workloadIdentity;
  }
  public putWorkloadIdentity(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileWorkloadIdentity) {
    this._workloadIdentity.internalValue = value;
  }
  public resetWorkloadIdentity() {
    this._workloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityInput() {
    return this._workloadIdentity.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfile {
  /**
  * The ID for the service principal. If specified, must be set to [parameters('servicePrincipalClientId')]. This would be set to the cloud credential's client ID during cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#client_id AksClusterV3#client_id}
  */
  readonly clientId?: string;
  /**
  * The secret password associated with the service principal. If specified, must be set to [parameters('servicePrincipalClientSecret')]. This would be set to the cloud credential's client secret during cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#secret AksClusterV3#secret}
  */
  readonly secret?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._secret = value.secret;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriver {
  /**
  * Whether to enable AzureDisk CSI Driver. The default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriverToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriverOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriverToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriverOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriver {
  /**
  * Whether to enable AzureFile CSI Driver. The default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriverToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriverOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriverToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriverOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotController {
  /**
  * Whether to enable Snapshot Controller. The default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotControllerToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotControllerOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotControllerToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotControllerOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfile {
  /**
  * disk_csi_driver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#disk_csi_driver AksClusterV3#disk_csi_driver}
  */
  readonly diskCsiDriver?: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriver;
  /**
  * file_csi_driver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#file_csi_driver AksClusterV3#file_csi_driver}
  */
  readonly fileCsiDriver?: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriver;
  /**
  * snapshot_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#snapshot_controller AksClusterV3#snapshot_controller}
  */
  readonly snapshotController?: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotController;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_csi_driver: aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriverToTerraform(struct!.diskCsiDriver),
    file_csi_driver: aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriverToTerraform(struct!.fileCsiDriver),
    snapshot_controller: aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotControllerToTerraform(struct!.snapshotController),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_csi_driver: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriverToHclTerraform(struct!.diskCsiDriver),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriverList",
    },
    file_csi_driver: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriverToHclTerraform(struct!.fileCsiDriver),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriverList",
    },
    snapshot_controller: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotControllerToHclTerraform(struct!.snapshotController),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotControllerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskCsiDriver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCsiDriver = this._diskCsiDriver?.internalValue;
    }
    if (this._fileCsiDriver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileCsiDriver = this._fileCsiDriver?.internalValue;
    }
    if (this._snapshotController?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotController = this._snapshotController?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskCsiDriver.internalValue = undefined;
      this._fileCsiDriver.internalValue = undefined;
      this._snapshotController.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskCsiDriver.internalValue = value.diskCsiDriver;
      this._fileCsiDriver.internalValue = value.fileCsiDriver;
      this._snapshotController.internalValue = value.snapshotController;
    }
  }

  // disk_csi_driver - computed: false, optional: true, required: false
  private _diskCsiDriver = new AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriverOutputReference(this, "disk_csi_driver");
  public get diskCsiDriver() {
    return this._diskCsiDriver;
  }
  public putDiskCsiDriver(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileDiskCsiDriver) {
    this._diskCsiDriver.internalValue = value;
  }
  public resetDiskCsiDriver() {
    this._diskCsiDriver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCsiDriverInput() {
    return this._diskCsiDriver.internalValue;
  }

  // file_csi_driver - computed: false, optional: true, required: false
  private _fileCsiDriver = new AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriverOutputReference(this, "file_csi_driver");
  public get fileCsiDriver() {
    return this._fileCsiDriver;
  }
  public putFileCsiDriver(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileFileCsiDriver) {
    this._fileCsiDriver.internalValue = value;
  }
  public resetFileCsiDriver() {
    this._fileCsiDriver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCsiDriverInput() {
    return this._fileCsiDriver.internalValue;
  }

  // snapshot_controller - computed: false, optional: true, required: false
  private _snapshotController = new AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotControllerOutputReference(this, "snapshot_controller");
  public get snapshotController() {
    return this._snapshotController;
  }
  public putSnapshotController(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileSnapshotController) {
    this._snapshotController.internalValue = value;
  }
  public resetSnapshotController() {
    this._snapshotController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotControllerInput() {
    return this._snapshotController.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfile {
  /**
  * Specifies the DNS server for Windows gMSA. Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#dns_server AksClusterV3#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Specifies whether to enable Windows gMSA in the managed cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the root domain name for Windows gMSA. Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.	
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#root_domain_name AksClusterV3#root_domain_name}
  */
  readonly rootDomainName?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    root_domain_name: cdktf.stringToTerraform(struct!.rootDomainName),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    root_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.rootDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rootDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDomainName = this._rootDomainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServer = undefined;
      this._enabled = undefined;
      this._rootDomainName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServer = value.dnsServer;
      this._enabled = value.enabled;
      this._rootDomainName = value.rootDomainName;
    }
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // root_domain_name - computed: false, optional: true, required: false
  private _rootDomainName?: string; 
  public get rootDomainName() {
    return this.getStringAttribute('root_domain_name');
  }
  public set rootDomainName(value: string) {
    this._rootDomainName = value;
  }
  public resetRootDomainName() {
    this._rootDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDomainNameInput() {
    return this._rootDomainName;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfile {
  /**
  * Specifies the name of the administrator account, Restriction: Cannot end in '.', Minimum-length: 1 character, Max-length: 20 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#admin_username AksClusterV3#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * For more details on CSI proxy, see the CSI proxy GitHub repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enable_csi_proxy AksClusterV3#enable_csi_proxy}
  */
  readonly enableCsiProxy?: boolean | cdktf.IResolvable;
  /**
  * The license type to use for Windows VMs. See Azure Hybrid User Benefits for more details. Valid values are None, Windows_Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#license_type AksClusterV3#license_type}
  */
  readonly licenseType?: string;
  /**
  * gmsa_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#gmsa_profile AksClusterV3#gmsa_profile}
  */
  readonly gmsaProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfile;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    enable_csi_proxy: cdktf.booleanToTerraform(struct!.enableCsiProxy),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    gmsa_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfileToTerraform(struct!.gmsaProfile),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileOutputReference | AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_csi_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.enableCsiProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfileToHclTerraform(struct!.gmsaProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._enableCsiProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCsiProxy = this._enableCsiProxy;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._gmsaProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaProfile = this._gmsaProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._enableCsiProxy = undefined;
      this._licenseType = undefined;
      this._gmsaProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._enableCsiProxy = value.enableCsiProxy;
      this._licenseType = value.licenseType;
      this._gmsaProfile.internalValue = value.gmsaProfile;
    }
  }

  // admin_username - computed: false, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // enable_csi_proxy - computed: false, optional: true, required: false
  private _enableCsiProxy?: boolean | cdktf.IResolvable; 
  public get enableCsiProxy() {
    return this.getBooleanAttribute('enable_csi_proxy');
  }
  public set enableCsiProxy(value: boolean | cdktf.IResolvable) {
    this._enableCsiProxy = value;
  }
  public resetEnableCsiProxy() {
    this._enableCsiProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCsiProxyInput() {
    return this._enableCsiProxy;
  }

  // license_type - computed: false, optional: true, required: false
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

  // gmsa_profile - computed: false, optional: true, required: false
  private _gmsaProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfileOutputReference(this, "gmsa_profile");
  public get gmsaProfile() {
    return this._gmsaProfile;
  }
  public putGmsaProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileGmsaProfile) {
    this._gmsaProfile.internalValue = value;
  }
  public resetGmsaProfile() {
    this._gmsaProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaProfileInput() {
    return this._gmsaProfile.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterProperties {
  /**
  * If set to true, getting static credentials will be disabled for this cluster. This must only be used on Managed Clusters that are AAD enabled. For more details see disable local accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#disable_local_accounts AksClusterV3#disable_local_accounts}
  */
  readonly disableLocalAccounts?: boolean | cdktf.IResolvable;
  /**
  * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{encryptionSetName}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#disk_encryption_set_id AksClusterV3#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * This cannot be updated once the Managed Cluster has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#dns_prefix AksClusterV3#dns_prefix}
  */
  readonly dnsPrefix?: string;
  /**
  * (DEPRECATING) Whether to enable Kubernetes pod security policy (preview). This feature is set for removal on October 15th, 2020. Learn more at aka.ms/aks/azpodpolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enable_pod_security_policy AksClusterV3#enable_pod_security_policy}
  */
  readonly enablePodSecurityPolicy?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Kubernetes Role-Based Access Control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enable_rbac AksClusterV3#enable_rbac}
  */
  readonly enableRbac?: boolean | cdktf.IResolvable;
  /**
  * This cannot be updated once the Managed Cluster has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#fqdn_subdomain AksClusterV3#fqdn_subdomain}
  */
  readonly fqdnSubdomain?: string;
  /**
  * Both patch version (e.g. 1.20.13) and (e.g. 1.20) are supported. When is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. When you upgrade a supported AKS cluster, Kubernetes minor versions cannot be skipped. All upgrades must be performed sequentially by major version number. For example, upgrades between 1.14.x -> 1.15.x or 1.15.x -> 1.16.x are allowed, however 1.14.x -> 1.16.x is not allowed. See upgrading an AKS cluster for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kubernetes_version AksClusterV3#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * The name of the resource group containing agent pool nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#node_resource_group AksClusterV3#node_resource_group}
  */
  readonly nodeResourceGroup?: string;
  /**
  * Allow or deny public network access for AKS. Valid values are Enabled, Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#public_network_access AksClusterV3#public_network_access}
  */
  readonly publicNetworkAccess?: string;
  /**
  * aad_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#aad_profile AksClusterV3#aad_profile}
  */
  readonly aadProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfile;
  /**
  * addon_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#addon_profiles AksClusterV3#addon_profiles}
  */
  readonly addonProfiles?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfiles;
  /**
  * api_server_access_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#api_server_access_profile AksClusterV3#api_server_access_profile}
  */
  readonly apiServerAccessProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfile;
  /**
  * auto_scaler_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#auto_scaler_profile AksClusterV3#auto_scaler_profile}
  */
  readonly autoScalerProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfile;
  /**
  * auto_upgrade_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#auto_upgrade_profile AksClusterV3#auto_upgrade_profile}
  */
  readonly autoUpgradeProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfile;
  /**
  * http_proxy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#http_proxy_config AksClusterV3#http_proxy_config}
  */
  readonly httpProxyConfig?: AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfig;
  /**
  * identity_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#identity_profile AksClusterV3#identity_profile}
  */
  readonly identityProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfile;
  /**
  * linux_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#linux_profile AksClusterV3#linux_profile}
  */
  readonly linuxProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfile;
  /**
  * network_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#network_profile AksClusterV3#network_profile}
  */
  readonly networkProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfile;
  /**
  * oidc_issuer_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#oidc_issuer_profile AksClusterV3#oidc_issuer_profile}
  */
  readonly oidcIssuerProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfile;
  /**
  * pod_identity_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#pod_identity_profile AksClusterV3#pod_identity_profile}
  */
  readonly podIdentityProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfile;
  /**
  * power_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#power_state AksClusterV3#power_state}
  */
  readonly powerState?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerState;
  /**
  * private_link_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#private_link_resources AksClusterV3#private_link_resources}
  */
  readonly privateLinkResources?: AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResources[] | cdktf.IResolvable;
  /**
  * security_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#security_profile AksClusterV3#security_profile}
  */
  readonly securityProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfile;
  /**
  * service_principal_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#service_principal_profile AksClusterV3#service_principal_profile}
  */
  readonly servicePrincipalProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfile;
  /**
  * storage_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#storage_profile AksClusterV3#storage_profile}
  */
  readonly storageProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfile;
  /**
  * windows_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#windows_profile AksClusterV3#windows_profile}
  */
  readonly windowsProfile?: AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfile;
}

export function aksClusterV3SpecConfigSpecManagedClusterPropertiesToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesOutputReference | AksClusterV3SpecConfigSpecManagedClusterProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_local_accounts: cdktf.booleanToTerraform(struct!.disableLocalAccounts),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    dns_prefix: cdktf.stringToTerraform(struct!.dnsPrefix),
    enable_pod_security_policy: cdktf.booleanToTerraform(struct!.enablePodSecurityPolicy),
    enable_rbac: cdktf.booleanToTerraform(struct!.enableRbac),
    fqdn_subdomain: cdktf.stringToTerraform(struct!.fqdnSubdomain),
    kubernetes_version: cdktf.stringToTerraform(struct!.kubernetesVersion),
    node_resource_group: cdktf.stringToTerraform(struct!.nodeResourceGroup),
    public_network_access: cdktf.stringToTerraform(struct!.publicNetworkAccess),
    aad_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfileToTerraform(struct!.aadProfile),
    addon_profiles: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesToTerraform(struct!.addonProfiles),
    api_server_access_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfileToTerraform(struct!.apiServerAccessProfile),
    auto_scaler_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfileToTerraform(struct!.autoScalerProfile),
    auto_upgrade_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfileToTerraform(struct!.autoUpgradeProfile),
    http_proxy_config: aksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfigToTerraform(struct!.httpProxyConfig),
    identity_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileToTerraform(struct!.identityProfile),
    linux_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileToTerraform(struct!.linuxProfile),
    network_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileToTerraform(struct!.networkProfile),
    oidc_issuer_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfileToTerraform(struct!.oidcIssuerProfile),
    pod_identity_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileToTerraform(struct!.podIdentityProfile),
    power_state: aksClusterV3SpecConfigSpecManagedClusterPropertiesPowerStateToTerraform(struct!.powerState),
    private_link_resources: cdktf.listMapper(aksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesToTerraform, true)(struct!.privateLinkResources),
    security_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileToTerraform(struct!.securityProfile),
    service_principal_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfileToTerraform(struct!.servicePrincipalProfile),
    storage_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileToTerraform(struct!.storageProfile),
    windows_profile: aksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileToTerraform(struct!.windowsProfile),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterPropertiesToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterPropertiesOutputReference | AksClusterV3SpecConfigSpecManagedClusterProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_local_accounts: {
      value: cdktf.booleanToHclTerraform(struct!.disableLocalAccounts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_encryption_set_id: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_prefix: {
      value: cdktf.stringToHclTerraform(struct!.dnsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_pod_security_policy: {
      value: cdktf.booleanToHclTerraform(struct!.enablePodSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rbac: {
      value: cdktf.booleanToHclTerraform(struct!.enableRbac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fqdn_subdomain: {
      value: cdktf.stringToHclTerraform(struct!.fqdnSubdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_version: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.nodeResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_network_access: {
      value: cdktf.stringToHclTerraform(struct!.publicNetworkAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfileToHclTerraform(struct!.aadProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfileList",
    },
    addon_profiles: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesToHclTerraform(struct!.addonProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesList",
    },
    api_server_access_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfileToHclTerraform(struct!.apiServerAccessProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfileList",
    },
    auto_scaler_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfileToHclTerraform(struct!.autoScalerProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfileList",
    },
    auto_upgrade_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfileToHclTerraform(struct!.autoUpgradeProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfileList",
    },
    http_proxy_config: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfigToHclTerraform(struct!.httpProxyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfigList",
    },
    identity_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileToHclTerraform(struct!.identityProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileList",
    },
    linux_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileToHclTerraform(struct!.linuxProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileList",
    },
    network_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileToHclTerraform(struct!.networkProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileList",
    },
    oidc_issuer_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfileToHclTerraform(struct!.oidcIssuerProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfileList",
    },
    pod_identity_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileToHclTerraform(struct!.podIdentityProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileList",
    },
    power_state: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesPowerStateToHclTerraform(struct!.powerState),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerStateList",
    },
    private_link_resources: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesToHclTerraform, true)(struct!.privateLinkResources),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesList",
    },
    security_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileToHclTerraform(struct!.securityProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileList",
    },
    service_principal_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfileToHclTerraform(struct!.servicePrincipalProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfileList",
    },
    storage_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileToHclTerraform(struct!.storageProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileList",
    },
    windows_profile: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileToHclTerraform(struct!.windowsProfile),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableLocalAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLocalAccounts = this._disableLocalAccounts;
    }
    if (this._diskEncryptionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetId = this._diskEncryptionSetId;
    }
    if (this._dnsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPrefix = this._dnsPrefix;
    }
    if (this._enablePodSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePodSecurityPolicy = this._enablePodSecurityPolicy;
    }
    if (this._enableRbac !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRbac = this._enableRbac;
    }
    if (this._fqdnSubdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnSubdomain = this._fqdnSubdomain;
    }
    if (this._kubernetesVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesVersion = this._kubernetesVersion;
    }
    if (this._nodeResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeResourceGroup = this._nodeResourceGroup;
    }
    if (this._publicNetworkAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetworkAccess = this._publicNetworkAccess;
    }
    if (this._aadProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadProfile = this._aadProfile?.internalValue;
    }
    if (this._addonProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonProfiles = this._addonProfiles?.internalValue;
    }
    if (this._apiServerAccessProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerAccessProfile = this._apiServerAccessProfile?.internalValue;
    }
    if (this._autoScalerProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalerProfile = this._autoScalerProfile?.internalValue;
    }
    if (this._autoUpgradeProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgradeProfile = this._autoUpgradeProfile?.internalValue;
    }
    if (this._httpProxyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyConfig = this._httpProxyConfig?.internalValue;
    }
    if (this._identityProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProfile = this._identityProfile?.internalValue;
    }
    if (this._linuxProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxProfile = this._linuxProfile?.internalValue;
    }
    if (this._networkProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProfile = this._networkProfile?.internalValue;
    }
    if (this._oidcIssuerProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcIssuerProfile = this._oidcIssuerProfile?.internalValue;
    }
    if (this._podIdentityProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIdentityProfile = this._podIdentityProfile?.internalValue;
    }
    if (this._powerState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerState = this._powerState?.internalValue;
    }
    if (this._privateLinkResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkResources = this._privateLinkResources?.internalValue;
    }
    if (this._securityProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfile = this._securityProfile?.internalValue;
    }
    if (this._servicePrincipalProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalProfile = this._servicePrincipalProfile?.internalValue;
    }
    if (this._storageProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageProfile = this._storageProfile?.internalValue;
    }
    if (this._windowsProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsProfile = this._windowsProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableLocalAccounts = undefined;
      this._diskEncryptionSetId = undefined;
      this._dnsPrefix = undefined;
      this._enablePodSecurityPolicy = undefined;
      this._enableRbac = undefined;
      this._fqdnSubdomain = undefined;
      this._kubernetesVersion = undefined;
      this._nodeResourceGroup = undefined;
      this._publicNetworkAccess = undefined;
      this._aadProfile.internalValue = undefined;
      this._addonProfiles.internalValue = undefined;
      this._apiServerAccessProfile.internalValue = undefined;
      this._autoScalerProfile.internalValue = undefined;
      this._autoUpgradeProfile.internalValue = undefined;
      this._httpProxyConfig.internalValue = undefined;
      this._identityProfile.internalValue = undefined;
      this._linuxProfile.internalValue = undefined;
      this._networkProfile.internalValue = undefined;
      this._oidcIssuerProfile.internalValue = undefined;
      this._podIdentityProfile.internalValue = undefined;
      this._powerState.internalValue = undefined;
      this._privateLinkResources.internalValue = undefined;
      this._securityProfile.internalValue = undefined;
      this._servicePrincipalProfile.internalValue = undefined;
      this._storageProfile.internalValue = undefined;
      this._windowsProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableLocalAccounts = value.disableLocalAccounts;
      this._diskEncryptionSetId = value.diskEncryptionSetId;
      this._dnsPrefix = value.dnsPrefix;
      this._enablePodSecurityPolicy = value.enablePodSecurityPolicy;
      this._enableRbac = value.enableRbac;
      this._fqdnSubdomain = value.fqdnSubdomain;
      this._kubernetesVersion = value.kubernetesVersion;
      this._nodeResourceGroup = value.nodeResourceGroup;
      this._publicNetworkAccess = value.publicNetworkAccess;
      this._aadProfile.internalValue = value.aadProfile;
      this._addonProfiles.internalValue = value.addonProfiles;
      this._apiServerAccessProfile.internalValue = value.apiServerAccessProfile;
      this._autoScalerProfile.internalValue = value.autoScalerProfile;
      this._autoUpgradeProfile.internalValue = value.autoUpgradeProfile;
      this._httpProxyConfig.internalValue = value.httpProxyConfig;
      this._identityProfile.internalValue = value.identityProfile;
      this._linuxProfile.internalValue = value.linuxProfile;
      this._networkProfile.internalValue = value.networkProfile;
      this._oidcIssuerProfile.internalValue = value.oidcIssuerProfile;
      this._podIdentityProfile.internalValue = value.podIdentityProfile;
      this._powerState.internalValue = value.powerState;
      this._privateLinkResources.internalValue = value.privateLinkResources;
      this._securityProfile.internalValue = value.securityProfile;
      this._servicePrincipalProfile.internalValue = value.servicePrincipalProfile;
      this._storageProfile.internalValue = value.storageProfile;
      this._windowsProfile.internalValue = value.windowsProfile;
    }
  }

  // disable_local_accounts - computed: false, optional: true, required: false
  private _disableLocalAccounts?: boolean | cdktf.IResolvable; 
  public get disableLocalAccounts() {
    return this.getBooleanAttribute('disable_local_accounts');
  }
  public set disableLocalAccounts(value: boolean | cdktf.IResolvable) {
    this._disableLocalAccounts = value;
  }
  public resetDisableLocalAccounts() {
    this._disableLocalAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocalAccountsInput() {
    return this._disableLocalAccounts;
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId;
  }

  // dns_prefix - computed: false, optional: true, required: false
  private _dnsPrefix?: string; 
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }
  public set dnsPrefix(value: string) {
    this._dnsPrefix = value;
  }
  public resetDnsPrefix() {
    this._dnsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixInput() {
    return this._dnsPrefix;
  }

  // enable_pod_security_policy - computed: false, optional: true, required: false
  private _enablePodSecurityPolicy?: boolean | cdktf.IResolvable; 
  public get enablePodSecurityPolicy() {
    return this.getBooleanAttribute('enable_pod_security_policy');
  }
  public set enablePodSecurityPolicy(value: boolean | cdktf.IResolvable) {
    this._enablePodSecurityPolicy = value;
  }
  public resetEnablePodSecurityPolicy() {
    this._enablePodSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePodSecurityPolicyInput() {
    return this._enablePodSecurityPolicy;
  }

  // enable_rbac - computed: false, optional: true, required: false
  private _enableRbac?: boolean | cdktf.IResolvable; 
  public get enableRbac() {
    return this.getBooleanAttribute('enable_rbac');
  }
  public set enableRbac(value: boolean | cdktf.IResolvable) {
    this._enableRbac = value;
  }
  public resetEnableRbac() {
    this._enableRbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRbacInput() {
    return this._enableRbac;
  }

  // fqdn_subdomain - computed: false, optional: true, required: false
  private _fqdnSubdomain?: string; 
  public get fqdnSubdomain() {
    return this.getStringAttribute('fqdn_subdomain');
  }
  public set fqdnSubdomain(value: string) {
    this._fqdnSubdomain = value;
  }
  public resetFqdnSubdomain() {
    this._fqdnSubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnSubdomainInput() {
    return this._fqdnSubdomain;
  }

  // kubernetes_version - computed: false, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // node_resource_group - computed: false, optional: true, required: false
  private _nodeResourceGroup?: string; 
  public get nodeResourceGroup() {
    return this.getStringAttribute('node_resource_group');
  }
  public set nodeResourceGroup(value: string) {
    this._nodeResourceGroup = value;
  }
  public resetNodeResourceGroup() {
    this._nodeResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeResourceGroupInput() {
    return this._nodeResourceGroup;
  }

  // public_network_access - computed: false, optional: true, required: false
  private _publicNetworkAccess?: string; 
  public get publicNetworkAccess() {
    return this.getStringAttribute('public_network_access');
  }
  public set publicNetworkAccess(value: string) {
    this._publicNetworkAccess = value;
  }
  public resetPublicNetworkAccess() {
    this._publicNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessInput() {
    return this._publicNetworkAccess;
  }

  // aad_profile - computed: false, optional: true, required: false
  private _aadProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfileOutputReference(this, "aad_profile");
  public get aadProfile() {
    return this._aadProfile;
  }
  public putAadProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAadProfile) {
    this._aadProfile.internalValue = value;
  }
  public resetAadProfile() {
    this._aadProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadProfileInput() {
    return this._aadProfile.internalValue;
  }

  // addon_profiles - computed: false, optional: true, required: false
  private _addonProfiles = new AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfilesOutputReference(this, "addon_profiles");
  public get addonProfiles() {
    return this._addonProfiles;
  }
  public putAddonProfiles(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAddonProfiles) {
    this._addonProfiles.internalValue = value;
  }
  public resetAddonProfiles() {
    this._addonProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonProfilesInput() {
    return this._addonProfiles.internalValue;
  }

  // api_server_access_profile - computed: false, optional: true, required: false
  private _apiServerAccessProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfileOutputReference(this, "api_server_access_profile");
  public get apiServerAccessProfile() {
    return this._apiServerAccessProfile;
  }
  public putApiServerAccessProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesApiServerAccessProfile) {
    this._apiServerAccessProfile.internalValue = value;
  }
  public resetApiServerAccessProfile() {
    this._apiServerAccessProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerAccessProfileInput() {
    return this._apiServerAccessProfile.internalValue;
  }

  // auto_scaler_profile - computed: false, optional: true, required: false
  private _autoScalerProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfileOutputReference(this, "auto_scaler_profile");
  public get autoScalerProfile() {
    return this._autoScalerProfile;
  }
  public putAutoScalerProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoScalerProfile) {
    this._autoScalerProfile.internalValue = value;
  }
  public resetAutoScalerProfile() {
    this._autoScalerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalerProfileInput() {
    return this._autoScalerProfile.internalValue;
  }

  // auto_upgrade_profile - computed: false, optional: true, required: false
  private _autoUpgradeProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfileOutputReference(this, "auto_upgrade_profile");
  public get autoUpgradeProfile() {
    return this._autoUpgradeProfile;
  }
  public putAutoUpgradeProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesAutoUpgradeProfile) {
    this._autoUpgradeProfile.internalValue = value;
  }
  public resetAutoUpgradeProfile() {
    this._autoUpgradeProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeProfileInput() {
    return this._autoUpgradeProfile.internalValue;
  }

  // http_proxy_config - computed: false, optional: true, required: false
  private _httpProxyConfig = new AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfigOutputReference(this, "http_proxy_config");
  public get httpProxyConfig() {
    return this._httpProxyConfig;
  }
  public putHttpProxyConfig(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesHttpProxyConfig) {
    this._httpProxyConfig.internalValue = value;
  }
  public resetHttpProxyConfig() {
    this._httpProxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyConfigInput() {
    return this._httpProxyConfig.internalValue;
  }

  // identity_profile - computed: false, optional: true, required: false
  private _identityProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfileOutputReference(this, "identity_profile");
  public get identityProfile() {
    return this._identityProfile;
  }
  public putIdentityProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesIdentityProfile) {
    this._identityProfile.internalValue = value;
  }
  public resetIdentityProfile() {
    this._identityProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProfileInput() {
    return this._identityProfile.internalValue;
  }

  // linux_profile - computed: false, optional: true, required: false
  private _linuxProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfileOutputReference(this, "linux_profile");
  public get linuxProfile() {
    return this._linuxProfile;
  }
  public putLinuxProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesLinuxProfile) {
    this._linuxProfile.internalValue = value;
  }
  public resetLinuxProfile() {
    this._linuxProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxProfileInput() {
    return this._linuxProfile.internalValue;
  }

  // network_profile - computed: false, optional: true, required: false
  private _networkProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfileOutputReference(this, "network_profile");
  public get networkProfile() {
    return this._networkProfile;
  }
  public putNetworkProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesNetworkProfile) {
    this._networkProfile.internalValue = value;
  }
  public resetNetworkProfile() {
    this._networkProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile.internalValue;
  }

  // oidc_issuer_profile - computed: false, optional: true, required: false
  private _oidcIssuerProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfileOutputReference(this, "oidc_issuer_profile");
  public get oidcIssuerProfile() {
    return this._oidcIssuerProfile;
  }
  public putOidcIssuerProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesOidcIssuerProfile) {
    this._oidcIssuerProfile.internalValue = value;
  }
  public resetOidcIssuerProfile() {
    this._oidcIssuerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcIssuerProfileInput() {
    return this._oidcIssuerProfile.internalValue;
  }

  // pod_identity_profile - computed: false, optional: true, required: false
  private _podIdentityProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfileOutputReference(this, "pod_identity_profile");
  public get podIdentityProfile() {
    return this._podIdentityProfile;
  }
  public putPodIdentityProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesPodIdentityProfile) {
    this._podIdentityProfile.internalValue = value;
  }
  public resetPodIdentityProfile() {
    this._podIdentityProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdentityProfileInput() {
    return this._podIdentityProfile.internalValue;
  }

  // power_state - computed: false, optional: true, required: false
  private _powerState = new AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerStateOutputReference(this, "power_state");
  public get powerState() {
    return this._powerState;
  }
  public putPowerState(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesPowerState) {
    this._powerState.internalValue = value;
  }
  public resetPowerState() {
    this._powerState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateInput() {
    return this._powerState.internalValue;
  }

  // private_link_resources - computed: false, optional: true, required: false
  private _privateLinkResources = new AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResourcesList(this, "private_link_resources", false);
  public get privateLinkResources() {
    return this._privateLinkResources;
  }
  public putPrivateLinkResources(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesPrivateLinkResources[] | cdktf.IResolvable) {
    this._privateLinkResources.internalValue = value;
  }
  public resetPrivateLinkResources() {
    this._privateLinkResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkResourcesInput() {
    return this._privateLinkResources.internalValue;
  }

  // security_profile - computed: false, optional: true, required: false
  private _securityProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfileOutputReference(this, "security_profile");
  public get securityProfile() {
    return this._securityProfile;
  }
  public putSecurityProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesSecurityProfile) {
    this._securityProfile.internalValue = value;
  }
  public resetSecurityProfile() {
    this._securityProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileInput() {
    return this._securityProfile.internalValue;
  }

  // service_principal_profile - computed: false, optional: true, required: false
  private _servicePrincipalProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfileOutputReference(this, "service_principal_profile");
  public get servicePrincipalProfile() {
    return this._servicePrincipalProfile;
  }
  public putServicePrincipalProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesServicePrincipalProfile) {
    this._servicePrincipalProfile.internalValue = value;
  }
  public resetServicePrincipalProfile() {
    this._servicePrincipalProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalProfileInput() {
    return this._servicePrincipalProfile.internalValue;
  }

  // storage_profile - computed: false, optional: true, required: false
  private _storageProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfileOutputReference(this, "storage_profile");
  public get storageProfile() {
    return this._storageProfile;
  }
  public putStorageProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesStorageProfile) {
    this._storageProfile.internalValue = value;
  }
  public resetStorageProfile() {
    this._storageProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileInput() {
    return this._storageProfile.internalValue;
  }

  // windows_profile - computed: false, optional: true, required: false
  private _windowsProfile = new AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfileOutputReference(this, "windows_profile");
  public get windowsProfile() {
    return this._windowsProfile;
  }
  public putWindowsProfile(value: AksClusterV3SpecConfigSpecManagedClusterPropertiesWindowsProfile) {
    this._windowsProfile.internalValue = value;
  }
  public resetWindowsProfile() {
    this._windowsProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsProfileInput() {
    return this._windowsProfile.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecManagedClusterSku {
  /**
  * The name of a managed cluster SKU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * If not specified, the default is Free. See uptime SLA for more details. Valid values are Paid, Free.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#tier AksClusterV3#tier}
  */
  readonly tier?: string;
}

export function aksClusterV3SpecConfigSpecManagedClusterSkuToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterSkuOutputReference | AksClusterV3SpecConfigSpecManagedClusterSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterSkuToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterSkuOutputReference | AksClusterV3SpecConfigSpecManagedClusterSku): any {
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
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedClusterSku | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedClusterSku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._tier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._tier = value.tier;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}
export interface AksClusterV3SpecConfigSpecManagedCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#api_version AksClusterV3#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The geo-location where the resource lives
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#location AksClusterV3#location}
  */
  readonly location?: string;
  /**
  * Resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#tags AksClusterV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Azure Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
  /**
  * additional_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#additional_metadata AksClusterV3#additional_metadata}
  */
  readonly additionalMetadata?: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadata;
  /**
  * extended_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#extended_location AksClusterV3#extended_location}
  */
  readonly extendedLocation?: AksClusterV3SpecConfigSpecManagedClusterExtendedLocation;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#identity AksClusterV3#identity}
  */
  readonly identity?: AksClusterV3SpecConfigSpecManagedClusterIdentity;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#properties AksClusterV3#properties}
  */
  readonly properties?: AksClusterV3SpecConfigSpecManagedClusterProperties;
  /**
  * sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#sku AksClusterV3#sku}
  */
  readonly sku?: AksClusterV3SpecConfigSpecManagedClusterSku;
}

export function aksClusterV3SpecConfigSpecManagedClusterToTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterOutputReference | AksClusterV3SpecConfigSpecManagedCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    location: cdktf.stringToTerraform(struct!.location),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    additional_metadata: aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataToTerraform(struct!.additionalMetadata),
    extended_location: aksClusterV3SpecConfigSpecManagedClusterExtendedLocationToTerraform(struct!.extendedLocation),
    identity: aksClusterV3SpecConfigSpecManagedClusterIdentityToTerraform(struct!.identity),
    properties: aksClusterV3SpecConfigSpecManagedClusterPropertiesToTerraform(struct!.properties),
    sku: aksClusterV3SpecConfigSpecManagedClusterSkuToTerraform(struct!.sku),
  }
}


export function aksClusterV3SpecConfigSpecManagedClusterToHclTerraform(struct?: AksClusterV3SpecConfigSpecManagedClusterOutputReference | AksClusterV3SpecConfigSpecManagedCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_metadata: {
      value: aksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataToHclTerraform(struct!.additionalMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataList",
    },
    extended_location: {
      value: aksClusterV3SpecConfigSpecManagedClusterExtendedLocationToHclTerraform(struct!.extendedLocation),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterExtendedLocationList",
    },
    identity: {
      value: aksClusterV3SpecConfigSpecManagedClusterIdentityToHclTerraform(struct!.identity),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterIdentityList",
    },
    properties: {
      value: aksClusterV3SpecConfigSpecManagedClusterPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterPropertiesList",
    },
    sku: {
      value: aksClusterV3SpecConfigSpecManagedClusterSkuToHclTerraform(struct!.sku),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterSkuList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecManagedClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecManagedCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._additionalMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalMetadata = this._additionalMetadata?.internalValue;
    }
    if (this._extendedLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedLocation = this._extendedLocation?.internalValue;
    }
    if (this._identity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._sku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecManagedCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._location = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._additionalMetadata.internalValue = undefined;
      this._extendedLocation.internalValue = undefined;
      this._identity.internalValue = undefined;
      this._properties.internalValue = undefined;
      this._sku.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._location = value.location;
      this._tags = value.tags;
      this._type = value.type;
      this._additionalMetadata.internalValue = value.additionalMetadata;
      this._extendedLocation.internalValue = value.extendedLocation;
      this._identity.internalValue = value.identity;
      this._properties.internalValue = value.properties;
      this._sku.internalValue = value.sku;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // additional_metadata - computed: false, optional: true, required: false
  private _additionalMetadata = new AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadataOutputReference(this, "additional_metadata");
  public get additionalMetadata() {
    return this._additionalMetadata;
  }
  public putAdditionalMetadata(value: AksClusterV3SpecConfigSpecManagedClusterAdditionalMetadata) {
    this._additionalMetadata.internalValue = value;
  }
  public resetAdditionalMetadata() {
    this._additionalMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMetadataInput() {
    return this._additionalMetadata.internalValue;
  }

  // extended_location - computed: false, optional: true, required: false
  private _extendedLocation = new AksClusterV3SpecConfigSpecManagedClusterExtendedLocationOutputReference(this, "extended_location");
  public get extendedLocation() {
    return this._extendedLocation;
  }
  public putExtendedLocation(value: AksClusterV3SpecConfigSpecManagedClusterExtendedLocation) {
    this._extendedLocation.internalValue = value;
  }
  public resetExtendedLocation() {
    this._extendedLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedLocationInput() {
    return this._extendedLocation.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new AksClusterV3SpecConfigSpecManagedClusterIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: AksClusterV3SpecConfigSpecManagedClusterIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new AksClusterV3SpecConfigSpecManagedClusterPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: AksClusterV3SpecConfigSpecManagedClusterProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // sku - computed: false, optional: true, required: false
  private _sku = new AksClusterV3SpecConfigSpecManagedClusterSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: AksClusterV3SpecConfigSpecManagedClusterSku) {
    this._sku.internalValue = value;
  }
  public resetSku() {
    this._sku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecNodePoolsPropertiesCreationData {
  /**
  * This is the ARM ID of the source object to be used to create the target object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#source_resource_id AksClusterV3#source_resource_id}
  */
  readonly sourceResourceId?: string;
}

export function aksClusterV3SpecConfigSpecNodePoolsPropertiesCreationDataToTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesCreationDataOutputReference | AksClusterV3SpecConfigSpecNodePoolsPropertiesCreationData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_resource_id: cdktf.stringToTerraform(struct!.sourceResourceId),
  }
}


export function aksClusterV3SpecConfigSpecNodePoolsPropertiesCreationDataToHclTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesCreationDataOutputReference | AksClusterV3SpecConfigSpecNodePoolsPropertiesCreationData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecNodePoolsPropertiesCreationDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecNodePoolsPropertiesCreationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceResourceId = this._sourceResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecNodePoolsPropertiesCreationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceResourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceResourceId = value.sourceResourceId;
    }
  }

  // source_resource_id - computed: false, optional: true, required: false
  private _sourceResourceId?: string; 
  public get sourceResourceId() {
    return this.getStringAttribute('source_resource_id');
  }
  public set sourceResourceId(value: string) {
    this._sourceResourceId = value;
  }
  public resetSourceResourceId() {
    this._sourceResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceResourceIdInput() {
    return this._sourceResourceId;
  }
}
export interface AksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfig {
  /**
  * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in *).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#allowed_unsafe_sysctls AksClusterV3#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#container_log_max_files AksClusterV3#container_log_max_files}
  */
  readonly containerLogMaxFiles?: number;
  /**
  * The maximum size (e.g. 10Mi) of container log file before it is rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#container_log_max_size_mb AksClusterV3#container_log_max_size_mb}
  */
  readonly containerLogMaxSizeMb?: number;
  /**
  * The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#cpu_cfs_quota AksClusterV3#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktf.IResolvable;
  /**
  * The default is 100ms. Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: 300ms, 2h45m. Supported units are ns, us, ms, s, m, and h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#cpu_cfs_quota_period AksClusterV3#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * The default is none. See Kubernetes CPU management policies for more information. Allowed values are none and static.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#cpu_manager_policy AksClusterV3#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#fail_swap_on AksClusterV3#fail_swap_on}
  */
  readonly failSwapOn?: boolean | cdktf.IResolvable;
  /**
  * To disable image garbage collection, set to 100. The default is 85%
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#image_gc_high_threshold AksClusterV3#image_gc_high_threshold}
  */
  readonly imageGcHighThreshold?: number;
  /**
  * This cannot be set higher than imageGcHighThreshold. The default is 80%
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#image_gc_low_threshold AksClusterV3#image_gc_low_threshold}
  */
  readonly imageGcLowThreshold?: number;
  /**
  * The maximum number of processes per pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#pod_max_pids AksClusterV3#pod_max_pids}
  */
  readonly podMaxPids?: number;
  /**
  * For more information see Kubernetes Topology Manager. The default is none. Allowed values are none, best-effort, restricted, and single-numa-node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#topology_manager_policy AksClusterV3#topology_manager_policy}
  */
  readonly topologyManagerPolicy?: string;
}

export function aksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfigToTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfigOutputReference | AksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
    container_log_max_files: cdktf.numberToTerraform(struct!.containerLogMaxFiles),
    container_log_max_size_mb: cdktf.numberToTerraform(struct!.containerLogMaxSizeMb),
    cpu_cfs_quota: cdktf.booleanToTerraform(struct!.cpuCfsQuota),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    fail_swap_on: cdktf.booleanToTerraform(struct!.failSwapOn),
    image_gc_high_threshold: cdktf.numberToTerraform(struct!.imageGcHighThreshold),
    image_gc_low_threshold: cdktf.numberToTerraform(struct!.imageGcLowThreshold),
    pod_max_pids: cdktf.numberToTerraform(struct!.podMaxPids),
    topology_manager_policy: cdktf.stringToTerraform(struct!.topologyManagerPolicy),
  }
}


export function aksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfigToHclTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfigOutputReference | AksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_unsafe_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_log_max_files: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_log_max_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_cfs_quota: {
      value: cdktf.booleanToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_cfs_quota_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_swap_on: {
      value: cdktf.booleanToHclTerraform(struct!.failSwapOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_gc_high_threshold: {
      value: cdktf.numberToHclTerraform(struct!.imageGcHighThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold: {
      value: cdktf.numberToHclTerraform(struct!.imageGcLowThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_max_pids: {
      value: cdktf.numberToHclTerraform(struct!.podMaxPids),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topology_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.topologyManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._containerLogMaxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxFiles = this._containerLogMaxFiles;
    }
    if (this._containerLogMaxSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSizeMb = this._containerLogMaxSizeMb;
    }
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._failSwapOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.failSwapOn = this._failSwapOn;
    }
    if (this._imageGcHighThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThreshold = this._imageGcHighThreshold;
    }
    if (this._imageGcLowThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThreshold = this._imageGcLowThreshold;
    }
    if (this._podMaxPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMaxPids = this._podMaxPids;
    }
    if (this._topologyManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyManagerPolicy = this._topologyManagerPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedUnsafeSysctls = undefined;
      this._containerLogMaxFiles = undefined;
      this._containerLogMaxSizeMb = undefined;
      this._cpuCfsQuota = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._failSwapOn = undefined;
      this._imageGcHighThreshold = undefined;
      this._imageGcLowThreshold = undefined;
      this._podMaxPids = undefined;
      this._topologyManagerPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._containerLogMaxFiles = value.containerLogMaxFiles;
      this._containerLogMaxSizeMb = value.containerLogMaxSizeMb;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._failSwapOn = value.failSwapOn;
      this._imageGcHighThreshold = value.imageGcHighThreshold;
      this._imageGcLowThreshold = value.imageGcLowThreshold;
      this._podMaxPids = value.podMaxPids;
      this._topologyManagerPolicy = value.topologyManagerPolicy;
    }
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // container_log_max_files - computed: false, optional: true, required: false
  private _containerLogMaxFiles?: number; 
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }
  public set containerLogMaxFiles(value: number) {
    this._containerLogMaxFiles = value;
  }
  public resetContainerLogMaxFiles() {
    this._containerLogMaxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxFilesInput() {
    return this._containerLogMaxFiles;
  }

  // container_log_max_size_mb - computed: false, optional: true, required: false
  private _containerLogMaxSizeMb?: number; 
  public get containerLogMaxSizeMb() {
    return this.getNumberAttribute('container_log_max_size_mb');
  }
  public set containerLogMaxSizeMb(value: number) {
    this._containerLogMaxSizeMb = value;
  }
  public resetContainerLogMaxSizeMb() {
    this._containerLogMaxSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeMbInput() {
    return this._containerLogMaxSizeMb;
  }

  // cpu_cfs_quota - computed: false, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // fail_swap_on - computed: false, optional: true, required: false
  private _failSwapOn?: boolean | cdktf.IResolvable; 
  public get failSwapOn() {
    return this.getBooleanAttribute('fail_swap_on');
  }
  public set failSwapOn(value: boolean | cdktf.IResolvable) {
    this._failSwapOn = value;
  }
  public resetFailSwapOn() {
    this._failSwapOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failSwapOnInput() {
    return this._failSwapOn;
  }

  // image_gc_high_threshold - computed: false, optional: true, required: false
  private _imageGcHighThreshold?: number; 
  public get imageGcHighThreshold() {
    return this.getNumberAttribute('image_gc_high_threshold');
  }
  public set imageGcHighThreshold(value: number) {
    this._imageGcHighThreshold = value;
  }
  public resetImageGcHighThreshold() {
    this._imageGcHighThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdInput() {
    return this._imageGcHighThreshold;
  }

  // image_gc_low_threshold - computed: false, optional: true, required: false
  private _imageGcLowThreshold?: number; 
  public get imageGcLowThreshold() {
    return this.getNumberAttribute('image_gc_low_threshold');
  }
  public set imageGcLowThreshold(value: number) {
    this._imageGcLowThreshold = value;
  }
  public resetImageGcLowThreshold() {
    this._imageGcLowThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdInput() {
    return this._imageGcLowThreshold;
  }

  // pod_max_pids - computed: false, optional: true, required: false
  private _podMaxPids?: number; 
  public get podMaxPids() {
    return this.getNumberAttribute('pod_max_pids');
  }
  public set podMaxPids(value: number) {
    this._podMaxPids = value;
  }
  public resetPodMaxPids() {
    this._podMaxPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMaxPidsInput() {
    return this._podMaxPids;
  }

  // topology_manager_policy - computed: false, optional: true, required: false
  private _topologyManagerPolicy?: string; 
  public get topologyManagerPolicy() {
    return this.getStringAttribute('topology_manager_policy');
  }
  public set topologyManagerPolicy(value: string) {
    this._topologyManagerPolicy = value;
  }
  public resetTopologyManagerPolicy() {
    this._topologyManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyManagerPolicyInput() {
    return this._topologyManagerPolicy;
  }
}
export interface AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls {
  /**
  * Sysctl setting fs.aio-max-nr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#fs_aio_max_nr AksClusterV3#fs_aio_max_nr}
  */
  readonly fsAioMaxNr?: number;
  /**
  * Sysctl setting fs.file-max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#fs_file_max AksClusterV3#fs_file_max}
  */
  readonly fsFileMax?: number;
  /**
  * Sysctl setting fs.inotify.max_user_watches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#fs_inotify_max_user_watches AksClusterV3#fs_inotify_max_user_watches}
  */
  readonly fsInotifyMaxUserWatches?: number;
  /**
  * Sysctl setting fs.nr_open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#fs_nr_open AksClusterV3#fs_nr_open}
  */
  readonly fsNrOpen?: number;
  /**
  * Sysctl setting kernel.threads-max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kernel_threads_max AksClusterV3#kernel_threads_max}
  */
  readonly kernelThreadsMax?: number;
  /**
  * Sysctl setting net.core.netdev_max_backlog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_core_netdev_max_backlog AksClusterV3#net_core_netdev_max_backlog}
  */
  readonly netCoreNetdevMaxBacklog?: number;
  /**
  * Sysctl setting net.core.optmem_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_core_optmem_max AksClusterV3#net_core_optmem_max}
  */
  readonly netCoreOptmemMax?: number;
  /**
  * Sysctl setting net.core.rmem_default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_core_rmem_default AksClusterV3#net_core_rmem_default}
  */
  readonly netCoreRmemDefault?: number;
  /**
  * Sysctl setting net.core.rmem_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_core_rmem_max AksClusterV3#net_core_rmem_max}
  */
  readonly netCoreRmemMax?: number;
  /**
  * Sysctl setting net.core.somaxconn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_core_somaxconn AksClusterV3#net_core_somaxconn}
  */
  readonly netCoreSomaxconn?: number;
  /**
  * Sysctl setting net.core.wmem_default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_core_wmem_default AksClusterV3#net_core_wmem_default}
  */
  readonly netCoreWmemDefault?: number;
  /**
  * Sysctl setting net.core.wmem_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_core_wmem_max AksClusterV3#net_core_wmem_max}
  */
  readonly netCoreWmemMax?: number;
  /**
  * Sysctl setting net.ipv4.ip_local_port_range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_ipv_4_ip_local_port_range AksClusterV3#net_ipv_4_ip_local_port_range}
  */
  readonly netIpv4IpLocalPortRange?: string;
  /**
  * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_ipv_4_neigh_default_gc_thresh_1 AksClusterV3#net_ipv_4_neigh_default_gc_thresh_1}
  */
  readonly netIpv4NeighDefaultGcThresh1?: number;
  /**
  * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_ipv_4_neigh_default_gc_thresh_2 AksClusterV3#net_ipv_4_neigh_default_gc_thresh_2}
  */
  readonly netIpv4NeighDefaultGcThresh2?: number;
  /**
  * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_ipv_4_neigh_default_gc_thresh_3 AksClusterV3#net_ipv_4_neigh_default_gc_thresh_3}
  */
  readonly netIpv4NeighDefaultGcThresh3?: number;
  /**
  * Sysctl setting net.ipv4.tcp_fin_timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_ipv_4_tcp_fin_timeout AksClusterV3#net_ipv_4_tcp_fin_timeout}
  */
  readonly netIpv4TcpFinTimeout?: number;
  /**
  * Sysctl setting net.ipv4.tcp_keepalive_probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_ipv_4_tcp_keepalive_probes AksClusterV3#net_ipv_4_tcp_keepalive_probes}
  */
  readonly netIpv4TcpKeepaliveProbes?: number;
  /**
  * Sysctl setting net.ipv4.tcp_keepalive_time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_ipv_4_tcp_keepalive_time AksClusterV3#net_ipv_4_tcp_keepalive_time}
  */
  readonly netIpv4TcpKeepaliveTime?: number;
  /**
  * Sysctl setting net.ipv4.tcp_max_syn_backlog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_ipv_4_tcp_max_syn_backlog AksClusterV3#net_ipv_4_tcp_max_syn_backlog}
  */
  readonly netIpv4TcpMaxSynBacklog?: number;
  /**
  * Sysctl setting net.ipv4.tcp_max_tw_buckets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_ipv_4_tcp_max_tw_buckets AksClusterV3#net_ipv_4_tcp_max_tw_buckets}
  */
  readonly netIpv4TcpMaxTwBuckets?: number;
  /**
  * Sysctl setting net.ipv4.tcp_tw_reuse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_ipv_4_tcp_tw_reuse AksClusterV3#net_ipv_4_tcp_tw_reuse}
  */
  readonly netIpv4TcpTwReuse?: boolean | cdktf.IResolvable;
  /**
  * Sysctl setting net.ipv4.tcp_keepalive_intvl.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_ipv_4_tcpkeepalive_intvl AksClusterV3#net_ipv_4_tcpkeepalive_intvl}
  */
  readonly netIpv4TcpkeepaliveIntvl?: number;
  /**
  * Sysctl setting net.netfilter.nf_conntrack_buckets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_netfilter_nf_conntrack_buckets AksClusterV3#net_netfilter_nf_conntrack_buckets}
  */
  readonly netNetfilterNfConntrackBuckets?: number;
  /**
  * Sysctl setting net.netfilter.nf_conntrack_max.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#net_netfilter_nf_conntrack_max AksClusterV3#net_netfilter_nf_conntrack_max}
  */
  readonly netNetfilterNfConntrackMax?: number;
  /**
  * Sysctl setting vm.max_map_count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#vm_max_map_count AksClusterV3#vm_max_map_count}
  */
  readonly vmMaxMapCount?: number;
  /**
  * Sysctl setting vm.swappiness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#vm_swappiness AksClusterV3#vm_swappiness}
  */
  readonly vmSwappiness?: number;
  /**
  * Sysctl setting vm.vfs_cache_pressure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#vm_vfs_cache_pressure AksClusterV3#vm_vfs_cache_pressure}
  */
  readonly vmVfsCachePressure?: number;
}

export function aksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsToTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsOutputReference | AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_aio_max_nr: cdktf.numberToTerraform(struct!.fsAioMaxNr),
    fs_file_max: cdktf.numberToTerraform(struct!.fsFileMax),
    fs_inotify_max_user_watches: cdktf.numberToTerraform(struct!.fsInotifyMaxUserWatches),
    fs_nr_open: cdktf.numberToTerraform(struct!.fsNrOpen),
    kernel_threads_max: cdktf.numberToTerraform(struct!.kernelThreadsMax),
    net_core_netdev_max_backlog: cdktf.numberToTerraform(struct!.netCoreNetdevMaxBacklog),
    net_core_optmem_max: cdktf.numberToTerraform(struct!.netCoreOptmemMax),
    net_core_rmem_default: cdktf.numberToTerraform(struct!.netCoreRmemDefault),
    net_core_rmem_max: cdktf.numberToTerraform(struct!.netCoreRmemMax),
    net_core_somaxconn: cdktf.numberToTerraform(struct!.netCoreSomaxconn),
    net_core_wmem_default: cdktf.numberToTerraform(struct!.netCoreWmemDefault),
    net_core_wmem_max: cdktf.numberToTerraform(struct!.netCoreWmemMax),
    net_ipv_4_ip_local_port_range: cdktf.stringToTerraform(struct!.netIpv4IpLocalPortRange),
    net_ipv_4_neigh_default_gc_thresh_1: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh1),
    net_ipv_4_neigh_default_gc_thresh_2: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh2),
    net_ipv_4_neigh_default_gc_thresh_3: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh3),
    net_ipv_4_tcp_fin_timeout: cdktf.numberToTerraform(struct!.netIpv4TcpFinTimeout),
    net_ipv_4_tcp_keepalive_probes: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveProbes),
    net_ipv_4_tcp_keepalive_time: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveTime),
    net_ipv_4_tcp_max_syn_backlog: cdktf.numberToTerraform(struct!.netIpv4TcpMaxSynBacklog),
    net_ipv_4_tcp_max_tw_buckets: cdktf.numberToTerraform(struct!.netIpv4TcpMaxTwBuckets),
    net_ipv_4_tcp_tw_reuse: cdktf.booleanToTerraform(struct!.netIpv4TcpTwReuse),
    net_ipv_4_tcpkeepalive_intvl: cdktf.numberToTerraform(struct!.netIpv4TcpkeepaliveIntvl),
    net_netfilter_nf_conntrack_buckets: cdktf.numberToTerraform(struct!.netNetfilterNfConntrackBuckets),
    net_netfilter_nf_conntrack_max: cdktf.numberToTerraform(struct!.netNetfilterNfConntrackMax),
    vm_max_map_count: cdktf.numberToTerraform(struct!.vmMaxMapCount),
    vm_swappiness: cdktf.numberToTerraform(struct!.vmSwappiness),
    vm_vfs_cache_pressure: cdktf.numberToTerraform(struct!.vmVfsCachePressure),
  }
}


export function aksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsToHclTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsOutputReference | AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_aio_max_nr: {
      value: cdktf.numberToHclTerraform(struct!.fsAioMaxNr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_file_max: {
      value: cdktf.numberToHclTerraform(struct!.fsFileMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_inotify_max_user_watches: {
      value: cdktf.numberToHclTerraform(struct!.fsInotifyMaxUserWatches),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_nr_open: {
      value: cdktf.numberToHclTerraform(struct!.fsNrOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kernel_threads_max: {
      value: cdktf.numberToHclTerraform(struct!.kernelThreadsMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_netdev_max_backlog: {
      value: cdktf.numberToHclTerraform(struct!.netCoreNetdevMaxBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_optmem_max: {
      value: cdktf.numberToHclTerraform(struct!.netCoreOptmemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_rmem_default: {
      value: cdktf.numberToHclTerraform(struct!.netCoreRmemDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_rmem_max: {
      value: cdktf.numberToHclTerraform(struct!.netCoreRmemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_somaxconn: {
      value: cdktf.numberToHclTerraform(struct!.netCoreSomaxconn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_wmem_default: {
      value: cdktf.numberToHclTerraform(struct!.netCoreWmemDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_core_wmem_max: {
      value: cdktf.numberToHclTerraform(struct!.netCoreWmemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv_4_ip_local_port_range: {
      value: cdktf.stringToHclTerraform(struct!.netIpv4IpLocalPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_ipv_4_neigh_default_gc_thresh_1: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4NeighDefaultGcThresh1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv_4_neigh_default_gc_thresh_2: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4NeighDefaultGcThresh2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv_4_neigh_default_gc_thresh_3: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4NeighDefaultGcThresh3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv_4_tcp_fin_timeout: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpFinTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv_4_tcp_keepalive_probes: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpKeepaliveProbes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv_4_tcp_keepalive_time: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpKeepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv_4_tcp_max_syn_backlog: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpMaxSynBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv_4_tcp_max_tw_buckets: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpMaxTwBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_ipv_4_tcp_tw_reuse: {
      value: cdktf.booleanToHclTerraform(struct!.netIpv4TcpTwReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    net_ipv_4_tcpkeepalive_intvl: {
      value: cdktf.numberToHclTerraform(struct!.netIpv4TcpkeepaliveIntvl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_netfilter_nf_conntrack_buckets: {
      value: cdktf.numberToHclTerraform(struct!.netNetfilterNfConntrackBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_netfilter_nf_conntrack_max: {
      value: cdktf.numberToHclTerraform(struct!.netNetfilterNfConntrackMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_max_map_count: {
      value: cdktf.numberToHclTerraform(struct!.vmMaxMapCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_swappiness: {
      value: cdktf.numberToHclTerraform(struct!.vmSwappiness),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_vfs_cache_pressure: {
      value: cdktf.numberToHclTerraform(struct!.vmVfsCachePressure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsAioMaxNr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsAioMaxNr = this._fsAioMaxNr;
    }
    if (this._fsFileMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsFileMax = this._fsFileMax;
    }
    if (this._fsInotifyMaxUserWatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsInotifyMaxUserWatches = this._fsInotifyMaxUserWatches;
    }
    if (this._fsNrOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsNrOpen = this._fsNrOpen;
    }
    if (this._kernelThreadsMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelThreadsMax = this._kernelThreadsMax;
    }
    if (this._netCoreNetdevMaxBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreNetdevMaxBacklog = this._netCoreNetdevMaxBacklog;
    }
    if (this._netCoreOptmemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreOptmemMax = this._netCoreOptmemMax;
    }
    if (this._netCoreRmemDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreRmemDefault = this._netCoreRmemDefault;
    }
    if (this._netCoreRmemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreRmemMax = this._netCoreRmemMax;
    }
    if (this._netCoreSomaxconn !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreSomaxconn = this._netCoreSomaxconn;
    }
    if (this._netCoreWmemDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreWmemDefault = this._netCoreWmemDefault;
    }
    if (this._netCoreWmemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netCoreWmemMax = this._netCoreWmemMax;
    }
    if (this._netIpv4IpLocalPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4IpLocalPortRange = this._netIpv4IpLocalPortRange;
    }
    if (this._netIpv4NeighDefaultGcThresh1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4NeighDefaultGcThresh1 = this._netIpv4NeighDefaultGcThresh1;
    }
    if (this._netIpv4NeighDefaultGcThresh2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4NeighDefaultGcThresh2 = this._netIpv4NeighDefaultGcThresh2;
    }
    if (this._netIpv4NeighDefaultGcThresh3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4NeighDefaultGcThresh3 = this._netIpv4NeighDefaultGcThresh3;
    }
    if (this._netIpv4TcpFinTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpFinTimeout = this._netIpv4TcpFinTimeout;
    }
    if (this._netIpv4TcpKeepaliveProbes !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpKeepaliveProbes = this._netIpv4TcpKeepaliveProbes;
    }
    if (this._netIpv4TcpKeepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpKeepaliveTime = this._netIpv4TcpKeepaliveTime;
    }
    if (this._netIpv4TcpMaxSynBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpMaxSynBacklog = this._netIpv4TcpMaxSynBacklog;
    }
    if (this._netIpv4TcpMaxTwBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpMaxTwBuckets = this._netIpv4TcpMaxTwBuckets;
    }
    if (this._netIpv4TcpTwReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpTwReuse = this._netIpv4TcpTwReuse;
    }
    if (this._netIpv4TcpkeepaliveIntvl !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIpv4TcpkeepaliveIntvl = this._netIpv4TcpkeepaliveIntvl;
    }
    if (this._netNetfilterNfConntrackBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.netNetfilterNfConntrackBuckets = this._netNetfilterNfConntrackBuckets;
    }
    if (this._netNetfilterNfConntrackMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.netNetfilterNfConntrackMax = this._netNetfilterNfConntrackMax;
    }
    if (this._vmMaxMapCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmMaxMapCount = this._vmMaxMapCount;
    }
    if (this._vmSwappiness !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSwappiness = this._vmSwappiness;
    }
    if (this._vmVfsCachePressure !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmVfsCachePressure = this._vmVfsCachePressure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsAioMaxNr = undefined;
      this._fsFileMax = undefined;
      this._fsInotifyMaxUserWatches = undefined;
      this._fsNrOpen = undefined;
      this._kernelThreadsMax = undefined;
      this._netCoreNetdevMaxBacklog = undefined;
      this._netCoreOptmemMax = undefined;
      this._netCoreRmemDefault = undefined;
      this._netCoreRmemMax = undefined;
      this._netCoreSomaxconn = undefined;
      this._netCoreWmemDefault = undefined;
      this._netCoreWmemMax = undefined;
      this._netIpv4IpLocalPortRange = undefined;
      this._netIpv4NeighDefaultGcThresh1 = undefined;
      this._netIpv4NeighDefaultGcThresh2 = undefined;
      this._netIpv4NeighDefaultGcThresh3 = undefined;
      this._netIpv4TcpFinTimeout = undefined;
      this._netIpv4TcpKeepaliveProbes = undefined;
      this._netIpv4TcpKeepaliveTime = undefined;
      this._netIpv4TcpMaxSynBacklog = undefined;
      this._netIpv4TcpMaxTwBuckets = undefined;
      this._netIpv4TcpTwReuse = undefined;
      this._netIpv4TcpkeepaliveIntvl = undefined;
      this._netNetfilterNfConntrackBuckets = undefined;
      this._netNetfilterNfConntrackMax = undefined;
      this._vmMaxMapCount = undefined;
      this._vmSwappiness = undefined;
      this._vmVfsCachePressure = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsAioMaxNr = value.fsAioMaxNr;
      this._fsFileMax = value.fsFileMax;
      this._fsInotifyMaxUserWatches = value.fsInotifyMaxUserWatches;
      this._fsNrOpen = value.fsNrOpen;
      this._kernelThreadsMax = value.kernelThreadsMax;
      this._netCoreNetdevMaxBacklog = value.netCoreNetdevMaxBacklog;
      this._netCoreOptmemMax = value.netCoreOptmemMax;
      this._netCoreRmemDefault = value.netCoreRmemDefault;
      this._netCoreRmemMax = value.netCoreRmemMax;
      this._netCoreSomaxconn = value.netCoreSomaxconn;
      this._netCoreWmemDefault = value.netCoreWmemDefault;
      this._netCoreWmemMax = value.netCoreWmemMax;
      this._netIpv4IpLocalPortRange = value.netIpv4IpLocalPortRange;
      this._netIpv4NeighDefaultGcThresh1 = value.netIpv4NeighDefaultGcThresh1;
      this._netIpv4NeighDefaultGcThresh2 = value.netIpv4NeighDefaultGcThresh2;
      this._netIpv4NeighDefaultGcThresh3 = value.netIpv4NeighDefaultGcThresh3;
      this._netIpv4TcpFinTimeout = value.netIpv4TcpFinTimeout;
      this._netIpv4TcpKeepaliveProbes = value.netIpv4TcpKeepaliveProbes;
      this._netIpv4TcpKeepaliveTime = value.netIpv4TcpKeepaliveTime;
      this._netIpv4TcpMaxSynBacklog = value.netIpv4TcpMaxSynBacklog;
      this._netIpv4TcpMaxTwBuckets = value.netIpv4TcpMaxTwBuckets;
      this._netIpv4TcpTwReuse = value.netIpv4TcpTwReuse;
      this._netIpv4TcpkeepaliveIntvl = value.netIpv4TcpkeepaliveIntvl;
      this._netNetfilterNfConntrackBuckets = value.netNetfilterNfConntrackBuckets;
      this._netNetfilterNfConntrackMax = value.netNetfilterNfConntrackMax;
      this._vmMaxMapCount = value.vmMaxMapCount;
      this._vmSwappiness = value.vmSwappiness;
      this._vmVfsCachePressure = value.vmVfsCachePressure;
    }
  }

  // fs_aio_max_nr - computed: false, optional: true, required: false
  private _fsAioMaxNr?: number; 
  public get fsAioMaxNr() {
    return this.getNumberAttribute('fs_aio_max_nr');
  }
  public set fsAioMaxNr(value: number) {
    this._fsAioMaxNr = value;
  }
  public resetFsAioMaxNr() {
    this._fsAioMaxNr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsAioMaxNrInput() {
    return this._fsAioMaxNr;
  }

  // fs_file_max - computed: false, optional: true, required: false
  private _fsFileMax?: number; 
  public get fsFileMax() {
    return this.getNumberAttribute('fs_file_max');
  }
  public set fsFileMax(value: number) {
    this._fsFileMax = value;
  }
  public resetFsFileMax() {
    this._fsFileMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsFileMaxInput() {
    return this._fsFileMax;
  }

  // fs_inotify_max_user_watches - computed: false, optional: true, required: false
  private _fsInotifyMaxUserWatches?: number; 
  public get fsInotifyMaxUserWatches() {
    return this.getNumberAttribute('fs_inotify_max_user_watches');
  }
  public set fsInotifyMaxUserWatches(value: number) {
    this._fsInotifyMaxUserWatches = value;
  }
  public resetFsInotifyMaxUserWatches() {
    this._fsInotifyMaxUserWatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsInotifyMaxUserWatchesInput() {
    return this._fsInotifyMaxUserWatches;
  }

  // fs_nr_open - computed: false, optional: true, required: false
  private _fsNrOpen?: number; 
  public get fsNrOpen() {
    return this.getNumberAttribute('fs_nr_open');
  }
  public set fsNrOpen(value: number) {
    this._fsNrOpen = value;
  }
  public resetFsNrOpen() {
    this._fsNrOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsNrOpenInput() {
    return this._fsNrOpen;
  }

  // kernel_threads_max - computed: false, optional: true, required: false
  private _kernelThreadsMax?: number; 
  public get kernelThreadsMax() {
    return this.getNumberAttribute('kernel_threads_max');
  }
  public set kernelThreadsMax(value: number) {
    this._kernelThreadsMax = value;
  }
  public resetKernelThreadsMax() {
    this._kernelThreadsMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelThreadsMaxInput() {
    return this._kernelThreadsMax;
  }

  // net_core_netdev_max_backlog - computed: false, optional: true, required: false
  private _netCoreNetdevMaxBacklog?: number; 
  public get netCoreNetdevMaxBacklog() {
    return this.getNumberAttribute('net_core_netdev_max_backlog');
  }
  public set netCoreNetdevMaxBacklog(value: number) {
    this._netCoreNetdevMaxBacklog = value;
  }
  public resetNetCoreNetdevMaxBacklog() {
    this._netCoreNetdevMaxBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreNetdevMaxBacklogInput() {
    return this._netCoreNetdevMaxBacklog;
  }

  // net_core_optmem_max - computed: false, optional: true, required: false
  private _netCoreOptmemMax?: number; 
  public get netCoreOptmemMax() {
    return this.getNumberAttribute('net_core_optmem_max');
  }
  public set netCoreOptmemMax(value: number) {
    this._netCoreOptmemMax = value;
  }
  public resetNetCoreOptmemMax() {
    this._netCoreOptmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreOptmemMaxInput() {
    return this._netCoreOptmemMax;
  }

  // net_core_rmem_default - computed: false, optional: true, required: false
  private _netCoreRmemDefault?: number; 
  public get netCoreRmemDefault() {
    return this.getNumberAttribute('net_core_rmem_default');
  }
  public set netCoreRmemDefault(value: number) {
    this._netCoreRmemDefault = value;
  }
  public resetNetCoreRmemDefault() {
    this._netCoreRmemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreRmemDefaultInput() {
    return this._netCoreRmemDefault;
  }

  // net_core_rmem_max - computed: false, optional: true, required: false
  private _netCoreRmemMax?: number; 
  public get netCoreRmemMax() {
    return this.getNumberAttribute('net_core_rmem_max');
  }
  public set netCoreRmemMax(value: number) {
    this._netCoreRmemMax = value;
  }
  public resetNetCoreRmemMax() {
    this._netCoreRmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreRmemMaxInput() {
    return this._netCoreRmemMax;
  }

  // net_core_somaxconn - computed: false, optional: true, required: false
  private _netCoreSomaxconn?: number; 
  public get netCoreSomaxconn() {
    return this.getNumberAttribute('net_core_somaxconn');
  }
  public set netCoreSomaxconn(value: number) {
    this._netCoreSomaxconn = value;
  }
  public resetNetCoreSomaxconn() {
    this._netCoreSomaxconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreSomaxconnInput() {
    return this._netCoreSomaxconn;
  }

  // net_core_wmem_default - computed: false, optional: true, required: false
  private _netCoreWmemDefault?: number; 
  public get netCoreWmemDefault() {
    return this.getNumberAttribute('net_core_wmem_default');
  }
  public set netCoreWmemDefault(value: number) {
    this._netCoreWmemDefault = value;
  }
  public resetNetCoreWmemDefault() {
    this._netCoreWmemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreWmemDefaultInput() {
    return this._netCoreWmemDefault;
  }

  // net_core_wmem_max - computed: false, optional: true, required: false
  private _netCoreWmemMax?: number; 
  public get netCoreWmemMax() {
    return this.getNumberAttribute('net_core_wmem_max');
  }
  public set netCoreWmemMax(value: number) {
    this._netCoreWmemMax = value;
  }
  public resetNetCoreWmemMax() {
    this._netCoreWmemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netCoreWmemMaxInput() {
    return this._netCoreWmemMax;
  }

  // net_ipv_4_ip_local_port_range - computed: false, optional: true, required: false
  private _netIpv4IpLocalPortRange?: string; 
  public get netIpv4IpLocalPortRange() {
    return this.getStringAttribute('net_ipv_4_ip_local_port_range');
  }
  public set netIpv4IpLocalPortRange(value: string) {
    this._netIpv4IpLocalPortRange = value;
  }
  public resetNetIpv4IpLocalPortRange() {
    this._netIpv4IpLocalPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4IpLocalPortRangeInput() {
    return this._netIpv4IpLocalPortRange;
  }

  // net_ipv_4_neigh_default_gc_thresh_1 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh1?: number; 
  public get netIpv4NeighDefaultGcThresh1() {
    return this.getNumberAttribute('net_ipv_4_neigh_default_gc_thresh_1');
  }
  public set netIpv4NeighDefaultGcThresh1(value: number) {
    this._netIpv4NeighDefaultGcThresh1 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh1() {
    this._netIpv4NeighDefaultGcThresh1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh1Input() {
    return this._netIpv4NeighDefaultGcThresh1;
  }

  // net_ipv_4_neigh_default_gc_thresh_2 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh2?: number; 
  public get netIpv4NeighDefaultGcThresh2() {
    return this.getNumberAttribute('net_ipv_4_neigh_default_gc_thresh_2');
  }
  public set netIpv4NeighDefaultGcThresh2(value: number) {
    this._netIpv4NeighDefaultGcThresh2 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh2() {
    this._netIpv4NeighDefaultGcThresh2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh2Input() {
    return this._netIpv4NeighDefaultGcThresh2;
  }

  // net_ipv_4_neigh_default_gc_thresh_3 - computed: false, optional: true, required: false
  private _netIpv4NeighDefaultGcThresh3?: number; 
  public get netIpv4NeighDefaultGcThresh3() {
    return this.getNumberAttribute('net_ipv_4_neigh_default_gc_thresh_3');
  }
  public set netIpv4NeighDefaultGcThresh3(value: number) {
    this._netIpv4NeighDefaultGcThresh3 = value;
  }
  public resetNetIpv4NeighDefaultGcThresh3() {
    this._netIpv4NeighDefaultGcThresh3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4NeighDefaultGcThresh3Input() {
    return this._netIpv4NeighDefaultGcThresh3;
  }

  // net_ipv_4_tcp_fin_timeout - computed: false, optional: true, required: false
  private _netIpv4TcpFinTimeout?: number; 
  public get netIpv4TcpFinTimeout() {
    return this.getNumberAttribute('net_ipv_4_tcp_fin_timeout');
  }
  public set netIpv4TcpFinTimeout(value: number) {
    this._netIpv4TcpFinTimeout = value;
  }
  public resetNetIpv4TcpFinTimeout() {
    this._netIpv4TcpFinTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpFinTimeoutInput() {
    return this._netIpv4TcpFinTimeout;
  }

  // net_ipv_4_tcp_keepalive_probes - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveProbes?: number; 
  public get netIpv4TcpKeepaliveProbes() {
    return this.getNumberAttribute('net_ipv_4_tcp_keepalive_probes');
  }
  public set netIpv4TcpKeepaliveProbes(value: number) {
    this._netIpv4TcpKeepaliveProbes = value;
  }
  public resetNetIpv4TcpKeepaliveProbes() {
    this._netIpv4TcpKeepaliveProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveProbesInput() {
    return this._netIpv4TcpKeepaliveProbes;
  }

  // net_ipv_4_tcp_keepalive_time - computed: false, optional: true, required: false
  private _netIpv4TcpKeepaliveTime?: number; 
  public get netIpv4TcpKeepaliveTime() {
    return this.getNumberAttribute('net_ipv_4_tcp_keepalive_time');
  }
  public set netIpv4TcpKeepaliveTime(value: number) {
    this._netIpv4TcpKeepaliveTime = value;
  }
  public resetNetIpv4TcpKeepaliveTime() {
    this._netIpv4TcpKeepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpKeepaliveTimeInput() {
    return this._netIpv4TcpKeepaliveTime;
  }

  // net_ipv_4_tcp_max_syn_backlog - computed: false, optional: true, required: false
  private _netIpv4TcpMaxSynBacklog?: number; 
  public get netIpv4TcpMaxSynBacklog() {
    return this.getNumberAttribute('net_ipv_4_tcp_max_syn_backlog');
  }
  public set netIpv4TcpMaxSynBacklog(value: number) {
    this._netIpv4TcpMaxSynBacklog = value;
  }
  public resetNetIpv4TcpMaxSynBacklog() {
    this._netIpv4TcpMaxSynBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpMaxSynBacklogInput() {
    return this._netIpv4TcpMaxSynBacklog;
  }

  // net_ipv_4_tcp_max_tw_buckets - computed: false, optional: true, required: false
  private _netIpv4TcpMaxTwBuckets?: number; 
  public get netIpv4TcpMaxTwBuckets() {
    return this.getNumberAttribute('net_ipv_4_tcp_max_tw_buckets');
  }
  public set netIpv4TcpMaxTwBuckets(value: number) {
    this._netIpv4TcpMaxTwBuckets = value;
  }
  public resetNetIpv4TcpMaxTwBuckets() {
    this._netIpv4TcpMaxTwBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpMaxTwBucketsInput() {
    return this._netIpv4TcpMaxTwBuckets;
  }

  // net_ipv_4_tcp_tw_reuse - computed: false, optional: true, required: false
  private _netIpv4TcpTwReuse?: boolean | cdktf.IResolvable; 
  public get netIpv4TcpTwReuse() {
    return this.getBooleanAttribute('net_ipv_4_tcp_tw_reuse');
  }
  public set netIpv4TcpTwReuse(value: boolean | cdktf.IResolvable) {
    this._netIpv4TcpTwReuse = value;
  }
  public resetNetIpv4TcpTwReuse() {
    this._netIpv4TcpTwReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpTwReuseInput() {
    return this._netIpv4TcpTwReuse;
  }

  // net_ipv_4_tcpkeepalive_intvl - computed: false, optional: true, required: false
  private _netIpv4TcpkeepaliveIntvl?: number; 
  public get netIpv4TcpkeepaliveIntvl() {
    return this.getNumberAttribute('net_ipv_4_tcpkeepalive_intvl');
  }
  public set netIpv4TcpkeepaliveIntvl(value: number) {
    this._netIpv4TcpkeepaliveIntvl = value;
  }
  public resetNetIpv4TcpkeepaliveIntvl() {
    this._netIpv4TcpkeepaliveIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIpv4TcpkeepaliveIntvlInput() {
    return this._netIpv4TcpkeepaliveIntvl;
  }

  // net_netfilter_nf_conntrack_buckets - computed: false, optional: true, required: false
  private _netNetfilterNfConntrackBuckets?: number; 
  public get netNetfilterNfConntrackBuckets() {
    return this.getNumberAttribute('net_netfilter_nf_conntrack_buckets');
  }
  public set netNetfilterNfConntrackBuckets(value: number) {
    this._netNetfilterNfConntrackBuckets = value;
  }
  public resetNetNetfilterNfConntrackBuckets() {
    this._netNetfilterNfConntrackBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netNetfilterNfConntrackBucketsInput() {
    return this._netNetfilterNfConntrackBuckets;
  }

  // net_netfilter_nf_conntrack_max - computed: false, optional: true, required: false
  private _netNetfilterNfConntrackMax?: number; 
  public get netNetfilterNfConntrackMax() {
    return this.getNumberAttribute('net_netfilter_nf_conntrack_max');
  }
  public set netNetfilterNfConntrackMax(value: number) {
    this._netNetfilterNfConntrackMax = value;
  }
  public resetNetNetfilterNfConntrackMax() {
    this._netNetfilterNfConntrackMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netNetfilterNfConntrackMaxInput() {
    return this._netNetfilterNfConntrackMax;
  }

  // vm_max_map_count - computed: false, optional: true, required: false
  private _vmMaxMapCount?: number; 
  public get vmMaxMapCount() {
    return this.getNumberAttribute('vm_max_map_count');
  }
  public set vmMaxMapCount(value: number) {
    this._vmMaxMapCount = value;
  }
  public resetVmMaxMapCount() {
    this._vmMaxMapCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmMaxMapCountInput() {
    return this._vmMaxMapCount;
  }

  // vm_swappiness - computed: false, optional: true, required: false
  private _vmSwappiness?: number; 
  public get vmSwappiness() {
    return this.getNumberAttribute('vm_swappiness');
  }
  public set vmSwappiness(value: number) {
    this._vmSwappiness = value;
  }
  public resetVmSwappiness() {
    this._vmSwappiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSwappinessInput() {
    return this._vmSwappiness;
  }

  // vm_vfs_cache_pressure - computed: false, optional: true, required: false
  private _vmVfsCachePressure?: number; 
  public get vmVfsCachePressure() {
    return this.getNumberAttribute('vm_vfs_cache_pressure');
  }
  public set vmVfsCachePressure(value: number) {
    this._vmVfsCachePressure = value;
  }
  public resetVmVfsCachePressure() {
    this._vmVfsCachePressure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmVfsCachePressureInput() {
    return this._vmVfsCachePressure;
  }
}
export interface AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfig {
  /**
  * The size in MB of a swap file that will be created on each node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#swap_file_size_mb AksClusterV3#swap_file_size_mb}
  */
  readonly swapFileSizeMb?: number;
  /**
  * Valid values are always, defer, defer+madvise, madvise and never. The default is madvise. For more information see Transparent Hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#transparent_huge_page_defrag AksClusterV3#transparent_huge_page_defrag}
  */
  readonly transparentHugePageDefrag?: string;
  /**
  * Valid values are always, madvise, and never. The default is always. For more information see Transparent Hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#transparent_huge_page_enabled AksClusterV3#transparent_huge_page_enabled}
  */
  readonly transparentHugePageEnabled?: string;
  /**
  * sysctls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#sysctls AksClusterV3#sysctls}
  */
  readonly sysctls?: AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls;
}

export function aksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigToTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigOutputReference | AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swap_file_size_mb: cdktf.numberToTerraform(struct!.swapFileSizeMb),
    transparent_huge_page_defrag: cdktf.stringToTerraform(struct!.transparentHugePageDefrag),
    transparent_huge_page_enabled: cdktf.stringToTerraform(struct!.transparentHugePageEnabled),
    sysctls: aksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsToTerraform(struct!.sysctls),
  }
}


export function aksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigToHclTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigOutputReference | AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    swap_file_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.swapFileSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transparent_huge_page_defrag: {
      value: cdktf.stringToHclTerraform(struct!.transparentHugePageDefrag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transparent_huge_page_enabled: {
      value: cdktf.stringToHclTerraform(struct!.transparentHugePageEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysctls: {
      value: aksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsToHclTerraform(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._swapFileSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapFileSizeMb = this._swapFileSizeMb;
    }
    if (this._transparentHugePageDefrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugePageDefrag = this._transparentHugePageDefrag;
    }
    if (this._transparentHugePageEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugePageEnabled = this._transparentHugePageEnabled;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._swapFileSizeMb = undefined;
      this._transparentHugePageDefrag = undefined;
      this._transparentHugePageEnabled = undefined;
      this._sysctls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._swapFileSizeMb = value.swapFileSizeMb;
      this._transparentHugePageDefrag = value.transparentHugePageDefrag;
      this._transparentHugePageEnabled = value.transparentHugePageEnabled;
      this._sysctls.internalValue = value.sysctls;
    }
  }

  // swap_file_size_mb - computed: false, optional: true, required: false
  private _swapFileSizeMb?: number; 
  public get swapFileSizeMb() {
    return this.getNumberAttribute('swap_file_size_mb');
  }
  public set swapFileSizeMb(value: number) {
    this._swapFileSizeMb = value;
  }
  public resetSwapFileSizeMb() {
    this._swapFileSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapFileSizeMbInput() {
    return this._swapFileSizeMb;
  }

  // transparent_huge_page_defrag - computed: false, optional: true, required: false
  private _transparentHugePageDefrag?: string; 
  public get transparentHugePageDefrag() {
    return this.getStringAttribute('transparent_huge_page_defrag');
  }
  public set transparentHugePageDefrag(value: string) {
    this._transparentHugePageDefrag = value;
  }
  public resetTransparentHugePageDefrag() {
    this._transparentHugePageDefrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugePageDefragInput() {
    return this._transparentHugePageDefrag;
  }

  // transparent_huge_page_enabled - computed: false, optional: true, required: false
  private _transparentHugePageEnabled?: string; 
  public get transparentHugePageEnabled() {
    return this.getStringAttribute('transparent_huge_page_enabled');
  }
  public set transparentHugePageEnabled(value: string) {
    this._transparentHugePageEnabled = value;
  }
  public resetTransparentHugePageEnabled() {
    this._transparentHugePageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugePageEnabledInput() {
    return this._transparentHugePageEnabled;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctlsOutputReference(this, "sysctls");
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigSysctls) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecNodePoolsPropertiesPowerState {
  /**
  * Tells whether the cluster is Running or Stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#code AksClusterV3#code}
  */
  readonly code?: string;
}

export function aksClusterV3SpecConfigSpecNodePoolsPropertiesPowerStateToTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesPowerStateOutputReference | AksClusterV3SpecConfigSpecNodePoolsPropertiesPowerState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
  }
}


export function aksClusterV3SpecConfigSpecNodePoolsPropertiesPowerStateToHclTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesPowerStateOutputReference | AksClusterV3SpecConfigSpecNodePoolsPropertiesPowerState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecNodePoolsPropertiesPowerStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecNodePoolsPropertiesPowerState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecNodePoolsPropertiesPowerState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }
}
export interface AksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettings {
  /**
  * This can either be set to an integer (e.g. 5) or a percentage (e.g. 50%). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#max_surge AksClusterV3#max_surge}
  */
  readonly maxSurge?: string;
}

export function aksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettingsToTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettingsOutputReference | AksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
  }
}


export function aksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettingsToHclTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettingsOutputReference | AksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }
}
export interface AksClusterV3SpecConfigSpecNodePoolsProperties {
  /**
  * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is VirtualMachineScaleSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#availability_zones AksClusterV3#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#count AksClusterV3#count}
  */
  readonly count?: number;
  /**
  * Whether to enable auto-scaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enable_auto_scaling AksClusterV3#enable_auto_scaling}
  */
  readonly enableAutoScaling?: boolean | cdktf.IResolvable;
  /**
  * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enable_encryption_at_host AksClusterV3#enable_encryption_at_host}
  */
  readonly enableEncryptionAtHost?: boolean | cdktf.IResolvable;
  /**
  * See Add a FIPS-enabled node pool for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enable_fips AksClusterV3#enable_fips}
  */
  readonly enableFips?: boolean | cdktf.IResolvable;
  /**
  * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see assigning a public IP per node. The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enable_node_public_ip AksClusterV3#enable_node_public_ip}
  */
  readonly enableNodePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable UltraSSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enable_ultra_ssd AksClusterV3#enable_ultra_ssd}
  */
  readonly enableUltraSsd?: boolean | cdktf.IResolvable;
  /**
  * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU. Valid values are MIG1g, MIG2g, MIG3g, MIG4g, MIG7g.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#gpu_instance_profile AksClusterV3#gpu_instance_profile}
  */
  readonly gpuInstanceProfile?: string;
  /**
  * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see Azure dedicated hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#host_group_id AksClusterV3#host_group_id}
  */
  readonly hostGroupId?: string;
  /**
  * Valid values are OS, Temporary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kubelet_disk_type AksClusterV3#kubelet_disk_type}
  */
  readonly kubeletDiskType?: string;
  /**
  * The maximum number of nodes for auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#max_count AksClusterV3#max_count}
  */
  readonly maxCount?: number;
  /**
  *  The maximum number of pods that can run on a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#max_pods AksClusterV3#max_pods}
  */
  readonly maxPods?: number;
  /**
  * The minimum number of nodes for auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#min_count AksClusterV3#min_count}
  */
  readonly minCount?: number;
  /**
  * Valid values are System, User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#mode AksClusterV3#mode}
  */
  readonly mode?: string;
  /**
  * The node labels to be persisted across all nodes in agent pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#node_labels AksClusterV3#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#node_public_ip_prefix_id AksClusterV3#node_public_ip_prefix_id}
  */
  readonly nodePublicIpPrefixId?: string;
  /**
  * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#node_taints AksClusterV3#node_taints}
  */
  readonly nodeTaints?: string[];
  /**
  * Both patch version (e.g. 1.20.13) and (e.g. 1.20) are supported. When is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see upgrading a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#orchestrator_version AksClusterV3#orchestrator_version}
  */
  readonly orchestratorVersion?: string;
  /**
  * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#os_disk_size_gb AksClusterV3#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Valid values are Managed, Ephemeral.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#os_disk_type AksClusterV3#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Valid values are Ubuntu, CBLMariner, Windows2019, Windows2022.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#os_sku AksClusterV3#os_sku}
  */
  readonly osSku?: string;
  /**
  * Valid values are Linux, Windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#os_type AksClusterV3#os_type}
  */
  readonly osType?: string;
  /**
  * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#pod_subnet_id AksClusterV3#pod_subnet_id}
  */
  readonly podSubnetId?: string;
  /**
  * The ID for Proximity Placement Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#proximity_placement_group_id AksClusterV3#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete. Valid values are Delete, Deallocate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#scale_down_mode AksClusterV3#scale_down_mode}
  */
  readonly scaleDownMode?: string;
  /**
  * This cannot be specified unless the scaleSetPriority is Spot. If not specified, the default is Delete. Valid values are Delete, Deallocate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#scale_set_eviction_policy AksClusterV3#scale_set_eviction_policy}
  */
  readonly scaleSetEvictionPolicy?: string;
  /**
  * The Virtual Machine Scale Set priority. If not specified, the default is Regular. Valid values are Spot, Regular.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#scale_set_priority AksClusterV3#scale_set_priority}
  */
  readonly scaleSetPriority?: string;
  /**
  * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see spot VMs pricing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#spot_max_price AksClusterV3#spot_max_price}
  */
  readonly spotMaxPrice?: number;
  /**
  * The tags to be persisted on the agent pool virtual machine scale set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#tags AksClusterV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Valid values are VirtualMachineScaleSets, AvailabilitySet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
  /**
  * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#vm_size AksClusterV3#vm_size}
  */
  readonly vmSize?: string;
  /**
  * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#vnet_subnet_id AksClusterV3#vnet_subnet_id}
  */
  readonly vnetSubnetId?: string;
  /**
  * Valid values are OCIContainer, WasmWasi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#workload_runtime AksClusterV3#workload_runtime}
  */
  readonly workloadRuntime?: string;
  /**
  * creation_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#creation_data AksClusterV3#creation_data}
  */
  readonly creationData?: AksClusterV3SpecConfigSpecNodePoolsPropertiesCreationData;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kubelet_config AksClusterV3#kubelet_config}
  */
  readonly kubeletConfig?: AksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfig;
  /**
  * linux_os_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#linux_os_config AksClusterV3#linux_os_config}
  */
  readonly linuxOsConfig?: AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfig;
  /**
  * power_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#power_state AksClusterV3#power_state}
  */
  readonly powerState?: AksClusterV3SpecConfigSpecNodePoolsPropertiesPowerState;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#upgrade_settings AksClusterV3#upgrade_settings}
  */
  readonly upgradeSettings?: AksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettings;
}

export function aksClusterV3SpecConfigSpecNodePoolsPropertiesToTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesOutputReference | AksClusterV3SpecConfigSpecNodePoolsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    count: cdktf.numberToTerraform(struct!.count),
    enable_auto_scaling: cdktf.booleanToTerraform(struct!.enableAutoScaling),
    enable_encryption_at_host: cdktf.booleanToTerraform(struct!.enableEncryptionAtHost),
    enable_fips: cdktf.booleanToTerraform(struct!.enableFips),
    enable_node_public_ip: cdktf.booleanToTerraform(struct!.enableNodePublicIp),
    enable_ultra_ssd: cdktf.booleanToTerraform(struct!.enableUltraSsd),
    gpu_instance_profile: cdktf.stringToTerraform(struct!.gpuInstanceProfile),
    host_group_id: cdktf.stringToTerraform(struct!.hostGroupId),
    kubelet_disk_type: cdktf.stringToTerraform(struct!.kubeletDiskType),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    max_pods: cdktf.numberToTerraform(struct!.maxPods),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    mode: cdktf.stringToTerraform(struct!.mode),
    node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabels),
    node_public_ip_prefix_id: cdktf.stringToTerraform(struct!.nodePublicIpPrefixId),
    node_taints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeTaints),
    orchestrator_version: cdktf.stringToTerraform(struct!.orchestratorVersion),
    os_disk_size_gb: cdktf.numberToTerraform(struct!.osDiskSizeGb),
    os_disk_type: cdktf.stringToTerraform(struct!.osDiskType),
    os_sku: cdktf.stringToTerraform(struct!.osSku),
    os_type: cdktf.stringToTerraform(struct!.osType),
    pod_subnet_id: cdktf.stringToTerraform(struct!.podSubnetId),
    proximity_placement_group_id: cdktf.stringToTerraform(struct!.proximityPlacementGroupId),
    scale_down_mode: cdktf.stringToTerraform(struct!.scaleDownMode),
    scale_set_eviction_policy: cdktf.stringToTerraform(struct!.scaleSetEvictionPolicy),
    scale_set_priority: cdktf.stringToTerraform(struct!.scaleSetPriority),
    spot_max_price: cdktf.numberToTerraform(struct!.spotMaxPrice),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    vnet_subnet_id: cdktf.stringToTerraform(struct!.vnetSubnetId),
    workload_runtime: cdktf.stringToTerraform(struct!.workloadRuntime),
    creation_data: aksClusterV3SpecConfigSpecNodePoolsPropertiesCreationDataToTerraform(struct!.creationData),
    kubelet_config: aksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_os_config: aksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigToTerraform(struct!.linuxOsConfig),
    power_state: aksClusterV3SpecConfigSpecNodePoolsPropertiesPowerStateToTerraform(struct!.powerState),
    upgrade_settings: aksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}


export function aksClusterV3SpecConfigSpecNodePoolsPropertiesToHclTerraform(struct?: AksClusterV3SpecConfigSpecNodePoolsPropertiesOutputReference | AksClusterV3SpecConfigSpecNodePoolsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_auto_scaling: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoScaling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_encryption_at_host: {
      value: cdktf.booleanToHclTerraform(struct!.enableEncryptionAtHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_fips: {
      value: cdktf.booleanToHclTerraform(struct!.enableFips),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_node_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.enableNodePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ultra_ssd: {
      value: cdktf.booleanToHclTerraform(struct!.enableUltraSsd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gpu_instance_profile: {
      value: cdktf.stringToHclTerraform(struct!.gpuInstanceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_group_id: {
      value: cdktf.stringToHclTerraform(struct!.hostGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubelet_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.kubeletDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pods: {
      value: cdktf.numberToHclTerraform(struct!.maxPods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_public_ip_prefix_id: {
      value: cdktf.stringToHclTerraform(struct!.nodePublicIpPrefixId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeTaints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    orchestrator_version: {
      value: cdktf.stringToHclTerraform(struct!.orchestratorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.osDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    os_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.osDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_sku: {
      value: cdktf.stringToHclTerraform(struct!.osSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_type: {
      value: cdktf.stringToHclTerraform(struct!.osType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.podSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proximity_placement_group_id: {
      value: cdktf.stringToHclTerraform(struct!.proximityPlacementGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_down_mode: {
      value: cdktf.stringToHclTerraform(struct!.scaleDownMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_set_eviction_policy: {
      value: cdktf.stringToHclTerraform(struct!.scaleSetEvictionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_set_priority: {
      value: cdktf.stringToHclTerraform(struct!.scaleSetPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_max_price: {
      value: cdktf.numberToHclTerraform(struct!.spotMaxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.vnetSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_runtime: {
      value: cdktf.stringToHclTerraform(struct!.workloadRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creation_data: {
      value: aksClusterV3SpecConfigSpecNodePoolsPropertiesCreationDataToHclTerraform(struct!.creationData),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecNodePoolsPropertiesCreationDataList",
    },
    kubelet_config: {
      value: aksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfigList",
    },
    linux_os_config: {
      value: aksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigToHclTerraform(struct!.linuxOsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigList",
    },
    power_state: {
      value: aksClusterV3SpecConfigSpecNodePoolsPropertiesPowerStateToHclTerraform(struct!.powerState),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecNodePoolsPropertiesPowerStateList",
    },
    upgrade_settings: {
      value: aksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettingsToHclTerraform(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecNodePoolsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecNodePoolsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._enableAutoScaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoScaling = this._enableAutoScaling;
    }
    if (this._enableEncryptionAtHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryptionAtHost = this._enableEncryptionAtHost;
    }
    if (this._enableFips !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFips = this._enableFips;
    }
    if (this._enableNodePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNodePublicIp = this._enableNodePublicIp;
    }
    if (this._enableUltraSsd !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUltraSsd = this._enableUltraSsd;
    }
    if (this._gpuInstanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuInstanceProfile = this._gpuInstanceProfile;
    }
    if (this._hostGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostGroupId = this._hostGroupId;
    }
    if (this._kubeletDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletDiskType = this._kubeletDiskType;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._maxPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPods = this._maxPods;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._nodeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabels = this._nodeLabels;
    }
    if (this._nodePublicIpPrefixId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePublicIpPrefixId = this._nodePublicIpPrefixId;
    }
    if (this._nodeTaints !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaints = this._nodeTaints;
    }
    if (this._orchestratorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.orchestratorVersion = this._orchestratorVersion;
    }
    if (this._osDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskSizeGb = this._osDiskSizeGb;
    }
    if (this._osDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskType = this._osDiskType;
    }
    if (this._osSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.osSku = this._osSku;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._podSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSubnetId = this._podSubnetId;
    }
    if (this._proximityPlacementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximityPlacementGroupId = this._proximityPlacementGroupId;
    }
    if (this._scaleDownMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownMode = this._scaleDownMode;
    }
    if (this._scaleSetEvictionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleSetEvictionPolicy = this._scaleSetEvictionPolicy;
    }
    if (this._scaleSetPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleSetPriority = this._scaleSetPriority;
    }
    if (this._spotMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotMaxPrice = this._spotMaxPrice;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    if (this._vnetSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetSubnetId = this._vnetSubnetId;
    }
    if (this._workloadRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadRuntime = this._workloadRuntime;
    }
    if (this._creationData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationData = this._creationData?.internalValue;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxOsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxOsConfig = this._linuxOsConfig?.internalValue;
    }
    if (this._powerState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerState = this._powerState?.internalValue;
    }
    if (this._upgradeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSettings = this._upgradeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecNodePoolsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZones = undefined;
      this._count = undefined;
      this._enableAutoScaling = undefined;
      this._enableEncryptionAtHost = undefined;
      this._enableFips = undefined;
      this._enableNodePublicIp = undefined;
      this._enableUltraSsd = undefined;
      this._gpuInstanceProfile = undefined;
      this._hostGroupId = undefined;
      this._kubeletDiskType = undefined;
      this._maxCount = undefined;
      this._maxPods = undefined;
      this._minCount = undefined;
      this._mode = undefined;
      this._nodeLabels = undefined;
      this._nodePublicIpPrefixId = undefined;
      this._nodeTaints = undefined;
      this._orchestratorVersion = undefined;
      this._osDiskSizeGb = undefined;
      this._osDiskType = undefined;
      this._osSku = undefined;
      this._osType = undefined;
      this._podSubnetId = undefined;
      this._proximityPlacementGroupId = undefined;
      this._scaleDownMode = undefined;
      this._scaleSetEvictionPolicy = undefined;
      this._scaleSetPriority = undefined;
      this._spotMaxPrice = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._vmSize = undefined;
      this._vnetSubnetId = undefined;
      this._workloadRuntime = undefined;
      this._creationData.internalValue = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxOsConfig.internalValue = undefined;
      this._powerState.internalValue = undefined;
      this._upgradeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZones = value.availabilityZones;
      this._count = value.count;
      this._enableAutoScaling = value.enableAutoScaling;
      this._enableEncryptionAtHost = value.enableEncryptionAtHost;
      this._enableFips = value.enableFips;
      this._enableNodePublicIp = value.enableNodePublicIp;
      this._enableUltraSsd = value.enableUltraSsd;
      this._gpuInstanceProfile = value.gpuInstanceProfile;
      this._hostGroupId = value.hostGroupId;
      this._kubeletDiskType = value.kubeletDiskType;
      this._maxCount = value.maxCount;
      this._maxPods = value.maxPods;
      this._minCount = value.minCount;
      this._mode = value.mode;
      this._nodeLabels = value.nodeLabels;
      this._nodePublicIpPrefixId = value.nodePublicIpPrefixId;
      this._nodeTaints = value.nodeTaints;
      this._orchestratorVersion = value.orchestratorVersion;
      this._osDiskSizeGb = value.osDiskSizeGb;
      this._osDiskType = value.osDiskType;
      this._osSku = value.osSku;
      this._osType = value.osType;
      this._podSubnetId = value.podSubnetId;
      this._proximityPlacementGroupId = value.proximityPlacementGroupId;
      this._scaleDownMode = value.scaleDownMode;
      this._scaleSetEvictionPolicy = value.scaleSetEvictionPolicy;
      this._scaleSetPriority = value.scaleSetPriority;
      this._spotMaxPrice = value.spotMaxPrice;
      this._tags = value.tags;
      this._type = value.type;
      this._vmSize = value.vmSize;
      this._vnetSubnetId = value.vnetSubnetId;
      this._workloadRuntime = value.workloadRuntime;
      this._creationData.internalValue = value.creationData;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxOsConfig.internalValue = value.linuxOsConfig;
      this._powerState.internalValue = value.powerState;
      this._upgradeSettings.internalValue = value.upgradeSettings;
    }
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // enable_auto_scaling - computed: false, optional: true, required: false
  private _enableAutoScaling?: boolean | cdktf.IResolvable; 
  public get enableAutoScaling() {
    return this.getBooleanAttribute('enable_auto_scaling');
  }
  public set enableAutoScaling(value: boolean | cdktf.IResolvable) {
    this._enableAutoScaling = value;
  }
  public resetEnableAutoScaling() {
    this._enableAutoScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoScalingInput() {
    return this._enableAutoScaling;
  }

  // enable_encryption_at_host - computed: false, optional: true, required: false
  private _enableEncryptionAtHost?: boolean | cdktf.IResolvable; 
  public get enableEncryptionAtHost() {
    return this.getBooleanAttribute('enable_encryption_at_host');
  }
  public set enableEncryptionAtHost(value: boolean | cdktf.IResolvable) {
    this._enableEncryptionAtHost = value;
  }
  public resetEnableEncryptionAtHost() {
    this._enableEncryptionAtHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionAtHostInput() {
    return this._enableEncryptionAtHost;
  }

  // enable_fips - computed: false, optional: true, required: false
  private _enableFips?: boolean | cdktf.IResolvable; 
  public get enableFips() {
    return this.getBooleanAttribute('enable_fips');
  }
  public set enableFips(value: boolean | cdktf.IResolvable) {
    this._enableFips = value;
  }
  public resetEnableFips() {
    this._enableFips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFipsInput() {
    return this._enableFips;
  }

  // enable_node_public_ip - computed: false, optional: true, required: false
  private _enableNodePublicIp?: boolean | cdktf.IResolvable; 
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip');
  }
  public set enableNodePublicIp(value: boolean | cdktf.IResolvable) {
    this._enableNodePublicIp = value;
  }
  public resetEnableNodePublicIp() {
    this._enableNodePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNodePublicIpInput() {
    return this._enableNodePublicIp;
  }

  // enable_ultra_ssd - computed: false, optional: true, required: false
  private _enableUltraSsd?: boolean | cdktf.IResolvable; 
  public get enableUltraSsd() {
    return this.getBooleanAttribute('enable_ultra_ssd');
  }
  public set enableUltraSsd(value: boolean | cdktf.IResolvable) {
    this._enableUltraSsd = value;
  }
  public resetEnableUltraSsd() {
    this._enableUltraSsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUltraSsdInput() {
    return this._enableUltraSsd;
  }

  // gpu_instance_profile - computed: false, optional: true, required: false
  private _gpuInstanceProfile?: string; 
  public get gpuInstanceProfile() {
    return this.getStringAttribute('gpu_instance_profile');
  }
  public set gpuInstanceProfile(value: string) {
    this._gpuInstanceProfile = value;
  }
  public resetGpuInstanceProfile() {
    this._gpuInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInstanceProfileInput() {
    return this._gpuInstanceProfile;
  }

  // host_group_id - computed: false, optional: true, required: false
  private _hostGroupId?: string; 
  public get hostGroupId() {
    return this.getStringAttribute('host_group_id');
  }
  public set hostGroupId(value: string) {
    this._hostGroupId = value;
  }
  public resetHostGroupId() {
    this._hostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdInput() {
    return this._hostGroupId;
  }

  // kubelet_disk_type - computed: false, optional: true, required: false
  private _kubeletDiskType?: string; 
  public get kubeletDiskType() {
    return this.getStringAttribute('kubelet_disk_type');
  }
  public set kubeletDiskType(value: string) {
    this._kubeletDiskType = value;
  }
  public resetKubeletDiskType() {
    this._kubeletDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletDiskTypeInput() {
    return this._kubeletDiskType;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // max_pods - computed: false, optional: true, required: false
  private _maxPods?: number; 
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // node_public_ip_prefix_id - computed: false, optional: true, required: false
  private _nodePublicIpPrefixId?: string; 
  public get nodePublicIpPrefixId() {
    return this.getStringAttribute('node_public_ip_prefix_id');
  }
  public set nodePublicIpPrefixId(value: string) {
    this._nodePublicIpPrefixId = value;
  }
  public resetNodePublicIpPrefixId() {
    this._nodePublicIpPrefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublicIpPrefixIdInput() {
    return this._nodePublicIpPrefixId;
  }

  // node_taints - computed: false, optional: true, required: false
  private _nodeTaints?: string[]; 
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }
  public set nodeTaints(value: string[]) {
    this._nodeTaints = value;
  }
  public resetNodeTaints() {
    this._nodeTaints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsInput() {
    return this._nodeTaints;
  }

  // orchestrator_version - computed: false, optional: true, required: false
  private _orchestratorVersion?: string; 
  public get orchestratorVersion() {
    return this.getStringAttribute('orchestrator_version');
  }
  public set orchestratorVersion(value: string) {
    this._orchestratorVersion = value;
  }
  public resetOrchestratorVersion() {
    this._orchestratorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorVersionInput() {
    return this._orchestratorVersion;
  }

  // os_disk_size_gb - computed: false, optional: true, required: false
  private _osDiskSizeGb?: number; 
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }
  public set osDiskSizeGb(value: number) {
    this._osDiskSizeGb = value;
  }
  public resetOsDiskSizeGb() {
    this._osDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSizeGbInput() {
    return this._osDiskSizeGb;
  }

  // os_disk_type - computed: false, optional: true, required: false
  private _osDiskType?: string; 
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }
  public set osDiskType(value: string) {
    this._osDiskType = value;
  }
  public resetOsDiskType() {
    this._osDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskTypeInput() {
    return this._osDiskType;
  }

  // os_sku - computed: false, optional: true, required: false
  private _osSku?: string; 
  public get osSku() {
    return this.getStringAttribute('os_sku');
  }
  public set osSku(value: string) {
    this._osSku = value;
  }
  public resetOsSku() {
    this._osSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osSkuInput() {
    return this._osSku;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // pod_subnet_id - computed: false, optional: true, required: false
  private _podSubnetId?: string; 
  public get podSubnetId() {
    return this.getStringAttribute('pod_subnet_id');
  }
  public set podSubnetId(value: string) {
    this._podSubnetId = value;
  }
  public resetPodSubnetId() {
    this._podSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetIdInput() {
    return this._podSubnetId;
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string; 
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string) {
    this._proximityPlacementGroupId = value;
  }
  public resetProximityPlacementGroupId() {
    this._proximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupIdInput() {
    return this._proximityPlacementGroupId;
  }

  // scale_down_mode - computed: false, optional: true, required: false
  private _scaleDownMode?: string; 
  public get scaleDownMode() {
    return this.getStringAttribute('scale_down_mode');
  }
  public set scaleDownMode(value: string) {
    this._scaleDownMode = value;
  }
  public resetScaleDownMode() {
    this._scaleDownMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownModeInput() {
    return this._scaleDownMode;
  }

  // scale_set_eviction_policy - computed: false, optional: true, required: false
  private _scaleSetEvictionPolicy?: string; 
  public get scaleSetEvictionPolicy() {
    return this.getStringAttribute('scale_set_eviction_policy');
  }
  public set scaleSetEvictionPolicy(value: string) {
    this._scaleSetEvictionPolicy = value;
  }
  public resetScaleSetEvictionPolicy() {
    this._scaleSetEvictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleSetEvictionPolicyInput() {
    return this._scaleSetEvictionPolicy;
  }

  // scale_set_priority - computed: false, optional: true, required: false
  private _scaleSetPriority?: string; 
  public get scaleSetPriority() {
    return this.getStringAttribute('scale_set_priority');
  }
  public set scaleSetPriority(value: string) {
    this._scaleSetPriority = value;
  }
  public resetScaleSetPriority() {
    this._scaleSetPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleSetPriorityInput() {
    return this._scaleSetPriority;
  }

  // spot_max_price - computed: false, optional: true, required: false
  private _spotMaxPrice?: number; 
  public get spotMaxPrice() {
    return this.getNumberAttribute('spot_max_price');
  }
  public set spotMaxPrice(value: number) {
    this._spotMaxPrice = value;
  }
  public resetSpotMaxPrice() {
    this._spotMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaxPriceInput() {
    return this._spotMaxPrice;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vm_size - computed: false, optional: true, required: false
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  public resetVmSize() {
    this._vmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }

  // vnet_subnet_id - computed: false, optional: true, required: false
  private _vnetSubnetId?: string; 
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }
  public set vnetSubnetId(value: string) {
    this._vnetSubnetId = value;
  }
  public resetVnetSubnetId() {
    this._vnetSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetSubnetIdInput() {
    return this._vnetSubnetId;
  }

  // workload_runtime - computed: false, optional: true, required: false
  private _workloadRuntime?: string; 
  public get workloadRuntime() {
    return this.getStringAttribute('workload_runtime');
  }
  public set workloadRuntime(value: string) {
    this._workloadRuntime = value;
  }
  public resetWorkloadRuntime() {
    this._workloadRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadRuntimeInput() {
    return this._workloadRuntime;
  }

  // creation_data - computed: false, optional: true, required: false
  private _creationData = new AksClusterV3SpecConfigSpecNodePoolsPropertiesCreationDataOutputReference(this, "creation_data");
  public get creationData() {
    return this._creationData;
  }
  public putCreationData(value: AksClusterV3SpecConfigSpecNodePoolsPropertiesCreationData) {
    this._creationData.internalValue = value;
  }
  public resetCreationData() {
    this._creationData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationDataInput() {
    return this._creationData.internalValue;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new AksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: AksClusterV3SpecConfigSpecNodePoolsPropertiesKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_os_config - computed: false, optional: true, required: false
  private _linuxOsConfig = new AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfigOutputReference(this, "linux_os_config");
  public get linuxOsConfig() {
    return this._linuxOsConfig;
  }
  public putLinuxOsConfig(value: AksClusterV3SpecConfigSpecNodePoolsPropertiesLinuxOsConfig) {
    this._linuxOsConfig.internalValue = value;
  }
  public resetLinuxOsConfig() {
    this._linuxOsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxOsConfigInput() {
    return this._linuxOsConfig.internalValue;
  }

  // power_state - computed: false, optional: true, required: false
  private _powerState = new AksClusterV3SpecConfigSpecNodePoolsPropertiesPowerStateOutputReference(this, "power_state");
  public get powerState() {
    return this._powerState;
  }
  public putPowerState(value: AksClusterV3SpecConfigSpecNodePoolsPropertiesPowerState) {
    this._powerState.internalValue = value;
  }
  public resetPowerState() {
    this._powerState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateInput() {
    return this._powerState.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new AksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: AksClusterV3SpecConfigSpecNodePoolsPropertiesUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }
}
export interface AksClusterV3SpecConfigSpecNodePools {
  /**
  * Azure Api Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#api_version AksClusterV3#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The geo-location where the resource lives
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#location AksClusterV3#location}
  */
  readonly location?: string;
  /**
  * The name of the agent pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Nodepool azure resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#properties AksClusterV3#properties}
  */
  readonly properties?: AksClusterV3SpecConfigSpecNodePoolsProperties;
}

export function aksClusterV3SpecConfigSpecNodePoolsToTerraform(struct?: AksClusterV3SpecConfigSpecNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    properties: aksClusterV3SpecConfigSpecNodePoolsPropertiesToTerraform(struct!.properties),
  }
}


export function aksClusterV3SpecConfigSpecNodePoolsToHclTerraform(struct?: AksClusterV3SpecConfigSpecNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: aksClusterV3SpecConfigSpecNodePoolsPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecNodePoolsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecNodePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecNodePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._location = undefined;
      this._name = undefined;
      this._type = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._location = value.location;
      this._name = value.name;
      this._type = value.type;
      this._properties.internalValue = value.properties;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new AksClusterV3SpecConfigSpecNodePoolsPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: AksClusterV3SpecConfigSpecNodePoolsProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class AksClusterV3SpecConfigSpecNodePoolsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecNodePools[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecNodePoolsOutputReference {
    return new AksClusterV3SpecConfigSpecNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecWorkloadIdentitiesMetadata {
  /**
  * Client Id of the workload identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#client_id AksClusterV3#client_id}
  */
  readonly clientId?: string;
  /**
  * Location of the workload identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#location AksClusterV3#location}
  */
  readonly location?: string;
  /**
  * Name of the workload identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Principal Id of the workload identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#principal_id AksClusterV3#principal_id}
  */
  readonly principalId?: string;
  /**
  * Resource Group of the workload identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#resource_group AksClusterV3#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Tags of the workload identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#tags AksClusterV3#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function aksClusterV3SpecConfigSpecWorkloadIdentitiesMetadataToTerraform(struct?: AksClusterV3SpecConfigSpecWorkloadIdentitiesMetadataOutputReference | AksClusterV3SpecConfigSpecWorkloadIdentitiesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    principal_id: cdktf.stringToTerraform(struct!.principalId),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function aksClusterV3SpecConfigSpecWorkloadIdentitiesMetadataToHclTerraform(struct?: AksClusterV3SpecConfigSpecWorkloadIdentitiesMetadataOutputReference | AksClusterV3SpecConfigSpecWorkloadIdentitiesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    principal_id: {
      value: cdktf.stringToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecWorkloadIdentitiesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecWorkloadIdentitiesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecWorkloadIdentitiesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._location = undefined;
      this._name = undefined;
      this._principalId = undefined;
      this._resourceGroup = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._location = value.location;
      this._name = value.name;
      this._principalId = value.principalId;
      this._resourceGroup = value.resourceGroup;
      this._tags = value.tags;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // principal_id - computed: false, optional: true, required: false
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignments {
  /**
  * Name of the role assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Role Definition Id of the role assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#role_definition_id AksClusterV3#role_definition_id}
  */
  readonly roleDefinitionId?: string;
  /**
  * Scope of the role assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#scope AksClusterV3#scope}
  */
  readonly scope?: string;
}

export function aksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignmentsToTerraform(struct?: AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    role_definition_id: cdktf.stringToTerraform(struct!.roleDefinitionId),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function aksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignmentsToHclTerraform(struct?: AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignments | cdktf.IResolvable): any {
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
    role_definition_id: {
      value: cdktf.stringToHclTerraform(struct!.roleDefinitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roleDefinitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleDefinitionId = this._roleDefinitionId;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._roleDefinitionId = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._roleDefinitionId = value.roleDefinitionId;
      this._scope = value.scope;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // role_definition_id - computed: false, optional: true, required: false
  private _roleDefinitionId?: string; 
  public get roleDefinitionId() {
    return this.getStringAttribute('role_definition_id');
  }
  public set roleDefinitionId(value: string) {
    this._roleDefinitionId = value;
  }
  public resetRoleDefinitionId() {
    this._roleDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDefinitionIdInput() {
    return this._roleDefinitionId;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignmentsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignments[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignmentsOutputReference {
    return new AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadata {
  /**
  * Annotations for the k8s service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#annotations AksClusterV3#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels for the k8s service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#labels AksClusterV3#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name for the k8s service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Namespace for the k8s service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#namespace AksClusterV3#namespace}
  */
  readonly namespace?: string;
}

export function aksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadataToTerraform(struct?: AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadataOutputReference | AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function aksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadataToHclTerraform(struct?: AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadataOutputReference | AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccounts {
  /**
  * Whether the controller should create service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#create_account AksClusterV3#create_account}
  */
  readonly createAccount?: boolean | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#metadata AksClusterV3#metadata}
  */
  readonly metadata?: AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadata;
}

export function aksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsToTerraform(struct?: AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_account: cdktf.booleanToTerraform(struct!.createAccount),
    metadata: aksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadataToTerraform(struct!.metadata),
  }
}


export function aksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsToHclTerraform(struct?: AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_account: {
      value: cdktf.booleanToHclTerraform(struct!.createAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metadata: {
      value: aksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAccount = this._createAccount;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createAccount = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createAccount = value.createAccount;
      this._metadata.internalValue = value.metadata;
    }
  }

  // create_account - computed: false, optional: true, required: false
  private _createAccount?: boolean | cdktf.IResolvable; 
  public get createAccount() {
    return this.getBooleanAttribute('create_account');
  }
  public set createAccount(value: boolean | cdktf.IResolvable) {
    this._createAccount = value;
  }
  public resetCreateAccount() {
    this._createAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAccountInput() {
    return this._createAccount;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccounts[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsOutputReference {
    return new AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpecWorkloadIdentities {
  /**
  * Whether the controller should create the identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#create_identity AksClusterV3#create_identity}
  */
  readonly createIdentity?: boolean | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#metadata AksClusterV3#metadata}
  */
  readonly metadata?: AksClusterV3SpecConfigSpecWorkloadIdentitiesMetadata;
  /**
  * role_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#role_assignments AksClusterV3#role_assignments}
  */
  readonly roleAssignments?: AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignments[] | cdktf.IResolvable;
  /**
  * service_accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#service_accounts AksClusterV3#service_accounts}
  */
  readonly serviceAccounts?: AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccounts[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecWorkloadIdentitiesToTerraform(struct?: AksClusterV3SpecConfigSpecWorkloadIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_identity: cdktf.booleanToTerraform(struct!.createIdentity),
    metadata: aksClusterV3SpecConfigSpecWorkloadIdentitiesMetadataToTerraform(struct!.metadata),
    role_assignments: cdktf.listMapper(aksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignmentsToTerraform, true)(struct!.roleAssignments),
    service_accounts: cdktf.listMapper(aksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsToTerraform, true)(struct!.serviceAccounts),
  }
}


export function aksClusterV3SpecConfigSpecWorkloadIdentitiesToHclTerraform(struct?: AksClusterV3SpecConfigSpecWorkloadIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_identity: {
      value: cdktf.booleanToHclTerraform(struct!.createIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metadata: {
      value: aksClusterV3SpecConfigSpecWorkloadIdentitiesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecWorkloadIdentitiesMetadataList",
    },
    role_assignments: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignmentsToHclTerraform, true)(struct!.roleAssignments),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignmentsList",
    },
    service_accounts: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsToHclTerraform, true)(struct!.serviceAccounts),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecWorkloadIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigSpecWorkloadIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.createIdentity = this._createIdentity;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._roleAssignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleAssignments = this._roleAssignments?.internalValue;
    }
    if (this._serviceAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccounts = this._serviceAccounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpecWorkloadIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createIdentity = undefined;
      this._metadata.internalValue = undefined;
      this._roleAssignments.internalValue = undefined;
      this._serviceAccounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createIdentity = value.createIdentity;
      this._metadata.internalValue = value.metadata;
      this._roleAssignments.internalValue = value.roleAssignments;
      this._serviceAccounts.internalValue = value.serviceAccounts;
    }
  }

  // create_identity - computed: false, optional: true, required: false
  private _createIdentity?: boolean | cdktf.IResolvable; 
  public get createIdentity() {
    return this.getBooleanAttribute('create_identity');
  }
  public set createIdentity(value: boolean | cdktf.IResolvable) {
    this._createIdentity = value;
  }
  public resetCreateIdentity() {
    this._createIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIdentityInput() {
    return this._createIdentity;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AksClusterV3SpecConfigSpecWorkloadIdentitiesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AksClusterV3SpecConfigSpecWorkloadIdentitiesMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // role_assignments - computed: false, optional: true, required: false
  private _roleAssignments = new AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignmentsList(this, "role_assignments", false);
  public get roleAssignments() {
    return this._roleAssignments;
  }
  public putRoleAssignments(value: AksClusterV3SpecConfigSpecWorkloadIdentitiesRoleAssignments[] | cdktf.IResolvable) {
    this._roleAssignments.internalValue = value;
  }
  public resetRoleAssignments() {
    this._roleAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleAssignmentsInput() {
    return this._roleAssignments.internalValue;
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts = new AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccountsList(this, "service_accounts", false);
  public get serviceAccounts() {
    return this._serviceAccounts;
  }
  public putServiceAccounts(value: AksClusterV3SpecConfigSpecWorkloadIdentitiesServiceAccounts[] | cdktf.IResolvable) {
    this._serviceAccounts.internalValue = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts.internalValue;
  }
}

export class AksClusterV3SpecConfigSpecWorkloadIdentitiesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigSpecWorkloadIdentities[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigSpecWorkloadIdentitiesOutputReference {
    return new AksClusterV3SpecConfigSpecWorkloadIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#resource_group_name AksClusterV3#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#subscription_id AksClusterV3#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * maintenance_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#maintenance_configurations AksClusterV3#maintenance_configurations}
  */
  readonly maintenanceConfigurations?: AksClusterV3SpecConfigSpecMaintenanceConfigurations[] | cdktf.IResolvable;
  /**
  * managed_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#managed_cluster AksClusterV3#managed_cluster}
  */
  readonly managedCluster?: AksClusterV3SpecConfigSpecManagedCluster;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#node_pools AksClusterV3#node_pools}
  */
  readonly nodePools?: AksClusterV3SpecConfigSpecNodePools[] | cdktf.IResolvable;
  /**
  * workload_identities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#workload_identities AksClusterV3#workload_identities}
  */
  readonly workloadIdentities?: AksClusterV3SpecConfigSpecWorkloadIdentities[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigSpecToTerraform(struct?: AksClusterV3SpecConfigSpecOutputReference | AksClusterV3SpecConfigSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    maintenance_configurations: cdktf.listMapper(aksClusterV3SpecConfigSpecMaintenanceConfigurationsToTerraform, true)(struct!.maintenanceConfigurations),
    managed_cluster: aksClusterV3SpecConfigSpecManagedClusterToTerraform(struct!.managedCluster),
    node_pools: cdktf.listMapper(aksClusterV3SpecConfigSpecNodePoolsToTerraform, true)(struct!.nodePools),
    workload_identities: cdktf.listMapper(aksClusterV3SpecConfigSpecWorkloadIdentitiesToTerraform, true)(struct!.workloadIdentities),
  }
}


export function aksClusterV3SpecConfigSpecToHclTerraform(struct?: AksClusterV3SpecConfigSpecOutputReference | AksClusterV3SpecConfigSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_configurations: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecMaintenanceConfigurationsToHclTerraform, true)(struct!.maintenanceConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecMaintenanceConfigurationsList",
    },
    managed_cluster: {
      value: aksClusterV3SpecConfigSpecManagedClusterToHclTerraform(struct!.managedCluster),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecManagedClusterList",
    },
    node_pools: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecNodePoolsToHclTerraform, true)(struct!.nodePools),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecNodePoolsList",
    },
    workload_identities: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigSpecWorkloadIdentitiesToHclTerraform, true)(struct!.workloadIdentities),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecWorkloadIdentitiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._maintenanceConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceConfigurations = this._maintenanceConfigurations?.internalValue;
    }
    if (this._managedCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedCluster = this._managedCluster?.internalValue;
    }
    if (this._nodePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePools = this._nodePools?.internalValue;
    }
    if (this._workloadIdentities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadIdentities = this._workloadIdentities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceGroupName = undefined;
      this._subscriptionId = undefined;
      this._maintenanceConfigurations.internalValue = undefined;
      this._managedCluster.internalValue = undefined;
      this._nodePools.internalValue = undefined;
      this._workloadIdentities.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceGroupName = value.resourceGroupName;
      this._subscriptionId = value.subscriptionId;
      this._maintenanceConfigurations.internalValue = value.maintenanceConfigurations;
      this._managedCluster.internalValue = value.managedCluster;
      this._nodePools.internalValue = value.nodePools;
      this._workloadIdentities.internalValue = value.workloadIdentities;
    }
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

  // subscription_id - computed: false, optional: true, required: false
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

  // maintenance_configurations - computed: false, optional: true, required: false
  private _maintenanceConfigurations = new AksClusterV3SpecConfigSpecMaintenanceConfigurationsList(this, "maintenance_configurations", false);
  public get maintenanceConfigurations() {
    return this._maintenanceConfigurations;
  }
  public putMaintenanceConfigurations(value: AksClusterV3SpecConfigSpecMaintenanceConfigurations[] | cdktf.IResolvable) {
    this._maintenanceConfigurations.internalValue = value;
  }
  public resetMaintenanceConfigurations() {
    this._maintenanceConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigurationsInput() {
    return this._maintenanceConfigurations.internalValue;
  }

  // managed_cluster - computed: false, optional: true, required: false
  private _managedCluster = new AksClusterV3SpecConfigSpecManagedClusterOutputReference(this, "managed_cluster");
  public get managedCluster() {
    return this._managedCluster;
  }
  public putManagedCluster(value: AksClusterV3SpecConfigSpecManagedCluster) {
    this._managedCluster.internalValue = value;
  }
  public resetManagedCluster() {
    this._managedCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterInput() {
    return this._managedCluster.internalValue;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new AksClusterV3SpecConfigSpecNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: AksClusterV3SpecConfigSpecNodePools[] | cdktf.IResolvable) {
    this._nodePools.internalValue = value;
  }
  public resetNodePools() {
    this._nodePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }

  // workload_identities - computed: false, optional: true, required: false
  private _workloadIdentities = new AksClusterV3SpecConfigSpecWorkloadIdentitiesList(this, "workload_identities", false);
  public get workloadIdentities() {
    return this._workloadIdentities;
  }
  public putWorkloadIdentities(value: AksClusterV3SpecConfigSpecWorkloadIdentities[] | cdktf.IResolvable) {
    this._workloadIdentities.internalValue = value;
  }
  public resetWorkloadIdentities() {
    this._workloadIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentitiesInput() {
    return this._workloadIdentities.internalValue;
  }
}
export interface AksClusterV3SpecConfigTinkerbellDatacenterConfigMetaData {
  /**
  * Tinkerbell datacenter configuration's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigTinkerbellDatacenterConfigMetaDataToTerraform(struct?: AksClusterV3SpecConfigTinkerbellDatacenterConfigMetaDataOutputReference | AksClusterV3SpecConfigTinkerbellDatacenterConfigMetaData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigTinkerbellDatacenterConfigMetaDataToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellDatacenterConfigMetaDataOutputReference | AksClusterV3SpecConfigTinkerbellDatacenterConfigMetaData): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellDatacenterConfigMetaDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigTinkerbellDatacenterConfigMetaData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellDatacenterConfigMetaData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface AksClusterV3SpecConfigTinkerbellDatacenterConfigSpec {
  /**
  * Optional field to replace the HookOS image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#hook_images_url_path AksClusterV3#hook_images_url_path}
  */
  readonly hookImagesUrlPath?: string;
  /**
  * Optional field to replace the default Bottlerocket operating system. EKS Anywhere can only auto-import Bottlerocket. In order to use Ubuntu or Redhat, self-hosting is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#os_image_url AksClusterV3#os_image_url}
  */
  readonly osImageUrl?: string;
  /**
  * Required field to identify the IP address of the Tinkerbell service. This IP address must be a unique IP in the network range that does not conflict with other IPs. Once the Tinkerbell services move from the Admin machine to run on the target cluster, this IP address makes it possible for the stack to be used for future provisioning needs. When separate management and workload clusters are supported in Bare Metal, the IP address becomes a necessity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#tinkerbell_ip AksClusterV3#tinkerbell_ip}
  */
  readonly tinkerbellIp?: string;
}

export function aksClusterV3SpecConfigTinkerbellDatacenterConfigSpecToTerraform(struct?: AksClusterV3SpecConfigTinkerbellDatacenterConfigSpecOutputReference | AksClusterV3SpecConfigTinkerbellDatacenterConfigSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hook_images_url_path: cdktf.stringToTerraform(struct!.hookImagesUrlPath),
    os_image_url: cdktf.stringToTerraform(struct!.osImageUrl),
    tinkerbell_ip: cdktf.stringToTerraform(struct!.tinkerbellIp),
  }
}


export function aksClusterV3SpecConfigTinkerbellDatacenterConfigSpecToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellDatacenterConfigSpecOutputReference | AksClusterV3SpecConfigTinkerbellDatacenterConfigSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hook_images_url_path: {
      value: cdktf.stringToHclTerraform(struct!.hookImagesUrlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_image_url: {
      value: cdktf.stringToHclTerraform(struct!.osImageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tinkerbell_ip: {
      value: cdktf.stringToHclTerraform(struct!.tinkerbellIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellDatacenterConfigSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigTinkerbellDatacenterConfigSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hookImagesUrlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hookImagesUrlPath = this._hookImagesUrlPath;
    }
    if (this._osImageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.osImageUrl = this._osImageUrl;
    }
    if (this._tinkerbellIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tinkerbellIp = this._tinkerbellIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellDatacenterConfigSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hookImagesUrlPath = undefined;
      this._osImageUrl = undefined;
      this._tinkerbellIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hookImagesUrlPath = value.hookImagesUrlPath;
      this._osImageUrl = value.osImageUrl;
      this._tinkerbellIp = value.tinkerbellIp;
    }
  }

  // hook_images_url_path - computed: false, optional: true, required: false
  private _hookImagesUrlPath?: string; 
  public get hookImagesUrlPath() {
    return this.getStringAttribute('hook_images_url_path');
  }
  public set hookImagesUrlPath(value: string) {
    this._hookImagesUrlPath = value;
  }
  public resetHookImagesUrlPath() {
    this._hookImagesUrlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookImagesUrlPathInput() {
    return this._hookImagesUrlPath;
  }

  // os_image_url - computed: false, optional: true, required: false
  private _osImageUrl?: string; 
  public get osImageUrl() {
    return this.getStringAttribute('os_image_url');
  }
  public set osImageUrl(value: string) {
    this._osImageUrl = value;
  }
  public resetOsImageUrl() {
    this._osImageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageUrlInput() {
    return this._osImageUrl;
  }

  // tinkerbell_ip - computed: false, optional: true, required: false
  private _tinkerbellIp?: string; 
  public get tinkerbellIp() {
    return this.getStringAttribute('tinkerbell_ip');
  }
  public set tinkerbellIp(value: string) {
    this._tinkerbellIp = value;
  }
  public resetTinkerbellIp() {
    this._tinkerbellIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tinkerbellIpInput() {
    return this._tinkerbellIp;
  }
}
export interface AksClusterV3SpecConfigTinkerbellDatacenterConfig {
  /**
  * APIVersion of TinkerbellDatacenterConfig resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#api_version AksClusterV3#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kind AksClusterV3#kind}
  */
  readonly kind?: string;
  /**
  * meta_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#meta_data AksClusterV3#meta_data}
  */
  readonly metaData?: AksClusterV3SpecConfigTinkerbellDatacenterConfigMetaData;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#spec AksClusterV3#spec}
  */
  readonly spec?: AksClusterV3SpecConfigTinkerbellDatacenterConfigSpec;
}

export function aksClusterV3SpecConfigTinkerbellDatacenterConfigToTerraform(struct?: AksClusterV3SpecConfigTinkerbellDatacenterConfigOutputReference | AksClusterV3SpecConfigTinkerbellDatacenterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    meta_data: aksClusterV3SpecConfigTinkerbellDatacenterConfigMetaDataToTerraform(struct!.metaData),
    spec: aksClusterV3SpecConfigTinkerbellDatacenterConfigSpecToTerraform(struct!.spec),
  }
}


export function aksClusterV3SpecConfigTinkerbellDatacenterConfigToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellDatacenterConfigOutputReference | AksClusterV3SpecConfigTinkerbellDatacenterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meta_data: {
      value: aksClusterV3SpecConfigTinkerbellDatacenterConfigMetaDataToHclTerraform(struct!.metaData),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellDatacenterConfigMetaDataList",
    },
    spec: {
      value: aksClusterV3SpecConfigTinkerbellDatacenterConfigSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellDatacenterConfigSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellDatacenterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigTinkerbellDatacenterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metaData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaData = this._metaData?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellDatacenterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._metaData.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._metaData.internalValue = value.metaData;
      this._spec.internalValue = value.spec;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // meta_data - computed: false, optional: true, required: false
  private _metaData = new AksClusterV3SpecConfigTinkerbellDatacenterConfigMetaDataOutputReference(this, "meta_data");
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: AksClusterV3SpecConfigTinkerbellDatacenterConfigMetaData) {
    this._metaData.internalValue = value;
  }
  public resetMetaData() {
    this._metaData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new AksClusterV3SpecConfigTinkerbellDatacenterConfigSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AksClusterV3SpecConfigTinkerbellDatacenterConfigSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface AksClusterV3SpecConfigTinkerbellHardwareConfig {
  /**
  * The IP address assigned to the BMC interface on the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#bmc_ip AksClusterV3#bmc_ip}
  */
  readonly bmcIp?: string;
  /**
  * The password associated with the bmc_username assigned to the BMC interface on the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#bmc_password AksClusterV3#bmc_password}
  */
  readonly bmcPassword?: string;
  /**
  * The username assigned to the BMC interface on the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#bmc_user_name AksClusterV3#bmc_user_name}
  */
  readonly bmcUserName?: string;
  /**
  * The device name of the disk on which the operating system will be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#disk AksClusterV3#disk}
  */
  readonly disk?: string;
  /**
  * IP address of the interface that provides access (the gateway) to the Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#gateway AksClusterV3#gateway}
  */
  readonly gateway?: string;
  /**
  * The hostname assigned to the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#hostname AksClusterV3#hostname}
  */
  readonly hostname?: string;
  /**
  * The IP address providing access to the host computer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#ip_address AksClusterV3#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The optional labels field can consist of a key/value pair to use in conjunction with the hardwareSelector field when you set up your Bare Metal configuration. The key/value pair is connected with an equal (=) sign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#labels AksClusterV3#labels}
  */
  readonly labels?: string;
  /**
  * The MAC address of the network interface card (NIC) that provides access to the host computer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#mac AksClusterV3#mac}
  */
  readonly mac?: string;
  /**
  * The IP address of the server that you want to provide DNS service to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#nameservers AksClusterV3#nameservers}
  */
  readonly nameservers?: string;
  /**
  * The netmask associated with the ip_address value. In the example above, a /23 subnet mask is used, allowing you to use up to 510 IP addresses in that range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#netmask AksClusterV3#netmask}
  */
  readonly netmask?: string;
}

export function aksClusterV3SpecConfigTinkerbellHardwareConfigToTerraform(struct?: AksClusterV3SpecConfigTinkerbellHardwareConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bmc_ip: cdktf.stringToTerraform(struct!.bmcIp),
    bmc_password: cdktf.stringToTerraform(struct!.bmcPassword),
    bmc_user_name: cdktf.stringToTerraform(struct!.bmcUserName),
    disk: cdktf.stringToTerraform(struct!.disk),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    labels: cdktf.stringToTerraform(struct!.labels),
    mac: cdktf.stringToTerraform(struct!.mac),
    nameservers: cdktf.stringToTerraform(struct!.nameservers),
    netmask: cdktf.stringToTerraform(struct!.netmask),
  }
}


export function aksClusterV3SpecConfigTinkerbellHardwareConfigToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellHardwareConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bmc_ip: {
      value: cdktf.stringToHclTerraform(struct!.bmcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bmc_password: {
      value: cdktf.stringToHclTerraform(struct!.bmcPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bmc_user_name: {
      value: cdktf.stringToHclTerraform(struct!.bmcUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk: {
      value: cdktf.stringToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.stringToHclTerraform(struct!.labels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nameservers: {
      value: cdktf.stringToHclTerraform(struct!.nameservers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellHardwareConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigTinkerbellHardwareConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bmcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmcIp = this._bmcIp;
    }
    if (this._bmcPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmcPassword = this._bmcPassword;
    }
    if (this._bmcUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmcUserName = this._bmcUserName;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellHardwareConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bmcIp = undefined;
      this._bmcPassword = undefined;
      this._bmcUserName = undefined;
      this._disk = undefined;
      this._gateway = undefined;
      this._hostname = undefined;
      this._ipAddress = undefined;
      this._labels = undefined;
      this._mac = undefined;
      this._nameservers = undefined;
      this._netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bmcIp = value.bmcIp;
      this._bmcPassword = value.bmcPassword;
      this._bmcUserName = value.bmcUserName;
      this._disk = value.disk;
      this._gateway = value.gateway;
      this._hostname = value.hostname;
      this._ipAddress = value.ipAddress;
      this._labels = value.labels;
      this._mac = value.mac;
      this._nameservers = value.nameservers;
      this._netmask = value.netmask;
    }
  }

  // bmc_ip - computed: false, optional: true, required: false
  private _bmcIp?: string; 
  public get bmcIp() {
    return this.getStringAttribute('bmc_ip');
  }
  public set bmcIp(value: string) {
    this._bmcIp = value;
  }
  public resetBmcIp() {
    this._bmcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmcIpInput() {
    return this._bmcIp;
  }

  // bmc_password - computed: false, optional: true, required: false
  private _bmcPassword?: string; 
  public get bmcPassword() {
    return this.getStringAttribute('bmc_password');
  }
  public set bmcPassword(value: string) {
    this._bmcPassword = value;
  }
  public resetBmcPassword() {
    this._bmcPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmcPasswordInput() {
    return this._bmcPassword;
  }

  // bmc_user_name - computed: false, optional: true, required: false
  private _bmcUserName?: string; 
  public get bmcUserName() {
    return this.getStringAttribute('bmc_user_name');
  }
  public set bmcUserName(value: string) {
    this._bmcUserName = value;
  }
  public resetBmcUserName() {
    this._bmcUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmcUserNameInput() {
    return this._bmcUserName;
  }

  // disk - computed: false, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string; 
  public get nameservers() {
    return this.getStringAttribute('nameservers');
  }
  public set nameservers(value: string) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }
}

export class AksClusterV3SpecConfigTinkerbellHardwareConfigList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigTinkerbellHardwareConfig[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigTinkerbellHardwareConfigOutputReference {
    return new AksClusterV3SpecConfigTinkerbellHardwareConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigTinkerbellMachineConfigMetaData {
  /**
  * Tinkerbell machine configuration's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigTinkerbellMachineConfigMetaDataToTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigMetaDataOutputReference | AksClusterV3SpecConfigTinkerbellMachineConfigMetaData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigTinkerbellMachineConfigMetaDataToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigMetaDataOutputReference | AksClusterV3SpecConfigTinkerbellMachineConfigMetaData): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellMachineConfigMetaDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigTinkerbellMachineConfigMetaData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellMachineConfigMetaData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfiguration {
  /**
  * Boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#boot AksClusterV3#boot}
  */
  readonly boot?: string;
  /**
  * Kernel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kernel AksClusterV3#kernel}
  */
  readonly kernel?: string;
  /**
  * Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kubernetes AksClusterV3#kubernetes}
  */
  readonly kubernetes?: string;
}

export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfigurationToTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfigurationOutputReference | AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot: cdktf.stringToTerraform(struct!.boot),
    kernel: cdktf.stringToTerraform(struct!.kernel),
    kubernetes: cdktf.stringToTerraform(struct!.kubernetes),
  }
}


export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfigurationToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfigurationOutputReference | AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot: {
      value: cdktf.stringToHclTerraform(struct!.boot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kernel: {
      value: cdktf.stringToHclTerraform(struct!.kernel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes: {
      value: cdktf.stringToHclTerraform(struct!.kubernetes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boot !== undefined) {
      hasAnyValues = true;
      internalValueResult.boot = this._boot;
    }
    if (this._kernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernel = this._kernel;
    }
    if (this._kubernetes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._boot = undefined;
      this._kernel = undefined;
      this._kubernetes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._boot = value.boot;
      this._kernel = value.kernel;
      this._kubernetes = value.kubernetes;
    }
  }

  // boot - computed: false, optional: true, required: false
  private _boot?: string; 
  public get boot() {
    return this.getStringAttribute('boot');
  }
  public set boot(value: string) {
    this._boot = value;
  }
  public resetBoot() {
    this._boot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootInput() {
    return this._boot;
  }

  // kernel - computed: false, optional: true, required: false
  private _kernel?: string; 
  public get kernel() {
    return this.getStringAttribute('kernel');
  }
  public set kernel(value: string) {
    this._kernel = value;
  }
  public resetKernel() {
    this._kernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelInput() {
    return this._kernel;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes?: string; 
  public get kubernetes() {
    return this.getStringAttribute('kubernetes');
  }
  public set kubernetes(value: string) {
    this._kubernetes = value;
  }
  public resetKubernetes() {
    this._kubernetes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes;
  }
}
export interface AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundles {
  /**
  * Refers to the content of cert key in pem format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#data AksClusterV3#data}
  */
  readonly data?: string;
  /**
  * Refers to the name of cert bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundlesToTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundlesToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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

export class AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._name = value.name;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundlesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundles[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundlesOutputReference {
    return new AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfiguration {
  /**
  * Servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#servers AksClusterV3#servers}
  */
  readonly servers?: string[];
}

export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfigurationToTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfigurationOutputReference | AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
  }
}


export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfigurationToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfigurationOutputReference | AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._servers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servers = value.servers;
    }
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}
export interface AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfiguration {
  /**
  * bottlerocket_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#bottlerocket_configuration AksClusterV3#bottlerocket_configuration}
  */
  readonly bottlerocketConfiguration?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfiguration;
  /**
  * cert_bundles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#cert_bundles AksClusterV3#cert_bundles}
  */
  readonly certBundles?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundles[] | cdktf.IResolvable;
  /**
  * ntp_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#ntp_configuration AksClusterV3#ntp_configuration}
  */
  readonly ntpConfiguration?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfiguration;
}

export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationToTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationOutputReference | AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottlerocket_configuration: aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfigurationToTerraform(struct!.bottlerocketConfiguration),
    cert_bundles: cdktf.listMapper(aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundlesToTerraform, true)(struct!.certBundles),
    ntp_configuration: aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfigurationToTerraform(struct!.ntpConfiguration),
  }
}


export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationOutputReference | AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bottlerocket_configuration: {
      value: aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfigurationToHclTerraform(struct!.bottlerocketConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfigurationList",
    },
    cert_bundles: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundlesToHclTerraform, true)(struct!.certBundles),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundlesList",
    },
    ntp_configuration: {
      value: aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfigurationToHclTerraform(struct!.ntpConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottlerocketConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottlerocketConfiguration = this._bottlerocketConfiguration?.internalValue;
    }
    if (this._certBundles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certBundles = this._certBundles?.internalValue;
    }
    if (this._ntpConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpConfiguration = this._ntpConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bottlerocketConfiguration.internalValue = undefined;
      this._certBundles.internalValue = undefined;
      this._ntpConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bottlerocketConfiguration.internalValue = value.bottlerocketConfiguration;
      this._certBundles.internalValue = value.certBundles;
      this._ntpConfiguration.internalValue = value.ntpConfiguration;
    }
  }

  // bottlerocket_configuration - computed: false, optional: true, required: false
  private _bottlerocketConfiguration = new AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfigurationOutputReference(this, "bottlerocket_configuration");
  public get bottlerocketConfiguration() {
    return this._bottlerocketConfiguration;
  }
  public putBottlerocketConfiguration(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationBottlerocketConfiguration) {
    this._bottlerocketConfiguration.internalValue = value;
  }
  public resetBottlerocketConfiguration() {
    this._bottlerocketConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottlerocketConfigurationInput() {
    return this._bottlerocketConfiguration.internalValue;
  }

  // cert_bundles - computed: false, optional: true, required: false
  private _certBundles = new AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundlesList(this, "cert_bundles", false);
  public get certBundles() {
    return this._certBundles;
  }
  public putCertBundles(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationCertBundles[] | cdktf.IResolvable) {
    this._certBundles.internalValue = value;
  }
  public resetCertBundles() {
    this._certBundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certBundlesInput() {
    return this._certBundles.internalValue;
  }

  // ntp_configuration - computed: false, optional: true, required: false
  private _ntpConfiguration = new AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfigurationOutputReference(this, "ntp_configuration");
  public get ntpConfiguration() {
    return this._ntpConfiguration;
  }
  public putNtpConfiguration(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationNtpConfiguration) {
    this._ntpConfiguration.internalValue = value;
  }
  public resetNtpConfiguration() {
    this._ntpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpConfigurationInput() {
    return this._ntpConfiguration.internalValue;
  }
}
export interface AksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRef {
  /**
  * Refers to the kind of template resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kind AksClusterV3#kind}
  */
  readonly kind?: string;
  /**
  * Refers to the name of template resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRefToTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRefOutputReference | AksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRefToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRefOutputReference | AksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class AksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsers {
  /**
  * Refers to the name of user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Public key required to ssh into the admin/cp/dp nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#ssh_authorized_keys AksClusterV3#ssh_authorized_keys}
  */
  readonly sshAuthorizedKeys?: string[];
}

export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecUsersToTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ssh_authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshAuthorizedKeys),
  }
}


export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecUsersToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsers | cdktf.IResolvable): any {
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
    ssh_authorized_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshAuthorizedKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sshAuthorizedKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAuthorizedKeys = this._sshAuthorizedKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sshAuthorizedKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sshAuthorizedKeys = value.sshAuthorizedKeys;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ssh_authorized_keys - computed: false, optional: true, required: false
  private _sshAuthorizedKeys?: string[]; 
  public get sshAuthorizedKeys() {
    return this.getListAttribute('ssh_authorized_keys');
  }
  public set sshAuthorizedKeys(value: string[]) {
    this._sshAuthorizedKeys = value;
  }
  public resetSshAuthorizedKeys() {
    this._sshAuthorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthorizedKeysInput() {
    return this._sshAuthorizedKeys;
  }
}

export class AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsersList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsers[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsersOutputReference {
    return new AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigTinkerbellMachineConfigSpec {
  /**
  * Use fields under hardwareSelector to add key/value pair labels to match particular machines that you identified in tinkerbell machine configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#hardware_selector AksClusterV3#hardware_selector}
  */
  readonly hardwareSelector?: { [key: string]: string };
  /**
  * Operating system on the machine. For example, bottlerocket or ubuntu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#os_family AksClusterV3#os_family}
  */
  readonly osFamily?: string;
  /**
  * host_os_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#host_os_configuration AksClusterV3#host_os_configuration}
  */
  readonly hostOsConfiguration?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfiguration;
  /**
  * template_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#template_ref AksClusterV3#template_ref}
  */
  readonly templateRef?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRef;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#users AksClusterV3#users}
  */
  readonly users?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsers[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecToTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecOutputReference | AksClusterV3SpecConfigTinkerbellMachineConfigSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hardware_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hardwareSelector),
    os_family: cdktf.stringToTerraform(struct!.osFamily),
    host_os_configuration: aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationToTerraform(struct!.hostOsConfiguration),
    template_ref: aksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRefToTerraform(struct!.templateRef),
    users: cdktf.listMapper(aksClusterV3SpecConfigTinkerbellMachineConfigSpecUsersToTerraform, true)(struct!.users),
  }
}


export function aksClusterV3SpecConfigTinkerbellMachineConfigSpecToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfigSpecOutputReference | AksClusterV3SpecConfigTinkerbellMachineConfigSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hardware_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hardwareSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    os_family: {
      value: cdktf.stringToHclTerraform(struct!.osFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_os_configuration: {
      value: aksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationToHclTerraform(struct!.hostOsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationList",
    },
    template_ref: {
      value: aksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRefToHclTerraform(struct!.templateRef),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRefList",
    },
    users: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigTinkerbellMachineConfigSpecUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellMachineConfigSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigTinkerbellMachineConfigSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardwareSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareSelector = this._hardwareSelector;
    }
    if (this._osFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.osFamily = this._osFamily;
    }
    if (this._hostOsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostOsConfiguration = this._hostOsConfiguration?.internalValue;
    }
    if (this._templateRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRef = this._templateRef?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hardwareSelector = undefined;
      this._osFamily = undefined;
      this._hostOsConfiguration.internalValue = undefined;
      this._templateRef.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hardwareSelector = value.hardwareSelector;
      this._osFamily = value.osFamily;
      this._hostOsConfiguration.internalValue = value.hostOsConfiguration;
      this._templateRef.internalValue = value.templateRef;
      this._users.internalValue = value.users;
    }
  }

  // hardware_selector - computed: false, optional: true, required: false
  private _hardwareSelector?: { [key: string]: string }; 
  public get hardwareSelector() {
    return this.getStringMapAttribute('hardware_selector');
  }
  public set hardwareSelector(value: { [key: string]: string }) {
    this._hardwareSelector = value;
  }
  public resetHardwareSelector() {
    this._hardwareSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareSelectorInput() {
    return this._hardwareSelector;
  }

  // os_family - computed: false, optional: true, required: false
  private _osFamily?: string; 
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }
  public set osFamily(value: string) {
    this._osFamily = value;
  }
  public resetOsFamily() {
    this._osFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // host_os_configuration - computed: false, optional: true, required: false
  private _hostOsConfiguration = new AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfigurationOutputReference(this, "host_os_configuration");
  public get hostOsConfiguration() {
    return this._hostOsConfiguration;
  }
  public putHostOsConfiguration(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpecHostOsConfiguration) {
    this._hostOsConfiguration.internalValue = value;
  }
  public resetHostOsConfiguration() {
    this._hostOsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostOsConfigurationInput() {
    return this._hostOsConfiguration.internalValue;
  }

  // template_ref - computed: false, optional: true, required: false
  private _templateRef = new AksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRefOutputReference(this, "template_ref");
  public get templateRef() {
    return this._templateRef;
  }
  public putTemplateRef(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpecTemplateRef) {
    this._templateRef.internalValue = value;
  }
  public resetTemplateRef() {
    this._templateRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefInput() {
    return this._templateRef.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpecUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface AksClusterV3SpecConfigTinkerbellMachineConfig {
  /**
  * APIVersion of TinkerbellMachineConfig resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#api_version AksClusterV3#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kind AksClusterV3#kind}
  */
  readonly kind?: string;
  /**
  * meta_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#meta_data AksClusterV3#meta_data}
  */
  readonly metaData?: AksClusterV3SpecConfigTinkerbellMachineConfigMetaData;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#spec AksClusterV3#spec}
  */
  readonly spec?: AksClusterV3SpecConfigTinkerbellMachineConfigSpec;
}

export function aksClusterV3SpecConfigTinkerbellMachineConfigToTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    meta_data: aksClusterV3SpecConfigTinkerbellMachineConfigMetaDataToTerraform(struct!.metaData),
    spec: aksClusterV3SpecConfigTinkerbellMachineConfigSpecToTerraform(struct!.spec),
  }
}


export function aksClusterV3SpecConfigTinkerbellMachineConfigToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meta_data: {
      value: aksClusterV3SpecConfigTinkerbellMachineConfigMetaDataToHclTerraform(struct!.metaData),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellMachineConfigMetaDataList",
    },
    spec: {
      value: aksClusterV3SpecConfigTinkerbellMachineConfigSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellMachineConfigSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellMachineConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigTinkerbellMachineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metaData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaData = this._metaData?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellMachineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._metaData.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._metaData.internalValue = value.metaData;
      this._spec.internalValue = value.spec;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // meta_data - computed: false, optional: true, required: false
  private _metaData = new AksClusterV3SpecConfigTinkerbellMachineConfigMetaDataOutputReference(this, "meta_data");
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: AksClusterV3SpecConfigTinkerbellMachineConfigMetaData) {
    this._metaData.internalValue = value;
  }
  public resetMetaData() {
    this._metaData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new AksClusterV3SpecConfigTinkerbellMachineConfigSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AksClusterV3SpecConfigTinkerbellMachineConfigSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class AksClusterV3SpecConfigTinkerbellMachineConfigList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigTinkerbellMachineConfig[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigTinkerbellMachineConfigOutputReference {
    return new AksClusterV3SpecConfigTinkerbellMachineConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigTinkerbellTemplateConfigMetaData {
  /**
  * tinkerbell template configuration's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigTinkerbellTemplateConfigMetaDataToTerraform(struct?: AksClusterV3SpecConfigTinkerbellTemplateConfigMetaDataOutputReference | AksClusterV3SpecConfigTinkerbellTemplateConfigMetaData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigTinkerbellTemplateConfigMetaDataToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellTemplateConfigMetaDataOutputReference | AksClusterV3SpecConfigTinkerbellTemplateConfigMetaData): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellTemplateConfigMetaDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigTinkerbellTemplateConfigMetaData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellTemplateConfigMetaData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface AksClusterV3SpecConfigTinkerbellTemplateConfig {
  /**
  * APIVersion of TinkerbellTemplateConfig resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#api_version AksClusterV3#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kind AksClusterV3#kind}
  */
  readonly kind?: string;
  /**
  * Refer https://anywhere.eks.amazonaws.com/docs/getting-started/baremetal/bare-spec/#tinkerbelltemplateconfig-fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#spec AksClusterV3#spec}
  */
  readonly spec?: string;
  /**
  * meta_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#meta_data AksClusterV3#meta_data}
  */
  readonly metaData?: AksClusterV3SpecConfigTinkerbellTemplateConfigMetaData;
}

export function aksClusterV3SpecConfigTinkerbellTemplateConfigToTerraform(struct?: AksClusterV3SpecConfigTinkerbellTemplateConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    spec: cdktf.stringToTerraform(struct!.spec),
    meta_data: aksClusterV3SpecConfigTinkerbellTemplateConfigMetaDataToTerraform(struct!.metaData),
  }
}


export function aksClusterV3SpecConfigTinkerbellTemplateConfigToHclTerraform(struct?: AksClusterV3SpecConfigTinkerbellTemplateConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meta_data: {
      value: aksClusterV3SpecConfigTinkerbellTemplateConfigMetaDataToHclTerraform(struct!.metaData),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellTemplateConfigMetaDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigTinkerbellTemplateConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigTinkerbellTemplateConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._metaData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaData = this._metaData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigTinkerbellTemplateConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._spec = undefined;
      this._metaData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._spec = value.spec;
      this._metaData.internalValue = value.metaData;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // meta_data - computed: false, optional: true, required: false
  private _metaData = new AksClusterV3SpecConfigTinkerbellTemplateConfigMetaDataOutputReference(this, "meta_data");
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: AksClusterV3SpecConfigTinkerbellTemplateConfigMetaData) {
    this._metaData.internalValue = value;
  }
  public resetMetaData() {
    this._metaData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }
}

export class AksClusterV3SpecConfigTinkerbellTemplateConfigList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigTinkerbellTemplateConfig[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigTinkerbellTemplateConfigOutputReference {
    return new AksClusterV3SpecConfigTinkerbellTemplateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigVsphereNetworkCni {
  /**
  * CNI name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * CNI version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#version AksClusterV3#version}
  */
  readonly version?: string;
}

export function aksClusterV3SpecConfigVsphereNetworkCniToTerraform(struct?: AksClusterV3SpecConfigVsphereNetworkCniOutputReference | AksClusterV3SpecConfigVsphereNetworkCni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function aksClusterV3SpecConfigVsphereNetworkCniToHclTerraform(struct?: AksClusterV3SpecConfigVsphereNetworkCniOutputReference | AksClusterV3SpecConfigVsphereNetworkCni): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigVsphereNetworkCniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigVsphereNetworkCni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigVsphereNetworkCni | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface AksClusterV3SpecConfigVsphereNetworkDevices {
  /**
  * Enable DHCP for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#dhcp AksClusterV3#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * The vSphere Network in the selected data center, to enable connectivity for the cluster nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#network_name AksClusterV3#network_name}
  */
  readonly networkName?: string;
}

export function aksClusterV3SpecConfigVsphereNetworkDevicesToTerraform(struct?: AksClusterV3SpecConfigVsphereNetworkDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    network_name: cdktf.stringToTerraform(struct!.networkName),
  }
}


export function aksClusterV3SpecConfigVsphereNetworkDevicesToHclTerraform(struct?: AksClusterV3SpecConfigVsphereNetworkDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigVsphereNetworkDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigVsphereNetworkDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigVsphereNetworkDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp = undefined;
      this._networkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp = value.dhcp;
      this._networkName = value.networkName;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // network_name - computed: false, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }
}

export class AksClusterV3SpecConfigVsphereNetworkDevicesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigVsphereNetworkDevices[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigVsphereNetworkDevicesOutputReference {
    return new AksClusterV3SpecConfigVsphereNetworkDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigVsphereNetwork {
  /**
  * The pod CIDR blocks for the cluster nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#pod_cidr_blocks AksClusterV3#pod_cidr_blocks}
  */
  readonly podCidrBlocks?: string[];
  /**
  * cni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#cni AksClusterV3#cni}
  */
  readonly cni?: AksClusterV3SpecConfigVsphereNetworkCni;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#devices AksClusterV3#devices}
  */
  readonly devices?: AksClusterV3SpecConfigVsphereNetworkDevices[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigVsphereNetworkToTerraform(struct?: AksClusterV3SpecConfigVsphereNetworkOutputReference | AksClusterV3SpecConfigVsphereNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podCidrBlocks),
    cni: aksClusterV3SpecConfigVsphereNetworkCniToTerraform(struct!.cni),
    devices: cdktf.listMapper(aksClusterV3SpecConfigVsphereNetworkDevicesToTerraform, true)(struct!.devices),
  }
}


export function aksClusterV3SpecConfigVsphereNetworkToHclTerraform(struct?: AksClusterV3SpecConfigVsphereNetworkOutputReference | AksClusterV3SpecConfigVsphereNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cni: {
      value: aksClusterV3SpecConfigVsphereNetworkCniToHclTerraform(struct!.cni),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigVsphereNetworkCniList",
    },
    devices: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigVsphereNetworkDevicesToHclTerraform, true)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigVsphereNetworkDevicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigVsphereNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigVsphereNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrBlocks = this._podCidrBlocks;
    }
    if (this._cni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cni = this._cni?.internalValue;
    }
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigVsphereNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podCidrBlocks = undefined;
      this._cni.internalValue = undefined;
      this._devices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podCidrBlocks = value.podCidrBlocks;
      this._cni.internalValue = value.cni;
      this._devices.internalValue = value.devices;
    }
  }

  // pod_cidr_blocks - computed: false, optional: true, required: false
  private _podCidrBlocks?: string[]; 
  public get podCidrBlocks() {
    return this.getListAttribute('pod_cidr_blocks');
  }
  public set podCidrBlocks(value: string[]) {
    this._podCidrBlocks = value;
  }
  public resetPodCidrBlocks() {
    this._podCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrBlocksInput() {
    return this._podCidrBlocks;
  }

  // cni - computed: false, optional: true, required: false
  private _cni = new AksClusterV3SpecConfigVsphereNetworkCniOutputReference(this, "cni");
  public get cni() {
    return this._cni;
  }
  public putCni(value: AksClusterV3SpecConfigVsphereNetworkCni) {
    this._cni.internalValue = value;
  }
  public resetCni() {
    this._cni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniInput() {
    return this._cni.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new AksClusterV3SpecConfigVsphereNetworkDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: AksClusterV3SpecConfigVsphereNetworkDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }
}
export interface AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecret {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#key AksClusterV3#key}
  */
  readonly key?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecretToTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecretOutputReference | AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecretToHclTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecretOutputReference | AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFrom {
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#secret AksClusterV3#secret}
  */
  readonly secret?: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecret;
}

export function aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromToTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromOutputReference | AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecretToTerraform(struct!.secret),
  }
}


export function aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromToHclTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromOutputReference | AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret.internalValue = value.secret;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFiles {
  /**
  * Append to the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#append AksClusterV3#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Content of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#content AksClusterV3#content}
  */
  readonly content?: string;
  /**
  * Encoding of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#encoding AksClusterV3#encoding}
  */
  readonly encoding?: string;
  /**
  * Owner of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#owner AksClusterV3#owner}
  */
  readonly owner?: string;
  /**
  * Path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#path AksClusterV3#path}
  */
  readonly path?: string;
  /**
  * Permissions of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#permissions AksClusterV3#permissions}
  */
  readonly permissions?: string;
  /**
  * content_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#content_from AksClusterV3#content_from}
  */
  readonly contentFrom?: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFrom;
}

export function aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesToTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    content: cdktf.stringToTerraform(struct!.content),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    owner: cdktf.stringToTerraform(struct!.owner),
    path: cdktf.stringToTerraform(struct!.path),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    content_from: aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromToTerraform(struct!.contentFrom),
  }
}


export function aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesToHclTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_from: {
      value: aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromToHclTerraform(struct!.contentFrom),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._contentFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFrom = this._contentFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._content = undefined;
      this._encoding = undefined;
      this._owner = undefined;
      this._path = undefined;
      this._permissions = undefined;
      this._contentFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._content = value.content;
      this._encoding = value.encoding;
      this._owner = value.owner;
      this._path = value.path;
      this._permissions = value.permissions;
      this._contentFrom.internalValue = value.contentFrom;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // content_from - computed: false, optional: true, required: false
  private _contentFrom = new AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFromOutputReference(this, "content_from");
  public get contentFrom() {
    return this._contentFrom;
  }
  public putContentFrom(value: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesContentFrom) {
    this._contentFrom.internalValue = value;
  }
  public resetContentFrom() {
    this._contentFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFromInput() {
    return this._contentFrom.internalValue;
  }
}

export class AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFiles[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesOutputReference {
    return new AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpec {
  /**
  * Prekubeadmcommands to run on the nodepools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#pre_kubeadm_commands AksClusterV3#pre_kubeadm_commands}
  */
  readonly preKubeadmCommands?: string[];
  /**
  * files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#files AksClusterV3#files}
  */
  readonly files?: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFiles[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecToTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecOutputReference | AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pre_kubeadm_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preKubeadmCommands),
    files: cdktf.listMapper(aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesToTerraform, true)(struct!.files),
  }
}


export function aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecToHclTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecOutputReference | AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pre_kubeadm_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preKubeadmCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    files: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesToHclTerraform, true)(struct!.files),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preKubeadmCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.preKubeadmCommands = this._preKubeadmCommands;
    }
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preKubeadmCommands = undefined;
      this._files.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preKubeadmCommands = value.preKubeadmCommands;
      this._files.internalValue = value.files;
    }
  }

  // pre_kubeadm_commands - computed: false, optional: true, required: false
  private _preKubeadmCommands?: string[]; 
  public get preKubeadmCommands() {
    return this.getListAttribute('pre_kubeadm_commands');
  }
  public set preKubeadmCommands(value: string[]) {
    this._preKubeadmCommands = value;
  }
  public resetPreKubeadmCommands() {
    this._preKubeadmCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preKubeadmCommandsInput() {
    return this._preKubeadmCommands;
  }

  // files - computed: false, optional: true, required: false
  private _files = new AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFilesList(this, "files", false);
  public get files() {
    return this._files;
  }
  public putFiles(value: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecFiles[] | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  public resetFiles() {
    this._files.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }
}
export interface AksClusterV3SpecConfigVsphereNodePoolsNetworkCni {
  /**
  * CNI name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * CNI version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#version AksClusterV3#version}
  */
  readonly version?: string;
}

export function aksClusterV3SpecConfigVsphereNodePoolsNetworkCniToTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsNetworkCniOutputReference | AksClusterV3SpecConfigVsphereNodePoolsNetworkCni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function aksClusterV3SpecConfigVsphereNodePoolsNetworkCniToHclTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsNetworkCniOutputReference | AksClusterV3SpecConfigVsphereNodePoolsNetworkCni): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigVsphereNodePoolsNetworkCniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigVsphereNodePoolsNetworkCni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigVsphereNodePoolsNetworkCni | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface AksClusterV3SpecConfigVsphereNodePoolsNetworkDevices {
  /**
  * Enable DHCP for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#dhcp AksClusterV3#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * The vSphere Network in the selected data center, to enable connectivity for the cluster nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#network_name AksClusterV3#network_name}
  */
  readonly networkName?: string;
}

export function aksClusterV3SpecConfigVsphereNodePoolsNetworkDevicesToTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsNetworkDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    network_name: cdktf.stringToTerraform(struct!.networkName),
  }
}


export function aksClusterV3SpecConfigVsphereNodePoolsNetworkDevicesToHclTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsNetworkDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigVsphereNodePoolsNetworkDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigVsphereNodePoolsNetworkDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigVsphereNodePoolsNetworkDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp = undefined;
      this._networkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp = value.dhcp;
      this._networkName = value.networkName;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // network_name - computed: false, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }
}

export class AksClusterV3SpecConfigVsphereNodePoolsNetworkDevicesList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigVsphereNodePoolsNetworkDevices[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigVsphereNodePoolsNetworkDevicesOutputReference {
    return new AksClusterV3SpecConfigVsphereNodePoolsNetworkDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigVsphereNodePoolsNetwork {
  /**
  * The pod CIDR blocks for the cluster nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#pod_cidr_blocks AksClusterV3#pod_cidr_blocks}
  */
  readonly podCidrBlocks?: string[];
  /**
  * cni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#cni AksClusterV3#cni}
  */
  readonly cni?: AksClusterV3SpecConfigVsphereNodePoolsNetworkCni;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#devices AksClusterV3#devices}
  */
  readonly devices?: AksClusterV3SpecConfigVsphereNodePoolsNetworkDevices[] | cdktf.IResolvable;
}

export function aksClusterV3SpecConfigVsphereNodePoolsNetworkToTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsNetworkOutputReference | AksClusterV3SpecConfigVsphereNodePoolsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podCidrBlocks),
    cni: aksClusterV3SpecConfigVsphereNodePoolsNetworkCniToTerraform(struct!.cni),
    devices: cdktf.listMapper(aksClusterV3SpecConfigVsphereNodePoolsNetworkDevicesToTerraform, true)(struct!.devices),
  }
}


export function aksClusterV3SpecConfigVsphereNodePoolsNetworkToHclTerraform(struct?: AksClusterV3SpecConfigVsphereNodePoolsNetworkOutputReference | AksClusterV3SpecConfigVsphereNodePoolsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cni: {
      value: aksClusterV3SpecConfigVsphereNodePoolsNetworkCniToHclTerraform(struct!.cni),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigVsphereNodePoolsNetworkCniList",
    },
    devices: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigVsphereNodePoolsNetworkDevicesToHclTerraform, true)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigVsphereNodePoolsNetworkDevicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigVsphereNodePoolsNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigVsphereNodePoolsNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrBlocks = this._podCidrBlocks;
    }
    if (this._cni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cni = this._cni?.internalValue;
    }
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigVsphereNodePoolsNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podCidrBlocks = undefined;
      this._cni.internalValue = undefined;
      this._devices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podCidrBlocks = value.podCidrBlocks;
      this._cni.internalValue = value.cni;
      this._devices.internalValue = value.devices;
    }
  }

  // pod_cidr_blocks - computed: false, optional: true, required: false
  private _podCidrBlocks?: string[]; 
  public get podCidrBlocks() {
    return this.getListAttribute('pod_cidr_blocks');
  }
  public set podCidrBlocks(value: string[]) {
    this._podCidrBlocks = value;
  }
  public resetPodCidrBlocks() {
    this._podCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrBlocksInput() {
    return this._podCidrBlocks;
  }

  // cni - computed: false, optional: true, required: false
  private _cni = new AksClusterV3SpecConfigVsphereNodePoolsNetworkCniOutputReference(this, "cni");
  public get cni() {
    return this._cni;
  }
  public putCni(value: AksClusterV3SpecConfigVsphereNodePoolsNetworkCni) {
    this._cni.internalValue = value;
  }
  public resetCni() {
    this._cni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniInput() {
    return this._cni.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new AksClusterV3SpecConfigVsphereNodePoolsNetworkDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: AksClusterV3SpecConfigVsphereNodePoolsNetworkDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }
}
export interface AksClusterV3SpecConfigVsphereNodePools {
  /**
  * The vSphere data center where the cluster nodes will be launched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#data_center AksClusterV3#data_center}
  */
  readonly dataCenter?: string;
  /**
  * The vSphere storage in the selected data center to launch the cluster nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#data_store AksClusterV3#data_store}
  */
  readonly dataStore?: string;
  /**
  * Hard Disk size of a node in GiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#disk_gi_b AksClusterV3#disk_gi_b}
  */
  readonly diskGiB?: number;
  /**
  * Node count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#machine_count AksClusterV3#machine_count}
  */
  readonly machineCount?: number;
  /**
  * Memory size of a node in MiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#memory_mi_b AksClusterV3#memory_mi_b}
  */
  readonly memoryMiB?: number;
  /**
  * Nodepool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
  /**
  * Cpu count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#num_cp_us AksClusterV3#num_cp_us}
  */
  readonly numCpUs?: number;
  /**
  * The Operating System of the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#os AksClusterV3#os}
  */
  readonly os?: string;
  /**
  * The vSphere resource pool in the selected data center to launch the cluster nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#resource_pool AksClusterV3#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * Public key to configure remote SSH access to the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#ssh_authorized_keys AksClusterV3#ssh_authorized_keys}
  */
  readonly sshAuthorizedKeys?: string[];
  /**
  * Kubernetes version of nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#version AksClusterV3#version}
  */
  readonly version?: string;
  /**
  * Template name format : os-osVersion-kube-v<k8s-version>. For example ubuntu-2004-kube-v1.22.8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#vm_template AksClusterV3#vm_template}
  */
  readonly vmTemplate?: string;
  /**
  * kubeadm_config_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kubeadm_config_spec AksClusterV3#kubeadm_config_spec}
  */
  readonly kubeadmConfigSpec?: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpec;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#network AksClusterV3#network}
  */
  readonly network?: AksClusterV3SpecConfigVsphereNodePoolsNetwork;
}

export function aksClusterV3SpecConfigVsphereNodePoolsToTerraform(struct?: AksClusterV3SpecConfigVsphereNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_center: cdktf.stringToTerraform(struct!.dataCenter),
    data_store: cdktf.stringToTerraform(struct!.dataStore),
    disk_gi_b: cdktf.numberToTerraform(struct!.diskGiB),
    machine_count: cdktf.numberToTerraform(struct!.machineCount),
    memory_mi_b: cdktf.numberToTerraform(struct!.memoryMiB),
    name: cdktf.stringToTerraform(struct!.name),
    num_cp_us: cdktf.numberToTerraform(struct!.numCpUs),
    os: cdktf.stringToTerraform(struct!.os),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
    ssh_authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshAuthorizedKeys),
    version: cdktf.stringToTerraform(struct!.version),
    vm_template: cdktf.stringToTerraform(struct!.vmTemplate),
    kubeadm_config_spec: aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecToTerraform(struct!.kubeadmConfigSpec),
    network: aksClusterV3SpecConfigVsphereNodePoolsNetworkToTerraform(struct!.network),
  }
}


export function aksClusterV3SpecConfigVsphereNodePoolsToHclTerraform(struct?: AksClusterV3SpecConfigVsphereNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_center: {
      value: cdktf.stringToHclTerraform(struct!.dataCenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store: {
      value: cdktf.stringToHclTerraform(struct!.dataStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_gi_b: {
      value: cdktf.numberToHclTerraform(struct!.diskGiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_count: {
      value: cdktf.numberToHclTerraform(struct!.machineCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_mi_b: {
      value: cdktf.numberToHclTerraform(struct!.memoryMiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_cp_us: {
      value: cdktf.numberToHclTerraform(struct!.numCpUs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_authorized_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshAuthorizedKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_template: {
      value: cdktf.stringToHclTerraform(struct!.vmTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeadm_config_spec: {
      value: aksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecToHclTerraform(struct!.kubeadmConfigSpec),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecList",
    },
    network: {
      value: aksClusterV3SpecConfigVsphereNodePoolsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigVsphereNodePoolsNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigVsphereNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecConfigVsphereNodePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCenter = this._dataCenter;
    }
    if (this._dataStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore;
    }
    if (this._diskGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGiB = this._diskGiB;
    }
    if (this._machineCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineCount = this._machineCount;
    }
    if (this._memoryMiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMiB = this._memoryMiB;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numCpUs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCpUs = this._numCpUs;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    if (this._sshAuthorizedKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAuthorizedKeys = this._sshAuthorizedKeys;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vmTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmTemplate = this._vmTemplate;
    }
    if (this._kubeadmConfigSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeadmConfigSpec = this._kubeadmConfigSpec?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigVsphereNodePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataCenter = undefined;
      this._dataStore = undefined;
      this._diskGiB = undefined;
      this._machineCount = undefined;
      this._memoryMiB = undefined;
      this._name = undefined;
      this._numCpUs = undefined;
      this._os = undefined;
      this._resourcePool = undefined;
      this._sshAuthorizedKeys = undefined;
      this._version = undefined;
      this._vmTemplate = undefined;
      this._kubeadmConfigSpec.internalValue = undefined;
      this._network.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataCenter = value.dataCenter;
      this._dataStore = value.dataStore;
      this._diskGiB = value.diskGiB;
      this._machineCount = value.machineCount;
      this._memoryMiB = value.memoryMiB;
      this._name = value.name;
      this._numCpUs = value.numCpUs;
      this._os = value.os;
      this._resourcePool = value.resourcePool;
      this._sshAuthorizedKeys = value.sshAuthorizedKeys;
      this._version = value.version;
      this._vmTemplate = value.vmTemplate;
      this._kubeadmConfigSpec.internalValue = value.kubeadmConfigSpec;
      this._network.internalValue = value.network;
    }
  }

  // data_center - computed: false, optional: true, required: false
  private _dataCenter?: string; 
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }
  public set dataCenter(value: string) {
    this._dataCenter = value;
  }
  public resetDataCenter() {
    this._dataCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterInput() {
    return this._dataCenter;
  }

  // data_store - computed: false, optional: true, required: false
  private _dataStore?: string; 
  public get dataStore() {
    return this.getStringAttribute('data_store');
  }
  public set dataStore(value: string) {
    this._dataStore = value;
  }
  public resetDataStore() {
    this._dataStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore;
  }

  // disk_gi_b - computed: false, optional: true, required: false
  private _diskGiB?: number; 
  public get diskGiB() {
    return this.getNumberAttribute('disk_gi_b');
  }
  public set diskGiB(value: number) {
    this._diskGiB = value;
  }
  public resetDiskGiB() {
    this._diskGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGiBInput() {
    return this._diskGiB;
  }

  // machine_count - computed: false, optional: true, required: false
  private _machineCount?: number; 
  public get machineCount() {
    return this.getNumberAttribute('machine_count');
  }
  public set machineCount(value: number) {
    this._machineCount = value;
  }
  public resetMachineCount() {
    this._machineCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineCountInput() {
    return this._machineCount;
  }

  // memory_mi_b - computed: false, optional: true, required: false
  private _memoryMiB?: number; 
  public get memoryMiB() {
    return this.getNumberAttribute('memory_mi_b');
  }
  public set memoryMiB(value: number) {
    this._memoryMiB = value;
  }
  public resetMemoryMiB() {
    this._memoryMiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMiBInput() {
    return this._memoryMiB;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // num_cp_us - computed: false, optional: true, required: false
  private _numCpUs?: number; 
  public get numCpUs() {
    return this.getNumberAttribute('num_cp_us');
  }
  public set numCpUs(value: number) {
    this._numCpUs = value;
  }
  public resetNumCpUs() {
    this._numCpUs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCpUsInput() {
    return this._numCpUs;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // ssh_authorized_keys - computed: false, optional: true, required: false
  private _sshAuthorizedKeys?: string[]; 
  public get sshAuthorizedKeys() {
    return this.getListAttribute('ssh_authorized_keys');
  }
  public set sshAuthorizedKeys(value: string[]) {
    this._sshAuthorizedKeys = value;
  }
  public resetSshAuthorizedKeys() {
    this._sshAuthorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthorizedKeysInput() {
    return this._sshAuthorizedKeys;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vm_template - computed: false, optional: true, required: false
  private _vmTemplate?: string; 
  public get vmTemplate() {
    return this.getStringAttribute('vm_template');
  }
  public set vmTemplate(value: string) {
    this._vmTemplate = value;
  }
  public resetVmTemplate() {
    this._vmTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTemplateInput() {
    return this._vmTemplate;
  }

  // kubeadm_config_spec - computed: false, optional: true, required: false
  private _kubeadmConfigSpec = new AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpecOutputReference(this, "kubeadm_config_spec");
  public get kubeadmConfigSpec() {
    return this._kubeadmConfigSpec;
  }
  public putKubeadmConfigSpec(value: AksClusterV3SpecConfigVsphereNodePoolsKubeadmConfigSpec) {
    this._kubeadmConfigSpec.internalValue = value;
  }
  public resetKubeadmConfigSpec() {
    this._kubeadmConfigSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeadmConfigSpecInput() {
    return this._kubeadmConfigSpec.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new AksClusterV3SpecConfigVsphereNodePoolsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: AksClusterV3SpecConfigVsphereNodePoolsNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}

export class AksClusterV3SpecConfigVsphereNodePoolsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecConfigVsphereNodePools[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecConfigVsphereNodePoolsOutputReference {
    return new AksClusterV3SpecConfigVsphereNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecConfigWorkerNodes {
  /**
  * Hard Disk size of a node in GiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#disk_gi_b AksClusterV3#disk_gi_b}
  */
  readonly diskGiB?: number;
  /**
  * Node count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#machine_count AksClusterV3#machine_count}
  */
  readonly machineCount?: number;
  /**
  * Memory size of a node in MiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#memory_mi_b AksClusterV3#memory_mi_b}
  */
  readonly memoryMiB?: number;
  /**
  * Cpu count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#num_cp_us AksClusterV3#num_cp_us}
  */
  readonly numCpUs?: number;
  /**
  * Public key to configure remote SSH access to the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#ssh_authorized_keys AksClusterV3#ssh_authorized_keys}
  */
  readonly sshAuthorizedKeys?: string[];
  /**
  * Kubernetes version of nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#version AksClusterV3#version}
  */
  readonly version?: string;
}

export function aksClusterV3SpecConfigWorkerNodesToTerraform(struct?: AksClusterV3SpecConfigWorkerNodesOutputReference | AksClusterV3SpecConfigWorkerNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_gi_b: cdktf.numberToTerraform(struct!.diskGiB),
    machine_count: cdktf.numberToTerraform(struct!.machineCount),
    memory_mi_b: cdktf.numberToTerraform(struct!.memoryMiB),
    num_cp_us: cdktf.numberToTerraform(struct!.numCpUs),
    ssh_authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshAuthorizedKeys),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function aksClusterV3SpecConfigWorkerNodesToHclTerraform(struct?: AksClusterV3SpecConfigWorkerNodesOutputReference | AksClusterV3SpecConfigWorkerNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_gi_b: {
      value: cdktf.numberToHclTerraform(struct!.diskGiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_count: {
      value: cdktf.numberToHclTerraform(struct!.machineCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_mi_b: {
      value: cdktf.numberToHclTerraform(struct!.memoryMiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_cp_us: {
      value: cdktf.numberToHclTerraform(struct!.numCpUs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_authorized_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshAuthorizedKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigWorkerNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfigWorkerNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGiB = this._diskGiB;
    }
    if (this._machineCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineCount = this._machineCount;
    }
    if (this._memoryMiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMiB = this._memoryMiB;
    }
    if (this._numCpUs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCpUs = this._numCpUs;
    }
    if (this._sshAuthorizedKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAuthorizedKeys = this._sshAuthorizedKeys;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfigWorkerNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskGiB = undefined;
      this._machineCount = undefined;
      this._memoryMiB = undefined;
      this._numCpUs = undefined;
      this._sshAuthorizedKeys = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskGiB = value.diskGiB;
      this._machineCount = value.machineCount;
      this._memoryMiB = value.memoryMiB;
      this._numCpUs = value.numCpUs;
      this._sshAuthorizedKeys = value.sshAuthorizedKeys;
      this._version = value.version;
    }
  }

  // disk_gi_b - computed: false, optional: true, required: false
  private _diskGiB?: number; 
  public get diskGiB() {
    return this.getNumberAttribute('disk_gi_b');
  }
  public set diskGiB(value: number) {
    this._diskGiB = value;
  }
  public resetDiskGiB() {
    this._diskGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGiBInput() {
    return this._diskGiB;
  }

  // machine_count - computed: false, optional: true, required: false
  private _machineCount?: number; 
  public get machineCount() {
    return this.getNumberAttribute('machine_count');
  }
  public set machineCount(value: number) {
    this._machineCount = value;
  }
  public resetMachineCount() {
    this._machineCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineCountInput() {
    return this._machineCount;
  }

  // memory_mi_b - computed: false, optional: true, required: false
  private _memoryMiB?: number; 
  public get memoryMiB() {
    return this.getNumberAttribute('memory_mi_b');
  }
  public set memoryMiB(value: number) {
    this._memoryMiB = value;
  }
  public resetMemoryMiB() {
    this._memoryMiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMiBInput() {
    return this._memoryMiB;
  }

  // num_cp_us - computed: false, optional: true, required: false
  private _numCpUs?: number; 
  public get numCpUs() {
    return this.getNumberAttribute('num_cp_us');
  }
  public set numCpUs(value: number) {
    this._numCpUs = value;
  }
  public resetNumCpUs() {
    this._numCpUs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCpUsInput() {
    return this._numCpUs;
  }

  // ssh_authorized_keys - computed: false, optional: true, required: false
  private _sshAuthorizedKeys?: string[]; 
  public get sshAuthorizedKeys() {
    return this.getListAttribute('ssh_authorized_keys');
  }
  public set sshAuthorizedKeys(value: string[]) {
    this._sshAuthorizedKeys = value;
  }
  public resetSshAuthorizedKeys() {
    this._sshAuthorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthorizedKeysInput() {
    return this._sshAuthorizedKeys;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface AksClusterV3SpecConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#api_version AksClusterV3#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The IP address used for the control plane endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#control_plane_endpoint_ip AksClusterV3#control_plane_endpoint_ip}
  */
  readonly controlPlaneEndpointIp?: string;
  /**
  * Kubernetes version of ControlPlane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#control_plane_version AksClusterV3#control_plane_version}
  */
  readonly controlPlaneVersion?: string;
  /**
  * The vSphere data center where the cluster nodes will be launched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#data_center AksClusterV3#data_center}
  */
  readonly dataCenter?: string;
  /**
  * The vSphere storage in the selected data center to launch the cluster nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#data_store AksClusterV3#data_store}
  */
  readonly dataStore?: string;
  /**
  * EksaBm Project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#eksabm_project AksClusterV3#eksabm_project}
  */
  readonly eksabmProject?: string;
  /**
  * GCP Project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#gcp_project AksClusterV3#gcp_project}
  */
  readonly gcpProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kind AksClusterV3#kind}
  */
  readonly kind?: string;
  /**
  * kubernetes provider of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#kubernetes_provider AksClusterV3#kubernetes_provider}
  */
  readonly kubernetesProvider?: string;
  /**
  * Commands will be executed every time Cluster nodes come up. Example: Node Creation, Node Restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#pre_bootstrap_commands AksClusterV3#pre_bootstrap_commands}
  */
  readonly preBootstrapCommands?: string[];
  /**
  * provisioning environment for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#provision_environment AksClusterV3#provision_environment}
  */
  readonly provisionEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#raw AksClusterV3#raw}
  */
  readonly raw?: string;
  /**
  * Labels are key-value pairs that are attached to GKE clusters. Labels can be used to group clusters and filter them in the UI or API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#resource_labels AksClusterV3#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * The vSphere resource pool where the cluster nodes will be launched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#resource_pool AksClusterV3#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * The certificate thumbprint for the vCenter server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#v_center_ca_tls_thumbprint AksClusterV3#v_center_ca_tls_thumbprint}
  */
  readonly vCenterCaTlsThumbprint?: string;
  /**
  * Template name format : os-osVersion-kube-v<k8s-version>. For example ubuntu-2004-kube-v1.22.8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#vm_folder AksClusterV3#vm_folder}
  */
  readonly vmFolder?: string;
  /**
  * Template name format : os-osVersion-kube-v<k8s-version>. For example ubuntu-2004-kube-v1.22.8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#vm_template AksClusterV3#vm_template}
  */
  readonly vmTemplate?: string;
  /**
  * control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#control_plane AksClusterV3#control_plane}
  */
  readonly controlPlane?: AksClusterV3SpecConfigControlPlane;
  /**
  * eksa_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#eksa_cluster_config AksClusterV3#eksa_cluster_config}
  */
  readonly eksaClusterConfig?: AksClusterV3SpecConfigEksaClusterConfig;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#features AksClusterV3#features}
  */
  readonly features?: AksClusterV3SpecConfigFeatures;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#location AksClusterV3#location}
  */
  readonly location?: AksClusterV3SpecConfigLocation;
  /**
  * machine_health_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#machine_health_checks AksClusterV3#machine_health_checks}
  */
  readonly machineHealthChecks?: AksClusterV3SpecConfigMachineHealthChecks[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#metadata AksClusterV3#metadata}
  */
  readonly metadata?: AksClusterV3SpecConfigMetadata;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#network AksClusterV3#network}
  */
  readonly network?: AksClusterV3SpecConfigNetwork;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#node_pools AksClusterV3#node_pools}
  */
  readonly nodePools?: AksClusterV3SpecConfigNodePools[] | cdktf.IResolvable;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#proxy AksClusterV3#proxy}
  */
  readonly proxy?: AksClusterV3SpecConfigProxy;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#security AksClusterV3#security}
  */
  readonly security?: AksClusterV3SpecConfigSecurity;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#spec AksClusterV3#spec}
  */
  readonly spec?: AksClusterV3SpecConfigSpec;
  /**
  * tinkerbell_datacenter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#tinkerbell_datacenter_config AksClusterV3#tinkerbell_datacenter_config}
  */
  readonly tinkerbellDatacenterConfig?: AksClusterV3SpecConfigTinkerbellDatacenterConfig;
  /**
  * tinkerbell_hardware_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#tinkerbell_hardware_config AksClusterV3#tinkerbell_hardware_config}
  */
  readonly tinkerbellHardwareConfig?: AksClusterV3SpecConfigTinkerbellHardwareConfig[] | cdktf.IResolvable;
  /**
  * tinkerbell_machine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#tinkerbell_machine_config AksClusterV3#tinkerbell_machine_config}
  */
  readonly tinkerbellMachineConfig?: AksClusterV3SpecConfigTinkerbellMachineConfig[] | cdktf.IResolvable;
  /**
  * tinkerbell_template_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#tinkerbell_template_config AksClusterV3#tinkerbell_template_config}
  */
  readonly tinkerbellTemplateConfig?: AksClusterV3SpecConfigTinkerbellTemplateConfig[] | cdktf.IResolvable;
  /**
  * vsphere_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#vsphere_network AksClusterV3#vsphere_network}
  */
  readonly vsphereNetwork?: AksClusterV3SpecConfigVsphereNetwork;
  /**
  * vsphere_node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#vsphere_node_pools AksClusterV3#vsphere_node_pools}
  */
  readonly vsphereNodePools?: AksClusterV3SpecConfigVsphereNodePools[] | cdktf.IResolvable;
  /**
  * worker_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#worker_nodes AksClusterV3#worker_nodes}
  */
  readonly workerNodes?: AksClusterV3SpecConfigWorkerNodes;
}

export function aksClusterV3SpecConfigToTerraform(struct?: AksClusterV3SpecConfigOutputReference | AksClusterV3SpecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    control_plane_endpoint_ip: cdktf.stringToTerraform(struct!.controlPlaneEndpointIp),
    control_plane_version: cdktf.stringToTerraform(struct!.controlPlaneVersion),
    data_center: cdktf.stringToTerraform(struct!.dataCenter),
    data_store: cdktf.stringToTerraform(struct!.dataStore),
    eksabm_project: cdktf.stringToTerraform(struct!.eksabmProject),
    gcp_project: cdktf.stringToTerraform(struct!.gcpProject),
    kind: cdktf.stringToTerraform(struct!.kind),
    kubernetes_provider: cdktf.stringToTerraform(struct!.kubernetesProvider),
    pre_bootstrap_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preBootstrapCommands),
    provision_environment: cdktf.stringToTerraform(struct!.provisionEnvironment),
    raw: cdktf.stringToTerraform(struct!.raw),
    resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLabels),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
    v_center_ca_tls_thumbprint: cdktf.stringToTerraform(struct!.vCenterCaTlsThumbprint),
    vm_folder: cdktf.stringToTerraform(struct!.vmFolder),
    vm_template: cdktf.stringToTerraform(struct!.vmTemplate),
    control_plane: aksClusterV3SpecConfigControlPlaneToTerraform(struct!.controlPlane),
    eksa_cluster_config: aksClusterV3SpecConfigEksaClusterConfigToTerraform(struct!.eksaClusterConfig),
    features: aksClusterV3SpecConfigFeaturesToTerraform(struct!.features),
    location: aksClusterV3SpecConfigLocationToTerraform(struct!.location),
    machine_health_checks: cdktf.listMapper(aksClusterV3SpecConfigMachineHealthChecksToTerraform, true)(struct!.machineHealthChecks),
    metadata: aksClusterV3SpecConfigMetadataToTerraform(struct!.metadata),
    network: aksClusterV3SpecConfigNetworkToTerraform(struct!.network),
    node_pools: cdktf.listMapper(aksClusterV3SpecConfigNodePoolsToTerraform, true)(struct!.nodePools),
    proxy: aksClusterV3SpecConfigProxyToTerraform(struct!.proxy),
    security: aksClusterV3SpecConfigSecurityToTerraform(struct!.security),
    spec: aksClusterV3SpecConfigSpecToTerraform(struct!.spec),
    tinkerbell_datacenter_config: aksClusterV3SpecConfigTinkerbellDatacenterConfigToTerraform(struct!.tinkerbellDatacenterConfig),
    tinkerbell_hardware_config: cdktf.listMapper(aksClusterV3SpecConfigTinkerbellHardwareConfigToTerraform, true)(struct!.tinkerbellHardwareConfig),
    tinkerbell_machine_config: cdktf.listMapper(aksClusterV3SpecConfigTinkerbellMachineConfigToTerraform, true)(struct!.tinkerbellMachineConfig),
    tinkerbell_template_config: cdktf.listMapper(aksClusterV3SpecConfigTinkerbellTemplateConfigToTerraform, true)(struct!.tinkerbellTemplateConfig),
    vsphere_network: aksClusterV3SpecConfigVsphereNetworkToTerraform(struct!.vsphereNetwork),
    vsphere_node_pools: cdktf.listMapper(aksClusterV3SpecConfigVsphereNodePoolsToTerraform, true)(struct!.vsphereNodePools),
    worker_nodes: aksClusterV3SpecConfigWorkerNodesToTerraform(struct!.workerNodes),
  }
}


export function aksClusterV3SpecConfigToHclTerraform(struct?: AksClusterV3SpecConfigOutputReference | AksClusterV3SpecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_endpoint_ip: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneEndpointIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_version: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_center: {
      value: cdktf.stringToHclTerraform(struct!.dataCenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store: {
      value: cdktf.stringToHclTerraform(struct!.dataStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eksabm_project: {
      value: cdktf.stringToHclTerraform(struct!.eksabmProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_project: {
      value: cdktf.stringToHclTerraform(struct!.gcpProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_provider: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_bootstrap_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preBootstrapCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    provision_environment: {
      value: cdktf.stringToHclTerraform(struct!.provisionEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_center_ca_tls_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.vCenterCaTlsThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_folder: {
      value: cdktf.stringToHclTerraform(struct!.vmFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_template: {
      value: cdktf.stringToHclTerraform(struct!.vmTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane: {
      value: aksClusterV3SpecConfigControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigControlPlaneList",
    },
    eksa_cluster_config: {
      value: aksClusterV3SpecConfigEksaClusterConfigToHclTerraform(struct!.eksaClusterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigEksaClusterConfigList",
    },
    features: {
      value: aksClusterV3SpecConfigFeaturesToHclTerraform(struct!.features),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigFeaturesList",
    },
    location: {
      value: aksClusterV3SpecConfigLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigLocationList",
    },
    machine_health_checks: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigMachineHealthChecksToHclTerraform, true)(struct!.machineHealthChecks),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigMachineHealthChecksList",
    },
    metadata: {
      value: aksClusterV3SpecConfigMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigMetadataList",
    },
    network: {
      value: aksClusterV3SpecConfigNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNetworkList",
    },
    node_pools: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigNodePoolsToHclTerraform, true)(struct!.nodePools),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigNodePoolsList",
    },
    proxy: {
      value: aksClusterV3SpecConfigProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigProxyList",
    },
    security: {
      value: aksClusterV3SpecConfigSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSecurityList",
    },
    spec: {
      value: aksClusterV3SpecConfigSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigSpecList",
    },
    tinkerbell_datacenter_config: {
      value: aksClusterV3SpecConfigTinkerbellDatacenterConfigToHclTerraform(struct!.tinkerbellDatacenterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellDatacenterConfigList",
    },
    tinkerbell_hardware_config: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigTinkerbellHardwareConfigToHclTerraform, true)(struct!.tinkerbellHardwareConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellHardwareConfigList",
    },
    tinkerbell_machine_config: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigTinkerbellMachineConfigToHclTerraform, true)(struct!.tinkerbellMachineConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellMachineConfigList",
    },
    tinkerbell_template_config: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigTinkerbellTemplateConfigToHclTerraform, true)(struct!.tinkerbellTemplateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigTinkerbellTemplateConfigList",
    },
    vsphere_network: {
      value: aksClusterV3SpecConfigVsphereNetworkToHclTerraform(struct!.vsphereNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigVsphereNetworkList",
    },
    vsphere_node_pools: {
      value: cdktf.listMapperHcl(aksClusterV3SpecConfigVsphereNodePoolsToHclTerraform, true)(struct!.vsphereNodePools),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigVsphereNodePoolsList",
    },
    worker_nodes: {
      value: aksClusterV3SpecConfigWorkerNodesToHclTerraform(struct!.workerNodes),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigWorkerNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._controlPlaneEndpointIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneEndpointIp = this._controlPlaneEndpointIp;
    }
    if (this._controlPlaneVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneVersion = this._controlPlaneVersion;
    }
    if (this._dataCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCenter = this._dataCenter;
    }
    if (this._dataStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore;
    }
    if (this._eksabmProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksabmProject = this._eksabmProject;
    }
    if (this._gcpProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpProject = this._gcpProject;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._kubernetesProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesProvider = this._kubernetesProvider;
    }
    if (this._preBootstrapCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.preBootstrapCommands = this._preBootstrapCommands;
    }
    if (this._provisionEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionEnvironment = this._provisionEnvironment;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    if (this._vCenterCaTlsThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.vCenterCaTlsThumbprint = this._vCenterCaTlsThumbprint;
    }
    if (this._vmFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmFolder = this._vmFolder;
    }
    if (this._vmTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmTemplate = this._vmTemplate;
    }
    if (this._controlPlane?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane?.internalValue;
    }
    if (this._eksaClusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksaClusterConfig = this._eksaClusterConfig?.internalValue;
    }
    if (this._features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._machineHealthChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineHealthChecks = this._machineHealthChecks?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._nodePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePools = this._nodePools?.internalValue;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    if (this._tinkerbellDatacenterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tinkerbellDatacenterConfig = this._tinkerbellDatacenterConfig?.internalValue;
    }
    if (this._tinkerbellHardwareConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tinkerbellHardwareConfig = this._tinkerbellHardwareConfig?.internalValue;
    }
    if (this._tinkerbellMachineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tinkerbellMachineConfig = this._tinkerbellMachineConfig?.internalValue;
    }
    if (this._tinkerbellTemplateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tinkerbellTemplateConfig = this._tinkerbellTemplateConfig?.internalValue;
    }
    if (this._vsphereNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereNetwork = this._vsphereNetwork?.internalValue;
    }
    if (this._vsphereNodePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereNodePools = this._vsphereNodePools?.internalValue;
    }
    if (this._workerNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNodes = this._workerNodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._controlPlaneEndpointIp = undefined;
      this._controlPlaneVersion = undefined;
      this._dataCenter = undefined;
      this._dataStore = undefined;
      this._eksabmProject = undefined;
      this._gcpProject = undefined;
      this._kind = undefined;
      this._kubernetesProvider = undefined;
      this._preBootstrapCommands = undefined;
      this._provisionEnvironment = undefined;
      this._raw = undefined;
      this._resourceLabels = undefined;
      this._resourcePool = undefined;
      this._vCenterCaTlsThumbprint = undefined;
      this._vmFolder = undefined;
      this._vmTemplate = undefined;
      this._controlPlane.internalValue = undefined;
      this._eksaClusterConfig.internalValue = undefined;
      this._features.internalValue = undefined;
      this._location.internalValue = undefined;
      this._machineHealthChecks.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._network.internalValue = undefined;
      this._nodePools.internalValue = undefined;
      this._proxy.internalValue = undefined;
      this._security.internalValue = undefined;
      this._spec.internalValue = undefined;
      this._tinkerbellDatacenterConfig.internalValue = undefined;
      this._tinkerbellHardwareConfig.internalValue = undefined;
      this._tinkerbellMachineConfig.internalValue = undefined;
      this._tinkerbellTemplateConfig.internalValue = undefined;
      this._vsphereNetwork.internalValue = undefined;
      this._vsphereNodePools.internalValue = undefined;
      this._workerNodes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._controlPlaneEndpointIp = value.controlPlaneEndpointIp;
      this._controlPlaneVersion = value.controlPlaneVersion;
      this._dataCenter = value.dataCenter;
      this._dataStore = value.dataStore;
      this._eksabmProject = value.eksabmProject;
      this._gcpProject = value.gcpProject;
      this._kind = value.kind;
      this._kubernetesProvider = value.kubernetesProvider;
      this._preBootstrapCommands = value.preBootstrapCommands;
      this._provisionEnvironment = value.provisionEnvironment;
      this._raw = value.raw;
      this._resourceLabels = value.resourceLabels;
      this._resourcePool = value.resourcePool;
      this._vCenterCaTlsThumbprint = value.vCenterCaTlsThumbprint;
      this._vmFolder = value.vmFolder;
      this._vmTemplate = value.vmTemplate;
      this._controlPlane.internalValue = value.controlPlane;
      this._eksaClusterConfig.internalValue = value.eksaClusterConfig;
      this._features.internalValue = value.features;
      this._location.internalValue = value.location;
      this._machineHealthChecks.internalValue = value.machineHealthChecks;
      this._metadata.internalValue = value.metadata;
      this._network.internalValue = value.network;
      this._nodePools.internalValue = value.nodePools;
      this._proxy.internalValue = value.proxy;
      this._security.internalValue = value.security;
      this._spec.internalValue = value.spec;
      this._tinkerbellDatacenterConfig.internalValue = value.tinkerbellDatacenterConfig;
      this._tinkerbellHardwareConfig.internalValue = value.tinkerbellHardwareConfig;
      this._tinkerbellMachineConfig.internalValue = value.tinkerbellMachineConfig;
      this._tinkerbellTemplateConfig.internalValue = value.tinkerbellTemplateConfig;
      this._vsphereNetwork.internalValue = value.vsphereNetwork;
      this._vsphereNodePools.internalValue = value.vsphereNodePools;
      this._workerNodes.internalValue = value.workerNodes;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // control_plane_endpoint_ip - computed: false, optional: true, required: false
  private _controlPlaneEndpointIp?: string; 
  public get controlPlaneEndpointIp() {
    return this.getStringAttribute('control_plane_endpoint_ip');
  }
  public set controlPlaneEndpointIp(value: string) {
    this._controlPlaneEndpointIp = value;
  }
  public resetControlPlaneEndpointIp() {
    this._controlPlaneEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndpointIpInput() {
    return this._controlPlaneEndpointIp;
  }

  // control_plane_version - computed: false, optional: true, required: false
  private _controlPlaneVersion?: string; 
  public get controlPlaneVersion() {
    return this.getStringAttribute('control_plane_version');
  }
  public set controlPlaneVersion(value: string) {
    this._controlPlaneVersion = value;
  }
  public resetControlPlaneVersion() {
    this._controlPlaneVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneVersionInput() {
    return this._controlPlaneVersion;
  }

  // data_center - computed: false, optional: true, required: false
  private _dataCenter?: string; 
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }
  public set dataCenter(value: string) {
    this._dataCenter = value;
  }
  public resetDataCenter() {
    this._dataCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterInput() {
    return this._dataCenter;
  }

  // data_store - computed: false, optional: true, required: false
  private _dataStore?: string; 
  public get dataStore() {
    return this.getStringAttribute('data_store');
  }
  public set dataStore(value: string) {
    this._dataStore = value;
  }
  public resetDataStore() {
    this._dataStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore;
  }

  // eksabm_project - computed: false, optional: true, required: false
  private _eksabmProject?: string; 
  public get eksabmProject() {
    return this.getStringAttribute('eksabm_project');
  }
  public set eksabmProject(value: string) {
    this._eksabmProject = value;
  }
  public resetEksabmProject() {
    this._eksabmProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksabmProjectInput() {
    return this._eksabmProject;
  }

  // gcp_project - computed: false, optional: true, required: false
  private _gcpProject?: string; 
  public get gcpProject() {
    return this.getStringAttribute('gcp_project');
  }
  public set gcpProject(value: string) {
    this._gcpProject = value;
  }
  public resetGcpProject() {
    this._gcpProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectInput() {
    return this._gcpProject;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // kubernetes_provider - computed: false, optional: true, required: false
  private _kubernetesProvider?: string; 
  public get kubernetesProvider() {
    return this.getStringAttribute('kubernetes_provider');
  }
  public set kubernetesProvider(value: string) {
    this._kubernetesProvider = value;
  }
  public resetKubernetesProvider() {
    this._kubernetesProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesProviderInput() {
    return this._kubernetesProvider;
  }

  // pre_bootstrap_commands - computed: false, optional: true, required: false
  private _preBootstrapCommands?: string[]; 
  public get preBootstrapCommands() {
    return this.getListAttribute('pre_bootstrap_commands');
  }
  public set preBootstrapCommands(value: string[]) {
    this._preBootstrapCommands = value;
  }
  public resetPreBootstrapCommands() {
    this._preBootstrapCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preBootstrapCommandsInput() {
    return this._preBootstrapCommands;
  }

  // provision_environment - computed: false, optional: true, required: false
  private _provisionEnvironment?: string; 
  public get provisionEnvironment() {
    return this.getStringAttribute('provision_environment');
  }
  public set provisionEnvironment(value: string) {
    this._provisionEnvironment = value;
  }
  public resetProvisionEnvironment() {
    this._provisionEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionEnvironmentInput() {
    return this._provisionEnvironment;
  }

  // raw - computed: false, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
  }

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // v_center_ca_tls_thumbprint - computed: false, optional: true, required: false
  private _vCenterCaTlsThumbprint?: string; 
  public get vCenterCaTlsThumbprint() {
    return this.getStringAttribute('v_center_ca_tls_thumbprint');
  }
  public set vCenterCaTlsThumbprint(value: string) {
    this._vCenterCaTlsThumbprint = value;
  }
  public resetVCenterCaTlsThumbprint() {
    this._vCenterCaTlsThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vCenterCaTlsThumbprintInput() {
    return this._vCenterCaTlsThumbprint;
  }

  // vm_folder - computed: false, optional: true, required: false
  private _vmFolder?: string; 
  public get vmFolder() {
    return this.getStringAttribute('vm_folder');
  }
  public set vmFolder(value: string) {
    this._vmFolder = value;
  }
  public resetVmFolder() {
    this._vmFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmFolderInput() {
    return this._vmFolder;
  }

  // vm_template - computed: false, optional: true, required: false
  private _vmTemplate?: string; 
  public get vmTemplate() {
    return this.getStringAttribute('vm_template');
  }
  public set vmTemplate(value: string) {
    this._vmTemplate = value;
  }
  public resetVmTemplate() {
    this._vmTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTemplateInput() {
    return this._vmTemplate;
  }

  // control_plane - computed: false, optional: true, required: false
  private _controlPlane = new AksClusterV3SpecConfigControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: AksClusterV3SpecConfigControlPlane) {
    this._controlPlane.internalValue = value;
  }
  public resetControlPlane() {
    this._controlPlane.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // eksa_cluster_config - computed: false, optional: true, required: false
  private _eksaClusterConfig = new AksClusterV3SpecConfigEksaClusterConfigOutputReference(this, "eksa_cluster_config");
  public get eksaClusterConfig() {
    return this._eksaClusterConfig;
  }
  public putEksaClusterConfig(value: AksClusterV3SpecConfigEksaClusterConfig) {
    this._eksaClusterConfig.internalValue = value;
  }
  public resetEksaClusterConfig() {
    this._eksaClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksaClusterConfigInput() {
    return this._eksaClusterConfig.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new AksClusterV3SpecConfigFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }
  public putFeatures(value: AksClusterV3SpecConfigFeatures) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // location - computed: false, optional: true, required: false
  private _location = new AksClusterV3SpecConfigLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: AksClusterV3SpecConfigLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // machine_health_checks - computed: false, optional: true, required: false
  private _machineHealthChecks = new AksClusterV3SpecConfigMachineHealthChecksList(this, "machine_health_checks", false);
  public get machineHealthChecks() {
    return this._machineHealthChecks;
  }
  public putMachineHealthChecks(value: AksClusterV3SpecConfigMachineHealthChecks[] | cdktf.IResolvable) {
    this._machineHealthChecks.internalValue = value;
  }
  public resetMachineHealthChecks() {
    this._machineHealthChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineHealthChecksInput() {
    return this._machineHealthChecks.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AksClusterV3SpecConfigMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AksClusterV3SpecConfigMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new AksClusterV3SpecConfigNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: AksClusterV3SpecConfigNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new AksClusterV3SpecConfigNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: AksClusterV3SpecConfigNodePools[] | cdktf.IResolvable) {
    this._nodePools.internalValue = value;
  }
  public resetNodePools() {
    this._nodePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new AksClusterV3SpecConfigProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: AksClusterV3SpecConfigProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new AksClusterV3SpecConfigSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: AksClusterV3SpecConfigSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new AksClusterV3SpecConfigSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AksClusterV3SpecConfigSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // tinkerbell_datacenter_config - computed: false, optional: true, required: false
  private _tinkerbellDatacenterConfig = new AksClusterV3SpecConfigTinkerbellDatacenterConfigOutputReference(this, "tinkerbell_datacenter_config");
  public get tinkerbellDatacenterConfig() {
    return this._tinkerbellDatacenterConfig;
  }
  public putTinkerbellDatacenterConfig(value: AksClusterV3SpecConfigTinkerbellDatacenterConfig) {
    this._tinkerbellDatacenterConfig.internalValue = value;
  }
  public resetTinkerbellDatacenterConfig() {
    this._tinkerbellDatacenterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tinkerbellDatacenterConfigInput() {
    return this._tinkerbellDatacenterConfig.internalValue;
  }

  // tinkerbell_hardware_config - computed: false, optional: true, required: false
  private _tinkerbellHardwareConfig = new AksClusterV3SpecConfigTinkerbellHardwareConfigList(this, "tinkerbell_hardware_config", false);
  public get tinkerbellHardwareConfig() {
    return this._tinkerbellHardwareConfig;
  }
  public putTinkerbellHardwareConfig(value: AksClusterV3SpecConfigTinkerbellHardwareConfig[] | cdktf.IResolvable) {
    this._tinkerbellHardwareConfig.internalValue = value;
  }
  public resetTinkerbellHardwareConfig() {
    this._tinkerbellHardwareConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tinkerbellHardwareConfigInput() {
    return this._tinkerbellHardwareConfig.internalValue;
  }

  // tinkerbell_machine_config - computed: false, optional: true, required: false
  private _tinkerbellMachineConfig = new AksClusterV3SpecConfigTinkerbellMachineConfigList(this, "tinkerbell_machine_config", false);
  public get tinkerbellMachineConfig() {
    return this._tinkerbellMachineConfig;
  }
  public putTinkerbellMachineConfig(value: AksClusterV3SpecConfigTinkerbellMachineConfig[] | cdktf.IResolvable) {
    this._tinkerbellMachineConfig.internalValue = value;
  }
  public resetTinkerbellMachineConfig() {
    this._tinkerbellMachineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tinkerbellMachineConfigInput() {
    return this._tinkerbellMachineConfig.internalValue;
  }

  // tinkerbell_template_config - computed: false, optional: true, required: false
  private _tinkerbellTemplateConfig = new AksClusterV3SpecConfigTinkerbellTemplateConfigList(this, "tinkerbell_template_config", false);
  public get tinkerbellTemplateConfig() {
    return this._tinkerbellTemplateConfig;
  }
  public putTinkerbellTemplateConfig(value: AksClusterV3SpecConfigTinkerbellTemplateConfig[] | cdktf.IResolvable) {
    this._tinkerbellTemplateConfig.internalValue = value;
  }
  public resetTinkerbellTemplateConfig() {
    this._tinkerbellTemplateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tinkerbellTemplateConfigInput() {
    return this._tinkerbellTemplateConfig.internalValue;
  }

  // vsphere_network - computed: false, optional: true, required: false
  private _vsphereNetwork = new AksClusterV3SpecConfigVsphereNetworkOutputReference(this, "vsphere_network");
  public get vsphereNetwork() {
    return this._vsphereNetwork;
  }
  public putVsphereNetwork(value: AksClusterV3SpecConfigVsphereNetwork) {
    this._vsphereNetwork.internalValue = value;
  }
  public resetVsphereNetwork() {
    this._vsphereNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereNetworkInput() {
    return this._vsphereNetwork.internalValue;
  }

  // vsphere_node_pools - computed: false, optional: true, required: false
  private _vsphereNodePools = new AksClusterV3SpecConfigVsphereNodePoolsList(this, "vsphere_node_pools", false);
  public get vsphereNodePools() {
    return this._vsphereNodePools;
  }
  public putVsphereNodePools(value: AksClusterV3SpecConfigVsphereNodePools[] | cdktf.IResolvable) {
    this._vsphereNodePools.internalValue = value;
  }
  public resetVsphereNodePools() {
    this._vsphereNodePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereNodePoolsInput() {
    return this._vsphereNodePools.internalValue;
  }

  // worker_nodes - computed: false, optional: true, required: false
  private _workerNodes = new AksClusterV3SpecConfigWorkerNodesOutputReference(this, "worker_nodes");
  public get workerNodes() {
    return this._workerNodes;
  }
  public putWorkerNodes(value: AksClusterV3SpecConfigWorkerNodes) {
    this._workerNodes.internalValue = value;
  }
  public resetWorkerNodes() {
    this._workerNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodesInput() {
    return this._workerNodes.internalValue;
  }
}
export interface AksClusterV3SpecDrift {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#action AksClusterV3#action}
  */
  readonly action?: string;
  /**
  * flag to specify if drift reconcillation is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function aksClusterV3SpecDriftToTerraform(struct?: AksClusterV3SpecDriftOutputReference | AksClusterV3SpecDrift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function aksClusterV3SpecDriftToHclTerraform(struct?: AksClusterV3SpecDriftOutputReference | AksClusterV3SpecDrift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecDriftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecDrift | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecDrift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._enabled = value.enabled;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AksClusterV3SpecGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#id AksClusterV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecGatewayToTerraform(struct?: AksClusterV3SpecGatewayOutputReference | AksClusterV3SpecGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecGatewayToHclTerraform(struct?: AksClusterV3SpecGatewayOutputReference | AksClusterV3SpecGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class AksClusterV3SpecGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface AksClusterV3SpecProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#allow_insecure_bootstrap AksClusterV3#allow_insecure_bootstrap}
  */
  readonly allowInsecureBootstrap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#bootstrap_ca AksClusterV3#bootstrap_ca}
  */
  readonly bootstrapCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#http_proxy AksClusterV3#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#https_proxy AksClusterV3#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#no_proxy AksClusterV3#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#proxy_auth AksClusterV3#proxy_auth}
  */
  readonly proxyAuth?: string;
}

export function aksClusterV3SpecProxyToTerraform(struct?: AksClusterV3SpecProxyOutputReference | AksClusterV3SpecProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure_bootstrap: cdktf.booleanToTerraform(struct!.allowInsecureBootstrap),
    bootstrap_ca: cdktf.stringToTerraform(struct!.bootstrapCa),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    proxy_auth: cdktf.stringToTerraform(struct!.proxyAuth),
  }
}


export function aksClusterV3SpecProxyToHclTerraform(struct?: AksClusterV3SpecProxyOutputReference | AksClusterV3SpecProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure_bootstrap: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecureBootstrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bootstrap_ca: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_auth: {
      value: cdktf.stringToHclTerraform(struct!.proxyAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecureBootstrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecureBootstrap = this._allowInsecureBootstrap;
    }
    if (this._bootstrapCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapCa = this._bootstrapCa;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._proxyAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAuth = this._proxyAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecureBootstrap = undefined;
      this._bootstrapCa = undefined;
      this._enabled = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
      this._proxyAuth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecureBootstrap = value.allowInsecureBootstrap;
      this._bootstrapCa = value.bootstrapCa;
      this._enabled = value.enabled;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
      this._proxyAuth = value.proxyAuth;
    }
  }

  // allow_insecure_bootstrap - computed: false, optional: true, required: false
  private _allowInsecureBootstrap?: boolean | cdktf.IResolvable; 
  public get allowInsecureBootstrap() {
    return this.getBooleanAttribute('allow_insecure_bootstrap');
  }
  public set allowInsecureBootstrap(value: boolean | cdktf.IResolvable) {
    this._allowInsecureBootstrap = value;
  }
  public resetAllowInsecureBootstrap() {
    this._allowInsecureBootstrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureBootstrapInput() {
    return this._allowInsecureBootstrap;
  }

  // bootstrap_ca - computed: false, optional: true, required: false
  private _bootstrapCa?: string; 
  public get bootstrapCa() {
    return this.getStringAttribute('bootstrap_ca');
  }
  public set bootstrapCa(value: string) {
    this._bootstrapCa = value;
  }
  public resetBootstrapCa() {
    this._bootstrapCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapCaInput() {
    return this._bootstrapCa;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // proxy_auth - computed: false, optional: true, required: false
  private _proxyAuth?: string; 
  public get proxyAuth() {
    return this.getStringAttribute('proxy_auth');
  }
  public set proxyAuth(value: string) {
    this._proxyAuth = value;
  }
  public resetProxyAuth() {
    this._proxyAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAuthInput() {
    return this._proxyAuth;
  }
}
export interface AksClusterV3SpecProxyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#allow_insecure_bootstrap AksClusterV3#allow_insecure_bootstrap}
  */
  readonly allowInsecureBootstrap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#bootstrap_ca AksClusterV3#bootstrap_ca}
  */
  readonly bootstrapCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#http_proxy AksClusterV3#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#https_proxy AksClusterV3#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#no_proxy AksClusterV3#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#proxy_auth AksClusterV3#proxy_auth}
  */
  readonly proxyAuth?: string;
}

export function aksClusterV3SpecProxyConfigToTerraform(struct?: AksClusterV3SpecProxyConfigOutputReference | AksClusterV3SpecProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure_bootstrap: cdktf.booleanToTerraform(struct!.allowInsecureBootstrap),
    bootstrap_ca: cdktf.stringToTerraform(struct!.bootstrapCa),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    proxy_auth: cdktf.stringToTerraform(struct!.proxyAuth),
  }
}


export function aksClusterV3SpecProxyConfigToHclTerraform(struct?: AksClusterV3SpecProxyConfigOutputReference | AksClusterV3SpecProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure_bootstrap: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecureBootstrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bootstrap_ca: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_auth: {
      value: cdktf.stringToHclTerraform(struct!.proxyAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecureBootstrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecureBootstrap = this._allowInsecureBootstrap;
    }
    if (this._bootstrapCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapCa = this._bootstrapCa;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._proxyAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAuth = this._proxyAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecureBootstrap = undefined;
      this._bootstrapCa = undefined;
      this._enabled = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
      this._proxyAuth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecureBootstrap = value.allowInsecureBootstrap;
      this._bootstrapCa = value.bootstrapCa;
      this._enabled = value.enabled;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
      this._proxyAuth = value.proxyAuth;
    }
  }

  // allow_insecure_bootstrap - computed: false, optional: true, required: false
  private _allowInsecureBootstrap?: boolean | cdktf.IResolvable; 
  public get allowInsecureBootstrap() {
    return this.getBooleanAttribute('allow_insecure_bootstrap');
  }
  public set allowInsecureBootstrap(value: boolean | cdktf.IResolvable) {
    this._allowInsecureBootstrap = value;
  }
  public resetAllowInsecureBootstrap() {
    this._allowInsecureBootstrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureBootstrapInput() {
    return this._allowInsecureBootstrap;
  }

  // bootstrap_ca - computed: false, optional: true, required: false
  private _bootstrapCa?: string; 
  public get bootstrapCa() {
    return this.getStringAttribute('bootstrap_ca');
  }
  public set bootstrapCa(value: string) {
    this._bootstrapCa = value;
  }
  public resetBootstrapCa() {
    this._bootstrapCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapCaInput() {
    return this._bootstrapCa;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // proxy_auth - computed: false, optional: true, required: false
  private _proxyAuth?: string; 
  public get proxyAuth() {
    return this.getStringAttribute('proxy_auth');
  }
  public set proxyAuth(value: string) {
    this._proxyAuth = value;
  }
  public resetProxyAuth() {
    this._proxyAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAuthInput() {
    return this._proxyAuth;
  }
}
export interface AksClusterV3SpecSharingProjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#name AksClusterV3#name}
  */
  readonly name?: string;
}

export function aksClusterV3SpecSharingProjectsToTerraform(struct?: AksClusterV3SpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aksClusterV3SpecSharingProjectsToHclTerraform(struct?: AksClusterV3SpecSharingProjects | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecSharingProjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecSharingProjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class AksClusterV3SpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecSharingProjectsOutputReference {
    return new AksClusterV3SpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecSharing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#enabled AksClusterV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#projects AksClusterV3#projects}
  */
  readonly projects?: AksClusterV3SpecSharingProjects[] | cdktf.IResolvable;
}

export function aksClusterV3SpecSharingToTerraform(struct?: AksClusterV3SpecSharingOutputReference | AksClusterV3SpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(aksClusterV3SpecSharingProjectsToTerraform, true)(struct!.projects),
  }
}


export function aksClusterV3SpecSharingToHclTerraform(struct?: AksClusterV3SpecSharingOutputReference | AksClusterV3SpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    projects: {
      value: cdktf.listMapperHcl(aksClusterV3SpecSharingProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "set",
      storageClassType: "AksClusterV3SpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecSharing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._projects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecSharing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._projects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._projects.internalValue = value.projects;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // projects - computed: false, optional: true, required: false
  private _projects = new AksClusterV3SpecSharingProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: AksClusterV3SpecSharingProjects[] | cdktf.IResolvable) {
    this._projects.internalValue = value;
  }
  public resetProjects() {
    this._projects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }
}
export interface AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#effect AksClusterV3#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#key AksClusterV3#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#operator AksClusterV3#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#toleration_seconds AksClusterV3#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#value AksClusterV3#value}
  */
  readonly value?: string;
}

export function aksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerationsToTerraform(struct?: AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function aksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerationsToHclTerraform(struct?: AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerationsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerations[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerationsOutputReference {
    return new AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecSystemComponentsPlacementDaemonSetOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#node_selection_enabled AksClusterV3#node_selection_enabled}
  */
  readonly nodeSelectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#tolerations AksClusterV3#tolerations}
  */
  readonly tolerations?: AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerations[] | cdktf.IResolvable;
}

export function aksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideToTerraform(struct?: AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideOutputReference | AksClusterV3SpecSystemComponentsPlacementDaemonSetOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selection_enabled: cdktf.booleanToTerraform(struct!.nodeSelectionEnabled),
    tolerations: cdktf.listMapper(aksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function aksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideToHclTerraform(struct?: AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideOutputReference | AksClusterV3SpecSystemComponentsPlacementDaemonSetOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.nodeSelectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tolerations: {
      value: cdktf.listMapperHcl(aksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecSystemComponentsPlacementDaemonSetOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectionEnabled = this._nodeSelectionEnabled;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecSystemComponentsPlacementDaemonSetOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelectionEnabled = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelectionEnabled = value.nodeSelectionEnabled;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selection_enabled - computed: false, optional: true, required: false
  private _nodeSelectionEnabled?: boolean | cdktf.IResolvable; 
  public get nodeSelectionEnabled() {
    return this.getBooleanAttribute('node_selection_enabled');
  }
  public set nodeSelectionEnabled(value: boolean | cdktf.IResolvable) {
    this._nodeSelectionEnabled = value;
  }
  public resetNodeSelectionEnabled() {
    this._nodeSelectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectionEnabledInput() {
    return this._nodeSelectionEnabled;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface AksClusterV3SpecSystemComponentsPlacementTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#effect AksClusterV3#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#key AksClusterV3#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#operator AksClusterV3#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#toleration_seconds AksClusterV3#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#value AksClusterV3#value}
  */
  readonly value?: string;
}

export function aksClusterV3SpecSystemComponentsPlacementTolerationsToTerraform(struct?: AksClusterV3SpecSystemComponentsPlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function aksClusterV3SpecSystemComponentsPlacementTolerationsToHclTerraform(struct?: AksClusterV3SpecSystemComponentsPlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecSystemComponentsPlacementTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AksClusterV3SpecSystemComponentsPlacementTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecSystemComponentsPlacementTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AksClusterV3SpecSystemComponentsPlacementTolerationsList extends cdktf.ComplexList {
  public internalValue? : AksClusterV3SpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable

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
  public get(index: number): AksClusterV3SpecSystemComponentsPlacementTolerationsOutputReference {
    return new AksClusterV3SpecSystemComponentsPlacementTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AksClusterV3SpecSystemComponentsPlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#node_selector AksClusterV3#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * daemon_set_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#daemon_set_override AksClusterV3#daemon_set_override}
  */
  readonly daemonSetOverride?: AksClusterV3SpecSystemComponentsPlacementDaemonSetOverride;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#tolerations AksClusterV3#tolerations}
  */
  readonly tolerations?: AksClusterV3SpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable;
}

export function aksClusterV3SpecSystemComponentsPlacementToTerraform(struct?: AksClusterV3SpecSystemComponentsPlacementOutputReference | AksClusterV3SpecSystemComponentsPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    daemon_set_override: aksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideToTerraform(struct!.daemonSetOverride),
    tolerations: cdktf.listMapper(aksClusterV3SpecSystemComponentsPlacementTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function aksClusterV3SpecSystemComponentsPlacementToHclTerraform(struct?: AksClusterV3SpecSystemComponentsPlacementOutputReference | AksClusterV3SpecSystemComponentsPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    daemon_set_override: {
      value: aksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideToHclTerraform(struct!.daemonSetOverride),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(aksClusterV3SpecSystemComponentsPlacementTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecSystemComponentsPlacementTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecSystemComponentsPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3SpecSystemComponentsPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._daemonSetOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonSetOverride = this._daemonSetOverride?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3SpecSystemComponentsPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelector = undefined;
      this._daemonSetOverride.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelector = value.nodeSelector;
      this._daemonSetOverride.internalValue = value.daemonSetOverride;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // daemon_set_override - computed: false, optional: true, required: false
  private _daemonSetOverride = new AksClusterV3SpecSystemComponentsPlacementDaemonSetOverrideOutputReference(this, "daemon_set_override");
  public get daemonSetOverride() {
    return this._daemonSetOverride;
  }
  public putDaemonSetOverride(value: AksClusterV3SpecSystemComponentsPlacementDaemonSetOverride) {
    this._daemonSetOverride.internalValue = value;
  }
  public resetDaemonSetOverride() {
    this._daemonSetOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonSetOverrideInput() {
    return this._daemonSetOverride.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new AksClusterV3SpecSystemComponentsPlacementTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: AksClusterV3SpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface AksClusterV3Spec {
  /**
  * The credentials to be used to interact with the cloud infrastructure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#cloud_credentials AksClusterV3#cloud_credentials}
  */
  readonly cloudCredentials?: string;
  /**
  * Role ARN of the cross account support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#cross_account_role_arn AksClusterV3#cross_account_role_arn}
  */
  readonly crossAccountRoleArn?: string;
  /**
  * The type of the cluster this spec corresponds to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#type AksClusterV3#type}
  */
  readonly type?: string;
  /**
  * blueprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#blueprint AksClusterV3#blueprint}
  */
  readonly blueprint?: AksClusterV3SpecBlueprint;
  /**
  * blueprint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#blueprint_config AksClusterV3#blueprint_config}
  */
  readonly blueprintConfig?: AksClusterV3SpecBlueprintConfig;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#config AksClusterV3#config}
  */
  readonly config?: AksClusterV3SpecConfig;
  /**
  * drift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#drift AksClusterV3#drift}
  */
  readonly drift?: AksClusterV3SpecDrift;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#gateway AksClusterV3#gateway}
  */
  readonly gateway?: AksClusterV3SpecGateway;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#proxy AksClusterV3#proxy}
  */
  readonly proxy?: AksClusterV3SpecProxy;
  /**
  * proxy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#proxy_config AksClusterV3#proxy_config}
  */
  readonly proxyConfig?: AksClusterV3SpecProxyConfig;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#sharing AksClusterV3#sharing}
  */
  readonly sharing?: AksClusterV3SpecSharing;
  /**
  * system_components_placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#system_components_placement AksClusterV3#system_components_placement}
  */
  readonly systemComponentsPlacement?: AksClusterV3SpecSystemComponentsPlacement;
}

export function aksClusterV3SpecToTerraform(struct?: AksClusterV3SpecOutputReference | AksClusterV3Spec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_credentials: cdktf.stringToTerraform(struct!.cloudCredentials),
    cross_account_role_arn: cdktf.stringToTerraform(struct!.crossAccountRoleArn),
    type: cdktf.stringToTerraform(struct!.type),
    blueprint: aksClusterV3SpecBlueprintToTerraform(struct!.blueprint),
    blueprint_config: aksClusterV3SpecBlueprintConfigToTerraform(struct!.blueprintConfig),
    config: aksClusterV3SpecConfigToTerraform(struct!.config),
    drift: aksClusterV3SpecDriftToTerraform(struct!.drift),
    gateway: aksClusterV3SpecGatewayToTerraform(struct!.gateway),
    proxy: aksClusterV3SpecProxyToTerraform(struct!.proxy),
    proxy_config: aksClusterV3SpecProxyConfigToTerraform(struct!.proxyConfig),
    sharing: aksClusterV3SpecSharingToTerraform(struct!.sharing),
    system_components_placement: aksClusterV3SpecSystemComponentsPlacementToTerraform(struct!.systemComponentsPlacement),
  }
}


export function aksClusterV3SpecToHclTerraform(struct?: AksClusterV3SpecOutputReference | AksClusterV3Spec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_credentials: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRoleArn),
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
    blueprint: {
      value: aksClusterV3SpecBlueprintToHclTerraform(struct!.blueprint),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecBlueprintList",
    },
    blueprint_config: {
      value: aksClusterV3SpecBlueprintConfigToHclTerraform(struct!.blueprintConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecBlueprintConfigList",
    },
    config: {
      value: aksClusterV3SpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecConfigList",
    },
    drift: {
      value: aksClusterV3SpecDriftToHclTerraform(struct!.drift),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecDriftList",
    },
    gateway: {
      value: aksClusterV3SpecGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecGatewayList",
    },
    proxy: {
      value: aksClusterV3SpecProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecProxyList",
    },
    proxy_config: {
      value: aksClusterV3SpecProxyConfigToHclTerraform(struct!.proxyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecProxyConfigList",
    },
    sharing: {
      value: aksClusterV3SpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecSharingList",
    },
    system_components_placement: {
      value: aksClusterV3SpecSystemComponentsPlacementToHclTerraform(struct!.systemComponentsPlacement),
      isBlock: true,
      type: "list",
      storageClassType: "AksClusterV3SpecSystemComponentsPlacementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterV3SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterV3Spec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentials = this._cloudCredentials;
    }
    if (this._crossAccountRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRoleArn = this._crossAccountRoleArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._blueprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprint = this._blueprint?.internalValue;
    }
    if (this._blueprintConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintConfig = this._blueprintConfig?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._drift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drift = this._drift?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._proxyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConfig = this._proxyConfig?.internalValue;
    }
    if (this._sharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing?.internalValue;
    }
    if (this._systemComponentsPlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemComponentsPlacement = this._systemComponentsPlacement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterV3Spec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudCredentials = undefined;
      this._crossAccountRoleArn = undefined;
      this._type = undefined;
      this._blueprint.internalValue = undefined;
      this._blueprintConfig.internalValue = undefined;
      this._config.internalValue = undefined;
      this._drift.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._proxy.internalValue = undefined;
      this._proxyConfig.internalValue = undefined;
      this._sharing.internalValue = undefined;
      this._systemComponentsPlacement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudCredentials = value.cloudCredentials;
      this._crossAccountRoleArn = value.crossAccountRoleArn;
      this._type = value.type;
      this._blueprint.internalValue = value.blueprint;
      this._blueprintConfig.internalValue = value.blueprintConfig;
      this._config.internalValue = value.config;
      this._drift.internalValue = value.drift;
      this._gateway.internalValue = value.gateway;
      this._proxy.internalValue = value.proxy;
      this._proxyConfig.internalValue = value.proxyConfig;
      this._sharing.internalValue = value.sharing;
      this._systemComponentsPlacement.internalValue = value.systemComponentsPlacement;
    }
  }

  // cloud_credentials - computed: false, optional: true, required: false
  private _cloudCredentials?: string; 
  public get cloudCredentials() {
    return this.getStringAttribute('cloud_credentials');
  }
  public set cloudCredentials(value: string) {
    this._cloudCredentials = value;
  }
  public resetCloudCredentials() {
    this._cloudCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialsInput() {
    return this._cloudCredentials;
  }

  // cross_account_role_arn - computed: false, optional: true, required: false
  private _crossAccountRoleArn?: string; 
  public get crossAccountRoleArn() {
    return this.getStringAttribute('cross_account_role_arn');
  }
  public set crossAccountRoleArn(value: string) {
    this._crossAccountRoleArn = value;
  }
  public resetCrossAccountRoleArn() {
    this._crossAccountRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleArnInput() {
    return this._crossAccountRoleArn;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // blueprint - computed: false, optional: true, required: false
  private _blueprint = new AksClusterV3SpecBlueprintOutputReference(this, "blueprint");
  public get blueprint() {
    return this._blueprint;
  }
  public putBlueprint(value: AksClusterV3SpecBlueprint) {
    this._blueprint.internalValue = value;
  }
  public resetBlueprint() {
    this._blueprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint.internalValue;
  }

  // blueprint_config - computed: false, optional: true, required: false
  private _blueprintConfig = new AksClusterV3SpecBlueprintConfigOutputReference(this, "blueprint_config");
  public get blueprintConfig() {
    return this._blueprintConfig;
  }
  public putBlueprintConfig(value: AksClusterV3SpecBlueprintConfig) {
    this._blueprintConfig.internalValue = value;
  }
  public resetBlueprintConfig() {
    this._blueprintConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintConfigInput() {
    return this._blueprintConfig.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new AksClusterV3SpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AksClusterV3SpecConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // drift - computed: false, optional: true, required: false
  private _drift = new AksClusterV3SpecDriftOutputReference(this, "drift");
  public get drift() {
    return this._drift;
  }
  public putDrift(value: AksClusterV3SpecDrift) {
    this._drift.internalValue = value;
  }
  public resetDrift() {
    this._drift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftInput() {
    return this._drift.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new AksClusterV3SpecGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: AksClusterV3SpecGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new AksClusterV3SpecProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: AksClusterV3SpecProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // proxy_config - computed: false, optional: true, required: false
  private _proxyConfig = new AksClusterV3SpecProxyConfigOutputReference(this, "proxy_config");
  public get proxyConfig() {
    return this._proxyConfig;
  }
  public putProxyConfig(value: AksClusterV3SpecProxyConfig) {
    this._proxyConfig.internalValue = value;
  }
  public resetProxyConfig() {
    this._proxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigInput() {
    return this._proxyConfig.internalValue;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing = new AksClusterV3SpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: AksClusterV3SpecSharing) {
    this._sharing.internalValue = value;
  }
  public resetSharing() {
    this._sharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing.internalValue;
  }

  // system_components_placement - computed: false, optional: true, required: false
  private _systemComponentsPlacement = new AksClusterV3SpecSystemComponentsPlacementOutputReference(this, "system_components_placement");
  public get systemComponentsPlacement() {
    return this._systemComponentsPlacement;
  }
  public putSystemComponentsPlacement(value: AksClusterV3SpecSystemComponentsPlacement) {
    this._systemComponentsPlacement.internalValue = value;
  }
  public resetSystemComponentsPlacement() {
    this._systemComponentsPlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemComponentsPlacementInput() {
    return this._systemComponentsPlacement.internalValue;
  }
}
export interface AksClusterV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#create AksClusterV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#delete AksClusterV3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/aks_cluster_v3#update AksClusterV3#update}
  */
  readonly update?: string;
}

export function aksClusterV3TimeoutsToTerraform(struct?: AksClusterV3Timeouts | cdktf.IResolvable): any {
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


export function aksClusterV3TimeoutsToHclTerraform(struct?: AksClusterV3Timeouts | cdktf.IResolvable): any {
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

export class AksClusterV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AksClusterV3Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterV3Timeouts | cdktf.IResolvable | undefined) {
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
