// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoL7AccRuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Rule annotation. multiple annotations can be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#description TeoL7AccRuleV2#description}
  */
  readonly description?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#id TeoL7AccRuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule name. The name length limit is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#rule_name TeoL7AccRuleV2#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Rule status. The possible values are: `enable`: enabled; `disable`: disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#status TeoL7AccRuleV2#status}
  */
  readonly status?: string;
  /**
  * Zone id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#zone_id TeoL7AccRuleV2#zone_id}
  */
  readonly zoneId: string;
  /**
  * branches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#branches TeoL7AccRuleV2#branches}
  */
  readonly branches?: TeoL7AccRuleV2Branches[] | cdktf.IResolvable;
}
export interface TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostName {
  /**
  * Target hostname configuration, valid values are: follow: follow the request; custom: custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#action TeoL7AccRuleV2#action}
  */
  readonly action?: string;
  /**
  * Custom value for target hostname, maximum length is 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#value TeoL7AccRuleV2#value}
  */
  readonly value?: string;
}

export function teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostNameToTerraform(struct?: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostNameOutputReference | TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostNameToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostNameOutputReference | TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostName): any {
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

export class TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostName | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostName | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryString {
  /**
  * Action to be executed. values: full: retain all; ignore: ignore all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#action TeoL7AccRuleV2#action}
  */
  readonly action?: string;
}

export function teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryStringToTerraform(struct?: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryStringOutputReference | TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryStringToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryStringOutputReference | TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryString): any {
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

export class TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryString | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPath {
  /**
  * Action to be executed. values: follow: follow the request; custom: custom; regex: regular expression matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#action TeoL7AccRuleV2#action}
  */
  readonly action?: string;
  /**
  * Regular expression matching expression, length range is 1-1024. note: when action is regex, this field is required; when action is follow or custom, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#regex TeoL7AccRuleV2#regex}
  */
  readonly regex?: string;
  /**
  * Redirect target url, length range is 1-1024.note: when action is regex or custom, this field is required; when action is follow, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#value TeoL7AccRuleV2#value}
  */
  readonly value?: string;
}

export function teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPathToTerraform(struct?: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPathOutputReference | TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPath): any {
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


export function teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPathToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPathOutputReference | TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPath): any {
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

export class TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPath | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPath | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParameters {
  /**
  * Target request protocol. valid values: http: target request protocol http; https: target request protocol https; follow: follow the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#protocol TeoL7AccRuleV2#protocol}
  */
  readonly protocol?: string;
  /**
  * Status code. valid values: 301, 302, 303, 307, 308.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#status_code TeoL7AccRuleV2#status_code}
  */
  readonly statusCode?: number;
  /**
  * host_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#host_name TeoL7AccRuleV2#host_name}
  */
  readonly hostName?: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostName;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#query_string TeoL7AccRuleV2#query_string}
  */
  readonly queryString?: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryString;
  /**
  * url_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#url_path TeoL7AccRuleV2#url_path}
  */
  readonly urlPath?: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPath;
}

export function teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersOutputReference | TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    host_name: teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostNameToTerraform(struct!.hostName),
    query_string: teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryStringToTerraform(struct!.queryString),
    url_path: teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPathToTerraform(struct!.urlPath),
  }
}


export function teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersOutputReference | TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParameters): any {
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
      value: teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostNameToHclTerraform(struct!.hostName),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostNameList",
    },
    query_string: {
      value: teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryStringToHclTerraform(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryStringList",
    },
    url_path: {
      value: teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPathToHclTerraform(struct!.urlPath),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParameters | undefined) {
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
  private _hostName = new TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostNameOutputReference(this, "host_name");
  public get hostName() {
    return this._hostName;
  }
  public putHostName(value: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersHostName) {
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
  private _queryString = new TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersQueryString) {
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
  private _urlPath = new TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPathOutputReference(this, "url_path");
  public get urlPath() {
    return this._urlPath;
  }
  public putUrlPath(value: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersUrlPath) {
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
export interface TeoL7AccRuleV2BranchesActionsAuthenticationParameters {
  /**
  * Authentication parameters name. the node will validate the value corresponding to this parameter name. consists of 1-100 uppercase and lowercase letters, numbers, or underscores.note: this field is required when authtype is either typea or typed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#auth_param TeoL7AccRuleV2#auth_param}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#auth_type TeoL7AccRuleV2#auth_type}
  */
  readonly authType?: string;
  /**
  * The backup authentication key consists of 6-40 uppercase and lowercase english letters or digits, and cannot contain " and $.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#backup_secret_key TeoL7AccRuleV2#backup_secret_key}
  */
  readonly backupSecretKey?: string;
  /**
  * The primary authentication key consists of 6-40 uppercase and lowercase english letters or digits, and cannot contain " and $.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#secret_key TeoL7AccRuleV2#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Authentication time format. values: dec: decimal; hex: hexadecimal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#time_format TeoL7AccRuleV2#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Authentication timestamp. it cannot be the same as the value of the authparam field.note: this field is required when authtype is typed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#time_param TeoL7AccRuleV2#time_param}
  */
  readonly timeParam?: string;
  /**
  * Validity period of the authentication url, in seconds, value range: 1-630720000. used to determine if the client access request has expired: If the current time exceeds "timestamp + validity period", it is an expired request, and a 403 is returned directly. If the current time does not exceed "timestamp + validity period", the request is not expired, and the md5 string is further validated. note: when authtype is one of typea, typeb, typec, or typed, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#timeout TeoL7AccRuleV2#timeout}
  */
  readonly timeout?: number;
}

export function teoL7AccRuleV2BranchesActionsAuthenticationParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsAuthenticationParametersOutputReference | TeoL7AccRuleV2BranchesActionsAuthenticationParameters): any {
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


export function teoL7AccRuleV2BranchesActionsAuthenticationParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsAuthenticationParametersOutputReference | TeoL7AccRuleV2BranchesActionsAuthenticationParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsAuthenticationParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsAuthenticationParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsAuthenticationParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsCacheKeyParametersCookie {
  /**
  * Cache action. values: full: retain all; ignore: ignore all; includeCustom: retain partial parameters; excludeCustom: ignore partial parameters. note: when switch is on, this field is required. when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#action TeoL7AccRuleV2#action}
  */
  readonly action?: string;
  /**
  * Whether to enable feature. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
  /**
  * Custom cache key cookie name list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#values TeoL7AccRuleV2#values}
  */
  readonly values?: string[];
}

export function teoL7AccRuleV2BranchesActionsCacheKeyParametersCookieToTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheKeyParametersCookieOutputReference | TeoL7AccRuleV2BranchesActionsCacheKeyParametersCookie): any {
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


export function teoL7AccRuleV2BranchesActionsCacheKeyParametersCookieToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheKeyParametersCookieOutputReference | TeoL7AccRuleV2BranchesActionsCacheKeyParametersCookie): any {
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

export class TeoL7AccRuleV2BranchesActionsCacheKeyParametersCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsCacheKeyParametersCookie | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsCacheKeyParametersCookie | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsCacheKeyParametersHeader {
  /**
  * Whether to enable feature. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
  /**
  * Custom cache key http request header list. note: this field is required when switch is on; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#values TeoL7AccRuleV2#values}
  */
  readonly values?: string[];
}

export function teoL7AccRuleV2BranchesActionsCacheKeyParametersHeaderToTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheKeyParametersHeaderOutputReference | TeoL7AccRuleV2BranchesActionsCacheKeyParametersHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function teoL7AccRuleV2BranchesActionsCacheKeyParametersHeaderToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheKeyParametersHeaderOutputReference | TeoL7AccRuleV2BranchesActionsCacheKeyParametersHeader): any {
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

export class TeoL7AccRuleV2BranchesActionsCacheKeyParametersHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsCacheKeyParametersHeader | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsCacheKeyParametersHeader | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsCacheKeyParametersQueryString {
  /**
  * Actions to retain/ignore specified parameters in the query string. values: `includeCustom`: retain partial parameters. `excludeCustom`: ignore partial parameters.note: this field is required when switch is on. when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#action TeoL7AccRuleV2#action}
  */
  readonly action?: string;
  /**
  * Query string retain/ignore specified parameter switch. valid values are: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
  /**
  * A list of parameter names to keep/ignore in the query string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#values TeoL7AccRuleV2#values}
  */
  readonly values?: string[];
}

export function teoL7AccRuleV2BranchesActionsCacheKeyParametersQueryStringToTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheKeyParametersQueryStringOutputReference | TeoL7AccRuleV2BranchesActionsCacheKeyParametersQueryString): any {
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


export function teoL7AccRuleV2BranchesActionsCacheKeyParametersQueryStringToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheKeyParametersQueryStringOutputReference | TeoL7AccRuleV2BranchesActionsCacheKeyParametersQueryString): any {
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

export class TeoL7AccRuleV2BranchesActionsCacheKeyParametersQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsCacheKeyParametersQueryString | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsCacheKeyParametersQueryString | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsCacheKeyParameters {
  /**
  * Switch for retaining the complete query string. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#full_url_cache TeoL7AccRuleV2#full_url_cache}
  */
  readonly fullUrlCache?: string;
  /**
  * Switch for ignoring case. values: enable; off: disable.note: at least one of fullurlcache, ignorecase, header, scheme, or cookie must be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#ignore_case TeoL7AccRuleV2#ignore_case}
  */
  readonly ignoreCase?: string;
  /**
  * Request protocol switch. valid values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#scheme TeoL7AccRuleV2#scheme}
  */
  readonly scheme?: string;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#cookie TeoL7AccRuleV2#cookie}
  */
  readonly cookie?: TeoL7AccRuleV2BranchesActionsCacheKeyParametersCookie;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#header TeoL7AccRuleV2#header}
  */
  readonly header?: TeoL7AccRuleV2BranchesActionsCacheKeyParametersHeader;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#query_string TeoL7AccRuleV2#query_string}
  */
  readonly queryString?: TeoL7AccRuleV2BranchesActionsCacheKeyParametersQueryString;
}

export function teoL7AccRuleV2BranchesActionsCacheKeyParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheKeyParametersOutputReference | TeoL7AccRuleV2BranchesActionsCacheKeyParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_url_cache: cdktf.stringToTerraform(struct!.fullUrlCache),
    ignore_case: cdktf.stringToTerraform(struct!.ignoreCase),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    cookie: teoL7AccRuleV2BranchesActionsCacheKeyParametersCookieToTerraform(struct!.cookie),
    header: teoL7AccRuleV2BranchesActionsCacheKeyParametersHeaderToTerraform(struct!.header),
    query_string: teoL7AccRuleV2BranchesActionsCacheKeyParametersQueryStringToTerraform(struct!.queryString),
  }
}


export function teoL7AccRuleV2BranchesActionsCacheKeyParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheKeyParametersOutputReference | TeoL7AccRuleV2BranchesActionsCacheKeyParameters): any {
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
      value: teoL7AccRuleV2BranchesActionsCacheKeyParametersCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsCacheKeyParametersCookieList",
    },
    header: {
      value: teoL7AccRuleV2BranchesActionsCacheKeyParametersHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsCacheKeyParametersHeaderList",
    },
    query_string: {
      value: teoL7AccRuleV2BranchesActionsCacheKeyParametersQueryStringToHclTerraform(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsCacheKeyParametersQueryStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleV2BranchesActionsCacheKeyParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsCacheKeyParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsCacheKeyParameters | undefined) {
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
  private _cookie = new TeoL7AccRuleV2BranchesActionsCacheKeyParametersCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: TeoL7AccRuleV2BranchesActionsCacheKeyParametersCookie) {
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
  private _header = new TeoL7AccRuleV2BranchesActionsCacheKeyParametersHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: TeoL7AccRuleV2BranchesActionsCacheKeyParametersHeader) {
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
  private _queryString = new TeoL7AccRuleV2BranchesActionsCacheKeyParametersQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: TeoL7AccRuleV2BranchesActionsCacheKeyParametersQueryString) {
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
export interface TeoL7AccRuleV2BranchesActionsCacheParametersCustomTime {
  /**
  * Custom cache time value, unit: seconds. value range: 0-315360000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#cache_time TeoL7AccRuleV2#cache_time}
  */
  readonly cacheTime?: number;
  /**
  * Ignore origin server cachecontrol switch. values: `on`: Enable; `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#ignore_cache_control TeoL7AccRuleV2#ignore_cache_control}
  */
  readonly ignoreCacheControl?: string;
  /**
  * Custom cache time switch. values: `on`: Enable; `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsCacheParametersCustomTimeToTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheParametersCustomTimeOutputReference | TeoL7AccRuleV2BranchesActionsCacheParametersCustomTime): any {
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


export function teoL7AccRuleV2BranchesActionsCacheParametersCustomTimeToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheParametersCustomTimeOutputReference | TeoL7AccRuleV2BranchesActionsCacheParametersCustomTime): any {
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

export class TeoL7AccRuleV2BranchesActionsCacheParametersCustomTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsCacheParametersCustomTime | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsCacheParametersCustomTime | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsCacheParametersFollowOrigin {
  /**
  * Whether to cache when an origin server does not return the cache-control header. this field is required when switch is on; when switch is off, this field is not required and will be ineffective if filled. valid values: On: cache; Off: do not cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#default_cache TeoL7AccRuleV2#default_cache}
  */
  readonly defaultCache?: string;
  /**
  * Whether to use the default caching policy when an origin server does not return the cache-control header. this field is required when defaultcache is set to on; otherwise, it is ineffective. when defaultcachetime is not 0, this field should be off. valid values: on: use the default caching policy. off: do not use the default caching policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#default_cache_strategy TeoL7AccRuleV2#default_cache_strategy}
  */
  readonly defaultCacheStrategy?: string;
  /**
  * The default cache time in seconds when an origin server does not return the cache-control header. the value ranges from 0 to 315360000. this field is required when defaultcache is set to on; otherwise, it is ineffective. when defaultcachestrategy is on, this field should be 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#default_cache_time TeoL7AccRuleV2#default_cache_time}
  */
  readonly defaultCacheTime?: number;
  /**
  * Whether to enable the configuration of following the origin server. Valid values: `on`: Enable; `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch: string;
}

export function teoL7AccRuleV2BranchesActionsCacheParametersFollowOriginToTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheParametersFollowOriginOutputReference | TeoL7AccRuleV2BranchesActionsCacheParametersFollowOrigin): any {
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


export function teoL7AccRuleV2BranchesActionsCacheParametersFollowOriginToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheParametersFollowOriginOutputReference | TeoL7AccRuleV2BranchesActionsCacheParametersFollowOrigin): any {
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

export class TeoL7AccRuleV2BranchesActionsCacheParametersFollowOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsCacheParametersFollowOrigin | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsCacheParametersFollowOrigin | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsCacheParametersNoCache {
  /**
  * Whether to enable no-cache configuration. Valid values: `on`: Enable; `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch: string;
}

export function teoL7AccRuleV2BranchesActionsCacheParametersNoCacheToTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheParametersNoCacheOutputReference | TeoL7AccRuleV2BranchesActionsCacheParametersNoCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsCacheParametersNoCacheToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheParametersNoCacheOutputReference | TeoL7AccRuleV2BranchesActionsCacheParametersNoCache): any {
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

export class TeoL7AccRuleV2BranchesActionsCacheParametersNoCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsCacheParametersNoCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsCacheParametersNoCache | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsCacheParameters {
  /**
  * custom_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#custom_time TeoL7AccRuleV2#custom_time}
  */
  readonly customTime?: TeoL7AccRuleV2BranchesActionsCacheParametersCustomTime;
  /**
  * follow_origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#follow_origin TeoL7AccRuleV2#follow_origin}
  */
  readonly followOrigin?: TeoL7AccRuleV2BranchesActionsCacheParametersFollowOrigin;
  /**
  * no_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#no_cache TeoL7AccRuleV2#no_cache}
  */
  readonly noCache?: TeoL7AccRuleV2BranchesActionsCacheParametersNoCache;
}

export function teoL7AccRuleV2BranchesActionsCacheParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheParametersOutputReference | TeoL7AccRuleV2BranchesActionsCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_time: teoL7AccRuleV2BranchesActionsCacheParametersCustomTimeToTerraform(struct!.customTime),
    follow_origin: teoL7AccRuleV2BranchesActionsCacheParametersFollowOriginToTerraform(struct!.followOrigin),
    no_cache: teoL7AccRuleV2BranchesActionsCacheParametersNoCacheToTerraform(struct!.noCache),
  }
}


export function teoL7AccRuleV2BranchesActionsCacheParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsCacheParametersOutputReference | TeoL7AccRuleV2BranchesActionsCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_time: {
      value: teoL7AccRuleV2BranchesActionsCacheParametersCustomTimeToHclTerraform(struct!.customTime),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsCacheParametersCustomTimeList",
    },
    follow_origin: {
      value: teoL7AccRuleV2BranchesActionsCacheParametersFollowOriginToHclTerraform(struct!.followOrigin),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsCacheParametersFollowOriginList",
    },
    no_cache: {
      value: teoL7AccRuleV2BranchesActionsCacheParametersNoCacheToHclTerraform(struct!.noCache),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsCacheParametersNoCacheList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleV2BranchesActionsCacheParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsCacheParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsCacheParameters | undefined) {
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
  private _customTime = new TeoL7AccRuleV2BranchesActionsCacheParametersCustomTimeOutputReference(this, "custom_time");
  public get customTime() {
    return this._customTime;
  }
  public putCustomTime(value: TeoL7AccRuleV2BranchesActionsCacheParametersCustomTime) {
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
  private _followOrigin = new TeoL7AccRuleV2BranchesActionsCacheParametersFollowOriginOutputReference(this, "follow_origin");
  public get followOrigin() {
    return this._followOrigin;
  }
  public putFollowOrigin(value: TeoL7AccRuleV2BranchesActionsCacheParametersFollowOrigin) {
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
  private _noCache = new TeoL7AccRuleV2BranchesActionsCacheParametersNoCacheOutputReference(this, "no_cache");
  public get noCache() {
    return this._noCache;
  }
  public putNoCache(value: TeoL7AccRuleV2BranchesActionsCacheParametersNoCache) {
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
export interface TeoL7AccRuleV2BranchesActionsCachePrefreshParameters {
  /**
  * Prefresh interval set as a percentage of the node cache time. value range: 1-99. note: this field is required when switch is on; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#cache_time_percent TeoL7AccRuleV2#cache_time_percent}
  */
  readonly cacheTimePercent?: number;
  /**
  * Whether to enable cache prefresh. values: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsCachePrefreshParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsCachePrefreshParametersOutputReference | TeoL7AccRuleV2BranchesActionsCachePrefreshParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time_percent: cdktf.numberToTerraform(struct!.cacheTimePercent),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsCachePrefreshParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsCachePrefreshParametersOutputReference | TeoL7AccRuleV2BranchesActionsCachePrefreshParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsCachePrefreshParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsCachePrefreshParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsCachePrefreshParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsClientIpCountryParameters {
  /**
  * Name of the request header that contains the client ip region. it is valid when switch=on. the default value eo-client-ipcountry is used when it is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#header_name TeoL7AccRuleV2#header_name}
  */
  readonly headerName?: string;
  /**
  * Whether to enable configuration. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsClientIpCountryParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsClientIpCountryParametersOutputReference | TeoL7AccRuleV2BranchesActionsClientIpCountryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsClientIpCountryParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsClientIpCountryParametersOutputReference | TeoL7AccRuleV2BranchesActionsClientIpCountryParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsClientIpCountryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsClientIpCountryParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsClientIpCountryParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsClientIpHeaderParameters {
  /**
  * Name of the request header containing the client ip address for origin-pull. when switch is on, this parameter is required. x-forwarded-for is not allowed for this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#header_name TeoL7AccRuleV2#header_name}
  */
  readonly headerName?: string;
  /**
  * Whether to enable configuration. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsClientIpHeaderParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsClientIpHeaderParametersOutputReference | TeoL7AccRuleV2BranchesActionsClientIpHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsClientIpHeaderParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsClientIpHeaderParametersOutputReference | TeoL7AccRuleV2BranchesActionsClientIpHeaderParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsClientIpHeaderParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsClientIpHeaderParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsClientIpHeaderParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsCompressionParameters {
  /**
  * Supported compression algorithm list. this field is required when switch is on; otherwise, it is not effective. valid values: brotli: brotli algorithm; gzip: gzip algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#algorithms TeoL7AccRuleV2#algorithms}
  */
  readonly algorithms?: string[];
  /**
  * Whether to enable smart compression. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsCompressionParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsCompressionParametersOutputReference | TeoL7AccRuleV2BranchesActionsCompressionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.algorithms),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsCompressionParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsCompressionParametersOutputReference | TeoL7AccRuleV2BranchesActionsCompressionParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsCompressionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsCompressionParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsCompressionParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParams {
  /**
  * Redirect url. requires a full redirect path, such as https://www.test.com/error.html.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#redirect_url TeoL7AccRuleV2#redirect_url}
  */
  readonly redirectUrl: string;
  /**
  * Status code. supported values are 400, 403, 404, 405, 414, 416, 451, 500, 501, 502, 503, 504.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#status_code TeoL7AccRuleV2#status_code}
  */
  readonly statusCode: number;
}

export function teoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParamsToTerraform(struct?: TeoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParamsOutputReference | TeoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function teoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParamsToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParamsOutputReference | TeoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParams): any {
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

export class TeoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParams | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParams | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsErrorPageParameters {
  /**
  * error_page_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#error_page_params TeoL7AccRuleV2#error_page_params}
  */
  readonly errorPageParams?: TeoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParams;
}

export function teoL7AccRuleV2BranchesActionsErrorPageParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsErrorPageParametersOutputReference | TeoL7AccRuleV2BranchesActionsErrorPageParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_page_params: teoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParamsToTerraform(struct!.errorPageParams),
  }
}


export function teoL7AccRuleV2BranchesActionsErrorPageParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsErrorPageParametersOutputReference | TeoL7AccRuleV2BranchesActionsErrorPageParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_page_params: {
      value: teoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParamsToHclTerraform(struct!.errorPageParams),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleV2BranchesActionsErrorPageParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsErrorPageParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPageParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageParams = this._errorPageParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsErrorPageParameters | undefined) {
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
  private _errorPageParams = new TeoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParamsOutputReference(this, "error_page_params");
  public get errorPageParams() {
    return this._errorPageParams;
  }
  public putErrorPageParams(value: TeoL7AccRuleV2BranchesActionsErrorPageParametersErrorPageParams) {
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
export interface TeoL7AccRuleV2BranchesActionsForceRedirectHttpsParameters {
  /**
  * Redirection status code. this field is required when switch is on; otherwise, it is not effective. valid values are: 301: 301 redirect; 302: 302 redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#redirect_status_code TeoL7AccRuleV2#redirect_status_code}
  */
  readonly redirectStatusCode?: number;
  /**
  * Whether to enable forced redirect configuration switch. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsForceRedirectHttpsParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsForceRedirectHttpsParametersOutputReference | TeoL7AccRuleV2BranchesActionsForceRedirectHttpsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_status_code: cdktf.numberToTerraform(struct!.redirectStatusCode),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsForceRedirectHttpsParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsForceRedirectHttpsParametersOutputReference | TeoL7AccRuleV2BranchesActionsForceRedirectHttpsParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsForceRedirectHttpsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsForceRedirectHttpsParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsForceRedirectHttpsParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsHostHeaderParameters {
  /**
  * Action to be executed. values: followOrigin: follow origin server domain name; custom: custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#action TeoL7AccRuleV2#action}
  */
  readonly action?: string;
  /**
  * Host header rewrite requires a complete domain name. note: this field is required when switch is on; when switch is off, this field is not required and any value will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#server_name TeoL7AccRuleV2#server_name}
  */
  readonly serverName?: string;
}

export function teoL7AccRuleV2BranchesActionsHostHeaderParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsHostHeaderParametersOutputReference | TeoL7AccRuleV2BranchesActionsHostHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function teoL7AccRuleV2BranchesActionsHostHeaderParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsHostHeaderParametersOutputReference | TeoL7AccRuleV2BranchesActionsHostHeaderParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsHostHeaderParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsHostHeaderParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsHostHeaderParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsHstsParameters {
  /**
  * Whether to allow other subdomains to inherit the same hsts header. values: on: allows other subdomains to inherit the same hsts header; off: does not allow other subdomains to inherit the same hsts header. note: when switch is on, this field is required; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#include_sub_domains TeoL7AccRuleV2#include_sub_domains}
  */
  readonly includeSubDomains?: string;
  /**
  * Whether to allow the browser to preload the hsts header. valid values: on: allows the browser to preload the hsts header; off: does not allow the browser to preload the hsts header. note: when switch is on, this field is required; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#preload TeoL7AccRuleV2#preload}
  */
  readonly preload?: string;
  /**
  * Whether to enable hsts. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
  /**
  * Cache hsts header time, unit: seconds. value range: 1-31536000. note: this field is required when switch is on; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#timeout TeoL7AccRuleV2#timeout}
  */
  readonly timeout?: number;
}

export function teoL7AccRuleV2BranchesActionsHstsParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsHstsParametersOutputReference | TeoL7AccRuleV2BranchesActionsHstsParameters): any {
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


export function teoL7AccRuleV2BranchesActionsHstsParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsHstsParametersOutputReference | TeoL7AccRuleV2BranchesActionsHstsParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsHstsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsHstsParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsHstsParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsHttp2Parameters {
  /**
  * Whether to enable http2 access. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsHttp2ParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsHttp2ParametersOutputReference | TeoL7AccRuleV2BranchesActionsHttp2Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsHttp2ParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsHttp2ParametersOutputReference | TeoL7AccRuleV2BranchesActionsHttp2Parameters): any {
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

export class TeoL7AccRuleV2BranchesActionsHttp2ParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsHttp2Parameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsHttp2Parameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsHttpResponseParameters {
  /**
  * Response page id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#response_page TeoL7AccRuleV2#response_page}
  */
  readonly responsePage?: string;
  /**
  * Response status code. supports 2xx, 4xx, 5xx, excluding 499, 514, 101, 301, 302, 303, 509, 520-599.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#status_code TeoL7AccRuleV2#status_code}
  */
  readonly statusCode?: number;
}

export function teoL7AccRuleV2BranchesActionsHttpResponseParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsHttpResponseParametersOutputReference | TeoL7AccRuleV2BranchesActionsHttpResponseParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_page: cdktf.stringToTerraform(struct!.responsePage),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function teoL7AccRuleV2BranchesActionsHttpResponseParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsHttpResponseParametersOutputReference | TeoL7AccRuleV2BranchesActionsHttpResponseParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsHttpResponseParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsHttpResponseParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsHttpResponseParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParameters {
  /**
  * HTTP response timeout in seconds. value range: 5-600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#response_timeout TeoL7AccRuleV2#response_timeout}
  */
  readonly responseTimeout?: number;
}

export function teoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParametersOutputReference | TeoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_timeout: cdktf.numberToTerraform(struct!.responseTimeout),
  }
}


export function teoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParametersOutputReference | TeoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeout = this._responseTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsMaxAgeParameters {
  /**
  * Custom cache time value, unit: seconds. value range: 0-315360000. note: when followorigin is off, it means not following the origin server and using cachetime to set the cache time; otherwise, this field will not take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#cache_time TeoL7AccRuleV2#cache_time}
  */
  readonly cacheTime?: number;
  /**
  * Specifies whether to follow the origin server cache-control configuration, with the following values: on: follow the origin server and ignore the field cachetime; off: do not follow the origin server and apply the field cachetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#follow_origin TeoL7AccRuleV2#follow_origin}
  */
  readonly followOrigin?: string;
}

export function teoL7AccRuleV2BranchesActionsMaxAgeParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsMaxAgeParametersOutputReference | TeoL7AccRuleV2BranchesActionsMaxAgeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time: cdktf.numberToTerraform(struct!.cacheTime),
    follow_origin: cdktf.stringToTerraform(struct!.followOrigin),
  }
}


export function teoL7AccRuleV2BranchesActionsMaxAgeParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsMaxAgeParametersOutputReference | TeoL7AccRuleV2BranchesActionsMaxAgeParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsMaxAgeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsMaxAgeParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsMaxAgeParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParameters {
  /**
  * Authentication parameter access key id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#access_key_id TeoL7AccRuleV2#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Region of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#region TeoL7AccRuleV2#region}
  */
  readonly region?: string;
  /**
  * Authentication parameter secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#secret_access_key TeoL7AccRuleV2#secret_access_key}
  */
  readonly secretAccessKey: string;
  /**
  * Authentication version. values: v2: v2 version; v4: v4 version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#signature_version TeoL7AccRuleV2#signature_version}
  */
  readonly signatureVersion: string;
}

export function teoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParametersOutputReference | TeoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParameters): any {
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


export function teoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParametersOutputReference | TeoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsModifyOriginParameters {
  /**
  * Ports for http origin-pull requests. value range: 1-65535. this parameter takes effect only when the origin-pull protocol originprotocol is http or follow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#http_origin_port TeoL7AccRuleV2#http_origin_port}
  */
  readonly httpOriginPort?: number;
  /**
  * Ports for https origin-pull requests. value range: 1-65535. this parameter takes effect only when the origin-pull protocol originprotocol is https or follow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#https_origin_port TeoL7AccRuleV2#https_origin_port}
  */
  readonly httpsOriginPort?: number;
  /**
  * Origin server address, which varies according to the value of origintype: When origintype = ipdomain, fill in an ipv4 address, an ipv6 address, or a domain name; When origintype = cos, please fill in the access domain name of the cos bucket; When origintype = awss3, fill in the access domain name of the s3 bucket; When origintype = origingroup, fill in the origin server group id; When origintype = loadbalance, fill in the cloud load balancer instance id. this feature is currently only available to the allowlist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#origin TeoL7AccRuleV2#origin}
  */
  readonly origin?: string;
  /**
  * Origin-Pull protocol configuration. this parameter is required when origintype is ipdomain, origingroup, or loadbalance. valid values are: Http: use http protocol; Https: use https protocol; Follow: follow the protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#origin_protocol TeoL7AccRuleV2#origin_protocol}
  */
  readonly originProtocol?: string;
  /**
  * The origin type. values: IPDomain: ipv4, ipv6, or domain name type origin server; OriginGroup: origin server group type origin server; LoadBalance: cloud load balancer (clb), this feature is in beta test. to use it, please submit a ticket or contact smart customer service; COS: tencent cloud COS origin server; AWSS3: all object storage origin servers that support the aws s3 protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#origin_type TeoL7AccRuleV2#origin_type}
  */
  readonly originType?: string;
  /**
  * Whether access to the private object storage origin server is allowed. this parameter is valid only when the origin server type origintype is COS or awss3. valid values: on: enable private authentication; off: disable private authentication. if not specified, the default value is off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#private_access TeoL7AccRuleV2#private_access}
  */
  readonly privateAccess?: string;
  /**
  * private_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#private_parameters TeoL7AccRuleV2#private_parameters}
  */
  readonly privateParameters?: TeoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParameters;
}

export function teoL7AccRuleV2BranchesActionsModifyOriginParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsModifyOriginParametersOutputReference | TeoL7AccRuleV2BranchesActionsModifyOriginParameters): any {
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
    private_parameters: teoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParametersToTerraform(struct!.privateParameters),
  }
}


export function teoL7AccRuleV2BranchesActionsModifyOriginParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsModifyOriginParametersOutputReference | TeoL7AccRuleV2BranchesActionsModifyOriginParameters): any {
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
      value: teoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParametersToHclTerraform(struct!.privateParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleV2BranchesActionsModifyOriginParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsModifyOriginParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsModifyOriginParameters | undefined) {
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
  private _privateParameters = new TeoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParametersOutputReference(this, "private_parameters");
  public get privateParameters() {
    return this._privateParameters;
  }
  public putPrivateParameters(value: TeoL7AccRuleV2BranchesActionsModifyOriginParametersPrivateParameters) {
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
export interface TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActions {
  /**
  * HTTP header setting methods. valid values are: set: sets a value for an existing header parameter; del: deletes a header parameter; add: adds a header parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#action TeoL7AccRuleV2#action}
  */
  readonly action: string;
  /**
  * HTTP header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#name TeoL7AccRuleV2#name}
  */
  readonly name: string;
  /**
  * HTTP header value. this parameter is required when the action is set to set or add; it is optional when the action is set to del.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#value TeoL7AccRuleV2#value}
  */
  readonly value?: string;
}

export function teoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActionsToTerraform(struct?: TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActions | cdktf.IResolvable): any {
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


export function teoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActionsToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActions | cdktf.IResolvable): any {
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

export class TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActions | cdktf.IResolvable | undefined) {
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

export class TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActionsList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActions[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActionsOutputReference {
    return new TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParameters {
  /**
  * header_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#header_actions TeoL7AccRuleV2#header_actions}
  */
  readonly headerActions?: TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActions[] | cdktf.IResolvable;
}

export function teoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersOutputReference | TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_actions: cdktf.listMapper(teoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActionsToTerraform, true)(struct!.headerActions),
  }
}


export function teoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersOutputReference | TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_actions: {
      value: cdktf.listMapperHcl(teoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActionsToHclTerraform, true)(struct!.headerActions),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerActions = this._headerActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParameters | undefined) {
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
  private _headerActions = new TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActionsList(this, "header_actions", false);
  public get headerActions() {
    return this._headerActions;
  }
  public putHeaderActions(value: TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersHeaderActions[] | cdktf.IResolvable) {
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
export interface TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActions {
  /**
  * HTTP header setting methods. valid values are: set: sets a value for an existing header parameter; del: deletes a header parameter; add: adds a header parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#action TeoL7AccRuleV2#action}
  */
  readonly action: string;
  /**
  * HTTP header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#name TeoL7AccRuleV2#name}
  */
  readonly name: string;
  /**
  * HTTP header value. this parameter is required when the action is set to set or add; it is optional when the action is set to del.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#value TeoL7AccRuleV2#value}
  */
  readonly value?: string;
}

export function teoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActionsToTerraform(struct?: TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActions | cdktf.IResolvable): any {
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


export function teoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActionsToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActions | cdktf.IResolvable): any {
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

export class TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActions | cdktf.IResolvable | undefined) {
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

export class TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActionsList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActions[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActionsOutputReference {
    return new TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParameters {
  /**
  * header_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#header_actions TeoL7AccRuleV2#header_actions}
  */
  readonly headerActions?: TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActions[] | cdktf.IResolvable;
}

export function teoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersOutputReference | TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_actions: cdktf.listMapper(teoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActionsToTerraform, true)(struct!.headerActions),
  }
}


export function teoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersOutputReference | TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_actions: {
      value: cdktf.listMapperHcl(teoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActionsToHclTerraform, true)(struct!.headerActions),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerActions = this._headerActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParameters | undefined) {
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
  private _headerActions = new TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActionsList(this, "header_actions", false);
  public get headerActions() {
    return this._headerActions;
  }
  public putHeaderActions(value: TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersHeaderActions[] | cdktf.IResolvable) {
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
export interface TeoL7AccRuleV2BranchesActionsOcspStaplingParameters {
  /**
  * Whether to enable ocsp stapling configuration switch. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsOcspStaplingParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsOcspStaplingParametersOutputReference | TeoL7AccRuleV2BranchesActionsOcspStaplingParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsOcspStaplingParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsOcspStaplingParametersOutputReference | TeoL7AccRuleV2BranchesActionsOcspStaplingParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsOcspStaplingParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsOcspStaplingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsOcspStaplingParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsOfflineCacheParameters {
  /**
  * Whether to enable offline caching. values: on: enable; Off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsOfflineCacheParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsOfflineCacheParametersOutputReference | TeoL7AccRuleV2BranchesActionsOfflineCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsOfflineCacheParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsOfflineCacheParametersOutputReference | TeoL7AccRuleV2BranchesActionsOfflineCacheParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsOfflineCacheParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsOfflineCacheParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsOfflineCacheParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsOriginPullProtocolParameters {
  /**
  * Back-to-origin protocol configuration. Possible values are: `http`: use HTTP protocol for back-to-origin; `https`: use HTTPS protocol for back-to-origin; `follow`: follow the protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#protocol TeoL7AccRuleV2#protocol}
  */
  readonly protocol?: string;
}

export function teoL7AccRuleV2BranchesActionsOriginPullProtocolParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsOriginPullProtocolParametersOutputReference | TeoL7AccRuleV2BranchesActionsOriginPullProtocolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function teoL7AccRuleV2BranchesActionsOriginPullProtocolParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsOriginPullProtocolParametersOutputReference | TeoL7AccRuleV2BranchesActionsOriginPullProtocolParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsOriginPullProtocolParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsOriginPullProtocolParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsOriginPullProtocolParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsPostMaxSizeParameters {
  /**
  * Maximum size of the file uploaded for streaming via a post request, in bytes. value range: 1 * 2^20 bytes to 500 * 2^20 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#max_size TeoL7AccRuleV2#max_size}
  */
  readonly maxSize?: number;
  /**
  * Whether to enable post request file upload limit, in bytes (default limit: 32 * 2^20 bytes). valid values: on: enable limit; off: disable limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsPostMaxSizeParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsPostMaxSizeParametersOutputReference | TeoL7AccRuleV2BranchesActionsPostMaxSizeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsPostMaxSizeParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsPostMaxSizeParametersOutputReference | TeoL7AccRuleV2BranchesActionsPostMaxSizeParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsPostMaxSizeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsPostMaxSizeParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsPostMaxSizeParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsQuicParameters {
  /**
  * Whether to enable quic. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsQuicParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsQuicParametersOutputReference | TeoL7AccRuleV2BranchesActionsQuicParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsQuicParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsQuicParametersOutputReference | TeoL7AccRuleV2BranchesActionsQuicParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsQuicParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsQuicParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsQuicParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsRangeOriginPullParameters {
  /**
  * Whether to enable range gets. values are: on: enable; Off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsRangeOriginPullParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsRangeOriginPullParametersOutputReference | TeoL7AccRuleV2BranchesActionsRangeOriginPullParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsRangeOriginPullParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsRangeOriginPullParametersOutputReference | TeoL7AccRuleV2BranchesActionsRangeOriginPullParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsRangeOriginPullParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsRangeOriginPullParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsRangeOriginPullParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsResponseSpeedLimitParameters {
  /**
  * Rate-Limiting value, in kb/s. enter a numerical value to specify the rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#max_speed TeoL7AccRuleV2#max_speed}
  */
  readonly maxSpeed: string;
  /**
  * Download rate limit mode. valid values: LimitUponDownload: rate limit throughout the download process; LimitAfterSpecificBytesDownloaded: rate limit after downloading specific bytes at full speed; LimitAfterSpecificSecondsDownloaded: start speed limit after downloading at full speed for a specific duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#mode TeoL7AccRuleV2#mode}
  */
  readonly mode: string;
  /**
  * Rate-Limiting start value, which can be the download size or specified duration, in kb or s. this parameter is required when mode is set to limitafterspecificbytesdownloaded or limitafterspecificsecondsdownloaded. enter a numerical value to specify the download size or duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#start_at TeoL7AccRuleV2#start_at}
  */
  readonly startAt?: string;
}

export function teoL7AccRuleV2BranchesActionsResponseSpeedLimitParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsResponseSpeedLimitParametersOutputReference | TeoL7AccRuleV2BranchesActionsResponseSpeedLimitParameters): any {
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


export function teoL7AccRuleV2BranchesActionsResponseSpeedLimitParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsResponseSpeedLimitParametersOutputReference | TeoL7AccRuleV2BranchesActionsResponseSpeedLimitParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsResponseSpeedLimitParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsResponseSpeedLimitParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsResponseSpeedLimitParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsSetContentIdentifierParameters {
  /**
  * Content identifier id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#content_identifier TeoL7AccRuleV2#content_identifier}
  */
  readonly contentIdentifier?: string;
}

export function teoL7AccRuleV2BranchesActionsSetContentIdentifierParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsSetContentIdentifierParametersOutputReference | TeoL7AccRuleV2BranchesActionsSetContentIdentifierParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_identifier: cdktf.stringToTerraform(struct!.contentIdentifier),
  }
}


export function teoL7AccRuleV2BranchesActionsSetContentIdentifierParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsSetContentIdentifierParametersOutputReference | TeoL7AccRuleV2BranchesActionsSetContentIdentifierParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsSetContentIdentifierParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsSetContentIdentifierParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentIdentifier = this._contentIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsSetContentIdentifierParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsSmartRoutingParameters {
  /**
  * Whether to enable smart acceleration. values: on: enable; Off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsSmartRoutingParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsSmartRoutingParametersOutputReference | TeoL7AccRuleV2BranchesActionsSmartRoutingParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsSmartRoutingParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsSmartRoutingParametersOutputReference | TeoL7AccRuleV2BranchesActionsSmartRoutingParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsSmartRoutingParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsSmartRoutingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsSmartRoutingParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParams {
  /**
  * Cache time value in seconds. value range: 0-31536000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#cache_time TeoL7AccRuleV2#cache_time}
  */
  readonly cacheTime?: number;
  /**
  * Status code. valid values: 400, 401, 403, 404, 405, 407, 414, 500, 501, 502, 503, 504, 509, 514.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#status_code TeoL7AccRuleV2#status_code}
  */
  readonly statusCode?: number;
}

export function teoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsToTerraform(struct?: TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time: cdktf.numberToTerraform(struct!.cacheTime),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function teoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParams | cdktf.IResolvable): any {
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

export class TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParams | cdktf.IResolvable | undefined) {
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

export class TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParams[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsOutputReference {
    return new TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoL7AccRuleV2BranchesActionsStatusCodeCacheParameters {
  /**
  * status_code_cache_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#status_code_cache_params TeoL7AccRuleV2#status_code_cache_params}
  */
  readonly statusCodeCacheParams?: TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParams[] | cdktf.IResolvable;
}

export function teoL7AccRuleV2BranchesActionsStatusCodeCacheParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersOutputReference | TeoL7AccRuleV2BranchesActionsStatusCodeCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code_cache_params: cdktf.listMapper(teoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsToTerraform, true)(struct!.statusCodeCacheParams),
  }
}


export function teoL7AccRuleV2BranchesActionsStatusCodeCacheParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersOutputReference | TeoL7AccRuleV2BranchesActionsStatusCodeCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code_cache_params: {
      value: cdktf.listMapperHcl(teoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsToHclTerraform, true)(struct!.statusCodeCacheParams),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsStatusCodeCacheParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCodeCacheParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeCacheParams = this._statusCodeCacheParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsStatusCodeCacheParameters | undefined) {
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
  private _statusCodeCacheParams = new TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParamsList(this, "status_code_cache_params", false);
  public get statusCodeCacheParams() {
    return this._statusCodeCacheParams;
  }
  public putStatusCodeCacheParams(value: TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersStatusCodeCacheParams[] | cdktf.IResolvable) {
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
export interface TeoL7AccRuleV2BranchesActionsTlsConfigParameters {
  /**
  * Cipher suite. for detailed information, please refer to tls versions and cipher suites description, https://www.tencentcloud.com/document/product/1145/54154?has_map=1. valid values: loose-v2023: loose-v2023 cipher suite; general-v2023: general-v2023 cipher suite; strict-v2023: strict-v2023 cipher suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#cipher_suite TeoL7AccRuleV2#cipher_suite}
  */
  readonly cipherSuite?: string;
  /**
  * TLS version. at least one must be specified. if multiple versions are specified, they must be consecutive, e.g., enable tls1, 1.1, 1.2, and 1.3. it is not allowed to enable only 1 and 1.2 while disabling 1.1. valid values: tlsv1: tlsv1 version; `tlsv1.1`: tlsv1.1 version; `tlsv1.2`: tlsv1.2 version; `tlsv1.3`: tlsv1.3 version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#version TeoL7AccRuleV2#version}
  */
  readonly version?: string[];
}

export function teoL7AccRuleV2BranchesActionsTlsConfigParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsTlsConfigParametersOutputReference | TeoL7AccRuleV2BranchesActionsTlsConfigParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suite: cdktf.stringToTerraform(struct!.cipherSuite),
    version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.version),
  }
}


export function teoL7AccRuleV2BranchesActionsTlsConfigParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsTlsConfigParametersOutputReference | TeoL7AccRuleV2BranchesActionsTlsConfigParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsTlsConfigParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsTlsConfigParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsTlsConfigParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParameters {
  /**
  * The maximum number of redirects. value range: 1-5. Note: this field is required when switch is on; when switch is off, this field is not required and will not take effect if filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#max_times TeoL7AccRuleV2#max_times}
  */
  readonly maxTimes?: number;
  /**
  * Whether to enable origin-pull to follow the redirection configuration. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParametersOutputReference | TeoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_times: cdktf.numberToTerraform(struct!.maxTimes),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParametersOutputReference | TeoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsUpstreamHttp2Parameters {
  /**
  * Whether to enable http2 origin-pull. valid values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
}

export function teoL7AccRuleV2BranchesActionsUpstreamHttp2ParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsUpstreamHttp2ParametersOutputReference | TeoL7AccRuleV2BranchesActionsUpstreamHttp2Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoL7AccRuleV2BranchesActionsUpstreamHttp2ParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsUpstreamHttp2ParametersOutputReference | TeoL7AccRuleV2BranchesActionsUpstreamHttp2Parameters): any {
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

export class TeoL7AccRuleV2BranchesActionsUpstreamHttp2ParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsUpstreamHttp2Parameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsUpstreamHttp2Parameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookie {
  /**
  * Origin-Pull request parameter cookie mode. this parameter is required when switch is on. valid values are: full: retain all; ignore: ignore all; includeCustom: retain partial parameters; excludeCustom: ignore partial parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#action TeoL7AccRuleV2#action}
  */
  readonly action?: string;
  /**
  * Whether to enable the origin-pull request parameter cookie. valid values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
  /**
  * Specifies parameter values. this parameter takes effect only when the query string mode action is includecustom or excludecustom, and is used to specify the parameters to be reserved or ignored. up to 10 parameters are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#values TeoL7AccRuleV2#values}
  */
  readonly values?: string[];
}

export function teoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookieToTerraform(struct?: TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookieOutputReference | TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookie): any {
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


export function teoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookieToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookieOutputReference | TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookie): any {
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

export class TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookie | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookie | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryString {
  /**
  * Query string mode. this parameter is required when switch is on. values: full: retain all; ignore: ignore all; includeCustom: retain partial parameters; excludeCustom: ignore partial parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#action TeoL7AccRuleV2#action}
  */
  readonly action?: string;
  /**
  * Whether to enable origin-pull request parameter query string. values: on: enable; off: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
  /**
  * Specifies parameter values. this parameter takes effect only when the query string mode action is includecustom or excludecustom, and is used to specify the parameters to be reserved or ignored. up to 10 parameters are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#values TeoL7AccRuleV2#values}
  */
  readonly values?: string[];
}

export function teoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryStringToTerraform(struct?: TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryStringOutputReference | TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryString): any {
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


export function teoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryStringToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryStringOutputReference | TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryString): any {
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

export class TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryString | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryString | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsUpstreamRequestParameters {
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#cookie TeoL7AccRuleV2#cookie}
  */
  readonly cookie?: TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookie;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#query_string TeoL7AccRuleV2#query_string}
  */
  readonly queryString?: TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryString;
}

export function teoL7AccRuleV2BranchesActionsUpstreamRequestParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersOutputReference | TeoL7AccRuleV2BranchesActionsUpstreamRequestParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: teoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookieToTerraform(struct!.cookie),
    query_string: teoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryStringToTerraform(struct!.queryString),
  }
}


export function teoL7AccRuleV2BranchesActionsUpstreamRequestParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersOutputReference | TeoL7AccRuleV2BranchesActionsUpstreamRequestParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: teoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookieList",
    },
    query_string: {
      value: teoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryStringToHclTerraform(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsUpstreamRequestParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsUpstreamRequestParameters | undefined) {
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
  private _cookie = new TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersCookie) {
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
  private _queryString = new TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersQueryString) {
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
export interface TeoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParameters {
  /**
  * Origin-Pull url rewrite action. valid values are: replace: replace the path prefix; addPrefix: add the path prefix; rmvPrefix: remove the path prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#action TeoL7AccRuleV2#action}
  */
  readonly action?: string;
  /**
  * Origin URL Rewrite uses a regular expression for matching the complete path. It must conform to the Google RE2 specification and have a length range of 1 to 1024. This field is required when the Action is regexReplace; otherwise, it is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#regex TeoL7AccRuleV2#regex}
  */
  readonly regex?: string;
  /**
  * Origin-Pull url rewriting type, only path is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#type TeoL7AccRuleV2#type}
  */
  readonly type?: string;
  /**
  * Origin-Pull url rewrite value, maximum length 1024, must start with /.note: when action is addprefix, it cannot end with /; when action is rmvprefix, * cannot be present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#value TeoL7AccRuleV2#value}
  */
  readonly value?: string;
}

export function teoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParametersOutputReference | TeoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParameters): any {
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


export function teoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParametersOutputReference | TeoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActionsWebSocketParameters {
  /**
  * Whether to enable websocket connection timeout. values: on: use timeout as the websocket timeout;; off: the platform still supports websocket connections, using the system default timeout of 15 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#switch TeoL7AccRuleV2#switch}
  */
  readonly switch?: string;
  /**
  * Timeout, unit: seconds. maximum timeout is 120 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#timeout TeoL7AccRuleV2#timeout}
  */
  readonly timeout?: number;
}

export function teoL7AccRuleV2BranchesActionsWebSocketParametersToTerraform(struct?: TeoL7AccRuleV2BranchesActionsWebSocketParametersOutputReference | TeoL7AccRuleV2BranchesActionsWebSocketParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function teoL7AccRuleV2BranchesActionsWebSocketParametersToHclTerraform(struct?: TeoL7AccRuleV2BranchesActionsWebSocketParametersOutputReference | TeoL7AccRuleV2BranchesActionsWebSocketParameters): any {
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

export class TeoL7AccRuleV2BranchesActionsWebSocketParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL7AccRuleV2BranchesActionsWebSocketParameters | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActionsWebSocketParameters | undefined) {
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
export interface TeoL7AccRuleV2BranchesActions {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#name TeoL7AccRuleV2#name}
  */
  readonly name: string;
  /**
  * access_url_redirect_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#access_url_redirect_parameters TeoL7AccRuleV2#access_url_redirect_parameters}
  */
  readonly accessUrlRedirectParameters?: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParameters;
  /**
  * authentication_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#authentication_parameters TeoL7AccRuleV2#authentication_parameters}
  */
  readonly authenticationParameters?: TeoL7AccRuleV2BranchesActionsAuthenticationParameters;
  /**
  * cache_key_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#cache_key_parameters TeoL7AccRuleV2#cache_key_parameters}
  */
  readonly cacheKeyParameters?: TeoL7AccRuleV2BranchesActionsCacheKeyParameters;
  /**
  * cache_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#cache_parameters TeoL7AccRuleV2#cache_parameters}
  */
  readonly cacheParameters?: TeoL7AccRuleV2BranchesActionsCacheParameters;
  /**
  * cache_prefresh_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#cache_prefresh_parameters TeoL7AccRuleV2#cache_prefresh_parameters}
  */
  readonly cachePrefreshParameters?: TeoL7AccRuleV2BranchesActionsCachePrefreshParameters;
  /**
  * client_ip_country_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#client_ip_country_parameters TeoL7AccRuleV2#client_ip_country_parameters}
  */
  readonly clientIpCountryParameters?: TeoL7AccRuleV2BranchesActionsClientIpCountryParameters;
  /**
  * client_ip_header_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#client_ip_header_parameters TeoL7AccRuleV2#client_ip_header_parameters}
  */
  readonly clientIpHeaderParameters?: TeoL7AccRuleV2BranchesActionsClientIpHeaderParameters;
  /**
  * compression_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#compression_parameters TeoL7AccRuleV2#compression_parameters}
  */
  readonly compressionParameters?: TeoL7AccRuleV2BranchesActionsCompressionParameters;
  /**
  * error_page_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#error_page_parameters TeoL7AccRuleV2#error_page_parameters}
  */
  readonly errorPageParameters?: TeoL7AccRuleV2BranchesActionsErrorPageParameters;
  /**
  * force_redirect_https_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#force_redirect_https_parameters TeoL7AccRuleV2#force_redirect_https_parameters}
  */
  readonly forceRedirectHttpsParameters?: TeoL7AccRuleV2BranchesActionsForceRedirectHttpsParameters;
  /**
  * host_header_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#host_header_parameters TeoL7AccRuleV2#host_header_parameters}
  */
  readonly hostHeaderParameters?: TeoL7AccRuleV2BranchesActionsHostHeaderParameters;
  /**
  * hsts_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#hsts_parameters TeoL7AccRuleV2#hsts_parameters}
  */
  readonly hstsParameters?: TeoL7AccRuleV2BranchesActionsHstsParameters;
  /**
  * http2_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#http2_parameters TeoL7AccRuleV2#http2_parameters}
  */
  readonly http2Parameters?: TeoL7AccRuleV2BranchesActionsHttp2Parameters;
  /**
  * http_response_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#http_response_parameters TeoL7AccRuleV2#http_response_parameters}
  */
  readonly httpResponseParameters?: TeoL7AccRuleV2BranchesActionsHttpResponseParameters;
  /**
  * http_upstream_timeout_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#http_upstream_timeout_parameters TeoL7AccRuleV2#http_upstream_timeout_parameters}
  */
  readonly httpUpstreamTimeoutParameters?: TeoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParameters;
  /**
  * max_age_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#max_age_parameters TeoL7AccRuleV2#max_age_parameters}
  */
  readonly maxAgeParameters?: TeoL7AccRuleV2BranchesActionsMaxAgeParameters;
  /**
  * modify_origin_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#modify_origin_parameters TeoL7AccRuleV2#modify_origin_parameters}
  */
  readonly modifyOriginParameters?: TeoL7AccRuleV2BranchesActionsModifyOriginParameters;
  /**
  * modify_request_header_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#modify_request_header_parameters TeoL7AccRuleV2#modify_request_header_parameters}
  */
  readonly modifyRequestHeaderParameters?: TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParameters;
  /**
  * modify_response_header_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#modify_response_header_parameters TeoL7AccRuleV2#modify_response_header_parameters}
  */
  readonly modifyResponseHeaderParameters?: TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParameters;
  /**
  * ocsp_stapling_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#ocsp_stapling_parameters TeoL7AccRuleV2#ocsp_stapling_parameters}
  */
  readonly ocspStaplingParameters?: TeoL7AccRuleV2BranchesActionsOcspStaplingParameters;
  /**
  * offline_cache_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#offline_cache_parameters TeoL7AccRuleV2#offline_cache_parameters}
  */
  readonly offlineCacheParameters?: TeoL7AccRuleV2BranchesActionsOfflineCacheParameters;
  /**
  * origin_pull_protocol_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#origin_pull_protocol_parameters TeoL7AccRuleV2#origin_pull_protocol_parameters}
  */
  readonly originPullProtocolParameters?: TeoL7AccRuleV2BranchesActionsOriginPullProtocolParameters;
  /**
  * post_max_size_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#post_max_size_parameters TeoL7AccRuleV2#post_max_size_parameters}
  */
  readonly postMaxSizeParameters?: TeoL7AccRuleV2BranchesActionsPostMaxSizeParameters;
  /**
  * quic_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#quic_parameters TeoL7AccRuleV2#quic_parameters}
  */
  readonly quicParameters?: TeoL7AccRuleV2BranchesActionsQuicParameters;
  /**
  * range_origin_pull_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#range_origin_pull_parameters TeoL7AccRuleV2#range_origin_pull_parameters}
  */
  readonly rangeOriginPullParameters?: TeoL7AccRuleV2BranchesActionsRangeOriginPullParameters;
  /**
  * response_speed_limit_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#response_speed_limit_parameters TeoL7AccRuleV2#response_speed_limit_parameters}
  */
  readonly responseSpeedLimitParameters?: TeoL7AccRuleV2BranchesActionsResponseSpeedLimitParameters;
  /**
  * set_content_identifier_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#set_content_identifier_parameters TeoL7AccRuleV2#set_content_identifier_parameters}
  */
  readonly setContentIdentifierParameters?: TeoL7AccRuleV2BranchesActionsSetContentIdentifierParameters;
  /**
  * smart_routing_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#smart_routing_parameters TeoL7AccRuleV2#smart_routing_parameters}
  */
  readonly smartRoutingParameters?: TeoL7AccRuleV2BranchesActionsSmartRoutingParameters;
  /**
  * status_code_cache_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#status_code_cache_parameters TeoL7AccRuleV2#status_code_cache_parameters}
  */
  readonly statusCodeCacheParameters?: TeoL7AccRuleV2BranchesActionsStatusCodeCacheParameters;
  /**
  * tls_config_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#tls_config_parameters TeoL7AccRuleV2#tls_config_parameters}
  */
  readonly tlsConfigParameters?: TeoL7AccRuleV2BranchesActionsTlsConfigParameters;
  /**
  * upstream_follow_redirect_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#upstream_follow_redirect_parameters TeoL7AccRuleV2#upstream_follow_redirect_parameters}
  */
  readonly upstreamFollowRedirectParameters?: TeoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParameters;
  /**
  * upstream_http2_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#upstream_http2_parameters TeoL7AccRuleV2#upstream_http2_parameters}
  */
  readonly upstreamHttp2Parameters?: TeoL7AccRuleV2BranchesActionsUpstreamHttp2Parameters;
  /**
  * upstream_request_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#upstream_request_parameters TeoL7AccRuleV2#upstream_request_parameters}
  */
  readonly upstreamRequestParameters?: TeoL7AccRuleV2BranchesActionsUpstreamRequestParameters;
  /**
  * upstream_url_rewrite_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#upstream_url_rewrite_parameters TeoL7AccRuleV2#upstream_url_rewrite_parameters}
  */
  readonly upstreamUrlRewriteParameters?: TeoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParameters;
  /**
  * web_socket_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#web_socket_parameters TeoL7AccRuleV2#web_socket_parameters}
  */
  readonly webSocketParameters?: TeoL7AccRuleV2BranchesActionsWebSocketParameters;
}

export function teoL7AccRuleV2BranchesActionsToTerraform(struct?: TeoL7AccRuleV2BranchesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    access_url_redirect_parameters: teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersToTerraform(struct!.accessUrlRedirectParameters),
    authentication_parameters: teoL7AccRuleV2BranchesActionsAuthenticationParametersToTerraform(struct!.authenticationParameters),
    cache_key_parameters: teoL7AccRuleV2BranchesActionsCacheKeyParametersToTerraform(struct!.cacheKeyParameters),
    cache_parameters: teoL7AccRuleV2BranchesActionsCacheParametersToTerraform(struct!.cacheParameters),
    cache_prefresh_parameters: teoL7AccRuleV2BranchesActionsCachePrefreshParametersToTerraform(struct!.cachePrefreshParameters),
    client_ip_country_parameters: teoL7AccRuleV2BranchesActionsClientIpCountryParametersToTerraform(struct!.clientIpCountryParameters),
    client_ip_header_parameters: teoL7AccRuleV2BranchesActionsClientIpHeaderParametersToTerraform(struct!.clientIpHeaderParameters),
    compression_parameters: teoL7AccRuleV2BranchesActionsCompressionParametersToTerraform(struct!.compressionParameters),
    error_page_parameters: teoL7AccRuleV2BranchesActionsErrorPageParametersToTerraform(struct!.errorPageParameters),
    force_redirect_https_parameters: teoL7AccRuleV2BranchesActionsForceRedirectHttpsParametersToTerraform(struct!.forceRedirectHttpsParameters),
    host_header_parameters: teoL7AccRuleV2BranchesActionsHostHeaderParametersToTerraform(struct!.hostHeaderParameters),
    hsts_parameters: teoL7AccRuleV2BranchesActionsHstsParametersToTerraform(struct!.hstsParameters),
    http2_parameters: teoL7AccRuleV2BranchesActionsHttp2ParametersToTerraform(struct!.http2Parameters),
    http_response_parameters: teoL7AccRuleV2BranchesActionsHttpResponseParametersToTerraform(struct!.httpResponseParameters),
    http_upstream_timeout_parameters: teoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParametersToTerraform(struct!.httpUpstreamTimeoutParameters),
    max_age_parameters: teoL7AccRuleV2BranchesActionsMaxAgeParametersToTerraform(struct!.maxAgeParameters),
    modify_origin_parameters: teoL7AccRuleV2BranchesActionsModifyOriginParametersToTerraform(struct!.modifyOriginParameters),
    modify_request_header_parameters: teoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersToTerraform(struct!.modifyRequestHeaderParameters),
    modify_response_header_parameters: teoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersToTerraform(struct!.modifyResponseHeaderParameters),
    ocsp_stapling_parameters: teoL7AccRuleV2BranchesActionsOcspStaplingParametersToTerraform(struct!.ocspStaplingParameters),
    offline_cache_parameters: teoL7AccRuleV2BranchesActionsOfflineCacheParametersToTerraform(struct!.offlineCacheParameters),
    origin_pull_protocol_parameters: teoL7AccRuleV2BranchesActionsOriginPullProtocolParametersToTerraform(struct!.originPullProtocolParameters),
    post_max_size_parameters: teoL7AccRuleV2BranchesActionsPostMaxSizeParametersToTerraform(struct!.postMaxSizeParameters),
    quic_parameters: teoL7AccRuleV2BranchesActionsQuicParametersToTerraform(struct!.quicParameters),
    range_origin_pull_parameters: teoL7AccRuleV2BranchesActionsRangeOriginPullParametersToTerraform(struct!.rangeOriginPullParameters),
    response_speed_limit_parameters: teoL7AccRuleV2BranchesActionsResponseSpeedLimitParametersToTerraform(struct!.responseSpeedLimitParameters),
    set_content_identifier_parameters: teoL7AccRuleV2BranchesActionsSetContentIdentifierParametersToTerraform(struct!.setContentIdentifierParameters),
    smart_routing_parameters: teoL7AccRuleV2BranchesActionsSmartRoutingParametersToTerraform(struct!.smartRoutingParameters),
    status_code_cache_parameters: teoL7AccRuleV2BranchesActionsStatusCodeCacheParametersToTerraform(struct!.statusCodeCacheParameters),
    tls_config_parameters: teoL7AccRuleV2BranchesActionsTlsConfigParametersToTerraform(struct!.tlsConfigParameters),
    upstream_follow_redirect_parameters: teoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParametersToTerraform(struct!.upstreamFollowRedirectParameters),
    upstream_http2_parameters: teoL7AccRuleV2BranchesActionsUpstreamHttp2ParametersToTerraform(struct!.upstreamHttp2Parameters),
    upstream_request_parameters: teoL7AccRuleV2BranchesActionsUpstreamRequestParametersToTerraform(struct!.upstreamRequestParameters),
    upstream_url_rewrite_parameters: teoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParametersToTerraform(struct!.upstreamUrlRewriteParameters),
    web_socket_parameters: teoL7AccRuleV2BranchesActionsWebSocketParametersToTerraform(struct!.webSocketParameters),
  }
}


export function teoL7AccRuleV2BranchesActionsToHclTerraform(struct?: TeoL7AccRuleV2BranchesActions | cdktf.IResolvable): any {
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
      value: teoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersToHclTerraform(struct!.accessUrlRedirectParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersList",
    },
    authentication_parameters: {
      value: teoL7AccRuleV2BranchesActionsAuthenticationParametersToHclTerraform(struct!.authenticationParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsAuthenticationParametersList",
    },
    cache_key_parameters: {
      value: teoL7AccRuleV2BranchesActionsCacheKeyParametersToHclTerraform(struct!.cacheKeyParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsCacheKeyParametersList",
    },
    cache_parameters: {
      value: teoL7AccRuleV2BranchesActionsCacheParametersToHclTerraform(struct!.cacheParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsCacheParametersList",
    },
    cache_prefresh_parameters: {
      value: teoL7AccRuleV2BranchesActionsCachePrefreshParametersToHclTerraform(struct!.cachePrefreshParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsCachePrefreshParametersList",
    },
    client_ip_country_parameters: {
      value: teoL7AccRuleV2BranchesActionsClientIpCountryParametersToHclTerraform(struct!.clientIpCountryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsClientIpCountryParametersList",
    },
    client_ip_header_parameters: {
      value: teoL7AccRuleV2BranchesActionsClientIpHeaderParametersToHclTerraform(struct!.clientIpHeaderParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsClientIpHeaderParametersList",
    },
    compression_parameters: {
      value: teoL7AccRuleV2BranchesActionsCompressionParametersToHclTerraform(struct!.compressionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsCompressionParametersList",
    },
    error_page_parameters: {
      value: teoL7AccRuleV2BranchesActionsErrorPageParametersToHclTerraform(struct!.errorPageParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsErrorPageParametersList",
    },
    force_redirect_https_parameters: {
      value: teoL7AccRuleV2BranchesActionsForceRedirectHttpsParametersToHclTerraform(struct!.forceRedirectHttpsParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsForceRedirectHttpsParametersList",
    },
    host_header_parameters: {
      value: teoL7AccRuleV2BranchesActionsHostHeaderParametersToHclTerraform(struct!.hostHeaderParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsHostHeaderParametersList",
    },
    hsts_parameters: {
      value: teoL7AccRuleV2BranchesActionsHstsParametersToHclTerraform(struct!.hstsParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsHstsParametersList",
    },
    http2_parameters: {
      value: teoL7AccRuleV2BranchesActionsHttp2ParametersToHclTerraform(struct!.http2Parameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsHttp2ParametersList",
    },
    http_response_parameters: {
      value: teoL7AccRuleV2BranchesActionsHttpResponseParametersToHclTerraform(struct!.httpResponseParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsHttpResponseParametersList",
    },
    http_upstream_timeout_parameters: {
      value: teoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParametersToHclTerraform(struct!.httpUpstreamTimeoutParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParametersList",
    },
    max_age_parameters: {
      value: teoL7AccRuleV2BranchesActionsMaxAgeParametersToHclTerraform(struct!.maxAgeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsMaxAgeParametersList",
    },
    modify_origin_parameters: {
      value: teoL7AccRuleV2BranchesActionsModifyOriginParametersToHclTerraform(struct!.modifyOriginParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsModifyOriginParametersList",
    },
    modify_request_header_parameters: {
      value: teoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersToHclTerraform(struct!.modifyRequestHeaderParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersList",
    },
    modify_response_header_parameters: {
      value: teoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersToHclTerraform(struct!.modifyResponseHeaderParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersList",
    },
    ocsp_stapling_parameters: {
      value: teoL7AccRuleV2BranchesActionsOcspStaplingParametersToHclTerraform(struct!.ocspStaplingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsOcspStaplingParametersList",
    },
    offline_cache_parameters: {
      value: teoL7AccRuleV2BranchesActionsOfflineCacheParametersToHclTerraform(struct!.offlineCacheParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsOfflineCacheParametersList",
    },
    origin_pull_protocol_parameters: {
      value: teoL7AccRuleV2BranchesActionsOriginPullProtocolParametersToHclTerraform(struct!.originPullProtocolParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsOriginPullProtocolParametersList",
    },
    post_max_size_parameters: {
      value: teoL7AccRuleV2BranchesActionsPostMaxSizeParametersToHclTerraform(struct!.postMaxSizeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsPostMaxSizeParametersList",
    },
    quic_parameters: {
      value: teoL7AccRuleV2BranchesActionsQuicParametersToHclTerraform(struct!.quicParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsQuicParametersList",
    },
    range_origin_pull_parameters: {
      value: teoL7AccRuleV2BranchesActionsRangeOriginPullParametersToHclTerraform(struct!.rangeOriginPullParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsRangeOriginPullParametersList",
    },
    response_speed_limit_parameters: {
      value: teoL7AccRuleV2BranchesActionsResponseSpeedLimitParametersToHclTerraform(struct!.responseSpeedLimitParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsResponseSpeedLimitParametersList",
    },
    set_content_identifier_parameters: {
      value: teoL7AccRuleV2BranchesActionsSetContentIdentifierParametersToHclTerraform(struct!.setContentIdentifierParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsSetContentIdentifierParametersList",
    },
    smart_routing_parameters: {
      value: teoL7AccRuleV2BranchesActionsSmartRoutingParametersToHclTerraform(struct!.smartRoutingParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsSmartRoutingParametersList",
    },
    status_code_cache_parameters: {
      value: teoL7AccRuleV2BranchesActionsStatusCodeCacheParametersToHclTerraform(struct!.statusCodeCacheParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersList",
    },
    tls_config_parameters: {
      value: teoL7AccRuleV2BranchesActionsTlsConfigParametersToHclTerraform(struct!.tlsConfigParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsTlsConfigParametersList",
    },
    upstream_follow_redirect_parameters: {
      value: teoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParametersToHclTerraform(struct!.upstreamFollowRedirectParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParametersList",
    },
    upstream_http2_parameters: {
      value: teoL7AccRuleV2BranchesActionsUpstreamHttp2ParametersToHclTerraform(struct!.upstreamHttp2Parameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsUpstreamHttp2ParametersList",
    },
    upstream_request_parameters: {
      value: teoL7AccRuleV2BranchesActionsUpstreamRequestParametersToHclTerraform(struct!.upstreamRequestParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersList",
    },
    upstream_url_rewrite_parameters: {
      value: teoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParametersToHclTerraform(struct!.upstreamUrlRewriteParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParametersList",
    },
    web_socket_parameters: {
      value: teoL7AccRuleV2BranchesActionsWebSocketParametersToHclTerraform(struct!.webSocketParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsWebSocketParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleV2BranchesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleV2BranchesActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesActions | cdktf.IResolvable | undefined) {
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
  private _accessUrlRedirectParameters = new TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParametersOutputReference(this, "access_url_redirect_parameters");
  public get accessUrlRedirectParameters() {
    return this._accessUrlRedirectParameters;
  }
  public putAccessUrlRedirectParameters(value: TeoL7AccRuleV2BranchesActionsAccessUrlRedirectParameters) {
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
  private _authenticationParameters = new TeoL7AccRuleV2BranchesActionsAuthenticationParametersOutputReference(this, "authentication_parameters");
  public get authenticationParameters() {
    return this._authenticationParameters;
  }
  public putAuthenticationParameters(value: TeoL7AccRuleV2BranchesActionsAuthenticationParameters) {
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
  private _cacheKeyParameters = new TeoL7AccRuleV2BranchesActionsCacheKeyParametersOutputReference(this, "cache_key_parameters");
  public get cacheKeyParameters() {
    return this._cacheKeyParameters;
  }
  public putCacheKeyParameters(value: TeoL7AccRuleV2BranchesActionsCacheKeyParameters) {
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
  private _cacheParameters = new TeoL7AccRuleV2BranchesActionsCacheParametersOutputReference(this, "cache_parameters");
  public get cacheParameters() {
    return this._cacheParameters;
  }
  public putCacheParameters(value: TeoL7AccRuleV2BranchesActionsCacheParameters) {
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
  private _cachePrefreshParameters = new TeoL7AccRuleV2BranchesActionsCachePrefreshParametersOutputReference(this, "cache_prefresh_parameters");
  public get cachePrefreshParameters() {
    return this._cachePrefreshParameters;
  }
  public putCachePrefreshParameters(value: TeoL7AccRuleV2BranchesActionsCachePrefreshParameters) {
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
  private _clientIpCountryParameters = new TeoL7AccRuleV2BranchesActionsClientIpCountryParametersOutputReference(this, "client_ip_country_parameters");
  public get clientIpCountryParameters() {
    return this._clientIpCountryParameters;
  }
  public putClientIpCountryParameters(value: TeoL7AccRuleV2BranchesActionsClientIpCountryParameters) {
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
  private _clientIpHeaderParameters = new TeoL7AccRuleV2BranchesActionsClientIpHeaderParametersOutputReference(this, "client_ip_header_parameters");
  public get clientIpHeaderParameters() {
    return this._clientIpHeaderParameters;
  }
  public putClientIpHeaderParameters(value: TeoL7AccRuleV2BranchesActionsClientIpHeaderParameters) {
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
  private _compressionParameters = new TeoL7AccRuleV2BranchesActionsCompressionParametersOutputReference(this, "compression_parameters");
  public get compressionParameters() {
    return this._compressionParameters;
  }
  public putCompressionParameters(value: TeoL7AccRuleV2BranchesActionsCompressionParameters) {
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
  private _errorPageParameters = new TeoL7AccRuleV2BranchesActionsErrorPageParametersOutputReference(this, "error_page_parameters");
  public get errorPageParameters() {
    return this._errorPageParameters;
  }
  public putErrorPageParameters(value: TeoL7AccRuleV2BranchesActionsErrorPageParameters) {
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
  private _forceRedirectHttpsParameters = new TeoL7AccRuleV2BranchesActionsForceRedirectHttpsParametersOutputReference(this, "force_redirect_https_parameters");
  public get forceRedirectHttpsParameters() {
    return this._forceRedirectHttpsParameters;
  }
  public putForceRedirectHttpsParameters(value: TeoL7AccRuleV2BranchesActionsForceRedirectHttpsParameters) {
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
  private _hostHeaderParameters = new TeoL7AccRuleV2BranchesActionsHostHeaderParametersOutputReference(this, "host_header_parameters");
  public get hostHeaderParameters() {
    return this._hostHeaderParameters;
  }
  public putHostHeaderParameters(value: TeoL7AccRuleV2BranchesActionsHostHeaderParameters) {
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
  private _hstsParameters = new TeoL7AccRuleV2BranchesActionsHstsParametersOutputReference(this, "hsts_parameters");
  public get hstsParameters() {
    return this._hstsParameters;
  }
  public putHstsParameters(value: TeoL7AccRuleV2BranchesActionsHstsParameters) {
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
  private _http2Parameters = new TeoL7AccRuleV2BranchesActionsHttp2ParametersOutputReference(this, "http2_parameters");
  public get http2Parameters() {
    return this._http2Parameters;
  }
  public putHttp2Parameters(value: TeoL7AccRuleV2BranchesActionsHttp2Parameters) {
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
  private _httpResponseParameters = new TeoL7AccRuleV2BranchesActionsHttpResponseParametersOutputReference(this, "http_response_parameters");
  public get httpResponseParameters() {
    return this._httpResponseParameters;
  }
  public putHttpResponseParameters(value: TeoL7AccRuleV2BranchesActionsHttpResponseParameters) {
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
  private _httpUpstreamTimeoutParameters = new TeoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParametersOutputReference(this, "http_upstream_timeout_parameters");
  public get httpUpstreamTimeoutParameters() {
    return this._httpUpstreamTimeoutParameters;
  }
  public putHttpUpstreamTimeoutParameters(value: TeoL7AccRuleV2BranchesActionsHttpUpstreamTimeoutParameters) {
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
  private _maxAgeParameters = new TeoL7AccRuleV2BranchesActionsMaxAgeParametersOutputReference(this, "max_age_parameters");
  public get maxAgeParameters() {
    return this._maxAgeParameters;
  }
  public putMaxAgeParameters(value: TeoL7AccRuleV2BranchesActionsMaxAgeParameters) {
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
  private _modifyOriginParameters = new TeoL7AccRuleV2BranchesActionsModifyOriginParametersOutputReference(this, "modify_origin_parameters");
  public get modifyOriginParameters() {
    return this._modifyOriginParameters;
  }
  public putModifyOriginParameters(value: TeoL7AccRuleV2BranchesActionsModifyOriginParameters) {
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
  private _modifyRequestHeaderParameters = new TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParametersOutputReference(this, "modify_request_header_parameters");
  public get modifyRequestHeaderParameters() {
    return this._modifyRequestHeaderParameters;
  }
  public putModifyRequestHeaderParameters(value: TeoL7AccRuleV2BranchesActionsModifyRequestHeaderParameters) {
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
  private _modifyResponseHeaderParameters = new TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParametersOutputReference(this, "modify_response_header_parameters");
  public get modifyResponseHeaderParameters() {
    return this._modifyResponseHeaderParameters;
  }
  public putModifyResponseHeaderParameters(value: TeoL7AccRuleV2BranchesActionsModifyResponseHeaderParameters) {
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
  private _ocspStaplingParameters = new TeoL7AccRuleV2BranchesActionsOcspStaplingParametersOutputReference(this, "ocsp_stapling_parameters");
  public get ocspStaplingParameters() {
    return this._ocspStaplingParameters;
  }
  public putOcspStaplingParameters(value: TeoL7AccRuleV2BranchesActionsOcspStaplingParameters) {
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
  private _offlineCacheParameters = new TeoL7AccRuleV2BranchesActionsOfflineCacheParametersOutputReference(this, "offline_cache_parameters");
  public get offlineCacheParameters() {
    return this._offlineCacheParameters;
  }
  public putOfflineCacheParameters(value: TeoL7AccRuleV2BranchesActionsOfflineCacheParameters) {
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
  private _originPullProtocolParameters = new TeoL7AccRuleV2BranchesActionsOriginPullProtocolParametersOutputReference(this, "origin_pull_protocol_parameters");
  public get originPullProtocolParameters() {
    return this._originPullProtocolParameters;
  }
  public putOriginPullProtocolParameters(value: TeoL7AccRuleV2BranchesActionsOriginPullProtocolParameters) {
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
  private _postMaxSizeParameters = new TeoL7AccRuleV2BranchesActionsPostMaxSizeParametersOutputReference(this, "post_max_size_parameters");
  public get postMaxSizeParameters() {
    return this._postMaxSizeParameters;
  }
  public putPostMaxSizeParameters(value: TeoL7AccRuleV2BranchesActionsPostMaxSizeParameters) {
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
  private _quicParameters = new TeoL7AccRuleV2BranchesActionsQuicParametersOutputReference(this, "quic_parameters");
  public get quicParameters() {
    return this._quicParameters;
  }
  public putQuicParameters(value: TeoL7AccRuleV2BranchesActionsQuicParameters) {
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
  private _rangeOriginPullParameters = new TeoL7AccRuleV2BranchesActionsRangeOriginPullParametersOutputReference(this, "range_origin_pull_parameters");
  public get rangeOriginPullParameters() {
    return this._rangeOriginPullParameters;
  }
  public putRangeOriginPullParameters(value: TeoL7AccRuleV2BranchesActionsRangeOriginPullParameters) {
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
  private _responseSpeedLimitParameters = new TeoL7AccRuleV2BranchesActionsResponseSpeedLimitParametersOutputReference(this, "response_speed_limit_parameters");
  public get responseSpeedLimitParameters() {
    return this._responseSpeedLimitParameters;
  }
  public putResponseSpeedLimitParameters(value: TeoL7AccRuleV2BranchesActionsResponseSpeedLimitParameters) {
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
  private _setContentIdentifierParameters = new TeoL7AccRuleV2BranchesActionsSetContentIdentifierParametersOutputReference(this, "set_content_identifier_parameters");
  public get setContentIdentifierParameters() {
    return this._setContentIdentifierParameters;
  }
  public putSetContentIdentifierParameters(value: TeoL7AccRuleV2BranchesActionsSetContentIdentifierParameters) {
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
  private _smartRoutingParameters = new TeoL7AccRuleV2BranchesActionsSmartRoutingParametersOutputReference(this, "smart_routing_parameters");
  public get smartRoutingParameters() {
    return this._smartRoutingParameters;
  }
  public putSmartRoutingParameters(value: TeoL7AccRuleV2BranchesActionsSmartRoutingParameters) {
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
  private _statusCodeCacheParameters = new TeoL7AccRuleV2BranchesActionsStatusCodeCacheParametersOutputReference(this, "status_code_cache_parameters");
  public get statusCodeCacheParameters() {
    return this._statusCodeCacheParameters;
  }
  public putStatusCodeCacheParameters(value: TeoL7AccRuleV2BranchesActionsStatusCodeCacheParameters) {
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
  private _tlsConfigParameters = new TeoL7AccRuleV2BranchesActionsTlsConfigParametersOutputReference(this, "tls_config_parameters");
  public get tlsConfigParameters() {
    return this._tlsConfigParameters;
  }
  public putTlsConfigParameters(value: TeoL7AccRuleV2BranchesActionsTlsConfigParameters) {
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
  private _upstreamFollowRedirectParameters = new TeoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParametersOutputReference(this, "upstream_follow_redirect_parameters");
  public get upstreamFollowRedirectParameters() {
    return this._upstreamFollowRedirectParameters;
  }
  public putUpstreamFollowRedirectParameters(value: TeoL7AccRuleV2BranchesActionsUpstreamFollowRedirectParameters) {
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
  private _upstreamHttp2Parameters = new TeoL7AccRuleV2BranchesActionsUpstreamHttp2ParametersOutputReference(this, "upstream_http2_parameters");
  public get upstreamHttp2Parameters() {
    return this._upstreamHttp2Parameters;
  }
  public putUpstreamHttp2Parameters(value: TeoL7AccRuleV2BranchesActionsUpstreamHttp2Parameters) {
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
  private _upstreamRequestParameters = new TeoL7AccRuleV2BranchesActionsUpstreamRequestParametersOutputReference(this, "upstream_request_parameters");
  public get upstreamRequestParameters() {
    return this._upstreamRequestParameters;
  }
  public putUpstreamRequestParameters(value: TeoL7AccRuleV2BranchesActionsUpstreamRequestParameters) {
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
  private _upstreamUrlRewriteParameters = new TeoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParametersOutputReference(this, "upstream_url_rewrite_parameters");
  public get upstreamUrlRewriteParameters() {
    return this._upstreamUrlRewriteParameters;
  }
  public putUpstreamUrlRewriteParameters(value: TeoL7AccRuleV2BranchesActionsUpstreamUrlRewriteParameters) {
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
  private _webSocketParameters = new TeoL7AccRuleV2BranchesActionsWebSocketParametersOutputReference(this, "web_socket_parameters");
  public get webSocketParameters() {
    return this._webSocketParameters;
  }
  public putWebSocketParameters(value: TeoL7AccRuleV2BranchesActionsWebSocketParameters) {
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

export class TeoL7AccRuleV2BranchesActionsList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleV2BranchesActions[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleV2BranchesActionsOutputReference {
    return new TeoL7AccRuleV2BranchesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoL7AccRuleV2BranchesSubRules {
  /**
  * Rule comments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#description TeoL7AccRuleV2#description}
  */
  readonly description?: string[];
  /**
  * branches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#branches TeoL7AccRuleV2#branches}
  */
  readonly branches?: TeoL7AccRuleV2Branches[] | cdktf.IResolvable;
}

export function teoL7AccRuleV2BranchesSubRulesToTerraform(struct?: TeoL7AccRuleV2BranchesSubRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.description),
    branches: cdktf.listMapper(teoL7AccRuleV2BranchesToTerraform, true)(struct!.branches),
  }
}


export function teoL7AccRuleV2BranchesSubRulesToHclTerraform(struct?: TeoL7AccRuleV2BranchesSubRules | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(teoL7AccRuleV2BranchesToHclTerraform, true)(struct!.branches),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleV2BranchesSubRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleV2BranchesSubRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2BranchesSubRules | cdktf.IResolvable | undefined) {
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
  private _branches = new TeoL7AccRuleV2BranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }
  public putBranches(value: TeoL7AccRuleV2Branches[] | cdktf.IResolvable) {
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

export class TeoL7AccRuleV2BranchesSubRulesList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleV2BranchesSubRules[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleV2BranchesSubRulesOutputReference {
    return new TeoL7AccRuleV2BranchesSubRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoL7AccRuleV2Branches {
  /**
  * Match condition. https://www.tencentcloud.com/document/product/1145/54759.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#condition TeoL7AccRuleV2#condition}
  */
  readonly condition?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#actions TeoL7AccRuleV2#actions}
  */
  readonly actions?: TeoL7AccRuleV2BranchesActions[] | cdktf.IResolvable;
  /**
  * sub_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#sub_rules TeoL7AccRuleV2#sub_rules}
  */
  readonly subRules?: TeoL7AccRuleV2BranchesSubRules[] | cdktf.IResolvable;
}

export function teoL7AccRuleV2BranchesToTerraform(struct?: TeoL7AccRuleV2Branches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    actions: cdktf.listMapper(teoL7AccRuleV2BranchesActionsToTerraform, true)(struct!.actions),
    sub_rules: cdktf.listMapper(teoL7AccRuleV2BranchesSubRulesToTerraform, true)(struct!.subRules),
  }
}


export function teoL7AccRuleV2BranchesToHclTerraform(struct?: TeoL7AccRuleV2Branches | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(teoL7AccRuleV2BranchesActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesActionsList",
    },
    sub_rules: {
      value: cdktf.listMapperHcl(teoL7AccRuleV2BranchesSubRulesToHclTerraform, true)(struct!.subRules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoL7AccRuleV2BranchesSubRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL7AccRuleV2BranchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoL7AccRuleV2Branches | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TeoL7AccRuleV2Branches | cdktf.IResolvable | undefined) {
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
  private _actions = new TeoL7AccRuleV2BranchesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: TeoL7AccRuleV2BranchesActions[] | cdktf.IResolvable) {
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
  private _subRules = new TeoL7AccRuleV2BranchesSubRulesList(this, "sub_rules", false);
  public get subRules() {
    return this._subRules;
  }
  public putSubRules(value: TeoL7AccRuleV2BranchesSubRules[] | cdktf.IResolvable) {
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

export class TeoL7AccRuleV2BranchesList extends cdktf.ComplexList {
  public internalValue? : TeoL7AccRuleV2Branches[] | cdktf.IResolvable

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
  public get(index: number): TeoL7AccRuleV2BranchesOutputReference {
    return new TeoL7AccRuleV2BranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2 tencentcloud_teo_l7_acc_rule_v2}
*/
export class TeoL7AccRuleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_l7_acc_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoL7AccRuleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoL7AccRuleV2 to import
  * @param importFromId The id of the existing TeoL7AccRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoL7AccRuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_l7_acc_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/teo_l7_acc_rule_v2 tencentcloud_teo_l7_acc_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoL7AccRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: TeoL7AccRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_l7_acc_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._ruleName = config.ruleName;
    this._status = config.status;
    this._zoneId = config.zoneId;
    this._branches.internalValue = config.branches;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // branches - computed: false, optional: true, required: false
  private _branches = new TeoL7AccRuleV2BranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }
  public putBranches(value: TeoL7AccRuleV2Branches[] | cdktf.IResolvable) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.listMapper(cdktf.stringToTerraform, false)(this._description),
      id: cdktf.stringToTerraform(this._id),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      status: cdktf.stringToTerraform(this._status),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      branches: cdktf.listMapper(teoL7AccRuleV2BranchesToTerraform, true)(this._branches.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._description),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      branches: {
        value: cdktf.listMapperHcl(teoL7AccRuleV2BranchesToHclTerraform, true)(this._branches.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoL7AccRuleV2BranchesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
