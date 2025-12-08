// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication method to use in this integration. If empty, Splunk Observability backend defaults to SERVICE_ACCOUNT_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#auth_method GcpIntegration#auth_method}
  */
  readonly authMethod?: string;
  /**
  * List of additional GCP service domain names that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#custom_metric_type_domains GcpIntegration#custom_metric_type_domains}
  */
  readonly customMetricTypeDomains?: string[];
  /**
  * Whether the integration is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#enabled GcpIntegration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * List of label keys. GCP Compute Engine instances with any of these labels applied are excluded from metric sync. Requires the compute.instances.list permission on the project’s service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#exclude_gce_instances_with_labels GcpIntegration#exclude_gce_instances_with_labels}
  */
  readonly excludeGceInstancesWithLabels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#id GcpIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If enabled, Splunk Observability Cloud will sync also Google Cloud Metrics data. If disabled, Splunk Observability Cloud will import only metadata. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#import_gcp_metrics GcpIntegration#import_gcp_metrics}
  */
  readonly importGcpMetrics?: boolean | cdktf.IResolvable;
  /**
  * List of custom metadata keys that you want Observability Cloud to collect for Compute Engine instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#include_list GcpIntegration#include_list}
  */
  readonly includeList?: string[];
  /**
  * Name of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#name GcpIntegration#name}
  */
  readonly name: string;
  /**
  * A named token to use for ingest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#named_token GcpIntegration#named_token}
  */
  readonly namedToken?: string;
  /**
  * GCP poll rate (in seconds). Between `60` and `600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#poll_rate GcpIntegration#poll_rate}
  */
  readonly pollRate?: number;
  /**
  * GCP enabled services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#services GcpIntegration#services}
  */
  readonly services?: string[];
  /**
  * When this value is set to true Observability Cloud will force usage of a quota from the project where metrics are stored. For this to work the service account provided for the project needs to be provided with serviceusage.services.use permission or Service Usage Consumer role in this project. When set to false default quota settings are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#use_metric_source_project_for_quota GcpIntegration#use_metric_source_project_for_quota}
  */
  readonly useMetricSourceProjectForQuota?: boolean | cdktf.IResolvable;
  /**
  * The Splunk Observability GCP identity to include in GCP WIF provider definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#wif_splunk_identity GcpIntegration#wif_splunk_identity}
  */
  readonly wifSplunkIdentity?: { [key: string]: string };
  /**
  * Workload Identity Federation configuration JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#workload_identity_federation_config GcpIntegration#workload_identity_federation_config}
  */
  readonly workloadIdentityFederationConfig?: string;
  /**
  * project_service_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#project_service_keys GcpIntegration#project_service_keys}
  */
  readonly projectServiceKeys?: GcpIntegrationProjectServiceKeys[] | cdktf.IResolvable;
  /**
  * project_wif_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#project_wif_configs GcpIntegration#project_wif_configs}
  */
  readonly projectWifConfigs?: GcpIntegrationProjectWifConfigs[] | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#projects GcpIntegration#projects}
  */
  readonly projects?: GcpIntegrationProjects;
}
export interface GcpIntegrationProjectServiceKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#project_id GcpIntegration#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#project_key GcpIntegration#project_key}
  */
  readonly projectKey: string;
}

export function gcpIntegrationProjectServiceKeysToTerraform(struct?: GcpIntegrationProjectServiceKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    project_key: cdktf.stringToTerraform(struct!.projectKey),
  }
}


export function gcpIntegrationProjectServiceKeysToHclTerraform(struct?: GcpIntegrationProjectServiceKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_key: {
      value: cdktf.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpIntegrationProjectServiceKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcpIntegrationProjectServiceKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpIntegrationProjectServiceKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._projectKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._projectKey = value.projectKey;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }
}

export class GcpIntegrationProjectServiceKeysList extends cdktf.ComplexList {
  public internalValue? : GcpIntegrationProjectServiceKeys[] | cdktf.IResolvable

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
  public get(index: number): GcpIntegrationProjectServiceKeysOutputReference {
    return new GcpIntegrationProjectServiceKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcpIntegrationProjectWifConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#project_id GcpIntegration#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#wif_config GcpIntegration#wif_config}
  */
  readonly wifConfig: string;
}

export function gcpIntegrationProjectWifConfigsToTerraform(struct?: GcpIntegrationProjectWifConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    wif_config: cdktf.stringToTerraform(struct!.wifConfig),
  }
}


export function gcpIntegrationProjectWifConfigsToHclTerraform(struct?: GcpIntegrationProjectWifConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wif_config: {
      value: cdktf.stringToHclTerraform(struct!.wifConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpIntegrationProjectWifConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcpIntegrationProjectWifConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._wifConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifConfig = this._wifConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpIntegrationProjectWifConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._wifConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._wifConfig = value.wifConfig;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // wif_config - computed: false, optional: false, required: true
  private _wifConfig?: string; 
  public get wifConfig() {
    return this.getStringAttribute('wif_config');
  }
  public set wifConfig(value: string) {
    this._wifConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wifConfigInput() {
    return this._wifConfig;
  }
}

export class GcpIntegrationProjectWifConfigsList extends cdktf.ComplexList {
  public internalValue? : GcpIntegrationProjectWifConfigs[] | cdktf.IResolvable

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
  public get(index: number): GcpIntegrationProjectWifConfigsOutputReference {
    return new GcpIntegrationProjectWifConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcpIntegrationProjects {
  /**
  * List of project IDs to synchronize metrics and metadata from. Use only if you don't want to automatically synchronize all projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#selected_project_ids GcpIntegration#selected_project_ids}
  */
  readonly selectedProjectIds?: string[];
  /**
  * What mode of synchronizing projects should be used. Sync all tries to synchronize metrics and metadata from all discoverable projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#sync_mode GcpIntegration#sync_mode}
  */
  readonly syncMode?: string;
}

export function gcpIntegrationProjectsToTerraform(struct?: GcpIntegrationProjectsOutputReference | GcpIntegrationProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedProjectIds),
    sync_mode: cdktf.stringToTerraform(struct!.syncMode),
  }
}


export function gcpIntegrationProjectsToHclTerraform(struct?: GcpIntegrationProjectsOutputReference | GcpIntegrationProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selected_project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectedProjectIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sync_mode: {
      value: cdktf.stringToHclTerraform(struct!.syncMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpIntegrationProjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpIntegrationProjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedProjectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedProjectIds = this._selectedProjectIds;
    }
    if (this._syncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMode = this._syncMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpIntegrationProjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectedProjectIds = undefined;
      this._syncMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectedProjectIds = value.selectedProjectIds;
      this._syncMode = value.syncMode;
    }
  }

  // selected_project_ids - computed: false, optional: true, required: false
  private _selectedProjectIds?: string[]; 
  public get selectedProjectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('selected_project_ids'));
  }
  public set selectedProjectIds(value: string[]) {
    this._selectedProjectIds = value;
  }
  public resetSelectedProjectIds() {
    this._selectedProjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedProjectIdsInput() {
    return this._selectedProjectIds;
  }

  // sync_mode - computed: false, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration signalfx_gcp_integration}
*/
export class GcpIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_gcp_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpIntegration to import
  * @param importFromId The id of the existing GcpIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_gcp_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/gcp_integration signalfx_gcp_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: GcpIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_gcp_integration',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.0',
        providerVersionConstraint: '9.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authMethod = config.authMethod;
    this._customMetricTypeDomains = config.customMetricTypeDomains;
    this._enabled = config.enabled;
    this._excludeGceInstancesWithLabels = config.excludeGceInstancesWithLabels;
    this._id = config.id;
    this._importGcpMetrics = config.importGcpMetrics;
    this._includeList = config.includeList;
    this._name = config.name;
    this._namedToken = config.namedToken;
    this._pollRate = config.pollRate;
    this._services = config.services;
    this._useMetricSourceProjectForQuota = config.useMetricSourceProjectForQuota;
    this._wifSplunkIdentity = config.wifSplunkIdentity;
    this._workloadIdentityFederationConfig = config.workloadIdentityFederationConfig;
    this._projectServiceKeys.internalValue = config.projectServiceKeys;
    this._projectWifConfigs.internalValue = config.projectWifConfigs;
    this._projects.internalValue = config.projects;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // custom_metric_type_domains - computed: false, optional: true, required: false
  private _customMetricTypeDomains?: string[]; 
  public get customMetricTypeDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_metric_type_domains'));
  }
  public set customMetricTypeDomains(value: string[]) {
    this._customMetricTypeDomains = value;
  }
  public resetCustomMetricTypeDomains() {
    this._customMetricTypeDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricTypeDomainsInput() {
    return this._customMetricTypeDomains;
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

  // exclude_gce_instances_with_labels - computed: false, optional: true, required: false
  private _excludeGceInstancesWithLabels?: string[]; 
  public get excludeGceInstancesWithLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_gce_instances_with_labels'));
  }
  public set excludeGceInstancesWithLabels(value: string[]) {
    this._excludeGceInstancesWithLabels = value;
  }
  public resetExcludeGceInstancesWithLabels() {
    this._excludeGceInstancesWithLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeGceInstancesWithLabelsInput() {
    return this._excludeGceInstancesWithLabels;
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

  // import_gcp_metrics - computed: false, optional: true, required: false
  private _importGcpMetrics?: boolean | cdktf.IResolvable; 
  public get importGcpMetrics() {
    return this.getBooleanAttribute('import_gcp_metrics');
  }
  public set importGcpMetrics(value: boolean | cdktf.IResolvable) {
    this._importGcpMetrics = value;
  }
  public resetImportGcpMetrics() {
    this._importGcpMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importGcpMetricsInput() {
    return this._importGcpMetrics;
  }

  // include_list - computed: false, optional: true, required: false
  private _includeList?: string[]; 
  public get includeList() {
    return cdktf.Fn.tolist(this.getListAttribute('include_list'));
  }
  public set includeList(value: string[]) {
    this._includeList = value;
  }
  public resetIncludeList() {
    this._includeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeListInput() {
    return this._includeList;
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

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // use_metric_source_project_for_quota - computed: false, optional: true, required: false
  private _useMetricSourceProjectForQuota?: boolean | cdktf.IResolvable; 
  public get useMetricSourceProjectForQuota() {
    return this.getBooleanAttribute('use_metric_source_project_for_quota');
  }
  public set useMetricSourceProjectForQuota(value: boolean | cdktf.IResolvable) {
    this._useMetricSourceProjectForQuota = value;
  }
  public resetUseMetricSourceProjectForQuota() {
    this._useMetricSourceProjectForQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMetricSourceProjectForQuotaInput() {
    return this._useMetricSourceProjectForQuota;
  }

  // wif_splunk_identity - computed: true, optional: true, required: false
  private _wifSplunkIdentity?: { [key: string]: string }; 
  public get wifSplunkIdentity() {
    return this.getStringMapAttribute('wif_splunk_identity');
  }
  public set wifSplunkIdentity(value: { [key: string]: string }) {
    this._wifSplunkIdentity = value;
  }
  public resetWifSplunkIdentity() {
    this._wifSplunkIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifSplunkIdentityInput() {
    return this._wifSplunkIdentity;
  }

  // workload_identity_federation_config - computed: false, optional: true, required: false
  private _workloadIdentityFederationConfig?: string; 
  public get workloadIdentityFederationConfig() {
    return this.getStringAttribute('workload_identity_federation_config');
  }
  public set workloadIdentityFederationConfig(value: string) {
    this._workloadIdentityFederationConfig = value;
  }
  public resetWorkloadIdentityFederationConfig() {
    this._workloadIdentityFederationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityFederationConfigInput() {
    return this._workloadIdentityFederationConfig;
  }

  // project_service_keys - computed: false, optional: true, required: false
  private _projectServiceKeys = new GcpIntegrationProjectServiceKeysList(this, "project_service_keys", true);
  public get projectServiceKeys() {
    return this._projectServiceKeys;
  }
  public putProjectServiceKeys(value: GcpIntegrationProjectServiceKeys[] | cdktf.IResolvable) {
    this._projectServiceKeys.internalValue = value;
  }
  public resetProjectServiceKeys() {
    this._projectServiceKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectServiceKeysInput() {
    return this._projectServiceKeys.internalValue;
  }

  // project_wif_configs - computed: false, optional: true, required: false
  private _projectWifConfigs = new GcpIntegrationProjectWifConfigsList(this, "project_wif_configs", true);
  public get projectWifConfigs() {
    return this._projectWifConfigs;
  }
  public putProjectWifConfigs(value: GcpIntegrationProjectWifConfigs[] | cdktf.IResolvable) {
    this._projectWifConfigs.internalValue = value;
  }
  public resetProjectWifConfigs() {
    this._projectWifConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectWifConfigsInput() {
    return this._projectWifConfigs.internalValue;
  }

  // projects - computed: false, optional: true, required: false
  private _projects = new GcpIntegrationProjectsOutputReference(this, "projects");
  public get projects() {
    return this._projects;
  }
  public putProjects(value: GcpIntegrationProjects) {
    this._projects.internalValue = value;
  }
  public resetProjects() {
    this._projects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_method: cdktf.stringToTerraform(this._authMethod),
      custom_metric_type_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customMetricTypeDomains),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclude_gce_instances_with_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeGceInstancesWithLabels),
      id: cdktf.stringToTerraform(this._id),
      import_gcp_metrics: cdktf.booleanToTerraform(this._importGcpMetrics),
      include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeList),
      name: cdktf.stringToTerraform(this._name),
      named_token: cdktf.stringToTerraform(this._namedToken),
      poll_rate: cdktf.numberToTerraform(this._pollRate),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      use_metric_source_project_for_quota: cdktf.booleanToTerraform(this._useMetricSourceProjectForQuota),
      wif_splunk_identity: cdktf.hashMapper(cdktf.stringToTerraform)(this._wifSplunkIdentity),
      workload_identity_federation_config: cdktf.stringToTerraform(this._workloadIdentityFederationConfig),
      project_service_keys: cdktf.listMapper(gcpIntegrationProjectServiceKeysToTerraform, true)(this._projectServiceKeys.internalValue),
      project_wif_configs: cdktf.listMapper(gcpIntegrationProjectWifConfigsToTerraform, true)(this._projectWifConfigs.internalValue),
      projects: gcpIntegrationProjectsToTerraform(this._projects.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_metric_type_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customMetricTypeDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_gce_instances_with_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeGceInstancesWithLabels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_gcp_metrics: {
        value: cdktf.booleanToHclTerraform(this._importGcpMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_metric_source_project_for_quota: {
        value: cdktf.booleanToHclTerraform(this._useMetricSourceProjectForQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wif_splunk_identity: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._wifSplunkIdentity),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      workload_identity_federation_config: {
        value: cdktf.stringToHclTerraform(this._workloadIdentityFederationConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_service_keys: {
        value: cdktf.listMapperHcl(gcpIntegrationProjectServiceKeysToHclTerraform, true)(this._projectServiceKeys.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GcpIntegrationProjectServiceKeysList",
      },
      project_wif_configs: {
        value: cdktf.listMapperHcl(gcpIntegrationProjectWifConfigsToHclTerraform, true)(this._projectWifConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GcpIntegrationProjectWifConfigsList",
      },
      projects: {
        value: gcpIntegrationProjectsToHclTerraform(this._projects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpIntegrationProjectsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
