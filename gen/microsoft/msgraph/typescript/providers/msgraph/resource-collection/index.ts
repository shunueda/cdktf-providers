// https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API version of the data source. The allowed values are `v1.0` and `beta`. Defaults to `v1.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#api_version ResourceCollection#api_version}
  */
  readonly apiVersion?: string;
  /**
  * A mapping of query parameters to be sent with the read (list) requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#read_query_parameters ResourceCollection#read_query_parameters}
  */
  readonly readQueryParameters?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * List of object IDs that MUST exist in this `$ref` collection. Missing IDs are added; extra remote items are removed. Order is ignored. Each value should be the GUID (or string identifier) of an existing directory object (user, group, service principal, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#reference_ids ResourceCollection#reference_ids}
  */
  readonly referenceIds?: string[];
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#response_export_values ResourceCollection#response_export_values}
  */
  readonly responseExportValues?: { [key: string]: string };
  /**
  * The retry object supports the following attributes:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#retry ResourceCollection#retry}
  */
  readonly retry?: ResourceCollectionRetry;
  /**
  * Full relative path of the target reference collection ending in '/$ref'. For example: `groups/{group-id}/members/$ref`. This must point to a $ref collection; changing this value forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#url ResourceCollection#url}
  */
  readonly url: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#timeouts ResourceCollection#timeouts}
  */
  readonly timeouts?: ResourceCollectionTimeouts;
}
export interface ResourceCollectionRetry {
  /**
  * A list of regular expressions to match against error messages. If any of the regular expressions match, the request will be retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#error_message_regex ResourceCollection#error_message_regex}
  */
  readonly errorMessageRegex: string[];
}

export function resourceCollectionRetryToTerraform(struct?: ResourceCollectionRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_message_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.errorMessageRegex),
  }
}


export function resourceCollectionRetryToHclTerraform(struct?: ResourceCollectionRetry | cdktf.IResolvable): any {
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

export class ResourceCollectionRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceCollectionRetry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceCollectionRetry | cdktf.IResolvable | undefined) {
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
export interface ResourceCollectionTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#create ResourceCollection#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#delete ResourceCollection#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#read ResourceCollection#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#update ResourceCollection#update}
  */
  readonly update?: string;
}

export function resourceCollectionTimeoutsToTerraform(struct?: ResourceCollectionTimeouts | cdktf.IResolvable): any {
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


export function resourceCollectionTimeoutsToHclTerraform(struct?: ResourceCollectionTimeouts | cdktf.IResolvable): any {
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

export class ResourceCollectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceCollectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceCollectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection msgraph_resource_collection}
*/
export class ResourceCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "msgraph_resource_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceCollection to import
  * @param importFromId The id of the existing ResourceCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "msgraph_resource_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/msgraph/0.2.0/docs/resources/resource_collection msgraph_resource_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'msgraph_resource_collection',
      terraformGeneratorMetadata: {
        providerName: 'msgraph',
        providerVersion: '0.2.0'
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
    this._readQueryParameters = config.readQueryParameters;
    this._referenceIds = config.referenceIds;
    this._responseExportValues = config.responseExportValues;
    this._retry.internalValue = config.retry;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // reference_ids - computed: false, optional: true, required: false
  private _referenceIds?: string[]; 
  public get referenceIds() {
    return this.getListAttribute('reference_ids');
  }
  public set referenceIds(value: string[]) {
    this._referenceIds = value;
  }
  public resetReferenceIds() {
    this._referenceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceIdsInput() {
    return this._referenceIds;
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
  private _retry = new ResourceCollectionRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: ResourceCollectionRetry) {
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
  private _timeouts = new ResourceCollectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceCollectionTimeouts) {
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
      read_query_parameters: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._readQueryParameters),
      reference_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._referenceIds),
      response_export_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._responseExportValues),
      retry: resourceCollectionRetryToTerraform(this._retry.internalValue),
      url: cdktf.stringToTerraform(this._url),
      timeouts: resourceCollectionTimeoutsToTerraform(this._timeouts.internalValue),
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
      read_query_parameters: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._readQueryParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      reference_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._referenceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      response_export_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._responseExportValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      retry: {
        value: resourceCollectionRetryToHclTerraform(this._retry.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceCollectionRetry",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: resourceCollectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceCollectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
