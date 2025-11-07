// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#allow_mode_delegation Wafpolicy#allow_mode_delegation}
  */
  readonly allowModeDelegation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#auto_update_crs Wafpolicy#auto_update_crs}
  */
  readonly autoUpdateCrs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#bypass_static_extensions Wafpolicy#bypass_static_extensions}
  */
  readonly bypassStaticExtensions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#created_by Wafpolicy#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#description Wafpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable_app_learning Wafpolicy#enable_app_learning}
  */
  readonly enableAppLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable_auto_rule_updates Wafpolicy#enable_auto_rule_updates}
  */
  readonly enableAutoRuleUpdates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable_regex_learning Wafpolicy#enable_regex_learning}
  */
  readonly enableRegexLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#failure_mode Wafpolicy#failure_mode}
  */
  readonly failureMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#geo_db_ref Wafpolicy#geo_db_ref}
  */
  readonly geoDbRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#id Wafpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#min_confidence Wafpolicy#min_confidence}
  */
  readonly minConfidence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mode Wafpolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#name Wafpolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#paranoia_level Wafpolicy#paranoia_level}
  */
  readonly paranoiaLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#tenant_ref Wafpolicy#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#updated_crs_rules_in_detection_mode Wafpolicy#updated_crs_rules_in_detection_mode}
  */
  readonly updatedCrsRulesInDetectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uuid Wafpolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#waf_crs_ref Wafpolicy#waf_crs_ref}
  */
  readonly wafCrsRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#waf_profile_ref Wafpolicy#waf_profile_ref}
  */
  readonly wafProfileRef: string;
  /**
  * allowlist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#allowlist Wafpolicy#allowlist}
  */
  readonly allowlist?: WafpolicyAllowlistStruct[] | cdktf.IResolvable;
  /**
  * application_signatures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#application_signatures Wafpolicy#application_signatures}
  */
  readonly applicationSignatures?: WafpolicyApplicationSignatures[] | cdktf.IResolvable;
  /**
  * confidence_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#confidence_override Wafpolicy#confidence_override}
  */
  readonly confidenceOverride?: WafpolicyConfidenceOverride[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#configpb_attributes Wafpolicy#configpb_attributes}
  */
  readonly configpbAttributes?: WafpolicyConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * crs_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#crs_overrides Wafpolicy#crs_overrides}
  */
  readonly crsOverrides?: WafpolicyCrsOverrides[] | cdktf.IResolvable;
  /**
  * learning_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#learning_params Wafpolicy#learning_params}
  */
  readonly learningParams?: WafpolicyLearningParams[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#markers Wafpolicy#markers}
  */
  readonly markers?: WafpolicyMarkers[] | cdktf.IResolvable;
  /**
  * positive_security_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#positive_security_model Wafpolicy#positive_security_model}
  */
  readonly positiveSecurityModel?: WafpolicyPositiveSecurityModel[] | cdktf.IResolvable;
  /**
  * post_crs_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#post_crs_groups Wafpolicy#post_crs_groups}
  */
  readonly postCrsGroups?: WafpolicyPostCrsGroups[] | cdktf.IResolvable;
  /**
  * pre_crs_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#pre_crs_groups Wafpolicy#pre_crs_groups}
  */
  readonly preCrsGroups?: WafpolicyPreCrsGroups[] | cdktf.IResolvable;
  /**
  * required_data_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#required_data_files Wafpolicy#required_data_files}
  */
  readonly requiredDataFiles?: WafpolicyRequiredDataFiles[] | cdktf.IResolvable;
}
export interface WafpolicyAllowlistRulesMatchBotDetectionResultClassifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#user_defined_type Wafpolicy#user_defined_type}
  */
  readonly userDefinedType?: string;
}

export function wafpolicyAllowlistRulesMatchBotDetectionResultClassificationsToTerraform(struct?: WafpolicyAllowlistRulesMatchBotDetectionResultClassifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_defined_type: cdktf.stringToTerraform(struct!.userDefinedType),
  }
}


export function wafpolicyAllowlistRulesMatchBotDetectionResultClassificationsToHclTerraform(struct?: WafpolicyAllowlistRulesMatchBotDetectionResultClassifications | cdktf.IResolvable): any {
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
    user_defined_type: {
      value: cdktf.stringToHclTerraform(struct!.userDefinedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchBotDetectionResultClassificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchBotDetectionResultClassifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userDefinedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedType = this._userDefinedType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchBotDetectionResultClassifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._userDefinedType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._userDefinedType = value.userDefinedType;
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

  // user_defined_type - computed: true, optional: true, required: false
  private _userDefinedType?: string; 
  public get userDefinedType() {
    return this.getStringAttribute('user_defined_type');
  }
  public set userDefinedType(value: string) {
    this._userDefinedType = value;
  }
  public resetUserDefinedType() {
    this._userDefinedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedTypeInput() {
    return this._userDefinedType;
  }
}

export class WafpolicyAllowlistRulesMatchBotDetectionResultClassificationsList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchBotDetectionResultClassifications[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchBotDetectionResultClassificationsOutputReference {
    return new WafpolicyAllowlistRulesMatchBotDetectionResultClassificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchBotDetectionResult {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_operation Wafpolicy#match_operation}
  */
  readonly matchOperation: string;
  /**
  * classifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#classifications Wafpolicy#classifications}
  */
  readonly classifications?: WafpolicyAllowlistRulesMatchBotDetectionResultClassifications[] | cdktf.IResolvable;
}

export function wafpolicyAllowlistRulesMatchBotDetectionResultToTerraform(struct?: WafpolicyAllowlistRulesMatchBotDetectionResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    classifications: cdktf.listMapper(wafpolicyAllowlistRulesMatchBotDetectionResultClassificationsToTerraform, true)(struct!.classifications),
  }
}


export function wafpolicyAllowlistRulesMatchBotDetectionResultToHclTerraform(struct?: WafpolicyAllowlistRulesMatchBotDetectionResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classifications: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchBotDetectionResultClassificationsToHclTerraform, true)(struct!.classifications),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyAllowlistRulesMatchBotDetectionResultClassificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchBotDetectionResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchBotDetectionResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._classifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifications = this._classifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchBotDetectionResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchOperation = undefined;
      this._classifications.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchOperation = value.matchOperation;
      this._classifications.internalValue = value.classifications;
    }
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
  }

  // classifications - computed: false, optional: true, required: false
  private _classifications = new WafpolicyAllowlistRulesMatchBotDetectionResultClassificationsList(this, "classifications", false);
  public get classifications() {
    return this._classifications;
  }
  public putClassifications(value: WafpolicyAllowlistRulesMatchBotDetectionResultClassifications[] | cdktf.IResolvable) {
    this._classifications.internalValue = value;
  }
  public resetClassifications() {
    this._classifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsInput() {
    return this._classifications.internalValue;
  }
}

export class WafpolicyAllowlistRulesMatchBotDetectionResultList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchBotDetectionResult[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchBotDetectionResultOutputReference {
    return new WafpolicyAllowlistRulesMatchBotDetectionResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchClientIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyAllowlistRulesMatchClientIpAddrsToTerraform(struct?: WafpolicyAllowlistRulesMatchClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyAllowlistRulesMatchClientIpAddrsToHclTerraform(struct?: WafpolicyAllowlistRulesMatchClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchClientIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchClientIpAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchClientIpAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyAllowlistRulesMatchClientIpAddrsList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchClientIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchClientIpAddrsOutputReference {
    return new WafpolicyAllowlistRulesMatchClientIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyAllowlistRulesMatchClientIpPrefixesIpAddrToTerraform(struct?: WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyAllowlistRulesMatchClientIpPrefixesIpAddrToHclTerraform(struct?: WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddrOutputReference {
    return new WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchClientIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mask Wafpolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ip_addr Wafpolicy#ip_addr}
  */
  readonly ipAddr: WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function wafpolicyAllowlistRulesMatchClientIpPrefixesToTerraform(struct?: WafpolicyAllowlistRulesMatchClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(wafpolicyAllowlistRulesMatchClientIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function wafpolicyAllowlistRulesMatchClientIpPrefixesToHclTerraform(struct?: WafpolicyAllowlistRulesMatchClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchClientIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchClientIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchClientIpPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchClientIpPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: WafpolicyAllowlistRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class WafpolicyAllowlistRulesMatchClientIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchClientIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchClientIpPrefixesOutputReference {
    return new WafpolicyAllowlistRulesMatchClientIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchClientIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyAllowlistRulesMatchClientIpRangesBeginToTerraform(struct?: WafpolicyAllowlistRulesMatchClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyAllowlistRulesMatchClientIpRangesBeginToHclTerraform(struct?: WafpolicyAllowlistRulesMatchClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchClientIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchClientIpRangesBegin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchClientIpRangesBegin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyAllowlistRulesMatchClientIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchClientIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchClientIpRangesBeginOutputReference {
    return new WafpolicyAllowlistRulesMatchClientIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchClientIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyAllowlistRulesMatchClientIpRangesEndToTerraform(struct?: WafpolicyAllowlistRulesMatchClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyAllowlistRulesMatchClientIpRangesEndToHclTerraform(struct?: WafpolicyAllowlistRulesMatchClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchClientIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchClientIpRangesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchClientIpRangesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyAllowlistRulesMatchClientIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchClientIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchClientIpRangesEndOutputReference {
    return new WafpolicyAllowlistRulesMatchClientIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchClientIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#begin Wafpolicy#begin}
  */
  readonly begin: WafpolicyAllowlistRulesMatchClientIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#end Wafpolicy#end}
  */
  readonly end: WafpolicyAllowlistRulesMatchClientIpRangesEnd[] | cdktf.IResolvable;
}

export function wafpolicyAllowlistRulesMatchClientIpRangesToTerraform(struct?: WafpolicyAllowlistRulesMatchClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(wafpolicyAllowlistRulesMatchClientIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(wafpolicyAllowlistRulesMatchClientIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function wafpolicyAllowlistRulesMatchClientIpRangesToHclTerraform(struct?: WafpolicyAllowlistRulesMatchClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchClientIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchClientIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchClientIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchClientIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchClientIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchClientIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchClientIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new WafpolicyAllowlistRulesMatchClientIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: WafpolicyAllowlistRulesMatchClientIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new WafpolicyAllowlistRulesMatchClientIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: WafpolicyAllowlistRulesMatchClientIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class WafpolicyAllowlistRulesMatchClientIpRangesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchClientIpRanges[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchClientIpRangesOutputReference {
    return new WafpolicyAllowlistRulesMatchClientIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchClientIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#group_refs Wafpolicy#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_criteria Wafpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addrs Wafpolicy#addrs}
  */
  readonly addrs?: WafpolicyAllowlistRulesMatchClientIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#prefixes Wafpolicy#prefixes}
  */
  readonly prefixes?: WafpolicyAllowlistRulesMatchClientIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ranges Wafpolicy#ranges}
  */
  readonly ranges?: WafpolicyAllowlistRulesMatchClientIpRanges[] | cdktf.IResolvable;
}

export function wafpolicyAllowlistRulesMatchClientIpToTerraform(struct?: WafpolicyAllowlistRulesMatchClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(wafpolicyAllowlistRulesMatchClientIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(wafpolicyAllowlistRulesMatchClientIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(wafpolicyAllowlistRulesMatchClientIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function wafpolicyAllowlistRulesMatchClientIpToHclTerraform(struct?: WafpolicyAllowlistRulesMatchClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchClientIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyAllowlistRulesMatchClientIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchClientIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyAllowlistRulesMatchClientIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchClientIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyAllowlistRulesMatchClientIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchClientIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchClientIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchClientIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs = new WafpolicyAllowlistRulesMatchClientIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: WafpolicyAllowlistRulesMatchClientIpAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new WafpolicyAllowlistRulesMatchClientIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: WafpolicyAllowlistRulesMatchClientIpPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new WafpolicyAllowlistRulesMatchClientIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: WafpolicyAllowlistRulesMatchClientIpRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class WafpolicyAllowlistRulesMatchClientIpList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchClientIp[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchClientIpOutputReference {
    return new WafpolicyAllowlistRulesMatchClientIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_criteria Wafpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#name Wafpolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#value Wafpolicy#value}
  */
  readonly value?: string;
}

export function wafpolicyAllowlistRulesMatchCookieToTerraform(struct?: WafpolicyAllowlistRulesMatchCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafpolicyAllowlistRulesMatchCookieToHclTerraform(struct?: WafpolicyAllowlistRulesMatchCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
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

export class WafpolicyAllowlistRulesMatchCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
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

  public set internalValue(value: WafpolicyAllowlistRulesMatchCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
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
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
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

  // value - computed: true, optional: true, required: false
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

export class WafpolicyAllowlistRulesMatchCookieList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchCookie[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchCookieOutputReference {
    return new WafpolicyAllowlistRulesMatchCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchGeoMatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#attribute Wafpolicy#attribute}
  */
  readonly attribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_operation Wafpolicy#match_operation}
  */
  readonly matchOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#values Wafpolicy#values}
  */
  readonly values: string[];
}

export function wafpolicyAllowlistRulesMatchGeoMatchesToTerraform(struct?: WafpolicyAllowlistRulesMatchGeoMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function wafpolicyAllowlistRulesMatchGeoMatchesToHclTerraform(struct?: WafpolicyAllowlistRulesMatchGeoMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
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

export class WafpolicyAllowlistRulesMatchGeoMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchGeoMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchGeoMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._matchOperation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._matchOperation = value.matchOperation;
      this._values = value.values;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class WafpolicyAllowlistRulesMatchGeoMatchesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchGeoMatches[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchGeoMatchesOutputReference {
    return new WafpolicyAllowlistRulesMatchGeoMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchHdrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#hdr Wafpolicy#hdr}
  */
  readonly hdr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_criteria Wafpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#string_group_refs Wafpolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#value Wafpolicy#value}
  */
  readonly value?: string[];
}

export function wafpolicyAllowlistRulesMatchHdrsToTerraform(struct?: WafpolicyAllowlistRulesMatchHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hdr: cdktf.stringToTerraform(struct!.hdr),
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function wafpolicyAllowlistRulesMatchHdrsToHclTerraform(struct?: WafpolicyAllowlistRulesMatchHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hdr: {
      value: cdktf.stringToHclTerraform(struct!.hdr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchHdrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchHdrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdr = this._hdr;
    }
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchHdrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hdr = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._stringGroupRefs = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hdr = value.hdr;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._stringGroupRefs = value.stringGroupRefs;
      this._value = value.value;
    }
  }

  // hdr - computed: false, optional: false, required: true
  private _hdr?: string; 
  public get hdr() {
    return this.getStringAttribute('hdr');
  }
  public set hdr(value: string) {
    this._hdr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrInput() {
    return this._hdr;
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class WafpolicyAllowlistRulesMatchHdrsList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchHdrs[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchHdrsOutputReference {
    return new WafpolicyAllowlistRulesMatchHdrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchHostHdr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_criteria Wafpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#value Wafpolicy#value}
  */
  readonly value?: string[];
}

export function wafpolicyAllowlistRulesMatchHostHdrToTerraform(struct?: WafpolicyAllowlistRulesMatchHostHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function wafpolicyAllowlistRulesMatchHostHdrToHclTerraform(struct?: WafpolicyAllowlistRulesMatchHostHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchHostHdrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchHostHdr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchHostHdr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._value = value.value;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class WafpolicyAllowlistRulesMatchHostHdrList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchHostHdr[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchHostHdrOutputReference {
    return new WafpolicyAllowlistRulesMatchHostHdrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchIpReputationType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_operation Wafpolicy#match_operation}
  */
  readonly matchOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#reputation_types Wafpolicy#reputation_types}
  */
  readonly reputationTypes: string[];
}

export function wafpolicyAllowlistRulesMatchIpReputationTypeToTerraform(struct?: WafpolicyAllowlistRulesMatchIpReputationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    reputation_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reputationTypes),
  }
}


export function wafpolicyAllowlistRulesMatchIpReputationTypeToHclTerraform(struct?: WafpolicyAllowlistRulesMatchIpReputationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reputation_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reputationTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchIpReputationTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchIpReputationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._reputationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.reputationTypes = this._reputationTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchIpReputationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchOperation = undefined;
      this._reputationTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchOperation = value.matchOperation;
      this._reputationTypes = value.reputationTypes;
    }
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
  }

  // reputation_types - computed: false, optional: false, required: true
  private _reputationTypes?: string[]; 
  public get reputationTypes() {
    return this.getListAttribute('reputation_types');
  }
  public set reputationTypes(value: string[]) {
    this._reputationTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationTypesInput() {
    return this._reputationTypes;
  }
}

export class WafpolicyAllowlistRulesMatchIpReputationTypeList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchIpReputationType[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchIpReputationTypeOutputReference {
    return new WafpolicyAllowlistRulesMatchIpReputationTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_criteria Wafpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#methods Wafpolicy#methods}
  */
  readonly methods: string[];
}

export function wafpolicyAllowlistRulesMatchMethodToTerraform(struct?: WafpolicyAllowlistRulesMatchMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function wafpolicyAllowlistRulesMatchMethodToHclTerraform(struct?: WafpolicyAllowlistRulesMatchMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
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

export class WafpolicyAllowlistRulesMatchMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._methods = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._methods = value.methods;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
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

export class WafpolicyAllowlistRulesMatchMethodList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchMethod[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchMethodOutputReference {
    return new WafpolicyAllowlistRulesMatchMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_criteria Wafpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_decoded_string Wafpolicy#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_str Wafpolicy#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#string_group_refs Wafpolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function wafpolicyAllowlistRulesMatchPathToTerraform(struct?: WafpolicyAllowlistRulesMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_decoded_string: cdktf.stringToTerraform(struct!.matchDecodedString),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function wafpolicyAllowlistRulesMatchPathToHclTerraform(struct?: WafpolicyAllowlistRulesMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_decoded_string: {
      value: cdktf.stringToHclTerraform(struct!.matchDecodedString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchDecodedString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDecodedString = this._matchDecodedString;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._matchDecodedString = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._matchDecodedString = value.matchDecodedString;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_decoded_string - computed: false, optional: true, required: false
  private _matchDecodedString?: string; 
  public get matchDecodedString() {
    return this.getStringAttribute('match_decoded_string');
  }
  public set matchDecodedString(value: string) {
    this._matchDecodedString = value;
  }
  public resetMatchDecodedString() {
    this._matchDecodedString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDecodedStringInput() {
    return this._matchDecodedString;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class WafpolicyAllowlistRulesMatchPathList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchPath[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchPathOutputReference {
    return new WafpolicyAllowlistRulesMatchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_criteria Wafpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#protocols Wafpolicy#protocols}
  */
  readonly protocols: string;
}

export function wafpolicyAllowlistRulesMatchProtocolToTerraform(struct?: WafpolicyAllowlistRulesMatchProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    protocols: cdktf.stringToTerraform(struct!.protocols),
  }
}


export function wafpolicyAllowlistRulesMatchProtocolToHclTerraform(struct?: WafpolicyAllowlistRulesMatchProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.stringToHclTerraform(struct!.protocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._protocols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._protocols = value.protocols;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string; 
  public get protocols() {
    return this.getStringAttribute('protocols');
  }
  public set protocols(value: string) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }
}

export class WafpolicyAllowlistRulesMatchProtocolList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchProtocol[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchProtocolOutputReference {
    return new WafpolicyAllowlistRulesMatchProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_criteria Wafpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_decoded_string Wafpolicy#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_str Wafpolicy#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#string_group_refs Wafpolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function wafpolicyAllowlistRulesMatchQueryToTerraform(struct?: WafpolicyAllowlistRulesMatchQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_decoded_string: cdktf.stringToTerraform(struct!.matchDecodedString),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function wafpolicyAllowlistRulesMatchQueryToHclTerraform(struct?: WafpolicyAllowlistRulesMatchQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_decoded_string: {
      value: cdktf.stringToHclTerraform(struct!.matchDecodedString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchDecodedString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDecodedString = this._matchDecodedString;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._matchDecodedString = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._matchDecodedString = value.matchDecodedString;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_decoded_string - computed: false, optional: true, required: false
  private _matchDecodedString?: string; 
  public get matchDecodedString() {
    return this.getStringAttribute('match_decoded_string');
  }
  public set matchDecodedString(value: string) {
    this._matchDecodedString = value;
  }
  public resetMatchDecodedString() {
    this._matchDecodedString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDecodedStringInput() {
    return this._matchDecodedString;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class WafpolicyAllowlistRulesMatchQueryList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchQuery[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchQueryOutputReference {
    return new WafpolicyAllowlistRulesMatchQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchSourceIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyAllowlistRulesMatchSourceIpAddrsToTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyAllowlistRulesMatchSourceIpAddrsToHclTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchSourceIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchSourceIpAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchSourceIpAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyAllowlistRulesMatchSourceIpAddrsList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchSourceIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchSourceIpAddrsOutputReference {
    return new WafpolicyAllowlistRulesMatchSourceIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddrToTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddrToHclTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddrOutputReference {
    return new WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchSourceIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mask Wafpolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ip_addr Wafpolicy#ip_addr}
  */
  readonly ipAddr: WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function wafpolicyAllowlistRulesMatchSourceIpPrefixesToTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(wafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function wafpolicyAllowlistRulesMatchSourceIpPrefixesToHclTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchSourceIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchSourceIpPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchSourceIpPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: WafpolicyAllowlistRulesMatchSourceIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class WafpolicyAllowlistRulesMatchSourceIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchSourceIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchSourceIpPrefixesOutputReference {
    return new WafpolicyAllowlistRulesMatchSourceIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchSourceIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyAllowlistRulesMatchSourceIpRangesBeginToTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyAllowlistRulesMatchSourceIpRangesBeginToHclTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchSourceIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchSourceIpRangesBegin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchSourceIpRangesBegin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyAllowlistRulesMatchSourceIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchSourceIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchSourceIpRangesBeginOutputReference {
    return new WafpolicyAllowlistRulesMatchSourceIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchSourceIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyAllowlistRulesMatchSourceIpRangesEndToTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyAllowlistRulesMatchSourceIpRangesEndToHclTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchSourceIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchSourceIpRangesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchSourceIpRangesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyAllowlistRulesMatchSourceIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchSourceIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchSourceIpRangesEndOutputReference {
    return new WafpolicyAllowlistRulesMatchSourceIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchSourceIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#begin Wafpolicy#begin}
  */
  readonly begin: WafpolicyAllowlistRulesMatchSourceIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#end Wafpolicy#end}
  */
  readonly end: WafpolicyAllowlistRulesMatchSourceIpRangesEnd[] | cdktf.IResolvable;
}

export function wafpolicyAllowlistRulesMatchSourceIpRangesToTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(wafpolicyAllowlistRulesMatchSourceIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(wafpolicyAllowlistRulesMatchSourceIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function wafpolicyAllowlistRulesMatchSourceIpRangesToHclTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchSourceIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchSourceIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchSourceIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchSourceIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchSourceIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchSourceIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchSourceIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new WafpolicyAllowlistRulesMatchSourceIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: WafpolicyAllowlistRulesMatchSourceIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new WafpolicyAllowlistRulesMatchSourceIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: WafpolicyAllowlistRulesMatchSourceIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class WafpolicyAllowlistRulesMatchSourceIpRangesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchSourceIpRanges[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchSourceIpRangesOutputReference {
    return new WafpolicyAllowlistRulesMatchSourceIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchSourceIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#group_refs Wafpolicy#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_criteria Wafpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addrs Wafpolicy#addrs}
  */
  readonly addrs?: WafpolicyAllowlistRulesMatchSourceIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#prefixes Wafpolicy#prefixes}
  */
  readonly prefixes?: WafpolicyAllowlistRulesMatchSourceIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ranges Wafpolicy#ranges}
  */
  readonly ranges?: WafpolicyAllowlistRulesMatchSourceIpRanges[] | cdktf.IResolvable;
}

export function wafpolicyAllowlistRulesMatchSourceIpToTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(wafpolicyAllowlistRulesMatchSourceIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(wafpolicyAllowlistRulesMatchSourceIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(wafpolicyAllowlistRulesMatchSourceIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function wafpolicyAllowlistRulesMatchSourceIpToHclTerraform(struct?: WafpolicyAllowlistRulesMatchSourceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchSourceIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyAllowlistRulesMatchSourceIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchSourceIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyAllowlistRulesMatchSourceIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchSourceIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyAllowlistRulesMatchSourceIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchSourceIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchSourceIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs = new WafpolicyAllowlistRulesMatchSourceIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: WafpolicyAllowlistRulesMatchSourceIpAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new WafpolicyAllowlistRulesMatchSourceIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: WafpolicyAllowlistRulesMatchSourceIpPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new WafpolicyAllowlistRulesMatchSourceIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: WafpolicyAllowlistRulesMatchSourceIpRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class WafpolicyAllowlistRulesMatchSourceIpList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchSourceIp[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchSourceIpOutputReference {
    return new WafpolicyAllowlistRulesMatchSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchTlsFingerprintMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#fingerprints Wafpolicy#fingerprints}
  */
  readonly fingerprints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_operation Wafpolicy#match_operation}
  */
  readonly matchOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#string_group_refs Wafpolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function wafpolicyAllowlistRulesMatchTlsFingerprintMatchToTerraform(struct?: WafpolicyAllowlistRulesMatchTlsFingerprintMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fingerprints),
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function wafpolicyAllowlistRulesMatchTlsFingerprintMatchToHclTerraform(struct?: WafpolicyAllowlistRulesMatchTlsFingerprintMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fingerprints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchTlsFingerprintMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchTlsFingerprintMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprints !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprints = this._fingerprints;
    }
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchTlsFingerprintMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fingerprints = undefined;
      this._matchOperation = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fingerprints = value.fingerprints;
      this._matchOperation = value.matchOperation;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // fingerprints - computed: false, optional: true, required: false
  private _fingerprints?: string[]; 
  public get fingerprints() {
    return this.getListAttribute('fingerprints');
  }
  public set fingerprints(value: string[]) {
    this._fingerprints = value;
  }
  public resetFingerprints() {
    this._fingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintsInput() {
    return this._fingerprints;
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class WafpolicyAllowlistRulesMatchTlsFingerprintMatchList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchTlsFingerprintMatch[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchTlsFingerprintMatchOutputReference {
    return new WafpolicyAllowlistRulesMatchTlsFingerprintMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_criteria Wafpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#versions Wafpolicy#versions}
  */
  readonly versions: string[];
}

export function wafpolicyAllowlistRulesMatchVersionToTerraform(struct?: WafpolicyAllowlistRulesMatchVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function wafpolicyAllowlistRulesMatchVersionToHclTerraform(struct?: WafpolicyAllowlistRulesMatchVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._versions = value.versions;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // versions - computed: false, optional: false, required: true
  private _versions?: string[]; 
  public get versions() {
    return this.getListAttribute('versions');
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}

export class WafpolicyAllowlistRulesMatchVersionList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchVersion[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchVersionOutputReference {
    return new WafpolicyAllowlistRulesMatchVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatchVsPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_criteria Wafpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ports Wafpolicy#ports}
  */
  readonly ports: number[];
}

export function wafpolicyAllowlistRulesMatchVsPortToTerraform(struct?: WafpolicyAllowlistRulesMatchVsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function wafpolicyAllowlistRulesMatchVsPortToHclTerraform(struct?: WafpolicyAllowlistRulesMatchVsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchVsPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatchVsPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatchVsPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._ports = value.ports;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class WafpolicyAllowlistRulesMatchVsPortList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatchVsPort[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchVsPortOutputReference {
    return new WafpolicyAllowlistRulesMatchVsPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRulesMatch {
  /**
  * bot_detection_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#bot_detection_result Wafpolicy#bot_detection_result}
  */
  readonly botDetectionResult?: WafpolicyAllowlistRulesMatchBotDetectionResult[] | cdktf.IResolvable;
  /**
  * client_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#client_ip Wafpolicy#client_ip}
  */
  readonly clientIp?: WafpolicyAllowlistRulesMatchClientIp[] | cdktf.IResolvable;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#cookie Wafpolicy#cookie}
  */
  readonly cookie?: WafpolicyAllowlistRulesMatchCookie[] | cdktf.IResolvable;
  /**
  * geo_matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#geo_matches Wafpolicy#geo_matches}
  */
  readonly geoMatches?: WafpolicyAllowlistRulesMatchGeoMatches[] | cdktf.IResolvable;
  /**
  * hdrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#hdrs Wafpolicy#hdrs}
  */
  readonly hdrs?: WafpolicyAllowlistRulesMatchHdrs[] | cdktf.IResolvable;
  /**
  * host_hdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#host_hdr Wafpolicy#host_hdr}
  */
  readonly hostHdr?: WafpolicyAllowlistRulesMatchHostHdr[] | cdktf.IResolvable;
  /**
  * ip_reputation_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ip_reputation_type Wafpolicy#ip_reputation_type}
  */
  readonly ipReputationType?: WafpolicyAllowlistRulesMatchIpReputationType[] | cdktf.IResolvable;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#method Wafpolicy#method}
  */
  readonly method?: WafpolicyAllowlistRulesMatchMethod[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#path Wafpolicy#path}
  */
  readonly path?: WafpolicyAllowlistRulesMatchPath[] | cdktf.IResolvable;
  /**
  * protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#protocol Wafpolicy#protocol}
  */
  readonly protocol?: WafpolicyAllowlistRulesMatchProtocol[] | cdktf.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#query Wafpolicy#query}
  */
  readonly query?: WafpolicyAllowlistRulesMatchQuery[] | cdktf.IResolvable;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#source_ip Wafpolicy#source_ip}
  */
  readonly sourceIp?: WafpolicyAllowlistRulesMatchSourceIp[] | cdktf.IResolvable;
  /**
  * tls_fingerprint_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#tls_fingerprint_match Wafpolicy#tls_fingerprint_match}
  */
  readonly tlsFingerprintMatch?: WafpolicyAllowlistRulesMatchTlsFingerprintMatch[] | cdktf.IResolvable;
  /**
  * version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#version Wafpolicy#version}
  */
  readonly version?: WafpolicyAllowlistRulesMatchVersion[] | cdktf.IResolvable;
  /**
  * vs_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#vs_port Wafpolicy#vs_port}
  */
  readonly vsPort?: WafpolicyAllowlistRulesMatchVsPort[] | cdktf.IResolvable;
}

export function wafpolicyAllowlistRulesMatchToTerraform(struct?: WafpolicyAllowlistRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bot_detection_result: cdktf.listMapper(wafpolicyAllowlistRulesMatchBotDetectionResultToTerraform, true)(struct!.botDetectionResult),
    client_ip: cdktf.listMapper(wafpolicyAllowlistRulesMatchClientIpToTerraform, true)(struct!.clientIp),
    cookie: cdktf.listMapper(wafpolicyAllowlistRulesMatchCookieToTerraform, true)(struct!.cookie),
    geo_matches: cdktf.listMapper(wafpolicyAllowlistRulesMatchGeoMatchesToTerraform, true)(struct!.geoMatches),
    hdrs: cdktf.listMapper(wafpolicyAllowlistRulesMatchHdrsToTerraform, true)(struct!.hdrs),
    host_hdr: cdktf.listMapper(wafpolicyAllowlistRulesMatchHostHdrToTerraform, true)(struct!.hostHdr),
    ip_reputation_type: cdktf.listMapper(wafpolicyAllowlistRulesMatchIpReputationTypeToTerraform, true)(struct!.ipReputationType),
    method: cdktf.listMapper(wafpolicyAllowlistRulesMatchMethodToTerraform, true)(struct!.method),
    path: cdktf.listMapper(wafpolicyAllowlistRulesMatchPathToTerraform, true)(struct!.path),
    protocol: cdktf.listMapper(wafpolicyAllowlistRulesMatchProtocolToTerraform, true)(struct!.protocol),
    query: cdktf.listMapper(wafpolicyAllowlistRulesMatchQueryToTerraform, true)(struct!.query),
    source_ip: cdktf.listMapper(wafpolicyAllowlistRulesMatchSourceIpToTerraform, true)(struct!.sourceIp),
    tls_fingerprint_match: cdktf.listMapper(wafpolicyAllowlistRulesMatchTlsFingerprintMatchToTerraform, true)(struct!.tlsFingerprintMatch),
    version: cdktf.listMapper(wafpolicyAllowlistRulesMatchVersionToTerraform, true)(struct!.version),
    vs_port: cdktf.listMapper(wafpolicyAllowlistRulesMatchVsPortToTerraform, true)(struct!.vsPort),
  }
}


export function wafpolicyAllowlistRulesMatchToHclTerraform(struct?: WafpolicyAllowlistRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bot_detection_result: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchBotDetectionResultToHclTerraform, true)(struct!.botDetectionResult),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchBotDetectionResultList",
    },
    client_ip: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchClientIpToHclTerraform, true)(struct!.clientIp),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchClientIpList",
    },
    cookie: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchCookieToHclTerraform, true)(struct!.cookie),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchCookieList",
    },
    geo_matches: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchGeoMatchesToHclTerraform, true)(struct!.geoMatches),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyAllowlistRulesMatchGeoMatchesList",
    },
    hdrs: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchHdrsToHclTerraform, true)(struct!.hdrs),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyAllowlistRulesMatchHdrsList",
    },
    host_hdr: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchHostHdrToHclTerraform, true)(struct!.hostHdr),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchHostHdrList",
    },
    ip_reputation_type: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchIpReputationTypeToHclTerraform, true)(struct!.ipReputationType),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchIpReputationTypeList",
    },
    method: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchMethodToHclTerraform, true)(struct!.method),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchMethodList",
    },
    path: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchPathList",
    },
    protocol: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchProtocolToHclTerraform, true)(struct!.protocol),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchProtocolList",
    },
    query: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchQueryList",
    },
    source_ip: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchSourceIpToHclTerraform, true)(struct!.sourceIp),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchSourceIpList",
    },
    tls_fingerprint_match: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchTlsFingerprintMatchToHclTerraform, true)(struct!.tlsFingerprintMatch),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchTlsFingerprintMatchList",
    },
    version: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchVersionToHclTerraform, true)(struct!.version),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchVersionList",
    },
    vs_port: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchVsPortToHclTerraform, true)(struct!.vsPort),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchVsPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRulesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botDetectionResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botDetectionResult = this._botDetectionResult?.internalValue;
    }
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._geoMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoMatches = this._geoMatches?.internalValue;
    }
    if (this._hdrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrs = this._hdrs?.internalValue;
    }
    if (this._hostHdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHdr = this._hostHdr?.internalValue;
    }
    if (this._ipReputationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReputationType = this._ipReputationType?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    if (this._tlsFingerprintMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatch = this._tlsFingerprintMatch?.internalValue;
    }
    if (this._version?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version?.internalValue;
    }
    if (this._vsPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsPort = this._vsPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRulesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botDetectionResult.internalValue = undefined;
      this._clientIp.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._geoMatches.internalValue = undefined;
      this._hdrs.internalValue = undefined;
      this._hostHdr.internalValue = undefined;
      this._ipReputationType.internalValue = undefined;
      this._method.internalValue = undefined;
      this._path.internalValue = undefined;
      this._protocol.internalValue = undefined;
      this._query.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
      this._tlsFingerprintMatch.internalValue = undefined;
      this._version.internalValue = undefined;
      this._vsPort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botDetectionResult.internalValue = value.botDetectionResult;
      this._clientIp.internalValue = value.clientIp;
      this._cookie.internalValue = value.cookie;
      this._geoMatches.internalValue = value.geoMatches;
      this._hdrs.internalValue = value.hdrs;
      this._hostHdr.internalValue = value.hostHdr;
      this._ipReputationType.internalValue = value.ipReputationType;
      this._method.internalValue = value.method;
      this._path.internalValue = value.path;
      this._protocol.internalValue = value.protocol;
      this._query.internalValue = value.query;
      this._sourceIp.internalValue = value.sourceIp;
      this._tlsFingerprintMatch.internalValue = value.tlsFingerprintMatch;
      this._version.internalValue = value.version;
      this._vsPort.internalValue = value.vsPort;
    }
  }

  // bot_detection_result - computed: false, optional: true, required: false
  private _botDetectionResult = new WafpolicyAllowlistRulesMatchBotDetectionResultList(this, "bot_detection_result", true);
  public get botDetectionResult() {
    return this._botDetectionResult;
  }
  public putBotDetectionResult(value: WafpolicyAllowlistRulesMatchBotDetectionResult[] | cdktf.IResolvable) {
    this._botDetectionResult.internalValue = value;
  }
  public resetBotDetectionResult() {
    this._botDetectionResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDetectionResultInput() {
    return this._botDetectionResult.internalValue;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new WafpolicyAllowlistRulesMatchClientIpList(this, "client_ip", true);
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: WafpolicyAllowlistRulesMatchClientIp[] | cdktf.IResolvable) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new WafpolicyAllowlistRulesMatchCookieList(this, "cookie", true);
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: WafpolicyAllowlistRulesMatchCookie[] | cdktf.IResolvable) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // geo_matches - computed: false, optional: true, required: false
  private _geoMatches = new WafpolicyAllowlistRulesMatchGeoMatchesList(this, "geo_matches", false);
  public get geoMatches() {
    return this._geoMatches;
  }
  public putGeoMatches(value: WafpolicyAllowlistRulesMatchGeoMatches[] | cdktf.IResolvable) {
    this._geoMatches.internalValue = value;
  }
  public resetGeoMatches() {
    this._geoMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMatchesInput() {
    return this._geoMatches.internalValue;
  }

  // hdrs - computed: false, optional: true, required: false
  private _hdrs = new WafpolicyAllowlistRulesMatchHdrsList(this, "hdrs", false);
  public get hdrs() {
    return this._hdrs;
  }
  public putHdrs(value: WafpolicyAllowlistRulesMatchHdrs[] | cdktf.IResolvable) {
    this._hdrs.internalValue = value;
  }
  public resetHdrs() {
    this._hdrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrsInput() {
    return this._hdrs.internalValue;
  }

  // host_hdr - computed: false, optional: true, required: false
  private _hostHdr = new WafpolicyAllowlistRulesMatchHostHdrList(this, "host_hdr", true);
  public get hostHdr() {
    return this._hostHdr;
  }
  public putHostHdr(value: WafpolicyAllowlistRulesMatchHostHdr[] | cdktf.IResolvable) {
    this._hostHdr.internalValue = value;
  }
  public resetHostHdr() {
    this._hostHdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHdrInput() {
    return this._hostHdr.internalValue;
  }

  // ip_reputation_type - computed: false, optional: true, required: false
  private _ipReputationType = new WafpolicyAllowlistRulesMatchIpReputationTypeList(this, "ip_reputation_type", true);
  public get ipReputationType() {
    return this._ipReputationType;
  }
  public putIpReputationType(value: WafpolicyAllowlistRulesMatchIpReputationType[] | cdktf.IResolvable) {
    this._ipReputationType.internalValue = value;
  }
  public resetIpReputationType() {
    this._ipReputationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationTypeInput() {
    return this._ipReputationType.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new WafpolicyAllowlistRulesMatchMethodList(this, "method", true);
  public get method() {
    return this._method;
  }
  public putMethod(value: WafpolicyAllowlistRulesMatchMethod[] | cdktf.IResolvable) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new WafpolicyAllowlistRulesMatchPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: WafpolicyAllowlistRulesMatchPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new WafpolicyAllowlistRulesMatchProtocolList(this, "protocol", true);
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: WafpolicyAllowlistRulesMatchProtocol[] | cdktf.IResolvable) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new WafpolicyAllowlistRulesMatchQueryList(this, "query", true);
  public get query() {
    return this._query;
  }
  public putQuery(value: WafpolicyAllowlistRulesMatchQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new WafpolicyAllowlistRulesMatchSourceIpList(this, "source_ip", true);
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: WafpolicyAllowlistRulesMatchSourceIp[] | cdktf.IResolvable) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
  }

  // tls_fingerprint_match - computed: false, optional: true, required: false
  private _tlsFingerprintMatch = new WafpolicyAllowlistRulesMatchTlsFingerprintMatchList(this, "tls_fingerprint_match", true);
  public get tlsFingerprintMatch() {
    return this._tlsFingerprintMatch;
  }
  public putTlsFingerprintMatch(value: WafpolicyAllowlistRulesMatchTlsFingerprintMatch[] | cdktf.IResolvable) {
    this._tlsFingerprintMatch.internalValue = value;
  }
  public resetTlsFingerprintMatch() {
    this._tlsFingerprintMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatchInput() {
    return this._tlsFingerprintMatch.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version = new WafpolicyAllowlistRulesMatchVersionList(this, "version", true);
  public get version() {
    return this._version;
  }
  public putVersion(value: WafpolicyAllowlistRulesMatchVersion[] | cdktf.IResolvable) {
    this._version.internalValue = value;
  }
  public resetVersion() {
    this._version.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }

  // vs_port - computed: false, optional: true, required: false
  private _vsPort = new WafpolicyAllowlistRulesMatchVsPortList(this, "vs_port", true);
  public get vsPort() {
    return this._vsPort;
  }
  public putVsPort(value: WafpolicyAllowlistRulesMatchVsPort[] | cdktf.IResolvable) {
    this._vsPort.internalValue = value;
  }
  public resetVsPort() {
    this._vsPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsPortInput() {
    return this._vsPort.internalValue;
  }
}

export class WafpolicyAllowlistRulesMatchList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRulesMatch[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesMatchOutputReference {
    return new WafpolicyAllowlistRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#actions Wafpolicy#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#description Wafpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable Wafpolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#index Wafpolicy#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#name Wafpolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#sampling_percent Wafpolicy#sampling_percent}
  */
  readonly samplingPercent?: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match Wafpolicy#match}
  */
  readonly match: WafpolicyAllowlistRulesMatch[] | cdktf.IResolvable;
}

export function wafpolicyAllowlistRulesToTerraform(struct?: WafpolicyAllowlistRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    description: cdktf.stringToTerraform(struct!.description),
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    sampling_percent: cdktf.stringToTerraform(struct!.samplingPercent),
    match: cdktf.listMapper(wafpolicyAllowlistRulesMatchToTerraform, true)(struct!.match),
  }
}


export function wafpolicyAllowlistRulesToHclTerraform(struct?: WafpolicyAllowlistRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
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
    sampling_percent: {
      value: cdktf.stringToHclTerraform(struct!.samplingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyAllowlistRulesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._samplingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingPercent = this._samplingPercent;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._description = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._name = undefined;
      this._samplingPercent = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._description = value.description;
      this._enable = value.enable;
      this._index = value.index;
      this._name = value.name;
      this._samplingPercent = value.samplingPercent;
      this._match.internalValue = value.match;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // description - computed: true, optional: true, required: false
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

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // sampling_percent - computed: false, optional: true, required: false
  private _samplingPercent?: string; 
  public get samplingPercent() {
    return this.getStringAttribute('sampling_percent');
  }
  public set samplingPercent(value: string) {
    this._samplingPercent = value;
  }
  public resetSamplingPercent() {
    this._samplingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentInput() {
    return this._samplingPercent;
  }

  // match - computed: false, optional: false, required: true
  private _match = new WafpolicyAllowlistRulesMatchList(this, "match", true);
  public get match() {
    return this._match;
  }
  public putMatch(value: WafpolicyAllowlistRulesMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class WafpolicyAllowlistRulesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistRules[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistRulesOutputReference {
    return new WafpolicyAllowlistRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyAllowlistStruct {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rules Wafpolicy#rules}
  */
  readonly rules?: WafpolicyAllowlistRules[] | cdktf.IResolvable;
}

export function wafpolicyAllowlistStructToTerraform(struct?: WafpolicyAllowlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(wafpolicyAllowlistRulesToTerraform, true)(struct!.rules),
  }
}


export function wafpolicyAllowlistStructToHclTerraform(struct?: WafpolicyAllowlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(wafpolicyAllowlistRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyAllowlistRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyAllowlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyAllowlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyAllowlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new WafpolicyAllowlistRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WafpolicyAllowlistRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class WafpolicyAllowlistStructList extends cdktf.ComplexList {
  public internalValue? : WafpolicyAllowlistStruct[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyAllowlistStructOutputReference {
    return new WafpolicyAllowlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddrToTerraform(struct?: WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddrToHclTerraform(struct?: WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddrOutputReference {
    return new WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mask Wafpolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ip_addr Wafpolicy#ip_addr}
  */
  readonly ipAddr: WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable;
}

export function wafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetToTerraform(struct?: WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(wafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function wafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetToHclTerraform(struct?: WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnet[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetOutputReference {
    return new WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteriaToTerraform(struct?: WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteriaToHclTerraform(struct?: WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteriaOutputReference {
    return new WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteriaToTerraform(struct?: WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteriaToHclTerraform(struct?: WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteriaOutputReference {
    return new WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignaturesResolvedRulesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#description Wafpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element Wafpolicy#match_element}
  */
  readonly matchElement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_path Wafpolicy#uri_path}
  */
  readonly uriPath?: string;
  /**
  * client_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#client_subnet Wafpolicy#client_subnet}
  */
  readonly clientSubnet?: WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnet[] | cdktf.IResolvable;
  /**
  * match_element_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element_criteria Wafpolicy#match_element_criteria}
  */
  readonly matchElementCriteria?: WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteria[] | cdktf.IResolvable;
  /**
  * uri_match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_match_criteria Wafpolicy#uri_match_criteria}
  */
  readonly uriMatchCriteria?: WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteria[] | cdktf.IResolvable;
}

export function wafpolicyApplicationSignaturesResolvedRulesExcludeListStructToTerraform(struct?: WafpolicyApplicationSignaturesResolvedRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    match_element: cdktf.stringToTerraform(struct!.matchElement),
    uri_path: cdktf.stringToTerraform(struct!.uriPath),
    client_subnet: cdktf.listMapper(wafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetToTerraform, true)(struct!.clientSubnet),
    match_element_criteria: cdktf.listMapper(wafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteriaToTerraform, true)(struct!.matchElementCriteria),
    uri_match_criteria: cdktf.listMapper(wafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteriaToTerraform, true)(struct!.uriMatchCriteria),
  }
}


export function wafpolicyApplicationSignaturesResolvedRulesExcludeListStructToHclTerraform(struct?: WafpolicyApplicationSignaturesResolvedRulesExcludeListStruct | cdktf.IResolvable): any {
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
    match_element: {
      value: cdktf.stringToHclTerraform(struct!.matchElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_path: {
      value: cdktf.stringToHclTerraform(struct!.uriPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnet: {
      value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetToHclTerraform, true)(struct!.clientSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetList",
    },
    match_element_criteria: {
      value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteriaToHclTerraform, true)(struct!.matchElementCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteriaList",
    },
    uri_match_criteria: {
      value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteriaToHclTerraform, true)(struct!.uriMatchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesResolvedRulesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignaturesResolvedRulesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElement = this._matchElement;
    }
    if (this._uriPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath;
    }
    if (this._clientSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnet = this._clientSubnet?.internalValue;
    }
    if (this._matchElementCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElementCriteria = this._matchElementCriteria?.internalValue;
    }
    if (this._uriMatchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriMatchCriteria = this._uriMatchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignaturesResolvedRulesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._matchElement = undefined;
      this._uriPath = undefined;
      this._clientSubnet.internalValue = undefined;
      this._matchElementCriteria.internalValue = undefined;
      this._uriMatchCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._matchElement = value.matchElement;
      this._uriPath = value.uriPath;
      this._clientSubnet.internalValue = value.clientSubnet;
      this._matchElementCriteria.internalValue = value.matchElementCriteria;
      this._uriMatchCriteria.internalValue = value.uriMatchCriteria;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // match_element - computed: true, optional: true, required: false
  private _matchElement?: string; 
  public get matchElement() {
    return this.getStringAttribute('match_element');
  }
  public set matchElement(value: string) {
    this._matchElement = value;
  }
  public resetMatchElement() {
    this._matchElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementInput() {
    return this._matchElement;
  }

  // uri_path - computed: true, optional: true, required: false
  private _uriPath?: string; 
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
  public set uriPath(value: string) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath;
  }

  // client_subnet - computed: false, optional: true, required: false
  private _clientSubnet = new WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnetList(this, "client_subnet", true);
  public get clientSubnet() {
    return this._clientSubnet;
  }
  public putClientSubnet(value: WafpolicyApplicationSignaturesResolvedRulesExcludeListClientSubnet[] | cdktf.IResolvable) {
    this._clientSubnet.internalValue = value;
  }
  public resetClientSubnet() {
    this._clientSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetInput() {
    return this._clientSubnet.internalValue;
  }

  // match_element_criteria - computed: false, optional: true, required: false
  private _matchElementCriteria = new WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteriaList(this, "match_element_criteria", true);
  public get matchElementCriteria() {
    return this._matchElementCriteria;
  }
  public putMatchElementCriteria(value: WafpolicyApplicationSignaturesResolvedRulesExcludeListMatchElementCriteria[] | cdktf.IResolvable) {
    this._matchElementCriteria.internalValue = value;
  }
  public resetMatchElementCriteria() {
    this._matchElementCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementCriteriaInput() {
    return this._matchElementCriteria.internalValue;
  }

  // uri_match_criteria - computed: false, optional: true, required: false
  private _uriMatchCriteria = new WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteriaList(this, "uri_match_criteria", true);
  public get uriMatchCriteria() {
    return this._uriMatchCriteria;
  }
  public putUriMatchCriteria(value: WafpolicyApplicationSignaturesResolvedRulesExcludeListUriMatchCriteria[] | cdktf.IResolvable) {
    this._uriMatchCriteria.internalValue = value;
  }
  public resetUriMatchCriteria() {
    this._uriMatchCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriMatchCriteriaInput() {
    return this._uriMatchCriteria.internalValue;
  }
}

export class WafpolicyApplicationSignaturesResolvedRulesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignaturesResolvedRulesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesResolvedRulesExcludeListStructOutputReference {
    return new WafpolicyApplicationSignaturesResolvedRulesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignaturesResolvedRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable Wafpolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#index Wafpolicy#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#is_sensitive Wafpolicy#is_sensitive}
  */
  readonly isSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mode Wafpolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#name Wafpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#paranoia_level Wafpolicy#paranoia_level}
  */
  readonly paranoiaLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#phase Wafpolicy#phase}
  */
  readonly phase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rule Wafpolicy#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rule_id Wafpolicy#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#tags Wafpolicy#tags}
  */
  readonly tags?: string[];
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#exclude_list Wafpolicy#exclude_list}
  */
  readonly excludeList?: WafpolicyApplicationSignaturesResolvedRulesExcludeListStruct[] | cdktf.IResolvable;
}

export function wafpolicyApplicationSignaturesResolvedRulesToTerraform(struct?: WafpolicyApplicationSignaturesResolvedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    is_sensitive: cdktf.stringToTerraform(struct!.isSensitive),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    paranoia_level: cdktf.stringToTerraform(struct!.paranoiaLevel),
    phase: cdktf.stringToTerraform(struct!.phase),
    rule: cdktf.stringToTerraform(struct!.rule),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    exclude_list: cdktf.listMapper(wafpolicyApplicationSignaturesResolvedRulesExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function wafpolicyApplicationSignaturesResolvedRulesToHclTerraform(struct?: WafpolicyApplicationSignaturesResolvedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.isSensitive),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paranoia_level: {
      value: cdktf.stringToHclTerraform(struct!.paranoiaLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesResolvedRulesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyApplicationSignaturesResolvedRulesExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesResolvedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignaturesResolvedRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._isSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSensitive = this._isSensitive;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._paranoiaLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.paranoiaLevel = this._paranoiaLevel;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignaturesResolvedRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._isSensitive = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._paranoiaLevel = undefined;
      this._phase = undefined;
      this._rule = undefined;
      this._ruleId = undefined;
      this._tags = undefined;
      this._excludeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._index = value.index;
      this._isSensitive = value.isSensitive;
      this._mode = value.mode;
      this._name = value.name;
      this._paranoiaLevel = value.paranoiaLevel;
      this._phase = value.phase;
      this._rule = value.rule;
      this._ruleId = value.ruleId;
      this._tags = value.tags;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: string; 
  public get isSensitive() {
    return this.getStringAttribute('is_sensitive');
  }
  public set isSensitive(value: string) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: true, required: false
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

  // paranoia_level - computed: true, optional: true, required: false
  private _paranoiaLevel?: string; 
  public get paranoiaLevel() {
    return this.getStringAttribute('paranoia_level');
  }
  public set paranoiaLevel(value: string) {
    this._paranoiaLevel = value;
  }
  public resetParanoiaLevel() {
    this._paranoiaLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paranoiaLevelInput() {
    return this._paranoiaLevel;
  }

  // phase - computed: true, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_id - computed: true, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new WafpolicyApplicationSignaturesResolvedRulesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: WafpolicyApplicationSignaturesResolvedRulesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}

export class WafpolicyApplicationSignaturesResolvedRulesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignaturesResolvedRules[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesResolvedRulesOutputReference {
    return new WafpolicyApplicationSignaturesResolvedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddrToTerraform(struct?: WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddrToHclTerraform(struct?: WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddrOutputReference {
    return new WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mask Wafpolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ip_addr Wafpolicy#ip_addr}
  */
  readonly ipAddr: WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable;
}

export function wafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetToTerraform(struct?: WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(wafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function wafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetToHclTerraform(struct?: WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnet[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetOutputReference {
    return new WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteriaToTerraform(struct?: WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteriaToHclTerraform(struct?: WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteriaOutputReference {
    return new WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteriaToTerraform(struct?: WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteriaToHclTerraform(struct?: WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteriaOutputReference {
    return new WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignaturesRuleOverridesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#description Wafpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element Wafpolicy#match_element}
  */
  readonly matchElement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_path Wafpolicy#uri_path}
  */
  readonly uriPath?: string;
  /**
  * client_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#client_subnet Wafpolicy#client_subnet}
  */
  readonly clientSubnet?: WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnet[] | cdktf.IResolvable;
  /**
  * match_element_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element_criteria Wafpolicy#match_element_criteria}
  */
  readonly matchElementCriteria?: WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteria[] | cdktf.IResolvable;
  /**
  * uri_match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_match_criteria Wafpolicy#uri_match_criteria}
  */
  readonly uriMatchCriteria?: WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteria[] | cdktf.IResolvable;
}

export function wafpolicyApplicationSignaturesRuleOverridesExcludeListStructToTerraform(struct?: WafpolicyApplicationSignaturesRuleOverridesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    match_element: cdktf.stringToTerraform(struct!.matchElement),
    uri_path: cdktf.stringToTerraform(struct!.uriPath),
    client_subnet: cdktf.listMapper(wafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetToTerraform, true)(struct!.clientSubnet),
    match_element_criteria: cdktf.listMapper(wafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteriaToTerraform, true)(struct!.matchElementCriteria),
    uri_match_criteria: cdktf.listMapper(wafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteriaToTerraform, true)(struct!.uriMatchCriteria),
  }
}


export function wafpolicyApplicationSignaturesRuleOverridesExcludeListStructToHclTerraform(struct?: WafpolicyApplicationSignaturesRuleOverridesExcludeListStruct | cdktf.IResolvable): any {
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
    match_element: {
      value: cdktf.stringToHclTerraform(struct!.matchElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_path: {
      value: cdktf.stringToHclTerraform(struct!.uriPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnet: {
      value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetToHclTerraform, true)(struct!.clientSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetList",
    },
    match_element_criteria: {
      value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteriaToHclTerraform, true)(struct!.matchElementCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteriaList",
    },
    uri_match_criteria: {
      value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteriaToHclTerraform, true)(struct!.uriMatchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesRuleOverridesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignaturesRuleOverridesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElement = this._matchElement;
    }
    if (this._uriPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath;
    }
    if (this._clientSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnet = this._clientSubnet?.internalValue;
    }
    if (this._matchElementCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElementCriteria = this._matchElementCriteria?.internalValue;
    }
    if (this._uriMatchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriMatchCriteria = this._uriMatchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignaturesRuleOverridesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._matchElement = undefined;
      this._uriPath = undefined;
      this._clientSubnet.internalValue = undefined;
      this._matchElementCriteria.internalValue = undefined;
      this._uriMatchCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._matchElement = value.matchElement;
      this._uriPath = value.uriPath;
      this._clientSubnet.internalValue = value.clientSubnet;
      this._matchElementCriteria.internalValue = value.matchElementCriteria;
      this._uriMatchCriteria.internalValue = value.uriMatchCriteria;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // match_element - computed: true, optional: true, required: false
  private _matchElement?: string; 
  public get matchElement() {
    return this.getStringAttribute('match_element');
  }
  public set matchElement(value: string) {
    this._matchElement = value;
  }
  public resetMatchElement() {
    this._matchElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementInput() {
    return this._matchElement;
  }

  // uri_path - computed: true, optional: true, required: false
  private _uriPath?: string; 
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
  public set uriPath(value: string) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath;
  }

  // client_subnet - computed: false, optional: true, required: false
  private _clientSubnet = new WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnetList(this, "client_subnet", true);
  public get clientSubnet() {
    return this._clientSubnet;
  }
  public putClientSubnet(value: WafpolicyApplicationSignaturesRuleOverridesExcludeListClientSubnet[] | cdktf.IResolvable) {
    this._clientSubnet.internalValue = value;
  }
  public resetClientSubnet() {
    this._clientSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetInput() {
    return this._clientSubnet.internalValue;
  }

  // match_element_criteria - computed: false, optional: true, required: false
  private _matchElementCriteria = new WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteriaList(this, "match_element_criteria", true);
  public get matchElementCriteria() {
    return this._matchElementCriteria;
  }
  public putMatchElementCriteria(value: WafpolicyApplicationSignaturesRuleOverridesExcludeListMatchElementCriteria[] | cdktf.IResolvable) {
    this._matchElementCriteria.internalValue = value;
  }
  public resetMatchElementCriteria() {
    this._matchElementCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementCriteriaInput() {
    return this._matchElementCriteria.internalValue;
  }

  // uri_match_criteria - computed: false, optional: true, required: false
  private _uriMatchCriteria = new WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteriaList(this, "uri_match_criteria", true);
  public get uriMatchCriteria() {
    return this._uriMatchCriteria;
  }
  public putUriMatchCriteria(value: WafpolicyApplicationSignaturesRuleOverridesExcludeListUriMatchCriteria[] | cdktf.IResolvable) {
    this._uriMatchCriteria.internalValue = value;
  }
  public resetUriMatchCriteria() {
    this._uriMatchCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriMatchCriteriaInput() {
    return this._uriMatchCriteria.internalValue;
  }
}

export class WafpolicyApplicationSignaturesRuleOverridesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignaturesRuleOverridesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesRuleOverridesExcludeListStructOutputReference {
    return new WafpolicyApplicationSignaturesRuleOverridesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignaturesRuleOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable Wafpolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mode Wafpolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rule_id Wafpolicy#rule_id}
  */
  readonly ruleId: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#exclude_list Wafpolicy#exclude_list}
  */
  readonly excludeList?: WafpolicyApplicationSignaturesRuleOverridesExcludeListStruct[] | cdktf.IResolvable;
}

export function wafpolicyApplicationSignaturesRuleOverridesToTerraform(struct?: WafpolicyApplicationSignaturesRuleOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    mode: cdktf.stringToTerraform(struct!.mode),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    exclude_list: cdktf.listMapper(wafpolicyApplicationSignaturesRuleOverridesExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function wafpolicyApplicationSignaturesRuleOverridesToHclTerraform(struct?: WafpolicyApplicationSignaturesRuleOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
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
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesRuleOverridesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyApplicationSignaturesRuleOverridesExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesRuleOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignaturesRuleOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignaturesRuleOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._mode = undefined;
      this._ruleId = undefined;
      this._excludeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._mode = value.mode;
      this._ruleId = value.ruleId;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new WafpolicyApplicationSignaturesRuleOverridesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: WafpolicyApplicationSignaturesRuleOverridesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}

export class WafpolicyApplicationSignaturesRuleOverridesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignaturesRuleOverrides[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesRuleOverridesOutputReference {
    return new WafpolicyApplicationSignaturesRuleOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyApplicationSignatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#provider_ref Wafpolicy#provider_ref}
  */
  readonly providerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ruleset_version Wafpolicy#ruleset_version}
  */
  readonly rulesetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#selected_applications Wafpolicy#selected_applications}
  */
  readonly selectedApplications?: string[];
  /**
  * resolved_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#resolved_rules Wafpolicy#resolved_rules}
  */
  readonly resolvedRules?: WafpolicyApplicationSignaturesResolvedRules[] | cdktf.IResolvable;
  /**
  * rule_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rule_overrides Wafpolicy#rule_overrides}
  */
  readonly ruleOverrides?: WafpolicyApplicationSignaturesRuleOverrides[] | cdktf.IResolvable;
}

export function wafpolicyApplicationSignaturesToTerraform(struct?: WafpolicyApplicationSignatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider_ref: cdktf.stringToTerraform(struct!.providerRef),
    ruleset_version: cdktf.stringToTerraform(struct!.rulesetVersion),
    selected_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedApplications),
    resolved_rules: cdktf.listMapper(wafpolicyApplicationSignaturesResolvedRulesToTerraform, true)(struct!.resolvedRules),
    rule_overrides: cdktf.listMapper(wafpolicyApplicationSignaturesRuleOverridesToTerraform, true)(struct!.ruleOverrides),
  }
}


export function wafpolicyApplicationSignaturesToHclTerraform(struct?: WafpolicyApplicationSignatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider_ref: {
      value: cdktf.stringToHclTerraform(struct!.providerRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ruleset_version: {
      value: cdktf.stringToHclTerraform(struct!.rulesetVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectedApplications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resolved_rules: {
      value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesResolvedRulesToHclTerraform, true)(struct!.resolvedRules),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyApplicationSignaturesResolvedRulesList",
    },
    rule_overrides: {
      value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesRuleOverridesToHclTerraform, true)(struct!.ruleOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyApplicationSignaturesRuleOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyApplicationSignaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyApplicationSignatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providerRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerRef = this._providerRef;
    }
    if (this._rulesetVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesetVersion = this._rulesetVersion;
    }
    if (this._selectedApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedApplications = this._selectedApplications;
    }
    if (this._resolvedRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolvedRules = this._resolvedRules?.internalValue;
    }
    if (this._ruleOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOverrides = this._ruleOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyApplicationSignatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._providerRef = undefined;
      this._rulesetVersion = undefined;
      this._selectedApplications = undefined;
      this._resolvedRules.internalValue = undefined;
      this._ruleOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._providerRef = value.providerRef;
      this._rulesetVersion = value.rulesetVersion;
      this._selectedApplications = value.selectedApplications;
      this._resolvedRules.internalValue = value.resolvedRules;
      this._ruleOverrides.internalValue = value.ruleOverrides;
    }
  }

  // provider_ref - computed: true, optional: true, required: false
  private _providerRef?: string; 
  public get providerRef() {
    return this.getStringAttribute('provider_ref');
  }
  public set providerRef(value: string) {
    this._providerRef = value;
  }
  public resetProviderRef() {
    this._providerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerRefInput() {
    return this._providerRef;
  }

  // ruleset_version - computed: true, optional: true, required: false
  private _rulesetVersion?: string; 
  public get rulesetVersion() {
    return this.getStringAttribute('ruleset_version');
  }
  public set rulesetVersion(value: string) {
    this._rulesetVersion = value;
  }
  public resetRulesetVersion() {
    this._rulesetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetVersionInput() {
    return this._rulesetVersion;
  }

  // selected_applications - computed: false, optional: true, required: false
  private _selectedApplications?: string[]; 
  public get selectedApplications() {
    return this.getListAttribute('selected_applications');
  }
  public set selectedApplications(value: string[]) {
    this._selectedApplications = value;
  }
  public resetSelectedApplications() {
    this._selectedApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedApplicationsInput() {
    return this._selectedApplications;
  }

  // resolved_rules - computed: false, optional: true, required: false
  private _resolvedRules = new WafpolicyApplicationSignaturesResolvedRulesList(this, "resolved_rules", false);
  public get resolvedRules() {
    return this._resolvedRules;
  }
  public putResolvedRules(value: WafpolicyApplicationSignaturesResolvedRules[] | cdktf.IResolvable) {
    this._resolvedRules.internalValue = value;
  }
  public resetResolvedRules() {
    this._resolvedRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedRulesInput() {
    return this._resolvedRules.internalValue;
  }

  // rule_overrides - computed: false, optional: true, required: false
  private _ruleOverrides = new WafpolicyApplicationSignaturesRuleOverridesList(this, "rule_overrides", false);
  public get ruleOverrides() {
    return this._ruleOverrides;
  }
  public putRuleOverrides(value: WafpolicyApplicationSignaturesRuleOverrides[] | cdktf.IResolvable) {
    this._ruleOverrides.internalValue = value;
  }
  public resetRuleOverrides() {
    this._ruleOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOverridesInput() {
    return this._ruleOverrides.internalValue;
  }
}

export class WafpolicyApplicationSignaturesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyApplicationSignatures[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyApplicationSignaturesOutputReference {
    return new WafpolicyApplicationSignaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyConfidenceOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#confid_high_value Wafpolicy#confid_high_value}
  */
  readonly confidHighValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#confid_low_value Wafpolicy#confid_low_value}
  */
  readonly confidLowValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#confid_probable_value Wafpolicy#confid_probable_value}
  */
  readonly confidProbableValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#confid_very_high_value Wafpolicy#confid_very_high_value}
  */
  readonly confidVeryHighValue?: string;
}

export function wafpolicyConfidenceOverrideToTerraform(struct?: WafpolicyConfidenceOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confid_high_value: cdktf.stringToTerraform(struct!.confidHighValue),
    confid_low_value: cdktf.stringToTerraform(struct!.confidLowValue),
    confid_probable_value: cdktf.stringToTerraform(struct!.confidProbableValue),
    confid_very_high_value: cdktf.stringToTerraform(struct!.confidVeryHighValue),
  }
}


export function wafpolicyConfidenceOverrideToHclTerraform(struct?: WafpolicyConfidenceOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confid_high_value: {
      value: cdktf.stringToHclTerraform(struct!.confidHighValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confid_low_value: {
      value: cdktf.stringToHclTerraform(struct!.confidLowValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confid_probable_value: {
      value: cdktf.stringToHclTerraform(struct!.confidProbableValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confid_very_high_value: {
      value: cdktf.stringToHclTerraform(struct!.confidVeryHighValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyConfidenceOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyConfidenceOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidHighValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidHighValue = this._confidHighValue;
    }
    if (this._confidLowValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidLowValue = this._confidLowValue;
    }
    if (this._confidProbableValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidProbableValue = this._confidProbableValue;
    }
    if (this._confidVeryHighValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidVeryHighValue = this._confidVeryHighValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyConfidenceOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidHighValue = undefined;
      this._confidLowValue = undefined;
      this._confidProbableValue = undefined;
      this._confidVeryHighValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidHighValue = value.confidHighValue;
      this._confidLowValue = value.confidLowValue;
      this._confidProbableValue = value.confidProbableValue;
      this._confidVeryHighValue = value.confidVeryHighValue;
    }
  }

  // confid_high_value - computed: false, optional: true, required: false
  private _confidHighValue?: string; 
  public get confidHighValue() {
    return this.getStringAttribute('confid_high_value');
  }
  public set confidHighValue(value: string) {
    this._confidHighValue = value;
  }
  public resetConfidHighValue() {
    this._confidHighValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidHighValueInput() {
    return this._confidHighValue;
  }

  // confid_low_value - computed: false, optional: true, required: false
  private _confidLowValue?: string; 
  public get confidLowValue() {
    return this.getStringAttribute('confid_low_value');
  }
  public set confidLowValue(value: string) {
    this._confidLowValue = value;
  }
  public resetConfidLowValue() {
    this._confidLowValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidLowValueInput() {
    return this._confidLowValue;
  }

  // confid_probable_value - computed: false, optional: true, required: false
  private _confidProbableValue?: string; 
  public get confidProbableValue() {
    return this.getStringAttribute('confid_probable_value');
  }
  public set confidProbableValue(value: string) {
    this._confidProbableValue = value;
  }
  public resetConfidProbableValue() {
    this._confidProbableValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidProbableValueInput() {
    return this._confidProbableValue;
  }

  // confid_very_high_value - computed: false, optional: true, required: false
  private _confidVeryHighValue?: string; 
  public get confidVeryHighValue() {
    return this.getStringAttribute('confid_very_high_value');
  }
  public set confidVeryHighValue(value: string) {
    this._confidVeryHighValue = value;
  }
  public resetConfidVeryHighValue() {
    this._confidVeryHighValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidVeryHighValueInput() {
    return this._confidVeryHighValue;
  }
}

export class WafpolicyConfidenceOverrideList extends cdktf.ComplexList {
  public internalValue? : WafpolicyConfidenceOverride[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyConfidenceOverrideOutputReference {
    return new WafpolicyConfidenceOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#version Wafpolicy#version}
  */
  readonly version?: string;
}

export function wafpolicyConfigpbAttributesToTerraform(struct?: WafpolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function wafpolicyConfigpbAttributesToHclTerraform(struct?: WafpolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class WafpolicyConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
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

export class WafpolicyConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyConfigpbAttributesOutputReference {
    return new WafpolicyConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyCrsOverridesExcludeListClientSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyCrsOverridesExcludeListClientSubnetIpAddrToTerraform(struct?: WafpolicyCrsOverridesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyCrsOverridesExcludeListClientSubnetIpAddrToHclTerraform(struct?: WafpolicyCrsOverridesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyCrsOverridesExcludeListClientSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyCrsOverridesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyCrsOverridesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyCrsOverridesExcludeListClientSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : WafpolicyCrsOverridesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyCrsOverridesExcludeListClientSubnetIpAddrOutputReference {
    return new WafpolicyCrsOverridesExcludeListClientSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyCrsOverridesExcludeListClientSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mask Wafpolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ip_addr Wafpolicy#ip_addr}
  */
  readonly ipAddr: WafpolicyCrsOverridesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable;
}

export function wafpolicyCrsOverridesExcludeListClientSubnetToTerraform(struct?: WafpolicyCrsOverridesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(wafpolicyCrsOverridesExcludeListClientSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function wafpolicyCrsOverridesExcludeListClientSubnetToHclTerraform(struct?: WafpolicyCrsOverridesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(wafpolicyCrsOverridesExcludeListClientSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyCrsOverridesExcludeListClientSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyCrsOverridesExcludeListClientSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyCrsOverridesExcludeListClientSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyCrsOverridesExcludeListClientSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new WafpolicyCrsOverridesExcludeListClientSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: WafpolicyCrsOverridesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class WafpolicyCrsOverridesExcludeListClientSubnetList extends cdktf.ComplexList {
  public internalValue? : WafpolicyCrsOverridesExcludeListClientSubnet[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyCrsOverridesExcludeListClientSubnetOutputReference {
    return new WafpolicyCrsOverridesExcludeListClientSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyCrsOverridesExcludeListMatchElementCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyCrsOverridesExcludeListMatchElementCriteriaToTerraform(struct?: WafpolicyCrsOverridesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyCrsOverridesExcludeListMatchElementCriteriaToHclTerraform(struct?: WafpolicyCrsOverridesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyCrsOverridesExcludeListMatchElementCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyCrsOverridesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyCrsOverridesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyCrsOverridesExcludeListMatchElementCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyCrsOverridesExcludeListMatchElementCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyCrsOverridesExcludeListMatchElementCriteriaOutputReference {
    return new WafpolicyCrsOverridesExcludeListMatchElementCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyCrsOverridesExcludeListUriMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyCrsOverridesExcludeListUriMatchCriteriaToTerraform(struct?: WafpolicyCrsOverridesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyCrsOverridesExcludeListUriMatchCriteriaToHclTerraform(struct?: WafpolicyCrsOverridesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyCrsOverridesExcludeListUriMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyCrsOverridesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyCrsOverridesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyCrsOverridesExcludeListUriMatchCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyCrsOverridesExcludeListUriMatchCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyCrsOverridesExcludeListUriMatchCriteriaOutputReference {
    return new WafpolicyCrsOverridesExcludeListUriMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyCrsOverridesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#description Wafpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element Wafpolicy#match_element}
  */
  readonly matchElement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_path Wafpolicy#uri_path}
  */
  readonly uriPath?: string;
  /**
  * client_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#client_subnet Wafpolicy#client_subnet}
  */
  readonly clientSubnet?: WafpolicyCrsOverridesExcludeListClientSubnet[] | cdktf.IResolvable;
  /**
  * match_element_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element_criteria Wafpolicy#match_element_criteria}
  */
  readonly matchElementCriteria?: WafpolicyCrsOverridesExcludeListMatchElementCriteria[] | cdktf.IResolvable;
  /**
  * uri_match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_match_criteria Wafpolicy#uri_match_criteria}
  */
  readonly uriMatchCriteria?: WafpolicyCrsOverridesExcludeListUriMatchCriteria[] | cdktf.IResolvable;
}

export function wafpolicyCrsOverridesExcludeListStructToTerraform(struct?: WafpolicyCrsOverridesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    match_element: cdktf.stringToTerraform(struct!.matchElement),
    uri_path: cdktf.stringToTerraform(struct!.uriPath),
    client_subnet: cdktf.listMapper(wafpolicyCrsOverridesExcludeListClientSubnetToTerraform, true)(struct!.clientSubnet),
    match_element_criteria: cdktf.listMapper(wafpolicyCrsOverridesExcludeListMatchElementCriteriaToTerraform, true)(struct!.matchElementCriteria),
    uri_match_criteria: cdktf.listMapper(wafpolicyCrsOverridesExcludeListUriMatchCriteriaToTerraform, true)(struct!.uriMatchCriteria),
  }
}


export function wafpolicyCrsOverridesExcludeListStructToHclTerraform(struct?: WafpolicyCrsOverridesExcludeListStruct | cdktf.IResolvable): any {
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
    match_element: {
      value: cdktf.stringToHclTerraform(struct!.matchElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_path: {
      value: cdktf.stringToHclTerraform(struct!.uriPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnet: {
      value: cdktf.listMapperHcl(wafpolicyCrsOverridesExcludeListClientSubnetToHclTerraform, true)(struct!.clientSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyCrsOverridesExcludeListClientSubnetList",
    },
    match_element_criteria: {
      value: cdktf.listMapperHcl(wafpolicyCrsOverridesExcludeListMatchElementCriteriaToHclTerraform, true)(struct!.matchElementCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyCrsOverridesExcludeListMatchElementCriteriaList",
    },
    uri_match_criteria: {
      value: cdktf.listMapperHcl(wafpolicyCrsOverridesExcludeListUriMatchCriteriaToHclTerraform, true)(struct!.uriMatchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyCrsOverridesExcludeListUriMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyCrsOverridesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyCrsOverridesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElement = this._matchElement;
    }
    if (this._uriPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath;
    }
    if (this._clientSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnet = this._clientSubnet?.internalValue;
    }
    if (this._matchElementCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElementCriteria = this._matchElementCriteria?.internalValue;
    }
    if (this._uriMatchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriMatchCriteria = this._uriMatchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyCrsOverridesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._matchElement = undefined;
      this._uriPath = undefined;
      this._clientSubnet.internalValue = undefined;
      this._matchElementCriteria.internalValue = undefined;
      this._uriMatchCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._matchElement = value.matchElement;
      this._uriPath = value.uriPath;
      this._clientSubnet.internalValue = value.clientSubnet;
      this._matchElementCriteria.internalValue = value.matchElementCriteria;
      this._uriMatchCriteria.internalValue = value.uriMatchCriteria;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // match_element - computed: true, optional: true, required: false
  private _matchElement?: string; 
  public get matchElement() {
    return this.getStringAttribute('match_element');
  }
  public set matchElement(value: string) {
    this._matchElement = value;
  }
  public resetMatchElement() {
    this._matchElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementInput() {
    return this._matchElement;
  }

  // uri_path - computed: true, optional: true, required: false
  private _uriPath?: string; 
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
  public set uriPath(value: string) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath;
  }

  // client_subnet - computed: false, optional: true, required: false
  private _clientSubnet = new WafpolicyCrsOverridesExcludeListClientSubnetList(this, "client_subnet", true);
  public get clientSubnet() {
    return this._clientSubnet;
  }
  public putClientSubnet(value: WafpolicyCrsOverridesExcludeListClientSubnet[] | cdktf.IResolvable) {
    this._clientSubnet.internalValue = value;
  }
  public resetClientSubnet() {
    this._clientSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetInput() {
    return this._clientSubnet.internalValue;
  }

  // match_element_criteria - computed: false, optional: true, required: false
  private _matchElementCriteria = new WafpolicyCrsOverridesExcludeListMatchElementCriteriaList(this, "match_element_criteria", true);
  public get matchElementCriteria() {
    return this._matchElementCriteria;
  }
  public putMatchElementCriteria(value: WafpolicyCrsOverridesExcludeListMatchElementCriteria[] | cdktf.IResolvable) {
    this._matchElementCriteria.internalValue = value;
  }
  public resetMatchElementCriteria() {
    this._matchElementCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementCriteriaInput() {
    return this._matchElementCriteria.internalValue;
  }

  // uri_match_criteria - computed: false, optional: true, required: false
  private _uriMatchCriteria = new WafpolicyCrsOverridesExcludeListUriMatchCriteriaList(this, "uri_match_criteria", true);
  public get uriMatchCriteria() {
    return this._uriMatchCriteria;
  }
  public putUriMatchCriteria(value: WafpolicyCrsOverridesExcludeListUriMatchCriteria[] | cdktf.IResolvable) {
    this._uriMatchCriteria.internalValue = value;
  }
  public resetUriMatchCriteria() {
    this._uriMatchCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriMatchCriteriaInput() {
    return this._uriMatchCriteria.internalValue;
  }
}

export class WafpolicyCrsOverridesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : WafpolicyCrsOverridesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyCrsOverridesExcludeListStructOutputReference {
    return new WafpolicyCrsOverridesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddrToTerraform(struct?: WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddrToHclTerraform(struct?: WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddrOutputReference {
    return new WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mask Wafpolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ip_addr Wafpolicy#ip_addr}
  */
  readonly ipAddr: WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable;
}

export function wafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetToTerraform(struct?: WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(wafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function wafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetToHclTerraform(struct?: WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(wafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetList extends cdktf.ComplexList {
  public internalValue? : WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnet[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetOutputReference {
    return new WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteriaToTerraform(struct?: WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteriaToHclTerraform(struct?: WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteriaOutputReference {
    return new WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteriaToTerraform(struct?: WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteriaToHclTerraform(struct?: WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteriaOutputReference {
    return new WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyCrsOverridesRuleOverridesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#description Wafpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element Wafpolicy#match_element}
  */
  readonly matchElement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_path Wafpolicy#uri_path}
  */
  readonly uriPath?: string;
  /**
  * client_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#client_subnet Wafpolicy#client_subnet}
  */
  readonly clientSubnet?: WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnet[] | cdktf.IResolvable;
  /**
  * match_element_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element_criteria Wafpolicy#match_element_criteria}
  */
  readonly matchElementCriteria?: WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteria[] | cdktf.IResolvable;
  /**
  * uri_match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_match_criteria Wafpolicy#uri_match_criteria}
  */
  readonly uriMatchCriteria?: WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteria[] | cdktf.IResolvable;
}

export function wafpolicyCrsOverridesRuleOverridesExcludeListStructToTerraform(struct?: WafpolicyCrsOverridesRuleOverridesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    match_element: cdktf.stringToTerraform(struct!.matchElement),
    uri_path: cdktf.stringToTerraform(struct!.uriPath),
    client_subnet: cdktf.listMapper(wafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetToTerraform, true)(struct!.clientSubnet),
    match_element_criteria: cdktf.listMapper(wafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteriaToTerraform, true)(struct!.matchElementCriteria),
    uri_match_criteria: cdktf.listMapper(wafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteriaToTerraform, true)(struct!.uriMatchCriteria),
  }
}


export function wafpolicyCrsOverridesRuleOverridesExcludeListStructToHclTerraform(struct?: WafpolicyCrsOverridesRuleOverridesExcludeListStruct | cdktf.IResolvable): any {
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
    match_element: {
      value: cdktf.stringToHclTerraform(struct!.matchElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_path: {
      value: cdktf.stringToHclTerraform(struct!.uriPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnet: {
      value: cdktf.listMapperHcl(wafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetToHclTerraform, true)(struct!.clientSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetList",
    },
    match_element_criteria: {
      value: cdktf.listMapperHcl(wafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteriaToHclTerraform, true)(struct!.matchElementCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteriaList",
    },
    uri_match_criteria: {
      value: cdktf.listMapperHcl(wafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteriaToHclTerraform, true)(struct!.uriMatchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyCrsOverridesRuleOverridesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyCrsOverridesRuleOverridesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElement = this._matchElement;
    }
    if (this._uriPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath;
    }
    if (this._clientSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnet = this._clientSubnet?.internalValue;
    }
    if (this._matchElementCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElementCriteria = this._matchElementCriteria?.internalValue;
    }
    if (this._uriMatchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriMatchCriteria = this._uriMatchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyCrsOverridesRuleOverridesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._matchElement = undefined;
      this._uriPath = undefined;
      this._clientSubnet.internalValue = undefined;
      this._matchElementCriteria.internalValue = undefined;
      this._uriMatchCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._matchElement = value.matchElement;
      this._uriPath = value.uriPath;
      this._clientSubnet.internalValue = value.clientSubnet;
      this._matchElementCriteria.internalValue = value.matchElementCriteria;
      this._uriMatchCriteria.internalValue = value.uriMatchCriteria;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // match_element - computed: true, optional: true, required: false
  private _matchElement?: string; 
  public get matchElement() {
    return this.getStringAttribute('match_element');
  }
  public set matchElement(value: string) {
    this._matchElement = value;
  }
  public resetMatchElement() {
    this._matchElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementInput() {
    return this._matchElement;
  }

  // uri_path - computed: true, optional: true, required: false
  private _uriPath?: string; 
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
  public set uriPath(value: string) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath;
  }

  // client_subnet - computed: false, optional: true, required: false
  private _clientSubnet = new WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnetList(this, "client_subnet", true);
  public get clientSubnet() {
    return this._clientSubnet;
  }
  public putClientSubnet(value: WafpolicyCrsOverridesRuleOverridesExcludeListClientSubnet[] | cdktf.IResolvable) {
    this._clientSubnet.internalValue = value;
  }
  public resetClientSubnet() {
    this._clientSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetInput() {
    return this._clientSubnet.internalValue;
  }

  // match_element_criteria - computed: false, optional: true, required: false
  private _matchElementCriteria = new WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteriaList(this, "match_element_criteria", true);
  public get matchElementCriteria() {
    return this._matchElementCriteria;
  }
  public putMatchElementCriteria(value: WafpolicyCrsOverridesRuleOverridesExcludeListMatchElementCriteria[] | cdktf.IResolvable) {
    this._matchElementCriteria.internalValue = value;
  }
  public resetMatchElementCriteria() {
    this._matchElementCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementCriteriaInput() {
    return this._matchElementCriteria.internalValue;
  }

  // uri_match_criteria - computed: false, optional: true, required: false
  private _uriMatchCriteria = new WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteriaList(this, "uri_match_criteria", true);
  public get uriMatchCriteria() {
    return this._uriMatchCriteria;
  }
  public putUriMatchCriteria(value: WafpolicyCrsOverridesRuleOverridesExcludeListUriMatchCriteria[] | cdktf.IResolvable) {
    this._uriMatchCriteria.internalValue = value;
  }
  public resetUriMatchCriteria() {
    this._uriMatchCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriMatchCriteriaInput() {
    return this._uriMatchCriteria.internalValue;
  }
}

export class WafpolicyCrsOverridesRuleOverridesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : WafpolicyCrsOverridesRuleOverridesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyCrsOverridesRuleOverridesExcludeListStructOutputReference {
    return new WafpolicyCrsOverridesRuleOverridesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyCrsOverridesRuleOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable Wafpolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mode Wafpolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rule_id Wafpolicy#rule_id}
  */
  readonly ruleId: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#exclude_list Wafpolicy#exclude_list}
  */
  readonly excludeList?: WafpolicyCrsOverridesRuleOverridesExcludeListStruct[] | cdktf.IResolvable;
}

export function wafpolicyCrsOverridesRuleOverridesToTerraform(struct?: WafpolicyCrsOverridesRuleOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    mode: cdktf.stringToTerraform(struct!.mode),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    exclude_list: cdktf.listMapper(wafpolicyCrsOverridesRuleOverridesExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function wafpolicyCrsOverridesRuleOverridesToHclTerraform(struct?: WafpolicyCrsOverridesRuleOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
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
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(wafpolicyCrsOverridesRuleOverridesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyCrsOverridesRuleOverridesExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyCrsOverridesRuleOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyCrsOverridesRuleOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyCrsOverridesRuleOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._mode = undefined;
      this._ruleId = undefined;
      this._excludeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._mode = value.mode;
      this._ruleId = value.ruleId;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new WafpolicyCrsOverridesRuleOverridesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: WafpolicyCrsOverridesRuleOverridesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}

export class WafpolicyCrsOverridesRuleOverridesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyCrsOverridesRuleOverrides[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyCrsOverridesRuleOverridesOutputReference {
    return new WafpolicyCrsOverridesRuleOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyCrsOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable Wafpolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mode Wafpolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#name Wafpolicy#name}
  */
  readonly name: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#exclude_list Wafpolicy#exclude_list}
  */
  readonly excludeList?: WafpolicyCrsOverridesExcludeListStruct[] | cdktf.IResolvable;
  /**
  * rule_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rule_overrides Wafpolicy#rule_overrides}
  */
  readonly ruleOverrides?: WafpolicyCrsOverridesRuleOverrides[] | cdktf.IResolvable;
}

export function wafpolicyCrsOverridesToTerraform(struct?: WafpolicyCrsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    exclude_list: cdktf.listMapper(wafpolicyCrsOverridesExcludeListStructToTerraform, true)(struct!.excludeList),
    rule_overrides: cdktf.listMapper(wafpolicyCrsOverridesRuleOverridesToTerraform, true)(struct!.ruleOverrides),
  }
}


export function wafpolicyCrsOverridesToHclTerraform(struct?: WafpolicyCrsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(wafpolicyCrsOverridesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyCrsOverridesExcludeListStructList",
    },
    rule_overrides: {
      value: cdktf.listMapperHcl(wafpolicyCrsOverridesRuleOverridesToHclTerraform, true)(struct!.ruleOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyCrsOverridesRuleOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyCrsOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyCrsOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    if (this._ruleOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOverrides = this._ruleOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyCrsOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._excludeList.internalValue = undefined;
      this._ruleOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._mode = value.mode;
      this._name = value.name;
      this._excludeList.internalValue = value.excludeList;
      this._ruleOverrides.internalValue = value.ruleOverrides;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new WafpolicyCrsOverridesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: WafpolicyCrsOverridesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }

  // rule_overrides - computed: false, optional: true, required: false
  private _ruleOverrides = new WafpolicyCrsOverridesRuleOverridesList(this, "rule_overrides", false);
  public get ruleOverrides() {
    return this._ruleOverrides;
  }
  public putRuleOverrides(value: WafpolicyCrsOverridesRuleOverrides[] | cdktf.IResolvable) {
    this._ruleOverrides.internalValue = value;
  }
  public resetRuleOverrides() {
    this._ruleOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOverridesInput() {
    return this._ruleOverrides.internalValue;
  }
}

export class WafpolicyCrsOverridesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyCrsOverrides[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyCrsOverridesOutputReference {
    return new WafpolicyCrsOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyLearningParamsLearnFromBotsClassifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#user_defined_type Wafpolicy#user_defined_type}
  */
  readonly userDefinedType?: string;
}

export function wafpolicyLearningParamsLearnFromBotsClassificationsToTerraform(struct?: WafpolicyLearningParamsLearnFromBotsClassifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_defined_type: cdktf.stringToTerraform(struct!.userDefinedType),
  }
}


export function wafpolicyLearningParamsLearnFromBotsClassificationsToHclTerraform(struct?: WafpolicyLearningParamsLearnFromBotsClassifications | cdktf.IResolvable): any {
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
    user_defined_type: {
      value: cdktf.stringToHclTerraform(struct!.userDefinedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyLearningParamsLearnFromBotsClassificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyLearningParamsLearnFromBotsClassifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userDefinedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedType = this._userDefinedType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyLearningParamsLearnFromBotsClassifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._userDefinedType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._userDefinedType = value.userDefinedType;
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

  // user_defined_type - computed: true, optional: true, required: false
  private _userDefinedType?: string; 
  public get userDefinedType() {
    return this.getStringAttribute('user_defined_type');
  }
  public set userDefinedType(value: string) {
    this._userDefinedType = value;
  }
  public resetUserDefinedType() {
    this._userDefinedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedTypeInput() {
    return this._userDefinedType;
  }
}

export class WafpolicyLearningParamsLearnFromBotsClassificationsList extends cdktf.ComplexList {
  public internalValue? : WafpolicyLearningParamsLearnFromBotsClassifications[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyLearningParamsLearnFromBotsClassificationsOutputReference {
    return new WafpolicyLearningParamsLearnFromBotsClassificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyLearningParamsLearnFromBots {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_operation Wafpolicy#match_operation}
  */
  readonly matchOperation: string;
  /**
  * classifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#classifications Wafpolicy#classifications}
  */
  readonly classifications?: WafpolicyLearningParamsLearnFromBotsClassifications[] | cdktf.IResolvable;
}

export function wafpolicyLearningParamsLearnFromBotsToTerraform(struct?: WafpolicyLearningParamsLearnFromBots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    classifications: cdktf.listMapper(wafpolicyLearningParamsLearnFromBotsClassificationsToTerraform, true)(struct!.classifications),
  }
}


export function wafpolicyLearningParamsLearnFromBotsToHclTerraform(struct?: WafpolicyLearningParamsLearnFromBots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classifications: {
      value: cdktf.listMapperHcl(wafpolicyLearningParamsLearnFromBotsClassificationsToHclTerraform, true)(struct!.classifications),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyLearningParamsLearnFromBotsClassificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyLearningParamsLearnFromBotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyLearningParamsLearnFromBots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._classifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifications = this._classifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyLearningParamsLearnFromBots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchOperation = undefined;
      this._classifications.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchOperation = value.matchOperation;
      this._classifications.internalValue = value.classifications;
    }
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
  }

  // classifications - computed: false, optional: true, required: false
  private _classifications = new WafpolicyLearningParamsLearnFromBotsClassificationsList(this, "classifications", false);
  public get classifications() {
    return this._classifications;
  }
  public putClassifications(value: WafpolicyLearningParamsLearnFromBotsClassifications[] | cdktf.IResolvable) {
    this._classifications.internalValue = value;
  }
  public resetClassifications() {
    this._classifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsInput() {
    return this._classifications.internalValue;
  }
}

export class WafpolicyLearningParamsLearnFromBotsList extends cdktf.ComplexList {
  public internalValue? : WafpolicyLearningParamsLearnFromBots[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyLearningParamsLearnFromBotsOutputReference {
    return new WafpolicyLearningParamsLearnFromBotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyLearningParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable_learn_from_bots Wafpolicy#enable_learn_from_bots}
  */
  readonly enableLearnFromBots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable_per_uri_learning Wafpolicy#enable_per_uri_learning}
  */
  readonly enablePerUriLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#learn_from_authenticated_clients_only Wafpolicy#learn_from_authenticated_clients_only}
  */
  readonly learnFromAuthenticatedClientsOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#max_params Wafpolicy#max_params}
  */
  readonly maxParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#max_uris Wafpolicy#max_uris}
  */
  readonly maxUris?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#min_hits_to_learn Wafpolicy#min_hits_to_learn}
  */
  readonly minHitsToLearn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#sampling_percent Wafpolicy#sampling_percent}
  */
  readonly samplingPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#trusted_ipgroup_ref Wafpolicy#trusted_ipgroup_ref}
  */
  readonly trustedIpgroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#update_interval Wafpolicy#update_interval}
  */
  readonly updateInterval?: string;
  /**
  * learn_from_bots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#learn_from_bots Wafpolicy#learn_from_bots}
  */
  readonly learnFromBots?: WafpolicyLearningParamsLearnFromBots[] | cdktf.IResolvable;
}

export function wafpolicyLearningParamsToTerraform(struct?: WafpolicyLearningParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_learn_from_bots: cdktf.stringToTerraform(struct!.enableLearnFromBots),
    enable_per_uri_learning: cdktf.stringToTerraform(struct!.enablePerUriLearning),
    learn_from_authenticated_clients_only: cdktf.stringToTerraform(struct!.learnFromAuthenticatedClientsOnly),
    max_params: cdktf.stringToTerraform(struct!.maxParams),
    max_uris: cdktf.stringToTerraform(struct!.maxUris),
    min_hits_to_learn: cdktf.stringToTerraform(struct!.minHitsToLearn),
    sampling_percent: cdktf.stringToTerraform(struct!.samplingPercent),
    trusted_ipgroup_ref: cdktf.stringToTerraform(struct!.trustedIpgroupRef),
    update_interval: cdktf.stringToTerraform(struct!.updateInterval),
    learn_from_bots: cdktf.listMapper(wafpolicyLearningParamsLearnFromBotsToTerraform, true)(struct!.learnFromBots),
  }
}


export function wafpolicyLearningParamsToHclTerraform(struct?: WafpolicyLearningParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_learn_from_bots: {
      value: cdktf.stringToHclTerraform(struct!.enableLearnFromBots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_per_uri_learning: {
      value: cdktf.stringToHclTerraform(struct!.enablePerUriLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learn_from_authenticated_clients_only: {
      value: cdktf.stringToHclTerraform(struct!.learnFromAuthenticatedClientsOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_params: {
      value: cdktf.stringToHclTerraform(struct!.maxParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_uris: {
      value: cdktf.stringToHclTerraform(struct!.maxUris),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_hits_to_learn: {
      value: cdktf.stringToHclTerraform(struct!.minHitsToLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_percent: {
      value: cdktf.stringToHclTerraform(struct!.samplingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ipgroup_ref: {
      value: cdktf.stringToHclTerraform(struct!.trustedIpgroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_interval: {
      value: cdktf.stringToHclTerraform(struct!.updateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learn_from_bots: {
      value: cdktf.listMapperHcl(wafpolicyLearningParamsLearnFromBotsToHclTerraform, true)(struct!.learnFromBots),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyLearningParamsLearnFromBotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyLearningParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyLearningParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableLearnFromBots !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLearnFromBots = this._enableLearnFromBots;
    }
    if (this._enablePerUriLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePerUriLearning = this._enablePerUriLearning;
    }
    if (this._learnFromAuthenticatedClientsOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnFromAuthenticatedClientsOnly = this._learnFromAuthenticatedClientsOnly;
    }
    if (this._maxParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParams = this._maxParams;
    }
    if (this._maxUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUris = this._maxUris;
    }
    if (this._minHitsToLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHitsToLearn = this._minHitsToLearn;
    }
    if (this._samplingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingPercent = this._samplingPercent;
    }
    if (this._trustedIpgroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedIpgroupRef = this._trustedIpgroupRef;
    }
    if (this._updateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateInterval = this._updateInterval;
    }
    if (this._learnFromBots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnFromBots = this._learnFromBots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyLearningParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableLearnFromBots = undefined;
      this._enablePerUriLearning = undefined;
      this._learnFromAuthenticatedClientsOnly = undefined;
      this._maxParams = undefined;
      this._maxUris = undefined;
      this._minHitsToLearn = undefined;
      this._samplingPercent = undefined;
      this._trustedIpgroupRef = undefined;
      this._updateInterval = undefined;
      this._learnFromBots.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableLearnFromBots = value.enableLearnFromBots;
      this._enablePerUriLearning = value.enablePerUriLearning;
      this._learnFromAuthenticatedClientsOnly = value.learnFromAuthenticatedClientsOnly;
      this._maxParams = value.maxParams;
      this._maxUris = value.maxUris;
      this._minHitsToLearn = value.minHitsToLearn;
      this._samplingPercent = value.samplingPercent;
      this._trustedIpgroupRef = value.trustedIpgroupRef;
      this._updateInterval = value.updateInterval;
      this._learnFromBots.internalValue = value.learnFromBots;
    }
  }

  // enable_learn_from_bots - computed: false, optional: true, required: false
  private _enableLearnFromBots?: string; 
  public get enableLearnFromBots() {
    return this.getStringAttribute('enable_learn_from_bots');
  }
  public set enableLearnFromBots(value: string) {
    this._enableLearnFromBots = value;
  }
  public resetEnableLearnFromBots() {
    this._enableLearnFromBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearnFromBotsInput() {
    return this._enableLearnFromBots;
  }

  // enable_per_uri_learning - computed: false, optional: true, required: false
  private _enablePerUriLearning?: string; 
  public get enablePerUriLearning() {
    return this.getStringAttribute('enable_per_uri_learning');
  }
  public set enablePerUriLearning(value: string) {
    this._enablePerUriLearning = value;
  }
  public resetEnablePerUriLearning() {
    this._enablePerUriLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerUriLearningInput() {
    return this._enablePerUriLearning;
  }

  // learn_from_authenticated_clients_only - computed: false, optional: true, required: false
  private _learnFromAuthenticatedClientsOnly?: string; 
  public get learnFromAuthenticatedClientsOnly() {
    return this.getStringAttribute('learn_from_authenticated_clients_only');
  }
  public set learnFromAuthenticatedClientsOnly(value: string) {
    this._learnFromAuthenticatedClientsOnly = value;
  }
  public resetLearnFromAuthenticatedClientsOnly() {
    this._learnFromAuthenticatedClientsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnFromAuthenticatedClientsOnlyInput() {
    return this._learnFromAuthenticatedClientsOnly;
  }

  // max_params - computed: false, optional: true, required: false
  private _maxParams?: string; 
  public get maxParams() {
    return this.getStringAttribute('max_params');
  }
  public set maxParams(value: string) {
    this._maxParams = value;
  }
  public resetMaxParams() {
    this._maxParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParamsInput() {
    return this._maxParams;
  }

  // max_uris - computed: false, optional: true, required: false
  private _maxUris?: string; 
  public get maxUris() {
    return this.getStringAttribute('max_uris');
  }
  public set maxUris(value: string) {
    this._maxUris = value;
  }
  public resetMaxUris() {
    this._maxUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrisInput() {
    return this._maxUris;
  }

  // min_hits_to_learn - computed: false, optional: true, required: false
  private _minHitsToLearn?: string; 
  public get minHitsToLearn() {
    return this.getStringAttribute('min_hits_to_learn');
  }
  public set minHitsToLearn(value: string) {
    this._minHitsToLearn = value;
  }
  public resetMinHitsToLearn() {
    this._minHitsToLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHitsToLearnInput() {
    return this._minHitsToLearn;
  }

  // sampling_percent - computed: false, optional: true, required: false
  private _samplingPercent?: string; 
  public get samplingPercent() {
    return this.getStringAttribute('sampling_percent');
  }
  public set samplingPercent(value: string) {
    this._samplingPercent = value;
  }
  public resetSamplingPercent() {
    this._samplingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentInput() {
    return this._samplingPercent;
  }

  // trusted_ipgroup_ref - computed: true, optional: true, required: false
  private _trustedIpgroupRef?: string; 
  public get trustedIpgroupRef() {
    return this.getStringAttribute('trusted_ipgroup_ref');
  }
  public set trustedIpgroupRef(value: string) {
    this._trustedIpgroupRef = value;
  }
  public resetTrustedIpgroupRef() {
    this._trustedIpgroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedIpgroupRefInput() {
    return this._trustedIpgroupRef;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: string; 
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }
  public set updateInterval(value: string) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // learn_from_bots - computed: false, optional: true, required: false
  private _learnFromBots = new WafpolicyLearningParamsLearnFromBotsList(this, "learn_from_bots", true);
  public get learnFromBots() {
    return this._learnFromBots;
  }
  public putLearnFromBots(value: WafpolicyLearningParamsLearnFromBots[] | cdktf.IResolvable) {
    this._learnFromBots.internalValue = value;
  }
  public resetLearnFromBots() {
    this._learnFromBots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnFromBotsInput() {
    return this._learnFromBots.internalValue;
  }
}

export class WafpolicyLearningParamsList extends cdktf.ComplexList {
  public internalValue? : WafpolicyLearningParams[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyLearningParamsOutputReference {
    return new WafpolicyLearningParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#key Wafpolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#values Wafpolicy#values}
  */
  readonly values?: string[];
}

export function wafpolicyMarkersToTerraform(struct?: WafpolicyMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function wafpolicyMarkersToHclTerraform(struct?: WafpolicyMarkers | cdktf.IResolvable): any {
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

export class WafpolicyMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

export class WafpolicyMarkersList extends cdktf.ComplexList {
  public internalValue? : WafpolicyMarkers[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyMarkersOutputReference {
    return new WafpolicyMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPositiveSecurityModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#group_refs Wafpolicy#group_refs}
  */
  readonly groupRefs?: string[];
}

export function wafpolicyPositiveSecurityModelToTerraform(struct?: WafpolicyPositiveSecurityModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
  }
}


export function wafpolicyPositiveSecurityModelToHclTerraform(struct?: WafpolicyPositiveSecurityModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPositiveSecurityModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPositiveSecurityModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPositiveSecurityModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
  }
}

export class WafpolicyPositiveSecurityModelList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPositiveSecurityModel[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPositiveSecurityModelOutputReference {
    return new WafpolicyPositiveSecurityModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyPostCrsGroupsExcludeListClientSubnetIpAddrToTerraform(struct?: WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyPostCrsGroupsExcludeListClientSubnetIpAddrToHclTerraform(struct?: WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddrOutputReference {
    return new WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPostCrsGroupsExcludeListClientSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mask Wafpolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ip_addr Wafpolicy#ip_addr}
  */
  readonly ipAddr: WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddr[] | cdktf.IResolvable;
}

export function wafpolicyPostCrsGroupsExcludeListClientSubnetToTerraform(struct?: WafpolicyPostCrsGroupsExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(wafpolicyPostCrsGroupsExcludeListClientSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function wafpolicyPostCrsGroupsExcludeListClientSubnetToHclTerraform(struct?: WafpolicyPostCrsGroupsExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(wafpolicyPostCrsGroupsExcludeListClientSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPostCrsGroupsExcludeListClientSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPostCrsGroupsExcludeListClientSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPostCrsGroupsExcludeListClientSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: WafpolicyPostCrsGroupsExcludeListClientSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class WafpolicyPostCrsGroupsExcludeListClientSubnetList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPostCrsGroupsExcludeListClientSubnet[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPostCrsGroupsExcludeListClientSubnetOutputReference {
    return new WafpolicyPostCrsGroupsExcludeListClientSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPostCrsGroupsExcludeListMatchElementCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyPostCrsGroupsExcludeListMatchElementCriteriaToTerraform(struct?: WafpolicyPostCrsGroupsExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyPostCrsGroupsExcludeListMatchElementCriteriaToHclTerraform(struct?: WafpolicyPostCrsGroupsExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPostCrsGroupsExcludeListMatchElementCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPostCrsGroupsExcludeListMatchElementCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPostCrsGroupsExcludeListMatchElementCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyPostCrsGroupsExcludeListMatchElementCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPostCrsGroupsExcludeListMatchElementCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPostCrsGroupsExcludeListMatchElementCriteriaOutputReference {
    return new WafpolicyPostCrsGroupsExcludeListMatchElementCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPostCrsGroupsExcludeListUriMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyPostCrsGroupsExcludeListUriMatchCriteriaToTerraform(struct?: WafpolicyPostCrsGroupsExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyPostCrsGroupsExcludeListUriMatchCriteriaToHclTerraform(struct?: WafpolicyPostCrsGroupsExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPostCrsGroupsExcludeListUriMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPostCrsGroupsExcludeListUriMatchCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPostCrsGroupsExcludeListUriMatchCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyPostCrsGroupsExcludeListUriMatchCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPostCrsGroupsExcludeListUriMatchCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPostCrsGroupsExcludeListUriMatchCriteriaOutputReference {
    return new WafpolicyPostCrsGroupsExcludeListUriMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPostCrsGroupsExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#description Wafpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element Wafpolicy#match_element}
  */
  readonly matchElement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_path Wafpolicy#uri_path}
  */
  readonly uriPath?: string;
  /**
  * client_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#client_subnet Wafpolicy#client_subnet}
  */
  readonly clientSubnet?: WafpolicyPostCrsGroupsExcludeListClientSubnet[] | cdktf.IResolvable;
  /**
  * match_element_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element_criteria Wafpolicy#match_element_criteria}
  */
  readonly matchElementCriteria?: WafpolicyPostCrsGroupsExcludeListMatchElementCriteria[] | cdktf.IResolvable;
  /**
  * uri_match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_match_criteria Wafpolicy#uri_match_criteria}
  */
  readonly uriMatchCriteria?: WafpolicyPostCrsGroupsExcludeListUriMatchCriteria[] | cdktf.IResolvable;
}

export function wafpolicyPostCrsGroupsExcludeListStructToTerraform(struct?: WafpolicyPostCrsGroupsExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    match_element: cdktf.stringToTerraform(struct!.matchElement),
    uri_path: cdktf.stringToTerraform(struct!.uriPath),
    client_subnet: cdktf.listMapper(wafpolicyPostCrsGroupsExcludeListClientSubnetToTerraform, true)(struct!.clientSubnet),
    match_element_criteria: cdktf.listMapper(wafpolicyPostCrsGroupsExcludeListMatchElementCriteriaToTerraform, true)(struct!.matchElementCriteria),
    uri_match_criteria: cdktf.listMapper(wafpolicyPostCrsGroupsExcludeListUriMatchCriteriaToTerraform, true)(struct!.uriMatchCriteria),
  }
}


export function wafpolicyPostCrsGroupsExcludeListStructToHclTerraform(struct?: WafpolicyPostCrsGroupsExcludeListStruct | cdktf.IResolvable): any {
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
    match_element: {
      value: cdktf.stringToHclTerraform(struct!.matchElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_path: {
      value: cdktf.stringToHclTerraform(struct!.uriPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnet: {
      value: cdktf.listMapperHcl(wafpolicyPostCrsGroupsExcludeListClientSubnetToHclTerraform, true)(struct!.clientSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPostCrsGroupsExcludeListClientSubnetList",
    },
    match_element_criteria: {
      value: cdktf.listMapperHcl(wafpolicyPostCrsGroupsExcludeListMatchElementCriteriaToHclTerraform, true)(struct!.matchElementCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPostCrsGroupsExcludeListMatchElementCriteriaList",
    },
    uri_match_criteria: {
      value: cdktf.listMapperHcl(wafpolicyPostCrsGroupsExcludeListUriMatchCriteriaToHclTerraform, true)(struct!.uriMatchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPostCrsGroupsExcludeListUriMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPostCrsGroupsExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPostCrsGroupsExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElement = this._matchElement;
    }
    if (this._uriPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath;
    }
    if (this._clientSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnet = this._clientSubnet?.internalValue;
    }
    if (this._matchElementCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElementCriteria = this._matchElementCriteria?.internalValue;
    }
    if (this._uriMatchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriMatchCriteria = this._uriMatchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPostCrsGroupsExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._matchElement = undefined;
      this._uriPath = undefined;
      this._clientSubnet.internalValue = undefined;
      this._matchElementCriteria.internalValue = undefined;
      this._uriMatchCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._matchElement = value.matchElement;
      this._uriPath = value.uriPath;
      this._clientSubnet.internalValue = value.clientSubnet;
      this._matchElementCriteria.internalValue = value.matchElementCriteria;
      this._uriMatchCriteria.internalValue = value.uriMatchCriteria;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // match_element - computed: true, optional: true, required: false
  private _matchElement?: string; 
  public get matchElement() {
    return this.getStringAttribute('match_element');
  }
  public set matchElement(value: string) {
    this._matchElement = value;
  }
  public resetMatchElement() {
    this._matchElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementInput() {
    return this._matchElement;
  }

  // uri_path - computed: true, optional: true, required: false
  private _uriPath?: string; 
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
  public set uriPath(value: string) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath;
  }

  // client_subnet - computed: false, optional: true, required: false
  private _clientSubnet = new WafpolicyPostCrsGroupsExcludeListClientSubnetList(this, "client_subnet", true);
  public get clientSubnet() {
    return this._clientSubnet;
  }
  public putClientSubnet(value: WafpolicyPostCrsGroupsExcludeListClientSubnet[] | cdktf.IResolvable) {
    this._clientSubnet.internalValue = value;
  }
  public resetClientSubnet() {
    this._clientSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetInput() {
    return this._clientSubnet.internalValue;
  }

  // match_element_criteria - computed: false, optional: true, required: false
  private _matchElementCriteria = new WafpolicyPostCrsGroupsExcludeListMatchElementCriteriaList(this, "match_element_criteria", true);
  public get matchElementCriteria() {
    return this._matchElementCriteria;
  }
  public putMatchElementCriteria(value: WafpolicyPostCrsGroupsExcludeListMatchElementCriteria[] | cdktf.IResolvable) {
    this._matchElementCriteria.internalValue = value;
  }
  public resetMatchElementCriteria() {
    this._matchElementCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementCriteriaInput() {
    return this._matchElementCriteria.internalValue;
  }

  // uri_match_criteria - computed: false, optional: true, required: false
  private _uriMatchCriteria = new WafpolicyPostCrsGroupsExcludeListUriMatchCriteriaList(this, "uri_match_criteria", true);
  public get uriMatchCriteria() {
    return this._uriMatchCriteria;
  }
  public putUriMatchCriteria(value: WafpolicyPostCrsGroupsExcludeListUriMatchCriteria[] | cdktf.IResolvable) {
    this._uriMatchCriteria.internalValue = value;
  }
  public resetUriMatchCriteria() {
    this._uriMatchCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriMatchCriteriaInput() {
    return this._uriMatchCriteria.internalValue;
  }
}

export class WafpolicyPostCrsGroupsExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPostCrsGroupsExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPostCrsGroupsExcludeListStructOutputReference {
    return new WafpolicyPostCrsGroupsExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddrToTerraform(struct?: WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddrToHclTerraform(struct?: WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddrOutputReference {
    return new WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPostCrsGroupsRulesExcludeListClientSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mask Wafpolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ip_addr Wafpolicy#ip_addr}
  */
  readonly ipAddr: WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable;
}

export function wafpolicyPostCrsGroupsRulesExcludeListClientSubnetToTerraform(struct?: WafpolicyPostCrsGroupsRulesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(wafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function wafpolicyPostCrsGroupsRulesExcludeListClientSubnetToHclTerraform(struct?: WafpolicyPostCrsGroupsRulesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(wafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPostCrsGroupsRulesExcludeListClientSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPostCrsGroupsRulesExcludeListClientSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPostCrsGroupsRulesExcludeListClientSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: WafpolicyPostCrsGroupsRulesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class WafpolicyPostCrsGroupsRulesExcludeListClientSubnetList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPostCrsGroupsRulesExcludeListClientSubnet[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPostCrsGroupsRulesExcludeListClientSubnetOutputReference {
    return new WafpolicyPostCrsGroupsRulesExcludeListClientSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteriaToTerraform(struct?: WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteriaToHclTerraform(struct?: WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteriaOutputReference {
    return new WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteriaToTerraform(struct?: WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteriaToHclTerraform(struct?: WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteriaOutputReference {
    return new WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPostCrsGroupsRulesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#description Wafpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element Wafpolicy#match_element}
  */
  readonly matchElement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_path Wafpolicy#uri_path}
  */
  readonly uriPath?: string;
  /**
  * client_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#client_subnet Wafpolicy#client_subnet}
  */
  readonly clientSubnet?: WafpolicyPostCrsGroupsRulesExcludeListClientSubnet[] | cdktf.IResolvable;
  /**
  * match_element_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element_criteria Wafpolicy#match_element_criteria}
  */
  readonly matchElementCriteria?: WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteria[] | cdktf.IResolvable;
  /**
  * uri_match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_match_criteria Wafpolicy#uri_match_criteria}
  */
  readonly uriMatchCriteria?: WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteria[] | cdktf.IResolvable;
}

export function wafpolicyPostCrsGroupsRulesExcludeListStructToTerraform(struct?: WafpolicyPostCrsGroupsRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    match_element: cdktf.stringToTerraform(struct!.matchElement),
    uri_path: cdktf.stringToTerraform(struct!.uriPath),
    client_subnet: cdktf.listMapper(wafpolicyPostCrsGroupsRulesExcludeListClientSubnetToTerraform, true)(struct!.clientSubnet),
    match_element_criteria: cdktf.listMapper(wafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteriaToTerraform, true)(struct!.matchElementCriteria),
    uri_match_criteria: cdktf.listMapper(wafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteriaToTerraform, true)(struct!.uriMatchCriteria),
  }
}


export function wafpolicyPostCrsGroupsRulesExcludeListStructToHclTerraform(struct?: WafpolicyPostCrsGroupsRulesExcludeListStruct | cdktf.IResolvable): any {
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
    match_element: {
      value: cdktf.stringToHclTerraform(struct!.matchElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_path: {
      value: cdktf.stringToHclTerraform(struct!.uriPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnet: {
      value: cdktf.listMapperHcl(wafpolicyPostCrsGroupsRulesExcludeListClientSubnetToHclTerraform, true)(struct!.clientSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPostCrsGroupsRulesExcludeListClientSubnetList",
    },
    match_element_criteria: {
      value: cdktf.listMapperHcl(wafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteriaToHclTerraform, true)(struct!.matchElementCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteriaList",
    },
    uri_match_criteria: {
      value: cdktf.listMapperHcl(wafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteriaToHclTerraform, true)(struct!.uriMatchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPostCrsGroupsRulesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPostCrsGroupsRulesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElement = this._matchElement;
    }
    if (this._uriPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath;
    }
    if (this._clientSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnet = this._clientSubnet?.internalValue;
    }
    if (this._matchElementCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElementCriteria = this._matchElementCriteria?.internalValue;
    }
    if (this._uriMatchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriMatchCriteria = this._uriMatchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPostCrsGroupsRulesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._matchElement = undefined;
      this._uriPath = undefined;
      this._clientSubnet.internalValue = undefined;
      this._matchElementCriteria.internalValue = undefined;
      this._uriMatchCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._matchElement = value.matchElement;
      this._uriPath = value.uriPath;
      this._clientSubnet.internalValue = value.clientSubnet;
      this._matchElementCriteria.internalValue = value.matchElementCriteria;
      this._uriMatchCriteria.internalValue = value.uriMatchCriteria;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // match_element - computed: true, optional: true, required: false
  private _matchElement?: string; 
  public get matchElement() {
    return this.getStringAttribute('match_element');
  }
  public set matchElement(value: string) {
    this._matchElement = value;
  }
  public resetMatchElement() {
    this._matchElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementInput() {
    return this._matchElement;
  }

  // uri_path - computed: true, optional: true, required: false
  private _uriPath?: string; 
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
  public set uriPath(value: string) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath;
  }

  // client_subnet - computed: false, optional: true, required: false
  private _clientSubnet = new WafpolicyPostCrsGroupsRulesExcludeListClientSubnetList(this, "client_subnet", true);
  public get clientSubnet() {
    return this._clientSubnet;
  }
  public putClientSubnet(value: WafpolicyPostCrsGroupsRulesExcludeListClientSubnet[] | cdktf.IResolvable) {
    this._clientSubnet.internalValue = value;
  }
  public resetClientSubnet() {
    this._clientSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetInput() {
    return this._clientSubnet.internalValue;
  }

  // match_element_criteria - computed: false, optional: true, required: false
  private _matchElementCriteria = new WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteriaList(this, "match_element_criteria", true);
  public get matchElementCriteria() {
    return this._matchElementCriteria;
  }
  public putMatchElementCriteria(value: WafpolicyPostCrsGroupsRulesExcludeListMatchElementCriteria[] | cdktf.IResolvable) {
    this._matchElementCriteria.internalValue = value;
  }
  public resetMatchElementCriteria() {
    this._matchElementCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementCriteriaInput() {
    return this._matchElementCriteria.internalValue;
  }

  // uri_match_criteria - computed: false, optional: true, required: false
  private _uriMatchCriteria = new WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteriaList(this, "uri_match_criteria", true);
  public get uriMatchCriteria() {
    return this._uriMatchCriteria;
  }
  public putUriMatchCriteria(value: WafpolicyPostCrsGroupsRulesExcludeListUriMatchCriteria[] | cdktf.IResolvable) {
    this._uriMatchCriteria.internalValue = value;
  }
  public resetUriMatchCriteria() {
    this._uriMatchCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriMatchCriteriaInput() {
    return this._uriMatchCriteria.internalValue;
  }
}

export class WafpolicyPostCrsGroupsRulesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPostCrsGroupsRulesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPostCrsGroupsRulesExcludeListStructOutputReference {
    return new WafpolicyPostCrsGroupsRulesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPostCrsGroupsRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable Wafpolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#index Wafpolicy#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#is_sensitive Wafpolicy#is_sensitive}
  */
  readonly isSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mode Wafpolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#name Wafpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#paranoia_level Wafpolicy#paranoia_level}
  */
  readonly paranoiaLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#phase Wafpolicy#phase}
  */
  readonly phase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rule Wafpolicy#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rule_id Wafpolicy#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#tags Wafpolicy#tags}
  */
  readonly tags?: string[];
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#exclude_list Wafpolicy#exclude_list}
  */
  readonly excludeList?: WafpolicyPostCrsGroupsRulesExcludeListStruct[] | cdktf.IResolvable;
}

export function wafpolicyPostCrsGroupsRulesToTerraform(struct?: WafpolicyPostCrsGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    is_sensitive: cdktf.stringToTerraform(struct!.isSensitive),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    paranoia_level: cdktf.stringToTerraform(struct!.paranoiaLevel),
    phase: cdktf.stringToTerraform(struct!.phase),
    rule: cdktf.stringToTerraform(struct!.rule),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    exclude_list: cdktf.listMapper(wafpolicyPostCrsGroupsRulesExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function wafpolicyPostCrsGroupsRulesToHclTerraform(struct?: WafpolicyPostCrsGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.isSensitive),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paranoia_level: {
      value: cdktf.stringToHclTerraform(struct!.paranoiaLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(wafpolicyPostCrsGroupsRulesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyPostCrsGroupsRulesExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPostCrsGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPostCrsGroupsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._isSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSensitive = this._isSensitive;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._paranoiaLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.paranoiaLevel = this._paranoiaLevel;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPostCrsGroupsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._isSensitive = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._paranoiaLevel = undefined;
      this._phase = undefined;
      this._rule = undefined;
      this._ruleId = undefined;
      this._tags = undefined;
      this._excludeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._index = value.index;
      this._isSensitive = value.isSensitive;
      this._mode = value.mode;
      this._name = value.name;
      this._paranoiaLevel = value.paranoiaLevel;
      this._phase = value.phase;
      this._rule = value.rule;
      this._ruleId = value.ruleId;
      this._tags = value.tags;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: string; 
  public get isSensitive() {
    return this.getStringAttribute('is_sensitive');
  }
  public set isSensitive(value: string) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: true, required: false
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

  // paranoia_level - computed: true, optional: true, required: false
  private _paranoiaLevel?: string; 
  public get paranoiaLevel() {
    return this.getStringAttribute('paranoia_level');
  }
  public set paranoiaLevel(value: string) {
    this._paranoiaLevel = value;
  }
  public resetParanoiaLevel() {
    this._paranoiaLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paranoiaLevelInput() {
    return this._paranoiaLevel;
  }

  // phase - computed: true, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_id - computed: true, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new WafpolicyPostCrsGroupsRulesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: WafpolicyPostCrsGroupsRulesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}

export class WafpolicyPostCrsGroupsRulesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPostCrsGroupsRules[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPostCrsGroupsRulesOutputReference {
    return new WafpolicyPostCrsGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPostCrsGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable Wafpolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#index Wafpolicy#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#name Wafpolicy#name}
  */
  readonly name: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#exclude_list Wafpolicy#exclude_list}
  */
  readonly excludeList?: WafpolicyPostCrsGroupsExcludeListStruct[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rules Wafpolicy#rules}
  */
  readonly rules?: WafpolicyPostCrsGroupsRules[] | cdktf.IResolvable;
}

export function wafpolicyPostCrsGroupsToTerraform(struct?: WafpolicyPostCrsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    exclude_list: cdktf.listMapper(wafpolicyPostCrsGroupsExcludeListStructToTerraform, true)(struct!.excludeList),
    rules: cdktf.listMapper(wafpolicyPostCrsGroupsRulesToTerraform, true)(struct!.rules),
  }
}


export function wafpolicyPostCrsGroupsToHclTerraform(struct?: WafpolicyPostCrsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
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
    exclude_list: {
      value: cdktf.listMapperHcl(wafpolicyPostCrsGroupsExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyPostCrsGroupsExcludeListStructList",
    },
    rules: {
      value: cdktf.listMapperHcl(wafpolicyPostCrsGroupsRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyPostCrsGroupsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPostCrsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPostCrsGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPostCrsGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._name = undefined;
      this._excludeList.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._index = value.index;
      this._name = value.name;
      this._excludeList.internalValue = value.excludeList;
      this._rules.internalValue = value.rules;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new WafpolicyPostCrsGroupsExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: WafpolicyPostCrsGroupsExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new WafpolicyPostCrsGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WafpolicyPostCrsGroupsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class WafpolicyPostCrsGroupsList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPostCrsGroups[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPostCrsGroupsOutputReference {
    return new WafpolicyPostCrsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyPreCrsGroupsExcludeListClientSubnetIpAddrToTerraform(struct?: WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyPreCrsGroupsExcludeListClientSubnetIpAddrToHclTerraform(struct?: WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddrOutputReference {
    return new WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPreCrsGroupsExcludeListClientSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mask Wafpolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ip_addr Wafpolicy#ip_addr}
  */
  readonly ipAddr: WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddr[] | cdktf.IResolvable;
}

export function wafpolicyPreCrsGroupsExcludeListClientSubnetToTerraform(struct?: WafpolicyPreCrsGroupsExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(wafpolicyPreCrsGroupsExcludeListClientSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function wafpolicyPreCrsGroupsExcludeListClientSubnetToHclTerraform(struct?: WafpolicyPreCrsGroupsExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(wafpolicyPreCrsGroupsExcludeListClientSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPreCrsGroupsExcludeListClientSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPreCrsGroupsExcludeListClientSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPreCrsGroupsExcludeListClientSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: WafpolicyPreCrsGroupsExcludeListClientSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class WafpolicyPreCrsGroupsExcludeListClientSubnetList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPreCrsGroupsExcludeListClientSubnet[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPreCrsGroupsExcludeListClientSubnetOutputReference {
    return new WafpolicyPreCrsGroupsExcludeListClientSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPreCrsGroupsExcludeListMatchElementCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyPreCrsGroupsExcludeListMatchElementCriteriaToTerraform(struct?: WafpolicyPreCrsGroupsExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyPreCrsGroupsExcludeListMatchElementCriteriaToHclTerraform(struct?: WafpolicyPreCrsGroupsExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPreCrsGroupsExcludeListMatchElementCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPreCrsGroupsExcludeListMatchElementCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPreCrsGroupsExcludeListMatchElementCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyPreCrsGroupsExcludeListMatchElementCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPreCrsGroupsExcludeListMatchElementCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPreCrsGroupsExcludeListMatchElementCriteriaOutputReference {
    return new WafpolicyPreCrsGroupsExcludeListMatchElementCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPreCrsGroupsExcludeListUriMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyPreCrsGroupsExcludeListUriMatchCriteriaToTerraform(struct?: WafpolicyPreCrsGroupsExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyPreCrsGroupsExcludeListUriMatchCriteriaToHclTerraform(struct?: WafpolicyPreCrsGroupsExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPreCrsGroupsExcludeListUriMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPreCrsGroupsExcludeListUriMatchCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPreCrsGroupsExcludeListUriMatchCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyPreCrsGroupsExcludeListUriMatchCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPreCrsGroupsExcludeListUriMatchCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPreCrsGroupsExcludeListUriMatchCriteriaOutputReference {
    return new WafpolicyPreCrsGroupsExcludeListUriMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPreCrsGroupsExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#description Wafpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element Wafpolicy#match_element}
  */
  readonly matchElement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_path Wafpolicy#uri_path}
  */
  readonly uriPath?: string;
  /**
  * client_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#client_subnet Wafpolicy#client_subnet}
  */
  readonly clientSubnet?: WafpolicyPreCrsGroupsExcludeListClientSubnet[] | cdktf.IResolvable;
  /**
  * match_element_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element_criteria Wafpolicy#match_element_criteria}
  */
  readonly matchElementCriteria?: WafpolicyPreCrsGroupsExcludeListMatchElementCriteria[] | cdktf.IResolvable;
  /**
  * uri_match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_match_criteria Wafpolicy#uri_match_criteria}
  */
  readonly uriMatchCriteria?: WafpolicyPreCrsGroupsExcludeListUriMatchCriteria[] | cdktf.IResolvable;
}

export function wafpolicyPreCrsGroupsExcludeListStructToTerraform(struct?: WafpolicyPreCrsGroupsExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    match_element: cdktf.stringToTerraform(struct!.matchElement),
    uri_path: cdktf.stringToTerraform(struct!.uriPath),
    client_subnet: cdktf.listMapper(wafpolicyPreCrsGroupsExcludeListClientSubnetToTerraform, true)(struct!.clientSubnet),
    match_element_criteria: cdktf.listMapper(wafpolicyPreCrsGroupsExcludeListMatchElementCriteriaToTerraform, true)(struct!.matchElementCriteria),
    uri_match_criteria: cdktf.listMapper(wafpolicyPreCrsGroupsExcludeListUriMatchCriteriaToTerraform, true)(struct!.uriMatchCriteria),
  }
}


export function wafpolicyPreCrsGroupsExcludeListStructToHclTerraform(struct?: WafpolicyPreCrsGroupsExcludeListStruct | cdktf.IResolvable): any {
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
    match_element: {
      value: cdktf.stringToHclTerraform(struct!.matchElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_path: {
      value: cdktf.stringToHclTerraform(struct!.uriPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnet: {
      value: cdktf.listMapperHcl(wafpolicyPreCrsGroupsExcludeListClientSubnetToHclTerraform, true)(struct!.clientSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPreCrsGroupsExcludeListClientSubnetList",
    },
    match_element_criteria: {
      value: cdktf.listMapperHcl(wafpolicyPreCrsGroupsExcludeListMatchElementCriteriaToHclTerraform, true)(struct!.matchElementCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPreCrsGroupsExcludeListMatchElementCriteriaList",
    },
    uri_match_criteria: {
      value: cdktf.listMapperHcl(wafpolicyPreCrsGroupsExcludeListUriMatchCriteriaToHclTerraform, true)(struct!.uriMatchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPreCrsGroupsExcludeListUriMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPreCrsGroupsExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPreCrsGroupsExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElement = this._matchElement;
    }
    if (this._uriPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath;
    }
    if (this._clientSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnet = this._clientSubnet?.internalValue;
    }
    if (this._matchElementCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElementCriteria = this._matchElementCriteria?.internalValue;
    }
    if (this._uriMatchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriMatchCriteria = this._uriMatchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPreCrsGroupsExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._matchElement = undefined;
      this._uriPath = undefined;
      this._clientSubnet.internalValue = undefined;
      this._matchElementCriteria.internalValue = undefined;
      this._uriMatchCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._matchElement = value.matchElement;
      this._uriPath = value.uriPath;
      this._clientSubnet.internalValue = value.clientSubnet;
      this._matchElementCriteria.internalValue = value.matchElementCriteria;
      this._uriMatchCriteria.internalValue = value.uriMatchCriteria;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // match_element - computed: true, optional: true, required: false
  private _matchElement?: string; 
  public get matchElement() {
    return this.getStringAttribute('match_element');
  }
  public set matchElement(value: string) {
    this._matchElement = value;
  }
  public resetMatchElement() {
    this._matchElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementInput() {
    return this._matchElement;
  }

  // uri_path - computed: true, optional: true, required: false
  private _uriPath?: string; 
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
  public set uriPath(value: string) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath;
  }

  // client_subnet - computed: false, optional: true, required: false
  private _clientSubnet = new WafpolicyPreCrsGroupsExcludeListClientSubnetList(this, "client_subnet", true);
  public get clientSubnet() {
    return this._clientSubnet;
  }
  public putClientSubnet(value: WafpolicyPreCrsGroupsExcludeListClientSubnet[] | cdktf.IResolvable) {
    this._clientSubnet.internalValue = value;
  }
  public resetClientSubnet() {
    this._clientSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetInput() {
    return this._clientSubnet.internalValue;
  }

  // match_element_criteria - computed: false, optional: true, required: false
  private _matchElementCriteria = new WafpolicyPreCrsGroupsExcludeListMatchElementCriteriaList(this, "match_element_criteria", true);
  public get matchElementCriteria() {
    return this._matchElementCriteria;
  }
  public putMatchElementCriteria(value: WafpolicyPreCrsGroupsExcludeListMatchElementCriteria[] | cdktf.IResolvable) {
    this._matchElementCriteria.internalValue = value;
  }
  public resetMatchElementCriteria() {
    this._matchElementCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementCriteriaInput() {
    return this._matchElementCriteria.internalValue;
  }

  // uri_match_criteria - computed: false, optional: true, required: false
  private _uriMatchCriteria = new WafpolicyPreCrsGroupsExcludeListUriMatchCriteriaList(this, "uri_match_criteria", true);
  public get uriMatchCriteria() {
    return this._uriMatchCriteria;
  }
  public putUriMatchCriteria(value: WafpolicyPreCrsGroupsExcludeListUriMatchCriteria[] | cdktf.IResolvable) {
    this._uriMatchCriteria.internalValue = value;
  }
  public resetUriMatchCriteria() {
    this._uriMatchCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriMatchCriteriaInput() {
    return this._uriMatchCriteria.internalValue;
  }
}

export class WafpolicyPreCrsGroupsExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPreCrsGroupsExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPreCrsGroupsExcludeListStructOutputReference {
    return new WafpolicyPreCrsGroupsExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#addr Wafpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type: string;
}

export function wafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddrToTerraform(struct?: WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddrToHclTerraform(struct?: WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddrOutputReference {
    return new WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPreCrsGroupsRulesExcludeListClientSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mask Wafpolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#ip_addr Wafpolicy#ip_addr}
  */
  readonly ipAddr: WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable;
}

export function wafpolicyPreCrsGroupsRulesExcludeListClientSubnetToTerraform(struct?: WafpolicyPreCrsGroupsRulesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(wafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function wafpolicyPreCrsGroupsRulesExcludeListClientSubnetToHclTerraform(struct?: WafpolicyPreCrsGroupsRulesExcludeListClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(wafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPreCrsGroupsRulesExcludeListClientSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPreCrsGroupsRulesExcludeListClientSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPreCrsGroupsRulesExcludeListClientSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: WafpolicyPreCrsGroupsRulesExcludeListClientSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class WafpolicyPreCrsGroupsRulesExcludeListClientSubnetList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPreCrsGroupsRulesExcludeListClientSubnet[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPreCrsGroupsRulesExcludeListClientSubnetOutputReference {
    return new WafpolicyPreCrsGroupsRulesExcludeListClientSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteriaToTerraform(struct?: WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteriaToHclTerraform(struct?: WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteriaOutputReference {
    return new WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_case Wafpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_op Wafpolicy#match_op}
  */
  readonly matchOp?: string;
}

export function wafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteriaToTerraform(struct?: WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
  }
}


export function wafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteriaToHclTerraform(struct?: WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }
}

export class WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteriaList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteria[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteriaOutputReference {
    return new WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPreCrsGroupsRulesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#description Wafpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element Wafpolicy#match_element}
  */
  readonly matchElement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_path Wafpolicy#uri_path}
  */
  readonly uriPath?: string;
  /**
  * client_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#client_subnet Wafpolicy#client_subnet}
  */
  readonly clientSubnet?: WafpolicyPreCrsGroupsRulesExcludeListClientSubnet[] | cdktf.IResolvable;
  /**
  * match_element_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#match_element_criteria Wafpolicy#match_element_criteria}
  */
  readonly matchElementCriteria?: WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteria[] | cdktf.IResolvable;
  /**
  * uri_match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#uri_match_criteria Wafpolicy#uri_match_criteria}
  */
  readonly uriMatchCriteria?: WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteria[] | cdktf.IResolvable;
}

export function wafpolicyPreCrsGroupsRulesExcludeListStructToTerraform(struct?: WafpolicyPreCrsGroupsRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    match_element: cdktf.stringToTerraform(struct!.matchElement),
    uri_path: cdktf.stringToTerraform(struct!.uriPath),
    client_subnet: cdktf.listMapper(wafpolicyPreCrsGroupsRulesExcludeListClientSubnetToTerraform, true)(struct!.clientSubnet),
    match_element_criteria: cdktf.listMapper(wafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteriaToTerraform, true)(struct!.matchElementCriteria),
    uri_match_criteria: cdktf.listMapper(wafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteriaToTerraform, true)(struct!.uriMatchCriteria),
  }
}


export function wafpolicyPreCrsGroupsRulesExcludeListStructToHclTerraform(struct?: WafpolicyPreCrsGroupsRulesExcludeListStruct | cdktf.IResolvable): any {
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
    match_element: {
      value: cdktf.stringToHclTerraform(struct!.matchElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_path: {
      value: cdktf.stringToHclTerraform(struct!.uriPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnet: {
      value: cdktf.listMapperHcl(wafpolicyPreCrsGroupsRulesExcludeListClientSubnetToHclTerraform, true)(struct!.clientSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPreCrsGroupsRulesExcludeListClientSubnetList",
    },
    match_element_criteria: {
      value: cdktf.listMapperHcl(wafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteriaToHclTerraform, true)(struct!.matchElementCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteriaList",
    },
    uri_match_criteria: {
      value: cdktf.listMapperHcl(wafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteriaToHclTerraform, true)(struct!.uriMatchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPreCrsGroupsRulesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPreCrsGroupsRulesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._matchElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElement = this._matchElement;
    }
    if (this._uriPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath;
    }
    if (this._clientSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnet = this._clientSubnet?.internalValue;
    }
    if (this._matchElementCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElementCriteria = this._matchElementCriteria?.internalValue;
    }
    if (this._uriMatchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriMatchCriteria = this._uriMatchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPreCrsGroupsRulesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._matchElement = undefined;
      this._uriPath = undefined;
      this._clientSubnet.internalValue = undefined;
      this._matchElementCriteria.internalValue = undefined;
      this._uriMatchCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._matchElement = value.matchElement;
      this._uriPath = value.uriPath;
      this._clientSubnet.internalValue = value.clientSubnet;
      this._matchElementCriteria.internalValue = value.matchElementCriteria;
      this._uriMatchCriteria.internalValue = value.uriMatchCriteria;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // match_element - computed: true, optional: true, required: false
  private _matchElement?: string; 
  public get matchElement() {
    return this.getStringAttribute('match_element');
  }
  public set matchElement(value: string) {
    this._matchElement = value;
  }
  public resetMatchElement() {
    this._matchElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementInput() {
    return this._matchElement;
  }

  // uri_path - computed: true, optional: true, required: false
  private _uriPath?: string; 
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
  public set uriPath(value: string) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath;
  }

  // client_subnet - computed: false, optional: true, required: false
  private _clientSubnet = new WafpolicyPreCrsGroupsRulesExcludeListClientSubnetList(this, "client_subnet", true);
  public get clientSubnet() {
    return this._clientSubnet;
  }
  public putClientSubnet(value: WafpolicyPreCrsGroupsRulesExcludeListClientSubnet[] | cdktf.IResolvable) {
    this._clientSubnet.internalValue = value;
  }
  public resetClientSubnet() {
    this._clientSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetInput() {
    return this._clientSubnet.internalValue;
  }

  // match_element_criteria - computed: false, optional: true, required: false
  private _matchElementCriteria = new WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteriaList(this, "match_element_criteria", true);
  public get matchElementCriteria() {
    return this._matchElementCriteria;
  }
  public putMatchElementCriteria(value: WafpolicyPreCrsGroupsRulesExcludeListMatchElementCriteria[] | cdktf.IResolvable) {
    this._matchElementCriteria.internalValue = value;
  }
  public resetMatchElementCriteria() {
    this._matchElementCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementCriteriaInput() {
    return this._matchElementCriteria.internalValue;
  }

  // uri_match_criteria - computed: false, optional: true, required: false
  private _uriMatchCriteria = new WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteriaList(this, "uri_match_criteria", true);
  public get uriMatchCriteria() {
    return this._uriMatchCriteria;
  }
  public putUriMatchCriteria(value: WafpolicyPreCrsGroupsRulesExcludeListUriMatchCriteria[] | cdktf.IResolvable) {
    this._uriMatchCriteria.internalValue = value;
  }
  public resetUriMatchCriteria() {
    this._uriMatchCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriMatchCriteriaInput() {
    return this._uriMatchCriteria.internalValue;
  }
}

export class WafpolicyPreCrsGroupsRulesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPreCrsGroupsRulesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPreCrsGroupsRulesExcludeListStructOutputReference {
    return new WafpolicyPreCrsGroupsRulesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPreCrsGroupsRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable Wafpolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#index Wafpolicy#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#is_sensitive Wafpolicy#is_sensitive}
  */
  readonly isSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#mode Wafpolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#name Wafpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#paranoia_level Wafpolicy#paranoia_level}
  */
  readonly paranoiaLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#phase Wafpolicy#phase}
  */
  readonly phase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rule Wafpolicy#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rule_id Wafpolicy#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#tags Wafpolicy#tags}
  */
  readonly tags?: string[];
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#exclude_list Wafpolicy#exclude_list}
  */
  readonly excludeList?: WafpolicyPreCrsGroupsRulesExcludeListStruct[] | cdktf.IResolvable;
}

export function wafpolicyPreCrsGroupsRulesToTerraform(struct?: WafpolicyPreCrsGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    is_sensitive: cdktf.stringToTerraform(struct!.isSensitive),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    paranoia_level: cdktf.stringToTerraform(struct!.paranoiaLevel),
    phase: cdktf.stringToTerraform(struct!.phase),
    rule: cdktf.stringToTerraform(struct!.rule),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    exclude_list: cdktf.listMapper(wafpolicyPreCrsGroupsRulesExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function wafpolicyPreCrsGroupsRulesToHclTerraform(struct?: WafpolicyPreCrsGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.isSensitive),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paranoia_level: {
      value: cdktf.stringToHclTerraform(struct!.paranoiaLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(wafpolicyPreCrsGroupsRulesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyPreCrsGroupsRulesExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPreCrsGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPreCrsGroupsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._isSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSensitive = this._isSensitive;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._paranoiaLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.paranoiaLevel = this._paranoiaLevel;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPreCrsGroupsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._isSensitive = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._paranoiaLevel = undefined;
      this._phase = undefined;
      this._rule = undefined;
      this._ruleId = undefined;
      this._tags = undefined;
      this._excludeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._index = value.index;
      this._isSensitive = value.isSensitive;
      this._mode = value.mode;
      this._name = value.name;
      this._paranoiaLevel = value.paranoiaLevel;
      this._phase = value.phase;
      this._rule = value.rule;
      this._ruleId = value.ruleId;
      this._tags = value.tags;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: string; 
  public get isSensitive() {
    return this.getStringAttribute('is_sensitive');
  }
  public set isSensitive(value: string) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: true, required: false
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

  // paranoia_level - computed: true, optional: true, required: false
  private _paranoiaLevel?: string; 
  public get paranoiaLevel() {
    return this.getStringAttribute('paranoia_level');
  }
  public set paranoiaLevel(value: string) {
    this._paranoiaLevel = value;
  }
  public resetParanoiaLevel() {
    this._paranoiaLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paranoiaLevelInput() {
    return this._paranoiaLevel;
  }

  // phase - computed: true, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_id - computed: true, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new WafpolicyPreCrsGroupsRulesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: WafpolicyPreCrsGroupsRulesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}

export class WafpolicyPreCrsGroupsRulesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPreCrsGroupsRules[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPreCrsGroupsRulesOutputReference {
    return new WafpolicyPreCrsGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyPreCrsGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#enable Wafpolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#index Wafpolicy#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#name Wafpolicy#name}
  */
  readonly name: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#exclude_list Wafpolicy#exclude_list}
  */
  readonly excludeList?: WafpolicyPreCrsGroupsExcludeListStruct[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#rules Wafpolicy#rules}
  */
  readonly rules?: WafpolicyPreCrsGroupsRules[] | cdktf.IResolvable;
}

export function wafpolicyPreCrsGroupsToTerraform(struct?: WafpolicyPreCrsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    exclude_list: cdktf.listMapper(wafpolicyPreCrsGroupsExcludeListStructToTerraform, true)(struct!.excludeList),
    rules: cdktf.listMapper(wafpolicyPreCrsGroupsRulesToTerraform, true)(struct!.rules),
  }
}


export function wafpolicyPreCrsGroupsToHclTerraform(struct?: WafpolicyPreCrsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
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
    exclude_list: {
      value: cdktf.listMapperHcl(wafpolicyPreCrsGroupsExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyPreCrsGroupsExcludeListStructList",
    },
    rules: {
      value: cdktf.listMapperHcl(wafpolicyPreCrsGroupsRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicyPreCrsGroupsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicyPreCrsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyPreCrsGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyPreCrsGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._name = undefined;
      this._excludeList.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._index = value.index;
      this._name = value.name;
      this._excludeList.internalValue = value.excludeList;
      this._rules.internalValue = value.rules;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new WafpolicyPreCrsGroupsExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: WafpolicyPreCrsGroupsExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new WafpolicyPreCrsGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WafpolicyPreCrsGroupsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class WafpolicyPreCrsGroupsList extends cdktf.ComplexList {
  public internalValue? : WafpolicyPreCrsGroups[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyPreCrsGroupsOutputReference {
    return new WafpolicyPreCrsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicyRequiredDataFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#name Wafpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#type Wafpolicy#type}
  */
  readonly type?: string;
}

export function wafpolicyRequiredDataFilesToTerraform(struct?: WafpolicyRequiredDataFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafpolicyRequiredDataFilesToHclTerraform(struct?: WafpolicyRequiredDataFiles | cdktf.IResolvable): any {
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

export class WafpolicyRequiredDataFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicyRequiredDataFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicyRequiredDataFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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
}

export class WafpolicyRequiredDataFilesList extends cdktf.ComplexList {
  public internalValue? : WafpolicyRequiredDataFiles[] | cdktf.IResolvable

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
  public get(index: number): WafpolicyRequiredDataFilesOutputReference {
    return new WafpolicyRequiredDataFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy avi_wafpolicy}
*/
export class Wafpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_wafpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wafpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafpolicy to import
  * @param importFromId The id of the existing Wafpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_wafpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicy avi_wafpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: WafpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_wafpolicy',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowModeDelegation = config.allowModeDelegation;
    this._autoUpdateCrs = config.autoUpdateCrs;
    this._bypassStaticExtensions = config.bypassStaticExtensions;
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._enableAppLearning = config.enableAppLearning;
    this._enableAutoRuleUpdates = config.enableAutoRuleUpdates;
    this._enableRegexLearning = config.enableRegexLearning;
    this._failureMode = config.failureMode;
    this._geoDbRef = config.geoDbRef;
    this._id = config.id;
    this._minConfidence = config.minConfidence;
    this._mode = config.mode;
    this._name = config.name;
    this._paranoiaLevel = config.paranoiaLevel;
    this._tenantRef = config.tenantRef;
    this._updatedCrsRulesInDetectionMode = config.updatedCrsRulesInDetectionMode;
    this._uuid = config.uuid;
    this._wafCrsRef = config.wafCrsRef;
    this._wafProfileRef = config.wafProfileRef;
    this._allowlist.internalValue = config.allowlist;
    this._applicationSignatures.internalValue = config.applicationSignatures;
    this._confidenceOverride.internalValue = config.confidenceOverride;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._crsOverrides.internalValue = config.crsOverrides;
    this._learningParams.internalValue = config.learningParams;
    this._markers.internalValue = config.markers;
    this._positiveSecurityModel.internalValue = config.positiveSecurityModel;
    this._postCrsGroups.internalValue = config.postCrsGroups;
    this._preCrsGroups.internalValue = config.preCrsGroups;
    this._requiredDataFiles.internalValue = config.requiredDataFiles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_mode_delegation - computed: false, optional: true, required: false
  private _allowModeDelegation?: string; 
  public get allowModeDelegation() {
    return this.getStringAttribute('allow_mode_delegation');
  }
  public set allowModeDelegation(value: string) {
    this._allowModeDelegation = value;
  }
  public resetAllowModeDelegation() {
    this._allowModeDelegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowModeDelegationInput() {
    return this._allowModeDelegation;
  }

  // auto_update_crs - computed: false, optional: true, required: false
  private _autoUpdateCrs?: string; 
  public get autoUpdateCrs() {
    return this.getStringAttribute('auto_update_crs');
  }
  public set autoUpdateCrs(value: string) {
    this._autoUpdateCrs = value;
  }
  public resetAutoUpdateCrs() {
    this._autoUpdateCrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateCrsInput() {
    return this._autoUpdateCrs;
  }

  // bypass_static_extensions - computed: false, optional: true, required: false
  private _bypassStaticExtensions?: string; 
  public get bypassStaticExtensions() {
    return this.getStringAttribute('bypass_static_extensions');
  }
  public set bypassStaticExtensions(value: string) {
    this._bypassStaticExtensions = value;
  }
  public resetBypassStaticExtensions() {
    this._bypassStaticExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassStaticExtensionsInput() {
    return this._bypassStaticExtensions;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // description - computed: true, optional: true, required: false
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

  // enable_app_learning - computed: false, optional: true, required: false
  private _enableAppLearning?: string; 
  public get enableAppLearning() {
    return this.getStringAttribute('enable_app_learning');
  }
  public set enableAppLearning(value: string) {
    this._enableAppLearning = value;
  }
  public resetEnableAppLearning() {
    this._enableAppLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAppLearningInput() {
    return this._enableAppLearning;
  }

  // enable_auto_rule_updates - computed: false, optional: true, required: false
  private _enableAutoRuleUpdates?: string; 
  public get enableAutoRuleUpdates() {
    return this.getStringAttribute('enable_auto_rule_updates');
  }
  public set enableAutoRuleUpdates(value: string) {
    this._enableAutoRuleUpdates = value;
  }
  public resetEnableAutoRuleUpdates() {
    this._enableAutoRuleUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoRuleUpdatesInput() {
    return this._enableAutoRuleUpdates;
  }

  // enable_regex_learning - computed: false, optional: true, required: false
  private _enableRegexLearning?: string; 
  public get enableRegexLearning() {
    return this.getStringAttribute('enable_regex_learning');
  }
  public set enableRegexLearning(value: string) {
    this._enableRegexLearning = value;
  }
  public resetEnableRegexLearning() {
    this._enableRegexLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRegexLearningInput() {
    return this._enableRegexLearning;
  }

  // failure_mode - computed: false, optional: true, required: false
  private _failureMode?: string; 
  public get failureMode() {
    return this.getStringAttribute('failure_mode');
  }
  public set failureMode(value: string) {
    this._failureMode = value;
  }
  public resetFailureMode() {
    this._failureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureModeInput() {
    return this._failureMode;
  }

  // geo_db_ref - computed: true, optional: true, required: false
  private _geoDbRef?: string; 
  public get geoDbRef() {
    return this.getStringAttribute('geo_db_ref');
  }
  public set geoDbRef(value: string) {
    this._geoDbRef = value;
  }
  public resetGeoDbRef() {
    this._geoDbRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoDbRefInput() {
    return this._geoDbRef;
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

  // min_confidence - computed: false, optional: true, required: false
  private _minConfidence?: string; 
  public get minConfidence() {
    return this.getStringAttribute('min_confidence');
  }
  public set minConfidence(value: string) {
    this._minConfidence = value;
  }
  public resetMinConfidence() {
    this._minConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minConfidenceInput() {
    return this._minConfidence;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // paranoia_level - computed: false, optional: true, required: false
  private _paranoiaLevel?: string; 
  public get paranoiaLevel() {
    return this.getStringAttribute('paranoia_level');
  }
  public set paranoiaLevel(value: string) {
    this._paranoiaLevel = value;
  }
  public resetParanoiaLevel() {
    this._paranoiaLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paranoiaLevelInput() {
    return this._paranoiaLevel;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // updated_crs_rules_in_detection_mode - computed: false, optional: true, required: false
  private _updatedCrsRulesInDetectionMode?: string; 
  public get updatedCrsRulesInDetectionMode() {
    return this.getStringAttribute('updated_crs_rules_in_detection_mode');
  }
  public set updatedCrsRulesInDetectionMode(value: string) {
    this._updatedCrsRulesInDetectionMode = value;
  }
  public resetUpdatedCrsRulesInDetectionMode() {
    this._updatedCrsRulesInDetectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedCrsRulesInDetectionModeInput() {
    return this._updatedCrsRulesInDetectionMode;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // waf_crs_ref - computed: true, optional: true, required: false
  private _wafCrsRef?: string; 
  public get wafCrsRef() {
    return this.getStringAttribute('waf_crs_ref');
  }
  public set wafCrsRef(value: string) {
    this._wafCrsRef = value;
  }
  public resetWafCrsRef() {
    this._wafCrsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafCrsRefInput() {
    return this._wafCrsRef;
  }

  // waf_profile_ref - computed: false, optional: false, required: true
  private _wafProfileRef?: string; 
  public get wafProfileRef() {
    return this.getStringAttribute('waf_profile_ref');
  }
  public set wafProfileRef(value: string) {
    this._wafProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafProfileRefInput() {
    return this._wafProfileRef;
  }

  // allowlist - computed: false, optional: true, required: false
  private _allowlist = new WafpolicyAllowlistStructList(this, "allowlist", true);
  public get allowlist() {
    return this._allowlist;
  }
  public putAllowlist(value: WafpolicyAllowlistStruct[] | cdktf.IResolvable) {
    this._allowlist.internalValue = value;
  }
  public resetAllowlist() {
    this._allowlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistInput() {
    return this._allowlist.internalValue;
  }

  // application_signatures - computed: false, optional: true, required: false
  private _applicationSignatures = new WafpolicyApplicationSignaturesList(this, "application_signatures", true);
  public get applicationSignatures() {
    return this._applicationSignatures;
  }
  public putApplicationSignatures(value: WafpolicyApplicationSignatures[] | cdktf.IResolvable) {
    this._applicationSignatures.internalValue = value;
  }
  public resetApplicationSignatures() {
    this._applicationSignatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSignaturesInput() {
    return this._applicationSignatures.internalValue;
  }

  // confidence_override - computed: false, optional: true, required: false
  private _confidenceOverride = new WafpolicyConfidenceOverrideList(this, "confidence_override", true);
  public get confidenceOverride() {
    return this._confidenceOverride;
  }
  public putConfidenceOverride(value: WafpolicyConfidenceOverride[] | cdktf.IResolvable) {
    this._confidenceOverride.internalValue = value;
  }
  public resetConfidenceOverride() {
    this._confidenceOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceOverrideInput() {
    return this._confidenceOverride.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new WafpolicyConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: WafpolicyConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // crs_overrides - computed: false, optional: true, required: false
  private _crsOverrides = new WafpolicyCrsOverridesList(this, "crs_overrides", false);
  public get crsOverrides() {
    return this._crsOverrides;
  }
  public putCrsOverrides(value: WafpolicyCrsOverrides[] | cdktf.IResolvable) {
    this._crsOverrides.internalValue = value;
  }
  public resetCrsOverrides() {
    this._crsOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crsOverridesInput() {
    return this._crsOverrides.internalValue;
  }

  // learning_params - computed: false, optional: true, required: false
  private _learningParams = new WafpolicyLearningParamsList(this, "learning_params", true);
  public get learningParams() {
    return this._learningParams;
  }
  public putLearningParams(value: WafpolicyLearningParams[] | cdktf.IResolvable) {
    this._learningParams.internalValue = value;
  }
  public resetLearningParams() {
    this._learningParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningParamsInput() {
    return this._learningParams.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new WafpolicyMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: WafpolicyMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // positive_security_model - computed: false, optional: true, required: false
  private _positiveSecurityModel = new WafpolicyPositiveSecurityModelList(this, "positive_security_model", true);
  public get positiveSecurityModel() {
    return this._positiveSecurityModel;
  }
  public putPositiveSecurityModel(value: WafpolicyPositiveSecurityModel[] | cdktf.IResolvable) {
    this._positiveSecurityModel.internalValue = value;
  }
  public resetPositiveSecurityModel() {
    this._positiveSecurityModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positiveSecurityModelInput() {
    return this._positiveSecurityModel.internalValue;
  }

  // post_crs_groups - computed: false, optional: true, required: false
  private _postCrsGroups = new WafpolicyPostCrsGroupsList(this, "post_crs_groups", false);
  public get postCrsGroups() {
    return this._postCrsGroups;
  }
  public putPostCrsGroups(value: WafpolicyPostCrsGroups[] | cdktf.IResolvable) {
    this._postCrsGroups.internalValue = value;
  }
  public resetPostCrsGroups() {
    this._postCrsGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postCrsGroupsInput() {
    return this._postCrsGroups.internalValue;
  }

  // pre_crs_groups - computed: false, optional: true, required: false
  private _preCrsGroups = new WafpolicyPreCrsGroupsList(this, "pre_crs_groups", false);
  public get preCrsGroups() {
    return this._preCrsGroups;
  }
  public putPreCrsGroups(value: WafpolicyPreCrsGroups[] | cdktf.IResolvable) {
    this._preCrsGroups.internalValue = value;
  }
  public resetPreCrsGroups() {
    this._preCrsGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preCrsGroupsInput() {
    return this._preCrsGroups.internalValue;
  }

  // required_data_files - computed: false, optional: true, required: false
  private _requiredDataFiles = new WafpolicyRequiredDataFilesList(this, "required_data_files", false);
  public get requiredDataFiles() {
    return this._requiredDataFiles;
  }
  public putRequiredDataFiles(value: WafpolicyRequiredDataFiles[] | cdktf.IResolvable) {
    this._requiredDataFiles.internalValue = value;
  }
  public resetRequiredDataFiles() {
    this._requiredDataFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDataFilesInput() {
    return this._requiredDataFiles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_mode_delegation: cdktf.stringToTerraform(this._allowModeDelegation),
      auto_update_crs: cdktf.stringToTerraform(this._autoUpdateCrs),
      bypass_static_extensions: cdktf.stringToTerraform(this._bypassStaticExtensions),
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      enable_app_learning: cdktf.stringToTerraform(this._enableAppLearning),
      enable_auto_rule_updates: cdktf.stringToTerraform(this._enableAutoRuleUpdates),
      enable_regex_learning: cdktf.stringToTerraform(this._enableRegexLearning),
      failure_mode: cdktf.stringToTerraform(this._failureMode),
      geo_db_ref: cdktf.stringToTerraform(this._geoDbRef),
      id: cdktf.stringToTerraform(this._id),
      min_confidence: cdktf.stringToTerraform(this._minConfidence),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      paranoia_level: cdktf.stringToTerraform(this._paranoiaLevel),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      updated_crs_rules_in_detection_mode: cdktf.stringToTerraform(this._updatedCrsRulesInDetectionMode),
      uuid: cdktf.stringToTerraform(this._uuid),
      waf_crs_ref: cdktf.stringToTerraform(this._wafCrsRef),
      waf_profile_ref: cdktf.stringToTerraform(this._wafProfileRef),
      allowlist: cdktf.listMapper(wafpolicyAllowlistStructToTerraform, true)(this._allowlist.internalValue),
      application_signatures: cdktf.listMapper(wafpolicyApplicationSignaturesToTerraform, true)(this._applicationSignatures.internalValue),
      confidence_override: cdktf.listMapper(wafpolicyConfidenceOverrideToTerraform, true)(this._confidenceOverride.internalValue),
      configpb_attributes: cdktf.listMapper(wafpolicyConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      crs_overrides: cdktf.listMapper(wafpolicyCrsOverridesToTerraform, true)(this._crsOverrides.internalValue),
      learning_params: cdktf.listMapper(wafpolicyLearningParamsToTerraform, true)(this._learningParams.internalValue),
      markers: cdktf.listMapper(wafpolicyMarkersToTerraform, true)(this._markers.internalValue),
      positive_security_model: cdktf.listMapper(wafpolicyPositiveSecurityModelToTerraform, true)(this._positiveSecurityModel.internalValue),
      post_crs_groups: cdktf.listMapper(wafpolicyPostCrsGroupsToTerraform, true)(this._postCrsGroups.internalValue),
      pre_crs_groups: cdktf.listMapper(wafpolicyPreCrsGroupsToTerraform, true)(this._preCrsGroups.internalValue),
      required_data_files: cdktf.listMapper(wafpolicyRequiredDataFilesToTerraform, true)(this._requiredDataFiles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_mode_delegation: {
        value: cdktf.stringToHclTerraform(this._allowModeDelegation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_update_crs: {
        value: cdktf.stringToHclTerraform(this._autoUpdateCrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_static_extensions: {
        value: cdktf.stringToHclTerraform(this._bypassStaticExtensions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_app_learning: {
        value: cdktf.stringToHclTerraform(this._enableAppLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_auto_rule_updates: {
        value: cdktf.stringToHclTerraform(this._enableAutoRuleUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_regex_learning: {
        value: cdktf.stringToHclTerraform(this._enableRegexLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_mode: {
        value: cdktf.stringToHclTerraform(this._failureMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_db_ref: {
        value: cdktf.stringToHclTerraform(this._geoDbRef),
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
      min_confidence: {
        value: cdktf.stringToHclTerraform(this._minConfidence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      paranoia_level: {
        value: cdktf.stringToHclTerraform(this._paranoiaLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_crs_rules_in_detection_mode: {
        value: cdktf.stringToHclTerraform(this._updatedCrsRulesInDetectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_crs_ref: {
        value: cdktf.stringToHclTerraform(this._wafCrsRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_profile_ref: {
        value: cdktf.stringToHclTerraform(this._wafProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowlist: {
        value: cdktf.listMapperHcl(wafpolicyAllowlistStructToHclTerraform, true)(this._allowlist.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafpolicyAllowlistStructList",
      },
      application_signatures: {
        value: cdktf.listMapperHcl(wafpolicyApplicationSignaturesToHclTerraform, true)(this._applicationSignatures.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafpolicyApplicationSignaturesList",
      },
      confidence_override: {
        value: cdktf.listMapperHcl(wafpolicyConfidenceOverrideToHclTerraform, true)(this._confidenceOverride.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafpolicyConfidenceOverrideList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(wafpolicyConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafpolicyConfigpbAttributesList",
      },
      crs_overrides: {
        value: cdktf.listMapperHcl(wafpolicyCrsOverridesToHclTerraform, true)(this._crsOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafpolicyCrsOverridesList",
      },
      learning_params: {
        value: cdktf.listMapperHcl(wafpolicyLearningParamsToHclTerraform, true)(this._learningParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafpolicyLearningParamsList",
      },
      markers: {
        value: cdktf.listMapperHcl(wafpolicyMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafpolicyMarkersList",
      },
      positive_security_model: {
        value: cdktf.listMapperHcl(wafpolicyPositiveSecurityModelToHclTerraform, true)(this._positiveSecurityModel.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafpolicyPositiveSecurityModelList",
      },
      post_crs_groups: {
        value: cdktf.listMapperHcl(wafpolicyPostCrsGroupsToHclTerraform, true)(this._postCrsGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafpolicyPostCrsGroupsList",
      },
      pre_crs_groups: {
        value: cdktf.listMapperHcl(wafpolicyPreCrsGroupsToHclTerraform, true)(this._preCrsGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafpolicyPreCrsGroupsList",
      },
      required_data_files: {
        value: cdktf.listMapperHcl(wafpolicyRequiredDataFilesToHclTerraform, true)(this._requiredDataFiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafpolicyRequiredDataFilesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
