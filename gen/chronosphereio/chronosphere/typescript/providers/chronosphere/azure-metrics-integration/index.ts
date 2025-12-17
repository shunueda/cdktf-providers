// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureMetricsIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#count_metrics_enabled AzureMetricsIntegration#count_metrics_enabled}
  */
  readonly countMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#id AzureMetricsIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#name AzureMetricsIntegration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#propagate_tags AzureMetricsIntegration#propagate_tags}
  */
  readonly propagateTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#slug AzureMetricsIntegration#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#usage_metrics_enabled AzureMetricsIntegration#usage_metrics_enabled}
  */
  readonly usageMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#principal AzureMetricsIntegration#principal}
  */
  readonly principal?: AzureMetricsIntegrationPrincipal;
  /**
  * scrape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#scrape_config AzureMetricsIntegration#scrape_config}
  */
  readonly scrapeConfig?: AzureMetricsIntegrationScrapeConfig;
}
export interface AzureMetricsIntegrationPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#client_id AzureMetricsIntegration#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#tenant_id AzureMetricsIntegration#tenant_id}
  */
  readonly tenantId?: string;
}

export function azureMetricsIntegrationPrincipalToTerraform(struct?: AzureMetricsIntegrationPrincipalOutputReference | AzureMetricsIntegrationPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function azureMetricsIntegrationPrincipalToHclTerraform(struct?: AzureMetricsIntegrationPrincipalOutputReference | AzureMetricsIntegrationPrincipal): any {
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

export class AzureMetricsIntegrationPrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureMetricsIntegrationPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureMetricsIntegrationPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._tenantId = value.tenantId;
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
export interface AzureMetricsIntegrationScrapeConfigResourceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#metric_names AzureMetricsIntegration#metric_names}
  */
  readonly metricNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#name AzureMetricsIntegration#name}
  */
  readonly name?: string;
}

export function azureMetricsIntegrationScrapeConfigResourceTypeToTerraform(struct?: AzureMetricsIntegrationScrapeConfigResourceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metricNames),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function azureMetricsIntegrationScrapeConfigResourceTypeToHclTerraform(struct?: AzureMetricsIntegrationScrapeConfigResourceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class AzureMetricsIntegrationScrapeConfigResourceTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureMetricsIntegrationScrapeConfigResourceType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureMetricsIntegrationScrapeConfigResourceType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._name = value.name;
    }
  }

  // metric_names - computed: false, optional: true, required: false
  private _metricNames?: string[]; 
  public get metricNames() {
    return this.getListAttribute('metric_names');
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  public resetMetricNames() {
    this._metricNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
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

export class AzureMetricsIntegrationScrapeConfigResourceTypeList extends cdktf.ComplexList {
  public internalValue? : AzureMetricsIntegrationScrapeConfigResourceType[] | cdktf.IResolvable

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
  public get(index: number): AzureMetricsIntegrationScrapeConfigResourceTypeOutputReference {
    return new AzureMetricsIntegrationScrapeConfigResourceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureMetricsIntegrationScrapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#locations AzureMetricsIntegration#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#subscription_ids AzureMetricsIntegration#subscription_ids}
  */
  readonly subscriptionIds?: string[];
  /**
  * resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#resource_type AzureMetricsIntegration#resource_type}
  */
  readonly resourceType?: AzureMetricsIntegrationScrapeConfigResourceType[] | cdktf.IResolvable;
}

export function azureMetricsIntegrationScrapeConfigToTerraform(struct?: AzureMetricsIntegrationScrapeConfigOutputReference | AzureMetricsIntegrationScrapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
    subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subscriptionIds),
    resource_type: cdktf.listMapper(azureMetricsIntegrationScrapeConfigResourceTypeToTerraform, true)(struct!.resourceType),
  }
}


export function azureMetricsIntegrationScrapeConfigToHclTerraform(struct?: AzureMetricsIntegrationScrapeConfigOutputReference | AzureMetricsIntegrationScrapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subscription_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subscriptionIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktf.listMapperHcl(azureMetricsIntegrationScrapeConfigResourceTypeToHclTerraform, true)(struct!.resourceType),
      isBlock: true,
      type: "list",
      storageClassType: "AzureMetricsIntegrationScrapeConfigResourceTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureMetricsIntegrationScrapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureMetricsIntegrationScrapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    if (this._subscriptionIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionIds = this._subscriptionIds;
    }
    if (this._resourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureMetricsIntegrationScrapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
      this._subscriptionIds = undefined;
      this._resourceType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
      this._subscriptionIds = value.subscriptionIds;
      this._resourceType.internalValue = value.resourceType;
    }
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // subscription_ids - computed: false, optional: true, required: false
  private _subscriptionIds?: string[]; 
  public get subscriptionIds() {
    return this.getListAttribute('subscription_ids');
  }
  public set subscriptionIds(value: string[]) {
    this._subscriptionIds = value;
  }
  public resetSubscriptionIds() {
    this._subscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdsInput() {
    return this._subscriptionIds;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType = new AzureMetricsIntegrationScrapeConfigResourceTypeList(this, "resource_type", false);
  public get resourceType() {
    return this._resourceType;
  }
  public putResourceType(value: AzureMetricsIntegrationScrapeConfigResourceType[] | cdktf.IResolvable) {
    this._resourceType.internalValue = value;
  }
  public resetResourceType() {
    this._resourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration chronosphere_azure_metrics_integration}
*/
export class AzureMetricsIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_azure_metrics_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureMetricsIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureMetricsIntegration to import
  * @param importFromId The id of the existing AzureMetricsIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureMetricsIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_azure_metrics_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/azure_metrics_integration chronosphere_azure_metrics_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureMetricsIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: AzureMetricsIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_azure_metrics_integration',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.19.0',
        providerVersionConstraint: '1.19.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._countMetricsEnabled = config.countMetricsEnabled;
    this._id = config.id;
    this._name = config.name;
    this._propagateTags = config.propagateTags;
    this._slug = config.slug;
    this._usageMetricsEnabled = config.usageMetricsEnabled;
    this._principal.internalValue = config.principal;
    this._scrapeConfig.internalValue = config.scrapeConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // count_metrics_enabled - computed: false, optional: true, required: false
  private _countMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get countMetricsEnabled() {
    return this.getBooleanAttribute('count_metrics_enabled');
  }
  public set countMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._countMetricsEnabled = value;
  }
  public resetCountMetricsEnabled() {
    this._countMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countMetricsEnabledInput() {
    return this._countMetricsEnabled;
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

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: boolean | cdktf.IResolvable; 
  public get propagateTags() {
    return this.getBooleanAttribute('propagate_tags');
  }
  public set propagateTags(value: boolean | cdktf.IResolvable) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // usage_metrics_enabled - computed: false, optional: true, required: false
  private _usageMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get usageMetricsEnabled() {
    return this.getBooleanAttribute('usage_metrics_enabled');
  }
  public set usageMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._usageMetricsEnabled = value;
  }
  public resetUsageMetricsEnabled() {
    this._usageMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageMetricsEnabledInput() {
    return this._usageMetricsEnabled;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new AzureMetricsIntegrationPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: AzureMetricsIntegrationPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // scrape_config - computed: false, optional: true, required: false
  private _scrapeConfig = new AzureMetricsIntegrationScrapeConfigOutputReference(this, "scrape_config");
  public get scrapeConfig() {
    return this._scrapeConfig;
  }
  public putScrapeConfig(value: AzureMetricsIntegrationScrapeConfig) {
    this._scrapeConfig.internalValue = value;
  }
  public resetScrapeConfig() {
    this._scrapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeConfigInput() {
    return this._scrapeConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      count_metrics_enabled: cdktf.booleanToTerraform(this._countMetricsEnabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      propagate_tags: cdktf.booleanToTerraform(this._propagateTags),
      slug: cdktf.stringToTerraform(this._slug),
      usage_metrics_enabled: cdktf.booleanToTerraform(this._usageMetricsEnabled),
      principal: azureMetricsIntegrationPrincipalToTerraform(this._principal.internalValue),
      scrape_config: azureMetricsIntegrationScrapeConfigToTerraform(this._scrapeConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      count_metrics_enabled: {
        value: cdktf.booleanToHclTerraform(this._countMetricsEnabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagate_tags: {
        value: cdktf.booleanToHclTerraform(this._propagateTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_metrics_enabled: {
        value: cdktf.booleanToHclTerraform(this._usageMetricsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      principal: {
        value: azureMetricsIntegrationPrincipalToHclTerraform(this._principal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureMetricsIntegrationPrincipalList",
      },
      scrape_config: {
        value: azureMetricsIntegrationScrapeConfigToHclTerraform(this._scrapeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureMetricsIntegrationScrapeConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
