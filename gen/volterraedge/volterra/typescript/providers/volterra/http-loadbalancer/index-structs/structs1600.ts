import * as cdktf from 'cdktf';
import { HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern,
httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform,
httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform,
HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference,
HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget,
httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform,
httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform,
HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference,
HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections,
httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform,
httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform,
HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference,
HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern,
httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform,
httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform,
HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference,
HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata,
httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform,
httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform,
HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference,
HttpLoadbalancerEnableApiDiscoveryApiCrawler,
httpLoadbalancerEnableApiDiscoveryApiCrawlerToTerraform,
httpLoadbalancerEnableApiDiscoveryApiCrawlerToHclTerraform,
HttpLoadbalancerEnableApiDiscoveryApiCrawlerOutputReference,
HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan,
httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanToTerraform,
httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanToHclTerraform,
HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference,
HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery,
httpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryToTerraform,
httpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryToHclTerraform,
HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference,
HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettings,
httpLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsToTerraform,
httpLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsToHclTerraform,
HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsOutputReference } from './structs1200'
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern {
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key_pattern HttpLoadbalancer#key_pattern}
  */
  readonly keyPattern: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#value_pattern HttpLoadbalancer#value_pattern}
  */
  readonly valuePattern: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern;
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_pattern: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform(struct!.keyPattern),
    value_pattern: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform(struct!.valuePattern),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_pattern: {
      value: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternList",
    },
    value_pattern: {
      value: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPattern = this._keyPattern?.internalValue;
    }
    if (this._valuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyPattern.internalValue = undefined;
      this._valuePattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyPattern.internalValue = value.keyPattern;
      this._valuePattern.internalValue = value.valuePattern;
    }
  }

  // key_pattern - computed: false, optional: false, required: true
  private _keyPattern = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern) {
    this._keyPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern.internalValue;
  }

  // value_pattern - computed: false, optional: false, required: true
  private _valuePattern = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern) {
    this._valuePattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern.internalValue;
  }
}
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#all_request_sections HttpLoadbalancer#all_request_sections}
  */
  readonly allRequestSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#all_response_sections HttpLoadbalancer#all_response_sections}
  */
  readonly allResponseSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#all_sections HttpLoadbalancer#all_sections}
  */
  readonly allSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#any_target HttpLoadbalancer#any_target}
  */
  readonly anyTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#api_group HttpLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#specific_domain HttpLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#api_endpoint_target HttpLoadbalancer#api_endpoint_target}
  */
  readonly apiEndpointTarget?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget;
  /**
  * custom_sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_sections HttpLoadbalancer#custom_sections}
  */
  readonly customSections?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections;
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key_pattern HttpLoadbalancer#key_pattern}
  */
  readonly keyPattern?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern;
  /**
  * key_value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key_value_pattern HttpLoadbalancer#key_value_pattern}
  */
  readonly keyValuePattern?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#value_pattern HttpLoadbalancer#value_pattern}
  */
  readonly valuePattern?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern;
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_request_sections: cdktf.booleanToTerraform(struct!.allRequestSections),
    all_response_sections: cdktf.booleanToTerraform(struct!.allResponseSections),
    all_sections: cdktf.booleanToTerraform(struct!.allSections),
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_target: cdktf.booleanToTerraform(struct!.anyTarget),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint_target: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform(struct!.apiEndpointTarget),
    custom_sections: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform(struct!.customSections),
    key_pattern: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform(struct!.keyPattern),
    key_value_pattern: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToTerraform(struct!.keyValuePattern),
    value_pattern: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToTerraform(struct!.valuePattern),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_request_sections: {
      value: cdktf.booleanToHclTerraform(struct!.allRequestSections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_response_sections: {
      value: cdktf.booleanToHclTerraform(struct!.allResponseSections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_sections: {
      value: cdktf.booleanToHclTerraform(struct!.allSections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_target: {
      value: cdktf.booleanToHclTerraform(struct!.anyTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint_target: {
      value: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform(struct!.apiEndpointTarget),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetList",
    },
    custom_sections: {
      value: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform(struct!.customSections),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsList",
    },
    key_pattern: {
      value: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternList",
    },
    key_value_pattern: {
      value: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToHclTerraform(struct!.keyValuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternList",
    },
    value_pattern: {
      value: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRequestSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRequestSections = this._allRequestSections;
    }
    if (this._allResponseSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allResponseSections = this._allResponseSections;
    }
    if (this._allSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSections = this._allSections;
    }
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._anyTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyTarget = this._anyTarget;
    }
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._apiEndpointTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointTarget = this._apiEndpointTarget?.internalValue;
    }
    if (this._customSections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSections = this._customSections?.internalValue;
    }
    if (this._keyPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPattern = this._keyPattern?.internalValue;
    }
    if (this._keyValuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePattern = this._keyValuePattern?.internalValue;
    }
    if (this._valuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRequestSections = undefined;
      this._allResponseSections = undefined;
      this._allSections = undefined;
      this._anyDomain = undefined;
      this._anyTarget = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpointTarget.internalValue = undefined;
      this._customSections.internalValue = undefined;
      this._keyPattern.internalValue = undefined;
      this._keyValuePattern.internalValue = undefined;
      this._valuePattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRequestSections = value.allRequestSections;
      this._allResponseSections = value.allResponseSections;
      this._allSections = value.allSections;
      this._anyDomain = value.anyDomain;
      this._anyTarget = value.anyTarget;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._apiEndpointTarget.internalValue = value.apiEndpointTarget;
      this._customSections.internalValue = value.customSections;
      this._keyPattern.internalValue = value.keyPattern;
      this._keyValuePattern.internalValue = value.keyValuePattern;
      this._valuePattern.internalValue = value.valuePattern;
    }
  }

  // all_request_sections - computed: false, optional: true, required: false
  private _allRequestSections?: boolean | cdktf.IResolvable; 
  public get allRequestSections() {
    return this.getBooleanAttribute('all_request_sections');
  }
  public set allRequestSections(value: boolean | cdktf.IResolvable) {
    this._allRequestSections = value;
  }
  public resetAllRequestSections() {
    this._allRequestSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRequestSectionsInput() {
    return this._allRequestSections;
  }

  // all_response_sections - computed: false, optional: true, required: false
  private _allResponseSections?: boolean | cdktf.IResolvable; 
  public get allResponseSections() {
    return this.getBooleanAttribute('all_response_sections');
  }
  public set allResponseSections(value: boolean | cdktf.IResolvable) {
    this._allResponseSections = value;
  }
  public resetAllResponseSections() {
    this._allResponseSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allResponseSectionsInput() {
    return this._allResponseSections;
  }

  // all_sections - computed: false, optional: true, required: false
  private _allSections?: boolean | cdktf.IResolvable; 
  public get allSections() {
    return this.getBooleanAttribute('all_sections');
  }
  public set allSections(value: boolean | cdktf.IResolvable) {
    this._allSections = value;
  }
  public resetAllSections() {
    this._allSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSectionsInput() {
    return this._allSections;
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // any_target - computed: false, optional: true, required: false
  private _anyTarget?: boolean | cdktf.IResolvable; 
  public get anyTarget() {
    return this.getBooleanAttribute('any_target');
  }
  public set anyTarget(value: boolean | cdktf.IResolvable) {
    this._anyTarget = value;
  }
  public resetAnyTarget() {
    this._anyTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyTargetInput() {
    return this._anyTarget;
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // api_endpoint_target - computed: false, optional: true, required: false
  private _apiEndpointTarget = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference(this, "api_endpoint_target");
  public get apiEndpointTarget() {
    return this._apiEndpointTarget;
  }
  public putApiEndpointTarget(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget) {
    this._apiEndpointTarget.internalValue = value;
  }
  public resetApiEndpointTarget() {
    this._apiEndpointTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointTargetInput() {
    return this._apiEndpointTarget.internalValue;
  }

  // custom_sections - computed: false, optional: true, required: false
  private _customSections = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference(this, "custom_sections");
  public get customSections() {
    return this._customSections;
  }
  public putCustomSections(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections) {
    this._customSections.internalValue = value;
  }
  public resetCustomSections() {
    this._customSections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSectionsInput() {
    return this._customSections.internalValue;
  }

  // key_pattern - computed: false, optional: true, required: false
  private _keyPattern = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern) {
    this._keyPattern.internalValue = value;
  }
  public resetKeyPattern() {
    this._keyPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern.internalValue;
  }

  // key_value_pattern - computed: false, optional: true, required: false
  private _keyValuePattern = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference(this, "key_value_pattern");
  public get keyValuePattern() {
    return this._keyValuePattern;
  }
  public putKeyValuePattern(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern) {
    this._keyValuePattern.internalValue = value;
  }
  public resetKeyValuePattern() {
    this._keyValuePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePatternInput() {
    return this._keyValuePattern.internalValue;
  }

  // value_pattern - computed: false, optional: true, required: false
  private _valuePattern = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern) {
    this._valuePattern.internalValue = value;
  }
  public resetValuePattern() {
    this._valuePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern.internalValue;
  }
}
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#type HttpLoadbalancer#type}
  */
  readonly type: string;
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata;
  /**
  * sensitive_data_detection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#sensitive_data_detection_config HttpLoadbalancer#sensitive_data_detection_config}
  */
  readonly sensitiveDataDetectionConfig: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig;
  /**
  * sensitive_data_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#sensitive_data_type HttpLoadbalancer#sensitive_data_type}
  */
  readonly sensitiveDataType: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType;
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform(struct!.metadata),
    sensitive_data_detection_config: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToTerraform(struct!.sensitiveDataDetectionConfig),
    sensitive_data_type: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToTerraform(struct!.sensitiveDataType),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataList",
    },
    sensitive_data_detection_config: {
      value: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToHclTerraform(struct!.sensitiveDataDetectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigList",
    },
    sensitive_data_type: {
      value: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToHclTerraform(struct!.sensitiveDataType),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._sensitiveDataDetectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataDetectionConfig = this._sensitiveDataDetectionConfig?.internalValue;
    }
    if (this._sensitiveDataType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataType = this._sensitiveDataType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._sensitiveDataDetectionConfig.internalValue = undefined;
      this._sensitiveDataType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._sensitiveDataDetectionConfig.internalValue = value.sensitiveDataDetectionConfig;
      this._sensitiveDataType.internalValue = value.sensitiveDataType;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // sensitive_data_detection_config - computed: false, optional: false, required: true
  private _sensitiveDataDetectionConfig = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference(this, "sensitive_data_detection_config");
  public get sensitiveDataDetectionConfig() {
    return this._sensitiveDataDetectionConfig;
  }
  public putSensitiveDataDetectionConfig(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig) {
    this._sensitiveDataDetectionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataDetectionConfigInput() {
    return this._sensitiveDataDetectionConfig.internalValue;
  }

  // sensitive_data_type - computed: false, optional: false, required: true
  private _sensitiveDataType = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference(this, "sensitive_data_type");
  public get sensitiveDataType() {
    return this._sensitiveDataType;
  }
  public putSensitiveDataType(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType) {
    this._sensitiveDataType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataTypeInput() {
    return this._sensitiveDataType.internalValue;
  }
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference {
    return new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference {
    return new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules {
  /**
  * custom_sensitive_data_detection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_sensitive_data_detection_rules HttpLoadbalancer#custom_sensitive_data_detection_rules}
  */
  readonly customSensitiveDataDetectionRules?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable;
  /**
  * disabled_built_in_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disabled_built_in_rules HttpLoadbalancer#disabled_built_in_rules}
  */
  readonly disabledBuiltInRules?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesToTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sensitive_data_detection_rules: cdktf.listMapper(httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToTerraform, true)(struct!.customSensitiveDataDetectionRules),
    disabled_built_in_rules: cdktf.listMapper(httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToTerraform, true)(struct!.disabledBuiltInRules),
  }
}


export function httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesOutputReference | HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sensitive_data_detection_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToHclTerraform, true)(struct!.customSensitiveDataDetectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList",
    },
    disabled_built_in_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToHclTerraform, true)(struct!.disabledBuiltInRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSensitiveDataDetectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSensitiveDataDetectionRules = this._customSensitiveDataDetectionRules?.internalValue;
    }
    if (this._disabledBuiltInRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledBuiltInRules = this._disabledBuiltInRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSensitiveDataDetectionRules.internalValue = undefined;
      this._disabledBuiltInRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSensitiveDataDetectionRules.internalValue = value.customSensitiveDataDetectionRules;
      this._disabledBuiltInRules.internalValue = value.disabledBuiltInRules;
    }
  }

  // custom_sensitive_data_detection_rules - computed: false, optional: true, required: false
  private _customSensitiveDataDetectionRules = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList(this, "custom_sensitive_data_detection_rules", false);
  public get customSensitiveDataDetectionRules() {
    return this._customSensitiveDataDetectionRules;
  }
  public putCustomSensitiveDataDetectionRules(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable) {
    this._customSensitiveDataDetectionRules.internalValue = value;
  }
  public resetCustomSensitiveDataDetectionRules() {
    this._customSensitiveDataDetectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSensitiveDataDetectionRulesInput() {
    return this._customSensitiveDataDetectionRules.internalValue;
  }

  // disabled_built_in_rules - computed: false, optional: true, required: false
  private _disabledBuiltInRules = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesList(this, "disabled_built_in_rules", false);
  public get disabledBuiltInRules() {
    return this._disabledBuiltInRules;
  }
  public putDisabledBuiltInRules(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable) {
    this._disabledBuiltInRules.internalValue = value;
  }
  public resetDisabledBuiltInRules() {
    this._disabledBuiltInRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledBuiltInRulesInput() {
    return this._disabledBuiltInRules.internalValue;
  }
}
export interface HttpLoadbalancerEnableApiDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_api_auth_discovery HttpLoadbalancer#default_api_auth_discovery}
  */
  readonly defaultApiAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_learn_from_redirect_traffic HttpLoadbalancer#disable_learn_from_redirect_traffic}
  */
  readonly disableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#enable_learn_from_redirect_traffic HttpLoadbalancer#enable_learn_from_redirect_traffic}
  */
  readonly enableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable;
  /**
  * api_crawler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#api_crawler HttpLoadbalancer#api_crawler}
  */
  readonly apiCrawler?: HttpLoadbalancerEnableApiDiscoveryApiCrawler;
  /**
  * api_discovery_from_code_scan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#api_discovery_from_code_scan HttpLoadbalancer#api_discovery_from_code_scan}
  */
  readonly apiDiscoveryFromCodeScan?: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan;
  /**
  * custom_api_auth_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_api_auth_discovery HttpLoadbalancer#custom_api_auth_discovery}
  */
  readonly customApiAuthDiscovery?: HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery;
  /**
  * discovered_api_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#discovered_api_settings HttpLoadbalancer#discovered_api_settings}
  */
  readonly discoveredApiSettings?: HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettings;
  /**
  * sensitive_data_detection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#sensitive_data_detection_rules HttpLoadbalancer#sensitive_data_detection_rules}
  */
  readonly sensitiveDataDetectionRules?: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules;
}

export function httpLoadbalancerEnableApiDiscoveryToTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryOutputReference | HttpLoadbalancerEnableApiDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_api_auth_discovery: cdktf.booleanToTerraform(struct!.defaultApiAuthDiscovery),
    disable_learn_from_redirect_traffic: cdktf.booleanToTerraform(struct!.disableLearnFromRedirectTraffic),
    enable_learn_from_redirect_traffic: cdktf.booleanToTerraform(struct!.enableLearnFromRedirectTraffic),
    api_crawler: httpLoadbalancerEnableApiDiscoveryApiCrawlerToTerraform(struct!.apiCrawler),
    api_discovery_from_code_scan: httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanToTerraform(struct!.apiDiscoveryFromCodeScan),
    custom_api_auth_discovery: httpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryToTerraform(struct!.customApiAuthDiscovery),
    discovered_api_settings: httpLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsToTerraform(struct!.discoveredApiSettings),
    sensitive_data_detection_rules: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesToTerraform(struct!.sensitiveDataDetectionRules),
  }
}


export function httpLoadbalancerEnableApiDiscoveryToHclTerraform(struct?: HttpLoadbalancerEnableApiDiscoveryOutputReference | HttpLoadbalancerEnableApiDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_api_auth_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.defaultApiAuthDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_learn_from_redirect_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.disableLearnFromRedirectTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_learn_from_redirect_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.enableLearnFromRedirectTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_crawler: {
      value: httpLoadbalancerEnableApiDiscoveryApiCrawlerToHclTerraform(struct!.apiCrawler),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiCrawlerList",
    },
    api_discovery_from_code_scan: {
      value: httpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanToHclTerraform(struct!.apiDiscoveryFromCodeScan),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanList",
    },
    custom_api_auth_discovery: {
      value: httpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryToHclTerraform(struct!.customApiAuthDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryList",
    },
    discovered_api_settings: {
      value: httpLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsToHclTerraform(struct!.discoveredApiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsList",
    },
    sensitive_data_detection_rules: {
      value: httpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesToHclTerraform(struct!.sensitiveDataDetectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableApiDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableApiDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultApiAuthDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultApiAuthDiscovery = this._defaultApiAuthDiscovery;
    }
    if (this._disableLearnFromRedirectTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLearnFromRedirectTraffic = this._disableLearnFromRedirectTraffic;
    }
    if (this._enableLearnFromRedirectTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLearnFromRedirectTraffic = this._enableLearnFromRedirectTraffic;
    }
    if (this._apiCrawler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCrawler = this._apiCrawler?.internalValue;
    }
    if (this._apiDiscoveryFromCodeScan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscoveryFromCodeScan = this._apiDiscoveryFromCodeScan?.internalValue;
    }
    if (this._customApiAuthDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApiAuthDiscovery = this._customApiAuthDiscovery?.internalValue;
    }
    if (this._discoveredApiSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveredApiSettings = this._discoveredApiSettings?.internalValue;
    }
    if (this._sensitiveDataDetectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataDetectionRules = this._sensitiveDataDetectionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableApiDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultApiAuthDiscovery = undefined;
      this._disableLearnFromRedirectTraffic = undefined;
      this._enableLearnFromRedirectTraffic = undefined;
      this._apiCrawler.internalValue = undefined;
      this._apiDiscoveryFromCodeScan.internalValue = undefined;
      this._customApiAuthDiscovery.internalValue = undefined;
      this._discoveredApiSettings.internalValue = undefined;
      this._sensitiveDataDetectionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultApiAuthDiscovery = value.defaultApiAuthDiscovery;
      this._disableLearnFromRedirectTraffic = value.disableLearnFromRedirectTraffic;
      this._enableLearnFromRedirectTraffic = value.enableLearnFromRedirectTraffic;
      this._apiCrawler.internalValue = value.apiCrawler;
      this._apiDiscoveryFromCodeScan.internalValue = value.apiDiscoveryFromCodeScan;
      this._customApiAuthDiscovery.internalValue = value.customApiAuthDiscovery;
      this._discoveredApiSettings.internalValue = value.discoveredApiSettings;
      this._sensitiveDataDetectionRules.internalValue = value.sensitiveDataDetectionRules;
    }
  }

  // default_api_auth_discovery - computed: false, optional: true, required: false
  private _defaultApiAuthDiscovery?: boolean | cdktf.IResolvable; 
  public get defaultApiAuthDiscovery() {
    return this.getBooleanAttribute('default_api_auth_discovery');
  }
  public set defaultApiAuthDiscovery(value: boolean | cdktf.IResolvable) {
    this._defaultApiAuthDiscovery = value;
  }
  public resetDefaultApiAuthDiscovery() {
    this._defaultApiAuthDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApiAuthDiscoveryInput() {
    return this._defaultApiAuthDiscovery;
  }

  // disable_learn_from_redirect_traffic - computed: false, optional: true, required: false
  private _disableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable; 
  public get disableLearnFromRedirectTraffic() {
    return this.getBooleanAttribute('disable_learn_from_redirect_traffic');
  }
  public set disableLearnFromRedirectTraffic(value: boolean | cdktf.IResolvable) {
    this._disableLearnFromRedirectTraffic = value;
  }
  public resetDisableLearnFromRedirectTraffic() {
    this._disableLearnFromRedirectTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLearnFromRedirectTrafficInput() {
    return this._disableLearnFromRedirectTraffic;
  }

  // enable_learn_from_redirect_traffic - computed: false, optional: true, required: false
  private _enableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable; 
  public get enableLearnFromRedirectTraffic() {
    return this.getBooleanAttribute('enable_learn_from_redirect_traffic');
  }
  public set enableLearnFromRedirectTraffic(value: boolean | cdktf.IResolvable) {
    this._enableLearnFromRedirectTraffic = value;
  }
  public resetEnableLearnFromRedirectTraffic() {
    this._enableLearnFromRedirectTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearnFromRedirectTrafficInput() {
    return this._enableLearnFromRedirectTraffic;
  }

  // api_crawler - computed: false, optional: true, required: false
  private _apiCrawler = new HttpLoadbalancerEnableApiDiscoveryApiCrawlerOutputReference(this, "api_crawler");
  public get apiCrawler() {
    return this._apiCrawler;
  }
  public putApiCrawler(value: HttpLoadbalancerEnableApiDiscoveryApiCrawler) {
    this._apiCrawler.internalValue = value;
  }
  public resetApiCrawler() {
    this._apiCrawler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCrawlerInput() {
    return this._apiCrawler.internalValue;
  }

  // api_discovery_from_code_scan - computed: false, optional: true, required: false
  private _apiDiscoveryFromCodeScan = new HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference(this, "api_discovery_from_code_scan");
  public get apiDiscoveryFromCodeScan() {
    return this._apiDiscoveryFromCodeScan;
  }
  public putApiDiscoveryFromCodeScan(value: HttpLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan) {
    this._apiDiscoveryFromCodeScan.internalValue = value;
  }
  public resetApiDiscoveryFromCodeScan() {
    this._apiDiscoveryFromCodeScan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoveryFromCodeScanInput() {
    return this._apiDiscoveryFromCodeScan.internalValue;
  }

  // custom_api_auth_discovery - computed: false, optional: true, required: false
  private _customApiAuthDiscovery = new HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference(this, "custom_api_auth_discovery");
  public get customApiAuthDiscovery() {
    return this._customApiAuthDiscovery;
  }
  public putCustomApiAuthDiscovery(value: HttpLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery) {
    this._customApiAuthDiscovery.internalValue = value;
  }
  public resetCustomApiAuthDiscovery() {
    this._customApiAuthDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApiAuthDiscoveryInput() {
    return this._customApiAuthDiscovery.internalValue;
  }

  // discovered_api_settings - computed: false, optional: true, required: false
  private _discoveredApiSettings = new HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsOutputReference(this, "discovered_api_settings");
  public get discoveredApiSettings() {
    return this._discoveredApiSettings;
  }
  public putDiscoveredApiSettings(value: HttpLoadbalancerEnableApiDiscoveryDiscoveredApiSettings) {
    this._discoveredApiSettings.internalValue = value;
  }
  public resetDiscoveredApiSettings() {
    this._discoveredApiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredApiSettingsInput() {
    return this._discoveredApiSettings.internalValue;
  }

  // sensitive_data_detection_rules - computed: false, optional: true, required: false
  private _sensitiveDataDetectionRules = new HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesOutputReference(this, "sensitive_data_detection_rules");
  public get sensitiveDataDetectionRules() {
    return this._sensitiveDataDetectionRules;
  }
  public putSensitiveDataDetectionRules(value: HttpLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules) {
    this._sensitiveDataDetectionRules.internalValue = value;
  }
  public resetSensitiveDataDetectionRules() {
    this._sensitiveDataDetectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataDetectionRulesInput() {
    return this._sensitiveDataDetectionRules.internalValue;
  }
}
export interface HttpLoadbalancerEnableChallengeCaptchaChallengeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie_expiry HttpLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function httpLoadbalancerEnableChallengeCaptchaChallengeParametersToTerraform(struct?: HttpLoadbalancerEnableChallengeCaptchaChallengeParametersOutputReference | HttpLoadbalancerEnableChallengeCaptchaChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function httpLoadbalancerEnableChallengeCaptchaChallengeParametersToHclTerraform(struct?: HttpLoadbalancerEnableChallengeCaptchaChallengeParametersOutputReference | HttpLoadbalancerEnableChallengeCaptchaChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableChallengeCaptchaChallengeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableChallengeCaptchaChallengeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableChallengeCaptchaChallengeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }
}
export interface HttpLoadbalancerEnableChallengeJsChallengeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie_expiry HttpLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#js_script_delay HttpLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function httpLoadbalancerEnableChallengeJsChallengeParametersToTerraform(struct?: HttpLoadbalancerEnableChallengeJsChallengeParametersOutputReference | HttpLoadbalancerEnableChallengeJsChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
    js_script_delay: cdktf.numberToTerraform(struct!.jsScriptDelay),
  }
}


export function httpLoadbalancerEnableChallengeJsChallengeParametersToHclTerraform(struct?: HttpLoadbalancerEnableChallengeJsChallengeParametersOutputReference | HttpLoadbalancerEnableChallengeJsChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_script_delay: {
      value: cdktf.numberToHclTerraform(struct!.jsScriptDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableChallengeJsChallengeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableChallengeJsChallengeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    if (this._jsScriptDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsScriptDelay = this._jsScriptDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableChallengeJsChallengeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
      this._jsScriptDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
      this._jsScriptDelay = value.jsScriptDelay;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // js_script_delay - computed: false, optional: true, required: false
  private _jsScriptDelay?: number; 
  public get jsScriptDelay() {
    return this.getNumberAttribute('js_script_delay');
  }
  public set jsScriptDelay(value: number) {
    this._jsScriptDelay = value;
  }
  public resetJsScriptDelay() {
    this._jsScriptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsScriptDelayInput() {
    return this._jsScriptDelay;
  }
}
export interface HttpLoadbalancerEnableChallengeMaliciousUserMitigation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerEnableChallengeMaliciousUserMitigationToTerraform(struct?: HttpLoadbalancerEnableChallengeMaliciousUserMitigationOutputReference | HttpLoadbalancerEnableChallengeMaliciousUserMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerEnableChallengeMaliciousUserMitigationToHclTerraform(struct?: HttpLoadbalancerEnableChallengeMaliciousUserMitigationOutputReference | HttpLoadbalancerEnableChallengeMaliciousUserMitigation): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableChallengeMaliciousUserMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableChallengeMaliciousUserMitigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableChallengeMaliciousUserMitigation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerEnableChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_captcha_challenge_parameters HttpLoadbalancer#default_captcha_challenge_parameters}
  */
  readonly defaultCaptchaChallengeParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_js_challenge_parameters HttpLoadbalancer#default_js_challenge_parameters}
  */
  readonly defaultJsChallengeParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_mitigation_settings HttpLoadbalancer#default_mitigation_settings}
  */
  readonly defaultMitigationSettings?: boolean | cdktf.IResolvable;
  /**
  * captcha_challenge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#captcha_challenge_parameters HttpLoadbalancer#captcha_challenge_parameters}
  */
  readonly captchaChallengeParameters?: HttpLoadbalancerEnableChallengeCaptchaChallengeParameters;
  /**
  * js_challenge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#js_challenge_parameters HttpLoadbalancer#js_challenge_parameters}
  */
  readonly jsChallengeParameters?: HttpLoadbalancerEnableChallengeJsChallengeParameters;
  /**
  * malicious_user_mitigation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#malicious_user_mitigation HttpLoadbalancer#malicious_user_mitigation}
  */
  readonly maliciousUserMitigation?: HttpLoadbalancerEnableChallengeMaliciousUserMitigation;
}

export function httpLoadbalancerEnableChallengeToTerraform(struct?: HttpLoadbalancerEnableChallengeOutputReference | HttpLoadbalancerEnableChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_captcha_challenge_parameters: cdktf.booleanToTerraform(struct!.defaultCaptchaChallengeParameters),
    default_js_challenge_parameters: cdktf.booleanToTerraform(struct!.defaultJsChallengeParameters),
    default_mitigation_settings: cdktf.booleanToTerraform(struct!.defaultMitigationSettings),
    captcha_challenge_parameters: httpLoadbalancerEnableChallengeCaptchaChallengeParametersToTerraform(struct!.captchaChallengeParameters),
    js_challenge_parameters: httpLoadbalancerEnableChallengeJsChallengeParametersToTerraform(struct!.jsChallengeParameters),
    malicious_user_mitigation: httpLoadbalancerEnableChallengeMaliciousUserMitigationToTerraform(struct!.maliciousUserMitigation),
  }
}


export function httpLoadbalancerEnableChallengeToHclTerraform(struct?: HttpLoadbalancerEnableChallengeOutputReference | HttpLoadbalancerEnableChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_captcha_challenge_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.defaultCaptchaChallengeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_js_challenge_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.defaultJsChallengeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_mitigation_settings: {
      value: cdktf.booleanToHclTerraform(struct!.defaultMitigationSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    captcha_challenge_parameters: {
      value: httpLoadbalancerEnableChallengeCaptchaChallengeParametersToHclTerraform(struct!.captchaChallengeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableChallengeCaptchaChallengeParametersList",
    },
    js_challenge_parameters: {
      value: httpLoadbalancerEnableChallengeJsChallengeParametersToHclTerraform(struct!.jsChallengeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableChallengeJsChallengeParametersList",
    },
    malicious_user_mitigation: {
      value: httpLoadbalancerEnableChallengeMaliciousUserMitigationToHclTerraform(struct!.maliciousUserMitigation),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerEnableChallengeMaliciousUserMitigationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCaptchaChallengeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCaptchaChallengeParameters = this._defaultCaptchaChallengeParameters;
    }
    if (this._defaultJsChallengeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultJsChallengeParameters = this._defaultJsChallengeParameters;
    }
    if (this._defaultMitigationSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMitigationSettings = this._defaultMitigationSettings;
    }
    if (this._captchaChallengeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaChallengeParameters = this._captchaChallengeParameters?.internalValue;
    }
    if (this._jsChallengeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsChallengeParameters = this._jsChallengeParameters?.internalValue;
    }
    if (this._maliciousUserMitigation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maliciousUserMitigation = this._maliciousUserMitigation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultCaptchaChallengeParameters = undefined;
      this._defaultJsChallengeParameters = undefined;
      this._defaultMitigationSettings = undefined;
      this._captchaChallengeParameters.internalValue = undefined;
      this._jsChallengeParameters.internalValue = undefined;
      this._maliciousUserMitigation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultCaptchaChallengeParameters = value.defaultCaptchaChallengeParameters;
      this._defaultJsChallengeParameters = value.defaultJsChallengeParameters;
      this._defaultMitigationSettings = value.defaultMitigationSettings;
      this._captchaChallengeParameters.internalValue = value.captchaChallengeParameters;
      this._jsChallengeParameters.internalValue = value.jsChallengeParameters;
      this._maliciousUserMitigation.internalValue = value.maliciousUserMitigation;
    }
  }

  // default_captcha_challenge_parameters - computed: false, optional: true, required: false
  private _defaultCaptchaChallengeParameters?: boolean | cdktf.IResolvable; 
  public get defaultCaptchaChallengeParameters() {
    return this.getBooleanAttribute('default_captcha_challenge_parameters');
  }
  public set defaultCaptchaChallengeParameters(value: boolean | cdktf.IResolvable) {
    this._defaultCaptchaChallengeParameters = value;
  }
  public resetDefaultCaptchaChallengeParameters() {
    this._defaultCaptchaChallengeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCaptchaChallengeParametersInput() {
    return this._defaultCaptchaChallengeParameters;
  }

  // default_js_challenge_parameters - computed: false, optional: true, required: false
  private _defaultJsChallengeParameters?: boolean | cdktf.IResolvable; 
  public get defaultJsChallengeParameters() {
    return this.getBooleanAttribute('default_js_challenge_parameters');
  }
  public set defaultJsChallengeParameters(value: boolean | cdktf.IResolvable) {
    this._defaultJsChallengeParameters = value;
  }
  public resetDefaultJsChallengeParameters() {
    this._defaultJsChallengeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultJsChallengeParametersInput() {
    return this._defaultJsChallengeParameters;
  }

  // default_mitigation_settings - computed: false, optional: true, required: false
  private _defaultMitigationSettings?: boolean | cdktf.IResolvable; 
  public get defaultMitigationSettings() {
    return this.getBooleanAttribute('default_mitigation_settings');
  }
  public set defaultMitigationSettings(value: boolean | cdktf.IResolvable) {
    this._defaultMitigationSettings = value;
  }
  public resetDefaultMitigationSettings() {
    this._defaultMitigationSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMitigationSettingsInput() {
    return this._defaultMitigationSettings;
  }

  // captcha_challenge_parameters - computed: false, optional: true, required: false
  private _captchaChallengeParameters = new HttpLoadbalancerEnableChallengeCaptchaChallengeParametersOutputReference(this, "captcha_challenge_parameters");
  public get captchaChallengeParameters() {
    return this._captchaChallengeParameters;
  }
  public putCaptchaChallengeParameters(value: HttpLoadbalancerEnableChallengeCaptchaChallengeParameters) {
    this._captchaChallengeParameters.internalValue = value;
  }
  public resetCaptchaChallengeParameters() {
    this._captchaChallengeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaChallengeParametersInput() {
    return this._captchaChallengeParameters.internalValue;
  }

  // js_challenge_parameters - computed: false, optional: true, required: false
  private _jsChallengeParameters = new HttpLoadbalancerEnableChallengeJsChallengeParametersOutputReference(this, "js_challenge_parameters");
  public get jsChallengeParameters() {
    return this._jsChallengeParameters;
  }
  public putJsChallengeParameters(value: HttpLoadbalancerEnableChallengeJsChallengeParameters) {
    this._jsChallengeParameters.internalValue = value;
  }
  public resetJsChallengeParameters() {
    this._jsChallengeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsChallengeParametersInput() {
    return this._jsChallengeParameters.internalValue;
  }

  // malicious_user_mitigation - computed: false, optional: true, required: false
  private _maliciousUserMitigation = new HttpLoadbalancerEnableChallengeMaliciousUserMitigationOutputReference(this, "malicious_user_mitigation");
  public get maliciousUserMitigation() {
    return this._maliciousUserMitigation;
  }
  public putMaliciousUserMitigation(value: HttpLoadbalancerEnableChallengeMaliciousUserMitigation) {
    this._maliciousUserMitigation.internalValue = value;
  }
  public resetMaliciousUserMitigation() {
    this._maliciousUserMitigation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousUserMitigationInput() {
    return this._maliciousUserMitigation.internalValue;
  }
}
export interface HttpLoadbalancerEnableIpReputation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ip_threat_categories HttpLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function httpLoadbalancerEnableIpReputationToTerraform(struct?: HttpLoadbalancerEnableIpReputationOutputReference | HttpLoadbalancerEnableIpReputation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function httpLoadbalancerEnableIpReputationToHclTerraform(struct?: HttpLoadbalancerEnableIpReputationOutputReference | HttpLoadbalancerEnableIpReputation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableIpReputationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableIpReputation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableIpReputation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface HttpLoadbalancerEnableTrustClientIpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#client_ip_headers HttpLoadbalancer#client_ip_headers}
  */
  readonly clientIpHeaders: string[];
}

export function httpLoadbalancerEnableTrustClientIpHeadersToTerraform(struct?: HttpLoadbalancerEnableTrustClientIpHeadersOutputReference | HttpLoadbalancerEnableTrustClientIpHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientIpHeaders),
  }
}


export function httpLoadbalancerEnableTrustClientIpHeadersToHclTerraform(struct?: HttpLoadbalancerEnableTrustClientIpHeadersOutputReference | HttpLoadbalancerEnableTrustClientIpHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientIpHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerEnableTrustClientIpHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerEnableTrustClientIpHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpHeaders = this._clientIpHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerEnableTrustClientIpHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientIpHeaders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientIpHeaders = value.clientIpHeaders;
    }
  }

  // client_ip_headers - computed: false, optional: false, required: true
  private _clientIpHeaders?: string[]; 
  public get clientIpHeaders() {
    return this.getListAttribute('client_ip_headers');
  }
  public set clientIpHeaders(value: string[]) {
    this._clientIpHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpHeadersInput() {
    return this._clientIpHeaders;
  }
}
export interface HttpLoadbalancerGraphqlRulesGraphqlSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_introspection HttpLoadbalancer#disable_introspection}
  */
  readonly disableIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#enable_introspection HttpLoadbalancer#enable_introspection}
  */
  readonly enableIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_batched_queries HttpLoadbalancer#max_batched_queries}
  */
  readonly maxBatchedQueries: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_depth HttpLoadbalancer#max_depth}
  */
  readonly maxDepth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_total_length HttpLoadbalancer#max_total_length}
  */
  readonly maxTotalLength: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_value_length HttpLoadbalancer#max_value_length}
  */
  readonly maxValueLength: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#policy_name HttpLoadbalancer#policy_name}
  */
  readonly policyName?: string;
}

export function httpLoadbalancerGraphqlRulesGraphqlSettingsToTerraform(struct?: HttpLoadbalancerGraphqlRulesGraphqlSettingsOutputReference | HttpLoadbalancerGraphqlRulesGraphqlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_introspection: cdktf.booleanToTerraform(struct!.disableIntrospection),
    enable_introspection: cdktf.booleanToTerraform(struct!.enableIntrospection),
    max_batched_queries: cdktf.numberToTerraform(struct!.maxBatchedQueries),
    max_depth: cdktf.numberToTerraform(struct!.maxDepth),
    max_total_length: cdktf.numberToTerraform(struct!.maxTotalLength),
    max_value_length: cdktf.numberToTerraform(struct!.maxValueLength),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}


export function httpLoadbalancerGraphqlRulesGraphqlSettingsToHclTerraform(struct?: HttpLoadbalancerGraphqlRulesGraphqlSettingsOutputReference | HttpLoadbalancerGraphqlRulesGraphqlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.disableIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_batched_queries: {
      value: cdktf.numberToHclTerraform(struct!.maxBatchedQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_depth: {
      value: cdktf.numberToHclTerraform(struct!.maxDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_total_length: {
      value: cdktf.numberToHclTerraform(struct!.maxTotalLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_value_length: {
      value: cdktf.numberToHclTerraform(struct!.maxValueLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerGraphqlRulesGraphqlSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerGraphqlRulesGraphqlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIntrospection = this._disableIntrospection;
    }
    if (this._enableIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntrospection = this._enableIntrospection;
    }
    if (this._maxBatchedQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchedQueries = this._maxBatchedQueries;
    }
    if (this._maxDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDepth = this._maxDepth;
    }
    if (this._maxTotalLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTotalLength = this._maxTotalLength;
    }
    if (this._maxValueLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValueLength = this._maxValueLength;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerGraphqlRulesGraphqlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableIntrospection = undefined;
      this._enableIntrospection = undefined;
      this._maxBatchedQueries = undefined;
      this._maxDepth = undefined;
      this._maxTotalLength = undefined;
      this._maxValueLength = undefined;
      this._policyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableIntrospection = value.disableIntrospection;
      this._enableIntrospection = value.enableIntrospection;
      this._maxBatchedQueries = value.maxBatchedQueries;
      this._maxDepth = value.maxDepth;
      this._maxTotalLength = value.maxTotalLength;
      this._maxValueLength = value.maxValueLength;
      this._policyName = value.policyName;
    }
  }

  // disable_introspection - computed: false, optional: true, required: false
  private _disableIntrospection?: boolean | cdktf.IResolvable; 
  public get disableIntrospection() {
    return this.getBooleanAttribute('disable_introspection');
  }
  public set disableIntrospection(value: boolean | cdktf.IResolvable) {
    this._disableIntrospection = value;
  }
  public resetDisableIntrospection() {
    this._disableIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIntrospectionInput() {
    return this._disableIntrospection;
  }

  // enable_introspection - computed: false, optional: true, required: false
  private _enableIntrospection?: boolean | cdktf.IResolvable; 
  public get enableIntrospection() {
    return this.getBooleanAttribute('enable_introspection');
  }
  public set enableIntrospection(value: boolean | cdktf.IResolvable) {
    this._enableIntrospection = value;
  }
  public resetEnableIntrospection() {
    this._enableIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntrospectionInput() {
    return this._enableIntrospection;
  }

  // max_batched_queries - computed: false, optional: false, required: true
  private _maxBatchedQueries?: number; 
  public get maxBatchedQueries() {
    return this.getNumberAttribute('max_batched_queries');
  }
  public set maxBatchedQueries(value: number) {
    this._maxBatchedQueries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchedQueriesInput() {
    return this._maxBatchedQueries;
  }

  // max_depth - computed: false, optional: false, required: true
  private _maxDepth?: number; 
  public get maxDepth() {
    return this.getNumberAttribute('max_depth');
  }
  public set maxDepth(value: number) {
    this._maxDepth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDepthInput() {
    return this._maxDepth;
  }

  // max_total_length - computed: false, optional: false, required: true
  private _maxTotalLength?: number; 
  public get maxTotalLength() {
    return this.getNumberAttribute('max_total_length');
  }
  public set maxTotalLength(value: number) {
    this._maxTotalLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalLengthInput() {
    return this._maxTotalLength;
  }

  // max_value_length - computed: false, optional: false, required: true
  private _maxValueLength?: number; 
  public get maxValueLength() {
    return this.getNumberAttribute('max_value_length');
  }
  public set maxValueLength(value: number) {
    this._maxValueLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueLengthInput() {
    return this._maxValueLength;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}
export interface HttpLoadbalancerGraphqlRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerGraphqlRulesMetadataToTerraform(struct?: HttpLoadbalancerGraphqlRulesMetadataOutputReference | HttpLoadbalancerGraphqlRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerGraphqlRulesMetadataToHclTerraform(struct?: HttpLoadbalancerGraphqlRulesMetadataOutputReference | HttpLoadbalancerGraphqlRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerGraphqlRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerGraphqlRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerGraphqlRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
}
export interface HttpLoadbalancerGraphqlRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_path HttpLoadbalancer#exact_path}
  */
  readonly exactPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#method_get HttpLoadbalancer#method_get}
  */
  readonly methodGet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#method_post HttpLoadbalancer#method_post}
  */
  readonly methodPost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
  /**
  * graphql_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#graphql_settings HttpLoadbalancer#graphql_settings}
  */
  readonly graphqlSettings?: HttpLoadbalancerGraphqlRulesGraphqlSettings;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerGraphqlRulesMetadata;
}

export function httpLoadbalancerGraphqlRulesToTerraform(struct?: HttpLoadbalancerGraphqlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    exact_path: cdktf.stringToTerraform(struct!.exactPath),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    method_get: cdktf.booleanToTerraform(struct!.methodGet),
    method_post: cdktf.booleanToTerraform(struct!.methodPost),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
    graphql_settings: httpLoadbalancerGraphqlRulesGraphqlSettingsToTerraform(struct!.graphqlSettings),
    metadata: httpLoadbalancerGraphqlRulesMetadataToTerraform(struct!.metadata),
  }
}


export function httpLoadbalancerGraphqlRulesToHclTerraform(struct?: HttpLoadbalancerGraphqlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_path: {
      value: cdktf.stringToHclTerraform(struct!.exactPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_get: {
      value: cdktf.booleanToHclTerraform(struct!.methodGet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method_post: {
      value: cdktf.booleanToHclTerraform(struct!.methodPost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graphql_settings: {
      value: httpLoadbalancerGraphqlRulesGraphqlSettingsToHclTerraform(struct!.graphqlSettings),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerGraphqlRulesGraphqlSettingsList",
    },
    metadata: {
      value: httpLoadbalancerGraphqlRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerGraphqlRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerGraphqlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerGraphqlRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._exactPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactPath = this._exactPath;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._methodGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodGet = this._methodGet;
    }
    if (this._methodPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodPost = this._methodPost;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    if (this._graphqlSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphqlSettings = this._graphqlSettings?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerGraphqlRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._exactPath = undefined;
      this._exactValue = undefined;
      this._methodGet = undefined;
      this._methodPost = undefined;
      this._suffixValue = undefined;
      this._graphqlSettings.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._exactPath = value.exactPath;
      this._exactValue = value.exactValue;
      this._methodGet = value.methodGet;
      this._methodPost = value.methodPost;
      this._suffixValue = value.suffixValue;
      this._graphqlSettings.internalValue = value.graphqlSettings;
      this._metadata.internalValue = value.metadata;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // exact_path - computed: false, optional: false, required: true
  private _exactPath?: string; 
  public get exactPath() {
    return this.getStringAttribute('exact_path');
  }
  public set exactPath(value: string) {
    this._exactPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactPathInput() {
    return this._exactPath;
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // method_get - computed: false, optional: true, required: false
  private _methodGet?: boolean | cdktf.IResolvable; 
  public get methodGet() {
    return this.getBooleanAttribute('method_get');
  }
  public set methodGet(value: boolean | cdktf.IResolvable) {
    this._methodGet = value;
  }
  public resetMethodGet() {
    this._methodGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodGetInput() {
    return this._methodGet;
  }

  // method_post - computed: false, optional: true, required: false
  private _methodPost?: boolean | cdktf.IResolvable; 
  public get methodPost() {
    return this.getBooleanAttribute('method_post');
  }
  public set methodPost(value: boolean | cdktf.IResolvable) {
    this._methodPost = value;
  }
  public resetMethodPost() {
    this._methodPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodPostInput() {
    return this._methodPost;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }

  // graphql_settings - computed: false, optional: true, required: false
  private _graphqlSettings = new HttpLoadbalancerGraphqlRulesGraphqlSettingsOutputReference(this, "graphql_settings");
  public get graphqlSettings() {
    return this._graphqlSettings;
  }
  public putGraphqlSettings(value: HttpLoadbalancerGraphqlRulesGraphqlSettings) {
    this._graphqlSettings.internalValue = value;
  }
  public resetGraphqlSettings() {
    this._graphqlSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlSettingsInput() {
    return this._graphqlSettings.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerGraphqlRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerGraphqlRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class HttpLoadbalancerGraphqlRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerGraphqlRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerGraphqlRulesOutputReference {
    return new HttpLoadbalancerGraphqlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#dns_volterra_managed HttpLoadbalancer#dns_volterra_managed}
  */
  readonly dnsVolterraManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port HttpLoadbalancer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port_ranges HttpLoadbalancer#port_ranges}
  */
  readonly portRanges?: string;
}

export function httpLoadbalancerHttpToTerraform(struct?: HttpLoadbalancerHttpOutputReference | HttpLoadbalancerHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_volterra_managed: cdktf.booleanToTerraform(struct!.dnsVolterraManaged),
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function httpLoadbalancerHttpToHclTerraform(struct?: HttpLoadbalancerHttpOutputReference | HttpLoadbalancerHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_volterra_managed: {
      value: cdktf.booleanToHclTerraform(struct!.dnsVolterraManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsVolterraManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsVolterraManaged = this._dnsVolterraManaged;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsVolterraManaged = undefined;
      this._port = undefined;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsVolterraManaged = value.dnsVolterraManaged;
      this._port = value.port;
      this._portRanges = value.portRanges;
    }
  }

  // dns_volterra_managed - computed: false, optional: true, required: false
  private _dnsVolterraManaged?: boolean | cdktf.IResolvable; 
  public get dnsVolterraManaged() {
    return this.getBooleanAttribute('dns_volterra_managed');
  }
  public set dnsVolterraManaged(value: boolean | cdktf.IResolvable) {
    this._dnsVolterraManaged = value;
  }
  public resetDnsVolterraManaged() {
    this._dnsVolterraManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsVolterraManagedInput() {
    return this._dnsVolterraManaged;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }
}
export interface HttpLoadbalancerHttpsCoalescingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_coalescing HttpLoadbalancer#default_coalescing}
  */
  readonly defaultCoalescing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#strict_coalescing HttpLoadbalancer#strict_coalescing}
  */
  readonly strictCoalescing?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerHttpsCoalescingOptionsToTerraform(struct?: HttpLoadbalancerHttpsCoalescingOptionsOutputReference | HttpLoadbalancerHttpsCoalescingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_coalescing: cdktf.booleanToTerraform(struct!.defaultCoalescing),
    strict_coalescing: cdktf.booleanToTerraform(struct!.strictCoalescing),
  }
}


export function httpLoadbalancerHttpsCoalescingOptionsToHclTerraform(struct?: HttpLoadbalancerHttpsCoalescingOptionsOutputReference | HttpLoadbalancerHttpsCoalescingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_coalescing: {
      value: cdktf.booleanToHclTerraform(struct!.defaultCoalescing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_coalescing: {
      value: cdktf.booleanToHclTerraform(struct!.strictCoalescing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsCoalescingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsCoalescingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCoalescing !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCoalescing = this._defaultCoalescing;
    }
    if (this._strictCoalescing !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictCoalescing = this._strictCoalescing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsCoalescingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultCoalescing = undefined;
      this._strictCoalescing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultCoalescing = value.defaultCoalescing;
      this._strictCoalescing = value.strictCoalescing;
    }
  }

  // default_coalescing - computed: false, optional: true, required: false
  private _defaultCoalescing?: boolean | cdktf.IResolvable; 
  public get defaultCoalescing() {
    return this.getBooleanAttribute('default_coalescing');
  }
  public set defaultCoalescing(value: boolean | cdktf.IResolvable) {
    this._defaultCoalescing = value;
  }
  public resetDefaultCoalescing() {
    this._defaultCoalescing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCoalescingInput() {
    return this._defaultCoalescing;
  }

  // strict_coalescing - computed: false, optional: true, required: false
  private _strictCoalescing?: boolean | cdktf.IResolvable; 
  public get strictCoalescing() {
    return this.getBooleanAttribute('strict_coalescing');
  }
  public set strictCoalescing(value: boolean | cdktf.IResolvable) {
    this._strictCoalescing = value;
  }
  public resetStrictCoalescing() {
    this._strictCoalescing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictCoalescingInput() {
    return this._strictCoalescing;
  }
}
export interface HttpLoadbalancerHttpsHeaderTransformationType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_header_transformation HttpLoadbalancer#default_header_transformation}
  */
  readonly defaultHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#legacy_header_transformation HttpLoadbalancer#legacy_header_transformation}
  */
  readonly legacyHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#preserve_case_header_transformation HttpLoadbalancer#preserve_case_header_transformation}
  */
  readonly preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#proper_case_header_transformation HttpLoadbalancer#proper_case_header_transformation}
  */
  readonly properCaseHeaderTransformation?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerHttpsHeaderTransformationTypeToTerraform(struct?: HttpLoadbalancerHttpsHeaderTransformationTypeOutputReference | HttpLoadbalancerHttpsHeaderTransformationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_header_transformation: cdktf.booleanToTerraform(struct!.defaultHeaderTransformation),
    legacy_header_transformation: cdktf.booleanToTerraform(struct!.legacyHeaderTransformation),
    preserve_case_header_transformation: cdktf.booleanToTerraform(struct!.preserveCaseHeaderTransformation),
    proper_case_header_transformation: cdktf.booleanToTerraform(struct!.properCaseHeaderTransformation),
  }
}


export function httpLoadbalancerHttpsHeaderTransformationTypeToHclTerraform(struct?: HttpLoadbalancerHttpsHeaderTransformationTypeOutputReference | HttpLoadbalancerHttpsHeaderTransformationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legacy_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.legacyHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.preserveCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proper_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.properCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsHeaderTransformationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsHeaderTransformationType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHeaderTransformation = this._defaultHeaderTransformation;
    }
    if (this._legacyHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyHeaderTransformation = this._legacyHeaderTransformation;
    }
    if (this._preserveCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveCaseHeaderTransformation = this._preserveCaseHeaderTransformation;
    }
    if (this._properCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.properCaseHeaderTransformation = this._properCaseHeaderTransformation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsHeaderTransformationType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultHeaderTransformation = undefined;
      this._legacyHeaderTransformation = undefined;
      this._preserveCaseHeaderTransformation = undefined;
      this._properCaseHeaderTransformation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultHeaderTransformation = value.defaultHeaderTransformation;
      this._legacyHeaderTransformation = value.legacyHeaderTransformation;
      this._preserveCaseHeaderTransformation = value.preserveCaseHeaderTransformation;
      this._properCaseHeaderTransformation = value.properCaseHeaderTransformation;
    }
  }

  // default_header_transformation - computed: false, optional: true, required: false
  private _defaultHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get defaultHeaderTransformation() {
    return this.getBooleanAttribute('default_header_transformation');
  }
  public set defaultHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._defaultHeaderTransformation = value;
  }
  public resetDefaultHeaderTransformation() {
    this._defaultHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderTransformationInput() {
    return this._defaultHeaderTransformation;
  }

  // legacy_header_transformation - computed: false, optional: true, required: false
  private _legacyHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get legacyHeaderTransformation() {
    return this.getBooleanAttribute('legacy_header_transformation');
  }
  public set legacyHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._legacyHeaderTransformation = value;
  }
  public resetLegacyHeaderTransformation() {
    this._legacyHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyHeaderTransformationInput() {
    return this._legacyHeaderTransformation;
  }

  // preserve_case_header_transformation - computed: false, optional: true, required: false
  private _preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get preserveCaseHeaderTransformation() {
    return this.getBooleanAttribute('preserve_case_header_transformation');
  }
  public set preserveCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._preserveCaseHeaderTransformation = value;
  }
  public resetPreserveCaseHeaderTransformation() {
    this._preserveCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveCaseHeaderTransformationInput() {
    return this._preserveCaseHeaderTransformation;
  }

  // proper_case_header_transformation - computed: false, optional: true, required: false
  private _properCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get properCaseHeaderTransformation() {
    return this.getBooleanAttribute('proper_case_header_transformation');
  }
  public set properCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._properCaseHeaderTransformation = value;
  }
  public resetProperCaseHeaderTransformation() {
    this._properCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get properCaseHeaderTransformationInput() {
    return this._properCaseHeaderTransformation;
  }
}
export interface HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_header_transformation HttpLoadbalancer#default_header_transformation}
  */
  readonly defaultHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#legacy_header_transformation HttpLoadbalancer#legacy_header_transformation}
  */
  readonly legacyHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#preserve_case_header_transformation HttpLoadbalancer#preserve_case_header_transformation}
  */
  readonly preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#proper_case_header_transformation HttpLoadbalancer#proper_case_header_transformation}
  */
  readonly properCaseHeaderTransformation?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationToTerraform(struct?: HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationOutputReference | HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_header_transformation: cdktf.booleanToTerraform(struct!.defaultHeaderTransformation),
    legacy_header_transformation: cdktf.booleanToTerraform(struct!.legacyHeaderTransformation),
    preserve_case_header_transformation: cdktf.booleanToTerraform(struct!.preserveCaseHeaderTransformation),
    proper_case_header_transformation: cdktf.booleanToTerraform(struct!.properCaseHeaderTransformation),
  }
}


export function httpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationToHclTerraform(struct?: HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationOutputReference | HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legacy_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.legacyHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.preserveCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proper_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.properCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHeaderTransformation = this._defaultHeaderTransformation;
    }
    if (this._legacyHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyHeaderTransformation = this._legacyHeaderTransformation;
    }
    if (this._preserveCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveCaseHeaderTransformation = this._preserveCaseHeaderTransformation;
    }
    if (this._properCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.properCaseHeaderTransformation = this._properCaseHeaderTransformation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultHeaderTransformation = undefined;
      this._legacyHeaderTransformation = undefined;
      this._preserveCaseHeaderTransformation = undefined;
      this._properCaseHeaderTransformation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultHeaderTransformation = value.defaultHeaderTransformation;
      this._legacyHeaderTransformation = value.legacyHeaderTransformation;
      this._preserveCaseHeaderTransformation = value.preserveCaseHeaderTransformation;
      this._properCaseHeaderTransformation = value.properCaseHeaderTransformation;
    }
  }

  // default_header_transformation - computed: false, optional: true, required: false
  private _defaultHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get defaultHeaderTransformation() {
    return this.getBooleanAttribute('default_header_transformation');
  }
  public set defaultHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._defaultHeaderTransformation = value;
  }
  public resetDefaultHeaderTransformation() {
    this._defaultHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderTransformationInput() {
    return this._defaultHeaderTransformation;
  }

  // legacy_header_transformation - computed: false, optional: true, required: false
  private _legacyHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get legacyHeaderTransformation() {
    return this.getBooleanAttribute('legacy_header_transformation');
  }
  public set legacyHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._legacyHeaderTransformation = value;
  }
  public resetLegacyHeaderTransformation() {
    this._legacyHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyHeaderTransformationInput() {
    return this._legacyHeaderTransformation;
  }

  // preserve_case_header_transformation - computed: false, optional: true, required: false
  private _preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get preserveCaseHeaderTransformation() {
    return this.getBooleanAttribute('preserve_case_header_transformation');
  }
  public set preserveCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._preserveCaseHeaderTransformation = value;
  }
  public resetPreserveCaseHeaderTransformation() {
    this._preserveCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveCaseHeaderTransformationInput() {
    return this._preserveCaseHeaderTransformation;
  }

  // proper_case_header_transformation - computed: false, optional: true, required: false
  private _properCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get properCaseHeaderTransformation() {
    return this.getBooleanAttribute('proper_case_header_transformation');
  }
  public set properCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._properCaseHeaderTransformation = value;
  }
  public resetProperCaseHeaderTransformation() {
    this._properCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get properCaseHeaderTransformationInput() {
    return this._properCaseHeaderTransformation;
  }
}
export interface HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1Only {
  /**
  * header_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#header_transformation HttpLoadbalancer#header_transformation}
  */
  readonly headerTransformation?: HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation;
}

export function httpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyToTerraform(struct?: HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyOutputReference | HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1Only): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_transformation: httpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationToTerraform(struct!.headerTransformation),
  }
}


export function httpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyToHclTerraform(struct?: HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyOutputReference | HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1Only): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_transformation: {
      value: httpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationToHclTerraform(struct!.headerTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1Only | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTransformation = this._headerTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1Only | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerTransformation.internalValue = value.headerTransformation;
    }
  }

  // header_transformation - computed: false, optional: true, required: false
  private _headerTransformation = new HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationOutputReference(this, "header_transformation");
  public get headerTransformation() {
    return this._headerTransformation;
  }
  public putHeaderTransformation(value: HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation) {
    this._headerTransformation.internalValue = value;
  }
  public resetHeaderTransformation() {
    this._headerTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTransformationInput() {
    return this._headerTransformation.internalValue;
  }
}
export interface HttpLoadbalancerHttpsHttpProtocolOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_protocol_enable_v1_v2 HttpLoadbalancer#http_protocol_enable_v1_v2}
  */
  readonly httpProtocolEnableV1V2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_protocol_enable_v2_only HttpLoadbalancer#http_protocol_enable_v2_only}
  */
  readonly httpProtocolEnableV2Only?: boolean | cdktf.IResolvable;
  /**
  * http_protocol_enable_v1_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_protocol_enable_v1_only HttpLoadbalancer#http_protocol_enable_v1_only}
  */
  readonly httpProtocolEnableV1Only?: HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1Only;
}

export function httpLoadbalancerHttpsHttpProtocolOptionsToTerraform(struct?: HttpLoadbalancerHttpsHttpProtocolOptionsOutputReference | HttpLoadbalancerHttpsHttpProtocolOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_protocol_enable_v1_v2: cdktf.booleanToTerraform(struct!.httpProtocolEnableV1V2),
    http_protocol_enable_v2_only: cdktf.booleanToTerraform(struct!.httpProtocolEnableV2Only),
    http_protocol_enable_v1_only: httpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyToTerraform(struct!.httpProtocolEnableV1Only),
  }
}


export function httpLoadbalancerHttpsHttpProtocolOptionsToHclTerraform(struct?: HttpLoadbalancerHttpsHttpProtocolOptionsOutputReference | HttpLoadbalancerHttpsHttpProtocolOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_protocol_enable_v1_v2: {
      value: cdktf.booleanToHclTerraform(struct!.httpProtocolEnableV1V2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_protocol_enable_v2_only: {
      value: cdktf.booleanToHclTerraform(struct!.httpProtocolEnableV2Only),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_protocol_enable_v1_only: {
      value: httpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyToHclTerraform(struct!.httpProtocolEnableV1Only),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsHttpProtocolOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsHttpProtocolOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpProtocolEnableV1V2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolEnableV1V2 = this._httpProtocolEnableV1V2;
    }
    if (this._httpProtocolEnableV2Only !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolEnableV2Only = this._httpProtocolEnableV2Only;
    }
    if (this._httpProtocolEnableV1Only?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolEnableV1Only = this._httpProtocolEnableV1Only?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsHttpProtocolOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpProtocolEnableV1V2 = undefined;
      this._httpProtocolEnableV2Only = undefined;
      this._httpProtocolEnableV1Only.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpProtocolEnableV1V2 = value.httpProtocolEnableV1V2;
      this._httpProtocolEnableV2Only = value.httpProtocolEnableV2Only;
      this._httpProtocolEnableV1Only.internalValue = value.httpProtocolEnableV1Only;
    }
  }

  // http_protocol_enable_v1_v2 - computed: false, optional: true, required: false
  private _httpProtocolEnableV1V2?: boolean | cdktf.IResolvable; 
  public get httpProtocolEnableV1V2() {
    return this.getBooleanAttribute('http_protocol_enable_v1_v2');
  }
  public set httpProtocolEnableV1V2(value: boolean | cdktf.IResolvable) {
    this._httpProtocolEnableV1V2 = value;
  }
  public resetHttpProtocolEnableV1V2() {
    this._httpProtocolEnableV1V2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolEnableV1V2Input() {
    return this._httpProtocolEnableV1V2;
  }

  // http_protocol_enable_v2_only - computed: false, optional: true, required: false
  private _httpProtocolEnableV2Only?: boolean | cdktf.IResolvable; 
  public get httpProtocolEnableV2Only() {
    return this.getBooleanAttribute('http_protocol_enable_v2_only');
  }
  public set httpProtocolEnableV2Only(value: boolean | cdktf.IResolvable) {
    this._httpProtocolEnableV2Only = value;
  }
  public resetHttpProtocolEnableV2Only() {
    this._httpProtocolEnableV2Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolEnableV2OnlyInput() {
    return this._httpProtocolEnableV2Only;
  }

  // http_protocol_enable_v1_only - computed: false, optional: true, required: false
  private _httpProtocolEnableV1Only = new HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1OnlyOutputReference(this, "http_protocol_enable_v1_only");
  public get httpProtocolEnableV1Only() {
    return this._httpProtocolEnableV1Only;
  }
  public putHttpProtocolEnableV1Only(value: HttpLoadbalancerHttpsHttpProtocolOptionsHttpProtocolEnableV1Only) {
    this._httpProtocolEnableV1Only.internalValue = value;
  }
  public resetHttpProtocolEnableV1Only() {
    this._httpProtocolEnableV1Only.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolEnableV1OnlyInput() {
    return this._httpProtocolEnableV1Only.internalValue;
  }
}
export interface HttpLoadbalancerHttpsTlsCertParamsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerHttpsTlsCertParamsCertificatesToTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerHttpsTlsCertParamsCertificatesToHclTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsCertificates | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsCertParamsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerHttpsTlsCertParamsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsCertParamsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerHttpsTlsCertParamsCertificatesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerHttpsTlsCertParamsCertificates[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerHttpsTlsCertParamsCertificatesOutputReference {
    return new HttpLoadbalancerHttpsTlsCertParamsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cipher_suites HttpLoadbalancer#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_version HttpLoadbalancer#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#min_version HttpLoadbalancer#min_version}
  */
  readonly minVersion?: string;
}

export function httpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurityToTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurityOutputReference | HttpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function httpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurityToHclTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurityOutputReference | HttpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface HttpLoadbalancerHttpsTlsCertParamsTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_security HttpLoadbalancer#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#low_security HttpLoadbalancer#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#medium_security HttpLoadbalancer#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_security HttpLoadbalancer#custom_security}
  */
  readonly customSecurity?: HttpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurity;
}

export function httpLoadbalancerHttpsTlsCertParamsTlsConfigToTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsTlsConfigOutputReference | HttpLoadbalancerHttpsTlsCertParamsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: httpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function httpLoadbalancerHttpsTlsCertParamsTlsConfigToHclTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsTlsConfigOutputReference | HttpLoadbalancerHttpsTlsCertParamsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: httpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsCertParamsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsCertParamsTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsCertParamsTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new HttpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: HttpLoadbalancerHttpsTlsCertParamsTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface HttpLoadbalancerHttpsTlsCertParamsUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerHttpsTlsCertParamsUseMtlsCrlToTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsUseMtlsCrlOutputReference | HttpLoadbalancerHttpsTlsCertParamsUseMtlsCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerHttpsTlsCertParamsUseMtlsCrlToHclTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsUseMtlsCrlOutputReference | HttpLoadbalancerHttpsTlsCertParamsUseMtlsCrl): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsCertParamsUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsCertParamsUseMtlsCrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsCertParamsUseMtlsCrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCaToTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCaOutputReference | HttpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCaToHclTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCaOutputReference | HttpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCa): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#xfcc_header_elements HttpLoadbalancer#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function httpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptionsToTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptionsOutputReference | HttpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function httpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptionsToHclTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptionsOutputReference | HttpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface HttpLoadbalancerHttpsTlsCertParamsUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#client_certificate_optional HttpLoadbalancer#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_crl HttpLoadbalancer#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#trusted_ca_url HttpLoadbalancer#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#xfcc_disabled HttpLoadbalancer#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#crl HttpLoadbalancer#crl}
  */
  readonly crl?: HttpLoadbalancerHttpsTlsCertParamsUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#trusted_ca HttpLoadbalancer#trusted_ca}
  */
  readonly trustedCa?: HttpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#xfcc_options HttpLoadbalancer#xfcc_options}
  */
  readonly xfccOptions?: HttpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptions;
}

export function httpLoadbalancerHttpsTlsCertParamsUseMtlsToTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsUseMtlsOutputReference | HttpLoadbalancerHttpsTlsCertParamsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: httpLoadbalancerHttpsTlsCertParamsUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: httpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: httpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function httpLoadbalancerHttpsTlsCertParamsUseMtlsToHclTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsUseMtlsOutputReference | HttpLoadbalancerHttpsTlsCertParamsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: httpLoadbalancerHttpsTlsCertParamsUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsCertParamsUseMtlsCrlList",
    },
    trusted_ca: {
      value: httpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: httpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsCertParamsUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsCertParamsUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsCertParamsUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new HttpLoadbalancerHttpsTlsCertParamsUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: HttpLoadbalancerHttpsTlsCertParamsUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new HttpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: HttpLoadbalancerHttpsTlsCertParamsUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new HttpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: HttpLoadbalancerHttpsTlsCertParamsUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface HttpLoadbalancerHttpsTlsCertParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_mtls HttpLoadbalancer#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#certificates HttpLoadbalancer#certificates}
  */
  readonly certificates: HttpLoadbalancerHttpsTlsCertParamsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tls_config HttpLoadbalancer#tls_config}
  */
  readonly tlsConfig?: HttpLoadbalancerHttpsTlsCertParamsTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#use_mtls HttpLoadbalancer#use_mtls}
  */
  readonly useMtls?: HttpLoadbalancerHttpsTlsCertParamsUseMtls;
}

export function httpLoadbalancerHttpsTlsCertParamsToTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsOutputReference | HttpLoadbalancerHttpsTlsCertParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    certificates: cdktf.listMapper(httpLoadbalancerHttpsTlsCertParamsCertificatesToTerraform, true)(struct!.certificates),
    tls_config: httpLoadbalancerHttpsTlsCertParamsTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: httpLoadbalancerHttpsTlsCertParamsUseMtlsToTerraform(struct!.useMtls),
  }
}


export function httpLoadbalancerHttpsTlsCertParamsToHclTerraform(struct?: HttpLoadbalancerHttpsTlsCertParamsOutputReference | HttpLoadbalancerHttpsTlsCertParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificates: {
      value: cdktf.listMapperHcl(httpLoadbalancerHttpsTlsCertParamsCertificatesToHclTerraform, true)(struct!.certificates),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsCertParamsCertificatesList",
    },
    tls_config: {
      value: httpLoadbalancerHttpsTlsCertParamsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsCertParamsTlsConfigList",
    },
    use_mtls: {
      value: httpLoadbalancerHttpsTlsCertParamsUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsCertParamsUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsCertParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsCertParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsCertParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noMtls = undefined;
      this._certificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noMtls = value.noMtls;
      this._certificates.internalValue = value.certificates;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // certificates - computed: false, optional: false, required: true
  private _certificates = new HttpLoadbalancerHttpsTlsCertParamsCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: HttpLoadbalancerHttpsTlsCertParamsCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new HttpLoadbalancerHttpsTlsCertParamsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: HttpLoadbalancerHttpsTlsCertParamsTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new HttpLoadbalancerHttpsTlsCertParamsUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: HttpLoadbalancerHttpsTlsCertParamsUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface HttpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#hash_algorithms HttpLoadbalancer#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function httpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function httpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hashAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAlgorithms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAlgorithms = value.hashAlgorithms;
    }
  }

  // hash_algorithms - computed: false, optional: false, required: true
  private _hashAlgorithms?: string[]; 
  public get hashAlgorithms() {
    return this.getListAttribute('hash_algorithms');
  }
  public set hashAlgorithms(value: string[]) {
    this._hashAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmsInput() {
    return this._hashAlgorithms;
  }
}
export interface HttpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling {
}

export function httpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function httpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HttpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
}
export interface HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding HttpLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#version HttpLoadbalancer#version}
  */
  readonly version?: number;
}

export function httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding_type HttpLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info_internal HttpLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#vault_secret_info HttpLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#wingman_secret_info HttpLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo;
}

export function httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface HttpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults {
}

export function httpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function httpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsOutputReference | HttpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HttpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface HttpLoadbalancerHttpsTlsParametersTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#certificate_url HttpLoadbalancer#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_hash_algorithms HttpLoadbalancer#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_ocsp_stapling HttpLoadbalancer#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#private_key HttpLoadbalancer#private_key}
  */
  readonly privateKey: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#use_system_defaults HttpLoadbalancer#use_system_defaults}
  */
  readonly useSystemDefaults?: HttpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults;
}

export function httpLoadbalancerHttpsTlsParametersTlsCertificatesToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: httpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: httpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: httpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function httpLoadbalancerHttpsTlsParametersTlsCertificatesToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_hash_algorithms: {
      value: httpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: httpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: httpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: httpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersTlsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._customHashAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHashAlgorithms = this._customHashAlgorithms?.internalValue;
    }
    if (this._disableOcspStapling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOcspStapling = this._disableOcspStapling?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._useSystemDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemDefaults = this._useSystemDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersTlsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateUrl = value.certificateUrl;
      this._description = value.description;
      this._customHashAlgorithms.internalValue = value.customHashAlgorithms;
      this._disableOcspStapling.internalValue = value.disableOcspStapling;
      this._privateKey.internalValue = value.privateKey;
      this._useSystemDefaults.internalValue = value.useSystemDefaults;
    }
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
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

  // custom_hash_algorithms - computed: false, optional: true, required: false
  private _customHashAlgorithms = new HttpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms) {
    this._customHashAlgorithms.internalValue = value;
  }
  public resetCustomHashAlgorithms() {
    this._customHashAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHashAlgorithmsInput() {
    return this._customHashAlgorithms.internalValue;
  }

  // disable_ocsp_stapling - computed: false, optional: true, required: false
  private _disableOcspStapling = new HttpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling) {
    this._disableOcspStapling.internalValue = value;
  }
  public resetDisableOcspStapling() {
    this._disableOcspStapling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOcspStaplingInput() {
    return this._disableOcspStapling.internalValue;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new HttpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: HttpLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults) {
    this._useSystemDefaults.internalValue = value;
  }
  public resetUseSystemDefaults() {
    this._useSystemDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemDefaultsInput() {
    return this._useSystemDefaults.internalValue;
  }
}

export class HttpLoadbalancerHttpsTlsParametersTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerHttpsTlsParametersTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerHttpsTlsParametersTlsCertificatesOutputReference {
    return new HttpLoadbalancerHttpsTlsParametersTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cipher_suites HttpLoadbalancer#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_version HttpLoadbalancer#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#min_version HttpLoadbalancer#min_version}
  */
  readonly minVersion?: string;
}

export function httpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurityToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurityOutputReference | HttpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function httpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurityToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurityOutputReference | HttpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface HttpLoadbalancerHttpsTlsParametersTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_security HttpLoadbalancer#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#low_security HttpLoadbalancer#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#medium_security HttpLoadbalancer#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_security HttpLoadbalancer#custom_security}
  */
  readonly customSecurity?: HttpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurity;
}

export function httpLoadbalancerHttpsTlsParametersTlsConfigToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsConfigOutputReference | HttpLoadbalancerHttpsTlsParametersTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: httpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function httpLoadbalancerHttpsTlsParametersTlsConfigToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersTlsConfigOutputReference | HttpLoadbalancerHttpsTlsParametersTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: httpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new HttpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: HttpLoadbalancerHttpsTlsParametersTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface HttpLoadbalancerHttpsTlsParametersUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerHttpsTlsParametersUseMtlsCrlToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersUseMtlsCrlOutputReference | HttpLoadbalancerHttpsTlsParametersUseMtlsCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerHttpsTlsParametersUseMtlsCrlToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersUseMtlsCrlOutputReference | HttpLoadbalancerHttpsTlsParametersUseMtlsCrl): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersUseMtlsCrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersUseMtlsCrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerHttpsTlsParametersUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerHttpsTlsParametersUseMtlsTrustedCaToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersUseMtlsTrustedCaOutputReference | HttpLoadbalancerHttpsTlsParametersUseMtlsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerHttpsTlsParametersUseMtlsTrustedCaToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersUseMtlsTrustedCaOutputReference | HttpLoadbalancerHttpsTlsParametersUseMtlsTrustedCa): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersUseMtlsTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersUseMtlsTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerHttpsTlsParametersUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#xfcc_header_elements HttpLoadbalancer#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function httpLoadbalancerHttpsTlsParametersUseMtlsXfccOptionsToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersUseMtlsXfccOptionsOutputReference | HttpLoadbalancerHttpsTlsParametersUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function httpLoadbalancerHttpsTlsParametersUseMtlsXfccOptionsToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersUseMtlsXfccOptionsOutputReference | HttpLoadbalancerHttpsTlsParametersUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface HttpLoadbalancerHttpsTlsParametersUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#client_certificate_optional HttpLoadbalancer#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_crl HttpLoadbalancer#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#trusted_ca_url HttpLoadbalancer#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#xfcc_disabled HttpLoadbalancer#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#crl HttpLoadbalancer#crl}
  */
  readonly crl?: HttpLoadbalancerHttpsTlsParametersUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#trusted_ca HttpLoadbalancer#trusted_ca}
  */
  readonly trustedCa?: HttpLoadbalancerHttpsTlsParametersUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#xfcc_options HttpLoadbalancer#xfcc_options}
  */
  readonly xfccOptions?: HttpLoadbalancerHttpsTlsParametersUseMtlsXfccOptions;
}

export function httpLoadbalancerHttpsTlsParametersUseMtlsToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersUseMtlsOutputReference | HttpLoadbalancerHttpsTlsParametersUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: httpLoadbalancerHttpsTlsParametersUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: httpLoadbalancerHttpsTlsParametersUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: httpLoadbalancerHttpsTlsParametersUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function httpLoadbalancerHttpsTlsParametersUseMtlsToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersUseMtlsOutputReference | HttpLoadbalancerHttpsTlsParametersUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: httpLoadbalancerHttpsTlsParametersUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersUseMtlsCrlList",
    },
    trusted_ca: {
      value: httpLoadbalancerHttpsTlsParametersUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: httpLoadbalancerHttpsTlsParametersUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParametersUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParametersUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new HttpLoadbalancerHttpsTlsParametersUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: HttpLoadbalancerHttpsTlsParametersUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new HttpLoadbalancerHttpsTlsParametersUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: HttpLoadbalancerHttpsTlsParametersUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new HttpLoadbalancerHttpsTlsParametersUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: HttpLoadbalancerHttpsTlsParametersUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface HttpLoadbalancerHttpsTlsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_mtls HttpLoadbalancer#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tls_certificates HttpLoadbalancer#tls_certificates}
  */
  readonly tlsCertificates: HttpLoadbalancerHttpsTlsParametersTlsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tls_config HttpLoadbalancer#tls_config}
  */
  readonly tlsConfig?: HttpLoadbalancerHttpsTlsParametersTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#use_mtls HttpLoadbalancer#use_mtls}
  */
  readonly useMtls?: HttpLoadbalancerHttpsTlsParametersUseMtls;
}

export function httpLoadbalancerHttpsTlsParametersToTerraform(struct?: HttpLoadbalancerHttpsTlsParametersOutputReference | HttpLoadbalancerHttpsTlsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    tls_certificates: cdktf.listMapper(httpLoadbalancerHttpsTlsParametersTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    tls_config: httpLoadbalancerHttpsTlsParametersTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: httpLoadbalancerHttpsTlsParametersUseMtlsToTerraform(struct!.useMtls),
  }
}


export function httpLoadbalancerHttpsTlsParametersToHclTerraform(struct?: HttpLoadbalancerHttpsTlsParametersOutputReference | HttpLoadbalancerHttpsTlsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_certificates: {
      value: cdktf.listMapperHcl(httpLoadbalancerHttpsTlsParametersTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersTlsCertificatesList",
    },
    tls_config: {
      value: httpLoadbalancerHttpsTlsParametersTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersTlsConfigList",
    },
    use_mtls: {
      value: httpLoadbalancerHttpsTlsParametersUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsTlsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsTlsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsTlsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noMtls = undefined;
      this._tlsCertificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noMtls = value.noMtls;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new HttpLoadbalancerHttpsTlsParametersTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: HttpLoadbalancerHttpsTlsParametersTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new HttpLoadbalancerHttpsTlsParametersTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: HttpLoadbalancerHttpsTlsParametersTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new HttpLoadbalancerHttpsTlsParametersUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: HttpLoadbalancerHttpsTlsParametersUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface HttpLoadbalancerHttps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_hsts HttpLoadbalancer#add_hsts}
  */
  readonly addHsts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#append_server_name HttpLoadbalancer#append_server_name}
  */
  readonly appendServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#connection_idle_timeout HttpLoadbalancer#connection_idle_timeout}
  */
  readonly connectionIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_header HttpLoadbalancer#default_header}
  */
  readonly defaultHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_loadbalancer HttpLoadbalancer#default_loadbalancer}
  */
  readonly defaultLoadbalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_path_normalize HttpLoadbalancer#disable_path_normalize}
  */
  readonly disablePathNormalize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#enable_path_normalize HttpLoadbalancer#enable_path_normalize}
  */
  readonly enablePathNormalize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_redirect HttpLoadbalancer#http_redirect}
  */
  readonly httpRedirect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#non_default_loadbalancer HttpLoadbalancer#non_default_loadbalancer}
  */
  readonly nonDefaultLoadbalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#pass_through HttpLoadbalancer#pass_through}
  */
  readonly passThrough?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port HttpLoadbalancer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port_ranges HttpLoadbalancer#port_ranges}
  */
  readonly portRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#server_name HttpLoadbalancer#server_name}
  */
  readonly serverName?: string;
  /**
  * coalescing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#coalescing_options HttpLoadbalancer#coalescing_options}
  */
  readonly coalescingOptions?: HttpLoadbalancerHttpsCoalescingOptions;
  /**
  * header_transformation_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#header_transformation_type HttpLoadbalancer#header_transformation_type}
  */
  readonly headerTransformationType?: HttpLoadbalancerHttpsHeaderTransformationType;
  /**
  * http_protocol_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_protocol_options HttpLoadbalancer#http_protocol_options}
  */
  readonly httpProtocolOptions?: HttpLoadbalancerHttpsHttpProtocolOptions;
  /**
  * tls_cert_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tls_cert_params HttpLoadbalancer#tls_cert_params}
  */
  readonly tlsCertParams?: HttpLoadbalancerHttpsTlsCertParams;
  /**
  * tls_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tls_parameters HttpLoadbalancer#tls_parameters}
  */
  readonly tlsParameters?: HttpLoadbalancerHttpsTlsParameters;
}

export function httpLoadbalancerHttpsToTerraform(struct?: HttpLoadbalancerHttpsOutputReference | HttpLoadbalancerHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_hsts: cdktf.booleanToTerraform(struct!.addHsts),
    append_server_name: cdktf.stringToTerraform(struct!.appendServerName),
    connection_idle_timeout: cdktf.numberToTerraform(struct!.connectionIdleTimeout),
    default_header: cdktf.booleanToTerraform(struct!.defaultHeader),
    default_loadbalancer: cdktf.booleanToTerraform(struct!.defaultLoadbalancer),
    disable_path_normalize: cdktf.booleanToTerraform(struct!.disablePathNormalize),
    enable_path_normalize: cdktf.booleanToTerraform(struct!.enablePathNormalize),
    http_redirect: cdktf.booleanToTerraform(struct!.httpRedirect),
    non_default_loadbalancer: cdktf.booleanToTerraform(struct!.nonDefaultLoadbalancer),
    pass_through: cdktf.booleanToTerraform(struct!.passThrough),
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    coalescing_options: httpLoadbalancerHttpsCoalescingOptionsToTerraform(struct!.coalescingOptions),
    header_transformation_type: httpLoadbalancerHttpsHeaderTransformationTypeToTerraform(struct!.headerTransformationType),
    http_protocol_options: httpLoadbalancerHttpsHttpProtocolOptionsToTerraform(struct!.httpProtocolOptions),
    tls_cert_params: httpLoadbalancerHttpsTlsCertParamsToTerraform(struct!.tlsCertParams),
    tls_parameters: httpLoadbalancerHttpsTlsParametersToTerraform(struct!.tlsParameters),
  }
}


export function httpLoadbalancerHttpsToHclTerraform(struct?: HttpLoadbalancerHttpsOutputReference | HttpLoadbalancerHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_hsts: {
      value: cdktf.booleanToHclTerraform(struct!.addHsts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    append_server_name: {
      value: cdktf.stringToHclTerraform(struct!.appendServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_header: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_loadbalancer: {
      value: cdktf.booleanToHclTerraform(struct!.defaultLoadbalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_path_normalize: {
      value: cdktf.booleanToHclTerraform(struct!.disablePathNormalize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_path_normalize: {
      value: cdktf.booleanToHclTerraform(struct!.enablePathNormalize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    non_default_loadbalancer: {
      value: cdktf.booleanToHclTerraform(struct!.nonDefaultLoadbalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_through: {
      value: cdktf.booleanToHclTerraform(struct!.passThrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
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
    coalescing_options: {
      value: httpLoadbalancerHttpsCoalescingOptionsToHclTerraform(struct!.coalescingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsCoalescingOptionsList",
    },
    header_transformation_type: {
      value: httpLoadbalancerHttpsHeaderTransformationTypeToHclTerraform(struct!.headerTransformationType),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsHeaderTransformationTypeList",
    },
    http_protocol_options: {
      value: httpLoadbalancerHttpsHttpProtocolOptionsToHclTerraform(struct!.httpProtocolOptions),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsHttpProtocolOptionsList",
    },
    tls_cert_params: {
      value: httpLoadbalancerHttpsTlsCertParamsToHclTerraform(struct!.tlsCertParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsCertParamsList",
    },
    tls_parameters: {
      value: httpLoadbalancerHttpsTlsParametersToHclTerraform(struct!.tlsParameters),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsTlsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHsts !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHsts = this._addHsts;
    }
    if (this._appendServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendServerName = this._appendServerName;
    }
    if (this._connectionIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionIdleTimeout = this._connectionIdleTimeout;
    }
    if (this._defaultHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHeader = this._defaultHeader;
    }
    if (this._defaultLoadbalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLoadbalancer = this._defaultLoadbalancer;
    }
    if (this._disablePathNormalize !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePathNormalize = this._disablePathNormalize;
    }
    if (this._enablePathNormalize !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePathNormalize = this._enablePathNormalize;
    }
    if (this._httpRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirect = this._httpRedirect;
    }
    if (this._nonDefaultLoadbalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonDefaultLoadbalancer = this._nonDefaultLoadbalancer;
    }
    if (this._passThrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passThrough = this._passThrough;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._coalescingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coalescingOptions = this._coalescingOptions?.internalValue;
    }
    if (this._headerTransformationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTransformationType = this._headerTransformationType?.internalValue;
    }
    if (this._httpProtocolOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolOptions = this._httpProtocolOptions?.internalValue;
    }
    if (this._tlsCertParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertParams = this._tlsCertParams?.internalValue;
    }
    if (this._tlsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParameters = this._tlsParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHsts = undefined;
      this._appendServerName = undefined;
      this._connectionIdleTimeout = undefined;
      this._defaultHeader = undefined;
      this._defaultLoadbalancer = undefined;
      this._disablePathNormalize = undefined;
      this._enablePathNormalize = undefined;
      this._httpRedirect = undefined;
      this._nonDefaultLoadbalancer = undefined;
      this._passThrough = undefined;
      this._port = undefined;
      this._portRanges = undefined;
      this._serverName = undefined;
      this._coalescingOptions.internalValue = undefined;
      this._headerTransformationType.internalValue = undefined;
      this._httpProtocolOptions.internalValue = undefined;
      this._tlsCertParams.internalValue = undefined;
      this._tlsParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHsts = value.addHsts;
      this._appendServerName = value.appendServerName;
      this._connectionIdleTimeout = value.connectionIdleTimeout;
      this._defaultHeader = value.defaultHeader;
      this._defaultLoadbalancer = value.defaultLoadbalancer;
      this._disablePathNormalize = value.disablePathNormalize;
      this._enablePathNormalize = value.enablePathNormalize;
      this._httpRedirect = value.httpRedirect;
      this._nonDefaultLoadbalancer = value.nonDefaultLoadbalancer;
      this._passThrough = value.passThrough;
      this._port = value.port;
      this._portRanges = value.portRanges;
      this._serverName = value.serverName;
      this._coalescingOptions.internalValue = value.coalescingOptions;
      this._headerTransformationType.internalValue = value.headerTransformationType;
      this._httpProtocolOptions.internalValue = value.httpProtocolOptions;
      this._tlsCertParams.internalValue = value.tlsCertParams;
      this._tlsParameters.internalValue = value.tlsParameters;
    }
  }

  // add_hsts - computed: false, optional: true, required: false
  private _addHsts?: boolean | cdktf.IResolvable; 
  public get addHsts() {
    return this.getBooleanAttribute('add_hsts');
  }
  public set addHsts(value: boolean | cdktf.IResolvable) {
    this._addHsts = value;
  }
  public resetAddHsts() {
    this._addHsts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHstsInput() {
    return this._addHsts;
  }

  // append_server_name - computed: false, optional: true, required: false
  private _appendServerName?: string; 
  public get appendServerName() {
    return this.getStringAttribute('append_server_name');
  }
  public set appendServerName(value: string) {
    this._appendServerName = value;
  }
  public resetAppendServerName() {
    this._appendServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendServerNameInput() {
    return this._appendServerName;
  }

  // connection_idle_timeout - computed: false, optional: true, required: false
  private _connectionIdleTimeout?: number; 
  public get connectionIdleTimeout() {
    return this.getNumberAttribute('connection_idle_timeout');
  }
  public set connectionIdleTimeout(value: number) {
    this._connectionIdleTimeout = value;
  }
  public resetConnectionIdleTimeout() {
    this._connectionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdleTimeoutInput() {
    return this._connectionIdleTimeout;
  }

  // default_header - computed: false, optional: true, required: false
  private _defaultHeader?: boolean | cdktf.IResolvable; 
  public get defaultHeader() {
    return this.getBooleanAttribute('default_header');
  }
  public set defaultHeader(value: boolean | cdktf.IResolvable) {
    this._defaultHeader = value;
  }
  public resetDefaultHeader() {
    this._defaultHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderInput() {
    return this._defaultHeader;
  }

  // default_loadbalancer - computed: false, optional: true, required: false
  private _defaultLoadbalancer?: boolean | cdktf.IResolvable; 
  public get defaultLoadbalancer() {
    return this.getBooleanAttribute('default_loadbalancer');
  }
  public set defaultLoadbalancer(value: boolean | cdktf.IResolvable) {
    this._defaultLoadbalancer = value;
  }
  public resetDefaultLoadbalancer() {
    this._defaultLoadbalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLoadbalancerInput() {
    return this._defaultLoadbalancer;
  }

  // disable_path_normalize - computed: false, optional: true, required: false
  private _disablePathNormalize?: boolean | cdktf.IResolvable; 
  public get disablePathNormalize() {
    return this.getBooleanAttribute('disable_path_normalize');
  }
  public set disablePathNormalize(value: boolean | cdktf.IResolvable) {
    this._disablePathNormalize = value;
  }
  public resetDisablePathNormalize() {
    this._disablePathNormalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePathNormalizeInput() {
    return this._disablePathNormalize;
  }

  // enable_path_normalize - computed: false, optional: true, required: false
  private _enablePathNormalize?: boolean | cdktf.IResolvable; 
  public get enablePathNormalize() {
    return this.getBooleanAttribute('enable_path_normalize');
  }
  public set enablePathNormalize(value: boolean | cdktf.IResolvable) {
    this._enablePathNormalize = value;
  }
  public resetEnablePathNormalize() {
    this._enablePathNormalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePathNormalizeInput() {
    return this._enablePathNormalize;
  }

  // http_redirect - computed: false, optional: true, required: false
  private _httpRedirect?: boolean | cdktf.IResolvable; 
  public get httpRedirect() {
    return this.getBooleanAttribute('http_redirect');
  }
  public set httpRedirect(value: boolean | cdktf.IResolvable) {
    this._httpRedirect = value;
  }
  public resetHttpRedirect() {
    this._httpRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectInput() {
    return this._httpRedirect;
  }

  // non_default_loadbalancer - computed: false, optional: true, required: false
  private _nonDefaultLoadbalancer?: boolean | cdktf.IResolvable; 
  public get nonDefaultLoadbalancer() {
    return this.getBooleanAttribute('non_default_loadbalancer');
  }
  public set nonDefaultLoadbalancer(value: boolean | cdktf.IResolvable) {
    this._nonDefaultLoadbalancer = value;
  }
  public resetNonDefaultLoadbalancer() {
    this._nonDefaultLoadbalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonDefaultLoadbalancerInput() {
    return this._nonDefaultLoadbalancer;
  }

  // pass_through - computed: false, optional: true, required: false
  private _passThrough?: boolean | cdktf.IResolvable; 
  public get passThrough() {
    return this.getBooleanAttribute('pass_through');
  }
  public set passThrough(value: boolean | cdktf.IResolvable) {
    this._passThrough = value;
  }
  public resetPassThrough() {
    this._passThrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughInput() {
    return this._passThrough;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
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

  // coalescing_options - computed: false, optional: true, required: false
  private _coalescingOptions = new HttpLoadbalancerHttpsCoalescingOptionsOutputReference(this, "coalescing_options");
  public get coalescingOptions() {
    return this._coalescingOptions;
  }
  public putCoalescingOptions(value: HttpLoadbalancerHttpsCoalescingOptions) {
    this._coalescingOptions.internalValue = value;
  }
  public resetCoalescingOptions() {
    this._coalescingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coalescingOptionsInput() {
    return this._coalescingOptions.internalValue;
  }

  // header_transformation_type - computed: false, optional: true, required: false
  private _headerTransformationType = new HttpLoadbalancerHttpsHeaderTransformationTypeOutputReference(this, "header_transformation_type");
  public get headerTransformationType() {
    return this._headerTransformationType;
  }
  public putHeaderTransformationType(value: HttpLoadbalancerHttpsHeaderTransformationType) {
    this._headerTransformationType.internalValue = value;
  }
  public resetHeaderTransformationType() {
    this._headerTransformationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTransformationTypeInput() {
    return this._headerTransformationType.internalValue;
  }

  // http_protocol_options - computed: false, optional: true, required: false
  private _httpProtocolOptions = new HttpLoadbalancerHttpsHttpProtocolOptionsOutputReference(this, "http_protocol_options");
  public get httpProtocolOptions() {
    return this._httpProtocolOptions;
  }
  public putHttpProtocolOptions(value: HttpLoadbalancerHttpsHttpProtocolOptions) {
    this._httpProtocolOptions.internalValue = value;
  }
  public resetHttpProtocolOptions() {
    this._httpProtocolOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolOptionsInput() {
    return this._httpProtocolOptions.internalValue;
  }

  // tls_cert_params - computed: false, optional: true, required: false
  private _tlsCertParams = new HttpLoadbalancerHttpsTlsCertParamsOutputReference(this, "tls_cert_params");
  public get tlsCertParams() {
    return this._tlsCertParams;
  }
  public putTlsCertParams(value: HttpLoadbalancerHttpsTlsCertParams) {
    this._tlsCertParams.internalValue = value;
  }
  public resetTlsCertParams() {
    this._tlsCertParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertParamsInput() {
    return this._tlsCertParams.internalValue;
  }

  // tls_parameters - computed: false, optional: true, required: false
  private _tlsParameters = new HttpLoadbalancerHttpsTlsParametersOutputReference(this, "tls_parameters");
  public get tlsParameters() {
    return this._tlsParameters;
  }
  public putTlsParameters(value: HttpLoadbalancerHttpsTlsParameters) {
    this._tlsParameters.internalValue = value;
  }
  public resetTlsParameters() {
    this._tlsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParametersInput() {
    return this._tlsParameters.internalValue;
  }
}
export interface HttpLoadbalancerHttpsAutoCertCoalescingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_coalescing HttpLoadbalancer#default_coalescing}
  */
  readonly defaultCoalescing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#strict_coalescing HttpLoadbalancer#strict_coalescing}
  */
  readonly strictCoalescing?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerHttpsAutoCertCoalescingOptionsToTerraform(struct?: HttpLoadbalancerHttpsAutoCertCoalescingOptionsOutputReference | HttpLoadbalancerHttpsAutoCertCoalescingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_coalescing: cdktf.booleanToTerraform(struct!.defaultCoalescing),
    strict_coalescing: cdktf.booleanToTerraform(struct!.strictCoalescing),
  }
}


export function httpLoadbalancerHttpsAutoCertCoalescingOptionsToHclTerraform(struct?: HttpLoadbalancerHttpsAutoCertCoalescingOptionsOutputReference | HttpLoadbalancerHttpsAutoCertCoalescingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_coalescing: {
      value: cdktf.booleanToHclTerraform(struct!.defaultCoalescing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_coalescing: {
      value: cdktf.booleanToHclTerraform(struct!.strictCoalescing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsAutoCertCoalescingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsAutoCertCoalescingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCoalescing !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCoalescing = this._defaultCoalescing;
    }
    if (this._strictCoalescing !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictCoalescing = this._strictCoalescing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsAutoCertCoalescingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultCoalescing = undefined;
      this._strictCoalescing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultCoalescing = value.defaultCoalescing;
      this._strictCoalescing = value.strictCoalescing;
    }
  }

  // default_coalescing - computed: false, optional: true, required: false
  private _defaultCoalescing?: boolean | cdktf.IResolvable; 
  public get defaultCoalescing() {
    return this.getBooleanAttribute('default_coalescing');
  }
  public set defaultCoalescing(value: boolean | cdktf.IResolvable) {
    this._defaultCoalescing = value;
  }
  public resetDefaultCoalescing() {
    this._defaultCoalescing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCoalescingInput() {
    return this._defaultCoalescing;
  }

  // strict_coalescing - computed: false, optional: true, required: false
  private _strictCoalescing?: boolean | cdktf.IResolvable; 
  public get strictCoalescing() {
    return this.getBooleanAttribute('strict_coalescing');
  }
  public set strictCoalescing(value: boolean | cdktf.IResolvable) {
    this._strictCoalescing = value;
  }
  public resetStrictCoalescing() {
    this._strictCoalescing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictCoalescingInput() {
    return this._strictCoalescing;
  }
}
export interface HttpLoadbalancerHttpsAutoCertHeaderTransformationType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_header_transformation HttpLoadbalancer#default_header_transformation}
  */
  readonly defaultHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#legacy_header_transformation HttpLoadbalancer#legacy_header_transformation}
  */
  readonly legacyHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#preserve_case_header_transformation HttpLoadbalancer#preserve_case_header_transformation}
  */
  readonly preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#proper_case_header_transformation HttpLoadbalancer#proper_case_header_transformation}
  */
  readonly properCaseHeaderTransformation?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerHttpsAutoCertHeaderTransformationTypeToTerraform(struct?: HttpLoadbalancerHttpsAutoCertHeaderTransformationTypeOutputReference | HttpLoadbalancerHttpsAutoCertHeaderTransformationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_header_transformation: cdktf.booleanToTerraform(struct!.defaultHeaderTransformation),
    legacy_header_transformation: cdktf.booleanToTerraform(struct!.legacyHeaderTransformation),
    preserve_case_header_transformation: cdktf.booleanToTerraform(struct!.preserveCaseHeaderTransformation),
    proper_case_header_transformation: cdktf.booleanToTerraform(struct!.properCaseHeaderTransformation),
  }
}


export function httpLoadbalancerHttpsAutoCertHeaderTransformationTypeToHclTerraform(struct?: HttpLoadbalancerHttpsAutoCertHeaderTransformationTypeOutputReference | HttpLoadbalancerHttpsAutoCertHeaderTransformationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legacy_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.legacyHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.preserveCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proper_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.properCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsAutoCertHeaderTransformationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsAutoCertHeaderTransformationType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHeaderTransformation = this._defaultHeaderTransformation;
    }
    if (this._legacyHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyHeaderTransformation = this._legacyHeaderTransformation;
    }
    if (this._preserveCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveCaseHeaderTransformation = this._preserveCaseHeaderTransformation;
    }
    if (this._properCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.properCaseHeaderTransformation = this._properCaseHeaderTransformation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsAutoCertHeaderTransformationType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultHeaderTransformation = undefined;
      this._legacyHeaderTransformation = undefined;
      this._preserveCaseHeaderTransformation = undefined;
      this._properCaseHeaderTransformation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultHeaderTransformation = value.defaultHeaderTransformation;
      this._legacyHeaderTransformation = value.legacyHeaderTransformation;
      this._preserveCaseHeaderTransformation = value.preserveCaseHeaderTransformation;
      this._properCaseHeaderTransformation = value.properCaseHeaderTransformation;
    }
  }

  // default_header_transformation - computed: false, optional: true, required: false
  private _defaultHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get defaultHeaderTransformation() {
    return this.getBooleanAttribute('default_header_transformation');
  }
  public set defaultHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._defaultHeaderTransformation = value;
  }
  public resetDefaultHeaderTransformation() {
    this._defaultHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderTransformationInput() {
    return this._defaultHeaderTransformation;
  }

  // legacy_header_transformation - computed: false, optional: true, required: false
  private _legacyHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get legacyHeaderTransformation() {
    return this.getBooleanAttribute('legacy_header_transformation');
  }
  public set legacyHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._legacyHeaderTransformation = value;
  }
  public resetLegacyHeaderTransformation() {
    this._legacyHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyHeaderTransformationInput() {
    return this._legacyHeaderTransformation;
  }

  // preserve_case_header_transformation - computed: false, optional: true, required: false
  private _preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get preserveCaseHeaderTransformation() {
    return this.getBooleanAttribute('preserve_case_header_transformation');
  }
  public set preserveCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._preserveCaseHeaderTransformation = value;
  }
  public resetPreserveCaseHeaderTransformation() {
    this._preserveCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveCaseHeaderTransformationInput() {
    return this._preserveCaseHeaderTransformation;
  }

  // proper_case_header_transformation - computed: false, optional: true, required: false
  private _properCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get properCaseHeaderTransformation() {
    return this.getBooleanAttribute('proper_case_header_transformation');
  }
  public set properCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._properCaseHeaderTransformation = value;
  }
  public resetProperCaseHeaderTransformation() {
    this._properCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get properCaseHeaderTransformationInput() {
    return this._properCaseHeaderTransformation;
  }
}
export interface HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_header_transformation HttpLoadbalancer#default_header_transformation}
  */
  readonly defaultHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#legacy_header_transformation HttpLoadbalancer#legacy_header_transformation}
  */
  readonly legacyHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#preserve_case_header_transformation HttpLoadbalancer#preserve_case_header_transformation}
  */
  readonly preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#proper_case_header_transformation HttpLoadbalancer#proper_case_header_transformation}
  */
  readonly properCaseHeaderTransformation?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationToTerraform(struct?: HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationOutputReference | HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_header_transformation: cdktf.booleanToTerraform(struct!.defaultHeaderTransformation),
    legacy_header_transformation: cdktf.booleanToTerraform(struct!.legacyHeaderTransformation),
    preserve_case_header_transformation: cdktf.booleanToTerraform(struct!.preserveCaseHeaderTransformation),
    proper_case_header_transformation: cdktf.booleanToTerraform(struct!.properCaseHeaderTransformation),
  }
}


export function httpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationToHclTerraform(struct?: HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationOutputReference | HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legacy_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.legacyHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.preserveCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proper_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.properCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHeaderTransformation = this._defaultHeaderTransformation;
    }
    if (this._legacyHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyHeaderTransformation = this._legacyHeaderTransformation;
    }
    if (this._preserveCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveCaseHeaderTransformation = this._preserveCaseHeaderTransformation;
    }
    if (this._properCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.properCaseHeaderTransformation = this._properCaseHeaderTransformation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultHeaderTransformation = undefined;
      this._legacyHeaderTransformation = undefined;
      this._preserveCaseHeaderTransformation = undefined;
      this._properCaseHeaderTransformation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultHeaderTransformation = value.defaultHeaderTransformation;
      this._legacyHeaderTransformation = value.legacyHeaderTransformation;
      this._preserveCaseHeaderTransformation = value.preserveCaseHeaderTransformation;
      this._properCaseHeaderTransformation = value.properCaseHeaderTransformation;
    }
  }

  // default_header_transformation - computed: false, optional: true, required: false
  private _defaultHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get defaultHeaderTransformation() {
    return this.getBooleanAttribute('default_header_transformation');
  }
  public set defaultHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._defaultHeaderTransformation = value;
  }
  public resetDefaultHeaderTransformation() {
    this._defaultHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderTransformationInput() {
    return this._defaultHeaderTransformation;
  }

  // legacy_header_transformation - computed: false, optional: true, required: false
  private _legacyHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get legacyHeaderTransformation() {
    return this.getBooleanAttribute('legacy_header_transformation');
  }
  public set legacyHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._legacyHeaderTransformation = value;
  }
  public resetLegacyHeaderTransformation() {
    this._legacyHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyHeaderTransformationInput() {
    return this._legacyHeaderTransformation;
  }

  // preserve_case_header_transformation - computed: false, optional: true, required: false
  private _preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get preserveCaseHeaderTransformation() {
    return this.getBooleanAttribute('preserve_case_header_transformation');
  }
  public set preserveCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._preserveCaseHeaderTransformation = value;
  }
  public resetPreserveCaseHeaderTransformation() {
    this._preserveCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveCaseHeaderTransformationInput() {
    return this._preserveCaseHeaderTransformation;
  }

  // proper_case_header_transformation - computed: false, optional: true, required: false
  private _properCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get properCaseHeaderTransformation() {
    return this.getBooleanAttribute('proper_case_header_transformation');
  }
  public set properCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._properCaseHeaderTransformation = value;
  }
  public resetProperCaseHeaderTransformation() {
    this._properCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get properCaseHeaderTransformationInput() {
    return this._properCaseHeaderTransformation;
  }
}
export interface HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1Only {
  /**
  * header_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#header_transformation HttpLoadbalancer#header_transformation}
  */
  readonly headerTransformation?: HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation;
}

export function httpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyToTerraform(struct?: HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyOutputReference | HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1Only): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_transformation: httpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationToTerraform(struct!.headerTransformation),
  }
}


export function httpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyToHclTerraform(struct?: HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyOutputReference | HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1Only): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_transformation: {
      value: httpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationToHclTerraform(struct!.headerTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1Only | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTransformation = this._headerTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1Only | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerTransformation.internalValue = value.headerTransformation;
    }
  }

  // header_transformation - computed: false, optional: true, required: false
  private _headerTransformation = new HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformationOutputReference(this, "header_transformation");
  public get headerTransformation() {
    return this._headerTransformation;
  }
  public putHeaderTransformation(value: HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyHeaderTransformation) {
    this._headerTransformation.internalValue = value;
  }
  public resetHeaderTransformation() {
    this._headerTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTransformationInput() {
    return this._headerTransformation.internalValue;
  }
}
export interface HttpLoadbalancerHttpsAutoCertHttpProtocolOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_protocol_enable_v1_v2 HttpLoadbalancer#http_protocol_enable_v1_v2}
  */
  readonly httpProtocolEnableV1V2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_protocol_enable_v2_only HttpLoadbalancer#http_protocol_enable_v2_only}
  */
  readonly httpProtocolEnableV2Only?: boolean | cdktf.IResolvable;
  /**
  * http_protocol_enable_v1_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_protocol_enable_v1_only HttpLoadbalancer#http_protocol_enable_v1_only}
  */
  readonly httpProtocolEnableV1Only?: HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1Only;
}

export function httpLoadbalancerHttpsAutoCertHttpProtocolOptionsToTerraform(struct?: HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsOutputReference | HttpLoadbalancerHttpsAutoCertHttpProtocolOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_protocol_enable_v1_v2: cdktf.booleanToTerraform(struct!.httpProtocolEnableV1V2),
    http_protocol_enable_v2_only: cdktf.booleanToTerraform(struct!.httpProtocolEnableV2Only),
    http_protocol_enable_v1_only: httpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyToTerraform(struct!.httpProtocolEnableV1Only),
  }
}


export function httpLoadbalancerHttpsAutoCertHttpProtocolOptionsToHclTerraform(struct?: HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsOutputReference | HttpLoadbalancerHttpsAutoCertHttpProtocolOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_protocol_enable_v1_v2: {
      value: cdktf.booleanToHclTerraform(struct!.httpProtocolEnableV1V2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_protocol_enable_v2_only: {
      value: cdktf.booleanToHclTerraform(struct!.httpProtocolEnableV2Only),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_protocol_enable_v1_only: {
      value: httpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyToHclTerraform(struct!.httpProtocolEnableV1Only),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsAutoCertHttpProtocolOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpProtocolEnableV1V2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolEnableV1V2 = this._httpProtocolEnableV1V2;
    }
    if (this._httpProtocolEnableV2Only !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolEnableV2Only = this._httpProtocolEnableV2Only;
    }
    if (this._httpProtocolEnableV1Only?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolEnableV1Only = this._httpProtocolEnableV1Only?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsAutoCertHttpProtocolOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpProtocolEnableV1V2 = undefined;
      this._httpProtocolEnableV2Only = undefined;
      this._httpProtocolEnableV1Only.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpProtocolEnableV1V2 = value.httpProtocolEnableV1V2;
      this._httpProtocolEnableV2Only = value.httpProtocolEnableV2Only;
      this._httpProtocolEnableV1Only.internalValue = value.httpProtocolEnableV1Only;
    }
  }

  // http_protocol_enable_v1_v2 - computed: false, optional: true, required: false
  private _httpProtocolEnableV1V2?: boolean | cdktf.IResolvable; 
  public get httpProtocolEnableV1V2() {
    return this.getBooleanAttribute('http_protocol_enable_v1_v2');
  }
  public set httpProtocolEnableV1V2(value: boolean | cdktf.IResolvable) {
    this._httpProtocolEnableV1V2 = value;
  }
  public resetHttpProtocolEnableV1V2() {
    this._httpProtocolEnableV1V2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolEnableV1V2Input() {
    return this._httpProtocolEnableV1V2;
  }

  // http_protocol_enable_v2_only - computed: false, optional: true, required: false
  private _httpProtocolEnableV2Only?: boolean | cdktf.IResolvable; 
  public get httpProtocolEnableV2Only() {
    return this.getBooleanAttribute('http_protocol_enable_v2_only');
  }
  public set httpProtocolEnableV2Only(value: boolean | cdktf.IResolvable) {
    this._httpProtocolEnableV2Only = value;
  }
  public resetHttpProtocolEnableV2Only() {
    this._httpProtocolEnableV2Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolEnableV2OnlyInput() {
    return this._httpProtocolEnableV2Only;
  }

  // http_protocol_enable_v1_only - computed: false, optional: true, required: false
  private _httpProtocolEnableV1Only = new HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1OnlyOutputReference(this, "http_protocol_enable_v1_only");
  public get httpProtocolEnableV1Only() {
    return this._httpProtocolEnableV1Only;
  }
  public putHttpProtocolEnableV1Only(value: HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsHttpProtocolEnableV1Only) {
    this._httpProtocolEnableV1Only.internalValue = value;
  }
  public resetHttpProtocolEnableV1Only() {
    this._httpProtocolEnableV1Only.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolEnableV1OnlyInput() {
    return this._httpProtocolEnableV1Only.internalValue;
  }
}
export interface HttpLoadbalancerHttpsAutoCertTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cipher_suites HttpLoadbalancer#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_version HttpLoadbalancer#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#min_version HttpLoadbalancer#min_version}
  */
  readonly minVersion?: string;
}

export function httpLoadbalancerHttpsAutoCertTlsConfigCustomSecurityToTerraform(struct?: HttpLoadbalancerHttpsAutoCertTlsConfigCustomSecurityOutputReference | HttpLoadbalancerHttpsAutoCertTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function httpLoadbalancerHttpsAutoCertTlsConfigCustomSecurityToHclTerraform(struct?: HttpLoadbalancerHttpsAutoCertTlsConfigCustomSecurityOutputReference | HttpLoadbalancerHttpsAutoCertTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsAutoCertTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsAutoCertTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsAutoCertTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface HttpLoadbalancerHttpsAutoCertTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_security HttpLoadbalancer#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#low_security HttpLoadbalancer#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#medium_security HttpLoadbalancer#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_security HttpLoadbalancer#custom_security}
  */
  readonly customSecurity?: HttpLoadbalancerHttpsAutoCertTlsConfigCustomSecurity;
}

export function httpLoadbalancerHttpsAutoCertTlsConfigToTerraform(struct?: HttpLoadbalancerHttpsAutoCertTlsConfigOutputReference | HttpLoadbalancerHttpsAutoCertTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: httpLoadbalancerHttpsAutoCertTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function httpLoadbalancerHttpsAutoCertTlsConfigToHclTerraform(struct?: HttpLoadbalancerHttpsAutoCertTlsConfigOutputReference | HttpLoadbalancerHttpsAutoCertTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: httpLoadbalancerHttpsAutoCertTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsAutoCertTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsAutoCertTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsAutoCertTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsAutoCertTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new HttpLoadbalancerHttpsAutoCertTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: HttpLoadbalancerHttpsAutoCertTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface HttpLoadbalancerHttpsAutoCertUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerHttpsAutoCertUseMtlsCrlToTerraform(struct?: HttpLoadbalancerHttpsAutoCertUseMtlsCrlOutputReference | HttpLoadbalancerHttpsAutoCertUseMtlsCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerHttpsAutoCertUseMtlsCrlToHclTerraform(struct?: HttpLoadbalancerHttpsAutoCertUseMtlsCrlOutputReference | HttpLoadbalancerHttpsAutoCertUseMtlsCrl): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsAutoCertUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsAutoCertUseMtlsCrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsAutoCertUseMtlsCrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerHttpsAutoCertUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerHttpsAutoCertUseMtlsTrustedCaToTerraform(struct?: HttpLoadbalancerHttpsAutoCertUseMtlsTrustedCaOutputReference | HttpLoadbalancerHttpsAutoCertUseMtlsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerHttpsAutoCertUseMtlsTrustedCaToHclTerraform(struct?: HttpLoadbalancerHttpsAutoCertUseMtlsTrustedCaOutputReference | HttpLoadbalancerHttpsAutoCertUseMtlsTrustedCa): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsAutoCertUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsAutoCertUseMtlsTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsAutoCertUseMtlsTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerHttpsAutoCertUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#xfcc_header_elements HttpLoadbalancer#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function httpLoadbalancerHttpsAutoCertUseMtlsXfccOptionsToTerraform(struct?: HttpLoadbalancerHttpsAutoCertUseMtlsXfccOptionsOutputReference | HttpLoadbalancerHttpsAutoCertUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function httpLoadbalancerHttpsAutoCertUseMtlsXfccOptionsToHclTerraform(struct?: HttpLoadbalancerHttpsAutoCertUseMtlsXfccOptionsOutputReference | HttpLoadbalancerHttpsAutoCertUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsAutoCertUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsAutoCertUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsAutoCertUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface HttpLoadbalancerHttpsAutoCertUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#client_certificate_optional HttpLoadbalancer#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_crl HttpLoadbalancer#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#trusted_ca_url HttpLoadbalancer#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#xfcc_disabled HttpLoadbalancer#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#crl HttpLoadbalancer#crl}
  */
  readonly crl?: HttpLoadbalancerHttpsAutoCertUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#trusted_ca HttpLoadbalancer#trusted_ca}
  */
  readonly trustedCa?: HttpLoadbalancerHttpsAutoCertUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#xfcc_options HttpLoadbalancer#xfcc_options}
  */
  readonly xfccOptions?: HttpLoadbalancerHttpsAutoCertUseMtlsXfccOptions;
}

export function httpLoadbalancerHttpsAutoCertUseMtlsToTerraform(struct?: HttpLoadbalancerHttpsAutoCertUseMtlsOutputReference | HttpLoadbalancerHttpsAutoCertUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: httpLoadbalancerHttpsAutoCertUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: httpLoadbalancerHttpsAutoCertUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: httpLoadbalancerHttpsAutoCertUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function httpLoadbalancerHttpsAutoCertUseMtlsToHclTerraform(struct?: HttpLoadbalancerHttpsAutoCertUseMtlsOutputReference | HttpLoadbalancerHttpsAutoCertUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: httpLoadbalancerHttpsAutoCertUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsAutoCertUseMtlsCrlList",
    },
    trusted_ca: {
      value: httpLoadbalancerHttpsAutoCertUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsAutoCertUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: httpLoadbalancerHttpsAutoCertUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsAutoCertUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsAutoCertUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsAutoCertUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsAutoCertUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new HttpLoadbalancerHttpsAutoCertUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: HttpLoadbalancerHttpsAutoCertUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new HttpLoadbalancerHttpsAutoCertUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: HttpLoadbalancerHttpsAutoCertUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new HttpLoadbalancerHttpsAutoCertUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: HttpLoadbalancerHttpsAutoCertUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface HttpLoadbalancerHttpsAutoCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_hsts HttpLoadbalancer#add_hsts}
  */
  readonly addHsts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#append_server_name HttpLoadbalancer#append_server_name}
  */
  readonly appendServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#connection_idle_timeout HttpLoadbalancer#connection_idle_timeout}
  */
  readonly connectionIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_header HttpLoadbalancer#default_header}
  */
  readonly defaultHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_loadbalancer HttpLoadbalancer#default_loadbalancer}
  */
  readonly defaultLoadbalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_path_normalize HttpLoadbalancer#disable_path_normalize}
  */
  readonly disablePathNormalize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#enable_path_normalize HttpLoadbalancer#enable_path_normalize}
  */
  readonly enablePathNormalize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_redirect HttpLoadbalancer#http_redirect}
  */
  readonly httpRedirect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_mtls HttpLoadbalancer#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#non_default_loadbalancer HttpLoadbalancer#non_default_loadbalancer}
  */
  readonly nonDefaultLoadbalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#pass_through HttpLoadbalancer#pass_through}
  */
  readonly passThrough?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port HttpLoadbalancer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port_ranges HttpLoadbalancer#port_ranges}
  */
  readonly portRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#server_name HttpLoadbalancer#server_name}
  */
  readonly serverName?: string;
  /**
  * coalescing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#coalescing_options HttpLoadbalancer#coalescing_options}
  */
  readonly coalescingOptions?: HttpLoadbalancerHttpsAutoCertCoalescingOptions;
  /**
  * header_transformation_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#header_transformation_type HttpLoadbalancer#header_transformation_type}
  */
  readonly headerTransformationType?: HttpLoadbalancerHttpsAutoCertHeaderTransformationType;
  /**
  * http_protocol_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_protocol_options HttpLoadbalancer#http_protocol_options}
  */
  readonly httpProtocolOptions?: HttpLoadbalancerHttpsAutoCertHttpProtocolOptions;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tls_config HttpLoadbalancer#tls_config}
  */
  readonly tlsConfig?: HttpLoadbalancerHttpsAutoCertTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#use_mtls HttpLoadbalancer#use_mtls}
  */
  readonly useMtls?: HttpLoadbalancerHttpsAutoCertUseMtls;
}

export function httpLoadbalancerHttpsAutoCertToTerraform(struct?: HttpLoadbalancerHttpsAutoCertOutputReference | HttpLoadbalancerHttpsAutoCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_hsts: cdktf.booleanToTerraform(struct!.addHsts),
    append_server_name: cdktf.stringToTerraform(struct!.appendServerName),
    connection_idle_timeout: cdktf.numberToTerraform(struct!.connectionIdleTimeout),
    default_header: cdktf.booleanToTerraform(struct!.defaultHeader),
    default_loadbalancer: cdktf.booleanToTerraform(struct!.defaultLoadbalancer),
    disable_path_normalize: cdktf.booleanToTerraform(struct!.disablePathNormalize),
    enable_path_normalize: cdktf.booleanToTerraform(struct!.enablePathNormalize),
    http_redirect: cdktf.booleanToTerraform(struct!.httpRedirect),
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    non_default_loadbalancer: cdktf.booleanToTerraform(struct!.nonDefaultLoadbalancer),
    pass_through: cdktf.booleanToTerraform(struct!.passThrough),
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    coalescing_options: httpLoadbalancerHttpsAutoCertCoalescingOptionsToTerraform(struct!.coalescingOptions),
    header_transformation_type: httpLoadbalancerHttpsAutoCertHeaderTransformationTypeToTerraform(struct!.headerTransformationType),
    http_protocol_options: httpLoadbalancerHttpsAutoCertHttpProtocolOptionsToTerraform(struct!.httpProtocolOptions),
    tls_config: httpLoadbalancerHttpsAutoCertTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: httpLoadbalancerHttpsAutoCertUseMtlsToTerraform(struct!.useMtls),
  }
}


export function httpLoadbalancerHttpsAutoCertToHclTerraform(struct?: HttpLoadbalancerHttpsAutoCertOutputReference | HttpLoadbalancerHttpsAutoCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_hsts: {
      value: cdktf.booleanToHclTerraform(struct!.addHsts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    append_server_name: {
      value: cdktf.stringToHclTerraform(struct!.appendServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_header: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_loadbalancer: {
      value: cdktf.booleanToHclTerraform(struct!.defaultLoadbalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_path_normalize: {
      value: cdktf.booleanToHclTerraform(struct!.disablePathNormalize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_path_normalize: {
      value: cdktf.booleanToHclTerraform(struct!.enablePathNormalize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    non_default_loadbalancer: {
      value: cdktf.booleanToHclTerraform(struct!.nonDefaultLoadbalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_through: {
      value: cdktf.booleanToHclTerraform(struct!.passThrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
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
    coalescing_options: {
      value: httpLoadbalancerHttpsAutoCertCoalescingOptionsToHclTerraform(struct!.coalescingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsAutoCertCoalescingOptionsList",
    },
    header_transformation_type: {
      value: httpLoadbalancerHttpsAutoCertHeaderTransformationTypeToHclTerraform(struct!.headerTransformationType),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsAutoCertHeaderTransformationTypeList",
    },
    http_protocol_options: {
      value: httpLoadbalancerHttpsAutoCertHttpProtocolOptionsToHclTerraform(struct!.httpProtocolOptions),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsList",
    },
    tls_config: {
      value: httpLoadbalancerHttpsAutoCertTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsAutoCertTlsConfigList",
    },
    use_mtls: {
      value: httpLoadbalancerHttpsAutoCertUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerHttpsAutoCertUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerHttpsAutoCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerHttpsAutoCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHsts !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHsts = this._addHsts;
    }
    if (this._appendServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendServerName = this._appendServerName;
    }
    if (this._connectionIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionIdleTimeout = this._connectionIdleTimeout;
    }
    if (this._defaultHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHeader = this._defaultHeader;
    }
    if (this._defaultLoadbalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLoadbalancer = this._defaultLoadbalancer;
    }
    if (this._disablePathNormalize !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePathNormalize = this._disablePathNormalize;
    }
    if (this._enablePathNormalize !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePathNormalize = this._enablePathNormalize;
    }
    if (this._httpRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirect = this._httpRedirect;
    }
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._nonDefaultLoadbalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonDefaultLoadbalancer = this._nonDefaultLoadbalancer;
    }
    if (this._passThrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passThrough = this._passThrough;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._coalescingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coalescingOptions = this._coalescingOptions?.internalValue;
    }
    if (this._headerTransformationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTransformationType = this._headerTransformationType?.internalValue;
    }
    if (this._httpProtocolOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolOptions = this._httpProtocolOptions?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerHttpsAutoCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHsts = undefined;
      this._appendServerName = undefined;
      this._connectionIdleTimeout = undefined;
      this._defaultHeader = undefined;
      this._defaultLoadbalancer = undefined;
      this._disablePathNormalize = undefined;
      this._enablePathNormalize = undefined;
      this._httpRedirect = undefined;
      this._noMtls = undefined;
      this._nonDefaultLoadbalancer = undefined;
      this._passThrough = undefined;
      this._port = undefined;
      this._portRanges = undefined;
      this._serverName = undefined;
      this._coalescingOptions.internalValue = undefined;
      this._headerTransformationType.internalValue = undefined;
      this._httpProtocolOptions.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHsts = value.addHsts;
      this._appendServerName = value.appendServerName;
      this._connectionIdleTimeout = value.connectionIdleTimeout;
      this._defaultHeader = value.defaultHeader;
      this._defaultLoadbalancer = value.defaultLoadbalancer;
      this._disablePathNormalize = value.disablePathNormalize;
      this._enablePathNormalize = value.enablePathNormalize;
      this._httpRedirect = value.httpRedirect;
      this._noMtls = value.noMtls;
      this._nonDefaultLoadbalancer = value.nonDefaultLoadbalancer;
      this._passThrough = value.passThrough;
      this._port = value.port;
      this._portRanges = value.portRanges;
      this._serverName = value.serverName;
      this._coalescingOptions.internalValue = value.coalescingOptions;
      this._headerTransformationType.internalValue = value.headerTransformationType;
      this._httpProtocolOptions.internalValue = value.httpProtocolOptions;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // add_hsts - computed: false, optional: true, required: false
  private _addHsts?: boolean | cdktf.IResolvable; 
  public get addHsts() {
    return this.getBooleanAttribute('add_hsts');
  }
  public set addHsts(value: boolean | cdktf.IResolvable) {
    this._addHsts = value;
  }
  public resetAddHsts() {
    this._addHsts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHstsInput() {
    return this._addHsts;
  }

  // append_server_name - computed: false, optional: true, required: false
  private _appendServerName?: string; 
  public get appendServerName() {
    return this.getStringAttribute('append_server_name');
  }
  public set appendServerName(value: string) {
    this._appendServerName = value;
  }
  public resetAppendServerName() {
    this._appendServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendServerNameInput() {
    return this._appendServerName;
  }

  // connection_idle_timeout - computed: false, optional: true, required: false
  private _connectionIdleTimeout?: number; 
  public get connectionIdleTimeout() {
    return this.getNumberAttribute('connection_idle_timeout');
  }
  public set connectionIdleTimeout(value: number) {
    this._connectionIdleTimeout = value;
  }
  public resetConnectionIdleTimeout() {
    this._connectionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdleTimeoutInput() {
    return this._connectionIdleTimeout;
  }

  // default_header - computed: false, optional: true, required: false
  private _defaultHeader?: boolean | cdktf.IResolvable; 
  public get defaultHeader() {
    return this.getBooleanAttribute('default_header');
  }
  public set defaultHeader(value: boolean | cdktf.IResolvable) {
    this._defaultHeader = value;
  }
  public resetDefaultHeader() {
    this._defaultHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderInput() {
    return this._defaultHeader;
  }

  // default_loadbalancer - computed: false, optional: true, required: false
  private _defaultLoadbalancer?: boolean | cdktf.IResolvable; 
  public get defaultLoadbalancer() {
    return this.getBooleanAttribute('default_loadbalancer');
  }
  public set defaultLoadbalancer(value: boolean | cdktf.IResolvable) {
    this._defaultLoadbalancer = value;
  }
  public resetDefaultLoadbalancer() {
    this._defaultLoadbalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLoadbalancerInput() {
    return this._defaultLoadbalancer;
  }

  // disable_path_normalize - computed: false, optional: true, required: false
  private _disablePathNormalize?: boolean | cdktf.IResolvable; 
  public get disablePathNormalize() {
    return this.getBooleanAttribute('disable_path_normalize');
  }
  public set disablePathNormalize(value: boolean | cdktf.IResolvable) {
    this._disablePathNormalize = value;
  }
  public resetDisablePathNormalize() {
    this._disablePathNormalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePathNormalizeInput() {
    return this._disablePathNormalize;
  }

  // enable_path_normalize - computed: false, optional: true, required: false
  private _enablePathNormalize?: boolean | cdktf.IResolvable; 
  public get enablePathNormalize() {
    return this.getBooleanAttribute('enable_path_normalize');
  }
  public set enablePathNormalize(value: boolean | cdktf.IResolvable) {
    this._enablePathNormalize = value;
  }
  public resetEnablePathNormalize() {
    this._enablePathNormalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePathNormalizeInput() {
    return this._enablePathNormalize;
  }

  // http_redirect - computed: false, optional: true, required: false
  private _httpRedirect?: boolean | cdktf.IResolvable; 
  public get httpRedirect() {
    return this.getBooleanAttribute('http_redirect');
  }
  public set httpRedirect(value: boolean | cdktf.IResolvable) {
    this._httpRedirect = value;
  }
  public resetHttpRedirect() {
    this._httpRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectInput() {
    return this._httpRedirect;
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // non_default_loadbalancer - computed: false, optional: true, required: false
  private _nonDefaultLoadbalancer?: boolean | cdktf.IResolvable; 
  public get nonDefaultLoadbalancer() {
    return this.getBooleanAttribute('non_default_loadbalancer');
  }
  public set nonDefaultLoadbalancer(value: boolean | cdktf.IResolvable) {
    this._nonDefaultLoadbalancer = value;
  }
  public resetNonDefaultLoadbalancer() {
    this._nonDefaultLoadbalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonDefaultLoadbalancerInput() {
    return this._nonDefaultLoadbalancer;
  }

  // pass_through - computed: false, optional: true, required: false
  private _passThrough?: boolean | cdktf.IResolvable; 
  public get passThrough() {
    return this.getBooleanAttribute('pass_through');
  }
  public set passThrough(value: boolean | cdktf.IResolvable) {
    this._passThrough = value;
  }
  public resetPassThrough() {
    this._passThrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughInput() {
    return this._passThrough;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
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

  // coalescing_options - computed: false, optional: true, required: false
  private _coalescingOptions = new HttpLoadbalancerHttpsAutoCertCoalescingOptionsOutputReference(this, "coalescing_options");
  public get coalescingOptions() {
    return this._coalescingOptions;
  }
  public putCoalescingOptions(value: HttpLoadbalancerHttpsAutoCertCoalescingOptions) {
    this._coalescingOptions.internalValue = value;
  }
  public resetCoalescingOptions() {
    this._coalescingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coalescingOptionsInput() {
    return this._coalescingOptions.internalValue;
  }

  // header_transformation_type - computed: false, optional: true, required: false
  private _headerTransformationType = new HttpLoadbalancerHttpsAutoCertHeaderTransformationTypeOutputReference(this, "header_transformation_type");
  public get headerTransformationType() {
    return this._headerTransformationType;
  }
  public putHeaderTransformationType(value: HttpLoadbalancerHttpsAutoCertHeaderTransformationType) {
    this._headerTransformationType.internalValue = value;
  }
  public resetHeaderTransformationType() {
    this._headerTransformationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTransformationTypeInput() {
    return this._headerTransformationType.internalValue;
  }

  // http_protocol_options - computed: false, optional: true, required: false
  private _httpProtocolOptions = new HttpLoadbalancerHttpsAutoCertHttpProtocolOptionsOutputReference(this, "http_protocol_options");
  public get httpProtocolOptions() {
    return this._httpProtocolOptions;
  }
  public putHttpProtocolOptions(value: HttpLoadbalancerHttpsAutoCertHttpProtocolOptions) {
    this._httpProtocolOptions.internalValue = value;
  }
  public resetHttpProtocolOptions() {
    this._httpProtocolOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolOptionsInput() {
    return this._httpProtocolOptions.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new HttpLoadbalancerHttpsAutoCertTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: HttpLoadbalancerHttpsAutoCertTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new HttpLoadbalancerHttpsAutoCertUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: HttpLoadbalancerHttpsAutoCertUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface HttpLoadbalancerJsChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie_expiry HttpLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#js_script_delay HttpLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function httpLoadbalancerJsChallengeToTerraform(struct?: HttpLoadbalancerJsChallengeOutputReference | HttpLoadbalancerJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
    js_script_delay: cdktf.numberToTerraform(struct!.jsScriptDelay),
  }
}


export function httpLoadbalancerJsChallengeToHclTerraform(struct?: HttpLoadbalancerJsChallengeOutputReference | HttpLoadbalancerJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_script_delay: {
      value: cdktf.numberToHclTerraform(struct!.jsScriptDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerJsChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerJsChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    if (this._jsScriptDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsScriptDelay = this._jsScriptDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerJsChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
      this._jsScriptDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
      this._jsScriptDelay = value.jsScriptDelay;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // js_script_delay - computed: false, optional: true, required: false
  private _jsScriptDelay?: number; 
  public get jsScriptDelay() {
    return this.getNumberAttribute('js_script_delay');
  }
  public set jsScriptDelay(value: number) {
    this._jsScriptDelay = value;
  }
  public resetJsScriptDelay() {
    this._jsScriptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsScriptDelayInput() {
    return this._jsScriptDelay;
  }
}
export interface HttpLoadbalancerJwtValidationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#block HttpLoadbalancer#block}
  */
  readonly block?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#report HttpLoadbalancer#report}
  */
  readonly report?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerJwtValidationActionToTerraform(struct?: HttpLoadbalancerJwtValidationActionOutputReference | HttpLoadbalancerJwtValidationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.booleanToTerraform(struct!.block),
    report: cdktf.booleanToTerraform(struct!.report),
  }
}


export function httpLoadbalancerJwtValidationActionToHclTerraform(struct?: HttpLoadbalancerJwtValidationActionOutputReference | HttpLoadbalancerJwtValidationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: cdktf.booleanToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    report: {
      value: cdktf.booleanToHclTerraform(struct!.report),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerJwtValidationActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerJwtValidationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._report !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerJwtValidationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._block = undefined;
      this._report = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._block = value.block;
      this._report = value.report;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block?: boolean | cdktf.IResolvable; 
  public get block() {
    return this.getBooleanAttribute('block');
  }
  public set block(value: boolean | cdktf.IResolvable) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // report - computed: false, optional: true, required: false
  private _report?: boolean | cdktf.IResolvable; 
  public get report() {
    return this.getBooleanAttribute('report');
  }
  public set report(value: boolean | cdktf.IResolvable) {
    this._report = value;
  }
  public resetReport() {
    this._report = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report;
  }
}
export interface HttpLoadbalancerJwtValidationJwksConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cleartext HttpLoadbalancer#cleartext}
  */
  readonly cleartext?: string;
}

export function httpLoadbalancerJwtValidationJwksConfigToTerraform(struct?: HttpLoadbalancerJwtValidationJwksConfigOutputReference | HttpLoadbalancerJwtValidationJwksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleartext: cdktf.stringToTerraform(struct!.cleartext),
  }
}


export function httpLoadbalancerJwtValidationJwksConfigToHclTerraform(struct?: HttpLoadbalancerJwtValidationJwksConfigOutputReference | HttpLoadbalancerJwtValidationJwksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleartext: {
      value: cdktf.stringToHclTerraform(struct!.cleartext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerJwtValidationJwksConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerJwtValidationJwksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleartext !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleartext = this._cleartext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerJwtValidationJwksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleartext = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleartext = value.cleartext;
    }
  }

  // cleartext - computed: false, optional: true, required: false
  private _cleartext?: string; 
  public get cleartext() {
    return this.getStringAttribute('cleartext');
  }
  public set cleartext(value: string) {
    this._cleartext = value;
  }
  public resetCleartext() {
    this._cleartext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextInput() {
    return this._cleartext;
  }
}
export interface HttpLoadbalancerJwtValidationMandatoryClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#claim_names HttpLoadbalancer#claim_names}
  */
  readonly claimNames?: string[];
}

export function httpLoadbalancerJwtValidationMandatoryClaimsToTerraform(struct?: HttpLoadbalancerJwtValidationMandatoryClaimsOutputReference | HttpLoadbalancerJwtValidationMandatoryClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.claimNames),
  }
}


export function httpLoadbalancerJwtValidationMandatoryClaimsToHclTerraform(struct?: HttpLoadbalancerJwtValidationMandatoryClaimsOutputReference | HttpLoadbalancerJwtValidationMandatoryClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.claimNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerJwtValidationMandatoryClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerJwtValidationMandatoryClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimNames = this._claimNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerJwtValidationMandatoryClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._claimNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._claimNames = value.claimNames;
    }
  }

  // claim_names - computed: false, optional: true, required: false
  private _claimNames?: string[]; 
  public get claimNames() {
    return this.getListAttribute('claim_names');
  }
  public set claimNames(value: string[]) {
    this._claimNames = value;
  }
  public resetClaimNames() {
    this._claimNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNamesInput() {
    return this._claimNames;
  }
}
export interface HttpLoadbalancerJwtValidationReservedClaimsAudience {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#audiences HttpLoadbalancer#audiences}
  */
  readonly audiences: string[];
}

export function httpLoadbalancerJwtValidationReservedClaimsAudienceToTerraform(struct?: HttpLoadbalancerJwtValidationReservedClaimsAudienceOutputReference | HttpLoadbalancerJwtValidationReservedClaimsAudience): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
  }
}


export function httpLoadbalancerJwtValidationReservedClaimsAudienceToHclTerraform(struct?: HttpLoadbalancerJwtValidationReservedClaimsAudienceOutputReference | HttpLoadbalancerJwtValidationReservedClaimsAudience): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerJwtValidationReservedClaimsAudienceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerJwtValidationReservedClaimsAudience | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerJwtValidationReservedClaimsAudience | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audiences = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audiences = value.audiences;
    }
  }

  // audiences - computed: false, optional: false, required: true
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }
}
export interface HttpLoadbalancerJwtValidationReservedClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#audience_disable HttpLoadbalancer#audience_disable}
  */
  readonly audienceDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#issuer HttpLoadbalancer#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#issuer_disable HttpLoadbalancer#issuer_disable}
  */
  readonly issuerDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#validate_period_disable HttpLoadbalancer#validate_period_disable}
  */
  readonly validatePeriodDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#validate_period_enable HttpLoadbalancer#validate_period_enable}
  */
  readonly validatePeriodEnable?: boolean | cdktf.IResolvable;
  /**
  * audience block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#audience HttpLoadbalancer#audience}
  */
  readonly audience?: HttpLoadbalancerJwtValidationReservedClaimsAudience;
}

export function httpLoadbalancerJwtValidationReservedClaimsToTerraform(struct?: HttpLoadbalancerJwtValidationReservedClaimsOutputReference | HttpLoadbalancerJwtValidationReservedClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience_disable: cdktf.booleanToTerraform(struct!.audienceDisable),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    issuer_disable: cdktf.booleanToTerraform(struct!.issuerDisable),
    validate_period_disable: cdktf.booleanToTerraform(struct!.validatePeriodDisable),
    validate_period_enable: cdktf.booleanToTerraform(struct!.validatePeriodEnable),
    audience: httpLoadbalancerJwtValidationReservedClaimsAudienceToTerraform(struct!.audience),
  }
}


export function httpLoadbalancerJwtValidationReservedClaimsToHclTerraform(struct?: HttpLoadbalancerJwtValidationReservedClaimsOutputReference | HttpLoadbalancerJwtValidationReservedClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience_disable: {
      value: cdktf.booleanToHclTerraform(struct!.audienceDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_disable: {
      value: cdktf.booleanToHclTerraform(struct!.issuerDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_period_disable: {
      value: cdktf.booleanToHclTerraform(struct!.validatePeriodDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_period_enable: {
      value: cdktf.booleanToHclTerraform(struct!.validatePeriodEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audience: {
      value: httpLoadbalancerJwtValidationReservedClaimsAudienceToHclTerraform(struct!.audience),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerJwtValidationReservedClaimsAudienceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerJwtValidationReservedClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerJwtValidationReservedClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audienceDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.audienceDisable = this._audienceDisable;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._issuerDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerDisable = this._issuerDisable;
    }
    if (this._validatePeriodDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.validatePeriodDisable = this._validatePeriodDisable;
    }
    if (this._validatePeriodEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.validatePeriodEnable = this._validatePeriodEnable;
    }
    if (this._audience?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerJwtValidationReservedClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audienceDisable = undefined;
      this._issuer = undefined;
      this._issuerDisable = undefined;
      this._validatePeriodDisable = undefined;
      this._validatePeriodEnable = undefined;
      this._audience.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audienceDisable = value.audienceDisable;
      this._issuer = value.issuer;
      this._issuerDisable = value.issuerDisable;
      this._validatePeriodDisable = value.validatePeriodDisable;
      this._validatePeriodEnable = value.validatePeriodEnable;
      this._audience.internalValue = value.audience;
    }
  }

  // audience_disable - computed: false, optional: true, required: false
  private _audienceDisable?: boolean | cdktf.IResolvable; 
  public get audienceDisable() {
    return this.getBooleanAttribute('audience_disable');
  }
  public set audienceDisable(value: boolean | cdktf.IResolvable) {
    this._audienceDisable = value;
  }
  public resetAudienceDisable() {
    this._audienceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceDisableInput() {
    return this._audienceDisable;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // issuer_disable - computed: false, optional: true, required: false
  private _issuerDisable?: boolean | cdktf.IResolvable; 
  public get issuerDisable() {
    return this.getBooleanAttribute('issuer_disable');
  }
  public set issuerDisable(value: boolean | cdktf.IResolvable) {
    this._issuerDisable = value;
  }
  public resetIssuerDisable() {
    this._issuerDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerDisableInput() {
    return this._issuerDisable;
  }

  // validate_period_disable - computed: false, optional: true, required: false
  private _validatePeriodDisable?: boolean | cdktf.IResolvable; 
  public get validatePeriodDisable() {
    return this.getBooleanAttribute('validate_period_disable');
  }
  public set validatePeriodDisable(value: boolean | cdktf.IResolvable) {
    this._validatePeriodDisable = value;
  }
  public resetValidatePeriodDisable() {
    this._validatePeriodDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePeriodDisableInput() {
    return this._validatePeriodDisable;
  }

  // validate_period_enable - computed: false, optional: true, required: false
  private _validatePeriodEnable?: boolean | cdktf.IResolvable; 
  public get validatePeriodEnable() {
    return this.getBooleanAttribute('validate_period_enable');
  }
  public set validatePeriodEnable(value: boolean | cdktf.IResolvable) {
    this._validatePeriodEnable = value;
  }
  public resetValidatePeriodEnable() {
    this._validatePeriodEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePeriodEnableInput() {
    return this._validatePeriodEnable;
  }

  // audience - computed: false, optional: true, required: false
  private _audience = new HttpLoadbalancerJwtValidationReservedClaimsAudienceOutputReference(this, "audience");
  public get audience() {
    return this._audience;
  }
  public putAudience(value: HttpLoadbalancerJwtValidationReservedClaimsAudience) {
    this._audience.internalValue = value;
  }
  public resetAudience() {
    this._audience.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience.internalValue;
  }
}
export interface HttpLoadbalancerJwtValidationTargetApiGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#api_groups HttpLoadbalancer#api_groups}
  */
  readonly apiGroups: string[];
}

export function httpLoadbalancerJwtValidationTargetApiGroupsToTerraform(struct?: HttpLoadbalancerJwtValidationTargetApiGroupsOutputReference | HttpLoadbalancerJwtValidationTargetApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
  }
}


export function httpLoadbalancerJwtValidationTargetApiGroupsToHclTerraform(struct?: HttpLoadbalancerJwtValidationTargetApiGroupsOutputReference | HttpLoadbalancerJwtValidationTargetApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerJwtValidationTargetApiGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerJwtValidationTargetApiGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerJwtValidationTargetApiGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiGroups = value.apiGroups;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }
}
export interface HttpLoadbalancerJwtValidationTargetBasePaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#base_paths HttpLoadbalancer#base_paths}
  */
  readonly basePaths: string[];
}

export function httpLoadbalancerJwtValidationTargetBasePathsToTerraform(struct?: HttpLoadbalancerJwtValidationTargetBasePathsOutputReference | HttpLoadbalancerJwtValidationTargetBasePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.basePaths),
  }
}


export function httpLoadbalancerJwtValidationTargetBasePathsToHclTerraform(struct?: HttpLoadbalancerJwtValidationTargetBasePathsOutputReference | HttpLoadbalancerJwtValidationTargetBasePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.basePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerJwtValidationTargetBasePathsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerJwtValidationTargetBasePaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePaths = this._basePaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerJwtValidationTargetBasePaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basePaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basePaths = value.basePaths;
    }
  }

  // base_paths - computed: false, optional: false, required: true
  private _basePaths?: string[]; 
  public get basePaths() {
    return this.getListAttribute('base_paths');
  }
  public set basePaths(value: string[]) {
    this._basePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathsInput() {
    return this._basePaths;
  }
}
export interface HttpLoadbalancerJwtValidationTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#all_endpoint HttpLoadbalancer#all_endpoint}
  */
  readonly allEndpoint?: boolean | cdktf.IResolvable;
  /**
  * api_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#api_groups HttpLoadbalancer#api_groups}
  */
  readonly apiGroups?: HttpLoadbalancerJwtValidationTargetApiGroups;
  /**
  * base_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#base_paths HttpLoadbalancer#base_paths}
  */
  readonly basePaths?: HttpLoadbalancerJwtValidationTargetBasePaths;
}

export function httpLoadbalancerJwtValidationTargetToTerraform(struct?: HttpLoadbalancerJwtValidationTargetOutputReference | HttpLoadbalancerJwtValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_endpoint: cdktf.booleanToTerraform(struct!.allEndpoint),
    api_groups: httpLoadbalancerJwtValidationTargetApiGroupsToTerraform(struct!.apiGroups),
    base_paths: httpLoadbalancerJwtValidationTargetBasePathsToTerraform(struct!.basePaths),
  }
}


export function httpLoadbalancerJwtValidationTargetToHclTerraform(struct?: HttpLoadbalancerJwtValidationTargetOutputReference | HttpLoadbalancerJwtValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.allEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_groups: {
      value: httpLoadbalancerJwtValidationTargetApiGroupsToHclTerraform(struct!.apiGroups),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerJwtValidationTargetApiGroupsList",
    },
    base_paths: {
      value: httpLoadbalancerJwtValidationTargetBasePathsToHclTerraform(struct!.basePaths),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerJwtValidationTargetBasePathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerJwtValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerJwtValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.allEndpoint = this._allEndpoint;
    }
    if (this._apiGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups?.internalValue;
    }
    if (this._basePaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePaths = this._basePaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerJwtValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allEndpoint = undefined;
      this._apiGroups.internalValue = undefined;
      this._basePaths.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allEndpoint = value.allEndpoint;
      this._apiGroups.internalValue = value.apiGroups;
      this._basePaths.internalValue = value.basePaths;
    }
  }

  // all_endpoint - computed: false, optional: true, required: false
  private _allEndpoint?: boolean | cdktf.IResolvable; 
  public get allEndpoint() {
    return this.getBooleanAttribute('all_endpoint');
  }
  public set allEndpoint(value: boolean | cdktf.IResolvable) {
    this._allEndpoint = value;
  }
  public resetAllEndpoint() {
    this._allEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allEndpointInput() {
    return this._allEndpoint;
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups = new HttpLoadbalancerJwtValidationTargetApiGroupsOutputReference(this, "api_groups");
  public get apiGroups() {
    return this._apiGroups;
  }
  public putApiGroups(value: HttpLoadbalancerJwtValidationTargetApiGroups) {
    this._apiGroups.internalValue = value;
  }
  public resetApiGroups() {
    this._apiGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups.internalValue;
  }

  // base_paths - computed: false, optional: true, required: false
  private _basePaths = new HttpLoadbalancerJwtValidationTargetBasePathsOutputReference(this, "base_paths");
  public get basePaths() {
    return this._basePaths;
  }
  public putBasePaths(value: HttpLoadbalancerJwtValidationTargetBasePaths) {
    this._basePaths.internalValue = value;
  }
  public resetBasePaths() {
    this._basePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathsInput() {
    return this._basePaths.internalValue;
  }
}
export interface HttpLoadbalancerJwtValidationTokenLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#bearer_token HttpLoadbalancer#bearer_token}
  */
  readonly bearerToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie HttpLoadbalancer#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#header HttpLoadbalancer#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#query_param HttpLoadbalancer#query_param}
  */
  readonly queryParam?: string;
}

export function httpLoadbalancerJwtValidationTokenLocationToTerraform(struct?: HttpLoadbalancerJwtValidationTokenLocationOutputReference | HttpLoadbalancerJwtValidationTokenLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token: cdktf.booleanToTerraform(struct!.bearerToken),
    cookie: cdktf.stringToTerraform(struct!.cookie),
    header: cdktf.stringToTerraform(struct!.header),
    query_param: cdktf.stringToTerraform(struct!.queryParam),
  }
}


export function httpLoadbalancerJwtValidationTokenLocationToHclTerraform(struct?: HttpLoadbalancerJwtValidationTokenLocationOutputReference | HttpLoadbalancerJwtValidationTokenLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token: {
      value: cdktf.booleanToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param: {
      value: cdktf.stringToHclTerraform(struct!.queryParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerJwtValidationTokenLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerJwtValidationTokenLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._queryParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParam = this._queryParam;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerJwtValidationTokenLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bearerToken = undefined;
      this._cookie = undefined;
      this._header = undefined;
      this._queryParam = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bearerToken = value.bearerToken;
      this._cookie = value.cookie;
      this._header = value.header;
      this._queryParam = value.queryParam;
    }
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: boolean | cdktf.IResolvable; 
  public get bearerToken() {
    return this.getBooleanAttribute('bearer_token');
  }
  public set bearerToken(value: boolean | cdktf.IResolvable) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // query_param - computed: false, optional: true, required: false
  private _queryParam?: string; 
  public get queryParam() {
    return this.getStringAttribute('query_param');
  }
  public set queryParam(value: string) {
    this._queryParam = value;
  }
  public resetQueryParam() {
    this._queryParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamInput() {
    return this._queryParam;
  }
}
export interface HttpLoadbalancerJwtValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#auth_server_uri HttpLoadbalancer#auth_server_uri}
  */
  readonly authServerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#jwks HttpLoadbalancer#jwks}
  */
  readonly jwks?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#action HttpLoadbalancer#action}
  */
  readonly action: HttpLoadbalancerJwtValidationAction;
  /**
  * jwks_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#jwks_config HttpLoadbalancer#jwks_config}
  */
  readonly jwksConfig?: HttpLoadbalancerJwtValidationJwksConfig;
  /**
  * mandatory_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#mandatory_claims HttpLoadbalancer#mandatory_claims}
  */
  readonly mandatoryClaims?: HttpLoadbalancerJwtValidationMandatoryClaims;
  /**
  * reserved_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#reserved_claims HttpLoadbalancer#reserved_claims}
  */
  readonly reservedClaims?: HttpLoadbalancerJwtValidationReservedClaims;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#target HttpLoadbalancer#target}
  */
  readonly target: HttpLoadbalancerJwtValidationTarget;
  /**
  * token_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#token_location HttpLoadbalancer#token_location}
  */
  readonly tokenLocation: HttpLoadbalancerJwtValidationTokenLocation;
}

export function httpLoadbalancerJwtValidationToTerraform(struct?: HttpLoadbalancerJwtValidationOutputReference | HttpLoadbalancerJwtValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_server_uri: cdktf.stringToTerraform(struct!.authServerUri),
    jwks: cdktf.stringToTerraform(struct!.jwks),
    action: httpLoadbalancerJwtValidationActionToTerraform(struct!.action),
    jwks_config: httpLoadbalancerJwtValidationJwksConfigToTerraform(struct!.jwksConfig),
    mandatory_claims: httpLoadbalancerJwtValidationMandatoryClaimsToTerraform(struct!.mandatoryClaims),
    reserved_claims: httpLoadbalancerJwtValidationReservedClaimsToTerraform(struct!.reservedClaims),
    target: httpLoadbalancerJwtValidationTargetToTerraform(struct!.target),
    token_location: httpLoadbalancerJwtValidationTokenLocationToTerraform(struct!.tokenLocation),
  }
}


export function httpLoadbalancerJwtValidationToHclTerraform(struct?: HttpLoadbalancerJwtValidationOutputReference | HttpLoadbalancerJwtValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_server_uri: {
      value: cdktf.stringToHclTerraform(struct!.authServerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks: {
      value: cdktf.stringToHclTerraform(struct!.jwks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: httpLoadbalancerJwtValidationActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerJwtValidationActionList",
    },
    jwks_config: {
      value: httpLoadbalancerJwtValidationJwksConfigToHclTerraform(struct!.jwksConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerJwtValidationJwksConfigList",
    },
    mandatory_claims: {
      value: httpLoadbalancerJwtValidationMandatoryClaimsToHclTerraform(struct!.mandatoryClaims),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerJwtValidationMandatoryClaimsList",
    },
    reserved_claims: {
      value: httpLoadbalancerJwtValidationReservedClaimsToHclTerraform(struct!.reservedClaims),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerJwtValidationReservedClaimsList",
    },
    target: {
      value: httpLoadbalancerJwtValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerJwtValidationTargetList",
    },
    token_location: {
      value: httpLoadbalancerJwtValidationTokenLocationToHclTerraform(struct!.tokenLocation),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerJwtValidationTokenLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerJwtValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerJwtValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authServerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServerUri = this._authServerUri;
    }
    if (this._jwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwks = this._jwks;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._jwksConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksConfig = this._jwksConfig?.internalValue;
    }
    if (this._mandatoryClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryClaims = this._mandatoryClaims?.internalValue;
    }
    if (this._reservedClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedClaims = this._reservedClaims?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._tokenLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenLocation = this._tokenLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerJwtValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authServerUri = undefined;
      this._jwks = undefined;
      this._action.internalValue = undefined;
      this._jwksConfig.internalValue = undefined;
      this._mandatoryClaims.internalValue = undefined;
      this._reservedClaims.internalValue = undefined;
      this._target.internalValue = undefined;
      this._tokenLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authServerUri = value.authServerUri;
      this._jwks = value.jwks;
      this._action.internalValue = value.action;
      this._jwksConfig.internalValue = value.jwksConfig;
      this._mandatoryClaims.internalValue = value.mandatoryClaims;
      this._reservedClaims.internalValue = value.reservedClaims;
      this._target.internalValue = value.target;
      this._tokenLocation.internalValue = value.tokenLocation;
    }
  }

  // auth_server_uri - computed: false, optional: true, required: false
  private _authServerUri?: string; 
  public get authServerUri() {
    return this.getStringAttribute('auth_server_uri');
  }
  public set authServerUri(value: string) {
    this._authServerUri = value;
  }
  public resetAuthServerUri() {
    this._authServerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerUriInput() {
    return this._authServerUri;
  }

  // jwks - computed: false, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }

  // action - computed: false, optional: false, required: true
  private _action = new HttpLoadbalancerJwtValidationActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: HttpLoadbalancerJwtValidationAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // jwks_config - computed: false, optional: true, required: false
  private _jwksConfig = new HttpLoadbalancerJwtValidationJwksConfigOutputReference(this, "jwks_config");
  public get jwksConfig() {
    return this._jwksConfig;
  }
  public putJwksConfig(value: HttpLoadbalancerJwtValidationJwksConfig) {
    this._jwksConfig.internalValue = value;
  }
  public resetJwksConfig() {
    this._jwksConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksConfigInput() {
    return this._jwksConfig.internalValue;
  }

  // mandatory_claims - computed: false, optional: true, required: false
  private _mandatoryClaims = new HttpLoadbalancerJwtValidationMandatoryClaimsOutputReference(this, "mandatory_claims");
  public get mandatoryClaims() {
    return this._mandatoryClaims;
  }
  public putMandatoryClaims(value: HttpLoadbalancerJwtValidationMandatoryClaims) {
    this._mandatoryClaims.internalValue = value;
  }
  public resetMandatoryClaims() {
    this._mandatoryClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryClaimsInput() {
    return this._mandatoryClaims.internalValue;
  }

  // reserved_claims - computed: false, optional: true, required: false
  private _reservedClaims = new HttpLoadbalancerJwtValidationReservedClaimsOutputReference(this, "reserved_claims");
  public get reservedClaims() {
    return this._reservedClaims;
  }
  public putReservedClaims(value: HttpLoadbalancerJwtValidationReservedClaims) {
    this._reservedClaims.internalValue = value;
  }
  public resetReservedClaims() {
    this._reservedClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedClaimsInput() {
    return this._reservedClaims.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new HttpLoadbalancerJwtValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: HttpLoadbalancerJwtValidationTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // token_location - computed: false, optional: false, required: true
  private _tokenLocation = new HttpLoadbalancerJwtValidationTokenLocationOutputReference(this, "token_location");
  public get tokenLocation() {
    return this._tokenLocation;
  }
  public putTokenLocation(value: HttpLoadbalancerJwtValidationTokenLocation) {
    this._tokenLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLocationInput() {
    return this._tokenLocation.internalValue;
  }
}
export interface HttpLoadbalancerL7DdosActionJsChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie_expiry HttpLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#js_script_delay HttpLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function httpLoadbalancerL7DdosActionJsChallengeToTerraform(struct?: HttpLoadbalancerL7DdosActionJsChallengeOutputReference | HttpLoadbalancerL7DdosActionJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
    js_script_delay: cdktf.numberToTerraform(struct!.jsScriptDelay),
  }
}


export function httpLoadbalancerL7DdosActionJsChallengeToHclTerraform(struct?: HttpLoadbalancerL7DdosActionJsChallengeOutputReference | HttpLoadbalancerL7DdosActionJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_script_delay: {
      value: cdktf.numberToHclTerraform(struct!.jsScriptDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerL7DdosActionJsChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerL7DdosActionJsChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    if (this._jsScriptDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsScriptDelay = this._jsScriptDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerL7DdosActionJsChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
      this._jsScriptDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
      this._jsScriptDelay = value.jsScriptDelay;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // js_script_delay - computed: false, optional: true, required: false
  private _jsScriptDelay?: number; 
  public get jsScriptDelay() {
    return this.getNumberAttribute('js_script_delay');
  }
  public set jsScriptDelay(value: number) {
    this._jsScriptDelay = value;
  }
  public resetJsScriptDelay() {
    this._jsScriptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsScriptDelayInput() {
    return this._jsScriptDelay;
  }
}
export interface HttpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie_expiry HttpLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function httpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallengeToTerraform(struct?: HttpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallengeOutputReference | HttpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function httpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallengeToHclTerraform(struct?: HttpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallengeOutputReference | HttpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }
}
export interface HttpLoadbalancerL7DdosProtectionClientsideActionJsChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie_expiry HttpLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#js_script_delay HttpLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function httpLoadbalancerL7DdosProtectionClientsideActionJsChallengeToTerraform(struct?: HttpLoadbalancerL7DdosProtectionClientsideActionJsChallengeOutputReference | HttpLoadbalancerL7DdosProtectionClientsideActionJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
    js_script_delay: cdktf.numberToTerraform(struct!.jsScriptDelay),
  }
}


export function httpLoadbalancerL7DdosProtectionClientsideActionJsChallengeToHclTerraform(struct?: HttpLoadbalancerL7DdosProtectionClientsideActionJsChallengeOutputReference | HttpLoadbalancerL7DdosProtectionClientsideActionJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_script_delay: {
      value: cdktf.numberToHclTerraform(struct!.jsScriptDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerL7DdosProtectionClientsideActionJsChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerL7DdosProtectionClientsideActionJsChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    if (this._jsScriptDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsScriptDelay = this._jsScriptDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerL7DdosProtectionClientsideActionJsChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
      this._jsScriptDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
      this._jsScriptDelay = value.jsScriptDelay;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // js_script_delay - computed: false, optional: true, required: false
  private _jsScriptDelay?: number; 
  public get jsScriptDelay() {
    return this.getNumberAttribute('js_script_delay');
  }
  public set jsScriptDelay(value: number) {
    this._jsScriptDelay = value;
  }
  public resetJsScriptDelay() {
    this._jsScriptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsScriptDelayInput() {
    return this._jsScriptDelay;
  }
}
export interface HttpLoadbalancerL7DdosProtectionDdosPolicyCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerL7DdosProtectionDdosPolicyCustomToTerraform(struct?: HttpLoadbalancerL7DdosProtectionDdosPolicyCustomOutputReference | HttpLoadbalancerL7DdosProtectionDdosPolicyCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerL7DdosProtectionDdosPolicyCustomToHclTerraform(struct?: HttpLoadbalancerL7DdosProtectionDdosPolicyCustomOutputReference | HttpLoadbalancerL7DdosProtectionDdosPolicyCustom): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerL7DdosProtectionDdosPolicyCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerL7DdosProtectionDdosPolicyCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerL7DdosProtectionDdosPolicyCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerL7DdosProtectionMitigationCaptchaChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie_expiry HttpLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function httpLoadbalancerL7DdosProtectionMitigationCaptchaChallengeToTerraform(struct?: HttpLoadbalancerL7DdosProtectionMitigationCaptchaChallengeOutputReference | HttpLoadbalancerL7DdosProtectionMitigationCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function httpLoadbalancerL7DdosProtectionMitigationCaptchaChallengeToHclTerraform(struct?: HttpLoadbalancerL7DdosProtectionMitigationCaptchaChallengeOutputReference | HttpLoadbalancerL7DdosProtectionMitigationCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerL7DdosProtectionMitigationCaptchaChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerL7DdosProtectionMitigationCaptchaChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerL7DdosProtectionMitigationCaptchaChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }
}
export interface HttpLoadbalancerL7DdosProtectionMitigationJsChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie_expiry HttpLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#js_script_delay HttpLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function httpLoadbalancerL7DdosProtectionMitigationJsChallengeToTerraform(struct?: HttpLoadbalancerL7DdosProtectionMitigationJsChallengeOutputReference | HttpLoadbalancerL7DdosProtectionMitigationJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
    js_script_delay: cdktf.numberToTerraform(struct!.jsScriptDelay),
  }
}


export function httpLoadbalancerL7DdosProtectionMitigationJsChallengeToHclTerraform(struct?: HttpLoadbalancerL7DdosProtectionMitigationJsChallengeOutputReference | HttpLoadbalancerL7DdosProtectionMitigationJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_script_delay: {
      value: cdktf.numberToHclTerraform(struct!.jsScriptDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerL7DdosProtectionMitigationJsChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerL7DdosProtectionMitigationJsChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    if (this._jsScriptDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsScriptDelay = this._jsScriptDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerL7DdosProtectionMitigationJsChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
      this._jsScriptDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
      this._jsScriptDelay = value.jsScriptDelay;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // js_script_delay - computed: false, optional: true, required: false
  private _jsScriptDelay?: number; 
  public get jsScriptDelay() {
    return this.getNumberAttribute('js_script_delay');
  }
  public set jsScriptDelay(value: number) {
    this._jsScriptDelay = value;
  }
  public resetJsScriptDelay() {
    this._jsScriptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsScriptDelayInput() {
    return this._jsScriptDelay;
  }
}
export interface HttpLoadbalancerL7DdosProtection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#clientside_action_none HttpLoadbalancer#clientside_action_none}
  */
  readonly clientsideActionNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ddos_policy_none HttpLoadbalancer#ddos_policy_none}
  */
  readonly ddosPolicyNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_rps_threshold HttpLoadbalancer#default_rps_threshold}
  */
  readonly defaultRpsThreshold?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#mitigation_block HttpLoadbalancer#mitigation_block}
  */
  readonly mitigationBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#mitigation_none HttpLoadbalancer#mitigation_none}
  */
  readonly mitigationNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#rps_threshold HttpLoadbalancer#rps_threshold}
  */
  readonly rpsThreshold?: number;
  /**
  * clientside_action_captcha_challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#clientside_action_captcha_challenge HttpLoadbalancer#clientside_action_captcha_challenge}
  */
  readonly clientsideActionCaptchaChallenge?: HttpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallenge;
  /**
  * clientside_action_js_challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#clientside_action_js_challenge HttpLoadbalancer#clientside_action_js_challenge}
  */
  readonly clientsideActionJsChallenge?: HttpLoadbalancerL7DdosProtectionClientsideActionJsChallenge;
  /**
  * ddos_policy_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ddos_policy_custom HttpLoadbalancer#ddos_policy_custom}
  */
  readonly ddosPolicyCustom?: HttpLoadbalancerL7DdosProtectionDdosPolicyCustom;
  /**
  * mitigation_captcha_challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#mitigation_captcha_challenge HttpLoadbalancer#mitigation_captcha_challenge}
  */
  readonly mitigationCaptchaChallenge?: HttpLoadbalancerL7DdosProtectionMitigationCaptchaChallenge;
  /**
  * mitigation_js_challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#mitigation_js_challenge HttpLoadbalancer#mitigation_js_challenge}
  */
  readonly mitigationJsChallenge?: HttpLoadbalancerL7DdosProtectionMitigationJsChallenge;
}

export function httpLoadbalancerL7DdosProtectionToTerraform(struct?: HttpLoadbalancerL7DdosProtectionOutputReference | HttpLoadbalancerL7DdosProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clientside_action_none: cdktf.booleanToTerraform(struct!.clientsideActionNone),
    ddos_policy_none: cdktf.booleanToTerraform(struct!.ddosPolicyNone),
    default_rps_threshold: cdktf.booleanToTerraform(struct!.defaultRpsThreshold),
    mitigation_block: cdktf.booleanToTerraform(struct!.mitigationBlock),
    mitigation_none: cdktf.booleanToTerraform(struct!.mitigationNone),
    rps_threshold: cdktf.numberToTerraform(struct!.rpsThreshold),
    clientside_action_captcha_challenge: httpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallengeToTerraform(struct!.clientsideActionCaptchaChallenge),
    clientside_action_js_challenge: httpLoadbalancerL7DdosProtectionClientsideActionJsChallengeToTerraform(struct!.clientsideActionJsChallenge),
    ddos_policy_custom: httpLoadbalancerL7DdosProtectionDdosPolicyCustomToTerraform(struct!.ddosPolicyCustom),
    mitigation_captcha_challenge: httpLoadbalancerL7DdosProtectionMitigationCaptchaChallengeToTerraform(struct!.mitigationCaptchaChallenge),
    mitigation_js_challenge: httpLoadbalancerL7DdosProtectionMitigationJsChallengeToTerraform(struct!.mitigationJsChallenge),
  }
}


export function httpLoadbalancerL7DdosProtectionToHclTerraform(struct?: HttpLoadbalancerL7DdosProtectionOutputReference | HttpLoadbalancerL7DdosProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clientside_action_none: {
      value: cdktf.booleanToHclTerraform(struct!.clientsideActionNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddos_policy_none: {
      value: cdktf.booleanToHclTerraform(struct!.ddosPolicyNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_rps_threshold: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRpsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mitigation_block: {
      value: cdktf.booleanToHclTerraform(struct!.mitigationBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mitigation_none: {
      value: cdktf.booleanToHclTerraform(struct!.mitigationNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rps_threshold: {
      value: cdktf.numberToHclTerraform(struct!.rpsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clientside_action_captcha_challenge: {
      value: httpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallengeToHclTerraform(struct!.clientsideActionCaptchaChallenge),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallengeList",
    },
    clientside_action_js_challenge: {
      value: httpLoadbalancerL7DdosProtectionClientsideActionJsChallengeToHclTerraform(struct!.clientsideActionJsChallenge),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerL7DdosProtectionClientsideActionJsChallengeList",
    },
    ddos_policy_custom: {
      value: httpLoadbalancerL7DdosProtectionDdosPolicyCustomToHclTerraform(struct!.ddosPolicyCustom),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerL7DdosProtectionDdosPolicyCustomList",
    },
    mitigation_captcha_challenge: {
      value: httpLoadbalancerL7DdosProtectionMitigationCaptchaChallengeToHclTerraform(struct!.mitigationCaptchaChallenge),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerL7DdosProtectionMitigationCaptchaChallengeList",
    },
    mitigation_js_challenge: {
      value: httpLoadbalancerL7DdosProtectionMitigationJsChallengeToHclTerraform(struct!.mitigationJsChallenge),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerL7DdosProtectionMitigationJsChallengeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerL7DdosProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerL7DdosProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientsideActionNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientsideActionNone = this._clientsideActionNone;
    }
    if (this._ddosPolicyNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosPolicyNone = this._ddosPolicyNone;
    }
    if (this._defaultRpsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRpsThreshold = this._defaultRpsThreshold;
    }
    if (this._mitigationBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigationBlock = this._mitigationBlock;
    }
    if (this._mitigationNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigationNone = this._mitigationNone;
    }
    if (this._rpsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpsThreshold = this._rpsThreshold;
    }
    if (this._clientsideActionCaptchaChallenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientsideActionCaptchaChallenge = this._clientsideActionCaptchaChallenge?.internalValue;
    }
    if (this._clientsideActionJsChallenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientsideActionJsChallenge = this._clientsideActionJsChallenge?.internalValue;
    }
    if (this._ddosPolicyCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosPolicyCustom = this._ddosPolicyCustom?.internalValue;
    }
    if (this._mitigationCaptchaChallenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigationCaptchaChallenge = this._mitigationCaptchaChallenge?.internalValue;
    }
    if (this._mitigationJsChallenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigationJsChallenge = this._mitigationJsChallenge?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerL7DdosProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientsideActionNone = undefined;
      this._ddosPolicyNone = undefined;
      this._defaultRpsThreshold = undefined;
      this._mitigationBlock = undefined;
      this._mitigationNone = undefined;
      this._rpsThreshold = undefined;
      this._clientsideActionCaptchaChallenge.internalValue = undefined;
      this._clientsideActionJsChallenge.internalValue = undefined;
      this._ddosPolicyCustom.internalValue = undefined;
      this._mitigationCaptchaChallenge.internalValue = undefined;
      this._mitigationJsChallenge.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientsideActionNone = value.clientsideActionNone;
      this._ddosPolicyNone = value.ddosPolicyNone;
      this._defaultRpsThreshold = value.defaultRpsThreshold;
      this._mitigationBlock = value.mitigationBlock;
      this._mitigationNone = value.mitigationNone;
      this._rpsThreshold = value.rpsThreshold;
      this._clientsideActionCaptchaChallenge.internalValue = value.clientsideActionCaptchaChallenge;
      this._clientsideActionJsChallenge.internalValue = value.clientsideActionJsChallenge;
      this._ddosPolicyCustom.internalValue = value.ddosPolicyCustom;
      this._mitigationCaptchaChallenge.internalValue = value.mitigationCaptchaChallenge;
      this._mitigationJsChallenge.internalValue = value.mitigationJsChallenge;
    }
  }

  // clientside_action_none - computed: false, optional: true, required: false
  private _clientsideActionNone?: boolean | cdktf.IResolvable; 
  public get clientsideActionNone() {
    return this.getBooleanAttribute('clientside_action_none');
  }
  public set clientsideActionNone(value: boolean | cdktf.IResolvable) {
    this._clientsideActionNone = value;
  }
  public resetClientsideActionNone() {
    this._clientsideActionNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsideActionNoneInput() {
    return this._clientsideActionNone;
  }

  // ddos_policy_none - computed: false, optional: true, required: false
  private _ddosPolicyNone?: boolean | cdktf.IResolvable; 
  public get ddosPolicyNone() {
    return this.getBooleanAttribute('ddos_policy_none');
  }
  public set ddosPolicyNone(value: boolean | cdktf.IResolvable) {
    this._ddosPolicyNone = value;
  }
  public resetDdosPolicyNone() {
    this._ddosPolicyNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosPolicyNoneInput() {
    return this._ddosPolicyNone;
  }

  // default_rps_threshold - computed: false, optional: true, required: false
  private _defaultRpsThreshold?: boolean | cdktf.IResolvable; 
  public get defaultRpsThreshold() {
    return this.getBooleanAttribute('default_rps_threshold');
  }
  public set defaultRpsThreshold(value: boolean | cdktf.IResolvable) {
    this._defaultRpsThreshold = value;
  }
  public resetDefaultRpsThreshold() {
    this._defaultRpsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRpsThresholdInput() {
    return this._defaultRpsThreshold;
  }

  // mitigation_block - computed: false, optional: true, required: false
  private _mitigationBlock?: boolean | cdktf.IResolvable; 
  public get mitigationBlock() {
    return this.getBooleanAttribute('mitigation_block');
  }
  public set mitigationBlock(value: boolean | cdktf.IResolvable) {
    this._mitigationBlock = value;
  }
  public resetMitigationBlock() {
    this._mitigationBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationBlockInput() {
    return this._mitigationBlock;
  }

  // mitigation_none - computed: false, optional: true, required: false
  private _mitigationNone?: boolean | cdktf.IResolvable; 
  public get mitigationNone() {
    return this.getBooleanAttribute('mitigation_none');
  }
  public set mitigationNone(value: boolean | cdktf.IResolvable) {
    this._mitigationNone = value;
  }
  public resetMitigationNone() {
    this._mitigationNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationNoneInput() {
    return this._mitigationNone;
  }

  // rps_threshold - computed: false, optional: true, required: false
  private _rpsThreshold?: number; 
  public get rpsThreshold() {
    return this.getNumberAttribute('rps_threshold');
  }
  public set rpsThreshold(value: number) {
    this._rpsThreshold = value;
  }
  public resetRpsThreshold() {
    this._rpsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpsThresholdInput() {
    return this._rpsThreshold;
  }

  // clientside_action_captcha_challenge - computed: false, optional: true, required: false
  private _clientsideActionCaptchaChallenge = new HttpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallengeOutputReference(this, "clientside_action_captcha_challenge");
  public get clientsideActionCaptchaChallenge() {
    return this._clientsideActionCaptchaChallenge;
  }
  public putClientsideActionCaptchaChallenge(value: HttpLoadbalancerL7DdosProtectionClientsideActionCaptchaChallenge) {
    this._clientsideActionCaptchaChallenge.internalValue = value;
  }
  public resetClientsideActionCaptchaChallenge() {
    this._clientsideActionCaptchaChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsideActionCaptchaChallengeInput() {
    return this._clientsideActionCaptchaChallenge.internalValue;
  }

  // clientside_action_js_challenge - computed: false, optional: true, required: false
  private _clientsideActionJsChallenge = new HttpLoadbalancerL7DdosProtectionClientsideActionJsChallengeOutputReference(this, "clientside_action_js_challenge");
  public get clientsideActionJsChallenge() {
    return this._clientsideActionJsChallenge;
  }
  public putClientsideActionJsChallenge(value: HttpLoadbalancerL7DdosProtectionClientsideActionJsChallenge) {
    this._clientsideActionJsChallenge.internalValue = value;
  }
  public resetClientsideActionJsChallenge() {
    this._clientsideActionJsChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsideActionJsChallengeInput() {
    return this._clientsideActionJsChallenge.internalValue;
  }

  // ddos_policy_custom - computed: false, optional: true, required: false
  private _ddosPolicyCustom = new HttpLoadbalancerL7DdosProtectionDdosPolicyCustomOutputReference(this, "ddos_policy_custom");
  public get ddosPolicyCustom() {
    return this._ddosPolicyCustom;
  }
  public putDdosPolicyCustom(value: HttpLoadbalancerL7DdosProtectionDdosPolicyCustom) {
    this._ddosPolicyCustom.internalValue = value;
  }
  public resetDdosPolicyCustom() {
    this._ddosPolicyCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosPolicyCustomInput() {
    return this._ddosPolicyCustom.internalValue;
  }

  // mitigation_captcha_challenge - computed: false, optional: true, required: false
  private _mitigationCaptchaChallenge = new HttpLoadbalancerL7DdosProtectionMitigationCaptchaChallengeOutputReference(this, "mitigation_captcha_challenge");
  public get mitigationCaptchaChallenge() {
    return this._mitigationCaptchaChallenge;
  }
  public putMitigationCaptchaChallenge(value: HttpLoadbalancerL7DdosProtectionMitigationCaptchaChallenge) {
    this._mitigationCaptchaChallenge.internalValue = value;
  }
  public resetMitigationCaptchaChallenge() {
    this._mitigationCaptchaChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationCaptchaChallengeInput() {
    return this._mitigationCaptchaChallenge.internalValue;
  }

  // mitigation_js_challenge - computed: false, optional: true, required: false
  private _mitigationJsChallenge = new HttpLoadbalancerL7DdosProtectionMitigationJsChallengeOutputReference(this, "mitigation_js_challenge");
  public get mitigationJsChallenge() {
    return this._mitigationJsChallenge;
  }
  public putMitigationJsChallenge(value: HttpLoadbalancerL7DdosProtectionMitigationJsChallenge) {
    this._mitigationJsChallenge.internalValue = value;
  }
  public resetMitigationJsChallenge() {
    this._mitigationJsChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationJsChallengeInput() {
    return this._mitigationJsChallenge.internalValue;
  }
}
export interface HttpLoadbalancerMaliciousUserMitigation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerMaliciousUserMitigationToTerraform(struct?: HttpLoadbalancerMaliciousUserMitigationOutputReference | HttpLoadbalancerMaliciousUserMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerMaliciousUserMitigationToHclTerraform(struct?: HttpLoadbalancerMaliciousUserMitigationOutputReference | HttpLoadbalancerMaliciousUserMitigation): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMaliciousUserMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMaliciousUserMitigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMaliciousUserMitigation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#block HttpLoadbalancer#block}
  */
  readonly block?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#report HttpLoadbalancer#report}
  */
  readonly report?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesActionToTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesActionOutputReference | HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.booleanToTerraform(struct!.block),
    report: cdktf.booleanToTerraform(struct!.report),
  }
}


export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesActionToHclTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesActionOutputReference | HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: cdktf.booleanToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    report: {
      value: cdktf.booleanToHclTerraform(struct!.report),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._report !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._block = undefined;
      this._report = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._block = value.block;
      this._report = value.report;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block?: boolean | cdktf.IResolvable; 
  public get block() {
    return this.getBooleanAttribute('block');
  }
  public set block(value: boolean | cdktf.IResolvable) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // report - computed: false, optional: true, required: false
  private _report?: boolean | cdktf.IResolvable; 
  public get report() {
    return this.getBooleanAttribute('report');
  }
  public set report(value: boolean | cdktf.IResolvable) {
    this._report = value;
  }
  public resetReport() {
    this._report = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report;
  }
}
export interface HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomain {
}

export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomainToTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomainOutputReference | HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomainToHclTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomainOutputReference | HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomainToTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomainOutputReference | HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomainToHclTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomainOutputReference | HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomain {
  /**
  * any_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomain;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomain;
}

export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainToTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainOutputReference | HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomainToTerraform(struct!.anyDomain),
    domain: httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomainToTerraform(struct!.domain),
  }
}


export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainToHclTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainOutputReference | HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomainToHclTerraform(struct!.anyDomain),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomainList",
    },
    domain: {
      value: httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain?.internalValue;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyDomain.internalValue = undefined;
      this._domain.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyDomain.internalValue = value.anyDomain;
      this._domain.internalValue = value.domain;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain = new HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomainOutputReference(this, "any_domain");
  public get anyDomain() {
    return this._anyDomain;
  }
  public putAnyDomain(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainAnyDomain) {
    this._anyDomain.internalValue = value;
  }
  public resetAnyDomain() {
    this._anyDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }
}
export interface HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadataToTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadataOutputReference | HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadataToHclTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadataOutputReference | HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
}
export interface HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPathToTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPathOutputReference | HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPathToHclTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPathOutputReference | HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPath): any {
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
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

export class HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
}
export interface HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_methods HttpLoadbalancer#http_methods}
  */
  readonly httpMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#protocol HttpLoadbalancer#protocol}
  */
  readonly protocol?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#action HttpLoadbalancer#action}
  */
  readonly action?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesAction;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPath;
}

export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesToTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpMethods),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    action: httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesActionToTerraform(struct!.action),
    domain: httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainToTerraform(struct!.domain),
    metadata: httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadataToTerraform(struct!.metadata),
    path: httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPathToTerraform(struct!.path),
  }
}


export function httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesToHclTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesActionList",
    },
    domain: {
      value: httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainList",
    },
    metadata: {
      value: httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadataList",
    },
    path: {
      value: httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpMethods = undefined;
      this._protocol = undefined;
      this._action.internalValue = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpMethods = value.httpMethods;
      this._protocol = value.protocol;
      this._action.internalValue = value.action;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
    }
  }

  // http_methods - computed: false, optional: true, required: false
  private _httpMethods?: string[]; 
  public get httpMethods() {
    return this.getListAttribute('http_methods');
  }
  public set httpMethods(value: string[]) {
    this._httpMethods = value;
  }
  public resetHttpMethods() {
    this._httpMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods;
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

  // action - computed: false, optional: true, required: false
  private _action = new HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRules[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesOutputReference {
    return new HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerMalwareProtectionSettings {
  /**
  * malware_protection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#malware_protection_rules HttpLoadbalancer#malware_protection_rules}
  */
  readonly malwareProtectionRules: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerMalwareProtectionSettingsToTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsOutputReference | HttpLoadbalancerMalwareProtectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    malware_protection_rules: cdktf.listMapper(httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesToTerraform, true)(struct!.malwareProtectionRules),
  }
}


export function httpLoadbalancerMalwareProtectionSettingsToHclTerraform(struct?: HttpLoadbalancerMalwareProtectionSettingsOutputReference | HttpLoadbalancerMalwareProtectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    malware_protection_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesToHclTerraform, true)(struct!.malwareProtectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMalwareProtectionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMalwareProtectionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._malwareProtectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareProtectionRules = this._malwareProtectionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMalwareProtectionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._malwareProtectionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._malwareProtectionRules.internalValue = value.malwareProtectionRules;
    }
  }

  // malware_protection_rules - computed: false, optional: false, required: true
  private _malwareProtectionRules = new HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRulesList(this, "malware_protection_rules", false);
  public get malwareProtectionRules() {
    return this._malwareProtectionRules;
  }
  public putMalwareProtectionRules(value: HttpLoadbalancerMalwareProtectionSettingsMalwareProtectionRules[] | cdktf.IResolvable) {
    this._malwareProtectionRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareProtectionRulesInput() {
    return this._malwareProtectionRules.internalValue;
  }
}
export interface HttpLoadbalancerMoreOptionAdditionalDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#domains HttpLoadbalancer#domains}
  */
  readonly domains: string[];
}

export function httpLoadbalancerMoreOptionAdditionalDomainsToTerraform(struct?: HttpLoadbalancerMoreOptionAdditionalDomainsOutputReference | HttpLoadbalancerMoreOptionAdditionalDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
  }
}


export function httpLoadbalancerMoreOptionAdditionalDomainsToHclTerraform(struct?: HttpLoadbalancerMoreOptionAdditionalDomainsOutputReference | HttpLoadbalancerMoreOptionAdditionalDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionAdditionalDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionAdditionalDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionAdditionalDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }
}
export interface HttpLoadbalancerMoreOptionBufferPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disabled HttpLoadbalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_request_bytes HttpLoadbalancer#max_request_bytes}
  */
  readonly maxRequestBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_request_time HttpLoadbalancer#max_request_time}
  */
  readonly maxRequestTime?: number;
}

export function httpLoadbalancerMoreOptionBufferPolicyToTerraform(struct?: HttpLoadbalancerMoreOptionBufferPolicyOutputReference | HttpLoadbalancerMoreOptionBufferPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    max_request_bytes: cdktf.numberToTerraform(struct!.maxRequestBytes),
    max_request_time: cdktf.numberToTerraform(struct!.maxRequestTime),
  }
}


export function httpLoadbalancerMoreOptionBufferPolicyToHclTerraform(struct?: HttpLoadbalancerMoreOptionBufferPolicyOutputReference | HttpLoadbalancerMoreOptionBufferPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_request_time: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionBufferPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionBufferPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._maxRequestBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBytes = this._maxRequestBytes;
    }
    if (this._maxRequestTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestTime = this._maxRequestTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionBufferPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._maxRequestBytes = undefined;
      this._maxRequestTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._maxRequestBytes = value.maxRequestBytes;
      this._maxRequestTime = value.maxRequestTime;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // max_request_bytes - computed: false, optional: true, required: false
  private _maxRequestBytes?: number; 
  public get maxRequestBytes() {
    return this.getNumberAttribute('max_request_bytes');
  }
  public set maxRequestBytes(value: number) {
    this._maxRequestBytes = value;
  }
  public resetMaxRequestBytes() {
    this._maxRequestBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBytesInput() {
    return this._maxRequestBytes;
  }

  // max_request_time - computed: false, optional: true, required: false
  private _maxRequestTime?: number; 
  public get maxRequestTime() {
    return this.getNumberAttribute('max_request_time');
  }
  public set maxRequestTime(value: number) {
    this._maxRequestTime = value;
  }
  public resetMaxRequestTime() {
    this._maxRequestTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestTimeInput() {
    return this._maxRequestTime;
  }
}
export interface HttpLoadbalancerMoreOptionCompressionParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#content_length HttpLoadbalancer#content_length}
  */
  readonly contentLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#content_type HttpLoadbalancer#content_type}
  */
  readonly contentType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_on_etag_header HttpLoadbalancer#disable_on_etag_header}
  */
  readonly disableOnEtagHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#remove_accept_encoding_header HttpLoadbalancer#remove_accept_encoding_header}
  */
  readonly removeAcceptEncodingHeader?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerMoreOptionCompressionParamsToTerraform(struct?: HttpLoadbalancerMoreOptionCompressionParamsOutputReference | HttpLoadbalancerMoreOptionCompressionParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_length: cdktf.numberToTerraform(struct!.contentLength),
    content_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentType),
    disable_on_etag_header: cdktf.booleanToTerraform(struct!.disableOnEtagHeader),
    remove_accept_encoding_header: cdktf.booleanToTerraform(struct!.removeAcceptEncodingHeader),
  }
}


export function httpLoadbalancerMoreOptionCompressionParamsToHclTerraform(struct?: HttpLoadbalancerMoreOptionCompressionParamsOutputReference | HttpLoadbalancerMoreOptionCompressionParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_length: {
      value: cdktf.numberToHclTerraform(struct!.contentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_on_etag_header: {
      value: cdktf.booleanToHclTerraform(struct!.disableOnEtagHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_accept_encoding_header: {
      value: cdktf.booleanToHclTerraform(struct!.removeAcceptEncodingHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionCompressionParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionCompressionParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLength = this._contentLength;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._disableOnEtagHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOnEtagHeader = this._disableOnEtagHeader;
    }
    if (this._removeAcceptEncodingHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAcceptEncodingHeader = this._removeAcceptEncodingHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionCompressionParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentLength = undefined;
      this._contentType = undefined;
      this._disableOnEtagHeader = undefined;
      this._removeAcceptEncodingHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentLength = value.contentLength;
      this._contentType = value.contentType;
      this._disableOnEtagHeader = value.disableOnEtagHeader;
      this._removeAcceptEncodingHeader = value.removeAcceptEncodingHeader;
    }
  }

  // content_length - computed: false, optional: true, required: false
  private _contentLength?: number; 
  public get contentLength() {
    return this.getNumberAttribute('content_length');
  }
  public set contentLength(value: number) {
    this._contentLength = value;
  }
  public resetContentLength() {
    this._contentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLengthInput() {
    return this._contentLength;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string[]; 
  public get contentType() {
    return this.getListAttribute('content_type');
  }
  public set contentType(value: string[]) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // disable_on_etag_header - computed: false, optional: true, required: false
  private _disableOnEtagHeader?: boolean | cdktf.IResolvable; 
  public get disableOnEtagHeader() {
    return this.getBooleanAttribute('disable_on_etag_header');
  }
  public set disableOnEtagHeader(value: boolean | cdktf.IResolvable) {
    this._disableOnEtagHeader = value;
  }
  public resetDisableOnEtagHeader() {
    this._disableOnEtagHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOnEtagHeaderInput() {
    return this._disableOnEtagHeader;
  }

  // remove_accept_encoding_header - computed: false, optional: true, required: false
  private _removeAcceptEncodingHeader?: boolean | cdktf.IResolvable; 
  public get removeAcceptEncodingHeader() {
    return this.getBooleanAttribute('remove_accept_encoding_header');
  }
  public set removeAcceptEncodingHeader(value: boolean | cdktf.IResolvable) {
    this._removeAcceptEncodingHeader = value;
  }
  public resetRemoveAcceptEncodingHeader() {
    this._removeAcceptEncodingHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAcceptEncodingHeaderInput() {
    return this._removeAcceptEncodingHeader;
  }
}
export interface HttpLoadbalancerMoreOptionCookiesToModify {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_httponly HttpLoadbalancer#add_httponly}
  */
  readonly addHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_secure HttpLoadbalancer#add_secure}
  */
  readonly addSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_tampering_protection HttpLoadbalancer#disable_tampering_protection}
  */
  readonly disableTamperingProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#enable_tampering_protection HttpLoadbalancer#enable_tampering_protection}
  */
  readonly enableTamperingProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_httponly HttpLoadbalancer#ignore_httponly}
  */
  readonly ignoreHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_max_age HttpLoadbalancer#ignore_max_age}
  */
  readonly ignoreMaxAge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_samesite HttpLoadbalancer#ignore_samesite}
  */
  readonly ignoreSamesite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_secure HttpLoadbalancer#ignore_secure}
  */
  readonly ignoreSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_age_value HttpLoadbalancer#max_age_value}
  */
  readonly maxAgeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_lax HttpLoadbalancer#samesite_lax}
  */
  readonly samesiteLax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_none HttpLoadbalancer#samesite_none}
  */
  readonly samesiteNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_strict HttpLoadbalancer#samesite_strict}
  */
  readonly samesiteStrict?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerMoreOptionCookiesToModifyToTerraform(struct?: HttpLoadbalancerMoreOptionCookiesToModify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_httponly: cdktf.booleanToTerraform(struct!.addHttponly),
    add_secure: cdktf.booleanToTerraform(struct!.addSecure),
    disable_tampering_protection: cdktf.booleanToTerraform(struct!.disableTamperingProtection),
    enable_tampering_protection: cdktf.booleanToTerraform(struct!.enableTamperingProtection),
    ignore_httponly: cdktf.booleanToTerraform(struct!.ignoreHttponly),
    ignore_max_age: cdktf.booleanToTerraform(struct!.ignoreMaxAge),
    ignore_samesite: cdktf.booleanToTerraform(struct!.ignoreSamesite),
    ignore_secure: cdktf.booleanToTerraform(struct!.ignoreSecure),
    max_age_value: cdktf.numberToTerraform(struct!.maxAgeValue),
    name: cdktf.stringToTerraform(struct!.name),
    samesite_lax: cdktf.booleanToTerraform(struct!.samesiteLax),
    samesite_none: cdktf.booleanToTerraform(struct!.samesiteNone),
    samesite_strict: cdktf.booleanToTerraform(struct!.samesiteStrict),
  }
}


export function httpLoadbalancerMoreOptionCookiesToModifyToHclTerraform(struct?: HttpLoadbalancerMoreOptionCookiesToModify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.addHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_secure: {
      value: cdktf.booleanToHclTerraform(struct!.addSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_tampering_protection: {
      value: cdktf.booleanToHclTerraform(struct!.disableTamperingProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tampering_protection: {
      value: cdktf.booleanToHclTerraform(struct!.enableTamperingProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_max_age: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_samesite: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age_value: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samesite_lax: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteLax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_none: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_strict: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionCookiesToModifyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerMoreOptionCookiesToModify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttponly = this._addHttponly;
    }
    if (this._addSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSecure = this._addSecure;
    }
    if (this._disableTamperingProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTamperingProtection = this._disableTamperingProtection;
    }
    if (this._enableTamperingProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTamperingProtection = this._enableTamperingProtection;
    }
    if (this._ignoreHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHttponly = this._ignoreHttponly;
    }
    if (this._ignoreMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMaxAge = this._ignoreMaxAge;
    }
    if (this._ignoreSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSamesite = this._ignoreSamesite;
    }
    if (this._ignoreSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSecure = this._ignoreSecure;
    }
    if (this._maxAgeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeValue = this._maxAgeValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._samesiteLax !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteLax = this._samesiteLax;
    }
    if (this._samesiteNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteNone = this._samesiteNone;
    }
    if (this._samesiteStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteStrict = this._samesiteStrict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionCookiesToModify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addHttponly = undefined;
      this._addSecure = undefined;
      this._disableTamperingProtection = undefined;
      this._enableTamperingProtection = undefined;
      this._ignoreHttponly = undefined;
      this._ignoreMaxAge = undefined;
      this._ignoreSamesite = undefined;
      this._ignoreSecure = undefined;
      this._maxAgeValue = undefined;
      this._name = undefined;
      this._samesiteLax = undefined;
      this._samesiteNone = undefined;
      this._samesiteStrict = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addHttponly = value.addHttponly;
      this._addSecure = value.addSecure;
      this._disableTamperingProtection = value.disableTamperingProtection;
      this._enableTamperingProtection = value.enableTamperingProtection;
      this._ignoreHttponly = value.ignoreHttponly;
      this._ignoreMaxAge = value.ignoreMaxAge;
      this._ignoreSamesite = value.ignoreSamesite;
      this._ignoreSecure = value.ignoreSecure;
      this._maxAgeValue = value.maxAgeValue;
      this._name = value.name;
      this._samesiteLax = value.samesiteLax;
      this._samesiteNone = value.samesiteNone;
      this._samesiteStrict = value.samesiteStrict;
    }
  }

  // add_httponly - computed: false, optional: true, required: false
  private _addHttponly?: boolean | cdktf.IResolvable; 
  public get addHttponly() {
    return this.getBooleanAttribute('add_httponly');
  }
  public set addHttponly(value: boolean | cdktf.IResolvable) {
    this._addHttponly = value;
  }
  public resetAddHttponly() {
    this._addHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttponlyInput() {
    return this._addHttponly;
  }

  // add_secure - computed: false, optional: true, required: false
  private _addSecure?: boolean | cdktf.IResolvable; 
  public get addSecure() {
    return this.getBooleanAttribute('add_secure');
  }
  public set addSecure(value: boolean | cdktf.IResolvable) {
    this._addSecure = value;
  }
  public resetAddSecure() {
    this._addSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSecureInput() {
    return this._addSecure;
  }

  // disable_tampering_protection - computed: false, optional: true, required: false
  private _disableTamperingProtection?: boolean | cdktf.IResolvable; 
  public get disableTamperingProtection() {
    return this.getBooleanAttribute('disable_tampering_protection');
  }
  public set disableTamperingProtection(value: boolean | cdktf.IResolvable) {
    this._disableTamperingProtection = value;
  }
  public resetDisableTamperingProtection() {
    this._disableTamperingProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTamperingProtectionInput() {
    return this._disableTamperingProtection;
  }

  // enable_tampering_protection - computed: false, optional: true, required: false
  private _enableTamperingProtection?: boolean | cdktf.IResolvable; 
  public get enableTamperingProtection() {
    return this.getBooleanAttribute('enable_tampering_protection');
  }
  public set enableTamperingProtection(value: boolean | cdktf.IResolvable) {
    this._enableTamperingProtection = value;
  }
  public resetEnableTamperingProtection() {
    this._enableTamperingProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTamperingProtectionInput() {
    return this._enableTamperingProtection;
  }

  // ignore_httponly - computed: false, optional: true, required: false
  private _ignoreHttponly?: boolean | cdktf.IResolvable; 
  public get ignoreHttponly() {
    return this.getBooleanAttribute('ignore_httponly');
  }
  public set ignoreHttponly(value: boolean | cdktf.IResolvable) {
    this._ignoreHttponly = value;
  }
  public resetIgnoreHttponly() {
    this._ignoreHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttponlyInput() {
    return this._ignoreHttponly;
  }

  // ignore_max_age - computed: false, optional: true, required: false
  private _ignoreMaxAge?: boolean | cdktf.IResolvable; 
  public get ignoreMaxAge() {
    return this.getBooleanAttribute('ignore_max_age');
  }
  public set ignoreMaxAge(value: boolean | cdktf.IResolvable) {
    this._ignoreMaxAge = value;
  }
  public resetIgnoreMaxAge() {
    this._ignoreMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMaxAgeInput() {
    return this._ignoreMaxAge;
  }

  // ignore_samesite - computed: false, optional: true, required: false
  private _ignoreSamesite?: boolean | cdktf.IResolvable; 
  public get ignoreSamesite() {
    return this.getBooleanAttribute('ignore_samesite');
  }
  public set ignoreSamesite(value: boolean | cdktf.IResolvable) {
    this._ignoreSamesite = value;
  }
  public resetIgnoreSamesite() {
    this._ignoreSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSamesiteInput() {
    return this._ignoreSamesite;
  }

  // ignore_secure - computed: false, optional: true, required: false
  private _ignoreSecure?: boolean | cdktf.IResolvable; 
  public get ignoreSecure() {
    return this.getBooleanAttribute('ignore_secure');
  }
  public set ignoreSecure(value: boolean | cdktf.IResolvable) {
    this._ignoreSecure = value;
  }
  public resetIgnoreSecure() {
    this._ignoreSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSecureInput() {
    return this._ignoreSecure;
  }

  // max_age_value - computed: false, optional: true, required: false
  private _maxAgeValue?: number; 
  public get maxAgeValue() {
    return this.getNumberAttribute('max_age_value');
  }
  public set maxAgeValue(value: number) {
    this._maxAgeValue = value;
  }
  public resetMaxAgeValue() {
    this._maxAgeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeValueInput() {
    return this._maxAgeValue;
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

  // samesite_lax - computed: false, optional: true, required: false
  private _samesiteLax?: boolean | cdktf.IResolvable; 
  public get samesiteLax() {
    return this.getBooleanAttribute('samesite_lax');
  }
  public set samesiteLax(value: boolean | cdktf.IResolvable) {
    this._samesiteLax = value;
  }
  public resetSamesiteLax() {
    this._samesiteLax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteLaxInput() {
    return this._samesiteLax;
  }

  // samesite_none - computed: false, optional: true, required: false
  private _samesiteNone?: boolean | cdktf.IResolvable; 
  public get samesiteNone() {
    return this.getBooleanAttribute('samesite_none');
  }
  public set samesiteNone(value: boolean | cdktf.IResolvable) {
    this._samesiteNone = value;
  }
  public resetSamesiteNone() {
    this._samesiteNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteNoneInput() {
    return this._samesiteNone;
  }

  // samesite_strict - computed: false, optional: true, required: false
  private _samesiteStrict?: boolean | cdktf.IResolvable; 
  public get samesiteStrict() {
    return this.getBooleanAttribute('samesite_strict');
  }
  public set samesiteStrict(value: boolean | cdktf.IResolvable) {
    this._samesiteStrict = value;
  }
  public resetSamesiteStrict() {
    this._samesiteStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteStrictInput() {
    return this._samesiteStrict;
  }
}

export class HttpLoadbalancerMoreOptionCookiesToModifyList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerMoreOptionCookiesToModify[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerMoreOptionCookiesToModifyOutputReference {
    return new HttpLoadbalancerMoreOptionCookiesToModifyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerMoreOptionJavascriptInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cache_prefix HttpLoadbalancer#cache_prefix}
  */
  readonly cachePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_script_url HttpLoadbalancer#custom_script_url}
  */
  readonly customScriptUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#script_config HttpLoadbalancer#script_config}
  */
  readonly scriptConfig?: string;
}

export function httpLoadbalancerMoreOptionJavascriptInfoToTerraform(struct?: HttpLoadbalancerMoreOptionJavascriptInfoOutputReference | HttpLoadbalancerMoreOptionJavascriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_prefix: cdktf.stringToTerraform(struct!.cachePrefix),
    custom_script_url: cdktf.stringToTerraform(struct!.customScriptUrl),
    script_config: cdktf.stringToTerraform(struct!.scriptConfig),
  }
}


export function httpLoadbalancerMoreOptionJavascriptInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionJavascriptInfoOutputReference | HttpLoadbalancerMoreOptionJavascriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_prefix: {
      value: cdktf.stringToHclTerraform(struct!.cachePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_script_url: {
      value: cdktf.stringToHclTerraform(struct!.customScriptUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_config: {
      value: cdktf.stringToHclTerraform(struct!.scriptConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionJavascriptInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionJavascriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePrefix = this._cachePrefix;
    }
    if (this._customScriptUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customScriptUrl = this._customScriptUrl;
    }
    if (this._scriptConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptConfig = this._scriptConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionJavascriptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cachePrefix = undefined;
      this._customScriptUrl = undefined;
      this._scriptConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cachePrefix = value.cachePrefix;
      this._customScriptUrl = value.customScriptUrl;
      this._scriptConfig = value.scriptConfig;
    }
  }

  // cache_prefix - computed: false, optional: true, required: false
  private _cachePrefix?: string; 
  public get cachePrefix() {
    return this.getStringAttribute('cache_prefix');
  }
  public set cachePrefix(value: string) {
    this._cachePrefix = value;
  }
  public resetCachePrefix() {
    this._cachePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePrefixInput() {
    return this._cachePrefix;
  }

  // custom_script_url - computed: false, optional: true, required: false
  private _customScriptUrl?: string; 
  public get customScriptUrl() {
    return this.getStringAttribute('custom_script_url');
  }
  public set customScriptUrl(value: string) {
    this._customScriptUrl = value;
  }
  public resetCustomScriptUrl() {
    this._customScriptUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customScriptUrlInput() {
    return this._customScriptUrl;
  }

  // script_config - computed: false, optional: true, required: false
  private _scriptConfig?: string; 
  public get scriptConfig() {
    return this.getStringAttribute('script_config');
  }
  public set scriptConfig(value: string) {
    this._scriptConfig = value;
  }
  public resetScriptConfig() {
    this._scriptConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptConfigInput() {
    return this._scriptConfig;
  }
}
export interface HttpLoadbalancerMoreOptionJwt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerMoreOptionJwtToTerraform(struct?: HttpLoadbalancerMoreOptionJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerMoreOptionJwtToHclTerraform(struct?: HttpLoadbalancerMoreOptionJwt | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionJwtOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerMoreOptionJwt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionJwt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerMoreOptionJwtList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerMoreOptionJwt[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerMoreOptionJwtOutputReference {
    return new HttpLoadbalancerMoreOptionJwtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
}
export interface HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding HttpLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#version HttpLoadbalancer#version}
  */
  readonly version?: number;
}

export function httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding_type HttpLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info_internal HttpLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#vault_secret_info HttpLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#wingman_secret_info HttpLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfo;
}

export function httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueToTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueOutputReference | HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueOutputReference | HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface HttpLoadbalancerMoreOptionRequestCookiesToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#overwrite HttpLoadbalancer#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#value HttpLoadbalancer#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_value HttpLoadbalancer#secret_value}
  */
  readonly secretValue?: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValue;
}

export function httpLoadbalancerMoreOptionRequestCookiesToAddToTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function httpLoadbalancerMoreOptionRequestCookiesToAddToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestCookiesToAdd | cdktf.IResolvable): any {
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
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: httpLoadbalancerMoreOptionRequestCookiesToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestCookiesToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerMoreOptionRequestCookiesToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestCookiesToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._overwrite = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._overwrite = value.overwrite;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
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

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: HttpLoadbalancerMoreOptionRequestCookiesToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class HttpLoadbalancerMoreOptionRequestCookiesToAddList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerMoreOptionRequestCookiesToAdd[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerMoreOptionRequestCookiesToAddOutputReference {
    return new HttpLoadbalancerMoreOptionRequestCookiesToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
}
export interface HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding HttpLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#version HttpLoadbalancer#version}
  */
  readonly version?: number;
}

export function httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding_type HttpLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info_internal HttpLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#vault_secret_info HttpLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#wingman_secret_info HttpLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfo;
}

export function httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueToTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueOutputReference | HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueOutputReference | HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface HttpLoadbalancerMoreOptionRequestHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#append HttpLoadbalancer#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#value HttpLoadbalancer#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_value HttpLoadbalancer#secret_value}
  */
  readonly secretValue?: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValue;
}

export function httpLoadbalancerMoreOptionRequestHeadersToAddToTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function httpLoadbalancerMoreOptionRequestHeadersToAddToHclTerraform(struct?: HttpLoadbalancerMoreOptionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    secret_value: {
      value: httpLoadbalancerMoreOptionRequestHeadersToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerMoreOptionRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
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

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: HttpLoadbalancerMoreOptionRequestHeadersToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class HttpLoadbalancerMoreOptionRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerMoreOptionRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerMoreOptionRequestHeadersToAddOutputReference {
    return new HttpLoadbalancerMoreOptionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
}
export interface HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding HttpLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#version HttpLoadbalancer#version}
  */
  readonly version?: number;
}

export function httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding_type HttpLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info_internal HttpLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#vault_secret_info HttpLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#wingman_secret_info HttpLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfo;
}

export function httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueToTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueOutputReference | HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueOutputReference | HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface HttpLoadbalancerMoreOptionResponseCookiesToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_domain HttpLoadbalancer#add_domain}
  */
  readonly addDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_expiry HttpLoadbalancer#add_expiry}
  */
  readonly addExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_httponly HttpLoadbalancer#add_httponly}
  */
  readonly addHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_partitioned HttpLoadbalancer#add_partitioned}
  */
  readonly addPartitioned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_path HttpLoadbalancer#add_path}
  */
  readonly addPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_secure HttpLoadbalancer#add_secure}
  */
  readonly addSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_domain HttpLoadbalancer#ignore_domain}
  */
  readonly ignoreDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_expiry HttpLoadbalancer#ignore_expiry}
  */
  readonly ignoreExpiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_httponly HttpLoadbalancer#ignore_httponly}
  */
  readonly ignoreHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_max_age HttpLoadbalancer#ignore_max_age}
  */
  readonly ignoreMaxAge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_partitioned HttpLoadbalancer#ignore_partitioned}
  */
  readonly ignorePartitioned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_path HttpLoadbalancer#ignore_path}
  */
  readonly ignorePath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_samesite HttpLoadbalancer#ignore_samesite}
  */
  readonly ignoreSamesite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_secure HttpLoadbalancer#ignore_secure}
  */
  readonly ignoreSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_value HttpLoadbalancer#ignore_value}
  */
  readonly ignoreValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_age_value HttpLoadbalancer#max_age_value}
  */
  readonly maxAgeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#overwrite HttpLoadbalancer#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_lax HttpLoadbalancer#samesite_lax}
  */
  readonly samesiteLax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_none HttpLoadbalancer#samesite_none}
  */
  readonly samesiteNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_strict HttpLoadbalancer#samesite_strict}
  */
  readonly samesiteStrict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#value HttpLoadbalancer#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_value HttpLoadbalancer#secret_value}
  */
  readonly secretValue?: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValue;
}

export function httpLoadbalancerMoreOptionResponseCookiesToAddToTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_domain: cdktf.stringToTerraform(struct!.addDomain),
    add_expiry: cdktf.stringToTerraform(struct!.addExpiry),
    add_httponly: cdktf.booleanToTerraform(struct!.addHttponly),
    add_partitioned: cdktf.booleanToTerraform(struct!.addPartitioned),
    add_path: cdktf.stringToTerraform(struct!.addPath),
    add_secure: cdktf.booleanToTerraform(struct!.addSecure),
    ignore_domain: cdktf.booleanToTerraform(struct!.ignoreDomain),
    ignore_expiry: cdktf.booleanToTerraform(struct!.ignoreExpiry),
    ignore_httponly: cdktf.booleanToTerraform(struct!.ignoreHttponly),
    ignore_max_age: cdktf.booleanToTerraform(struct!.ignoreMaxAge),
    ignore_partitioned: cdktf.booleanToTerraform(struct!.ignorePartitioned),
    ignore_path: cdktf.booleanToTerraform(struct!.ignorePath),
    ignore_samesite: cdktf.booleanToTerraform(struct!.ignoreSamesite),
    ignore_secure: cdktf.booleanToTerraform(struct!.ignoreSecure),
    ignore_value: cdktf.booleanToTerraform(struct!.ignoreValue),
    max_age_value: cdktf.numberToTerraform(struct!.maxAgeValue),
    name: cdktf.stringToTerraform(struct!.name),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    samesite_lax: cdktf.booleanToTerraform(struct!.samesiteLax),
    samesite_none: cdktf.booleanToTerraform(struct!.samesiteNone),
    samesite_strict: cdktf.booleanToTerraform(struct!.samesiteStrict),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function httpLoadbalancerMoreOptionResponseCookiesToAddToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseCookiesToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_domain: {
      value: cdktf.stringToHclTerraform(struct!.addDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_expiry: {
      value: cdktf.stringToHclTerraform(struct!.addExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.addHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_partitioned: {
      value: cdktf.booleanToHclTerraform(struct!.addPartitioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_path: {
      value: cdktf.stringToHclTerraform(struct!.addPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_secure: {
      value: cdktf.booleanToHclTerraform(struct!.addSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_domain: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_max_age: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_partitioned: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePartitioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_path: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_samesite: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_value: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age_value: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_lax: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteLax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_none: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_strict: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: httpLoadbalancerMoreOptionResponseCookiesToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseCookiesToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerMoreOptionResponseCookiesToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.addDomain = this._addDomain;
    }
    if (this._addExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.addExpiry = this._addExpiry;
    }
    if (this._addHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttponly = this._addHttponly;
    }
    if (this._addPartitioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPartitioned = this._addPartitioned;
    }
    if (this._addPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPath = this._addPath;
    }
    if (this._addSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSecure = this._addSecure;
    }
    if (this._ignoreDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDomain = this._ignoreDomain;
    }
    if (this._ignoreExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreExpiry = this._ignoreExpiry;
    }
    if (this._ignoreHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHttponly = this._ignoreHttponly;
    }
    if (this._ignoreMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMaxAge = this._ignoreMaxAge;
    }
    if (this._ignorePartitioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePartitioned = this._ignorePartitioned;
    }
    if (this._ignorePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePath = this._ignorePath;
    }
    if (this._ignoreSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSamesite = this._ignoreSamesite;
    }
    if (this._ignoreSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSecure = this._ignoreSecure;
    }
    if (this._ignoreValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreValue = this._ignoreValue;
    }
    if (this._maxAgeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeValue = this._maxAgeValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._samesiteLax !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteLax = this._samesiteLax;
    }
    if (this._samesiteNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteNone = this._samesiteNone;
    }
    if (this._samesiteStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteStrict = this._samesiteStrict;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseCookiesToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addDomain = undefined;
      this._addExpiry = undefined;
      this._addHttponly = undefined;
      this._addPartitioned = undefined;
      this._addPath = undefined;
      this._addSecure = undefined;
      this._ignoreDomain = undefined;
      this._ignoreExpiry = undefined;
      this._ignoreHttponly = undefined;
      this._ignoreMaxAge = undefined;
      this._ignorePartitioned = undefined;
      this._ignorePath = undefined;
      this._ignoreSamesite = undefined;
      this._ignoreSecure = undefined;
      this._ignoreValue = undefined;
      this._maxAgeValue = undefined;
      this._name = undefined;
      this._overwrite = undefined;
      this._samesiteLax = undefined;
      this._samesiteNone = undefined;
      this._samesiteStrict = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addDomain = value.addDomain;
      this._addExpiry = value.addExpiry;
      this._addHttponly = value.addHttponly;
      this._addPartitioned = value.addPartitioned;
      this._addPath = value.addPath;
      this._addSecure = value.addSecure;
      this._ignoreDomain = value.ignoreDomain;
      this._ignoreExpiry = value.ignoreExpiry;
      this._ignoreHttponly = value.ignoreHttponly;
      this._ignoreMaxAge = value.ignoreMaxAge;
      this._ignorePartitioned = value.ignorePartitioned;
      this._ignorePath = value.ignorePath;
      this._ignoreSamesite = value.ignoreSamesite;
      this._ignoreSecure = value.ignoreSecure;
      this._ignoreValue = value.ignoreValue;
      this._maxAgeValue = value.maxAgeValue;
      this._name = value.name;
      this._overwrite = value.overwrite;
      this._samesiteLax = value.samesiteLax;
      this._samesiteNone = value.samesiteNone;
      this._samesiteStrict = value.samesiteStrict;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // add_domain - computed: false, optional: true, required: false
  private _addDomain?: string; 
  public get addDomain() {
    return this.getStringAttribute('add_domain');
  }
  public set addDomain(value: string) {
    this._addDomain = value;
  }
  public resetAddDomain() {
    this._addDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addDomainInput() {
    return this._addDomain;
  }

  // add_expiry - computed: false, optional: true, required: false
  private _addExpiry?: string; 
  public get addExpiry() {
    return this.getStringAttribute('add_expiry');
  }
  public set addExpiry(value: string) {
    this._addExpiry = value;
  }
  public resetAddExpiry() {
    this._addExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addExpiryInput() {
    return this._addExpiry;
  }

  // add_httponly - computed: false, optional: true, required: false
  private _addHttponly?: boolean | cdktf.IResolvable; 
  public get addHttponly() {
    return this.getBooleanAttribute('add_httponly');
  }
  public set addHttponly(value: boolean | cdktf.IResolvable) {
    this._addHttponly = value;
  }
  public resetAddHttponly() {
    this._addHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttponlyInput() {
    return this._addHttponly;
  }

  // add_partitioned - computed: false, optional: true, required: false
  private _addPartitioned?: boolean | cdktf.IResolvable; 
  public get addPartitioned() {
    return this.getBooleanAttribute('add_partitioned');
  }
  public set addPartitioned(value: boolean | cdktf.IResolvable) {
    this._addPartitioned = value;
  }
  public resetAddPartitioned() {
    this._addPartitioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPartitionedInput() {
    return this._addPartitioned;
  }

  // add_path - computed: false, optional: true, required: false
  private _addPath?: string; 
  public get addPath() {
    return this.getStringAttribute('add_path');
  }
  public set addPath(value: string) {
    this._addPath = value;
  }
  public resetAddPath() {
    this._addPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathInput() {
    return this._addPath;
  }

  // add_secure - computed: false, optional: true, required: false
  private _addSecure?: boolean | cdktf.IResolvable; 
  public get addSecure() {
    return this.getBooleanAttribute('add_secure');
  }
  public set addSecure(value: boolean | cdktf.IResolvable) {
    this._addSecure = value;
  }
  public resetAddSecure() {
    this._addSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSecureInput() {
    return this._addSecure;
  }

  // ignore_domain - computed: false, optional: true, required: false
  private _ignoreDomain?: boolean | cdktf.IResolvable; 
  public get ignoreDomain() {
    return this.getBooleanAttribute('ignore_domain');
  }
  public set ignoreDomain(value: boolean | cdktf.IResolvable) {
    this._ignoreDomain = value;
  }
  public resetIgnoreDomain() {
    this._ignoreDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDomainInput() {
    return this._ignoreDomain;
  }

  // ignore_expiry - computed: false, optional: true, required: false
  private _ignoreExpiry?: boolean | cdktf.IResolvable; 
  public get ignoreExpiry() {
    return this.getBooleanAttribute('ignore_expiry');
  }
  public set ignoreExpiry(value: boolean | cdktf.IResolvable) {
    this._ignoreExpiry = value;
  }
  public resetIgnoreExpiry() {
    this._ignoreExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreExpiryInput() {
    return this._ignoreExpiry;
  }

  // ignore_httponly - computed: false, optional: true, required: false
  private _ignoreHttponly?: boolean | cdktf.IResolvable; 
  public get ignoreHttponly() {
    return this.getBooleanAttribute('ignore_httponly');
  }
  public set ignoreHttponly(value: boolean | cdktf.IResolvable) {
    this._ignoreHttponly = value;
  }
  public resetIgnoreHttponly() {
    this._ignoreHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttponlyInput() {
    return this._ignoreHttponly;
  }

  // ignore_max_age - computed: false, optional: true, required: false
  private _ignoreMaxAge?: boolean | cdktf.IResolvable; 
  public get ignoreMaxAge() {
    return this.getBooleanAttribute('ignore_max_age');
  }
  public set ignoreMaxAge(value: boolean | cdktf.IResolvable) {
    this._ignoreMaxAge = value;
  }
  public resetIgnoreMaxAge() {
    this._ignoreMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMaxAgeInput() {
    return this._ignoreMaxAge;
  }

  // ignore_partitioned - computed: false, optional: true, required: false
  private _ignorePartitioned?: boolean | cdktf.IResolvable; 
  public get ignorePartitioned() {
    return this.getBooleanAttribute('ignore_partitioned');
  }
  public set ignorePartitioned(value: boolean | cdktf.IResolvable) {
    this._ignorePartitioned = value;
  }
  public resetIgnorePartitioned() {
    this._ignorePartitioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePartitionedInput() {
    return this._ignorePartitioned;
  }

  // ignore_path - computed: false, optional: true, required: false
  private _ignorePath?: boolean | cdktf.IResolvable; 
  public get ignorePath() {
    return this.getBooleanAttribute('ignore_path');
  }
  public set ignorePath(value: boolean | cdktf.IResolvable) {
    this._ignorePath = value;
  }
  public resetIgnorePath() {
    this._ignorePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePathInput() {
    return this._ignorePath;
  }

  // ignore_samesite - computed: false, optional: true, required: false
  private _ignoreSamesite?: boolean | cdktf.IResolvable; 
  public get ignoreSamesite() {
    return this.getBooleanAttribute('ignore_samesite');
  }
  public set ignoreSamesite(value: boolean | cdktf.IResolvable) {
    this._ignoreSamesite = value;
  }
  public resetIgnoreSamesite() {
    this._ignoreSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSamesiteInput() {
    return this._ignoreSamesite;
  }

  // ignore_secure - computed: false, optional: true, required: false
  private _ignoreSecure?: boolean | cdktf.IResolvable; 
  public get ignoreSecure() {
    return this.getBooleanAttribute('ignore_secure');
  }
  public set ignoreSecure(value: boolean | cdktf.IResolvable) {
    this._ignoreSecure = value;
  }
  public resetIgnoreSecure() {
    this._ignoreSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSecureInput() {
    return this._ignoreSecure;
  }

  // ignore_value - computed: false, optional: true, required: false
  private _ignoreValue?: boolean | cdktf.IResolvable; 
  public get ignoreValue() {
    return this.getBooleanAttribute('ignore_value');
  }
  public set ignoreValue(value: boolean | cdktf.IResolvable) {
    this._ignoreValue = value;
  }
  public resetIgnoreValue() {
    this._ignoreValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreValueInput() {
    return this._ignoreValue;
  }

  // max_age_value - computed: false, optional: true, required: false
  private _maxAgeValue?: number; 
  public get maxAgeValue() {
    return this.getNumberAttribute('max_age_value');
  }
  public set maxAgeValue(value: number) {
    this._maxAgeValue = value;
  }
  public resetMaxAgeValue() {
    this._maxAgeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeValueInput() {
    return this._maxAgeValue;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // samesite_lax - computed: false, optional: true, required: false
  private _samesiteLax?: boolean | cdktf.IResolvable; 
  public get samesiteLax() {
    return this.getBooleanAttribute('samesite_lax');
  }
  public set samesiteLax(value: boolean | cdktf.IResolvable) {
    this._samesiteLax = value;
  }
  public resetSamesiteLax() {
    this._samesiteLax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteLaxInput() {
    return this._samesiteLax;
  }

  // samesite_none - computed: false, optional: true, required: false
  private _samesiteNone?: boolean | cdktf.IResolvable; 
  public get samesiteNone() {
    return this.getBooleanAttribute('samesite_none');
  }
  public set samesiteNone(value: boolean | cdktf.IResolvable) {
    this._samesiteNone = value;
  }
  public resetSamesiteNone() {
    this._samesiteNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteNoneInput() {
    return this._samesiteNone;
  }

  // samesite_strict - computed: false, optional: true, required: false
  private _samesiteStrict?: boolean | cdktf.IResolvable; 
  public get samesiteStrict() {
    return this.getBooleanAttribute('samesite_strict');
  }
  public set samesiteStrict(value: boolean | cdktf.IResolvable) {
    this._samesiteStrict = value;
  }
  public resetSamesiteStrict() {
    this._samesiteStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteStrictInput() {
    return this._samesiteStrict;
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

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: HttpLoadbalancerMoreOptionResponseCookiesToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class HttpLoadbalancerMoreOptionResponseCookiesToAddList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerMoreOptionResponseCookiesToAdd[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerMoreOptionResponseCookiesToAddOutputReference {
    return new HttpLoadbalancerMoreOptionResponseCookiesToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
}
export interface HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding HttpLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#version HttpLoadbalancer#version}
  */
  readonly version?: number;
}

export function httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding_type HttpLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info_internal HttpLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#vault_secret_info HttpLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#wingman_secret_info HttpLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfo;
}

export function httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueToTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueOutputReference | HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueOutputReference | HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface HttpLoadbalancerMoreOptionResponseHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#append HttpLoadbalancer#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#value HttpLoadbalancer#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_value HttpLoadbalancer#secret_value}
  */
  readonly secretValue?: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValue;
}

export function httpLoadbalancerMoreOptionResponseHeadersToAddToTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function httpLoadbalancerMoreOptionResponseHeadersToAddToHclTerraform(struct?: HttpLoadbalancerMoreOptionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    secret_value: {
      value: httpLoadbalancerMoreOptionResponseHeadersToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerMoreOptionResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOptionResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
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

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: HttpLoadbalancerMoreOptionResponseHeadersToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class HttpLoadbalancerMoreOptionResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerMoreOptionResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerMoreOptionResponseHeadersToAddOutputReference {
    return new HttpLoadbalancerMoreOptionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerMoreOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_errors HttpLoadbalancer#custom_errors}
  */
  readonly customErrors?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_default_error_pages HttpLoadbalancer#disable_default_error_pages}
  */
  readonly disableDefaultErrorPages?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_path_normalize HttpLoadbalancer#disable_path_normalize}
  */
  readonly disablePathNormalize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#enable_path_normalize HttpLoadbalancer#enable_path_normalize}
  */
  readonly enablePathNormalize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#enable_strict_sni_host_header_check HttpLoadbalancer#enable_strict_sni_host_header_check}
  */
  readonly enableStrictSniHostHeaderCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#idle_timeout HttpLoadbalancer#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_request_header_size HttpLoadbalancer#max_request_header_size}
  */
  readonly maxRequestHeaderSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#request_cookies_to_remove HttpLoadbalancer#request_cookies_to_remove}
  */
  readonly requestCookiesToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#request_headers_to_remove HttpLoadbalancer#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#response_cookies_to_remove HttpLoadbalancer#response_cookies_to_remove}
  */
  readonly responseCookiesToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#response_headers_to_remove HttpLoadbalancer#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * additional_domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#additional_domains HttpLoadbalancer#additional_domains}
  */
  readonly additionalDomains?: HttpLoadbalancerMoreOptionAdditionalDomains;
  /**
  * buffer_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#buffer_policy HttpLoadbalancer#buffer_policy}
  */
  readonly bufferPolicy?: HttpLoadbalancerMoreOptionBufferPolicy;
  /**
  * compression_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#compression_params HttpLoadbalancer#compression_params}
  */
  readonly compressionParams?: HttpLoadbalancerMoreOptionCompressionParams;
  /**
  * cookies_to_modify block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookies_to_modify HttpLoadbalancer#cookies_to_modify}
  */
  readonly cookiesToModify?: HttpLoadbalancerMoreOptionCookiesToModify[] | cdktf.IResolvable;
  /**
  * javascript_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#javascript_info HttpLoadbalancer#javascript_info}
  */
  readonly javascriptInfo?: HttpLoadbalancerMoreOptionJavascriptInfo;
  /**
  * jwt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#jwt HttpLoadbalancer#jwt}
  */
  readonly jwt?: HttpLoadbalancerMoreOptionJwt[] | cdktf.IResolvable;
  /**
  * request_cookies_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#request_cookies_to_add HttpLoadbalancer#request_cookies_to_add}
  */
  readonly requestCookiesToAdd?: HttpLoadbalancerMoreOptionRequestCookiesToAdd[] | cdktf.IResolvable;
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#request_headers_to_add HttpLoadbalancer#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: HttpLoadbalancerMoreOptionRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_cookies_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#response_cookies_to_add HttpLoadbalancer#response_cookies_to_add}
  */
  readonly responseCookiesToAdd?: HttpLoadbalancerMoreOptionResponseCookiesToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#response_headers_to_add HttpLoadbalancer#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: HttpLoadbalancerMoreOptionResponseHeadersToAdd[] | cdktf.IResolvable;
}

export function httpLoadbalancerMoreOptionToTerraform(struct?: HttpLoadbalancerMoreOptionOutputReference | HttpLoadbalancerMoreOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_errors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customErrors),
    disable_default_error_pages: cdktf.booleanToTerraform(struct!.disableDefaultErrorPages),
    disable_path_normalize: cdktf.booleanToTerraform(struct!.disablePathNormalize),
    enable_path_normalize: cdktf.booleanToTerraform(struct!.enablePathNormalize),
    enable_strict_sni_host_header_check: cdktf.booleanToTerraform(struct!.enableStrictSniHostHeaderCheck),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
    max_request_header_size: cdktf.numberToTerraform(struct!.maxRequestHeaderSize),
    request_cookies_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestCookiesToRemove),
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_cookies_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseCookiesToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    additional_domains: httpLoadbalancerMoreOptionAdditionalDomainsToTerraform(struct!.additionalDomains),
    buffer_policy: httpLoadbalancerMoreOptionBufferPolicyToTerraform(struct!.bufferPolicy),
    compression_params: httpLoadbalancerMoreOptionCompressionParamsToTerraform(struct!.compressionParams),
    cookies_to_modify: cdktf.listMapper(httpLoadbalancerMoreOptionCookiesToModifyToTerraform, true)(struct!.cookiesToModify),
    javascript_info: httpLoadbalancerMoreOptionJavascriptInfoToTerraform(struct!.javascriptInfo),
    jwt: cdktf.listMapper(httpLoadbalancerMoreOptionJwtToTerraform, true)(struct!.jwt),
    request_cookies_to_add: cdktf.listMapper(httpLoadbalancerMoreOptionRequestCookiesToAddToTerraform, true)(struct!.requestCookiesToAdd),
    request_headers_to_add: cdktf.listMapper(httpLoadbalancerMoreOptionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_cookies_to_add: cdktf.listMapper(httpLoadbalancerMoreOptionResponseCookiesToAddToTerraform, true)(struct!.responseCookiesToAdd),
    response_headers_to_add: cdktf.listMapper(httpLoadbalancerMoreOptionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function httpLoadbalancerMoreOptionToHclTerraform(struct?: HttpLoadbalancerMoreOptionOutputReference | HttpLoadbalancerMoreOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_errors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customErrors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disable_default_error_pages: {
      value: cdktf.booleanToHclTerraform(struct!.disableDefaultErrorPages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_path_normalize: {
      value: cdktf.booleanToHclTerraform(struct!.disablePathNormalize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_path_normalize: {
      value: cdktf.booleanToHclTerraform(struct!.enablePathNormalize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_strict_sni_host_header_check: {
      value: cdktf.booleanToHclTerraform(struct!.enableStrictSniHostHeaderCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_request_header_size: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestHeaderSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_cookies_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestCookiesToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_cookies_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseCookiesToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_domains: {
      value: httpLoadbalancerMoreOptionAdditionalDomainsToHclTerraform(struct!.additionalDomains),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionAdditionalDomainsList",
    },
    buffer_policy: {
      value: httpLoadbalancerMoreOptionBufferPolicyToHclTerraform(struct!.bufferPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionBufferPolicyList",
    },
    compression_params: {
      value: httpLoadbalancerMoreOptionCompressionParamsToHclTerraform(struct!.compressionParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionCompressionParamsList",
    },
    cookies_to_modify: {
      value: cdktf.listMapperHcl(httpLoadbalancerMoreOptionCookiesToModifyToHclTerraform, true)(struct!.cookiesToModify),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionCookiesToModifyList",
    },
    javascript_info: {
      value: httpLoadbalancerMoreOptionJavascriptInfoToHclTerraform(struct!.javascriptInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionJavascriptInfoList",
    },
    jwt: {
      value: cdktf.listMapperHcl(httpLoadbalancerMoreOptionJwtToHclTerraform, true)(struct!.jwt),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionJwtList",
    },
    request_cookies_to_add: {
      value: cdktf.listMapperHcl(httpLoadbalancerMoreOptionRequestCookiesToAddToHclTerraform, true)(struct!.requestCookiesToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestCookiesToAddList",
    },
    request_headers_to_add: {
      value: cdktf.listMapperHcl(httpLoadbalancerMoreOptionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionRequestHeadersToAddList",
    },
    response_cookies_to_add: {
      value: cdktf.listMapperHcl(httpLoadbalancerMoreOptionResponseCookiesToAddToHclTerraform, true)(struct!.responseCookiesToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseCookiesToAddList",
    },
    response_headers_to_add: {
      value: cdktf.listMapperHcl(httpLoadbalancerMoreOptionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerMoreOptionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerMoreOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerMoreOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrors = this._customErrors;
    }
    if (this._disableDefaultErrorPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDefaultErrorPages = this._disableDefaultErrorPages;
    }
    if (this._disablePathNormalize !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePathNormalize = this._disablePathNormalize;
    }
    if (this._enablePathNormalize !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePathNormalize = this._enablePathNormalize;
    }
    if (this._enableStrictSniHostHeaderCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStrictSniHostHeaderCheck = this._enableStrictSniHostHeaderCheck;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxRequestHeaderSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestHeaderSize = this._maxRequestHeaderSize;
    }
    if (this._requestCookiesToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookiesToRemove = this._requestCookiesToRemove;
    }
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseCookiesToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCookiesToRemove = this._responseCookiesToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._additionalDomains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalDomains = this._additionalDomains?.internalValue;
    }
    if (this._bufferPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferPolicy = this._bufferPolicy?.internalValue;
    }
    if (this._compressionParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionParams = this._compressionParams?.internalValue;
    }
    if (this._cookiesToModify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiesToModify = this._cookiesToModify?.internalValue;
    }
    if (this._javascriptInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptInfo = this._javascriptInfo?.internalValue;
    }
    if (this._jwt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt?.internalValue;
    }
    if (this._requestCookiesToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookiesToAdd = this._requestCookiesToAdd?.internalValue;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseCookiesToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCookiesToAdd = this._responseCookiesToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerMoreOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customErrors = undefined;
      this._disableDefaultErrorPages = undefined;
      this._disablePathNormalize = undefined;
      this._enablePathNormalize = undefined;
      this._enableStrictSniHostHeaderCheck = undefined;
      this._idleTimeout = undefined;
      this._maxRequestHeaderSize = undefined;
      this._requestCookiesToRemove = undefined;
      this._requestHeadersToRemove = undefined;
      this._responseCookiesToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._additionalDomains.internalValue = undefined;
      this._bufferPolicy.internalValue = undefined;
      this._compressionParams.internalValue = undefined;
      this._cookiesToModify.internalValue = undefined;
      this._javascriptInfo.internalValue = undefined;
      this._jwt.internalValue = undefined;
      this._requestCookiesToAdd.internalValue = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseCookiesToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customErrors = value.customErrors;
      this._disableDefaultErrorPages = value.disableDefaultErrorPages;
      this._disablePathNormalize = value.disablePathNormalize;
      this._enablePathNormalize = value.enablePathNormalize;
      this._enableStrictSniHostHeaderCheck = value.enableStrictSniHostHeaderCheck;
      this._idleTimeout = value.idleTimeout;
      this._maxRequestHeaderSize = value.maxRequestHeaderSize;
      this._requestCookiesToRemove = value.requestCookiesToRemove;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseCookiesToRemove = value.responseCookiesToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._additionalDomains.internalValue = value.additionalDomains;
      this._bufferPolicy.internalValue = value.bufferPolicy;
      this._compressionParams.internalValue = value.compressionParams;
      this._cookiesToModify.internalValue = value.cookiesToModify;
      this._javascriptInfo.internalValue = value.javascriptInfo;
      this._jwt.internalValue = value.jwt;
      this._requestCookiesToAdd.internalValue = value.requestCookiesToAdd;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseCookiesToAdd.internalValue = value.responseCookiesToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // custom_errors - computed: false, optional: true, required: false
  private _customErrors?: { [key: string]: string }; 
  public get customErrors() {
    return this.getStringMapAttribute('custom_errors');
  }
  public set customErrors(value: { [key: string]: string }) {
    this._customErrors = value;
  }
  public resetCustomErrors() {
    this._customErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorsInput() {
    return this._customErrors;
  }

  // disable_default_error_pages - computed: false, optional: true, required: false
  private _disableDefaultErrorPages?: boolean | cdktf.IResolvable; 
  public get disableDefaultErrorPages() {
    return this.getBooleanAttribute('disable_default_error_pages');
  }
  public set disableDefaultErrorPages(value: boolean | cdktf.IResolvable) {
    this._disableDefaultErrorPages = value;
  }
  public resetDisableDefaultErrorPages() {
    this._disableDefaultErrorPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDefaultErrorPagesInput() {
    return this._disableDefaultErrorPages;
  }

  // disable_path_normalize - computed: false, optional: true, required: false
  private _disablePathNormalize?: boolean | cdktf.IResolvable; 
  public get disablePathNormalize() {
    return this.getBooleanAttribute('disable_path_normalize');
  }
  public set disablePathNormalize(value: boolean | cdktf.IResolvable) {
    this._disablePathNormalize = value;
  }
  public resetDisablePathNormalize() {
    this._disablePathNormalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePathNormalizeInput() {
    return this._disablePathNormalize;
  }

  // enable_path_normalize - computed: false, optional: true, required: false
  private _enablePathNormalize?: boolean | cdktf.IResolvable; 
  public get enablePathNormalize() {
    return this.getBooleanAttribute('enable_path_normalize');
  }
  public set enablePathNormalize(value: boolean | cdktf.IResolvable) {
    this._enablePathNormalize = value;
  }
  public resetEnablePathNormalize() {
    this._enablePathNormalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePathNormalizeInput() {
    return this._enablePathNormalize;
  }

  // enable_strict_sni_host_header_check - computed: false, optional: true, required: false
  private _enableStrictSniHostHeaderCheck?: boolean | cdktf.IResolvable; 
  public get enableStrictSniHostHeaderCheck() {
    return this.getBooleanAttribute('enable_strict_sni_host_header_check');
  }
  public set enableStrictSniHostHeaderCheck(value: boolean | cdktf.IResolvable) {
    this._enableStrictSniHostHeaderCheck = value;
  }
  public resetEnableStrictSniHostHeaderCheck() {
    this._enableStrictSniHostHeaderCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStrictSniHostHeaderCheckInput() {
    return this._enableStrictSniHostHeaderCheck;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_request_header_size - computed: false, optional: true, required: false
  private _maxRequestHeaderSize?: number; 
  public get maxRequestHeaderSize() {
    return this.getNumberAttribute('max_request_header_size');
  }
  public set maxRequestHeaderSize(value: number) {
    this._maxRequestHeaderSize = value;
  }
  public resetMaxRequestHeaderSize() {
    this._maxRequestHeaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestHeaderSizeInput() {
    return this._maxRequestHeaderSize;
  }

  // request_cookies_to_remove - computed: false, optional: true, required: false
  private _requestCookiesToRemove?: string[]; 
  public get requestCookiesToRemove() {
    return this.getListAttribute('request_cookies_to_remove');
  }
  public set requestCookiesToRemove(value: string[]) {
    this._requestCookiesToRemove = value;
  }
  public resetRequestCookiesToRemove() {
    this._requestCookiesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookiesToRemoveInput() {
    return this._requestCookiesToRemove;
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_cookies_to_remove - computed: false, optional: true, required: false
  private _responseCookiesToRemove?: string[]; 
  public get responseCookiesToRemove() {
    return this.getListAttribute('response_cookies_to_remove');
  }
  public set responseCookiesToRemove(value: string[]) {
    this._responseCookiesToRemove = value;
  }
  public resetResponseCookiesToRemove() {
    this._responseCookiesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCookiesToRemoveInput() {
    return this._responseCookiesToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // additional_domains - computed: false, optional: true, required: false
  private _additionalDomains = new HttpLoadbalancerMoreOptionAdditionalDomainsOutputReference(this, "additional_domains");
  public get additionalDomains() {
    return this._additionalDomains;
  }
  public putAdditionalDomains(value: HttpLoadbalancerMoreOptionAdditionalDomains) {
    this._additionalDomains.internalValue = value;
  }
  public resetAdditionalDomains() {
    this._additionalDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDomainsInput() {
    return this._additionalDomains.internalValue;
  }

  // buffer_policy - computed: false, optional: true, required: false
  private _bufferPolicy = new HttpLoadbalancerMoreOptionBufferPolicyOutputReference(this, "buffer_policy");
  public get bufferPolicy() {
    return this._bufferPolicy;
  }
  public putBufferPolicy(value: HttpLoadbalancerMoreOptionBufferPolicy) {
    this._bufferPolicy.internalValue = value;
  }
  public resetBufferPolicy() {
    this._bufferPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferPolicyInput() {
    return this._bufferPolicy.internalValue;
  }

  // compression_params - computed: false, optional: true, required: false
  private _compressionParams = new HttpLoadbalancerMoreOptionCompressionParamsOutputReference(this, "compression_params");
  public get compressionParams() {
    return this._compressionParams;
  }
  public putCompressionParams(value: HttpLoadbalancerMoreOptionCompressionParams) {
    this._compressionParams.internalValue = value;
  }
  public resetCompressionParams() {
    this._compressionParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionParamsInput() {
    return this._compressionParams.internalValue;
  }

  // cookies_to_modify - computed: false, optional: true, required: false
  private _cookiesToModify = new HttpLoadbalancerMoreOptionCookiesToModifyList(this, "cookies_to_modify", false);
  public get cookiesToModify() {
    return this._cookiesToModify;
  }
  public putCookiesToModify(value: HttpLoadbalancerMoreOptionCookiesToModify[] | cdktf.IResolvable) {
    this._cookiesToModify.internalValue = value;
  }
  public resetCookiesToModify() {
    this._cookiesToModify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesToModifyInput() {
    return this._cookiesToModify.internalValue;
  }

  // javascript_info - computed: false, optional: true, required: false
  private _javascriptInfo = new HttpLoadbalancerMoreOptionJavascriptInfoOutputReference(this, "javascript_info");
  public get javascriptInfo() {
    return this._javascriptInfo;
  }
  public putJavascriptInfo(value: HttpLoadbalancerMoreOptionJavascriptInfo) {
    this._javascriptInfo.internalValue = value;
  }
  public resetJavascriptInfo() {
    this._javascriptInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptInfoInput() {
    return this._javascriptInfo.internalValue;
  }

  // jwt - computed: false, optional: true, required: false
  private _jwt = new HttpLoadbalancerMoreOptionJwtList(this, "jwt", false);
  public get jwt() {
    return this._jwt;
  }
  public putJwt(value: HttpLoadbalancerMoreOptionJwt[] | cdktf.IResolvable) {
    this._jwt.internalValue = value;
  }
  public resetJwt() {
    this._jwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt.internalValue;
  }

  // request_cookies_to_add - computed: false, optional: true, required: false
  private _requestCookiesToAdd = new HttpLoadbalancerMoreOptionRequestCookiesToAddList(this, "request_cookies_to_add", false);
  public get requestCookiesToAdd() {
    return this._requestCookiesToAdd;
  }
  public putRequestCookiesToAdd(value: HttpLoadbalancerMoreOptionRequestCookiesToAdd[] | cdktf.IResolvable) {
    this._requestCookiesToAdd.internalValue = value;
  }
  public resetRequestCookiesToAdd() {
    this._requestCookiesToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookiesToAddInput() {
    return this._requestCookiesToAdd.internalValue;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new HttpLoadbalancerMoreOptionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: HttpLoadbalancerMoreOptionRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_cookies_to_add - computed: false, optional: true, required: false
  private _responseCookiesToAdd = new HttpLoadbalancerMoreOptionResponseCookiesToAddList(this, "response_cookies_to_add", false);
  public get responseCookiesToAdd() {
    return this._responseCookiesToAdd;
  }
  public putResponseCookiesToAdd(value: HttpLoadbalancerMoreOptionResponseCookiesToAdd[] | cdktf.IResolvable) {
    this._responseCookiesToAdd.internalValue = value;
  }
  public resetResponseCookiesToAdd() {
    this._responseCookiesToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCookiesToAddInput() {
    return this._responseCookiesToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new HttpLoadbalancerMoreOptionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: HttpLoadbalancerMoreOptionResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#as_numbers HttpLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStructToTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStructOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStructToHclTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStructOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSetsToTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSetsToHclTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSets | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSetsOutputReference {
    return new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#asn_sets HttpLoadbalancer#asn_sets}
  */
  readonly asnSets: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherToTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherToHclTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcherToTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcherOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcherToHclTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcherOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#expressions HttpLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelectorToTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelectorOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelectorToHclTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelectorOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
