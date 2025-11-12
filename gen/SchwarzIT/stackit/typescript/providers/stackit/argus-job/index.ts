// https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArgusJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the Argus Instance ID the job belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#argus_instance_id ArgusJob#argus_instance_id}
  */
  readonly argusInstanceId: string;
  /**
  * A basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#basic_auth ArgusJob#basic_auth}
  */
  readonly basicAuth?: ArgusJobBasicAuth;
  /**
  * Specifies the job scraping path. Defaults to `/metrics`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#metrics_path ArgusJob#metrics_path}
  */
  readonly metricsPath?: string;
  /**
  * Specifies the name of the scraping job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#name ArgusJob#name}
  */
  readonly name: string;
  /**
  * Specifies the Project ID the Argus instance belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#project_id ArgusJob#project_id}
  */
  readonly projectId: string;
  /**
  * A saml2 configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#saml2 ArgusJob#saml2}
  */
  readonly saml2?: ArgusJobSaml2;
  /**
  * Specifies the scrape sample limit. Upper limit is depends on the service plan. Default is `5000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#sample_limit ArgusJob#sample_limit}
  */
  readonly sampleLimit?: number;
  /**
  * Specifies the scheme. Default is `https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#scheme ArgusJob#scheme}
  */
  readonly scheme?: string;
  /**
  * Specifies the scrape interval as duration string. Default is `5m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#scrape_interval ArgusJob#scrape_interval}
  */
  readonly scrapeInterval?: string;
  /**
  * Specifies the scrape timeout as duration string. Default is `2m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#scrape_timeout ArgusJob#scrape_timeout}
  */
  readonly scrapeTimeout?: string;
  /**
  * targets list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#targets ArgusJob#targets}
  */
  readonly targets: ArgusJobTargets[] | cdktf.IResolvable;
}
export interface ArgusJobBasicAuth {
  /**
  * Specifies basic auth password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#password ArgusJob#password}
  */
  readonly password: string;
  /**
  * Specifies basic auth username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#username ArgusJob#username}
  */
  readonly username: string;
}

export function argusJobBasicAuthToTerraform(struct?: ArgusJobBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function argusJobBasicAuthToHclTerraform(struct?: ArgusJobBasicAuth | cdktf.IResolvable): any {
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

export class ArgusJobBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArgusJobBasicAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ArgusJobBasicAuth | cdktf.IResolvable | undefined) {
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

  // password - computed: false, optional: false, required: true
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

  // username - computed: false, optional: false, required: true
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
export interface ArgusJobSaml2 {
  /**
  * Should URL parameters be enabled? Default is `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#enable_url_parameters ArgusJob#enable_url_parameters}
  */
  readonly enableUrlParameters?: boolean | cdktf.IResolvable;
}

export function argusJobSaml2ToTerraform(struct?: ArgusJobSaml2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_url_parameters: cdktf.booleanToTerraform(struct!.enableUrlParameters),
  }
}


export function argusJobSaml2ToHclTerraform(struct?: ArgusJobSaml2 | cdktf.IResolvable): any {
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

export class ArgusJobSaml2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArgusJobSaml2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ArgusJobSaml2 | cdktf.IResolvable | undefined) {
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
export interface ArgusJobTargets {
  /**
  * Specifies labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#labels ArgusJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies target URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#urls ArgusJob#urls}
  */
  readonly urls: string[];
}

export function argusJobTargetsToTerraform(struct?: ArgusJobTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urls),
  }
}


export function argusJobTargetsToHclTerraform(struct?: ArgusJobTargets | cdktf.IResolvable): any {
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

export class ArgusJobTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArgusJobTargets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ArgusJobTargets | cdktf.IResolvable | undefined) {
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

export class ArgusJobTargetsList extends cdktf.ComplexList {
  public internalValue? : ArgusJobTargets[] | cdktf.IResolvable

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
  public get(index: number): ArgusJobTargetsOutputReference {
    return new ArgusJobTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job stackit_argus_job}
*/
export class ArgusJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_argus_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArgusJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArgusJob to import
  * @param importFromId The id of the existing ArgusJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArgusJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_argus_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/resources/argus_job stackit_argus_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArgusJobConfig
  */
  public constructor(scope: Construct, id: string, config: ArgusJobConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_argus_job',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.3',
        providerVersionConstraint: '1.34.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._argusInstanceId = config.argusInstanceId;
    this._basicAuth.internalValue = config.basicAuth;
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

  // argus_instance_id - computed: false, optional: false, required: true
  private _argusInstanceId?: string; 
  public get argusInstanceId() {
    return this.getStringAttribute('argus_instance_id');
  }
  public set argusInstanceId(value: string) {
    this._argusInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argusInstanceIdInput() {
    return this._argusInstanceId;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new ArgusJobBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: ArgusJobBasicAuth) {
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

  // metrics_path - computed: true, optional: true, required: false
  private _metricsPath?: string; 
  public get metricsPath() {
    return this.getStringAttribute('metrics_path');
  }
  public set metricsPath(value: string) {
    this._metricsPath = value;
  }
  public resetMetricsPath() {
    this._metricsPath = undefined;
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

  // saml2 - computed: false, optional: true, required: false
  private _saml2 = new ArgusJobSaml2OutputReference(this, "saml2");
  public get saml2() {
    return this._saml2;
  }
  public putSaml2(value: ArgusJobSaml2) {
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
  private _targets = new ArgusJobTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: ArgusJobTargets[] | cdktf.IResolvable) {
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
      argus_instance_id: cdktf.stringToTerraform(this._argusInstanceId),
      basic_auth: argusJobBasicAuthToTerraform(this._basicAuth.internalValue),
      metrics_path: cdktf.stringToTerraform(this._metricsPath),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      saml2: argusJobSaml2ToTerraform(this._saml2.internalValue),
      sample_limit: cdktf.numberToTerraform(this._sampleLimit),
      scheme: cdktf.stringToTerraform(this._scheme),
      scrape_interval: cdktf.stringToTerraform(this._scrapeInterval),
      scrape_timeout: cdktf.stringToTerraform(this._scrapeTimeout),
      targets: cdktf.listMapper(argusJobTargetsToTerraform, false)(this._targets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      argus_instance_id: {
        value: cdktf.stringToHclTerraform(this._argusInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth: {
        value: argusJobBasicAuthToHclTerraform(this._basicAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArgusJobBasicAuth",
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
        value: argusJobSaml2ToHclTerraform(this._saml2.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArgusJobSaml2",
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
        value: cdktf.listMapperHcl(argusJobTargetsToHclTerraform, false)(this._targets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArgusJobTargetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
