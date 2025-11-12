// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWafProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#adom ObjectWafProfile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#comment ObjectWafProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#dynamic_sort_subtable ObjectWafProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#extended_log ObjectWafProfile#extended_log}
  */
  readonly extendedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#external ObjectWafProfile#external}
  */
  readonly external?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#id ObjectWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#name ObjectWafProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#scopetype ObjectWafProfile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#address_list ObjectWafProfile#address_list}
  */
  readonly addressList?: ObjectWafProfileAddressListStruct;
  /**
  * constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#constraint ObjectWafProfile#constraint}
  */
  readonly constraint?: ObjectWafProfileConstraint;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#method ObjectWafProfile#method}
  */
  readonly method?: ObjectWafProfileMethod;
  /**
  * signature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#signature ObjectWafProfile#signature}
  */
  readonly signature?: ObjectWafProfileSignature;
  /**
  * url_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#url_access ObjectWafProfile#url_access}
  */
  readonly urlAccess?: ObjectWafProfileUrlAccess[] | cdktf.IResolvable;
}
export interface ObjectWafProfileAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#blocked_address ObjectWafProfile#blocked_address}
  */
  readonly blockedAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#blocked_log ObjectWafProfile#blocked_log}
  */
  readonly blockedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#trusted_address ObjectWafProfile#trusted_address}
  */
  readonly trustedAddress?: string;
}

export function objectWafProfileAddressListStructToTerraform(struct?: ObjectWafProfileAddressListStructOutputReference | ObjectWafProfileAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked_address: cdktf.stringToTerraform(struct!.blockedAddress),
    blocked_log: cdktf.stringToTerraform(struct!.blockedLog),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
    trusted_address: cdktf.stringToTerraform(struct!.trustedAddress),
  }
}


export function objectWafProfileAddressListStructToHclTerraform(struct?: ObjectWafProfileAddressListStructOutputReference | ObjectWafProfileAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked_address: {
      value: cdktf.stringToHclTerraform(struct!.blockedAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocked_log: {
      value: cdktf.stringToHclTerraform(struct!.blockedLog),
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
    trusted_address: {
      value: cdktf.stringToHclTerraform(struct!.trustedAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileAddressListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileAddressListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedAddress = this._blockedAddress;
    }
    if (this._blockedLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedLog = this._blockedLog;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._trustedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedAddress = this._trustedAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileAddressListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockedAddress = undefined;
      this._blockedLog = undefined;
      this._severity = undefined;
      this._status = undefined;
      this._trustedAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockedAddress = value.blockedAddress;
      this._blockedLog = value.blockedLog;
      this._severity = value.severity;
      this._status = value.status;
      this._trustedAddress = value.trustedAddress;
    }
  }

  // blocked_address - computed: false, optional: true, required: false
  private _blockedAddress?: string; 
  public get blockedAddress() {
    return this.getStringAttribute('blocked_address');
  }
  public set blockedAddress(value: string) {
    this._blockedAddress = value;
  }
  public resetBlockedAddress() {
    this._blockedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedAddressInput() {
    return this._blockedAddress;
  }

  // blocked_log - computed: true, optional: true, required: false
  private _blockedLog?: string; 
  public get blockedLog() {
    return this.getStringAttribute('blocked_log');
  }
  public set blockedLog(value: string) {
    this._blockedLog = value;
  }
  public resetBlockedLog() {
    this._blockedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedLogInput() {
    return this._blockedLog;
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

  // trusted_address - computed: false, optional: true, required: false
  private _trustedAddress?: string; 
  public get trustedAddress() {
    return this.getStringAttribute('trusted_address');
  }
  public set trustedAddress(value: string) {
    this._trustedAddress = value;
  }
  public resetTrustedAddress() {
    this._trustedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedAddressInput() {
    return this._trustedAddress;
  }
}
export interface ObjectWafProfileConstraintContentLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#length ObjectWafProfile#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintContentLengthToTerraform(struct?: ObjectWafProfileConstraintContentLengthOutputReference | ObjectWafProfileConstraintContentLength): any {
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


export function objectWafProfileConstraintContentLengthToHclTerraform(struct?: ObjectWafProfileConstraintContentLengthOutputReference | ObjectWafProfileConstraintContentLength): any {
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

export class ObjectWafProfileConstraintContentLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintContentLength | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintContentLength | undefined) {
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
export interface ObjectWafProfileConstraintException {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#address ObjectWafProfile#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#content_length ObjectWafProfile#content_length}
  */
  readonly contentLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#header_length ObjectWafProfile#header_length}
  */
  readonly headerLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#hostname ObjectWafProfile#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#id ObjectWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#line_length ObjectWafProfile#line_length}
  */
  readonly lineLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#malformed ObjectWafProfile#malformed}
  */
  readonly malformed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#max_cookie ObjectWafProfile#max_cookie}
  */
  readonly maxCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#max_header_line ObjectWafProfile#max_header_line}
  */
  readonly maxHeaderLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#max_range_segment ObjectWafProfile#max_range_segment}
  */
  readonly maxRangeSegment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#max_url_param ObjectWafProfile#max_url_param}
  */
  readonly maxUrlParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#method ObjectWafProfile#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#param_length ObjectWafProfile#param_length}
  */
  readonly paramLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#pattern ObjectWafProfile#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#regex ObjectWafProfile#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#url_param_length ObjectWafProfile#url_param_length}
  */
  readonly urlParamLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#version ObjectWafProfile#version}
  */
  readonly version?: string;
}

export function objectWafProfileConstraintExceptionToTerraform(struct?: ObjectWafProfileConstraintException | cdktf.IResolvable): any {
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


export function objectWafProfileConstraintExceptionToHclTerraform(struct?: ObjectWafProfileConstraintException | cdktf.IResolvable): any {
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

export class ObjectWafProfileConstraintExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWafProfileConstraintException | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintException | cdktf.IResolvable | undefined) {
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

export class ObjectWafProfileConstraintExceptionList extends cdktf.ComplexList {
  public internalValue? : ObjectWafProfileConstraintException[] | cdktf.IResolvable

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
  public get(index: number): ObjectWafProfileConstraintExceptionOutputReference {
    return new ObjectWafProfileConstraintExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWafProfileConstraintHeaderLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#length ObjectWafProfile#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintHeaderLengthToTerraform(struct?: ObjectWafProfileConstraintHeaderLengthOutputReference | ObjectWafProfileConstraintHeaderLength): any {
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


export function objectWafProfileConstraintHeaderLengthToHclTerraform(struct?: ObjectWafProfileConstraintHeaderLengthOutputReference | ObjectWafProfileConstraintHeaderLength): any {
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

export class ObjectWafProfileConstraintHeaderLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintHeaderLength | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintHeaderLength | undefined) {
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
export interface ObjectWafProfileConstraintHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintHostnameToTerraform(struct?: ObjectWafProfileConstraintHostnameOutputReference | ObjectWafProfileConstraintHostname): any {
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


export function objectWafProfileConstraintHostnameToHclTerraform(struct?: ObjectWafProfileConstraintHostnameOutputReference | ObjectWafProfileConstraintHostname): any {
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

export class ObjectWafProfileConstraintHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintHostname | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintHostname | undefined) {
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
export interface ObjectWafProfileConstraintLineLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#length ObjectWafProfile#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintLineLengthToTerraform(struct?: ObjectWafProfileConstraintLineLengthOutputReference | ObjectWafProfileConstraintLineLength): any {
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


export function objectWafProfileConstraintLineLengthToHclTerraform(struct?: ObjectWafProfileConstraintLineLengthOutputReference | ObjectWafProfileConstraintLineLength): any {
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

export class ObjectWafProfileConstraintLineLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintLineLength | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintLineLength | undefined) {
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
export interface ObjectWafProfileConstraintMalformed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintMalformedToTerraform(struct?: ObjectWafProfileConstraintMalformedOutputReference | ObjectWafProfileConstraintMalformed): any {
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


export function objectWafProfileConstraintMalformedToHclTerraform(struct?: ObjectWafProfileConstraintMalformedOutputReference | ObjectWafProfileConstraintMalformed): any {
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

export class ObjectWafProfileConstraintMalformedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintMalformed | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintMalformed | undefined) {
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
export interface ObjectWafProfileConstraintMaxCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#max_cookie ObjectWafProfile#max_cookie}
  */
  readonly maxCookie?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintMaxCookieToTerraform(struct?: ObjectWafProfileConstraintMaxCookieOutputReference | ObjectWafProfileConstraintMaxCookie): any {
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


export function objectWafProfileConstraintMaxCookieToHclTerraform(struct?: ObjectWafProfileConstraintMaxCookieOutputReference | ObjectWafProfileConstraintMaxCookie): any {
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

export class ObjectWafProfileConstraintMaxCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintMaxCookie | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintMaxCookie | undefined) {
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
export interface ObjectWafProfileConstraintMaxHeaderLine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#max_header_line ObjectWafProfile#max_header_line}
  */
  readonly maxHeaderLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintMaxHeaderLineToTerraform(struct?: ObjectWafProfileConstraintMaxHeaderLineOutputReference | ObjectWafProfileConstraintMaxHeaderLine): any {
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


export function objectWafProfileConstraintMaxHeaderLineToHclTerraform(struct?: ObjectWafProfileConstraintMaxHeaderLineOutputReference | ObjectWafProfileConstraintMaxHeaderLine): any {
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

export class ObjectWafProfileConstraintMaxHeaderLineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintMaxHeaderLine | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintMaxHeaderLine | undefined) {
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
export interface ObjectWafProfileConstraintMaxRangeSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#max_range_segment ObjectWafProfile#max_range_segment}
  */
  readonly maxRangeSegment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintMaxRangeSegmentToTerraform(struct?: ObjectWafProfileConstraintMaxRangeSegmentOutputReference | ObjectWafProfileConstraintMaxRangeSegment): any {
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


export function objectWafProfileConstraintMaxRangeSegmentToHclTerraform(struct?: ObjectWafProfileConstraintMaxRangeSegmentOutputReference | ObjectWafProfileConstraintMaxRangeSegment): any {
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

export class ObjectWafProfileConstraintMaxRangeSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintMaxRangeSegment | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintMaxRangeSegment | undefined) {
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
export interface ObjectWafProfileConstraintMaxUrlParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#max_url_param ObjectWafProfile#max_url_param}
  */
  readonly maxUrlParam?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintMaxUrlParamToTerraform(struct?: ObjectWafProfileConstraintMaxUrlParamOutputReference | ObjectWafProfileConstraintMaxUrlParam): any {
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


export function objectWafProfileConstraintMaxUrlParamToHclTerraform(struct?: ObjectWafProfileConstraintMaxUrlParamOutputReference | ObjectWafProfileConstraintMaxUrlParam): any {
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

export class ObjectWafProfileConstraintMaxUrlParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintMaxUrlParam | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintMaxUrlParam | undefined) {
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
export interface ObjectWafProfileConstraintMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintMethodToTerraform(struct?: ObjectWafProfileConstraintMethodOutputReference | ObjectWafProfileConstraintMethod): any {
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


export function objectWafProfileConstraintMethodToHclTerraform(struct?: ObjectWafProfileConstraintMethodOutputReference | ObjectWafProfileConstraintMethod): any {
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

export class ObjectWafProfileConstraintMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintMethod | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintMethod | undefined) {
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
export interface ObjectWafProfileConstraintParamLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#length ObjectWafProfile#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintParamLengthToTerraform(struct?: ObjectWafProfileConstraintParamLengthOutputReference | ObjectWafProfileConstraintParamLength): any {
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


export function objectWafProfileConstraintParamLengthToHclTerraform(struct?: ObjectWafProfileConstraintParamLengthOutputReference | ObjectWafProfileConstraintParamLength): any {
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

export class ObjectWafProfileConstraintParamLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintParamLength | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintParamLength | undefined) {
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
export interface ObjectWafProfileConstraintUrlParamLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#length ObjectWafProfile#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintUrlParamLengthToTerraform(struct?: ObjectWafProfileConstraintUrlParamLengthOutputReference | ObjectWafProfileConstraintUrlParamLength): any {
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


export function objectWafProfileConstraintUrlParamLengthToHclTerraform(struct?: ObjectWafProfileConstraintUrlParamLengthOutputReference | ObjectWafProfileConstraintUrlParamLength): any {
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

export class ObjectWafProfileConstraintUrlParamLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintUrlParamLength | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintUrlParamLength | undefined) {
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
export interface ObjectWafProfileConstraintVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileConstraintVersionToTerraform(struct?: ObjectWafProfileConstraintVersionOutputReference | ObjectWafProfileConstraintVersion): any {
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


export function objectWafProfileConstraintVersionToHclTerraform(struct?: ObjectWafProfileConstraintVersionOutputReference | ObjectWafProfileConstraintVersion): any {
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

export class ObjectWafProfileConstraintVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraintVersion | undefined {
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

  public set internalValue(value: ObjectWafProfileConstraintVersion | undefined) {
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
export interface ObjectWafProfileConstraint {
  /**
  * content_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#content_length ObjectWafProfile#content_length}
  */
  readonly contentLength?: ObjectWafProfileConstraintContentLength;
  /**
  * exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#exception ObjectWafProfile#exception}
  */
  readonly exception?: ObjectWafProfileConstraintException[] | cdktf.IResolvable;
  /**
  * header_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#header_length ObjectWafProfile#header_length}
  */
  readonly headerLength?: ObjectWafProfileConstraintHeaderLength;
  /**
  * hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#hostname ObjectWafProfile#hostname}
  */
  readonly hostname?: ObjectWafProfileConstraintHostname;
  /**
  * line_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#line_length ObjectWafProfile#line_length}
  */
  readonly lineLength?: ObjectWafProfileConstraintLineLength;
  /**
  * malformed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#malformed ObjectWafProfile#malformed}
  */
  readonly malformed?: ObjectWafProfileConstraintMalformed;
  /**
  * max_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#max_cookie ObjectWafProfile#max_cookie}
  */
  readonly maxCookie?: ObjectWafProfileConstraintMaxCookie;
  /**
  * max_header_line block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#max_header_line ObjectWafProfile#max_header_line}
  */
  readonly maxHeaderLine?: ObjectWafProfileConstraintMaxHeaderLine;
  /**
  * max_range_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#max_range_segment ObjectWafProfile#max_range_segment}
  */
  readonly maxRangeSegment?: ObjectWafProfileConstraintMaxRangeSegment;
  /**
  * max_url_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#max_url_param ObjectWafProfile#max_url_param}
  */
  readonly maxUrlParam?: ObjectWafProfileConstraintMaxUrlParam;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#method ObjectWafProfile#method}
  */
  readonly method?: ObjectWafProfileConstraintMethod;
  /**
  * param_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#param_length ObjectWafProfile#param_length}
  */
  readonly paramLength?: ObjectWafProfileConstraintParamLength;
  /**
  * url_param_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#url_param_length ObjectWafProfile#url_param_length}
  */
  readonly urlParamLength?: ObjectWafProfileConstraintUrlParamLength;
  /**
  * version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#version ObjectWafProfile#version}
  */
  readonly version?: ObjectWafProfileConstraintVersion;
}

export function objectWafProfileConstraintToTerraform(struct?: ObjectWafProfileConstraintOutputReference | ObjectWafProfileConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_length: objectWafProfileConstraintContentLengthToTerraform(struct!.contentLength),
    exception: cdktf.listMapper(objectWafProfileConstraintExceptionToTerraform, true)(struct!.exception),
    header_length: objectWafProfileConstraintHeaderLengthToTerraform(struct!.headerLength),
    hostname: objectWafProfileConstraintHostnameToTerraform(struct!.hostname),
    line_length: objectWafProfileConstraintLineLengthToTerraform(struct!.lineLength),
    malformed: objectWafProfileConstraintMalformedToTerraform(struct!.malformed),
    max_cookie: objectWafProfileConstraintMaxCookieToTerraform(struct!.maxCookie),
    max_header_line: objectWafProfileConstraintMaxHeaderLineToTerraform(struct!.maxHeaderLine),
    max_range_segment: objectWafProfileConstraintMaxRangeSegmentToTerraform(struct!.maxRangeSegment),
    max_url_param: objectWafProfileConstraintMaxUrlParamToTerraform(struct!.maxUrlParam),
    method: objectWafProfileConstraintMethodToTerraform(struct!.method),
    param_length: objectWafProfileConstraintParamLengthToTerraform(struct!.paramLength),
    url_param_length: objectWafProfileConstraintUrlParamLengthToTerraform(struct!.urlParamLength),
    version: objectWafProfileConstraintVersionToTerraform(struct!.version),
  }
}


export function objectWafProfileConstraintToHclTerraform(struct?: ObjectWafProfileConstraintOutputReference | ObjectWafProfileConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_length: {
      value: objectWafProfileConstraintContentLengthToHclTerraform(struct!.contentLength),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintContentLengthList",
    },
    exception: {
      value: cdktf.listMapperHcl(objectWafProfileConstraintExceptionToHclTerraform, true)(struct!.exception),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintExceptionList",
    },
    header_length: {
      value: objectWafProfileConstraintHeaderLengthToHclTerraform(struct!.headerLength),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintHeaderLengthList",
    },
    hostname: {
      value: objectWafProfileConstraintHostnameToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintHostnameList",
    },
    line_length: {
      value: objectWafProfileConstraintLineLengthToHclTerraform(struct!.lineLength),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintLineLengthList",
    },
    malformed: {
      value: objectWafProfileConstraintMalformedToHclTerraform(struct!.malformed),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintMalformedList",
    },
    max_cookie: {
      value: objectWafProfileConstraintMaxCookieToHclTerraform(struct!.maxCookie),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintMaxCookieList",
    },
    max_header_line: {
      value: objectWafProfileConstraintMaxHeaderLineToHclTerraform(struct!.maxHeaderLine),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintMaxHeaderLineList",
    },
    max_range_segment: {
      value: objectWafProfileConstraintMaxRangeSegmentToHclTerraform(struct!.maxRangeSegment),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintMaxRangeSegmentList",
    },
    max_url_param: {
      value: objectWafProfileConstraintMaxUrlParamToHclTerraform(struct!.maxUrlParam),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintMaxUrlParamList",
    },
    method: {
      value: objectWafProfileConstraintMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintMethodList",
    },
    param_length: {
      value: objectWafProfileConstraintParamLengthToHclTerraform(struct!.paramLength),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintParamLengthList",
    },
    url_param_length: {
      value: objectWafProfileConstraintUrlParamLengthToHclTerraform(struct!.urlParamLength),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintUrlParamLengthList",
    },
    version: {
      value: objectWafProfileConstraintVersionToHclTerraform(struct!.version),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileConstraintVersionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLength = this._contentLength?.internalValue;
    }
    if (this._exception?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exception = this._exception?.internalValue;
    }
    if (this._headerLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerLength = this._headerLength?.internalValue;
    }
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._lineLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineLength = this._lineLength?.internalValue;
    }
    if (this._malformed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformed = this._malformed?.internalValue;
    }
    if (this._maxCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookie = this._maxCookie?.internalValue;
    }
    if (this._maxHeaderLine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderLine = this._maxHeaderLine?.internalValue;
    }
    if (this._maxRangeSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRangeSegment = this._maxRangeSegment?.internalValue;
    }
    if (this._maxUrlParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlParam = this._maxUrlParam?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._paramLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramLength = this._paramLength?.internalValue;
    }
    if (this._urlParamLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlParamLength = this._urlParamLength?.internalValue;
    }
    if (this._version?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentLength.internalValue = undefined;
      this._exception.internalValue = undefined;
      this._headerLength.internalValue = undefined;
      this._hostname.internalValue = undefined;
      this._lineLength.internalValue = undefined;
      this._malformed.internalValue = undefined;
      this._maxCookie.internalValue = undefined;
      this._maxHeaderLine.internalValue = undefined;
      this._maxRangeSegment.internalValue = undefined;
      this._maxUrlParam.internalValue = undefined;
      this._method.internalValue = undefined;
      this._paramLength.internalValue = undefined;
      this._urlParamLength.internalValue = undefined;
      this._version.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentLength.internalValue = value.contentLength;
      this._exception.internalValue = value.exception;
      this._headerLength.internalValue = value.headerLength;
      this._hostname.internalValue = value.hostname;
      this._lineLength.internalValue = value.lineLength;
      this._malformed.internalValue = value.malformed;
      this._maxCookie.internalValue = value.maxCookie;
      this._maxHeaderLine.internalValue = value.maxHeaderLine;
      this._maxRangeSegment.internalValue = value.maxRangeSegment;
      this._maxUrlParam.internalValue = value.maxUrlParam;
      this._method.internalValue = value.method;
      this._paramLength.internalValue = value.paramLength;
      this._urlParamLength.internalValue = value.urlParamLength;
      this._version.internalValue = value.version;
    }
  }

  // content_length - computed: false, optional: true, required: false
  private _contentLength = new ObjectWafProfileConstraintContentLengthOutputReference(this, "content_length");
  public get contentLength() {
    return this._contentLength;
  }
  public putContentLength(value: ObjectWafProfileConstraintContentLength) {
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
  private _exception = new ObjectWafProfileConstraintExceptionList(this, "exception", false);
  public get exception() {
    return this._exception;
  }
  public putException(value: ObjectWafProfileConstraintException[] | cdktf.IResolvable) {
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
  private _headerLength = new ObjectWafProfileConstraintHeaderLengthOutputReference(this, "header_length");
  public get headerLength() {
    return this._headerLength;
  }
  public putHeaderLength(value: ObjectWafProfileConstraintHeaderLength) {
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
  private _hostname = new ObjectWafProfileConstraintHostnameOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: ObjectWafProfileConstraintHostname) {
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
  private _lineLength = new ObjectWafProfileConstraintLineLengthOutputReference(this, "line_length");
  public get lineLength() {
    return this._lineLength;
  }
  public putLineLength(value: ObjectWafProfileConstraintLineLength) {
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
  private _malformed = new ObjectWafProfileConstraintMalformedOutputReference(this, "malformed");
  public get malformed() {
    return this._malformed;
  }
  public putMalformed(value: ObjectWafProfileConstraintMalformed) {
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
  private _maxCookie = new ObjectWafProfileConstraintMaxCookieOutputReference(this, "max_cookie");
  public get maxCookie() {
    return this._maxCookie;
  }
  public putMaxCookie(value: ObjectWafProfileConstraintMaxCookie) {
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
  private _maxHeaderLine = new ObjectWafProfileConstraintMaxHeaderLineOutputReference(this, "max_header_line");
  public get maxHeaderLine() {
    return this._maxHeaderLine;
  }
  public putMaxHeaderLine(value: ObjectWafProfileConstraintMaxHeaderLine) {
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
  private _maxRangeSegment = new ObjectWafProfileConstraintMaxRangeSegmentOutputReference(this, "max_range_segment");
  public get maxRangeSegment() {
    return this._maxRangeSegment;
  }
  public putMaxRangeSegment(value: ObjectWafProfileConstraintMaxRangeSegment) {
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
  private _maxUrlParam = new ObjectWafProfileConstraintMaxUrlParamOutputReference(this, "max_url_param");
  public get maxUrlParam() {
    return this._maxUrlParam;
  }
  public putMaxUrlParam(value: ObjectWafProfileConstraintMaxUrlParam) {
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
  private _method = new ObjectWafProfileConstraintMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: ObjectWafProfileConstraintMethod) {
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
  private _paramLength = new ObjectWafProfileConstraintParamLengthOutputReference(this, "param_length");
  public get paramLength() {
    return this._paramLength;
  }
  public putParamLength(value: ObjectWafProfileConstraintParamLength) {
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
  private _urlParamLength = new ObjectWafProfileConstraintUrlParamLengthOutputReference(this, "url_param_length");
  public get urlParamLength() {
    return this._urlParamLength;
  }
  public putUrlParamLength(value: ObjectWafProfileConstraintUrlParamLength) {
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
  private _version = new ObjectWafProfileConstraintVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }
  public putVersion(value: ObjectWafProfileConstraintVersion) {
    this._version.internalValue = value;
  }
  public resetVersion() {
    this._version.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }
}
export interface ObjectWafProfileMethodMethodPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#address ObjectWafProfile#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#allowed_methods ObjectWafProfile#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#id ObjectWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#pattern ObjectWafProfile#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#regex ObjectWafProfile#regex}
  */
  readonly regex?: string;
}

export function objectWafProfileMethodMethodPolicyToTerraform(struct?: ObjectWafProfileMethodMethodPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    id: cdktf.numberToTerraform(struct!.id),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function objectWafProfileMethodMethodPolicyToHclTerraform(struct?: ObjectWafProfileMethodMethodPolicy | cdktf.IResolvable): any {
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
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileMethodMethodPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWafProfileMethodMethodPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileMethodMethodPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._allowedMethods = undefined;
      this._id = undefined;
      this._pattern = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._allowedMethods = value.allowedMethods;
      this._id = value.id;
      this._pattern = value.pattern;
      this._regex = value.regex;
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

  // allowed_methods - computed: true, optional: true, required: false
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_methods'));
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
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
}

export class ObjectWafProfileMethodMethodPolicyList extends cdktf.ComplexList {
  public internalValue? : ObjectWafProfileMethodMethodPolicy[] | cdktf.IResolvable

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
  public get(index: number): ObjectWafProfileMethodMethodPolicyOutputReference {
    return new ObjectWafProfileMethodMethodPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWafProfileMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#default_allowed_methods ObjectWafProfile#default_allowed_methods}
  */
  readonly defaultAllowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
  /**
  * method_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#method_policy ObjectWafProfile#method_policy}
  */
  readonly methodPolicy?: ObjectWafProfileMethodMethodPolicy[] | cdktf.IResolvable;
}

export function objectWafProfileMethodToTerraform(struct?: ObjectWafProfileMethodOutputReference | ObjectWafProfileMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultAllowedMethods),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
    method_policy: cdktf.listMapper(objectWafProfileMethodMethodPolicyToTerraform, true)(struct!.methodPolicy),
  }
}


export function objectWafProfileMethodToHclTerraform(struct?: ObjectWafProfileMethodOutputReference | ObjectWafProfileMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultAllowedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    method_policy: {
      value: cdktf.listMapperHcl(objectWafProfileMethodMethodPolicyToHclTerraform, true)(struct!.methodPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileMethodMethodPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAllowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAllowedMethods = this._defaultAllowedMethods;
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
    if (this._methodPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodPolicy = this._methodPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultAllowedMethods = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
      this._methodPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultAllowedMethods = value.defaultAllowedMethods;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
      this._methodPolicy.internalValue = value.methodPolicy;
    }
  }

  // default_allowed_methods - computed: true, optional: true, required: false
  private _defaultAllowedMethods?: string[]; 
  public get defaultAllowedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('default_allowed_methods'));
  }
  public set defaultAllowedMethods(value: string[]) {
    this._defaultAllowedMethods = value;
  }
  public resetDefaultAllowedMethods() {
    this._defaultAllowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAllowedMethodsInput() {
    return this._defaultAllowedMethods;
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

  // method_policy - computed: false, optional: true, required: false
  private _methodPolicy = new ObjectWafProfileMethodMethodPolicyList(this, "method_policy", false);
  public get methodPolicy() {
    return this._methodPolicy;
  }
  public putMethodPolicy(value: ObjectWafProfileMethodMethodPolicy[] | cdktf.IResolvable) {
    this._methodPolicy.internalValue = value;
  }
  public resetMethodPolicy() {
    this._methodPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodPolicyInput() {
    return this._methodPolicy.internalValue;
  }
}
export interface ObjectWafProfileSignatureCustomSignature {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#case_sensitivity ObjectWafProfile#case_sensitivity}
  */
  readonly caseSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#direction ObjectWafProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#name ObjectWafProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#pattern ObjectWafProfile#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#target ObjectWafProfile#target}
  */
  readonly target?: string[];
}

export function objectWafProfileSignatureCustomSignatureToTerraform(struct?: ObjectWafProfileSignatureCustomSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    case_sensitivity: cdktf.stringToTerraform(struct!.caseSensitivity),
    direction: cdktf.stringToTerraform(struct!.direction),
    log: cdktf.stringToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
    target: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.target),
  }
}


export function objectWafProfileSignatureCustomSignatureToHclTerraform(struct?: ObjectWafProfileSignatureCustomSignature | cdktf.IResolvable): any {
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
    case_sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.caseSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    target: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.target),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileSignatureCustomSignatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWafProfileSignatureCustomSignature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._caseSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitivity = this._caseSensitivity;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileSignatureCustomSignature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._caseSensitivity = undefined;
      this._direction = undefined;
      this._log = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._severity = undefined;
      this._status = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._caseSensitivity = value.caseSensitivity;
      this._direction = value.direction;
      this._log = value.log;
      this._name = value.name;
      this._pattern = value.pattern;
      this._severity = value.severity;
      this._status = value.status;
      this._target = value.target;
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

  // case_sensitivity - computed: true, optional: true, required: false
  private _caseSensitivity?: string; 
  public get caseSensitivity() {
    return this.getStringAttribute('case_sensitivity');
  }
  public set caseSensitivity(value: string) {
    this._caseSensitivity = value;
  }
  public resetCaseSensitivity() {
    this._caseSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitivityInput() {
    return this._caseSensitivity;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // target - computed: true, optional: true, required: false
  private _target?: string[]; 
  public get target() {
    return cdktf.Fn.tolist(this.getListAttribute('target'));
  }
  public set target(value: string[]) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class ObjectWafProfileSignatureCustomSignatureList extends cdktf.ComplexList {
  public internalValue? : ObjectWafProfileSignatureCustomSignature[] | cdktf.IResolvable

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
  public get(index: number): ObjectWafProfileSignatureCustomSignatureOutputReference {
    return new ObjectWafProfileSignatureCustomSignatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWafProfileSignatureMainClass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#id ObjectWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#status ObjectWafProfile#status}
  */
  readonly status?: string;
}

export function objectWafProfileSignatureMainClassToTerraform(struct?: ObjectWafProfileSignatureMainClassOutputReference | ObjectWafProfileSignatureMainClass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.numberToTerraform(struct!.id),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectWafProfileSignatureMainClassToHclTerraform(struct?: ObjectWafProfileSignatureMainClassOutputReference | ObjectWafProfileSignatureMainClass): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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

export class ObjectWafProfileSignatureMainClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileSignatureMainClass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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

  public set internalValue(value: ObjectWafProfileSignatureMainClass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._id = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._id = value.id;
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
export interface ObjectWafProfileSignature {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#credit_card_detection_threshold ObjectWafProfile#credit_card_detection_threshold}
  */
  readonly creditCardDetectionThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#disabled_signature ObjectWafProfile#disabled_signature}
  */
  readonly disabledSignature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#disabled_sub_class ObjectWafProfile#disabled_sub_class}
  */
  readonly disabledSubClass?: string;
  /**
  * custom_signature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#custom_signature ObjectWafProfile#custom_signature}
  */
  readonly customSignature?: ObjectWafProfileSignatureCustomSignature[] | cdktf.IResolvable;
  /**
  * main_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#main_class ObjectWafProfile#main_class}
  */
  readonly mainClass?: ObjectWafProfileSignatureMainClass;
}

export function objectWafProfileSignatureToTerraform(struct?: ObjectWafProfileSignatureOutputReference | ObjectWafProfileSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credit_card_detection_threshold: cdktf.numberToTerraform(struct!.creditCardDetectionThreshold),
    disabled_signature: cdktf.stringToTerraform(struct!.disabledSignature),
    disabled_sub_class: cdktf.stringToTerraform(struct!.disabledSubClass),
    custom_signature: cdktf.listMapper(objectWafProfileSignatureCustomSignatureToTerraform, true)(struct!.customSignature),
    main_class: objectWafProfileSignatureMainClassToTerraform(struct!.mainClass),
  }
}


export function objectWafProfileSignatureToHclTerraform(struct?: ObjectWafProfileSignatureOutputReference | ObjectWafProfileSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credit_card_detection_threshold: {
      value: cdktf.numberToHclTerraform(struct!.creditCardDetectionThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disabled_signature: {
      value: cdktf.stringToHclTerraform(struct!.disabledSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled_sub_class: {
      value: cdktf.stringToHclTerraform(struct!.disabledSubClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_signature: {
      value: cdktf.listMapperHcl(objectWafProfileSignatureCustomSignatureToHclTerraform, true)(struct!.customSignature),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileSignatureCustomSignatureList",
    },
    main_class: {
      value: objectWafProfileSignatureMainClassToHclTerraform(struct!.mainClass),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileSignatureMainClassList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWafProfileSignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creditCardDetectionThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.creditCardDetectionThreshold = this._creditCardDetectionThreshold;
    }
    if (this._disabledSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledSignature = this._disabledSignature;
    }
    if (this._disabledSubClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledSubClass = this._disabledSubClass;
    }
    if (this._customSignature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSignature = this._customSignature?.internalValue;
    }
    if (this._mainClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClass = this._mainClass?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileSignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._creditCardDetectionThreshold = undefined;
      this._disabledSignature = undefined;
      this._disabledSubClass = undefined;
      this._customSignature.internalValue = undefined;
      this._mainClass.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._creditCardDetectionThreshold = value.creditCardDetectionThreshold;
      this._disabledSignature = value.disabledSignature;
      this._disabledSubClass = value.disabledSubClass;
      this._customSignature.internalValue = value.customSignature;
      this._mainClass.internalValue = value.mainClass;
    }
  }

  // credit_card_detection_threshold - computed: true, optional: true, required: false
  private _creditCardDetectionThreshold?: number; 
  public get creditCardDetectionThreshold() {
    return this.getNumberAttribute('credit_card_detection_threshold');
  }
  public set creditCardDetectionThreshold(value: number) {
    this._creditCardDetectionThreshold = value;
  }
  public resetCreditCardDetectionThreshold() {
    this._creditCardDetectionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditCardDetectionThresholdInput() {
    return this._creditCardDetectionThreshold;
  }

  // disabled_signature - computed: false, optional: true, required: false
  private _disabledSignature?: string; 
  public get disabledSignature() {
    return this.getStringAttribute('disabled_signature');
  }
  public set disabledSignature(value: string) {
    this._disabledSignature = value;
  }
  public resetDisabledSignature() {
    this._disabledSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledSignatureInput() {
    return this._disabledSignature;
  }

  // disabled_sub_class - computed: false, optional: true, required: false
  private _disabledSubClass?: string; 
  public get disabledSubClass() {
    return this.getStringAttribute('disabled_sub_class');
  }
  public set disabledSubClass(value: string) {
    this._disabledSubClass = value;
  }
  public resetDisabledSubClass() {
    this._disabledSubClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledSubClassInput() {
    return this._disabledSubClass;
  }

  // custom_signature - computed: false, optional: true, required: false
  private _customSignature = new ObjectWafProfileSignatureCustomSignatureList(this, "custom_signature", false);
  public get customSignature() {
    return this._customSignature;
  }
  public putCustomSignature(value: ObjectWafProfileSignatureCustomSignature[] | cdktf.IResolvable) {
    this._customSignature.internalValue = value;
  }
  public resetCustomSignature() {
    this._customSignature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSignatureInput() {
    return this._customSignature.internalValue;
  }

  // main_class - computed: false, optional: true, required: false
  private _mainClass = new ObjectWafProfileSignatureMainClassOutputReference(this, "main_class");
  public get mainClass() {
    return this._mainClass;
  }
  public putMainClass(value: ObjectWafProfileSignatureMainClass) {
    this._mainClass.internalValue = value;
  }
  public resetMainClass() {
    this._mainClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassInput() {
    return this._mainClass.internalValue;
  }
}
export interface ObjectWafProfileUrlAccessAccessPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#id ObjectWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#negate ObjectWafProfile#negate}
  */
  readonly negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#pattern ObjectWafProfile#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#regex ObjectWafProfile#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#srcaddr ObjectWafProfile#srcaddr}
  */
  readonly srcaddr?: string;
}

export function objectWafProfileUrlAccessAccessPatternToTerraform(struct?: ObjectWafProfileUrlAccessAccessPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    negate: cdktf.stringToTerraform(struct!.negate),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    regex: cdktf.stringToTerraform(struct!.regex),
    srcaddr: cdktf.stringToTerraform(struct!.srcaddr),
  }
}


export function objectWafProfileUrlAccessAccessPatternToHclTerraform(struct?: ObjectWafProfileUrlAccessAccessPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    negate: {
      value: cdktf.stringToHclTerraform(struct!.negate),
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
    srcaddr: {
      value: cdktf.stringToHclTerraform(struct!.srcaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileUrlAccessAccessPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWafProfileUrlAccessAccessPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._srcaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcaddr = this._srcaddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileUrlAccessAccessPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._negate = undefined;
      this._pattern = undefined;
      this._regex = undefined;
      this._srcaddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._negate = value.negate;
      this._pattern = value.pattern;
      this._regex = value.regex;
      this._srcaddr = value.srcaddr;
    }
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

  // negate - computed: true, optional: true, required: false
  private _negate?: string; 
  public get negate() {
    return this.getStringAttribute('negate');
  }
  public set negate(value: string) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
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

  // srcaddr - computed: false, optional: true, required: false
  private _srcaddr?: string; 
  public get srcaddr() {
    return this.getStringAttribute('srcaddr');
  }
  public set srcaddr(value: string) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }
}

export class ObjectWafProfileUrlAccessAccessPatternList extends cdktf.ComplexList {
  public internalValue? : ObjectWafProfileUrlAccessAccessPattern[] | cdktf.IResolvable

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
  public get(index: number): ObjectWafProfileUrlAccessAccessPatternOutputReference {
    return new ObjectWafProfileUrlAccessAccessPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWafProfileUrlAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#action ObjectWafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#address ObjectWafProfile#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#id ObjectWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#log ObjectWafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#severity ObjectWafProfile#severity}
  */
  readonly severity?: string;
  /**
  * access_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#access_pattern ObjectWafProfile#access_pattern}
  */
  readonly accessPattern?: ObjectWafProfileUrlAccessAccessPattern[] | cdktf.IResolvable;
}

export function objectWafProfileUrlAccessToTerraform(struct?: ObjectWafProfileUrlAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    address: cdktf.stringToTerraform(struct!.address),
    id: cdktf.numberToTerraform(struct!.id),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    access_pattern: cdktf.listMapper(objectWafProfileUrlAccessAccessPatternToTerraform, true)(struct!.accessPattern),
  }
}


export function objectWafProfileUrlAccessToHclTerraform(struct?: ObjectWafProfileUrlAccess | cdktf.IResolvable): any {
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
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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
    access_pattern: {
      value: cdktf.listMapperHcl(objectWafProfileUrlAccessAccessPatternToHclTerraform, true)(struct!.accessPattern),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWafProfileUrlAccessAccessPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWafProfileUrlAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWafProfileUrlAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._accessPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPattern = this._accessPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWafProfileUrlAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._address = undefined;
      this._id = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._accessPattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._address = value.address;
      this._id = value.id;
      this._log = value.log;
      this._severity = value.severity;
      this._accessPattern.internalValue = value.accessPattern;
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

  // access_pattern - computed: false, optional: true, required: false
  private _accessPattern = new ObjectWafProfileUrlAccessAccessPatternList(this, "access_pattern", false);
  public get accessPattern() {
    return this._accessPattern;
  }
  public putAccessPattern(value: ObjectWafProfileUrlAccessAccessPattern[] | cdktf.IResolvable) {
    this._accessPattern.internalValue = value;
  }
  public resetAccessPattern() {
    this._accessPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPatternInput() {
    return this._accessPattern.internalValue;
  }
}

export class ObjectWafProfileUrlAccessList extends cdktf.ComplexList {
  public internalValue? : ObjectWafProfileUrlAccess[] | cdktf.IResolvable

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
  public get(index: number): ObjectWafProfileUrlAccessOutputReference {
    return new ObjectWafProfileUrlAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile fortimanager_object_waf_profile}
*/
export class ObjectWafProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_waf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWafProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWafProfile to import
  * @param importFromId The id of the existing ObjectWafProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWafProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_waf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_waf_profile fortimanager_object_waf_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWafProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectWafProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_waf_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extendedLog = config.extendedLog;
    this._external = config.external;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._addressList.internalValue = config.addressList;
    this._constraint.internalValue = config.constraint;
    this._method.internalValue = config.method;
    this._signature.internalValue = config.signature;
    this._urlAccess.internalValue = config.urlAccess;
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // extended_log - computed: true, optional: true, required: false
  private _extendedLog?: string; 
  public get extendedLog() {
    return this.getStringAttribute('extended_log');
  }
  public set extendedLog(value: string) {
    this._extendedLog = value;
  }
  public resetExtendedLog() {
    this._extendedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedLogInput() {
    return this._extendedLog;
  }

  // external - computed: true, optional: true, required: false
  private _external?: string; 
  public get external() {
    return this.getStringAttribute('external');
  }
  public set external(value: string) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // address_list - computed: false, optional: true, required: false
  private _addressList = new ObjectWafProfileAddressListStructOutputReference(this, "address_list");
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: ObjectWafProfileAddressListStruct) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // constraint - computed: false, optional: true, required: false
  private _constraint = new ObjectWafProfileConstraintOutputReference(this, "constraint");
  public get constraint() {
    return this._constraint;
  }
  public putConstraint(value: ObjectWafProfileConstraint) {
    this._constraint.internalValue = value;
  }
  public resetConstraint() {
    this._constraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new ObjectWafProfileMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: ObjectWafProfileMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // signature - computed: false, optional: true, required: false
  private _signature = new ObjectWafProfileSignatureOutputReference(this, "signature");
  public get signature() {
    return this._signature;
  }
  public putSignature(value: ObjectWafProfileSignature) {
    this._signature.internalValue = value;
  }
  public resetSignature() {
    this._signature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature.internalValue;
  }

  // url_access - computed: false, optional: true, required: false
  private _urlAccess = new ObjectWafProfileUrlAccessList(this, "url_access", false);
  public get urlAccess() {
    return this._urlAccess;
  }
  public putUrlAccess(value: ObjectWafProfileUrlAccess[] | cdktf.IResolvable) {
    this._urlAccess.internalValue = value;
  }
  public resetUrlAccess() {
    this._urlAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlAccessInput() {
    return this._urlAccess.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extended_log: cdktf.stringToTerraform(this._extendedLog),
      external: cdktf.stringToTerraform(this._external),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      address_list: objectWafProfileAddressListStructToTerraform(this._addressList.internalValue),
      constraint: objectWafProfileConstraintToTerraform(this._constraint.internalValue),
      method: objectWafProfileMethodToTerraform(this._method.internalValue),
      signature: objectWafProfileSignatureToTerraform(this._signature.internalValue),
      url_access: cdktf.listMapper(objectWafProfileUrlAccessToTerraform, true)(this._urlAccess.internalValue),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      extended_log: {
        value: cdktf.stringToHclTerraform(this._extendedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external: {
        value: cdktf.stringToHclTerraform(this._external),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      address_list: {
        value: objectWafProfileAddressListStructToHclTerraform(this._addressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileAddressListStructList",
      },
      constraint: {
        value: objectWafProfileConstraintToHclTerraform(this._constraint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileConstraintList",
      },
      method: {
        value: objectWafProfileMethodToHclTerraform(this._method.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileMethodList",
      },
      signature: {
        value: objectWafProfileSignatureToHclTerraform(this._signature.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileSignatureList",
      },
      url_access: {
        value: cdktf.listMapperHcl(objectWafProfileUrlAccessToHclTerraform, true)(this._urlAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWafProfileUrlAccessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
