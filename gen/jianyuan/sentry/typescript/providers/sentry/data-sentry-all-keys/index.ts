// https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/all_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSentryAllKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter client keys by `active` or `inactive`. Defaults to returning all keys if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/all_keys#filter_status DataSentryAllKeys#filter_status}
  */
  readonly filterStatus?: string;
  /**
  * The organization the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/all_keys#organization DataSentryAllKeys#organization}
  */
  readonly organization: string;
  /**
  * The project the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/all_keys#project DataSentryAllKeys#project}
  */
  readonly project: string;
}
export interface DataSentryAllKeysKeysJavascriptLoaderScript {
}

export function dataSentryAllKeysKeysJavascriptLoaderScriptToTerraform(struct?: DataSentryAllKeysKeysJavascriptLoaderScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryAllKeysKeysJavascriptLoaderScriptToHclTerraform(struct?: DataSentryAllKeysKeysJavascriptLoaderScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryAllKeysKeysJavascriptLoaderScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryAllKeysKeysJavascriptLoaderScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryAllKeysKeysJavascriptLoaderScript | undefined) {
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
export interface DataSentryAllKeysKeys {
}

export function dataSentryAllKeysKeysToTerraform(struct?: DataSentryAllKeysKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryAllKeysKeysToHclTerraform(struct?: DataSentryAllKeysKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryAllKeysKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSentryAllKeysKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryAllKeysKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // javascript_loader_script - computed: true, optional: false, required: false
  private _javascriptLoaderScript = new DataSentryAllKeysKeysJavascriptLoaderScriptOutputReference(this, "javascript_loader_script");
  public get javascriptLoaderScript() {
    return this._javascriptLoaderScript;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
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
}

export class DataSentryAllKeysKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataSentryAllKeysKeysOutputReference {
    return new DataSentryAllKeysKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/all_keys sentry_all_keys}
*/
export class DataSentryAllKeys extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_all_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSentryAllKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSentryAllKeys to import
  * @param importFromId The id of the existing DataSentryAllKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/all_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSentryAllKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_all_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/all_keys sentry_all_keys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSentryAllKeysConfig
  */
  public constructor(scope: Construct, id: string, config: DataSentryAllKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_all_keys',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterStatus = config.filterStatus;
    this._organization = config.organization;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_status - computed: false, optional: true, required: false
  private _filterStatus?: string; 
  public get filterStatus() {
    return this.getStringAttribute('filter_status');
  }
  public set filterStatus(value: string) {
    this._filterStatus = value;
  }
  public resetFilterStatus() {
    this._filterStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStatusInput() {
    return this._filterStatus;
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new DataSentryAllKeysKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_status: cdktf.stringToTerraform(this._filterStatus),
      organization: cdktf.stringToTerraform(this._organization),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_status: {
        value: cdktf.stringToHclTerraform(this._filterStatus),
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
