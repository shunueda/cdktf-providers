// https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The payload for the `Create`/`Update` call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#body Operation#body}
  */
  readonly body?: { [key: string]: any };
  /**
  * The payload for the `Delete` call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#delete_body Operation#delete_body}
  */
  readonly deleteBody?: { [key: string]: any };
  /**
  * The header parameters that are applied to each delete request. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#delete_header Operation#delete_header}
  */
  readonly deleteHeader?: { [key: string]: string };
  /**
  * The method for the `Delete` call. Possible values are `POST`, `PUT`, `PATCH` and `DELETE`. If this is not specified, no `Delete` call will occur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#delete_method Operation#delete_method}
  */
  readonly deleteMethod?: string;
  /**
  * The path for the `Delete` call, relative to the `base_url` of the provider. The `path` is used instead if `delete_path` is absent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#delete_path Operation#delete_path}
  */
  readonly deletePath?: string;
  /**
  * The query parameters that are applied to each delete request. This overrides the `query` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#delete_query Operation#delete_query}
  */
  readonly deleteQuery?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The ephemeral (write-only) properties of the resource. This will be merge-patched to the `body` to construct the actual request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#ephemeral_body Operation#ephemeral_body}
  */
  readonly ephemeralBody?: { [key: string]: any };
  /**
  * The header parameters that are applied to each request. This overrides the `header` set in the provider block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#header Operation#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The pattern used to build the `id`. The `path` is used as the `id` instead if absent.This can be a string literal, or combined by following params: path param: `$(path)` expanded to `path`, body param: `$(body.x.y.z)` expands to the `x.y.z` property of the API body. Especially for the body param, it can add a chain of functions (applied from left to right), in the form of `$f1.f2(body)`. Supported functions include: `escape` (URL path escape, by default applied), `unescape` (URL path unescape), `query_escape` (URL query escape), `query_unescape` (URL query unescape), `base` (filepath base), `url_path` (path segment of a URL), `trim_path` (trim `path`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#id_builder Operation#id_builder}
  */
  readonly idBuilder?: string;
  /**
  * The HTTP method for the `Create`/`Update` call. Possible values are `GET`, `PUT`, `POST`, `PATCH` and `DELETE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#method Operation#method}
  */
  readonly method: string;
  /**
  * The header parameters that are applied to each operation request. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#operation_header Operation#operation_header}
  */
  readonly operationHeader?: { [key: string]: string };
  /**
  * The query parameters that are applied to each operation request. This overrides the `query` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#operation_query Operation#operation_query}
  */
  readonly operationQuery?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A set of `output` attribute paths (in [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)) that will be exported in the `output`. If this is not specified, all attributes will be exported by `output`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#output_attrs Operation#output_attrs}
  */
  readonly outputAttrs?: string[];
  /**
  * The path for the `Create`/`Update` call, relative to the `base_url` of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#path Operation#path}
  */
  readonly path: string;
  /**
  * The polling option for the "`Create`/`Update`" operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#poll Operation#poll}
  */
  readonly poll?: OperationPoll;
  /**
  * The polling option for the "`Delete`" operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#poll_delete Operation#poll_delete}
  */
  readonly pollDelete?: OperationPollDelete;
  /**
  * An array of prechecks that need to pass prior to the "`Create`/`Update`" operation. Exactly one of `mutex` or `api` should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#precheck Operation#precheck}
  */
  readonly precheck?: OperationPrecheck[] | cdktf.IResolvable;
  /**
  * An array of prechecks that need to pass prior to the "`Delete`" operation. Exactly one of `mutex` or `api` should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#precheck_delete Operation#precheck_delete}
  */
  readonly precheckDelete?: OperationPrecheckDelete[] | cdktf.IResolvable;
  /**
  * The query parameters that are applied to each request. This overrides the `query` set in the provider block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#query Operation#query}
  */
  readonly query?: { [key: string]: string[] } | cdktf.IResolvable;
}
export interface OperationPollStatus {
  /**
  * The expected status sentinels for pending status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#pending Operation#pending}
  */
  readonly pending?: string[];
  /**
  * The expected status sentinel for suceess status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#success Operation#success}
  */
  readonly success: string;
}

export function operationPollStatusToTerraform(struct?: OperationPollStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pending),
    success: cdktf.stringToTerraform(struct!.success),
  }
}


export function operationPollStatusToHclTerraform(struct?: OperationPollStatus | cdktf.IResolvable): any {
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

export class OperationPollStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OperationPollStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationPollStatus | cdktf.IResolvable | undefined) {
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
export interface OperationPoll {
  /**
  * The interval between two pollings if there is no `Retry-After` in the response header, in second. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#default_delay_sec Operation#default_delay_sec}
  */
  readonly defaultDelaySec?: number;
  /**
  * The header parameters. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#header Operation#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The expected status sentinels for each polling state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#status Operation#status}
  */
  readonly status: OperationPollStatus;
  /**
  * Specifies how to discover the status property. The format is either `code` or `scope.path`, where `scope` can be either `header` or `body`, and the `path` is using the [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md). The `path` can contain `$(body.x.y.z)` parameter that reference property from either the response body (for `Create`, after selector), or `state.output` (for `Read`/`Update`/`Delete`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#status_locator Operation#status_locator}
  */
  readonly statusLocator: string;
  /**
  * Specifies how to discover the polling url. The format can be one of `header.path` (use the property at `path` in response header), `body.path` (use the property at `path` in response body) or `exact.value` (use the exact `value`). When absent, the current operation's URL is used for polling, execpt `Create` where it fallbacks to use the path constructed by the `read_path` as the polling URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#url_locator Operation#url_locator}
  */
  readonly urlLocator?: string;
}

export function operationPollToTerraform(struct?: OperationPoll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_delay_sec: cdktf.numberToTerraform(struct!.defaultDelaySec),
    header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.header),
    status: operationPollStatusToTerraform(struct!.status),
    status_locator: cdktf.stringToTerraform(struct!.statusLocator),
    url_locator: cdktf.stringToTerraform(struct!.urlLocator),
  }
}


export function operationPollToHclTerraform(struct?: OperationPoll | cdktf.IResolvable): any {
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
      value: operationPollStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "OperationPollStatus",
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

export class OperationPollOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OperationPoll | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationPoll | cdktf.IResolvable | undefined) {
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
  private _status = new OperationPollStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: OperationPollStatus) {
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
export interface OperationPollDeleteStatus {
  /**
  * The expected status sentinels for pending status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#pending Operation#pending}
  */
  readonly pending?: string[];
  /**
  * The expected status sentinel for suceess status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#success Operation#success}
  */
  readonly success: string;
}

export function operationPollDeleteStatusToTerraform(struct?: OperationPollDeleteStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pending),
    success: cdktf.stringToTerraform(struct!.success),
  }
}


export function operationPollDeleteStatusToHclTerraform(struct?: OperationPollDeleteStatus | cdktf.IResolvable): any {
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

export class OperationPollDeleteStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OperationPollDeleteStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationPollDeleteStatus | cdktf.IResolvable | undefined) {
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
export interface OperationPollDelete {
  /**
  * The interval between two pollings if there is no `Retry-After` in the response header, in second. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#default_delay_sec Operation#default_delay_sec}
  */
  readonly defaultDelaySec?: number;
  /**
  * The header parameters. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#header Operation#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The expected status sentinels for each polling state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#status Operation#status}
  */
  readonly status: OperationPollDeleteStatus;
  /**
  * Specifies how to discover the status property. The format is either `code` or `scope.path`, where `scope` can be either `header` or `body`, and the `path` is using the [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md). The `path` can contain `$(body.x.y.z)` parameter that reference property from either the response body (for `Create`, after selector), or `state.output` (for `Read`/`Update`/`Delete`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#status_locator Operation#status_locator}
  */
  readonly statusLocator: string;
  /**
  * Specifies how to discover the polling url. The format can be one of `header.path` (use the property at `path` in response header), `body.path` (use the property at `path` in response body) or `exact.value` (use the exact `value`). When absent, the current operation's URL is used for polling, execpt `Create` where it fallbacks to use the path constructed by the `read_path` as the polling URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#url_locator Operation#url_locator}
  */
  readonly urlLocator?: string;
}

export function operationPollDeleteToTerraform(struct?: OperationPollDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_delay_sec: cdktf.numberToTerraform(struct!.defaultDelaySec),
    header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.header),
    status: operationPollDeleteStatusToTerraform(struct!.status),
    status_locator: cdktf.stringToTerraform(struct!.statusLocator),
    url_locator: cdktf.stringToTerraform(struct!.urlLocator),
  }
}


export function operationPollDeleteToHclTerraform(struct?: OperationPollDelete | cdktf.IResolvable): any {
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
      value: operationPollDeleteStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "OperationPollDeleteStatus",
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

export class OperationPollDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OperationPollDelete | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationPollDelete | cdktf.IResolvable | undefined) {
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
  private _status = new OperationPollDeleteStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: OperationPollDeleteStatus) {
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
export interface OperationPrecheckApiStatus {
  /**
  * The expected status sentinels for pending status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#pending Operation#pending}
  */
  readonly pending?: string[];
  /**
  * The expected status sentinel for suceess status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#success Operation#success}
  */
  readonly success: string;
}

export function operationPrecheckApiStatusToTerraform(struct?: OperationPrecheckApiStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pending),
    success: cdktf.stringToTerraform(struct!.success),
  }
}


export function operationPrecheckApiStatusToHclTerraform(struct?: OperationPrecheckApiStatus | cdktf.IResolvable): any {
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

export class OperationPrecheckApiStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OperationPrecheckApiStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationPrecheckApiStatus | cdktf.IResolvable | undefined) {
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
export interface OperationPrecheckApi {
  /**
  * The interval between two pollings if there is no `Retry-After` in the response header, in second. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#default_delay_sec Operation#default_delay_sec}
  */
  readonly defaultDelaySec?: number;
  /**
  * The header parameters. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#header Operation#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The path used to query readiness, relative to the `base_url` of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#path Operation#path}
  */
  readonly path: string;
  /**
  * The query parameters. This overrides the `query` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#query Operation#query}
  */
  readonly query?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The expected status sentinels for each polling state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#status Operation#status}
  */
  readonly status: OperationPrecheckApiStatus;
  /**
  * Specifies how to discover the status property. The format is either `code` or `scope.path`, where `scope` can be either `header` or `body`, and the `path` is using the [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#status_locator Operation#status_locator}
  */
  readonly statusLocator: string;
}

export function operationPrecheckApiToTerraform(struct?: OperationPrecheckApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_delay_sec: cdktf.numberToTerraform(struct!.defaultDelaySec),
    header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.header),
    path: cdktf.stringToTerraform(struct!.path),
    query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.query),
    status: operationPrecheckApiStatusToTerraform(struct!.status),
    status_locator: cdktf.stringToTerraform(struct!.statusLocator),
  }
}


export function operationPrecheckApiToHclTerraform(struct?: OperationPrecheckApi | cdktf.IResolvable): any {
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
      value: operationPrecheckApiStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "OperationPrecheckApiStatus",
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

export class OperationPrecheckApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OperationPrecheckApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationPrecheckApi | cdktf.IResolvable | undefined) {
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
  private _status = new OperationPrecheckApiStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: OperationPrecheckApiStatus) {
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
export interface OperationPrecheck {
  /**
  * Keeps waiting until the specified API meets the success status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#api Operation#api}
  */
  readonly api?: OperationPrecheckApi;
  /**
  * The name of the mutex, which implies the resource will keep waiting until this mutex is held
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#mutex Operation#mutex}
  */
  readonly mutex?: string;
}

export function operationPrecheckToTerraform(struct?: OperationPrecheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: operationPrecheckApiToTerraform(struct!.api),
    mutex: cdktf.stringToTerraform(struct!.mutex),
  }
}


export function operationPrecheckToHclTerraform(struct?: OperationPrecheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: operationPrecheckApiToHclTerraform(struct!.api),
      isBlock: true,
      type: "struct",
      storageClassType: "OperationPrecheckApi",
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

export class OperationPrecheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationPrecheck | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationPrecheck | cdktf.IResolvable | undefined) {
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
  private _api = new OperationPrecheckApiOutputReference(this, "api");
  public get api() {
    return this._api;
  }
  public putApi(value: OperationPrecheckApi) {
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

export class OperationPrecheckList extends cdktf.ComplexList {
  public internalValue? : OperationPrecheck[] | cdktf.IResolvable

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
  public get(index: number): OperationPrecheckOutputReference {
    return new OperationPrecheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OperationPrecheckDeleteApiStatus {
  /**
  * The expected status sentinels for pending status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#pending Operation#pending}
  */
  readonly pending?: string[];
  /**
  * The expected status sentinel for suceess status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#success Operation#success}
  */
  readonly success: string;
}

export function operationPrecheckDeleteApiStatusToTerraform(struct?: OperationPrecheckDeleteApiStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pending),
    success: cdktf.stringToTerraform(struct!.success),
  }
}


export function operationPrecheckDeleteApiStatusToHclTerraform(struct?: OperationPrecheckDeleteApiStatus | cdktf.IResolvable): any {
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

export class OperationPrecheckDeleteApiStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OperationPrecheckDeleteApiStatus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationPrecheckDeleteApiStatus | cdktf.IResolvable | undefined) {
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
export interface OperationPrecheckDeleteApi {
  /**
  * The interval between two pollings if there is no `Retry-After` in the response header, in second. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#default_delay_sec Operation#default_delay_sec}
  */
  readonly defaultDelaySec?: number;
  /**
  * The header parameters. This overrides the `header` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#header Operation#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * The path used to query readiness, relative to the `base_url` of the provider. By default, the `path` of this resource is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#path Operation#path}
  */
  readonly path?: string;
  /**
  * The query parameters. This overrides the `query` set in the resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#query Operation#query}
  */
  readonly query?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The expected status sentinels for each polling state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#status Operation#status}
  */
  readonly status: OperationPrecheckDeleteApiStatus;
  /**
  * Specifies how to discover the status property. The format is either `code` or `scope.path`, where `scope` can be either `header` or `body`, and the `path` is using the [gjson syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md). The `path` can contain `$(body.x.y.z)` parameter that reference property from the `state.output`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#status_locator Operation#status_locator}
  */
  readonly statusLocator: string;
}

export function operationPrecheckDeleteApiToTerraform(struct?: OperationPrecheckDeleteApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_delay_sec: cdktf.numberToTerraform(struct!.defaultDelaySec),
    header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.header),
    path: cdktf.stringToTerraform(struct!.path),
    query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.query),
    status: operationPrecheckDeleteApiStatusToTerraform(struct!.status),
    status_locator: cdktf.stringToTerraform(struct!.statusLocator),
  }
}


export function operationPrecheckDeleteApiToHclTerraform(struct?: OperationPrecheckDeleteApi | cdktf.IResolvable): any {
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
      value: operationPrecheckDeleteApiStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "OperationPrecheckDeleteApiStatus",
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

export class OperationPrecheckDeleteApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OperationPrecheckDeleteApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationPrecheckDeleteApi | cdktf.IResolvable | undefined) {
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
  private _status = new OperationPrecheckDeleteApiStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: OperationPrecheckDeleteApiStatus) {
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
export interface OperationPrecheckDelete {
  /**
  * Keeps waiting until the specified API meets the success status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#api Operation#api}
  */
  readonly api?: OperationPrecheckDeleteApi;
  /**
  * The name of the mutex, which implies the resource will keep waiting until this mutex is held
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#mutex Operation#mutex}
  */
  readonly mutex?: string;
}

export function operationPrecheckDeleteToTerraform(struct?: OperationPrecheckDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: operationPrecheckDeleteApiToTerraform(struct!.api),
    mutex: cdktf.stringToTerraform(struct!.mutex),
  }
}


export function operationPrecheckDeleteToHclTerraform(struct?: OperationPrecheckDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: operationPrecheckDeleteApiToHclTerraform(struct!.api),
      isBlock: true,
      type: "struct",
      storageClassType: "OperationPrecheckDeleteApi",
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

export class OperationPrecheckDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OperationPrecheckDelete | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperationPrecheckDelete | cdktf.IResolvable | undefined) {
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
  private _api = new OperationPrecheckDeleteApiOutputReference(this, "api");
  public get api() {
    return this._api;
  }
  public putApi(value: OperationPrecheckDeleteApi) {
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

export class OperationPrecheckDeleteList extends cdktf.ComplexList {
  public internalValue? : OperationPrecheckDelete[] | cdktf.IResolvable

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
  public get(index: number): OperationPrecheckDeleteOutputReference {
    return new OperationPrecheckDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation restful_operation}
*/
export class Operation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "restful_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Operation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Operation to import
  * @param importFromId The id of the existing Operation that should be imported. Refer to the {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Operation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "restful_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs/resources/operation restful_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OperationConfig
  */
  public constructor(scope: Construct, id: string, config: OperationConfig) {
    super(scope, id, {
      terraformResourceType: 'restful_operation',
      terraformGeneratorMetadata: {
        providerName: 'restful',
        providerVersion: '0.24.0',
        providerVersionConstraint: '0.24.0'
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
    this._deleteBody = config.deleteBody;
    this._deleteHeader = config.deleteHeader;
    this._deleteMethod = config.deleteMethod;
    this._deletePath = config.deletePath;
    this._deleteQuery = config.deleteQuery;
    this._ephemeralBody = config.ephemeralBody;
    this._header = config.header;
    this._idBuilder = config.idBuilder;
    this._method = config.method;
    this._operationHeader = config.operationHeader;
    this._operationQuery = config.operationQuery;
    this._outputAttrs = config.outputAttrs;
    this._path = config.path;
    this._poll.internalValue = config.poll;
    this._pollDelete.internalValue = config.pollDelete;
    this._precheck.internalValue = config.precheck;
    this._precheckDelete.internalValue = config.precheckDelete;
    this._query = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id_builder - computed: false, optional: true, required: false
  private _idBuilder?: string; 
  public get idBuilder() {
    return this.getStringAttribute('id_builder');
  }
  public set idBuilder(value: string) {
    this._idBuilder = value;
  }
  public resetIdBuilder() {
    this._idBuilder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idBuilderInput() {
    return this._idBuilder;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // operation_header - computed: false, optional: true, required: false
  private _operationHeader?: { [key: string]: string }; 
  public get operationHeader() {
    return this.getStringMapAttribute('operation_header');
  }
  public set operationHeader(value: { [key: string]: string }) {
    this._operationHeader = value;
  }
  public resetOperationHeader() {
    this._operationHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationHeaderInput() {
    return this._operationHeader;
  }

  // operation_query - computed: false, optional: true, required: false
  private _operationQuery?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get operationQuery() {
    return this.interpolationForAttribute('operation_query');
  }
  public set operationQuery(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._operationQuery = value;
  }
  public resetOperationQuery() {
    this._operationQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationQueryInput() {
    return this._operationQuery;
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

  // poll - computed: false, optional: true, required: false
  private _poll = new OperationPollOutputReference(this, "poll");
  public get poll() {
    return this._poll;
  }
  public putPoll(value: OperationPoll) {
    this._poll.internalValue = value;
  }
  public resetPoll() {
    this._poll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollInput() {
    return this._poll.internalValue;
  }

  // poll_delete - computed: false, optional: true, required: false
  private _pollDelete = new OperationPollDeleteOutputReference(this, "poll_delete");
  public get pollDelete() {
    return this._pollDelete;
  }
  public putPollDelete(value: OperationPollDelete) {
    this._pollDelete.internalValue = value;
  }
  public resetPollDelete() {
    this._pollDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollDeleteInput() {
    return this._pollDelete.internalValue;
  }

  // precheck - computed: false, optional: true, required: false
  private _precheck = new OperationPrecheckList(this, "precheck", false);
  public get precheck() {
    return this._precheck;
  }
  public putPrecheck(value: OperationPrecheck[] | cdktf.IResolvable) {
    this._precheck.internalValue = value;
  }
  public resetPrecheck() {
    this._precheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precheckInput() {
    return this._precheck.internalValue;
  }

  // precheck_delete - computed: false, optional: true, required: false
  private _precheckDelete = new OperationPrecheckDeleteList(this, "precheck_delete", false);
  public get precheckDelete() {
    return this._precheckDelete;
  }
  public putPrecheckDelete(value: OperationPrecheckDelete[] | cdktf.IResolvable) {
    this._precheckDelete.internalValue = value;
  }
  public resetPrecheckDelete() {
    this._precheckDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precheckDeleteInput() {
    return this._precheckDelete.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.hashMapper(cdktf.anyToTerraform)(this._body),
      delete_body: cdktf.hashMapper(cdktf.anyToTerraform)(this._deleteBody),
      delete_header: cdktf.hashMapper(cdktf.stringToTerraform)(this._deleteHeader),
      delete_method: cdktf.stringToTerraform(this._deleteMethod),
      delete_path: cdktf.stringToTerraform(this._deletePath),
      delete_query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._deleteQuery),
      ephemeral_body: cdktf.hashMapper(cdktf.anyToTerraform)(this._ephemeralBody),
      header: cdktf.hashMapper(cdktf.stringToTerraform)(this._header),
      id_builder: cdktf.stringToTerraform(this._idBuilder),
      method: cdktf.stringToTerraform(this._method),
      operation_header: cdktf.hashMapper(cdktf.stringToTerraform)(this._operationHeader),
      operation_query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._operationQuery),
      output_attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outputAttrs),
      path: cdktf.stringToTerraform(this._path),
      poll: operationPollToTerraform(this._poll.internalValue),
      poll_delete: operationPollDeleteToTerraform(this._pollDelete.internalValue),
      precheck: cdktf.listMapper(operationPrecheckToTerraform, false)(this._precheck.internalValue),
      precheck_delete: cdktf.listMapper(operationPrecheckDeleteToTerraform, false)(this._precheckDelete.internalValue),
      query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._query),
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
      delete_body: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._deleteBody),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
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
      header: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._header),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id_builder: {
        value: cdktf.stringToHclTerraform(this._idBuilder),
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
      operation_header: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._operationHeader),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      operation_query: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._operationQuery),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
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
      poll: {
        value: operationPollToHclTerraform(this._poll.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OperationPoll",
      },
      poll_delete: {
        value: operationPollDeleteToHclTerraform(this._pollDelete.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OperationPollDelete",
      },
      precheck: {
        value: cdktf.listMapperHcl(operationPrecheckToHclTerraform, false)(this._precheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OperationPrecheckList",
      },
      precheck_delete: {
        value: cdktf.listMapperHcl(operationPrecheckDeleteToHclTerraform, false)(this._precheckDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OperationPrecheckDeleteList",
      },
      query: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._query),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
