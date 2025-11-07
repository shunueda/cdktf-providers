// https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/data-sources/artifacts_scan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataXrayArtifactsScanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Return only records created before the specified time (in RFC 3339 format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/data-sources/artifacts_scan#created_end DataXrayArtifactsScan#created_end}
  */
  readonly createdEnd?: string;
  /**
  * Return only records created after the specified time (in RFC 3339 format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/data-sources/artifacts_scan#created_start DataXrayArtifactsScan#created_start}
  */
  readonly createdStart?: string;
  /**
  * The direction by which to order the results (either ascending or descending). Allowed value: `asc` or `desc`. Default is `asc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/data-sources/artifacts_scan#direction DataXrayArtifactsScan#direction}
  */
  readonly direction?: string;
  /**
  * The number of entries to return. Default is 15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/data-sources/artifacts_scan#num_of_rows DataXrayArtifactsScan#num_of_rows}
  */
  readonly numOfRows?: number;
  /**
  * A value returned by the API. It needs to be passed to the API to get the next page. A value of -1 means that the last page was reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/data-sources/artifacts_scan#offset DataXrayArtifactsScan#offset}
  */
  readonly offset?: number;
  /**
  * By which column to order the results. Allowed value: `created`, `size`, `name`, or `repo_path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/data-sources/artifacts_scan#order_by DataXrayArtifactsScan#order_by}
  */
  readonly orderBy?: string;
  /**
  * The repository key for which to get artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/data-sources/artifacts_scan#repo DataXrayArtifactsScan#repo}
  */
  readonly repo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/data-sources/artifacts_scan#repo_path DataXrayArtifactsScan#repo_path}
  */
  readonly repoPath?: string;
}
export interface DataXrayArtifactsScanResultsExposuresIssuesCategoriesApplications {
}

export function dataXrayArtifactsScanResultsExposuresIssuesCategoriesApplicationsToTerraform(struct?: DataXrayArtifactsScanResultsExposuresIssuesCategoriesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataXrayArtifactsScanResultsExposuresIssuesCategoriesApplicationsToHclTerraform(struct?: DataXrayArtifactsScanResultsExposuresIssuesCategoriesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataXrayArtifactsScanResultsExposuresIssuesCategoriesApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataXrayArtifactsScanResultsExposuresIssuesCategoriesApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataXrayArtifactsScanResultsExposuresIssuesCategoriesApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // information - computed: true, optional: false, required: false
  public get information() {
    return this.getNumberAttribute('information');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getNumberAttribute('low');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getNumberAttribute('medium');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // unknown - computed: true, optional: false, required: false
  public get unknown() {
    return this.getNumberAttribute('unknown');
  }
}
export interface DataXrayArtifactsScanResultsExposuresIssuesCategoriesIac {
}

export function dataXrayArtifactsScanResultsExposuresIssuesCategoriesIacToTerraform(struct?: DataXrayArtifactsScanResultsExposuresIssuesCategoriesIac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataXrayArtifactsScanResultsExposuresIssuesCategoriesIacToHclTerraform(struct?: DataXrayArtifactsScanResultsExposuresIssuesCategoriesIac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataXrayArtifactsScanResultsExposuresIssuesCategoriesIacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataXrayArtifactsScanResultsExposuresIssuesCategoriesIac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataXrayArtifactsScanResultsExposuresIssuesCategoriesIac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // information - computed: true, optional: false, required: false
  public get information() {
    return this.getNumberAttribute('information');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getNumberAttribute('low');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getNumberAttribute('medium');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // unknown - computed: true, optional: false, required: false
  public get unknown() {
    return this.getNumberAttribute('unknown');
  }
}
export interface DataXrayArtifactsScanResultsExposuresIssuesCategoriesSecrets {
}

export function dataXrayArtifactsScanResultsExposuresIssuesCategoriesSecretsToTerraform(struct?: DataXrayArtifactsScanResultsExposuresIssuesCategoriesSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataXrayArtifactsScanResultsExposuresIssuesCategoriesSecretsToHclTerraform(struct?: DataXrayArtifactsScanResultsExposuresIssuesCategoriesSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataXrayArtifactsScanResultsExposuresIssuesCategoriesSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataXrayArtifactsScanResultsExposuresIssuesCategoriesSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataXrayArtifactsScanResultsExposuresIssuesCategoriesSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // information - computed: true, optional: false, required: false
  public get information() {
    return this.getNumberAttribute('information');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getNumberAttribute('low');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getNumberAttribute('medium');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // unknown - computed: true, optional: false, required: false
  public get unknown() {
    return this.getNumberAttribute('unknown');
  }
}
export interface DataXrayArtifactsScanResultsExposuresIssuesCategoriesServices {
}

export function dataXrayArtifactsScanResultsExposuresIssuesCategoriesServicesToTerraform(struct?: DataXrayArtifactsScanResultsExposuresIssuesCategoriesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataXrayArtifactsScanResultsExposuresIssuesCategoriesServicesToHclTerraform(struct?: DataXrayArtifactsScanResultsExposuresIssuesCategoriesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataXrayArtifactsScanResultsExposuresIssuesCategoriesServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataXrayArtifactsScanResultsExposuresIssuesCategoriesServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataXrayArtifactsScanResultsExposuresIssuesCategoriesServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // information - computed: true, optional: false, required: false
  public get information() {
    return this.getNumberAttribute('information');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getNumberAttribute('low');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getNumberAttribute('medium');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // unknown - computed: true, optional: false, required: false
  public get unknown() {
    return this.getNumberAttribute('unknown');
  }
}
export interface DataXrayArtifactsScanResultsExposuresIssuesCategories {
}

export function dataXrayArtifactsScanResultsExposuresIssuesCategoriesToTerraform(struct?: DataXrayArtifactsScanResultsExposuresIssuesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataXrayArtifactsScanResultsExposuresIssuesCategoriesToHclTerraform(struct?: DataXrayArtifactsScanResultsExposuresIssuesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataXrayArtifactsScanResultsExposuresIssuesCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataXrayArtifactsScanResultsExposuresIssuesCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataXrayArtifactsScanResultsExposuresIssuesCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applications - computed: true, optional: false, required: false
  private _applications = new DataXrayArtifactsScanResultsExposuresIssuesCategoriesApplicationsOutputReference(this, "applications");
  public get applications() {
    return this._applications;
  }

  // iac - computed: true, optional: false, required: false
  private _iac = new DataXrayArtifactsScanResultsExposuresIssuesCategoriesIacOutputReference(this, "iac");
  public get iac() {
    return this._iac;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataXrayArtifactsScanResultsExposuresIssuesCategoriesSecretsOutputReference(this, "secrets");
  public get secrets() {
    return this._secrets;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataXrayArtifactsScanResultsExposuresIssuesCategoriesServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
}
export interface DataXrayArtifactsScanResultsExposuresIssues {
}

export function dataXrayArtifactsScanResultsExposuresIssuesToTerraform(struct?: DataXrayArtifactsScanResultsExposuresIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataXrayArtifactsScanResultsExposuresIssuesToHclTerraform(struct?: DataXrayArtifactsScanResultsExposuresIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataXrayArtifactsScanResultsExposuresIssuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataXrayArtifactsScanResultsExposuresIssues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataXrayArtifactsScanResultsExposuresIssues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataXrayArtifactsScanResultsExposuresIssuesCategoriesOutputReference(this, "categories");
  public get categories() {
    return this._categories;
  }

  // last_scanned - computed: true, optional: false, required: false
  public get lastScanned() {
    return this.getStringAttribute('last_scanned');
  }
}
export interface DataXrayArtifactsScanResultsSecIssues {
}

export function dataXrayArtifactsScanResultsSecIssuesToTerraform(struct?: DataXrayArtifactsScanResultsSecIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataXrayArtifactsScanResultsSecIssuesToHclTerraform(struct?: DataXrayArtifactsScanResultsSecIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataXrayArtifactsScanResultsSecIssuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataXrayArtifactsScanResultsSecIssues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataXrayArtifactsScanResultsSecIssues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // information - computed: true, optional: false, required: false
  public get information() {
    return this.getNumberAttribute('information');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getNumberAttribute('low');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getNumberAttribute('medium');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // unknown - computed: true, optional: false, required: false
  public get unknown() {
    return this.getNumberAttribute('unknown');
  }
}
export interface DataXrayArtifactsScanResults {
}

export function dataXrayArtifactsScanResultsToTerraform(struct?: DataXrayArtifactsScanResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataXrayArtifactsScanResultsToHclTerraform(struct?: DataXrayArtifactsScanResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataXrayArtifactsScanResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataXrayArtifactsScanResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataXrayArtifactsScanResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // deployed_by - computed: true, optional: false, required: false
  public get deployedBy() {
    return this.getStringAttribute('deployed_by');
  }

  // exposures_issues - computed: true, optional: false, required: false
  private _exposuresIssues = new DataXrayArtifactsScanResultsExposuresIssuesOutputReference(this, "exposures_issues");
  public get exposuresIssues() {
    return this._exposuresIssues;
  }

  // malicious_packages - computed: true, optional: false, required: false
  public get maliciousPackages() {
    return cdktf.Fn.tolist(this.getListAttribute('malicious_packages'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // package_id - computed: true, optional: false, required: false
  public get packageId() {
    return this.getStringAttribute('package_id');
  }

  // repo_full_path - computed: true, optional: false, required: false
  public get repoFullPath() {
    return this.getStringAttribute('repo_full_path');
  }

  // repo_path - computed: true, optional: false, required: false
  public get repoPath() {
    return this.getStringAttribute('repo_path');
  }

  // sec_issues - computed: true, optional: false, required: false
  private _secIssues = new DataXrayArtifactsScanResultsSecIssuesOutputReference(this, "sec_issues");
  public get secIssues() {
    return this._secIssues;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // violations - computed: true, optional: false, required: false
  public get violations() {
    return this.getNumberAttribute('violations');
  }
}

export class DataXrayArtifactsScanResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataXrayArtifactsScanResultsOutputReference {
    return new DataXrayArtifactsScanResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/data-sources/artifacts_scan xray_artifacts_scan}
*/
export class DataXrayArtifactsScan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_artifacts_scan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataXrayArtifactsScan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataXrayArtifactsScan to import
  * @param importFromId The id of the existing DataXrayArtifactsScan that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/data-sources/artifacts_scan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataXrayArtifactsScan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_artifacts_scan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/data-sources/artifacts_scan xray_artifacts_scan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataXrayArtifactsScanConfig
  */
  public constructor(scope: Construct, id: string, config: DataXrayArtifactsScanConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_artifacts_scan',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdEnd = config.createdEnd;
    this._createdStart = config.createdStart;
    this._direction = config.direction;
    this._numOfRows = config.numOfRows;
    this._offset = config.offset;
    this._orderBy = config.orderBy;
    this._repo = config.repo;
    this._repoPath = config.repoPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_end - computed: false, optional: true, required: false
  private _createdEnd?: string; 
  public get createdEnd() {
    return this.getStringAttribute('created_end');
  }
  public set createdEnd(value: string) {
    this._createdEnd = value;
  }
  public resetCreatedEnd() {
    this._createdEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdEndInput() {
    return this._createdEnd;
  }

  // created_start - computed: false, optional: true, required: false
  private _createdStart?: string; 
  public get createdStart() {
    return this.getStringAttribute('created_start');
  }
  public set createdStart(value: string) {
    this._createdStart = value;
  }
  public resetCreatedStart() {
    this._createdStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdStartInput() {
    return this._createdStart;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // num_of_rows - computed: false, optional: true, required: false
  private _numOfRows?: number; 
  public get numOfRows() {
    return this.getNumberAttribute('num_of_rows');
  }
  public set numOfRows(value: number) {
    this._numOfRows = value;
  }
  public resetNumOfRows() {
    this._numOfRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfRowsInput() {
    return this._numOfRows;
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // repo_path - computed: false, optional: true, required: false
  private _repoPath?: string; 
  public get repoPath() {
    return this.getStringAttribute('repo_path');
  }
  public set repoPath(value: string) {
    this._repoPath = value;
  }
  public resetRepoPath() {
    this._repoPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoPathInput() {
    return this._repoPath;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataXrayArtifactsScanResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_end: cdktf.stringToTerraform(this._createdEnd),
      created_start: cdktf.stringToTerraform(this._createdStart),
      direction: cdktf.stringToTerraform(this._direction),
      num_of_rows: cdktf.numberToTerraform(this._numOfRows),
      offset: cdktf.numberToTerraform(this._offset),
      order_by: cdktf.stringToTerraform(this._orderBy),
      repo: cdktf.stringToTerraform(this._repo),
      repo_path: cdktf.stringToTerraform(this._repoPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_end: {
        value: cdktf.stringToHclTerraform(this._createdEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_start: {
        value: cdktf.stringToHclTerraform(this._createdStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_of_rows: {
        value: cdktf.numberToHclTerraform(this._numOfRows),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo: {
        value: cdktf.stringToHclTerraform(this._repo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_path: {
        value: cdktf.stringToHclTerraform(this._repoPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
