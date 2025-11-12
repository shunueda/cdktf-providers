// https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAzureAgentlessScanningConfig extends cdktf.TerraformMetaArguments {
  /**
  * blob container containing analysis results shared with Lacework platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#blob_container_name IntegrationAzureAgentlessScanning#blob_container_name}
  */
  readonly blobContainerName: string;
  /**
  * The state of the external integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#enabled IntegrationAzureAgentlessScanning#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#id IntegrationAzureAgentlessScanning#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Integration level - TENANT / SUBSCRIPTION.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#integration_level IntegrationAzureAgentlessScanning#integration_level}
  */
  readonly integrationLevel?: string;
  /**
  * The integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#name IntegrationAzureAgentlessScanning#name}
  */
  readonly name: string;
  /**
  * The LQL query text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#query_text IntegrationAzureAgentlessScanning#query_text}
  */
  readonly queryText?: string;
  /**
  * The number of attempts to create the external integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#retries IntegrationAzureAgentlessScanning#retries}
  */
  readonly retries?: number;
  /**
  * Whether to includes scanning for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#scan_containers IntegrationAzureAgentlessScanning#scan_containers}
  */
  readonly scanContainers?: boolean | cdktf.IResolvable;
  /**
  * How often in hours the scan will run in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#scan_frequency IntegrationAzureAgentlessScanning#scan_frequency}
  */
  readonly scanFrequency?: number;
  /**
  * Whether to includes scanning for host vulnerabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#scan_host_vulnerabilities IntegrationAzureAgentlessScanning#scan_host_vulnerabilities}
  */
  readonly scanHostVulnerabilities?: boolean | cdktf.IResolvable;
  /**
  * Whether to scan secondary volumes (true) or only root volumes (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#scan_multi_volume IntegrationAzureAgentlessScanning#scan_multi_volume}
  */
  readonly scanMultiVolume?: boolean | cdktf.IResolvable;
  /**
  * Whether to scan stopped instances (true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#scan_stopped_instances IntegrationAzureAgentlessScanning#scan_stopped_instances}
  */
  readonly scanStoppedInstances?: boolean | cdktf.IResolvable;
  /**
  * name of the resource group where the scanner runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#scanning_resource_group_name IntegrationAzureAgentlessScanning#scanning_resource_group_name}
  */
  readonly scanningResourceGroupName: string;
  /**
  * Id of the subscription where LW scanner is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#scanning_subscription_id IntegrationAzureAgentlessScanning#scanning_subscription_id}
  */
  readonly scanningSubscriptionId: string;
  /**
  * name of the storage account, in the format of 'https://<account>.blob.core.windows.net'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#storage_account_url IntegrationAzureAgentlessScanning#storage_account_url}
  */
  readonly storageAccountUrl: string;
  /**
  * List of subscriptions to specifically include/exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#subscriptions_list IntegrationAzureAgentlessScanning#subscriptions_list}
  */
  readonly subscriptionsList?: string[];
  /**
  * Id of the tenant where LW scanner is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#tenant_id IntegrationAzureAgentlessScanning#tenant_id}
  */
  readonly tenantId: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#credentials IntegrationAzureAgentlessScanning#credentials}
  */
  readonly credentials: IntegrationAzureAgentlessScanningCredentials;
}
export interface IntegrationAzureAgentlessScanningCredentials {
  /**
  * Client Id from credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#client_id IntegrationAzureAgentlessScanning#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret from credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#client_secret IntegrationAzureAgentlessScanning#client_secret}
  */
  readonly clientSecret: string;
}

export function integrationAzureAgentlessScanningCredentialsToTerraform(struct?: IntegrationAzureAgentlessScanningCredentialsOutputReference | IntegrationAzureAgentlessScanningCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function integrationAzureAgentlessScanningCredentialsToHclTerraform(struct?: IntegrationAzureAgentlessScanningCredentialsOutputReference | IntegrationAzureAgentlessScanningCredentials): any {
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
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAzureAgentlessScanningCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationAzureAgentlessScanningCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAzureAgentlessScanningCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning lacework_integration_azure_agentless_scanning}
*/
export class IntegrationAzureAgentlessScanning extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_integration_azure_agentless_scanning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAzureAgentlessScanning resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAzureAgentlessScanning to import
  * @param importFromId The id of the existing IntegrationAzureAgentlessScanning that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAzureAgentlessScanning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_integration_azure_agentless_scanning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_azure_agentless_scanning lacework_integration_azure_agentless_scanning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAzureAgentlessScanningConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAzureAgentlessScanningConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_integration_azure_agentless_scanning',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.10',
        providerVersionConstraint: '2.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blobContainerName = config.blobContainerName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._integrationLevel = config.integrationLevel;
    this._name = config.name;
    this._queryText = config.queryText;
    this._retries = config.retries;
    this._scanContainers = config.scanContainers;
    this._scanFrequency = config.scanFrequency;
    this._scanHostVulnerabilities = config.scanHostVulnerabilities;
    this._scanMultiVolume = config.scanMultiVolume;
    this._scanStoppedInstances = config.scanStoppedInstances;
    this._scanningResourceGroupName = config.scanningResourceGroupName;
    this._scanningSubscriptionId = config.scanningSubscriptionId;
    this._storageAccountUrl = config.storageAccountUrl;
    this._subscriptionsList = config.subscriptionsList;
    this._tenantId = config.tenantId;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blob_container_name - computed: false, optional: false, required: true
  private _blobContainerName?: string; 
  public get blobContainerName() {
    return this.getStringAttribute('blob_container_name');
  }
  public set blobContainerName(value: string) {
    this._blobContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blobContainerNameInput() {
    return this._blobContainerName;
  }

  // created_or_updated_by - computed: true, optional: false, required: false
  public get createdOrUpdatedBy() {
    return this.getStringAttribute('created_or_updated_by');
  }

  // created_or_updated_time - computed: true, optional: false, required: false
  public get createdOrUpdatedTime() {
    return this.getStringAttribute('created_or_updated_time');
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

  // integration_level - computed: false, optional: true, required: false
  private _integrationLevel?: string; 
  public get integrationLevel() {
    return this.getStringAttribute('integration_level');
  }
  public set integrationLevel(value: string) {
    this._integrationLevel = value;
  }
  public resetIntegrationLevel() {
    this._integrationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationLevelInput() {
    return this._integrationLevel;
  }

  // intg_guid - computed: true, optional: false, required: false
  public get intgGuid() {
    return this.getStringAttribute('intg_guid');
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

  // query_text - computed: false, optional: true, required: false
  private _queryText?: string; 
  public get queryText() {
    return this.getStringAttribute('query_text');
  }
  public set queryText(value: string) {
    this._queryText = value;
  }
  public resetQueryText() {
    this._queryText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTextInput() {
    return this._queryText;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // scan_containers - computed: false, optional: true, required: false
  private _scanContainers?: boolean | cdktf.IResolvable; 
  public get scanContainers() {
    return this.getBooleanAttribute('scan_containers');
  }
  public set scanContainers(value: boolean | cdktf.IResolvable) {
    this._scanContainers = value;
  }
  public resetScanContainers() {
    this._scanContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanContainersInput() {
    return this._scanContainers;
  }

  // scan_frequency - computed: false, optional: true, required: false
  private _scanFrequency?: number; 
  public get scanFrequency() {
    return this.getNumberAttribute('scan_frequency');
  }
  public set scanFrequency(value: number) {
    this._scanFrequency = value;
  }
  public resetScanFrequency() {
    this._scanFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanFrequencyInput() {
    return this._scanFrequency;
  }

  // scan_host_vulnerabilities - computed: false, optional: true, required: false
  private _scanHostVulnerabilities?: boolean | cdktf.IResolvable; 
  public get scanHostVulnerabilities() {
    return this.getBooleanAttribute('scan_host_vulnerabilities');
  }
  public set scanHostVulnerabilities(value: boolean | cdktf.IResolvable) {
    this._scanHostVulnerabilities = value;
  }
  public resetScanHostVulnerabilities() {
    this._scanHostVulnerabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanHostVulnerabilitiesInput() {
    return this._scanHostVulnerabilities;
  }

  // scan_multi_volume - computed: false, optional: true, required: false
  private _scanMultiVolume?: boolean | cdktf.IResolvable; 
  public get scanMultiVolume() {
    return this.getBooleanAttribute('scan_multi_volume');
  }
  public set scanMultiVolume(value: boolean | cdktf.IResolvable) {
    this._scanMultiVolume = value;
  }
  public resetScanMultiVolume() {
    this._scanMultiVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanMultiVolumeInput() {
    return this._scanMultiVolume;
  }

  // scan_stopped_instances - computed: false, optional: true, required: false
  private _scanStoppedInstances?: boolean | cdktf.IResolvable; 
  public get scanStoppedInstances() {
    return this.getBooleanAttribute('scan_stopped_instances');
  }
  public set scanStoppedInstances(value: boolean | cdktf.IResolvable) {
    this._scanStoppedInstances = value;
  }
  public resetScanStoppedInstances() {
    this._scanStoppedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanStoppedInstancesInput() {
    return this._scanStoppedInstances;
  }

  // scanning_resource_group_name - computed: false, optional: false, required: true
  private _scanningResourceGroupName?: string; 
  public get scanningResourceGroupName() {
    return this.getStringAttribute('scanning_resource_group_name');
  }
  public set scanningResourceGroupName(value: string) {
    this._scanningResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanningResourceGroupNameInput() {
    return this._scanningResourceGroupName;
  }

  // scanning_subscription_id - computed: false, optional: false, required: true
  private _scanningSubscriptionId?: string; 
  public get scanningSubscriptionId() {
    return this.getStringAttribute('scanning_subscription_id');
  }
  public set scanningSubscriptionId(value: string) {
    this._scanningSubscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanningSubscriptionIdInput() {
    return this._scanningSubscriptionId;
  }

  // server_token - computed: true, optional: false, required: false
  public get serverToken() {
    return this.getStringAttribute('server_token');
  }

  // storage_account_url - computed: false, optional: false, required: true
  private _storageAccountUrl?: string; 
  public get storageAccountUrl() {
    return this.getStringAttribute('storage_account_url');
  }
  public set storageAccountUrl(value: string) {
    this._storageAccountUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountUrlInput() {
    return this._storageAccountUrl;
  }

  // subscriptions_list - computed: false, optional: true, required: false
  private _subscriptionsList?: string[]; 
  public get subscriptionsList() {
    return this.getListAttribute('subscriptions_list');
  }
  public set subscriptionsList(value: string[]) {
    this._subscriptionsList = value;
  }
  public resetSubscriptionsList() {
    this._subscriptionsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsListInput() {
    return this._subscriptionsList;
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

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationAzureAgentlessScanningCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationAzureAgentlessScanningCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blob_container_name: cdktf.stringToTerraform(this._blobContainerName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      integration_level: cdktf.stringToTerraform(this._integrationLevel),
      name: cdktf.stringToTerraform(this._name),
      query_text: cdktf.stringToTerraform(this._queryText),
      retries: cdktf.numberToTerraform(this._retries),
      scan_containers: cdktf.booleanToTerraform(this._scanContainers),
      scan_frequency: cdktf.numberToTerraform(this._scanFrequency),
      scan_host_vulnerabilities: cdktf.booleanToTerraform(this._scanHostVulnerabilities),
      scan_multi_volume: cdktf.booleanToTerraform(this._scanMultiVolume),
      scan_stopped_instances: cdktf.booleanToTerraform(this._scanStoppedInstances),
      scanning_resource_group_name: cdktf.stringToTerraform(this._scanningResourceGroupName),
      scanning_subscription_id: cdktf.stringToTerraform(this._scanningSubscriptionId),
      storage_account_url: cdktf.stringToTerraform(this._storageAccountUrl),
      subscriptions_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriptionsList),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      credentials: integrationAzureAgentlessScanningCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blob_container_name: {
        value: cdktf.stringToHclTerraform(this._blobContainerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_level: {
        value: cdktf.stringToHclTerraform(this._integrationLevel),
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
      query_text: {
        value: cdktf.stringToHclTerraform(this._queryText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_containers: {
        value: cdktf.booleanToHclTerraform(this._scanContainers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_frequency: {
        value: cdktf.numberToHclTerraform(this._scanFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_host_vulnerabilities: {
        value: cdktf.booleanToHclTerraform(this._scanHostVulnerabilities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_multi_volume: {
        value: cdktf.booleanToHclTerraform(this._scanMultiVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_stopped_instances: {
        value: cdktf.booleanToHclTerraform(this._scanStoppedInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scanning_resource_group_name: {
        value: cdktf.stringToHclTerraform(this._scanningResourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scanning_subscription_id: {
        value: cdktf.stringToHclTerraform(this._scanningSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_url: {
        value: cdktf.stringToHclTerraform(this._storageAccountUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriptions_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriptionsList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: integrationAzureAgentlessScanningCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationAzureAgentlessScanningCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
