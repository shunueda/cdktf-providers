// https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSentryKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Return the first key of the returned keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/key#first DataSentryKey#first}
  */
  readonly first?: boolean | cdktf.IResolvable;
  /**
  * The ID of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/key#id DataSentryKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the client key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/key#name DataSentryKey#name}
  */
  readonly name?: string;
  /**
  * The organization of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/key#organization DataSentryKey#organization}
  */
  readonly organization: string;
  /**
  * The project of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/key#project DataSentryKey#project}
  */
  readonly project: string;
}
export interface DataSentryKeyJavascriptLoaderScript {
}

export function dataSentryKeyJavascriptLoaderScriptToTerraform(struct?: DataSentryKeyJavascriptLoaderScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryKeyJavascriptLoaderScriptToHclTerraform(struct?: DataSentryKeyJavascriptLoaderScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryKeyJavascriptLoaderScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryKeyJavascriptLoaderScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryKeyJavascriptLoaderScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // browser_sdk_version - computed: true, optional: false, required: false
  public get browserSdkVersion() {
    return this.getStringAttribute('browser_sdk_version');
  }

  // debug_enabled - computed: true, optional: false, required: false
  public get debugEnabled() {
    return this.getBooleanAttribute('debug_enabled');
  }

  // performance_monitoring_enabled - computed: true, optional: false, required: false
  public get performanceMonitoringEnabled() {
    return this.getBooleanAttribute('performance_monitoring_enabled');
  }

  // session_replay_enabled - computed: true, optional: false, required: false
  public get sessionReplayEnabled() {
    return this.getBooleanAttribute('session_replay_enabled');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/key sentry_key}
*/
export class DataSentryKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSentryKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSentryKey to import
  * @param importFromId The id of the existing DataSentryKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSentryKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/data-sources/key sentry_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSentryKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataSentryKeyConfig) {
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
    this._first = config.first;
    this._id = config.id;
    this._name = config.name;
    this._organization = config.organization;
    this._project = config.project;
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

  // first - computed: false, optional: true, required: false
  private _first?: boolean | cdktf.IResolvable; 
  public get first() {
    return this.getBooleanAttribute('first');
  }
  public set first(value: boolean | cdktf.IResolvable) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // id - computed: false, optional: true, required: false
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

  // javascript_loader_script - computed: true, optional: false, required: false
  private _javascriptLoaderScript = new DataSentryKeyJavascriptLoaderScriptOutputReference(this, "javascript_loader_script");
  public get javascriptLoaderScript() {
    return this._javascriptLoaderScript;
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

  // rate_limit_count - computed: true, optional: false, required: false
  public get rateLimitCount() {
    return this.getNumberAttribute('rate_limit_count');
  }

  // rate_limit_window - computed: true, optional: false, required: false
  public get rateLimitWindow() {
    return this.getNumberAttribute('rate_limit_window');
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
      first: cdktf.booleanToTerraform(this._first),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      first: {
        value: cdktf.booleanToHclTerraform(this._first),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
