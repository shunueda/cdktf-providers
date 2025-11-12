// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureHypervisorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure Active Directory ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#active_directory_id AzureHypervisor#active_directory_id}
  */
  readonly activeDirectoryId: string;
  /**
  * The Application ID of the service principal used to access the Azure APIs. If the authentication_mode is set to `UserAssignedManagedIdentity`, use the Client ID of the managed identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#application_id AzureHypervisor#application_id}
  */
  readonly applicationId?: string;
  /**
  * The Application Secret of the service principal used to access the Azure APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#application_secret AzureHypervisor#application_secret}
  */
  readonly applicationSecret?: string;
  /**
  * The expiration date of the application secret of the service principal used to access the Azure APIs. 
  * 
  * -> **Note** Expiration date format is `YYYY-MM-DD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#application_secret_expiration_date AzureHypervisor#application_secret_expiration_date}
  */
  readonly applicationSecretExpirationDate?: string;
  /**
  * Provides different options for managing service access to Azure resources. Possible values are `AppClientSecret`, `UserAssignedManagedIdentities`, and `SystemAssignedManagedIdentity`. Defaults to `AppClientSecret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#authentication_mode AzureHypervisor#authentication_mode}
  */
  readonly authenticationMode?: string;
  /**
  * Enable Azure AD device management. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#enable_azure_ad_device_management AzureHypervisor#enable_azure_ad_device_management}
  */
  readonly enableAzureAdDeviceManagement?: boolean | cdktf.IResolvable;
  /**
  * Metadata for the Hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#metadata AzureHypervisor#metadata}
  */
  readonly metadata?: AzureHypervisorMetadata[] | cdktf.IResolvable;
  /**
  * Name of the hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#name AzureHypervisor#name}
  */
  readonly name: string;
  /**
  * Enables the routing of hypervisor traffic through a Citrix Cloud Connector. Should be enabled if the `AuthenticationMode` is set to either `UserAssignedManagedIdentity` or `SystemAssignedManagedIdentity`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#proxy_hypervisor_traffic_through_connector AzureHypervisor#proxy_hypervisor_traffic_through_connector}
  */
  readonly proxyHypervisorTrafficThroughConnector?: boolean | cdktf.IResolvable;
  /**
  * The IDs of the scopes for the hypervisor to be a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#scopes AzureHypervisor#scopes}
  */
  readonly scopes?: string[];
  /**
  * Azure Subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#subscription_id AzureHypervisor#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Id of the zone the hypervisor is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#zone AzureHypervisor#zone}
  */
  readonly zone: string;
}
export interface AzureHypervisorMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#name AzureHypervisor#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#value AzureHypervisor#value}
  */
  readonly value: string;
}

export function azureHypervisorMetadataToTerraform(struct?: AzureHypervisorMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function azureHypervisorMetadataToHclTerraform(struct?: AzureHypervisorMetadata | cdktf.IResolvable): any {
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

export class AzureHypervisorMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureHypervisorMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureHypervisorMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AzureHypervisorMetadataList extends cdktf.ComplexList {
  public internalValue? : AzureHypervisorMetadata[] | cdktf.IResolvable

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
  public get(index: number): AzureHypervisorMetadataOutputReference {
    return new AzureHypervisorMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor citrix_azure_hypervisor}
*/
export class AzureHypervisor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_azure_hypervisor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureHypervisor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureHypervisor to import
  * @param importFromId The id of the existing AzureHypervisor that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureHypervisor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_azure_hypervisor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/azure_hypervisor citrix_azure_hypervisor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureHypervisorConfig
  */
  public constructor(scope: Construct, id: string, config: AzureHypervisorConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_azure_hypervisor',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeDirectoryId = config.activeDirectoryId;
    this._applicationId = config.applicationId;
    this._applicationSecret = config.applicationSecret;
    this._applicationSecretExpirationDate = config.applicationSecretExpirationDate;
    this._authenticationMode = config.authenticationMode;
    this._enableAzureAdDeviceManagement = config.enableAzureAdDeviceManagement;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._proxyHypervisorTrafficThroughConnector = config.proxyHypervisorTrafficThroughConnector;
    this._scopes = config.scopes;
    this._subscriptionId = config.subscriptionId;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_directory_id - computed: false, optional: false, required: true
  private _activeDirectoryId?: string; 
  public get activeDirectoryId() {
    return this.getStringAttribute('active_directory_id');
  }
  public set activeDirectoryId(value: string) {
    this._activeDirectoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryIdInput() {
    return this._activeDirectoryId;
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_secret - computed: false, optional: true, required: false
  private _applicationSecret?: string; 
  public get applicationSecret() {
    return this.getStringAttribute('application_secret');
  }
  public set applicationSecret(value: string) {
    this._applicationSecret = value;
  }
  public resetApplicationSecret() {
    this._applicationSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecretInput() {
    return this._applicationSecret;
  }

  // application_secret_expiration_date - computed: false, optional: true, required: false
  private _applicationSecretExpirationDate?: string; 
  public get applicationSecretExpirationDate() {
    return this.getStringAttribute('application_secret_expiration_date');
  }
  public set applicationSecretExpirationDate(value: string) {
    this._applicationSecretExpirationDate = value;
  }
  public resetApplicationSecretExpirationDate() {
    this._applicationSecretExpirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecretExpirationDateInput() {
    return this._applicationSecretExpirationDate;
  }

  // authentication_mode - computed: true, optional: true, required: false
  private _authenticationMode?: string; 
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }
  public set authenticationMode(value: string) {
    this._authenticationMode = value;
  }
  public resetAuthenticationMode() {
    this._authenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode;
  }

  // enable_azure_ad_device_management - computed: true, optional: true, required: false
  private _enableAzureAdDeviceManagement?: boolean | cdktf.IResolvable; 
  public get enableAzureAdDeviceManagement() {
    return this.getBooleanAttribute('enable_azure_ad_device_management');
  }
  public set enableAzureAdDeviceManagement(value: boolean | cdktf.IResolvable) {
    this._enableAzureAdDeviceManagement = value;
  }
  public resetEnableAzureAdDeviceManagement() {
    this._enableAzureAdDeviceManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAzureAdDeviceManagementInput() {
    return this._enableAzureAdDeviceManagement;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AzureHypervisorMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AzureHypervisorMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // proxy_hypervisor_traffic_through_connector - computed: true, optional: true, required: false
  private _proxyHypervisorTrafficThroughConnector?: boolean | cdktf.IResolvable; 
  public get proxyHypervisorTrafficThroughConnector() {
    return this.getBooleanAttribute('proxy_hypervisor_traffic_through_connector');
  }
  public set proxyHypervisorTrafficThroughConnector(value: boolean | cdktf.IResolvable) {
    this._proxyHypervisorTrafficThroughConnector = value;
  }
  public resetProxyHypervisorTrafficThroughConnector() {
    this._proxyHypervisorTrafficThroughConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHypervisorTrafficThroughConnectorInput() {
    return this._proxyHypervisorTrafficThroughConnector;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return cdktf.Fn.tolist(this.getListAttribute('tenants'));
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_directory_id: cdktf.stringToTerraform(this._activeDirectoryId),
      application_id: cdktf.stringToTerraform(this._applicationId),
      application_secret: cdktf.stringToTerraform(this._applicationSecret),
      application_secret_expiration_date: cdktf.stringToTerraform(this._applicationSecretExpirationDate),
      authentication_mode: cdktf.stringToTerraform(this._authenticationMode),
      enable_azure_ad_device_management: cdktf.booleanToTerraform(this._enableAzureAdDeviceManagement),
      metadata: cdktf.listMapper(azureHypervisorMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      proxy_hypervisor_traffic_through_connector: cdktf.booleanToTerraform(this._proxyHypervisorTrafficThroughConnector),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_directory_id: {
        value: cdktf.stringToHclTerraform(this._activeDirectoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_secret: {
        value: cdktf.stringToHclTerraform(this._applicationSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_secret_expiration_date: {
        value: cdktf.stringToHclTerraform(this._applicationSecretExpirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_mode: {
        value: cdktf.stringToHclTerraform(this._authenticationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_azure_ad_device_management: {
        value: cdktf.booleanToHclTerraform(this._enableAzureAdDeviceManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: cdktf.listMapperHcl(azureHypervisorMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureHypervisorMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_hypervisor_traffic_through_connector: {
        value: cdktf.booleanToHclTerraform(this._proxyHypervisorTrafficThroughConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
