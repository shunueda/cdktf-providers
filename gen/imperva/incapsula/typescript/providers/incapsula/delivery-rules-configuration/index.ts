// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeliveryRulesConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * How to load balance between multiple Data Centers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#category DeliveryRulesConfiguration#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#id DeliveryRulesConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#site_id DeliveryRulesConfiguration#site_id}
  */
  readonly siteId: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#rule DeliveryRulesConfiguration#rule}
  */
  readonly rule?: DeliveryRulesConfigurationRule[] | cdktf.IResolvable;
}
export interface DeliveryRulesConfigurationRule {
  /**
  * Rule action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#action DeliveryRulesConfiguration#action}
  */
  readonly action: string;
  /**
  * Rewrite rule would add the header/cookie if it's missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#add_if_missing DeliveryRulesConfiguration#add_if_missing}
  */
  readonly addIfMissing?: boolean | cdktf.IResolvable;
  /**
  * Name of cookie to modify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#cookie_name DeliveryRulesConfiguration#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Data center ID to forward the request to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#dc_id DeliveryRulesConfiguration#dc_id}
  */
  readonly dcId?: number;
  /**
  * Boolean that enables the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#enabled DeliveryRulesConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The response returned when the request matches the filter and is blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#error_response_data DeliveryRulesConfiguration#error_response_data}
  */
  readonly errorResponseData?: string;
  /**
  * The format of the given error response in the error_response_data field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#error_response_format DeliveryRulesConfiguration#error_response_format}
  */
  readonly errorResponseFormat?: string;
  /**
  * The error that triggers the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#error_type DeliveryRulesConfiguration#error_type}
  */
  readonly errorType?: string;
  /**
  * Defines the conditions that trigger the rule action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#filter DeliveryRulesConfiguration#filter}
  */
  readonly filter?: string;
  /**
  * From value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#from DeliveryRulesConfiguration#from}
  */
  readonly from?: string;
  /**
  * Name of header to modify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#header_name DeliveryRulesConfiguration#header_name}
  */
  readonly headerName?: string;
  /**
  * Delete multiple header occurrences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#multiple_headers_deletion DeliveryRulesConfiguration#multiple_headers_deletion}
  */
  readonly multipleHeadersDeletion?: boolean | cdktf.IResolvable;
  /**
  * Context for port forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#port_forwarding_context DeliveryRulesConfiguration#port_forwarding_context}
  */
  readonly portForwardingContext?: string;
  /**
  * Port number or header name for port forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#port_forwarding_value DeliveryRulesConfiguration#port_forwarding_value}
  */
  readonly portForwardingValue?: string;
  /**
  * Rule's response code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#response_code DeliveryRulesConfiguration#response_code}
  */
  readonly responseCode?: number;
  /**
  * Apply rewrite rule even if the header/cookie already exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#rewrite_existing DeliveryRulesConfiguration#rewrite_existing}
  */
  readonly rewriteExisting?: boolean | cdktf.IResolvable;
  /**
  * The rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#rule_name DeliveryRulesConfiguration#rule_name}
  */
  readonly ruleName: string;
  /**
  * To value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#to DeliveryRulesConfiguration#to}
  */
  readonly to?: string;
}

export function deliveryRulesConfigurationRuleToTerraform(struct?: DeliveryRulesConfigurationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    add_if_missing: cdktf.booleanToTerraform(struct!.addIfMissing),
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    dc_id: cdktf.numberToTerraform(struct!.dcId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    error_response_data: cdktf.stringToTerraform(struct!.errorResponseData),
    error_response_format: cdktf.stringToTerraform(struct!.errorResponseFormat),
    error_type: cdktf.stringToTerraform(struct!.errorType),
    filter: cdktf.stringToTerraform(struct!.filter),
    from: cdktf.stringToTerraform(struct!.from),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    multiple_headers_deletion: cdktf.booleanToTerraform(struct!.multipleHeadersDeletion),
    port_forwarding_context: cdktf.stringToTerraform(struct!.portForwardingContext),
    port_forwarding_value: cdktf.stringToTerraform(struct!.portForwardingValue),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
    rewrite_existing: cdktf.booleanToTerraform(struct!.rewriteExisting),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function deliveryRulesConfigurationRuleToHclTerraform(struct?: DeliveryRulesConfigurationRule | cdktf.IResolvable): any {
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
    add_if_missing: {
      value: cdktf.booleanToHclTerraform(struct!.addIfMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dc_id: {
      value: cdktf.numberToHclTerraform(struct!.dcId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    error_response_data: {
      value: cdktf.stringToHclTerraform(struct!.errorResponseData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_response_format: {
      value: cdktf.stringToHclTerraform(struct!.errorResponseFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_type: {
      value: cdktf.stringToHclTerraform(struct!.errorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiple_headers_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.multipleHeadersDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_forwarding_context: {
      value: cdktf.stringToHclTerraform(struct!.portForwardingContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_forwarding_value: {
      value: cdktf.stringToHclTerraform(struct!.portForwardingValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rewrite_existing: {
      value: cdktf.booleanToHclTerraform(struct!.rewriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeliveryRulesConfigurationRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeliveryRulesConfigurationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._addIfMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.addIfMissing = this._addIfMissing;
    }
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._dcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcId = this._dcId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._errorResponseData !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResponseData = this._errorResponseData;
    }
    if (this._errorResponseFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResponseFormat = this._errorResponseFormat;
    }
    if (this._errorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorType = this._errorType;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._multipleHeadersDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleHeadersDeletion = this._multipleHeadersDeletion;
    }
    if (this._portForwardingContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.portForwardingContext = this._portForwardingContext;
    }
    if (this._portForwardingValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portForwardingValue = this._portForwardingValue;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._rewriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteExisting = this._rewriteExisting;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryRulesConfigurationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._addIfMissing = undefined;
      this._cookieName = undefined;
      this._dcId = undefined;
      this._enabled = undefined;
      this._errorResponseData = undefined;
      this._errorResponseFormat = undefined;
      this._errorType = undefined;
      this._filter = undefined;
      this._from = undefined;
      this._headerName = undefined;
      this._multipleHeadersDeletion = undefined;
      this._portForwardingContext = undefined;
      this._portForwardingValue = undefined;
      this._responseCode = undefined;
      this._rewriteExisting = undefined;
      this._ruleName = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._addIfMissing = value.addIfMissing;
      this._cookieName = value.cookieName;
      this._dcId = value.dcId;
      this._enabled = value.enabled;
      this._errorResponseData = value.errorResponseData;
      this._errorResponseFormat = value.errorResponseFormat;
      this._errorType = value.errorType;
      this._filter = value.filter;
      this._from = value.from;
      this._headerName = value.headerName;
      this._multipleHeadersDeletion = value.multipleHeadersDeletion;
      this._portForwardingContext = value.portForwardingContext;
      this._portForwardingValue = value.portForwardingValue;
      this._responseCode = value.responseCode;
      this._rewriteExisting = value.rewriteExisting;
      this._ruleName = value.ruleName;
      this._to = value.to;
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

  // add_if_missing - computed: false, optional: true, required: false
  private _addIfMissing?: boolean | cdktf.IResolvable; 
  public get addIfMissing() {
    return this.getBooleanAttribute('add_if_missing');
  }
  public set addIfMissing(value: boolean | cdktf.IResolvable) {
    this._addIfMissing = value;
  }
  public resetAddIfMissing() {
    this._addIfMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addIfMissingInput() {
    return this._addIfMissing;
  }

  // cookie_name - computed: false, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // dc_id - computed: false, optional: true, required: false
  private _dcId?: number; 
  public get dcId() {
    return this.getNumberAttribute('dc_id');
  }
  public set dcId(value: number) {
    this._dcId = value;
  }
  public resetDcId() {
    this._dcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcIdInput() {
    return this._dcId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // error_response_data - computed: false, optional: true, required: false
  private _errorResponseData?: string; 
  public get errorResponseData() {
    return this.getStringAttribute('error_response_data');
  }
  public set errorResponseData(value: string) {
    this._errorResponseData = value;
  }
  public resetErrorResponseData() {
    this._errorResponseData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseDataInput() {
    return this._errorResponseData;
  }

  // error_response_format - computed: false, optional: true, required: false
  private _errorResponseFormat?: string; 
  public get errorResponseFormat() {
    return this.getStringAttribute('error_response_format');
  }
  public set errorResponseFormat(value: string) {
    this._errorResponseFormat = value;
  }
  public resetErrorResponseFormat() {
    this._errorResponseFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseFormatInput() {
    return this._errorResponseFormat;
  }

  // error_type - computed: false, optional: true, required: false
  private _errorType?: string; 
  public get errorType() {
    return this.getStringAttribute('error_type');
  }
  public set errorType(value: string) {
    this._errorType = value;
  }
  public resetErrorType() {
    this._errorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorTypeInput() {
    return this._errorType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // multiple_headers_deletion - computed: false, optional: true, required: false
  private _multipleHeadersDeletion?: boolean | cdktf.IResolvable; 
  public get multipleHeadersDeletion() {
    return this.getBooleanAttribute('multiple_headers_deletion');
  }
  public set multipleHeadersDeletion(value: boolean | cdktf.IResolvable) {
    this._multipleHeadersDeletion = value;
  }
  public resetMultipleHeadersDeletion() {
    this._multipleHeadersDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleHeadersDeletionInput() {
    return this._multipleHeadersDeletion;
  }

  // port_forwarding_context - computed: false, optional: true, required: false
  private _portForwardingContext?: string; 
  public get portForwardingContext() {
    return this.getStringAttribute('port_forwarding_context');
  }
  public set portForwardingContext(value: string) {
    this._portForwardingContext = value;
  }
  public resetPortForwardingContext() {
    this._portForwardingContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardingContextInput() {
    return this._portForwardingContext;
  }

  // port_forwarding_value - computed: false, optional: true, required: false
  private _portForwardingValue?: string; 
  public get portForwardingValue() {
    return this.getStringAttribute('port_forwarding_value');
  }
  public set portForwardingValue(value: string) {
    this._portForwardingValue = value;
  }
  public resetPortForwardingValue() {
    this._portForwardingValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardingValueInput() {
    return this._portForwardingValue;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // rewrite_existing - computed: false, optional: true, required: false
  private _rewriteExisting?: boolean | cdktf.IResolvable; 
  public get rewriteExisting() {
    return this.getBooleanAttribute('rewrite_existing');
  }
  public set rewriteExisting(value: boolean | cdktf.IResolvable) {
    this._rewriteExisting = value;
  }
  public resetRewriteExisting() {
    this._rewriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteExistingInput() {
    return this._rewriteExisting;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DeliveryRulesConfigurationRuleList extends cdktf.ComplexList {
  public internalValue? : DeliveryRulesConfigurationRule[] | cdktf.IResolvable

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
  public get(index: number): DeliveryRulesConfigurationRuleOutputReference {
    return new DeliveryRulesConfigurationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration incapsula_delivery_rules_configuration}
*/
export class DeliveryRulesConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_delivery_rules_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeliveryRulesConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeliveryRulesConfiguration to import
  * @param importFromId The id of the existing DeliveryRulesConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeliveryRulesConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_delivery_rules_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/delivery_rules_configuration incapsula_delivery_rules_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeliveryRulesConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DeliveryRulesConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_delivery_rules_configuration',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._id = config.id;
    this._siteId = config.siteId;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new DeliveryRulesConfigurationRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: DeliveryRulesConfigurationRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      id: cdktf.stringToTerraform(this._id),
      site_id: cdktf.stringToTerraform(this._siteId),
      rule: cdktf.listMapper(deliveryRulesConfigurationRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(deliveryRulesConfigurationRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeliveryRulesConfigurationRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
