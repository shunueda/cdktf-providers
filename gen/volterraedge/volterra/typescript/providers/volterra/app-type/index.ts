// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#annotations AppType#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#description AppType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#disable AppType#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#id AppType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#labels AppType#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#name AppType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#namespace AppType#namespace}
  */
  readonly namespace: string;
  /**
  * business_logic_markup_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#business_logic_markup_setting AppType#business_logic_markup_setting}
  */
  readonly businessLogicMarkupSetting?: AppTypeBusinessLogicMarkupSetting;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#features AppType#features}
  */
  readonly features?: AppTypeFeatures[] | cdktf.IResolvable;
}
export interface AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#purge_duration_for_inactive_discovered_apis AppType#purge_duration_for_inactive_discovered_apis}
  */
  readonly purgeDurationForInactiveDiscoveredApis?: number;
}

export function appTypeBusinessLogicMarkupSettingDiscoveredApiSettingsToTerraform(struct?: AppTypeBusinessLogicMarkupSettingDiscoveredApiSettingsOutputReference | AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_duration_for_inactive_discovered_apis: cdktf.numberToTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
  }
}


export function appTypeBusinessLogicMarkupSettingDiscoveredApiSettingsToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingDiscoveredApiSettingsOutputReference | AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings): any {
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

export class AppTypeBusinessLogicMarkupSettingDiscoveredApiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._purgeDurationForInactiveDiscoveredApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeDurationForInactiveDiscoveredApis = this._purgeDurationForInactiveDiscoveredApis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings | undefined) {
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
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#description AppType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#disable AppType#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#name AppType#name}
  */
  readonly name: string;
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata): any {
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


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata): any {
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

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata | undefined {
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

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata | undefined) {
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
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#api_endpoint_path AppType#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#methods AppType#methods}
  */
  readonly methods: string[];
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint_path: cdktf.stringToTerraform(struct!.apiEndpointPath),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint_path: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointPath = this._apiEndpointPath;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpointPath = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpointPath = value.apiEndpointPath;
      this._methods = value.methods;
    }
  }

  // api_endpoint_path - computed: false, optional: false, required: true
  private _apiEndpointPath?: string; 
  public get apiEndpointPath() {
    return this.getStringAttribute('api_endpoint_path');
  }
  public set apiEndpointPath(value: string) {
    this._apiEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointPathInput() {
    return this._apiEndpointPath;
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#custom_sections AppType#custom_sections}
  */
  readonly customSections: string[];
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customSections),
  }
}


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customSections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSections = this._customSections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSections = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSections = value.customSections;
    }
  }

  // custom_sections - computed: false, optional: false, required: true
  private _customSections?: string[]; 
  public get customSections() {
    return this.getListAttribute('custom_sections');
  }
  public set customSections(value: string[]) {
    this._customSections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customSectionsInput() {
    return this._customSections;
  }
}
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#exact_value AppType#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#regex_value AppType#regex_value}
  */
  readonly regexValue?: string;
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern): any {
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

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern | undefined {
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

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern | undefined) {
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
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#exact_value AppType#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#regex_value AppType#regex_value}
  */
  readonly regexValue?: string;
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern): any {
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

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern | undefined {
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

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern | undefined) {
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
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#exact_value AppType#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#regex_value AppType#regex_value}
  */
  readonly regexValue?: string;
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern): any {
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

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern | undefined {
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

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern | undefined) {
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
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern {
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#key_pattern AppType#key_pattern}
  */
  readonly keyPattern: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#value_pattern AppType#value_pattern}
  */
  readonly valuePattern: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern;
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_pattern: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform(struct!.keyPattern),
    value_pattern: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform(struct!.valuePattern),
  }
}


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_pattern: {
      value: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternList",
    },
    value_pattern: {
      value: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern | undefined {
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

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern | undefined) {
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
  private _keyPattern = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern) {
    this._keyPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern.internalValue;
  }

  // value_pattern - computed: false, optional: false, required: true
  private _valuePattern = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern) {
    this._valuePattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern.internalValue;
  }
}
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#exact_value AppType#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#regex_value AppType#regex_value}
  */
  readonly regexValue?: string;
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern): any {
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

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern | undefined {
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

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern | undefined) {
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
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#all_request_sections AppType#all_request_sections}
  */
  readonly allRequestSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#all_response_sections AppType#all_response_sections}
  */
  readonly allResponseSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#all_sections AppType#all_sections}
  */
  readonly allSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#any_domain AppType#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#any_target AppType#any_target}
  */
  readonly anyTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#api_group AppType#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#base_path AppType#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#specific_domain AppType#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#api_endpoint_target AppType#api_endpoint_target}
  */
  readonly apiEndpointTarget?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget;
  /**
  * custom_sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#custom_sections AppType#custom_sections}
  */
  readonly customSections?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections;
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#key_pattern AppType#key_pattern}
  */
  readonly keyPattern?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern;
  /**
  * key_value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#key_value_pattern AppType#key_value_pattern}
  */
  readonly keyValuePattern?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#value_pattern AppType#value_pattern}
  */
  readonly valuePattern?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern;
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig): any {
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
    api_endpoint_target: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform(struct!.apiEndpointTarget),
    custom_sections: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform(struct!.customSections),
    key_pattern: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform(struct!.keyPattern),
    key_value_pattern: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToTerraform(struct!.keyValuePattern),
    value_pattern: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToTerraform(struct!.valuePattern),
  }
}


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig): any {
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
      value: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform(struct!.apiEndpointTarget),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetList",
    },
    custom_sections: {
      value: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform(struct!.customSections),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsList",
    },
    key_pattern: {
      value: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternList",
    },
    key_value_pattern: {
      value: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToHclTerraform(struct!.keyValuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternList",
    },
    value_pattern: {
      value: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig | undefined {
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

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig | undefined) {
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
  private _apiEndpointTarget = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference(this, "api_endpoint_target");
  public get apiEndpointTarget() {
    return this._apiEndpointTarget;
  }
  public putApiEndpointTarget(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget) {
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
  private _customSections = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference(this, "custom_sections");
  public get customSections() {
    return this._customSections;
  }
  public putCustomSections(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections) {
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
  private _keyPattern = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern) {
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
  private _keyValuePattern = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference(this, "key_value_pattern");
  public get keyValuePattern() {
    return this._keyValuePattern;
  }
  public putKeyValuePattern(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern) {
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
  private _valuePattern = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern) {
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
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#type AppType#type}
  */
  readonly type: string;
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType): any {
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

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType | undefined) {
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
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#metadata AppType#metadata}
  */
  readonly metadata: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata;
  /**
  * sensitive_data_detection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#sensitive_data_detection_config AppType#sensitive_data_detection_config}
  */
  readonly sensitiveDataDetectionConfig: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig;
  /**
  * sensitive_data_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#sensitive_data_type AppType#sensitive_data_type}
  */
  readonly sensitiveDataType: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType;
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform(struct!.metadata),
    sensitive_data_detection_config: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToTerraform(struct!.sensitiveDataDetectionConfig),
    sensitive_data_type: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToTerraform(struct!.sensitiveDataType),
  }
}


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataList",
    },
    sensitive_data_detection_config: {
      value: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToHclTerraform(struct!.sensitiveDataDetectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigList",
    },
    sensitive_data_type: {
      value: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToHclTerraform(struct!.sensitiveDataType),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable | undefined) {
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
  private _metadata = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // sensitive_data_detection_config - computed: false, optional: false, required: true
  private _sensitiveDataDetectionConfig = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference(this, "sensitive_data_detection_config");
  public get sensitiveDataDetectionConfig() {
    return this._sensitiveDataDetectionConfig;
  }
  public putSensitiveDataDetectionConfig(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig) {
    this._sensitiveDataDetectionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataDetectionConfigInput() {
    return this._sensitiveDataDetectionConfig.internalValue;
  }

  // sensitive_data_type - computed: false, optional: false, required: true
  private _sensitiveDataType = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference(this, "sensitive_data_type");
  public get sensitiveDataType() {
    return this._sensitiveDataType;
  }
  public putSensitiveDataType(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType) {
    this._sensitiveDataType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataTypeInput() {
    return this._sensitiveDataType.internalValue;
  }
}

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList extends cdktf.ComplexList {
  public internalValue? : AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable

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
  public get(index: number): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference {
    return new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#name AppType#name}
  */
  readonly name: string;
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRulesToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRulesToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable): any {
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

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable | undefined) {
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

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRulesList extends cdktf.ComplexList {
  public internalValue? : AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable

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
  public get(index: number): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference {
    return new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRules {
  /**
  * custom_sensitive_data_detection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#custom_sensitive_data_detection_rules AppType#custom_sensitive_data_detection_rules}
  */
  readonly customSensitiveDataDetectionRules?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable;
  /**
  * disabled_built_in_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#disabled_built_in_rules AppType#disabled_built_in_rules}
  */
  readonly disabledBuiltInRules?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable;
}

export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesToTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sensitive_data_detection_rules: cdktf.listMapper(appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToTerraform, true)(struct!.customSensitiveDataDetectionRules),
    disabled_built_in_rules: cdktf.listMapper(appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRulesToTerraform, true)(struct!.disabledBuiltInRules),
  }
}


export function appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesOutputReference | AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sensitive_data_detection_rules: {
      value: cdktf.listMapperHcl(appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToHclTerraform, true)(struct!.customSensitiveDataDetectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList",
    },
    disabled_built_in_rules: {
      value: cdktf.listMapperHcl(appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRulesToHclTerraform, true)(struct!.disabledBuiltInRules),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRules | undefined {
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

  public set internalValue(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRules | undefined) {
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
  private _customSensitiveDataDetectionRules = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList(this, "custom_sensitive_data_detection_rules", false);
  public get customSensitiveDataDetectionRules() {
    return this._customSensitiveDataDetectionRules;
  }
  public putCustomSensitiveDataDetectionRules(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable) {
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
  private _disabledBuiltInRules = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRulesList(this, "disabled_built_in_rules", false);
  public get disabledBuiltInRules() {
    return this._disabledBuiltInRules;
  }
  public putDisabledBuiltInRules(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable) {
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
export interface AppTypeBusinessLogicMarkupSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#disable AppType#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#enable AppType#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * discovered_api_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#discovered_api_settings AppType#discovered_api_settings}
  */
  readonly discoveredApiSettings?: AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings;
  /**
  * sensitive_data_detection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#sensitive_data_detection_rules AppType#sensitive_data_detection_rules}
  */
  readonly sensitiveDataDetectionRules?: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRules;
}

export function appTypeBusinessLogicMarkupSettingToTerraform(struct?: AppTypeBusinessLogicMarkupSettingOutputReference | AppTypeBusinessLogicMarkupSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
    discovered_api_settings: appTypeBusinessLogicMarkupSettingDiscoveredApiSettingsToTerraform(struct!.discoveredApiSettings),
    sensitive_data_detection_rules: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesToTerraform(struct!.sensitiveDataDetectionRules),
  }
}


export function appTypeBusinessLogicMarkupSettingToHclTerraform(struct?: AppTypeBusinessLogicMarkupSettingOutputReference | AppTypeBusinessLogicMarkupSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovered_api_settings: {
      value: appTypeBusinessLogicMarkupSettingDiscoveredApiSettingsToHclTerraform(struct!.discoveredApiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingDiscoveredApiSettingsList",
    },
    sensitive_data_detection_rules: {
      value: appTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesToHclTerraform(struct!.sensitiveDataDetectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppTypeBusinessLogicMarkupSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTypeBusinessLogicMarkupSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
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

  public set internalValue(value: AppTypeBusinessLogicMarkupSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
      this._discoveredApiSettings.internalValue = undefined;
      this._sensitiveDataDetectionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
      this._discoveredApiSettings.internalValue = value.discoveredApiSettings;
      this._sensitiveDataDetectionRules.internalValue = value.sensitiveDataDetectionRules;
    }
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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // discovered_api_settings - computed: false, optional: true, required: false
  private _discoveredApiSettings = new AppTypeBusinessLogicMarkupSettingDiscoveredApiSettingsOutputReference(this, "discovered_api_settings");
  public get discoveredApiSettings() {
    return this._discoveredApiSettings;
  }
  public putDiscoveredApiSettings(value: AppTypeBusinessLogicMarkupSettingDiscoveredApiSettings) {
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
  private _sensitiveDataDetectionRules = new AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRulesOutputReference(this, "sensitive_data_detection_rules");
  public get sensitiveDataDetectionRules() {
    return this._sensitiveDataDetectionRules;
  }
  public putSensitiveDataDetectionRules(value: AppTypeBusinessLogicMarkupSettingSensitiveDataDetectionRules) {
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
export interface AppTypeFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#type AppType#type}
  */
  readonly type: string;
}

export function appTypeFeaturesToTerraform(struct?: AppTypeFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appTypeFeaturesToHclTerraform(struct?: AppTypeFeatures | cdktf.IResolvable): any {
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

export class AppTypeFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppTypeFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppTypeFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class AppTypeFeaturesList extends cdktf.ComplexList {
  public internalValue? : AppTypeFeatures[] | cdktf.IResolvable

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
  public get(index: number): AppTypeFeaturesOutputReference {
    return new AppTypeFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type volterra_app_type}
*/
export class AppType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_app_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppType to import
  * @param importFromId The id of the existing AppType that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_app_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/app_type volterra_app_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppTypeConfig
  */
  public constructor(scope: Construct, id: string, config: AppTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_app_type',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._businessLogicMarkupSetting.internalValue = config.businessLogicMarkupSetting;
    this._features.internalValue = config.features;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // business_logic_markup_setting - computed: false, optional: true, required: false
  private _businessLogicMarkupSetting = new AppTypeBusinessLogicMarkupSettingOutputReference(this, "business_logic_markup_setting");
  public get businessLogicMarkupSetting() {
    return this._businessLogicMarkupSetting;
  }
  public putBusinessLogicMarkupSetting(value: AppTypeBusinessLogicMarkupSetting) {
    this._businessLogicMarkupSetting.internalValue = value;
  }
  public resetBusinessLogicMarkupSetting() {
    this._businessLogicMarkupSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessLogicMarkupSettingInput() {
    return this._businessLogicMarkupSetting.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new AppTypeFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: AppTypeFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      business_logic_markup_setting: appTypeBusinessLogicMarkupSettingToTerraform(this._businessLogicMarkupSetting.internalValue),
      features: cdktf.listMapper(appTypeFeaturesToTerraform, true)(this._features.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      business_logic_markup_setting: {
        value: appTypeBusinessLogicMarkupSettingToHclTerraform(this._businessLogicMarkupSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppTypeBusinessLogicMarkupSettingList",
      },
      features: {
        value: cdktf.listMapperHcl(appTypeFeaturesToHclTerraform, true)(this._features.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppTypeFeaturesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
