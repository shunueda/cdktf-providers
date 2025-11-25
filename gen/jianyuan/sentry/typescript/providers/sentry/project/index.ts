// https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure origin URLs which Sentry should accept events from. This is used for communication with clients like [sentry-javascript](https://github.com/getsentry/sentry-javascript).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#client_security Project#client_security}
  */
  readonly clientSecurity?: ProjectClientSecurity;
  /**
  * Whether to create a default key on project creation. By default, Sentry will create a key for you. If you wish to manage keys manually, set this to false and create keys using the `sentry_key` resource. Note that this only takes effect on project creation, not on project update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#default_key Project#default_key}
  */
  readonly defaultKey?: boolean | cdktf.IResolvable;
  /**
  * Whether to create a default issue alert. Defaults to true where the behavior is to alert the user on every new issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#default_rules Project#default_rules}
  */
  readonly defaultRules?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of time (in seconds) to wait between scheduling digests for delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#digests_max_delay Project#digests_max_delay}
  */
  readonly digestsMaxDelay?: number;
  /**
  * The minimum amount of time (in seconds) to wait between scheduling digests for delivery after the initial scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#digests_min_delay Project#digests_min_delay}
  */
  readonly digestsMinDelay?: number;
  /**
  * Custom filters for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#filters Project#filters}
  */
  readonly filters?: ProjectFilters;
  /**
  * This can be used to modify the fingerprint rules on the server with custom rules. Rules follow the pattern `matcher:glob -> fingerprint, values`. To learn more about fingerprint rules, [read the docs](https://docs.sentry.io/concepts/data-management/event-grouping/fingerprint-rules/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#fingerprinting_rules Project#fingerprinting_rules}
  */
  readonly fingerprintingRules?: string;
  /**
  * This can be used to enhance the grouping algorithm with custom rules. Rules follow the pattern `matcher:glob [v^]?[+-]flag`. To learn more about stack trace rules, [read the docs](https://docs.sentry.io/concepts/data-management/event-grouping/stack-trace-rules/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#grouping_enhancements Project#grouping_enhancements}
  */
  readonly groupingEnhancements?: string;
  /**
  * The name for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * The organization of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#organization Project#organization}
  */
  readonly organization: string;
  /**
  * The platform for this project. Use `other` for platforms not listed. Valid values are: `other`, `android`, `apple`, `apple-ios`, `apple-macos`, `bun`, `capacitor`, `cordova`, `dart`, `deno`, `dotnet`, `dotnet-aspnet`, `dotnet-aspnetcore`, `dotnet-awslambda`, `dotnet-gcpfunctions`, `dotnet-maui`, `dotnet-uwp`, `dotnet-winforms`, `dotnet-wpf`, `dotnet-xamarin`, `electron`, `elixir`, `flutter`, `go`, `go-echo`, `go-fasthttp`, `go-fiber`, `go-gin`, `go-http`, `go-iris`, `go-martini`, `go-negroni`, `godot`, `ionic`, `java`, `java-log4j2`, `java-logback`, `java-spring`, `java-spring-boot`, `javascript`, `javascript-angular`, `javascript-astro`, `javascript-ember`, `javascript-gatsby`, `javascript-nextjs`, `javascript-nuxt`, `javascript-react`, `javascript-react-router`, `javascript-remix`, `javascript-solid`, `javascript-solidstart`, `javascript-svelte`, `javascript-sveltekit`, `javascript-tanstackstart-react`, `javascript-vue`, `kotlin`, `minidump`, `native`, `native-qt`, `nintendo-switch`, `node`, `node-awslambda`, `node-azurefunctions`, `node-cloudflare-pages`, `node-cloudflare-workers`, `node-connect`, `node-express`, `node-fastify`, `node-gcpfunctions`, `node-hapi`, `node-hono`, `node-koa`, `node-nestjs`, `php`, `php-laravel`, `php-symfony`, `playstation`, `powershell`, `python`, `python-aiohttp`, `python-asgi`, `python-awslambda`, `python-bottle`, `python-celery`, `python-chalice`, `python-django`, `python-falcon`, `python-fastapi`, `python-flask`, `python-gcpfunctions`, `python-pylons`, `python-pymongo`, `python-pyramid`, `python-quart`, `python-rq`, `python-sanic`, `python-serverless`, `python-starlette`, `python-tornado`, `python-tryton`, `python-wsgi`, `react-native`, `ruby`, `ruby-rack`, `ruby-rails`, `rust`, `unity`, `unreal`, and `xbox`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#platform Project#platform}
  */
  readonly platform?: string;
  /**
  * Hours in which an issue is automatically resolve if not seen after this amount of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#resolve_age Project#resolve_age}
  */
  readonly resolveAge?: number;
  /**
  * The optional slug for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#slug Project#slug}
  */
  readonly slug?: string;
  /**
  * The slugs of the teams to create the project for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#teams Project#teams}
  */
  readonly teams: string[];
}
export interface ProjectClientSecurity {
  /**
  * A list of allowed domains. Examples: https://example.com, *, *.example.com, *:80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#allowed_domains Project#allowed_domains}
  */
  readonly allowedDomains?: string[];
  /**
  * Enable JavaScript source fetching. Allow Sentry to scrape missing JavaScript source context when possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#scrape_javascript Project#scrape_javascript}
  */
  readonly scrapeJavascript?: boolean | cdktf.IResolvable;
  /**
  * Security Token. Outbound requests matching Allowed Domains will have the header "{security_token_header}: {security_token}" appended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#security_token Project#security_token}
  */
  readonly securityToken?: string;
  /**
  * Security Token Header. Outbound requests matching Allowed Domains will have the header "{security_token_header}: {security_token}" appended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#security_token_header Project#security_token_header}
  */
  readonly securityTokenHeader?: string;
  /**
  * Verify TLS/SSL. Outbound requests will verify TLS (sometimes known as SSL) connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#verify_tls_ssl Project#verify_tls_ssl}
  */
  readonly verifyTlsSsl?: boolean | cdktf.IResolvable;
}

export function projectClientSecurityToTerraform(struct?: ProjectClientSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedDomains),
    scrape_javascript: cdktf.booleanToTerraform(struct!.scrapeJavascript),
    security_token: cdktf.stringToTerraform(struct!.securityToken),
    security_token_header: cdktf.stringToTerraform(struct!.securityTokenHeader),
    verify_tls_ssl: cdktf.booleanToTerraform(struct!.verifyTlsSsl),
  }
}


export function projectClientSecurityToHclTerraform(struct?: ProjectClientSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedDomains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scrape_javascript: {
      value: cdktf.booleanToHclTerraform(struct!.scrapeJavascript),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_token: {
      value: cdktf.stringToHclTerraform(struct!.securityToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_token_header: {
      value: cdktf.stringToHclTerraform(struct!.securityTokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_tls_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.verifyTlsSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectClientSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectClientSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomains = this._allowedDomains;
    }
    if (this._scrapeJavascript !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeJavascript = this._scrapeJavascript;
    }
    if (this._securityToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityToken = this._securityToken;
    }
    if (this._securityTokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityTokenHeader = this._securityTokenHeader;
    }
    if (this._verifyTlsSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyTlsSsl = this._verifyTlsSsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectClientSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedDomains = undefined;
      this._scrapeJavascript = undefined;
      this._securityToken = undefined;
      this._securityTokenHeader = undefined;
      this._verifyTlsSsl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedDomains = value.allowedDomains;
      this._scrapeJavascript = value.scrapeJavascript;
      this._securityToken = value.securityToken;
      this._securityTokenHeader = value.securityTokenHeader;
      this._verifyTlsSsl = value.verifyTlsSsl;
    }
  }

  // allowed_domains - computed: true, optional: true, required: false
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_domains'));
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // scrape_javascript - computed: true, optional: true, required: false
  private _scrapeJavascript?: boolean | cdktf.IResolvable; 
  public get scrapeJavascript() {
    return this.getBooleanAttribute('scrape_javascript');
  }
  public set scrapeJavascript(value: boolean | cdktf.IResolvable) {
    this._scrapeJavascript = value;
  }
  public resetScrapeJavascript() {
    this._scrapeJavascript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeJavascriptInput() {
    return this._scrapeJavascript;
  }

  // security_token - computed: true, optional: true, required: false
  private _securityToken?: string; 
  public get securityToken() {
    return this.getStringAttribute('security_token');
  }
  public set securityToken(value: string) {
    this._securityToken = value;
  }
  public resetSecurityToken() {
    this._securityToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTokenInput() {
    return this._securityToken;
  }

  // security_token_header - computed: true, optional: true, required: false
  private _securityTokenHeader?: string; 
  public get securityTokenHeader() {
    return this.getStringAttribute('security_token_header');
  }
  public set securityTokenHeader(value: string) {
    this._securityTokenHeader = value;
  }
  public resetSecurityTokenHeader() {
    this._securityTokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTokenHeaderInput() {
    return this._securityTokenHeader;
  }

  // verify_tls_ssl - computed: true, optional: true, required: false
  private _verifyTlsSsl?: boolean | cdktf.IResolvable; 
  public get verifyTlsSsl() {
    return this.getBooleanAttribute('verify_tls_ssl');
  }
  public set verifyTlsSsl(value: boolean | cdktf.IResolvable) {
    this._verifyTlsSsl = value;
  }
  public resetVerifyTlsSsl() {
    this._verifyTlsSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsSslInput() {
    return this._verifyTlsSsl;
  }
}
export interface ProjectFilters {
  /**
  * Filter events from these IP addresses. (e.g. 127.0.0.1 or 10.0.0.0/8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#blacklisted_ips Project#blacklisted_ips}
  */
  readonly blacklistedIps?: string[];
  /**
  * Filter events by error messages. Allows [glob pattern matching](https://en.wikipedia.org/wiki/Glob_(programming)). (e.g. TypeError* or *: integer division or modulo by zero)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#error_messages Project#error_messages}
  */
  readonly errorMessages?: string[];
  /**
  * Filter events from these releases. Allows [glob pattern matching](https://en.wikipedia.org/wiki/Glob_(programming)). (e.g. 1.* or [!3].[0-9].*)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#releases Project#releases}
  */
  readonly releases?: string[];
}

export function projectFiltersToTerraform(struct?: ProjectFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blacklisted_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blacklistedIps),
    error_messages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.errorMessages),
    releases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.releases),
  }
}


export function projectFiltersToHclTerraform(struct?: ProjectFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blacklisted_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blacklistedIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    error_messages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.errorMessages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    releases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.releases),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blacklistedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklistedIps = this._blacklistedIps;
    }
    if (this._errorMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMessages = this._errorMessages;
    }
    if (this._releases !== undefined) {
      hasAnyValues = true;
      internalValueResult.releases = this._releases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blacklistedIps = undefined;
      this._errorMessages = undefined;
      this._releases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blacklistedIps = value.blacklistedIps;
      this._errorMessages = value.errorMessages;
      this._releases = value.releases;
    }
  }

  // blacklisted_ips - computed: true, optional: true, required: false
  private _blacklistedIps?: string[]; 
  public get blacklistedIps() {
    return cdktf.Fn.tolist(this.getListAttribute('blacklisted_ips'));
  }
  public set blacklistedIps(value: string[]) {
    this._blacklistedIps = value;
  }
  public resetBlacklistedIps() {
    this._blacklistedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistedIpsInput() {
    return this._blacklistedIps;
  }

  // error_messages - computed: true, optional: true, required: false
  private _errorMessages?: string[]; 
  public get errorMessages() {
    return cdktf.Fn.tolist(this.getListAttribute('error_messages'));
  }
  public set errorMessages(value: string[]) {
    this._errorMessages = value;
  }
  public resetErrorMessages() {
    this._errorMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessagesInput() {
    return this._errorMessages;
  }

  // releases - computed: true, optional: true, required: false
  private _releases?: string[]; 
  public get releases() {
    return cdktf.Fn.tolist(this.getListAttribute('releases'));
  }
  public set releases(value: string[]) {
    this._releases = value;
  }
  public resetReleases() {
    this._releases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releasesInput() {
    return this._releases;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project sentry_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project sentry_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_project',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.7',
        providerVersionConstraint: '0.14.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientSecurity.internalValue = config.clientSecurity;
    this._defaultKey = config.defaultKey;
    this._defaultRules = config.defaultRules;
    this._digestsMaxDelay = config.digestsMaxDelay;
    this._digestsMinDelay = config.digestsMinDelay;
    this._filters.internalValue = config.filters;
    this._fingerprintingRules = config.fingerprintingRules;
    this._groupingEnhancements = config.groupingEnhancements;
    this._name = config.name;
    this._organization = config.organization;
    this._platform = config.platform;
    this._resolveAge = config.resolveAge;
    this._slug = config.slug;
    this._teams = config.teams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_security - computed: true, optional: true, required: false
  private _clientSecurity = new ProjectClientSecurityOutputReference(this, "client_security");
  public get clientSecurity() {
    return this._clientSecurity;
  }
  public putClientSecurity(value: ProjectClientSecurity) {
    this._clientSecurity.internalValue = value;
  }
  public resetClientSecurity() {
    this._clientSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecurityInput() {
    return this._clientSecurity.internalValue;
  }

  // default_key - computed: false, optional: true, required: false
  private _defaultKey?: boolean | cdktf.IResolvable; 
  public get defaultKey() {
    return this.getBooleanAttribute('default_key');
  }
  public set defaultKey(value: boolean | cdktf.IResolvable) {
    this._defaultKey = value;
  }
  public resetDefaultKey() {
    this._defaultKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultKeyInput() {
    return this._defaultKey;
  }

  // default_rules - computed: false, optional: true, required: false
  private _defaultRules?: boolean | cdktf.IResolvable; 
  public get defaultRules() {
    return this.getBooleanAttribute('default_rules');
  }
  public set defaultRules(value: boolean | cdktf.IResolvable) {
    this._defaultRules = value;
  }
  public resetDefaultRules() {
    this._defaultRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRulesInput() {
    return this._defaultRules;
  }

  // digests_max_delay - computed: true, optional: true, required: false
  private _digestsMaxDelay?: number; 
  public get digestsMaxDelay() {
    return this.getNumberAttribute('digests_max_delay');
  }
  public set digestsMaxDelay(value: number) {
    this._digestsMaxDelay = value;
  }
  public resetDigestsMaxDelay() {
    this._digestsMaxDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestsMaxDelayInput() {
    return this._digestsMaxDelay;
  }

  // digests_min_delay - computed: true, optional: true, required: false
  private _digestsMinDelay?: number; 
  public get digestsMinDelay() {
    return this.getNumberAttribute('digests_min_delay');
  }
  public set digestsMinDelay(value: number) {
    this._digestsMinDelay = value;
  }
  public resetDigestsMinDelay() {
    this._digestsMinDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestsMinDelayInput() {
    return this._digestsMinDelay;
  }

  // features - computed: true, optional: false, required: false
  public get features() {
    return cdktf.Fn.tolist(this.getListAttribute('features'));
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new ProjectFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ProjectFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // fingerprinting_rules - computed: true, optional: true, required: false
  private _fingerprintingRules?: string; 
  public get fingerprintingRules() {
    return this.getStringAttribute('fingerprinting_rules');
  }
  public set fingerprintingRules(value: string) {
    this._fingerprintingRules = value;
  }
  public resetFingerprintingRules() {
    this._fingerprintingRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintingRulesInput() {
    return this._fingerprintingRules;
  }

  // grouping_enhancements - computed: true, optional: true, required: false
  private _groupingEnhancements?: string; 
  public get groupingEnhancements() {
    return this.getStringAttribute('grouping_enhancements');
  }
  public set groupingEnhancements(value: string) {
    this._groupingEnhancements = value;
  }
  public resetGroupingEnhancements() {
    this._groupingEnhancements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingEnhancementsInput() {
    return this._groupingEnhancements;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // resolve_age - computed: true, optional: true, required: false
  private _resolveAge?: number; 
  public get resolveAge() {
    return this.getNumberAttribute('resolve_age');
  }
  public set resolveAge(value: number) {
    this._resolveAge = value;
  }
  public resetResolveAge() {
    this._resolveAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveAgeInput() {
    return this._resolveAge;
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

  // teams - computed: false, optional: false, required: true
  private _teams?: string[]; 
  public get teams() {
    return cdktf.Fn.tolist(this.getListAttribute('teams'));
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_security: projectClientSecurityToTerraform(this._clientSecurity.internalValue),
      default_key: cdktf.booleanToTerraform(this._defaultKey),
      default_rules: cdktf.booleanToTerraform(this._defaultRules),
      digests_max_delay: cdktf.numberToTerraform(this._digestsMaxDelay),
      digests_min_delay: cdktf.numberToTerraform(this._digestsMinDelay),
      filters: projectFiltersToTerraform(this._filters.internalValue),
      fingerprinting_rules: cdktf.stringToTerraform(this._fingerprintingRules),
      grouping_enhancements: cdktf.stringToTerraform(this._groupingEnhancements),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      platform: cdktf.stringToTerraform(this._platform),
      resolve_age: cdktf.numberToTerraform(this._resolveAge),
      slug: cdktf.stringToTerraform(this._slug),
      teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teams),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_security: {
        value: projectClientSecurityToHclTerraform(this._clientSecurity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectClientSecurity",
      },
      default_key: {
        value: cdktf.booleanToHclTerraform(this._defaultKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_rules: {
        value: cdktf.booleanToHclTerraform(this._defaultRules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      digests_max_delay: {
        value: cdktf.numberToHclTerraform(this._digestsMaxDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      digests_min_delay: {
        value: cdktf.numberToHclTerraform(this._digestsMinDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filters: {
        value: projectFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectFilters",
      },
      fingerprinting_rules: {
        value: cdktf.stringToHclTerraform(this._fingerprintingRules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grouping_enhancements: {
        value: cdktf.stringToHclTerraform(this._groupingEnhancements),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_age: {
        value: cdktf.numberToHclTerraform(this._resolveAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
