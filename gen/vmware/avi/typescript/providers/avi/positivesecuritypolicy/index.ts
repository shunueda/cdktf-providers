// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PositivesecuritypolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#description Positivesecuritypolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#enable_positive_security_rule_updates Positivesecuritypolicy#enable_positive_security_rule_updates}
  */
  readonly enablePositiveSecurityRuleUpdates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#enable_regex_programming Positivesecuritypolicy#enable_regex_programming}
  */
  readonly enableRegexProgramming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#id Positivesecuritypolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#name Positivesecuritypolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#tenant_ref Positivesecuritypolicy#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#uuid Positivesecuritypolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#configpb_attributes Positivesecuritypolicy#configpb_attributes}
  */
  readonly configpbAttributes?: PositivesecuritypolicyConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * positive_security_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#positive_security_params Positivesecuritypolicy#positive_security_params}
  */
  readonly positiveSecurityParams?: PositivesecuritypolicyPositiveSecurityParams[] | cdktf.IResolvable;
}
export interface PositivesecuritypolicyConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#version Positivesecuritypolicy#version}
  */
  readonly version?: string;
}

export function positivesecuritypolicyConfigpbAttributesToTerraform(struct?: PositivesecuritypolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function positivesecuritypolicyConfigpbAttributesToHclTerraform(struct?: PositivesecuritypolicyConfigpbAttributes | cdktf.IResolvable): any {
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

export class PositivesecuritypolicyConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PositivesecuritypolicyConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PositivesecuritypolicyConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class PositivesecuritypolicyConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : PositivesecuritypolicyConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): PositivesecuritypolicyConfigpbAttributesOutputReference {
    return new PositivesecuritypolicyConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PositivesecuritypolicyPositiveSecurityParamsConfidenceOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#confid_high_value Positivesecuritypolicy#confid_high_value}
  */
  readonly confidHighValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#confid_low_value Positivesecuritypolicy#confid_low_value}
  */
  readonly confidLowValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#confid_probable_value Positivesecuritypolicy#confid_probable_value}
  */
  readonly confidProbableValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#confid_very_high_value Positivesecuritypolicy#confid_very_high_value}
  */
  readonly confidVeryHighValue?: string;
}

export function positivesecuritypolicyPositiveSecurityParamsConfidenceOverrideToTerraform(struct?: PositivesecuritypolicyPositiveSecurityParamsConfidenceOverride | cdktf.IResolvable): any {
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


export function positivesecuritypolicyPositiveSecurityParamsConfidenceOverrideToHclTerraform(struct?: PositivesecuritypolicyPositiveSecurityParamsConfidenceOverride | cdktf.IResolvable): any {
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

export class PositivesecuritypolicyPositiveSecurityParamsConfidenceOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PositivesecuritypolicyPositiveSecurityParamsConfidenceOverride | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PositivesecuritypolicyPositiveSecurityParamsConfidenceOverride | cdktf.IResolvable | undefined) {
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

export class PositivesecuritypolicyPositiveSecurityParamsConfidenceOverrideList extends cdktf.ComplexList {
  public internalValue? : PositivesecuritypolicyPositiveSecurityParamsConfidenceOverride[] | cdktf.IResolvable

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
  public get(index: number): PositivesecuritypolicyPositiveSecurityParamsConfidenceOverrideOutputReference {
    return new PositivesecuritypolicyPositiveSecurityParamsConfidenceOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PositivesecuritypolicyPositiveSecurityParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#max_params Positivesecuritypolicy#max_params}
  */
  readonly maxParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#max_uris Positivesecuritypolicy#max_uris}
  */
  readonly maxUris?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#min_confidence Positivesecuritypolicy#min_confidence}
  */
  readonly minConfidence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#min_hits_to_program Positivesecuritypolicy#min_hits_to_program}
  */
  readonly minHitsToProgram?: string;
  /**
  * confidence_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#confidence_override Positivesecuritypolicy#confidence_override}
  */
  readonly confidenceOverride?: PositivesecuritypolicyPositiveSecurityParamsConfidenceOverride[] | cdktf.IResolvable;
}

export function positivesecuritypolicyPositiveSecurityParamsToTerraform(struct?: PositivesecuritypolicyPositiveSecurityParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_params: cdktf.stringToTerraform(struct!.maxParams),
    max_uris: cdktf.stringToTerraform(struct!.maxUris),
    min_confidence: cdktf.stringToTerraform(struct!.minConfidence),
    min_hits_to_program: cdktf.stringToTerraform(struct!.minHitsToProgram),
    confidence_override: cdktf.listMapper(positivesecuritypolicyPositiveSecurityParamsConfidenceOverrideToTerraform, true)(struct!.confidenceOverride),
  }
}


export function positivesecuritypolicyPositiveSecurityParamsToHclTerraform(struct?: PositivesecuritypolicyPositiveSecurityParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    min_confidence: {
      value: cdktf.stringToHclTerraform(struct!.minConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_hits_to_program: {
      value: cdktf.stringToHclTerraform(struct!.minHitsToProgram),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confidence_override: {
      value: cdktf.listMapperHcl(positivesecuritypolicyPositiveSecurityParamsConfidenceOverrideToHclTerraform, true)(struct!.confidenceOverride),
      isBlock: true,
      type: "set",
      storageClassType: "PositivesecuritypolicyPositiveSecurityParamsConfidenceOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PositivesecuritypolicyPositiveSecurityParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PositivesecuritypolicyPositiveSecurityParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParams = this._maxParams;
    }
    if (this._maxUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUris = this._maxUris;
    }
    if (this._minConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.minConfidence = this._minConfidence;
    }
    if (this._minHitsToProgram !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHitsToProgram = this._minHitsToProgram;
    }
    if (this._confidenceOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceOverride = this._confidenceOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PositivesecuritypolicyPositiveSecurityParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxParams = undefined;
      this._maxUris = undefined;
      this._minConfidence = undefined;
      this._minHitsToProgram = undefined;
      this._confidenceOverride.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxParams = value.maxParams;
      this._maxUris = value.maxUris;
      this._minConfidence = value.minConfidence;
      this._minHitsToProgram = value.minHitsToProgram;
      this._confidenceOverride.internalValue = value.confidenceOverride;
    }
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

  // min_hits_to_program - computed: false, optional: true, required: false
  private _minHitsToProgram?: string; 
  public get minHitsToProgram() {
    return this.getStringAttribute('min_hits_to_program');
  }
  public set minHitsToProgram(value: string) {
    this._minHitsToProgram = value;
  }
  public resetMinHitsToProgram() {
    this._minHitsToProgram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHitsToProgramInput() {
    return this._minHitsToProgram;
  }

  // confidence_override - computed: false, optional: true, required: false
  private _confidenceOverride = new PositivesecuritypolicyPositiveSecurityParamsConfidenceOverrideList(this, "confidence_override", true);
  public get confidenceOverride() {
    return this._confidenceOverride;
  }
  public putConfidenceOverride(value: PositivesecuritypolicyPositiveSecurityParamsConfidenceOverride[] | cdktf.IResolvable) {
    this._confidenceOverride.internalValue = value;
  }
  public resetConfidenceOverride() {
    this._confidenceOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceOverrideInput() {
    return this._confidenceOverride.internalValue;
  }
}

export class PositivesecuritypolicyPositiveSecurityParamsList extends cdktf.ComplexList {
  public internalValue? : PositivesecuritypolicyPositiveSecurityParams[] | cdktf.IResolvable

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
  public get(index: number): PositivesecuritypolicyPositiveSecurityParamsOutputReference {
    return new PositivesecuritypolicyPositiveSecurityParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy avi_positivesecuritypolicy}
*/
export class Positivesecuritypolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_positivesecuritypolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Positivesecuritypolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Positivesecuritypolicy to import
  * @param importFromId The id of the existing Positivesecuritypolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Positivesecuritypolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_positivesecuritypolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/positivesecuritypolicy avi_positivesecuritypolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PositivesecuritypolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PositivesecuritypolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_positivesecuritypolicy',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
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
    this._enablePositiveSecurityRuleUpdates = config.enablePositiveSecurityRuleUpdates;
    this._enableRegexProgramming = config.enableRegexProgramming;
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._positiveSecurityParams.internalValue = config.positiveSecurityParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enable_positive_security_rule_updates - computed: false, optional: true, required: false
  private _enablePositiveSecurityRuleUpdates?: string; 
  public get enablePositiveSecurityRuleUpdates() {
    return this.getStringAttribute('enable_positive_security_rule_updates');
  }
  public set enablePositiveSecurityRuleUpdates(value: string) {
    this._enablePositiveSecurityRuleUpdates = value;
  }
  public resetEnablePositiveSecurityRuleUpdates() {
    this._enablePositiveSecurityRuleUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePositiveSecurityRuleUpdatesInput() {
    return this._enablePositiveSecurityRuleUpdates;
  }

  // enable_regex_programming - computed: false, optional: true, required: false
  private _enableRegexProgramming?: string; 
  public get enableRegexProgramming() {
    return this.getStringAttribute('enable_regex_programming');
  }
  public set enableRegexProgramming(value: string) {
    this._enableRegexProgramming = value;
  }
  public resetEnableRegexProgramming() {
    this._enableRegexProgramming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRegexProgrammingInput() {
    return this._enableRegexProgramming;
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

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new PositivesecuritypolicyConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: PositivesecuritypolicyConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // positive_security_params - computed: false, optional: true, required: false
  private _positiveSecurityParams = new PositivesecuritypolicyPositiveSecurityParamsList(this, "positive_security_params", true);
  public get positiveSecurityParams() {
    return this._positiveSecurityParams;
  }
  public putPositiveSecurityParams(value: PositivesecuritypolicyPositiveSecurityParams[] | cdktf.IResolvable) {
    this._positiveSecurityParams.internalValue = value;
  }
  public resetPositiveSecurityParams() {
    this._positiveSecurityParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positiveSecurityParamsInput() {
    return this._positiveSecurityParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enable_positive_security_rule_updates: cdktf.stringToTerraform(this._enablePositiveSecurityRuleUpdates),
      enable_regex_programming: cdktf.stringToTerraform(this._enableRegexProgramming),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(positivesecuritypolicyConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      positive_security_params: cdktf.listMapper(positivesecuritypolicyPositiveSecurityParamsToTerraform, true)(this._positiveSecurityParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_positive_security_rule_updates: {
        value: cdktf.stringToHclTerraform(this._enablePositiveSecurityRuleUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_regex_programming: {
        value: cdktf.stringToHclTerraform(this._enableRegexProgramming),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
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
      configpb_attributes: {
        value: cdktf.listMapperHcl(positivesecuritypolicyConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PositivesecuritypolicyConfigpbAttributesList",
      },
      positive_security_params: {
        value: cdktf.listMapperHcl(positivesecuritypolicyPositiveSecurityParamsToHclTerraform, true)(this._positiveSecurityParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PositivesecuritypolicyPositiveSecurityParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
