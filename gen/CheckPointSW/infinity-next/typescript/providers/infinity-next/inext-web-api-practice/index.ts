// https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InextWebApiPracticeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the resource, also acts as its unique ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#name InextWebApiPractice#name}
  */
  readonly name: string;
  /**
  * The visibility of the resource, Shared or Local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#visibility InextWebApiPractice#visibility}
  */
  readonly visibility?: string;
  /**
  * api_attacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#api_attacks InextWebApiPractice#api_attacks}
  */
  readonly apiAttacks?: InextWebApiPracticeApiAttacks;
  /**
  * file_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#file_security InextWebApiPractice#file_security}
  */
  readonly fileSecurity?: InextWebApiPracticeFileSecurity;
  /**
  * ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#ips InextWebApiPractice#ips}
  */
  readonly ips?: InextWebApiPracticeIps;
  /**
  * schema_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#schema_validation InextWebApiPractice#schema_validation}
  */
  readonly schemaValidation?: InextWebApiPracticeSchemaValidation;
}
export interface InextWebApiPracticeApiAttacksAdvancedSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#body_size InextWebApiPractice#body_size}
  */
  readonly bodySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#header_size InextWebApiPractice#header_size}
  */
  readonly headerSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#illegal_http_methods InextWebApiPractice#illegal_http_methods}
  */
  readonly illegalHttpMethods?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#max_object_depth InextWebApiPractice#max_object_depth}
  */
  readonly maxObjectDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#url_size InextWebApiPractice#url_size}
  */
  readonly urlSize?: number;
}

export function inextWebApiPracticeApiAttacksAdvancedSettingToTerraform(struct?: InextWebApiPracticeApiAttacksAdvancedSettingOutputReference | InextWebApiPracticeApiAttacksAdvancedSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_size: cdktf.numberToTerraform(struct!.bodySize),
    header_size: cdktf.numberToTerraform(struct!.headerSize),
    illegal_http_methods: cdktf.booleanToTerraform(struct!.illegalHttpMethods),
    max_object_depth: cdktf.numberToTerraform(struct!.maxObjectDepth),
    url_size: cdktf.numberToTerraform(struct!.urlSize),
  }
}


export function inextWebApiPracticeApiAttacksAdvancedSettingToHclTerraform(struct?: InextWebApiPracticeApiAttacksAdvancedSettingOutputReference | InextWebApiPracticeApiAttacksAdvancedSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_size: {
      value: cdktf.numberToHclTerraform(struct!.bodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_size: {
      value: cdktf.numberToHclTerraform(struct!.headerSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal_http_methods: {
      value: cdktf.booleanToHclTerraform(struct!.illegalHttpMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_object_depth: {
      value: cdktf.numberToHclTerraform(struct!.maxObjectDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url_size: {
      value: cdktf.numberToHclTerraform(struct!.urlSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebApiPracticeApiAttacksAdvancedSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InextWebApiPracticeApiAttacksAdvancedSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodySize = this._bodySize;
    }
    if (this._headerSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSize = this._headerSize;
    }
    if (this._illegalHttpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegalHttpMethods = this._illegalHttpMethods;
    }
    if (this._maxObjectDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxObjectDepth = this._maxObjectDepth;
    }
    if (this._urlSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlSize = this._urlSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebApiPracticeApiAttacksAdvancedSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodySize = undefined;
      this._headerSize = undefined;
      this._illegalHttpMethods = undefined;
      this._maxObjectDepth = undefined;
      this._urlSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodySize = value.bodySize;
      this._headerSize = value.headerSize;
      this._illegalHttpMethods = value.illegalHttpMethods;
      this._maxObjectDepth = value.maxObjectDepth;
      this._urlSize = value.urlSize;
    }
  }

  // body_size - computed: false, optional: true, required: false
  private _bodySize?: number; 
  public get bodySize() {
    return this.getNumberAttribute('body_size');
  }
  public set bodySize(value: number) {
    this._bodySize = value;
  }
  public resetBodySize() {
    this._bodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodySizeInput() {
    return this._bodySize;
  }

  // header_size - computed: false, optional: true, required: false
  private _headerSize?: number; 
  public get headerSize() {
    return this.getNumberAttribute('header_size');
  }
  public set headerSize(value: number) {
    this._headerSize = value;
  }
  public resetHeaderSize() {
    this._headerSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSizeInput() {
    return this._headerSize;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // illegal_http_methods - computed: false, optional: true, required: false
  private _illegalHttpMethods?: boolean | cdktf.IResolvable; 
  public get illegalHttpMethods() {
    return this.getBooleanAttribute('illegal_http_methods');
  }
  public set illegalHttpMethods(value: boolean | cdktf.IResolvable) {
    this._illegalHttpMethods = value;
  }
  public resetIllegalHttpMethods() {
    this._illegalHttpMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalHttpMethodsInput() {
    return this._illegalHttpMethods;
  }

  // max_object_depth - computed: false, optional: true, required: false
  private _maxObjectDepth?: number; 
  public get maxObjectDepth() {
    return this.getNumberAttribute('max_object_depth');
  }
  public set maxObjectDepth(value: number) {
    this._maxObjectDepth = value;
  }
  public resetMaxObjectDepth() {
    this._maxObjectDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectDepthInput() {
    return this._maxObjectDepth;
  }

  // url_size - computed: false, optional: true, required: false
  private _urlSize?: number; 
  public get urlSize() {
    return this.getNumberAttribute('url_size');
  }
  public set urlSize(value: number) {
    this._urlSize = value;
  }
  public resetUrlSize() {
    this._urlSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSizeInput() {
    return this._urlSize;
  }
}
export interface InextWebApiPracticeApiAttacks {
  /**
  * Medium, High or Critical
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#minimum_severity InextWebApiPractice#minimum_severity}
  */
  readonly minimumSeverity?: string;
  /**
  * advanced_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#advanced_setting InextWebApiPractice#advanced_setting}
  */
  readonly advancedSetting?: InextWebApiPracticeApiAttacksAdvancedSetting;
}

export function inextWebApiPracticeApiAttacksToTerraform(struct?: InextWebApiPracticeApiAttacksOutputReference | InextWebApiPracticeApiAttacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_severity: cdktf.stringToTerraform(struct!.minimumSeverity),
    advanced_setting: inextWebApiPracticeApiAttacksAdvancedSettingToTerraform(struct!.advancedSetting),
  }
}


export function inextWebApiPracticeApiAttacksToHclTerraform(struct?: InextWebApiPracticeApiAttacksOutputReference | InextWebApiPracticeApiAttacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_severity: {
      value: cdktf.stringToHclTerraform(struct!.minimumSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_setting: {
      value: inextWebApiPracticeApiAttacksAdvancedSettingToHclTerraform(struct!.advancedSetting),
      isBlock: true,
      type: "set",
      storageClassType: "InextWebApiPracticeApiAttacksAdvancedSettingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebApiPracticeApiAttacksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InextWebApiPracticeApiAttacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSeverity = this._minimumSeverity;
    }
    if (this._advancedSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSetting = this._advancedSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebApiPracticeApiAttacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minimumSeverity = undefined;
      this._advancedSetting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minimumSeverity = value.minimumSeverity;
      this._advancedSetting.internalValue = value.advancedSetting;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimum_severity - computed: false, optional: true, required: false
  private _minimumSeverity?: string; 
  public get minimumSeverity() {
    return this.getStringAttribute('minimum_severity');
  }
  public set minimumSeverity(value: string) {
    this._minimumSeverity = value;
  }
  public resetMinimumSeverity() {
    this._minimumSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSeverityInput() {
    return this._minimumSeverity;
  }

  // advanced_setting - computed: false, optional: true, required: false
  private _advancedSetting = new InextWebApiPracticeApiAttacksAdvancedSettingOutputReference(this, "advanced_setting");
  public get advancedSetting() {
    return this._advancedSetting;
  }
  public putAdvancedSetting(value: InextWebApiPracticeApiAttacksAdvancedSetting) {
    this._advancedSetting.internalValue = value;
  }
  public resetAdvancedSetting() {
    this._advancedSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingInput() {
    return this._advancedSetting.internalValue;
  }
}
export interface InextWebApiPracticeFileSecurity {
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#allow_an_unopened_archive InextWebApiPractice#allow_an_unopened_archive}
  */
  readonly allowAnUnopenedArchive?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#allow_archive_within_archive InextWebApiPractice#allow_archive_within_archive}
  */
  readonly allowArchiveWithinArchive?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#allow_file_size_limit InextWebApiPractice#allow_file_size_limit}
  */
  readonly allowFileSizeLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#allow_file_type InextWebApiPractice#allow_file_type}
  */
  readonly allowFileType?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#archive_file_size_limit InextWebApiPractice#archive_file_size_limit}
  */
  readonly archiveFileSizeLimit?: number;
  /**
  * Bytes, KB, MB or GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#archive_file_size_limit_unit InextWebApiPractice#archive_file_size_limit_unit}
  */
  readonly archiveFileSizeLimitUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#file_size_limit InextWebApiPractice#file_size_limit}
  */
  readonly fileSizeLimit?: number;
  /**
  * Bytes, KB, MB or GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#file_size_limit_unit InextWebApiPractice#file_size_limit_unit}
  */
  readonly fileSizeLimitUnit?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#files_without_name InextWebApiPractice#files_without_name}
  */
  readonly filesWithoutName?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#high_confidence InextWebApiPractice#high_confidence}
  */
  readonly highConfidence?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#low_confidence InextWebApiPractice#low_confidence}
  */
  readonly lowConfidence?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#medium_confidence InextWebApiPractice#medium_confidence}
  */
  readonly mediumConfidence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#required_archive_extraction InextWebApiPractice#required_archive_extraction}
  */
  readonly requiredArchiveExtraction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#required_threat_emulation InextWebApiPractice#required_threat_emulation}
  */
  readonly requiredThreatEmulation?: boolean | cdktf.IResolvable;
  /**
  * LowOrAbove, MediumOrAbove, HighOrAbove or Critical
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#severity_level InextWebApiPractice#severity_level}
  */
  readonly severityLevel?: string;
}

export function inextWebApiPracticeFileSecurityToTerraform(struct?: InextWebApiPracticeFileSecurityOutputReference | InextWebApiPracticeFileSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_an_unopened_archive: cdktf.stringToTerraform(struct!.allowAnUnopenedArchive),
    allow_archive_within_archive: cdktf.stringToTerraform(struct!.allowArchiveWithinArchive),
    allow_file_size_limit: cdktf.stringToTerraform(struct!.allowFileSizeLimit),
    allow_file_type: cdktf.booleanToTerraform(struct!.allowFileType),
    archive_file_size_limit: cdktf.numberToTerraform(struct!.archiveFileSizeLimit),
    archive_file_size_limit_unit: cdktf.stringToTerraform(struct!.archiveFileSizeLimitUnit),
    file_size_limit: cdktf.numberToTerraform(struct!.fileSizeLimit),
    file_size_limit_unit: cdktf.stringToTerraform(struct!.fileSizeLimitUnit),
    files_without_name: cdktf.stringToTerraform(struct!.filesWithoutName),
    high_confidence: cdktf.stringToTerraform(struct!.highConfidence),
    low_confidence: cdktf.stringToTerraform(struct!.lowConfidence),
    medium_confidence: cdktf.stringToTerraform(struct!.mediumConfidence),
    required_archive_extraction: cdktf.booleanToTerraform(struct!.requiredArchiveExtraction),
    required_threat_emulation: cdktf.booleanToTerraform(struct!.requiredThreatEmulation),
    severity_level: cdktf.stringToTerraform(struct!.severityLevel),
  }
}


export function inextWebApiPracticeFileSecurityToHclTerraform(struct?: InextWebApiPracticeFileSecurityOutputReference | InextWebApiPracticeFileSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_an_unopened_archive: {
      value: cdktf.stringToHclTerraform(struct!.allowAnUnopenedArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_archive_within_archive: {
      value: cdktf.stringToHclTerraform(struct!.allowArchiveWithinArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_file_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.allowFileSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_file_type: {
      value: cdktf.booleanToHclTerraform(struct!.allowFileType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    archive_file_size_limit: {
      value: cdktf.numberToHclTerraform(struct!.archiveFileSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    archive_file_size_limit_unit: {
      value: cdktf.stringToHclTerraform(struct!.archiveFileSizeLimitUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_size_limit: {
      value: cdktf.numberToHclTerraform(struct!.fileSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_size_limit_unit: {
      value: cdktf.stringToHclTerraform(struct!.fileSizeLimitUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    files_without_name: {
      value: cdktf.stringToHclTerraform(struct!.filesWithoutName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    high_confidence: {
      value: cdktf.stringToHclTerraform(struct!.highConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low_confidence: {
      value: cdktf.stringToHclTerraform(struct!.lowConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    medium_confidence: {
      value: cdktf.stringToHclTerraform(struct!.mediumConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_archive_extraction: {
      value: cdktf.booleanToHclTerraform(struct!.requiredArchiveExtraction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_threat_emulation: {
      value: cdktf.booleanToHclTerraform(struct!.requiredThreatEmulation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    severity_level: {
      value: cdktf.stringToHclTerraform(struct!.severityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebApiPracticeFileSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InextWebApiPracticeFileSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAnUnopenedArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAnUnopenedArchive = this._allowAnUnopenedArchive;
    }
    if (this._allowArchiveWithinArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowArchiveWithinArchive = this._allowArchiveWithinArchive;
    }
    if (this._allowFileSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFileSizeLimit = this._allowFileSizeLimit;
    }
    if (this._allowFileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFileType = this._allowFileType;
    }
    if (this._archiveFileSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveFileSizeLimit = this._archiveFileSizeLimit;
    }
    if (this._archiveFileSizeLimitUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveFileSizeLimitUnit = this._archiveFileSizeLimitUnit;
    }
    if (this._fileSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSizeLimit = this._fileSizeLimit;
    }
    if (this._fileSizeLimitUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSizeLimitUnit = this._fileSizeLimitUnit;
    }
    if (this._filesWithoutName !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesWithoutName = this._filesWithoutName;
    }
    if (this._highConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.highConfidence = this._highConfidence;
    }
    if (this._lowConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowConfidence = this._lowConfidence;
    }
    if (this._mediumConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumConfidence = this._mediumConfidence;
    }
    if (this._requiredArchiveExtraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredArchiveExtraction = this._requiredArchiveExtraction;
    }
    if (this._requiredThreatEmulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredThreatEmulation = this._requiredThreatEmulation;
    }
    if (this._severityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityLevel = this._severityLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebApiPracticeFileSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAnUnopenedArchive = undefined;
      this._allowArchiveWithinArchive = undefined;
      this._allowFileSizeLimit = undefined;
      this._allowFileType = undefined;
      this._archiveFileSizeLimit = undefined;
      this._archiveFileSizeLimitUnit = undefined;
      this._fileSizeLimit = undefined;
      this._fileSizeLimitUnit = undefined;
      this._filesWithoutName = undefined;
      this._highConfidence = undefined;
      this._lowConfidence = undefined;
      this._mediumConfidence = undefined;
      this._requiredArchiveExtraction = undefined;
      this._requiredThreatEmulation = undefined;
      this._severityLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAnUnopenedArchive = value.allowAnUnopenedArchive;
      this._allowArchiveWithinArchive = value.allowArchiveWithinArchive;
      this._allowFileSizeLimit = value.allowFileSizeLimit;
      this._allowFileType = value.allowFileType;
      this._archiveFileSizeLimit = value.archiveFileSizeLimit;
      this._archiveFileSizeLimitUnit = value.archiveFileSizeLimitUnit;
      this._fileSizeLimit = value.fileSizeLimit;
      this._fileSizeLimitUnit = value.fileSizeLimitUnit;
      this._filesWithoutName = value.filesWithoutName;
      this._highConfidence = value.highConfidence;
      this._lowConfidence = value.lowConfidence;
      this._mediumConfidence = value.mediumConfidence;
      this._requiredArchiveExtraction = value.requiredArchiveExtraction;
      this._requiredThreatEmulation = value.requiredThreatEmulation;
      this._severityLevel = value.severityLevel;
    }
  }

  // allow_an_unopened_archive - computed: false, optional: true, required: false
  private _allowAnUnopenedArchive?: string; 
  public get allowAnUnopenedArchive() {
    return this.getStringAttribute('allow_an_unopened_archive');
  }
  public set allowAnUnopenedArchive(value: string) {
    this._allowAnUnopenedArchive = value;
  }
  public resetAllowAnUnopenedArchive() {
    this._allowAnUnopenedArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnUnopenedArchiveInput() {
    return this._allowAnUnopenedArchive;
  }

  // allow_archive_within_archive - computed: false, optional: true, required: false
  private _allowArchiveWithinArchive?: string; 
  public get allowArchiveWithinArchive() {
    return this.getStringAttribute('allow_archive_within_archive');
  }
  public set allowArchiveWithinArchive(value: string) {
    this._allowArchiveWithinArchive = value;
  }
  public resetAllowArchiveWithinArchive() {
    this._allowArchiveWithinArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowArchiveWithinArchiveInput() {
    return this._allowArchiveWithinArchive;
  }

  // allow_file_size_limit - computed: false, optional: true, required: false
  private _allowFileSizeLimit?: string; 
  public get allowFileSizeLimit() {
    return this.getStringAttribute('allow_file_size_limit');
  }
  public set allowFileSizeLimit(value: string) {
    this._allowFileSizeLimit = value;
  }
  public resetAllowFileSizeLimit() {
    this._allowFileSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFileSizeLimitInput() {
    return this._allowFileSizeLimit;
  }

  // allow_file_type - computed: false, optional: true, required: false
  private _allowFileType?: boolean | cdktf.IResolvable; 
  public get allowFileType() {
    return this.getBooleanAttribute('allow_file_type');
  }
  public set allowFileType(value: boolean | cdktf.IResolvable) {
    this._allowFileType = value;
  }
  public resetAllowFileType() {
    this._allowFileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFileTypeInput() {
    return this._allowFileType;
  }

  // archive_file_size_limit - computed: false, optional: true, required: false
  private _archiveFileSizeLimit?: number; 
  public get archiveFileSizeLimit() {
    return this.getNumberAttribute('archive_file_size_limit');
  }
  public set archiveFileSizeLimit(value: number) {
    this._archiveFileSizeLimit = value;
  }
  public resetArchiveFileSizeLimit() {
    this._archiveFileSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveFileSizeLimitInput() {
    return this._archiveFileSizeLimit;
  }

  // archive_file_size_limit_unit - computed: false, optional: true, required: false
  private _archiveFileSizeLimitUnit?: string; 
  public get archiveFileSizeLimitUnit() {
    return this.getStringAttribute('archive_file_size_limit_unit');
  }
  public set archiveFileSizeLimitUnit(value: string) {
    this._archiveFileSizeLimitUnit = value;
  }
  public resetArchiveFileSizeLimitUnit() {
    this._archiveFileSizeLimitUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveFileSizeLimitUnitInput() {
    return this._archiveFileSizeLimitUnit;
  }

  // file_size_limit - computed: false, optional: true, required: false
  private _fileSizeLimit?: number; 
  public get fileSizeLimit() {
    return this.getNumberAttribute('file_size_limit');
  }
  public set fileSizeLimit(value: number) {
    this._fileSizeLimit = value;
  }
  public resetFileSizeLimit() {
    this._fileSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeLimitInput() {
    return this._fileSizeLimit;
  }

  // file_size_limit_unit - computed: false, optional: true, required: false
  private _fileSizeLimitUnit?: string; 
  public get fileSizeLimitUnit() {
    return this.getStringAttribute('file_size_limit_unit');
  }
  public set fileSizeLimitUnit(value: string) {
    this._fileSizeLimitUnit = value;
  }
  public resetFileSizeLimitUnit() {
    this._fileSizeLimitUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeLimitUnitInput() {
    return this._fileSizeLimitUnit;
  }

  // files_without_name - computed: false, optional: true, required: false
  private _filesWithoutName?: string; 
  public get filesWithoutName() {
    return this.getStringAttribute('files_without_name');
  }
  public set filesWithoutName(value: string) {
    this._filesWithoutName = value;
  }
  public resetFilesWithoutName() {
    this._filesWithoutName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesWithoutNameInput() {
    return this._filesWithoutName;
  }

  // high_confidence - computed: false, optional: true, required: false
  private _highConfidence?: string; 
  public get highConfidence() {
    return this.getStringAttribute('high_confidence');
  }
  public set highConfidence(value: string) {
    this._highConfidence = value;
  }
  public resetHighConfidence() {
    this._highConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highConfidenceInput() {
    return this._highConfidence;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // low_confidence - computed: false, optional: true, required: false
  private _lowConfidence?: string; 
  public get lowConfidence() {
    return this.getStringAttribute('low_confidence');
  }
  public set lowConfidence(value: string) {
    this._lowConfidence = value;
  }
  public resetLowConfidence() {
    this._lowConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowConfidenceInput() {
    return this._lowConfidence;
  }

  // medium_confidence - computed: false, optional: true, required: false
  private _mediumConfidence?: string; 
  public get mediumConfidence() {
    return this.getStringAttribute('medium_confidence');
  }
  public set mediumConfidence(value: string) {
    this._mediumConfidence = value;
  }
  public resetMediumConfidence() {
    this._mediumConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumConfidenceInput() {
    return this._mediumConfidence;
  }

  // required_archive_extraction - computed: false, optional: true, required: false
  private _requiredArchiveExtraction?: boolean | cdktf.IResolvable; 
  public get requiredArchiveExtraction() {
    return this.getBooleanAttribute('required_archive_extraction');
  }
  public set requiredArchiveExtraction(value: boolean | cdktf.IResolvable) {
    this._requiredArchiveExtraction = value;
  }
  public resetRequiredArchiveExtraction() {
    this._requiredArchiveExtraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredArchiveExtractionInput() {
    return this._requiredArchiveExtraction;
  }

  // required_threat_emulation - computed: false, optional: true, required: false
  private _requiredThreatEmulation?: boolean | cdktf.IResolvable; 
  public get requiredThreatEmulation() {
    return this.getBooleanAttribute('required_threat_emulation');
  }
  public set requiredThreatEmulation(value: boolean | cdktf.IResolvable) {
    this._requiredThreatEmulation = value;
  }
  public resetRequiredThreatEmulation() {
    this._requiredThreatEmulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredThreatEmulationInput() {
    return this._requiredThreatEmulation;
  }

  // severity_level - computed: false, optional: true, required: false
  private _severityLevel?: string; 
  public get severityLevel() {
    return this.getStringAttribute('severity_level');
  }
  public set severityLevel(value: string) {
    this._severityLevel = value;
  }
  public resetSeverityLevel() {
    this._severityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLevelInput() {
    return this._severityLevel;
  }
}
export interface InextWebApiPracticeIps {
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#high_confidence InextWebApiPractice#high_confidence}
  */
  readonly highConfidence?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#low_confidence InextWebApiPractice#low_confidence}
  */
  readonly lowConfidence?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#medium_confidence InextWebApiPractice#medium_confidence}
  */
  readonly mediumConfidence?: string;
  /**
  * The performance impact: VeryLow, LowOrLower, MediumOrLower or HighOrLower
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#performance_impact InextWebApiPractice#performance_impact}
  */
  readonly performanceImpact?: string;
  /**
  * The year to apply protections from: 1999, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#protections_from_year InextWebApiPractice#protections_from_year}
  */
  readonly protectionsFromYear?: string;
  /**
  * The severity level: LowOrAbove, MediumOrAbove, HighOrAbove or Critical
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#severity_level InextWebApiPractice#severity_level}
  */
  readonly severityLevel?: string;
}

export function inextWebApiPracticeIpsToTerraform(struct?: InextWebApiPracticeIpsOutputReference | InextWebApiPracticeIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_confidence: cdktf.stringToTerraform(struct!.highConfidence),
    low_confidence: cdktf.stringToTerraform(struct!.lowConfidence),
    medium_confidence: cdktf.stringToTerraform(struct!.mediumConfidence),
    performance_impact: cdktf.stringToTerraform(struct!.performanceImpact),
    protections_from_year: cdktf.stringToTerraform(struct!.protectionsFromYear),
    severity_level: cdktf.stringToTerraform(struct!.severityLevel),
  }
}


export function inextWebApiPracticeIpsToHclTerraform(struct?: InextWebApiPracticeIpsOutputReference | InextWebApiPracticeIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_confidence: {
      value: cdktf.stringToHclTerraform(struct!.highConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low_confidence: {
      value: cdktf.stringToHclTerraform(struct!.lowConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    medium_confidence: {
      value: cdktf.stringToHclTerraform(struct!.mediumConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_impact: {
      value: cdktf.stringToHclTerraform(struct!.performanceImpact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protections_from_year: {
      value: cdktf.stringToHclTerraform(struct!.protectionsFromYear),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity_level: {
      value: cdktf.stringToHclTerraform(struct!.severityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebApiPracticeIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InextWebApiPracticeIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.highConfidence = this._highConfidence;
    }
    if (this._lowConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowConfidence = this._lowConfidence;
    }
    if (this._mediumConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumConfidence = this._mediumConfidence;
    }
    if (this._performanceImpact !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceImpact = this._performanceImpact;
    }
    if (this._protectionsFromYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionsFromYear = this._protectionsFromYear;
    }
    if (this._severityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityLevel = this._severityLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebApiPracticeIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highConfidence = undefined;
      this._lowConfidence = undefined;
      this._mediumConfidence = undefined;
      this._performanceImpact = undefined;
      this._protectionsFromYear = undefined;
      this._severityLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highConfidence = value.highConfidence;
      this._lowConfidence = value.lowConfidence;
      this._mediumConfidence = value.mediumConfidence;
      this._performanceImpact = value.performanceImpact;
      this._protectionsFromYear = value.protectionsFromYear;
      this._severityLevel = value.severityLevel;
    }
  }

  // high_confidence - computed: false, optional: true, required: false
  private _highConfidence?: string; 
  public get highConfidence() {
    return this.getStringAttribute('high_confidence');
  }
  public set highConfidence(value: string) {
    this._highConfidence = value;
  }
  public resetHighConfidence() {
    this._highConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highConfidenceInput() {
    return this._highConfidence;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // low_confidence - computed: false, optional: true, required: false
  private _lowConfidence?: string; 
  public get lowConfidence() {
    return this.getStringAttribute('low_confidence');
  }
  public set lowConfidence(value: string) {
    this._lowConfidence = value;
  }
  public resetLowConfidence() {
    this._lowConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowConfidenceInput() {
    return this._lowConfidence;
  }

  // medium_confidence - computed: false, optional: true, required: false
  private _mediumConfidence?: string; 
  public get mediumConfidence() {
    return this.getStringAttribute('medium_confidence');
  }
  public set mediumConfidence(value: string) {
    this._mediumConfidence = value;
  }
  public resetMediumConfidence() {
    this._mediumConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumConfidenceInput() {
    return this._mediumConfidence;
  }

  // performance_impact - computed: false, optional: true, required: false
  private _performanceImpact?: string; 
  public get performanceImpact() {
    return this.getStringAttribute('performance_impact');
  }
  public set performanceImpact(value: string) {
    this._performanceImpact = value;
  }
  public resetPerformanceImpact() {
    this._performanceImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceImpactInput() {
    return this._performanceImpact;
  }

  // protections_from_year - computed: false, optional: true, required: false
  private _protectionsFromYear?: string; 
  public get protectionsFromYear() {
    return this.getStringAttribute('protections_from_year');
  }
  public set protectionsFromYear(value: string) {
    this._protectionsFromYear = value;
  }
  public resetProtectionsFromYear() {
    this._protectionsFromYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionsFromYearInput() {
    return this._protectionsFromYear;
  }

  // severity_level - computed: false, optional: true, required: false
  private _severityLevel?: string; 
  public get severityLevel() {
    return this.getStringAttribute('severity_level');
  }
  public set severityLevel(value: string) {
    this._severityLevel = value;
  }
  public resetSeverityLevel() {
    this._severityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLevelInput() {
    return this._severityLevel;
  }
}
export interface InextWebApiPracticeSchemaValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#data InextWebApiPractice#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#is_file_exist InextWebApiPractice#is_file_exist}
  */
  readonly isFileExist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#name InextWebApiPractice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#size InextWebApiPractice#size}
  */
  readonly size?: number;
}

export function inextWebApiPracticeSchemaValidationToTerraform(struct?: InextWebApiPracticeSchemaValidationOutputReference | InextWebApiPracticeSchemaValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    is_file_exist: cdktf.booleanToTerraform(struct!.isFileExist),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function inextWebApiPracticeSchemaValidationToHclTerraform(struct?: InextWebApiPracticeSchemaValidationOutputReference | InextWebApiPracticeSchemaValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_file_exist: {
      value: cdktf.booleanToHclTerraform(struct!.isFileExist),
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebApiPracticeSchemaValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InextWebApiPracticeSchemaValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._isFileExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFileExist = this._isFileExist;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebApiPracticeSchemaValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._isFileExist = undefined;
      this._name = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._isFileExist = value.isFileExist;
      this._name = value.name;
      this._size = value.size;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_file_exist - computed: true, optional: true, required: false
  private _isFileExist?: boolean | cdktf.IResolvable; 
  public get isFileExist() {
    return this.getBooleanAttribute('is_file_exist');
  }
  public set isFileExist(value: boolean | cdktf.IResolvable) {
    this._isFileExist = value;
  }
  public resetIsFileExist() {
    this._isFileExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFileExistInput() {
    return this._isFileExist;
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

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice inext_web_api_practice}
*/
export class InextWebApiPractice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "inext_web_api_practice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InextWebApiPractice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InextWebApiPractice to import
  * @param importFromId The id of the existing InextWebApiPractice that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InextWebApiPractice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "inext_web_api_practice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_api_practice inext_web_api_practice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InextWebApiPracticeConfig
  */
  public constructor(scope: Construct, id: string, config: InextWebApiPracticeConfig) {
    super(scope, id, {
      terraformResourceType: 'inext_web_api_practice',
      terraformGeneratorMetadata: {
        providerName: 'infinity-next',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._visibility = config.visibility;
    this._apiAttacks.internalValue = config.apiAttacks;
    this._fileSecurity.internalValue = config.fileSecurity;
    this._ips.internalValue = config.ips;
    this._schemaValidation.internalValue = config.schemaValidation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // practice_type - computed: true, optional: false, required: false
  public get practiceType() {
    return this.getStringAttribute('practice_type');
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // api_attacks - computed: false, optional: true, required: false
  private _apiAttacks = new InextWebApiPracticeApiAttacksOutputReference(this, "api_attacks");
  public get apiAttacks() {
    return this._apiAttacks;
  }
  public putApiAttacks(value: InextWebApiPracticeApiAttacks) {
    this._apiAttacks.internalValue = value;
  }
  public resetApiAttacks() {
    this._apiAttacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAttacksInput() {
    return this._apiAttacks.internalValue;
  }

  // file_security - computed: false, optional: true, required: false
  private _fileSecurity = new InextWebApiPracticeFileSecurityOutputReference(this, "file_security");
  public get fileSecurity() {
    return this._fileSecurity;
  }
  public putFileSecurity(value: InextWebApiPracticeFileSecurity) {
    this._fileSecurity.internalValue = value;
  }
  public resetFileSecurity() {
    this._fileSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSecurityInput() {
    return this._fileSecurity.internalValue;
  }

  // ips - computed: false, optional: true, required: false
  private _ips = new InextWebApiPracticeIpsOutputReference(this, "ips");
  public get ips() {
    return this._ips;
  }
  public putIps(value: InextWebApiPracticeIps) {
    this._ips.internalValue = value;
  }
  public resetIps() {
    this._ips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }

  // schema_validation - computed: false, optional: true, required: false
  private _schemaValidation = new InextWebApiPracticeSchemaValidationOutputReference(this, "schema_validation");
  public get schemaValidation() {
    return this._schemaValidation;
  }
  public putSchemaValidation(value: InextWebApiPracticeSchemaValidation) {
    this._schemaValidation.internalValue = value;
  }
  public resetSchemaValidation() {
    this._schemaValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaValidationInput() {
    return this._schemaValidation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      visibility: cdktf.stringToTerraform(this._visibility),
      api_attacks: inextWebApiPracticeApiAttacksToTerraform(this._apiAttacks.internalValue),
      file_security: inextWebApiPracticeFileSecurityToTerraform(this._fileSecurity.internalValue),
      ips: inextWebApiPracticeIpsToTerraform(this._ips.internalValue),
      schema_validation: inextWebApiPracticeSchemaValidationToTerraform(this._schemaValidation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_attacks: {
        value: inextWebApiPracticeApiAttacksToHclTerraform(this._apiAttacks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebApiPracticeApiAttacksList",
      },
      file_security: {
        value: inextWebApiPracticeFileSecurityToHclTerraform(this._fileSecurity.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebApiPracticeFileSecurityList",
      },
      ips: {
        value: inextWebApiPracticeIpsToHclTerraform(this._ips.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebApiPracticeIpsList",
      },
      schema_validation: {
        value: inextWebApiPracticeSchemaValidationToHclTerraform(this._schemaValidation.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebApiPracticeSchemaValidationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
