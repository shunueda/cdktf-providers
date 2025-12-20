// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObservabilityScrapeconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * A basic authentication block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#basic_auth ObservabilityScrapeconfig#basic_auth}
  */
  readonly basicAuth?: ObservabilityScrapeconfigBasicAuth;
  /**
  * Observability instance ID to which the scraping job is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#instance_id ObservabilityScrapeconfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * Specifies the job scraping url path. E.g. `/metrics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#metrics_path ObservabilityScrapeconfig#metrics_path}
  */
  readonly metricsPath: string;
  /**
  * Specifies the name of the scraping job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#name ObservabilityScrapeconfig#name}
  */
  readonly name: string;
  /**
  * STACKIT project ID to which the scraping job is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#project_id ObservabilityScrapeconfig#project_id}
  */
  readonly projectId: string;
  /**
  * A SAML2 configuration block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#saml2 ObservabilityScrapeconfig#saml2}
  */
  readonly saml2?: ObservabilityScrapeconfigSaml2;
  /**
  * Specifies the scrape sample limit. Upper limit depends on the service plan. Defaults to `5000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#sample_limit ObservabilityScrapeconfig#sample_limit}
  */
  readonly sampleLimit?: number;
  /**
  * Specifies the http scheme. Defaults to `https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#scheme ObservabilityScrapeconfig#scheme}
  */
  readonly scheme?: string;
  /**
  * Specifies the scrape interval as duration string. Defaults to `5m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#scrape_interval ObservabilityScrapeconfig#scrape_interval}
  */
  readonly scrapeInterval?: string;
  /**
  * Specifies the scrape timeout as duration string. Defaults to `2m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#scrape_timeout ObservabilityScrapeconfig#scrape_timeout}
  */
  readonly scrapeTimeout?: string;
  /**
  * The targets list (specified by the static config).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#targets ObservabilityScrapeconfig#targets}
  */
  readonly targets: ObservabilityScrapeconfigTargets[] | cdktf.IResolvable;
}
export interface ObservabilityScrapeconfigBasicAuth {
  /**
  * Specifies basic auth password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#password ObservabilityScrapeconfig#password}
  */
  readonly password: string;
  /**
  * Specifies basic auth username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#username ObservabilityScrapeconfig#username}
  */
  readonly username: string;
}

export function observabilityScrapeconfigBasicAuthToTerraform(struct?: ObservabilityScrapeconfigBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function observabilityScrapeconfigBasicAuthToHclTerraform(struct?: ObservabilityScrapeconfigBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityScrapeconfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityScrapeconfigBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityScrapeconfigBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ObservabilityScrapeconfigSaml2 {
  /**
  * Specifies if URL parameters are enabled. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#enable_url_parameters ObservabilityScrapeconfig#enable_url_parameters}
  */
  readonly enableUrlParameters?: boolean | cdktf.IResolvable;
}

export function observabilityScrapeconfigSaml2ToTerraform(struct?: ObservabilityScrapeconfigSaml2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_url_parameters: cdktf.booleanToTerraform(struct!.enableUrlParameters),
  }
}


export function observabilityScrapeconfigSaml2ToHclTerraform(struct?: ObservabilityScrapeconfigSaml2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_url_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.enableUrlParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityScrapeconfigSaml2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityScrapeconfigSaml2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableUrlParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUrlParameters = this._enableUrlParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityScrapeconfigSaml2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableUrlParameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableUrlParameters = value.enableUrlParameters;
    }
  }

  // enable_url_parameters - computed: true, optional: true, required: false
  private _enableUrlParameters?: boolean | cdktf.IResolvable; 
  public get enableUrlParameters() {
    return this.getBooleanAttribute('enable_url_parameters');
  }
  public set enableUrlParameters(value: boolean | cdktf.IResolvable) {
    this._enableUrlParameters = value;
  }
  public resetEnableUrlParameters() {
    this._enableUrlParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUrlParametersInput() {
    return this._enableUrlParameters;
  }
}
export interface ObservabilityScrapeconfigTargets {
  /**
  * Specifies labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#labels ObservabilityScrapeconfig#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies target URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#urls ObservabilityScrapeconfig#urls}
  */
  readonly urls: string[];
}

export function observabilityScrapeconfigTargetsToTerraform(struct?: ObservabilityScrapeconfigTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urls),
  }
}


export function observabilityScrapeconfigTargetsToHclTerraform(struct?: ObservabilityScrapeconfigTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityScrapeconfigTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityScrapeconfigTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._urls !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityScrapeconfigTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._urls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._urls = value.urls;
    }
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

  // urls - computed: false, optional: false, required: true
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }
}

export class ObservabilityScrapeconfigTargetsList extends cdktf.ComplexList {
  public internalValue? : ObservabilityScrapeconfigTargets[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityScrapeconfigTargetsOutputReference {
    return new ObservabilityScrapeconfigTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig stackit_observability_scrapeconfig}
*/
export class ObservabilityScrapeconfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_observability_scrapeconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObservabilityScrapeconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservabilityScrapeconfig to import
  * @param importFromId The id of the existing ObservabilityScrapeconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservabilityScrapeconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_observability_scrapeconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/observability_scrapeconfig stackit_observability_scrapeconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservabilityScrapeconfigConfig
  */
  public constructor(scope: Construct, id: string, config: ObservabilityScrapeconfigConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_observability_scrapeconfig',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.76.0',
        providerVersionConstraint: '0.76.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basicAuth.internalValue = config.basicAuth;
    this._instanceId = config.instanceId;
    this._metricsPath = config.metricsPath;
    this._name = config.name;
    this._projectId = config.projectId;
    this._saml2.internalValue = config.saml2;
    this._sampleLimit = config.sampleLimit;
    this._scheme = config.scheme;
    this._scrapeInterval = config.scrapeInterval;
    this._scrapeTimeout = config.scrapeTimeout;
    this._targets.internalValue = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basic_auth - computed: true, optional: true, required: false
  private _basicAuth = new ObservabilityScrapeconfigBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: ObservabilityScrapeconfigBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // metrics_path - computed: false, optional: false, required: true
  private _metricsPath?: string; 
  public get metricsPath() {
    return this.getStringAttribute('metrics_path');
  }
  public set metricsPath(value: string) {
    this._metricsPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPathInput() {
    return this._metricsPath;
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

  // saml2 - computed: true, optional: true, required: false
  private _saml2 = new ObservabilityScrapeconfigSaml2OutputReference(this, "saml2");
  public get saml2() {
    return this._saml2;
  }
  public putSaml2(value: ObservabilityScrapeconfigSaml2) {
    this._saml2.internalValue = value;
  }
  public resetSaml2() {
    this._saml2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2Input() {
    return this._saml2.internalValue;
  }

  // sample_limit - computed: true, optional: true, required: false
  private _sampleLimit?: number; 
  public get sampleLimit() {
    return this.getNumberAttribute('sample_limit');
  }
  public set sampleLimit(value: number) {
    this._sampleLimit = value;
  }
  public resetSampleLimit() {
    this._sampleLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleLimitInput() {
    return this._sampleLimit;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // scrape_interval - computed: true, optional: true, required: false
  private _scrapeInterval?: string; 
  public get scrapeInterval() {
    return this.getStringAttribute('scrape_interval');
  }
  public set scrapeInterval(value: string) {
    this._scrapeInterval = value;
  }
  public resetScrapeInterval() {
    this._scrapeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalInput() {
    return this._scrapeInterval;
  }

  // scrape_timeout - computed: true, optional: true, required: false
  private _scrapeTimeout?: string; 
  public get scrapeTimeout() {
    return this.getStringAttribute('scrape_timeout');
  }
  public set scrapeTimeout(value: string) {
    this._scrapeTimeout = value;
  }
  public resetScrapeTimeout() {
    this._scrapeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeTimeoutInput() {
    return this._scrapeTimeout;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new ObservabilityScrapeconfigTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: ObservabilityScrapeconfigTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      basic_auth: observabilityScrapeconfigBasicAuthToTerraform(this._basicAuth.internalValue),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      metrics_path: cdktf.stringToTerraform(this._metricsPath),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      saml2: observabilityScrapeconfigSaml2ToTerraform(this._saml2.internalValue),
      sample_limit: cdktf.numberToTerraform(this._sampleLimit),
      scheme: cdktf.stringToTerraform(this._scheme),
      scrape_interval: cdktf.stringToTerraform(this._scrapeInterval),
      scrape_timeout: cdktf.stringToTerraform(this._scrapeTimeout),
      targets: cdktf.listMapper(observabilityScrapeconfigTargetsToTerraform, false)(this._targets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basic_auth: {
        value: observabilityScrapeconfigBasicAuthToHclTerraform(this._basicAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObservabilityScrapeconfigBasicAuth",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_path: {
        value: cdktf.stringToHclTerraform(this._metricsPath),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2: {
        value: observabilityScrapeconfigSaml2ToHclTerraform(this._saml2.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObservabilityScrapeconfigSaml2",
      },
      sample_limit: {
        value: cdktf.numberToHclTerraform(this._sampleLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheme: {
        value: cdktf.stringToHclTerraform(this._scheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scrape_interval: {
        value: cdktf.stringToHclTerraform(this._scrapeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scrape_timeout: {
        value: cdktf.stringToHclTerraform(this._scrapeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets: {
        value: cdktf.listMapperHcl(observabilityScrapeconfigTargetsToHclTerraform, false)(this._targets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObservabilityScrapeconfigTargetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
