// https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specified if JFrog Advanced Security is enabled or not. Default to 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#jas_enabled RepositoryConfig#jas_enabled}
  */
  readonly jasEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the repository to update configurations for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#repo_name RepositoryConfig#repo_name}
  */
  readonly repoName: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#config RepositoryConfig#config}
  */
  readonly config?: RepositoryConfigConfigA[] | cdktf.IResolvable;
  /**
  * paths_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#paths_config RepositoryConfig#paths_config}
  */
  readonly pathsConfig?: RepositoryConfigPathsConfig[] | cdktf.IResolvable;
}
export interface RepositoryConfigConfigExposuresScannersCategory {
  /**
  * Detect whether common OSS libraries and services are used securely by the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#applications RepositoryConfig#applications}
  */
  readonly applications?: boolean | cdktf.IResolvable;
  /**
  * Scans IaC files stored in Artifactory for early detection of cloud and infrastructure misconfigurations to prevent attacks and data leak. Only supported by Terraform Backend package type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#iac RepositoryConfig#iac}
  */
  readonly iac?: boolean | cdktf.IResolvable;
  /**
  * Detect any secret left exposed in any containers stored in Artifactory to stop any accidental leak of internal tokens or credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#secrets RepositoryConfig#secrets}
  */
  readonly secrets?: boolean | cdktf.IResolvable;
  /**
  * Detect whether common OSS libraries and services are configured securely, so application can be easily hardened by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#services RepositoryConfig#services}
  */
  readonly services?: boolean | cdktf.IResolvable;
}

export function repositoryConfigConfigExposuresScannersCategoryToTerraform(struct?: RepositoryConfigConfigExposuresScannersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.booleanToTerraform(struct!.applications),
    iac: cdktf.booleanToTerraform(struct!.iac),
    secrets: cdktf.booleanToTerraform(struct!.secrets),
    services: cdktf.booleanToTerraform(struct!.services),
  }
}


export function repositoryConfigConfigExposuresScannersCategoryToHclTerraform(struct?: RepositoryConfigConfigExposuresScannersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.booleanToHclTerraform(struct!.applications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iac: {
      value: cdktf.booleanToHclTerraform(struct!.iac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secrets: {
      value: cdktf.booleanToHclTerraform(struct!.secrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.booleanToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryConfigConfigExposuresScannersCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryConfigConfigExposuresScannersCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._iac !== undefined) {
      hasAnyValues = true;
      internalValueResult.iac = this._iac;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryConfigConfigExposuresScannersCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications = undefined;
      this._iac = undefined;
      this._secrets = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications = value.applications;
      this._iac = value.iac;
      this._secrets = value.secrets;
      this._services = value.services;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: boolean | cdktf.IResolvable; 
  public get applications() {
    return this.getBooleanAttribute('applications');
  }
  public set applications(value: boolean | cdktf.IResolvable) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // iac - computed: false, optional: true, required: false
  private _iac?: boolean | cdktf.IResolvable; 
  public get iac() {
    return this.getBooleanAttribute('iac');
  }
  public set iac(value: boolean | cdktf.IResolvable) {
    this._iac = value;
  }
  public resetIac() {
    this._iac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iacInput() {
    return this._iac;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: boolean | cdktf.IResolvable; 
  public get secrets() {
    return this.getBooleanAttribute('secrets');
  }
  public set secrets(value: boolean | cdktf.IResolvable) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // services - computed: false, optional: true, required: false
  private _services?: boolean | cdktf.IResolvable; 
  public get services() {
    return this.getBooleanAttribute('services');
  }
  public set services(value: boolean | cdktf.IResolvable) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}

export class RepositoryConfigConfigExposuresScannersCategoryList extends cdktf.ComplexList {
  public internalValue? : RepositoryConfigConfigExposuresScannersCategory[] | cdktf.IResolvable

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
  public get(index: number): RepositoryConfigConfigExposuresScannersCategoryOutputReference {
    return new RepositoryConfigConfigExposuresScannersCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryConfigConfigExposures {
  /**
  * scanners_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#scanners_category RepositoryConfig#scanners_category}
  */
  readonly scannersCategory?: RepositoryConfigConfigExposuresScannersCategory[] | cdktf.IResolvable;
}

export function repositoryConfigConfigExposuresToTerraform(struct?: RepositoryConfigConfigExposures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scanners_category: cdktf.listMapper(repositoryConfigConfigExposuresScannersCategoryToTerraform, true)(struct!.scannersCategory),
  }
}


export function repositoryConfigConfigExposuresToHclTerraform(struct?: RepositoryConfigConfigExposures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scanners_category: {
      value: cdktf.listMapperHcl(repositoryConfigConfigExposuresScannersCategoryToHclTerraform, true)(struct!.scannersCategory),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryConfigConfigExposuresScannersCategoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryConfigConfigExposuresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryConfigConfigExposures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scannersCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scannersCategory = this._scannersCategory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryConfigConfigExposures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scannersCategory.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scannersCategory.internalValue = value.scannersCategory;
    }
  }

  // scanners_category - computed: false, optional: true, required: false
  private _scannersCategory = new RepositoryConfigConfigExposuresScannersCategoryList(this, "scanners_category", true);
  public get scannersCategory() {
    return this._scannersCategory;
  }
  public putScannersCategory(value: RepositoryConfigConfigExposuresScannersCategory[] | cdktf.IResolvable) {
    this._scannersCategory.internalValue = value;
  }
  public resetScannersCategory() {
    this._scannersCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannersCategoryInput() {
    return this._scannersCategory.internalValue;
  }
}

export class RepositoryConfigConfigExposuresList extends cdktf.ComplexList {
  public internalValue? : RepositoryConfigConfigExposures[] | cdktf.IResolvable

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
  public get(index: number): RepositoryConfigConfigExposuresOutputReference {
    return new RepositoryConfigConfigExposuresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryConfigConfigA {
  /**
  * The artifact will be retained for the number of days you set here, after the artifact is scanned. This will apply to all artifacts in the repository. Can be omitted when `paths_config` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#retention_in_days RepositoryConfig#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Enables or disables vulnerability contextual analysis. Only for SaaS instances, will be available after Xray 3.59. Must be set for Docker, OCI, and Maven package types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#vuln_contextual_analysis RepositoryConfig#vuln_contextual_analysis}
  */
  readonly vulnContextualAnalysis?: boolean | cdktf.IResolvable;
  /**
  * exposures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#exposures RepositoryConfig#exposures}
  */
  readonly exposures?: RepositoryConfigConfigExposures[] | cdktf.IResolvable;
}

export function repositoryConfigConfigAToTerraform(struct?: RepositoryConfigConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    vuln_contextual_analysis: cdktf.booleanToTerraform(struct!.vulnContextualAnalysis),
    exposures: cdktf.listMapper(repositoryConfigConfigExposuresToTerraform, true)(struct!.exposures),
  }
}


export function repositoryConfigConfigAToHclTerraform(struct?: RepositoryConfigConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_in_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vuln_contextual_analysis: {
      value: cdktf.booleanToHclTerraform(struct!.vulnContextualAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exposures: {
      value: cdktf.listMapperHcl(repositoryConfigConfigExposuresToHclTerraform, true)(struct!.exposures),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryConfigConfigExposuresList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryConfigConfigAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryConfigConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDays = this._retentionInDays;
    }
    if (this._vulnContextualAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnContextualAnalysis = this._vulnContextualAnalysis;
    }
    if (this._exposures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposures = this._exposures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryConfigConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retentionInDays = undefined;
      this._vulnContextualAnalysis = undefined;
      this._exposures.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retentionInDays = value.retentionInDays;
      this._vulnContextualAnalysis = value.vulnContextualAnalysis;
      this._exposures.internalValue = value.exposures;
    }
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }

  // vuln_contextual_analysis - computed: false, optional: true, required: false
  private _vulnContextualAnalysis?: boolean | cdktf.IResolvable; 
  public get vulnContextualAnalysis() {
    return this.getBooleanAttribute('vuln_contextual_analysis');
  }
  public set vulnContextualAnalysis(value: boolean | cdktf.IResolvable) {
    this._vulnContextualAnalysis = value;
  }
  public resetVulnContextualAnalysis() {
    this._vulnContextualAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnContextualAnalysisInput() {
    return this._vulnContextualAnalysis;
  }

  // exposures - computed: false, optional: true, required: false
  private _exposures = new RepositoryConfigConfigExposuresList(this, "exposures", true);
  public get exposures() {
    return this._exposures;
  }
  public putExposures(value: RepositoryConfigConfigExposures[] | cdktf.IResolvable) {
    this._exposures.internalValue = value;
  }
  public resetExposures() {
    this._exposures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposuresInput() {
    return this._exposures.internalValue;
  }
}

export class RepositoryConfigConfigAList extends cdktf.ComplexList {
  public internalValue? : RepositoryConfigConfigA[] | cdktf.IResolvable

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
  public get(index: number): RepositoryConfigConfigAOutputReference {
    return new RepositoryConfigConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryConfigPathsConfigAllOtherArtifacts {
  /**
  * If checked, Xray will scan newly added artifacts in the path. Note that existing artifacts will not be scanned. If the folder contains existing artifacts that have been scanned, and you do not want to index new artifacts in that folder, you can choose not to index that folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#index_new_artifacts RepositoryConfig#index_new_artifacts}
  */
  readonly indexNewArtifacts?: boolean | cdktf.IResolvable;
  /**
  * The artifact will be retained for the number of days you set here, after the artifact is scanned. This will apply to all artifacts in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#retention_in_days RepositoryConfig#retention_in_days}
  */
  readonly retentionInDays?: number;
}

export function repositoryConfigPathsConfigAllOtherArtifactsToTerraform(struct?: RepositoryConfigPathsConfigAllOtherArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_new_artifacts: cdktf.booleanToTerraform(struct!.indexNewArtifacts),
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
  }
}


export function repositoryConfigPathsConfigAllOtherArtifactsToHclTerraform(struct?: RepositoryConfigPathsConfigAllOtherArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_new_artifacts: {
      value: cdktf.booleanToHclTerraform(struct!.indexNewArtifacts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_in_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryConfigPathsConfigAllOtherArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryConfigPathsConfigAllOtherArtifacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexNewArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexNewArtifacts = this._indexNewArtifacts;
    }
    if (this._retentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDays = this._retentionInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryConfigPathsConfigAllOtherArtifacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexNewArtifacts = undefined;
      this._retentionInDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexNewArtifacts = value.indexNewArtifacts;
      this._retentionInDays = value.retentionInDays;
    }
  }

  // index_new_artifacts - computed: true, optional: true, required: false
  private _indexNewArtifacts?: boolean | cdktf.IResolvable; 
  public get indexNewArtifacts() {
    return this.getBooleanAttribute('index_new_artifacts');
  }
  public set indexNewArtifacts(value: boolean | cdktf.IResolvable) {
    this._indexNewArtifacts = value;
  }
  public resetIndexNewArtifacts() {
    this._indexNewArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNewArtifactsInput() {
    return this._indexNewArtifacts;
  }

  // retention_in_days - computed: true, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }
}

export class RepositoryConfigPathsConfigAllOtherArtifactsList extends cdktf.ComplexList {
  public internalValue? : RepositoryConfigPathsConfigAllOtherArtifacts[] | cdktf.IResolvable

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
  public get(index: number): RepositoryConfigPathsConfigAllOtherArtifactsOutputReference {
    return new RepositoryConfigPathsConfigAllOtherArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryConfigPathsConfigPattern {
  /**
  * Paths pattern to exclude from the set specific configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#exclude RepositoryConfig#exclude}
  */
  readonly exclude?: string;
  /**
  * Paths pattern to include in the set specific configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#include RepositoryConfig#include}
  */
  readonly include: string;
  /**
  * If checked, Xray will scan newly added artifacts in the path. Note that existing artifacts will not be scanned. If the folder contains existing artifacts that have been scanned, and you do not want to index new artifacts in that folder, you can choose not to index that folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#index_new_artifacts RepositoryConfig#index_new_artifacts}
  */
  readonly indexNewArtifacts?: boolean | cdktf.IResolvable;
  /**
  * The artifact will be retained for the number of days you set here, after the artifact is scanned. This will apply to all artifacts in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#retention_in_days RepositoryConfig#retention_in_days}
  */
  readonly retentionInDays?: number;
}

export function repositoryConfigPathsConfigPatternToTerraform(struct?: RepositoryConfigPathsConfigPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    index_new_artifacts: cdktf.booleanToTerraform(struct!.indexNewArtifacts),
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
  }
}


export function repositoryConfigPathsConfigPatternToHclTerraform(struct?: RepositoryConfigPathsConfigPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_new_artifacts: {
      value: cdktf.booleanToHclTerraform(struct!.indexNewArtifacts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_in_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryConfigPathsConfigPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryConfigPathsConfigPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._indexNewArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexNewArtifacts = this._indexNewArtifacts;
    }
    if (this._retentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDays = this._retentionInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryConfigPathsConfigPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
      this._indexNewArtifacts = undefined;
      this._retentionInDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
      this._indexNewArtifacts = value.indexNewArtifacts;
      this._retentionInDays = value.retentionInDays;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // index_new_artifacts - computed: true, optional: true, required: false
  private _indexNewArtifacts?: boolean | cdktf.IResolvable; 
  public get indexNewArtifacts() {
    return this.getBooleanAttribute('index_new_artifacts');
  }
  public set indexNewArtifacts(value: boolean | cdktf.IResolvable) {
    this._indexNewArtifacts = value;
  }
  public resetIndexNewArtifacts() {
    this._indexNewArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNewArtifactsInput() {
    return this._indexNewArtifacts;
  }

  // retention_in_days - computed: true, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }
}

export class RepositoryConfigPathsConfigPatternList extends cdktf.ComplexList {
  public internalValue? : RepositoryConfigPathsConfigPattern[] | cdktf.IResolvable

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
  public get(index: number): RepositoryConfigPathsConfigPatternOutputReference {
    return new RepositoryConfigPathsConfigPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryConfigPathsConfig {
  /**
  * all_other_artifacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#all_other_artifacts RepositoryConfig#all_other_artifacts}
  */
  readonly allOtherArtifacts?: RepositoryConfigPathsConfigAllOtherArtifacts[] | cdktf.IResolvable;
  /**
  * pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#pattern RepositoryConfig#pattern}
  */
  readonly pattern?: RepositoryConfigPathsConfigPattern[] | cdktf.IResolvable;
}

export function repositoryConfigPathsConfigToTerraform(struct?: RepositoryConfigPathsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_other_artifacts: cdktf.listMapper(repositoryConfigPathsConfigAllOtherArtifactsToTerraform, true)(struct!.allOtherArtifacts),
    pattern: cdktf.listMapper(repositoryConfigPathsConfigPatternToTerraform, true)(struct!.pattern),
  }
}


export function repositoryConfigPathsConfigToHclTerraform(struct?: RepositoryConfigPathsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_other_artifacts: {
      value: cdktf.listMapperHcl(repositoryConfigPathsConfigAllOtherArtifactsToHclTerraform, true)(struct!.allOtherArtifacts),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryConfigPathsConfigAllOtherArtifactsList",
    },
    pattern: {
      value: cdktf.listMapperHcl(repositoryConfigPathsConfigPatternToHclTerraform, true)(struct!.pattern),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryConfigPathsConfigPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryConfigPathsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryConfigPathsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allOtherArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allOtherArtifacts = this._allOtherArtifacts?.internalValue;
    }
    if (this._pattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryConfigPathsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allOtherArtifacts.internalValue = undefined;
      this._pattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allOtherArtifacts.internalValue = value.allOtherArtifacts;
      this._pattern.internalValue = value.pattern;
    }
  }

  // all_other_artifacts - computed: false, optional: true, required: false
  private _allOtherArtifacts = new RepositoryConfigPathsConfigAllOtherArtifactsList(this, "all_other_artifacts", true);
  public get allOtherArtifacts() {
    return this._allOtherArtifacts;
  }
  public putAllOtherArtifacts(value: RepositoryConfigPathsConfigAllOtherArtifacts[] | cdktf.IResolvable) {
    this._allOtherArtifacts.internalValue = value;
  }
  public resetAllOtherArtifacts() {
    this._allOtherArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allOtherArtifactsInput() {
    return this._allOtherArtifacts.internalValue;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern = new RepositoryConfigPathsConfigPatternList(this, "pattern", true);
  public get pattern() {
    return this._pattern;
  }
  public putPattern(value: RepositoryConfigPathsConfigPattern[] | cdktf.IResolvable) {
    this._pattern.internalValue = value;
  }
  public resetPattern() {
    this._pattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern.internalValue;
  }
}

export class RepositoryConfigPathsConfigList extends cdktf.ComplexList {
  public internalValue? : RepositoryConfigPathsConfig[] | cdktf.IResolvable

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
  public get(index: number): RepositoryConfigPathsConfigOutputReference {
    return new RepositoryConfigPathsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config xray_repository_config}
*/
export class RepositoryConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_repository_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryConfig to import
  * @param importFromId The id of the existing RepositoryConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_repository_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.4/docs/resources/repository_config xray_repository_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryConfigConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_repository_config',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.4',
        providerVersionConstraint: '3.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._jasEnabled = config.jasEnabled;
    this._repoName = config.repoName;
    this._config.internalValue = config.config;
    this._pathsConfig.internalValue = config.pathsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // jas_enabled - computed: true, optional: true, required: false
  private _jasEnabled?: boolean | cdktf.IResolvable; 
  public get jasEnabled() {
    return this.getBooleanAttribute('jas_enabled');
  }
  public set jasEnabled(value: boolean | cdktf.IResolvable) {
    this._jasEnabled = value;
  }
  public resetJasEnabled() {
    this._jasEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jasEnabledInput() {
    return this._jasEnabled;
  }

  // repo_name - computed: false, optional: false, required: true
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // config - computed: false, optional: true, required: false
  private _config = new RepositoryConfigConfigAList(this, "config", true);
  public get config() {
    return this._config;
  }
  public putConfig(value: RepositoryConfigConfigA[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // paths_config - computed: false, optional: true, required: false
  private _pathsConfig = new RepositoryConfigPathsConfigList(this, "paths_config", true);
  public get pathsConfig() {
    return this._pathsConfig;
  }
  public putPathsConfig(value: RepositoryConfigPathsConfig[] | cdktf.IResolvable) {
    this._pathsConfig.internalValue = value;
  }
  public resetPathsConfig() {
    this._pathsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsConfigInput() {
    return this._pathsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      jas_enabled: cdktf.booleanToTerraform(this._jasEnabled),
      repo_name: cdktf.stringToTerraform(this._repoName),
      config: cdktf.listMapper(repositoryConfigConfigAToTerraform, true)(this._config.internalValue),
      paths_config: cdktf.listMapper(repositoryConfigPathsConfigToTerraform, true)(this._pathsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jas_enabled: {
        value: cdktf.booleanToHclTerraform(this._jasEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repo_name: {
        value: cdktf.stringToHclTerraform(this._repoName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.listMapperHcl(repositoryConfigConfigAToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RepositoryConfigConfigAList",
      },
      paths_config: {
        value: cdktf.listMapperHcl(repositoryConfigPathsConfigToHclTerraform, true)(this._pathsConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RepositoryConfigPathsConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
