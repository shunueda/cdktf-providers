// https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API version of the data source. The allowed values are `v1.0` and `beta`. Defaults to `v1.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#api_version Resource#api_version}
  */
  readonly apiVersion?: string;
  /**
  * A dynamic attribute that contains the request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#body Resource#body}
  */
  readonly body?: { [key: string]: any };
  /**
  * A mapping of query parameters to be sent with the create request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#create_query_parameters Resource#create_query_parameters}
  */
  readonly createQueryParameters?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A mapping of query parameters to be sent with the delete request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#delete_query_parameters Resource#delete_query_parameters}
  */
  readonly deleteQueryParameters?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Whether ignore not returned properties like credentials in `body` to suppress plan-diff. Defaults to `true`. It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#ignore_missing_property Resource#ignore_missing_property}
  */
  readonly ignoreMissingProperty?: boolean | cdktf.IResolvable;
  /**
  * A mapping of query parameters to be sent with the read request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#read_query_parameters Resource#read_query_parameters}
  */
  readonly readQueryParameters?: { [key: string]: string[] } | cdktf.IResolvable;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#response_export_values Resource#response_export_values}
  */
  readonly responseExportValues?: { [key: string]: string };
  /**
  * The retry object supports the following attributes:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#retry Resource#retry}
  */
  readonly retry?: ResourceRetry;
  /**
  * The HTTP method to use for updating the resource. Allowed values are `PATCH` (default) and `PUT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#update_method Resource#update_method}
  */
  readonly updateMethod?: string;
  /**
  * A mapping of query parameters to be sent with the update request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#update_query_parameters Resource#update_query_parameters}
  */
  readonly updateQueryParameters?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The URL which is used to manage the resource. It supports two types of URLs:  
  *   - Collection URL which is used to make a POST request to create a new resource, for example, "/users", it must support the following operations:
  * 	- Create a new resource: POST "/users"
  *     - Read an existing resource: GET "/users/{id}"
  *     - Update an existing resource: PATCH "/users/{id}"
  *     - Delete an existing resource: DELETE "/users/{id} "
  *   - URL which has a "$ref" suffix, for example, "/groups/{group-id}/members/$ref", it must support the following operations:
  * 	- Add a reference to a resource: POST "/groups/{group-id}/members/$ref"
  * 	- Remove a reference to a resource: DELETE "/groups/{group-id}/members/{id}/$ref"
  *   
  *   More information about the Microsoft Graph API can be found at [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/overview).  
  *   And there are some [examples](https://github.com/microsoft/terraform-provider-msgraph/tree/main/examples/quickstarts) to help you get started.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#url Resource#url}
  */
  readonly url: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#timeouts Resource#timeouts}
  */
  readonly timeouts?: ResourceTimeouts;
}
export interface ResourceRetry {
  /**
  * A list of regular expressions to match against error messages. If any of the regular expressions match, the request will be retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#error_message_regex Resource#error_message_regex}
  */
  readonly errorMessageRegex: string[];
}

export function resourceRetryToTerraform(struct?: ResourceRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_message_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.errorMessageRegex),
  }
}


export function resourceRetryToHclTerraform(struct?: ResourceRetry | cdktf.IResolvable): any {
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

export class ResourceRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRetry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceRetry | cdktf.IResolvable | undefined) {
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
export interface ResourceTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#create Resource#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#delete Resource#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#read Resource#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#update Resource#update}
  */
  readonly update?: string;
}

export function resourceTimeoutsToTerraform(struct?: ResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function resourceTimeoutsToHclTerraform(struct?: ResourceTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class ResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource msgraph_resource}
*/
export class Resource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "msgraph_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Resource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resource to import
  * @param importFromId The id of the existing Resource that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "msgraph_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/msgraph/0.3.0/docs/resources/resource msgraph_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceConfig) {
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
    this._body = config.body;
    this._createQueryParameters = config.createQueryParameters;
    this._deleteQueryParameters = config.deleteQueryParameters;
    this._ignoreMissingProperty = config.ignoreMissingProperty;
    this._readQueryParameters = config.readQueryParameters;
    this._responseExportValues = config.responseExportValues;
    this._retry.internalValue = config.retry;
    this._updateMethod = config.updateMethod;
    this._updateQueryParameters = config.updateQueryParameters;
    this._url = config.url;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: true, required: false
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

  // create_query_parameters - computed: false, optional: true, required: false
  private _createQueryParameters?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get createQueryParameters() {
    return this.interpolationForAttribute('create_query_parameters');
  }
  public set createQueryParameters(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._createQueryParameters = value;
  }
  public resetCreateQueryParameters() {
    this._createQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createQueryParametersInput() {
    return this._createQueryParameters;
  }

  // delete_query_parameters - computed: false, optional: true, required: false
  private _deleteQueryParameters?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get deleteQueryParameters() {
    return this.interpolationForAttribute('delete_query_parameters');
  }
  public set deleteQueryParameters(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._deleteQueryParameters = value;
  }
  public resetDeleteQueryParameters() {
    this._deleteQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteQueryParametersInput() {
    return this._deleteQueryParameters;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_missing_property - computed: true, optional: true, required: false
  private _ignoreMissingProperty?: boolean | cdktf.IResolvable; 
  public get ignoreMissingProperty() {
    return this.getBooleanAttribute('ignore_missing_property');
  }
  public set ignoreMissingProperty(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingProperty = value;
  }
  public resetIgnoreMissingProperty() {
    this._ignoreMissingProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingPropertyInput() {
    return this._ignoreMissingProperty;
  }

  // output - computed: true, optional: false, required: false
  private _output = new cdktf.AnyMap(this, "output");
  public get output() {
    return this._output;
  }

  // read_query_parameters - computed: false, optional: true, required: false
  private _readQueryParameters?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get readQueryParameters() {
    return this.interpolationForAttribute('read_query_parameters');
  }
  public set readQueryParameters(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._readQueryParameters = value;
  }
  public resetReadQueryParameters() {
    this._readQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readQueryParametersInput() {
    return this._readQueryParameters;
  }

  // resource_url - computed: true, optional: false, required: false
  public get resourceUrl() {
    return this.getStringAttribute('resource_url');
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
  private _retry = new ResourceRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: ResourceRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // update_method - computed: false, optional: true, required: false
  private _updateMethod?: string; 
  public get updateMethod() {
    return this.getStringAttribute('update_method');
  }
  public set updateMethod(value: string) {
    this._updateMethod = value;
  }
  public resetUpdateMethod() {
    this._updateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMethodInput() {
    return this._updateMethod;
  }

  // update_query_parameters - computed: false, optional: true, required: false
  private _updateQueryParameters?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get updateQueryParameters() {
    return this.interpolationForAttribute('update_query_parameters');
  }
  public set updateQueryParameters(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._updateQueryParameters = value;
  }
  public resetUpdateQueryParameters() {
    this._updateQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateQueryParametersInput() {
    return this._updateQueryParameters;
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
  private _timeouts = new ResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceTimeouts) {
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
      body: cdktf.hashMapper(cdktf.anyToTerraform)(this._body),
      create_query_parameters: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._createQueryParameters),
      delete_query_parameters: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._deleteQueryParameters),
      ignore_missing_property: cdktf.booleanToTerraform(this._ignoreMissingProperty),
      read_query_parameters: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._readQueryParameters),
      response_export_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._responseExportValues),
      retry: resourceRetryToTerraform(this._retry.internalValue),
      update_method: cdktf.stringToTerraform(this._updateMethod),
      update_query_parameters: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._updateQueryParameters),
      url: cdktf.stringToTerraform(this._url),
      timeouts: resourceTimeoutsToTerraform(this._timeouts.internalValue),
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
      body: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._body),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      create_query_parameters: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._createQueryParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      delete_query_parameters: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._deleteQueryParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      ignore_missing_property: {
        value: cdktf.booleanToHclTerraform(this._ignoreMissingProperty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      read_query_parameters: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._readQueryParameters),
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
        value: resourceRetryToHclTerraform(this._retry.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceRetry",
      },
      update_method: {
        value: cdktf.stringToHclTerraform(this._updateMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_query_parameters: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._updateQueryParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: resourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
