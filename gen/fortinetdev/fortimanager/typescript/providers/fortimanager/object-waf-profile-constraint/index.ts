// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWafProfileConstraintAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#adom ObjectWafProfileConstraintA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#dynamic_sort_subtable ObjectWafProfileConstraintA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#id ObjectWafProfileConstraintA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#profile ObjectWafProfileConstraintA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#scopetype ObjectWafProfileConstraintA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * content_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#content_length ObjectWafProfileConstraintA#content_length}
  */
  readonly contentLength?: ObjectWafProfileConstraintContentLengthA;
  /**
  * exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#exception ObjectWafProfileConstraintA#exception}
  */
  readonly exception?: ObjectWafProfileConstraintExceptionA[] | cdktf.IResolvable;
  /**
  * header_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#header_length ObjectWafProfileConstraintA#header_length}
  */
  readonly headerLength?: ObjectWafProfileConstraintHeaderLengthA;
  /**
  * hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#hostname ObjectWafProfileConstraintA#hostname}
  */
  readonly hostname?: ObjectWafProfileConstraintHostnameA;
  /**
  * line_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#line_length ObjectWafProfileConstraintA#line_length}
  */
  readonly lineLength?: ObjectWafProfileConstraintLineLengthA;
  /**
  * malformed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#malformed ObjectWafProfileConstraintA#malformed}
  */
  readonly malformed?: ObjectWafProfileConstraintMalformedA;
  /**
  * max_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#max_cookie ObjectWafProfileConstraintA#max_cookie}
  */
  readonly maxCookie?: ObjectWafProfileConstraintMaxCookieA;
  /**
  * max_header_line block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#max_header_line ObjectWafProfileConstraintA#max_header_line}
  */
  readonly maxHeaderLine?: ObjectWafProfileConstraintMaxHeaderLineA;
  /**
  * max_range_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#max_range_segment ObjectWafProfileConstraintA#max_range_segment}
  */
  readonly maxRangeSegment?: ObjectWafProfileConstraintMaxRangeSegmentA;
  /**
  * max_url_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#max_url_param ObjectWafProfileConstraintA#max_url_param}
  */
  readonly maxUrlParam?: ObjectWafProfileConstraintMaxUrlParamA;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#method ObjectWafProfileConstraintA#method}
  */
  readonly method?: ObjectWafProfileConstraintMethodA;
  /**
  * param_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#param_length ObjectWafProfileConstraintA#param_length}
  */
  readonly paramLength?: ObjectWafProfileConstraintParamLengthA;
  /**
  * url_param_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#url_param_length ObjectWafProfileConstraintA#url_param_length}
  */
  readonly urlParamLength?: ObjectWafProfileConstraintUrlParamLengthA;
  /**
  * version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#version ObjectWafProfileConstraintA#version}
  */
  readonly version?: ObjectWafProfileConstraintVersionA;
}
export interface ObjectWafProfileConstraintContentLengthA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#length ObjectWafProfileConstraintA#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintContentLengthAToTerraform(struct?: ObjectWafProfileConstraintContentLengthAOutputReference | ObjectWafProfileConstraintContentLengthA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    length: cdktf.numberToTerraform(struct!.length),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintContentLengthAToHclTerraform(struct?: ObjectWafProfileConstraintContentLengthAOutputReference | ObjectWafProfileConstraintContentLengthA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintContentLengthAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintContentLengthA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintContentLengthA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._length = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._length = value.length;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectWafProfileConstraintExceptionA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#address ObjectWafProfileConstraintA#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#content_length ObjectWafProfileConstraintA#content_length}
  */
  readonly contentLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#header_length ObjectWafProfileConstraintA#header_length}
  */
  readonly headerLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#hostname ObjectWafProfileConstraintA#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#id ObjectWafProfileConstraintA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#line_length ObjectWafProfileConstraintA#line_length}
  */
  readonly lineLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#malformed ObjectWafProfileConstraintA#malformed}
  */
  readonly malformed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#max_cookie ObjectWafProfileConstraintA#max_cookie}
  */
  readonly maxCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#max_header_line ObjectWafProfileConstraintA#max_header_line}
  */
  readonly maxHeaderLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#max_range_segment ObjectWafProfileConstraintA#max_range_segment}
  */
  readonly maxRangeSegment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#max_url_param ObjectWafProfileConstraintA#max_url_param}
  */
  readonly maxUrlParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#method ObjectWafProfileConstraintA#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#param_length ObjectWafProfileConstraintA#param_length}
  */
  readonly paramLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#pattern ObjectWafProfileConstraintA#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#regex ObjectWafProfileConstraintA#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#url_param_length ObjectWafProfileConstraintA#url_param_length}
  */
  readonly urlParamLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#version ObjectWafProfileConstraintA#version}
  */
  readonly version?: string;
}

export function objectWafProfileConstraintExceptionAToTerraform(struct?: ObjectWafProfileConstraintExceptionA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    content_length: cdktf.stringToTerraform(struct!.contentLength),
    header_length: cdktf.stringToTerraform(struct!.headerLength),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    id: cdktf.numberToTerraform(struct!.id),
    line_length: cdktf.stringToTerraform(struct!.lineLength),
    malformed: cdktf.stringToTerraform(struct!.malformed),
    max_cookie: cdktf.stringToTerraform(struct!.maxCookie),
    max_header_line: cdktf.stringToTerraform(struct!.maxHeaderLine),
    max_range_segment: cdktf.stringToTerraform(struct!.maxRangeSegment),
    max_url_param: cdktf.stringToTerraform(struct!.maxUrlParam),
    method: cdktf.stringToTerraform(struct!.method),
    param_length: cdktf.stringToTerraform(struct!.paramLength),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    regex: cdktf.stringToTerraform(struct!.regex),
    url_param_length: cdktf.stringToTerraform(struct!.urlParamLength),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function objectWafProfileConstraintExceptionAToHclTerraform(struct?: ObjectWafProfileConstraintExceptionA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_length: {
      value: cdktf.stringToHclTerraform(struct!.contentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_length: {
      value: cdktf.stringToHclTerraform(struct!.headerLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_length: {
      value: cdktf.stringToHclTerraform(struct!.lineLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed: {
      value: cdktf.stringToHclTerraform(struct!.malformed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_cookie: {
      value: cdktf.stringToHclTerraform(struct!.maxCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_header_line: {
      value: cdktf.stringToHclTerraform(struct!.maxHeaderLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_range_segment: {
      value: cdktf.stringToHclTerraform(struct!.maxRangeSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_url_param: {
      value: cdktf.stringToHclTerraform(struct!.maxUrlParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_length: {
      value: cdktf.stringToHclTerraform(struct!.paramLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_param_length: {
      value: cdktf.stringToHclTerraform(struct!.urlParamLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintExceptionAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWafProfileConstraintExceptionA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._contentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLength = this._contentLength;
    }
    if (this._headerLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerLength = this._headerLength;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lineLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineLength = this._lineLength;
    }
    if (this._malformed !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformed = this._malformed;
    }
    if (this._maxCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookie = this._maxCookie;
    }
    if (this._maxHeaderLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderLine = this._maxHeaderLine;
    }
    if (this._maxRangeSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRangeSegment = this._maxRangeSegment;
    }
    if (this._maxUrlParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlParam = this._maxUrlParam;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._paramLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramLength = this._paramLength;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._urlParamLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlParamLength = this._urlParamLength;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintExceptionA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._contentLength = undefined;
      this._headerLength = undefined;
      this._hostname = undefined;
      this._id = undefined;
      this._lineLength = undefined;
      this._malformed = undefined;
      this._maxCookie = undefined;
      this._maxHeaderLine = undefined;
      this._maxRangeSegment = undefined;
      this._maxUrlParam = undefined;
      this._method = undefined;
      this._paramLength = undefined;
      this._pattern = undefined;
      this._regex = undefined;
      this._urlParamLength = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._contentLength = value.contentLength;
      this._headerLength = value.headerLength;
      this._hostname = value.hostname;
      this._id = value.id;
      this._lineLength = value.lineLength;
      this._malformed = value.malformed;
      this._maxCookie = value.maxCookie;
      this._maxHeaderLine = value.maxHeaderLine;
      this._maxRangeSegment = value.maxRangeSegment;
      this._maxUrlParam = value.maxUrlParam;
      this._method = value.method;
      this._paramLength = value.paramLength;
      this._pattern = value.pattern;
      this._regex = value.regex;
      this._urlParamLength = value.urlParamLength;
      this._version = value.version;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // content_length - computed: true, optional: true, required: false
  private _contentLength?: string; 
  public get contentLength() {
    return this.getStringAttribute('content_length');
  }
  public set contentLength(value: string) {
    this._contentLength = value;
  }
  public resetContentLength() {
    this._contentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLengthInput() {
    return this._contentLength;
  }

  // header_length - computed: true, optional: true, required: false
  private _headerLength?: string; 
  public get headerLength() {
    return this.getStringAttribute('header_length');
  }
  public set headerLength(value: string) {
    this._headerLength = value;
  }
  public resetHeaderLength() {
    this._headerLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerLengthInput() {
    return this._headerLength;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // line_length - computed: true, optional: true, required: false
  private _lineLength?: string; 
  public get lineLength() {
    return this.getStringAttribute('line_length');
  }
  public set lineLength(value: string) {
    this._lineLength = value;
  }
  public resetLineLength() {
    this._lineLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineLengthInput() {
    return this._lineLength;
  }

  // malformed - computed: true, optional: true, required: false
  private _malformed?: string; 
  public get malformed() {
    return this.getStringAttribute('malformed');
  }
  public set malformed(value: string) {
    this._malformed = value;
  }
  public resetMalformed() {
    this._malformed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedInput() {
    return this._malformed;
  }

  // max_cookie - computed: true, optional: true, required: false
  private _maxCookie?: string; 
  public get maxCookie() {
    return this.getStringAttribute('max_cookie');
  }
  public set maxCookie(value: string) {
    this._maxCookie = value;
  }
  public resetMaxCookie() {
    this._maxCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieInput() {
    return this._maxCookie;
  }

  // max_header_line - computed: true, optional: true, required: false
  private _maxHeaderLine?: string; 
  public get maxHeaderLine() {
    return this.getStringAttribute('max_header_line');
  }
  public set maxHeaderLine(value: string) {
    this._maxHeaderLine = value;
  }
  public resetMaxHeaderLine() {
    this._maxHeaderLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderLineInput() {
    return this._maxHeaderLine;
  }

  // max_range_segment - computed: true, optional: true, required: false
  private _maxRangeSegment?: string; 
  public get maxRangeSegment() {
    return this.getStringAttribute('max_range_segment');
  }
  public set maxRangeSegment(value: string) {
    this._maxRangeSegment = value;
  }
  public resetMaxRangeSegment() {
    this._maxRangeSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRangeSegmentInput() {
    return this._maxRangeSegment;
  }

  // max_url_param - computed: true, optional: true, required: false
  private _maxUrlParam?: string; 
  public get maxUrlParam() {
    return this.getStringAttribute('max_url_param');
  }
  public set maxUrlParam(value: string) {
    this._maxUrlParam = value;
  }
  public resetMaxUrlParam() {
    this._maxUrlParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlParamInput() {
    return this._maxUrlParam;
  }

  // method - computed: true, optional: true, required: false
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

  // param_length - computed: true, optional: true, required: false
  private _paramLength?: string; 
  public get paramLength() {
    return this.getStringAttribute('param_length');
  }
  public set paramLength(value: string) {
    this._paramLength = value;
  }
  public resetParamLength() {
    this._paramLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramLengthInput() {
    return this._paramLength;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // url_param_length - computed: true, optional: true, required: false
  private _urlParamLength?: string; 
  public get urlParamLength() {
    return this.getStringAttribute('url_param_length');
  }
  public set urlParamLength(value: string) {
    this._urlParamLength = value;
  }
  public resetUrlParamLength() {
    this._urlParamLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlParamLengthInput() {
    return this._urlParamLength;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ObjectWafProfileConstraintExceptionAList extends cdktf.ComplexList {
  public internalValue? : ObjectWafProfileConstraintExceptionA[] | cdktf.IResolvable

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
  public get(index: number): ObjectWafProfileConstraintExceptionAOutputReference {
    return new ObjectWafProfileConstraintExceptionAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWafProfileConstraintHeaderLengthA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#length ObjectWafProfileConstraintA#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintHeaderLengthAToTerraform(struct?: ObjectWafProfileConstraintHeaderLengthAOutputReference | ObjectWafProfileConstraintHeaderLengthA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    length: cdktf.numberToTerraform(struct!.length),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintHeaderLengthAToHclTerraform(struct?: ObjectWafProfileConstraintHeaderLengthAOutputReference | ObjectWafProfileConstraintHeaderLengthA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintHeaderLengthAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintHeaderLengthA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintHeaderLengthA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._length = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._length = value.length;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectWafProfileConstraintHostnameA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintHostnameAToTerraform(struct?: ObjectWafProfileConstraintHostnameAOutputReference | ObjectWafProfileConstraintHostnameA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintHostnameAToHclTerraform(struct?: ObjectWafProfileConstraintHostnameAOutputReference | ObjectWafProfileConstraintHostnameA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintHostnameAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintHostnameA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintHostnameA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectWafProfileConstraintLineLengthA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#length ObjectWafProfileConstraintA#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintLineLengthAToTerraform(struct?: ObjectWafProfileConstraintLineLengthAOutputReference | ObjectWafProfileConstraintLineLengthA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    length: cdktf.numberToTerraform(struct!.length),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintLineLengthAToHclTerraform(struct?: ObjectWafProfileConstraintLineLengthAOutputReference | ObjectWafProfileConstraintLineLengthA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintLineLengthAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintLineLengthA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintLineLengthA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._length = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._length = value.length;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectWafProfileConstraintMalformedA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintMalformedAToTerraform(struct?: ObjectWafProfileConstraintMalformedAOutputReference | ObjectWafProfileConstraintMalformedA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintMalformedAToHclTerraform(struct?: ObjectWafProfileConstraintMalformedAOutputReference | ObjectWafProfileConstraintMalformedA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintMalformedAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintMalformedA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintMalformedA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectWafProfileConstraintMaxCookieA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#max_cookie ObjectWafProfileConstraintA#max_cookie}
  */
  readonly maxCookie?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintMaxCookieAToTerraform(struct?: ObjectWafProfileConstraintMaxCookieAOutputReference | ObjectWafProfileConstraintMaxCookieA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    max_cookie: cdktf.numberToTerraform(struct!.maxCookie),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintMaxCookieAToHclTerraform(struct?: ObjectWafProfileConstraintMaxCookieAOutputReference | ObjectWafProfileConstraintMaxCookieA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_cookie: {
      value: cdktf.numberToHclTerraform(struct!.maxCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintMaxCookieAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintMaxCookieA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._maxCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookie = this._maxCookie;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintMaxCookieA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._maxCookie = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._maxCookie = value.maxCookie;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // max_cookie - computed: true, optional: true, required: false
  private _maxCookie?: number; 
  public get maxCookie() {
    return this.getNumberAttribute('max_cookie');
  }
  public set maxCookie(value: number) {
    this._maxCookie = value;
  }
  public resetMaxCookie() {
    this._maxCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieInput() {
    return this._maxCookie;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectWafProfileConstraintMaxHeaderLineA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#max_header_line ObjectWafProfileConstraintA#max_header_line}
  */
  readonly maxHeaderLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintMaxHeaderLineAToTerraform(struct?: ObjectWafProfileConstraintMaxHeaderLineAOutputReference | ObjectWafProfileConstraintMaxHeaderLineA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    max_header_line: cdktf.numberToTerraform(struct!.maxHeaderLine),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintMaxHeaderLineAToHclTerraform(struct?: ObjectWafProfileConstraintMaxHeaderLineAOutputReference | ObjectWafProfileConstraintMaxHeaderLineA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_header_line: {
      value: cdktf.numberToHclTerraform(struct!.maxHeaderLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintMaxHeaderLineAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintMaxHeaderLineA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._maxHeaderLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderLine = this._maxHeaderLine;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintMaxHeaderLineA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._maxHeaderLine = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._maxHeaderLine = value.maxHeaderLine;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // max_header_line - computed: true, optional: true, required: false
  private _maxHeaderLine?: number; 
  public get maxHeaderLine() {
    return this.getNumberAttribute('max_header_line');
  }
  public set maxHeaderLine(value: number) {
    this._maxHeaderLine = value;
  }
  public resetMaxHeaderLine() {
    this._maxHeaderLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderLineInput() {
    return this._maxHeaderLine;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectWafProfileConstraintMaxRangeSegmentA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#max_range_segment ObjectWafProfileConstraintA#max_range_segment}
  */
  readonly maxRangeSegment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintMaxRangeSegmentAToTerraform(struct?: ObjectWafProfileConstraintMaxRangeSegmentAOutputReference | ObjectWafProfileConstraintMaxRangeSegmentA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    max_range_segment: cdktf.numberToTerraform(struct!.maxRangeSegment),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintMaxRangeSegmentAToHclTerraform(struct?: ObjectWafProfileConstraintMaxRangeSegmentAOutputReference | ObjectWafProfileConstraintMaxRangeSegmentA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_range_segment: {
      value: cdktf.numberToHclTerraform(struct!.maxRangeSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintMaxRangeSegmentAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintMaxRangeSegmentA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._maxRangeSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRangeSegment = this._maxRangeSegment;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintMaxRangeSegmentA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._maxRangeSegment = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._maxRangeSegment = value.maxRangeSegment;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // max_range_segment - computed: true, optional: true, required: false
  private _maxRangeSegment?: number; 
  public get maxRangeSegment() {
    return this.getNumberAttribute('max_range_segment');
  }
  public set maxRangeSegment(value: number) {
    this._maxRangeSegment = value;
  }
  public resetMaxRangeSegment() {
    this._maxRangeSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRangeSegmentInput() {
    return this._maxRangeSegment;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectWafProfileConstraintMaxUrlParamA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#max_url_param ObjectWafProfileConstraintA#max_url_param}
  */
  readonly maxUrlParam?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintMaxUrlParamAToTerraform(struct?: ObjectWafProfileConstraintMaxUrlParamAOutputReference | ObjectWafProfileConstraintMaxUrlParamA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    max_url_param: cdktf.numberToTerraform(struct!.maxUrlParam),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintMaxUrlParamAToHclTerraform(struct?: ObjectWafProfileConstraintMaxUrlParamAOutputReference | ObjectWafProfileConstraintMaxUrlParamA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_url_param: {
      value: cdktf.numberToHclTerraform(struct!.maxUrlParam),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintMaxUrlParamAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintMaxUrlParamA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._maxUrlParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlParam = this._maxUrlParam;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintMaxUrlParamA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._maxUrlParam = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._maxUrlParam = value.maxUrlParam;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // max_url_param - computed: true, optional: true, required: false
  private _maxUrlParam?: number; 
  public get maxUrlParam() {
    return this.getNumberAttribute('max_url_param');
  }
  public set maxUrlParam(value: number) {
    this._maxUrlParam = value;
  }
  public resetMaxUrlParam() {
    this._maxUrlParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlParamInput() {
    return this._maxUrlParam;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectWafProfileConstraintMethodA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintMethodAToTerraform(struct?: ObjectWafProfileConstraintMethodAOutputReference | ObjectWafProfileConstraintMethodA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintMethodAToHclTerraform(struct?: ObjectWafProfileConstraintMethodAOutputReference | ObjectWafProfileConstraintMethodA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintMethodAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintMethodA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintMethodA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectWafProfileConstraintParamLengthA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#length ObjectWafProfileConstraintA#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintParamLengthAToTerraform(struct?: ObjectWafProfileConstraintParamLengthAOutputReference | ObjectWafProfileConstraintParamLengthA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    length: cdktf.numberToTerraform(struct!.length),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintParamLengthAToHclTerraform(struct?: ObjectWafProfileConstraintParamLengthAOutputReference | ObjectWafProfileConstraintParamLengthA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintParamLengthAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintParamLengthA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintParamLengthA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._length = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._length = value.length;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectWafProfileConstraintUrlParamLengthA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#length ObjectWafProfileConstraintA#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintUrlParamLengthAToTerraform(struct?: ObjectWafProfileConstraintUrlParamLengthAOutputReference | ObjectWafProfileConstraintUrlParamLengthA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    length: cdktf.numberToTerraform(struct!.length),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintUrlParamLengthAToHclTerraform(struct?: ObjectWafProfileConstraintUrlParamLengthAOutputReference | ObjectWafProfileConstraintUrlParamLengthA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintUrlParamLengthAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintUrlParamLengthA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintUrlParamLengthA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._length = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._length = value.length;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectWafProfileConstraintVersionA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#action ObjectWafProfileConstraintA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#log ObjectWafProfileConstraintA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#severity ObjectWafProfileConstraintA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#status ObjectWafProfileConstraintA#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintVersionAToTerraform(struct?: ObjectWafProfileConstraintVersionAOutputReference | ObjectWafProfileConstraintVersionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileConstraintVersionAToHclTerraform(struct?: ObjectWafProfileConstraintVersionAOutputReference | ObjectWafProfileConstraintVersionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintVersionAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintVersionA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraintVersionA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint fortimanager_object_waf_profile_constraint}
*/
export class ObjectWafProfileConstraintA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_waf_profile_constraint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWafProfileConstraintA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWafProfileConstraintA to import
  * @param importFromId The id of the existing ObjectWafProfileConstraintA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWafProfileConstraintA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_waf_profile_constraint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint fortimanager_object_waf_profile_constraint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWafProfileConstraintAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWafProfileConstraintAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_waf_profile_constraint',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._profile = config.profile;
    this._scopetype = config.scopetype;
    this._contentLength.internalValue = config.contentLength;
    this._exception.internalValue = config.exception;
    this._headerLength.internalValue = config.headerLength;
    this._hostname.internalValue = config.hostname;
    this._lineLength.internalValue = config.lineLength;
    this._malformed.internalValue = config.malformed;
    this._maxCookie.internalValue = config.maxCookie;
    this._maxHeaderLine.internalValue = config.maxHeaderLine;
    this._maxRangeSegment.internalValue = config.maxRangeSegment;
    this._maxUrlParam.internalValue = config.maxUrlParam;
    this._method.internalValue = config.method;
    this._paramLength.internalValue = config.paramLength;
    this._urlParamLength.internalValue = config.urlParamLength;
    this._version.internalValue = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // content_length - computed: false, optional: true, required: false
  private _contentLength = new ObjectWafProfileConstraintContentLengthAOutputReference(this, "content_length");
  public get contentLength() {
    return this._contentLength;
  }
  public putContentLength(value: ObjectWafProfileConstraintContentLengthA) {
    this._contentLength.internalValue = value;
  }
  public resetContentLength() {
    this._contentLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLengthInput() {
    return this._contentLength.internalValue;
  }

  // exception - computed: false, optional: true, required: false
  private _exception = new ObjectWafProfileConstraintExceptionAList(this, "exception", false);
  public get exception() {
    return this._exception;
  }
  public putException(value: ObjectWafProfileConstraintExceptionA[] | cdktf.IResolvable) {
    this._exception.internalValue = value;
  }
  public resetException() {
    this._exception.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionInput() {
    return this._exception.internalValue;
  }

  // header_length - computed: false, optional: true, required: false
  private _headerLength = new ObjectWafProfileConstraintHeaderLengthAOutputReference(this, "header_length");
  public get headerLength() {
    return this._headerLength;
  }
  public putHeaderLength(value: ObjectWafProfileConstraintHeaderLengthA) {
    this._headerLength.internalValue = value;
  }
  public resetHeaderLength() {
    this._headerLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerLengthInput() {
    return this._headerLength.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new ObjectWafProfileConstraintHostnameAOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: ObjectWafProfileConstraintHostnameA) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // line_length - computed: false, optional: true, required: false
  private _lineLength = new ObjectWafProfileConstraintLineLengthAOutputReference(this, "line_length");
  public get lineLength() {
    return this._lineLength;
  }
  public putLineLength(value: ObjectWafProfileConstraintLineLengthA) {
    this._lineLength.internalValue = value;
  }
  public resetLineLength() {
    this._lineLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineLengthInput() {
    return this._lineLength.internalValue;
  }

  // malformed - computed: false, optional: true, required: false
  private _malformed = new ObjectWafProfileConstraintMalformedAOutputReference(this, "malformed");
  public get malformed() {
    return this._malformed;
  }
  public putMalformed(value: ObjectWafProfileConstraintMalformedA) {
    this._malformed.internalValue = value;
  }
  public resetMalformed() {
    this._malformed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedInput() {
    return this._malformed.internalValue;
  }

  // max_cookie - computed: false, optional: true, required: false
  private _maxCookie = new ObjectWafProfileConstraintMaxCookieAOutputReference(this, "max_cookie");
  public get maxCookie() {
    return this._maxCookie;
  }
  public putMaxCookie(value: ObjectWafProfileConstraintMaxCookieA) {
    this._maxCookie.internalValue = value;
  }
  public resetMaxCookie() {
    this._maxCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieInput() {
    return this._maxCookie.internalValue;
  }

  // max_header_line - computed: false, optional: true, required: false
  private _maxHeaderLine = new ObjectWafProfileConstraintMaxHeaderLineAOutputReference(this, "max_header_line");
  public get maxHeaderLine() {
    return this._maxHeaderLine;
  }
  public putMaxHeaderLine(value: ObjectWafProfileConstraintMaxHeaderLineA) {
    this._maxHeaderLine.internalValue = value;
  }
  public resetMaxHeaderLine() {
    this._maxHeaderLine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderLineInput() {
    return this._maxHeaderLine.internalValue;
  }

  // max_range_segment - computed: false, optional: true, required: false
  private _maxRangeSegment = new ObjectWafProfileConstraintMaxRangeSegmentAOutputReference(this, "max_range_segment");
  public get maxRangeSegment() {
    return this._maxRangeSegment;
  }
  public putMaxRangeSegment(value: ObjectWafProfileConstraintMaxRangeSegmentA) {
    this._maxRangeSegment.internalValue = value;
  }
  public resetMaxRangeSegment() {
    this._maxRangeSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRangeSegmentInput() {
    return this._maxRangeSegment.internalValue;
  }

  // max_url_param - computed: false, optional: true, required: false
  private _maxUrlParam = new ObjectWafProfileConstraintMaxUrlParamAOutputReference(this, "max_url_param");
  public get maxUrlParam() {
    return this._maxUrlParam;
  }
  public putMaxUrlParam(value: ObjectWafProfileConstraintMaxUrlParamA) {
    this._maxUrlParam.internalValue = value;
  }
  public resetMaxUrlParam() {
    this._maxUrlParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlParamInput() {
    return this._maxUrlParam.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new ObjectWafProfileConstraintMethodAOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: ObjectWafProfileConstraintMethodA) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // param_length - computed: false, optional: true, required: false
  private _paramLength = new ObjectWafProfileConstraintParamLengthAOutputReference(this, "param_length");
  public get paramLength() {
    return this._paramLength;
  }
  public putParamLength(value: ObjectWafProfileConstraintParamLengthA) {
    this._paramLength.internalValue = value;
  }
  public resetParamLength() {
    this._paramLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramLengthInput() {
    return this._paramLength.internalValue;
  }

  // url_param_length - computed: false, optional: true, required: false
  private _urlParamLength = new ObjectWafProfileConstraintUrlParamLengthAOutputReference(this, "url_param_length");
  public get urlParamLength() {
    return this._urlParamLength;
  }
  public putUrlParamLength(value: ObjectWafProfileConstraintUrlParamLengthA) {
    this._urlParamLength.internalValue = value;
  }
  public resetUrlParamLength() {
    this._urlParamLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlParamLengthInput() {
    return this._urlParamLength.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version = new ObjectWafProfileConstraintVersionAOutputReference(this, "version");
  public get version() {
    return this._version;
  }
  public putVersion(value: ObjectWafProfileConstraintVersionA) {
    this._version.internalValue = value;
  }
  public resetVersion() {
    this._version.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      profile: cdktf.stringToTerraform(this._profile),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      content_length: objectWafProfileConstraintContentLengthAToTerraform(this._contentLength.internalValue),
      exception: cdktf.listMapper(objectWafProfileConstraintExceptionAToTerraform, true)(this._exception.internalValue),
      header_length: objectWafProfileConstraintHeaderLengthAToTerraform(this._headerLength.internalValue),
      hostname: objectWafProfileConstraintHostnameAToTerraform(this._hostname.internalValue),
      line_length: objectWafProfileConstraintLineLengthAToTerraform(this._lineLength.internalValue),
      malformed: objectWafProfileConstraintMalformedAToTerraform(this._malformed.internalValue),
      max_cookie: objectWafProfileConstraintMaxCookieAToTerraform(this._maxCookie.internalValue),
      max_header_line: objectWafProfileConstraintMaxHeaderLineAToTerraform(this._maxHeaderLine.internalValue),
      max_range_segment: objectWafProfileConstraintMaxRangeSegmentAToTerraform(this._maxRangeSegment.internalValue),
      max_url_param: objectWafProfileConstraintMaxUrlParamAToTerraform(this._maxUrlParam.internalValue),
      method: objectWafProfileConstraintMethodAToTerraform(this._method.internalValue),
      param_length: objectWafProfileConstraintParamLengthAToTerraform(this._paramLength.internalValue),
      url_param_length: objectWafProfileConstraintUrlParamLengthAToTerraform(this._urlParamLength.internalValue),
      version: objectWafProfileConstraintVersionAToTerraform(this._version.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_length: {
        value: objectWafProfileConstraintContentLengthAToHclTerraform(this._contentLength.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintContentLengthAList",
      },
      exception: {
        value: cdktf.listMapperHcl(objectWafProfileConstraintExceptionAToHclTerraform, true)(this._exception.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintExceptionAList",
      },
      header_length: {
        value: objectWafProfileConstraintHeaderLengthAToHclTerraform(this._headerLength.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintHeaderLengthAList",
      },
      hostname: {
        value: objectWafProfileConstraintHostnameAToHclTerraform(this._hostname.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintHostnameAList",
      },
      line_length: {
        value: objectWafProfileConstraintLineLengthAToHclTerraform(this._lineLength.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintLineLengthAList",
      },
      malformed: {
        value: objectWafProfileConstraintMalformedAToHclTerraform(this._malformed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintMalformedAList",
      },
      max_cookie: {
        value: objectWafProfileConstraintMaxCookieAToHclTerraform(this._maxCookie.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintMaxCookieAList",
      },
      max_header_line: {
        value: objectWafProfileConstraintMaxHeaderLineAToHclTerraform(this._maxHeaderLine.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintMaxHeaderLineAList",
      },
      max_range_segment: {
        value: objectWafProfileConstraintMaxRangeSegmentAToHclTerraform(this._maxRangeSegment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintMaxRangeSegmentAList",
      },
      max_url_param: {
        value: objectWafProfileConstraintMaxUrlParamAToHclTerraform(this._maxUrlParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintMaxUrlParamAList",
      },
      method: {
        value: objectWafProfileConstraintMethodAToHclTerraform(this._method.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintMethodAList",
      },
      param_length: {
        value: objectWafProfileConstraintParamLengthAToHclTerraform(this._paramLength.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintParamLengthAList",
      },
      url_param_length: {
        value: objectWafProfileConstraintUrlParamLengthAToHclTerraform(this._urlParamLength.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintUrlParamLengthAList",
      },
      version: {
        value: objectWafProfileConstraintVersionAToHclTerraform(this._version.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintVersionAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
