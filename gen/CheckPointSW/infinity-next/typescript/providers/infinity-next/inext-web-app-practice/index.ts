// https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InextWebAppPracticeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the resource, also acts as its unique ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#name InextWebAppPractice#name}
  */
  readonly name: string;
  /**
  * The visibility of the resource, Shared or Local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#visibility InextWebAppPractice#visibility}
  */
  readonly visibility?: string;
  /**
  * file_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#file_security InextWebAppPractice#file_security}
  */
  readonly fileSecurity?: InextWebAppPracticeFileSecurity;
  /**
  * ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#ips InextWebAppPractice#ips}
  */
  readonly ips?: InextWebAppPracticeIps;
  /**
  * web_attacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#web_attacks InextWebAppPractice#web_attacks}
  */
  readonly webAttacks?: InextWebAppPracticeWebAttacks;
  /**
  * web_bot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#web_bot InextWebAppPractice#web_bot}
  */
  readonly webBot?: InextWebAppPracticeWebBot;
}
export interface InextWebAppPracticeFileSecurity {
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#allow_an_unopened_archive InextWebAppPractice#allow_an_unopened_archive}
  */
  readonly allowAnUnopenedArchive?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#allow_archive_within_archive InextWebAppPractice#allow_archive_within_archive}
  */
  readonly allowArchiveWithinArchive?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#allow_file_size_limit InextWebAppPractice#allow_file_size_limit}
  */
  readonly allowFileSizeLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#allow_file_type InextWebAppPractice#allow_file_type}
  */
  readonly allowFileType?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#archive_file_size_limit InextWebAppPractice#archive_file_size_limit}
  */
  readonly archiveFileSizeLimit?: number;
  /**
  * Bytes, KB, MB or GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#archive_file_size_limit_unit InextWebAppPractice#archive_file_size_limit_unit}
  */
  readonly archiveFileSizeLimitUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#file_size_limit InextWebAppPractice#file_size_limit}
  */
  readonly fileSizeLimit?: number;
  /**
  * Bytes, KB, MB or GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#file_size_limit_unit InextWebAppPractice#file_size_limit_unit}
  */
  readonly fileSizeLimitUnit?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#files_without_name InextWebAppPractice#files_without_name}
  */
  readonly filesWithoutName?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#high_confidence InextWebAppPractice#high_confidence}
  */
  readonly highConfidence?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#low_confidence InextWebAppPractice#low_confidence}
  */
  readonly lowConfidence?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#medium_confidence InextWebAppPractice#medium_confidence}
  */
  readonly mediumConfidence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#required_archive_extraction InextWebAppPractice#required_archive_extraction}
  */
  readonly requiredArchiveExtraction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#required_threat_emulation InextWebAppPractice#required_threat_emulation}
  */
  readonly requiredThreatEmulation?: boolean | cdktf.IResolvable;
  /**
  * LowOrAbove, MediumOrAbove, HighOrAbove or Critical
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#severity_level InextWebAppPractice#severity_level}
  */
  readonly severityLevel?: string;
}

export function inextWebAppPracticeFileSecurityToTerraform(struct?: InextWebAppPracticeFileSecurityOutputReference | InextWebAppPracticeFileSecurity): any {
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


export function inextWebAppPracticeFileSecurityToHclTerraform(struct?: InextWebAppPracticeFileSecurityOutputReference | InextWebAppPracticeFileSecurity): any {
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

export class InextWebAppPracticeFileSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InextWebAppPracticeFileSecurity | undefined {
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

  public set internalValue(value: InextWebAppPracticeFileSecurity | undefined) {
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
export interface InextWebAppPracticeIps {
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#high_confidence InextWebAppPractice#high_confidence}
  */
  readonly highConfidence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#id InextWebAppPractice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#low_confidence InextWebAppPractice#low_confidence}
  */
  readonly lowConfidence?: string;
  /**
  * Detect, Prevent, Inactive or AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#medium_confidence InextWebAppPractice#medium_confidence}
  */
  readonly mediumConfidence?: string;
  /**
  * The performance impact: VeryLow, LowOrLower, MediumOrLower or HighOrLower
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#performance_impact InextWebAppPractice#performance_impact}
  */
  readonly performanceImpact?: string;
  /**
  * The year to apply protections from: 1999, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#protections_from_year InextWebAppPractice#protections_from_year}
  */
  readonly protectionsFromYear?: string;
  /**
  * The severity level: LowOrAbove, MediumOrAbove, HighOrAbove or Critical
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#severity_level InextWebAppPractice#severity_level}
  */
  readonly severityLevel?: string;
}

export function inextWebAppPracticeIpsToTerraform(struct?: InextWebAppPracticeIpsOutputReference | InextWebAppPracticeIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_confidence: cdktf.stringToTerraform(struct!.highConfidence),
    id: cdktf.stringToTerraform(struct!.id),
    low_confidence: cdktf.stringToTerraform(struct!.lowConfidence),
    medium_confidence: cdktf.stringToTerraform(struct!.mediumConfidence),
    performance_impact: cdktf.stringToTerraform(struct!.performanceImpact),
    protections_from_year: cdktf.stringToTerraform(struct!.protectionsFromYear),
    severity_level: cdktf.stringToTerraform(struct!.severityLevel),
  }
}


export function inextWebAppPracticeIpsToHclTerraform(struct?: InextWebAppPracticeIpsOutputReference | InextWebAppPracticeIps): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class InextWebAppPracticeIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InextWebAppPracticeIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.highConfidence = this._highConfidence;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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

  public set internalValue(value: InextWebAppPracticeIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highConfidence = undefined;
      this._id = undefined;
      this._lowConfidence = undefined;
      this._mediumConfidence = undefined;
      this._performanceImpact = undefined;
      this._protectionsFromYear = undefined;
      this._severityLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highConfidence = value.highConfidence;
      this._id = value.id;
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
export interface InextWebAppPracticeWebAttacksAdvancedSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#body_size InextWebAppPractice#body_size}
  */
  readonly bodySize?: number;
  /**
  * Prevent, AccordingToPractice, Disabled or Learn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#csrf_protection InextWebAppPractice#csrf_protection}
  */
  readonly csrfProtection?: string;
  /**
  * Prevent, AccordingToPractice, Disabled or Learn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#error_disclosure InextWebAppPractice#error_disclosure}
  */
  readonly errorDisclosure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#header_size InextWebAppPractice#header_size}
  */
  readonly headerSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#illegal_http_methods InextWebAppPractice#illegal_http_methods}
  */
  readonly illegalHttpMethods?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#max_object_depth InextWebAppPractice#max_object_depth}
  */
  readonly maxObjectDepth?: number;
  /**
  * Prevent, AccordingToPractice, Disabled or Learn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#open_redirect InextWebAppPractice#open_redirect}
  */
  readonly openRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#url_size InextWebAppPractice#url_size}
  */
  readonly urlSize?: number;
}

export function inextWebAppPracticeWebAttacksAdvancedSettingToTerraform(struct?: InextWebAppPracticeWebAttacksAdvancedSettingOutputReference | InextWebAppPracticeWebAttacksAdvancedSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_size: cdktf.numberToTerraform(struct!.bodySize),
    csrf_protection: cdktf.stringToTerraform(struct!.csrfProtection),
    error_disclosure: cdktf.stringToTerraform(struct!.errorDisclosure),
    header_size: cdktf.numberToTerraform(struct!.headerSize),
    illegal_http_methods: cdktf.booleanToTerraform(struct!.illegalHttpMethods),
    max_object_depth: cdktf.numberToTerraform(struct!.maxObjectDepth),
    open_redirect: cdktf.stringToTerraform(struct!.openRedirect),
    url_size: cdktf.numberToTerraform(struct!.urlSize),
  }
}


export function inextWebAppPracticeWebAttacksAdvancedSettingToHclTerraform(struct?: InextWebAppPracticeWebAttacksAdvancedSettingOutputReference | InextWebAppPracticeWebAttacksAdvancedSetting): any {
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
    csrf_protection: {
      value: cdktf.stringToHclTerraform(struct!.csrfProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_disclosure: {
      value: cdktf.stringToHclTerraform(struct!.errorDisclosure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    open_redirect: {
      value: cdktf.stringToHclTerraform(struct!.openRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class InextWebAppPracticeWebAttacksAdvancedSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InextWebAppPracticeWebAttacksAdvancedSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodySize = this._bodySize;
    }
    if (this._csrfProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.csrfProtection = this._csrfProtection;
    }
    if (this._errorDisclosure !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorDisclosure = this._errorDisclosure;
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
    if (this._openRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.openRedirect = this._openRedirect;
    }
    if (this._urlSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlSize = this._urlSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebAppPracticeWebAttacksAdvancedSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodySize = undefined;
      this._csrfProtection = undefined;
      this._errorDisclosure = undefined;
      this._headerSize = undefined;
      this._illegalHttpMethods = undefined;
      this._maxObjectDepth = undefined;
      this._openRedirect = undefined;
      this._urlSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodySize = value.bodySize;
      this._csrfProtection = value.csrfProtection;
      this._errorDisclosure = value.errorDisclosure;
      this._headerSize = value.headerSize;
      this._illegalHttpMethods = value.illegalHttpMethods;
      this._maxObjectDepth = value.maxObjectDepth;
      this._openRedirect = value.openRedirect;
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

  // csrf_protection - computed: false, optional: true, required: false
  private _csrfProtection?: string; 
  public get csrfProtection() {
    return this.getStringAttribute('csrf_protection');
  }
  public set csrfProtection(value: string) {
    this._csrfProtection = value;
  }
  public resetCsrfProtection() {
    this._csrfProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrfProtectionInput() {
    return this._csrfProtection;
  }

  // error_disclosure - computed: false, optional: true, required: false
  private _errorDisclosure?: string; 
  public get errorDisclosure() {
    return this.getStringAttribute('error_disclosure');
  }
  public set errorDisclosure(value: string) {
    this._errorDisclosure = value;
  }
  public resetErrorDisclosure() {
    this._errorDisclosure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDisclosureInput() {
    return this._errorDisclosure;
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

  // open_redirect - computed: false, optional: true, required: false
  private _openRedirect?: string; 
  public get openRedirect() {
    return this.getStringAttribute('open_redirect');
  }
  public set openRedirect(value: string) {
    this._openRedirect = value;
  }
  public resetOpenRedirect() {
    this._openRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openRedirectInput() {
    return this._openRedirect;
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
export interface InextWebAppPracticeWebAttacks {
  /**
  * Medium, High or Critical
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#minimum_severity InextWebAppPractice#minimum_severity}
  */
  readonly minimumSeverity?: string;
  /**
  * advanced_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#advanced_setting InextWebAppPractice#advanced_setting}
  */
  readonly advancedSetting?: InextWebAppPracticeWebAttacksAdvancedSetting;
}

export function inextWebAppPracticeWebAttacksToTerraform(struct?: InextWebAppPracticeWebAttacksOutputReference | InextWebAppPracticeWebAttacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_severity: cdktf.stringToTerraform(struct!.minimumSeverity),
    advanced_setting: inextWebAppPracticeWebAttacksAdvancedSettingToTerraform(struct!.advancedSetting),
  }
}


export function inextWebAppPracticeWebAttacksToHclTerraform(struct?: InextWebAppPracticeWebAttacksOutputReference | InextWebAppPracticeWebAttacks): any {
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
      value: inextWebAppPracticeWebAttacksAdvancedSettingToHclTerraform(struct!.advancedSetting),
      isBlock: true,
      type: "set",
      storageClassType: "InextWebAppPracticeWebAttacksAdvancedSettingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebAppPracticeWebAttacksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InextWebAppPracticeWebAttacks | undefined {
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

  public set internalValue(value: InextWebAppPracticeWebAttacks | undefined) {
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
  private _advancedSetting = new InextWebAppPracticeWebAttacksAdvancedSettingOutputReference(this, "advanced_setting");
  public get advancedSetting() {
    return this._advancedSetting;
  }
  public putAdvancedSetting(value: InextWebAppPracticeWebAttacksAdvancedSetting) {
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
export interface InextWebAppPracticeWebBot {
  /**
  * Defines where to inject the Anti-Bot script. The input is the path of the URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#inject_uris InextWebAppPractice#inject_uris}
  */
  readonly injectUris?: string[];
  /**
  * Defines which requests must be validated after the script is injected into a specific URI.
  * The input is the path of the URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#valid_uris InextWebAppPractice#valid_uris}
  */
  readonly validUris?: string[];
}

export function inextWebAppPracticeWebBotToTerraform(struct?: InextWebAppPracticeWebBotOutputReference | InextWebAppPracticeWebBot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inject_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.injectUris),
    valid_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validUris),
  }
}


export function inextWebAppPracticeWebBotToHclTerraform(struct?: InextWebAppPracticeWebBotOutputReference | InextWebAppPracticeWebBot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inject_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.injectUris),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    valid_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validUris),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebAppPracticeWebBotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InextWebAppPracticeWebBot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._injectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectUris = this._injectUris;
    }
    if (this._validUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.validUris = this._validUris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebAppPracticeWebBot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._injectUris = undefined;
      this._validUris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._injectUris = value.injectUris;
      this._validUris = value.validUris;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inject_uris - computed: false, optional: true, required: false
  private _injectUris?: string[]; 
  public get injectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('inject_uris'));
  }
  public set injectUris(value: string[]) {
    this._injectUris = value;
  }
  public resetInjectUris() {
    this._injectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectUrisInput() {
    return this._injectUris;
  }

  // inject_uris_ids - computed: true, optional: false, required: false
  public get injectUrisIds() {
    return cdktf.Fn.tolist(this.getListAttribute('inject_uris_ids'));
  }

  // valid_uris - computed: false, optional: true, required: false
  private _validUris?: string[]; 
  public get validUris() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_uris'));
  }
  public set validUris(value: string[]) {
    this._validUris = value;
  }
  public resetValidUris() {
    this._validUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUrisInput() {
    return this._validUris;
  }

  // valid_uris_ids - computed: true, optional: false, required: false
  public get validUrisIds() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_uris_ids'));
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice inext_web_app_practice}
*/
export class InextWebAppPractice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "inext_web_app_practice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InextWebAppPractice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InextWebAppPractice to import
  * @param importFromId The id of the existing InextWebAppPractice that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InextWebAppPractice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "inext_web_app_practice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_web_app_practice inext_web_app_practice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InextWebAppPracticeConfig
  */
  public constructor(scope: Construct, id: string, config: InextWebAppPracticeConfig) {
    super(scope, id, {
      terraformResourceType: 'inext_web_app_practice',
      terraformGeneratorMetadata: {
        providerName: 'infinity-next',
        providerVersion: '1.2.0'
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
    this._fileSecurity.internalValue = config.fileSecurity;
    this._ips.internalValue = config.ips;
    this._webAttacks.internalValue = config.webAttacks;
    this._webBot.internalValue = config.webBot;
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

  // file_security - computed: false, optional: true, required: false
  private _fileSecurity = new InextWebAppPracticeFileSecurityOutputReference(this, "file_security");
  public get fileSecurity() {
    return this._fileSecurity;
  }
  public putFileSecurity(value: InextWebAppPracticeFileSecurity) {
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
  private _ips = new InextWebAppPracticeIpsOutputReference(this, "ips");
  public get ips() {
    return this._ips;
  }
  public putIps(value: InextWebAppPracticeIps) {
    this._ips.internalValue = value;
  }
  public resetIps() {
    this._ips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }

  // web_attacks - computed: false, optional: true, required: false
  private _webAttacks = new InextWebAppPracticeWebAttacksOutputReference(this, "web_attacks");
  public get webAttacks() {
    return this._webAttacks;
  }
  public putWebAttacks(value: InextWebAppPracticeWebAttacks) {
    this._webAttacks.internalValue = value;
  }
  public resetWebAttacks() {
    this._webAttacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAttacksInput() {
    return this._webAttacks.internalValue;
  }

  // web_bot - computed: false, optional: true, required: false
  private _webBot = new InextWebAppPracticeWebBotOutputReference(this, "web_bot");
  public get webBot() {
    return this._webBot;
  }
  public putWebBot(value: InextWebAppPracticeWebBot) {
    this._webBot.internalValue = value;
  }
  public resetWebBot() {
    this._webBot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webBotInput() {
    return this._webBot.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      visibility: cdktf.stringToTerraform(this._visibility),
      file_security: inextWebAppPracticeFileSecurityToTerraform(this._fileSecurity.internalValue),
      ips: inextWebAppPracticeIpsToTerraform(this._ips.internalValue),
      web_attacks: inextWebAppPracticeWebAttacksToTerraform(this._webAttacks.internalValue),
      web_bot: inextWebAppPracticeWebBotToTerraform(this._webBot.internalValue),
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
      file_security: {
        value: inextWebAppPracticeFileSecurityToHclTerraform(this._fileSecurity.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebAppPracticeFileSecurityList",
      },
      ips: {
        value: inextWebAppPracticeIpsToHclTerraform(this._ips.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebAppPracticeIpsList",
      },
      web_attacks: {
        value: inextWebAppPracticeWebAttacksToHclTerraform(this._webAttacks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebAppPracticeWebAttacksList",
      },
      web_bot: {
        value: inextWebAppPracticeWebBotToHclTerraform(this._webBot.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebAppPracticeWebBotList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
