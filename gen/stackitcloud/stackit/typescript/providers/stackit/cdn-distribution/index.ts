// https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnDistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The distribution configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution#config CdnDistribution#config}
  */
  readonly config: CdnDistributionConfigA;
  /**
  * STACKIT project ID associated with the distribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution#project_id CdnDistribution#project_id}
  */
  readonly projectId: string;
}
export interface CdnDistributionConfigBackend {
  /**
  * A map of URLs to a list of countries where content is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution#geofencing CdnDistribution#geofencing}
  */
  readonly geofencing?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The configured origin request headers for the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution#origin_request_headers CdnDistribution#origin_request_headers}
  */
  readonly originRequestHeaders?: { [key: string]: string };
  /**
  * The configured backend type for the distribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution#origin_url CdnDistribution#origin_url}
  */
  readonly originUrl: string;
  /**
  * The configured backend type. Supported values are: `http`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution#type CdnDistribution#type}
  */
  readonly type: string;
}

export function cdnDistributionConfigBackendToTerraform(struct?: CdnDistributionConfigBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geofencing: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.geofencing),
    origin_request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.originRequestHeaders),
    origin_url: cdktf.stringToTerraform(struct!.originUrl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cdnDistributionConfigBackendToHclTerraform(struct?: CdnDistributionConfigBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geofencing: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.geofencing),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    origin_request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.originRequestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    origin_url: {
      value: cdktf.stringToHclTerraform(struct!.originUrl),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDistributionConfigBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnDistributionConfigBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geofencing !== undefined) {
      hasAnyValues = true;
      internalValueResult.geofencing = this._geofencing;
    }
    if (this._originRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRequestHeaders = this._originRequestHeaders;
    }
    if (this._originUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.originUrl = this._originUrl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDistributionConfigBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geofencing = undefined;
      this._originRequestHeaders = undefined;
      this._originUrl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geofencing = value.geofencing;
      this._originRequestHeaders = value.originRequestHeaders;
      this._originUrl = value.originUrl;
      this._type = value.type;
    }
  }

  // geofencing - computed: false, optional: true, required: false
  private _geofencing?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get geofencing() {
    return this.interpolationForAttribute('geofencing');
  }
  public set geofencing(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._geofencing = value;
  }
  public resetGeofencing() {
    this._geofencing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geofencingInput() {
    return this._geofencing;
  }

  // origin_request_headers - computed: false, optional: true, required: false
  private _originRequestHeaders?: { [key: string]: string }; 
  public get originRequestHeaders() {
    return this.getStringMapAttribute('origin_request_headers');
  }
  public set originRequestHeaders(value: { [key: string]: string }) {
    this._originRequestHeaders = value;
  }
  public resetOriginRequestHeaders() {
    this._originRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestHeadersInput() {
    return this._originRequestHeaders;
  }

  // origin_url - computed: false, optional: false, required: true
  private _originUrl?: string; 
  public get originUrl() {
    return this.getStringAttribute('origin_url');
  }
  public set originUrl(value: string) {
    this._originUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originUrlInput() {
    return this._originUrl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CdnDistributionConfigOptimizer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution#enabled CdnDistribution#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cdnDistributionConfigOptimizerToTerraform(struct?: CdnDistributionConfigOptimizer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cdnDistributionConfigOptimizerToHclTerraform(struct?: CdnDistributionConfigOptimizer | cdktf.IResolvable): any {
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

export class CdnDistributionConfigOptimizerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnDistributionConfigOptimizer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDistributionConfigOptimizer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
export interface CdnDistributionConfigA {
  /**
  * The configured backend for the distribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution#backend CdnDistribution#backend}
  */
  readonly backend: CdnDistributionConfigBackend;
  /**
  * The configured countries where distribution of content is blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution#blocked_countries CdnDistribution#blocked_countries}
  */
  readonly blockedCountries?: string[];
  /**
  * Configuration for the Image Optimizer. This is a paid feature that automatically optimizes images to reduce their file size for faster delivery, leading to improved website performance and a better user experience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution#optimizer CdnDistribution#optimizer}
  */
  readonly optimizer?: CdnDistributionConfigOptimizer;
  /**
  * The configured regions where content will be hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution#regions CdnDistribution#regions}
  */
  readonly regions: string[];
}

export function cdnDistributionConfigAToTerraform(struct?: CdnDistributionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: cdnDistributionConfigBackendToTerraform(struct!.backend),
    blocked_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockedCountries),
    optimizer: cdnDistributionConfigOptimizerToTerraform(struct!.optimizer),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}


export function cdnDistributionConfigAToHclTerraform(struct?: CdnDistributionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: cdnDistributionConfigBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnDistributionConfigBackend",
    },
    blocked_countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockedCountries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    optimizer: {
      value: cdnDistributionConfigOptimizerToHclTerraform(struct!.optimizer),
      isBlock: true,
      type: "struct",
      storageClassType: "CdnDistributionConfigOptimizer",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDistributionConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnDistributionConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._blockedCountries !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedCountries = this._blockedCountries;
    }
    if (this._optimizer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizer = this._optimizer?.internalValue;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDistributionConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backend.internalValue = undefined;
      this._blockedCountries = undefined;
      this._optimizer.internalValue = undefined;
      this._regions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backend.internalValue = value.backend;
      this._blockedCountries = value.blockedCountries;
      this._optimizer.internalValue = value.optimizer;
      this._regions = value.regions;
    }
  }

  // backend - computed: false, optional: false, required: true
  private _backend = new CdnDistributionConfigBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: CdnDistributionConfigBackend) {
    this._backend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // blocked_countries - computed: false, optional: true, required: false
  private _blockedCountries?: string[]; 
  public get blockedCountries() {
    return this.getListAttribute('blocked_countries');
  }
  public set blockedCountries(value: string[]) {
    this._blockedCountries = value;
  }
  public resetBlockedCountries() {
    this._blockedCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedCountriesInput() {
    return this._blockedCountries;
  }

  // optimizer - computed: true, optional: true, required: false
  private _optimizer = new CdnDistributionConfigOptimizerOutputReference(this, "optimizer");
  public get optimizer() {
    return this._optimizer;
  }
  public putOptimizer(value: CdnDistributionConfigOptimizer) {
    this._optimizer.internalValue = value;
  }
  public resetOptimizer() {
    this._optimizer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerInput() {
    return this._optimizer.internalValue;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface CdnDistributionDomains {
}

export function cdnDistributionDomainsToTerraform(struct?: CdnDistributionDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdnDistributionDomainsToHclTerraform(struct?: CdnDistributionDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdnDistributionDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CdnDistributionDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDistributionDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return this.getListAttribute('errors');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CdnDistributionDomainsList extends cdktf.ComplexList {

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
  public get(index: number): CdnDistributionDomainsOutputReference {
    return new CdnDistributionDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution stackit_cdn_distribution}
*/
export class CdnDistribution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_cdn_distribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnDistribution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnDistribution to import
  * @param importFromId The id of the existing CdnDistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnDistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_cdn_distribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/cdn_distribution stackit_cdn_distribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnDistributionConfig
  */
  public constructor(scope: Construct, id: string, config: CdnDistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_cdn_distribution',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.69.0',
        providerVersionConstraint: '0.69.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config = new CdnDistributionConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: CdnDistributionConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // distribution_id - computed: true, optional: false, required: false
  public get distributionId() {
    return this.getStringAttribute('distribution_id');
  }

  // domains - computed: true, optional: false, required: false
  private _domains = new CdnDistributionDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return this.getListAttribute('errors');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdnDistributionConfigAToTerraform(this._config.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdnDistributionConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnDistributionConfigA",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
