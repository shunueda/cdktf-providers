// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional Azure resource types that you want to sync with Observability Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#additional_services AzureIntegration#additional_services}
  */
  readonly additionalServices?: string[];
  /**
  * Azure application ID for the Splunk Observability Cloud app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#app_id AzureIntegration#app_id}
  */
  readonly appId: string;
  /**
  * Whether the integration is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#enabled AzureIntegration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * what type of Azure integration this is. The allowed values are `"azure_us_government"` and `"azure"`. Defaults to `"azure"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#environment AzureIntegration#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#id AzureIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If enabled, Splunk Observability Cloud will sync also Azure Monitor data. If disabled, Splunk Observability Cloud will import only metadata. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#import_azure_monitor AzureIntegration#import_azure_monitor}
  */
  readonly importAzureMonitor?: boolean | cdktf.IResolvable;
  /**
  * Name of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#name AzureIntegration#name}
  */
  readonly name: string;
  /**
  * A named token to use for ingest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#named_token AzureIntegration#named_token}
  */
  readonly namedToken?: string;
  /**
  * Azure poll rate (in seconds). Between `60` and `600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#poll_rate AzureIntegration#poll_rate}
  */
  readonly pollRate?: number;
  /**
  * Azure secret key that associates the Splunk Observability Cloud app in Azure with the Azure tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#secret_key AzureIntegration#secret_key}
  */
  readonly secretKey: string;
  /**
  * List of Microsoft Azure service names for the Azure services you want Splunk Observability Cloud to monitor. Splunk Observability Cloud only supports certain services, and if you specify an unsupported one, you receive an API error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#services AzureIntegration#services}
  */
  readonly services: string[];
  /**
  * List of Azure subscriptions that Splunk Observability Cloud should monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#subscriptions AzureIntegration#subscriptions}
  */
  readonly subscriptions: string[];
  /**
  * If enabled, Splunk Observability Cloud will try to sync additional namespaces for VMs (including VMs in scale sets): telegraf/mem, telegraf/cpu, azure.vm.windows.guest (these are namespaces recommended by Azure when enabling their Diagnostic Extension). If there are no metrics there, no new datapoints will be ingested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#sync_guest_os_namespaces AzureIntegration#sync_guest_os_namespaces}
  */
  readonly syncGuestOsNamespaces?: boolean | cdktf.IResolvable;
  /**
  * Azure ID of the Azure tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#tenant_id AzureIntegration#tenant_id}
  */
  readonly tenantId: string;
  /**
  * If enabled, Splunk Observability Cloud will collect datapoints using Azure Metrics Batch API. Consider this option if you are synchronizing high loads of data and you want to avoid throttling issues. Contrary to the default Metrics List API, Metrics Batch API is paid. Refer to Azure documentation for pricing info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#use_batch_api AzureIntegration#use_batch_api}
  */
  readonly useBatchApi?: boolean | cdktf.IResolvable;
  /**
  * custom_namespaces_per_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#custom_namespaces_per_service AzureIntegration#custom_namespaces_per_service}
  */
  readonly customNamespacesPerService?: AzureIntegrationCustomNamespacesPerService[] | cdktf.IResolvable;
  /**
  * resource_filter_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#resource_filter_rules AzureIntegration#resource_filter_rules}
  */
  readonly resourceFilterRules?: AzureIntegrationResourceFilterRules[] | cdktf.IResolvable;
}
export interface AzureIntegrationCustomNamespacesPerService {
  /**
  * The namespaces to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#namespaces AzureIntegration#namespaces}
  */
  readonly namespaces: string[];
  /**
  * The name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#service AzureIntegration#service}
  */
  readonly service: string;
}

export function azureIntegrationCustomNamespacesPerServiceToTerraform(struct?: AzureIntegrationCustomNamespacesPerService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function azureIntegrationCustomNamespacesPerServiceToHclTerraform(struct?: AzureIntegrationCustomNamespacesPerService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureIntegrationCustomNamespacesPerServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureIntegrationCustomNamespacesPerService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureIntegrationCustomNamespacesPerService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._service = value.service;
    }
  }

  // namespaces - computed: false, optional: false, required: true
  private _namespaces?: string[]; 
  public get namespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('namespaces'));
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class AzureIntegrationCustomNamespacesPerServiceList extends cdktf.ComplexList {
  public internalValue? : AzureIntegrationCustomNamespacesPerService[] | cdktf.IResolvable

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
  public get(index: number): AzureIntegrationCustomNamespacesPerServiceOutputReference {
    return new AzureIntegrationCustomNamespacesPerServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureIntegrationResourceFilterRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#filter_source AzureIntegration#filter_source}
  */
  readonly filterSource: string;
}

export function azureIntegrationResourceFilterRulesToTerraform(struct?: AzureIntegrationResourceFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_source: cdktf.stringToTerraform(struct!.filterSource),
  }
}


export function azureIntegrationResourceFilterRulesToHclTerraform(struct?: AzureIntegrationResourceFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_source: {
      value: cdktf.stringToHclTerraform(struct!.filterSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureIntegrationResourceFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureIntegrationResourceFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSource = this._filterSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureIntegrationResourceFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterSource = value.filterSource;
    }
  }

  // filter_source - computed: false, optional: false, required: true
  private _filterSource?: string; 
  public get filterSource() {
    return this.getStringAttribute('filter_source');
  }
  public set filterSource(value: string) {
    this._filterSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSourceInput() {
    return this._filterSource;
  }
}

export class AzureIntegrationResourceFilterRulesList extends cdktf.ComplexList {
  public internalValue? : AzureIntegrationResourceFilterRules[] | cdktf.IResolvable

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
  public get(index: number): AzureIntegrationResourceFilterRulesOutputReference {
    return new AzureIntegrationResourceFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration signalfx_azure_integration}
*/
export class AzureIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_azure_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureIntegration to import
  * @param importFromId The id of the existing AzureIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_azure_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/azure_integration signalfx_azure_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: AzureIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_azure_integration',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.22.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalServices = config.additionalServices;
    this._appId = config.appId;
    this._enabled = config.enabled;
    this._environment = config.environment;
    this._id = config.id;
    this._importAzureMonitor = config.importAzureMonitor;
    this._name = config.name;
    this._namedToken = config.namedToken;
    this._pollRate = config.pollRate;
    this._secretKey = config.secretKey;
    this._services = config.services;
    this._subscriptions = config.subscriptions;
    this._syncGuestOsNamespaces = config.syncGuestOsNamespaces;
    this._tenantId = config.tenantId;
    this._useBatchApi = config.useBatchApi;
    this._customNamespacesPerService.internalValue = config.customNamespacesPerService;
    this._resourceFilterRules.internalValue = config.resourceFilterRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_services - computed: false, optional: true, required: false
  private _additionalServices?: string[]; 
  public get additionalServices() {
    return this.getListAttribute('additional_services');
  }
  public set additionalServices(value: string[]) {
    this._additionalServices = value;
  }
  public resetAdditionalServices() {
    this._additionalServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalServicesInput() {
    return this._additionalServices;
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // import_azure_monitor - computed: false, optional: true, required: false
  private _importAzureMonitor?: boolean | cdktf.IResolvable; 
  public get importAzureMonitor() {
    return this.getBooleanAttribute('import_azure_monitor');
  }
  public set importAzureMonitor(value: boolean | cdktf.IResolvable) {
    this._importAzureMonitor = value;
  }
  public resetImportAzureMonitor() {
    this._importAzureMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importAzureMonitorInput() {
    return this._importAzureMonitor;
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

  // named_token - computed: false, optional: true, required: false
  private _namedToken?: string; 
  public get namedToken() {
    return this.getStringAttribute('named_token');
  }
  public set namedToken(value: string) {
    this._namedToken = value;
  }
  public resetNamedToken() {
    this._namedToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedTokenInput() {
    return this._namedToken;
  }

  // poll_rate - computed: false, optional: true, required: false
  private _pollRate?: number; 
  public get pollRate() {
    return this.getNumberAttribute('poll_rate');
  }
  public set pollRate(value: number) {
    this._pollRate = value;
  }
  public resetPollRate() {
    this._pollRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollRateInput() {
    return this._pollRate;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // services - computed: false, optional: false, required: true
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // subscriptions - computed: false, optional: false, required: true
  private _subscriptions?: string[]; 
  public get subscriptions() {
    return cdktf.Fn.tolist(this.getListAttribute('subscriptions'));
  }
  public set subscriptions(value: string[]) {
    this._subscriptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions;
  }

  // sync_guest_os_namespaces - computed: false, optional: true, required: false
  private _syncGuestOsNamespaces?: boolean | cdktf.IResolvable; 
  public get syncGuestOsNamespaces() {
    return this.getBooleanAttribute('sync_guest_os_namespaces');
  }
  public set syncGuestOsNamespaces(value: boolean | cdktf.IResolvable) {
    this._syncGuestOsNamespaces = value;
  }
  public resetSyncGuestOsNamespaces() {
    this._syncGuestOsNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncGuestOsNamespacesInput() {
    return this._syncGuestOsNamespaces;
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

  // use_batch_api - computed: false, optional: true, required: false
  private _useBatchApi?: boolean | cdktf.IResolvable; 
  public get useBatchApi() {
    return this.getBooleanAttribute('use_batch_api');
  }
  public set useBatchApi(value: boolean | cdktf.IResolvable) {
    this._useBatchApi = value;
  }
  public resetUseBatchApi() {
    this._useBatchApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBatchApiInput() {
    return this._useBatchApi;
  }

  // custom_namespaces_per_service - computed: false, optional: true, required: false
  private _customNamespacesPerService = new AzureIntegrationCustomNamespacesPerServiceList(this, "custom_namespaces_per_service", true);
  public get customNamespacesPerService() {
    return this._customNamespacesPerService;
  }
  public putCustomNamespacesPerService(value: AzureIntegrationCustomNamespacesPerService[] | cdktf.IResolvable) {
    this._customNamespacesPerService.internalValue = value;
  }
  public resetCustomNamespacesPerService() {
    this._customNamespacesPerService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNamespacesPerServiceInput() {
    return this._customNamespacesPerService.internalValue;
  }

  // resource_filter_rules - computed: false, optional: true, required: false
  private _resourceFilterRules = new AzureIntegrationResourceFilterRulesList(this, "resource_filter_rules", false);
  public get resourceFilterRules() {
    return this._resourceFilterRules;
  }
  public putResourceFilterRules(value: AzureIntegrationResourceFilterRules[] | cdktf.IResolvable) {
    this._resourceFilterRules.internalValue = value;
  }
  public resetResourceFilterRules() {
    this._resourceFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFilterRulesInput() {
    return this._resourceFilterRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalServices),
      app_id: cdktf.stringToTerraform(this._appId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      import_azure_monitor: cdktf.booleanToTerraform(this._importAzureMonitor),
      name: cdktf.stringToTerraform(this._name),
      named_token: cdktf.stringToTerraform(this._namedToken),
      poll_rate: cdktf.numberToTerraform(this._pollRate),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      subscriptions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriptions),
      sync_guest_os_namespaces: cdktf.booleanToTerraform(this._syncGuestOsNamespaces),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_batch_api: cdktf.booleanToTerraform(this._useBatchApi),
      custom_namespaces_per_service: cdktf.listMapper(azureIntegrationCustomNamespacesPerServiceToTerraform, true)(this._customNamespacesPerService.internalValue),
      resource_filter_rules: cdktf.listMapper(azureIntegrationResourceFilterRulesToTerraform, true)(this._resourceFilterRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalServices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      import_azure_monitor: {
        value: cdktf.booleanToHclTerraform(this._importAzureMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      named_token: {
        value: cdktf.stringToHclTerraform(this._namedToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poll_rate: {
        value: cdktf.numberToHclTerraform(this._pollRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subscriptions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sync_guest_os_namespaces: {
        value: cdktf.booleanToHclTerraform(this._syncGuestOsNamespaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_batch_api: {
        value: cdktf.booleanToHclTerraform(this._useBatchApi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_namespaces_per_service: {
        value: cdktf.listMapperHcl(azureIntegrationCustomNamespacesPerServiceToHclTerraform, true)(this._customNamespacesPerService.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AzureIntegrationCustomNamespacesPerServiceList",
      },
      resource_filter_rules: {
        value: cdktf.listMapperHcl(azureIntegrationResourceFilterRulesToHclTerraform, true)(this._resourceFilterRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureIntegrationResourceFilterRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
