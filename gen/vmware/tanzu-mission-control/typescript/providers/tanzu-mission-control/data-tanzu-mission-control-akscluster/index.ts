// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTanzuMissionControlAksclusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Azure Credential in Tanzu Mission Control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#credential_name DataTanzuMissionControlAkscluster#credential_name}
  */
  readonly credentialName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#id DataTanzuMissionControlAkscluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#name DataTanzuMissionControlAkscluster#name}
  */
  readonly name: string;
  /**
  * Wait timeout duration until cluster resource reaches READY state. Accepted timeout duration values like 5s, 45m, or 3h, higher than zero.  The default duration is 30m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#ready_wait_timeout DataTanzuMissionControlAkscluster#ready_wait_timeout}
  */
  readonly readyWaitTimeout?: string;
  /**
  * Resource group for this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#resource_group DataTanzuMissionControlAkscluster#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Azure Subscription for this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#subscription_id DataTanzuMissionControlAkscluster#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Wait until pinniped extension is ready to provide kubeconfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#wait_for_kubeconfig DataTanzuMissionControlAkscluster#wait_for_kubeconfig}
  */
  readonly waitForKubeconfig?: boolean | cdktf.IResolvable;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#meta DataTanzuMissionControlAkscluster#meta}
  */
  readonly meta?: DataTanzuMissionControlAksclusterMeta;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#spec DataTanzuMissionControlAkscluster#spec}
  */
  readonly spec?: DataTanzuMissionControlAksclusterSpec;
}
export interface DataTanzuMissionControlAksclusterMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#annotations DataTanzuMissionControlAkscluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#description DataTanzuMissionControlAkscluster#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#labels DataTanzuMissionControlAkscluster#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataTanzuMissionControlAksclusterMetaToTerraform(struct?: DataTanzuMissionControlAksclusterMetaOutputReference | DataTanzuMissionControlAksclusterMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataTanzuMissionControlAksclusterMetaToHclTerraform(struct?: DataTanzuMissionControlAksclusterMetaOutputReference | DataTanzuMissionControlAksclusterMeta): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfig {
  /**
  * List of AAD group object IDs that will have admin role of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#admin_group_ids DataTanzuMissionControlAkscluster#admin_group_ids}
  */
  readonly adminGroupIds?: string[];
  /**
  * Enable Azure RBAC for Kubernetes authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#enable_azure_rbac DataTanzuMissionControlAkscluster#enable_azure_rbac}
  */
  readonly enableAzureRbac?: boolean | cdktf.IResolvable;
  /**
  * Enable Managed RBAC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#managed DataTanzuMissionControlAkscluster#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#tenant_id DataTanzuMissionControlAkscluster#tenant_id}
  */
  readonly tenantId?: string;
}

export function dataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminGroupIds),
    enable_azure_rbac: cdktf.booleanToTerraform(struct!.enableAzureRbac),
    managed: cdktf.booleanToTerraform(struct!.managed),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_azure_rbac: {
      value: cdktf.booleanToHclTerraform(struct!.enableAzureRbac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    managed: {
      value: cdktf.booleanToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminGroupIds = this._adminGroupIds;
    }
    if (this._enableAzureRbac !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAzureRbac = this._enableAzureRbac;
    }
    if (this._managed !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminGroupIds = undefined;
      this._enableAzureRbac = undefined;
      this._managed = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminGroupIds = value.adminGroupIds;
      this._enableAzureRbac = value.enableAzureRbac;
      this._managed = value.managed;
      this._tenantId = value.tenantId;
    }
  }

  // admin_group_ids - computed: false, optional: true, required: false
  private _adminGroupIds?: string[]; 
  public get adminGroupIds() {
    return this.getListAttribute('admin_group_ids');
  }
  public set adminGroupIds(value: string[]) {
    this._adminGroupIds = value;
  }
  public resetAdminGroupIds() {
    this._adminGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupIdsInput() {
    return this._adminGroupIds;
  }

  // enable_azure_rbac - computed: false, optional: true, required: false
  private _enableAzureRbac?: boolean | cdktf.IResolvable; 
  public get enableAzureRbac() {
    return this.getBooleanAttribute('enable_azure_rbac');
  }
  public set enableAzureRbac(value: boolean | cdktf.IResolvable) {
    this._enableAzureRbac = value;
  }
  public resetEnableAzureRbac() {
    this._enableAzureRbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAzureRbacInput() {
    return this._enableAzureRbac;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigAccessConfig {
  /**
  * Disable local accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#disable_local_accounts DataTanzuMissionControlAkscluster#disable_local_accounts}
  */
  readonly disableLocalAccounts?: boolean | cdktf.IResolvable;
  /**
  * Enable kubernetes RBAC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#enable_rbac DataTanzuMissionControlAkscluster#enable_rbac}
  */
  readonly enableRbac?: boolean | cdktf.IResolvable;
  /**
  * aad_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#aad_config DataTanzuMissionControlAkscluster#aad_config}
  */
  readonly aadConfig?: DataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfig;
}

export function dataTanzuMissionControlAksclusterSpecConfigAccessConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAccessConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_local_accounts: cdktf.booleanToTerraform(struct!.disableLocalAccounts),
    enable_rbac: cdktf.booleanToTerraform(struct!.enableRbac),
    aad_config: dataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfigToTerraform(struct!.aadConfig),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigAccessConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAccessConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigAccessConfig): any {
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
    enable_rbac: {
      value: cdktf.booleanToHclTerraform(struct!.enableRbac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aad_config: {
      value: dataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfigToHclTerraform(struct!.aadConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableLocalAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLocalAccounts = this._disableLocalAccounts;
    }
    if (this._enableRbac !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRbac = this._enableRbac;
    }
    if (this._aadConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadConfig = this._aadConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableLocalAccounts = undefined;
      this._enableRbac = undefined;
      this._aadConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableLocalAccounts = value.disableLocalAccounts;
      this._enableRbac = value.enableRbac;
      this._aadConfig.internalValue = value.aadConfig;
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

  // aad_config - computed: false, optional: true, required: false
  private _aadConfig = new DataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfigOutputReference(this, "aad_config");
  public get aadConfig() {
    return this._aadConfig;
  }
  public putAadConfig(value: DataTanzuMissionControlAksclusterSpecConfigAccessConfigAadConfig) {
    this._aadConfig.internalValue = value;
  }
  public resetAadConfig() {
    this._aadConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadConfigInput() {
    return this._aadConfig.internalValue;
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfig {
  /**
  * Enable Azure Key Vault Secrets Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#enable DataTanzuMissionControlAkscluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Enable secrets rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#enable_secret_rotation DataTanzuMissionControlAkscluster#enable_secret_rotation}
  */
  readonly enableSecretRotation?: boolean | cdktf.IResolvable;
  /**
  * Secret rotation interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#rotation_poll_interval DataTanzuMissionControlAkscluster#rotation_poll_interval}
  */
  readonly rotationPollInterval?: string;
}

export function dataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    enable_secret_rotation: cdktf.booleanToTerraform(struct!.enableSecretRotation),
    rotation_poll_interval: cdktf.stringToTerraform(struct!.rotationPollInterval),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secret_rotation: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecretRotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotation_poll_interval: {
      value: cdktf.stringToHclTerraform(struct!.rotationPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enableSecretRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecretRotation = this._enableSecretRotation;
    }
    if (this._rotationPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationPollInterval = this._rotationPollInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._enableSecretRotation = undefined;
      this._rotationPollInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._enableSecretRotation = value.enableSecretRotation;
      this._rotationPollInterval = value.rotationPollInterval;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_secret_rotation - computed: false, optional: true, required: false
  private _enableSecretRotation?: boolean | cdktf.IResolvable; 
  public get enableSecretRotation() {
    return this.getBooleanAttribute('enable_secret_rotation');
  }
  public set enableSecretRotation(value: boolean | cdktf.IResolvable) {
    this._enableSecretRotation = value;
  }
  public resetEnableSecretRotation() {
    this._enableSecretRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecretRotationInput() {
    return this._enableSecretRotation;
  }

  // rotation_poll_interval - computed: false, optional: true, required: false
  private _rotationPollInterval?: string; 
  public get rotationPollInterval() {
    return this.getStringAttribute('rotation_poll_interval');
  }
  public set rotationPollInterval(value: string) {
    this._rotationPollInterval = value;
  }
  public resetRotationPollInterval() {
    this._rotationPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPollIntervalInput() {
    return this._rotationPollInterval;
  }
}

export class DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfigList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfig[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfigOutputReference {
    return new DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfig {
  /**
  * Enable policy addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#enable DataTanzuMissionControlAkscluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}

export class DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfigList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfig[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfigOutputReference {
    return new DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfig {
  /**
  * Enable monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#enable DataTanzuMissionControlAkscluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Log analytics workspace ID for the monitoring addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#log_analytics_workspace_id DataTanzuMissionControlAkscluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

export function dataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_analytics_workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._logAnalyticsWorkspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }
}

export class DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfigList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfig[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfigOutputReference {
    return new DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigAddonConfig {
  /**
  * azure_keyvault_secrets_provider_addon_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#azure_keyvault_secrets_provider_addon_config DataTanzuMissionControlAkscluster#azure_keyvault_secrets_provider_addon_config}
  */
  readonly azureKeyvaultSecretsProviderAddonConfig?: DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfig[] | cdktf.IResolvable;
  /**
  * azure_policy_addon_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#azure_policy_addon_config DataTanzuMissionControlAkscluster#azure_policy_addon_config}
  */
  readonly azurePolicyAddonConfig?: DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfig[] | cdktf.IResolvable;
  /**
  * monitor_addon_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#monitor_addon_config DataTanzuMissionControlAkscluster#monitor_addon_config}
  */
  readonly monitorAddonConfig?: DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfig[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlAksclusterSpecConfigAddonConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAddonConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigAddonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_keyvault_secrets_provider_addon_config: cdktf.listMapper(dataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfigToTerraform, true)(struct!.azureKeyvaultSecretsProviderAddonConfig),
    azure_policy_addon_config: cdktf.listMapper(dataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfigToTerraform, true)(struct!.azurePolicyAddonConfig),
    monitor_addon_config: cdktf.listMapper(dataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfigToTerraform, true)(struct!.monitorAddonConfig),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigAddonConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAddonConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigAddonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_keyvault_secrets_provider_addon_config: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfigToHclTerraform, true)(struct!.azureKeyvaultSecretsProviderAddonConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfigList",
    },
    azure_policy_addon_config: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfigToHclTerraform, true)(struct!.azurePolicyAddonConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfigList",
    },
    monitor_addon_config: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfigToHclTerraform, true)(struct!.monitorAddonConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigAddonConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigAddonConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureKeyvaultSecretsProviderAddonConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureKeyvaultSecretsProviderAddonConfig = this._azureKeyvaultSecretsProviderAddonConfig?.internalValue;
    }
    if (this._azurePolicyAddonConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePolicyAddonConfig = this._azurePolicyAddonConfig?.internalValue;
    }
    if (this._monitorAddonConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorAddonConfig = this._monitorAddonConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigAddonConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureKeyvaultSecretsProviderAddonConfig.internalValue = undefined;
      this._azurePolicyAddonConfig.internalValue = undefined;
      this._monitorAddonConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureKeyvaultSecretsProviderAddonConfig.internalValue = value.azureKeyvaultSecretsProviderAddonConfig;
      this._azurePolicyAddonConfig.internalValue = value.azurePolicyAddonConfig;
      this._monitorAddonConfig.internalValue = value.monitorAddonConfig;
    }
  }

  // azure_keyvault_secrets_provider_addon_config - computed: false, optional: true, required: false
  private _azureKeyvaultSecretsProviderAddonConfig = new DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfigList(this, "azure_keyvault_secrets_provider_addon_config", false);
  public get azureKeyvaultSecretsProviderAddonConfig() {
    return this._azureKeyvaultSecretsProviderAddonConfig;
  }
  public putAzureKeyvaultSecretsProviderAddonConfig(value: DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzureKeyvaultSecretsProviderAddonConfig[] | cdktf.IResolvable) {
    this._azureKeyvaultSecretsProviderAddonConfig.internalValue = value;
  }
  public resetAzureKeyvaultSecretsProviderAddonConfig() {
    this._azureKeyvaultSecretsProviderAddonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyvaultSecretsProviderAddonConfigInput() {
    return this._azureKeyvaultSecretsProviderAddonConfig.internalValue;
  }

  // azure_policy_addon_config - computed: false, optional: true, required: false
  private _azurePolicyAddonConfig = new DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfigList(this, "azure_policy_addon_config", false);
  public get azurePolicyAddonConfig() {
    return this._azurePolicyAddonConfig;
  }
  public putAzurePolicyAddonConfig(value: DataTanzuMissionControlAksclusterSpecConfigAddonConfigAzurePolicyAddonConfig[] | cdktf.IResolvable) {
    this._azurePolicyAddonConfig.internalValue = value;
  }
  public resetAzurePolicyAddonConfig() {
    this._azurePolicyAddonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePolicyAddonConfigInput() {
    return this._azurePolicyAddonConfig.internalValue;
  }

  // monitor_addon_config - computed: false, optional: true, required: false
  private _monitorAddonConfig = new DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfigList(this, "monitor_addon_config", false);
  public get monitorAddonConfig() {
    return this._monitorAddonConfig;
  }
  public putMonitorAddonConfig(value: DataTanzuMissionControlAksclusterSpecConfigAddonConfigMonitorAddonConfig[] | cdktf.IResolvable) {
    this._monitorAddonConfig.internalValue = value;
  }
  public resetMonitorAddonConfig() {
    this._monitorAddonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAddonConfigInput() {
    return this._monitorAddonConfig.internalValue;
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfig {
  /**
  * IP ranges authorized to access the Kubernetes API server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#authorized_ip_ranges DataTanzuMissionControlAkscluster#authorized_ip_ranges}
  */
  readonly authorizedIpRanges?: string[];
  /**
  * Enable Private Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#enable_private_cluster DataTanzuMissionControlAkscluster#enable_private_cluster}
  */
  readonly enablePrivateCluster: boolean | cdktf.IResolvable;
}

export function dataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedIpRanges),
    enable_private_cluster: cdktf.booleanToTerraform(struct!.enablePrivateCluster),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_private_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedIpRanges = this._authorizedIpRanges;
    }
    if (this._enablePrivateCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateCluster = this._enablePrivateCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizedIpRanges = undefined;
      this._enablePrivateCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizedIpRanges = value.authorizedIpRanges;
      this._enablePrivateCluster = value.enablePrivateCluster;
    }
  }

  // authorized_ip_ranges - computed: false, optional: true, required: false
  private _authorizedIpRanges?: string[]; 
  public get authorizedIpRanges() {
    return this.getListAttribute('authorized_ip_ranges');
  }
  public set authorizedIpRanges(value: string[]) {
    this._authorizedIpRanges = value;
  }
  public resetAuthorizedIpRanges() {
    this._authorizedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedIpRangesInput() {
    return this._authorizedIpRanges;
  }

  // enable_private_cluster - computed: false, optional: false, required: true
  private _enablePrivateCluster?: boolean | cdktf.IResolvable; 
  public get enablePrivateCluster() {
    return this.getBooleanAttribute('enable_private_cluster');
  }
  public set enablePrivateCluster(value: boolean | cdktf.IResolvable) {
    this._enablePrivateCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateClusterInput() {
    return this._enablePrivateCluster;
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfig {
  /**
  * Upgrade Channel. Allowed values include: NONE, PATCH, STABLE, RAPID or NODE_IMAGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#upgrade_channel DataTanzuMissionControlAkscluster#upgrade_channel}
  */
  readonly upgradeChannel?: string;
}

export function dataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upgrade_channel: cdktf.stringToTerraform(struct!.upgradeChannel),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    upgrade_channel: {
      value: cdktf.stringToHclTerraform(struct!.upgradeChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upgradeChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeChannel = this._upgradeChannel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._upgradeChannel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._upgradeChannel = value.upgradeChannel;
    }
  }

  // upgrade_channel - computed: false, optional: true, required: false
  private _upgradeChannel?: string; 
  public get upgradeChannel() {
    return this.getStringAttribute('upgrade_channel');
  }
  public set upgradeChannel(value: string) {
    this._upgradeChannel = value;
  }
  public resetUpgradeChannel() {
    this._upgradeChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeChannelInput() {
    return this._upgradeChannel;
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssigned {
  /**
  * The ARM resource ID of user assigned identity in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#resource_id DataTanzuMissionControlAkscluster#resource_id}
  */
  readonly resourceId: string;
}

export function dataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssignedToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssignedOutputReference | DataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssignedToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssignedOutputReference | DataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssignedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssigned | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssigned | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigIdentityConfig {
  /**
  * Type of managed identity used by the cluster (default IDENTITY_TYPE_SYSTEM_ASSIGNED). Allowed values include: IDENTITY_TYPE_SYSTEM_ASSIGNED or IDENTITY_TYPE_USER_ASSIGNED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#type DataTanzuMissionControlAkscluster#type}
  */
  readonly type?: string;
  /**
  * user_assigned block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#user_assigned DataTanzuMissionControlAkscluster#user_assigned}
  */
  readonly userAssigned?: DataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssigned;
}

export function dataTanzuMissionControlAksclusterSpecConfigIdentityConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigIdentityConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned: dataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssignedToTerraform(struct!.userAssigned),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigIdentityConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigIdentityConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned: {
      value: dataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssignedToHclTerraform(struct!.userAssigned),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssignedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigIdentityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAssigned?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssigned = this._userAssigned?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigIdentityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._userAssigned.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._userAssigned.internalValue = value.userAssigned;
    }
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

  // user_assigned - computed: false, optional: true, required: false
  private _userAssigned = new DataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssignedOutputReference(this, "user_assigned");
  public get userAssigned() {
    return this._userAssigned;
  }
  public putUserAssigned(value: DataTanzuMissionControlAksclusterSpecConfigIdentityConfigUserAssigned) {
    this._userAssigned.internalValue = value;
  }
  public resetUserAssigned() {
    this._userAssigned.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedInput() {
    return this._userAssigned.internalValue;
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigLinuxConfig {
  /**
  * Administrator username to use for Linux VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#admin_username DataTanzuMissionControlAkscluster#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#ssh_keys DataTanzuMissionControlAkscluster#ssh_keys}
  */
  readonly sshKeys?: string[];
}

export function dataTanzuMissionControlAksclusterSpecConfigLinuxConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigLinuxConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigLinuxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigLinuxConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigLinuxConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigLinuxConfig): any {
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
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigLinuxConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigLinuxConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigLinuxConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._sshKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._sshKeys = value.sshKeys;
    }
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigNetworkConfig {
  /**
  * DNS prefix of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#dns_prefix DataTanzuMissionControlAkscluster#dns_prefix}
  */
  readonly dnsPrefix: string;
  /**
  * IP address assigned to the Kubernetes DNS service. This key can only be set when the network_config.network_plugin key is set to 'azure'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#dns_service_ip DataTanzuMissionControlAkscluster#dns_service_ip}
  */
  readonly dnsServiceIp?: string;
  /**
  * A CIDR notation IP range assigned to the Docker bridge network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#docker_bridge_cidr DataTanzuMissionControlAkscluster#docker_bridge_cidr}
  */
  readonly dockerBridgeCidr?: string;
  /**
  * Load balancer SKU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#load_balancer_sku DataTanzuMissionControlAkscluster#load_balancer_sku}
  */
  readonly loadBalancerSku?: string;
  /**
  * Network dataplane used in the Kubernetes cluster. The valid value is azure and cilium.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#network_dataplane DataTanzuMissionControlAkscluster#network_dataplane}
  */
  readonly networkDataplane?: string;
  /**
  * Network plugin. It is used for building Kubernetes network. Allowed values: azure, kubenet. Specify 'azure' for routable pod IPs from VNET, 'kubenet' for non-routable pod IPs with an overlay network, Defaults to 'kubenet'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#network_plugin DataTanzuMissionControlAkscluster#network_plugin}
  */
  readonly networkPlugin?: string;
  /**
  * Network plugin mode. Allowed values: overlay. Used to control the mode the network plugin should operate in. For example, 'overlay' used with networkPlugin=azure will use an overlay network (non-VNET IPs) for pods in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#network_plugin_mode DataTanzuMissionControlAkscluster#network_plugin_mode}
  */
  readonly networkPluginMode?: string;
  /**
  * Network policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#network_policy DataTanzuMissionControlAkscluster#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * CIDR notation IP ranges from which to assign pod IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#pod_cidr DataTanzuMissionControlAkscluster#pod_cidr}
  */
  readonly podCidr?: string[];
  /**
  * CIDR notation IP ranges from which to assign service cluster IP. This key can only be set when the network_config.network_plugin key is set to 'azure'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#service_cidr DataTanzuMissionControlAkscluster#service_cidr}
  */
  readonly serviceCidr?: string[];
}

export function dataTanzuMissionControlAksclusterSpecConfigNetworkConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigNetworkConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_prefix: cdktf.stringToTerraform(struct!.dnsPrefix),
    dns_service_ip: cdktf.stringToTerraform(struct!.dnsServiceIp),
    docker_bridge_cidr: cdktf.stringToTerraform(struct!.dockerBridgeCidr),
    load_balancer_sku: cdktf.stringToTerraform(struct!.loadBalancerSku),
    network_dataplane: cdktf.stringToTerraform(struct!.networkDataplane),
    network_plugin: cdktf.stringToTerraform(struct!.networkPlugin),
    network_plugin_mode: cdktf.stringToTerraform(struct!.networkPluginMode),
    network_policy: cdktf.stringToTerraform(struct!.networkPolicy),
    pod_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podCidr),
    service_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceCidr),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigNetworkConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigNetworkConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_prefix: {
      value: cdktf.stringToHclTerraform(struct!.dnsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_service_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsServiceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_bridge_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dockerBridgeCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_sku: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_dataplane: {
      value: cdktf.stringToHclTerraform(struct!.networkDataplane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_plugin: {
      value: cdktf.stringToHclTerraform(struct!.networkPlugin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_plugin_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkPluginMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_policy: {
      value: cdktf.stringToHclTerraform(struct!.networkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPrefix = this._dnsPrefix;
    }
    if (this._dnsServiceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServiceIp = this._dnsServiceIp;
    }
    if (this._dockerBridgeCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerBridgeCidr = this._dockerBridgeCidr;
    }
    if (this._loadBalancerSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSku = this._loadBalancerSku;
    }
    if (this._networkDataplane !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDataplane = this._networkDataplane;
    }
    if (this._networkPlugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPlugin = this._networkPlugin;
    }
    if (this._networkPluginMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPluginMode = this._networkPluginMode;
    }
    if (this._networkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy;
    }
    if (this._podCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidr = this._podCidr;
    }
    if (this._serviceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidr = this._serviceCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsPrefix = undefined;
      this._dnsServiceIp = undefined;
      this._dockerBridgeCidr = undefined;
      this._loadBalancerSku = undefined;
      this._networkDataplane = undefined;
      this._networkPlugin = undefined;
      this._networkPluginMode = undefined;
      this._networkPolicy = undefined;
      this._podCidr = undefined;
      this._serviceCidr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsPrefix = value.dnsPrefix;
      this._dnsServiceIp = value.dnsServiceIp;
      this._dockerBridgeCidr = value.dockerBridgeCidr;
      this._loadBalancerSku = value.loadBalancerSku;
      this._networkDataplane = value.networkDataplane;
      this._networkPlugin = value.networkPlugin;
      this._networkPluginMode = value.networkPluginMode;
      this._networkPolicy = value.networkPolicy;
      this._podCidr = value.podCidr;
      this._serviceCidr = value.serviceCidr;
    }
  }

  // dns_prefix - computed: false, optional: false, required: true
  private _dnsPrefix?: string; 
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }
  public set dnsPrefix(value: string) {
    this._dnsPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixInput() {
    return this._dnsPrefix;
  }

  // dns_service_ip - computed: true, optional: true, required: false
  private _dnsServiceIp?: string; 
  public get dnsServiceIp() {
    return this.getStringAttribute('dns_service_ip');
  }
  public set dnsServiceIp(value: string) {
    this._dnsServiceIp = value;
  }
  public resetDnsServiceIp() {
    this._dnsServiceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceIpInput() {
    return this._dnsServiceIp;
  }

  // docker_bridge_cidr - computed: true, optional: true, required: false
  private _dockerBridgeCidr?: string; 
  public get dockerBridgeCidr() {
    return this.getStringAttribute('docker_bridge_cidr');
  }
  public set dockerBridgeCidr(value: string) {
    this._dockerBridgeCidr = value;
  }
  public resetDockerBridgeCidr() {
    this._dockerBridgeCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerBridgeCidrInput() {
    return this._dockerBridgeCidr;
  }

  // load_balancer_sku - computed: true, optional: true, required: false
  private _loadBalancerSku?: string; 
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }
  public set loadBalancerSku(value: string) {
    this._loadBalancerSku = value;
  }
  public resetLoadBalancerSku() {
    this._loadBalancerSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSkuInput() {
    return this._loadBalancerSku;
  }

  // network_dataplane - computed: true, optional: true, required: false
  private _networkDataplane?: string; 
  public get networkDataplane() {
    return this.getStringAttribute('network_dataplane');
  }
  public set networkDataplane(value: string) {
    this._networkDataplane = value;
  }
  public resetNetworkDataplane() {
    this._networkDataplane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDataplaneInput() {
    return this._networkDataplane;
  }

  // network_plugin - computed: true, optional: true, required: false
  private _networkPlugin?: string; 
  public get networkPlugin() {
    return this.getStringAttribute('network_plugin');
  }
  public set networkPlugin(value: string) {
    this._networkPlugin = value;
  }
  public resetNetworkPlugin() {
    this._networkPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPluginInput() {
    return this._networkPlugin;
  }

  // network_plugin_mode - computed: true, optional: true, required: false
  private _networkPluginMode?: string; 
  public get networkPluginMode() {
    return this.getStringAttribute('network_plugin_mode');
  }
  public set networkPluginMode(value: string) {
    this._networkPluginMode = value;
  }
  public resetNetworkPluginMode() {
    this._networkPluginMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPluginModeInput() {
    return this._networkPluginMode;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy?: string; 
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }
  public set networkPolicy(value: string) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy;
  }

  // pod_cidr - computed: true, optional: true, required: false
  private _podCidr?: string[]; 
  public get podCidr() {
    return this.getListAttribute('pod_cidr');
  }
  public set podCidr(value: string[]) {
    this._podCidr = value;
  }
  public resetPodCidr() {
    this._podCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrInput() {
    return this._podCidr;
  }

  // service_cidr - computed: true, optional: true, required: false
  private _serviceCidr?: string[]; 
  public get serviceCidr() {
    return this.getListAttribute('service_cidr');
  }
  public set serviceCidr(value: string[]) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfigSku {
  /**
  * Name of the cluster SKU. Allowed values include: BASIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#name DataTanzuMissionControlAkscluster#name}
  */
  readonly name?: string;
  /**
  * Tier of the cluster SKU. Allowed values include: FREE or PAID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#tier DataTanzuMissionControlAkscluster#tier}
  */
  readonly tier?: string;
}

export function dataTanzuMissionControlAksclusterSpecConfigSkuToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigSkuOutputReference | DataTanzuMissionControlAksclusterSpecConfigSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigSkuToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigSkuOutputReference | DataTanzuMissionControlAksclusterSpecConfigSku): any {
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

export class DataTanzuMissionControlAksclusterSpecConfigSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigSku | undefined {
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

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigSku | undefined) {
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

  // name - computed: true, optional: true, required: false
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

  // tier - computed: true, optional: true, required: false
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
export interface DataTanzuMissionControlAksclusterSpecConfigStorageConfig {
  /**
  * Enable the azure disk CSI driver for the storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#enable_disk_csi_driver DataTanzuMissionControlAkscluster#enable_disk_csi_driver}
  */
  readonly enableDiskCsiDriver?: boolean | cdktf.IResolvable;
  /**
  * Enable the azure file CSI driver for the storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#enable_file_csi_driver DataTanzuMissionControlAkscluster#enable_file_csi_driver}
  */
  readonly enableFileCsiDriver?: boolean | cdktf.IResolvable;
  /**
  * Enable the snapshot controller for the storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#enable_snapshot_controller DataTanzuMissionControlAkscluster#enable_snapshot_controller}
  */
  readonly enableSnapshotController?: boolean | cdktf.IResolvable;
}

export function dataTanzuMissionControlAksclusterSpecConfigStorageConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigStorageConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_disk_csi_driver: cdktf.booleanToTerraform(struct!.enableDiskCsiDriver),
    enable_file_csi_driver: cdktf.booleanToTerraform(struct!.enableFileCsiDriver),
    enable_snapshot_controller: cdktf.booleanToTerraform(struct!.enableSnapshotController),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigStorageConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigStorageConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfigStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_disk_csi_driver: {
      value: cdktf.booleanToHclTerraform(struct!.enableDiskCsiDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_file_csi_driver: {
      value: cdktf.booleanToHclTerraform(struct!.enableFileCsiDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_snapshot_controller: {
      value: cdktf.booleanToHclTerraform(struct!.enableSnapshotController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfigStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDiskCsiDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDiskCsiDriver = this._enableDiskCsiDriver;
    }
    if (this._enableFileCsiDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFileCsiDriver = this._enableFileCsiDriver;
    }
    if (this._enableSnapshotController !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSnapshotController = this._enableSnapshotController;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfigStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableDiskCsiDriver = undefined;
      this._enableFileCsiDriver = undefined;
      this._enableSnapshotController = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableDiskCsiDriver = value.enableDiskCsiDriver;
      this._enableFileCsiDriver = value.enableFileCsiDriver;
      this._enableSnapshotController = value.enableSnapshotController;
    }
  }

  // enable_disk_csi_driver - computed: true, optional: true, required: false
  private _enableDiskCsiDriver?: boolean | cdktf.IResolvable; 
  public get enableDiskCsiDriver() {
    return this.getBooleanAttribute('enable_disk_csi_driver');
  }
  public set enableDiskCsiDriver(value: boolean | cdktf.IResolvable) {
    this._enableDiskCsiDriver = value;
  }
  public resetEnableDiskCsiDriver() {
    this._enableDiskCsiDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDiskCsiDriverInput() {
    return this._enableDiskCsiDriver;
  }

  // enable_file_csi_driver - computed: true, optional: true, required: false
  private _enableFileCsiDriver?: boolean | cdktf.IResolvable; 
  public get enableFileCsiDriver() {
    return this.getBooleanAttribute('enable_file_csi_driver');
  }
  public set enableFileCsiDriver(value: boolean | cdktf.IResolvable) {
    this._enableFileCsiDriver = value;
  }
  public resetEnableFileCsiDriver() {
    this._enableFileCsiDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFileCsiDriverInput() {
    return this._enableFileCsiDriver;
  }

  // enable_snapshot_controller - computed: true, optional: true, required: false
  private _enableSnapshotController?: boolean | cdktf.IResolvable; 
  public get enableSnapshotController() {
    return this.getBooleanAttribute('enable_snapshot_controller');
  }
  public set enableSnapshotController(value: boolean | cdktf.IResolvable) {
    this._enableSnapshotController = value;
  }
  public resetEnableSnapshotController() {
    this._enableSnapshotController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSnapshotControllerInput() {
    return this._enableSnapshotController;
  }
}
export interface DataTanzuMissionControlAksclusterSpecConfig {
  /**
  * Resource ID of the disk encryption set to use for enabling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#disk_encryption_set DataTanzuMissionControlAkscluster#disk_encryption_set}
  */
  readonly diskEncryptionSet?: string;
  /**
  * Kubernetes version of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#kubernetes_version DataTanzuMissionControlAkscluster#kubernetes_version}
  */
  readonly kubernetesVersion: string;
  /**
  * The geo-location where the resource lives for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#location DataTanzuMissionControlAkscluster#location}
  */
  readonly location: string;
  /**
  * Name of the resource group containing nodepools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#node_resource_group_name DataTanzuMissionControlAkscluster#node_resource_group_name}
  */
  readonly nodeResourceGroupName?: string;
  /**
  * Metadata to apply to the cluster to assist with categorization and organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#tags DataTanzuMissionControlAkscluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#access_config DataTanzuMissionControlAkscluster#access_config}
  */
  readonly accessConfig?: DataTanzuMissionControlAksclusterSpecConfigAccessConfig;
  /**
  * addon_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#addon_config DataTanzuMissionControlAkscluster#addon_config}
  */
  readonly addonConfig?: DataTanzuMissionControlAksclusterSpecConfigAddonConfig;
  /**
  * api_server_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#api_server_access_config DataTanzuMissionControlAkscluster#api_server_access_config}
  */
  readonly apiServerAccessConfig?: DataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfig;
  /**
  * auto_upgrade_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#auto_upgrade_config DataTanzuMissionControlAkscluster#auto_upgrade_config}
  */
  readonly autoUpgradeConfig?: DataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfig;
  /**
  * identity_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#identity_config DataTanzuMissionControlAkscluster#identity_config}
  */
  readonly identityConfig?: DataTanzuMissionControlAksclusterSpecConfigIdentityConfig;
  /**
  * linux_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#linux_config DataTanzuMissionControlAkscluster#linux_config}
  */
  readonly linuxConfig?: DataTanzuMissionControlAksclusterSpecConfigLinuxConfig;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#network_config DataTanzuMissionControlAkscluster#network_config}
  */
  readonly networkConfig: DataTanzuMissionControlAksclusterSpecConfigNetworkConfig;
  /**
  * sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#sku DataTanzuMissionControlAkscluster#sku}
  */
  readonly sku?: DataTanzuMissionControlAksclusterSpecConfigSku;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#storage_config DataTanzuMissionControlAkscluster#storage_config}
  */
  readonly storageConfig?: DataTanzuMissionControlAksclusterSpecConfigStorageConfig;
}

export function dataTanzuMissionControlAksclusterSpecConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_set: cdktf.stringToTerraform(struct!.diskEncryptionSet),
    kubernetes_version: cdktf.stringToTerraform(struct!.kubernetesVersion),
    location: cdktf.stringToTerraform(struct!.location),
    node_resource_group_name: cdktf.stringToTerraform(struct!.nodeResourceGroupName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    access_config: dataTanzuMissionControlAksclusterSpecConfigAccessConfigToTerraform(struct!.accessConfig),
    addon_config: dataTanzuMissionControlAksclusterSpecConfigAddonConfigToTerraform(struct!.addonConfig),
    api_server_access_config: dataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfigToTerraform(struct!.apiServerAccessConfig),
    auto_upgrade_config: dataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfigToTerraform(struct!.autoUpgradeConfig),
    identity_config: dataTanzuMissionControlAksclusterSpecConfigIdentityConfigToTerraform(struct!.identityConfig),
    linux_config: dataTanzuMissionControlAksclusterSpecConfigLinuxConfigToTerraform(struct!.linuxConfig),
    network_config: dataTanzuMissionControlAksclusterSpecConfigNetworkConfigToTerraform(struct!.networkConfig),
    sku: dataTanzuMissionControlAksclusterSpecConfigSkuToTerraform(struct!.sku),
    storage_config: dataTanzuMissionControlAksclusterSpecConfigStorageConfigToTerraform(struct!.storageConfig),
  }
}


export function dataTanzuMissionControlAksclusterSpecConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecConfigOutputReference | DataTanzuMissionControlAksclusterSpecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption_set: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionSet),
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeResourceGroupName),
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
    access_config: {
      value: dataTanzuMissionControlAksclusterSpecConfigAccessConfigToHclTerraform(struct!.accessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigAccessConfigList",
    },
    addon_config: {
      value: dataTanzuMissionControlAksclusterSpecConfigAddonConfigToHclTerraform(struct!.addonConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigAddonConfigList",
    },
    api_server_access_config: {
      value: dataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfigToHclTerraform(struct!.apiServerAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfigList",
    },
    auto_upgrade_config: {
      value: dataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfigToHclTerraform(struct!.autoUpgradeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfigList",
    },
    identity_config: {
      value: dataTanzuMissionControlAksclusterSpecConfigIdentityConfigToHclTerraform(struct!.identityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigIdentityConfigList",
    },
    linux_config: {
      value: dataTanzuMissionControlAksclusterSpecConfigLinuxConfigToHclTerraform(struct!.linuxConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigLinuxConfigList",
    },
    network_config: {
      value: dataTanzuMissionControlAksclusterSpecConfigNetworkConfigToHclTerraform(struct!.networkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigNetworkConfigList",
    },
    sku: {
      value: dataTanzuMissionControlAksclusterSpecConfigSkuToHclTerraform(struct!.sku),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigSkuList",
    },
    storage_config: {
      value: dataTanzuMissionControlAksclusterSpecConfigStorageConfigToHclTerraform(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigStorageConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSet = this._diskEncryptionSet;
    }
    if (this._kubernetesVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesVersion = this._kubernetesVersion;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._nodeResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeResourceGroupName = this._nodeResourceGroupName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._accessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfig = this._accessConfig?.internalValue;
    }
    if (this._addonConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonConfig = this._addonConfig?.internalValue;
    }
    if (this._apiServerAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerAccessConfig = this._apiServerAccessConfig?.internalValue;
    }
    if (this._autoUpgradeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgradeConfig = this._autoUpgradeConfig?.internalValue;
    }
    if (this._identityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityConfig = this._identityConfig?.internalValue;
    }
    if (this._linuxConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxConfig = this._linuxConfig?.internalValue;
    }
    if (this._networkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfig = this._networkConfig?.internalValue;
    }
    if (this._sku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskEncryptionSet = undefined;
      this._kubernetesVersion = undefined;
      this._location = undefined;
      this._nodeResourceGroupName = undefined;
      this._tags = undefined;
      this._accessConfig.internalValue = undefined;
      this._addonConfig.internalValue = undefined;
      this._apiServerAccessConfig.internalValue = undefined;
      this._autoUpgradeConfig.internalValue = undefined;
      this._identityConfig.internalValue = undefined;
      this._linuxConfig.internalValue = undefined;
      this._networkConfig.internalValue = undefined;
      this._sku.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskEncryptionSet = value.diskEncryptionSet;
      this._kubernetesVersion = value.kubernetesVersion;
      this._location = value.location;
      this._nodeResourceGroupName = value.nodeResourceGroupName;
      this._tags = value.tags;
      this._accessConfig.internalValue = value.accessConfig;
      this._addonConfig.internalValue = value.addonConfig;
      this._apiServerAccessConfig.internalValue = value.apiServerAccessConfig;
      this._autoUpgradeConfig.internalValue = value.autoUpgradeConfig;
      this._identityConfig.internalValue = value.identityConfig;
      this._linuxConfig.internalValue = value.linuxConfig;
      this._networkConfig.internalValue = value.networkConfig;
      this._sku.internalValue = value.sku;
      this._storageConfig.internalValue = value.storageConfig;
    }
  }

  // disk_encryption_set - computed: false, optional: true, required: false
  private _diskEncryptionSet?: string; 
  public get diskEncryptionSet() {
    return this.getStringAttribute('disk_encryption_set');
  }
  public set diskEncryptionSet(value: string) {
    this._diskEncryptionSet = value;
  }
  public resetDiskEncryptionSet() {
    this._diskEncryptionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetInput() {
    return this._diskEncryptionSet;
  }

  // kubernetes_version - computed: false, optional: false, required: true
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // node_resource_group_name - computed: true, optional: true, required: false
  private _nodeResourceGroupName?: string; 
  public get nodeResourceGroupName() {
    return this.getStringAttribute('node_resource_group_name');
  }
  public set nodeResourceGroupName(value: string) {
    this._nodeResourceGroupName = value;
  }
  public resetNodeResourceGroupName() {
    this._nodeResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeResourceGroupNameInput() {
    return this._nodeResourceGroupName;
  }

  // tags - computed: true, optional: true, required: false
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

  // access_config - computed: false, optional: true, required: false
  private _accessConfig = new DataTanzuMissionControlAksclusterSpecConfigAccessConfigOutputReference(this, "access_config");
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: DataTanzuMissionControlAksclusterSpecConfigAccessConfig) {
    this._accessConfig.internalValue = value;
  }
  public resetAccessConfig() {
    this._accessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }

  // addon_config - computed: false, optional: true, required: false
  private _addonConfig = new DataTanzuMissionControlAksclusterSpecConfigAddonConfigOutputReference(this, "addon_config");
  public get addonConfig() {
    return this._addonConfig;
  }
  public putAddonConfig(value: DataTanzuMissionControlAksclusterSpecConfigAddonConfig) {
    this._addonConfig.internalValue = value;
  }
  public resetAddonConfig() {
    this._addonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonConfigInput() {
    return this._addonConfig.internalValue;
  }

  // api_server_access_config - computed: false, optional: true, required: false
  private _apiServerAccessConfig = new DataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfigOutputReference(this, "api_server_access_config");
  public get apiServerAccessConfig() {
    return this._apiServerAccessConfig;
  }
  public putApiServerAccessConfig(value: DataTanzuMissionControlAksclusterSpecConfigApiServerAccessConfig) {
    this._apiServerAccessConfig.internalValue = value;
  }
  public resetApiServerAccessConfig() {
    this._apiServerAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerAccessConfigInput() {
    return this._apiServerAccessConfig.internalValue;
  }

  // auto_upgrade_config - computed: false, optional: true, required: false
  private _autoUpgradeConfig = new DataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfigOutputReference(this, "auto_upgrade_config");
  public get autoUpgradeConfig() {
    return this._autoUpgradeConfig;
  }
  public putAutoUpgradeConfig(value: DataTanzuMissionControlAksclusterSpecConfigAutoUpgradeConfig) {
    this._autoUpgradeConfig.internalValue = value;
  }
  public resetAutoUpgradeConfig() {
    this._autoUpgradeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeConfigInput() {
    return this._autoUpgradeConfig.internalValue;
  }

  // identity_config - computed: false, optional: true, required: false
  private _identityConfig = new DataTanzuMissionControlAksclusterSpecConfigIdentityConfigOutputReference(this, "identity_config");
  public get identityConfig() {
    return this._identityConfig;
  }
  public putIdentityConfig(value: DataTanzuMissionControlAksclusterSpecConfigIdentityConfig) {
    this._identityConfig.internalValue = value;
  }
  public resetIdentityConfig() {
    this._identityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityConfigInput() {
    return this._identityConfig.internalValue;
  }

  // linux_config - computed: false, optional: true, required: false
  private _linuxConfig = new DataTanzuMissionControlAksclusterSpecConfigLinuxConfigOutputReference(this, "linux_config");
  public get linuxConfig() {
    return this._linuxConfig;
  }
  public putLinuxConfig(value: DataTanzuMissionControlAksclusterSpecConfigLinuxConfig) {
    this._linuxConfig.internalValue = value;
  }
  public resetLinuxConfig() {
    this._linuxConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxConfigInput() {
    return this._linuxConfig.internalValue;
  }

  // network_config - computed: false, optional: false, required: true
  private _networkConfig = new DataTanzuMissionControlAksclusterSpecConfigNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: DataTanzuMissionControlAksclusterSpecConfigNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // sku - computed: false, optional: true, required: false
  private _sku = new DataTanzuMissionControlAksclusterSpecConfigSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: DataTanzuMissionControlAksclusterSpecConfigSku) {
    this._sku.internalValue = value;
  }
  public resetSku() {
    this._sku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new DataTanzuMissionControlAksclusterSpecConfigStorageConfigOutputReference(this, "storage_config");
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: DataTanzuMissionControlAksclusterSpecConfigStorageConfig) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }
}
export interface DataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfig {
  /**
  * Enable auto scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#enable DataTanzuMissionControlAkscluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Maximum node count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#max_count DataTanzuMissionControlAkscluster#max_count}
  */
  readonly maxCount?: number;
  /**
  * Minimum node count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#min_count DataTanzuMissionControlAkscluster#min_count}
  */
  readonly minCount?: number;
}

export function dataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfigOutputReference | DataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
  }
}


export function dataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfigOutputReference | DataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
}
export interface DataTanzuMissionControlAksclusterSpecNodepoolSpecTaints {
  /**
  * Current effect state of the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#effect DataTanzuMissionControlAkscluster#effect}
  */
  readonly effect?: string;
  /**
  * The taint key to be applied to a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#key DataTanzuMissionControlAkscluster#key}
  */
  readonly key?: string;
  /**
  * The taint value corresponding to the taint key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#value DataTanzuMissionControlAkscluster#value}
  */
  readonly value?: string;
}

export function dataTanzuMissionControlAksclusterSpecNodepoolSpecTaintsToTerraform(struct?: DataTanzuMissionControlAksclusterSpecNodepoolSpecTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataTanzuMissionControlAksclusterSpecNodepoolSpecTaintsToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecNodepoolSpecTaints | cdktf.IResolvable): any {
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

export class DataTanzuMissionControlAksclusterSpecNodepoolSpecTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlAksclusterSpecNodepoolSpecTaints | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecNodepoolSpecTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
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

export class DataTanzuMissionControlAksclusterSpecNodepoolSpecTaintsList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlAksclusterSpecNodepoolSpecTaints[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlAksclusterSpecNodepoolSpecTaintsOutputReference {
    return new DataTanzuMissionControlAksclusterSpecNodepoolSpecTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfig {
  /**
  * Max Surge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#max_surge DataTanzuMissionControlAkscluster#max_surge}
  */
  readonly maxSurge?: string;
}

export function dataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfigToTerraform(struct?: DataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfigOutputReference | DataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
  }
}


export function dataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfigToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfigOutputReference | DataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfig): any {
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

export class DataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfig | undefined) {
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
export interface DataTanzuMissionControlAksclusterSpecNodepoolSpec {
  /**
  * The list of Availability zones to use for nodepool. This can only be specified if the type of the nodepool is AvailabilitySet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#availability_zones DataTanzuMissionControlAkscluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Count is the number of nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#count DataTanzuMissionControlAkscluster#count}
  */
  readonly count: number;
  /**
  * Whether each node is allocated its own public IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#enable_node_public_ip DataTanzuMissionControlAkscluster#enable_node_public_ip}
  */
  readonly enableNodePublicIp?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of pods that can run on a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#max_pods DataTanzuMissionControlAkscluster#max_pods}
  */
  readonly maxPods?: number;
  /**
  * The mode of the nodepool. Allowed values include: SYSTEM or USER. A cluster must have at least one 'SYSTEM' nodepool at all times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#mode DataTanzuMissionControlAkscluster#mode}
  */
  readonly mode: string;
  /**
  * The node image version of the nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#node_image_version DataTanzuMissionControlAkscluster#node_image_version}
  */
  readonly nodeImageVersion?: string;
  /**
  * The node labels to be persisted across all nodes in nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#node_labels DataTanzuMissionControlAkscluster#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * OS Disk Size in GB to be used to specify the disk size for every machine in the nodepool. If you specify 0, it will apply the default osDisk size according to the vmSize specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#os_disk_size_gb DataTanzuMissionControlAkscluster#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * OS Disk Type. Allowed values include: EPHEMERAL or MANAGED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#os_disk_type DataTanzuMissionControlAkscluster#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * The OS type of the nodepool. Allowed values include: LINUX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#os_type DataTanzuMissionControlAkscluster#os_type}
  */
  readonly osType?: string;
  /**
  * The ID of a subnet in an existing VNet into which to assign pods in the cluster. Requires network-plugin to be azure and not compatible with network-plugin-mode overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#pod_subnet_id DataTanzuMissionControlAkscluster#pod_subnet_id}
  */
  readonly podSubnetId?: string;
  /**
  * Scale set eviction policy, Allowed values include: DELETE or DEALLOCATE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#scale_set_eviction_policy DataTanzuMissionControlAkscluster#scale_set_eviction_policy}
  */
  readonly scaleSetEvictionPolicy?: string;
  /**
  * Scale set priority. Allowed values include: REGULAR or SPOT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#scale_set_priority DataTanzuMissionControlAkscluster#scale_set_priority}
  */
  readonly scaleSetPriority?: string;
  /**
  * Max spot price
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#spot_max_price DataTanzuMissionControlAkscluster#spot_max_price}
  */
  readonly spotMaxPrice?: number;
  /**
  * AKS specific node tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#tags DataTanzuMissionControlAkscluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The Nodepool type. Allowed values include: VIRTUAL_MACHINE_SCALE_SETS or AVAILABILITY_SET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#type DataTanzuMissionControlAkscluster#type}
  */
  readonly type?: string;
  /**
  * Virtual Machine Size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#vm_size DataTanzuMissionControlAkscluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * The ID of a subnet in an existing VNet into which to deploy the cluster. If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#vnet_subnet_id DataTanzuMissionControlAkscluster#vnet_subnet_id}
  */
  readonly vnetSubnetId?: string;
  /**
  * auto_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#auto_scaling_config DataTanzuMissionControlAkscluster#auto_scaling_config}
  */
  readonly autoScalingConfig?: DataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfig;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#taints DataTanzuMissionControlAkscluster#taints}
  */
  readonly taints?: DataTanzuMissionControlAksclusterSpecNodepoolSpecTaints[] | cdktf.IResolvable;
  /**
  * upgrade_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#upgrade_config DataTanzuMissionControlAkscluster#upgrade_config}
  */
  readonly upgradeConfig?: DataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfig;
}

export function dataTanzuMissionControlAksclusterSpecNodepoolSpecToTerraform(struct?: DataTanzuMissionControlAksclusterSpecNodepoolSpecOutputReference | DataTanzuMissionControlAksclusterSpecNodepoolSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    count: cdktf.numberToTerraform(struct!.count),
    enable_node_public_ip: cdktf.booleanToTerraform(struct!.enableNodePublicIp),
    max_pods: cdktf.numberToTerraform(struct!.maxPods),
    mode: cdktf.stringToTerraform(struct!.mode),
    node_image_version: cdktf.stringToTerraform(struct!.nodeImageVersion),
    node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabels),
    os_disk_size_gb: cdktf.numberToTerraform(struct!.osDiskSizeGb),
    os_disk_type: cdktf.stringToTerraform(struct!.osDiskType),
    os_type: cdktf.stringToTerraform(struct!.osType),
    pod_subnet_id: cdktf.stringToTerraform(struct!.podSubnetId),
    scale_set_eviction_policy: cdktf.stringToTerraform(struct!.scaleSetEvictionPolicy),
    scale_set_priority: cdktf.stringToTerraform(struct!.scaleSetPriority),
    spot_max_price: cdktf.numberToTerraform(struct!.spotMaxPrice),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    vnet_subnet_id: cdktf.stringToTerraform(struct!.vnetSubnetId),
    auto_scaling_config: dataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfigToTerraform(struct!.autoScalingConfig),
    taints: cdktf.listMapper(dataTanzuMissionControlAksclusterSpecNodepoolSpecTaintsToTerraform, true)(struct!.taints),
    upgrade_config: dataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfigToTerraform(struct!.upgradeConfig),
  }
}


export function dataTanzuMissionControlAksclusterSpecNodepoolSpecToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecNodepoolSpecOutputReference | DataTanzuMissionControlAksclusterSpecNodepoolSpec): any {
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
    enable_node_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.enableNodePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_pods: {
      value: cdktf.numberToHclTerraform(struct!.maxPods),
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
    node_image_version: {
      value: cdktf.stringToHclTerraform(struct!.nodeImageVersion),
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
    auto_scaling_config: {
      value: dataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfigToHclTerraform(struct!.autoScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfigList",
    },
    taints: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlAksclusterSpecNodepoolSpecTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecNodepoolSpecTaintsList",
    },
    upgrade_config: {
      value: dataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfigToHclTerraform(struct!.upgradeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecNodepoolSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpecNodepoolSpec | undefined {
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
    if (this._enableNodePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNodePublicIp = this._enableNodePublicIp;
    }
    if (this._maxPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPods = this._maxPods;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._nodeImageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeImageVersion = this._nodeImageVersion;
    }
    if (this._nodeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabels = this._nodeLabels;
    }
    if (this._osDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskSizeGb = this._osDiskSizeGb;
    }
    if (this._osDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskType = this._osDiskType;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._podSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSubnetId = this._podSubnetId;
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
    if (this._autoScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingConfig = this._autoScalingConfig?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._upgradeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeConfig = this._upgradeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecNodepoolSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZones = undefined;
      this._count = undefined;
      this._enableNodePublicIp = undefined;
      this._maxPods = undefined;
      this._mode = undefined;
      this._nodeImageVersion = undefined;
      this._nodeLabels = undefined;
      this._osDiskSizeGb = undefined;
      this._osDiskType = undefined;
      this._osType = undefined;
      this._podSubnetId = undefined;
      this._scaleSetEvictionPolicy = undefined;
      this._scaleSetPriority = undefined;
      this._spotMaxPrice = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._vmSize = undefined;
      this._vnetSubnetId = undefined;
      this._autoScalingConfig.internalValue = undefined;
      this._taints.internalValue = undefined;
      this._upgradeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZones = value.availabilityZones;
      this._count = value.count;
      this._enableNodePublicIp = value.enableNodePublicIp;
      this._maxPods = value.maxPods;
      this._mode = value.mode;
      this._nodeImageVersion = value.nodeImageVersion;
      this._nodeLabels = value.nodeLabels;
      this._osDiskSizeGb = value.osDiskSizeGb;
      this._osDiskType = value.osDiskType;
      this._osType = value.osType;
      this._podSubnetId = value.podSubnetId;
      this._scaleSetEvictionPolicy = value.scaleSetEvictionPolicy;
      this._scaleSetPriority = value.scaleSetPriority;
      this._spotMaxPrice = value.spotMaxPrice;
      this._tags = value.tags;
      this._type = value.type;
      this._vmSize = value.vmSize;
      this._vnetSubnetId = value.vnetSubnetId;
      this._autoScalingConfig.internalValue = value.autoScalingConfig;
      this._taints.internalValue = value.taints;
      this._upgradeConfig.internalValue = value.upgradeConfig;
    }
  }

  // availability_zones - computed: true, optional: true, required: false
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

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

  // max_pods - computed: true, optional: true, required: false
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

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // node_image_version - computed: true, optional: true, required: false
  private _nodeImageVersion?: string; 
  public get nodeImageVersion() {
    return this.getStringAttribute('node_image_version');
  }
  public set nodeImageVersion(value: string) {
    this._nodeImageVersion = value;
  }
  public resetNodeImageVersion() {
    this._nodeImageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageVersionInput() {
    return this._nodeImageVersion;
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

  // os_disk_size_gb - computed: true, optional: true, required: false
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

  // os_disk_type - computed: true, optional: true, required: false
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

  // scale_set_priority - computed: true, optional: true, required: false
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

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
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

  // auto_scaling_config - computed: false, optional: true, required: false
  private _autoScalingConfig = new DataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfigOutputReference(this, "auto_scaling_config");
  public get autoScalingConfig() {
    return this._autoScalingConfig;
  }
  public putAutoScalingConfig(value: DataTanzuMissionControlAksclusterSpecNodepoolSpecAutoScalingConfig) {
    this._autoScalingConfig.internalValue = value;
  }
  public resetAutoScalingConfig() {
    this._autoScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingConfigInput() {
    return this._autoScalingConfig.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new DataTanzuMissionControlAksclusterSpecNodepoolSpecTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataTanzuMissionControlAksclusterSpecNodepoolSpecTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // upgrade_config - computed: false, optional: true, required: false
  private _upgradeConfig = new DataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfigOutputReference(this, "upgrade_config");
  public get upgradeConfig() {
    return this._upgradeConfig;
  }
  public putUpgradeConfig(value: DataTanzuMissionControlAksclusterSpecNodepoolSpecUpgradeConfig) {
    this._upgradeConfig.internalValue = value;
  }
  public resetUpgradeConfig() {
    this._upgradeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeConfigInput() {
    return this._upgradeConfig.internalValue;
  }
}
export interface DataTanzuMissionControlAksclusterSpecNodepool {
  /**
  * Name of the nodepool, immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#name DataTanzuMissionControlAkscluster#name}
  */
  readonly name: string;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#spec DataTanzuMissionControlAkscluster#spec}
  */
  readonly spec: DataTanzuMissionControlAksclusterSpecNodepoolSpec;
}

export function dataTanzuMissionControlAksclusterSpecNodepoolToTerraform(struct?: DataTanzuMissionControlAksclusterSpecNodepool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    spec: dataTanzuMissionControlAksclusterSpecNodepoolSpecToTerraform(struct!.spec),
  }
}


export function dataTanzuMissionControlAksclusterSpecNodepoolToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecNodepool | cdktf.IResolvable): any {
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
    spec: {
      value: dataTanzuMissionControlAksclusterSpecNodepoolSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecNodepoolSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecNodepoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlAksclusterSpecNodepool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpecNodepool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._spec.internalValue = value.spec;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new DataTanzuMissionControlAksclusterSpecNodepoolSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataTanzuMissionControlAksclusterSpecNodepoolSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class DataTanzuMissionControlAksclusterSpecNodepoolList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlAksclusterSpecNodepool[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlAksclusterSpecNodepoolOutputReference {
    return new DataTanzuMissionControlAksclusterSpecNodepoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlAksclusterSpec {
  /**
  * Name of the cluster in TMC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#agent_name DataTanzuMissionControlAkscluster#agent_name}
  */
  readonly agentName?: string;
  /**
  * Name of the cluster group to which this cluster belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#cluster_group DataTanzuMissionControlAkscluster#cluster_group}
  */
  readonly clusterGroup?: string;
  /**
  * Optional proxy name is the name of the Proxy Config to be used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#proxy DataTanzuMissionControlAkscluster#proxy}
  */
  readonly proxy?: string;
  /**
  * Resource ID of the cluster in Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#resource_id DataTanzuMissionControlAkscluster#resource_id}
  */
  readonly resourceId?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#config DataTanzuMissionControlAkscluster#config}
  */
  readonly config: DataTanzuMissionControlAksclusterSpecConfig;
  /**
  * nodepool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#nodepool DataTanzuMissionControlAkscluster#nodepool}
  */
  readonly nodepool: DataTanzuMissionControlAksclusterSpecNodepool[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlAksclusterSpecToTerraform(struct?: DataTanzuMissionControlAksclusterSpecOutputReference | DataTanzuMissionControlAksclusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_name: cdktf.stringToTerraform(struct!.agentName),
    cluster_group: cdktf.stringToTerraform(struct!.clusterGroup),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    config: dataTanzuMissionControlAksclusterSpecConfigToTerraform(struct!.config),
    nodepool: cdktf.listMapper(dataTanzuMissionControlAksclusterSpecNodepoolToTerraform, true)(struct!.nodepool),
  }
}


export function dataTanzuMissionControlAksclusterSpecToHclTerraform(struct?: DataTanzuMissionControlAksclusterSpecOutputReference | DataTanzuMissionControlAksclusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_name: {
      value: cdktf.stringToHclTerraform(struct!.agentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_group: {
      value: cdktf.stringToHclTerraform(struct!.clusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: dataTanzuMissionControlAksclusterSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecConfigList",
    },
    nodepool: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlAksclusterSpecNodepoolToHclTerraform, true)(struct!.nodepool),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlAksclusterSpecNodepoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlAksclusterSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlAksclusterSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentName = this._agentName;
    }
    if (this._clusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._nodepool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodepool = this._nodepool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlAksclusterSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentName = undefined;
      this._clusterGroup = undefined;
      this._proxy = undefined;
      this._resourceId = undefined;
      this._config.internalValue = undefined;
      this._nodepool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentName = value.agentName;
      this._clusterGroup = value.clusterGroup;
      this._proxy = value.proxy;
      this._resourceId = value.resourceId;
      this._config.internalValue = value.config;
      this._nodepool.internalValue = value.nodepool;
    }
  }

  // agent_name - computed: true, optional: true, required: false
  private _agentName?: string; 
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string) {
    this._agentName = value;
  }
  public resetAgentName() {
    this._agentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName;
  }

  // cluster_group - computed: false, optional: true, required: false
  private _clusterGroup?: string; 
  public get clusterGroup() {
    return this.getStringAttribute('cluster_group');
  }
  public set clusterGroup(value: string) {
    this._clusterGroup = value;
  }
  public resetClusterGroup() {
    this._clusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupInput() {
    return this._clusterGroup;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // config - computed: false, optional: false, required: true
  private _config = new DataTanzuMissionControlAksclusterSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataTanzuMissionControlAksclusterSpecConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // nodepool - computed: false, optional: false, required: true
  private _nodepool = new DataTanzuMissionControlAksclusterSpecNodepoolList(this, "nodepool", false);
  public get nodepool() {
    return this._nodepool;
  }
  public putNodepool(value: DataTanzuMissionControlAksclusterSpecNodepool[] | cdktf.IResolvable) {
    this._nodepool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodepoolInput() {
    return this._nodepool.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster tanzu-mission-control_akscluster}
*/
export class DataTanzuMissionControlAkscluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_akscluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTanzuMissionControlAkscluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTanzuMissionControlAkscluster to import
  * @param importFromId The id of the existing DataTanzuMissionControlAkscluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTanzuMissionControlAkscluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_akscluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/akscluster tanzu-mission-control_akscluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTanzuMissionControlAksclusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataTanzuMissionControlAksclusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_akscluster',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.10',
        providerVersionConstraint: '1.4.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialName = config.credentialName;
    this._id = config.id;
    this._name = config.name;
    this._readyWaitTimeout = config.readyWaitTimeout;
    this._resourceGroup = config.resourceGroup;
    this._subscriptionId = config.subscriptionId;
    this._waitForKubeconfig = config.waitForKubeconfig;
    this._meta.internalValue = config.meta;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_name - computed: false, optional: false, required: true
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
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

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
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

  // ready_wait_timeout - computed: false, optional: true, required: false
  private _readyWaitTimeout?: string; 
  public get readyWaitTimeout() {
    return this.getStringAttribute('ready_wait_timeout');
  }
  public set readyWaitTimeout(value: string) {
    this._readyWaitTimeout = value;
  }
  public resetReadyWaitTimeout() {
    this._readyWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyWaitTimeoutInput() {
    return this._readyWaitTimeout;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
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

  // wait_for_kubeconfig - computed: false, optional: true, required: false
  private _waitForKubeconfig?: boolean | cdktf.IResolvable; 
  public get waitForKubeconfig() {
    return this.getBooleanAttribute('wait_for_kubeconfig');
  }
  public set waitForKubeconfig(value: boolean | cdktf.IResolvable) {
    this._waitForKubeconfig = value;
  }
  public resetWaitForKubeconfig() {
    this._waitForKubeconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForKubeconfigInput() {
    return this._waitForKubeconfig;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new DataTanzuMissionControlAksclusterMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: DataTanzuMissionControlAksclusterMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataTanzuMissionControlAksclusterSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataTanzuMissionControlAksclusterSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_name: cdktf.stringToTerraform(this._credentialName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ready_wait_timeout: cdktf.stringToTerraform(this._readyWaitTimeout),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      wait_for_kubeconfig: cdktf.booleanToTerraform(this._waitForKubeconfig),
      meta: dataTanzuMissionControlAksclusterMetaToTerraform(this._meta.internalValue),
      spec: dataTanzuMissionControlAksclusterSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_name: {
        value: cdktf.stringToHclTerraform(this._credentialName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ready_wait_timeout: {
        value: cdktf.stringToHclTerraform(this._readyWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_kubeconfig: {
        value: cdktf.booleanToHclTerraform(this._waitForKubeconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      meta: {
        value: dataTanzuMissionControlAksclusterMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlAksclusterMetaList",
      },
      spec: {
        value: dataTanzuMissionControlAksclusterSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlAksclusterSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
