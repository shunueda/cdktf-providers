// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppManualInsertionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#application_id WebAppManualInsertion#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#id WebAppManualInsertion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * code_snippet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#code_snippet WebAppManualInsertion#code_snippet}
  */
  readonly codeSnippet: WebAppManualInsertionCodeSnippet;
  /**
  * javascript_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#javascript_tag WebAppManualInsertion#javascript_tag}
  */
  readonly javascriptTag: WebAppManualInsertionJavascriptTag;
  /**
  * oneagent_javascript_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#oneagent_javascript_tag WebAppManualInsertion#oneagent_javascript_tag}
  */
  readonly oneagentJavascriptTag?: WebAppManualInsertionOneagentJavascriptTag;
  /**
  * oneagent_javascript_tag_sri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#oneagent_javascript_tag_sri WebAppManualInsertion#oneagent_javascript_tag_sri}
  */
  readonly oneagentJavascriptTagSri?: WebAppManualInsertionOneagentJavascriptTagSri;
}
export interface WebAppManualInsertionCodeSnippet {
  /**
  * Possible Values: `DEFERRED`, `SYNCHRONOUSLY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#code_snippet_type WebAppManualInsertion#code_snippet_type}
  */
  readonly codeSnippetType: string;
}

export function webAppManualInsertionCodeSnippetToTerraform(struct?: WebAppManualInsertionCodeSnippetOutputReference | WebAppManualInsertionCodeSnippet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_snippet_type: cdktf.stringToTerraform(struct!.codeSnippetType),
  }
}


export function webAppManualInsertionCodeSnippetToHclTerraform(struct?: WebAppManualInsertionCodeSnippetOutputReference | WebAppManualInsertionCodeSnippet): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppManualInsertionCodeSnippetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppManualInsertionCodeSnippet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeSnippetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeSnippetType = this._codeSnippetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppManualInsertionCodeSnippet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeSnippetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeSnippetType = value.codeSnippetType;
    }
  }

  // code_snippet_type - computed: false, optional: false, required: true
  private _codeSnippetType?: string; 
  public get codeSnippetType() {
    return this.getStringAttribute('code_snippet_type');
  }
  public set codeSnippetType(value: string) {
    this._codeSnippetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSnippetTypeInput() {
    return this._codeSnippetType;
  }
}
export interface WebAppManualInsertionJavascriptTag {
  /**
  * Duration in hours, possible Values: `1`, `12`, `144`, `24`, `3`, `6`, `72`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#cache_duration WebAppManualInsertion#cache_duration}
  */
  readonly cacheDuration: string;
  /**
  * Add the `crossorigin=anonymous` attribute to capture JavaScript error messages and W3C resource timings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#crossorigin_anonymous WebAppManualInsertion#crossorigin_anonymous}
  */
  readonly crossoriginAnonymous: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `Async`, `Defer`, `None`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#script_execution_attribute WebAppManualInsertion#script_execution_attribute}
  */
  readonly scriptExecutionAttribute?: string;
}

export function webAppManualInsertionJavascriptTagToTerraform(struct?: WebAppManualInsertionJavascriptTagOutputReference | WebAppManualInsertionJavascriptTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_duration: cdktf.stringToTerraform(struct!.cacheDuration),
    crossorigin_anonymous: cdktf.booleanToTerraform(struct!.crossoriginAnonymous),
    script_execution_attribute: cdktf.stringToTerraform(struct!.scriptExecutionAttribute),
  }
}


export function webAppManualInsertionJavascriptTagToHclTerraform(struct?: WebAppManualInsertionJavascriptTagOutputReference | WebAppManualInsertionJavascriptTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_duration: {
      value: cdktf.stringToHclTerraform(struct!.cacheDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crossorigin_anonymous: {
      value: cdktf.booleanToHclTerraform(struct!.crossoriginAnonymous),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    script_execution_attribute: {
      value: cdktf.stringToHclTerraform(struct!.scriptExecutionAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppManualInsertionJavascriptTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppManualInsertionJavascriptTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDuration = this._cacheDuration;
    }
    if (this._crossoriginAnonymous !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossoriginAnonymous = this._crossoriginAnonymous;
    }
    if (this._scriptExecutionAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptExecutionAttribute = this._scriptExecutionAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppManualInsertionJavascriptTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheDuration = undefined;
      this._crossoriginAnonymous = undefined;
      this._scriptExecutionAttribute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheDuration = value.cacheDuration;
      this._crossoriginAnonymous = value.crossoriginAnonymous;
      this._scriptExecutionAttribute = value.scriptExecutionAttribute;
    }
  }

  // cache_duration - computed: false, optional: false, required: true
  private _cacheDuration?: string; 
  public get cacheDuration() {
    return this.getStringAttribute('cache_duration');
  }
  public set cacheDuration(value: string) {
    this._cacheDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDurationInput() {
    return this._cacheDuration;
  }

  // crossorigin_anonymous - computed: false, optional: false, required: true
  private _crossoriginAnonymous?: boolean | cdktf.IResolvable; 
  public get crossoriginAnonymous() {
    return this.getBooleanAttribute('crossorigin_anonymous');
  }
  public set crossoriginAnonymous(value: boolean | cdktf.IResolvable) {
    this._crossoriginAnonymous = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossoriginAnonymousInput() {
    return this._crossoriginAnonymous;
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
}
export interface WebAppManualInsertionOneagentJavascriptTag {
  /**
  * Possible Values: `Async`, `Defer`, `None`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#script_execution_attribute WebAppManualInsertion#script_execution_attribute}
  */
  readonly scriptExecutionAttribute?: string;
}

export function webAppManualInsertionOneagentJavascriptTagToTerraform(struct?: WebAppManualInsertionOneagentJavascriptTagOutputReference | WebAppManualInsertionOneagentJavascriptTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script_execution_attribute: cdktf.stringToTerraform(struct!.scriptExecutionAttribute),
  }
}


export function webAppManualInsertionOneagentJavascriptTagToHclTerraform(struct?: WebAppManualInsertionOneagentJavascriptTagOutputReference | WebAppManualInsertionOneagentJavascriptTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script_execution_attribute: {
      value: cdktf.stringToHclTerraform(struct!.scriptExecutionAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppManualInsertionOneagentJavascriptTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppManualInsertionOneagentJavascriptTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scriptExecutionAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptExecutionAttribute = this._scriptExecutionAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppManualInsertionOneagentJavascriptTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scriptExecutionAttribute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scriptExecutionAttribute = value.scriptExecutionAttribute;
    }
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
}
export interface WebAppManualInsertionOneagentJavascriptTagSri {
  /**
  * Possible Values: `Async`, `Defer`, `None`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#script_execution_attribute WebAppManualInsertion#script_execution_attribute}
  */
  readonly scriptExecutionAttribute?: string;
}

export function webAppManualInsertionOneagentJavascriptTagSriToTerraform(struct?: WebAppManualInsertionOneagentJavascriptTagSriOutputReference | WebAppManualInsertionOneagentJavascriptTagSri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script_execution_attribute: cdktf.stringToTerraform(struct!.scriptExecutionAttribute),
  }
}


export function webAppManualInsertionOneagentJavascriptTagSriToHclTerraform(struct?: WebAppManualInsertionOneagentJavascriptTagSriOutputReference | WebAppManualInsertionOneagentJavascriptTagSri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script_execution_attribute: {
      value: cdktf.stringToHclTerraform(struct!.scriptExecutionAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppManualInsertionOneagentJavascriptTagSriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppManualInsertionOneagentJavascriptTagSri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scriptExecutionAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptExecutionAttribute = this._scriptExecutionAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppManualInsertionOneagentJavascriptTagSri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scriptExecutionAttribute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scriptExecutionAttribute = value.scriptExecutionAttribute;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion dynatrace_web_app_manual_insertion}
*/
export class WebAppManualInsertion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_manual_insertion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppManualInsertion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppManualInsertion to import
  * @param importFromId The id of the existing WebAppManualInsertion that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppManualInsertion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_manual_insertion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_manual_insertion dynatrace_web_app_manual_insertion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppManualInsertionConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppManualInsertionConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_manual_insertion',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
    this._codeSnippet.internalValue = config.codeSnippet;
    this._javascriptTag.internalValue = config.javascriptTag;
    this._oneagentJavascriptTag.internalValue = config.oneagentJavascriptTag;
    this._oneagentJavascriptTagSri.internalValue = config.oneagentJavascriptTagSri;
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

  // code_snippet - computed: false, optional: false, required: true
  private _codeSnippet = new WebAppManualInsertionCodeSnippetOutputReference(this, "code_snippet");
  public get codeSnippet() {
    return this._codeSnippet;
  }
  public putCodeSnippet(value: WebAppManualInsertionCodeSnippet) {
    this._codeSnippet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSnippetInput() {
    return this._codeSnippet.internalValue;
  }

  // javascript_tag - computed: false, optional: false, required: true
  private _javascriptTag = new WebAppManualInsertionJavascriptTagOutputReference(this, "javascript_tag");
  public get javascriptTag() {
    return this._javascriptTag;
  }
  public putJavascriptTag(value: WebAppManualInsertionJavascriptTag) {
    this._javascriptTag.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptTagInput() {
    return this._javascriptTag.internalValue;
  }

  // oneagent_javascript_tag - computed: false, optional: true, required: false
  private _oneagentJavascriptTag = new WebAppManualInsertionOneagentJavascriptTagOutputReference(this, "oneagent_javascript_tag");
  public get oneagentJavascriptTag() {
    return this._oneagentJavascriptTag;
  }
  public putOneagentJavascriptTag(value: WebAppManualInsertionOneagentJavascriptTag) {
    this._oneagentJavascriptTag.internalValue = value;
  }
  public resetOneagentJavascriptTag() {
    this._oneagentJavascriptTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneagentJavascriptTagInput() {
    return this._oneagentJavascriptTag.internalValue;
  }

  // oneagent_javascript_tag_sri - computed: false, optional: true, required: false
  private _oneagentJavascriptTagSri = new WebAppManualInsertionOneagentJavascriptTagSriOutputReference(this, "oneagent_javascript_tag_sri");
  public get oneagentJavascriptTagSri() {
    return this._oneagentJavascriptTagSri;
  }
  public putOneagentJavascriptTagSri(value: WebAppManualInsertionOneagentJavascriptTagSri) {
    this._oneagentJavascriptTagSri.internalValue = value;
  }
  public resetOneagentJavascriptTagSri() {
    this._oneagentJavascriptTagSri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneagentJavascriptTagSriInput() {
    return this._oneagentJavascriptTagSri.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      id: cdktf.stringToTerraform(this._id),
      code_snippet: webAppManualInsertionCodeSnippetToTerraform(this._codeSnippet.internalValue),
      javascript_tag: webAppManualInsertionJavascriptTagToTerraform(this._javascriptTag.internalValue),
      oneagent_javascript_tag: webAppManualInsertionOneagentJavascriptTagToTerraform(this._oneagentJavascriptTag.internalValue),
      oneagent_javascript_tag_sri: webAppManualInsertionOneagentJavascriptTagSriToTerraform(this._oneagentJavascriptTagSri.internalValue),
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
      code_snippet: {
        value: webAppManualInsertionCodeSnippetToHclTerraform(this._codeSnippet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppManualInsertionCodeSnippetList",
      },
      javascript_tag: {
        value: webAppManualInsertionJavascriptTagToHclTerraform(this._javascriptTag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppManualInsertionJavascriptTagList",
      },
      oneagent_javascript_tag: {
        value: webAppManualInsertionOneagentJavascriptTagToHclTerraform(this._oneagentJavascriptTag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppManualInsertionOneagentJavascriptTagList",
      },
      oneagent_javascript_tag_sri: {
        value: webAppManualInsertionOneagentJavascriptTagSriToHclTerraform(this._oneagentJavascriptTagSri.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppManualInsertionOneagentJavascriptTagSriList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
