// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdmRemediationRecipeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}
  */
  readonly isRunTriggeredOnKbChange: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}
  */
  readonly state?: string;
  /**
  * detect_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#detect_configuration AdmRemediationRecipe#detect_configuration}
  */
  readonly detectConfiguration: AdmRemediationRecipeDetectConfiguration;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#network_configuration AdmRemediationRecipe#network_configuration}
  */
  readonly networkConfiguration: AdmRemediationRecipeNetworkConfiguration;
  /**
  * scm_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#scm_configuration AdmRemediationRecipe#scm_configuration}
  */
  readonly scmConfiguration: AdmRemediationRecipeScmConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#timeouts AdmRemediationRecipe#timeouts}
  */
  readonly timeouts?: AdmRemediationRecipeTimeouts;
  /**
  * verify_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#verify_configuration AdmRemediationRecipe#verify_configuration}
  */
  readonly verifyConfiguration: AdmRemediationRecipeVerifyConfiguration;
}
export interface AdmRemediationRecipeDetectConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#exclusions AdmRemediationRecipe#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v2score AdmRemediationRecipe#max_permissible_cvss_v2score}
  */
  readonly maxPermissibleCvssV2Score?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v3score AdmRemediationRecipe#max_permissible_cvss_v3score}
  */
  readonly maxPermissibleCvssV3Score?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#max_permissible_severity AdmRemediationRecipe#max_permissible_severity}
  */
  readonly maxPermissibleSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#upgrade_policy AdmRemediationRecipe#upgrade_policy}
  */
  readonly upgradePolicy?: string;
}

export function admRemediationRecipeDetectConfigurationToTerraform(struct?: AdmRemediationRecipeDetectConfigurationOutputReference | AdmRemediationRecipeDetectConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusions),
    max_permissible_cvss_v2score: cdktf.numberToTerraform(struct!.maxPermissibleCvssV2Score),
    max_permissible_cvss_v3score: cdktf.numberToTerraform(struct!.maxPermissibleCvssV3Score),
    max_permissible_severity: cdktf.stringToTerraform(struct!.maxPermissibleSeverity),
    upgrade_policy: cdktf.stringToTerraform(struct!.upgradePolicy),
  }
}


export function admRemediationRecipeDetectConfigurationToHclTerraform(struct?: AdmRemediationRecipeDetectConfigurationOutputReference | AdmRemediationRecipeDetectConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_permissible_cvss_v2score: {
      value: cdktf.numberToHclTerraform(struct!.maxPermissibleCvssV2Score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_permissible_cvss_v3score: {
      value: cdktf.numberToHclTerraform(struct!.maxPermissibleCvssV3Score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_permissible_severity: {
      value: cdktf.stringToHclTerraform(struct!.maxPermissibleSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_policy: {
      value: cdktf.stringToHclTerraform(struct!.upgradePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdmRemediationRecipeDetectConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdmRemediationRecipeDetectConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._maxPermissibleCvssV2Score !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPermissibleCvssV2Score = this._maxPermissibleCvssV2Score;
    }
    if (this._maxPermissibleCvssV3Score !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPermissibleCvssV3Score = this._maxPermissibleCvssV3Score;
    }
    if (this._maxPermissibleSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPermissibleSeverity = this._maxPermissibleSeverity;
    }
    if (this._upgradePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradePolicy = this._upgradePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdmRemediationRecipeDetectConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclusions = undefined;
      this._maxPermissibleCvssV2Score = undefined;
      this._maxPermissibleCvssV3Score = undefined;
      this._maxPermissibleSeverity = undefined;
      this._upgradePolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclusions = value.exclusions;
      this._maxPermissibleCvssV2Score = value.maxPermissibleCvssV2Score;
      this._maxPermissibleCvssV3Score = value.maxPermissibleCvssV3Score;
      this._maxPermissibleSeverity = value.maxPermissibleSeverity;
      this._upgradePolicy = value.upgradePolicy;
    }
  }

  // exclusions - computed: true, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // max_permissible_cvss_v2score - computed: true, optional: true, required: false
  private _maxPermissibleCvssV2Score?: number; 
  public get maxPermissibleCvssV2Score() {
    return this.getNumberAttribute('max_permissible_cvss_v2score');
  }
  public set maxPermissibleCvssV2Score(value: number) {
    this._maxPermissibleCvssV2Score = value;
  }
  public resetMaxPermissibleCvssV2Score() {
    this._maxPermissibleCvssV2Score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPermissibleCvssV2ScoreInput() {
    return this._maxPermissibleCvssV2Score;
  }

  // max_permissible_cvss_v3score - computed: true, optional: true, required: false
  private _maxPermissibleCvssV3Score?: number; 
  public get maxPermissibleCvssV3Score() {
    return this.getNumberAttribute('max_permissible_cvss_v3score');
  }
  public set maxPermissibleCvssV3Score(value: number) {
    this._maxPermissibleCvssV3Score = value;
  }
  public resetMaxPermissibleCvssV3Score() {
    this._maxPermissibleCvssV3Score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPermissibleCvssV3ScoreInput() {
    return this._maxPermissibleCvssV3Score;
  }

  // max_permissible_severity - computed: true, optional: true, required: false
  private _maxPermissibleSeverity?: string; 
  public get maxPermissibleSeverity() {
    return this.getStringAttribute('max_permissible_severity');
  }
  public set maxPermissibleSeverity(value: string) {
    this._maxPermissibleSeverity = value;
  }
  public resetMaxPermissibleSeverity() {
    this._maxPermissibleSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPermissibleSeverityInput() {
    return this._maxPermissibleSeverity;
  }

  // upgrade_policy - computed: true, optional: true, required: false
  private _upgradePolicy?: string; 
  public get upgradePolicy() {
    return this.getStringAttribute('upgrade_policy');
  }
  public set upgradePolicy(value: string) {
    this._upgradePolicy = value;
  }
  public resetUpgradePolicy() {
    this._upgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyInput() {
    return this._upgradePolicy;
  }
}
export interface AdmRemediationRecipeNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#nsg_ids AdmRemediationRecipe#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#subnet_id AdmRemediationRecipe#subnet_id}
  */
  readonly subnetId: string;
}

export function admRemediationRecipeNetworkConfigurationToTerraform(struct?: AdmRemediationRecipeNetworkConfigurationOutputReference | AdmRemediationRecipeNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function admRemediationRecipeNetworkConfigurationToHclTerraform(struct?: AdmRemediationRecipeNetworkConfigurationOutputReference | AdmRemediationRecipeNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdmRemediationRecipeNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdmRemediationRecipeNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdmRemediationRecipeNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nsgIds = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nsgIds = value.nsgIds;
      this._subnetId = value.subnetId;
    }
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface AdmRemediationRecipeScmConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#branch AdmRemediationRecipe#branch}
  */
  readonly branch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#build_file_location AdmRemediationRecipe#build_file_location}
  */
  readonly buildFileLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#external_scm_type AdmRemediationRecipe#external_scm_type}
  */
  readonly externalScmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#is_automerge_enabled AdmRemediationRecipe#is_automerge_enabled}
  */
  readonly isAutomergeEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#oci_code_repository_id AdmRemediationRecipe#oci_code_repository_id}
  */
  readonly ociCodeRepositoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}
  */
  readonly patSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}
  */
  readonly repositoryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#scm_type AdmRemediationRecipe#scm_type}
  */
  readonly scmType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}
  */
  readonly username?: string;
}

export function admRemediationRecipeScmConfigurationToTerraform(struct?: AdmRemediationRecipeScmConfigurationOutputReference | AdmRemediationRecipeScmConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    build_file_location: cdktf.stringToTerraform(struct!.buildFileLocation),
    external_scm_type: cdktf.stringToTerraform(struct!.externalScmType),
    is_automerge_enabled: cdktf.booleanToTerraform(struct!.isAutomergeEnabled),
    oci_code_repository_id: cdktf.stringToTerraform(struct!.ociCodeRepositoryId),
    pat_secret_id: cdktf.stringToTerraform(struct!.patSecretId),
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
    scm_type: cdktf.stringToTerraform(struct!.scmType),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function admRemediationRecipeScmConfigurationToHclTerraform(struct?: AdmRemediationRecipeScmConfigurationOutputReference | AdmRemediationRecipeScmConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_file_location: {
      value: cdktf.stringToHclTerraform(struct!.buildFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_scm_type: {
      value: cdktf.stringToHclTerraform(struct!.externalScmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_automerge_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAutomergeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oci_code_repository_id: {
      value: cdktf.stringToHclTerraform(struct!.ociCodeRepositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pat_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.patSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scm_type: {
      value: cdktf.stringToHclTerraform(struct!.scmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdmRemediationRecipeScmConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdmRemediationRecipeScmConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._buildFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildFileLocation = this._buildFileLocation;
    }
    if (this._externalScmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalScmType = this._externalScmType;
    }
    if (this._isAutomergeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutomergeEnabled = this._isAutomergeEnabled;
    }
    if (this._ociCodeRepositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ociCodeRepositoryId = this._ociCodeRepositoryId;
    }
    if (this._patSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.patSecretId = this._patSecretId;
    }
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    if (this._scmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmType = this._scmType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdmRemediationRecipeScmConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._buildFileLocation = undefined;
      this._externalScmType = undefined;
      this._isAutomergeEnabled = undefined;
      this._ociCodeRepositoryId = undefined;
      this._patSecretId = undefined;
      this._repositoryUrl = undefined;
      this._scmType = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._buildFileLocation = value.buildFileLocation;
      this._externalScmType = value.externalScmType;
      this._isAutomergeEnabled = value.isAutomergeEnabled;
      this._ociCodeRepositoryId = value.ociCodeRepositoryId;
      this._patSecretId = value.patSecretId;
      this._repositoryUrl = value.repositoryUrl;
      this._scmType = value.scmType;
      this._username = value.username;
    }
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // build_file_location - computed: true, optional: true, required: false
  private _buildFileLocation?: string; 
  public get buildFileLocation() {
    return this.getStringAttribute('build_file_location');
  }
  public set buildFileLocation(value: string) {
    this._buildFileLocation = value;
  }
  public resetBuildFileLocation() {
    this._buildFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildFileLocationInput() {
    return this._buildFileLocation;
  }

  // external_scm_type - computed: true, optional: true, required: false
  private _externalScmType?: string; 
  public get externalScmType() {
    return this.getStringAttribute('external_scm_type');
  }
  public set externalScmType(value: string) {
    this._externalScmType = value;
  }
  public resetExternalScmType() {
    this._externalScmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalScmTypeInput() {
    return this._externalScmType;
  }

  // is_automerge_enabled - computed: false, optional: false, required: true
  private _isAutomergeEnabled?: boolean | cdktf.IResolvable; 
  public get isAutomergeEnabled() {
    return this.getBooleanAttribute('is_automerge_enabled');
  }
  public set isAutomergeEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutomergeEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutomergeEnabledInput() {
    return this._isAutomergeEnabled;
  }

  // oci_code_repository_id - computed: true, optional: true, required: false
  private _ociCodeRepositoryId?: string; 
  public get ociCodeRepositoryId() {
    return this.getStringAttribute('oci_code_repository_id');
  }
  public set ociCodeRepositoryId(value: string) {
    this._ociCodeRepositoryId = value;
  }
  public resetOciCodeRepositoryId() {
    this._ociCodeRepositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociCodeRepositoryIdInput() {
    return this._ociCodeRepositoryId;
  }

  // pat_secret_id - computed: true, optional: true, required: false
  private _patSecretId?: string; 
  public get patSecretId() {
    return this.getStringAttribute('pat_secret_id');
  }
  public set patSecretId(value: string) {
    this._patSecretId = value;
  }
  public resetPatSecretId() {
    this._patSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patSecretIdInput() {
    return this._patSecretId;
  }

  // repository_url - computed: true, optional: true, required: false
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  public resetRepositoryUrl() {
    this._repositoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // scm_type - computed: false, optional: false, required: true
  private _scmType?: string; 
  public get scmType() {
    return this.getStringAttribute('scm_type');
  }
  public set scmType(value: string) {
    this._scmType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scmTypeInput() {
    return this._scmType;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AdmRemediationRecipeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#create AdmRemediationRecipe#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#delete AdmRemediationRecipe#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#update AdmRemediationRecipe#update}
  */
  readonly update?: string;
}

export function admRemediationRecipeTimeoutsToTerraform(struct?: AdmRemediationRecipeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function admRemediationRecipeTimeoutsToHclTerraform(struct?: AdmRemediationRecipeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdmRemediationRecipeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdmRemediationRecipeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdmRemediationRecipeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface AdmRemediationRecipeVerifyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#additional_parameters AdmRemediationRecipe#additional_parameters}
  */
  readonly additionalParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#build_service_type AdmRemediationRecipe#build_service_type}
  */
  readonly buildServiceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#jenkins_url AdmRemediationRecipe#jenkins_url}
  */
  readonly jenkinsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#job_name AdmRemediationRecipe#job_name}
  */
  readonly jobName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}
  */
  readonly patSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#pipeline_id AdmRemediationRecipe#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}
  */
  readonly repositoryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#trigger_secret_id AdmRemediationRecipe#trigger_secret_id}
  */
  readonly triggerSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#workflow_name AdmRemediationRecipe#workflow_name}
  */
  readonly workflowName?: string;
}

export function admRemediationRecipeVerifyConfigurationToTerraform(struct?: AdmRemediationRecipeVerifyConfigurationOutputReference | AdmRemediationRecipeVerifyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalParameters),
    build_service_type: cdktf.stringToTerraform(struct!.buildServiceType),
    jenkins_url: cdktf.stringToTerraform(struct!.jenkinsUrl),
    job_name: cdktf.stringToTerraform(struct!.jobName),
    pat_secret_id: cdktf.stringToTerraform(struct!.patSecretId),
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
    trigger_secret_id: cdktf.stringToTerraform(struct!.triggerSecretId),
    username: cdktf.stringToTerraform(struct!.username),
    workflow_name: cdktf.stringToTerraform(struct!.workflowName),
  }
}


export function admRemediationRecipeVerifyConfigurationToHclTerraform(struct?: AdmRemediationRecipeVerifyConfigurationOutputReference | AdmRemediationRecipeVerifyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    build_service_type: {
      value: cdktf.stringToHclTerraform(struct!.buildServiceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jenkins_url: {
      value: cdktf.stringToHclTerraform(struct!.jenkinsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_name: {
      value: cdktf.stringToHclTerraform(struct!.jobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pat_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.patSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.triggerSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_name: {
      value: cdktf.stringToHclTerraform(struct!.workflowName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdmRemediationRecipeVerifyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdmRemediationRecipeVerifyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalParameters = this._additionalParameters;
    }
    if (this._buildServiceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildServiceType = this._buildServiceType;
    }
    if (this._jenkinsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.jenkinsUrl = this._jenkinsUrl;
    }
    if (this._jobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobName = this._jobName;
    }
    if (this._patSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.patSecretId = this._patSecretId;
    }
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    if (this._triggerSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerSecretId = this._triggerSecretId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._workflowName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowName = this._workflowName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdmRemediationRecipeVerifyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalParameters = undefined;
      this._buildServiceType = undefined;
      this._jenkinsUrl = undefined;
      this._jobName = undefined;
      this._patSecretId = undefined;
      this._pipelineId = undefined;
      this._repositoryUrl = undefined;
      this._triggerSecretId = undefined;
      this._username = undefined;
      this._workflowName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalParameters = value.additionalParameters;
      this._buildServiceType = value.buildServiceType;
      this._jenkinsUrl = value.jenkinsUrl;
      this._jobName = value.jobName;
      this._patSecretId = value.patSecretId;
      this._pipelineId = value.pipelineId;
      this._repositoryUrl = value.repositoryUrl;
      this._triggerSecretId = value.triggerSecretId;
      this._username = value.username;
      this._workflowName = value.workflowName;
    }
  }

  // additional_parameters - computed: true, optional: true, required: false
  private _additionalParameters?: { [key: string]: string }; 
  public get additionalParameters() {
    return this.getStringMapAttribute('additional_parameters');
  }
  public set additionalParameters(value: { [key: string]: string }) {
    this._additionalParameters = value;
  }
  public resetAdditionalParameters() {
    this._additionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalParametersInput() {
    return this._additionalParameters;
  }

  // build_service_type - computed: false, optional: false, required: true
  private _buildServiceType?: string; 
  public get buildServiceType() {
    return this.getStringAttribute('build_service_type');
  }
  public set buildServiceType(value: string) {
    this._buildServiceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildServiceTypeInput() {
    return this._buildServiceType;
  }

  // jenkins_url - computed: true, optional: true, required: false
  private _jenkinsUrl?: string; 
  public get jenkinsUrl() {
    return this.getStringAttribute('jenkins_url');
  }
  public set jenkinsUrl(value: string) {
    this._jenkinsUrl = value;
  }
  public resetJenkinsUrl() {
    this._jenkinsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jenkinsUrlInput() {
    return this._jenkinsUrl;
  }

  // job_name - computed: true, optional: true, required: false
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  public resetJobName() {
    this._jobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // pat_secret_id - computed: true, optional: true, required: false
  private _patSecretId?: string; 
  public get patSecretId() {
    return this.getStringAttribute('pat_secret_id');
  }
  public set patSecretId(value: string) {
    this._patSecretId = value;
  }
  public resetPatSecretId() {
    this._patSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patSecretIdInput() {
    return this._patSecretId;
  }

  // pipeline_id - computed: true, optional: true, required: false
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  public resetPipelineId() {
    this._pipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // repository_url - computed: true, optional: true, required: false
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  public resetRepositoryUrl() {
    this._repositoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // trigger_secret_id - computed: true, optional: true, required: false
  private _triggerSecretId?: string; 
  public get triggerSecretId() {
    return this.getStringAttribute('trigger_secret_id');
  }
  public set triggerSecretId(value: string) {
    this._triggerSecretId = value;
  }
  public resetTriggerSecretId() {
    this._triggerSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSecretIdInput() {
    return this._triggerSecretId;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // workflow_name - computed: true, optional: true, required: false
  private _workflowName?: string; 
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
  public set workflowName(value: string) {
    this._workflowName = value;
  }
  public resetWorkflowName() {
    this._workflowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowNameInput() {
    return this._workflowName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe oci_adm_remediation_recipe}
*/
export class AdmRemediationRecipe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_adm_remediation_recipe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdmRemediationRecipe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdmRemediationRecipe to import
  * @param importFromId The id of the existing AdmRemediationRecipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdmRemediationRecipe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_adm_remediation_recipe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/adm_remediation_recipe oci_adm_remediation_recipe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdmRemediationRecipeConfig
  */
  public constructor(scope: Construct, id: string, config: AdmRemediationRecipeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_adm_remediation_recipe',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isRunTriggeredOnKbChange = config.isRunTriggeredOnKbChange;
    this._knowledgeBaseId = config.knowledgeBaseId;
    this._state = config.state;
    this._detectConfiguration.internalValue = config.detectConfiguration;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._scmConfiguration.internalValue = config.scmConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._verifyConfiguration.internalValue = config.verifyConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_run_triggered_on_kb_change - computed: false, optional: false, required: true
  private _isRunTriggeredOnKbChange?: boolean | cdktf.IResolvable; 
  public get isRunTriggeredOnKbChange() {
    return this.getBooleanAttribute('is_run_triggered_on_kb_change');
  }
  public set isRunTriggeredOnKbChange(value: boolean | cdktf.IResolvable) {
    this._isRunTriggeredOnKbChange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isRunTriggeredOnKbChangeInput() {
    return this._isRunTriggeredOnKbChange;
  }

  // knowledge_base_id - computed: false, optional: false, required: true
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // detect_configuration - computed: false, optional: false, required: true
  private _detectConfiguration = new AdmRemediationRecipeDetectConfigurationOutputReference(this, "detect_configuration");
  public get detectConfiguration() {
    return this._detectConfiguration;
  }
  public putDetectConfiguration(value: AdmRemediationRecipeDetectConfiguration) {
    this._detectConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectConfigurationInput() {
    return this._detectConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration = new AdmRemediationRecipeNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: AdmRemediationRecipeNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // scm_configuration - computed: false, optional: false, required: true
  private _scmConfiguration = new AdmRemediationRecipeScmConfigurationOutputReference(this, "scm_configuration");
  public get scmConfiguration() {
    return this._scmConfiguration;
  }
  public putScmConfiguration(value: AdmRemediationRecipeScmConfiguration) {
    this._scmConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scmConfigurationInput() {
    return this._scmConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AdmRemediationRecipeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AdmRemediationRecipeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // verify_configuration - computed: false, optional: false, required: true
  private _verifyConfiguration = new AdmRemediationRecipeVerifyConfigurationOutputReference(this, "verify_configuration");
  public get verifyConfiguration() {
    return this._verifyConfiguration;
  }
  public putVerifyConfiguration(value: AdmRemediationRecipeVerifyConfiguration) {
    this._verifyConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConfigurationInput() {
    return this._verifyConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_run_triggered_on_kb_change: cdktf.booleanToTerraform(this._isRunTriggeredOnKbChange),
      knowledge_base_id: cdktf.stringToTerraform(this._knowledgeBaseId),
      state: cdktf.stringToTerraform(this._state),
      detect_configuration: admRemediationRecipeDetectConfigurationToTerraform(this._detectConfiguration.internalValue),
      network_configuration: admRemediationRecipeNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      scm_configuration: admRemediationRecipeScmConfigurationToTerraform(this._scmConfiguration.internalValue),
      timeouts: admRemediationRecipeTimeoutsToTerraform(this._timeouts.internalValue),
      verify_configuration: admRemediationRecipeVerifyConfigurationToTerraform(this._verifyConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_run_triggered_on_kb_change: {
        value: cdktf.booleanToHclTerraform(this._isRunTriggeredOnKbChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      knowledge_base_id: {
        value: cdktf.stringToHclTerraform(this._knowledgeBaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detect_configuration: {
        value: admRemediationRecipeDetectConfigurationToHclTerraform(this._detectConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdmRemediationRecipeDetectConfigurationList",
      },
      network_configuration: {
        value: admRemediationRecipeNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdmRemediationRecipeNetworkConfigurationList",
      },
      scm_configuration: {
        value: admRemediationRecipeScmConfigurationToHclTerraform(this._scmConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdmRemediationRecipeScmConfigurationList",
      },
      timeouts: {
        value: admRemediationRecipeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdmRemediationRecipeTimeouts",
      },
      verify_configuration: {
        value: admRemediationRecipeVerifyConfigurationToHclTerraform(this._verifyConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdmRemediationRecipeVerifyConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
