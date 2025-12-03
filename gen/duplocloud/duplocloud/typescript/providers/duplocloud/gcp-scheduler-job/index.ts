// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpSchedulerJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The attempt deadline for the scheduler job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#attempt_deadline GcpSchedulerJob#attempt_deadline}
  */
  readonly attemptDeadline?: string;
  /**
  * The description of the scheduler job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#description GcpSchedulerJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#id GcpSchedulerJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The short name of the scheduler job.  Duplo will add a prefix to the name.  You can retrieve the full name from the `fullname` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#name GcpSchedulerJob#name}
  */
  readonly name: string;
  /**
  * The desired schedule, in cron format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#schedule GcpSchedulerJob#schedule}
  */
  readonly schedule: string;
  /**
  * The GUID of the tenant that the scheduler job will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#tenant_id GcpSchedulerJob#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The timezone used to determine the schedule, in UNIX format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#timezone GcpSchedulerJob#timezone}
  */
  readonly timezone: string;
  /**
  * app_engine_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#app_engine_target GcpSchedulerJob#app_engine_target}
  */
  readonly appEngineTarget?: GcpSchedulerJobAppEngineTarget;
  /**
  * http_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#http_target GcpSchedulerJob#http_target}
  */
  readonly httpTarget?: GcpSchedulerJobHttpTarget;
  /**
  * pubsub_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#pubsub_target GcpSchedulerJob#pubsub_target}
  */
  readonly pubsubTarget?: GcpSchedulerJobPubsubTarget;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#timeouts GcpSchedulerJob#timeouts}
  */
  readonly timeouts?: GcpSchedulerJobTimeouts;
}
export interface GcpSchedulerJobAppEngineTargetRouting {
  /**
  * The App Engine host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#host GcpSchedulerJob#host}
  */
  readonly host?: string;
  /**
  * The App Engine instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#instance GcpSchedulerJob#instance}
  */
  readonly instance?: string;
  /**
  * The App Engine service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#service GcpSchedulerJob#service}
  */
  readonly service?: string;
  /**
  * The App Engine service version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#version GcpSchedulerJob#version}
  */
  readonly version?: string;
}

export function gcpSchedulerJobAppEngineTargetRoutingToTerraform(struct?: GcpSchedulerJobAppEngineTargetRoutingOutputReference | GcpSchedulerJobAppEngineTargetRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    instance: cdktf.stringToTerraform(struct!.instance),
    service: cdktf.stringToTerraform(struct!.service),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function gcpSchedulerJobAppEngineTargetRoutingToHclTerraform(struct?: GcpSchedulerJobAppEngineTargetRoutingOutputReference | GcpSchedulerJobAppEngineTargetRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpSchedulerJobAppEngineTargetRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpSchedulerJobAppEngineTargetRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpSchedulerJobAppEngineTargetRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._instance = undefined;
      this._service = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._instance = value.instance;
      this._service = value.service;
      this._version = value.version;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // instance - computed: true, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GcpSchedulerJobAppEngineTarget {
  /**
  * The HTTP request body to send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#body GcpSchedulerJob#body}
  */
  readonly body?: string;
  /**
  * The HTTP headers to send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#headers GcpSchedulerJob#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * The HTTP method to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#method GcpSchedulerJob#method}
  */
  readonly method: string;
  /**
  * The relative URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#relative_uri GcpSchedulerJob#relative_uri}
  */
  readonly relativeUri: string;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#routing GcpSchedulerJob#routing}
  */
  readonly routing?: GcpSchedulerJobAppEngineTargetRouting;
}

export function gcpSchedulerJobAppEngineTargetToTerraform(struct?: GcpSchedulerJobAppEngineTargetOutputReference | GcpSchedulerJobAppEngineTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    relative_uri: cdktf.stringToTerraform(struct!.relativeUri),
    routing: gcpSchedulerJobAppEngineTargetRoutingToTerraform(struct!.routing),
  }
}


export function gcpSchedulerJobAppEngineTargetToHclTerraform(struct?: GcpSchedulerJobAppEngineTargetOutputReference | GcpSchedulerJobAppEngineTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_uri: {
      value: cdktf.stringToHclTerraform(struct!.relativeUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing: {
      value: gcpSchedulerJobAppEngineTargetRoutingToHclTerraform(struct!.routing),
      isBlock: true,
      type: "list",
      storageClassType: "GcpSchedulerJobAppEngineTargetRoutingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpSchedulerJobAppEngineTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpSchedulerJobAppEngineTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._relativeUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeUri = this._relativeUri;
    }
    if (this._routing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpSchedulerJobAppEngineTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._headers = undefined;
      this._method = undefined;
      this._relativeUri = undefined;
      this._routing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._headers = value.headers;
      this._method = value.method;
      this._relativeUri = value.relativeUri;
      this._routing.internalValue = value.routing;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // relative_uri - computed: false, optional: false, required: true
  private _relativeUri?: string; 
  public get relativeUri() {
    return this.getStringAttribute('relative_uri');
  }
  public set relativeUri(value: string) {
    this._relativeUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeUriInput() {
    return this._relativeUri;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new GcpSchedulerJobAppEngineTargetRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: GcpSchedulerJobAppEngineTargetRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }
}
export interface GcpSchedulerJobHttpTargetOauthToken {
  /**
  * Must be set to `true`. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#enabled GcpSchedulerJob#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The OAuth token scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#scope GcpSchedulerJob#scope}
  */
  readonly scope?: string;
}

export function gcpSchedulerJobHttpTargetOauthTokenToTerraform(struct?: GcpSchedulerJobHttpTargetOauthTokenOutputReference | GcpSchedulerJobHttpTargetOauthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function gcpSchedulerJobHttpTargetOauthTokenToHclTerraform(struct?: GcpSchedulerJobHttpTargetOauthTokenOutputReference | GcpSchedulerJobHttpTargetOauthToken): any {
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpSchedulerJobHttpTargetOauthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpSchedulerJobHttpTargetOauthToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpSchedulerJobHttpTargetOauthToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._scope = value.scope;
    }
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

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
}
export interface GcpSchedulerJobHttpTargetOidcToken {
  /**
  * The OIDC token audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#audience GcpSchedulerJob#audience}
  */
  readonly audience?: string;
  /**
  * Must be set to `true`. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#enabled GcpSchedulerJob#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function gcpSchedulerJobHttpTargetOidcTokenToTerraform(struct?: GcpSchedulerJobHttpTargetOidcTokenOutputReference | GcpSchedulerJobHttpTargetOidcToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function gcpSchedulerJobHttpTargetOidcTokenToHclTerraform(struct?: GcpSchedulerJobHttpTargetOidcTokenOutputReference | GcpSchedulerJobHttpTargetOidcToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GcpSchedulerJobHttpTargetOidcTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpSchedulerJobHttpTargetOidcToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpSchedulerJobHttpTargetOidcToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._enabled = value.enabled;
    }
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
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

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
}
export interface GcpSchedulerJobHttpTarget {
  /**
  * The HTTP request body to send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#body GcpSchedulerJob#body}
  */
  readonly body?: string;
  /**
  * The HTTP headers to send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#headers GcpSchedulerJob#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * The HTTP method to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#method GcpSchedulerJob#method}
  */
  readonly method: string;
  /**
  * The request URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#uri GcpSchedulerJob#uri}
  */
  readonly uri: string;
  /**
  * oauth_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#oauth_token GcpSchedulerJob#oauth_token}
  */
  readonly oauthToken?: GcpSchedulerJobHttpTargetOauthToken;
  /**
  * oidc_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#oidc_token GcpSchedulerJob#oidc_token}
  */
  readonly oidcToken?: GcpSchedulerJobHttpTargetOidcToken;
}

export function gcpSchedulerJobHttpTargetToTerraform(struct?: GcpSchedulerJobHttpTargetOutputReference | GcpSchedulerJobHttpTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    uri: cdktf.stringToTerraform(struct!.uri),
    oauth_token: gcpSchedulerJobHttpTargetOauthTokenToTerraform(struct!.oauthToken),
    oidc_token: gcpSchedulerJobHttpTargetOidcTokenToTerraform(struct!.oidcToken),
  }
}


export function gcpSchedulerJobHttpTargetToHclTerraform(struct?: GcpSchedulerJobHttpTargetOutputReference | GcpSchedulerJobHttpTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_token: {
      value: gcpSchedulerJobHttpTargetOauthTokenToHclTerraform(struct!.oauthToken),
      isBlock: true,
      type: "list",
      storageClassType: "GcpSchedulerJobHttpTargetOauthTokenList",
    },
    oidc_token: {
      value: gcpSchedulerJobHttpTargetOidcTokenToHclTerraform(struct!.oidcToken),
      isBlock: true,
      type: "list",
      storageClassType: "GcpSchedulerJobHttpTargetOidcTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpSchedulerJobHttpTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpSchedulerJobHttpTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._oauthToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthToken = this._oauthToken?.internalValue;
    }
    if (this._oidcToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcToken = this._oidcToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpSchedulerJobHttpTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._headers = undefined;
      this._method = undefined;
      this._uri = undefined;
      this._oauthToken.internalValue = undefined;
      this._oidcToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._headers = value.headers;
      this._method = value.method;
      this._uri = value.uri;
      this._oauthToken.internalValue = value.oauthToken;
      this._oidcToken.internalValue = value.oidcToken;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // oauth_token - computed: false, optional: true, required: false
  private _oauthToken = new GcpSchedulerJobHttpTargetOauthTokenOutputReference(this, "oauth_token");
  public get oauthToken() {
    return this._oauthToken;
  }
  public putOauthToken(value: GcpSchedulerJobHttpTargetOauthToken) {
    this._oauthToken.internalValue = value;
  }
  public resetOauthToken() {
    this._oauthToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenInput() {
    return this._oauthToken.internalValue;
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken = new GcpSchedulerJobHttpTargetOidcTokenOutputReference(this, "oidc_token");
  public get oidcToken() {
    return this._oidcToken;
  }
  public putOidcToken(value: GcpSchedulerJobHttpTargetOidcToken) {
    this._oidcToken.internalValue = value;
  }
  public resetOidcToken() {
    this._oidcToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken.internalValue;
  }
}
export interface GcpSchedulerJobPubsubTarget {
  /**
  * The attributes to send to the pubsub target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#attributes GcpSchedulerJob#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * The data to send to the pubsub topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#data GcpSchedulerJob#data}
  */
  readonly data?: string;
  /**
  * The name of the topic to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#topic_name GcpSchedulerJob#topic_name}
  */
  readonly topicName: string;
}

export function gcpSchedulerJobPubsubTargetToTerraform(struct?: GcpSchedulerJobPubsubTargetOutputReference | GcpSchedulerJobPubsubTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    data: cdktf.stringToTerraform(struct!.data),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


export function gcpSchedulerJobPubsubTargetToHclTerraform(struct?: GcpSchedulerJobPubsubTargetOutputReference | GcpSchedulerJobPubsubTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpSchedulerJobPubsubTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpSchedulerJobPubsubTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpSchedulerJobPubsubTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes = undefined;
      this._data = undefined;
      this._topicName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes = value.attributes;
      this._data = value.data;
      this._topicName = value.topicName;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }
}
export interface GcpSchedulerJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#create GcpSchedulerJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#delete GcpSchedulerJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#update GcpSchedulerJob#update}
  */
  readonly update?: string;
}

export function gcpSchedulerJobTimeoutsToTerraform(struct?: GcpSchedulerJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function gcpSchedulerJobTimeoutsToHclTerraform(struct?: GcpSchedulerJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpSchedulerJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GcpSchedulerJobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpSchedulerJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job duplocloud_gcp_scheduler_job}
*/
export class GcpSchedulerJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_gcp_scheduler_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpSchedulerJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpSchedulerJob to import
  * @param importFromId The id of the existing GcpSchedulerJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpSchedulerJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_gcp_scheduler_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/gcp_scheduler_job duplocloud_gcp_scheduler_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpSchedulerJobConfig
  */
  public constructor(scope: Construct, id: string, config: GcpSchedulerJobConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_gcp_scheduler_job',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attemptDeadline = config.attemptDeadline;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._schedule = config.schedule;
    this._tenantId = config.tenantId;
    this._timezone = config.timezone;
    this._appEngineTarget.internalValue = config.appEngineTarget;
    this._httpTarget.internalValue = config.httpTarget;
    this._pubsubTarget.internalValue = config.pubsubTarget;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attempt_deadline - computed: true, optional: true, required: false
  private _attemptDeadline?: string; 
  public get attemptDeadline() {
    return this.getStringAttribute('attempt_deadline');
  }
  public set attemptDeadline(value: string) {
    this._attemptDeadline = value;
  }
  public resetAttemptDeadline() {
    this._attemptDeadline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptDeadlineInput() {
    return this._attemptDeadline;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
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

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
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

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // app_engine_target - computed: false, optional: true, required: false
  private _appEngineTarget = new GcpSchedulerJobAppEngineTargetOutputReference(this, "app_engine_target");
  public get appEngineTarget() {
    return this._appEngineTarget;
  }
  public putAppEngineTarget(value: GcpSchedulerJobAppEngineTarget) {
    this._appEngineTarget.internalValue = value;
  }
  public resetAppEngineTarget() {
    this._appEngineTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineTargetInput() {
    return this._appEngineTarget.internalValue;
  }

  // http_target - computed: false, optional: true, required: false
  private _httpTarget = new GcpSchedulerJobHttpTargetOutputReference(this, "http_target");
  public get httpTarget() {
    return this._httpTarget;
  }
  public putHttpTarget(value: GcpSchedulerJobHttpTarget) {
    this._httpTarget.internalValue = value;
  }
  public resetHttpTarget() {
    this._httpTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTargetInput() {
    return this._httpTarget.internalValue;
  }

  // pubsub_target - computed: false, optional: true, required: false
  private _pubsubTarget = new GcpSchedulerJobPubsubTargetOutputReference(this, "pubsub_target");
  public get pubsubTarget() {
    return this._pubsubTarget;
  }
  public putPubsubTarget(value: GcpSchedulerJobPubsubTarget) {
    this._pubsubTarget.internalValue = value;
  }
  public resetPubsubTarget() {
    this._pubsubTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTargetInput() {
    return this._pubsubTarget.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GcpSchedulerJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GcpSchedulerJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attempt_deadline: cdktf.stringToTerraform(this._attemptDeadline),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timezone: cdktf.stringToTerraform(this._timezone),
      app_engine_target: gcpSchedulerJobAppEngineTargetToTerraform(this._appEngineTarget.internalValue),
      http_target: gcpSchedulerJobHttpTargetToTerraform(this._httpTarget.internalValue),
      pubsub_target: gcpSchedulerJobPubsubTargetToTerraform(this._pubsubTarget.internalValue),
      timeouts: gcpSchedulerJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attempt_deadline: {
        value: cdktf.stringToHclTerraform(this._attemptDeadline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_engine_target: {
        value: gcpSchedulerJobAppEngineTargetToHclTerraform(this._appEngineTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpSchedulerJobAppEngineTargetList",
      },
      http_target: {
        value: gcpSchedulerJobHttpTargetToHclTerraform(this._httpTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpSchedulerJobHttpTargetList",
      },
      pubsub_target: {
        value: gcpSchedulerJobPubsubTargetToHclTerraform(this._pubsubTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpSchedulerJobPubsubTargetList",
      },
      timeouts: {
        value: gcpSchedulerJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GcpSchedulerJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
