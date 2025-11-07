// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureOrganizationOnboardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#app_registration_name AzureOrganizationOnboarding#app_registration_name}
  */
  readonly appRegistrationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#client_id AzureOrganizationOnboarding#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#client_secret AzureOrganizationOnboarding#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#id AzureOrganizationOnboarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#is_auto_onboarding AzureOrganizationOnboarding#is_auto_onboarding}
  */
  readonly isAutoOnboarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#management_group_id AzureOrganizationOnboarding#management_group_id}
  */
  readonly managementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#organization_name AzureOrganizationOnboarding#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#tenant_id AzureOrganizationOnboarding#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#use_cloud_guard_managed_app AzureOrganizationOnboarding#use_cloud_guard_managed_app}
  */
  readonly useCloudGuardManagedApp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#vendor AzureOrganizationOnboarding#vendor}
  */
  readonly vendor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#workflow_id AzureOrganizationOnboarding#workflow_id}
  */
  readonly workflowId?: string;
  /**
  * active_blades block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#active_blades AzureOrganizationOnboarding#active_blades}
  */
  readonly activeBlades: AzureOrganizationOnboardingActiveBlades;
}
export interface AzureOrganizationOnboardingActiveBladesAwp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#centralized_subscription_id AzureOrganizationOnboarding#centralized_subscription_id}
  */
  readonly centralizedSubscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#is_enabled AzureOrganizationOnboarding#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#onboarding_mode AzureOrganizationOnboarding#onboarding_mode}
  */
  readonly onboardingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#with_function_apps_scan AzureOrganizationOnboarding#with_function_apps_scan}
  */
  readonly withFunctionAppsScan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#with_sse_cmk_encrypted_disks_scan AzureOrganizationOnboarding#with_sse_cmk_encrypted_disks_scan}
  */
  readonly withSseCmkEncryptedDisksScan?: boolean | cdktf.IResolvable;
}

export function azureOrganizationOnboardingActiveBladesAwpToTerraform(struct?: AzureOrganizationOnboardingActiveBladesAwpOutputReference | AzureOrganizationOnboardingActiveBladesAwp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    centralized_subscription_id: cdktf.stringToTerraform(struct!.centralizedSubscriptionId),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    onboarding_mode: cdktf.stringToTerraform(struct!.onboardingMode),
    with_function_apps_scan: cdktf.booleanToTerraform(struct!.withFunctionAppsScan),
    with_sse_cmk_encrypted_disks_scan: cdktf.booleanToTerraform(struct!.withSseCmkEncryptedDisksScan),
  }
}


export function azureOrganizationOnboardingActiveBladesAwpToHclTerraform(struct?: AzureOrganizationOnboardingActiveBladesAwpOutputReference | AzureOrganizationOnboardingActiveBladesAwp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    centralized_subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.centralizedSubscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    onboarding_mode: {
      value: cdktf.stringToHclTerraform(struct!.onboardingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with_function_apps_scan: {
      value: cdktf.booleanToHclTerraform(struct!.withFunctionAppsScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    with_sse_cmk_encrypted_disks_scan: {
      value: cdktf.booleanToHclTerraform(struct!.withSseCmkEncryptedDisksScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureOrganizationOnboardingActiveBladesAwpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureOrganizationOnboardingActiveBladesAwp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._centralizedSubscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.centralizedSubscriptionId = this._centralizedSubscriptionId;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._onboardingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.onboardingMode = this._onboardingMode;
    }
    if (this._withFunctionAppsScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.withFunctionAppsScan = this._withFunctionAppsScan;
    }
    if (this._withSseCmkEncryptedDisksScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.withSseCmkEncryptedDisksScan = this._withSseCmkEncryptedDisksScan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureOrganizationOnboardingActiveBladesAwp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._centralizedSubscriptionId = undefined;
      this._isEnabled = undefined;
      this._onboardingMode = undefined;
      this._withFunctionAppsScan = undefined;
      this._withSseCmkEncryptedDisksScan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._centralizedSubscriptionId = value.centralizedSubscriptionId;
      this._isEnabled = value.isEnabled;
      this._onboardingMode = value.onboardingMode;
      this._withFunctionAppsScan = value.withFunctionAppsScan;
      this._withSseCmkEncryptedDisksScan = value.withSseCmkEncryptedDisksScan;
    }
  }

  // centralized_subscription_id - computed: false, optional: true, required: false
  private _centralizedSubscriptionId?: string; 
  public get centralizedSubscriptionId() {
    return this.getStringAttribute('centralized_subscription_id');
  }
  public set centralizedSubscriptionId(value: string) {
    this._centralizedSubscriptionId = value;
  }
  public resetCentralizedSubscriptionId() {
    this._centralizedSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralizedSubscriptionIdInput() {
    return this._centralizedSubscriptionId;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // onboarding_mode - computed: false, optional: true, required: false
  private _onboardingMode?: string; 
  public get onboardingMode() {
    return this.getStringAttribute('onboarding_mode');
  }
  public set onboardingMode(value: string) {
    this._onboardingMode = value;
  }
  public resetOnboardingMode() {
    this._onboardingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardingModeInput() {
    return this._onboardingMode;
  }

  // with_function_apps_scan - computed: false, optional: true, required: false
  private _withFunctionAppsScan?: boolean | cdktf.IResolvable; 
  public get withFunctionAppsScan() {
    return this.getBooleanAttribute('with_function_apps_scan');
  }
  public set withFunctionAppsScan(value: boolean | cdktf.IResolvable) {
    this._withFunctionAppsScan = value;
  }
  public resetWithFunctionAppsScan() {
    this._withFunctionAppsScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withFunctionAppsScanInput() {
    return this._withFunctionAppsScan;
  }

  // with_sse_cmk_encrypted_disks_scan - computed: false, optional: true, required: false
  private _withSseCmkEncryptedDisksScan?: boolean | cdktf.IResolvable; 
  public get withSseCmkEncryptedDisksScan() {
    return this.getBooleanAttribute('with_sse_cmk_encrypted_disks_scan');
  }
  public set withSseCmkEncryptedDisksScan(value: boolean | cdktf.IResolvable) {
    this._withSseCmkEncryptedDisksScan = value;
  }
  public resetWithSseCmkEncryptedDisksScan() {
    this._withSseCmkEncryptedDisksScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSseCmkEncryptedDisksScanInput() {
    return this._withSseCmkEncryptedDisksScan;
  }
}
export interface AzureOrganizationOnboardingActiveBladesCdrAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#log_types AzureOrganizationOnboarding#log_types}
  */
  readonly logTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#storage_id AzureOrganizationOnboarding#storage_id}
  */
  readonly storageId?: string;
}

export function azureOrganizationOnboardingActiveBladesCdrAccountsToTerraform(struct?: AzureOrganizationOnboardingActiveBladesCdrAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logTypes),
    storage_id: cdktf.stringToTerraform(struct!.storageId),
  }
}


export function azureOrganizationOnboardingActiveBladesCdrAccountsToHclTerraform(struct?: AzureOrganizationOnboardingActiveBladesCdrAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    storage_id: {
      value: cdktf.stringToHclTerraform(struct!.storageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureOrganizationOnboardingActiveBladesCdrAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureOrganizationOnboardingActiveBladesCdrAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypes = this._logTypes;
    }
    if (this._storageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageId = this._storageId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureOrganizationOnboardingActiveBladesCdrAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logTypes = undefined;
      this._storageId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logTypes = value.logTypes;
      this._storageId = value.storageId;
    }
  }

  // log_types - computed: false, optional: true, required: false
  private _logTypes?: string[]; 
  public get logTypes() {
    return this.getListAttribute('log_types');
  }
  public set logTypes(value: string[]) {
    this._logTypes = value;
  }
  public resetLogTypes() {
    this._logTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes;
  }

  // storage_id - computed: false, optional: true, required: false
  private _storageId?: string; 
  public get storageId() {
    return this.getStringAttribute('storage_id');
  }
  public set storageId(value: string) {
    this._storageId = value;
  }
  public resetStorageId() {
    this._storageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }
}

export class AzureOrganizationOnboardingActiveBladesCdrAccountsList extends cdktf.ComplexList {
  public internalValue? : AzureOrganizationOnboardingActiveBladesCdrAccounts[] | cdktf.IResolvable

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
  public get(index: number): AzureOrganizationOnboardingActiveBladesCdrAccountsOutputReference {
    return new AzureOrganizationOnboardingActiveBladesCdrAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureOrganizationOnboardingActiveBladesCdr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#is_enabled AzureOrganizationOnboarding#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#accounts AzureOrganizationOnboarding#accounts}
  */
  readonly accounts?: AzureOrganizationOnboardingActiveBladesCdrAccounts[] | cdktf.IResolvable;
}

export function azureOrganizationOnboardingActiveBladesCdrToTerraform(struct?: AzureOrganizationOnboardingActiveBladesCdrOutputReference | AzureOrganizationOnboardingActiveBladesCdr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    accounts: cdktf.listMapper(azureOrganizationOnboardingActiveBladesCdrAccountsToTerraform, true)(struct!.accounts),
  }
}


export function azureOrganizationOnboardingActiveBladesCdrToHclTerraform(struct?: AzureOrganizationOnboardingActiveBladesCdrOutputReference | AzureOrganizationOnboardingActiveBladesCdr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accounts: {
      value: cdktf.listMapperHcl(azureOrganizationOnboardingActiveBladesCdrAccountsToHclTerraform, true)(struct!.accounts),
      isBlock: true,
      type: "list",
      storageClassType: "AzureOrganizationOnboardingActiveBladesCdrAccountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureOrganizationOnboardingActiveBladesCdrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureOrganizationOnboardingActiveBladesCdr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._accounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureOrganizationOnboardingActiveBladesCdr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._accounts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._accounts.internalValue = value.accounts;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // accounts - computed: false, optional: true, required: false
  private _accounts = new AzureOrganizationOnboardingActiveBladesCdrAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }
  public putAccounts(value: AzureOrganizationOnboardingActiveBladesCdrAccounts[] | cdktf.IResolvable) {
    this._accounts.internalValue = value;
  }
  public resetAccounts() {
    this._accounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts.internalValue;
  }
}
export interface AzureOrganizationOnboardingActiveBladesPostureManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#onboarding_mode AzureOrganizationOnboarding#onboarding_mode}
  */
  readonly onboardingMode?: string;
}

export function azureOrganizationOnboardingActiveBladesPostureManagementToTerraform(struct?: AzureOrganizationOnboardingActiveBladesPostureManagementOutputReference | AzureOrganizationOnboardingActiveBladesPostureManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    onboarding_mode: cdktf.stringToTerraform(struct!.onboardingMode),
  }
}


export function azureOrganizationOnboardingActiveBladesPostureManagementToHclTerraform(struct?: AzureOrganizationOnboardingActiveBladesPostureManagementOutputReference | AzureOrganizationOnboardingActiveBladesPostureManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    onboarding_mode: {
      value: cdktf.stringToHclTerraform(struct!.onboardingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureOrganizationOnboardingActiveBladesPostureManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureOrganizationOnboardingActiveBladesPostureManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onboardingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.onboardingMode = this._onboardingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureOrganizationOnboardingActiveBladesPostureManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onboardingMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onboardingMode = value.onboardingMode;
    }
  }

  // onboarding_mode - computed: false, optional: true, required: false
  private _onboardingMode?: string; 
  public get onboardingMode() {
    return this.getStringAttribute('onboarding_mode');
  }
  public set onboardingMode(value: string) {
    this._onboardingMode = value;
  }
  public resetOnboardingMode() {
    this._onboardingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardingModeInput() {
    return this._onboardingMode;
  }
}
export interface AzureOrganizationOnboardingActiveBladesServerless {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#is_enabled AzureOrganizationOnboarding#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function azureOrganizationOnboardingActiveBladesServerlessToTerraform(struct?: AzureOrganizationOnboardingActiveBladesServerlessOutputReference | AzureOrganizationOnboardingActiveBladesServerless): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function azureOrganizationOnboardingActiveBladesServerlessToHclTerraform(struct?: AzureOrganizationOnboardingActiveBladesServerlessOutputReference | AzureOrganizationOnboardingActiveBladesServerless): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureOrganizationOnboardingActiveBladesServerlessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureOrganizationOnboardingActiveBladesServerless | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureOrganizationOnboardingActiveBladesServerless | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface AzureOrganizationOnboardingActiveBlades {
  /**
  * awp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#awp AzureOrganizationOnboarding#awp}
  */
  readonly awp: AzureOrganizationOnboardingActiveBladesAwp;
  /**
  * cdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#cdr AzureOrganizationOnboarding#cdr}
  */
  readonly cdr: AzureOrganizationOnboardingActiveBladesCdr;
  /**
  * posture_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#posture_management AzureOrganizationOnboarding#posture_management}
  */
  readonly postureManagement: AzureOrganizationOnboardingActiveBladesPostureManagement;
  /**
  * serverless block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#serverless AzureOrganizationOnboarding#serverless}
  */
  readonly serverless: AzureOrganizationOnboardingActiveBladesServerless;
}

export function azureOrganizationOnboardingActiveBladesToTerraform(struct?: AzureOrganizationOnboardingActiveBladesOutputReference | AzureOrganizationOnboardingActiveBlades): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    awp: azureOrganizationOnboardingActiveBladesAwpToTerraform(struct!.awp),
    cdr: azureOrganizationOnboardingActiveBladesCdrToTerraform(struct!.cdr),
    posture_management: azureOrganizationOnboardingActiveBladesPostureManagementToTerraform(struct!.postureManagement),
    serverless: azureOrganizationOnboardingActiveBladesServerlessToTerraform(struct!.serverless),
  }
}


export function azureOrganizationOnboardingActiveBladesToHclTerraform(struct?: AzureOrganizationOnboardingActiveBladesOutputReference | AzureOrganizationOnboardingActiveBlades): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    awp: {
      value: azureOrganizationOnboardingActiveBladesAwpToHclTerraform(struct!.awp),
      isBlock: true,
      type: "list",
      storageClassType: "AzureOrganizationOnboardingActiveBladesAwpList",
    },
    cdr: {
      value: azureOrganizationOnboardingActiveBladesCdrToHclTerraform(struct!.cdr),
      isBlock: true,
      type: "list",
      storageClassType: "AzureOrganizationOnboardingActiveBladesCdrList",
    },
    posture_management: {
      value: azureOrganizationOnboardingActiveBladesPostureManagementToHclTerraform(struct!.postureManagement),
      isBlock: true,
      type: "list",
      storageClassType: "AzureOrganizationOnboardingActiveBladesPostureManagementList",
    },
    serverless: {
      value: azureOrganizationOnboardingActiveBladesServerlessToHclTerraform(struct!.serverless),
      isBlock: true,
      type: "list",
      storageClassType: "AzureOrganizationOnboardingActiveBladesServerlessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureOrganizationOnboardingActiveBladesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureOrganizationOnboardingActiveBlades | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awp = this._awp?.internalValue;
    }
    if (this._cdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdr = this._cdr?.internalValue;
    }
    if (this._postureManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postureManagement = this._postureManagement?.internalValue;
    }
    if (this._serverless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverless = this._serverless?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureOrganizationOnboardingActiveBlades | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awp.internalValue = undefined;
      this._cdr.internalValue = undefined;
      this._postureManagement.internalValue = undefined;
      this._serverless.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awp.internalValue = value.awp;
      this._cdr.internalValue = value.cdr;
      this._postureManagement.internalValue = value.postureManagement;
      this._serverless.internalValue = value.serverless;
    }
  }

  // awp - computed: false, optional: false, required: true
  private _awp = new AzureOrganizationOnboardingActiveBladesAwpOutputReference(this, "awp");
  public get awp() {
    return this._awp;
  }
  public putAwp(value: AzureOrganizationOnboardingActiveBladesAwp) {
    this._awp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awpInput() {
    return this._awp.internalValue;
  }

  // cdr - computed: false, optional: false, required: true
  private _cdr = new AzureOrganizationOnboardingActiveBladesCdrOutputReference(this, "cdr");
  public get cdr() {
    return this._cdr;
  }
  public putCdr(value: AzureOrganizationOnboardingActiveBladesCdr) {
    this._cdr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdrInput() {
    return this._cdr.internalValue;
  }

  // posture_management - computed: false, optional: false, required: true
  private _postureManagement = new AzureOrganizationOnboardingActiveBladesPostureManagementOutputReference(this, "posture_management");
  public get postureManagement() {
    return this._postureManagement;
  }
  public putPostureManagement(value: AzureOrganizationOnboardingActiveBladesPostureManagement) {
    this._postureManagement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postureManagementInput() {
    return this._postureManagement.internalValue;
  }

  // serverless - computed: false, optional: false, required: true
  private _serverless = new AzureOrganizationOnboardingActiveBladesServerlessOutputReference(this, "serverless");
  public get serverless() {
    return this._serverless;
  }
  public putServerless(value: AzureOrganizationOnboardingActiveBladesServerless) {
    this._serverless.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessInput() {
    return this._serverless.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding dome9_azure_organization_onboarding}
*/
export class AzureOrganizationOnboarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_azure_organization_onboarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureOrganizationOnboarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureOrganizationOnboarding to import
  * @param importFromId The id of the existing AzureOrganizationOnboarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureOrganizationOnboarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_azure_organization_onboarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_organization_onboarding dome9_azure_organization_onboarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureOrganizationOnboardingConfig
  */
  public constructor(scope: Construct, id: string, config: AzureOrganizationOnboardingConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_azure_organization_onboarding',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appRegistrationName = config.appRegistrationName;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._id = config.id;
    this._isAutoOnboarding = config.isAutoOnboarding;
    this._managementGroupId = config.managementGroupId;
    this._organizationName = config.organizationName;
    this._tenantId = config.tenantId;
    this._useCloudGuardManagedApp = config.useCloudGuardManagedApp;
    this._vendor = config.vendor;
    this._workflowId = config.workflowId;
    this._activeBlades.internalValue = config.activeBlades;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // app_registration_name - computed: true, optional: true, required: false
  private _appRegistrationName?: string; 
  public get appRegistrationName() {
    return this.getStringAttribute('app_registration_name');
  }
  public set appRegistrationName(value: string) {
    this._appRegistrationName = value;
  }
  public resetAppRegistrationName() {
    this._appRegistrationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRegistrationNameInput() {
    return this._appRegistrationName;
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

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // is_auto_onboarding - computed: false, optional: true, required: false
  private _isAutoOnboarding?: boolean | cdktf.IResolvable; 
  public get isAutoOnboarding() {
    return this.getBooleanAttribute('is_auto_onboarding');
  }
  public set isAutoOnboarding(value: boolean | cdktf.IResolvable) {
    this._isAutoOnboarding = value;
  }
  public resetIsAutoOnboarding() {
    this._isAutoOnboarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoOnboardingInput() {
    return this._isAutoOnboarding;
  }

  // management_group_id - computed: false, optional: true, required: false
  private _managementGroupId?: string; 
  public get managementGroupId() {
    return this.getStringAttribute('management_group_id');
  }
  public set managementGroupId(value: string) {
    this._managementGroupId = value;
  }
  public resetManagementGroupId() {
    this._managementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupIdInput() {
    return this._managementGroupId;
  }

  // onboarding_configuration - computed: true, optional: false, required: false
  private _onboardingConfiguration = new cdktf.StringMap(this, "onboarding_configuration");
  public get onboardingConfiguration() {
    return this._onboardingConfiguration;
  }

  // organization_name - computed: true, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // use_cloud_guard_managed_app - computed: false, optional: true, required: false
  private _useCloudGuardManagedApp?: boolean | cdktf.IResolvable; 
  public get useCloudGuardManagedApp() {
    return this.getBooleanAttribute('use_cloud_guard_managed_app');
  }
  public set useCloudGuardManagedApp(value: boolean | cdktf.IResolvable) {
    this._useCloudGuardManagedApp = value;
  }
  public resetUseCloudGuardManagedApp() {
    this._useCloudGuardManagedApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCloudGuardManagedAppInput() {
    return this._useCloudGuardManagedApp;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // vendor - computed: false, optional: false, required: true
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // workflow_id - computed: false, optional: true, required: false
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  public resetWorkflowId() {
    this._workflowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // active_blades - computed: false, optional: false, required: true
  private _activeBlades = new AzureOrganizationOnboardingActiveBladesOutputReference(this, "active_blades");
  public get activeBlades() {
    return this._activeBlades;
  }
  public putActiveBlades(value: AzureOrganizationOnboardingActiveBlades) {
    this._activeBlades.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBladesInput() {
    return this._activeBlades.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_registration_name: cdktf.stringToTerraform(this._appRegistrationName),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      id: cdktf.stringToTerraform(this._id),
      is_auto_onboarding: cdktf.booleanToTerraform(this._isAutoOnboarding),
      management_group_id: cdktf.stringToTerraform(this._managementGroupId),
      organization_name: cdktf.stringToTerraform(this._organizationName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_cloud_guard_managed_app: cdktf.booleanToTerraform(this._useCloudGuardManagedApp),
      vendor: cdktf.stringToTerraform(this._vendor),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
      active_blades: azureOrganizationOnboardingActiveBladesToTerraform(this._activeBlades.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_registration_name: {
        value: cdktf.stringToHclTerraform(this._appRegistrationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
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
      is_auto_onboarding: {
        value: cdktf.booleanToHclTerraform(this._isAutoOnboarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      management_group_id: {
        value: cdktf.stringToHclTerraform(this._managementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_name: {
        value: cdktf.stringToHclTerraform(this._organizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_cloud_guard_managed_app: {
        value: cdktf.booleanToHclTerraform(this._useCloudGuardManagedApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_id: {
        value: cdktf.stringToHclTerraform(this._workflowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_blades: {
        value: azureOrganizationOnboardingActiveBladesToHclTerraform(this._activeBlades.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureOrganizationOnboardingActiveBladesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
