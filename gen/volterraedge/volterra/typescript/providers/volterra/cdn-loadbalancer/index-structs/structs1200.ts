import * as cdktf from 'cdktf';
import { CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern,
cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform,
cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform,
CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference,
CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern,
cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform,
cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform,
CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference,
CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget,
cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform,
cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform,
CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference,
CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections,
cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform,
cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform,
CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference,
CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern,
cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform,
cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform,
CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference,
CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata,
cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform,
cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform,
CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference,
CdnLoadbalancerEnableApiDiscoveryApiCrawler,
cdnLoadbalancerEnableApiDiscoveryApiCrawlerToTerraform,
cdnLoadbalancerEnableApiDiscoveryApiCrawlerToHclTerraform,
CdnLoadbalancerEnableApiDiscoveryApiCrawlerOutputReference,
CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan,
cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanToTerraform,
cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanToHclTerraform,
CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference,
CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery,
cdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryToTerraform,
cdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryToHclTerraform,
CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference,
CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettings,
cdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsToTerraform,
cdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsToHclTerraform,
CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsOutputReference } from './structs800'
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern {
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#key_pattern CdnLoadbalancer#key_pattern}
  */
  readonly keyPattern: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#value_pattern CdnLoadbalancer#value_pattern}
  */
  readonly valuePattern: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern;
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_pattern: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform(struct!.keyPattern),
    value_pattern: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform(struct!.valuePattern),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_pattern: {
      value: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternList",
    },
    value_pattern: {
      value: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern | undefined {
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

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern | undefined) {
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
  private _keyPattern = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern) {
    this._keyPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern.internalValue;
  }

  // value_pattern - computed: false, optional: false, required: true
  private _valuePattern = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern) {
    this._valuePattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern.internalValue;
  }
}
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern): any {
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

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern | undefined {
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

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern | undefined) {
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
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#all_request_sections CdnLoadbalancer#all_request_sections}
  */
  readonly allRequestSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#all_response_sections CdnLoadbalancer#all_response_sections}
  */
  readonly allResponseSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#all_sections CdnLoadbalancer#all_sections}
  */
  readonly allSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#any_target CdnLoadbalancer#any_target}
  */
  readonly anyTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#api_group CdnLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#api_endpoint_target CdnLoadbalancer#api_endpoint_target}
  */
  readonly apiEndpointTarget?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget;
  /**
  * custom_sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#custom_sections CdnLoadbalancer#custom_sections}
  */
  readonly customSections?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections;
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#key_pattern CdnLoadbalancer#key_pattern}
  */
  readonly keyPattern?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern;
  /**
  * key_value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#key_value_pattern CdnLoadbalancer#key_value_pattern}
  */
  readonly keyValuePattern?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#value_pattern CdnLoadbalancer#value_pattern}
  */
  readonly valuePattern?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern;
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig): any {
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
    api_endpoint_target: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform(struct!.apiEndpointTarget),
    custom_sections: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform(struct!.customSections),
    key_pattern: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform(struct!.keyPattern),
    key_value_pattern: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToTerraform(struct!.keyValuePattern),
    value_pattern: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToTerraform(struct!.valuePattern),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig): any {
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
      value: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform(struct!.apiEndpointTarget),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetList",
    },
    custom_sections: {
      value: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform(struct!.customSections),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsList",
    },
    key_pattern: {
      value: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternList",
    },
    key_value_pattern: {
      value: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToHclTerraform(struct!.keyValuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternList",
    },
    value_pattern: {
      value: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig | undefined {
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

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig | undefined) {
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
  private _apiEndpointTarget = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference(this, "api_endpoint_target");
  public get apiEndpointTarget() {
    return this._apiEndpointTarget;
  }
  public putApiEndpointTarget(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget) {
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
  private _customSections = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference(this, "custom_sections");
  public get customSections() {
    return this._customSections;
  }
  public putCustomSections(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections) {
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
  private _keyPattern = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern) {
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
  private _keyValuePattern = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference(this, "key_value_pattern");
  public get keyValuePattern() {
    return this._keyValuePattern;
  }
  public putKeyValuePattern(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern) {
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
  private _valuePattern = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern) {
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
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#type CdnLoadbalancer#type}
  */
  readonly type: string;
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType): any {
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

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType | undefined) {
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
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata;
  /**
  * sensitive_data_detection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#sensitive_data_detection_config CdnLoadbalancer#sensitive_data_detection_config}
  */
  readonly sensitiveDataDetectionConfig: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig;
  /**
  * sensitive_data_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#sensitive_data_type CdnLoadbalancer#sensitive_data_type}
  */
  readonly sensitiveDataType: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType;
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform(struct!.metadata),
    sensitive_data_detection_config: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToTerraform(struct!.sensitiveDataDetectionConfig),
    sensitive_data_type: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToTerraform(struct!.sensitiveDataType),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataList",
    },
    sensitive_data_detection_config: {
      value: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToHclTerraform(struct!.sensitiveDataDetectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigList",
    },
    sensitive_data_type: {
      value: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToHclTerraform(struct!.sensitiveDataType),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable | undefined) {
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
  private _metadata = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // sensitive_data_detection_config - computed: false, optional: false, required: true
  private _sensitiveDataDetectionConfig = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference(this, "sensitive_data_detection_config");
  public get sensitiveDataDetectionConfig() {
    return this._sensitiveDataDetectionConfig;
  }
  public putSensitiveDataDetectionConfig(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig) {
    this._sensitiveDataDetectionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataDetectionConfigInput() {
    return this._sensitiveDataDetectionConfig.internalValue;
  }

  // sensitive_data_type - computed: false, optional: false, required: true
  private _sensitiveDataType = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference(this, "sensitive_data_type");
  public get sensitiveDataType() {
    return this._sensitiveDataType;
  }
  public putSensitiveDataType(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType) {
    this._sensitiveDataType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataTypeInput() {
    return this._sensitiveDataType.internalValue;
  }
}

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference {
    return new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable): any {
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

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference {
    return new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules {
  /**
  * custom_sensitive_data_detection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#custom_sensitive_data_detection_rules CdnLoadbalancer#custom_sensitive_data_detection_rules}
  */
  readonly customSensitiveDataDetectionRules?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable;
  /**
  * disabled_built_in_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#disabled_built_in_rules CdnLoadbalancer#disabled_built_in_rules}
  */
  readonly disabledBuiltInRules?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sensitive_data_detection_rules: cdktf.listMapper(cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToTerraform, true)(struct!.customSensitiveDataDetectionRules),
    disabled_built_in_rules: cdktf.listMapper(cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToTerraform, true)(struct!.disabledBuiltInRules),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sensitive_data_detection_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToHclTerraform, true)(struct!.customSensitiveDataDetectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList",
    },
    disabled_built_in_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToHclTerraform, true)(struct!.disabledBuiltInRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules | undefined {
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

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules | undefined) {
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
  private _customSensitiveDataDetectionRules = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList(this, "custom_sensitive_data_detection_rules", false);
  public get customSensitiveDataDetectionRules() {
    return this._customSensitiveDataDetectionRules;
  }
  public putCustomSensitiveDataDetectionRules(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable) {
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
  private _disabledBuiltInRules = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesList(this, "disabled_built_in_rules", false);
  public get disabledBuiltInRules() {
    return this._disabledBuiltInRules;
  }
  public putDisabledBuiltInRules(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable) {
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
export interface CdnLoadbalancerEnableApiDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#default_api_auth_discovery CdnLoadbalancer#default_api_auth_discovery}
  */
  readonly defaultApiAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#disable_learn_from_redirect_traffic CdnLoadbalancer#disable_learn_from_redirect_traffic}
  */
  readonly disableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#enable_learn_from_redirect_traffic CdnLoadbalancer#enable_learn_from_redirect_traffic}
  */
  readonly enableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable;
  /**
  * api_crawler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#api_crawler CdnLoadbalancer#api_crawler}
  */
  readonly apiCrawler?: CdnLoadbalancerEnableApiDiscoveryApiCrawler;
  /**
  * api_discovery_from_code_scan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#api_discovery_from_code_scan CdnLoadbalancer#api_discovery_from_code_scan}
  */
  readonly apiDiscoveryFromCodeScan?: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan;
  /**
  * custom_api_auth_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#custom_api_auth_discovery CdnLoadbalancer#custom_api_auth_discovery}
  */
  readonly customApiAuthDiscovery?: CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery;
  /**
  * discovered_api_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#discovered_api_settings CdnLoadbalancer#discovered_api_settings}
  */
  readonly discoveredApiSettings?: CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettings;
  /**
  * sensitive_data_detection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#sensitive_data_detection_rules CdnLoadbalancer#sensitive_data_detection_rules}
  */
  readonly sensitiveDataDetectionRules?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules;
}

export function cdnLoadbalancerEnableApiDiscoveryToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryOutputReference | CdnLoadbalancerEnableApiDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_api_auth_discovery: cdktf.booleanToTerraform(struct!.defaultApiAuthDiscovery),
    disable_learn_from_redirect_traffic: cdktf.booleanToTerraform(struct!.disableLearnFromRedirectTraffic),
    enable_learn_from_redirect_traffic: cdktf.booleanToTerraform(struct!.enableLearnFromRedirectTraffic),
    api_crawler: cdnLoadbalancerEnableApiDiscoveryApiCrawlerToTerraform(struct!.apiCrawler),
    api_discovery_from_code_scan: cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanToTerraform(struct!.apiDiscoveryFromCodeScan),
    custom_api_auth_discovery: cdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryToTerraform(struct!.customApiAuthDiscovery),
    discovered_api_settings: cdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsToTerraform(struct!.discoveredApiSettings),
    sensitive_data_detection_rules: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesToTerraform(struct!.sensitiveDataDetectionRules),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryOutputReference | CdnLoadbalancerEnableApiDiscovery): any {
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
      value: cdnLoadbalancerEnableApiDiscoveryApiCrawlerToHclTerraform(struct!.apiCrawler),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiCrawlerList",
    },
    api_discovery_from_code_scan: {
      value: cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanToHclTerraform(struct!.apiDiscoveryFromCodeScan),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanList",
    },
    custom_api_auth_discovery: {
      value: cdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryToHclTerraform(struct!.customApiAuthDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryList",
    },
    discovered_api_settings: {
      value: cdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsToHclTerraform(struct!.discoveredApiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsList",
    },
    sensitive_data_detection_rules: {
      value: cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesToHclTerraform(struct!.sensitiveDataDetectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscovery | undefined {
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

  public set internalValue(value: CdnLoadbalancerEnableApiDiscovery | undefined) {
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
  private _apiCrawler = new CdnLoadbalancerEnableApiDiscoveryApiCrawlerOutputReference(this, "api_crawler");
  public get apiCrawler() {
    return this._apiCrawler;
  }
  public putApiCrawler(value: CdnLoadbalancerEnableApiDiscoveryApiCrawler) {
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
  private _apiDiscoveryFromCodeScan = new CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference(this, "api_discovery_from_code_scan");
  public get apiDiscoveryFromCodeScan() {
    return this._apiDiscoveryFromCodeScan;
  }
  public putApiDiscoveryFromCodeScan(value: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan) {
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
  private _customApiAuthDiscovery = new CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference(this, "custom_api_auth_discovery");
  public get customApiAuthDiscovery() {
    return this._customApiAuthDiscovery;
  }
  public putCustomApiAuthDiscovery(value: CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery) {
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
  private _discoveredApiSettings = new CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsOutputReference(this, "discovered_api_settings");
  public get discoveredApiSettings() {
    return this._discoveredApiSettings;
  }
  public putDiscoveredApiSettings(value: CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettings) {
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
  private _sensitiveDataDetectionRules = new CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesOutputReference(this, "sensitive_data_detection_rules");
  public get sensitiveDataDetectionRules() {
    return this._sensitiveDataDetectionRules;
  }
  public putSensitiveDataDetectionRules(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRules) {
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
export interface CdnLoadbalancerEnableChallengeCaptchaChallengeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function cdnLoadbalancerEnableChallengeCaptchaChallengeParametersToTerraform(struct?: CdnLoadbalancerEnableChallengeCaptchaChallengeParametersOutputReference | CdnLoadbalancerEnableChallengeCaptchaChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function cdnLoadbalancerEnableChallengeCaptchaChallengeParametersToHclTerraform(struct?: CdnLoadbalancerEnableChallengeCaptchaChallengeParametersOutputReference | CdnLoadbalancerEnableChallengeCaptchaChallengeParameters): any {
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

export class CdnLoadbalancerEnableChallengeCaptchaChallengeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableChallengeCaptchaChallengeParameters | undefined {
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

  public set internalValue(value: CdnLoadbalancerEnableChallengeCaptchaChallengeParameters | undefined) {
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
export interface CdnLoadbalancerEnableChallengeJsChallengeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#js_script_delay CdnLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function cdnLoadbalancerEnableChallengeJsChallengeParametersToTerraform(struct?: CdnLoadbalancerEnableChallengeJsChallengeParametersOutputReference | CdnLoadbalancerEnableChallengeJsChallengeParameters): any {
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


export function cdnLoadbalancerEnableChallengeJsChallengeParametersToHclTerraform(struct?: CdnLoadbalancerEnableChallengeJsChallengeParametersOutputReference | CdnLoadbalancerEnableChallengeJsChallengeParameters): any {
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

export class CdnLoadbalancerEnableChallengeJsChallengeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableChallengeJsChallengeParameters | undefined {
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

  public set internalValue(value: CdnLoadbalancerEnableChallengeJsChallengeParameters | undefined) {
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
export interface CdnLoadbalancerEnableChallengeMaliciousUserMitigation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerEnableChallengeMaliciousUserMitigationToTerraform(struct?: CdnLoadbalancerEnableChallengeMaliciousUserMitigationOutputReference | CdnLoadbalancerEnableChallengeMaliciousUserMitigation): any {
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


export function cdnLoadbalancerEnableChallengeMaliciousUserMitigationToHclTerraform(struct?: CdnLoadbalancerEnableChallengeMaliciousUserMitigationOutputReference | CdnLoadbalancerEnableChallengeMaliciousUserMitigation): any {
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

export class CdnLoadbalancerEnableChallengeMaliciousUserMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableChallengeMaliciousUserMitigation | undefined {
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

  public set internalValue(value: CdnLoadbalancerEnableChallengeMaliciousUserMitigation | undefined) {
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
export interface CdnLoadbalancerEnableChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#default_captcha_challenge_parameters CdnLoadbalancer#default_captcha_challenge_parameters}
  */
  readonly defaultCaptchaChallengeParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#default_js_challenge_parameters CdnLoadbalancer#default_js_challenge_parameters}
  */
  readonly defaultJsChallengeParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#default_mitigation_settings CdnLoadbalancer#default_mitigation_settings}
  */
  readonly defaultMitigationSettings?: boolean | cdktf.IResolvable;
  /**
  * captcha_challenge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#captcha_challenge_parameters CdnLoadbalancer#captcha_challenge_parameters}
  */
  readonly captchaChallengeParameters?: CdnLoadbalancerEnableChallengeCaptchaChallengeParameters;
  /**
  * js_challenge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#js_challenge_parameters CdnLoadbalancer#js_challenge_parameters}
  */
  readonly jsChallengeParameters?: CdnLoadbalancerEnableChallengeJsChallengeParameters;
  /**
  * malicious_user_mitigation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#malicious_user_mitigation CdnLoadbalancer#malicious_user_mitigation}
  */
  readonly maliciousUserMitigation?: CdnLoadbalancerEnableChallengeMaliciousUserMitigation;
}

export function cdnLoadbalancerEnableChallengeToTerraform(struct?: CdnLoadbalancerEnableChallengeOutputReference | CdnLoadbalancerEnableChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_captcha_challenge_parameters: cdktf.booleanToTerraform(struct!.defaultCaptchaChallengeParameters),
    default_js_challenge_parameters: cdktf.booleanToTerraform(struct!.defaultJsChallengeParameters),
    default_mitigation_settings: cdktf.booleanToTerraform(struct!.defaultMitigationSettings),
    captcha_challenge_parameters: cdnLoadbalancerEnableChallengeCaptchaChallengeParametersToTerraform(struct!.captchaChallengeParameters),
    js_challenge_parameters: cdnLoadbalancerEnableChallengeJsChallengeParametersToTerraform(struct!.jsChallengeParameters),
    malicious_user_mitigation: cdnLoadbalancerEnableChallengeMaliciousUserMitigationToTerraform(struct!.maliciousUserMitigation),
  }
}


export function cdnLoadbalancerEnableChallengeToHclTerraform(struct?: CdnLoadbalancerEnableChallengeOutputReference | CdnLoadbalancerEnableChallenge): any {
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
      value: cdnLoadbalancerEnableChallengeCaptchaChallengeParametersToHclTerraform(struct!.captchaChallengeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableChallengeCaptchaChallengeParametersList",
    },
    js_challenge_parameters: {
      value: cdnLoadbalancerEnableChallengeJsChallengeParametersToHclTerraform(struct!.jsChallengeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableChallengeJsChallengeParametersList",
    },
    malicious_user_mitigation: {
      value: cdnLoadbalancerEnableChallengeMaliciousUserMitigationToHclTerraform(struct!.maliciousUserMitigation),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableChallengeMaliciousUserMitigationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableChallenge | undefined {
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

  public set internalValue(value: CdnLoadbalancerEnableChallenge | undefined) {
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
  private _captchaChallengeParameters = new CdnLoadbalancerEnableChallengeCaptchaChallengeParametersOutputReference(this, "captcha_challenge_parameters");
  public get captchaChallengeParameters() {
    return this._captchaChallengeParameters;
  }
  public putCaptchaChallengeParameters(value: CdnLoadbalancerEnableChallengeCaptchaChallengeParameters) {
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
  private _jsChallengeParameters = new CdnLoadbalancerEnableChallengeJsChallengeParametersOutputReference(this, "js_challenge_parameters");
  public get jsChallengeParameters() {
    return this._jsChallengeParameters;
  }
  public putJsChallengeParameters(value: CdnLoadbalancerEnableChallengeJsChallengeParameters) {
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
  private _maliciousUserMitigation = new CdnLoadbalancerEnableChallengeMaliciousUserMitigationOutputReference(this, "malicious_user_mitigation");
  public get maliciousUserMitigation() {
    return this._maliciousUserMitigation;
  }
  public putMaliciousUserMitigation(value: CdnLoadbalancerEnableChallengeMaliciousUserMitigation) {
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
export interface CdnLoadbalancerEnableIpReputation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function cdnLoadbalancerEnableIpReputationToTerraform(struct?: CdnLoadbalancerEnableIpReputationOutputReference | CdnLoadbalancerEnableIpReputation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function cdnLoadbalancerEnableIpReputationToHclTerraform(struct?: CdnLoadbalancerEnableIpReputationOutputReference | CdnLoadbalancerEnableIpReputation): any {
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

export class CdnLoadbalancerEnableIpReputationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableIpReputation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableIpReputation | undefined) {
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
export interface CdnLoadbalancerGraphqlRulesGraphqlSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#disable_introspection CdnLoadbalancer#disable_introspection}
  */
  readonly disableIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#enable_introspection CdnLoadbalancer#enable_introspection}
  */
  readonly enableIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#max_batched_queries CdnLoadbalancer#max_batched_queries}
  */
  readonly maxBatchedQueries: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#max_depth CdnLoadbalancer#max_depth}
  */
  readonly maxDepth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#max_total_length CdnLoadbalancer#max_total_length}
  */
  readonly maxTotalLength: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#max_value_length CdnLoadbalancer#max_value_length}
  */
  readonly maxValueLength: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#policy_name CdnLoadbalancer#policy_name}
  */
  readonly policyName?: string;
}

export function cdnLoadbalancerGraphqlRulesGraphqlSettingsToTerraform(struct?: CdnLoadbalancerGraphqlRulesGraphqlSettingsOutputReference | CdnLoadbalancerGraphqlRulesGraphqlSettings): any {
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


export function cdnLoadbalancerGraphqlRulesGraphqlSettingsToHclTerraform(struct?: CdnLoadbalancerGraphqlRulesGraphqlSettingsOutputReference | CdnLoadbalancerGraphqlRulesGraphqlSettings): any {
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

export class CdnLoadbalancerGraphqlRulesGraphqlSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerGraphqlRulesGraphqlSettings | undefined {
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

  public set internalValue(value: CdnLoadbalancerGraphqlRulesGraphqlSettings | undefined) {
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
export interface CdnLoadbalancerGraphqlRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerGraphqlRulesMetadataToTerraform(struct?: CdnLoadbalancerGraphqlRulesMetadataOutputReference | CdnLoadbalancerGraphqlRulesMetadata): any {
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


export function cdnLoadbalancerGraphqlRulesMetadataToHclTerraform(struct?: CdnLoadbalancerGraphqlRulesMetadataOutputReference | CdnLoadbalancerGraphqlRulesMetadata): any {
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

export class CdnLoadbalancerGraphqlRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerGraphqlRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerGraphqlRulesMetadata | undefined) {
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
export interface CdnLoadbalancerGraphqlRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#exact_path CdnLoadbalancer#exact_path}
  */
  readonly exactPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#method_get CdnLoadbalancer#method_get}
  */
  readonly methodGet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#method_post CdnLoadbalancer#method_post}
  */
  readonly methodPost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
  /**
  * graphql_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#graphql_settings CdnLoadbalancer#graphql_settings}
  */
  readonly graphqlSettings?: CdnLoadbalancerGraphqlRulesGraphqlSettings;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerGraphqlRulesMetadata;
}

export function cdnLoadbalancerGraphqlRulesToTerraform(struct?: CdnLoadbalancerGraphqlRules | cdktf.IResolvable): any {
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
    graphql_settings: cdnLoadbalancerGraphqlRulesGraphqlSettingsToTerraform(struct!.graphqlSettings),
    metadata: cdnLoadbalancerGraphqlRulesMetadataToTerraform(struct!.metadata),
  }
}


export function cdnLoadbalancerGraphqlRulesToHclTerraform(struct?: CdnLoadbalancerGraphqlRules | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerGraphqlRulesGraphqlSettingsToHclTerraform(struct!.graphqlSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerGraphqlRulesGraphqlSettingsList",
    },
    metadata: {
      value: cdnLoadbalancerGraphqlRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerGraphqlRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerGraphqlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerGraphqlRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerGraphqlRules | cdktf.IResolvable | undefined) {
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
  private _graphqlSettings = new CdnLoadbalancerGraphqlRulesGraphqlSettingsOutputReference(this, "graphql_settings");
  public get graphqlSettings() {
    return this._graphqlSettings;
  }
  public putGraphqlSettings(value: CdnLoadbalancerGraphqlRulesGraphqlSettings) {
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
  private _metadata = new CdnLoadbalancerGraphqlRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerGraphqlRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CdnLoadbalancerGraphqlRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerGraphqlRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerGraphqlRulesOutputReference {
    return new CdnLoadbalancerGraphqlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#dns_volterra_managed CdnLoadbalancer#dns_volterra_managed}
  */
  readonly dnsVolterraManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#port CdnLoadbalancer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#port_ranges CdnLoadbalancer#port_ranges}
  */
  readonly portRanges?: string;
}

export function cdnLoadbalancerHttpToTerraform(struct?: CdnLoadbalancerHttpOutputReference | CdnLoadbalancerHttp): any {
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


export function cdnLoadbalancerHttpToHclTerraform(struct?: CdnLoadbalancerHttpOutputReference | CdnLoadbalancerHttp): any {
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

export class CdnLoadbalancerHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttp | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttp | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates | cdktf.IResolvable): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates | cdktf.IResolvable): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesOutputReference {
    return new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cipher_suites CdnLoadbalancer#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#max_version CdnLoadbalancer#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#min_version CdnLoadbalancer#min_version}
  */
  readonly minVersion?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#default_security CdnLoadbalancer#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#low_security CdnLoadbalancer#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#medium_security CdnLoadbalancer#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#custom_security CdnLoadbalancer#custom_security}
  */
  readonly customSecurity?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig): any {
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
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig | undefined) {
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
  private _customSecurity = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#xfcc_header_elements CdnLoadbalancer#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#client_certificate_optional CdnLoadbalancer#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#no_crl CdnLoadbalancer#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#trusted_ca_url CdnLoadbalancer#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#xfcc_disabled CdnLoadbalancer#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#crl CdnLoadbalancer#crl}
  */
  readonly crl?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#trusted_ca CdnLoadbalancer#trusted_ca}
  */
  readonly trustedCa?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#xfcc_options CdnLoadbalancer#xfcc_options}
  */
  readonly xfccOptions?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls): any {
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
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlList",
    },
    trusted_ca: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls | undefined) {
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
  private _crl = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl) {
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
  private _trustedCa = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa) {
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
  private _xfccOptions = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#no_mtls CdnLoadbalancer#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#certificates CdnLoadbalancer#certificates}
  */
  readonly certificates: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_config CdnLoadbalancer#tls_config}
  */
  readonly tlsConfig?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#use_mtls CdnLoadbalancer#use_mtls}
  */
  readonly useMtls?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    certificates: cdktf.listMapper(cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesToTerraform, true)(struct!.certificates),
    tls_config: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsToTerraform(struct!.useMtls),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams): any {
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
      value: cdktf.listMapperHcl(cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesToHclTerraform, true)(struct!.certificates),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesList",
    },
    tls_config: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigList",
    },
    use_mtls: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams | undefined) {
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
  private _certificates = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig) {
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
  private _useMtls = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#hash_algorithms CdnLoadbalancer#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling {
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#secret_encoding CdnLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#version CdnLoadbalancer#version}
  */
  readonly version?: number;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfoToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfo): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfoToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfo): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfo | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfoToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfoToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfo): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfo | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#secret_encoding_type CdnLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#blindfold_secret_info_internal CdnLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#vault_secret_info CdnLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#wingman_secret_info CdnLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfo;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey): any {
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
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey | undefined) {
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
  private _blindfoldSecretInfo = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo) {
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
  private _vaultSecretInfo = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyVaultSecretInfo) {
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
  private _wingmanSecretInfo = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyWingmanSecretInfo) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults {
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#certificate_url CdnLoadbalancer#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#custom_hash_algorithms CdnLoadbalancer#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#disable_ocsp_stapling CdnLoadbalancer#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#private_key CdnLoadbalancer#private_key}
  */
  readonly privateKey: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#use_system_defaults CdnLoadbalancer#use_system_defaults}
  */
  readonly useSystemDefaults?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates | cdktf.IResolvable | undefined) {
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
  private _customHashAlgorithms = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms) {
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
  private _disableOcspStapling = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling) {
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
  private _privateKey = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults) {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesOutputReference {
    return new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cipher_suites CdnLoadbalancer#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#max_version CdnLoadbalancer#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#min_version CdnLoadbalancer#min_version}
  */
  readonly minVersion?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#default_security CdnLoadbalancer#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#low_security CdnLoadbalancer#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#medium_security CdnLoadbalancer#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#custom_security CdnLoadbalancer#custom_security}
  */
  readonly customSecurity?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig): any {
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
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig | undefined) {
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
  private _customSecurity = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#xfcc_header_elements CdnLoadbalancer#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#client_certificate_optional CdnLoadbalancer#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#no_crl CdnLoadbalancer#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#trusted_ca_url CdnLoadbalancer#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#xfcc_disabled CdnLoadbalancer#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#crl CdnLoadbalancer#crl}
  */
  readonly crl?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#trusted_ca CdnLoadbalancer#trusted_ca}
  */
  readonly trustedCa?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#xfcc_options CdnLoadbalancer#xfcc_options}
  */
  readonly xfccOptions?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls): any {
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
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlList",
    },
    trusted_ca: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls | undefined) {
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
  private _crl = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl) {
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
  private _trustedCa = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa) {
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
  private _xfccOptions = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#no_mtls CdnLoadbalancer#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_certificates CdnLoadbalancer#tls_certificates}
  */
  readonly tlsCertificates: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_config CdnLoadbalancer#tls_config}
  */
  readonly tlsConfig?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#use_mtls CdnLoadbalancer#use_mtls}
  */
  readonly useMtls?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    tls_certificates: cdktf.listMapper(cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    tls_config: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsToTerraform(struct!.useMtls),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams): any {
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
      value: cdktf.listMapperHcl(cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesList",
    },
    tls_config: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigList",
    },
    use_mtls: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams | undefined) {
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
  private _tlsCertificates = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig) {
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
  private _useMtls = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls) {
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
export interface CdnLoadbalancerHttpsTlsCertOptions {
  /**
  * tls_cert_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_cert_params CdnLoadbalancer#tls_cert_params}
  */
  readonly tlsCertParams?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams;
  /**
  * tls_inline_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_inline_params CdnLoadbalancer#tls_inline_params}
  */
  readonly tlsInlineParams?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams;
}

export function cdnLoadbalancerHttpsTlsCertOptionsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsOutputReference | CdnLoadbalancerHttpsTlsCertOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_cert_params: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsToTerraform(struct!.tlsCertParams),
    tls_inline_params: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsToTerraform(struct!.tlsInlineParams),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsOutputReference | CdnLoadbalancerHttpsTlsCertOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_cert_params: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsToHclTerraform(struct!.tlsCertParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsList",
    },
    tls_inline_params: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsToHclTerraform(struct!.tlsInlineParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tlsCertParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertParams = this._tlsCertParams?.internalValue;
    }
    if (this._tlsInlineParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsInlineParams = this._tlsInlineParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tlsCertParams.internalValue = undefined;
      this._tlsInlineParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tlsCertParams.internalValue = value.tlsCertParams;
      this._tlsInlineParams.internalValue = value.tlsInlineParams;
    }
  }

  // tls_cert_params - computed: false, optional: true, required: false
  private _tlsCertParams = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsOutputReference(this, "tls_cert_params");
  public get tlsCertParams() {
    return this._tlsCertParams;
  }
  public putTlsCertParams(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams) {
    this._tlsCertParams.internalValue = value;
  }
  public resetTlsCertParams() {
    this._tlsCertParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertParamsInput() {
    return this._tlsCertParams.internalValue;
  }

  // tls_inline_params - computed: false, optional: true, required: false
  private _tlsInlineParams = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsOutputReference(this, "tls_inline_params");
  public get tlsInlineParams() {
    return this._tlsInlineParams;
  }
  public putTlsInlineParams(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams) {
    this._tlsInlineParams.internalValue = value;
  }
  public resetTlsInlineParams() {
    this._tlsInlineParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInlineParamsInput() {
    return this._tlsInlineParams.internalValue;
  }
}
export interface CdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#hash_algorithms CdnLoadbalancer#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms): any {
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

export class CdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms | undefined) {
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
export interface CdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling {
}

export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingToTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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


export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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

export class CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal): any {
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


export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal): any {
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

export class CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo): any {
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

export class CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
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
export interface CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#secret_encoding CdnLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#version CdnLoadbalancer#version}
  */
  readonly version?: number;
}

export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoToTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo): any {
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


export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoToHclTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo): any {
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

export class CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo | undefined) {
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
export interface CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoToTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoToHclTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo): any {
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

export class CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo | undefined) {
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
export interface CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#secret_encoding_type CdnLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#blindfold_secret_info_internal CdnLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#vault_secret_info CdnLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#wingman_secret_info CdnLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo;
}

export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyToTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyToHclTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey): any {
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
      value: cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey | undefined) {
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
  private _blindfoldSecretInfo = new CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyClearSecretInfo) {
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
  private _vaultSecretInfo = new CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyVaultSecretInfo) {
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
  private _wingmanSecretInfo = new CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyWingmanSecretInfo) {
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
export interface CdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults {
}

export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsToTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsOutputReference | CdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CdnLoadbalancerHttpsTlsParametersTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#certificate_url CdnLoadbalancer#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#custom_hash_algorithms CdnLoadbalancer#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#disable_ocsp_stapling CdnLoadbalancer#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#private_key CdnLoadbalancer#private_key}
  */
  readonly privateKey: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#use_system_defaults CdnLoadbalancer#use_system_defaults}
  */
  readonly useSystemDefaults?: CdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults;
}

export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesToTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: cdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: cdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: cdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function cdnLoadbalancerHttpsTlsParametersTlsCertificatesToHclTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsCertificates | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: cdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: cdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: cdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsParametersTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerHttpsTlsParametersTlsCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsParametersTlsCertificates | cdktf.IResolvable | undefined) {
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
  private _customHashAlgorithms = new CdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesCustomHashAlgorithms) {
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
  private _disableOcspStapling = new CdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesDisableOcspStapling) {
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
  private _privateKey = new CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new CdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: CdnLoadbalancerHttpsTlsParametersTlsCertificatesUseSystemDefaults) {
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

export class CdnLoadbalancerHttpsTlsParametersTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerHttpsTlsParametersTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerHttpsTlsParametersTlsCertificatesOutputReference {
    return new CdnLoadbalancerHttpsTlsParametersTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerHttpsTlsParametersTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_11_plus CdnLoadbalancer#tls_11_plus}
  */
  readonly tls11Plus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_12_plus CdnLoadbalancer#tls_12_plus}
  */
  readonly tls12Plus?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerHttpsTlsParametersTlsConfigToTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsConfigOutputReference | CdnLoadbalancerHttpsTlsParametersTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_11_plus: cdktf.booleanToTerraform(struct!.tls11Plus),
    tls_12_plus: cdktf.booleanToTerraform(struct!.tls12Plus),
  }
}


export function cdnLoadbalancerHttpsTlsParametersTlsConfigToHclTerraform(struct?: CdnLoadbalancerHttpsTlsParametersTlsConfigOutputReference | CdnLoadbalancerHttpsTlsParametersTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_11_plus: {
      value: cdktf.booleanToHclTerraform(struct!.tls11Plus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_12_plus: {
      value: cdktf.booleanToHclTerraform(struct!.tls12Plus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsParametersTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsParametersTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls11Plus !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls11Plus = this._tls11Plus;
    }
    if (this._tls12Plus !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls12Plus = this._tls12Plus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsParametersTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tls11Plus = undefined;
      this._tls12Plus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tls11Plus = value.tls11Plus;
      this._tls12Plus = value.tls12Plus;
    }
  }

  // tls_11_plus - computed: false, optional: true, required: false
  private _tls11Plus?: boolean | cdktf.IResolvable; 
  public get tls11Plus() {
    return this.getBooleanAttribute('tls_11_plus');
  }
  public set tls11Plus(value: boolean | cdktf.IResolvable) {
    this._tls11Plus = value;
  }
  public resetTls11Plus() {
    this._tls11Plus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls11PlusInput() {
    return this._tls11Plus;
  }

  // tls_12_plus - computed: false, optional: true, required: false
  private _tls12Plus?: boolean | cdktf.IResolvable; 
  public get tls12Plus() {
    return this.getBooleanAttribute('tls_12_plus');
  }
  public set tls12Plus(value: boolean | cdktf.IResolvable) {
    this._tls12Plus = value;
  }
  public resetTls12Plus() {
    this._tls12Plus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12PlusInput() {
    return this._tls12Plus;
  }
}
export interface CdnLoadbalancerHttpsTlsParameters {
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_certificates CdnLoadbalancer#tls_certificates}
  */
  readonly tlsCertificates: CdnLoadbalancerHttpsTlsParametersTlsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_config CdnLoadbalancer#tls_config}
  */
  readonly tlsConfig?: CdnLoadbalancerHttpsTlsParametersTlsConfig;
}

export function cdnLoadbalancerHttpsTlsParametersToTerraform(struct?: CdnLoadbalancerHttpsTlsParametersOutputReference | CdnLoadbalancerHttpsTlsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_certificates: cdktf.listMapper(cdnLoadbalancerHttpsTlsParametersTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    tls_config: cdnLoadbalancerHttpsTlsParametersTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function cdnLoadbalancerHttpsTlsParametersToHclTerraform(struct?: CdnLoadbalancerHttpsTlsParametersOutputReference | CdnLoadbalancerHttpsTlsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_certificates: {
      value: cdktf.listMapperHcl(cdnLoadbalancerHttpsTlsParametersTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsParametersTlsCertificatesList",
    },
    tls_config: {
      value: cdnLoadbalancerHttpsTlsParametersTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsParametersTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tlsCertificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new CdnLoadbalancerHttpsTlsParametersTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: CdnLoadbalancerHttpsTlsParametersTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new CdnLoadbalancerHttpsTlsParametersTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: CdnLoadbalancerHttpsTlsParametersTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface CdnLoadbalancerHttps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#add_hsts CdnLoadbalancer#add_hsts}
  */
  readonly addHsts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#http_redirect CdnLoadbalancer#http_redirect}
  */
  readonly httpRedirect?: boolean | cdktf.IResolvable;
  /**
  * tls_cert_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_cert_options CdnLoadbalancer#tls_cert_options}
  */
  readonly tlsCertOptions?: CdnLoadbalancerHttpsTlsCertOptions;
  /**
  * tls_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_parameters CdnLoadbalancer#tls_parameters}
  */
  readonly tlsParameters?: CdnLoadbalancerHttpsTlsParameters;
}

export function cdnLoadbalancerHttpsToTerraform(struct?: CdnLoadbalancerHttpsOutputReference | CdnLoadbalancerHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_hsts: cdktf.booleanToTerraform(struct!.addHsts),
    http_redirect: cdktf.booleanToTerraform(struct!.httpRedirect),
    tls_cert_options: cdnLoadbalancerHttpsTlsCertOptionsToTerraform(struct!.tlsCertOptions),
    tls_parameters: cdnLoadbalancerHttpsTlsParametersToTerraform(struct!.tlsParameters),
  }
}


export function cdnLoadbalancerHttpsToHclTerraform(struct?: CdnLoadbalancerHttpsOutputReference | CdnLoadbalancerHttps): any {
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
    http_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_cert_options: {
      value: cdnLoadbalancerHttpsTlsCertOptionsToHclTerraform(struct!.tlsCertOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsList",
    },
    tls_parameters: {
      value: cdnLoadbalancerHttpsTlsParametersToHclTerraform(struct!.tlsParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHsts !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHsts = this._addHsts;
    }
    if (this._httpRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirect = this._httpRedirect;
    }
    if (this._tlsCertOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertOptions = this._tlsCertOptions?.internalValue;
    }
    if (this._tlsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParameters = this._tlsParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHsts = undefined;
      this._httpRedirect = undefined;
      this._tlsCertOptions.internalValue = undefined;
      this._tlsParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHsts = value.addHsts;
      this._httpRedirect = value.httpRedirect;
      this._tlsCertOptions.internalValue = value.tlsCertOptions;
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

  // tls_cert_options - computed: false, optional: true, required: false
  private _tlsCertOptions = new CdnLoadbalancerHttpsTlsCertOptionsOutputReference(this, "tls_cert_options");
  public get tlsCertOptions() {
    return this._tlsCertOptions;
  }
  public putTlsCertOptions(value: CdnLoadbalancerHttpsTlsCertOptions) {
    this._tlsCertOptions.internalValue = value;
  }
  public resetTlsCertOptions() {
    this._tlsCertOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertOptionsInput() {
    return this._tlsCertOptions.internalValue;
  }

  // tls_parameters - computed: false, optional: true, required: false
  private _tlsParameters = new CdnLoadbalancerHttpsTlsParametersOutputReference(this, "tls_parameters");
  public get tlsParameters() {
    return this._tlsParameters;
  }
  public putTlsParameters(value: CdnLoadbalancerHttpsTlsParameters) {
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
export interface CdnLoadbalancerHttpsAutoCertTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_11_plus CdnLoadbalancer#tls_11_plus}
  */
  readonly tls11Plus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_12_plus CdnLoadbalancer#tls_12_plus}
  */
  readonly tls12Plus?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerHttpsAutoCertTlsConfigToTerraform(struct?: CdnLoadbalancerHttpsAutoCertTlsConfigOutputReference | CdnLoadbalancerHttpsAutoCertTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_11_plus: cdktf.booleanToTerraform(struct!.tls11Plus),
    tls_12_plus: cdktf.booleanToTerraform(struct!.tls12Plus),
  }
}


export function cdnLoadbalancerHttpsAutoCertTlsConfigToHclTerraform(struct?: CdnLoadbalancerHttpsAutoCertTlsConfigOutputReference | CdnLoadbalancerHttpsAutoCertTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_11_plus: {
      value: cdktf.booleanToHclTerraform(struct!.tls11Plus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_12_plus: {
      value: cdktf.booleanToHclTerraform(struct!.tls12Plus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsAutoCertTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsAutoCertTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls11Plus !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls11Plus = this._tls11Plus;
    }
    if (this._tls12Plus !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls12Plus = this._tls12Plus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsAutoCertTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tls11Plus = undefined;
      this._tls12Plus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tls11Plus = value.tls11Plus;
      this._tls12Plus = value.tls12Plus;
    }
  }

  // tls_11_plus - computed: false, optional: true, required: false
  private _tls11Plus?: boolean | cdktf.IResolvable; 
  public get tls11Plus() {
    return this.getBooleanAttribute('tls_11_plus');
  }
  public set tls11Plus(value: boolean | cdktf.IResolvable) {
    this._tls11Plus = value;
  }
  public resetTls11Plus() {
    this._tls11Plus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls11PlusInput() {
    return this._tls11Plus;
  }

  // tls_12_plus - computed: false, optional: true, required: false
  private _tls12Plus?: boolean | cdktf.IResolvable; 
  public get tls12Plus() {
    return this.getBooleanAttribute('tls_12_plus');
  }
  public set tls12Plus(value: boolean | cdktf.IResolvable) {
    this._tls12Plus = value;
  }
  public resetTls12Plus() {
    this._tls12Plus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12PlusInput() {
    return this._tls12Plus;
  }
}
export interface CdnLoadbalancerHttpsAutoCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#add_hsts CdnLoadbalancer#add_hsts}
  */
  readonly addHsts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#http_redirect CdnLoadbalancer#http_redirect}
  */
  readonly httpRedirect?: boolean | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tls_config CdnLoadbalancer#tls_config}
  */
  readonly tlsConfig?: CdnLoadbalancerHttpsAutoCertTlsConfig;
}

export function cdnLoadbalancerHttpsAutoCertToTerraform(struct?: CdnLoadbalancerHttpsAutoCertOutputReference | CdnLoadbalancerHttpsAutoCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_hsts: cdktf.booleanToTerraform(struct!.addHsts),
    http_redirect: cdktf.booleanToTerraform(struct!.httpRedirect),
    tls_config: cdnLoadbalancerHttpsAutoCertTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function cdnLoadbalancerHttpsAutoCertToHclTerraform(struct?: CdnLoadbalancerHttpsAutoCertOutputReference | CdnLoadbalancerHttpsAutoCert): any {
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
    http_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_config: {
      value: cdnLoadbalancerHttpsAutoCertTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsAutoCertTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsAutoCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsAutoCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHsts !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHsts = this._addHsts;
    }
    if (this._httpRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirect = this._httpRedirect;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsAutoCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHsts = undefined;
      this._httpRedirect = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHsts = value.addHsts;
      this._httpRedirect = value.httpRedirect;
      this._tlsConfig.internalValue = value.tlsConfig;
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

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new CdnLoadbalancerHttpsAutoCertTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: CdnLoadbalancerHttpsAutoCertTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface CdnLoadbalancerIpReputationOnCacheMiss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function cdnLoadbalancerIpReputationOnCacheMissToTerraform(struct?: CdnLoadbalancerIpReputationOnCacheMissOutputReference | CdnLoadbalancerIpReputationOnCacheMiss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function cdnLoadbalancerIpReputationOnCacheMissToHclTerraform(struct?: CdnLoadbalancerIpReputationOnCacheMissOutputReference | CdnLoadbalancerIpReputationOnCacheMiss): any {
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

export class CdnLoadbalancerIpReputationOnCacheMissOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerIpReputationOnCacheMiss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerIpReputationOnCacheMiss | undefined) {
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
export interface CdnLoadbalancerJsChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#js_script_delay CdnLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function cdnLoadbalancerJsChallengeToTerraform(struct?: CdnLoadbalancerJsChallengeOutputReference | CdnLoadbalancerJsChallenge): any {
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


export function cdnLoadbalancerJsChallengeToHclTerraform(struct?: CdnLoadbalancerJsChallengeOutputReference | CdnLoadbalancerJsChallenge): any {
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

export class CdnLoadbalancerJsChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJsChallenge | undefined {
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

  public set internalValue(value: CdnLoadbalancerJsChallenge | undefined) {
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
export interface CdnLoadbalancerJwtValidationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#block CdnLoadbalancer#block}
  */
  readonly block?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#report CdnLoadbalancer#report}
  */
  readonly report?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerJwtValidationActionToTerraform(struct?: CdnLoadbalancerJwtValidationActionOutputReference | CdnLoadbalancerJwtValidationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.booleanToTerraform(struct!.block),
    report: cdktf.booleanToTerraform(struct!.report),
  }
}


export function cdnLoadbalancerJwtValidationActionToHclTerraform(struct?: CdnLoadbalancerJwtValidationActionOutputReference | CdnLoadbalancerJwtValidationAction): any {
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

export class CdnLoadbalancerJwtValidationActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationAction | undefined {
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

  public set internalValue(value: CdnLoadbalancerJwtValidationAction | undefined) {
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
export interface CdnLoadbalancerJwtValidationJwksConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cleartext CdnLoadbalancer#cleartext}
  */
  readonly cleartext?: string;
}

export function cdnLoadbalancerJwtValidationJwksConfigToTerraform(struct?: CdnLoadbalancerJwtValidationJwksConfigOutputReference | CdnLoadbalancerJwtValidationJwksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleartext: cdktf.stringToTerraform(struct!.cleartext),
  }
}


export function cdnLoadbalancerJwtValidationJwksConfigToHclTerraform(struct?: CdnLoadbalancerJwtValidationJwksConfigOutputReference | CdnLoadbalancerJwtValidationJwksConfig): any {
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

export class CdnLoadbalancerJwtValidationJwksConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationJwksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleartext !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleartext = this._cleartext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationJwksConfig | undefined) {
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
export interface CdnLoadbalancerJwtValidationMandatoryClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#claim_names CdnLoadbalancer#claim_names}
  */
  readonly claimNames?: string[];
}

export function cdnLoadbalancerJwtValidationMandatoryClaimsToTerraform(struct?: CdnLoadbalancerJwtValidationMandatoryClaimsOutputReference | CdnLoadbalancerJwtValidationMandatoryClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.claimNames),
  }
}


export function cdnLoadbalancerJwtValidationMandatoryClaimsToHclTerraform(struct?: CdnLoadbalancerJwtValidationMandatoryClaimsOutputReference | CdnLoadbalancerJwtValidationMandatoryClaims): any {
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

export class CdnLoadbalancerJwtValidationMandatoryClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationMandatoryClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimNames = this._claimNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationMandatoryClaims | undefined) {
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
export interface CdnLoadbalancerJwtValidationReservedClaimsAudience {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#audiences CdnLoadbalancer#audiences}
  */
  readonly audiences: string[];
}

export function cdnLoadbalancerJwtValidationReservedClaimsAudienceToTerraform(struct?: CdnLoadbalancerJwtValidationReservedClaimsAudienceOutputReference | CdnLoadbalancerJwtValidationReservedClaimsAudience): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
  }
}


export function cdnLoadbalancerJwtValidationReservedClaimsAudienceToHclTerraform(struct?: CdnLoadbalancerJwtValidationReservedClaimsAudienceOutputReference | CdnLoadbalancerJwtValidationReservedClaimsAudience): any {
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

export class CdnLoadbalancerJwtValidationReservedClaimsAudienceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationReservedClaimsAudience | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationReservedClaimsAudience | undefined) {
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
export interface CdnLoadbalancerJwtValidationReservedClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#audience_disable CdnLoadbalancer#audience_disable}
  */
  readonly audienceDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#issuer CdnLoadbalancer#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#issuer_disable CdnLoadbalancer#issuer_disable}
  */
  readonly issuerDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#validate_period_disable CdnLoadbalancer#validate_period_disable}
  */
  readonly validatePeriodDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#validate_period_enable CdnLoadbalancer#validate_period_enable}
  */
  readonly validatePeriodEnable?: boolean | cdktf.IResolvable;
  /**
  * audience block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#audience CdnLoadbalancer#audience}
  */
  readonly audience?: CdnLoadbalancerJwtValidationReservedClaimsAudience;
}

export function cdnLoadbalancerJwtValidationReservedClaimsToTerraform(struct?: CdnLoadbalancerJwtValidationReservedClaimsOutputReference | CdnLoadbalancerJwtValidationReservedClaims): any {
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
    audience: cdnLoadbalancerJwtValidationReservedClaimsAudienceToTerraform(struct!.audience),
  }
}


export function cdnLoadbalancerJwtValidationReservedClaimsToHclTerraform(struct?: CdnLoadbalancerJwtValidationReservedClaimsOutputReference | CdnLoadbalancerJwtValidationReservedClaims): any {
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
      value: cdnLoadbalancerJwtValidationReservedClaimsAudienceToHclTerraform(struct!.audience),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationReservedClaimsAudienceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationReservedClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationReservedClaims | undefined {
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

  public set internalValue(value: CdnLoadbalancerJwtValidationReservedClaims | undefined) {
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
  private _audience = new CdnLoadbalancerJwtValidationReservedClaimsAudienceOutputReference(this, "audience");
  public get audience() {
    return this._audience;
  }
  public putAudience(value: CdnLoadbalancerJwtValidationReservedClaimsAudience) {
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
export interface CdnLoadbalancerJwtValidationTargetApiGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#api_groups CdnLoadbalancer#api_groups}
  */
  readonly apiGroups: string[];
}

export function cdnLoadbalancerJwtValidationTargetApiGroupsToTerraform(struct?: CdnLoadbalancerJwtValidationTargetApiGroupsOutputReference | CdnLoadbalancerJwtValidationTargetApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
  }
}


export function cdnLoadbalancerJwtValidationTargetApiGroupsToHclTerraform(struct?: CdnLoadbalancerJwtValidationTargetApiGroupsOutputReference | CdnLoadbalancerJwtValidationTargetApiGroups): any {
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

export class CdnLoadbalancerJwtValidationTargetApiGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationTargetApiGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationTargetApiGroups | undefined) {
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
export interface CdnLoadbalancerJwtValidationTargetBasePaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#base_paths CdnLoadbalancer#base_paths}
  */
  readonly basePaths: string[];
}

export function cdnLoadbalancerJwtValidationTargetBasePathsToTerraform(struct?: CdnLoadbalancerJwtValidationTargetBasePathsOutputReference | CdnLoadbalancerJwtValidationTargetBasePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.basePaths),
  }
}


export function cdnLoadbalancerJwtValidationTargetBasePathsToHclTerraform(struct?: CdnLoadbalancerJwtValidationTargetBasePathsOutputReference | CdnLoadbalancerJwtValidationTargetBasePaths): any {
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

export class CdnLoadbalancerJwtValidationTargetBasePathsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationTargetBasePaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePaths = this._basePaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationTargetBasePaths | undefined) {
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
export interface CdnLoadbalancerJwtValidationTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#all_endpoint CdnLoadbalancer#all_endpoint}
  */
  readonly allEndpoint?: boolean | cdktf.IResolvable;
  /**
  * api_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#api_groups CdnLoadbalancer#api_groups}
  */
  readonly apiGroups?: CdnLoadbalancerJwtValidationTargetApiGroups;
  /**
  * base_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#base_paths CdnLoadbalancer#base_paths}
  */
  readonly basePaths?: CdnLoadbalancerJwtValidationTargetBasePaths;
}

export function cdnLoadbalancerJwtValidationTargetToTerraform(struct?: CdnLoadbalancerJwtValidationTargetOutputReference | CdnLoadbalancerJwtValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_endpoint: cdktf.booleanToTerraform(struct!.allEndpoint),
    api_groups: cdnLoadbalancerJwtValidationTargetApiGroupsToTerraform(struct!.apiGroups),
    base_paths: cdnLoadbalancerJwtValidationTargetBasePathsToTerraform(struct!.basePaths),
  }
}


export function cdnLoadbalancerJwtValidationTargetToHclTerraform(struct?: CdnLoadbalancerJwtValidationTargetOutputReference | CdnLoadbalancerJwtValidationTarget): any {
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
      value: cdnLoadbalancerJwtValidationTargetApiGroupsToHclTerraform(struct!.apiGroups),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationTargetApiGroupsList",
    },
    base_paths: {
      value: cdnLoadbalancerJwtValidationTargetBasePathsToHclTerraform(struct!.basePaths),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationTargetBasePathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationTarget | undefined {
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

  public set internalValue(value: CdnLoadbalancerJwtValidationTarget | undefined) {
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
  private _apiGroups = new CdnLoadbalancerJwtValidationTargetApiGroupsOutputReference(this, "api_groups");
  public get apiGroups() {
    return this._apiGroups;
  }
  public putApiGroups(value: CdnLoadbalancerJwtValidationTargetApiGroups) {
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
  private _basePaths = new CdnLoadbalancerJwtValidationTargetBasePathsOutputReference(this, "base_paths");
  public get basePaths() {
    return this._basePaths;
  }
  public putBasePaths(value: CdnLoadbalancerJwtValidationTargetBasePaths) {
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
export interface CdnLoadbalancerJwtValidationTokenLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#bearer_token CdnLoadbalancer#bearer_token}
  */
  readonly bearerToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cookie CdnLoadbalancer#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#header CdnLoadbalancer#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#query_param CdnLoadbalancer#query_param}
  */
  readonly queryParam?: string;
}

export function cdnLoadbalancerJwtValidationTokenLocationToTerraform(struct?: CdnLoadbalancerJwtValidationTokenLocationOutputReference | CdnLoadbalancerJwtValidationTokenLocation): any {
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


export function cdnLoadbalancerJwtValidationTokenLocationToHclTerraform(struct?: CdnLoadbalancerJwtValidationTokenLocationOutputReference | CdnLoadbalancerJwtValidationTokenLocation): any {
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

export class CdnLoadbalancerJwtValidationTokenLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationTokenLocation | undefined {
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

  public set internalValue(value: CdnLoadbalancerJwtValidationTokenLocation | undefined) {
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
export interface CdnLoadbalancerJwtValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#auth_server_uri CdnLoadbalancer#auth_server_uri}
  */
  readonly authServerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#jwks CdnLoadbalancer#jwks}
  */
  readonly jwks?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#action CdnLoadbalancer#action}
  */
  readonly action: CdnLoadbalancerJwtValidationAction;
  /**
  * jwks_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#jwks_config CdnLoadbalancer#jwks_config}
  */
  readonly jwksConfig?: CdnLoadbalancerJwtValidationJwksConfig;
  /**
  * mandatory_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#mandatory_claims CdnLoadbalancer#mandatory_claims}
  */
  readonly mandatoryClaims?: CdnLoadbalancerJwtValidationMandatoryClaims;
  /**
  * reserved_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#reserved_claims CdnLoadbalancer#reserved_claims}
  */
  readonly reservedClaims?: CdnLoadbalancerJwtValidationReservedClaims;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#target CdnLoadbalancer#target}
  */
  readonly target: CdnLoadbalancerJwtValidationTarget;
  /**
  * token_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#token_location CdnLoadbalancer#token_location}
  */
  readonly tokenLocation: CdnLoadbalancerJwtValidationTokenLocation;
}

export function cdnLoadbalancerJwtValidationToTerraform(struct?: CdnLoadbalancerJwtValidationOutputReference | CdnLoadbalancerJwtValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_server_uri: cdktf.stringToTerraform(struct!.authServerUri),
    jwks: cdktf.stringToTerraform(struct!.jwks),
    action: cdnLoadbalancerJwtValidationActionToTerraform(struct!.action),
    jwks_config: cdnLoadbalancerJwtValidationJwksConfigToTerraform(struct!.jwksConfig),
    mandatory_claims: cdnLoadbalancerJwtValidationMandatoryClaimsToTerraform(struct!.mandatoryClaims),
    reserved_claims: cdnLoadbalancerJwtValidationReservedClaimsToTerraform(struct!.reservedClaims),
    target: cdnLoadbalancerJwtValidationTargetToTerraform(struct!.target),
    token_location: cdnLoadbalancerJwtValidationTokenLocationToTerraform(struct!.tokenLocation),
  }
}


export function cdnLoadbalancerJwtValidationToHclTerraform(struct?: CdnLoadbalancerJwtValidationOutputReference | CdnLoadbalancerJwtValidation): any {
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
      value: cdnLoadbalancerJwtValidationActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationActionList",
    },
    jwks_config: {
      value: cdnLoadbalancerJwtValidationJwksConfigToHclTerraform(struct!.jwksConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationJwksConfigList",
    },
    mandatory_claims: {
      value: cdnLoadbalancerJwtValidationMandatoryClaimsToHclTerraform(struct!.mandatoryClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationMandatoryClaimsList",
    },
    reserved_claims: {
      value: cdnLoadbalancerJwtValidationReservedClaimsToHclTerraform(struct!.reservedClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationReservedClaimsList",
    },
    target: {
      value: cdnLoadbalancerJwtValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationTargetList",
    },
    token_location: {
      value: cdnLoadbalancerJwtValidationTokenLocationToHclTerraform(struct!.tokenLocation),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationTokenLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidation | undefined {
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

  public set internalValue(value: CdnLoadbalancerJwtValidation | undefined) {
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
  private _action = new CdnLoadbalancerJwtValidationActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: CdnLoadbalancerJwtValidationAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // jwks_config - computed: false, optional: true, required: false
  private _jwksConfig = new CdnLoadbalancerJwtValidationJwksConfigOutputReference(this, "jwks_config");
  public get jwksConfig() {
    return this._jwksConfig;
  }
  public putJwksConfig(value: CdnLoadbalancerJwtValidationJwksConfig) {
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
  private _mandatoryClaims = new CdnLoadbalancerJwtValidationMandatoryClaimsOutputReference(this, "mandatory_claims");
  public get mandatoryClaims() {
    return this._mandatoryClaims;
  }
  public putMandatoryClaims(value: CdnLoadbalancerJwtValidationMandatoryClaims) {
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
  private _reservedClaims = new CdnLoadbalancerJwtValidationReservedClaimsOutputReference(this, "reserved_claims");
  public get reservedClaims() {
    return this._reservedClaims;
  }
  public putReservedClaims(value: CdnLoadbalancerJwtValidationReservedClaims) {
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
  private _target = new CdnLoadbalancerJwtValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: CdnLoadbalancerJwtValidationTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // token_location - computed: false, optional: false, required: true
  private _tokenLocation = new CdnLoadbalancerJwtValidationTokenLocationOutputReference(this, "token_location");
  public get tokenLocation() {
    return this._tokenLocation;
  }
  public putTokenLocation(value: CdnLoadbalancerJwtValidationTokenLocation) {
    this._tokenLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLocationInput() {
    return this._tokenLocation.internalValue;
  }
}
export interface CdnLoadbalancerL7DdosActionJsChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#js_script_delay CdnLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function cdnLoadbalancerL7DdosActionJsChallengeToTerraform(struct?: CdnLoadbalancerL7DdosActionJsChallengeOutputReference | CdnLoadbalancerL7DdosActionJsChallenge): any {
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


export function cdnLoadbalancerL7DdosActionJsChallengeToHclTerraform(struct?: CdnLoadbalancerL7DdosActionJsChallengeOutputReference | CdnLoadbalancerL7DdosActionJsChallenge): any {
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

export class CdnLoadbalancerL7DdosActionJsChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerL7DdosActionJsChallenge | undefined {
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

  public set internalValue(value: CdnLoadbalancerL7DdosActionJsChallenge | undefined) {
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
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_override CdnLoadbalancer#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#ignore_response_cookie CdnLoadbalancer#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUriToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUriOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUriToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUriOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_override CdnLoadbalancer#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#ignore_response_cookie CdnLoadbalancer#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUriToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUriOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUriToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUriOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_override CdnLoadbalancer#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#ignore_response_cookie CdnLoadbalancer#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_override CdnLoadbalancer#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#ignore_response_cookie CdnLoadbalancer#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQueryToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQueryOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQueryToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQueryOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_override CdnLoadbalancer#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#ignore_response_cookie CdnLoadbalancer#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUriToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUriOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUriToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUriOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_override CdnLoadbalancer#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#ignore_response_cookie CdnLoadbalancer#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUriToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUriOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUriToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUriOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCache {
  /**
  * hostname_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#hostname_uri CdnLoadbalancer#hostname_uri}
  */
  readonly hostnameUri?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUri;
  /**
  * scheme_hostname_request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#scheme_hostname_request_uri CdnLoadbalancer#scheme_hostname_request_uri}
  */
  readonly schemeHostnameRequestUri?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUri;
  /**
  * scheme_hostname_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#scheme_hostname_uri CdnLoadbalancer#scheme_hostname_uri}
  */
  readonly schemeHostnameUri?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUri;
  /**
  * scheme_hostname_uri_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#scheme_hostname_uri_query CdnLoadbalancer#scheme_hostname_uri_query}
  */
  readonly schemeHostnameUriQuery?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQuery;
  /**
  * scheme_proxy_host_request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#scheme_proxy_host_request_uri CdnLoadbalancer#scheme_proxy_host_request_uri}
  */
  readonly schemeProxyHostRequestUri?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUri;
  /**
  * scheme_proxy_host_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#scheme_proxy_host_uri CdnLoadbalancer#scheme_proxy_host_uri}
  */
  readonly schemeProxyHostUri?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUri;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname_uri: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUriToTerraform(struct!.hostnameUri),
    scheme_hostname_request_uri: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUriToTerraform(struct!.schemeHostnameRequestUri),
    scheme_hostname_uri: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriToTerraform(struct!.schemeHostnameUri),
    scheme_hostname_uri_query: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQueryToTerraform(struct!.schemeHostnameUriQuery),
    scheme_proxy_host_request_uri: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUriToTerraform(struct!.schemeProxyHostRequestUri),
    scheme_proxy_host_uri: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUriToTerraform(struct!.schemeProxyHostUri),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname_uri: {
      value: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUriToHclTerraform(struct!.hostnameUri),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUriList",
    },
    scheme_hostname_request_uri: {
      value: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUriToHclTerraform(struct!.schemeHostnameRequestUri),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUriList",
    },
    scheme_hostname_uri: {
      value: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriToHclTerraform(struct!.schemeHostnameUri),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriList",
    },
    scheme_hostname_uri_query: {
      value: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQueryToHclTerraform(struct!.schemeHostnameUriQuery),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQueryList",
    },
    scheme_proxy_host_request_uri: {
      value: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUriToHclTerraform(struct!.schemeProxyHostRequestUri),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUriList",
    },
    scheme_proxy_host_uri: {
      value: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUriToHclTerraform(struct!.schemeProxyHostUri),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnameUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameUri = this._hostnameUri?.internalValue;
    }
    if (this._schemeHostnameRequestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeHostnameRequestUri = this._schemeHostnameRequestUri?.internalValue;
    }
    if (this._schemeHostnameUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeHostnameUri = this._schemeHostnameUri?.internalValue;
    }
    if (this._schemeHostnameUriQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeHostnameUriQuery = this._schemeHostnameUriQuery?.internalValue;
    }
    if (this._schemeProxyHostRequestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeProxyHostRequestUri = this._schemeProxyHostRequestUri?.internalValue;
    }
    if (this._schemeProxyHostUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeProxyHostUri = this._schemeProxyHostUri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostnameUri.internalValue = undefined;
      this._schemeHostnameRequestUri.internalValue = undefined;
      this._schemeHostnameUri.internalValue = undefined;
      this._schemeHostnameUriQuery.internalValue = undefined;
      this._schemeProxyHostRequestUri.internalValue = undefined;
      this._schemeProxyHostUri.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostnameUri.internalValue = value.hostnameUri;
      this._schemeHostnameRequestUri.internalValue = value.schemeHostnameRequestUri;
      this._schemeHostnameUri.internalValue = value.schemeHostnameUri;
      this._schemeHostnameUriQuery.internalValue = value.schemeHostnameUriQuery;
      this._schemeProxyHostRequestUri.internalValue = value.schemeProxyHostRequestUri;
      this._schemeProxyHostUri.internalValue = value.schemeProxyHostUri;
    }
  }

  // hostname_uri - computed: false, optional: true, required: false
  private _hostnameUri = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUriOutputReference(this, "hostname_uri");
  public get hostnameUri() {
    return this._hostnameUri;
  }
  public putHostnameUri(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheHostnameUri) {
    this._hostnameUri.internalValue = value;
  }
  public resetHostnameUri() {
    this._hostnameUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameUriInput() {
    return this._hostnameUri.internalValue;
  }

  // scheme_hostname_request_uri - computed: false, optional: true, required: false
  private _schemeHostnameRequestUri = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUriOutputReference(this, "scheme_hostname_request_uri");
  public get schemeHostnameRequestUri() {
    return this._schemeHostnameRequestUri;
  }
  public putSchemeHostnameRequestUri(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameRequestUri) {
    this._schemeHostnameRequestUri.internalValue = value;
  }
  public resetSchemeHostnameRequestUri() {
    this._schemeHostnameRequestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeHostnameRequestUriInput() {
    return this._schemeHostnameRequestUri.internalValue;
  }

  // scheme_hostname_uri - computed: false, optional: true, required: false
  private _schemeHostnameUri = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriOutputReference(this, "scheme_hostname_uri");
  public get schemeHostnameUri() {
    return this._schemeHostnameUri;
  }
  public putSchemeHostnameUri(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUri) {
    this._schemeHostnameUri.internalValue = value;
  }
  public resetSchemeHostnameUri() {
    this._schemeHostnameUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeHostnameUriInput() {
    return this._schemeHostnameUri.internalValue;
  }

  // scheme_hostname_uri_query - computed: false, optional: true, required: false
  private _schemeHostnameUriQuery = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQueryOutputReference(this, "scheme_hostname_uri_query");
  public get schemeHostnameUriQuery() {
    return this._schemeHostnameUriQuery;
  }
  public putSchemeHostnameUriQuery(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeHostnameUriQuery) {
    this._schemeHostnameUriQuery.internalValue = value;
  }
  public resetSchemeHostnameUriQuery() {
    this._schemeHostnameUriQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeHostnameUriQueryInput() {
    return this._schemeHostnameUriQuery.internalValue;
  }

  // scheme_proxy_host_request_uri - computed: false, optional: true, required: false
  private _schemeProxyHostRequestUri = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUriOutputReference(this, "scheme_proxy_host_request_uri");
  public get schemeProxyHostRequestUri() {
    return this._schemeProxyHostRequestUri;
  }
  public putSchemeProxyHostRequestUri(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostRequestUri) {
    this._schemeProxyHostRequestUri.internalValue = value;
  }
  public resetSchemeProxyHostRequestUri() {
    this._schemeProxyHostRequestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeProxyHostRequestUriInput() {
    return this._schemeProxyHostRequestUri.internalValue;
  }

  // scheme_proxy_host_uri - computed: false, optional: true, required: false
  private _schemeProxyHostUri = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUriOutputReference(this, "scheme_proxy_host_uri");
  public get schemeProxyHostUri() {
    return this._schemeProxyHostUri;
  }
  public putSchemeProxyHostUri(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheSchemeProxyHostUri) {
    this._schemeProxyHostUri.internalValue = value;
  }
  public resetSchemeProxyHostUri() {
    this._schemeProxyHostUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeProxyHostUriInput() {
    return this._schemeProxyHostUri.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#contains CdnLoadbalancer#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_contain CdnLoadbalancer#does_not_contain}
  */
  readonly doesNotContain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_end_with CdnLoadbalancer#does_not_end_with}
  */
  readonly doesNotEndWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_equal CdnLoadbalancer#does_not_equal}
  */
  readonly doesNotEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_start_with CdnLoadbalancer#does_not_start_with}
  */
  readonly doesNotStartWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#endswith CdnLoadbalancer#endswith}
  */
  readonly endswith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#equals CdnLoadbalancer#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#match_regex CdnLoadbalancer#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#startswith CdnLoadbalancer#startswith}
  */
  readonly startswith?: string;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    does_not_contain: cdktf.stringToTerraform(struct!.doesNotContain),
    does_not_end_with: cdktf.stringToTerraform(struct!.doesNotEndWith),
    does_not_equal: cdktf.stringToTerraform(struct!.doesNotEqual),
    does_not_start_with: cdktf.stringToTerraform(struct!.doesNotStartWith),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_contain: {
      value: cdktf.stringToHclTerraform(struct!.doesNotContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_end_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEndWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_equal: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_start_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotStartWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._doesNotContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotContain = this._doesNotContain;
    }
    if (this._doesNotEndWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEndWith = this._doesNotEndWith;
    }
    if (this._doesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEqual = this._doesNotEqual;
    }
    if (this._doesNotStartWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotStartWith = this._doesNotStartWith;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._doesNotContain = undefined;
      this._doesNotEndWith = undefined;
      this._doesNotEqual = undefined;
      this._doesNotStartWith = undefined;
      this._endswith = undefined;
      this._equals = undefined;
      this._matchRegex = undefined;
      this._startswith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._doesNotContain = value.doesNotContain;
      this._doesNotEndWith = value.doesNotEndWith;
      this._doesNotEqual = value.doesNotEqual;
      this._doesNotStartWith = value.doesNotStartWith;
      this._endswith = value.endswith;
      this._equals = value.equalTo;
      this._matchRegex = value.matchRegex;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // does_not_contain - computed: false, optional: true, required: false
  private _doesNotContain?: string; 
  public get doesNotContain() {
    return this.getStringAttribute('does_not_contain');
  }
  public set doesNotContain(value: string) {
    this._doesNotContain = value;
  }
  public resetDoesNotContain() {
    this._doesNotContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotContainInput() {
    return this._doesNotContain;
  }

  // does_not_end_with - computed: false, optional: true, required: false
  private _doesNotEndWith?: string; 
  public get doesNotEndWith() {
    return this.getStringAttribute('does_not_end_with');
  }
  public set doesNotEndWith(value: string) {
    this._doesNotEndWith = value;
  }
  public resetDoesNotEndWith() {
    this._doesNotEndWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEndWithInput() {
    return this._doesNotEndWith;
  }

  // does_not_equal - computed: false, optional: true, required: false
  private _doesNotEqual?: string; 
  public get doesNotEqual() {
    return this.getStringAttribute('does_not_equal');
  }
  public set doesNotEqual(value: string) {
    this._doesNotEqual = value;
  }
  public resetDoesNotEqual() {
    this._doesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEqualInput() {
    return this._doesNotEqual;
  }

  // does_not_start_with - computed: false, optional: true, required: false
  private _doesNotStartWith?: string; 
  public get doesNotStartWith() {
    return this.getStringAttribute('does_not_start_with');
  }
  public set doesNotStartWith(value: string) {
    this._doesNotStartWith = value;
  }
  public resetDoesNotStartWith() {
    this._doesNotStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotStartWithInput() {
    return this._doesNotStartWith;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#operator CdnLoadbalancer#operator}
  */
  readonly operator?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorToTerraform(struct!.operator),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders | cdktf.IResolvable): any {
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
    operator: {
      value: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator.internalValue = value.operator;
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

  // operator - computed: false, optional: true, required: false
  private _operator = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOutputReference {
    return new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#contains CdnLoadbalancer#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_contain CdnLoadbalancer#does_not_contain}
  */
  readonly doesNotContain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_end_with CdnLoadbalancer#does_not_end_with}
  */
  readonly doesNotEndWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_equal CdnLoadbalancer#does_not_equal}
  */
  readonly doesNotEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_start_with CdnLoadbalancer#does_not_start_with}
  */
  readonly doesNotStartWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#endswith CdnLoadbalancer#endswith}
  */
  readonly endswith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#equals CdnLoadbalancer#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#match_regex CdnLoadbalancer#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#startswith CdnLoadbalancer#startswith}
  */
  readonly startswith?: string;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    does_not_contain: cdktf.stringToTerraform(struct!.doesNotContain),
    does_not_end_with: cdktf.stringToTerraform(struct!.doesNotEndWith),
    does_not_equal: cdktf.stringToTerraform(struct!.doesNotEqual),
    does_not_start_with: cdktf.stringToTerraform(struct!.doesNotStartWith),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_contain: {
      value: cdktf.stringToHclTerraform(struct!.doesNotContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_end_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEndWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_equal: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_start_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotStartWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._doesNotContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotContain = this._doesNotContain;
    }
    if (this._doesNotEndWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEndWith = this._doesNotEndWith;
    }
    if (this._doesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEqual = this._doesNotEqual;
    }
    if (this._doesNotStartWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotStartWith = this._doesNotStartWith;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._doesNotContain = undefined;
      this._doesNotEndWith = undefined;
      this._doesNotEqual = undefined;
      this._doesNotStartWith = undefined;
      this._endswith = undefined;
      this._equals = undefined;
      this._matchRegex = undefined;
      this._startswith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._doesNotContain = value.doesNotContain;
      this._doesNotEndWith = value.doesNotEndWith;
      this._doesNotEqual = value.doesNotEqual;
      this._doesNotStartWith = value.doesNotStartWith;
      this._endswith = value.endswith;
      this._equals = value.equalTo;
      this._matchRegex = value.matchRegex;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // does_not_contain - computed: false, optional: true, required: false
  private _doesNotContain?: string; 
  public get doesNotContain() {
    return this.getStringAttribute('does_not_contain');
  }
  public set doesNotContain(value: string) {
    this._doesNotContain = value;
  }
  public resetDoesNotContain() {
    this._doesNotContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotContainInput() {
    return this._doesNotContain;
  }

  // does_not_end_with - computed: false, optional: true, required: false
  private _doesNotEndWith?: string; 
  public get doesNotEndWith() {
    return this.getStringAttribute('does_not_end_with');
  }
  public set doesNotEndWith(value: string) {
    this._doesNotEndWith = value;
  }
  public resetDoesNotEndWith() {
    this._doesNotEndWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEndWithInput() {
    return this._doesNotEndWith;
  }

  // does_not_equal - computed: false, optional: true, required: false
  private _doesNotEqual?: string; 
  public get doesNotEqual() {
    return this.getStringAttribute('does_not_equal');
  }
  public set doesNotEqual(value: string) {
    this._doesNotEqual = value;
  }
  public resetDoesNotEqual() {
    this._doesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEqualInput() {
    return this._doesNotEqual;
  }

  // does_not_start_with - computed: false, optional: true, required: false
  private _doesNotStartWith?: string; 
  public get doesNotStartWith() {
    return this.getStringAttribute('does_not_start_with');
  }
  public set doesNotStartWith(value: string) {
    this._doesNotStartWith = value;
  }
  public resetDoesNotStartWith() {
    this._doesNotStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotStartWithInput() {
    return this._doesNotStartWith;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#operator CdnLoadbalancer#operator}
  */
  readonly operator?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorToTerraform(struct!.operator),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher | cdktf.IResolvable): any {
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
    operator: {
      value: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator.internalValue = value.operator;
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

  // operator - computed: false, optional: true, required: false
  private _operator = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOutputReference {
    return new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#contains CdnLoadbalancer#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_contain CdnLoadbalancer#does_not_contain}
  */
  readonly doesNotContain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_end_with CdnLoadbalancer#does_not_end_with}
  */
  readonly doesNotEndWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_equal CdnLoadbalancer#does_not_equal}
  */
  readonly doesNotEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_start_with CdnLoadbalancer#does_not_start_with}
  */
  readonly doesNotStartWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#endswith CdnLoadbalancer#endswith}
  */
  readonly endswith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#equals CdnLoadbalancer#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#match_regex CdnLoadbalancer#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#startswith CdnLoadbalancer#startswith}
  */
  readonly startswith?: string;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    does_not_contain: cdktf.stringToTerraform(struct!.doesNotContain),
    does_not_end_with: cdktf.stringToTerraform(struct!.doesNotEndWith),
    does_not_equal: cdktf.stringToTerraform(struct!.doesNotEqual),
    does_not_start_with: cdktf.stringToTerraform(struct!.doesNotStartWith),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_contain: {
      value: cdktf.stringToHclTerraform(struct!.doesNotContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_end_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEndWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_equal: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_start_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotStartWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._doesNotContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotContain = this._doesNotContain;
    }
    if (this._doesNotEndWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEndWith = this._doesNotEndWith;
    }
    if (this._doesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEqual = this._doesNotEqual;
    }
    if (this._doesNotStartWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotStartWith = this._doesNotStartWith;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._doesNotContain = undefined;
      this._doesNotEndWith = undefined;
      this._doesNotEqual = undefined;
      this._doesNotStartWith = undefined;
      this._endswith = undefined;
      this._equals = undefined;
      this._matchRegex = undefined;
      this._startswith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._doesNotContain = value.doesNotContain;
      this._doesNotEndWith = value.doesNotEndWith;
      this._doesNotEqual = value.doesNotEqual;
      this._doesNotStartWith = value.doesNotStartWith;
      this._endswith = value.endswith;
      this._equals = value.equalTo;
      this._matchRegex = value.matchRegex;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // does_not_contain - computed: false, optional: true, required: false
  private _doesNotContain?: string; 
  public get doesNotContain() {
    return this.getStringAttribute('does_not_contain');
  }
  public set doesNotContain(value: string) {
    this._doesNotContain = value;
  }
  public resetDoesNotContain() {
    this._doesNotContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotContainInput() {
    return this._doesNotContain;
  }

  // does_not_end_with - computed: false, optional: true, required: false
  private _doesNotEndWith?: string; 
  public get doesNotEndWith() {
    return this.getStringAttribute('does_not_end_with');
  }
  public set doesNotEndWith(value: string) {
    this._doesNotEndWith = value;
  }
  public resetDoesNotEndWith() {
    this._doesNotEndWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEndWithInput() {
    return this._doesNotEndWith;
  }

  // does_not_equal - computed: false, optional: true, required: false
  private _doesNotEqual?: string; 
  public get doesNotEqual() {
    return this.getStringAttribute('does_not_equal');
  }
  public set doesNotEqual(value: string) {
    this._doesNotEqual = value;
  }
  public resetDoesNotEqual() {
    this._doesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEqualInput() {
    return this._doesNotEqual;
  }

  // does_not_start_with - computed: false, optional: true, required: false
  private _doesNotStartWith?: string; 
  public get doesNotStartWith() {
    return this.getStringAttribute('does_not_start_with');
  }
  public set doesNotStartWith(value: string) {
    this._doesNotStartWith = value;
  }
  public resetDoesNotStartWith() {
    this._doesNotStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotStartWithInput() {
    return this._doesNotStartWith;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatch {
  /**
  * operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#operator CdnLoadbalancer#operator}
  */
  readonly operator?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorToTerraform(struct!.operator),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator.internalValue = value.operator;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#contains CdnLoadbalancer#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_contain CdnLoadbalancer#does_not_contain}
  */
  readonly doesNotContain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_end_with CdnLoadbalancer#does_not_end_with}
  */
  readonly doesNotEndWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_equal CdnLoadbalancer#does_not_equal}
  */
  readonly doesNotEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#does_not_start_with CdnLoadbalancer#does_not_start_with}
  */
  readonly doesNotStartWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#endswith CdnLoadbalancer#endswith}
  */
  readonly endswith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#equals CdnLoadbalancer#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#match_regex CdnLoadbalancer#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#startswith CdnLoadbalancer#startswith}
  */
  readonly startswith?: string;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    does_not_contain: cdktf.stringToTerraform(struct!.doesNotContain),
    does_not_end_with: cdktf.stringToTerraform(struct!.doesNotEndWith),
    does_not_equal: cdktf.stringToTerraform(struct!.doesNotEqual),
    does_not_start_with: cdktf.stringToTerraform(struct!.doesNotStartWith),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorOutputReference | CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_contain: {
      value: cdktf.stringToHclTerraform(struct!.doesNotContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_end_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEndWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_equal: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_start_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotStartWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._doesNotContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotContain = this._doesNotContain;
    }
    if (this._doesNotEndWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEndWith = this._doesNotEndWith;
    }
    if (this._doesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEqual = this._doesNotEqual;
    }
    if (this._doesNotStartWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotStartWith = this._doesNotStartWith;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._doesNotContain = undefined;
      this._doesNotEndWith = undefined;
      this._doesNotEqual = undefined;
      this._doesNotStartWith = undefined;
      this._endswith = undefined;
      this._equals = undefined;
      this._matchRegex = undefined;
      this._startswith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._doesNotContain = value.doesNotContain;
      this._doesNotEndWith = value.doesNotEndWith;
      this._doesNotEqual = value.doesNotEqual;
      this._doesNotStartWith = value.doesNotStartWith;
      this._endswith = value.endswith;
      this._equals = value.equalTo;
      this._matchRegex = value.matchRegex;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // does_not_contain - computed: false, optional: true, required: false
  private _doesNotContain?: string; 
  public get doesNotContain() {
    return this.getStringAttribute('does_not_contain');
  }
  public set doesNotContain(value: string) {
    this._doesNotContain = value;
  }
  public resetDoesNotContain() {
    this._doesNotContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotContainInput() {
    return this._doesNotContain;
  }

  // does_not_end_with - computed: false, optional: true, required: false
  private _doesNotEndWith?: string; 
  public get doesNotEndWith() {
    return this.getStringAttribute('does_not_end_with');
  }
  public set doesNotEndWith(value: string) {
    this._doesNotEndWith = value;
  }
  public resetDoesNotEndWith() {
    this._doesNotEndWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEndWithInput() {
    return this._doesNotEndWith;
  }

  // does_not_equal - computed: false, optional: true, required: false
  private _doesNotEqual?: string; 
  public get doesNotEqual() {
    return this.getStringAttribute('does_not_equal');
  }
  public set doesNotEqual(value: string) {
    this._doesNotEqual = value;
  }
  public resetDoesNotEqual() {
    this._doesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEqualInput() {
    return this._doesNotEqual;
  }

  // does_not_start_with - computed: false, optional: true, required: false
  private _doesNotStartWith?: string; 
  public get doesNotStartWith() {
    return this.getStringAttribute('does_not_start_with');
  }
  public set doesNotStartWith(value: string) {
    this._doesNotStartWith = value;
  }
  public resetDoesNotStartWith() {
    this._doesNotStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotStartWithInput() {
    return this._doesNotStartWith;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#operator CdnLoadbalancer#operator}
  */
  readonly operator?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorToTerraform(struct!.operator),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters | cdktf.IResolvable): any {
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
    operator: {
      value: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator.internalValue = value.operator;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOutputReference {
    return new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpression {
  /**
  * cache_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_headers CdnLoadbalancer#cache_headers}
  */
  readonly cacheHeaders?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders[] | cdktf.IResolvable;
  /**
  * cookie_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cookie_matcher CdnLoadbalancer#cookie_matcher}
  */
  readonly cookieMatcher?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher[] | cdktf.IResolvable;
  /**
  * path_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#path_match CdnLoadbalancer#path_match}
  */
  readonly pathMatch?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatch;
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#query_parameters CdnLoadbalancer#query_parameters}
  */
  readonly queryParameters?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_headers: cdktf.listMapper(cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersToTerraform, true)(struct!.cacheHeaders),
    cookie_matcher: cdktf.listMapper(cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherToTerraform, true)(struct!.cookieMatcher),
    path_match: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchToTerraform(struct!.pathMatch),
    query_parameters: cdktf.listMapper(cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersToTerraform, true)(struct!.queryParameters),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersToHclTerraform, true)(struct!.cacheHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersList",
    },
    cookie_matcher: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherToHclTerraform, true)(struct!.cookieMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherList",
    },
    path_match: {
      value: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchToHclTerraform(struct!.pathMatch),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchList",
    },
    query_parameters: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersToHclTerraform, true)(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheHeaders = this._cacheHeaders?.internalValue;
    }
    if (this._cookieMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatcher = this._cookieMatcher?.internalValue;
    }
    if (this._pathMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMatch = this._pathMatch?.internalValue;
    }
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheHeaders.internalValue = undefined;
      this._cookieMatcher.internalValue = undefined;
      this._pathMatch.internalValue = undefined;
      this._queryParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheHeaders.internalValue = value.cacheHeaders;
      this._cookieMatcher.internalValue = value.cookieMatcher;
      this._pathMatch.internalValue = value.pathMatch;
      this._queryParameters.internalValue = value.queryParameters;
    }
  }

  // cache_headers - computed: false, optional: true, required: false
  private _cacheHeaders = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersList(this, "cache_headers", false);
  public get cacheHeaders() {
    return this._cacheHeaders;
  }
  public putCacheHeaders(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders[] | cdktf.IResolvable) {
    this._cacheHeaders.internalValue = value;
  }
  public resetCacheHeaders() {
    this._cacheHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheHeadersInput() {
    return this._cacheHeaders.internalValue;
  }

  // cookie_matcher - computed: false, optional: true, required: false
  private _cookieMatcher = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherList(this, "cookie_matcher", false);
  public get cookieMatcher() {
    return this._cookieMatcher;
  }
  public putCookieMatcher(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher[] | cdktf.IResolvable) {
    this._cookieMatcher.internalValue = value;
  }
  public resetCookieMatcher() {
    this._cookieMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatcherInput() {
    return this._cookieMatcher.internalValue;
  }

  // path_match - computed: false, optional: true, required: false
  private _pathMatch = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOutputReference(this, "path_match");
  public get pathMatch() {
    return this._pathMatch;
  }
  public putPathMatch(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionPathMatch) {
    this._pathMatch.internalValue = value;
  }
  public resetPathMatch() {
    this._pathMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatchInput() {
    return this._pathMatch.internalValue;
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersList(this, "query_parameters", false);
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters[] | cdktf.IResolvable) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpression[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionOutputReference {
    return new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#expression_name CdnLoadbalancer#expression_name}
  */
  readonly expressionName: string;
  /**
  * cache_rule_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_rule_expression CdnLoadbalancer#cache_rule_expression}
  */
  readonly cacheRuleExpression: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpression[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStructToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression_name: cdktf.stringToTerraform(struct!.expressionName),
    cache_rule_expression: cdktf.listMapper(cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionToTerraform, true)(struct!.cacheRuleExpression),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStructToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression_name: {
      value: cdktf.stringToHclTerraform(struct!.expressionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_rule_expression: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionToHclTerraform, true)(struct!.cacheRuleExpression),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionName = this._expressionName;
    }
    if (this._cacheRuleExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRuleExpression = this._cacheRuleExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressionName = undefined;
      this._cacheRuleExpression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressionName = value.expressionName;
      this._cacheRuleExpression.internalValue = value.cacheRuleExpression;
    }
  }

  // expression_name - computed: false, optional: false, required: true
  private _expressionName?: string; 
  public get expressionName() {
    return this.getStringAttribute('expression_name');
  }
  public set expressionName(value: string) {
    this._expressionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionNameInput() {
    return this._expressionName;
  }

  // cache_rule_expression - computed: false, optional: false, required: true
  private _cacheRuleExpression = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpressionList(this, "cache_rule_expression", false);
  public get cacheRuleExpression() {
    return this._cacheRuleExpression;
  }
  public putCacheRuleExpression(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListCacheRuleExpression[] | cdktf.IResolvable) {
    this._cacheRuleExpression.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRuleExpressionInput() {
    return this._cacheRuleExpression.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStructList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStruct[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStructOutputReference {
    return new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsCacheRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_bypass CdnLoadbalancer#cache_bypass}
  */
  readonly cacheBypass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#rule_name CdnLoadbalancer#rule_name}
  */
  readonly ruleName: string;
  /**
  * eligible_for_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#eligible_for_cache CdnLoadbalancer#eligible_for_cache}
  */
  readonly eligibleForCache?: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCache;
  /**
  * rule_expression_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#rule_expression_list CdnLoadbalancer#rule_expression_list}
  */
  readonly ruleExpressionList: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStruct[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_bypass: cdktf.booleanToTerraform(struct!.cacheBypass),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    eligible_for_cache: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheToTerraform(struct!.eligibleForCache),
    rule_expression_list: cdktf.listMapper(cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStructToTerraform, true)(struct!.ruleExpressionList),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsCacheRulesToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsCacheRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_bypass: {
      value: cdktf.booleanToHclTerraform(struct!.cacheBypass),
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
    eligible_for_cache: {
      value: cdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheToHclTerraform(struct!.eligibleForCache),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheList",
    },
    rule_expression_list: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStructToHclTerraform, true)(struct!.ruleExpressionList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsCacheRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheBypass = this._cacheBypass;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._eligibleForCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eligibleForCache = this._eligibleForCache?.internalValue;
    }
    if (this._ruleExpressionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleExpressionList = this._ruleExpressionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheBypass = undefined;
      this._ruleName = undefined;
      this._eligibleForCache.internalValue = undefined;
      this._ruleExpressionList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheBypass = value.cacheBypass;
      this._ruleName = value.ruleName;
      this._eligibleForCache.internalValue = value.eligibleForCache;
      this._ruleExpressionList.internalValue = value.ruleExpressionList;
    }
  }

  // cache_bypass - computed: false, optional: true, required: false
  private _cacheBypass?: boolean | cdktf.IResolvable; 
  public get cacheBypass() {
    return this.getBooleanAttribute('cache_bypass');
  }
  public set cacheBypass(value: boolean | cdktf.IResolvable) {
    this._cacheBypass = value;
  }
  public resetCacheBypass() {
    this._cacheBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBypassInput() {
    return this._cacheBypass;
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

  // eligible_for_cache - computed: false, optional: true, required: false
  private _eligibleForCache = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCacheOutputReference(this, "eligible_for_cache");
  public get eligibleForCache() {
    return this._eligibleForCache;
  }
  public putEligibleForCache(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesEligibleForCache) {
    this._eligibleForCache.internalValue = value;
  }
  public resetEligibleForCache() {
    this._eligibleForCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleForCacheInput() {
    return this._eligibleForCache.internalValue;
  }

  // rule_expression_list - computed: false, optional: false, required: true
  private _ruleExpressionList = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStructList(this, "rule_expression_list", false);
  public get ruleExpressionList() {
    return this._ruleExpressionList;
  }
  public putRuleExpressionList(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRulesRuleExpressionListStruct[] | cdktf.IResolvable) {
    this._ruleExpressionList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleExpressionListInput() {
    return this._ruleExpressionList.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionCacheOptionsCacheRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionCacheOptionsCacheRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionCacheOptionsCacheRulesOutputReference {
    return new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCache {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
}

export function cdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCacheToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCacheOutputReference | CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCacheToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCacheOutputReference | CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTtl = value.cacheTtl;
    }
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_disabled CdnLoadbalancer#cache_disabled}
  */
  readonly cacheDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_ttl_default CdnLoadbalancer#cache_ttl_default}
  */
  readonly cacheTtlDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_ttl_override CdnLoadbalancer#cache_ttl_override}
  */
  readonly cacheTtlOverride?: string;
  /**
  * eligible_for_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#eligible_for_cache CdnLoadbalancer#eligible_for_cache}
  */
  readonly eligibleForCache?: CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCache;
}

export function cdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionOutputReference | CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_disabled: cdktf.booleanToTerraform(struct!.cacheDisabled),
    cache_ttl_default: cdktf.stringToTerraform(struct!.cacheTtlDefault),
    cache_ttl_override: cdktf.stringToTerraform(struct!.cacheTtlOverride),
    eligible_for_cache: cdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCacheToTerraform(struct!.eligibleForCache),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionOutputReference | CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.cacheDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl_default: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtlDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_ttl_override: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtlOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eligible_for_cache: {
      value: cdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCacheToHclTerraform(struct!.eligibleForCache),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCacheList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDisabled = this._cacheDisabled;
    }
    if (this._cacheTtlDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlDefault = this._cacheTtlDefault;
    }
    if (this._cacheTtlOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlOverride = this._cacheTtlOverride;
    }
    if (this._eligibleForCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eligibleForCache = this._eligibleForCache?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheDisabled = undefined;
      this._cacheTtlDefault = undefined;
      this._cacheTtlOverride = undefined;
      this._eligibleForCache.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheDisabled = value.cacheDisabled;
      this._cacheTtlDefault = value.cacheTtlDefault;
      this._cacheTtlOverride = value.cacheTtlOverride;
      this._eligibleForCache.internalValue = value.eligibleForCache;
    }
  }

  // cache_disabled - computed: false, optional: true, required: false
  private _cacheDisabled?: boolean | cdktf.IResolvable; 
  public get cacheDisabled() {
    return this.getBooleanAttribute('cache_disabled');
  }
  public set cacheDisabled(value: boolean | cdktf.IResolvable) {
    this._cacheDisabled = value;
  }
  public resetCacheDisabled() {
    this._cacheDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDisabledInput() {
    return this._cacheDisabled;
  }

  // cache_ttl_default - computed: false, optional: true, required: false
  private _cacheTtlDefault?: string; 
  public get cacheTtlDefault() {
    return this.getStringAttribute('cache_ttl_default');
  }
  public set cacheTtlDefault(value: string) {
    this._cacheTtlDefault = value;
  }
  public resetCacheTtlDefault() {
    this._cacheTtlDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlDefaultInput() {
    return this._cacheTtlDefault;
  }

  // cache_ttl_override - computed: false, optional: true, required: false
  private _cacheTtlOverride?: string; 
  public get cacheTtlOverride() {
    return this.getStringAttribute('cache_ttl_override');
  }
  public set cacheTtlOverride(value: string) {
    this._cacheTtlOverride = value;
  }
  public resetCacheTtlOverride() {
    this._cacheTtlOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlOverrideInput() {
    return this._cacheTtlOverride;
  }

  // eligible_for_cache - computed: false, optional: true, required: false
  private _eligibleForCache = new CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCacheOutputReference(this, "eligible_for_cache");
  public get eligibleForCache() {
    return this._eligibleForCache;
  }
  public putEligibleForCache(value: CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionEligibleForCache) {
    this._eligibleForCache.internalValue = value;
  }
  public resetEligibleForCache() {
    this._eligibleForCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleForCacheInput() {
    return this._eligibleForCache.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionCacheOptions {
  /**
  * cache_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_rules CdnLoadbalancer#cache_rules}
  */
  readonly cacheRules?: CdnLoadbalancerMoreOptionCacheOptionsCacheRules[] | cdktf.IResolvable;
  /**
  * default_cache_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#default_cache_action CdnLoadbalancer#default_cache_action}
  */
  readonly defaultCacheAction: CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheAction;
}

export function cdnLoadbalancerMoreOptionCacheOptionsToTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsOutputReference | CdnLoadbalancerMoreOptionCacheOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_rules: cdktf.listMapper(cdnLoadbalancerMoreOptionCacheOptionsCacheRulesToTerraform, true)(struct!.cacheRules),
    default_cache_action: cdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionToTerraform(struct!.defaultCacheAction),
  }
}


export function cdnLoadbalancerMoreOptionCacheOptionsToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheOptionsOutputReference | CdnLoadbalancerMoreOptionCacheOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionCacheOptionsCacheRulesToHclTerraform, true)(struct!.cacheRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsCacheRulesList",
    },
    default_cache_action: {
      value: cdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionToHclTerraform(struct!.defaultCacheAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRules = this._cacheRules?.internalValue;
    }
    if (this._defaultCacheAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCacheAction = this._defaultCacheAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheRules.internalValue = undefined;
      this._defaultCacheAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheRules.internalValue = value.cacheRules;
      this._defaultCacheAction.internalValue = value.defaultCacheAction;
    }
  }

  // cache_rules - computed: false, optional: true, required: false
  private _cacheRules = new CdnLoadbalancerMoreOptionCacheOptionsCacheRulesList(this, "cache_rules", false);
  public get cacheRules() {
    return this._cacheRules;
  }
  public putCacheRules(value: CdnLoadbalancerMoreOptionCacheOptionsCacheRules[] | cdktf.IResolvable) {
    this._cacheRules.internalValue = value;
  }
  public resetCacheRules() {
    this._cacheRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRulesInput() {
    return this._cacheRules.internalValue;
  }

  // default_cache_action - computed: false, optional: false, required: true
  private _defaultCacheAction = new CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheActionOutputReference(this, "default_cache_action");
  public get defaultCacheAction() {
    return this._defaultCacheAction;
  }
  public putDefaultCacheAction(value: CdnLoadbalancerMoreOptionCacheOptionsDefaultCacheAction) {
    this._defaultCacheAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheActionInput() {
    return this._defaultCacheAction.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionCacheTtlOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_disabled CdnLoadbalancer#cache_disabled}
  */
  readonly cacheDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_ttl_default CdnLoadbalancer#cache_ttl_default}
  */
  readonly cacheTtlDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#cache_ttl_override CdnLoadbalancer#cache_ttl_override}
  */
  readonly cacheTtlOverride?: string;
}

export function cdnLoadbalancerMoreOptionCacheTtlOptionsToTerraform(struct?: CdnLoadbalancerMoreOptionCacheTtlOptionsOutputReference | CdnLoadbalancerMoreOptionCacheTtlOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_disabled: cdktf.booleanToTerraform(struct!.cacheDisabled),
    cache_ttl_default: cdktf.stringToTerraform(struct!.cacheTtlDefault),
    cache_ttl_override: cdktf.stringToTerraform(struct!.cacheTtlOverride),
  }
}


export function cdnLoadbalancerMoreOptionCacheTtlOptionsToHclTerraform(struct?: CdnLoadbalancerMoreOptionCacheTtlOptionsOutputReference | CdnLoadbalancerMoreOptionCacheTtlOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.cacheDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl_default: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtlDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_ttl_override: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtlOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionCacheTtlOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionCacheTtlOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDisabled = this._cacheDisabled;
    }
    if (this._cacheTtlDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlDefault = this._cacheTtlDefault;
    }
    if (this._cacheTtlOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlOverride = this._cacheTtlOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionCacheTtlOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheDisabled = undefined;
      this._cacheTtlDefault = undefined;
      this._cacheTtlOverride = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheDisabled = value.cacheDisabled;
      this._cacheTtlDefault = value.cacheTtlDefault;
      this._cacheTtlOverride = value.cacheTtlOverride;
    }
  }

  // cache_disabled - computed: false, optional: true, required: false
  private _cacheDisabled?: boolean | cdktf.IResolvable; 
  public get cacheDisabled() {
    return this.getBooleanAttribute('cache_disabled');
  }
  public set cacheDisabled(value: boolean | cdktf.IResolvable) {
    this._cacheDisabled = value;
  }
  public resetCacheDisabled() {
    this._cacheDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDisabledInput() {
    return this._cacheDisabled;
  }

  // cache_ttl_default - computed: false, optional: true, required: false
  private _cacheTtlDefault?: string; 
  public get cacheTtlDefault() {
    return this.getStringAttribute('cache_ttl_default');
  }
  public set cacheTtlDefault(value: string) {
    this._cacheTtlDefault = value;
  }
  public resetCacheTtlDefault() {
    this._cacheTtlDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlDefaultInput() {
    return this._cacheTtlDefault;
  }

  // cache_ttl_override - computed: false, optional: true, required: false
  private _cacheTtlOverride?: string; 
  public get cacheTtlOverride() {
    return this.getStringAttribute('cache_ttl_override');
  }
  public set cacheTtlOverride(value: string) {
    this._cacheTtlOverride = value;
  }
  public resetCacheTtlOverride() {
    this._cacheTtlOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlOverrideInput() {
    return this._cacheTtlOverride;
  }
}
export interface CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo): any {
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


export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
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


export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
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

export class CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
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
export interface CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#secret_encoding CdnLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#version CdnLoadbalancer#version}
  */
  readonly version?: number;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfo): any {
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


export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#secret_encoding_type CdnLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#blindfold_secret_info_internal CdnLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#vault_secret_info CdnLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#wingman_secret_info CdnLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfo;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValue): any {
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
      value: cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValue | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValue | undefined) {
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
  private _blindfoldSecretInfo = new CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo) {
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
  private _vaultSecretInfo = new CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueVaultSecretInfo) {
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
  private _wingmanSecretInfo = new CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueWingmanSecretInfo) {
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
export interface CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#append CdnLoadbalancer#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#value CdnLoadbalancer#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#secret_value CdnLoadbalancer#secret_value}
  */
  readonly secretValue?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValue;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAdd | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAdd | cdktf.IResolvable | undefined) {
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
  private _secretValue = new CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddSecretValue) {
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

export class CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddOutputReference {
    return new CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo): any {
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


export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
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


export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
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

export class CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
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
export interface CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#secret_encoding CdnLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#version CdnLoadbalancer#version}
  */
  readonly version?: number;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfo): any {
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


export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#secret_encoding_type CdnLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#blindfold_secret_info_internal CdnLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#vault_secret_info CdnLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#wingman_secret_info CdnLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfo;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueOutputReference | CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValue): any {
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
      value: cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValue | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValue | undefined) {
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
  private _blindfoldSecretInfo = new CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo) {
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
  private _vaultSecretInfo = new CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueVaultSecretInfo) {
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
  private _wingmanSecretInfo = new CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueWingmanSecretInfo) {
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
export interface CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#append CdnLoadbalancer#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#value CdnLoadbalancer#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#secret_value CdnLoadbalancer#secret_value}
  */
  readonly secretValue?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValue;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAdd | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAdd | cdktf.IResolvable | undefined) {
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
  private _secretValue = new CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddSecretValue) {
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

export class CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddOutputReference {
    return new CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionHeaderOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#request_headers_to_remove CdnLoadbalancer#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#response_headers_to_remove CdnLoadbalancer#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#request_headers_to_add CdnLoadbalancer#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#response_headers_to_add CdnLoadbalancer#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAdd[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionHeaderOptionsToTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsOutputReference | CdnLoadbalancerMoreOptionHeaderOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function cdnLoadbalancerMoreOptionHeaderOptionsToHclTerraform(struct?: CdnLoadbalancerMoreOptionHeaderOptionsOutputReference | CdnLoadbalancerMoreOptionHeaderOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
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
    request_headers_to_add: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionHeaderOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionHeaderOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionHeaderOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
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

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: CdnLoadbalancerMoreOptionHeaderOptionsRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: CdnLoadbalancerMoreOptionHeaderOptionsResponseHeadersToAdd[] | cdktf.IResolvable) {
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
export interface CdnLoadbalancerMoreOptionLoggingOptionsClientLogOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#header_list CdnLoadbalancer#header_list}
  */
  readonly headerList?: string[];
}

export function cdnLoadbalancerMoreOptionLoggingOptionsClientLogOptionsToTerraform(struct?: CdnLoadbalancerMoreOptionLoggingOptionsClientLogOptionsOutputReference | CdnLoadbalancerMoreOptionLoggingOptionsClientLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headerList),
  }
}


export function cdnLoadbalancerMoreOptionLoggingOptionsClientLogOptionsToHclTerraform(struct?: CdnLoadbalancerMoreOptionLoggingOptionsClientLogOptionsOutputReference | CdnLoadbalancerMoreOptionLoggingOptionsClientLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headerList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionLoggingOptionsClientLogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionLoggingOptionsClientLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerList = this._headerList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionLoggingOptionsClientLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerList = value.headerList;
    }
  }

  // header_list - computed: false, optional: true, required: false
  private _headerList?: string[]; 
  public get headerList() {
    return this.getListAttribute('header_list');
  }
  public set headerList(value: string[]) {
    this._headerList = value;
  }
  public resetHeaderList() {
    this._headerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerListInput() {
    return this._headerList;
  }
}
export interface CdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#header_list CdnLoadbalancer#header_list}
  */
  readonly headerList?: string[];
}

export function cdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptionsToTerraform(struct?: CdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptionsOutputReference | CdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headerList),
  }
}


export function cdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptionsToHclTerraform(struct?: CdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptionsOutputReference | CdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headerList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerList = this._headerList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerList = value.headerList;
    }
  }

  // header_list - computed: false, optional: true, required: false
  private _headerList?: string[]; 
  public get headerList() {
    return this.getListAttribute('header_list');
  }
  public set headerList(value: string[]) {
    this._headerList = value;
  }
  public resetHeaderList() {
    this._headerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerListInput() {
    return this._headerList;
  }
}
export interface CdnLoadbalancerMoreOptionLoggingOptions {
  /**
  * client_log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#client_log_options CdnLoadbalancer#client_log_options}
  */
  readonly clientLogOptions?: CdnLoadbalancerMoreOptionLoggingOptionsClientLogOptions;
  /**
  * origin_log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#origin_log_options CdnLoadbalancer#origin_log_options}
  */
  readonly originLogOptions?: CdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptions;
}

export function cdnLoadbalancerMoreOptionLoggingOptionsToTerraform(struct?: CdnLoadbalancerMoreOptionLoggingOptionsOutputReference | CdnLoadbalancerMoreOptionLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_log_options: cdnLoadbalancerMoreOptionLoggingOptionsClientLogOptionsToTerraform(struct!.clientLogOptions),
    origin_log_options: cdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptionsToTerraform(struct!.originLogOptions),
  }
}


export function cdnLoadbalancerMoreOptionLoggingOptionsToHclTerraform(struct?: CdnLoadbalancerMoreOptionLoggingOptionsOutputReference | CdnLoadbalancerMoreOptionLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_log_options: {
      value: cdnLoadbalancerMoreOptionLoggingOptionsClientLogOptionsToHclTerraform(struct!.clientLogOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionLoggingOptionsClientLogOptionsList",
    },
    origin_log_options: {
      value: cdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptionsToHclTerraform(struct!.originLogOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientLogOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientLogOptions = this._clientLogOptions?.internalValue;
    }
    if (this._originLogOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originLogOptions = this._originLogOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientLogOptions.internalValue = undefined;
      this._originLogOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientLogOptions.internalValue = value.clientLogOptions;
      this._originLogOptions.internalValue = value.originLogOptions;
    }
  }

  // client_log_options - computed: false, optional: true, required: false
  private _clientLogOptions = new CdnLoadbalancerMoreOptionLoggingOptionsClientLogOptionsOutputReference(this, "client_log_options");
  public get clientLogOptions() {
    return this._clientLogOptions;
  }
  public putClientLogOptions(value: CdnLoadbalancerMoreOptionLoggingOptionsClientLogOptions) {
    this._clientLogOptions.internalValue = value;
  }
  public resetClientLogOptions() {
    this._clientLogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLogOptionsInput() {
    return this._clientLogOptions.internalValue;
  }

  // origin_log_options - computed: false, optional: true, required: false
  private _originLogOptions = new CdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptionsOutputReference(this, "origin_log_options");
  public get originLogOptions() {
    return this._originLogOptions;
  }
  public putOriginLogOptions(value: CdnLoadbalancerMoreOptionLoggingOptionsOriginLogOptions) {
    this._originLogOptions.internalValue = value;
  }
  public resetOriginLogOptions() {
    this._originLogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originLogOptionsInput() {
    return this._originLogOptions.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#secret_encoding CdnLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#version CdnLoadbalancer#version}
  */
  readonly version?: number;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#secret_encoding_type CdnLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#blindfold_secret_info_internal CdnLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#vault_secret_info CdnLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#wingman_secret_info CdnLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword): any {
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
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword | undefined) {
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
  private _blindfoldSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo) {
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
  private _vaultSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo) {
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
  private _wingmanSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#user CdnLoadbalancer#user}
  */
  readonly user?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#password CdnLoadbalancer#password}
  */
  readonly password?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user: cdktf.stringToTerraform(struct!.user),
    password: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToTerraform(struct!.password),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._user = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._user = value.user;
      this._password.internalValue = value.password;
    }
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // password - computed: false, optional: true, required: false
  private _password = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain: string;
  /**
  * simple_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#simple_login CdnLoadbalancer#simple_login}
  */
  readonly simpleLogin?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    simple_login: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginToTerraform(struct!.simpleLogin),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    simple_login: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginToHclTerraform(struct!.simpleLogin),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._simpleLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleLogin = this._simpleLogin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._simpleLogin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._simpleLogin.internalValue = value.simpleLogin;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // simple_login - computed: false, optional: true, required: false
  private _simpleLogin = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference(this, "simple_login");
  public get simpleLogin() {
    return this._simpleLogin;
  }
  public putSimpleLogin(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin) {
    this._simpleLogin.internalValue = value;
  }
  public resetSimpleLogin() {
    this._simpleLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleLoginInput() {
    return this._simpleLogin.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig {
  /**
  * domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#domains CdnLoadbalancer#domains}
  */
  readonly domains: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsToTerraform, true)(struct!.domains),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsToHclTerraform, true)(struct!.domains),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains.internalValue = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#disable_api_crawler CdnLoadbalancer#disable_api_crawler}
  */
  readonly disableApiCrawler?: boolean | cdktf.IResolvable;
  /**
  * api_crawler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#api_crawler_config CdnLoadbalancer#api_crawler_config}
  */
  readonly apiCrawlerConfig?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_api_crawler: cdktf.booleanToTerraform(struct!.disableApiCrawler),
    api_crawler_config: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigToTerraform(struct!.apiCrawlerConfig),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_api_crawler: {
      value: cdktf.booleanToHclTerraform(struct!.disableApiCrawler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_crawler_config: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigToHclTerraform(struct!.apiCrawlerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableApiCrawler !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApiCrawler = this._disableApiCrawler;
    }
    if (this._apiCrawlerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCrawlerConfig = this._apiCrawlerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableApiCrawler = undefined;
      this._apiCrawlerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableApiCrawler = value.disableApiCrawler;
      this._apiCrawlerConfig.internalValue = value.apiCrawlerConfig;
    }
  }

  // disable_api_crawler - computed: false, optional: true, required: false
  private _disableApiCrawler?: boolean | cdktf.IResolvable; 
  public get disableApiCrawler() {
    return this.getBooleanAttribute('disable_api_crawler');
  }
  public set disableApiCrawler(value: boolean | cdktf.IResolvable) {
    this._disableApiCrawler = value;
  }
  public resetDisableApiCrawler() {
    this._disableApiCrawler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiCrawlerInput() {
    return this._disableApiCrawler;
  }

  // api_crawler_config - computed: false, optional: true, required: false
  private _apiCrawlerConfig = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigOutputReference(this, "api_crawler_config");
  public get apiCrawlerConfig() {
    return this._apiCrawlerConfig;
  }
  public putApiCrawlerConfig(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig) {
    this._apiCrawlerConfig.internalValue = value;
  }
  public resetApiCrawlerConfig() {
    this._apiCrawlerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCrawlerConfigInput() {
    return this._apiCrawlerConfig.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#api_code_repo CdnLoadbalancer#api_code_repo}
  */
  readonly apiCodeRepo: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_code_repo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiCodeRepo),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_code_repo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiCodeRepo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiCodeRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCodeRepo = this._apiCodeRepo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiCodeRepo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiCodeRepo = value.apiCodeRepo;
    }
  }

  // api_code_repo - computed: false, optional: false, required: true
  private _apiCodeRepo?: string[]; 
  public get apiCodeRepo() {
    return this.getListAttribute('api_code_repo');
  }
  public set apiCodeRepo(value: string[]) {
    this._apiCodeRepo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCodeRepoInput() {
    return this._apiCodeRepo;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#all_repos CdnLoadbalancer#all_repos}
  */
  readonly allRepos?: boolean | cdktf.IResolvable;
  /**
  * code_base_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#code_base_integration CdnLoadbalancer#code_base_integration}
  */
  readonly codeBaseIntegration: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration;
  /**
  * selected_repos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#selected_repos CdnLoadbalancer#selected_repos}
  */
  readonly selectedRepos?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_repos: cdktf.booleanToTerraform(struct!.allRepos),
    code_base_integration: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToTerraform(struct!.codeBaseIntegration),
    selected_repos: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToTerraform(struct!.selectedRepos),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_repos: {
      value: cdktf.booleanToHclTerraform(struct!.allRepos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code_base_integration: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToHclTerraform(struct!.codeBaseIntegration),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationList",
    },
    selected_repos: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToHclTerraform(struct!.selectedRepos),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRepos !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRepos = this._allRepos;
    }
    if (this._codeBaseIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBaseIntegration = this._codeBaseIntegration?.internalValue;
    }
    if (this._selectedRepos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedRepos = this._selectedRepos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allRepos = undefined;
      this._codeBaseIntegration.internalValue = undefined;
      this._selectedRepos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allRepos = value.allRepos;
      this._codeBaseIntegration.internalValue = value.codeBaseIntegration;
      this._selectedRepos.internalValue = value.selectedRepos;
    }
  }

  // all_repos - computed: false, optional: true, required: false
  private _allRepos?: boolean | cdktf.IResolvable; 
  public get allRepos() {
    return this.getBooleanAttribute('all_repos');
  }
  public set allRepos(value: boolean | cdktf.IResolvable) {
    this._allRepos = value;
  }
  public resetAllRepos() {
    this._allRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allReposInput() {
    return this._allRepos;
  }

  // code_base_integration - computed: false, optional: false, required: true
  private _codeBaseIntegration = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference(this, "code_base_integration");
  public get codeBaseIntegration() {
    return this._codeBaseIntegration;
  }
  public putCodeBaseIntegration(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration) {
    this._codeBaseIntegration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationInput() {
    return this._codeBaseIntegration.internalValue;
  }

  // selected_repos - computed: false, optional: true, required: false
  private _selectedRepos = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference(this, "selected_repos");
  public get selectedRepos() {
    return this._selectedRepos;
  }
  public putSelectedRepos(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos) {
    this._selectedRepos.internalValue = value;
  }
  public resetSelectedRepos() {
    this._selectedRepos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedReposInput() {
    return this._selectedRepos.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScan {
  /**
  * code_base_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#code_base_integrations CdnLoadbalancer#code_base_integrations}
  */
  readonly codeBaseIntegrations: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_base_integrations: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsToTerraform, true)(struct!.codeBaseIntegrations),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_base_integrations: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsToHclTerraform, true)(struct!.codeBaseIntegrations),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeBaseIntegrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBaseIntegrations = this._codeBaseIntegrations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeBaseIntegrations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeBaseIntegrations.internalValue = value.codeBaseIntegrations;
    }
  }

  // code_base_integrations - computed: false, optional: false, required: true
  private _codeBaseIntegrations = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsList(this, "code_base_integrations", false);
  public get codeBaseIntegrations() {
    return this._codeBaseIntegrations;
  }
  public putCodeBaseIntegrations(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable) {
    this._codeBaseIntegrations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationsInput() {
    return this._codeBaseIntegrations.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscovery {
  /**
  * api_discovery_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#api_discovery_ref CdnLoadbalancer#api_discovery_ref}
  */
  readonly apiDiscoveryRef: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_discovery_ref: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefToTerraform(struct!.apiDiscoveryRef),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_discovery_ref: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefToHclTerraform(struct!.apiDiscoveryRef),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiDiscoveryRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscoveryRef = this._apiDiscoveryRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiDiscoveryRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiDiscoveryRef.internalValue = value.apiDiscoveryRef;
    }
  }

  // api_discovery_ref - computed: false, optional: false, required: true
  private _apiDiscoveryRef = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefOutputReference(this, "api_discovery_ref");
  public get apiDiscoveryRef() {
    return this._apiDiscoveryRef;
  }
  public putApiDiscoveryRef(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef) {
    this._apiDiscoveryRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoveryRefInput() {
    return this._apiDiscoveryRef.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissDiscoveredApiSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cdn_loadbalancer#purge_duration_for_inactive_discovered_apis CdnLoadbalancer#purge_duration_for_inactive_discovered_apis}
  */
  readonly purgeDurationForInactiveDiscoveredApis?: number;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissDiscoveredApiSettingsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissDiscoveredApiSettingsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_duration_for_inactive_discovered_apis: cdktf.numberToTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissDiscoveredApiSettingsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissDiscoveredApiSettingsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_duration_for_inactive_discovered_apis: {
      value: cdktf.numberToHclTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissDiscoveredApiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissDiscoveredApiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._purgeDurationForInactiveDiscoveredApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeDurationForInactiveDiscoveredApis = this._purgeDurationForInactiveDiscoveredApis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissDiscoveredApiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._purgeDurationForInactiveDiscoveredApis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._purgeDurationForInactiveDiscoveredApis = value.purgeDurationForInactiveDiscoveredApis;
    }
  }

  // purge_duration_for_inactive_discovered_apis - computed: false, optional: true, required: false
  private _purgeDurationForInactiveDiscoveredApis?: number; 
  public get purgeDurationForInactiveDiscoveredApis() {
    return this.getNumberAttribute('purge_duration_for_inactive_discovered_apis');
  }
  public set purgeDurationForInactiveDiscoveredApis(value: number) {
    this._purgeDurationForInactiveDiscoveredApis = value;
  }
  public resetPurgeDurationForInactiveDiscoveredApis() {
    this._purgeDurationForInactiveDiscoveredApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeDurationForInactiveDiscoveredApisInput() {
    return this._purgeDurationForInactiveDiscoveredApis;
  }
}
