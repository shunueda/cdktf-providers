// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoL7AccRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#id TeoL7AccRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Zone id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#zone_id TeoL7AccRule#zone_id}
  */
  readonly zoneId: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#rules TeoL7AccRule#rules}
  */
  readonly rules?: TeoL7AccRuleRules[] | cdktf.IResolvable;
}
export interface TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostName {
  /**
  * Target hostname configuration, valid values are: follow: follow the request; custom: custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#action TeoL7AccRule#action}
  */
  readonly action?: string;
  /**
  * Custom value for target hostname, maximum length is 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#value TeoL7AccRule#value}
  */
  readonly value?: string;
}

export function teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostNameToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostNameOutputReference | TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostNameToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostNameOutputReference | TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostName): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._value = value.value;
    }
  }

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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryString {
  /**
  * Action to be executed. values: full: retain all; ignore: ignore all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#action TeoL7AccRule#action}
  */
  readonly action?: string;
}

export function teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryStringToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryStringOutputReference | TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryStringToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryStringOutputReference | TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryString): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
    }
  }

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
}
export interface TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPath {
  /**
  * Action to be executed. values: follow: follow the request; custom: custom; regex: regular expression matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#action TeoL7AccRule#action}
  */
  readonly action?: string;
  /**
  * Regular expression matching expression, length range is 1-1024. note: when action is regex, this field is required; when action is follow or custom, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#regex TeoL7AccRule#regex}
  */
  readonly regex?: string;
  /**
  * Redirect target url, length range is 1-1024.note: when action is regex or custom, this field is required; when action is follow, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#value TeoL7AccRule#value}
  */
  readonly value?: string;
}

export function teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPathToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPathOutputReference | TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    regex: cdktf.stringToTerraform(struct!.regex),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPathToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPathOutputReference | TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPath): any {
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._regex = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._regex = value.regex;
      this._value = value.value;
    }
  }

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

  // regex - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParameters {
  /**
  * Target request protocol. valid values: http: target request protocol http; https: target request protocol https; follow: follow the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#protocol TeoL7AccRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Status code. valid values: 301, 302, 303, 307, 308.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#status_code TeoL7AccRule#status_code}
  */
  readonly statusCode?: number;
  /**
  * host_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#host_name TeoL7AccRule#host_name}
  */
  readonly hostName?: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostName;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#query_string TeoL7AccRule#query_string}
  */
  readonly queryString?: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryString;
  /**
  * url_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#url_path TeoL7AccRule#url_path}
  */
  readonly urlPath?: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPath;
}

export function teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersOutputReference | TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    host_name: teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostNameToTerraform(struct!.hostName),
    query_string: teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryStringToTerraform(struct!.queryString),
    url_path: teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPathToTerraform(struct!.urlPath),
  }
}


export function teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersOutputReference | TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_name: {
      value: teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostNameToHclTerraform(struct!.hostName),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostNameList",
    },
    query_string: {
      value: teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryStringToHclTerraform(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryStringList",
    },
    url_path: {
      value: teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPathToHclTerraform(struct!.urlPath),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._hostName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._urlPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._hostName.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._urlPath.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._hostName.internalValue = value.hostName;
      this._queryString.internalValue = value.queryString;
      this._urlPath.internalValue = value.urlPath;
    }
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName = new TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostNameOutputReference(this, "host_name");
  public get hostName() {
    return this._hostName;
  }
  public putHostName(value: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersHostName) {
    this._hostName.internalValue = value;
  }
  public resetHostName() {
    this._hostName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // url_path - computed: false, optional: true, required: false
  private _urlPath = new TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPathOutputReference(this, "url_path");
  public get urlPath() {
    return this._urlPath;
  }
  public putUrlPath(value: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersUrlPath) {
    this._urlPath.internalValue = value;
  }
  public resetUrlPath() {
    this._urlPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath.internalValue;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsAuthenticationParameters {
  /**
  * Authentication parameters name. the node will validate the value corresponding to this parameter name. consists of 1-100 uppercase and lowercase letters, numbers, or underscores.note: this field is required when authtype is either typea or typed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#auth_param TeoL7AccRule#auth_param}
  */
  readonly authParam?: string;
  /**
  * Authentication type. valid values:
  * - `TypeA`: authentication method a type, for specific meaning please refer to authentication method a. https://www.tencentcloud.com/document/product/1145/62475;
  * - `TypeB`: authentication method b type, for specific meaning please refer to authentication method b. https://www.tencentcloud.com/document/product/1145/62476;
  * - `TypeC`: authentication method c type, for specific meaning please refer to authentication method c. https://www.tencentcloud.com/document/product/1145/62477;
  * - `TypeD`: authentication method d type, for specific meaning please refer to authentication method d. https://www.tencentcloud.com/document/product/1145/62478;
  * - `TypeVOD`: authentication method v type, for specific meaning please refer to authentication method v. https://www.tencentcloud.com/document/product/1145/62479.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#auth_type TeoL7AccRule#auth_type}
  */
  readonly authType?: string;
  /**
  * The backup authentication key consists of 6-40 uppercase and lowercase english letters or digits, and cannot contain " and $.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#backup_secret_key TeoL7AccRule#backup_secret_key}
  */
  readonly backupSecretKey?: string;
  /**
  * The primary authentication key consists of 6-40 uppercase and lowercase english letters or digits, and cannot contain " and $.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#secret_key TeoL7AccRule#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Authentication time format. values: dec: decimal; hex: hexadecimal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#time_format TeoL7AccRule#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Authentication timestamp. it cannot be the same as the value of the authparam field.note: this field is required when authtype is typed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#time_param TeoL7AccRule#time_param}
  */
  readonly timeParam?: string;
  /**
  * Validity period of the authentication url, in seconds, value range: 1-630720000. used to determine if the client access request has expired: If the current time exceeds "timestamp + validity period", it is an expired request, and a 403 is returned directly. If the current time does not exceed "timestamp + validity period", the request is not expired, and the md5 string is further validated. note: when authtype is one of typea, typeb, typec, or typed, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#timeout TeoL7AccRule#timeout}
  */
  readonly timeout?: number;
}

export function teoL7AccRuleRulesBranchesActionsAuthenticationParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsAuthenticationParametersOutputReference | TeoL7AccRuleRulesBranchesActionsAuthenticationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_param: cdktf.stringToTerraform(struct!.authParam),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    backup_secret_key: cdktf.stringToTerraform(struct!.backupSecretKey),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_param: cdktf.stringToTerraform(struct!.timeParam),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function teoL7AccRuleRulesBranchesActionsAuthenticationParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsAuthenticationParametersOutputReference | TeoL7AccRuleRulesBranchesActionsAuthenticationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_param: {
      value: cdktf.stringToHclTerraform(struct!.authParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.backupSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_param: {
      value: cdktf.stringToHclTerraform(struct!.timeParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsAuthenticationParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsAuthenticationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.authParam = this._authParam;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._backupSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSecretKey = this._backupSecretKey;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeParam = this._timeParam;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsAuthenticationParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authParam = undefined;
      this._authType = undefined;
      this._backupSecretKey = undefined;
      this._secretKey = undefined;
      this._timeFormat = undefined;
      this._timeParam = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authParam = value.authParam;
      this._authType = value.authType;
      this._backupSecretKey = value.backupSecretKey;
      this._secretKey = value.secretKey;
      this._timeFormat = value.timeFormat;
      this._timeParam = value.timeParam;
      this._timeout = value.timeout;
    }
  }

  // auth_param - computed: false, optional: true, required: false
  private _authParam?: string; 
  public get authParam() {
    return this.getStringAttribute('auth_param');
  }
  public set authParam(value: string) {
    this._authParam = value;
  }
  public resetAuthParam() {
    this._authParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authParamInput() {
    return this._authParam;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // backup_secret_key - computed: false, optional: true, required: false
  private _backupSecretKey?: string; 
  public get backupSecretKey() {
    return this.getStringAttribute('backup_secret_key');
  }
  public set backupSecretKey(value: string) {
    this._backupSecretKey = value;
  }
  public resetBackupSecretKey() {
    this._backupSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSecretKeyInput() {
    return this._backupSecretKey;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_param - computed: false, optional: true, required: false
  private _timeParam?: string; 
  public get timeParam() {
    return this.getStringAttribute('time_param');
  }
  public set timeParam(value: string) {
    this._timeParam = value;
  }
  public resetTimeParam() {
    this._timeParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeParamInput() {
    return this._timeParam;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsCacheKeyParametersCookie {
  /**
  * Cache action. values: full: retain all; ignore: ignore all; includeCustom: retain partial parameters; excludeCustom: ignore partial parameters. note: when switch is on, this field is required. when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#action TeoL7AccRule#action}
  */
  readonly action?: string;
  /**
  * Whether to enable feature. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
  /**
  * Custom cache key cookie name list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#values TeoL7AccRule#values}
  */
  readonly values?: string[];
}

export function teoL7AccRuleRulesBranchesActionsCacheKeyParametersCookieToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersCookieOutputReference | TeoL7AccRuleRulesBranchesActionsCacheKeyParametersCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    switch: cdktf.stringToTerraform(struct!.switch),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoL7AccRuleRulesBranchesActionsCacheKeyParametersCookieToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersCookieOutputReference | TeoL7AccRuleRulesBranchesActionsCacheKeyParametersCookie): any {
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
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsCacheKeyParametersCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsCacheKeyParametersCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._switch = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._switch = value.switch;
      this._values = value.values;
    }
  }

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

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsCacheKeyParametersHeader {
  /**
  * Whether to enable feature. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
  /**
  * Custom cache key http request header list. note: this field is required when switch is on; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#values TeoL7AccRule#values}
  */
  readonly values?: string[];
}

export function teoL7AccRuleRulesBranchesActionsCacheKeyParametersHeaderToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersHeaderOutputReference | TeoL7AccRuleRulesBranchesActionsCacheKeyParametersHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoL7AccRuleRulesBranchesActionsCacheKeyParametersHeaderToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersHeaderOutputReference | TeoL7AccRuleRulesBranchesActionsCacheKeyParametersHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsCacheKeyParametersHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsCacheKeyParametersHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._values = value.values;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryString {
  /**
  * Actions to retain/ignore specified parameters in the query string. values: `includeCustom`: retain partial parameters. `excludeCustom`: ignore partial parameters.note: this field is required when switch is on. when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#action TeoL7AccRule#action}
  */
  readonly action?: string;
  /**
  * Query string retain/ignore specified parameter switch. valid values are: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
  /**
  * A list of parameter names to keep/ignore in the query string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#values TeoL7AccRule#values}
  */
  readonly values?: string[];
}

export function teoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryStringToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryStringOutputReference | TeoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    switch: cdktf.stringToTerraform(struct!.switch),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryStringToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryStringOutputReference | TeoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryString): any {
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
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._switch = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._switch = value.switch;
      this._values = value.values;
    }
  }

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

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsCacheKeyParameters {
  /**
  * Switch for retaining the complete query string. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#full_url_cache TeoL7AccRule#full_url_cache}
  */
  readonly fullUrlCache?: string;
  /**
  * Switch for ignoring case. values: enable; off: disable.note: at least one of fullurlcache, ignorecase, header, scheme, or cookie must be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#ignore_case TeoL7AccRule#ignore_case}
  */
  readonly ignoreCase?: string;
  /**
  * Request protocol switch. valid values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#scheme TeoL7AccRule#scheme}
  */
  readonly scheme?: string;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#cookie TeoL7AccRule#cookie}
  */
  readonly cookie?: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersCookie;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#header TeoL7AccRule#header}
  */
  readonly header?: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersHeader;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#query_string TeoL7AccRule#query_string}
  */
  readonly queryString?: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryString;
}

export function teoL7AccRuleRulesBranchesActionsCacheKeyParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersOutputReference | TeoL7AccRuleRulesBranchesActionsCacheKeyParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_url_cache: cdktf.stringToTerraform(struct!.fullUrlCache),
    ignore_case: cdktf.stringToTerraform(struct!.ignoreCase),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    cookie: teoL7AccRuleRulesBranchesActionsCacheKeyParametersCookieToTerraform(struct!.cookie),
    header: teoL7AccRuleRulesBranchesActionsCacheKeyParametersHeaderToTerraform(struct!.header),
    query_string: teoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryStringToTerraform(struct!.queryString),
  }
}


export function teoL7AccRuleRulesBranchesActionsCacheKeyParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersOutputReference | TeoL7AccRuleRulesBranchesActionsCacheKeyParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_url_cache: {
      value: cdktf.stringToHclTerraform(struct!.fullUrlCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.stringToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie: {
      value: teoL7AccRuleRulesBranchesActionsCacheKeyParametersCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsCacheKeyParametersCookieList",
    },
    header: {
      value: teoL7AccRuleRulesBranchesActionsCacheKeyParametersHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsCacheKeyParametersHeaderList",
    },
    query_string: {
      value: teoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryStringToHclTerraform(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsCacheKeyParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsCacheKeyParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullUrlCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullUrlCache = this._fullUrlCache;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsCacheKeyParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullUrlCache = undefined;
      this._ignoreCase = undefined;
      this._scheme = undefined;
      this._cookie.internalValue = undefined;
      this._header.internalValue = undefined;
      this._queryString.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullUrlCache = value.fullUrlCache;
      this._ignoreCase = value.ignoreCase;
      this._scheme = value.scheme;
      this._cookie.internalValue = value.cookie;
      this._header.internalValue = value.header;
      this._queryString.internalValue = value.queryString;
    }
  }

  // full_url_cache - computed: false, optional: true, required: false
  private _fullUrlCache?: string; 
  public get fullUrlCache() {
    return this.getStringAttribute('full_url_cache');
  }
  public set fullUrlCache(value: string) {
    this._fullUrlCache = value;
  }
  public resetFullUrlCache() {
    this._fullUrlCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullUrlCacheInput() {
    return this._fullUrlCache;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: string; 
  public get ignoreCase() {
    return this.getStringAttribute('ignore_case');
  }
  public set ignoreCase(value: string) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new TeoL7AccRuleRulesBranchesActionsCacheKeyParametersCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new TeoL7AccRuleRulesBranchesActionsCacheKeyParametersHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new TeoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: TeoL7AccRuleRulesBranchesActionsCacheKeyParametersQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsCacheParametersCustomTime {
  /**
  * Custom cache time value, unit: seconds. value range: 0-315360000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#cache_time TeoL7AccRule#cache_time}
  */
  readonly cacheTime?: number;
  /**
  * Ignore origin server cachecontrol switch. values: `on`: Enable; `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#ignore_cache_control TeoL7AccRule#ignore_cache_control}
  */
  readonly ignoreCacheControl?: string;
  /**
  * Custom cache time switch. values: `on`: Enable; `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsCacheParametersCustomTimeToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheParametersCustomTimeOutputReference | TeoL7AccRuleRulesBranchesActionsCacheParametersCustomTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time: cdktf.numberToTerraform(struct!.cacheTime),
    ignore_cache_control: cdktf.stringToTerraform(struct!.ignoreCacheControl),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsCacheParametersCustomTimeToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheParametersCustomTimeOutputReference | TeoL7AccRuleRulesBranchesActionsCacheParametersCustomTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_time: {
      value: cdktf.numberToHclTerraform(struct!.cacheTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_cache_control: {
      value: cdktf.stringToHclTerraform(struct!.ignoreCacheControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsCacheParametersCustomTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsCacheParametersCustomTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTime = this._cacheTime;
    }
    if (this._ignoreCacheControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCacheControl = this._ignoreCacheControl;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsCacheParametersCustomTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTime = undefined;
      this._ignoreCacheControl = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTime = value.cacheTime;
      this._ignoreCacheControl = value.ignoreCacheControl;
      this._switch = value.switch;
    }
  }

  // cache_time - computed: false, optional: true, required: false
  private _cacheTime?: number; 
  public get cacheTime() {
    return this.getNumberAttribute('cache_time');
  }
  public set cacheTime(value: number) {
    this._cacheTime = value;
  }
  public resetCacheTime() {
    this._cacheTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeInput() {
    return this._cacheTime;
  }

  // ignore_cache_control - computed: false, optional: true, required: false
  private _ignoreCacheControl?: string; 
  public get ignoreCacheControl() {
    return this.getStringAttribute('ignore_cache_control');
  }
  public set ignoreCacheControl(value: string) {
    this._ignoreCacheControl = value;
  }
  public resetIgnoreCacheControl() {
    this._ignoreCacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCacheControlInput() {
    return this._ignoreCacheControl;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsCacheParametersFollowOrigin {
  /**
  * Whether to cache when an origin server does not return the cache-control header. this field is required when switch is on; when switch is off, this field is not required and will be ineffective if filled. valid values: On: cache; Off: do not cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#default_cache TeoL7AccRule#default_cache}
  */
  readonly defaultCache?: string;
  /**
  * Whether to use the default caching policy when an origin server does not return the cache-control header. this field is required when defaultcache is set to on; otherwise, it is ineffective. when defaultcachetime is not 0, this field should be off. valid values: on: use the default caching policy. off: do not use the default caching policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#default_cache_strategy TeoL7AccRule#default_cache_strategy}
  */
  readonly defaultCacheStrategy?: string;
  /**
  * The default cache time in seconds when an origin server does not return the cache-control header. the value ranges from 0 to 315360000. this field is required when defaultcache is set to on; otherwise, it is ineffective. when defaultcachestrategy is on, this field should be 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#default_cache_time TeoL7AccRule#default_cache_time}
  */
  readonly defaultCacheTime?: number;
  /**
  * Whether to enable the configuration of following the origin server. Valid values: `on`: Enable; `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch: string;
}

export function teoL7AccRuleRulesBranchesActionsCacheParametersFollowOriginToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheParametersFollowOriginOutputReference | TeoL7AccRuleRulesBranchesActionsCacheParametersFollowOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_cache: cdktf.stringToTerraform(struct!.defaultCache),
    default_cache_strategy: cdktf.stringToTerraform(struct!.defaultCacheStrategy),
    default_cache_time: cdktf.numberToTerraform(struct!.defaultCacheTime),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsCacheParametersFollowOriginToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheParametersFollowOriginOutputReference | TeoL7AccRuleRulesBranchesActionsCacheParametersFollowOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_cache: {
      value: cdktf.stringToHclTerraform(struct!.defaultCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_cache_strategy: {
      value: cdktf.stringToHclTerraform(struct!.defaultCacheStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_cache_time: {
      value: cdktf.numberToHclTerraform(struct!.defaultCacheTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsCacheParametersFollowOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsCacheParametersFollowOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCache = this._defaultCache;
    }
    if (this._defaultCacheStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCacheStrategy = this._defaultCacheStrategy;
    }
    if (this._defaultCacheTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCacheTime = this._defaultCacheTime;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsCacheParametersFollowOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultCache = undefined;
      this._defaultCacheStrategy = undefined;
      this._defaultCacheTime = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultCache = value.defaultCache;
      this._defaultCacheStrategy = value.defaultCacheStrategy;
      this._defaultCacheTime = value.defaultCacheTime;
      this._switch = value.switch;
    }
  }

  // default_cache - computed: false, optional: true, required: false
  private _defaultCache?: string; 
  public get defaultCache() {
    return this.getStringAttribute('default_cache');
  }
  public set defaultCache(value: string) {
    this._defaultCache = value;
  }
  public resetDefaultCache() {
    this._defaultCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheInput() {
    return this._defaultCache;
  }

  // default_cache_strategy - computed: false, optional: true, required: false
  private _defaultCacheStrategy?: string; 
  public get defaultCacheStrategy() {
    return this.getStringAttribute('default_cache_strategy');
  }
  public set defaultCacheStrategy(value: string) {
    this._defaultCacheStrategy = value;
  }
  public resetDefaultCacheStrategy() {
    this._defaultCacheStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheStrategyInput() {
    return this._defaultCacheStrategy;
  }

  // default_cache_time - computed: false, optional: true, required: false
  private _defaultCacheTime?: number; 
  public get defaultCacheTime() {
    return this.getNumberAttribute('default_cache_time');
  }
  public set defaultCacheTime(value: number) {
    this._defaultCacheTime = value;
  }
  public resetDefaultCacheTime() {
    this._defaultCacheTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheTimeInput() {
    return this._defaultCacheTime;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsCacheParametersNoCache {
  /**
  * Whether to enable no-cache configuration. Valid values: `on`: Enable; `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch: string;
}

export function teoL7AccRuleRulesBranchesActionsCacheParametersNoCacheToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheParametersNoCacheOutputReference | TeoL7AccRuleRulesBranchesActionsCacheParametersNoCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsCacheParametersNoCacheToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheParametersNoCacheOutputReference | TeoL7AccRuleRulesBranchesActionsCacheParametersNoCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsCacheParametersNoCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsCacheParametersNoCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsCacheParametersNoCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsCacheParameters {
  /**
  * custom_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#custom_time TeoL7AccRule#custom_time}
  */
  readonly customTime?: TeoL7AccRuleRulesBranchesActionsCacheParametersCustomTime;
  /**
  * follow_origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#follow_origin TeoL7AccRule#follow_origin}
  */
  readonly followOrigin?: TeoL7AccRuleRulesBranchesActionsCacheParametersFollowOrigin;
  /**
  * no_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#no_cache TeoL7AccRule#no_cache}
  */
  readonly noCache?: TeoL7AccRuleRulesBranchesActionsCacheParametersNoCache;
}

export function teoL7AccRuleRulesBranchesActionsCacheParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheParametersOutputReference | TeoL7AccRuleRulesBranchesActionsCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_time: teoL7AccRuleRulesBranchesActionsCacheParametersCustomTimeToTerraform(struct!.customTime),
    follow_origin: teoL7AccRuleRulesBranchesActionsCacheParametersFollowOriginToTerraform(struct!.followOrigin),
    no_cache: teoL7AccRuleRulesBranchesActionsCacheParametersNoCacheToTerraform(struct!.noCache),
  }
}


export function teoL7AccRuleRulesBranchesActionsCacheParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCacheParametersOutputReference | TeoL7AccRuleRulesBranchesActionsCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_time: {
      value: teoL7AccRuleRulesBranchesActionsCacheParametersCustomTimeToHclTerraform(struct!.customTime),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsCacheParametersCustomTimeList",
    },
    follow_origin: {
      value: teoL7AccRuleRulesBranchesActionsCacheParametersFollowOriginToHclTerraform(struct!.followOrigin),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsCacheParametersFollowOriginList",
    },
    no_cache: {
      value: teoL7AccRuleRulesBranchesActionsCacheParametersNoCacheToHclTerraform(struct!.noCache),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsCacheParametersNoCacheList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsCacheParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsCacheParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTime = this._customTime?.internalValue;
    }
    if (this._followOrigin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.followOrigin = this._followOrigin?.internalValue;
    }
    if (this._noCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCache = this._noCache?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsCacheParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customTime.internalValue = undefined;
      this._followOrigin.internalValue = undefined;
      this._noCache.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customTime.internalValue = value.customTime;
      this._followOrigin.internalValue = value.followOrigin;
      this._noCache.internalValue = value.noCache;
    }
  }

  // custom_time - computed: false, optional: true, required: false
  private _customTime = new TeoL7AccRuleRulesBranchesActionsCacheParametersCustomTimeOutputReference(this, "custom_time");
  public get customTime() {
    return this._customTime;
  }
  public putCustomTime(value: TeoL7AccRuleRulesBranchesActionsCacheParametersCustomTime) {
    this._customTime.internalValue = value;
  }
  public resetCustomTime() {
    this._customTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTimeInput() {
    return this._customTime.internalValue;
  }

  // follow_origin - computed: false, optional: true, required: false
  private _followOrigin = new TeoL7AccRuleRulesBranchesActionsCacheParametersFollowOriginOutputReference(this, "follow_origin");
  public get followOrigin() {
    return this._followOrigin;
  }
  public putFollowOrigin(value: TeoL7AccRuleRulesBranchesActionsCacheParametersFollowOrigin) {
    this._followOrigin.internalValue = value;
  }
  public resetFollowOrigin() {
    this._followOrigin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followOriginInput() {
    return this._followOrigin.internalValue;
  }

  // no_cache - computed: false, optional: true, required: false
  private _noCache = new TeoL7AccRuleRulesBranchesActionsCacheParametersNoCacheOutputReference(this, "no_cache");
  public get noCache() {
    return this._noCache;
  }
  public putNoCache(value: TeoL7AccRuleRulesBranchesActionsCacheParametersNoCache) {
    this._noCache.internalValue = value;
  }
  public resetNoCache() {
    this._noCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCacheInput() {
    return this._noCache.internalValue;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsCachePrefreshParameters {
  /**
  * Prefresh interval set as a percentage of the node cache time. value range: 1-99. note: this field is required when switch is on; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#cache_time_percent TeoL7AccRule#cache_time_percent}
  */
  readonly cacheTimePercent?: number;
  /**
  * Whether to enable cache prefresh. values: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsCachePrefreshParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCachePrefreshParametersOutputReference | TeoL7AccRuleRulesBranchesActionsCachePrefreshParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time_percent: cdktf.numberToTerraform(struct!.cacheTimePercent),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsCachePrefreshParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCachePrefreshParametersOutputReference | TeoL7AccRuleRulesBranchesActionsCachePrefreshParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_time_percent: {
      value: cdktf.numberToHclTerraform(struct!.cacheTimePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsCachePrefreshParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsCachePrefreshParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTimePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTimePercent = this._cacheTimePercent;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsCachePrefreshParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTimePercent = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTimePercent = value.cacheTimePercent;
      this._switch = value.switch;
    }
  }

  // cache_time_percent - computed: false, optional: true, required: false
  private _cacheTimePercent?: number; 
  public get cacheTimePercent() {
    return this.getNumberAttribute('cache_time_percent');
  }
  public set cacheTimePercent(value: number) {
    this._cacheTimePercent = value;
  }
  public resetCacheTimePercent() {
    this._cacheTimePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimePercentInput() {
    return this._cacheTimePercent;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsClientIpCountryParameters {
  /**
  * Name of the request header that contains the client ip region. it is valid when switch=on. the default value eo-client-ipcountry is used when it is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#header_name TeoL7AccRule#header_name}
  */
  readonly headerName?: string;
  /**
  * Whether to enable configuration. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsClientIpCountryParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsClientIpCountryParametersOutputReference | TeoL7AccRuleRulesBranchesActionsClientIpCountryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsClientIpCountryParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsClientIpCountryParametersOutputReference | TeoL7AccRuleRulesBranchesActionsClientIpCountryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsClientIpCountryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsClientIpCountryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsClientIpCountryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerName = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerName = value.headerName;
      this._switch = value.switch;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsClientIpHeaderParameters {
  /**
  * Name of the request header containing the client ip address for origin-pull. when switch is on, this parameter is required. x-forwarded-for is not allowed for this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#header_name TeoL7AccRule#header_name}
  */
  readonly headerName?: string;
  /**
  * Whether to enable configuration. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsClientIpHeaderParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsClientIpHeaderParametersOutputReference | TeoL7AccRuleRulesBranchesActionsClientIpHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsClientIpHeaderParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsClientIpHeaderParametersOutputReference | TeoL7AccRuleRulesBranchesActionsClientIpHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsClientIpHeaderParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsClientIpHeaderParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsClientIpHeaderParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerName = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerName = value.headerName;
      this._switch = value.switch;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsCompressionParameters {
  /**
  * Supported compression algorithm list. this field is required when switch is on; otherwise, it is not effective. valid values: brotli: brotli algorithm; gzip: gzip algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#algorithms TeoL7AccRule#algorithms}
  */
  readonly algorithms?: string[];
  /**
  * Whether to enable smart compression. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsCompressionParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCompressionParametersOutputReference | TeoL7AccRuleRulesBranchesActionsCompressionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.algorithms),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsCompressionParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsCompressionParametersOutputReference | TeoL7AccRuleRulesBranchesActionsCompressionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.algorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsCompressionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsCompressionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithms = this._algorithms;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsCompressionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithms = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithms = value.algorithms;
      this._switch = value.switch;
    }
  }

  // algorithms - computed: false, optional: true, required: false
  private _algorithms?: string[]; 
  public get algorithms() {
    return this.getListAttribute('algorithms');
  }
  public set algorithms(value: string[]) {
    this._algorithms = value;
  }
  public resetAlgorithms() {
    this._algorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmsInput() {
    return this._algorithms;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParams {
  /**
  * Redirect url. requires a full redirect path, such as https://www.test.com/error.html.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#redirect_url TeoL7AccRule#redirect_url}
  */
  readonly redirectUrl: string;
  /**
  * Status code. supported values are 400, 403, 404, 405, 414, 416, 451, 500, 501, 502, 503, 504.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#status_code TeoL7AccRule#status_code}
  */
  readonly statusCode: number;
}

export function teoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParamsToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParamsOutputReference | TeoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function teoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParamsToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParamsOutputReference | TeoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectUrl = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectUrl = value.redirectUrl;
      this._statusCode = value.statusCode;
    }
  }

  // redirect_url - computed: false, optional: false, required: true
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsErrorPageParameters {
  /**
  * error_page_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#error_page_params TeoL7AccRule#error_page_params}
  */
  readonly errorPageParams?: TeoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParams;
}

export function teoL7AccRuleRulesBranchesActionsErrorPageParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsErrorPageParametersOutputReference | TeoL7AccRuleRulesBranchesActionsErrorPageParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_page_params: teoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParamsToTerraform(struct!.errorPageParams),
  }
}


export function teoL7AccRuleRulesBranchesActionsErrorPageParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsErrorPageParametersOutputReference | TeoL7AccRuleRulesBranchesActionsErrorPageParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_page_params: {
      value: teoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParamsToHclTerraform(struct!.errorPageParams),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsErrorPageParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsErrorPageParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPageParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageParams = this._errorPageParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsErrorPageParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorPageParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorPageParams.internalValue = value.errorPageParams;
    }
  }

  // error_page_params - computed: false, optional: true, required: false
  private _errorPageParams = new TeoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParamsOutputReference(this, "error_page_params");
  public get errorPageParams() {
    return this._errorPageParams;
  }
  public putErrorPageParams(value: TeoL7AccRuleRulesBranchesActionsErrorPageParametersErrorPageParams) {
    this._errorPageParams.internalValue = value;
  }
  public resetErrorPageParams() {
    this._errorPageParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageParamsInput() {
    return this._errorPageParams.internalValue;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsForceRedirectHttpsParameters {
  /**
  * Redirection status code. this field is required when switch is on; otherwise, it is not effective. valid values are: 301: 301 redirect; 302: 302 redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#redirect_status_code TeoL7AccRule#redirect_status_code}
  */
  readonly redirectStatusCode?: number;
  /**
  * Whether to enable forced redirect configuration switch. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsForceRedirectHttpsParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsForceRedirectHttpsParametersOutputReference | TeoL7AccRuleRulesBranchesActionsForceRedirectHttpsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_status_code: cdktf.numberToTerraform(struct!.redirectStatusCode),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsForceRedirectHttpsParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsForceRedirectHttpsParametersOutputReference | TeoL7AccRuleRulesBranchesActionsForceRedirectHttpsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_status_code: {
      value: cdktf.numberToHclTerraform(struct!.redirectStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsForceRedirectHttpsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsForceRedirectHttpsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectStatusCode = this._redirectStatusCode;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsForceRedirectHttpsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectStatusCode = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectStatusCode = value.redirectStatusCode;
      this._switch = value.switch;
    }
  }

  // redirect_status_code - computed: false, optional: true, required: false
  private _redirectStatusCode?: number; 
  public get redirectStatusCode() {
    return this.getNumberAttribute('redirect_status_code');
  }
  public set redirectStatusCode(value: number) {
    this._redirectStatusCode = value;
  }
  public resetRedirectStatusCode() {
    this._redirectStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectStatusCodeInput() {
    return this._redirectStatusCode;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsHostHeaderParameters {
  /**
  * Action to be executed. values: followOrigin: follow origin server domain name; custom: custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#action TeoL7AccRule#action}
  */
  readonly action?: string;
  /**
  * Host header rewrite requires a complete domain name. note: this field is required when switch is on; when switch is off, this field is not required and any value will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#server_name TeoL7AccRule#server_name}
  */
  readonly serverName?: string;
}

export function teoL7AccRuleRulesBranchesActionsHostHeaderParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsHostHeaderParametersOutputReference | TeoL7AccRuleRulesBranchesActionsHostHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function teoL7AccRuleRulesBranchesActionsHostHeaderParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsHostHeaderParametersOutputReference | TeoL7AccRuleRulesBranchesActionsHostHeaderParameters): any {
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
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsHostHeaderParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsHostHeaderParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsHostHeaderParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._serverName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._serverName = value.serverName;
    }
  }

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

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsHstsParameters {
  /**
  * Whether to allow other subdomains to inherit the same hsts header. values: on: allows other subdomains to inherit the same hsts header; off: does not allow other subdomains to inherit the same hsts header. note: when switch is on, this field is required; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#include_sub_domains TeoL7AccRule#include_sub_domains}
  */
  readonly includeSubDomains?: string;
  /**
  * Whether to allow the browser to preload the hsts header. valid values: on: allows the browser to preload the hsts header; off: does not allow the browser to preload the hsts header. note: when switch is on, this field is required; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#preload TeoL7AccRule#preload}
  */
  readonly preload?: string;
  /**
  * Whether to enable hsts. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
  /**
  * Cache hsts header time, unit: seconds. value range: 1-31536000. note: this field is required when switch is on; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#timeout TeoL7AccRule#timeout}
  */
  readonly timeout?: number;
}

export function teoL7AccRuleRulesBranchesActionsHstsParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsHstsParametersOutputReference | TeoL7AccRuleRulesBranchesActionsHstsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_sub_domains: cdktf.stringToTerraform(struct!.includeSubDomains),
    preload: cdktf.stringToTerraform(struct!.preload),
    switch: cdktf.stringToTerraform(struct!.switch),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function teoL7AccRuleRulesBranchesActionsHstsParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsHstsParametersOutputReference | TeoL7AccRuleRulesBranchesActionsHstsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_sub_domains: {
      value: cdktf.stringToHclTerraform(struct!.includeSubDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preload: {
      value: cdktf.stringToHclTerraform(struct!.preload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsHstsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsHstsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeSubDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubDomains = this._includeSubDomains;
    }
    if (this._preload !== undefined) {
      hasAnyValues = true;
      internalValueResult.preload = this._preload;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsHstsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeSubDomains = undefined;
      this._preload = undefined;
      this._switch = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeSubDomains = value.includeSubDomains;
      this._preload = value.preload;
      this._switch = value.switch;
      this._timeout = value.timeout;
    }
  }

  // include_sub_domains - computed: false, optional: true, required: false
  private _includeSubDomains?: string; 
  public get includeSubDomains() {
    return this.getStringAttribute('include_sub_domains');
  }
  public set includeSubDomains(value: string) {
    this._includeSubDomains = value;
  }
  public resetIncludeSubDomains() {
    this._includeSubDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubDomainsInput() {
    return this._includeSubDomains;
  }

  // preload - computed: false, optional: true, required: false
  private _preload?: string; 
  public get preload() {
    return this.getStringAttribute('preload');
  }
  public set preload(value: string) {
    this._preload = value;
  }
  public resetPreload() {
    this._preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsHttp2Parameters {
  /**
  * Whether to enable http2 access. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsHttp2ParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsHttp2ParametersOutputReference | TeoL7AccRuleRulesBranchesActionsHttp2Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsHttp2ParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsHttp2ParametersOutputReference | TeoL7AccRuleRulesBranchesActionsHttp2Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsHttp2ParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsHttp2Parameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsHttp2Parameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsHttpResponseParameters {
  /**
  * Response page id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#response_page TeoL7AccRule#response_page}
  */
  readonly responsePage?: string;
  /**
  * Response status code. supports 2xx, 4xx, 5xx, excluding 499, 514, 101, 301, 302, 303, 509, 520-599.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#status_code TeoL7AccRule#status_code}
  */
  readonly statusCode?: number;
}

export function teoL7AccRuleRulesBranchesActionsHttpResponseParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsHttpResponseParametersOutputReference | TeoL7AccRuleRulesBranchesActionsHttpResponseParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_page: cdktf.stringToTerraform(struct!.responsePage),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function teoL7AccRuleRulesBranchesActionsHttpResponseParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsHttpResponseParametersOutputReference | TeoL7AccRuleRulesBranchesActionsHttpResponseParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_page: {
      value: cdktf.stringToHclTerraform(struct!.responsePage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsHttpResponseParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsHttpResponseParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responsePage !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsePage = this._responsePage;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsHttpResponseParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responsePage = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responsePage = value.responsePage;
      this._statusCode = value.statusCode;
    }
  }

  // response_page - computed: false, optional: true, required: false
  private _responsePage?: string; 
  public get responsePage() {
    return this.getStringAttribute('response_page');
  }
  public set responsePage(value: string) {
    this._responsePage = value;
  }
  public resetResponsePage() {
    this._responsePage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePageInput() {
    return this._responsePage;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParameters {
  /**
  * HTTP response timeout in seconds. value range: 5-600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#response_timeout TeoL7AccRule#response_timeout}
  */
  readonly responseTimeout?: number;
}

export function teoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParametersOutputReference | TeoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_timeout: cdktf.numberToTerraform(struct!.responseTimeout),
  }
}


export function teoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParametersOutputReference | TeoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.responseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeout = this._responseTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseTimeout = value.responseTimeout;
    }
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: number; 
  public get responseTimeout() {
    return this.getNumberAttribute('response_timeout');
  }
  public set responseTimeout(value: number) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsMaxAgeParameters {
  /**
  * Custom cache time value, unit: seconds. value range: 0-315360000. note: when followorigin is off, it means not following the origin server and using cachetime to set the cache time; otherwise, this field will not take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#cache_time TeoL7AccRule#cache_time}
  */
  readonly cacheTime?: number;
  /**
  * Specifies whether to follow the origin server cache-control configuration, with the following values: on: follow the origin server and ignore the field cachetime; off: do not follow the origin server and apply the field cachetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#follow_origin TeoL7AccRule#follow_origin}
  */
  readonly followOrigin?: string;
}

export function teoL7AccRuleRulesBranchesActionsMaxAgeParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsMaxAgeParametersOutputReference | TeoL7AccRuleRulesBranchesActionsMaxAgeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time: cdktf.numberToTerraform(struct!.cacheTime),
    follow_origin: cdktf.stringToTerraform(struct!.followOrigin),
  }
}


export function teoL7AccRuleRulesBranchesActionsMaxAgeParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsMaxAgeParametersOutputReference | TeoL7AccRuleRulesBranchesActionsMaxAgeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_time: {
      value: cdktf.numberToHclTerraform(struct!.cacheTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    follow_origin: {
      value: cdktf.stringToHclTerraform(struct!.followOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsMaxAgeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsMaxAgeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTime = this._cacheTime;
    }
    if (this._followOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.followOrigin = this._followOrigin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsMaxAgeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTime = undefined;
      this._followOrigin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTime = value.cacheTime;
      this._followOrigin = value.followOrigin;
    }
  }

  // cache_time - computed: false, optional: true, required: false
  private _cacheTime?: number; 
  public get cacheTime() {
    return this.getNumberAttribute('cache_time');
  }
  public set cacheTime(value: number) {
    this._cacheTime = value;
  }
  public resetCacheTime() {
    this._cacheTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeInput() {
    return this._cacheTime;
  }

  // follow_origin - computed: false, optional: true, required: false
  private _followOrigin?: string; 
  public get followOrigin() {
    return this.getStringAttribute('follow_origin');
  }
  public set followOrigin(value: string) {
    this._followOrigin = value;
  }
  public resetFollowOrigin() {
    this._followOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followOriginInput() {
    return this._followOrigin;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParameters {
  /**
  * Authentication parameter access key id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#access_key_id TeoL7AccRule#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Region of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#region TeoL7AccRule#region}
  */
  readonly region?: string;
  /**
  * Authentication parameter secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#secret_access_key TeoL7AccRule#secret_access_key}
  */
  readonly secretAccessKey: string;
  /**
  * Authentication version. values: v2: v2 version; v4: v4 version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#signature_version TeoL7AccRule#signature_version}
  */
  readonly signatureVersion: string;
}

export function teoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParametersOutputReference | TeoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    signature_version: cdktf.stringToTerraform(struct!.signatureVersion),
  }
}


export function teoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParametersOutputReference | TeoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_version: {
      value: cdktf.stringToHclTerraform(struct!.signatureVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._signatureVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureVersion = this._signatureVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
      this._signatureVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
      this._signatureVersion = value.signatureVersion;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // signature_version - computed: false, optional: false, required: true
  private _signatureVersion?: string; 
  public get signatureVersion() {
    return this.getStringAttribute('signature_version');
  }
  public set signatureVersion(value: string) {
    this._signatureVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureVersionInput() {
    return this._signatureVersion;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsModifyOriginParameters {
  /**
  * Ports for http origin-pull requests. value range: 1-65535. this parameter takes effect only when the origin-pull protocol originprotocol is http or follow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#http_origin_port TeoL7AccRule#http_origin_port}
  */
  readonly httpOriginPort?: number;
  /**
  * Ports for https origin-pull requests. value range: 1-65535. this parameter takes effect only when the origin-pull protocol originprotocol is https or follow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#https_origin_port TeoL7AccRule#https_origin_port}
  */
  readonly httpsOriginPort?: number;
  /**
  * Origin server address, which varies according to the value of origintype: When origintype = ipdomain, fill in an ipv4 address, an ipv6 address, or a domain name; When origintype = cos, please fill in the access domain name of the cos bucket; When origintype = awss3, fill in the access domain name of the s3 bucket; When origintype = origingroup, fill in the origin server group id; When origintype = loadbalance, fill in the cloud load balancer instance id. this feature is currently only available to the allowlist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#origin TeoL7AccRule#origin}
  */
  readonly origin?: string;
  /**
  * Origin-Pull protocol configuration. this parameter is required when origintype is ipdomain, origingroup, or loadbalance. valid values are: Http: use http protocol; Https: use https protocol; Follow: follow the protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#origin_protocol TeoL7AccRule#origin_protocol}
  */
  readonly originProtocol?: string;
  /**
  * The origin type. values: IPDomain: ipv4, ipv6, or domain name type origin server; OriginGroup: origin server group type origin server; LoadBalance: cloud load balancer (clb), this feature is in beta test. to use it, please submit a ticket or contact smart customer service; COS: tencent cloud COS origin server; AWSS3: all object storage origin servers that support the aws s3 protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#origin_type TeoL7AccRule#origin_type}
  */
  readonly originType?: string;
  /**
  * Whether access to the private object storage origin server is allowed. this parameter is valid only when the origin server type origintype is COS or awss3. valid values: on: enable private authentication; off: disable private authentication. if not specified, the default value is off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#private_access TeoL7AccRule#private_access}
  */
  readonly privateAccess?: string;
  /**
  * private_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#private_parameters TeoL7AccRule#private_parameters}
  */
  readonly privateParameters?: TeoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParameters;
}

export function teoL7AccRuleRulesBranchesActionsModifyOriginParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsModifyOriginParametersOutputReference | TeoL7AccRuleRulesBranchesActionsModifyOriginParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_origin_port: cdktf.numberToTerraform(struct!.httpOriginPort),
    https_origin_port: cdktf.numberToTerraform(struct!.httpsOriginPort),
    origin: cdktf.stringToTerraform(struct!.origin),
    origin_protocol: cdktf.stringToTerraform(struct!.originProtocol),
    origin_type: cdktf.stringToTerraform(struct!.originType),
    private_access: cdktf.stringToTerraform(struct!.privateAccess),
    private_parameters: teoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParametersToTerraform(struct!.privateParameters),
  }
}


export function teoL7AccRuleRulesBranchesActionsModifyOriginParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsModifyOriginParametersOutputReference | TeoL7AccRuleRulesBranchesActionsModifyOriginParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_origin_port: {
      value: cdktf.numberToHclTerraform(struct!.httpOriginPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_origin_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsOriginPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_protocol: {
      value: cdktf.stringToHclTerraform(struct!.originProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_type: {
      value: cdktf.stringToHclTerraform(struct!.originType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_access: {
      value: cdktf.stringToHclTerraform(struct!.privateAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_parameters: {
      value: teoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParametersToHclTerraform(struct!.privateParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsModifyOriginParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsModifyOriginParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpOriginPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOriginPort = this._httpOriginPort;
    }
    if (this._httpsOriginPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsOriginPort = this._httpsOriginPort;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._originProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.originProtocol = this._originProtocol;
    }
    if (this._originType !== undefined) {
      hasAnyValues = true;
      internalValueResult.originType = this._originType;
    }
    if (this._privateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess;
    }
    if (this._privateParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateParameters = this._privateParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsModifyOriginParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpOriginPort = undefined;
      this._httpsOriginPort = undefined;
      this._origin = undefined;
      this._originProtocol = undefined;
      this._originType = undefined;
      this._privateAccess = undefined;
      this._privateParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpOriginPort = value.httpOriginPort;
      this._httpsOriginPort = value.httpsOriginPort;
      this._origin = value.origin;
      this._originProtocol = value.originProtocol;
      this._originType = value.originType;
      this._privateAccess = value.privateAccess;
      this._privateParameters.internalValue = value.privateParameters;
    }
  }

  // http_origin_port - computed: false, optional: true, required: false
  private _httpOriginPort?: number; 
  public get httpOriginPort() {
    return this.getNumberAttribute('http_origin_port');
  }
  public set httpOriginPort(value: number) {
    this._httpOriginPort = value;
  }
  public resetHttpOriginPort() {
    this._httpOriginPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOriginPortInput() {
    return this._httpOriginPort;
  }

  // https_origin_port - computed: false, optional: true, required: false
  private _httpsOriginPort?: number; 
  public get httpsOriginPort() {
    return this.getNumberAttribute('https_origin_port');
  }
  public set httpsOriginPort(value: number) {
    this._httpsOriginPort = value;
  }
  public resetHttpsOriginPort() {
    this._httpsOriginPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsOriginPortInput() {
    return this._httpsOriginPort;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // origin_protocol - computed: false, optional: true, required: false
  private _originProtocol?: string; 
  public get originProtocol() {
    return this.getStringAttribute('origin_protocol');
  }
  public set originProtocol(value: string) {
    this._originProtocol = value;
  }
  public resetOriginProtocol() {
    this._originProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originProtocolInput() {
    return this._originProtocol;
  }

  // origin_type - computed: false, optional: true, required: false
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  public resetOriginType() {
    this._originType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess?: string; 
  public get privateAccess() {
    return this.getStringAttribute('private_access');
  }
  public set privateAccess(value: string) {
    this._privateAccess = value;
  }
  public resetPrivateAccess() {
    this._privateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess;
  }

  // private_parameters - computed: false, optional: true, required: false
  private _privateParameters = new TeoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParametersOutputReference(this, "private_parameters");
  public get privateParameters() {
    return this._privateParameters;
  }
  public putPrivateParameters(value: TeoL7AccRuleRulesBranchesActionsModifyOriginParametersPrivateParameters) {
    this._privateParameters.internalValue = value;
  }
  public resetPrivateParameters() {
    this._privateParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateParametersInput() {
    return this._privateParameters.internalValue;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActions {
  /**
  * HTTP header setting methods. valid values are: set: sets a value for an existing header parameter; del: deletes a header parameter; add: adds a header parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#action TeoL7AccRule#action}
  */
  readonly action: string;
  /**
  * HTTP header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#name TeoL7AccRule#name}
  */
  readonly name: string;
  /**
  * HTTP header value. this parameter is required when the action is set to set or add; it is optional when the action is set to del.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#value TeoL7AccRule#value}
  */
  readonly value?: string;
}

export function teoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActionsToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function teoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActionsToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActions | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActionsList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActions[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActionsOutputReference {
    return new TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParameters {
  /**
  * header_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#header_actions TeoL7AccRule#header_actions}
  */
  readonly headerActions?: TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActions[] | cdktf.IResolvable;
}

export function teoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersOutputReference | TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_actions: cdktf.listMapper(teoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActionsToTerraform, true)(struct!.headerActions),
  }
}


export function teoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersOutputReference | TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_actions: {
      value: cdktf.listMapperHcl(teoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActionsToHclTerraform, true)(struct!.headerActions),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerActions = this._headerActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerActions.internalValue = value.headerActions;
    }
  }

  // header_actions - computed: false, optional: true, required: false
  private _headerActions = new TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActionsList(this, "header_actions", false);
  public get headerActions() {
    return this._headerActions;
  }
  public putHeaderActions(value: TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersHeaderActions[] | cdktf.IResolvable) {
    this._headerActions.internalValue = value;
  }
  public resetHeaderActions() {
    this._headerActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionsInput() {
    return this._headerActions.internalValue;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActions {
  /**
  * HTTP header setting methods. valid values are: set: sets a value for an existing header parameter; del: deletes a header parameter; add: adds a header parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#action TeoL7AccRule#action}
  */
  readonly action: string;
  /**
  * HTTP header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#name TeoL7AccRule#name}
  */
  readonly name: string;
  /**
  * HTTP header value. this parameter is required when the action is set to set or add; it is optional when the action is set to del.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#value TeoL7AccRule#value}
  */
  readonly value?: string;
}

export function teoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActionsToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function teoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActionsToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActions | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActionsList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActions[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActionsOutputReference {
    return new TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParameters {
  /**
  * header_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#header_actions TeoL7AccRule#header_actions}
  */
  readonly headerActions?: TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActions[] | cdktf.IResolvable;
}

export function teoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersOutputReference | TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_actions: cdktf.listMapper(teoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActionsToTerraform, true)(struct!.headerActions),
  }
}


export function teoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersOutputReference | TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_actions: {
      value: cdktf.listMapperHcl(teoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActionsToHclTerraform, true)(struct!.headerActions),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerActions = this._headerActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerActions.internalValue = value.headerActions;
    }
  }

  // header_actions - computed: false, optional: true, required: false
  private _headerActions = new TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActionsList(this, "header_actions", false);
  public get headerActions() {
    return this._headerActions;
  }
  public putHeaderActions(value: TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersHeaderActions[] | cdktf.IResolvable) {
    this._headerActions.internalValue = value;
  }
  public resetHeaderActions() {
    this._headerActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionsInput() {
    return this._headerActions.internalValue;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsOcspStaplingParameters {
  /**
  * Whether to enable ocsp stapling configuration switch. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsOcspStaplingParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsOcspStaplingParametersOutputReference | TeoL7AccRuleRulesBranchesActionsOcspStaplingParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsOcspStaplingParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsOcspStaplingParametersOutputReference | TeoL7AccRuleRulesBranchesActionsOcspStaplingParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsOcspStaplingParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsOcspStaplingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsOcspStaplingParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsOfflineCacheParameters {
  /**
  * Whether to enable offline caching. values: on: enable; Off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsOfflineCacheParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsOfflineCacheParametersOutputReference | TeoL7AccRuleRulesBranchesActionsOfflineCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsOfflineCacheParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsOfflineCacheParametersOutputReference | TeoL7AccRuleRulesBranchesActionsOfflineCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsOfflineCacheParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsOfflineCacheParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsOfflineCacheParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsOriginPullProtocolParameters {
  /**
  * Back-to-origin protocol configuration. Possible values are: `http`: use HTTP protocol for back-to-origin; `https`: use HTTPS protocol for back-to-origin; `follow`: follow the protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#protocol TeoL7AccRule#protocol}
  */
  readonly protocol?: string;
}

export function teoL7AccRuleRulesBranchesActionsOriginPullProtocolParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsOriginPullProtocolParametersOutputReference | TeoL7AccRuleRulesBranchesActionsOriginPullProtocolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function teoL7AccRuleRulesBranchesActionsOriginPullProtocolParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsOriginPullProtocolParametersOutputReference | TeoL7AccRuleRulesBranchesActionsOriginPullProtocolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsOriginPullProtocolParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsOriginPullProtocolParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsOriginPullProtocolParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protocol = value.protocol;
    }
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsPostMaxSizeParameters {
  /**
  * Maximum size of the file uploaded for streaming via a post request, in bytes. value range: 1 * 2^20 bytes to 500 * 2^20 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#max_size TeoL7AccRule#max_size}
  */
  readonly maxSize?: number;
  /**
  * Whether to enable post request file upload limit, in bytes (default limit: 32 * 2^20 bytes). valid values: on: enable limit; off: disable limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsPostMaxSizeParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsPostMaxSizeParametersOutputReference | TeoL7AccRuleRulesBranchesActionsPostMaxSizeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsPostMaxSizeParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsPostMaxSizeParametersOutputReference | TeoL7AccRuleRulesBranchesActionsPostMaxSizeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsPostMaxSizeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsPostMaxSizeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsPostMaxSizeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSize = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSize = value.maxSize;
      this._switch = value.switch;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsQuicParameters {
  /**
  * Whether to enable quic. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsQuicParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsQuicParametersOutputReference | TeoL7AccRuleRulesBranchesActionsQuicParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsQuicParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsQuicParametersOutputReference | TeoL7AccRuleRulesBranchesActionsQuicParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsQuicParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsQuicParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsQuicParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsRangeOriginPullParameters {
  /**
  * Whether to enable range gets. values are: on: enable; Off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsRangeOriginPullParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsRangeOriginPullParametersOutputReference | TeoL7AccRuleRulesBranchesActionsRangeOriginPullParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsRangeOriginPullParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsRangeOriginPullParametersOutputReference | TeoL7AccRuleRulesBranchesActionsRangeOriginPullParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsRangeOriginPullParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsRangeOriginPullParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsRangeOriginPullParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsResponseSpeedLimitParameters {
  /**
  * Rate-Limiting value, in kb/s. enter a numerical value to specify the rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#max_speed TeoL7AccRule#max_speed}
  */
  readonly maxSpeed: string;
  /**
  * Download rate limit mode. valid values: LimitUponDownload: rate limit throughout the download process; LimitAfterSpecificBytesDownloaded: rate limit after downloading specific bytes at full speed; LimitAfterSpecificSecondsDownloaded: start speed limit after downloading at full speed for a specific duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#mode TeoL7AccRule#mode}
  */
  readonly mode: string;
  /**
  * Rate-Limiting start value, which can be the download size or specified duration, in kb or s. this parameter is required when mode is set to limitafterspecificbytesdownloaded or limitafterspecificsecondsdownloaded. enter a numerical value to specify the download size or duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#start_at TeoL7AccRule#start_at}
  */
  readonly startAt?: string;
}

export function teoL7AccRuleRulesBranchesActionsResponseSpeedLimitParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsResponseSpeedLimitParametersOutputReference | TeoL7AccRuleRulesBranchesActionsResponseSpeedLimitParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_speed: cdktf.stringToTerraform(struct!.maxSpeed),
    mode: cdktf.stringToTerraform(struct!.mode),
    start_at: cdktf.stringToTerraform(struct!.startAt),
  }
}


export function teoL7AccRuleRulesBranchesActionsResponseSpeedLimitParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsResponseSpeedLimitParametersOutputReference | TeoL7AccRuleRulesBranchesActionsResponseSpeedLimitParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_speed: {
      value: cdktf.stringToHclTerraform(struct!.maxSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_at: {
      value: cdktf.stringToHclTerraform(struct!.startAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsResponseSpeedLimitParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsResponseSpeedLimitParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSpeed = this._maxSpeed;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._startAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAt = this._startAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsResponseSpeedLimitParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSpeed = undefined;
      this._mode = undefined;
      this._startAt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSpeed = value.maxSpeed;
      this._mode = value.mode;
      this._startAt = value.startAt;
    }
  }

  // max_speed - computed: false, optional: false, required: true
  private _maxSpeed?: string; 
  public get maxSpeed() {
    return this.getStringAttribute('max_speed');
  }
  public set maxSpeed(value: string) {
    this._maxSpeed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSpeedInput() {
    return this._maxSpeed;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // start_at - computed: false, optional: true, required: false
  private _startAt?: string; 
  public get startAt() {
    return this.getStringAttribute('start_at');
  }
  public set startAt(value: string) {
    this._startAt = value;
  }
  public resetStartAt() {
    this._startAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAtInput() {
    return this._startAt;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsSetContentIdentifierParameters {
  /**
  * Content identifier id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#content_identifier TeoL7AccRule#content_identifier}
  */
  readonly contentIdentifier?: string;
}

export function teoL7AccRuleRulesBranchesActionsSetContentIdentifierParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsSetContentIdentifierParametersOutputReference | TeoL7AccRuleRulesBranchesActionsSetContentIdentifierParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_identifier: cdktf.stringToTerraform(struct!.contentIdentifier),
  }
}


export function teoL7AccRuleRulesBranchesActionsSetContentIdentifierParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsSetContentIdentifierParametersOutputReference | TeoL7AccRuleRulesBranchesActionsSetContentIdentifierParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_identifier: {
      value: cdktf.stringToHclTerraform(struct!.contentIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsSetContentIdentifierParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsSetContentIdentifierParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentIdentifier = this._contentIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsSetContentIdentifierParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentIdentifier = value.contentIdentifier;
    }
  }

  // content_identifier - computed: false, optional: true, required: false
  private _contentIdentifier?: string; 
  public get contentIdentifier() {
    return this.getStringAttribute('content_identifier');
  }
  public set contentIdentifier(value: string) {
    this._contentIdentifier = value;
  }
  public resetContentIdentifier() {
    this._contentIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdentifierInput() {
    return this._contentIdentifier;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsSmartRoutingParameters {
  /**
  * Whether to enable smart acceleration. values: on: enable; Off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsSmartRoutingParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsSmartRoutingParametersOutputReference | TeoL7AccRuleRulesBranchesActionsSmartRoutingParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsSmartRoutingParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsSmartRoutingParametersOutputReference | TeoL7AccRuleRulesBranchesActionsSmartRoutingParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsSmartRoutingParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsSmartRoutingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsSmartRoutingParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParams {
  /**
  * Cache time value in seconds. value range: 0-31536000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#cache_time TeoL7AccRule#cache_time}
  */
  readonly cacheTime?: number;
  /**
  * Status code. valid values: 400, 401, 403, 404, 405, 407, 414, 500, 501, 502, 503, 504, 509, 514.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#status_code TeoL7AccRule#status_code}
  */
  readonly statusCode?: number;
}

export function teoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time: cdktf.numberToTerraform(struct!.cacheTime),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function teoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_time: {
      value: cdktf.numberToHclTerraform(struct!.cacheTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTime = this._cacheTime;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheTime = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheTime = value.cacheTime;
      this._statusCode = value.statusCode;
    }
  }

  // cache_time - computed: false, optional: true, required: false
  private _cacheTime?: number; 
  public get cacheTime() {
    return this.getNumberAttribute('cache_time');
  }
  public set cacheTime(value: number) {
    this._cacheTime = value;
  }
  public resetCacheTime() {
    this._cacheTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeInput() {
    return this._cacheTime;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}

export class TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParams[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsOutputReference {
    return new TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParameters {
  /**
  * status_code_cache_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#status_code_cache_params TeoL7AccRule#status_code_cache_params}
  */
  readonly statusCodeCacheParams?: TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParams[] | cdktf.IResolvable;
}

export function teoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersOutputReference | TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code_cache_params: cdktf.listMapper(teoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsToTerraform, true)(struct!.statusCodeCacheParams),
  }
}


export function teoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersOutputReference | TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code_cache_params: {
      value: cdktf.listMapperHcl(teoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsToHclTerraform, true)(struct!.statusCodeCacheParams),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCodeCacheParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeCacheParams = this._statusCodeCacheParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statusCodeCacheParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statusCodeCacheParams.internalValue = value.statusCodeCacheParams;
    }
  }

  // status_code_cache_params - computed: false, optional: true, required: false
  private _statusCodeCacheParams = new TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsList(this, "status_code_cache_params", false);
  public get statusCodeCacheParams() {
    return this._statusCodeCacheParams;
  }
  public putStatusCodeCacheParams(value: TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersStatusCodeCacheParams[] | cdktf.IResolvable) {
    this._statusCodeCacheParams.internalValue = value;
  }
  public resetStatusCodeCacheParams() {
    this._statusCodeCacheParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeCacheParamsInput() {
    return this._statusCodeCacheParams.internalValue;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsTlsConfigParameters {
  /**
  * Cipher suite. for detailed information, please refer to tls versions and cipher suites description, https://www.tencentcloud.com/document/product/1145/54154?has_map=1. valid values: loose-v2023: loose-v2023 cipher suite; general-v2023: general-v2023 cipher suite; strict-v2023: strict-v2023 cipher suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#cipher_suite TeoL7AccRule#cipher_suite}
  */
  readonly cipherSuite?: string;
  /**
  * TLS version. at least one must be specified. if multiple versions are specified, they must be consecutive, e.g., enable tls1, 1.1, 1.2, and 1.3. it is not allowed to enable only 1 and 1.2 while disabling 1.1. valid values: tlsv1: tlsv1 version; `tlsv1.1`: tlsv1.1 version; `tlsv1.2`: tlsv1.2 version; `tlsv1.3`: tlsv1.3 version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#version TeoL7AccRule#version}
  */
  readonly version?: string[];
}

export function teoL7AccRuleRulesBranchesActionsTlsConfigParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsTlsConfigParametersOutputReference | TeoL7AccRuleRulesBranchesActionsTlsConfigParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suite: cdktf.stringToTerraform(struct!.cipherSuite),
    version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.version),
  }
}


export function teoL7AccRuleRulesBranchesActionsTlsConfigParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsTlsConfigParametersOutputReference | TeoL7AccRuleRulesBranchesActionsTlsConfigParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suite: {
      value: cdktf.stringToHclTerraform(struct!.cipherSuite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.version),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsTlsConfigParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsTlsConfigParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuite !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuite = this._cipherSuite;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsTlsConfigParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuite = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuite = value.cipherSuite;
      this._version = value.version;
    }
  }

  // cipher_suite - computed: false, optional: true, required: false
  private _cipherSuite?: string; 
  public get cipherSuite() {
    return this.getStringAttribute('cipher_suite');
  }
  public set cipherSuite(value: string) {
    this._cipherSuite = value;
  }
  public resetCipherSuite() {
    this._cipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteInput() {
    return this._cipherSuite;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string[]; 
  public get version() {
    return this.getListAttribute('version');
  }
  public set version(value: string[]) {
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
export interface TeoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParameters {
  /**
  * The maximum number of redirects. value range: 1-5. Note: this field is required when switch is on; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#max_times TeoL7AccRule#max_times}
  */
  readonly maxTimes?: number;
  /**
  * Whether to enable origin-pull to follow the redirection configuration. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParametersOutputReference | TeoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_times: cdktf.numberToTerraform(struct!.maxTimes),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParametersOutputReference | TeoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_times: {
      value: cdktf.numberToHclTerraform(struct!.maxTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTimes = this._maxTimes;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxTimes = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxTimes = value.maxTimes;
      this._switch = value.switch;
    }
  }

  // max_times - computed: false, optional: true, required: false
  private _maxTimes?: number; 
  public get maxTimes() {
    return this.getNumberAttribute('max_times');
  }
  public set maxTimes(value: number) {
    this._maxTimes = value;
  }
  public resetMaxTimes() {
    this._maxTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimesInput() {
    return this._maxTimes;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsUpstreamHttp2Parameters {
  /**
  * Whether to enable http2 origin-pull. valid values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleRulesBranchesActionsUpstreamHttp2ParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsUpstreamHttp2ParametersOutputReference | TeoL7AccRuleRulesBranchesActionsUpstreamHttp2Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleRulesBranchesActionsUpstreamHttp2ParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsUpstreamHttp2ParametersOutputReference | TeoL7AccRuleRulesBranchesActionsUpstreamHttp2Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsUpstreamHttp2ParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsUpstreamHttp2Parameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsUpstreamHttp2Parameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookie {
  /**
  * Origin-Pull request parameter cookie mode. this parameter is required when switch is on. valid values are: full: retain all; ignore: ignore all; includeCustom: retain partial parameters; excludeCustom: ignore partial parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#action TeoL7AccRule#action}
  */
  readonly action?: string;
  /**
  * Whether to enable the origin-pull request parameter cookie. valid values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
  /**
  * Specifies parameter values. this parameter takes effect only when the query string mode action is includecustom or excludecustom, and is used to specify the parameters to be reserved or ignored. up to 10 parameters are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#values TeoL7AccRule#values}
  */
  readonly values?: string[];
}

export function teoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookieToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookieOutputReference | TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    switch: cdktf.stringToTerraform(struct!.switch),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookieToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookieOutputReference | TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookie): any {
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
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._switch = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._switch = value.switch;
      this._values = value.values;
    }
  }

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

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryString {
  /**
  * Query string mode. this parameter is required when switch is on. values: full: retain all; ignore: ignore all; includeCustom: retain partial parameters; excludeCustom: ignore partial parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#action TeoL7AccRule#action}
  */
  readonly action?: string;
  /**
  * Whether to enable origin-pull request parameter query string. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
  /**
  * Specifies parameter values. this parameter takes effect only when the query string mode action is includecustom or excludecustom, and is used to specify the parameters to be reserved or ignored. up to 10 parameters are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#values TeoL7AccRule#values}
  */
  readonly values?: string[];
}

export function teoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryStringToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryStringOutputReference | TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    switch: cdktf.stringToTerraform(struct!.switch),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryStringToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryStringOutputReference | TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryString): any {
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
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._switch = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._switch = value.switch;
      this._values = value.values;
    }
  }

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

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsUpstreamRequestParameters {
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#cookie TeoL7AccRule#cookie}
  */
  readonly cookie?: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookie;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#query_string TeoL7AccRule#query_string}
  */
  readonly queryString?: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryString;
}

export function teoL7AccRuleRulesBranchesActionsUpstreamRequestParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersOutputReference | TeoL7AccRuleRulesBranchesActionsUpstreamRequestParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: teoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookieToTerraform(struct!.cookie),
    query_string: teoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryStringToTerraform(struct!.queryString),
  }
}


export function teoL7AccRuleRulesBranchesActionsUpstreamRequestParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersOutputReference | TeoL7AccRuleRulesBranchesActionsUpstreamRequestParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: teoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookieList",
    },
    query_string: {
      value: teoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryStringToHclTerraform(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsUpstreamRequestParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookie.internalValue = undefined;
      this._queryString.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookie.internalValue = value.cookie;
      this._queryString.internalValue = value.queryString;
    }
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParameters {
  /**
  * Origin-Pull url rewrite action. valid values are: replace: replace the path prefix; addPrefix: add the path prefix; rmvPrefix: remove the path prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#action TeoL7AccRule#action}
  */
  readonly action?: string;
  /**
  * Origin URL Rewrite uses a regular expression for matching the complete path. It must conform to the Google RE2 specification and have a length range of 1 to 1024. This field is required when the Action is regexReplace; otherwise, it is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#regex TeoL7AccRule#regex}
  */
  readonly regex?: string;
  /**
  * Origin-Pull url rewriting type, only path is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#type TeoL7AccRule#type}
  */
  readonly type?: string;
  /**
  * Origin-Pull url rewrite value, maximum length 1024, must start with /.note: when action is addprefix, it cannot end with /; when action is rmvprefix, * cannot be present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#value TeoL7AccRule#value}
  */
  readonly value?: string;
}

export function teoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParametersOutputReference | TeoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    regex: cdktf.stringToTerraform(struct!.regex),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function teoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParametersOutputReference | TeoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParameters): any {
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._regex = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._regex = value.regex;
      this._type = value.type;
      this._value = value.value;
    }
  }

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

  // regex - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TeoL7AccRuleRulesBranchesActionsWebSocketParameters {
  /**
  * Whether to enable websocket connection timeout. values: on: use timeout as the websocket timeout;; off: the platform still supports websocket connections, using the system default timeout of 15 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#switch TeoL7AccRule#switch}
  */
  readonly switch?: string;
  /**
  * Timeout, unit: seconds. maximum timeout is 120 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#timeout TeoL7AccRule#timeout}
  */
  readonly timeout?: number;
}

export function teoL7AccRuleRulesBranchesActionsWebSocketParametersToTerraform(struct?: TeoL7AccRuleRulesBranchesActionsWebSocketParametersOutputReference | TeoL7AccRuleRulesBranchesActionsWebSocketParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function teoL7AccRuleRulesBranchesActionsWebSocketParametersToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActionsWebSocketParametersOutputReference | TeoL7AccRuleRulesBranchesActionsWebSocketParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsWebSocketParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleRulesBranchesActionsWebSocketParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActionsWebSocketParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._timeout = value.timeout;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface TeoL7AccRuleRulesBranchesActions {
  /**
  * Operation name. The name needs to correspond to the parameter structure, for example, if Name=Cache, CacheParameters is required.
  * - `Cache`: Node cache TTL;
  * - `CacheKey`: Custom Cache Key;
  * - `CachePrefresh`: Cache pre-refresh;
  * - `AccessURLRedirect`: Access URL redirection;
  * - `UpstreamURLRewrite`: Back-to-origin URL rewrite;
  * - `QUIC`: QUIC;
  * - `WebSocket`: WebSocket;
  * - `Authentication`: Token authentication;
  * - `MaxAge`: Browser cache TTL;
  * - `StatusCodeCache`: Status code cache TTL;
  * - `OfflineCache`: Offline cache;
  * - `SmartRouting`: Smart acceleration;
  * - `RangeOriginPull`: Segment back-to-origin;
  * - `UpstreamHTTP2`: HTTP2 back-to-origin;
  * - `HostHeader`: Host Header rewrite;
  * - `ForceRedirectHTTPS`: Access protocol forced HTTPS jump configuration;
  * - `OriginPullProtocol`: Back-to-origin HTTPS;
  * - `Compression`: Smart compression configuration;
  * - `HSTS`: HSTS;
  * - `ClientIPHeader`: Header information configuration for storing client request IP;
  * - `OCSPStapling`: OCSP stapling;
  * - `HTTP2`: HTTP2 Access;
  * - `PostMaxSize`: POST request upload file streaming maximum limit configuration;
  * - `ClientIPCountry`: Carry client IP region information when returning to the source;
  * - `UpstreamFollowRedirect`: Return to the source follow redirection parameter configuration;
  * - `UpstreamRequest`: Return to the source request parameters;
  * - `TLSConfig`: SSL/TLS security;
  * - `ModifyOrigin`: Modify the source station;
  * - `HTTPUpstreamTimeout`: Seven-layer return to the source timeout configuration;
  * - `HttpResponse`: HTTP response;
  * - `ErrorPage`: Custom error page;
  * - `ModifyResponseHeader`: Modify HTTP node response header;
  * - `ModifyRequestHeader`: Modify HTTP node request header;
  * - `ResponseSpeedLimit`: Single connection download speed limit.
  * - `SetContentIdentifierParameters`: Set content identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#name TeoL7AccRule#name}
  */
  readonly name: string;
  /**
  * access_url_redirect_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#access_url_redirect_parameters TeoL7AccRule#access_url_redirect_parameters}
  */
  readonly accessUrlRedirectParameters?: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParameters;
  /**
  * authentication_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#authentication_parameters TeoL7AccRule#authentication_parameters}
  */
  readonly authenticationParameters?: TeoL7AccRuleRulesBranchesActionsAuthenticationParameters;
  /**
  * cache_key_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#cache_key_parameters TeoL7AccRule#cache_key_parameters}
  */
  readonly cacheKeyParameters?: TeoL7AccRuleRulesBranchesActionsCacheKeyParameters;
  /**
  * cache_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#cache_parameters TeoL7AccRule#cache_parameters}
  */
  readonly cacheParameters?: TeoL7AccRuleRulesBranchesActionsCacheParameters;
  /**
  * cache_prefresh_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#cache_prefresh_parameters TeoL7AccRule#cache_prefresh_parameters}
  */
  readonly cachePrefreshParameters?: TeoL7AccRuleRulesBranchesActionsCachePrefreshParameters;
  /**
  * client_ip_country_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#client_ip_country_parameters TeoL7AccRule#client_ip_country_parameters}
  */
  readonly clientIpCountryParameters?: TeoL7AccRuleRulesBranchesActionsClientIpCountryParameters;
  /**
  * client_ip_header_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#client_ip_header_parameters TeoL7AccRule#client_ip_header_parameters}
  */
  readonly clientIpHeaderParameters?: TeoL7AccRuleRulesBranchesActionsClientIpHeaderParameters;
  /**
  * compression_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#compression_parameters TeoL7AccRule#compression_parameters}
  */
  readonly compressionParameters?: TeoL7AccRuleRulesBranchesActionsCompressionParameters;
  /**
  * error_page_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#error_page_parameters TeoL7AccRule#error_page_parameters}
  */
  readonly errorPageParameters?: TeoL7AccRuleRulesBranchesActionsErrorPageParameters;
  /**
  * force_redirect_https_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#force_redirect_https_parameters TeoL7AccRule#force_redirect_https_parameters}
  */
  readonly forceRedirectHttpsParameters?: TeoL7AccRuleRulesBranchesActionsForceRedirectHttpsParameters;
  /**
  * host_header_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#host_header_parameters TeoL7AccRule#host_header_parameters}
  */
  readonly hostHeaderParameters?: TeoL7AccRuleRulesBranchesActionsHostHeaderParameters;
  /**
  * hsts_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#hsts_parameters TeoL7AccRule#hsts_parameters}
  */
  readonly hstsParameters?: TeoL7AccRuleRulesBranchesActionsHstsParameters;
  /**
  * http2_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#http2_parameters TeoL7AccRule#http2_parameters}
  */
  readonly http2Parameters?: TeoL7AccRuleRulesBranchesActionsHttp2Parameters;
  /**
  * http_response_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#http_response_parameters TeoL7AccRule#http_response_parameters}
  */
  readonly httpResponseParameters?: TeoL7AccRuleRulesBranchesActionsHttpResponseParameters;
  /**
  * http_upstream_timeout_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#http_upstream_timeout_parameters TeoL7AccRule#http_upstream_timeout_parameters}
  */
  readonly httpUpstreamTimeoutParameters?: TeoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParameters;
  /**
  * max_age_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#max_age_parameters TeoL7AccRule#max_age_parameters}
  */
  readonly maxAgeParameters?: TeoL7AccRuleRulesBranchesActionsMaxAgeParameters;
  /**
  * modify_origin_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#modify_origin_parameters TeoL7AccRule#modify_origin_parameters}
  */
  readonly modifyOriginParameters?: TeoL7AccRuleRulesBranchesActionsModifyOriginParameters;
  /**
  * modify_request_header_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#modify_request_header_parameters TeoL7AccRule#modify_request_header_parameters}
  */
  readonly modifyRequestHeaderParameters?: TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParameters;
  /**
  * modify_response_header_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#modify_response_header_parameters TeoL7AccRule#modify_response_header_parameters}
  */
  readonly modifyResponseHeaderParameters?: TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParameters;
  /**
  * ocsp_stapling_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#ocsp_stapling_parameters TeoL7AccRule#ocsp_stapling_parameters}
  */
  readonly ocspStaplingParameters?: TeoL7AccRuleRulesBranchesActionsOcspStaplingParameters;
  /**
  * offline_cache_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#offline_cache_parameters TeoL7AccRule#offline_cache_parameters}
  */
  readonly offlineCacheParameters?: TeoL7AccRuleRulesBranchesActionsOfflineCacheParameters;
  /**
  * origin_pull_protocol_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#origin_pull_protocol_parameters TeoL7AccRule#origin_pull_protocol_parameters}
  */
  readonly originPullProtocolParameters?: TeoL7AccRuleRulesBranchesActionsOriginPullProtocolParameters;
  /**
  * post_max_size_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#post_max_size_parameters TeoL7AccRule#post_max_size_parameters}
  */
  readonly postMaxSizeParameters?: TeoL7AccRuleRulesBranchesActionsPostMaxSizeParameters;
  /**
  * quic_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#quic_parameters TeoL7AccRule#quic_parameters}
  */
  readonly quicParameters?: TeoL7AccRuleRulesBranchesActionsQuicParameters;
  /**
  * range_origin_pull_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#range_origin_pull_parameters TeoL7AccRule#range_origin_pull_parameters}
  */
  readonly rangeOriginPullParameters?: TeoL7AccRuleRulesBranchesActionsRangeOriginPullParameters;
  /**
  * response_speed_limit_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#response_speed_limit_parameters TeoL7AccRule#response_speed_limit_parameters}
  */
  readonly responseSpeedLimitParameters?: TeoL7AccRuleRulesBranchesActionsResponseSpeedLimitParameters;
  /**
  * set_content_identifier_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#set_content_identifier_parameters TeoL7AccRule#set_content_identifier_parameters}
  */
  readonly setContentIdentifierParameters?: TeoL7AccRuleRulesBranchesActionsSetContentIdentifierParameters;
  /**
  * smart_routing_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#smart_routing_parameters TeoL7AccRule#smart_routing_parameters}
  */
  readonly smartRoutingParameters?: TeoL7AccRuleRulesBranchesActionsSmartRoutingParameters;
  /**
  * status_code_cache_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#status_code_cache_parameters TeoL7AccRule#status_code_cache_parameters}
  */
  readonly statusCodeCacheParameters?: TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParameters;
  /**
  * tls_config_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#tls_config_parameters TeoL7AccRule#tls_config_parameters}
  */
  readonly tlsConfigParameters?: TeoL7AccRuleRulesBranchesActionsTlsConfigParameters;
  /**
  * upstream_follow_redirect_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#upstream_follow_redirect_parameters TeoL7AccRule#upstream_follow_redirect_parameters}
  */
  readonly upstreamFollowRedirectParameters?: TeoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParameters;
  /**
  * upstream_http2_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#upstream_http2_parameters TeoL7AccRule#upstream_http2_parameters}
  */
  readonly upstreamHttp2Parameters?: TeoL7AccRuleRulesBranchesActionsUpstreamHttp2Parameters;
  /**
  * upstream_request_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#upstream_request_parameters TeoL7AccRule#upstream_request_parameters}
  */
  readonly upstreamRequestParameters?: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParameters;
  /**
  * upstream_url_rewrite_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#upstream_url_rewrite_parameters TeoL7AccRule#upstream_url_rewrite_parameters}
  */
  readonly upstreamUrlRewriteParameters?: TeoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParameters;
  /**
  * web_socket_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#web_socket_parameters TeoL7AccRule#web_socket_parameters}
  */
  readonly webSocketParameters?: TeoL7AccRuleRulesBranchesActionsWebSocketParameters;
}

export function teoL7AccRuleRulesBranchesActionsToTerraform(struct?: TeoL7AccRuleRulesBranchesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    access_url_redirect_parameters: teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersToTerraform(struct!.accessUrlRedirectParameters),
    authentication_parameters: teoL7AccRuleRulesBranchesActionsAuthenticationParametersToTerraform(struct!.authenticationParameters),
    cache_key_parameters: teoL7AccRuleRulesBranchesActionsCacheKeyParametersToTerraform(struct!.cacheKeyParameters),
    cache_parameters: teoL7AccRuleRulesBranchesActionsCacheParametersToTerraform(struct!.cacheParameters),
    cache_prefresh_parameters: teoL7AccRuleRulesBranchesActionsCachePrefreshParametersToTerraform(struct!.cachePrefreshParameters),
    client_ip_country_parameters: teoL7AccRuleRulesBranchesActionsClientIpCountryParametersToTerraform(struct!.clientIpCountryParameters),
    client_ip_header_parameters: teoL7AccRuleRulesBranchesActionsClientIpHeaderParametersToTerraform(struct!.clientIpHeaderParameters),
    compression_parameters: teoL7AccRuleRulesBranchesActionsCompressionParametersToTerraform(struct!.compressionParameters),
    error_page_parameters: teoL7AccRuleRulesBranchesActionsErrorPageParametersToTerraform(struct!.errorPageParameters),
    force_redirect_https_parameters: teoL7AccRuleRulesBranchesActionsForceRedirectHttpsParametersToTerraform(struct!.forceRedirectHttpsParameters),
    host_header_parameters: teoL7AccRuleRulesBranchesActionsHostHeaderParametersToTerraform(struct!.hostHeaderParameters),
    hsts_parameters: teoL7AccRuleRulesBranchesActionsHstsParametersToTerraform(struct!.hstsParameters),
    http2_parameters: teoL7AccRuleRulesBranchesActionsHttp2ParametersToTerraform(struct!.http2Parameters),
    http_response_parameters: teoL7AccRuleRulesBranchesActionsHttpResponseParametersToTerraform(struct!.httpResponseParameters),
    http_upstream_timeout_parameters: teoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParametersToTerraform(struct!.httpUpstreamTimeoutParameters),
    max_age_parameters: teoL7AccRuleRulesBranchesActionsMaxAgeParametersToTerraform(struct!.maxAgeParameters),
    modify_origin_parameters: teoL7AccRuleRulesBranchesActionsModifyOriginParametersToTerraform(struct!.modifyOriginParameters),
    modify_request_header_parameters: teoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersToTerraform(struct!.modifyRequestHeaderParameters),
    modify_response_header_parameters: teoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersToTerraform(struct!.modifyResponseHeaderParameters),
    ocsp_stapling_parameters: teoL7AccRuleRulesBranchesActionsOcspStaplingParametersToTerraform(struct!.ocspStaplingParameters),
    offline_cache_parameters: teoL7AccRuleRulesBranchesActionsOfflineCacheParametersToTerraform(struct!.offlineCacheParameters),
    origin_pull_protocol_parameters: teoL7AccRuleRulesBranchesActionsOriginPullProtocolParametersToTerraform(struct!.originPullProtocolParameters),
    post_max_size_parameters: teoL7AccRuleRulesBranchesActionsPostMaxSizeParametersToTerraform(struct!.postMaxSizeParameters),
    quic_parameters: teoL7AccRuleRulesBranchesActionsQuicParametersToTerraform(struct!.quicParameters),
    range_origin_pull_parameters: teoL7AccRuleRulesBranchesActionsRangeOriginPullParametersToTerraform(struct!.rangeOriginPullParameters),
    response_speed_limit_parameters: teoL7AccRuleRulesBranchesActionsResponseSpeedLimitParametersToTerraform(struct!.responseSpeedLimitParameters),
    set_content_identifier_parameters: teoL7AccRuleRulesBranchesActionsSetContentIdentifierParametersToTerraform(struct!.setContentIdentifierParameters),
    smart_routing_parameters: teoL7AccRuleRulesBranchesActionsSmartRoutingParametersToTerraform(struct!.smartRoutingParameters),
    status_code_cache_parameters: teoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersToTerraform(struct!.statusCodeCacheParameters),
    tls_config_parameters: teoL7AccRuleRulesBranchesActionsTlsConfigParametersToTerraform(struct!.tlsConfigParameters),
    upstream_follow_redirect_parameters: teoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParametersToTerraform(struct!.upstreamFollowRedirectParameters),
    upstream_http2_parameters: teoL7AccRuleRulesBranchesActionsUpstreamHttp2ParametersToTerraform(struct!.upstreamHttp2Parameters),
    upstream_request_parameters: teoL7AccRuleRulesBranchesActionsUpstreamRequestParametersToTerraform(struct!.upstreamRequestParameters),
    upstream_url_rewrite_parameters: teoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParametersToTerraform(struct!.upstreamUrlRewriteParameters),
    web_socket_parameters: teoL7AccRuleRulesBranchesActionsWebSocketParametersToTerraform(struct!.webSocketParameters),
  }
}


export function teoL7AccRuleRulesBranchesActionsToHclTerraform(struct?: TeoL7AccRuleRulesBranchesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_url_redirect_parameters: {
      value: teoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersToHclTerraform(struct!.accessUrlRedirectParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersList",
    },
    authentication_parameters: {
      value: teoL7AccRuleRulesBranchesActionsAuthenticationParametersToHclTerraform(struct!.authenticationParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsAuthenticationParametersList",
    },
    cache_key_parameters: {
      value: teoL7AccRuleRulesBranchesActionsCacheKeyParametersToHclTerraform(struct!.cacheKeyParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsCacheKeyParametersList",
    },
    cache_parameters: {
      value: teoL7AccRuleRulesBranchesActionsCacheParametersToHclTerraform(struct!.cacheParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsCacheParametersList",
    },
    cache_prefresh_parameters: {
      value: teoL7AccRuleRulesBranchesActionsCachePrefreshParametersToHclTerraform(struct!.cachePrefreshParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsCachePrefreshParametersList",
    },
    client_ip_country_parameters: {
      value: teoL7AccRuleRulesBranchesActionsClientIpCountryParametersToHclTerraform(struct!.clientIpCountryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsClientIpCountryParametersList",
    },
    client_ip_header_parameters: {
      value: teoL7AccRuleRulesBranchesActionsClientIpHeaderParametersToHclTerraform(struct!.clientIpHeaderParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsClientIpHeaderParametersList",
    },
    compression_parameters: {
      value: teoL7AccRuleRulesBranchesActionsCompressionParametersToHclTerraform(struct!.compressionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsCompressionParametersList",
    },
    error_page_parameters: {
      value: teoL7AccRuleRulesBranchesActionsErrorPageParametersToHclTerraform(struct!.errorPageParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsErrorPageParametersList",
    },
    force_redirect_https_parameters: {
      value: teoL7AccRuleRulesBranchesActionsForceRedirectHttpsParametersToHclTerraform(struct!.forceRedirectHttpsParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsForceRedirectHttpsParametersList",
    },
    host_header_parameters: {
      value: teoL7AccRuleRulesBranchesActionsHostHeaderParametersToHclTerraform(struct!.hostHeaderParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsHostHeaderParametersList",
    },
    hsts_parameters: {
      value: teoL7AccRuleRulesBranchesActionsHstsParametersToHclTerraform(struct!.hstsParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsHstsParametersList",
    },
    http2_parameters: {
      value: teoL7AccRuleRulesBranchesActionsHttp2ParametersToHclTerraform(struct!.http2Parameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsHttp2ParametersList",
    },
    http_response_parameters: {
      value: teoL7AccRuleRulesBranchesActionsHttpResponseParametersToHclTerraform(struct!.httpResponseParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsHttpResponseParametersList",
    },
    http_upstream_timeout_parameters: {
      value: teoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParametersToHclTerraform(struct!.httpUpstreamTimeoutParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParametersList",
    },
    max_age_parameters: {
      value: teoL7AccRuleRulesBranchesActionsMaxAgeParametersToHclTerraform(struct!.maxAgeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsMaxAgeParametersList",
    },
    modify_origin_parameters: {
      value: teoL7AccRuleRulesBranchesActionsModifyOriginParametersToHclTerraform(struct!.modifyOriginParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsModifyOriginParametersList",
    },
    modify_request_header_parameters: {
      value: teoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersToHclTerraform(struct!.modifyRequestHeaderParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersList",
    },
    modify_response_header_parameters: {
      value: teoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersToHclTerraform(struct!.modifyResponseHeaderParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersList",
    },
    ocsp_stapling_parameters: {
      value: teoL7AccRuleRulesBranchesActionsOcspStaplingParametersToHclTerraform(struct!.ocspStaplingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsOcspStaplingParametersList",
    },
    offline_cache_parameters: {
      value: teoL7AccRuleRulesBranchesActionsOfflineCacheParametersToHclTerraform(struct!.offlineCacheParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsOfflineCacheParametersList",
    },
    origin_pull_protocol_parameters: {
      value: teoL7AccRuleRulesBranchesActionsOriginPullProtocolParametersToHclTerraform(struct!.originPullProtocolParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsOriginPullProtocolParametersList",
    },
    post_max_size_parameters: {
      value: teoL7AccRuleRulesBranchesActionsPostMaxSizeParametersToHclTerraform(struct!.postMaxSizeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsPostMaxSizeParametersList",
    },
    quic_parameters: {
      value: teoL7AccRuleRulesBranchesActionsQuicParametersToHclTerraform(struct!.quicParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsQuicParametersList",
    },
    range_origin_pull_parameters: {
      value: teoL7AccRuleRulesBranchesActionsRangeOriginPullParametersToHclTerraform(struct!.rangeOriginPullParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsRangeOriginPullParametersList",
    },
    response_speed_limit_parameters: {
      value: teoL7AccRuleRulesBranchesActionsResponseSpeedLimitParametersToHclTerraform(struct!.responseSpeedLimitParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsResponseSpeedLimitParametersList",
    },
    set_content_identifier_parameters: {
      value: teoL7AccRuleRulesBranchesActionsSetContentIdentifierParametersToHclTerraform(struct!.setContentIdentifierParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsSetContentIdentifierParametersList",
    },
    smart_routing_parameters: {
      value: teoL7AccRuleRulesBranchesActionsSmartRoutingParametersToHclTerraform(struct!.smartRoutingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsSmartRoutingParametersList",
    },
    status_code_cache_parameters: {
      value: teoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersToHclTerraform(struct!.statusCodeCacheParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersList",
    },
    tls_config_parameters: {
      value: teoL7AccRuleRulesBranchesActionsTlsConfigParametersToHclTerraform(struct!.tlsConfigParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsTlsConfigParametersList",
    },
    upstream_follow_redirect_parameters: {
      value: teoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParametersToHclTerraform(struct!.upstreamFollowRedirectParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParametersList",
    },
    upstream_http2_parameters: {
      value: teoL7AccRuleRulesBranchesActionsUpstreamHttp2ParametersToHclTerraform(struct!.upstreamHttp2Parameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsUpstreamHttp2ParametersList",
    },
    upstream_request_parameters: {
      value: teoL7AccRuleRulesBranchesActionsUpstreamRequestParametersToHclTerraform(struct!.upstreamRequestParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersList",
    },
    upstream_url_rewrite_parameters: {
      value: teoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParametersToHclTerraform(struct!.upstreamUrlRewriteParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParametersList",
    },
    web_socket_parameters: {
      value: teoL7AccRuleRulesBranchesActionsWebSocketParametersToHclTerraform(struct!.webSocketParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsWebSocketParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleRulesBranchesActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._accessUrlRedirectParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessUrlRedirectParameters = this._accessUrlRedirectParameters?.internalValue;
    }
    if (this._authenticationParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationParameters = this._authenticationParameters?.internalValue;
    }
    if (this._cacheKeyParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyParameters = this._cacheKeyParameters?.internalValue;
    }
    if (this._cacheParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheParameters = this._cacheParameters?.internalValue;
    }
    if (this._cachePrefreshParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePrefreshParameters = this._cachePrefreshParameters?.internalValue;
    }
    if (this._clientIpCountryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpCountryParameters = this._clientIpCountryParameters?.internalValue;
    }
    if (this._clientIpHeaderParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpHeaderParameters = this._clientIpHeaderParameters?.internalValue;
    }
    if (this._compressionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionParameters = this._compressionParameters?.internalValue;
    }
    if (this._errorPageParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageParameters = this._errorPageParameters?.internalValue;
    }
    if (this._forceRedirectHttpsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRedirectHttpsParameters = this._forceRedirectHttpsParameters?.internalValue;
    }
    if (this._hostHeaderParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeaderParameters = this._hostHeaderParameters?.internalValue;
    }
    if (this._hstsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hstsParameters = this._hstsParameters?.internalValue;
    }
    if (this._http2Parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Parameters = this._http2Parameters?.internalValue;
    }
    if (this._httpResponseParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponseParameters = this._httpResponseParameters?.internalValue;
    }
    if (this._httpUpstreamTimeoutParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUpstreamTimeoutParameters = this._httpUpstreamTimeoutParameters?.internalValue;
    }
    if (this._maxAgeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeParameters = this._maxAgeParameters?.internalValue;
    }
    if (this._modifyOriginParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyOriginParameters = this._modifyOriginParameters?.internalValue;
    }
    if (this._modifyRequestHeaderParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyRequestHeaderParameters = this._modifyRequestHeaderParameters?.internalValue;
    }
    if (this._modifyResponseHeaderParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyResponseHeaderParameters = this._modifyResponseHeaderParameters?.internalValue;
    }
    if (this._ocspStaplingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspStaplingParameters = this._ocspStaplingParameters?.internalValue;
    }
    if (this._offlineCacheParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineCacheParameters = this._offlineCacheParameters?.internalValue;
    }
    if (this._originPullProtocolParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originPullProtocolParameters = this._originPullProtocolParameters?.internalValue;
    }
    if (this._postMaxSizeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postMaxSizeParameters = this._postMaxSizeParameters?.internalValue;
    }
    if (this._quicParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicParameters = this._quicParameters?.internalValue;
    }
    if (this._rangeOriginPullParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeOriginPullParameters = this._rangeOriginPullParameters?.internalValue;
    }
    if (this._responseSpeedLimitParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSpeedLimitParameters = this._responseSpeedLimitParameters?.internalValue;
    }
    if (this._setContentIdentifierParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setContentIdentifierParameters = this._setContentIdentifierParameters?.internalValue;
    }
    if (this._smartRoutingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartRoutingParameters = this._smartRoutingParameters?.internalValue;
    }
    if (this._statusCodeCacheParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeCacheParameters = this._statusCodeCacheParameters?.internalValue;
    }
    if (this._tlsConfigParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfigParameters = this._tlsConfigParameters?.internalValue;
    }
    if (this._upstreamFollowRedirectParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamFollowRedirectParameters = this._upstreamFollowRedirectParameters?.internalValue;
    }
    if (this._upstreamHttp2Parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamHttp2Parameters = this._upstreamHttp2Parameters?.internalValue;
    }
    if (this._upstreamRequestParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamRequestParameters = this._upstreamRequestParameters?.internalValue;
    }
    if (this._upstreamUrlRewriteParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamUrlRewriteParameters = this._upstreamUrlRewriteParameters?.internalValue;
    }
    if (this._webSocketParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSocketParameters = this._webSocketParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._accessUrlRedirectParameters.internalValue = undefined;
      this._authenticationParameters.internalValue = undefined;
      this._cacheKeyParameters.internalValue = undefined;
      this._cacheParameters.internalValue = undefined;
      this._cachePrefreshParameters.internalValue = undefined;
      this._clientIpCountryParameters.internalValue = undefined;
      this._clientIpHeaderParameters.internalValue = undefined;
      this._compressionParameters.internalValue = undefined;
      this._errorPageParameters.internalValue = undefined;
      this._forceRedirectHttpsParameters.internalValue = undefined;
      this._hostHeaderParameters.internalValue = undefined;
      this._hstsParameters.internalValue = undefined;
      this._http2Parameters.internalValue = undefined;
      this._httpResponseParameters.internalValue = undefined;
      this._httpUpstreamTimeoutParameters.internalValue = undefined;
      this._maxAgeParameters.internalValue = undefined;
      this._modifyOriginParameters.internalValue = undefined;
      this._modifyRequestHeaderParameters.internalValue = undefined;
      this._modifyResponseHeaderParameters.internalValue = undefined;
      this._ocspStaplingParameters.internalValue = undefined;
      this._offlineCacheParameters.internalValue = undefined;
      this._originPullProtocolParameters.internalValue = undefined;
      this._postMaxSizeParameters.internalValue = undefined;
      this._quicParameters.internalValue = undefined;
      this._rangeOriginPullParameters.internalValue = undefined;
      this._responseSpeedLimitParameters.internalValue = undefined;
      this._setContentIdentifierParameters.internalValue = undefined;
      this._smartRoutingParameters.internalValue = undefined;
      this._statusCodeCacheParameters.internalValue = undefined;
      this._tlsConfigParameters.internalValue = undefined;
      this._upstreamFollowRedirectParameters.internalValue = undefined;
      this._upstreamHttp2Parameters.internalValue = undefined;
      this._upstreamRequestParameters.internalValue = undefined;
      this._upstreamUrlRewriteParameters.internalValue = undefined;
      this._webSocketParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._accessUrlRedirectParameters.internalValue = value.accessUrlRedirectParameters;
      this._authenticationParameters.internalValue = value.authenticationParameters;
      this._cacheKeyParameters.internalValue = value.cacheKeyParameters;
      this._cacheParameters.internalValue = value.cacheParameters;
      this._cachePrefreshParameters.internalValue = value.cachePrefreshParameters;
      this._clientIpCountryParameters.internalValue = value.clientIpCountryParameters;
      this._clientIpHeaderParameters.internalValue = value.clientIpHeaderParameters;
      this._compressionParameters.internalValue = value.compressionParameters;
      this._errorPageParameters.internalValue = value.errorPageParameters;
      this._forceRedirectHttpsParameters.internalValue = value.forceRedirectHttpsParameters;
      this._hostHeaderParameters.internalValue = value.hostHeaderParameters;
      this._hstsParameters.internalValue = value.hstsParameters;
      this._http2Parameters.internalValue = value.http2Parameters;
      this._httpResponseParameters.internalValue = value.httpResponseParameters;
      this._httpUpstreamTimeoutParameters.internalValue = value.httpUpstreamTimeoutParameters;
      this._maxAgeParameters.internalValue = value.maxAgeParameters;
      this._modifyOriginParameters.internalValue = value.modifyOriginParameters;
      this._modifyRequestHeaderParameters.internalValue = value.modifyRequestHeaderParameters;
      this._modifyResponseHeaderParameters.internalValue = value.modifyResponseHeaderParameters;
      this._ocspStaplingParameters.internalValue = value.ocspStaplingParameters;
      this._offlineCacheParameters.internalValue = value.offlineCacheParameters;
      this._originPullProtocolParameters.internalValue = value.originPullProtocolParameters;
      this._postMaxSizeParameters.internalValue = value.postMaxSizeParameters;
      this._quicParameters.internalValue = value.quicParameters;
      this._rangeOriginPullParameters.internalValue = value.rangeOriginPullParameters;
      this._responseSpeedLimitParameters.internalValue = value.responseSpeedLimitParameters;
      this._setContentIdentifierParameters.internalValue = value.setContentIdentifierParameters;
      this._smartRoutingParameters.internalValue = value.smartRoutingParameters;
      this._statusCodeCacheParameters.internalValue = value.statusCodeCacheParameters;
      this._tlsConfigParameters.internalValue = value.tlsConfigParameters;
      this._upstreamFollowRedirectParameters.internalValue = value.upstreamFollowRedirectParameters;
      this._upstreamHttp2Parameters.internalValue = value.upstreamHttp2Parameters;
      this._upstreamRequestParameters.internalValue = value.upstreamRequestParameters;
      this._upstreamUrlRewriteParameters.internalValue = value.upstreamUrlRewriteParameters;
      this._webSocketParameters.internalValue = value.webSocketParameters;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // access_url_redirect_parameters - computed: false, optional: true, required: false
  private _accessUrlRedirectParameters = new TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParametersOutputReference(this, "access_url_redirect_parameters");
  public get accessUrlRedirectParameters() {
    return this._accessUrlRedirectParameters;
  }
  public putAccessUrlRedirectParameters(value: TeoL7AccRuleRulesBranchesActionsAccessUrlRedirectParameters) {
    this._accessUrlRedirectParameters.internalValue = value;
  }
  public resetAccessUrlRedirectParameters() {
    this._accessUrlRedirectParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessUrlRedirectParametersInput() {
    return this._accessUrlRedirectParameters.internalValue;
  }

  // authentication_parameters - computed: false, optional: true, required: false
  private _authenticationParameters = new TeoL7AccRuleRulesBranchesActionsAuthenticationParametersOutputReference(this, "authentication_parameters");
  public get authenticationParameters() {
    return this._authenticationParameters;
  }
  public putAuthenticationParameters(value: TeoL7AccRuleRulesBranchesActionsAuthenticationParameters) {
    this._authenticationParameters.internalValue = value;
  }
  public resetAuthenticationParameters() {
    this._authenticationParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationParametersInput() {
    return this._authenticationParameters.internalValue;
  }

  // cache_key_parameters - computed: false, optional: true, required: false
  private _cacheKeyParameters = new TeoL7AccRuleRulesBranchesActionsCacheKeyParametersOutputReference(this, "cache_key_parameters");
  public get cacheKeyParameters() {
    return this._cacheKeyParameters;
  }
  public putCacheKeyParameters(value: TeoL7AccRuleRulesBranchesActionsCacheKeyParameters) {
    this._cacheKeyParameters.internalValue = value;
  }
  public resetCacheKeyParameters() {
    this._cacheKeyParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyParametersInput() {
    return this._cacheKeyParameters.internalValue;
  }

  // cache_parameters - computed: false, optional: true, required: false
  private _cacheParameters = new TeoL7AccRuleRulesBranchesActionsCacheParametersOutputReference(this, "cache_parameters");
  public get cacheParameters() {
    return this._cacheParameters;
  }
  public putCacheParameters(value: TeoL7AccRuleRulesBranchesActionsCacheParameters) {
    this._cacheParameters.internalValue = value;
  }
  public resetCacheParameters() {
    this._cacheParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheParametersInput() {
    return this._cacheParameters.internalValue;
  }

  // cache_prefresh_parameters - computed: false, optional: true, required: false
  private _cachePrefreshParameters = new TeoL7AccRuleRulesBranchesActionsCachePrefreshParametersOutputReference(this, "cache_prefresh_parameters");
  public get cachePrefreshParameters() {
    return this._cachePrefreshParameters;
  }
  public putCachePrefreshParameters(value: TeoL7AccRuleRulesBranchesActionsCachePrefreshParameters) {
    this._cachePrefreshParameters.internalValue = value;
  }
  public resetCachePrefreshParameters() {
    this._cachePrefreshParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePrefreshParametersInput() {
    return this._cachePrefreshParameters.internalValue;
  }

  // client_ip_country_parameters - computed: false, optional: true, required: false
  private _clientIpCountryParameters = new TeoL7AccRuleRulesBranchesActionsClientIpCountryParametersOutputReference(this, "client_ip_country_parameters");
  public get clientIpCountryParameters() {
    return this._clientIpCountryParameters;
  }
  public putClientIpCountryParameters(value: TeoL7AccRuleRulesBranchesActionsClientIpCountryParameters) {
    this._clientIpCountryParameters.internalValue = value;
  }
  public resetClientIpCountryParameters() {
    this._clientIpCountryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpCountryParametersInput() {
    return this._clientIpCountryParameters.internalValue;
  }

  // client_ip_header_parameters - computed: false, optional: true, required: false
  private _clientIpHeaderParameters = new TeoL7AccRuleRulesBranchesActionsClientIpHeaderParametersOutputReference(this, "client_ip_header_parameters");
  public get clientIpHeaderParameters() {
    return this._clientIpHeaderParameters;
  }
  public putClientIpHeaderParameters(value: TeoL7AccRuleRulesBranchesActionsClientIpHeaderParameters) {
    this._clientIpHeaderParameters.internalValue = value;
  }
  public resetClientIpHeaderParameters() {
    this._clientIpHeaderParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpHeaderParametersInput() {
    return this._clientIpHeaderParameters.internalValue;
  }

  // compression_parameters - computed: false, optional: true, required: false
  private _compressionParameters = new TeoL7AccRuleRulesBranchesActionsCompressionParametersOutputReference(this, "compression_parameters");
  public get compressionParameters() {
    return this._compressionParameters;
  }
  public putCompressionParameters(value: TeoL7AccRuleRulesBranchesActionsCompressionParameters) {
    this._compressionParameters.internalValue = value;
  }
  public resetCompressionParameters() {
    this._compressionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionParametersInput() {
    return this._compressionParameters.internalValue;
  }

  // error_page_parameters - computed: false, optional: true, required: false
  private _errorPageParameters = new TeoL7AccRuleRulesBranchesActionsErrorPageParametersOutputReference(this, "error_page_parameters");
  public get errorPageParameters() {
    return this._errorPageParameters;
  }
  public putErrorPageParameters(value: TeoL7AccRuleRulesBranchesActionsErrorPageParameters) {
    this._errorPageParameters.internalValue = value;
  }
  public resetErrorPageParameters() {
    this._errorPageParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageParametersInput() {
    return this._errorPageParameters.internalValue;
  }

  // force_redirect_https_parameters - computed: false, optional: true, required: false
  private _forceRedirectHttpsParameters = new TeoL7AccRuleRulesBranchesActionsForceRedirectHttpsParametersOutputReference(this, "force_redirect_https_parameters");
  public get forceRedirectHttpsParameters() {
    return this._forceRedirectHttpsParameters;
  }
  public putForceRedirectHttpsParameters(value: TeoL7AccRuleRulesBranchesActionsForceRedirectHttpsParameters) {
    this._forceRedirectHttpsParameters.internalValue = value;
  }
  public resetForceRedirectHttpsParameters() {
    this._forceRedirectHttpsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRedirectHttpsParametersInput() {
    return this._forceRedirectHttpsParameters.internalValue;
  }

  // host_header_parameters - computed: false, optional: true, required: false
  private _hostHeaderParameters = new TeoL7AccRuleRulesBranchesActionsHostHeaderParametersOutputReference(this, "host_header_parameters");
  public get hostHeaderParameters() {
    return this._hostHeaderParameters;
  }
  public putHostHeaderParameters(value: TeoL7AccRuleRulesBranchesActionsHostHeaderParameters) {
    this._hostHeaderParameters.internalValue = value;
  }
  public resetHostHeaderParameters() {
    this._hostHeaderParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderParametersInput() {
    return this._hostHeaderParameters.internalValue;
  }

  // hsts_parameters - computed: false, optional: true, required: false
  private _hstsParameters = new TeoL7AccRuleRulesBranchesActionsHstsParametersOutputReference(this, "hsts_parameters");
  public get hstsParameters() {
    return this._hstsParameters;
  }
  public putHstsParameters(value: TeoL7AccRuleRulesBranchesActionsHstsParameters) {
    this._hstsParameters.internalValue = value;
  }
  public resetHstsParameters() {
    this._hstsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsParametersInput() {
    return this._hstsParameters.internalValue;
  }

  // http2_parameters - computed: false, optional: true, required: false
  private _http2Parameters = new TeoL7AccRuleRulesBranchesActionsHttp2ParametersOutputReference(this, "http2_parameters");
  public get http2Parameters() {
    return this._http2Parameters;
  }
  public putHttp2Parameters(value: TeoL7AccRuleRulesBranchesActionsHttp2Parameters) {
    this._http2Parameters.internalValue = value;
  }
  public resetHttp2Parameters() {
    this._http2Parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ParametersInput() {
    return this._http2Parameters.internalValue;
  }

  // http_response_parameters - computed: false, optional: true, required: false
  private _httpResponseParameters = new TeoL7AccRuleRulesBranchesActionsHttpResponseParametersOutputReference(this, "http_response_parameters");
  public get httpResponseParameters() {
    return this._httpResponseParameters;
  }
  public putHttpResponseParameters(value: TeoL7AccRuleRulesBranchesActionsHttpResponseParameters) {
    this._httpResponseParameters.internalValue = value;
  }
  public resetHttpResponseParameters() {
    this._httpResponseParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseParametersInput() {
    return this._httpResponseParameters.internalValue;
  }

  // http_upstream_timeout_parameters - computed: false, optional: true, required: false
  private _httpUpstreamTimeoutParameters = new TeoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParametersOutputReference(this, "http_upstream_timeout_parameters");
  public get httpUpstreamTimeoutParameters() {
    return this._httpUpstreamTimeoutParameters;
  }
  public putHttpUpstreamTimeoutParameters(value: TeoL7AccRuleRulesBranchesActionsHttpUpstreamTimeoutParameters) {
    this._httpUpstreamTimeoutParameters.internalValue = value;
  }
  public resetHttpUpstreamTimeoutParameters() {
    this._httpUpstreamTimeoutParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUpstreamTimeoutParametersInput() {
    return this._httpUpstreamTimeoutParameters.internalValue;
  }

  // max_age_parameters - computed: false, optional: true, required: false
  private _maxAgeParameters = new TeoL7AccRuleRulesBranchesActionsMaxAgeParametersOutputReference(this, "max_age_parameters");
  public get maxAgeParameters() {
    return this._maxAgeParameters;
  }
  public putMaxAgeParameters(value: TeoL7AccRuleRulesBranchesActionsMaxAgeParameters) {
    this._maxAgeParameters.internalValue = value;
  }
  public resetMaxAgeParameters() {
    this._maxAgeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeParametersInput() {
    return this._maxAgeParameters.internalValue;
  }

  // modify_origin_parameters - computed: false, optional: true, required: false
  private _modifyOriginParameters = new TeoL7AccRuleRulesBranchesActionsModifyOriginParametersOutputReference(this, "modify_origin_parameters");
  public get modifyOriginParameters() {
    return this._modifyOriginParameters;
  }
  public putModifyOriginParameters(value: TeoL7AccRuleRulesBranchesActionsModifyOriginParameters) {
    this._modifyOriginParameters.internalValue = value;
  }
  public resetModifyOriginParameters() {
    this._modifyOriginParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyOriginParametersInput() {
    return this._modifyOriginParameters.internalValue;
  }

  // modify_request_header_parameters - computed: false, optional: true, required: false
  private _modifyRequestHeaderParameters = new TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParametersOutputReference(this, "modify_request_header_parameters");
  public get modifyRequestHeaderParameters() {
    return this._modifyRequestHeaderParameters;
  }
  public putModifyRequestHeaderParameters(value: TeoL7AccRuleRulesBranchesActionsModifyRequestHeaderParameters) {
    this._modifyRequestHeaderParameters.internalValue = value;
  }
  public resetModifyRequestHeaderParameters() {
    this._modifyRequestHeaderParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyRequestHeaderParametersInput() {
    return this._modifyRequestHeaderParameters.internalValue;
  }

  // modify_response_header_parameters - computed: false, optional: true, required: false
  private _modifyResponseHeaderParameters = new TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParametersOutputReference(this, "modify_response_header_parameters");
  public get modifyResponseHeaderParameters() {
    return this._modifyResponseHeaderParameters;
  }
  public putModifyResponseHeaderParameters(value: TeoL7AccRuleRulesBranchesActionsModifyResponseHeaderParameters) {
    this._modifyResponseHeaderParameters.internalValue = value;
  }
  public resetModifyResponseHeaderParameters() {
    this._modifyResponseHeaderParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyResponseHeaderParametersInput() {
    return this._modifyResponseHeaderParameters.internalValue;
  }

  // ocsp_stapling_parameters - computed: false, optional: true, required: false
  private _ocspStaplingParameters = new TeoL7AccRuleRulesBranchesActionsOcspStaplingParametersOutputReference(this, "ocsp_stapling_parameters");
  public get ocspStaplingParameters() {
    return this._ocspStaplingParameters;
  }
  public putOcspStaplingParameters(value: TeoL7AccRuleRulesBranchesActionsOcspStaplingParameters) {
    this._ocspStaplingParameters.internalValue = value;
  }
  public resetOcspStaplingParameters() {
    this._ocspStaplingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplingParametersInput() {
    return this._ocspStaplingParameters.internalValue;
  }

  // offline_cache_parameters - computed: false, optional: true, required: false
  private _offlineCacheParameters = new TeoL7AccRuleRulesBranchesActionsOfflineCacheParametersOutputReference(this, "offline_cache_parameters");
  public get offlineCacheParameters() {
    return this._offlineCacheParameters;
  }
  public putOfflineCacheParameters(value: TeoL7AccRuleRulesBranchesActionsOfflineCacheParameters) {
    this._offlineCacheParameters.internalValue = value;
  }
  public resetOfflineCacheParameters() {
    this._offlineCacheParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineCacheParametersInput() {
    return this._offlineCacheParameters.internalValue;
  }

  // origin_pull_protocol_parameters - computed: false, optional: true, required: false
  private _originPullProtocolParameters = new TeoL7AccRuleRulesBranchesActionsOriginPullProtocolParametersOutputReference(this, "origin_pull_protocol_parameters");
  public get originPullProtocolParameters() {
    return this._originPullProtocolParameters;
  }
  public putOriginPullProtocolParameters(value: TeoL7AccRuleRulesBranchesActionsOriginPullProtocolParameters) {
    this._originPullProtocolParameters.internalValue = value;
  }
  public resetOriginPullProtocolParameters() {
    this._originPullProtocolParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPullProtocolParametersInput() {
    return this._originPullProtocolParameters.internalValue;
  }

  // post_max_size_parameters - computed: false, optional: true, required: false
  private _postMaxSizeParameters = new TeoL7AccRuleRulesBranchesActionsPostMaxSizeParametersOutputReference(this, "post_max_size_parameters");
  public get postMaxSizeParameters() {
    return this._postMaxSizeParameters;
  }
  public putPostMaxSizeParameters(value: TeoL7AccRuleRulesBranchesActionsPostMaxSizeParameters) {
    this._postMaxSizeParameters.internalValue = value;
  }
  public resetPostMaxSizeParameters() {
    this._postMaxSizeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postMaxSizeParametersInput() {
    return this._postMaxSizeParameters.internalValue;
  }

  // quic_parameters - computed: false, optional: true, required: false
  private _quicParameters = new TeoL7AccRuleRulesBranchesActionsQuicParametersOutputReference(this, "quic_parameters");
  public get quicParameters() {
    return this._quicParameters;
  }
  public putQuicParameters(value: TeoL7AccRuleRulesBranchesActionsQuicParameters) {
    this._quicParameters.internalValue = value;
  }
  public resetQuicParameters() {
    this._quicParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicParametersInput() {
    return this._quicParameters.internalValue;
  }

  // range_origin_pull_parameters - computed: false, optional: true, required: false
  private _rangeOriginPullParameters = new TeoL7AccRuleRulesBranchesActionsRangeOriginPullParametersOutputReference(this, "range_origin_pull_parameters");
  public get rangeOriginPullParameters() {
    return this._rangeOriginPullParameters;
  }
  public putRangeOriginPullParameters(value: TeoL7AccRuleRulesBranchesActionsRangeOriginPullParameters) {
    this._rangeOriginPullParameters.internalValue = value;
  }
  public resetRangeOriginPullParameters() {
    this._rangeOriginPullParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeOriginPullParametersInput() {
    return this._rangeOriginPullParameters.internalValue;
  }

  // response_speed_limit_parameters - computed: false, optional: true, required: false
  private _responseSpeedLimitParameters = new TeoL7AccRuleRulesBranchesActionsResponseSpeedLimitParametersOutputReference(this, "response_speed_limit_parameters");
  public get responseSpeedLimitParameters() {
    return this._responseSpeedLimitParameters;
  }
  public putResponseSpeedLimitParameters(value: TeoL7AccRuleRulesBranchesActionsResponseSpeedLimitParameters) {
    this._responseSpeedLimitParameters.internalValue = value;
  }
  public resetResponseSpeedLimitParameters() {
    this._responseSpeedLimitParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSpeedLimitParametersInput() {
    return this._responseSpeedLimitParameters.internalValue;
  }

  // set_content_identifier_parameters - computed: false, optional: true, required: false
  private _setContentIdentifierParameters = new TeoL7AccRuleRulesBranchesActionsSetContentIdentifierParametersOutputReference(this, "set_content_identifier_parameters");
  public get setContentIdentifierParameters() {
    return this._setContentIdentifierParameters;
  }
  public putSetContentIdentifierParameters(value: TeoL7AccRuleRulesBranchesActionsSetContentIdentifierParameters) {
    this._setContentIdentifierParameters.internalValue = value;
  }
  public resetSetContentIdentifierParameters() {
    this._setContentIdentifierParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setContentIdentifierParametersInput() {
    return this._setContentIdentifierParameters.internalValue;
  }

  // smart_routing_parameters - computed: false, optional: true, required: false
  private _smartRoutingParameters = new TeoL7AccRuleRulesBranchesActionsSmartRoutingParametersOutputReference(this, "smart_routing_parameters");
  public get smartRoutingParameters() {
    return this._smartRoutingParameters;
  }
  public putSmartRoutingParameters(value: TeoL7AccRuleRulesBranchesActionsSmartRoutingParameters) {
    this._smartRoutingParameters.internalValue = value;
  }
  public resetSmartRoutingParameters() {
    this._smartRoutingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartRoutingParametersInput() {
    return this._smartRoutingParameters.internalValue;
  }

  // status_code_cache_parameters - computed: false, optional: true, required: false
  private _statusCodeCacheParameters = new TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParametersOutputReference(this, "status_code_cache_parameters");
  public get statusCodeCacheParameters() {
    return this._statusCodeCacheParameters;
  }
  public putStatusCodeCacheParameters(value: TeoL7AccRuleRulesBranchesActionsStatusCodeCacheParameters) {
    this._statusCodeCacheParameters.internalValue = value;
  }
  public resetStatusCodeCacheParameters() {
    this._statusCodeCacheParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeCacheParametersInput() {
    return this._statusCodeCacheParameters.internalValue;
  }

  // tls_config_parameters - computed: false, optional: true, required: false
  private _tlsConfigParameters = new TeoL7AccRuleRulesBranchesActionsTlsConfigParametersOutputReference(this, "tls_config_parameters");
  public get tlsConfigParameters() {
    return this._tlsConfigParameters;
  }
  public putTlsConfigParameters(value: TeoL7AccRuleRulesBranchesActionsTlsConfigParameters) {
    this._tlsConfigParameters.internalValue = value;
  }
  public resetTlsConfigParameters() {
    this._tlsConfigParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigParametersInput() {
    return this._tlsConfigParameters.internalValue;
  }

  // upstream_follow_redirect_parameters - computed: false, optional: true, required: false
  private _upstreamFollowRedirectParameters = new TeoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParametersOutputReference(this, "upstream_follow_redirect_parameters");
  public get upstreamFollowRedirectParameters() {
    return this._upstreamFollowRedirectParameters;
  }
  public putUpstreamFollowRedirectParameters(value: TeoL7AccRuleRulesBranchesActionsUpstreamFollowRedirectParameters) {
    this._upstreamFollowRedirectParameters.internalValue = value;
  }
  public resetUpstreamFollowRedirectParameters() {
    this._upstreamFollowRedirectParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamFollowRedirectParametersInput() {
    return this._upstreamFollowRedirectParameters.internalValue;
  }

  // upstream_http2_parameters - computed: false, optional: true, required: false
  private _upstreamHttp2Parameters = new TeoL7AccRuleRulesBranchesActionsUpstreamHttp2ParametersOutputReference(this, "upstream_http2_parameters");
  public get upstreamHttp2Parameters() {
    return this._upstreamHttp2Parameters;
  }
  public putUpstreamHttp2Parameters(value: TeoL7AccRuleRulesBranchesActionsUpstreamHttp2Parameters) {
    this._upstreamHttp2Parameters.internalValue = value;
  }
  public resetUpstreamHttp2Parameters() {
    this._upstreamHttp2Parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamHttp2ParametersInput() {
    return this._upstreamHttp2Parameters.internalValue;
  }

  // upstream_request_parameters - computed: false, optional: true, required: false
  private _upstreamRequestParameters = new TeoL7AccRuleRulesBranchesActionsUpstreamRequestParametersOutputReference(this, "upstream_request_parameters");
  public get upstreamRequestParameters() {
    return this._upstreamRequestParameters;
  }
  public putUpstreamRequestParameters(value: TeoL7AccRuleRulesBranchesActionsUpstreamRequestParameters) {
    this._upstreamRequestParameters.internalValue = value;
  }
  public resetUpstreamRequestParameters() {
    this._upstreamRequestParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamRequestParametersInput() {
    return this._upstreamRequestParameters.internalValue;
  }

  // upstream_url_rewrite_parameters - computed: false, optional: true, required: false
  private _upstreamUrlRewriteParameters = new TeoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParametersOutputReference(this, "upstream_url_rewrite_parameters");
  public get upstreamUrlRewriteParameters() {
    return this._upstreamUrlRewriteParameters;
  }
  public putUpstreamUrlRewriteParameters(value: TeoL7AccRuleRulesBranchesActionsUpstreamUrlRewriteParameters) {
    this._upstreamUrlRewriteParameters.internalValue = value;
  }
  public resetUpstreamUrlRewriteParameters() {
    this._upstreamUrlRewriteParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamUrlRewriteParametersInput() {
    return this._upstreamUrlRewriteParameters.internalValue;
  }

  // web_socket_parameters - computed: false, optional: true, required: false
  private _webSocketParameters = new TeoL7AccRuleRulesBranchesActionsWebSocketParametersOutputReference(this, "web_socket_parameters");
  public get webSocketParameters() {
    return this._webSocketParameters;
  }
  public putWebSocketParameters(value: TeoL7AccRuleRulesBranchesActionsWebSocketParameters) {
    this._webSocketParameters.internalValue = value;
  }
  public resetWebSocketParameters() {
    this._webSocketParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSocketParametersInput() {
    return this._webSocketParameters.internalValue;
  }
}

export class TeoL7AccRuleRulesBranchesActionsList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleRulesBranchesActions[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleRulesBranchesActionsOutputReference {
    return new TeoL7AccRuleRulesBranchesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoL7AccRuleRulesBranchesSubRules {
  /**
  * Rule comments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#description TeoL7AccRule#description}
  */
  readonly description?: string[];
  /**
  * branches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#branches TeoL7AccRule#branches}
  */
  readonly branches?: TeoL7AccRuleRulesBranches[] | cdktf.IResolvable;
}

export function teoL7AccRuleRulesBranchesSubRulesToTerraform(struct?: TeoL7AccRuleRulesBranchesSubRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.description),
    branches: cdktf.listMapper(teoL7AccRuleRulesBranchesToTerraform, true)(struct!.branches),
  }
}


export function teoL7AccRuleRulesBranchesSubRulesToHclTerraform(struct?: TeoL7AccRuleRulesBranchesSubRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.description),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    branches: {
      value: cdktf.listMapperHcl(teoL7AccRuleRulesBranchesToHclTerraform, true)(struct!.branches),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesSubRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleRulesBranchesSubRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranchesSubRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._branches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._branches.internalValue = value.branches;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string[]; 
  public get description() {
    return this.getListAttribute('description');
  }
  public set description(value: string[]) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // branches - computed: false, optional: true, required: false
  private _branches = new TeoL7AccRuleRulesBranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }
  public putBranches(value: TeoL7AccRuleRulesBranches[] | cdktf.IResolvable) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }
}

export class TeoL7AccRuleRulesBranchesSubRulesList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleRulesBranchesSubRules[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleRulesBranchesSubRulesOutputReference {
    return new TeoL7AccRuleRulesBranchesSubRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoL7AccRuleRulesBranches {
  /**
  * Match condition. https://www.tencentcloud.com/document/product/1145/54759.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#condition TeoL7AccRule#condition}
  */
  readonly condition?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#actions TeoL7AccRule#actions}
  */
  readonly actions?: TeoL7AccRuleRulesBranchesActions[] | cdktf.IResolvable;
  /**
  * sub_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#sub_rules TeoL7AccRule#sub_rules}
  */
  readonly subRules?: TeoL7AccRuleRulesBranchesSubRules[] | cdktf.IResolvable;
}

export function teoL7AccRuleRulesBranchesToTerraform(struct?: TeoL7AccRuleRulesBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    actions: cdktf.listMapper(teoL7AccRuleRulesBranchesActionsToTerraform, true)(struct!.actions),
    sub_rules: cdktf.listMapper(teoL7AccRuleRulesBranchesSubRulesToTerraform, true)(struct!.subRules),
  }
}


export function teoL7AccRuleRulesBranchesToHclTerraform(struct?: TeoL7AccRuleRulesBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actions: {
      value: cdktf.listMapperHcl(teoL7AccRuleRulesBranchesActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesActionsList",
    },
    sub_rules: {
      value: cdktf.listMapperHcl(teoL7AccRuleRulesBranchesSubRulesToHclTerraform, true)(struct!.subRules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesSubRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesBranchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleRulesBranches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._subRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subRules = this._subRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRulesBranches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._actions.internalValue = undefined;
      this._subRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._actions.internalValue = value.actions;
      this._subRules.internalValue = value.subRules;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new TeoL7AccRuleRulesBranchesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: TeoL7AccRuleRulesBranchesActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // sub_rules - computed: false, optional: true, required: false
  private _subRules = new TeoL7AccRuleRulesBranchesSubRulesList(this, "sub_rules", false);
  public get subRules() {
    return this._subRules;
  }
  public putSubRules(value: TeoL7AccRuleRulesBranchesSubRules[] | cdktf.IResolvable) {
    this._subRules.internalValue = value;
  }
  public resetSubRules() {
    this._subRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subRulesInput() {
    return this._subRules.internalValue;
  }
}

export class TeoL7AccRuleRulesBranchesList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleRulesBranches[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleRulesBranchesOutputReference {
    return new TeoL7AccRuleRulesBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoL7AccRuleRules {
  /**
  * Rule annotation. multiple annotations can be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#description TeoL7AccRule#description}
  */
  readonly description?: string[];
  /**
  * Rule name. The name length limit is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#rule_name TeoL7AccRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Rule status. The possible values are: `enable`: enabled; `disable`: disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#status TeoL7AccRule#status}
  */
  readonly status?: string;
  /**
  * branches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#branches TeoL7AccRule#branches}
  */
  readonly branches?: TeoL7AccRuleRulesBranches[] | cdktf.IResolvable;
}

export function teoL7AccRuleRulesToTerraform(struct?: TeoL7AccRuleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.description),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    status: cdktf.stringToTerraform(struct!.status),
    branches: cdktf.listMapper(teoL7AccRuleRulesBranchesToTerraform, true)(struct!.branches),
  }
}


export function teoL7AccRuleRulesToHclTerraform(struct?: TeoL7AccRuleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.description),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
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
    branches: {
      value: cdktf.listMapperHcl(teoL7AccRuleRulesBranchesToHclTerraform, true)(struct!.branches),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleRulesBranchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._ruleName = undefined;
      this._status = undefined;
      this._branches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._ruleName = value.ruleName;
      this._status = value.status;
      this._branches.internalValue = value.branches;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string[]; 
  public get description() {
    return this.getListAttribute('description');
  }
  public set description(value: string[]) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_priority - computed: true, optional: false, required: false
  public get rulePriority() {
    return this.getNumberAttribute('rule_priority');
  }

  // status - computed: false, optional: true, required: false
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

  // branches - computed: false, optional: true, required: false
  private _branches = new TeoL7AccRuleRulesBranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }
  public putBranches(value: TeoL7AccRuleRulesBranches[] | cdktf.IResolvable) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }
}

export class TeoL7AccRuleRulesList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleRules[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleRulesOutputReference {
    return new TeoL7AccRuleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule tencentcloud_teo_l7_acc_rule}
*/
export class TeoL7AccRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_l7_acc_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoL7AccRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoL7AccRule to import
  * @param importFromId The id of the existing TeoL7AccRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoL7AccRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_l7_acc_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_l7_acc_rule tencentcloud_teo_l7_acc_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoL7AccRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TeoL7AccRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_l7_acc_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._zoneId = config.zoneId;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new TeoL7AccRuleRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TeoL7AccRuleRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      rules: cdktf.listMapper(teoL7AccRuleRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(teoL7AccRuleRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoL7AccRuleRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
