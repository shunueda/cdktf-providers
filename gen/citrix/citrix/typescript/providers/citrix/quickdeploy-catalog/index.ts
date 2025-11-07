// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuickdeployCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Denotes how the machines in the catalog are allocated to a user. Choose between `MultiSession`, `SingleSessionStatic` and `SingleSessionRandom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#catalog_type QuickdeployCatalog#catalog_type}
  */
  readonly catalogType: string;
  /**
  * Rules specifying how Active Directory machine accounts should be created when machines are provisioned.
  * 
  * ~> **Please Note** When importing a `citrix_quickdeploy_catalog` resource, `machine_naming_scheme` must be omitted in the terraform resource body. Explicitly setting it will result in replacing the quick deploy catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#machine_naming_scheme QuickdeployCatalog#machine_naming_scheme}
  */
  readonly machineNamingScheme?: QuickdeployCatalogMachineNamingScheme;
  /**
  * The Azure VM SKU to use for creating machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#machine_size QuickdeployCatalog#machine_size}
  */
  readonly machineSize: string;
  /**
  * Maximum number of concurrent users that could launch session on the same machine. Only allowed to have more than 1 concurrent user when `catalog_type` is `MultiSession`. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#max_users_per_vm QuickdeployCatalog#max_users_per_vm}
  */
  readonly maxUsersPerVm?: number;
  /**
  * Name of the managed catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#name QuickdeployCatalog#name}
  */
  readonly name: string;
  /**
  * Number of VMs that will be provisioned for this catalog. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#number_of_machines QuickdeployCatalog#number_of_machines}
  */
  readonly numberOfMachines: number;
  /**
  * On-Premises connectivity configuration for creating a domain-joined catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#on_prem_connectivity QuickdeployCatalog#on_prem_connectivity}
  */
  readonly onPremConnectivity?: QuickdeployCatalogOnPremConnectivity;
  /**
  * The power management schedule for the Citrix Managed catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#power_schedule QuickdeployCatalog#power_schedule}
  */
  readonly powerSchedule: QuickdeployCatalogPowerSchedule;
  /**
  * The Azure region to deploy the managed catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#region QuickdeployCatalog#region}
  */
  readonly region: string;
  /**
  * Storage account type used for provisioned virtual machine disks on Azure. Storage types include: `Standard_LRS`, `StandardSSD_LRS` and `Premium_LRS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#storage_type QuickdeployCatalog#storage_type}
  */
  readonly storageType: string;
  /**
  * The name of the Citrix Managed Azure subscription to deploy the managed catalog. Defaults to `Citrix Managed` if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#subscription_name QuickdeployCatalog#subscription_name}
  */
  readonly subscriptionName?: string;
  /**
  * The GUID identifier of the template image for creating the managed catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#template_image_id QuickdeployCatalog#template_image_id}
  */
  readonly templateImageId: string;
  /**
  * Indicate whether to use Azure managed disks for the provisioned virtual machine. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#use_managed_disks QuickdeployCatalog#use_managed_disks}
  */
  readonly useManagedDisks?: boolean | cdktf.IResolvable;
}
export interface QuickdeployCatalogMachineNamingScheme {
  /**
  * Defines the template name for AD accounts created in the identity pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#naming_scheme QuickdeployCatalog#naming_scheme}
  */
  readonly namingScheme: string;
  /**
  * Type of naming scheme. This defines the format of the variable part of the AD account names that will be created. Choose between `Numeric` and `Alphabetic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#naming_scheme_type QuickdeployCatalog#naming_scheme_type}
  */
  readonly namingSchemeType: string;
}

export function quickdeployCatalogMachineNamingSchemeToTerraform(struct?: QuickdeployCatalogMachineNamingScheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    naming_scheme: cdktf.stringToTerraform(struct!.namingScheme),
    naming_scheme_type: cdktf.stringToTerraform(struct!.namingSchemeType),
  }
}


export function quickdeployCatalogMachineNamingSchemeToHclTerraform(struct?: QuickdeployCatalogMachineNamingScheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    naming_scheme: {
      value: cdktf.stringToHclTerraform(struct!.namingScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    naming_scheme_type: {
      value: cdktf.stringToHclTerraform(struct!.namingSchemeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuickdeployCatalogMachineNamingSchemeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuickdeployCatalogMachineNamingScheme | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namingScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.namingScheme = this._namingScheme;
    }
    if (this._namingSchemeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.namingSchemeType = this._namingSchemeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuickdeployCatalogMachineNamingScheme | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namingScheme = undefined;
      this._namingSchemeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namingScheme = value.namingScheme;
      this._namingSchemeType = value.namingSchemeType;
    }
  }

  // naming_scheme - computed: false, optional: false, required: true
  private _namingScheme?: string; 
  public get namingScheme() {
    return this.getStringAttribute('naming_scheme');
  }
  public set namingScheme(value: string) {
    this._namingScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namingSchemeInput() {
    return this._namingScheme;
  }

  // naming_scheme_type - computed: false, optional: false, required: true
  private _namingSchemeType?: string; 
  public get namingSchemeType() {
    return this.getStringAttribute('naming_scheme_type');
  }
  public set namingSchemeType(value: string) {
    this._namingSchemeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namingSchemeTypeInput() {
    return this._namingSchemeType;
  }
}
export interface QuickdeployCatalogOnPremConnectivityDomainIdentity {
  /**
  * The AD domain where machine accounts will be created. Specify this in FQDN format; for example, MyDomain.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#domain QuickdeployCatalog#domain}
  */
  readonly domain: string;
  /**
  * The organization unit that computer accounts will be created into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#domain_ou QuickdeployCatalog#domain_ou}
  */
  readonly domainOu?: string;
  /**
  * Service account for the domain. Only the username is required; do not include the domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#service_account QuickdeployCatalog#service_account}
  */
  readonly serviceAccount: string;
  /**
  * The domain name of the service account if it is in a different domain from where the machines resides. **This is not yet supported in Citrix Managed Azure Catalogs.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#service_account_domain QuickdeployCatalog#service_account_domain}
  */
  readonly serviceAccountDomain?: string;
  /**
  * The service account Id to be used for managing the machine accounts. **This is not yet supported in Citrix Managed Azure Catalogs.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#service_account_id QuickdeployCatalog#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Service account password for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#service_account_password QuickdeployCatalog#service_account_password}
  */
  readonly serviceAccountPassword: string;
}

export function quickdeployCatalogOnPremConnectivityDomainIdentityToTerraform(struct?: QuickdeployCatalogOnPremConnectivityDomainIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    domain_ou: cdktf.stringToTerraform(struct!.domainOu),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_domain: cdktf.stringToTerraform(struct!.serviceAccountDomain),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    service_account_password: cdktf.stringToTerraform(struct!.serviceAccountPassword),
  }
}


export function quickdeployCatalogOnPremConnectivityDomainIdentityToHclTerraform(struct?: QuickdeployCatalogOnPremConnectivityDomainIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_ou: {
      value: cdktf.stringToHclTerraform(struct!.domainOu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_domain: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_password: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuickdeployCatalogOnPremConnectivityDomainIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuickdeployCatalogOnPremConnectivityDomainIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._domainOu !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainOu = this._domainOu;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountDomain = this._serviceAccountDomain;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._serviceAccountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountPassword = this._serviceAccountPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuickdeployCatalogOnPremConnectivityDomainIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._domainOu = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountDomain = undefined;
      this._serviceAccountId = undefined;
      this._serviceAccountPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._domainOu = value.domainOu;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountDomain = value.serviceAccountDomain;
      this._serviceAccountId = value.serviceAccountId;
      this._serviceAccountPassword = value.serviceAccountPassword;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_ou - computed: false, optional: true, required: false
  private _domainOu?: string; 
  public get domainOu() {
    return this.getStringAttribute('domain_ou');
  }
  public set domainOu(value: string) {
    this._domainOu = value;
  }
  public resetDomainOu() {
    this._domainOu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainOuInput() {
    return this._domainOu;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_account_domain - computed: false, optional: true, required: false
  private _serviceAccountDomain?: string; 
  public get serviceAccountDomain() {
    return this.getStringAttribute('service_account_domain');
  }
  public set serviceAccountDomain(value: string) {
    this._serviceAccountDomain = value;
  }
  public resetServiceAccountDomain() {
    this._serviceAccountDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountDomainInput() {
    return this._serviceAccountDomain;
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // service_account_password - computed: false, optional: false, required: true
  private _serviceAccountPassword?: string; 
  public get serviceAccountPassword() {
    return this.getStringAttribute('service_account_password');
  }
  public set serviceAccountPassword(value: string) {
    this._serviceAccountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountPasswordInput() {
    return this._serviceAccountPassword;
  }
}
export interface QuickdeployCatalogOnPremConnectivity {
  /**
  * The domain identity for creating machines in the domain-joined Citrix Managed Azure catalog. Only required when the machines in catalog are domain-joined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#domain_identity QuickdeployCatalog#domain_identity}
  */
  readonly domainIdentity?: QuickdeployCatalogOnPremConnectivityDomainIdentity;
  /**
  * The GUID identifier of the Network Connection for the on-premises network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#onprem_network_connection_id QuickdeployCatalog#onprem_network_connection_id}
  */
  readonly onpremNetworkConnectionId: string;
}

export function quickdeployCatalogOnPremConnectivityToTerraform(struct?: QuickdeployCatalogOnPremConnectivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_identity: quickdeployCatalogOnPremConnectivityDomainIdentityToTerraform(struct!.domainIdentity),
    onprem_network_connection_id: cdktf.stringToTerraform(struct!.onpremNetworkConnectionId),
  }
}


export function quickdeployCatalogOnPremConnectivityToHclTerraform(struct?: QuickdeployCatalogOnPremConnectivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_identity: {
      value: quickdeployCatalogOnPremConnectivityDomainIdentityToHclTerraform(struct!.domainIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "QuickdeployCatalogOnPremConnectivityDomainIdentity",
    },
    onprem_network_connection_id: {
      value: cdktf.stringToHclTerraform(struct!.onpremNetworkConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuickdeployCatalogOnPremConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuickdeployCatalogOnPremConnectivity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainIdentity = this._domainIdentity?.internalValue;
    }
    if (this._onpremNetworkConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.onpremNetworkConnectionId = this._onpremNetworkConnectionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuickdeployCatalogOnPremConnectivity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainIdentity.internalValue = undefined;
      this._onpremNetworkConnectionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainIdentity.internalValue = value.domainIdentity;
      this._onpremNetworkConnectionId = value.onpremNetworkConnectionId;
    }
  }

  // domain_identity - computed: false, optional: true, required: false
  private _domainIdentity = new QuickdeployCatalogOnPremConnectivityDomainIdentityOutputReference(this, "domain_identity");
  public get domainIdentity() {
    return this._domainIdentity;
  }
  public putDomainIdentity(value: QuickdeployCatalogOnPremConnectivityDomainIdentity) {
    this._domainIdentity.internalValue = value;
  }
  public resetDomainIdentity() {
    this._domainIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdentityInput() {
    return this._domainIdentity.internalValue;
  }

  // onprem_network_connection_id - computed: false, optional: false, required: true
  private _onpremNetworkConnectionId?: string; 
  public get onpremNetworkConnectionId() {
    return this.getStringAttribute('onprem_network_connection_id');
  }
  public set onpremNetworkConnectionId(value: string) {
    this._onpremNetworkConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onpremNetworkConnectionIdInput() {
    return this._onpremNetworkConnectionId;
  }
}
export interface QuickdeployCatalogPowerSchedule {
  /**
  * The percentage of machines in the delivery group that should be kept available in an idle state outside peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#off_peak_buffer_capacity QuickdeployCatalog#off_peak_buffer_capacity}
  */
  readonly offPeakBufferCapacity?: number;
  /**
  * The action to be performed after a configurable period of a user session disconnecting outside peak hours. Choose between `Nothing`, `Suspend`, and `Shutdown`. Default is `Nothing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#off_peak_disconnected_session_action QuickdeployCatalog#off_peak_disconnected_session_action}
  */
  readonly offPeakDisconnectedSessionAction?: string;
  /**
  * The number of minutes before the configured action should be performed after a user session disconnectts outside peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#off_peak_disconnected_session_timeout QuickdeployCatalog#off_peak_disconnected_session_timeout}
  */
  readonly offPeakDisconnectedSessionTimeout?: number;
  /**
  * The number of minutes before the second configured action should be performed after a user session disconnects outside peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#off_peak_extended_disconnect_timeout QuickdeployCatalog#off_peak_extended_disconnect_timeout}
  */
  readonly offPeakExtendedDisconnectTimeout?: number;
  /**
  * The minimum number of machines that should be powered on during off peak hours. Defaults to `0`. Can only be set to more than `0` if `catalog_type` is `Dedicated`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#off_peak_min_instances QuickdeployCatalog#off_peak_min_instances}
  */
  readonly offPeakMinInstances?: number;
  /**
  * The percentage of machines in the managed catalog that should be kept available in an idle state in peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#peak_buffer_capacity QuickdeployCatalog#peak_buffer_capacity}
  */
  readonly peakBufferCapacity?: number;
  /**
  * The action to be performed after a configurable period of a user session disconnecting in peak hours. Choose between `Nothing`, `Suspend`, and `Shutdown`. Default is `Nothing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#peak_disconnected_session_action QuickdeployCatalog#peak_disconnected_session_action}
  */
  readonly peakDisconnectedSessionAction?: string;
  /**
  * The number of minutes before the configured action should be performed after a user session disconnects in peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#peak_disconnected_session_timeout QuickdeployCatalog#peak_disconnected_session_timeout}
  */
  readonly peakDisconnectedSessionTimeout?: number;
  /**
  * The end time of peak hours (0-23).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#peak_end_time QuickdeployCatalog#peak_end_time}
  */
  readonly peakEndTime?: number;
  /**
  * The number of minutes before the second configured action should be performed after a user session disconnects in peak hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#peak_extended_disconnect_timeout QuickdeployCatalog#peak_extended_disconnect_timeout}
  */
  readonly peakExtendedDisconnectTimeout?: number;
  /**
  * The minimum number of machines that should be powered on during peak hours. Defaults to `0`. Can only be set to more than `0` if `catalog_type` is `Dedicated`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#peak_min_instances QuickdeployCatalog#peak_min_instances}
  */
  readonly peakMinInstances?: number;
  /**
  * The start time of peak hours (0-23).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#peak_start_time QuickdeployCatalog#peak_start_time}
  */
  readonly peakStartTime?: number;
  /**
  * The time zone for peak hours. Default is `Eastern Standard Time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#peak_time_zone_id QuickdeployCatalog#peak_time_zone_id}
  */
  readonly peakTimeZoneId?: string;
  /**
  * Delay before machines are powered off, when scaling down. Specified in minutes. 
  * 
  * ~> **Please Note** Applies only to multi-session machines. 
  * 
  * -> **Note** By default, the power-off delay is 30 minutes. You can set it in a range of 0 to 60 minutes. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#power_off_delay QuickdeployCatalog#power_off_delay}
  */
  readonly powerOffDelay?: number;
  /**
  * The pattern of days of the week that the power time scheme covers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#weekdays QuickdeployCatalog#weekdays}
  */
  readonly weekdays?: string[];
}

export function quickdeployCatalogPowerScheduleToTerraform(struct?: QuickdeployCatalogPowerSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    off_peak_buffer_capacity: cdktf.numberToTerraform(struct!.offPeakBufferCapacity),
    off_peak_disconnected_session_action: cdktf.stringToTerraform(struct!.offPeakDisconnectedSessionAction),
    off_peak_disconnected_session_timeout: cdktf.numberToTerraform(struct!.offPeakDisconnectedSessionTimeout),
    off_peak_extended_disconnect_timeout: cdktf.numberToTerraform(struct!.offPeakExtendedDisconnectTimeout),
    off_peak_min_instances: cdktf.numberToTerraform(struct!.offPeakMinInstances),
    peak_buffer_capacity: cdktf.numberToTerraform(struct!.peakBufferCapacity),
    peak_disconnected_session_action: cdktf.stringToTerraform(struct!.peakDisconnectedSessionAction),
    peak_disconnected_session_timeout: cdktf.numberToTerraform(struct!.peakDisconnectedSessionTimeout),
    peak_end_time: cdktf.numberToTerraform(struct!.peakEndTime),
    peak_extended_disconnect_timeout: cdktf.numberToTerraform(struct!.peakExtendedDisconnectTimeout),
    peak_min_instances: cdktf.numberToTerraform(struct!.peakMinInstances),
    peak_start_time: cdktf.numberToTerraform(struct!.peakStartTime),
    peak_time_zone_id: cdktf.stringToTerraform(struct!.peakTimeZoneId),
    power_off_delay: cdktf.numberToTerraform(struct!.powerOffDelay),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
  }
}


export function quickdeployCatalogPowerScheduleToHclTerraform(struct?: QuickdeployCatalogPowerSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    off_peak_buffer_capacity: {
      value: cdktf.numberToHclTerraform(struct!.offPeakBufferCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    off_peak_disconnected_session_action: {
      value: cdktf.stringToHclTerraform(struct!.offPeakDisconnectedSessionAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    off_peak_disconnected_session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.offPeakDisconnectedSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    off_peak_extended_disconnect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.offPeakExtendedDisconnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    off_peak_min_instances: {
      value: cdktf.numberToHclTerraform(struct!.offPeakMinInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_buffer_capacity: {
      value: cdktf.numberToHclTerraform(struct!.peakBufferCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_disconnected_session_action: {
      value: cdktf.stringToHclTerraform(struct!.peakDisconnectedSessionAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peak_disconnected_session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.peakDisconnectedSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_end_time: {
      value: cdktf.numberToHclTerraform(struct!.peakEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_extended_disconnect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.peakExtendedDisconnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_min_instances: {
      value: cdktf.numberToHclTerraform(struct!.peakMinInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_start_time: {
      value: cdktf.numberToHclTerraform(struct!.peakStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_time_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.peakTimeZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_off_delay: {
      value: cdktf.numberToHclTerraform(struct!.powerOffDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuickdeployCatalogPowerScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuickdeployCatalogPowerSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offPeakBufferCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakBufferCapacity = this._offPeakBufferCapacity;
    }
    if (this._offPeakDisconnectedSessionAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakDisconnectedSessionAction = this._offPeakDisconnectedSessionAction;
    }
    if (this._offPeakDisconnectedSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakDisconnectedSessionTimeout = this._offPeakDisconnectedSessionTimeout;
    }
    if (this._offPeakExtendedDisconnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakExtendedDisconnectTimeout = this._offPeakExtendedDisconnectTimeout;
    }
    if (this._offPeakMinInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakMinInstances = this._offPeakMinInstances;
    }
    if (this._peakBufferCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakBufferCapacity = this._peakBufferCapacity;
    }
    if (this._peakDisconnectedSessionAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakDisconnectedSessionAction = this._peakDisconnectedSessionAction;
    }
    if (this._peakDisconnectedSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakDisconnectedSessionTimeout = this._peakDisconnectedSessionTimeout;
    }
    if (this._peakEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakEndTime = this._peakEndTime;
    }
    if (this._peakExtendedDisconnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakExtendedDisconnectTimeout = this._peakExtendedDisconnectTimeout;
    }
    if (this._peakMinInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakMinInstances = this._peakMinInstances;
    }
    if (this._peakStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakStartTime = this._peakStartTime;
    }
    if (this._peakTimeZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakTimeZoneId = this._peakTimeZoneId;
    }
    if (this._powerOffDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerOffDelay = this._powerOffDelay;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuickdeployCatalogPowerSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offPeakBufferCapacity = undefined;
      this._offPeakDisconnectedSessionAction = undefined;
      this._offPeakDisconnectedSessionTimeout = undefined;
      this._offPeakExtendedDisconnectTimeout = undefined;
      this._offPeakMinInstances = undefined;
      this._peakBufferCapacity = undefined;
      this._peakDisconnectedSessionAction = undefined;
      this._peakDisconnectedSessionTimeout = undefined;
      this._peakEndTime = undefined;
      this._peakExtendedDisconnectTimeout = undefined;
      this._peakMinInstances = undefined;
      this._peakStartTime = undefined;
      this._peakTimeZoneId = undefined;
      this._powerOffDelay = undefined;
      this._weekdays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offPeakBufferCapacity = value.offPeakBufferCapacity;
      this._offPeakDisconnectedSessionAction = value.offPeakDisconnectedSessionAction;
      this._offPeakDisconnectedSessionTimeout = value.offPeakDisconnectedSessionTimeout;
      this._offPeakExtendedDisconnectTimeout = value.offPeakExtendedDisconnectTimeout;
      this._offPeakMinInstances = value.offPeakMinInstances;
      this._peakBufferCapacity = value.peakBufferCapacity;
      this._peakDisconnectedSessionAction = value.peakDisconnectedSessionAction;
      this._peakDisconnectedSessionTimeout = value.peakDisconnectedSessionTimeout;
      this._peakEndTime = value.peakEndTime;
      this._peakExtendedDisconnectTimeout = value.peakExtendedDisconnectTimeout;
      this._peakMinInstances = value.peakMinInstances;
      this._peakStartTime = value.peakStartTime;
      this._peakTimeZoneId = value.peakTimeZoneId;
      this._powerOffDelay = value.powerOffDelay;
      this._weekdays = value.weekdays;
    }
  }

  // off_peak_buffer_capacity - computed: true, optional: true, required: false
  private _offPeakBufferCapacity?: number; 
  public get offPeakBufferCapacity() {
    return this.getNumberAttribute('off_peak_buffer_capacity');
  }
  public set offPeakBufferCapacity(value: number) {
    this._offPeakBufferCapacity = value;
  }
  public resetOffPeakBufferCapacity() {
    this._offPeakBufferCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakBufferCapacityInput() {
    return this._offPeakBufferCapacity;
  }

  // off_peak_disconnected_session_action - computed: true, optional: true, required: false
  private _offPeakDisconnectedSessionAction?: string; 
  public get offPeakDisconnectedSessionAction() {
    return this.getStringAttribute('off_peak_disconnected_session_action');
  }
  public set offPeakDisconnectedSessionAction(value: string) {
    this._offPeakDisconnectedSessionAction = value;
  }
  public resetOffPeakDisconnectedSessionAction() {
    this._offPeakDisconnectedSessionAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakDisconnectedSessionActionInput() {
    return this._offPeakDisconnectedSessionAction;
  }

  // off_peak_disconnected_session_timeout - computed: true, optional: true, required: false
  private _offPeakDisconnectedSessionTimeout?: number; 
  public get offPeakDisconnectedSessionTimeout() {
    return this.getNumberAttribute('off_peak_disconnected_session_timeout');
  }
  public set offPeakDisconnectedSessionTimeout(value: number) {
    this._offPeakDisconnectedSessionTimeout = value;
  }
  public resetOffPeakDisconnectedSessionTimeout() {
    this._offPeakDisconnectedSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakDisconnectedSessionTimeoutInput() {
    return this._offPeakDisconnectedSessionTimeout;
  }

  // off_peak_extended_disconnect_timeout - computed: true, optional: true, required: false
  private _offPeakExtendedDisconnectTimeout?: number; 
  public get offPeakExtendedDisconnectTimeout() {
    return this.getNumberAttribute('off_peak_extended_disconnect_timeout');
  }
  public set offPeakExtendedDisconnectTimeout(value: number) {
    this._offPeakExtendedDisconnectTimeout = value;
  }
  public resetOffPeakExtendedDisconnectTimeout() {
    this._offPeakExtendedDisconnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakExtendedDisconnectTimeoutInput() {
    return this._offPeakExtendedDisconnectTimeout;
  }

  // off_peak_min_instances - computed: true, optional: true, required: false
  private _offPeakMinInstances?: number; 
  public get offPeakMinInstances() {
    return this.getNumberAttribute('off_peak_min_instances');
  }
  public set offPeakMinInstances(value: number) {
    this._offPeakMinInstances = value;
  }
  public resetOffPeakMinInstances() {
    this._offPeakMinInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakMinInstancesInput() {
    return this._offPeakMinInstances;
  }

  // peak_buffer_capacity - computed: true, optional: true, required: false
  private _peakBufferCapacity?: number; 
  public get peakBufferCapacity() {
    return this.getNumberAttribute('peak_buffer_capacity');
  }
  public set peakBufferCapacity(value: number) {
    this._peakBufferCapacity = value;
  }
  public resetPeakBufferCapacity() {
    this._peakBufferCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakBufferCapacityInput() {
    return this._peakBufferCapacity;
  }

  // peak_disconnected_session_action - computed: true, optional: true, required: false
  private _peakDisconnectedSessionAction?: string; 
  public get peakDisconnectedSessionAction() {
    return this.getStringAttribute('peak_disconnected_session_action');
  }
  public set peakDisconnectedSessionAction(value: string) {
    this._peakDisconnectedSessionAction = value;
  }
  public resetPeakDisconnectedSessionAction() {
    this._peakDisconnectedSessionAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakDisconnectedSessionActionInput() {
    return this._peakDisconnectedSessionAction;
  }

  // peak_disconnected_session_timeout - computed: true, optional: true, required: false
  private _peakDisconnectedSessionTimeout?: number; 
  public get peakDisconnectedSessionTimeout() {
    return this.getNumberAttribute('peak_disconnected_session_timeout');
  }
  public set peakDisconnectedSessionTimeout(value: number) {
    this._peakDisconnectedSessionTimeout = value;
  }
  public resetPeakDisconnectedSessionTimeout() {
    this._peakDisconnectedSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakDisconnectedSessionTimeoutInput() {
    return this._peakDisconnectedSessionTimeout;
  }

  // peak_end_time - computed: true, optional: true, required: false
  private _peakEndTime?: number; 
  public get peakEndTime() {
    return this.getNumberAttribute('peak_end_time');
  }
  public set peakEndTime(value: number) {
    this._peakEndTime = value;
  }
  public resetPeakEndTime() {
    this._peakEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakEndTimeInput() {
    return this._peakEndTime;
  }

  // peak_extended_disconnect_timeout - computed: true, optional: true, required: false
  private _peakExtendedDisconnectTimeout?: number; 
  public get peakExtendedDisconnectTimeout() {
    return this.getNumberAttribute('peak_extended_disconnect_timeout');
  }
  public set peakExtendedDisconnectTimeout(value: number) {
    this._peakExtendedDisconnectTimeout = value;
  }
  public resetPeakExtendedDisconnectTimeout() {
    this._peakExtendedDisconnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakExtendedDisconnectTimeoutInput() {
    return this._peakExtendedDisconnectTimeout;
  }

  // peak_min_instances - computed: true, optional: true, required: false
  private _peakMinInstances?: number; 
  public get peakMinInstances() {
    return this.getNumberAttribute('peak_min_instances');
  }
  public set peakMinInstances(value: number) {
    this._peakMinInstances = value;
  }
  public resetPeakMinInstances() {
    this._peakMinInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakMinInstancesInput() {
    return this._peakMinInstances;
  }

  // peak_start_time - computed: true, optional: true, required: false
  private _peakStartTime?: number; 
  public get peakStartTime() {
    return this.getNumberAttribute('peak_start_time');
  }
  public set peakStartTime(value: number) {
    this._peakStartTime = value;
  }
  public resetPeakStartTime() {
    this._peakStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakStartTimeInput() {
    return this._peakStartTime;
  }

  // peak_time_zone_id - computed: true, optional: true, required: false
  private _peakTimeZoneId?: string; 
  public get peakTimeZoneId() {
    return this.getStringAttribute('peak_time_zone_id');
  }
  public set peakTimeZoneId(value: string) {
    this._peakTimeZoneId = value;
  }
  public resetPeakTimeZoneId() {
    this._peakTimeZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakTimeZoneIdInput() {
    return this._peakTimeZoneId;
  }

  // power_off_delay - computed: true, optional: true, required: false
  private _powerOffDelay?: number; 
  public get powerOffDelay() {
    return this.getNumberAttribute('power_off_delay');
  }
  public set powerOffDelay(value: number) {
    this._powerOffDelay = value;
  }
  public resetPowerOffDelay() {
    this._powerOffDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerOffDelayInput() {
    return this._powerOffDelay;
  }

  // weekdays - computed: true, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog citrix_quickdeploy_catalog}
*/
export class QuickdeployCatalog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_quickdeploy_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuickdeployCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuickdeployCatalog to import
  * @param importFromId The id of the existing QuickdeployCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuickdeployCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_quickdeploy_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_catalog citrix_quickdeploy_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuickdeployCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: QuickdeployCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_quickdeploy_catalog',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogType = config.catalogType;
    this._machineNamingScheme.internalValue = config.machineNamingScheme;
    this._machineSize = config.machineSize;
    this._maxUsersPerVm = config.maxUsersPerVm;
    this._name = config.name;
    this._numberOfMachines = config.numberOfMachines;
    this._onPremConnectivity.internalValue = config.onPremConnectivity;
    this._powerSchedule.internalValue = config.powerSchedule;
    this._region = config.region;
    this._storageType = config.storageType;
    this._subscriptionName = config.subscriptionName;
    this._templateImageId = config.templateImageId;
    this._useManagedDisks = config.useManagedDisks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_type - computed: false, optional: false, required: true
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machine_naming_scheme - computed: false, optional: true, required: false
  private _machineNamingScheme = new QuickdeployCatalogMachineNamingSchemeOutputReference(this, "machine_naming_scheme");
  public get machineNamingScheme() {
    return this._machineNamingScheme;
  }
  public putMachineNamingScheme(value: QuickdeployCatalogMachineNamingScheme) {
    this._machineNamingScheme.internalValue = value;
  }
  public resetMachineNamingScheme() {
    this._machineNamingScheme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineNamingSchemeInput() {
    return this._machineNamingScheme.internalValue;
  }

  // machine_size - computed: false, optional: false, required: true
  private _machineSize?: string; 
  public get machineSize() {
    return this.getStringAttribute('machine_size');
  }
  public set machineSize(value: string) {
    this._machineSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSizeInput() {
    return this._machineSize;
  }

  // max_users_per_vm - computed: true, optional: true, required: false
  private _maxUsersPerVm?: number; 
  public get maxUsersPerVm() {
    return this.getNumberAttribute('max_users_per_vm');
  }
  public set maxUsersPerVm(value: number) {
    this._maxUsersPerVm = value;
  }
  public resetMaxUsersPerVm() {
    this._maxUsersPerVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUsersPerVmInput() {
    return this._maxUsersPerVm;
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

  // number_of_machines - computed: false, optional: false, required: true
  private _numberOfMachines?: number; 
  public get numberOfMachines() {
    return this.getNumberAttribute('number_of_machines');
  }
  public set numberOfMachines(value: number) {
    this._numberOfMachines = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfMachinesInput() {
    return this._numberOfMachines;
  }

  // on_prem_connectivity - computed: false, optional: true, required: false
  private _onPremConnectivity = new QuickdeployCatalogOnPremConnectivityOutputReference(this, "on_prem_connectivity");
  public get onPremConnectivity() {
    return this._onPremConnectivity;
  }
  public putOnPremConnectivity(value: QuickdeployCatalogOnPremConnectivity) {
    this._onPremConnectivity.internalValue = value;
  }
  public resetOnPremConnectivity() {
    this._onPremConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremConnectivityInput() {
    return this._onPremConnectivity.internalValue;
  }

  // power_schedule - computed: false, optional: false, required: true
  private _powerSchedule = new QuickdeployCatalogPowerScheduleOutputReference(this, "power_schedule");
  public get powerSchedule() {
    return this._powerSchedule;
  }
  public putPowerSchedule(value: QuickdeployCatalogPowerSchedule) {
    this._powerSchedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get powerScheduleInput() {
    return this._powerSchedule.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // subscription_name - computed: true, optional: true, required: false
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

  // template_image_id - computed: false, optional: false, required: true
  private _templateImageId?: string; 
  public get templateImageId() {
    return this.getStringAttribute('template_image_id');
  }
  public set templateImageId(value: string) {
    this._templateImageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateImageIdInput() {
    return this._templateImageId;
  }

  // use_managed_disks - computed: true, optional: true, required: false
  private _useManagedDisks?: boolean | cdktf.IResolvable; 
  public get useManagedDisks() {
    return this.getBooleanAttribute('use_managed_disks');
  }
  public set useManagedDisks(value: boolean | cdktf.IResolvable) {
    this._useManagedDisks = value;
  }
  public resetUseManagedDisks() {
    this._useManagedDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagedDisksInput() {
    return this._useManagedDisks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_type: cdktf.stringToTerraform(this._catalogType),
      machine_naming_scheme: quickdeployCatalogMachineNamingSchemeToTerraform(this._machineNamingScheme.internalValue),
      machine_size: cdktf.stringToTerraform(this._machineSize),
      max_users_per_vm: cdktf.numberToTerraform(this._maxUsersPerVm),
      name: cdktf.stringToTerraform(this._name),
      number_of_machines: cdktf.numberToTerraform(this._numberOfMachines),
      on_prem_connectivity: quickdeployCatalogOnPremConnectivityToTerraform(this._onPremConnectivity.internalValue),
      power_schedule: quickdeployCatalogPowerScheduleToTerraform(this._powerSchedule.internalValue),
      region: cdktf.stringToTerraform(this._region),
      storage_type: cdktf.stringToTerraform(this._storageType),
      subscription_name: cdktf.stringToTerraform(this._subscriptionName),
      template_image_id: cdktf.stringToTerraform(this._templateImageId),
      use_managed_disks: cdktf.booleanToTerraform(this._useManagedDisks),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_type: {
        value: cdktf.stringToHclTerraform(this._catalogType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_naming_scheme: {
        value: quickdeployCatalogMachineNamingSchemeToHclTerraform(this._machineNamingScheme.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuickdeployCatalogMachineNamingScheme",
      },
      machine_size: {
        value: cdktf.stringToHclTerraform(this._machineSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_users_per_vm: {
        value: cdktf.numberToHclTerraform(this._maxUsersPerVm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_machines: {
        value: cdktf.numberToHclTerraform(this._numberOfMachines),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      on_prem_connectivity: {
        value: quickdeployCatalogOnPremConnectivityToHclTerraform(this._onPremConnectivity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuickdeployCatalogOnPremConnectivity",
      },
      power_schedule: {
        value: quickdeployCatalogPowerScheduleToHclTerraform(this._powerSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuickdeployCatalogPowerSchedule",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
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
      template_image_id: {
        value: cdktf.stringToHclTerraform(this._templateImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_managed_disks: {
        value: cdktf.booleanToHclTerraform(this._useManagedDisks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
