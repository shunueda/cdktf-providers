// https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsgraphResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API version of the data source. The allowed values are `v1.0` and `beta`. Defaults to `v1.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource#api_version DataMsgraphResource#api_version}
  */
  readonly apiVersion?: string;
  /**
  * A map of headers to include in the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource#headers DataMsgraphResource#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * A map of query parameters to include in the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource#query_parameters DataMsgraphResource#query_parameters}
  */
  readonly queryParameters?: { [key: string]: string[] } | cdktf.IResolvable;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource#response_export_values DataMsgraphResource#response_export_values}
  */
  readonly responseExportValues?: { [key: string]: string };
  /**
  * The retry object supports the following attributes:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource#retry DataMsgraphResource#retry}
  */
  readonly retry?: DataMsgraphResourceRetry;
  /**
  * The URL of the data source. It supports both collection URL which is used to list resources, for example `/users`, and item URL which is used to read an individual resource, for example `/users/{id}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource#url DataMsgraphResource#url}
  */
  readonly url: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource#timeouts DataMsgraphResource#timeouts}
  */
  readonly timeouts?: DataMsgraphResourceTimeouts;
}
export interface DataMsgraphResourceRetry {
  /**
  * A list of regular expressions to match against error messages. If any of the regular expressions match, the request will be retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource#error_message_regex DataMsgraphResource#error_message_regex}
  */
  readonly errorMessageRegex: string[];
}

export function dataMsgraphResourceRetryToTerraform(struct?: DataMsgraphResourceRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_message_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.errorMessageRegex),
  }
}


export function dataMsgraphResourceRetryToHclTerraform(struct?: DataMsgraphResourceRetry | cdktf.IResolvable): any {
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

export class DataMsgraphResourceRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMsgraphResourceRetry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataMsgraphResourceRetry | cdktf.IResolvable | undefined) {
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
export interface DataMsgraphResourceTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource#read DataMsgraphResource#read}
  */
  readonly read?: string;
}

export function dataMsgraphResourceTimeoutsToTerraform(struct?: DataMsgraphResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataMsgraphResourceTimeoutsToHclTerraform(struct?: DataMsgraphResourceTimeouts | cdktf.IResolvable): any {
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

export class DataMsgraphResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMsgraphResourceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataMsgraphResourceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource msgraph_resource}
*/
export class DataMsgraphResource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "msgraph_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsgraphResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsgraphResource to import
  * @param importFromId The id of the existing DataMsgraphResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsgraphResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "msgraph_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/data-sources/resource msgraph_resource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsgraphResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsgraphResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'msgraph_resource',
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
    this._apiVersion = config.apiVersion;
    this._headers = config.headers;
    this._queryParameters = config.queryParameters;
    this._responseExportValues = config.responseExportValues;
    this._retry.internalValue = config.retry;
    this._url = config.url;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _retry = new DataMsgraphResourceRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: DataMsgraphResourceRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataMsgraphResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataMsgraphResourceTimeouts) {
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
      api_version: cdktf.stringToTerraform(this._apiVersion),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      query_parameters: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._queryParameters),
      response_export_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._responseExportValues),
      retry: dataMsgraphResourceRetryToTerraform(this._retry.internalValue),
      url: cdktf.stringToTerraform(this._url),
      timeouts: dataMsgraphResourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      query_parameters: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._queryParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      response_export_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._responseExportValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      retry: {
        value: dataMsgraphResourceRetryToHclTerraform(this._retry.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataMsgraphResourceRetry",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataMsgraphResourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataMsgraphResourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
