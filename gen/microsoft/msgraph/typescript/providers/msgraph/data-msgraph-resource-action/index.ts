// https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsgraphResourceActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to perform on the resource. This is the action path that will be appended to the resource URL, for example `getMemberGroups`, `checkMemberGroups`, `calculateDisplayNames`, or `members`. Leave empty for actions directly on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#action DataMsgraphResourceAction#action}
  */
  readonly action?: string;
  /**
  * The API version of the data source. The allowed values are `v1.0` and `beta`. Defaults to `v1.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#api_version DataMsgraphResourceAction#api_version}
  */
  readonly apiVersion?: string;
  /**
  * A dynamic attribute that contains the request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#body DataMsgraphResourceAction#body}
  */
  readonly body?: { [key: string]: any };
  /**
  * A mapping of HTTP headers to be sent with the action request. Note that authentication headers are automatically handled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#headers DataMsgraphResourceAction#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * The HTTP method to use for the action. For data sources, this is typically `GET` or `POST` for actions that require a request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#method DataMsgraphResourceAction#method}
  */
  readonly method?: string;
  /**
  * A mapping of query parameters to be sent with the action request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#query_parameters DataMsgraphResourceAction#query_parameters}
  */
  readonly queryParameters?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The URL of the resource to perform the action on. This should be the full resource path, for example `applications/12345678-1234-1234-1234-123456789abc` or `users/user@example.com`. You can use the `resource_url` output from `msgraph_resource`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#resource_url DataMsgraphResourceAction#resource_url}
  */
  readonly resourceUrl: string;
  /**
  * A map where the key is the name for the result and the value is a JMESPath query string to filter the response. Here's an example. If it sets to `{"all" = "@", "app_id" = "appId"}`, it will set the following HCL object to the computed property output.
  * 
  * 	```text
  * 	{
  * 		"all" = {
  * 			"appId" = "00000000-0000-0000-0000-000000000000"
  * 			"displayName" = "example"
  * 			"id" = "00000000-0000-0000-0000-000000000000"
  * 			...
  * 		}
  * 		"app_id" = "00000000-0000-0000-0000-000000000000"
  * 	}
  * 	```
  * 
  * To learn more about JMESPath, visit [JMESPath](https://jmespath.org/).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#response_export_values DataMsgraphResourceAction#response_export_values}
  */
  readonly responseExportValues?: { [key: string]: string };
  /**
  * The retry object supports the following attributes:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#retry DataMsgraphResourceAction#retry}
  */
  readonly retry?: DataMsgraphResourceActionRetry;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#timeouts DataMsgraphResourceAction#timeouts}
  */
  readonly timeouts?: DataMsgraphResourceActionTimeouts;
}
export interface DataMsgraphResourceActionRetry {
  /**
  * A list of regular expressions to match against error messages. If any of the regular expressions match, the request will be retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#error_message_regex DataMsgraphResourceAction#error_message_regex}
  */
  readonly errorMessageRegex: string[];
}

export function dataMsgraphResourceActionRetryToTerraform(struct?: DataMsgraphResourceActionRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_message_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.errorMessageRegex),
  }
}


export function dataMsgraphResourceActionRetryToHclTerraform(struct?: DataMsgraphResourceActionRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_message_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.errorMessageRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataMsgraphResourceActionRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMsgraphResourceActionRetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorMessageRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMessageRegex = this._errorMessageRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsgraphResourceActionRetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorMessageRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorMessageRegex = value.errorMessageRegex;
    }
  }

  // error_message_regex - computed: false, optional: false, required: true
  private _errorMessageRegex?: string[]; 
  public get errorMessageRegex() {
    return this.getListAttribute('error_message_regex');
  }
  public set errorMessageRegex(value: string[]) {
    this._errorMessageRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageRegexInput() {
    return this._errorMessageRegex;
  }
}
export interface DataMsgraphResourceActionTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#read DataMsgraphResourceAction#read}
  */
  readonly read?: string;
}

export function dataMsgraphResourceActionTimeoutsToTerraform(struct?: DataMsgraphResourceActionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataMsgraphResourceActionTimeoutsToHclTerraform(struct?: DataMsgraphResourceActionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataMsgraphResourceActionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMsgraphResourceActionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsgraphResourceActionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action msgraph_resource_action}
*/
export class DataMsgraphResourceAction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "msgraph_resource_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsgraphResourceAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsgraphResourceAction to import
  * @param importFromId The id of the existing DataMsgraphResourceAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsgraphResourceAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "msgraph_resource_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource_action msgraph_resource_action} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsgraphResourceActionConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsgraphResourceActionConfig) {
    super(scope, id, {
      terraformResourceType: 'msgraph_resource_action',
      terraformGeneratorMetadata: {
        providerName: 'msgraph',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._apiVersion = config.apiVersion;
    this._body = config.body;
    this._headers = config.headers;
    this._method = config.method;
    this._queryParameters = config.queryParameters;
    this._resourceUrl = config.resourceUrl;
    this._responseExportValues = config.responseExportValues;
    this._retry.internalValue = config.retry;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // body - computed: false, optional: true, required: false
  private _body?: { [key: string]: any }; 
  public get body() {
    return this.getAnyMapAttribute('body');
  }
  public set body(value: { [key: string]: any }) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // output - computed: true, optional: false, required: false
  private _output = new cdktf.AnyMap(this, "output");
  public get output() {
    return this._output;
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get queryParameters() {
    return this.interpolationForAttribute('query_parameters');
  }
  public set queryParameters(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._queryParameters = value;
  }
  public resetQueryParameters() {
    this._queryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters;
  }

  // resource_url - computed: false, optional: false, required: true
  private _resourceUrl?: string; 
  public get resourceUrl() {
    return this.getStringAttribute('resource_url');
  }
  public set resourceUrl(value: string) {
    this._resourceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUrlInput() {
    return this._resourceUrl;
  }

  // response_export_values - computed: false, optional: true, required: false
  private _responseExportValues?: { [key: string]: string }; 
  public get responseExportValues() {
    return this.getStringMapAttribute('response_export_values');
  }
  public set responseExportValues(value: { [key: string]: string }) {
    this._responseExportValues = value;
  }
  public resetResponseExportValues() {
    this._responseExportValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseExportValuesInput() {
    return this._responseExportValues;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new DataMsgraphResourceActionRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: DataMsgraphResourceActionRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataMsgraphResourceActionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataMsgraphResourceActionTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      api_version: cdktf.stringToTerraform(this._apiVersion),
      body: cdktf.hashMapper(cdktf.anyToTerraform)(this._body),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      method: cdktf.stringToTerraform(this._method),
      query_parameters: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._queryParameters),
      resource_url: cdktf.stringToTerraform(this._resourceUrl),
      response_export_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._responseExportValues),
      retry: dataMsgraphResourceActionRetryToTerraform(this._retry.internalValue),
      timeouts: dataMsgraphResourceActionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._body),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_parameters: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._queryParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      resource_url: {
        value: cdktf.stringToHclTerraform(this._resourceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_export_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._responseExportValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      retry: {
        value: dataMsgraphResourceActionRetryToHclTerraform(this._retry.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataMsgraphResourceActionRetry",
      },
      timeouts: {
        value: dataMsgraphResourceActionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataMsgraphResourceActionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
