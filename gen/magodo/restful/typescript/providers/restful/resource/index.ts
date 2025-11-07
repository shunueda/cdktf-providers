// https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The properties of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#body Resource#body}
  */
  readonly body: { [key: string]: any };
  /**
  * Whether to check resource already existed? Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#check_existance Resource#check_existance}
  */
  readonly checkExistance?: boolean | cdktf.IResolvable;
  /**
  * The header parameters that are applied to each create request. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#create_header Resource#create_header}
  */
  readonly createHeader?: { [key: string]: string };
  /**
  * The method used to create the resource. Possible values are `PUT`, `POST` and `PATCH`. This overrides the `create_method` set in the provider block (defaults to POST).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#create_method Resource#create_method}
  */
  readonly createMethod?: string;
  /**
  * The query parameters that are applied to each create request. This overrides the `query` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#create_query Resource#create_query}
  */
  readonly createQuery?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A selector in [gjson query syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md#queries) query syntax, that is used when create returns a collection of resources, to select exactly one member resource of from it. By default, the whole response body is used as the body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#create_selector Resource#create_selector}
  */
  readonly createSelector?: string;
  /**
  * The payload for the `Delete` call. Conflicts with `delete_body_raw`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#delete_body Resource#delete_body}
  */
  readonly deleteBody?: { [key: string]: any };
  /**
  * The raw payload for the `Delete` call. It can contain `$(body.x.y.z)` parameter that reference property from the `state.output`. Conflicts with `delete_body`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#delete_body_raw Resource#delete_body_raw}
  */
  readonly deleteBodyRaw?: string;
  /**
  * The header parameters that are applied to each delete request. This overrides the `header` set in the resource block. The header value can be a string literal, or combined by the body param: `$(body.x.y.z)` that expands to the `x.y.z` property of the API body. It can add a chain of functions (applied from left to right), in the form of `$f1.f2(body)`. Supported functions include: `escape` (URL path escape, by default applied), `unescape` (URL path unescape), `query_escape` (URL query escape), `query_unescape` (URL query unescape), `base` (filepath base), `url_path` (path segment of a URL), `trim_path` (trim `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#delete_header Resource#delete_header}
  */
  readonly deleteHeader?: { [key: string]: string };
  /**
  * The method used to delete the resource. Possible values are `DELETE`, `POST`, `PUT` and `PATCH`. This overrides the `delete_method` set in the provider block (defaults to DELETE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#delete_method Resource#delete_method}
  */
  readonly deleteMethod?: string;
  /**
  * The API path used to delete the resource. The `id` is used instead if `delete_path` is absent. This can be a string literal, or combined by following params: path param: `$(path)` expanded to `path`, body param: `$(body.x.y.z)` expands to the `x.y.z` property of the API body. Especially for the body param, it can add a chain of functions (applied from left to right), in the form of `$f1.f2(body)`. Supported functions include: `escape` (URL path escape, by default applied), `unescape` (URL path unescape), `query_escape` (URL query escape), `query_unescape` (URL query unescape), `base` (filepath base), `url_path` (path segment of a URL), `trim_path` (trim `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#delete_path Resource#delete_path}
  */
  readonly deletePath?: string;
  /**
  * The query parameters that are applied to each delete request. This overrides the `query` set in the resource block. The query value can be a string literal, or combined by the body param: `$(body.x.y.z)` that expands to the `x.y.z` property of the API body. It can add a chain of functions (applied from left to right), in the form of `$f1.f2(body)`. Supported functions include: `escape` (URL path escape, by default applied), `unescape` (URL path unescape), `query_escape` (URL query escape), `query_unescape` (URL query unescape), `base` (filepath base), `url_path` (path segment of a URL), `trim_path` (trim `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#delete_query Resource#delete_query}
  */
  readonly deleteQuery?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The ephemeral (write-only) properties of the resource. This will be merge-patched to the `body` to construct the actual request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#ephemeral_body Resource#ephemeral_body}
  */
  readonly ephemeralBody?: { [key: string]: any };
  /**
  * A set of `body` attribute paths (in [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)) whose value once changed, will trigger a replace of this resource. Note this only take effects when the `body` is a unknown before apply. Technically, we do a JSON merge patch and check whether the attribute path appear in the merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#force_new_attrs Resource#force_new_attrs}
  */
  readonly forceNewAttrs?: string[];
  /**
  * The header parameters that are applied to each request. This overrides the `header` set in the provider block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#header Resource#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * Whether to use a JSON Merge Patch as the request body in the PATCH update? This is only effective when `update_method` is set to `PATCH`. This overrides the `merge_patch_disabled` set in the provider block (defaults to `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#merge_patch_disabled Resource#merge_patch_disabled}
  */
  readonly mergePatchDisabled?: boolean | cdktf.IResolvable;
  /**
  * A set of `output` attribute paths (in [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)) that will be exported in the `output`. If this is not specified, all attributes will be exported by `output`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#output_attrs Resource#output_attrs}
  */
  readonly outputAttrs?: string[];
  /**
  * The path used to create the resource, relative to the `base_url` of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#path Resource#path}
  */
  readonly path: string;
  /**
  * The polling option for the "Create" operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#poll_create Resource#poll_create}
  */
  readonly pollCreate?: ResourcePollCreate;
  /**
  * The polling option for the "Delete" operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#poll_delete Resource#poll_delete}
  */
  readonly pollDelete?: ResourcePollDelete;
  /**
  * The polling option for the "Update" operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#poll_update Resource#poll_update}
  */
  readonly pollUpdate?: ResourcePollUpdate;
  /**
  * An array of prechecks that need to pass prior to the "Create" operation. Exactly one of `mutex` or `api` should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#precheck_create Resource#precheck_create}
  */
  readonly precheckCreate?: ResourcePrecheckCreate[] | cdktf.IResolvable;
  /**
  * An array of prechecks that need to pass prior to the "Delete" operation. Exactly one of `mutex` or `api` should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#precheck_delete Resource#precheck_delete}
  */
  readonly precheckDelete?: ResourcePrecheckDelete[] | cdktf.IResolvable;
  /**
  * An array of prechecks that need to pass prior to the "Update" operation. Exactly one of `mutex` or `api` should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#precheck_update Resource#precheck_update}
  */
  readonly precheckUpdate?: ResourcePrecheckUpdate[] | cdktf.IResolvable;
  /**
  * The query parameters that are applied to each request. This overrides the `query` set in the provider block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#query Resource#query}
  */
  readonly query?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The header parameters that are applied to each read request. This overrides the `header` set in the resource block. The header value can be a string literal, or combined by the body param: `$(body.x.y.z)` that expands to the `x.y.z` property of the API body. It can add a chain of functions (applied from left to right), in the form of `$f1.f2(body)`. Supported functions include: `escape` (URL path escape, by default applied), `unescape` (URL path unescape), `query_escape` (URL query escape), `query_unescape` (URL query unescape), `base` (filepath base), `url_path` (path segment of a URL), `trim_path` (trim `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#read_header Resource#read_header}
  */
  readonly readHeader?: { [key: string]: string };
  /**
  * The API path used to read the resource, which is used as the `id`. The `path` is used as the `id` instead if `read_path` is absent. This can be a string literal, or combined by following params: path param: `$(path)` expanded to `path`, body param: `$(body.x.y.z)` expands to the `x.y.z` property of the API body. Especially for the body param, it can add a chain of functions (applied from left to right), in the form of `$f1.f2(body)`. Supported functions include: `escape` (URL path escape, by default applied), `unescape` (URL path unescape), `query_escape` (URL query escape), `query_unescape` (URL query unescape), `base` (filepath base), `url_path` (path segment of a URL), `trim_path` (trim `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#read_path Resource#read_path}
  */
  readonly readPath?: string;
  /**
  * The query parameters that are applied to each read request. This overrides the `query` set in the resource block. The query value can be a string literal, or combined by the body param: `$(body.x.y.z)` that expands to the `x.y.z` property of the API body. It can add a chain of functions (applied from left to right), in the form of `$f1.f2(body)`. Supported functions include: `escape` (URL path escape, by default applied), `unescape` (URL path unescape), `query_escape` (URL query escape), `query_unescape` (URL query unescape), `base` (filepath base), `url_path` (path segment of a URL), `trim_path` (trim `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#read_query Resource#read_query}
  */
  readonly readQuery?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The raw template for transforming the response of reading (after selector). It can contain `$(body.x.y.z)` parameter that reference property from the response. This is only used to transform the read response to the same struct as the `body`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#read_response_template Resource#read_response_template}
  */
  readonly readResponseTemplate?: string;
  /**
  * A selector expression in [gjson query syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md#queries), that is used when read returns a collection of resources, to select exactly one member resource of from it. This can be a string literal, or combined by the body param: `$(body.x.y.z)` that expands to the `x.y.z` property of the API body. It can add a chain of functions (applied from left to right), in the form of `$f1.f2(body)`. Supported functions include: `escape` (URL path escape, by default applied), `unescape` (URL path unescape), `query_escape` (URL query escape), `query_unescape` (URL query unescape), `base` (filepath base), `url_path` (path segment of a URL), `trim_path` (trim `path`). By default, the whole response body is used as the body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#read_selector Resource#read_selector}
  */
  readonly readSelector?: string;
  /**
  * The body patches for update only. Any change here won't cause a update API call by its own, only changes from `body` does. Note that this is almost only useful for APIs that require *after-create* attribute for an update (e.g. the resource ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#update_body_patches Resource#update_body_patches}
  */
  readonly updateBodyPatches?: ResourceUpdateBodyPatches[] | cdktf.IResolvable;
  /**
  * The header parameters that are applied to each update request. This overrides the `header` set in the resource block. The header value can be a string literal, or combined by the body param: `$(body.x.y.z)` that expands to the `x.y.z` property of the API body. It can add a chain of functions (applied from left to right), in the form of `$f1.f2(body)`. Supported functions include: `escape` (URL path escape, by default applied), `unescape` (URL path unescape), `query_escape` (URL query escape), `query_unescape` (URL query unescape), `base` (filepath base), `url_path` (path segment of a URL), `trim_path` (trim `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#update_header Resource#update_header}
  */
  readonly updateHeader?: { [key: string]: string };
  /**
  * The method used to update the resource. Possible values are `PUT`, `POST`, and `PATCH`. This overrides the `update_method` set in the provider block (defaults to PUT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#update_method Resource#update_method}
  */
  readonly updateMethod?: string;
  /**
  * The API path used to update the resource. The `id` is used instead if `update_path` is absent. This can be a string literal, or combined by following params: path param: `$(path)` expanded to `path`, body param: `$(body.x.y.z)` expands to the `x.y.z` property of the API body. Especially for the body param, it can add a chain of functions (applied from left to right), in the form of `$f1.f2(body)`. Supported functions include: `escape` (URL path escape, by default applied), `unescape` (URL path unescape), `query_escape` (URL query escape), `query_unescape` (URL query unescape), `base` (filepath base), `url_path` (path segment of a URL), `trim_path` (trim `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#update_path Resource#update_path}
  */
  readonly updatePath?: string;
  /**
  * The query parameters that are applied to each update request. This overrides the `query` set in the resource block. The query value can be a string literal, or combined by the body param: `$(body.x.y.z)` that expands to the `x.y.z` property of the API body. It can add a chain of functions (applied from left to right), in the form of `$f1.f2(body)`. Supported functions include: `escape` (URL path escape, by default applied), `unescape` (URL path unescape), `query_escape` (URL query escape), `query_unescape` (URL query unescape), `base` (filepath base), `url_path` (path segment of a URL), `trim_path` (trim `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#update_query Resource#update_query}
  */
  readonly updateQuery?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A list of paths (in [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)) to the attributes that are only settable, but won't be read in GET response. Prefer to use `ephemeral_body`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#write_only_attrs Resource#write_only_attrs}
  */
  readonly writeOnlyAttrs?: string[];
}
export interface ResourcePollCreateStatus {
  /**
  * The expected status sentinels for pending status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#pending Resource#pending}
  */
  readonly pending?: string[];
  /**
  * The expected status sentinel for suceess status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#success Resource#success}
  */
  readonly success: string;
}

export function resourcePollCreateStatusToTerraform(struct?: ResourcePollCreateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pending),
    success: cdktf.stringToTerraform(struct!.success),
  }
}


export function resourcePollCreateStatusToHclTerraform(struct?: ResourcePollCreateStatus | cdktf.IResolvable): any {
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

export class ResourcePollCreateStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourcePollCreateStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourcePollCreateStatus | cdktf.IResolvable | undefined) {
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
export interface ResourcePollCreate {
  /**
  * The interval between two pollings if there is no `Retry-After` in the response header, in second. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#default_delay_sec Resource#default_delay_sec}
  */
  readonly defaultDelaySec?: number;
  /**
  * The header parameters. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#header Resource#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The expected status sentinels for each polling state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#status Resource#status}
  */
  readonly status: ResourcePollCreateStatus;
  /**
  * Specifies how to discover the status property. The format is either `code` or `scope.path`, where `scope` can be either `header` or `body`, and the `path` is using the [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md). The `path` can contain `$(body.x.y.z)` parameter that reference property from either the response body (for `Create`, after selector), or `state.output` (for `Read`/`Update`/`Delete`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#status_locator Resource#status_locator}
  */
  readonly statusLocator: string;
  /**
  * Specifies how to discover the polling url. The format can be one of `header.path` (use the property at `path` in response header), `body.path` (use the property at `path` in response body) or `exact.value` (use the exact `value`). When absent, the current operation's URL is used for polling, execpt `Create` where it fallbacks to use the resource id as the polling URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#url_locator Resource#url_locator}
  */
  readonly urlLocator?: string;
}

export function resourcePollCreateToTerraform(struct?: ResourcePollCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_delay_sec: cdktf.numberToTerraform(struct!.defaultDelaySec),
    header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.header),
    status: resourcePollCreateStatusToTerraform(struct!.status),
    status_locator: cdktf.stringToTerraform(struct!.statusLocator),
    url_locator: cdktf.stringToTerraform(struct!.urlLocator),
  }
}


export function resourcePollCreateToHclTerraform(struct?: ResourcePollCreate | cdktf.IResolvable): any {
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
    status: {
      value: resourcePollCreateStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourcePollCreateStatus",
    },
    status_locator: {
      value: cdktf.stringToHclTerraform(struct!.statusLocator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_locator: {
      value: cdktf.stringToHclTerraform(struct!.urlLocator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePollCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourcePollCreate | cdktf.IResolvable | undefined {
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
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    if (this._statusLocator !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusLocator = this._statusLocator;
    }
    if (this._urlLocator !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlLocator = this._urlLocator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePollCreate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultDelaySec = undefined;
      this._header = undefined;
      this._status.internalValue = undefined;
      this._statusLocator = undefined;
      this._urlLocator = undefined;
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
      this._status.internalValue = value.status;
      this._statusLocator = value.statusLocator;
      this._urlLocator = value.urlLocator;
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

  // status - computed: false, optional: false, required: true
  private _status = new ResourcePollCreateStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: ResourcePollCreateStatus) {
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

  // url_locator - computed: false, optional: true, required: false
  private _urlLocator?: string; 
  public get urlLocator() {
    return this.getStringAttribute('url_locator');
  }
  public set urlLocator(value: string) {
    this._urlLocator = value;
  }
  public resetUrlLocator() {
    this._urlLocator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlLocatorInput() {
    return this._urlLocator;
  }
}
export interface ResourcePollDeleteStatus {
  /**
  * The expected status sentinels for pending status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#pending Resource#pending}
  */
  readonly pending?: string[];
  /**
  * The expected status sentinel for suceess status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#success Resource#success}
  */
  readonly success: string;
}

export function resourcePollDeleteStatusToTerraform(struct?: ResourcePollDeleteStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pending),
    success: cdktf.stringToTerraform(struct!.success),
  }
}


export function resourcePollDeleteStatusToHclTerraform(struct?: ResourcePollDeleteStatus | cdktf.IResolvable): any {
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

export class ResourcePollDeleteStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourcePollDeleteStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourcePollDeleteStatus | cdktf.IResolvable | undefined) {
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
export interface ResourcePollDelete {
  /**
  * The interval between two pollings if there is no `Retry-After` in the response header, in second. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#default_delay_sec Resource#default_delay_sec}
  */
  readonly defaultDelaySec?: number;
  /**
  * The header parameters. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#header Resource#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The expected status sentinels for each polling state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#status Resource#status}
  */
  readonly status: ResourcePollDeleteStatus;
  /**
  * Specifies how to discover the status property. The format is either `code` or `scope.path`, where `scope` can be either `header` or `body`, and the `path` is using the [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md). The `path` can contain `$(body.x.y.z)` parameter that reference property from either the response body (for `Create`, after selector), or `state.output` (for `Read`/`Update`/`Delete`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#status_locator Resource#status_locator}
  */
  readonly statusLocator: string;
  /**
  * Specifies how to discover the polling url. The format can be one of `header.path` (use the property at `path` in response header), `body.path` (use the property at `path` in response body) or `exact.value` (use the exact `value`). When absent, the current operation's URL is used for polling, execpt `Create` where it fallbacks to use the resource id as the polling URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#url_locator Resource#url_locator}
  */
  readonly urlLocator?: string;
}

export function resourcePollDeleteToTerraform(struct?: ResourcePollDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_delay_sec: cdktf.numberToTerraform(struct!.defaultDelaySec),
    header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.header),
    status: resourcePollDeleteStatusToTerraform(struct!.status),
    status_locator: cdktf.stringToTerraform(struct!.statusLocator),
    url_locator: cdktf.stringToTerraform(struct!.urlLocator),
  }
}


export function resourcePollDeleteToHclTerraform(struct?: ResourcePollDelete | cdktf.IResolvable): any {
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
    status: {
      value: resourcePollDeleteStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourcePollDeleteStatus",
    },
    status_locator: {
      value: cdktf.stringToHclTerraform(struct!.statusLocator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_locator: {
      value: cdktf.stringToHclTerraform(struct!.urlLocator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePollDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourcePollDelete | cdktf.IResolvable | undefined {
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
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    if (this._statusLocator !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusLocator = this._statusLocator;
    }
    if (this._urlLocator !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlLocator = this._urlLocator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePollDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultDelaySec = undefined;
      this._header = undefined;
      this._status.internalValue = undefined;
      this._statusLocator = undefined;
      this._urlLocator = undefined;
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
      this._status.internalValue = value.status;
      this._statusLocator = value.statusLocator;
      this._urlLocator = value.urlLocator;
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

  // status - computed: false, optional: false, required: true
  private _status = new ResourcePollDeleteStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: ResourcePollDeleteStatus) {
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

  // url_locator - computed: false, optional: true, required: false
  private _urlLocator?: string; 
  public get urlLocator() {
    return this.getStringAttribute('url_locator');
  }
  public set urlLocator(value: string) {
    this._urlLocator = value;
  }
  public resetUrlLocator() {
    this._urlLocator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlLocatorInput() {
    return this._urlLocator;
  }
}
export interface ResourcePollUpdateStatus {
  /**
  * The expected status sentinels for pending status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#pending Resource#pending}
  */
  readonly pending?: string[];
  /**
  * The expected status sentinel for suceess status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#success Resource#success}
  */
  readonly success: string;
}

export function resourcePollUpdateStatusToTerraform(struct?: ResourcePollUpdateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pending),
    success: cdktf.stringToTerraform(struct!.success),
  }
}


export function resourcePollUpdateStatusToHclTerraform(struct?: ResourcePollUpdateStatus | cdktf.IResolvable): any {
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

export class ResourcePollUpdateStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourcePollUpdateStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourcePollUpdateStatus | cdktf.IResolvable | undefined) {
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
export interface ResourcePollUpdate {
  /**
  * The interval between two pollings if there is no `Retry-After` in the response header, in second. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#default_delay_sec Resource#default_delay_sec}
  */
  readonly defaultDelaySec?: number;
  /**
  * The header parameters. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#header Resource#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The expected status sentinels for each polling state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#status Resource#status}
  */
  readonly status: ResourcePollUpdateStatus;
  /**
  * Specifies how to discover the status property. The format is either `code` or `scope.path`, where `scope` can be either `header` or `body`, and the `path` is using the [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md). The `path` can contain `$(body.x.y.z)` parameter that reference property from either the response body (for `Create`, after selector), or `state.output` (for `Read`/`Update`/`Delete`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#status_locator Resource#status_locator}
  */
  readonly statusLocator: string;
  /**
  * Specifies how to discover the polling url. The format can be one of `header.path` (use the property at `path` in response header), `body.path` (use the property at `path` in response body) or `exact.value` (use the exact `value`). When absent, the current operation's URL is used for polling, execpt `Create` where it fallbacks to use the resource id as the polling URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#url_locator Resource#url_locator}
  */
  readonly urlLocator?: string;
}

export function resourcePollUpdateToTerraform(struct?: ResourcePollUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_delay_sec: cdktf.numberToTerraform(struct!.defaultDelaySec),
    header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.header),
    status: resourcePollUpdateStatusToTerraform(struct!.status),
    status_locator: cdktf.stringToTerraform(struct!.statusLocator),
    url_locator: cdktf.stringToTerraform(struct!.urlLocator),
  }
}


export function resourcePollUpdateToHclTerraform(struct?: ResourcePollUpdate | cdktf.IResolvable): any {
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
    status: {
      value: resourcePollUpdateStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourcePollUpdateStatus",
    },
    status_locator: {
      value: cdktf.stringToHclTerraform(struct!.statusLocator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_locator: {
      value: cdktf.stringToHclTerraform(struct!.urlLocator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePollUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourcePollUpdate | cdktf.IResolvable | undefined {
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
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    if (this._statusLocator !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusLocator = this._statusLocator;
    }
    if (this._urlLocator !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlLocator = this._urlLocator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePollUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultDelaySec = undefined;
      this._header = undefined;
      this._status.internalValue = undefined;
      this._statusLocator = undefined;
      this._urlLocator = undefined;
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
      this._status.internalValue = value.status;
      this._statusLocator = value.statusLocator;
      this._urlLocator = value.urlLocator;
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

  // status - computed: false, optional: false, required: true
  private _status = new ResourcePollUpdateStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: ResourcePollUpdateStatus) {
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

  // url_locator - computed: false, optional: true, required: false
  private _urlLocator?: string; 
  public get urlLocator() {
    return this.getStringAttribute('url_locator');
  }
  public set urlLocator(value: string) {
    this._urlLocator = value;
  }
  public resetUrlLocator() {
    this._urlLocator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlLocatorInput() {
    return this._urlLocator;
  }
}
export interface ResourcePrecheckCreateApiStatus {
  /**
  * The expected status sentinels for pending status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#pending Resource#pending}
  */
  readonly pending?: string[];
  /**
  * The expected status sentinel for suceess status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#success Resource#success}
  */
  readonly success: string;
}

export function resourcePrecheckCreateApiStatusToTerraform(struct?: ResourcePrecheckCreateApiStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pending),
    success: cdktf.stringToTerraform(struct!.success),
  }
}


export function resourcePrecheckCreateApiStatusToHclTerraform(struct?: ResourcePrecheckCreateApiStatus | cdktf.IResolvable): any {
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

export class ResourcePrecheckCreateApiStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourcePrecheckCreateApiStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourcePrecheckCreateApiStatus | cdktf.IResolvable | undefined) {
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
export interface ResourcePrecheckCreateApi {
  /**
  * The interval between two pollings if there is no `Retry-After` in the response header, in second. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#default_delay_sec Resource#default_delay_sec}
  */
  readonly defaultDelaySec?: number;
  /**
  * The header parameters. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#header Resource#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The path used to query readiness, relative to the `base_url` of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#path Resource#path}
  */
  readonly path: string;
  /**
  * The query parameters. This overrides the `query` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#query Resource#query}
  */
  readonly query?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The expected status sentinels for each polling state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#status Resource#status}
  */
  readonly status: ResourcePrecheckCreateApiStatus;
  /**
  * Specifies how to discover the status property. The format is either `code` or `scope.path`, where `scope` can be either `header` or `body`, and the `path` is using the [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#status_locator Resource#status_locator}
  */
  readonly statusLocator: string;
}

export function resourcePrecheckCreateApiToTerraform(struct?: ResourcePrecheckCreateApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_delay_sec: cdktf.numberToTerraform(struct!.defaultDelaySec),
    header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.header),
    path: cdktf.stringToTerraform(struct!.path),
    query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.query),
    status: resourcePrecheckCreateApiStatusToTerraform(struct!.status),
    status_locator: cdktf.stringToTerraform(struct!.statusLocator),
  }
}


export function resourcePrecheckCreateApiToHclTerraform(struct?: ResourcePrecheckCreateApi | cdktf.IResolvable): any {
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
      value: resourcePrecheckCreateApiStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourcePrecheckCreateApiStatus",
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

export class ResourcePrecheckCreateApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourcePrecheckCreateApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourcePrecheckCreateApi | cdktf.IResolvable | undefined) {
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
  private _status = new ResourcePrecheckCreateApiStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: ResourcePrecheckCreateApiStatus) {
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
export interface ResourcePrecheckCreate {
  /**
  * Keeps waiting until the specified API meets the success status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#api Resource#api}
  */
  readonly api?: ResourcePrecheckCreateApi;
  /**
  * The name of the mutex, which implies the resource will keep waiting until this mutex is held
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#mutex Resource#mutex}
  */
  readonly mutex?: string;
}

export function resourcePrecheckCreateToTerraform(struct?: ResourcePrecheckCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: resourcePrecheckCreateApiToTerraform(struct!.api),
    mutex: cdktf.stringToTerraform(struct!.mutex),
  }
}


export function resourcePrecheckCreateToHclTerraform(struct?: ResourcePrecheckCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: resourcePrecheckCreateApiToHclTerraform(struct!.api),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourcePrecheckCreateApi",
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

export class ResourcePrecheckCreateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourcePrecheckCreate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourcePrecheckCreate | cdktf.IResolvable | undefined) {
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
  private _api = new ResourcePrecheckCreateApiOutputReference(this, "api");
  public get api() {
    return this._api;
  }
  public putApi(value: ResourcePrecheckCreateApi) {
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

export class ResourcePrecheckCreateList extends cdktf.ComplexList {
  public internalValue? : ResourcePrecheckCreate[] | cdktf.IResolvable

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
  public get(index: number): ResourcePrecheckCreateOutputReference {
    return new ResourcePrecheckCreateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourcePrecheckDeleteApiStatus {
  /**
  * The expected status sentinels for pending status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#pending Resource#pending}
  */
  readonly pending?: string[];
  /**
  * The expected status sentinel for suceess status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#success Resource#success}
  */
  readonly success: string;
}

export function resourcePrecheckDeleteApiStatusToTerraform(struct?: ResourcePrecheckDeleteApiStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pending),
    success: cdktf.stringToTerraform(struct!.success),
  }
}


export function resourcePrecheckDeleteApiStatusToHclTerraform(struct?: ResourcePrecheckDeleteApiStatus | cdktf.IResolvable): any {
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

export class ResourcePrecheckDeleteApiStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourcePrecheckDeleteApiStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourcePrecheckDeleteApiStatus | cdktf.IResolvable | undefined) {
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
export interface ResourcePrecheckDeleteApi {
  /**
  * The interval between two pollings if there is no `Retry-After` in the response header, in second. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#default_delay_sec Resource#default_delay_sec}
  */
  readonly defaultDelaySec?: number;
  /**
  * The header parameters. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#header Resource#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The path used to query readiness, relative to the `base_url` of the provider. By default, the `id` of this resource is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#path Resource#path}
  */
  readonly path?: string;
  /**
  * The query parameters. This overrides the `query` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#query Resource#query}
  */
  readonly query?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The expected status sentinels for each polling state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#status Resource#status}
  */
  readonly status: ResourcePrecheckDeleteApiStatus;
  /**
  * Specifies how to discover the status property. The format is either `code` or `scope.path`, where `scope` can be either `header` or `body`, and the `path` is using the [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md). The `path` can contain `$(body.x.y.z)` parameter that reference property from the `state.output`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#status_locator Resource#status_locator}
  */
  readonly statusLocator: string;
}

export function resourcePrecheckDeleteApiToTerraform(struct?: ResourcePrecheckDeleteApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_delay_sec: cdktf.numberToTerraform(struct!.defaultDelaySec),
    header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.header),
    path: cdktf.stringToTerraform(struct!.path),
    query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.query),
    status: resourcePrecheckDeleteApiStatusToTerraform(struct!.status),
    status_locator: cdktf.stringToTerraform(struct!.statusLocator),
  }
}


export function resourcePrecheckDeleteApiToHclTerraform(struct?: ResourcePrecheckDeleteApi | cdktf.IResolvable): any {
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
      value: resourcePrecheckDeleteApiStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourcePrecheckDeleteApiStatus",
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

export class ResourcePrecheckDeleteApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourcePrecheckDeleteApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourcePrecheckDeleteApi | cdktf.IResolvable | undefined) {
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
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
  private _status = new ResourcePrecheckDeleteApiStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: ResourcePrecheckDeleteApiStatus) {
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
export interface ResourcePrecheckDelete {
  /**
  * Keeps waiting until the specified API meets the success status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#api Resource#api}
  */
  readonly api?: ResourcePrecheckDeleteApi;
  /**
  * The name of the mutex, which implies the resource will keep waiting until this mutex is held
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#mutex Resource#mutex}
  */
  readonly mutex?: string;
}

export function resourcePrecheckDeleteToTerraform(struct?: ResourcePrecheckDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: resourcePrecheckDeleteApiToTerraform(struct!.api),
    mutex: cdktf.stringToTerraform(struct!.mutex),
  }
}


export function resourcePrecheckDeleteToHclTerraform(struct?: ResourcePrecheckDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: resourcePrecheckDeleteApiToHclTerraform(struct!.api),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourcePrecheckDeleteApi",
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

export class ResourcePrecheckDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourcePrecheckDelete | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourcePrecheckDelete | cdktf.IResolvable | undefined) {
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
  private _api = new ResourcePrecheckDeleteApiOutputReference(this, "api");
  public get api() {
    return this._api;
  }
  public putApi(value: ResourcePrecheckDeleteApi) {
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

export class ResourcePrecheckDeleteList extends cdktf.ComplexList {
  public internalValue? : ResourcePrecheckDelete[] | cdktf.IResolvable

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
  public get(index: number): ResourcePrecheckDeleteOutputReference {
    return new ResourcePrecheckDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourcePrecheckUpdateApiStatus {
  /**
  * The expected status sentinels for pending status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#pending Resource#pending}
  */
  readonly pending?: string[];
  /**
  * The expected status sentinel for suceess status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#success Resource#success}
  */
  readonly success: string;
}

export function resourcePrecheckUpdateApiStatusToTerraform(struct?: ResourcePrecheckUpdateApiStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pending),
    success: cdktf.stringToTerraform(struct!.success),
  }
}


export function resourcePrecheckUpdateApiStatusToHclTerraform(struct?: ResourcePrecheckUpdateApiStatus | cdktf.IResolvable): any {
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

export class ResourcePrecheckUpdateApiStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourcePrecheckUpdateApiStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourcePrecheckUpdateApiStatus | cdktf.IResolvable | undefined) {
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
export interface ResourcePrecheckUpdateApi {
  /**
  * The interval between two pollings if there is no `Retry-After` in the response header, in second. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#default_delay_sec Resource#default_delay_sec}
  */
  readonly defaultDelaySec?: number;
  /**
  * The header parameters. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#header Resource#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The path used to query readiness, relative to the `base_url` of the provider. By default, the `id` of this resource is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#path Resource#path}
  */
  readonly path?: string;
  /**
  * The query parameters. This overrides the `query` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#query Resource#query}
  */
  readonly query?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The expected status sentinels for each polling state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#status Resource#status}
  */
  readonly status: ResourcePrecheckUpdateApiStatus;
  /**
  * Specifies how to discover the status property. The format is either `code` or `scope.path`, where `scope` can be either `header` or `body`, and the `path` is using the [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md). The `path` can contain `$(body.x.y.z)` parameter that reference property from the `state.output`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#status_locator Resource#status_locator}
  */
  readonly statusLocator: string;
}

export function resourcePrecheckUpdateApiToTerraform(struct?: ResourcePrecheckUpdateApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_delay_sec: cdktf.numberToTerraform(struct!.defaultDelaySec),
    header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.header),
    path: cdktf.stringToTerraform(struct!.path),
    query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.query),
    status: resourcePrecheckUpdateApiStatusToTerraform(struct!.status),
    status_locator: cdktf.stringToTerraform(struct!.statusLocator),
  }
}


export function resourcePrecheckUpdateApiToHclTerraform(struct?: ResourcePrecheckUpdateApi | cdktf.IResolvable): any {
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
      value: resourcePrecheckUpdateApiStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourcePrecheckUpdateApiStatus",
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

export class ResourcePrecheckUpdateApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourcePrecheckUpdateApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourcePrecheckUpdateApi | cdktf.IResolvable | undefined) {
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
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
  private _status = new ResourcePrecheckUpdateApiStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: ResourcePrecheckUpdateApiStatus) {
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
export interface ResourcePrecheckUpdate {
  /**
  * Keeps waiting until the specified API meets the success status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#api Resource#api}
  */
  readonly api?: ResourcePrecheckUpdateApi;
  /**
  * The name of the mutex, which implies the resource will keep waiting until this mutex is held
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#mutex Resource#mutex}
  */
  readonly mutex?: string;
}

export function resourcePrecheckUpdateToTerraform(struct?: ResourcePrecheckUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: resourcePrecheckUpdateApiToTerraform(struct!.api),
    mutex: cdktf.stringToTerraform(struct!.mutex),
  }
}


export function resourcePrecheckUpdateToHclTerraform(struct?: ResourcePrecheckUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: resourcePrecheckUpdateApiToHclTerraform(struct!.api),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourcePrecheckUpdateApi",
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

export class ResourcePrecheckUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourcePrecheckUpdate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourcePrecheckUpdate | cdktf.IResolvable | undefined) {
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
  private _api = new ResourcePrecheckUpdateApiOutputReference(this, "api");
  public get api() {
    return this._api;
  }
  public putApi(value: ResourcePrecheckUpdateApi) {
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

export class ResourcePrecheckUpdateList extends cdktf.ComplexList {
  public internalValue? : ResourcePrecheckUpdate[] | cdktf.IResolvable

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
  public get(index: number): ResourcePrecheckUpdateOutputReference {
    return new ResourcePrecheckUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceUpdateBodyPatches {
  /**
  * The path (in [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)) to the attribute to [patch](https://github.com/tidwall/sjson?tab=readme-ov-file#set-a-value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#path Resource#path}
  */
  readonly path: string;
  /**
  * The raw json used as the patch value. It can contain `$(body.x.y.z)` parameter that reference property from the `state.output`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#raw_json Resource#raw_json}
  */
  readonly rawJson: string;
}

export function resourceUpdateBodyPatchesToTerraform(struct?: ResourceUpdateBodyPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    raw_json: cdktf.stringToTerraform(struct!.rawJson),
  }
}


export function resourceUpdateBodyPatchesToHclTerraform(struct?: ResourceUpdateBodyPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_json: {
      value: cdktf.stringToHclTerraform(struct!.rawJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceUpdateBodyPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceUpdateBodyPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._rawJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawJson = this._rawJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceUpdateBodyPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._rawJson = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._rawJson = value.rawJson;
    }
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

  // raw_json - computed: false, optional: false, required: true
  private _rawJson?: string; 
  public get rawJson() {
    return this.getStringAttribute('raw_json');
  }
  public set rawJson(value: string) {
    this._rawJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rawJsonInput() {
    return this._rawJson;
  }
}

export class ResourceUpdateBodyPatchesList extends cdktf.ComplexList {
  public internalValue? : ResourceUpdateBodyPatches[] | cdktf.IResolvable

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
  public get(index: number): ResourceUpdateBodyPatchesOutputReference {
    return new ResourceUpdateBodyPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource restful_resource}
*/
export class Resource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "restful_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Resource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resource to import
  * @param importFromId The id of the existing Resource that should be imported. Refer to the {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "restful_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magodo/restful/0.23.0/docs/resources/resource restful_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'restful_resource',
      terraformGeneratorMetadata: {
        providerName: 'restful',
        providerVersion: '0.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._checkExistance = config.checkExistance;
    this._createHeader = config.createHeader;
    this._createMethod = config.createMethod;
    this._createQuery = config.createQuery;
    this._createSelector = config.createSelector;
    this._deleteBody = config.deleteBody;
    this._deleteBodyRaw = config.deleteBodyRaw;
    this._deleteHeader = config.deleteHeader;
    this._deleteMethod = config.deleteMethod;
    this._deletePath = config.deletePath;
    this._deleteQuery = config.deleteQuery;
    this._ephemeralBody = config.ephemeralBody;
    this._forceNewAttrs = config.forceNewAttrs;
    this._header = config.header;
    this._mergePatchDisabled = config.mergePatchDisabled;
    this._outputAttrs = config.outputAttrs;
    this._path = config.path;
    this._pollCreate.internalValue = config.pollCreate;
    this._pollDelete.internalValue = config.pollDelete;
    this._pollUpdate.internalValue = config.pollUpdate;
    this._precheckCreate.internalValue = config.precheckCreate;
    this._precheckDelete.internalValue = config.precheckDelete;
    this._precheckUpdate.internalValue = config.precheckUpdate;
    this._query = config.query;
    this._readHeader = config.readHeader;
    this._readPath = config.readPath;
    this._readQuery = config.readQuery;
    this._readResponseTemplate = config.readResponseTemplate;
    this._readSelector = config.readSelector;
    this._updateBodyPatches.internalValue = config.updateBodyPatches;
    this._updateHeader = config.updateHeader;
    this._updateMethod = config.updateMethod;
    this._updatePath = config.updatePath;
    this._updateQuery = config.updateQuery;
    this._writeOnlyAttrs = config.writeOnlyAttrs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: { [key: string]: any }; 
  public get body() {
    return this.getAnyMapAttribute('body');
  }
  public set body(value: { [key: string]: any }) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // check_existance - computed: false, optional: true, required: false
  private _checkExistance?: boolean | cdktf.IResolvable; 
  public get checkExistance() {
    return this.getBooleanAttribute('check_existance');
  }
  public set checkExistance(value: boolean | cdktf.IResolvable) {
    this._checkExistance = value;
  }
  public resetCheckExistance() {
    this._checkExistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkExistanceInput() {
    return this._checkExistance;
  }

  // create_header - computed: false, optional: true, required: false
  private _createHeader?: { [key: string]: string }; 
  public get createHeader() {
    return this.getStringMapAttribute('create_header');
  }
  public set createHeader(value: { [key: string]: string }) {
    this._createHeader = value;
  }
  public resetCreateHeader() {
    this._createHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createHeaderInput() {
    return this._createHeader;
  }

  // create_method - computed: false, optional: true, required: false
  private _createMethod?: string; 
  public get createMethod() {
    return this.getStringAttribute('create_method');
  }
  public set createMethod(value: string) {
    this._createMethod = value;
  }
  public resetCreateMethod() {
    this._createMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMethodInput() {
    return this._createMethod;
  }

  // create_query - computed: false, optional: true, required: false
  private _createQuery?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get createQuery() {
    return this.interpolationForAttribute('create_query');
  }
  public set createQuery(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._createQuery = value;
  }
  public resetCreateQuery() {
    this._createQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createQueryInput() {
    return this._createQuery;
  }

  // create_selector - computed: false, optional: true, required: false
  private _createSelector?: string; 
  public get createSelector() {
    return this.getStringAttribute('create_selector');
  }
  public set createSelector(value: string) {
    this._createSelector = value;
  }
  public resetCreateSelector() {
    this._createSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSelectorInput() {
    return this._createSelector;
  }

  // delete_body - computed: false, optional: true, required: false
  private _deleteBody?: { [key: string]: any }; 
  public get deleteBody() {
    return this.getAnyMapAttribute('delete_body');
  }
  public set deleteBody(value: { [key: string]: any }) {
    this._deleteBody = value;
  }
  public resetDeleteBody() {
    this._deleteBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBodyInput() {
    return this._deleteBody;
  }

  // delete_body_raw - computed: false, optional: true, required: false
  private _deleteBodyRaw?: string; 
  public get deleteBodyRaw() {
    return this.getStringAttribute('delete_body_raw');
  }
  public set deleteBodyRaw(value: string) {
    this._deleteBodyRaw = value;
  }
  public resetDeleteBodyRaw() {
    this._deleteBodyRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBodyRawInput() {
    return this._deleteBodyRaw;
  }

  // delete_header - computed: false, optional: true, required: false
  private _deleteHeader?: { [key: string]: string }; 
  public get deleteHeader() {
    return this.getStringMapAttribute('delete_header');
  }
  public set deleteHeader(value: { [key: string]: string }) {
    this._deleteHeader = value;
  }
  public resetDeleteHeader() {
    this._deleteHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteHeaderInput() {
    return this._deleteHeader;
  }

  // delete_method - computed: false, optional: true, required: false
  private _deleteMethod?: string; 
  public get deleteMethod() {
    return this.getStringAttribute('delete_method');
  }
  public set deleteMethod(value: string) {
    this._deleteMethod = value;
  }
  public resetDeleteMethod() {
    this._deleteMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMethodInput() {
    return this._deleteMethod;
  }

  // delete_path - computed: false, optional: true, required: false
  private _deletePath?: string; 
  public get deletePath() {
    return this.getStringAttribute('delete_path');
  }
  public set deletePath(value: string) {
    this._deletePath = value;
  }
  public resetDeletePath() {
    this._deletePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePathInput() {
    return this._deletePath;
  }

  // delete_query - computed: false, optional: true, required: false
  private _deleteQuery?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get deleteQuery() {
    return this.interpolationForAttribute('delete_query');
  }
  public set deleteQuery(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._deleteQuery = value;
  }
  public resetDeleteQuery() {
    this._deleteQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteQueryInput() {
    return this._deleteQuery;
  }

  // ephemeral_body - computed: false, optional: true, required: false
  private _ephemeralBody?: { [key: string]: any }; 
  public get ephemeralBody() {
    return this.getAnyMapAttribute('ephemeral_body');
  }
  public set ephemeralBody(value: { [key: string]: any }) {
    this._ephemeralBody = value;
  }
  public resetEphemeralBody() {
    this._ephemeralBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralBodyInput() {
    return this._ephemeralBody;
  }

  // force_new_attrs - computed: false, optional: true, required: false
  private _forceNewAttrs?: string[]; 
  public get forceNewAttrs() {
    return cdktf.Fn.tolist(this.getListAttribute('force_new_attrs'));
  }
  public set forceNewAttrs(value: string[]) {
    this._forceNewAttrs = value;
  }
  public resetForceNewAttrs() {
    this._forceNewAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNewAttrsInput() {
    return this._forceNewAttrs;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // merge_patch_disabled - computed: false, optional: true, required: false
  private _mergePatchDisabled?: boolean | cdktf.IResolvable; 
  public get mergePatchDisabled() {
    return this.getBooleanAttribute('merge_patch_disabled');
  }
  public set mergePatchDisabled(value: boolean | cdktf.IResolvable) {
    this._mergePatchDisabled = value;
  }
  public resetMergePatchDisabled() {
    this._mergePatchDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergePatchDisabledInput() {
    return this._mergePatchDisabled;
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

  // poll_create - computed: false, optional: true, required: false
  private _pollCreate = new ResourcePollCreateOutputReference(this, "poll_create");
  public get pollCreate() {
    return this._pollCreate;
  }
  public putPollCreate(value: ResourcePollCreate) {
    this._pollCreate.internalValue = value;
  }
  public resetPollCreate() {
    this._pollCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollCreateInput() {
    return this._pollCreate.internalValue;
  }

  // poll_delete - computed: false, optional: true, required: false
  private _pollDelete = new ResourcePollDeleteOutputReference(this, "poll_delete");
  public get pollDelete() {
    return this._pollDelete;
  }
  public putPollDelete(value: ResourcePollDelete) {
    this._pollDelete.internalValue = value;
  }
  public resetPollDelete() {
    this._pollDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollDeleteInput() {
    return this._pollDelete.internalValue;
  }

  // poll_update - computed: false, optional: true, required: false
  private _pollUpdate = new ResourcePollUpdateOutputReference(this, "poll_update");
  public get pollUpdate() {
    return this._pollUpdate;
  }
  public putPollUpdate(value: ResourcePollUpdate) {
    this._pollUpdate.internalValue = value;
  }
  public resetPollUpdate() {
    this._pollUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollUpdateInput() {
    return this._pollUpdate.internalValue;
  }

  // precheck_create - computed: false, optional: true, required: false
  private _precheckCreate = new ResourcePrecheckCreateList(this, "precheck_create", false);
  public get precheckCreate() {
    return this._precheckCreate;
  }
  public putPrecheckCreate(value: ResourcePrecheckCreate[] | cdktf.IResolvable) {
    this._precheckCreate.internalValue = value;
  }
  public resetPrecheckCreate() {
    this._precheckCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precheckCreateInput() {
    return this._precheckCreate.internalValue;
  }

  // precheck_delete - computed: false, optional: true, required: false
  private _precheckDelete = new ResourcePrecheckDeleteList(this, "precheck_delete", false);
  public get precheckDelete() {
    return this._precheckDelete;
  }
  public putPrecheckDelete(value: ResourcePrecheckDelete[] | cdktf.IResolvable) {
    this._precheckDelete.internalValue = value;
  }
  public resetPrecheckDelete() {
    this._precheckDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precheckDeleteInput() {
    return this._precheckDelete.internalValue;
  }

  // precheck_update - computed: false, optional: true, required: false
  private _precheckUpdate = new ResourcePrecheckUpdateList(this, "precheck_update", false);
  public get precheckUpdate() {
    return this._precheckUpdate;
  }
  public putPrecheckUpdate(value: ResourcePrecheckUpdate[] | cdktf.IResolvable) {
    this._precheckUpdate.internalValue = value;
  }
  public resetPrecheckUpdate() {
    this._precheckUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precheckUpdateInput() {
    return this._precheckUpdate.internalValue;
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

  // read_header - computed: false, optional: true, required: false
  private _readHeader?: { [key: string]: string }; 
  public get readHeader() {
    return this.getStringMapAttribute('read_header');
  }
  public set readHeader(value: { [key: string]: string }) {
    this._readHeader = value;
  }
  public resetReadHeader() {
    this._readHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readHeaderInput() {
    return this._readHeader;
  }

  // read_path - computed: false, optional: true, required: false
  private _readPath?: string; 
  public get readPath() {
    return this.getStringAttribute('read_path');
  }
  public set readPath(value: string) {
    this._readPath = value;
  }
  public resetReadPath() {
    this._readPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readPathInput() {
    return this._readPath;
  }

  // read_query - computed: false, optional: true, required: false
  private _readQuery?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get readQuery() {
    return this.interpolationForAttribute('read_query');
  }
  public set readQuery(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._readQuery = value;
  }
  public resetReadQuery() {
    this._readQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readQueryInput() {
    return this._readQuery;
  }

  // read_response_template - computed: false, optional: true, required: false
  private _readResponseTemplate?: string; 
  public get readResponseTemplate() {
    return this.getStringAttribute('read_response_template');
  }
  public set readResponseTemplate(value: string) {
    this._readResponseTemplate = value;
  }
  public resetReadResponseTemplate() {
    this._readResponseTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readResponseTemplateInput() {
    return this._readResponseTemplate;
  }

  // read_selector - computed: false, optional: true, required: false
  private _readSelector?: string; 
  public get readSelector() {
    return this.getStringAttribute('read_selector');
  }
  public set readSelector(value: string) {
    this._readSelector = value;
  }
  public resetReadSelector() {
    this._readSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readSelectorInput() {
    return this._readSelector;
  }

  // update_body_patches - computed: false, optional: true, required: false
  private _updateBodyPatches = new ResourceUpdateBodyPatchesList(this, "update_body_patches", false);
  public get updateBodyPatches() {
    return this._updateBodyPatches;
  }
  public putUpdateBodyPatches(value: ResourceUpdateBodyPatches[] | cdktf.IResolvable) {
    this._updateBodyPatches.internalValue = value;
  }
  public resetUpdateBodyPatches() {
    this._updateBodyPatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateBodyPatchesInput() {
    return this._updateBodyPatches.internalValue;
  }

  // update_header - computed: false, optional: true, required: false
  private _updateHeader?: { [key: string]: string }; 
  public get updateHeader() {
    return this.getStringMapAttribute('update_header');
  }
  public set updateHeader(value: { [key: string]: string }) {
    this._updateHeader = value;
  }
  public resetUpdateHeader() {
    this._updateHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateHeaderInput() {
    return this._updateHeader;
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

  // update_path - computed: false, optional: true, required: false
  private _updatePath?: string; 
  public get updatePath() {
    return this.getStringAttribute('update_path');
  }
  public set updatePath(value: string) {
    this._updatePath = value;
  }
  public resetUpdatePath() {
    this._updatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePathInput() {
    return this._updatePath;
  }

  // update_query - computed: false, optional: true, required: false
  private _updateQuery?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get updateQuery() {
    return this.interpolationForAttribute('update_query');
  }
  public set updateQuery(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._updateQuery = value;
  }
  public resetUpdateQuery() {
    this._updateQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateQueryInput() {
    return this._updateQuery;
  }

  // write_only_attrs - computed: false, optional: true, required: false
  private _writeOnlyAttrs?: string[]; 
  public get writeOnlyAttrs() {
    return this.getListAttribute('write_only_attrs');
  }
  public set writeOnlyAttrs(value: string[]) {
    this._writeOnlyAttrs = value;
  }
  public resetWriteOnlyAttrs() {
    this._writeOnlyAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOnlyAttrsInput() {
    return this._writeOnlyAttrs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.hashMapper(cdktf.anyToTerraform)(this._body),
      check_existance: cdktf.booleanToTerraform(this._checkExistance),
      create_header: cdktf.hashMapper(cdktf.stringToTerraform)(this._createHeader),
      create_method: cdktf.stringToTerraform(this._createMethod),
      create_query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._createQuery),
      create_selector: cdktf.stringToTerraform(this._createSelector),
      delete_body: cdktf.hashMapper(cdktf.anyToTerraform)(this._deleteBody),
      delete_body_raw: cdktf.stringToTerraform(this._deleteBodyRaw),
      delete_header: cdktf.hashMapper(cdktf.stringToTerraform)(this._deleteHeader),
      delete_method: cdktf.stringToTerraform(this._deleteMethod),
      delete_path: cdktf.stringToTerraform(this._deletePath),
      delete_query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._deleteQuery),
      ephemeral_body: cdktf.hashMapper(cdktf.anyToTerraform)(this._ephemeralBody),
      force_new_attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forceNewAttrs),
      header: cdktf.hashMapper(cdktf.stringToTerraform)(this._header),
      merge_patch_disabled: cdktf.booleanToTerraform(this._mergePatchDisabled),
      output_attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outputAttrs),
      path: cdktf.stringToTerraform(this._path),
      poll_create: resourcePollCreateToTerraform(this._pollCreate.internalValue),
      poll_delete: resourcePollDeleteToTerraform(this._pollDelete.internalValue),
      poll_update: resourcePollUpdateToTerraform(this._pollUpdate.internalValue),
      precheck_create: cdktf.listMapper(resourcePrecheckCreateToTerraform, false)(this._precheckCreate.internalValue),
      precheck_delete: cdktf.listMapper(resourcePrecheckDeleteToTerraform, false)(this._precheckDelete.internalValue),
      precheck_update: cdktf.listMapper(resourcePrecheckUpdateToTerraform, false)(this._precheckUpdate.internalValue),
      query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._query),
      read_header: cdktf.hashMapper(cdktf.stringToTerraform)(this._readHeader),
      read_path: cdktf.stringToTerraform(this._readPath),
      read_query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._readQuery),
      read_response_template: cdktf.stringToTerraform(this._readResponseTemplate),
      read_selector: cdktf.stringToTerraform(this._readSelector),
      update_body_patches: cdktf.listMapper(resourceUpdateBodyPatchesToTerraform, false)(this._updateBodyPatches.internalValue),
      update_header: cdktf.hashMapper(cdktf.stringToTerraform)(this._updateHeader),
      update_method: cdktf.stringToTerraform(this._updateMethod),
      update_path: cdktf.stringToTerraform(this._updatePath),
      update_query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._updateQuery),
      write_only_attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._writeOnlyAttrs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._body),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      check_existance: {
        value: cdktf.booleanToHclTerraform(this._checkExistance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_header: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._createHeader),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      create_method: {
        value: cdktf.stringToHclTerraform(this._createMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_query: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._createQuery),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      create_selector: {
        value: cdktf.stringToHclTerraform(this._createSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_body: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._deleteBody),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      delete_body_raw: {
        value: cdktf.stringToHclTerraform(this._deleteBodyRaw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_header: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._deleteHeader),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      delete_method: {
        value: cdktf.stringToHclTerraform(this._deleteMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_path: {
        value: cdktf.stringToHclTerraform(this._deletePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_query: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._deleteQuery),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      ephemeral_body: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._ephemeralBody),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      force_new_attrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forceNewAttrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      header: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._header),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      merge_patch_disabled: {
        value: cdktf.booleanToHclTerraform(this._mergePatchDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      output_attrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outputAttrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poll_create: {
        value: resourcePollCreateToHclTerraform(this._pollCreate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourcePollCreate",
      },
      poll_delete: {
        value: resourcePollDeleteToHclTerraform(this._pollDelete.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourcePollDelete",
      },
      poll_update: {
        value: resourcePollUpdateToHclTerraform(this._pollUpdate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourcePollUpdate",
      },
      precheck_create: {
        value: cdktf.listMapperHcl(resourcePrecheckCreateToHclTerraform, false)(this._precheckCreate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourcePrecheckCreateList",
      },
      precheck_delete: {
        value: cdktf.listMapperHcl(resourcePrecheckDeleteToHclTerraform, false)(this._precheckDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourcePrecheckDeleteList",
      },
      precheck_update: {
        value: cdktf.listMapperHcl(resourcePrecheckUpdateToHclTerraform, false)(this._precheckUpdate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourcePrecheckUpdateList",
      },
      query: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._query),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      read_header: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._readHeader),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      read_path: {
        value: cdktf.stringToHclTerraform(this._readPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_query: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._readQuery),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      read_response_template: {
        value: cdktf.stringToHclTerraform(this._readResponseTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_selector: {
        value: cdktf.stringToHclTerraform(this._readSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_body_patches: {
        value: cdktf.listMapperHcl(resourceUpdateBodyPatchesToHclTerraform, false)(this._updateBodyPatches.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceUpdateBodyPatchesList",
      },
      update_header: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._updateHeader),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      update_method: {
        value: cdktf.stringToHclTerraform(this._updateMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_path: {
        value: cdktf.stringToHclTerraform(this._updatePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_query: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._updateQuery),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      write_only_attrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._writeOnlyAttrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
