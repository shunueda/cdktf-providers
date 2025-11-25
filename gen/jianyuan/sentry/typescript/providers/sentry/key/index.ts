// https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The JavaScript loader script configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key#javascript_loader_script Key#javascript_loader_script}
  */
  readonly javascriptLoaderScript?: KeyJavascriptLoaderScript;
  /**
  * The name of the client key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key#name Key#name}
  */
  readonly name: string;
  /**
  * The organization of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key#organization Key#organization}
  */
  readonly organization: string;
  /**
  * The project of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key#project Key#project}
  */
  readonly project: string;
  /**
  * Number of events that can be reported within the rate limit window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key#rate_limit_count Key#rate_limit_count}
  */
  readonly rateLimitCount?: number;
  /**
  * Length of time in seconds that will be considered when checking the rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key#rate_limit_window Key#rate_limit_window}
  */
  readonly rateLimitWindow?: number;
}
export interface KeyJavascriptLoaderScript {
  /**
  * The version of the browser SDK to load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key#browser_sdk_version Key#browser_sdk_version}
  */
  readonly browserSdkVersion?: string;
  /**
  * Whether debug bundles & logging are enabled for this key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key#debug_enabled Key#debug_enabled}
  */
  readonly debugEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether performance monitoring is enabled for this key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key#performance_monitoring_enabled Key#performance_monitoring_enabled}
  */
  readonly performanceMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether session replay is enabled for this key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key#session_replay_enabled Key#session_replay_enabled}
  */
  readonly sessionReplayEnabled?: boolean | cdktf.IResolvable;
}

export function keyJavascriptLoaderScriptToTerraform(struct?: KeyJavascriptLoaderScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browser_sdk_version: cdktf.stringToTerraform(struct!.browserSdkVersion),
    debug_enabled: cdktf.booleanToTerraform(struct!.debugEnabled),
    performance_monitoring_enabled: cdktf.booleanToTerraform(struct!.performanceMonitoringEnabled),
    session_replay_enabled: cdktf.booleanToTerraform(struct!.sessionReplayEnabled),
  }
}


export function keyJavascriptLoaderScriptToHclTerraform(struct?: KeyJavascriptLoaderScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browser_sdk_version: {
      value: cdktf.stringToHclTerraform(struct!.browserSdkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.debugEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    performance_monitoring_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.performanceMonitoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_replay_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sessionReplayEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyJavascriptLoaderScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeyJavascriptLoaderScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browserSdkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserSdkVersion = this._browserSdkVersion;
    }
    if (this._debugEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugEnabled = this._debugEnabled;
    }
    if (this._performanceMonitoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceMonitoringEnabled = this._performanceMonitoringEnabled;
    }
    if (this._sessionReplayEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionReplayEnabled = this._sessionReplayEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyJavascriptLoaderScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._browserSdkVersion = undefined;
      this._debugEnabled = undefined;
      this._performanceMonitoringEnabled = undefined;
      this._sessionReplayEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._browserSdkVersion = value.browserSdkVersion;
      this._debugEnabled = value.debugEnabled;
      this._performanceMonitoringEnabled = value.performanceMonitoringEnabled;
      this._sessionReplayEnabled = value.sessionReplayEnabled;
    }
  }

  // browser_sdk_version - computed: true, optional: true, required: false
  private _browserSdkVersion?: string; 
  public get browserSdkVersion() {
    return this.getStringAttribute('browser_sdk_version');
  }
  public set browserSdkVersion(value: string) {
    this._browserSdkVersion = value;
  }
  public resetBrowserSdkVersion() {
    this._browserSdkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserSdkVersionInput() {
    return this._browserSdkVersion;
  }

  // debug_enabled - computed: true, optional: true, required: false
  private _debugEnabled?: boolean | cdktf.IResolvable; 
  public get debugEnabled() {
    return this.getBooleanAttribute('debug_enabled');
  }
  public set debugEnabled(value: boolean | cdktf.IResolvable) {
    this._debugEnabled = value;
  }
  public resetDebugEnabled() {
    this._debugEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugEnabledInput() {
    return this._debugEnabled;
  }

  // performance_monitoring_enabled - computed: true, optional: true, required: false
  private _performanceMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get performanceMonitoringEnabled() {
    return this.getBooleanAttribute('performance_monitoring_enabled');
  }
  public set performanceMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._performanceMonitoringEnabled = value;
  }
  public resetPerformanceMonitoringEnabled() {
    this._performanceMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceMonitoringEnabledInput() {
    return this._performanceMonitoringEnabled;
  }

  // session_replay_enabled - computed: true, optional: true, required: false
  private _sessionReplayEnabled?: boolean | cdktf.IResolvable; 
  public get sessionReplayEnabled() {
    return this.getBooleanAttribute('session_replay_enabled');
  }
  public set sessionReplayEnabled(value: boolean | cdktf.IResolvable) {
    this._sessionReplayEnabled = value;
  }
  public resetSessionReplayEnabled() {
    this._sessionReplayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReplayEnabledInput() {
    return this._sessionReplayEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key sentry_key}
*/
export class Key extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Key resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Key to import
  * @param importFromId The id of the existing Key that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Key to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/key sentry_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyConfig
  */
  public constructor(scope: Construct, id: string, config: KeyConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_key',
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
    this._javascriptLoaderScript.internalValue = config.javascriptLoaderScript;
    this._name = config.name;
    this._organization = config.organization;
    this._project = config.project;
    this._rateLimitCount = config.rateLimitCount;
    this._rateLimitWindow = config.rateLimitWindow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dsn - computed: true, optional: false, required: false
  private _dsn = new cdktf.StringMap(this, "dsn");
  public get dsn() {
    return this._dsn;
  }

  // dsn_csp - computed: true, optional: false, required: false
  public get dsnCsp() {
    return this.getStringAttribute('dsn_csp');
  }

  // dsn_public - computed: true, optional: false, required: false
  public get dsnPublic() {
    return this.getStringAttribute('dsn_public');
  }

  // dsn_secret - computed: true, optional: false, required: false
  public get dsnSecret() {
    return this.getStringAttribute('dsn_secret');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // javascript_loader_script - computed: true, optional: true, required: false
  private _javascriptLoaderScript = new KeyJavascriptLoaderScriptOutputReference(this, "javascript_loader_script");
  public get javascriptLoaderScript() {
    return this._javascriptLoaderScript;
  }
  public putJavascriptLoaderScript(value: KeyJavascriptLoaderScript) {
    this._javascriptLoaderScript.internalValue = value;
  }
  public resetJavascriptLoaderScript() {
    this._javascriptLoaderScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLoaderScriptInput() {
    return this._javascriptLoaderScript.internalValue;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getStringAttribute('public');
  }

  // rate_limit_count - computed: true, optional: true, required: false
  private _rateLimitCount?: number; 
  public get rateLimitCount() {
    return this.getNumberAttribute('rate_limit_count');
  }
  public set rateLimitCount(value: number) {
    this._rateLimitCount = value;
  }
  public resetRateLimitCount() {
    this._rateLimitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitCountInput() {
    return this._rateLimitCount;
  }

  // rate_limit_window - computed: true, optional: true, required: false
  private _rateLimitWindow?: number; 
  public get rateLimitWindow() {
    return this.getNumberAttribute('rate_limit_window');
  }
  public set rateLimitWindow(value: number) {
    this._rateLimitWindow = value;
  }
  public resetRateLimitWindow() {
    this._rateLimitWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitWindowInput() {
    return this._rateLimitWindow;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      javascript_loader_script: keyJavascriptLoaderScriptToTerraform(this._javascriptLoaderScript.internalValue),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      project: cdktf.stringToTerraform(this._project),
      rate_limit_count: cdktf.numberToTerraform(this._rateLimitCount),
      rate_limit_window: cdktf.numberToTerraform(this._rateLimitWindow),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      javascript_loader_script: {
        value: keyJavascriptLoaderScriptToHclTerraform(this._javascriptLoaderScript.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeyJavascriptLoaderScript",
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_count: {
        value: cdktf.numberToHclTerraform(this._rateLimitCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_window: {
        value: cdktf.numberToHclTerraform(this._rateLimitWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
