// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppAutoInjectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection#application_id WebAppAutoInjection#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection#id WebAppAutoInjection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cache_control_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection#cache_control_headers WebAppAutoInjection#cache_control_headers}
  */
  readonly cacheControlHeaders: WebAppAutoInjectionCacheControlHeaders;
  /**
  * monitoring_code_source_section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection#monitoring_code_source_section WebAppAutoInjection#monitoring_code_source_section}
  */
  readonly monitoringCodeSourceSection: WebAppAutoInjectionMonitoringCodeSourceSection;
  /**
  * snippet_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection#snippet_format WebAppAutoInjection#snippet_format}
  */
  readonly snippetFormat: WebAppAutoInjectionSnippetFormat;
}
export interface WebAppAutoInjectionCacheControlHeaders {
  /**
  * [How to ensure timely configuration updates for automatic injection?](https://dt-url.net/m9039ea)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection#cache_control_headers WebAppAutoInjection#cache_control_headers}
  */
  readonly cacheControlHeaders: boolean | cdktf.IResolvable;
}

export function webAppAutoInjectionCacheControlHeadersToTerraform(struct?: WebAppAutoInjectionCacheControlHeadersOutputReference | WebAppAutoInjectionCacheControlHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_control_headers: cdktf.booleanToTerraform(struct!.cacheControlHeaders),
  }
}


export function webAppAutoInjectionCacheControlHeadersToHclTerraform(struct?: WebAppAutoInjectionCacheControlHeadersOutputReference | WebAppAutoInjectionCacheControlHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_control_headers: {
      value: cdktf.booleanToHclTerraform(struct!.cacheControlHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAutoInjectionCacheControlHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAutoInjectionCacheControlHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheControlHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheControlHeaders = this._cacheControlHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAutoInjectionCacheControlHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheControlHeaders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheControlHeaders = value.cacheControlHeaders;
    }
  }

  // cache_control_headers - computed: false, optional: false, required: true
  private _cacheControlHeaders?: boolean | cdktf.IResolvable; 
  public get cacheControlHeaders() {
    return this.getBooleanAttribute('cache_control_headers');
  }
  public set cacheControlHeaders(value: boolean | cdktf.IResolvable) {
    this._cacheControlHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlHeadersInput() {
    return this._cacheControlHeaders;
  }
}
export interface WebAppAutoInjectionMonitoringCodeSourceSection {
  /**
  * Real User Monitoring code source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection#code_source WebAppAutoInjection#code_source}
  */
  readonly codeSource: string;
  /**
  * Specify the source path for placement of your application's custom JavaScript library file. By default, this path is set to the root directory of your web server. A custom source path may be necessary if your server operates behind a firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection#monitoring_code_path WebAppAutoInjection#monitoring_code_path}
  */
  readonly monitoringCodePath?: string;
}

export function webAppAutoInjectionMonitoringCodeSourceSectionToTerraform(struct?: WebAppAutoInjectionMonitoringCodeSourceSectionOutputReference | WebAppAutoInjectionMonitoringCodeSourceSection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_source: cdktf.stringToTerraform(struct!.codeSource),
    monitoring_code_path: cdktf.stringToTerraform(struct!.monitoringCodePath),
  }
}


export function webAppAutoInjectionMonitoringCodeSourceSectionToHclTerraform(struct?: WebAppAutoInjectionMonitoringCodeSourceSectionOutputReference | WebAppAutoInjectionMonitoringCodeSourceSection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_source: {
      value: cdktf.stringToHclTerraform(struct!.codeSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring_code_path: {
      value: cdktf.stringToHclTerraform(struct!.monitoringCodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAutoInjectionMonitoringCodeSourceSectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAutoInjectionMonitoringCodeSourceSection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeSource = this._codeSource;
    }
    if (this._monitoringCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringCodePath = this._monitoringCodePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAutoInjectionMonitoringCodeSourceSection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeSource = undefined;
      this._monitoringCodePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeSource = value.codeSource;
      this._monitoringCodePath = value.monitoringCodePath;
    }
  }

  // code_source - computed: false, optional: false, required: true
  private _codeSource?: string; 
  public get codeSource() {
    return this.getStringAttribute('code_source');
  }
  public set codeSource(value: string) {
    this._codeSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSourceInput() {
    return this._codeSource;
  }

  // monitoring_code_path - computed: false, optional: true, required: false
  private _monitoringCodePath?: string; 
  public get monitoringCodePath() {
    return this.getStringAttribute('monitoring_code_path');
  }
  public set monitoringCodePath(value: string) {
    this._monitoringCodePath = value;
  }
  public resetMonitoringCodePath() {
    this._monitoringCodePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringCodePathInput() {
    return this._monitoringCodePath;
  }
}
export interface WebAppAutoInjectionSnippetFormat {
  /**
  * Possible Values: `DEFERRED`, `SYNCHRONOUSLY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection#code_snippet_type WebAppAutoInjection#code_snippet_type}
  */
  readonly codeSnippetType?: string;
  /**
  * Possible Values: `async`, `defer`, `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection#script_execution_attribute WebAppAutoInjection#script_execution_attribute}
  */
  readonly scriptExecutionAttribute?: string;
  /**
  * Snippet format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection#snippet_format WebAppAutoInjection#snippet_format}
  */
  readonly snippetFormat: string;
}

export function webAppAutoInjectionSnippetFormatToTerraform(struct?: WebAppAutoInjectionSnippetFormatOutputReference | WebAppAutoInjectionSnippetFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_snippet_type: cdktf.stringToTerraform(struct!.codeSnippetType),
    script_execution_attribute: cdktf.stringToTerraform(struct!.scriptExecutionAttribute),
    snippet_format: cdktf.stringToTerraform(struct!.snippetFormat),
  }
}


export function webAppAutoInjectionSnippetFormatToHclTerraform(struct?: WebAppAutoInjectionSnippetFormatOutputReference | WebAppAutoInjectionSnippetFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_snippet_type: {
      value: cdktf.stringToHclTerraform(struct!.codeSnippetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_execution_attribute: {
      value: cdktf.stringToHclTerraform(struct!.scriptExecutionAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snippet_format: {
      value: cdktf.stringToHclTerraform(struct!.snippetFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppAutoInjectionSnippetFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppAutoInjectionSnippetFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeSnippetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeSnippetType = this._codeSnippetType;
    }
    if (this._scriptExecutionAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptExecutionAttribute = this._scriptExecutionAttribute;
    }
    if (this._snippetFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.snippetFormat = this._snippetFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppAutoInjectionSnippetFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeSnippetType = undefined;
      this._scriptExecutionAttribute = undefined;
      this._snippetFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeSnippetType = value.codeSnippetType;
      this._scriptExecutionAttribute = value.scriptExecutionAttribute;
      this._snippetFormat = value.snippetFormat;
    }
  }

  // code_snippet_type - computed: false, optional: true, required: false
  private _codeSnippetType?: string; 
  public get codeSnippetType() {
    return this.getStringAttribute('code_snippet_type');
  }
  public set codeSnippetType(value: string) {
    this._codeSnippetType = value;
  }
  public resetCodeSnippetType() {
    this._codeSnippetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSnippetTypeInput() {
    return this._codeSnippetType;
  }

  // script_execution_attribute - computed: false, optional: true, required: false
  private _scriptExecutionAttribute?: string; 
  public get scriptExecutionAttribute() {
    return this.getStringAttribute('script_execution_attribute');
  }
  public set scriptExecutionAttribute(value: string) {
    this._scriptExecutionAttribute = value;
  }
  public resetScriptExecutionAttribute() {
    this._scriptExecutionAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptExecutionAttributeInput() {
    return this._scriptExecutionAttribute;
  }

  // snippet_format - computed: false, optional: false, required: true
  private _snippetFormat?: string; 
  public get snippetFormat() {
    return this.getStringAttribute('snippet_format');
  }
  public set snippetFormat(value: string) {
    this._snippetFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetFormatInput() {
    return this._snippetFormat;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection dynatrace_web_app_auto_injection}
*/
export class WebAppAutoInjection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_auto_injection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppAutoInjection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppAutoInjection to import
  * @param importFromId The id of the existing WebAppAutoInjection that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppAutoInjection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_auto_injection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_auto_injection dynatrace_web_app_auto_injection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppAutoInjectionConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppAutoInjectionConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_auto_injection',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._id = config.id;
    this._cacheControlHeaders.internalValue = config.cacheControlHeaders;
    this._monitoringCodeSourceSection.internalValue = config.monitoringCodeSourceSection;
    this._snippetFormat.internalValue = config.snippetFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // cache_control_headers - computed: false, optional: false, required: true
  private _cacheControlHeaders = new WebAppAutoInjectionCacheControlHeadersOutputReference(this, "cache_control_headers");
  public get cacheControlHeaders() {
    return this._cacheControlHeaders;
  }
  public putCacheControlHeaders(value: WebAppAutoInjectionCacheControlHeaders) {
    this._cacheControlHeaders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlHeadersInput() {
    return this._cacheControlHeaders.internalValue;
  }

  // monitoring_code_source_section - computed: false, optional: false, required: true
  private _monitoringCodeSourceSection = new WebAppAutoInjectionMonitoringCodeSourceSectionOutputReference(this, "monitoring_code_source_section");
  public get monitoringCodeSourceSection() {
    return this._monitoringCodeSourceSection;
  }
  public putMonitoringCodeSourceSection(value: WebAppAutoInjectionMonitoringCodeSourceSection) {
    this._monitoringCodeSourceSection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringCodeSourceSectionInput() {
    return this._monitoringCodeSourceSection.internalValue;
  }

  // snippet_format - computed: false, optional: false, required: true
  private _snippetFormat = new WebAppAutoInjectionSnippetFormatOutputReference(this, "snippet_format");
  public get snippetFormat() {
    return this._snippetFormat;
  }
  public putSnippetFormat(value: WebAppAutoInjectionSnippetFormat) {
    this._snippetFormat.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetFormatInput() {
    return this._snippetFormat.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      id: cdktf.stringToTerraform(this._id),
      cache_control_headers: webAppAutoInjectionCacheControlHeadersToTerraform(this._cacheControlHeaders.internalValue),
      monitoring_code_source_section: webAppAutoInjectionMonitoringCodeSourceSectionToTerraform(this._monitoringCodeSourceSection.internalValue),
      snippet_format: webAppAutoInjectionSnippetFormatToTerraform(this._snippetFormat.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
      cache_control_headers: {
        value: webAppAutoInjectionCacheControlHeadersToHclTerraform(this._cacheControlHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppAutoInjectionCacheControlHeadersList",
      },
      monitoring_code_source_section: {
        value: webAppAutoInjectionMonitoringCodeSourceSectionToHclTerraform(this._monitoringCodeSourceSection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppAutoInjectionMonitoringCodeSourceSectionList",
      },
      snippet_format: {
        value: webAppAutoInjectionSnippetFormatToHclTerraform(this._snippetFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppAutoInjectionSnippetFormatList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
