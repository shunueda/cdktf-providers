// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#allow_all_response_codes AppFirewall#allow_all_response_codes}
  */
  readonly allowAllResponseCodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#annotations AppFirewall#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#blocking AppFirewall#blocking}
  */
  readonly blocking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#default_anonymization AppFirewall#default_anonymization}
  */
  readonly defaultAnonymization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#default_detection_settings AppFirewall#default_detection_settings}
  */
  readonly defaultDetectionSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#description AppFirewall#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#disable AppFirewall#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#disable_anonymization AppFirewall#disable_anonymization}
  */
  readonly disableAnonymization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#id AppFirewall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#labels AppFirewall#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#monitoring AppFirewall#monitoring}
  */
  readonly monitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#name AppFirewall#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#namespace AppFirewall#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#use_default_blocking_page AppFirewall#use_default_blocking_page}
  */
  readonly useDefaultBlockingPage?: boolean | cdktf.IResolvable;
  /**
  * ai_risk_based_blocking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#ai_risk_based_blocking AppFirewall#ai_risk_based_blocking}
  */
  readonly aiRiskBasedBlocking?: AppFirewallAiRiskBasedBlocking;
  /**
  * allowed_response_codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#allowed_response_codes AppFirewall#allowed_response_codes}
  */
  readonly allowedResponseCodes?: AppFirewallAllowedResponseCodes;
  /**
  * blocking_page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#blocking_page AppFirewall#blocking_page}
  */
  readonly blockingPage?: AppFirewallBlockingPage;
  /**
  * custom_anonymization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#custom_anonymization AppFirewall#custom_anonymization}
  */
  readonly customAnonymization?: AppFirewallCustomAnonymization;
  /**
  * detection_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#detection_settings AppFirewall#detection_settings}
  */
  readonly detectionSettings?: AppFirewallDetectionSettings;
}
export interface AppFirewallAiRiskBasedBlocking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#high_risk_action AppFirewall#high_risk_action}
  */
  readonly highRiskAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#low_risk_action AppFirewall#low_risk_action}
  */
  readonly lowRiskAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#medium_risk_action AppFirewall#medium_risk_action}
  */
  readonly mediumRiskAction: string;
}

export function appFirewallAiRiskBasedBlockingToTerraform(struct?: AppFirewallAiRiskBasedBlockingOutputReference | AppFirewallAiRiskBasedBlocking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_risk_action: cdktf.stringToTerraform(struct!.highRiskAction),
    low_risk_action: cdktf.stringToTerraform(struct!.lowRiskAction),
    medium_risk_action: cdktf.stringToTerraform(struct!.mediumRiskAction),
  }
}


export function appFirewallAiRiskBasedBlockingToHclTerraform(struct?: AppFirewallAiRiskBasedBlockingOutputReference | AppFirewallAiRiskBasedBlocking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_risk_action: {
      value: cdktf.stringToHclTerraform(struct!.highRiskAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low_risk_action: {
      value: cdktf.stringToHclTerraform(struct!.lowRiskAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    medium_risk_action: {
      value: cdktf.stringToHclTerraform(struct!.mediumRiskAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallAiRiskBasedBlockingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallAiRiskBasedBlocking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highRiskAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.highRiskAction = this._highRiskAction;
    }
    if (this._lowRiskAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowRiskAction = this._lowRiskAction;
    }
    if (this._mediumRiskAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumRiskAction = this._mediumRiskAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallAiRiskBasedBlocking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highRiskAction = undefined;
      this._lowRiskAction = undefined;
      this._mediumRiskAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highRiskAction = value.highRiskAction;
      this._lowRiskAction = value.lowRiskAction;
      this._mediumRiskAction = value.mediumRiskAction;
    }
  }

  // high_risk_action - computed: false, optional: false, required: true
  private _highRiskAction?: string; 
  public get highRiskAction() {
    return this.getStringAttribute('high_risk_action');
  }
  public set highRiskAction(value: string) {
    this._highRiskAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highRiskActionInput() {
    return this._highRiskAction;
  }

  // low_risk_action - computed: false, optional: false, required: true
  private _lowRiskAction?: string; 
  public get lowRiskAction() {
    return this.getStringAttribute('low_risk_action');
  }
  public set lowRiskAction(value: string) {
    this._lowRiskAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowRiskActionInput() {
    return this._lowRiskAction;
  }

  // medium_risk_action - computed: false, optional: false, required: true
  private _mediumRiskAction?: string; 
  public get mediumRiskAction() {
    return this.getStringAttribute('medium_risk_action');
  }
  public set mediumRiskAction(value: string) {
    this._mediumRiskAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumRiskActionInput() {
    return this._mediumRiskAction;
  }
}
export interface AppFirewallAllowedResponseCodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#response_code AppFirewall#response_code}
  */
  readonly responseCode: number[];
}

export function appFirewallAllowedResponseCodesToTerraform(struct?: AppFirewallAllowedResponseCodesOutputReference | AppFirewallAllowedResponseCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_code: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.responseCode),
  }
}


export function appFirewallAllowedResponseCodesToHclTerraform(struct?: AppFirewallAllowedResponseCodesOutputReference | AppFirewallAllowedResponseCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_code: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.responseCode),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallAllowedResponseCodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallAllowedResponseCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallAllowedResponseCodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseCode = value.responseCode;
    }
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: number[]; 
  public get responseCode() {
    return this.getNumberListAttribute('response_code');
  }
  public set responseCode(value: number[]) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface AppFirewallBlockingPage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#blocking_page AppFirewall#blocking_page}
  */
  readonly blockingPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#response_code AppFirewall#response_code}
  */
  readonly responseCode?: string;
}

export function appFirewallBlockingPageToTerraform(struct?: AppFirewallBlockingPageOutputReference | AppFirewallBlockingPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocking_page: cdktf.stringToTerraform(struct!.blockingPage),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function appFirewallBlockingPageToHclTerraform(struct?: AppFirewallBlockingPageOutputReference | AppFirewallBlockingPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocking_page: {
      value: cdktf.stringToHclTerraform(struct!.blockingPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallBlockingPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallBlockingPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockingPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingPage = this._blockingPage;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallBlockingPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockingPage = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockingPage = value.blockingPage;
      this._responseCode = value.responseCode;
    }
  }

  // blocking_page - computed: false, optional: true, required: false
  private _blockingPage?: string; 
  public get blockingPage() {
    return this.getStringAttribute('blocking_page');
  }
  public set blockingPage(value: string) {
    this._blockingPage = value;
  }
  public resetBlockingPage() {
    this._blockingPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingPageInput() {
    return this._blockingPage;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface AppFirewallCustomAnonymizationAnonymizationConfigCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#cookie_name AppFirewall#cookie_name}
  */
  readonly cookieName: string;
}

export function appFirewallCustomAnonymizationAnonymizationConfigCookieToTerraform(struct?: AppFirewallCustomAnonymizationAnonymizationConfigCookieOutputReference | AppFirewallCustomAnonymizationAnonymizationConfigCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
  }
}


export function appFirewallCustomAnonymizationAnonymizationConfigCookieToHclTerraform(struct?: AppFirewallCustomAnonymizationAnonymizationConfigCookieOutputReference | AppFirewallCustomAnonymizationAnonymizationConfigCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallCustomAnonymizationAnonymizationConfigCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallCustomAnonymizationAnonymizationConfigCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallCustomAnonymizationAnonymizationConfigCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieName = value.cookieName;
    }
  }

  // cookie_name - computed: false, optional: false, required: true
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }
}
export interface AppFirewallCustomAnonymizationAnonymizationConfigHttpHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#header_name AppFirewall#header_name}
  */
  readonly headerName: string;
}

export function appFirewallCustomAnonymizationAnonymizationConfigHttpHeaderToTerraform(struct?: AppFirewallCustomAnonymizationAnonymizationConfigHttpHeaderOutputReference | AppFirewallCustomAnonymizationAnonymizationConfigHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function appFirewallCustomAnonymizationAnonymizationConfigHttpHeaderToHclTerraform(struct?: AppFirewallCustomAnonymizationAnonymizationConfigHttpHeaderOutputReference | AppFirewallCustomAnonymizationAnonymizationConfigHttpHeader): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallCustomAnonymizationAnonymizationConfigHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallCustomAnonymizationAnonymizationConfigHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallCustomAnonymizationAnonymizationConfigHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerName = value.headerName;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}
export interface AppFirewallCustomAnonymizationAnonymizationConfigQueryParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#query_param_name AppFirewall#query_param_name}
  */
  readonly queryParamName: string;
}

export function appFirewallCustomAnonymizationAnonymizationConfigQueryParameterToTerraform(struct?: AppFirewallCustomAnonymizationAnonymizationConfigQueryParameterOutputReference | AppFirewallCustomAnonymizationAnonymizationConfigQueryParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_param_name: cdktf.stringToTerraform(struct!.queryParamName),
  }
}


export function appFirewallCustomAnonymizationAnonymizationConfigQueryParameterToHclTerraform(struct?: AppFirewallCustomAnonymizationAnonymizationConfigQueryParameterOutputReference | AppFirewallCustomAnonymizationAnonymizationConfigQueryParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_param_name: {
      value: cdktf.stringToHclTerraform(struct!.queryParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallCustomAnonymizationAnonymizationConfigQueryParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallCustomAnonymizationAnonymizationConfigQueryParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamName = this._queryParamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallCustomAnonymizationAnonymizationConfigQueryParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryParamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryParamName = value.queryParamName;
    }
  }

  // query_param_name - computed: false, optional: false, required: true
  private _queryParamName?: string; 
  public get queryParamName() {
    return this.getStringAttribute('query_param_name');
  }
  public set queryParamName(value: string) {
    this._queryParamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamNameInput() {
    return this._queryParamName;
  }
}
export interface AppFirewallCustomAnonymizationAnonymizationConfig {
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#cookie AppFirewall#cookie}
  */
  readonly cookie?: AppFirewallCustomAnonymizationAnonymizationConfigCookie;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#http_header AppFirewall#http_header}
  */
  readonly httpHeader?: AppFirewallCustomAnonymizationAnonymizationConfigHttpHeader;
  /**
  * query_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#query_parameter AppFirewall#query_parameter}
  */
  readonly queryParameter?: AppFirewallCustomAnonymizationAnonymizationConfigQueryParameter;
}

export function appFirewallCustomAnonymizationAnonymizationConfigToTerraform(struct?: AppFirewallCustomAnonymizationAnonymizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: appFirewallCustomAnonymizationAnonymizationConfigCookieToTerraform(struct!.cookie),
    http_header: appFirewallCustomAnonymizationAnonymizationConfigHttpHeaderToTerraform(struct!.httpHeader),
    query_parameter: appFirewallCustomAnonymizationAnonymizationConfigQueryParameterToTerraform(struct!.queryParameter),
  }
}


export function appFirewallCustomAnonymizationAnonymizationConfigToHclTerraform(struct?: AppFirewallCustomAnonymizationAnonymizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: appFirewallCustomAnonymizationAnonymizationConfigCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "AppFirewallCustomAnonymizationAnonymizationConfigCookieList",
    },
    http_header: {
      value: appFirewallCustomAnonymizationAnonymizationConfigHttpHeaderToHclTerraform(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "AppFirewallCustomAnonymizationAnonymizationConfigHttpHeaderList",
    },
    query_parameter: {
      value: appFirewallCustomAnonymizationAnonymizationConfigQueryParameterToHclTerraform(struct!.queryParameter),
      isBlock: true,
      type: "list",
      storageClassType: "AppFirewallCustomAnonymizationAnonymizationConfigQueryParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallCustomAnonymizationAnonymizationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppFirewallCustomAnonymizationAnonymizationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    if (this._queryParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameter = this._queryParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallCustomAnonymizationAnonymizationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie.internalValue = undefined;
      this._httpHeader.internalValue = undefined;
      this._queryParameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie.internalValue = value.cookie;
      this._httpHeader.internalValue = value.httpHeader;
      this._queryParameter.internalValue = value.queryParameter;
    }
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new AppFirewallCustomAnonymizationAnonymizationConfigCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: AppFirewallCustomAnonymizationAnonymizationConfigCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new AppFirewallCustomAnonymizationAnonymizationConfigHttpHeaderOutputReference(this, "http_header");
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: AppFirewallCustomAnonymizationAnonymizationConfigHttpHeader) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }

  // query_parameter - computed: false, optional: true, required: false
  private _queryParameter = new AppFirewallCustomAnonymizationAnonymizationConfigQueryParameterOutputReference(this, "query_parameter");
  public get queryParameter() {
    return this._queryParameter;
  }
  public putQueryParameter(value: AppFirewallCustomAnonymizationAnonymizationConfigQueryParameter) {
    this._queryParameter.internalValue = value;
  }
  public resetQueryParameter() {
    this._queryParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterInput() {
    return this._queryParameter.internalValue;
  }
}

export class AppFirewallCustomAnonymizationAnonymizationConfigList extends cdktf.ComplexList {
  public internalValue? : AppFirewallCustomAnonymizationAnonymizationConfig[] | cdktf.IResolvable

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
  public get(index: number): AppFirewallCustomAnonymizationAnonymizationConfigOutputReference {
    return new AppFirewallCustomAnonymizationAnonymizationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppFirewallCustomAnonymization {
  /**
  * anonymization_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#anonymization_config AppFirewall#anonymization_config}
  */
  readonly anonymizationConfig: AppFirewallCustomAnonymizationAnonymizationConfig[] | cdktf.IResolvable;
}

export function appFirewallCustomAnonymizationToTerraform(struct?: AppFirewallCustomAnonymizationOutputReference | AppFirewallCustomAnonymization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anonymization_config: cdktf.listMapper(appFirewallCustomAnonymizationAnonymizationConfigToTerraform, true)(struct!.anonymizationConfig),
  }
}


export function appFirewallCustomAnonymizationToHclTerraform(struct?: AppFirewallCustomAnonymizationOutputReference | AppFirewallCustomAnonymization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anonymization_config: {
      value: cdktf.listMapperHcl(appFirewallCustomAnonymizationAnonymizationConfigToHclTerraform, true)(struct!.anonymizationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppFirewallCustomAnonymizationAnonymizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallCustomAnonymizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallCustomAnonymization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonymizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymizationConfig = this._anonymizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallCustomAnonymization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anonymizationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anonymizationConfig.internalValue = value.anonymizationConfig;
    }
  }

  // anonymization_config - computed: false, optional: false, required: true
  private _anonymizationConfig = new AppFirewallCustomAnonymizationAnonymizationConfigList(this, "anonymization_config", false);
  public get anonymizationConfig() {
    return this._anonymizationConfig;
  }
  public putAnonymizationConfig(value: AppFirewallCustomAnonymizationAnonymizationConfig[] | cdktf.IResolvable) {
    this._anonymizationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymizationConfigInput() {
    return this._anonymizationConfig.internalValue;
  }
}
export interface AppFirewallDetectionSettingsBotProtectionSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#good_bot_action AppFirewall#good_bot_action}
  */
  readonly goodBotAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#malicious_bot_action AppFirewall#malicious_bot_action}
  */
  readonly maliciousBotAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#suspicious_bot_action AppFirewall#suspicious_bot_action}
  */
  readonly suspiciousBotAction?: string;
}

export function appFirewallDetectionSettingsBotProtectionSettingToTerraform(struct?: AppFirewallDetectionSettingsBotProtectionSettingOutputReference | AppFirewallDetectionSettingsBotProtectionSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    good_bot_action: cdktf.stringToTerraform(struct!.goodBotAction),
    malicious_bot_action: cdktf.stringToTerraform(struct!.maliciousBotAction),
    suspicious_bot_action: cdktf.stringToTerraform(struct!.suspiciousBotAction),
  }
}


export function appFirewallDetectionSettingsBotProtectionSettingToHclTerraform(struct?: AppFirewallDetectionSettingsBotProtectionSettingOutputReference | AppFirewallDetectionSettingsBotProtectionSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    good_bot_action: {
      value: cdktf.stringToHclTerraform(struct!.goodBotAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malicious_bot_action: {
      value: cdktf.stringToHclTerraform(struct!.maliciousBotAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspicious_bot_action: {
      value: cdktf.stringToHclTerraform(struct!.suspiciousBotAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallDetectionSettingsBotProtectionSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallDetectionSettingsBotProtectionSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._goodBotAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodBotAction = this._goodBotAction;
    }
    if (this._maliciousBotAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maliciousBotAction = this._maliciousBotAction;
    }
    if (this._suspiciousBotAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspiciousBotAction = this._suspiciousBotAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallDetectionSettingsBotProtectionSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._goodBotAction = undefined;
      this._maliciousBotAction = undefined;
      this._suspiciousBotAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._goodBotAction = value.goodBotAction;
      this._maliciousBotAction = value.maliciousBotAction;
      this._suspiciousBotAction = value.suspiciousBotAction;
    }
  }

  // good_bot_action - computed: false, optional: true, required: false
  private _goodBotAction?: string; 
  public get goodBotAction() {
    return this.getStringAttribute('good_bot_action');
  }
  public set goodBotAction(value: string) {
    this._goodBotAction = value;
  }
  public resetGoodBotAction() {
    this._goodBotAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodBotActionInput() {
    return this._goodBotAction;
  }

  // malicious_bot_action - computed: false, optional: true, required: false
  private _maliciousBotAction?: string; 
  public get maliciousBotAction() {
    return this.getStringAttribute('malicious_bot_action');
  }
  public set maliciousBotAction(value: string) {
    this._maliciousBotAction = value;
  }
  public resetMaliciousBotAction() {
    this._maliciousBotAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousBotActionInput() {
    return this._maliciousBotAction;
  }

  // suspicious_bot_action - computed: false, optional: true, required: false
  private _suspiciousBotAction?: string; 
  public get suspiciousBotAction() {
    return this.getStringAttribute('suspicious_bot_action');
  }
  public set suspiciousBotAction(value: string) {
    this._suspiciousBotAction = value;
  }
  public resetSuspiciousBotAction() {
    this._suspiciousBotAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspiciousBotActionInput() {
    return this._suspiciousBotAction;
  }
}
export interface AppFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#disabled_attack_types AppFirewall#disabled_attack_types}
  */
  readonly disabledAttackTypes: string[];
}

export function appFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettingsToTerraform(struct?: AppFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettingsOutputReference | AppFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_attack_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledAttackTypes),
  }
}


export function appFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettingsToHclTerraform(struct?: AppFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettingsOutputReference | AppFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled_attack_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledAttackTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledAttackTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledAttackTypes = this._disabledAttackTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabledAttackTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabledAttackTypes = value.disabledAttackTypes;
    }
  }

  // disabled_attack_types - computed: false, optional: false, required: true
  private _disabledAttackTypes?: string[]; 
  public get disabledAttackTypes() {
    return this.getListAttribute('disabled_attack_types');
  }
  public set disabledAttackTypes(value: string[]) {
    this._disabledAttackTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledAttackTypesInput() {
    return this._disabledAttackTypes;
  }
}
export interface AppFirewallDetectionSettingsSignatureSelectionSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#default_attack_type_settings AppFirewall#default_attack_type_settings}
  */
  readonly defaultAttackTypeSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#high_medium_accuracy_signatures AppFirewall#high_medium_accuracy_signatures}
  */
  readonly highMediumAccuracySignatures?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#high_medium_low_accuracy_signatures AppFirewall#high_medium_low_accuracy_signatures}
  */
  readonly highMediumLowAccuracySignatures?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#only_high_accuracy_signatures AppFirewall#only_high_accuracy_signatures}
  */
  readonly onlyHighAccuracySignatures?: boolean | cdktf.IResolvable;
  /**
  * attack_type_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#attack_type_settings AppFirewall#attack_type_settings}
  */
  readonly attackTypeSettings?: AppFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettings;
}

export function appFirewallDetectionSettingsSignatureSelectionSettingToTerraform(struct?: AppFirewallDetectionSettingsSignatureSelectionSettingOutputReference | AppFirewallDetectionSettingsSignatureSelectionSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_attack_type_settings: cdktf.booleanToTerraform(struct!.defaultAttackTypeSettings),
    high_medium_accuracy_signatures: cdktf.booleanToTerraform(struct!.highMediumAccuracySignatures),
    high_medium_low_accuracy_signatures: cdktf.booleanToTerraform(struct!.highMediumLowAccuracySignatures),
    only_high_accuracy_signatures: cdktf.booleanToTerraform(struct!.onlyHighAccuracySignatures),
    attack_type_settings: appFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettingsToTerraform(struct!.attackTypeSettings),
  }
}


export function appFirewallDetectionSettingsSignatureSelectionSettingToHclTerraform(struct?: AppFirewallDetectionSettingsSignatureSelectionSettingOutputReference | AppFirewallDetectionSettingsSignatureSelectionSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_attack_type_settings: {
      value: cdktf.booleanToHclTerraform(struct!.defaultAttackTypeSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    high_medium_accuracy_signatures: {
      value: cdktf.booleanToHclTerraform(struct!.highMediumAccuracySignatures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    high_medium_low_accuracy_signatures: {
      value: cdktf.booleanToHclTerraform(struct!.highMediumLowAccuracySignatures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_high_accuracy_signatures: {
      value: cdktf.booleanToHclTerraform(struct!.onlyHighAccuracySignatures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    attack_type_settings: {
      value: appFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettingsToHclTerraform(struct!.attackTypeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AppFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallDetectionSettingsSignatureSelectionSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallDetectionSettingsSignatureSelectionSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAttackTypeSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAttackTypeSettings = this._defaultAttackTypeSettings;
    }
    if (this._highMediumAccuracySignatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.highMediumAccuracySignatures = this._highMediumAccuracySignatures;
    }
    if (this._highMediumLowAccuracySignatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.highMediumLowAccuracySignatures = this._highMediumLowAccuracySignatures;
    }
    if (this._onlyHighAccuracySignatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyHighAccuracySignatures = this._onlyHighAccuracySignatures;
    }
    if (this._attackTypeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackTypeSettings = this._attackTypeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallDetectionSettingsSignatureSelectionSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultAttackTypeSettings = undefined;
      this._highMediumAccuracySignatures = undefined;
      this._highMediumLowAccuracySignatures = undefined;
      this._onlyHighAccuracySignatures = undefined;
      this._attackTypeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultAttackTypeSettings = value.defaultAttackTypeSettings;
      this._highMediumAccuracySignatures = value.highMediumAccuracySignatures;
      this._highMediumLowAccuracySignatures = value.highMediumLowAccuracySignatures;
      this._onlyHighAccuracySignatures = value.onlyHighAccuracySignatures;
      this._attackTypeSettings.internalValue = value.attackTypeSettings;
    }
  }

  // default_attack_type_settings - computed: false, optional: true, required: false
  private _defaultAttackTypeSettings?: boolean | cdktf.IResolvable; 
  public get defaultAttackTypeSettings() {
    return this.getBooleanAttribute('default_attack_type_settings');
  }
  public set defaultAttackTypeSettings(value: boolean | cdktf.IResolvable) {
    this._defaultAttackTypeSettings = value;
  }
  public resetDefaultAttackTypeSettings() {
    this._defaultAttackTypeSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAttackTypeSettingsInput() {
    return this._defaultAttackTypeSettings;
  }

  // high_medium_accuracy_signatures - computed: false, optional: true, required: false
  private _highMediumAccuracySignatures?: boolean | cdktf.IResolvable; 
  public get highMediumAccuracySignatures() {
    return this.getBooleanAttribute('high_medium_accuracy_signatures');
  }
  public set highMediumAccuracySignatures(value: boolean | cdktf.IResolvable) {
    this._highMediumAccuracySignatures = value;
  }
  public resetHighMediumAccuracySignatures() {
    this._highMediumAccuracySignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highMediumAccuracySignaturesInput() {
    return this._highMediumAccuracySignatures;
  }

  // high_medium_low_accuracy_signatures - computed: false, optional: true, required: false
  private _highMediumLowAccuracySignatures?: boolean | cdktf.IResolvable; 
  public get highMediumLowAccuracySignatures() {
    return this.getBooleanAttribute('high_medium_low_accuracy_signatures');
  }
  public set highMediumLowAccuracySignatures(value: boolean | cdktf.IResolvable) {
    this._highMediumLowAccuracySignatures = value;
  }
  public resetHighMediumLowAccuracySignatures() {
    this._highMediumLowAccuracySignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highMediumLowAccuracySignaturesInput() {
    return this._highMediumLowAccuracySignatures;
  }

  // only_high_accuracy_signatures - computed: false, optional: true, required: false
  private _onlyHighAccuracySignatures?: boolean | cdktf.IResolvable; 
  public get onlyHighAccuracySignatures() {
    return this.getBooleanAttribute('only_high_accuracy_signatures');
  }
  public set onlyHighAccuracySignatures(value: boolean | cdktf.IResolvable) {
    this._onlyHighAccuracySignatures = value;
  }
  public resetOnlyHighAccuracySignatures() {
    this._onlyHighAccuracySignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyHighAccuracySignaturesInput() {
    return this._onlyHighAccuracySignatures;
  }

  // attack_type_settings - computed: false, optional: true, required: false
  private _attackTypeSettings = new AppFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettingsOutputReference(this, "attack_type_settings");
  public get attackTypeSettings() {
    return this._attackTypeSettings;
  }
  public putAttackTypeSettings(value: AppFirewallDetectionSettingsSignatureSelectionSettingAttackTypeSettings) {
    this._attackTypeSettings.internalValue = value;
  }
  public resetAttackTypeSettings() {
    this._attackTypeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTypeSettingsInput() {
    return this._attackTypeSettings.internalValue;
  }
}
export interface AppFirewallDetectionSettingsStageNewAndUpdatedSignatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#staging_period AppFirewall#staging_period}
  */
  readonly stagingPeriod: number;
}

export function appFirewallDetectionSettingsStageNewAndUpdatedSignaturesToTerraform(struct?: AppFirewallDetectionSettingsStageNewAndUpdatedSignaturesOutputReference | AppFirewallDetectionSettingsStageNewAndUpdatedSignatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    staging_period: cdktf.numberToTerraform(struct!.stagingPeriod),
  }
}


export function appFirewallDetectionSettingsStageNewAndUpdatedSignaturesToHclTerraform(struct?: AppFirewallDetectionSettingsStageNewAndUpdatedSignaturesOutputReference | AppFirewallDetectionSettingsStageNewAndUpdatedSignatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    staging_period: {
      value: cdktf.numberToHclTerraform(struct!.stagingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallDetectionSettingsStageNewAndUpdatedSignaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallDetectionSettingsStageNewAndUpdatedSignatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stagingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingPeriod = this._stagingPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallDetectionSettingsStageNewAndUpdatedSignatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stagingPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stagingPeriod = value.stagingPeriod;
    }
  }

  // staging_period - computed: false, optional: false, required: true
  private _stagingPeriod?: number; 
  public get stagingPeriod() {
    return this.getNumberAttribute('staging_period');
  }
  public set stagingPeriod(value: number) {
    this._stagingPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingPeriodInput() {
    return this._stagingPeriod;
  }
}
export interface AppFirewallDetectionSettingsStageNewSignatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#staging_period AppFirewall#staging_period}
  */
  readonly stagingPeriod: number;
}

export function appFirewallDetectionSettingsStageNewSignaturesToTerraform(struct?: AppFirewallDetectionSettingsStageNewSignaturesOutputReference | AppFirewallDetectionSettingsStageNewSignatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    staging_period: cdktf.numberToTerraform(struct!.stagingPeriod),
  }
}


export function appFirewallDetectionSettingsStageNewSignaturesToHclTerraform(struct?: AppFirewallDetectionSettingsStageNewSignaturesOutputReference | AppFirewallDetectionSettingsStageNewSignatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    staging_period: {
      value: cdktf.numberToHclTerraform(struct!.stagingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallDetectionSettingsStageNewSignaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallDetectionSettingsStageNewSignatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stagingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingPeriod = this._stagingPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallDetectionSettingsStageNewSignatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stagingPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stagingPeriod = value.stagingPeriod;
    }
  }

  // staging_period - computed: false, optional: false, required: true
  private _stagingPeriod?: number; 
  public get stagingPeriod() {
    return this.getNumberAttribute('staging_period');
  }
  public set stagingPeriod(value: number) {
    this._stagingPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingPeriodInput() {
    return this._stagingPeriod;
  }
}
export interface AppFirewallDetectionSettingsViolationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#disabled_violation_types AppFirewall#disabled_violation_types}
  */
  readonly disabledViolationTypes: string[];
}

export function appFirewallDetectionSettingsViolationSettingsToTerraform(struct?: AppFirewallDetectionSettingsViolationSettingsOutputReference | AppFirewallDetectionSettingsViolationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_violation_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledViolationTypes),
  }
}


export function appFirewallDetectionSettingsViolationSettingsToHclTerraform(struct?: AppFirewallDetectionSettingsViolationSettingsOutputReference | AppFirewallDetectionSettingsViolationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled_violation_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledViolationTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallDetectionSettingsViolationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallDetectionSettingsViolationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledViolationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledViolationTypes = this._disabledViolationTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallDetectionSettingsViolationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabledViolationTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabledViolationTypes = value.disabledViolationTypes;
    }
  }

  // disabled_violation_types - computed: false, optional: false, required: true
  private _disabledViolationTypes?: string[]; 
  public get disabledViolationTypes() {
    return this.getListAttribute('disabled_violation_types');
  }
  public set disabledViolationTypes(value: string[]) {
    this._disabledViolationTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledViolationTypesInput() {
    return this._disabledViolationTypes;
  }
}
export interface AppFirewallDetectionSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#default_bot_setting AppFirewall#default_bot_setting}
  */
  readonly defaultBotSetting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#default_violation_settings AppFirewall#default_violation_settings}
  */
  readonly defaultViolationSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#disable_staging AppFirewall#disable_staging}
  */
  readonly disableStaging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#disable_suppression AppFirewall#disable_suppression}
  */
  readonly disableSuppression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#disable_threat_campaigns AppFirewall#disable_threat_campaigns}
  */
  readonly disableThreatCampaigns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#enable_suppression AppFirewall#enable_suppression}
  */
  readonly enableSuppression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#enable_threat_campaigns AppFirewall#enable_threat_campaigns}
  */
  readonly enableThreatCampaigns?: boolean | cdktf.IResolvable;
  /**
  * bot_protection_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#bot_protection_setting AppFirewall#bot_protection_setting}
  */
  readonly botProtectionSetting?: AppFirewallDetectionSettingsBotProtectionSetting;
  /**
  * signature_selection_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#signature_selection_setting AppFirewall#signature_selection_setting}
  */
  readonly signatureSelectionSetting?: AppFirewallDetectionSettingsSignatureSelectionSetting;
  /**
  * stage_new_and_updated_signatures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#stage_new_and_updated_signatures AppFirewall#stage_new_and_updated_signatures}
  */
  readonly stageNewAndUpdatedSignatures?: AppFirewallDetectionSettingsStageNewAndUpdatedSignatures;
  /**
  * stage_new_signatures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#stage_new_signatures AppFirewall#stage_new_signatures}
  */
  readonly stageNewSignatures?: AppFirewallDetectionSettingsStageNewSignatures;
  /**
  * violation_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#violation_settings AppFirewall#violation_settings}
  */
  readonly violationSettings?: AppFirewallDetectionSettingsViolationSettings;
}

export function appFirewallDetectionSettingsToTerraform(struct?: AppFirewallDetectionSettingsOutputReference | AppFirewallDetectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_bot_setting: cdktf.booleanToTerraform(struct!.defaultBotSetting),
    default_violation_settings: cdktf.booleanToTerraform(struct!.defaultViolationSettings),
    disable_staging: cdktf.booleanToTerraform(struct!.disableStaging),
    disable_suppression: cdktf.booleanToTerraform(struct!.disableSuppression),
    disable_threat_campaigns: cdktf.booleanToTerraform(struct!.disableThreatCampaigns),
    enable_suppression: cdktf.booleanToTerraform(struct!.enableSuppression),
    enable_threat_campaigns: cdktf.booleanToTerraform(struct!.enableThreatCampaigns),
    bot_protection_setting: appFirewallDetectionSettingsBotProtectionSettingToTerraform(struct!.botProtectionSetting),
    signature_selection_setting: appFirewallDetectionSettingsSignatureSelectionSettingToTerraform(struct!.signatureSelectionSetting),
    stage_new_and_updated_signatures: appFirewallDetectionSettingsStageNewAndUpdatedSignaturesToTerraform(struct!.stageNewAndUpdatedSignatures),
    stage_new_signatures: appFirewallDetectionSettingsStageNewSignaturesToTerraform(struct!.stageNewSignatures),
    violation_settings: appFirewallDetectionSettingsViolationSettingsToTerraform(struct!.violationSettings),
  }
}


export function appFirewallDetectionSettingsToHclTerraform(struct?: AppFirewallDetectionSettingsOutputReference | AppFirewallDetectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_bot_setting: {
      value: cdktf.booleanToHclTerraform(struct!.defaultBotSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_violation_settings: {
      value: cdktf.booleanToHclTerraform(struct!.defaultViolationSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_staging: {
      value: cdktf.booleanToHclTerraform(struct!.disableStaging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_suppression: {
      value: cdktf.booleanToHclTerraform(struct!.disableSuppression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_threat_campaigns: {
      value: cdktf.booleanToHclTerraform(struct!.disableThreatCampaigns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_suppression: {
      value: cdktf.booleanToHclTerraform(struct!.enableSuppression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_threat_campaigns: {
      value: cdktf.booleanToHclTerraform(struct!.enableThreatCampaigns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bot_protection_setting: {
      value: appFirewallDetectionSettingsBotProtectionSettingToHclTerraform(struct!.botProtectionSetting),
      isBlock: true,
      type: "list",
      storageClassType: "AppFirewallDetectionSettingsBotProtectionSettingList",
    },
    signature_selection_setting: {
      value: appFirewallDetectionSettingsSignatureSelectionSettingToHclTerraform(struct!.signatureSelectionSetting),
      isBlock: true,
      type: "list",
      storageClassType: "AppFirewallDetectionSettingsSignatureSelectionSettingList",
    },
    stage_new_and_updated_signatures: {
      value: appFirewallDetectionSettingsStageNewAndUpdatedSignaturesToHclTerraform(struct!.stageNewAndUpdatedSignatures),
      isBlock: true,
      type: "list",
      storageClassType: "AppFirewallDetectionSettingsStageNewAndUpdatedSignaturesList",
    },
    stage_new_signatures: {
      value: appFirewallDetectionSettingsStageNewSignaturesToHclTerraform(struct!.stageNewSignatures),
      isBlock: true,
      type: "list",
      storageClassType: "AppFirewallDetectionSettingsStageNewSignaturesList",
    },
    violation_settings: {
      value: appFirewallDetectionSettingsViolationSettingsToHclTerraform(struct!.violationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AppFirewallDetectionSettingsViolationSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppFirewallDetectionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppFirewallDetectionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBotSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBotSetting = this._defaultBotSetting;
    }
    if (this._defaultViolationSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultViolationSettings = this._defaultViolationSettings;
    }
    if (this._disableStaging !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStaging = this._disableStaging;
    }
    if (this._disableSuppression !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSuppression = this._disableSuppression;
    }
    if (this._disableThreatCampaigns !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableThreatCampaigns = this._disableThreatCampaigns;
    }
    if (this._enableSuppression !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSuppression = this._enableSuppression;
    }
    if (this._enableThreatCampaigns !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableThreatCampaigns = this._enableThreatCampaigns;
    }
    if (this._botProtectionSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botProtectionSetting = this._botProtectionSetting?.internalValue;
    }
    if (this._signatureSelectionSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureSelectionSetting = this._signatureSelectionSetting?.internalValue;
    }
    if (this._stageNewAndUpdatedSignatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageNewAndUpdatedSignatures = this._stageNewAndUpdatedSignatures?.internalValue;
    }
    if (this._stageNewSignatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageNewSignatures = this._stageNewSignatures?.internalValue;
    }
    if (this._violationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.violationSettings = this._violationSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppFirewallDetectionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultBotSetting = undefined;
      this._defaultViolationSettings = undefined;
      this._disableStaging = undefined;
      this._disableSuppression = undefined;
      this._disableThreatCampaigns = undefined;
      this._enableSuppression = undefined;
      this._enableThreatCampaigns = undefined;
      this._botProtectionSetting.internalValue = undefined;
      this._signatureSelectionSetting.internalValue = undefined;
      this._stageNewAndUpdatedSignatures.internalValue = undefined;
      this._stageNewSignatures.internalValue = undefined;
      this._violationSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultBotSetting = value.defaultBotSetting;
      this._defaultViolationSettings = value.defaultViolationSettings;
      this._disableStaging = value.disableStaging;
      this._disableSuppression = value.disableSuppression;
      this._disableThreatCampaigns = value.disableThreatCampaigns;
      this._enableSuppression = value.enableSuppression;
      this._enableThreatCampaigns = value.enableThreatCampaigns;
      this._botProtectionSetting.internalValue = value.botProtectionSetting;
      this._signatureSelectionSetting.internalValue = value.signatureSelectionSetting;
      this._stageNewAndUpdatedSignatures.internalValue = value.stageNewAndUpdatedSignatures;
      this._stageNewSignatures.internalValue = value.stageNewSignatures;
      this._violationSettings.internalValue = value.violationSettings;
    }
  }

  // default_bot_setting - computed: false, optional: true, required: false
  private _defaultBotSetting?: boolean | cdktf.IResolvable; 
  public get defaultBotSetting() {
    return this.getBooleanAttribute('default_bot_setting');
  }
  public set defaultBotSetting(value: boolean | cdktf.IResolvable) {
    this._defaultBotSetting = value;
  }
  public resetDefaultBotSetting() {
    this._defaultBotSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBotSettingInput() {
    return this._defaultBotSetting;
  }

  // default_violation_settings - computed: false, optional: true, required: false
  private _defaultViolationSettings?: boolean | cdktf.IResolvable; 
  public get defaultViolationSettings() {
    return this.getBooleanAttribute('default_violation_settings');
  }
  public set defaultViolationSettings(value: boolean | cdktf.IResolvable) {
    this._defaultViolationSettings = value;
  }
  public resetDefaultViolationSettings() {
    this._defaultViolationSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultViolationSettingsInput() {
    return this._defaultViolationSettings;
  }

  // disable_staging - computed: false, optional: true, required: false
  private _disableStaging?: boolean | cdktf.IResolvable; 
  public get disableStaging() {
    return this.getBooleanAttribute('disable_staging');
  }
  public set disableStaging(value: boolean | cdktf.IResolvable) {
    this._disableStaging = value;
  }
  public resetDisableStaging() {
    this._disableStaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStagingInput() {
    return this._disableStaging;
  }

  // disable_suppression - computed: false, optional: true, required: false
  private _disableSuppression?: boolean | cdktf.IResolvable; 
  public get disableSuppression() {
    return this.getBooleanAttribute('disable_suppression');
  }
  public set disableSuppression(value: boolean | cdktf.IResolvable) {
    this._disableSuppression = value;
  }
  public resetDisableSuppression() {
    this._disableSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSuppressionInput() {
    return this._disableSuppression;
  }

  // disable_threat_campaigns - computed: false, optional: true, required: false
  private _disableThreatCampaigns?: boolean | cdktf.IResolvable; 
  public get disableThreatCampaigns() {
    return this.getBooleanAttribute('disable_threat_campaigns');
  }
  public set disableThreatCampaigns(value: boolean | cdktf.IResolvable) {
    this._disableThreatCampaigns = value;
  }
  public resetDisableThreatCampaigns() {
    this._disableThreatCampaigns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableThreatCampaignsInput() {
    return this._disableThreatCampaigns;
  }

  // enable_suppression - computed: false, optional: true, required: false
  private _enableSuppression?: boolean | cdktf.IResolvable; 
  public get enableSuppression() {
    return this.getBooleanAttribute('enable_suppression');
  }
  public set enableSuppression(value: boolean | cdktf.IResolvable) {
    this._enableSuppression = value;
  }
  public resetEnableSuppression() {
    this._enableSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSuppressionInput() {
    return this._enableSuppression;
  }

  // enable_threat_campaigns - computed: false, optional: true, required: false
  private _enableThreatCampaigns?: boolean | cdktf.IResolvable; 
  public get enableThreatCampaigns() {
    return this.getBooleanAttribute('enable_threat_campaigns');
  }
  public set enableThreatCampaigns(value: boolean | cdktf.IResolvable) {
    this._enableThreatCampaigns = value;
  }
  public resetEnableThreatCampaigns() {
    this._enableThreatCampaigns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableThreatCampaignsInput() {
    return this._enableThreatCampaigns;
  }

  // bot_protection_setting - computed: false, optional: true, required: false
  private _botProtectionSetting = new AppFirewallDetectionSettingsBotProtectionSettingOutputReference(this, "bot_protection_setting");
  public get botProtectionSetting() {
    return this._botProtectionSetting;
  }
  public putBotProtectionSetting(value: AppFirewallDetectionSettingsBotProtectionSetting) {
    this._botProtectionSetting.internalValue = value;
  }
  public resetBotProtectionSetting() {
    this._botProtectionSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botProtectionSettingInput() {
    return this._botProtectionSetting.internalValue;
  }

  // signature_selection_setting - computed: false, optional: true, required: false
  private _signatureSelectionSetting = new AppFirewallDetectionSettingsSignatureSelectionSettingOutputReference(this, "signature_selection_setting");
  public get signatureSelectionSetting() {
    return this._signatureSelectionSetting;
  }
  public putSignatureSelectionSetting(value: AppFirewallDetectionSettingsSignatureSelectionSetting) {
    this._signatureSelectionSetting.internalValue = value;
  }
  public resetSignatureSelectionSetting() {
    this._signatureSelectionSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureSelectionSettingInput() {
    return this._signatureSelectionSetting.internalValue;
  }

  // stage_new_and_updated_signatures - computed: false, optional: true, required: false
  private _stageNewAndUpdatedSignatures = new AppFirewallDetectionSettingsStageNewAndUpdatedSignaturesOutputReference(this, "stage_new_and_updated_signatures");
  public get stageNewAndUpdatedSignatures() {
    return this._stageNewAndUpdatedSignatures;
  }
  public putStageNewAndUpdatedSignatures(value: AppFirewallDetectionSettingsStageNewAndUpdatedSignatures) {
    this._stageNewAndUpdatedSignatures.internalValue = value;
  }
  public resetStageNewAndUpdatedSignatures() {
    this._stageNewAndUpdatedSignatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNewAndUpdatedSignaturesInput() {
    return this._stageNewAndUpdatedSignatures.internalValue;
  }

  // stage_new_signatures - computed: false, optional: true, required: false
  private _stageNewSignatures = new AppFirewallDetectionSettingsStageNewSignaturesOutputReference(this, "stage_new_signatures");
  public get stageNewSignatures() {
    return this._stageNewSignatures;
  }
  public putStageNewSignatures(value: AppFirewallDetectionSettingsStageNewSignatures) {
    this._stageNewSignatures.internalValue = value;
  }
  public resetStageNewSignatures() {
    this._stageNewSignatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNewSignaturesInput() {
    return this._stageNewSignatures.internalValue;
  }

  // violation_settings - computed: false, optional: true, required: false
  private _violationSettings = new AppFirewallDetectionSettingsViolationSettingsOutputReference(this, "violation_settings");
  public get violationSettings() {
    return this._violationSettings;
  }
  public putViolationSettings(value: AppFirewallDetectionSettingsViolationSettings) {
    this._violationSettings.internalValue = value;
  }
  public resetViolationSettings() {
    this._violationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationSettingsInput() {
    return this._violationSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall volterra_app_firewall}
*/
export class AppFirewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_app_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppFirewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppFirewall to import
  * @param importFromId The id of the existing AppFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_app_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_firewall volterra_app_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: AppFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_app_firewall',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAllResponseCodes = config.allowAllResponseCodes;
    this._annotations = config.annotations;
    this._blocking = config.blocking;
    this._defaultAnonymization = config.defaultAnonymization;
    this._defaultDetectionSettings = config.defaultDetectionSettings;
    this._description = config.description;
    this._disable = config.disable;
    this._disableAnonymization = config.disableAnonymization;
    this._id = config.id;
    this._labels = config.labels;
    this._monitoring = config.monitoring;
    this._name = config.name;
    this._namespace = config.namespace;
    this._useDefaultBlockingPage = config.useDefaultBlockingPage;
    this._aiRiskBasedBlocking.internalValue = config.aiRiskBasedBlocking;
    this._allowedResponseCodes.internalValue = config.allowedResponseCodes;
    this._blockingPage.internalValue = config.blockingPage;
    this._customAnonymization.internalValue = config.customAnonymization;
    this._detectionSettings.internalValue = config.detectionSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_all_response_codes - computed: false, optional: true, required: false
  private _allowAllResponseCodes?: boolean | cdktf.IResolvable; 
  public get allowAllResponseCodes() {
    return this.getBooleanAttribute('allow_all_response_codes');
  }
  public set allowAllResponseCodes(value: boolean | cdktf.IResolvable) {
    this._allowAllResponseCodes = value;
  }
  public resetAllowAllResponseCodes() {
    this._allowAllResponseCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllResponseCodesInput() {
    return this._allowAllResponseCodes;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // blocking - computed: false, optional: true, required: false
  private _blocking?: boolean | cdktf.IResolvable; 
  public get blocking() {
    return this.getBooleanAttribute('blocking');
  }
  public set blocking(value: boolean | cdktf.IResolvable) {
    this._blocking = value;
  }
  public resetBlocking() {
    this._blocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingInput() {
    return this._blocking;
  }

  // default_anonymization - computed: false, optional: true, required: false
  private _defaultAnonymization?: boolean | cdktf.IResolvable; 
  public get defaultAnonymization() {
    return this.getBooleanAttribute('default_anonymization');
  }
  public set defaultAnonymization(value: boolean | cdktf.IResolvable) {
    this._defaultAnonymization = value;
  }
  public resetDefaultAnonymization() {
    this._defaultAnonymization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAnonymizationInput() {
    return this._defaultAnonymization;
  }

  // default_detection_settings - computed: false, optional: true, required: false
  private _defaultDetectionSettings?: boolean | cdktf.IResolvable; 
  public get defaultDetectionSettings() {
    return this.getBooleanAttribute('default_detection_settings');
  }
  public set defaultDetectionSettings(value: boolean | cdktf.IResolvable) {
    this._defaultDetectionSettings = value;
  }
  public resetDefaultDetectionSettings() {
    this._defaultDetectionSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDetectionSettingsInput() {
    return this._defaultDetectionSettings;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // disable_anonymization - computed: false, optional: true, required: false
  private _disableAnonymization?: boolean | cdktf.IResolvable; 
  public get disableAnonymization() {
    return this.getBooleanAttribute('disable_anonymization');
  }
  public set disableAnonymization(value: boolean | cdktf.IResolvable) {
    this._disableAnonymization = value;
  }
  public resetDisableAnonymization() {
    this._disableAnonymization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAnonymizationInput() {
    return this._disableAnonymization;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: boolean | cdktf.IResolvable; 
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean | cdktf.IResolvable) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // use_default_blocking_page - computed: false, optional: true, required: false
  private _useDefaultBlockingPage?: boolean | cdktf.IResolvable; 
  public get useDefaultBlockingPage() {
    return this.getBooleanAttribute('use_default_blocking_page');
  }
  public set useDefaultBlockingPage(value: boolean | cdktf.IResolvable) {
    this._useDefaultBlockingPage = value;
  }
  public resetUseDefaultBlockingPage() {
    this._useDefaultBlockingPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultBlockingPageInput() {
    return this._useDefaultBlockingPage;
  }

  // ai_risk_based_blocking - computed: false, optional: true, required: false
  private _aiRiskBasedBlocking = new AppFirewallAiRiskBasedBlockingOutputReference(this, "ai_risk_based_blocking");
  public get aiRiskBasedBlocking() {
    return this._aiRiskBasedBlocking;
  }
  public putAiRiskBasedBlocking(value: AppFirewallAiRiskBasedBlocking) {
    this._aiRiskBasedBlocking.internalValue = value;
  }
  public resetAiRiskBasedBlocking() {
    this._aiRiskBasedBlocking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiRiskBasedBlockingInput() {
    return this._aiRiskBasedBlocking.internalValue;
  }

  // allowed_response_codes - computed: false, optional: true, required: false
  private _allowedResponseCodes = new AppFirewallAllowedResponseCodesOutputReference(this, "allowed_response_codes");
  public get allowedResponseCodes() {
    return this._allowedResponseCodes;
  }
  public putAllowedResponseCodes(value: AppFirewallAllowedResponseCodes) {
    this._allowedResponseCodes.internalValue = value;
  }
  public resetAllowedResponseCodes() {
    this._allowedResponseCodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedResponseCodesInput() {
    return this._allowedResponseCodes.internalValue;
  }

  // blocking_page - computed: false, optional: true, required: false
  private _blockingPage = new AppFirewallBlockingPageOutputReference(this, "blocking_page");
  public get blockingPage() {
    return this._blockingPage;
  }
  public putBlockingPage(value: AppFirewallBlockingPage) {
    this._blockingPage.internalValue = value;
  }
  public resetBlockingPage() {
    this._blockingPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingPageInput() {
    return this._blockingPage.internalValue;
  }

  // custom_anonymization - computed: false, optional: true, required: false
  private _customAnonymization = new AppFirewallCustomAnonymizationOutputReference(this, "custom_anonymization");
  public get customAnonymization() {
    return this._customAnonymization;
  }
  public putCustomAnonymization(value: AppFirewallCustomAnonymization) {
    this._customAnonymization.internalValue = value;
  }
  public resetCustomAnonymization() {
    this._customAnonymization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAnonymizationInput() {
    return this._customAnonymization.internalValue;
  }

  // detection_settings - computed: false, optional: true, required: false
  private _detectionSettings = new AppFirewallDetectionSettingsOutputReference(this, "detection_settings");
  public get detectionSettings() {
    return this._detectionSettings;
  }
  public putDetectionSettings(value: AppFirewallDetectionSettings) {
    this._detectionSettings.internalValue = value;
  }
  public resetDetectionSettings() {
    this._detectionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionSettingsInput() {
    return this._detectionSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_all_response_codes: cdktf.booleanToTerraform(this._allowAllResponseCodes),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      blocking: cdktf.booleanToTerraform(this._blocking),
      default_anonymization: cdktf.booleanToTerraform(this._defaultAnonymization),
      default_detection_settings: cdktf.booleanToTerraform(this._defaultDetectionSettings),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      disable_anonymization: cdktf.booleanToTerraform(this._disableAnonymization),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      monitoring: cdktf.booleanToTerraform(this._monitoring),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      use_default_blocking_page: cdktf.booleanToTerraform(this._useDefaultBlockingPage),
      ai_risk_based_blocking: appFirewallAiRiskBasedBlockingToTerraform(this._aiRiskBasedBlocking.internalValue),
      allowed_response_codes: appFirewallAllowedResponseCodesToTerraform(this._allowedResponseCodes.internalValue),
      blocking_page: appFirewallBlockingPageToTerraform(this._blockingPage.internalValue),
      custom_anonymization: appFirewallCustomAnonymizationToTerraform(this._customAnonymization.internalValue),
      detection_settings: appFirewallDetectionSettingsToTerraform(this._detectionSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_all_response_codes: {
        value: cdktf.booleanToHclTerraform(this._allowAllResponseCodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      blocking: {
        value: cdktf.booleanToHclTerraform(this._blocking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_anonymization: {
        value: cdktf.booleanToHclTerraform(this._defaultAnonymization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_detection_settings: {
        value: cdktf.booleanToHclTerraform(this._defaultDetectionSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_anonymization: {
        value: cdktf.booleanToHclTerraform(this._disableAnonymization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      monitoring: {
        value: cdktf.booleanToHclTerraform(this._monitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_default_blocking_page: {
        value: cdktf.booleanToHclTerraform(this._useDefaultBlockingPage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ai_risk_based_blocking: {
        value: appFirewallAiRiskBasedBlockingToHclTerraform(this._aiRiskBasedBlocking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppFirewallAiRiskBasedBlockingList",
      },
      allowed_response_codes: {
        value: appFirewallAllowedResponseCodesToHclTerraform(this._allowedResponseCodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppFirewallAllowedResponseCodesList",
      },
      blocking_page: {
        value: appFirewallBlockingPageToHclTerraform(this._blockingPage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppFirewallBlockingPageList",
      },
      custom_anonymization: {
        value: appFirewallCustomAnonymizationToHclTerraform(this._customAnonymization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppFirewallCustomAnonymizationList",
      },
      detection_settings: {
        value: appFirewallDetectionSettingsToHclTerraform(this._detectionSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppFirewallDetectionSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
