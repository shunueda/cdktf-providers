// https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontierActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action endpoint identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#endpoint FrontierAction#endpoint}
  */
  readonly endpoint: string;
  /**
  * Action HTTP request method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#http_request_method FrontierAction#http_request_method}
  */
  readonly httpRequestMethod: string;
  /**
  * e5e_async_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#e5e_async_function FrontierAction#e5e_async_function}
  */
  readonly e5EAsyncFunction?: FrontierActionE5EAsyncFunction;
  /**
  * e5e_async_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#e5e_async_result FrontierAction#e5e_async_result}
  */
  readonly e5EAsyncResult?: FrontierActionE5EAsyncResult;
  /**
  * e5e_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#e5e_function FrontierAction#e5e_function}
  */
  readonly e5EFunction?: FrontierActionE5EFunction;
  /**
  * mock_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#mock_response FrontierAction#mock_response}
  */
  readonly mockResponse?: FrontierActionMockResponse;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#url_rewrite FrontierAction#url_rewrite}
  */
  readonly urlRewrite?: FrontierActionUrlRewrite;
}
export interface FrontierActionE5EAsyncFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#function FrontierAction#function}
  */
  readonly function: string;
}

export function frontierActionE5EAsyncFunctionToTerraform(struct?: FrontierActionE5EAsyncFunctionOutputReference | FrontierActionE5EAsyncFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: cdktf.stringToTerraform(struct!.function),
  }
}


export function frontierActionE5EAsyncFunctionToHclTerraform(struct?: FrontierActionE5EAsyncFunctionOutputReference | FrontierActionE5EAsyncFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontierActionE5EAsyncFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrontierActionE5EAsyncFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontierActionE5EAsyncFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._function = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._function = value.function;
    }
  }

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }
}
export interface FrontierActionE5EAsyncResult {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#function FrontierAction#function}
  */
  readonly function: string;
}

export function frontierActionE5EAsyncResultToTerraform(struct?: FrontierActionE5EAsyncResultOutputReference | FrontierActionE5EAsyncResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: cdktf.stringToTerraform(struct!.function),
  }
}


export function frontierActionE5EAsyncResultToHclTerraform(struct?: FrontierActionE5EAsyncResultOutputReference | FrontierActionE5EAsyncResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontierActionE5EAsyncResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrontierActionE5EAsyncResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontierActionE5EAsyncResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._function = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._function = value.function;
    }
  }

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }
}
export interface FrontierActionE5EFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#function FrontierAction#function}
  */
  readonly function: string;
}

export function frontierActionE5EFunctionToTerraform(struct?: FrontierActionE5EFunctionOutputReference | FrontierActionE5EFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: cdktf.stringToTerraform(struct!.function),
  }
}


export function frontierActionE5EFunctionToHclTerraform(struct?: FrontierActionE5EFunctionOutputReference | FrontierActionE5EFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontierActionE5EFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrontierActionE5EFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontierActionE5EFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._function = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._function = value.function;
    }
  }

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }
}
export interface FrontierActionMockResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#body FrontierAction#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#language FrontierAction#language}
  */
  readonly language: string;
}

export function frontierActionMockResponseToTerraform(struct?: FrontierActionMockResponseOutputReference | FrontierActionMockResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    language: cdktf.stringToTerraform(struct!.language),
  }
}


export function frontierActionMockResponseToHclTerraform(struct?: FrontierActionMockResponseOutputReference | FrontierActionMockResponse): any {
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
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontierActionMockResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrontierActionMockResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontierActionMockResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._language = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._language = value.language;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }
}
export interface FrontierActionUrlRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#url FrontierAction#url}
  */
  readonly url: string;
}

export function frontierActionUrlRewriteToTerraform(struct?: FrontierActionUrlRewriteOutputReference | FrontierActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function frontierActionUrlRewriteToHclTerraform(struct?: FrontierActionUrlRewriteOutputReference | FrontierActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontierActionUrlRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrontierActionUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontierActionUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action anxcloud_frontier_action}
*/
export class FrontierAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "anxcloud_frontier_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FrontierAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FrontierAction to import
  * @param importFromId The id of the existing FrontierAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FrontierAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "anxcloud_frontier_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/frontier_action anxcloud_frontier_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrontierActionConfig
  */
  public constructor(scope: Construct, id: string, config: FrontierActionConfig) {
    super(scope, id, {
      terraformResourceType: 'anxcloud_frontier_action',
      terraformGeneratorMetadata: {
        providerName: 'anxcloud',
        providerVersion: '0.7.4',
        providerVersionConstraint: '0.7.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpoint = config.endpoint;
    this._httpRequestMethod = config.httpRequestMethod;
    this._e5EAsyncFunction.internalValue = config.e5EAsyncFunction;
    this._e5EAsyncResult.internalValue = config.e5EAsyncResult;
    this._e5EFunction.internalValue = config.e5EFunction;
    this._mockResponse.internalValue = config.mockResponse;
    this._urlRewrite.internalValue = config.urlRewrite;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // http_request_method - computed: false, optional: false, required: true
  private _httpRequestMethod?: string; 
  public get httpRequestMethod() {
    return this.getStringAttribute('http_request_method');
  }
  public set httpRequestMethod(value: string) {
    this._httpRequestMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestMethodInput() {
    return this._httpRequestMethod;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // e5e_async_function - computed: false, optional: true, required: false
  private _e5EAsyncFunction = new FrontierActionE5EAsyncFunctionOutputReference(this, "e5e_async_function");
  public get e5EAsyncFunction() {
    return this._e5EAsyncFunction;
  }
  public putE5EAsyncFunction(value: FrontierActionE5EAsyncFunction) {
    this._e5EAsyncFunction.internalValue = value;
  }
  public resetE5EAsyncFunction() {
    this._e5EAsyncFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e5EAsyncFunctionInput() {
    return this._e5EAsyncFunction.internalValue;
  }

  // e5e_async_result - computed: false, optional: true, required: false
  private _e5EAsyncResult = new FrontierActionE5EAsyncResultOutputReference(this, "e5e_async_result");
  public get e5EAsyncResult() {
    return this._e5EAsyncResult;
  }
  public putE5EAsyncResult(value: FrontierActionE5EAsyncResult) {
    this._e5EAsyncResult.internalValue = value;
  }
  public resetE5EAsyncResult() {
    this._e5EAsyncResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e5EAsyncResultInput() {
    return this._e5EAsyncResult.internalValue;
  }

  // e5e_function - computed: false, optional: true, required: false
  private _e5EFunction = new FrontierActionE5EFunctionOutputReference(this, "e5e_function");
  public get e5EFunction() {
    return this._e5EFunction;
  }
  public putE5EFunction(value: FrontierActionE5EFunction) {
    this._e5EFunction.internalValue = value;
  }
  public resetE5EFunction() {
    this._e5EFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e5EFunctionInput() {
    return this._e5EFunction.internalValue;
  }

  // mock_response - computed: false, optional: true, required: false
  private _mockResponse = new FrontierActionMockResponseOutputReference(this, "mock_response");
  public get mockResponse() {
    return this._mockResponse;
  }
  public putMockResponse(value: FrontierActionMockResponse) {
    this._mockResponse.internalValue = value;
  }
  public resetMockResponse() {
    this._mockResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mockResponseInput() {
    return this._mockResponse.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new FrontierActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: FrontierActionUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      http_request_method: cdktf.stringToTerraform(this._httpRequestMethod),
      e5e_async_function: frontierActionE5EAsyncFunctionToTerraform(this._e5EAsyncFunction.internalValue),
      e5e_async_result: frontierActionE5EAsyncResultToTerraform(this._e5EAsyncResult.internalValue),
      e5e_function: frontierActionE5EFunctionToTerraform(this._e5EFunction.internalValue),
      mock_response: frontierActionMockResponseToTerraform(this._mockResponse.internalValue),
      url_rewrite: frontierActionUrlRewriteToTerraform(this._urlRewrite.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_request_method: {
        value: cdktf.stringToHclTerraform(this._httpRequestMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      e5e_async_function: {
        value: frontierActionE5EAsyncFunctionToHclTerraform(this._e5EAsyncFunction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontierActionE5EAsyncFunctionList",
      },
      e5e_async_result: {
        value: frontierActionE5EAsyncResultToHclTerraform(this._e5EAsyncResult.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontierActionE5EAsyncResultList",
      },
      e5e_function: {
        value: frontierActionE5EFunctionToHclTerraform(this._e5EFunction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontierActionE5EFunctionList",
      },
      mock_response: {
        value: frontierActionMockResponseToHclTerraform(this._mockResponse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontierActionMockResponseList",
      },
      url_rewrite: {
        value: frontierActionUrlRewriteToHclTerraform(this._urlRewrite.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontierActionUrlRewriteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
