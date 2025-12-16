// https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRestfulResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to throw error if the data source being queried doesn't exist (i.e. status code is 404). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#allow_not_exist DataRestfulResource#allow_not_exist}
  */
  readonly allowNotExist?: boolean | cdktf.IResolvable;
  /**
  * The request body that is sent when using `POST` method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#body DataRestfulResource#body}
  */
  readonly body?: { [key: string]: any };
  /**
  * The header parameters that are applied to each request. This overrides the `header` set in the provider block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#header DataRestfulResource#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The ID of the Resource, i.e. The path of the data source, relative to the `base_url` of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#id DataRestfulResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The HTTP Method for the request. Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search. Defaults to `GET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#method DataRestfulResource#method}
  */
  readonly method?: string;
  /**
  * A set of `output` attribute paths (in [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)) that will be exported in the `output`. If this is not specified, all attributes will be exported by `output`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#output_attrs DataRestfulResource#output_attrs}
  */
  readonly outputAttrs?: string[];
  /**
  * An array of prechecks that need to pass prior to the "Read" operation. Exactly one of `mutex` or `api` should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#precheck DataRestfulResource#precheck}
  */
  readonly precheck?: DataRestfulResourcePrecheck[] | cdktf.IResolvable;
  /**
  * The query parameters that are applied to each request. This overrides the `query` set in the provider block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#query DataRestfulResource#query}
  */
  readonly query?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A selector in [gjson query syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md#queries), that is used when `id` represents a collection of resources, to select exactly one member resource of from it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#selector DataRestfulResource#selector}
  */
  readonly selector?: string;
  /**
  * Whether to use `sensitive_output` instead of `output`. When true, the response will be stored in `sensitive_output` (which is marked as sensitive). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#use_sensitive_output DataRestfulResource#use_sensitive_output}
  */
  readonly useSensitiveOutput?: boolean | cdktf.IResolvable;
}
export interface DataRestfulResourcePrecheckApiStatus {
  /**
  * The expected status sentinels for pending status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#pending DataRestfulResource#pending}
  */
  readonly pending?: string[];
  /**
  * The expected status sentinel for suceess status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#success DataRestfulResource#success}
  */
  readonly success: string;
}

export function dataRestfulResourcePrecheckApiStatusToTerraform(struct?: DataRestfulResourcePrecheckApiStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pending),
    success: cdktf.stringToTerraform(struct!.success),
  }
}


export function dataRestfulResourcePrecheckApiStatusToHclTerraform(struct?: DataRestfulResourcePrecheckApiStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pending: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pending),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    success: {
      value: cdktf.stringToHclTerraform(struct!.success),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRestfulResourcePrecheckApiStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRestfulResourcePrecheckApiStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pending !== undefined) {
      hasAnyValues = true;
      internalValueResult.pending = this._pending;
    }
    if (this._success !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRestfulResourcePrecheckApiStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pending = undefined;
      this._success = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pending = value.pending;
      this._success = value.success;
    }
  }

  // pending - computed: false, optional: true, required: false
  private _pending?: string[]; 
  public get pending() {
    return this.getListAttribute('pending');
  }
  public set pending(value: string[]) {
    this._pending = value;
  }
  public resetPending() {
    this._pending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingInput() {
    return this._pending;
  }

  // success - computed: false, optional: false, required: true
  private _success?: string; 
  public get success() {
    return this.getStringAttribute('success');
  }
  public set success(value: string) {
    this._success = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success;
  }
}
export interface DataRestfulResourcePrecheckApi {
  /**
  * The interval between two pollings if there is no `Retry-After` in the response header, in second. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#default_delay_sec DataRestfulResource#default_delay_sec}
  */
  readonly defaultDelaySec?: number;
  /**
  * The header parameters. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#header DataRestfulResource#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The path used to query readiness, relative to the `base_url` of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#path DataRestfulResource#path}
  */
  readonly path: string;
  /**
  * The query parameters. This overrides the `query` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#query DataRestfulResource#query}
  */
  readonly query?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The expected status sentinels for each polling state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#status DataRestfulResource#status}
  */
  readonly status: DataRestfulResourcePrecheckApiStatus;
  /**
  * Specifies how to discover the status property. The format is either `code` or `scope.path`, where `scope` can be either `header` or `body`, and the `path` is using the [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#status_locator DataRestfulResource#status_locator}
  */
  readonly statusLocator: string;
}

export function dataRestfulResourcePrecheckApiToTerraform(struct?: DataRestfulResourcePrecheckApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_delay_sec: cdktf.numberToTerraform(struct!.defaultDelaySec),
    header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.header),
    path: cdktf.stringToTerraform(struct!.path),
    query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.query),
    status: dataRestfulResourcePrecheckApiStatusToTerraform(struct!.status),
    status_locator: cdktf.stringToTerraform(struct!.statusLocator),
  }
}


export function dataRestfulResourcePrecheckApiToHclTerraform(struct?: DataRestfulResourcePrecheckApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_delay_sec: {
      value: cdktf.numberToHclTerraform(struct!.defaultDelaySec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.header),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.query),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    status: {
      value: dataRestfulResourcePrecheckApiStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "DataRestfulResourcePrecheckApiStatus",
    },
    status_locator: {
      value: cdktf.stringToHclTerraform(struct!.statusLocator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRestfulResourcePrecheckApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRestfulResourcePrecheckApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDelaySec !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDelaySec = this._defaultDelaySec;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    if (this._statusLocator !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusLocator = this._statusLocator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRestfulResourcePrecheckApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultDelaySec = undefined;
      this._header = undefined;
      this._path = undefined;
      this._query = undefined;
      this._status.internalValue = undefined;
      this._statusLocator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultDelaySec = value.defaultDelaySec;
      this._header = value.header;
      this._path = value.path;
      this._query = value.query;
      this._status.internalValue = value.status;
      this._statusLocator = value.statusLocator;
    }
  }

  // default_delay_sec - computed: true, optional: true, required: false
  private _defaultDelaySec?: number; 
  public get defaultDelaySec() {
    return this.getNumberAttribute('default_delay_sec');
  }
  public set defaultDelaySec(value: number) {
    this._defaultDelaySec = value;
  }
  public resetDefaultDelaySec() {
    this._defaultDelaySec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDelaySecInput() {
    return this._defaultDelaySec;
  }

  // header - computed: false, optional: true, required: false
  private _header?: { [key: string]: string }; 
  public get header() {
    return this.getStringMapAttribute('header');
  }
  public set header(value: { [key: string]: string }) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // query - computed: false, optional: true, required: false
  private _query?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get query() {
    return this.interpolationForAttribute('query');
  }
  public set query(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // status - computed: false, optional: false, required: true
  private _status = new DataRestfulResourcePrecheckApiStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: DataRestfulResourcePrecheckApiStatus) {
    this._status.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }

  // status_locator - computed: false, optional: false, required: true
  private _statusLocator?: string; 
  public get statusLocator() {
    return this.getStringAttribute('status_locator');
  }
  public set statusLocator(value: string) {
    this._statusLocator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusLocatorInput() {
    return this._statusLocator;
  }
}
export interface DataRestfulResourcePrecheck {
  /**
  * Keeps waiting until the specified API meets the success status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#api DataRestfulResource#api}
  */
  readonly api?: DataRestfulResourcePrecheckApi;
  /**
  * The name of the mutex, which implies the resource will keep waiting until this mutex is held
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#mutex DataRestfulResource#mutex}
  */
  readonly mutex?: string;
}

export function dataRestfulResourcePrecheckToTerraform(struct?: DataRestfulResourcePrecheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: dataRestfulResourcePrecheckApiToTerraform(struct!.api),
    mutex: cdktf.stringToTerraform(struct!.mutex),
  }
}


export function dataRestfulResourcePrecheckToHclTerraform(struct?: DataRestfulResourcePrecheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: dataRestfulResourcePrecheckApiToHclTerraform(struct!.api),
      isBlock: true,
      type: "struct",
      storageClassType: "DataRestfulResourcePrecheckApi",
    },
    mutex: {
      value: cdktf.stringToHclTerraform(struct!.mutex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRestfulResourcePrecheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRestfulResourcePrecheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api?.internalValue;
    }
    if (this._mutex !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutex = this._mutex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRestfulResourcePrecheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._api.internalValue = undefined;
      this._mutex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._api.internalValue = value.api;
      this._mutex = value.mutex;
    }
  }

  // api - computed: false, optional: true, required: false
  private _api = new DataRestfulResourcePrecheckApiOutputReference(this, "api");
  public get api() {
    return this._api;
  }
  public putApi(value: DataRestfulResourcePrecheckApi) {
    this._api.internalValue = value;
  }
  public resetApi() {
    this._api.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api.internalValue;
  }

  // mutex - computed: false, optional: true, required: false
  private _mutex?: string; 
  public get mutex() {
    return this.getStringAttribute('mutex');
  }
  public set mutex(value: string) {
    this._mutex = value;
  }
  public resetMutex() {
    this._mutex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutexInput() {
    return this._mutex;
  }
}

export class DataRestfulResourcePrecheckList extends cdktf.ComplexList {
  public internalValue? : DataRestfulResourcePrecheck[] | cdktf.IResolvable

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
  public get(index: number): DataRestfulResourcePrecheckOutputReference {
    return new DataRestfulResourcePrecheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource restful_resource}
*/
export class DataRestfulResource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "restful_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRestfulResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRestfulResource to import
  * @param importFromId The id of the existing DataRestfulResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRestfulResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "restful_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magodo/restful/0.25.1/docs/data-sources/resource restful_resource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRestfulResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataRestfulResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'restful_resource',
      terraformGeneratorMetadata: {
        providerName: 'restful',
        providerVersion: '0.25.1',
        providerVersionConstraint: '0.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowNotExist = config.allowNotExist;
    this._body = config.body;
    this._header = config.header;
    this._id = config.id;
    this._method = config.method;
    this._outputAttrs = config.outputAttrs;
    this._precheck.internalValue = config.precheck;
    this._query = config.query;
    this._selector = config.selector;
    this._useSensitiveOutput = config.useSensitiveOutput;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_not_exist - computed: false, optional: true, required: false
  private _allowNotExist?: boolean | cdktf.IResolvable; 
  public get allowNotExist() {
    return this.getBooleanAttribute('allow_not_exist');
  }
  public set allowNotExist(value: boolean | cdktf.IResolvable) {
    this._allowNotExist = value;
  }
  public resetAllowNotExist() {
    this._allowNotExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNotExistInput() {
    return this._allowNotExist;
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

  // header - computed: false, optional: true, required: false
  private _header?: { [key: string]: string }; 
  public get header() {
    return this.getStringMapAttribute('header');
  }
  public set header(value: { [key: string]: string }) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // output_attrs - computed: false, optional: true, required: false
  private _outputAttrs?: string[]; 
  public get outputAttrs() {
    return cdktf.Fn.tolist(this.getListAttribute('output_attrs'));
  }
  public set outputAttrs(value: string[]) {
    this._outputAttrs = value;
  }
  public resetOutputAttrs() {
    this._outputAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputAttrsInput() {
    return this._outputAttrs;
  }

  // precheck - computed: false, optional: true, required: false
  private _precheck = new DataRestfulResourcePrecheckList(this, "precheck", false);
  public get precheck() {
    return this._precheck;
  }
  public putPrecheck(value: DataRestfulResourcePrecheck[] | cdktf.IResolvable) {
    this._precheck.internalValue = value;
  }
  public resetPrecheck() {
    this._precheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precheckInput() {
    return this._precheck.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get query() {
    return this.interpolationForAttribute('query');
  }
  public set query(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // sensitive_output - computed: true, optional: false, required: false
  private _sensitiveOutput = new cdktf.AnyMap(this, "sensitive_output");
  public get sensitiveOutput() {
    return this._sensitiveOutput;
  }

  // use_sensitive_output - computed: false, optional: true, required: false
  private _useSensitiveOutput?: boolean | cdktf.IResolvable; 
  public get useSensitiveOutput() {
    return this.getBooleanAttribute('use_sensitive_output');
  }
  public set useSensitiveOutput(value: boolean | cdktf.IResolvable) {
    this._useSensitiveOutput = value;
  }
  public resetUseSensitiveOutput() {
    this._useSensitiveOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSensitiveOutputInput() {
    return this._useSensitiveOutput;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_not_exist: cdktf.booleanToTerraform(this._allowNotExist),
      body: cdktf.hashMapper(cdktf.anyToTerraform)(this._body),
      header: cdktf.hashMapper(cdktf.stringToTerraform)(this._header),
      id: cdktf.stringToTerraform(this._id),
      method: cdktf.stringToTerraform(this._method),
      output_attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outputAttrs),
      precheck: cdktf.listMapper(dataRestfulResourcePrecheckToTerraform, false)(this._precheck.internalValue),
      query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._query),
      selector: cdktf.stringToTerraform(this._selector),
      use_sensitive_output: cdktf.booleanToTerraform(this._useSensitiveOutput),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_not_exist: {
        value: cdktf.booleanToHclTerraform(this._allowNotExist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      body: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._body),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      header: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._header),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_attrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outputAttrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      precheck: {
        value: cdktf.listMapperHcl(dataRestfulResourcePrecheckToHclTerraform, false)(this._precheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRestfulResourcePrecheckList",
      },
      query: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._query),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      selector: {
        value: cdktf.stringToHclTerraform(this._selector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_sensitive_output: {
        value: cdktf.booleanToHclTerraform(this._useSensitiveOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
