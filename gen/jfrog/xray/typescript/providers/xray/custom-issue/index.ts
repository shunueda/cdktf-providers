// https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomIssueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of custom issue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#description CustomIssue#description}
  */
  readonly description: string;
  /**
  * Name of the custom issue. It must not begin with 'xray' (case insensitive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#name CustomIssue#name}
  */
  readonly name: string;
  /**
  * Package Type of custom issue. Valid values are: alpine, bower, cargo, composer, conan, conda, cran, debian, docker, generic, go, gradle, huggingface, ivy, maven, npm, nuget, oci, pypi, rpm, rubygems, sbt, terraformbe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#package_type CustomIssue#package_type}
  */
  readonly packageType: string;
  /**
  * Provider of custom issue. It must not be 'jfrog' (case insensitive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#provider_name CustomIssue#provider_name}
  */
  readonly providerName: string;
  /**
  * Severity of custom issue. Valid values: Critical, High, Medium, Low, Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#severity CustomIssue#severity}
  */
  readonly severity: string;
  /**
  * Summary of custom issue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#summary CustomIssue#summary}
  */
  readonly summary: string;
  /**
  * Type of custom issue. Valid values: other, performance, security, versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#type CustomIssue#type}
  */
  readonly type: string;
  /**
  * component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#component CustomIssue#component}
  */
  readonly component?: CustomIssueComponent[] | cdktf.IResolvable;
  /**
  * cve block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#cve CustomIssue#cve}
  */
  readonly cve?: CustomIssueCve[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#source CustomIssue#source}
  */
  readonly source?: CustomIssueSource[] | cdktf.IResolvable;
}
export interface CustomIssueComponentVulnerableRanges {
  /**
  * List of fixed versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#fixed_versions CustomIssue#fixed_versions}
  */
  readonly fixedVersions?: string[];
  /**
  * List of vulnerable versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#vulnerable_versions CustomIssue#vulnerable_versions}
  */
  readonly vulnerableVersions?: string[];
}

export function customIssueComponentVulnerableRangesToTerraform(struct?: CustomIssueComponentVulnerableRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fixedVersions),
    vulnerable_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vulnerableVersions),
  }
}


export function customIssueComponentVulnerableRangesToHclTerraform(struct?: CustomIssueComponentVulnerableRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fixedVersions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vulnerable_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vulnerableVersions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomIssueComponentVulnerableRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomIssueComponentVulnerableRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedVersions = this._fixedVersions;
    }
    if (this._vulnerableVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerableVersions = this._vulnerableVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomIssueComponentVulnerableRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedVersions = undefined;
      this._vulnerableVersions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedVersions = value.fixedVersions;
      this._vulnerableVersions = value.vulnerableVersions;
    }
  }

  // fixed_versions - computed: false, optional: true, required: false
  private _fixedVersions?: string[]; 
  public get fixedVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('fixed_versions'));
  }
  public set fixedVersions(value: string[]) {
    this._fixedVersions = value;
  }
  public resetFixedVersions() {
    this._fixedVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedVersionsInput() {
    return this._fixedVersions;
  }

  // vulnerable_versions - computed: false, optional: true, required: false
  private _vulnerableVersions?: string[]; 
  public get vulnerableVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('vulnerable_versions'));
  }
  public set vulnerableVersions(value: string[]) {
    this._vulnerableVersions = value;
  }
  public resetVulnerableVersions() {
    this._vulnerableVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerableVersionsInput() {
    return this._vulnerableVersions;
  }
}

export class CustomIssueComponentVulnerableRangesList extends cdktf.ComplexList {
  public internalValue? : CustomIssueComponentVulnerableRanges[] | cdktf.IResolvable

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
  public get(index: number): CustomIssueComponentVulnerableRangesOutputReference {
    return new CustomIssueComponentVulnerableRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomIssueComponent {
  /**
  * List of fixed versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#fixed_versions CustomIssue#fixed_versions}
  */
  readonly fixedVersions?: string[];
  /**
  * ID of the component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#id CustomIssue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * List of vulnerable versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#vulnerable_versions CustomIssue#vulnerable_versions}
  */
  readonly vulnerableVersions?: string[];
  /**
  * vulnerable_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#vulnerable_ranges CustomIssue#vulnerable_ranges}
  */
  readonly vulnerableRanges?: CustomIssueComponentVulnerableRanges[] | cdktf.IResolvable;
}

export function customIssueComponentToTerraform(struct?: CustomIssueComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fixedVersions),
    id: cdktf.stringToTerraform(struct!.id),
    vulnerable_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vulnerableVersions),
    vulnerable_ranges: cdktf.listMapper(customIssueComponentVulnerableRangesToTerraform, true)(struct!.vulnerableRanges),
  }
}


export function customIssueComponentToHclTerraform(struct?: CustomIssueComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fixedVersions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vulnerable_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vulnerableVersions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vulnerable_ranges: {
      value: cdktf.listMapperHcl(customIssueComponentVulnerableRangesToHclTerraform, true)(struct!.vulnerableRanges),
      isBlock: true,
      type: "set",
      storageClassType: "CustomIssueComponentVulnerableRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomIssueComponentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomIssueComponent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedVersions = this._fixedVersions;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._vulnerableVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerableVersions = this._vulnerableVersions;
    }
    if (this._vulnerableRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerableRanges = this._vulnerableRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomIssueComponent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedVersions = undefined;
      this._id = undefined;
      this._vulnerableVersions = undefined;
      this._vulnerableRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedVersions = value.fixedVersions;
      this._id = value.id;
      this._vulnerableVersions = value.vulnerableVersions;
      this._vulnerableRanges.internalValue = value.vulnerableRanges;
    }
  }

  // fixed_versions - computed: false, optional: true, required: false
  private _fixedVersions?: string[]; 
  public get fixedVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('fixed_versions'));
  }
  public set fixedVersions(value: string[]) {
    this._fixedVersions = value;
  }
  public resetFixedVersions() {
    this._fixedVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedVersionsInput() {
    return this._fixedVersions;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // vulnerable_versions - computed: false, optional: true, required: false
  private _vulnerableVersions?: string[]; 
  public get vulnerableVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('vulnerable_versions'));
  }
  public set vulnerableVersions(value: string[]) {
    this._vulnerableVersions = value;
  }
  public resetVulnerableVersions() {
    this._vulnerableVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerableVersionsInput() {
    return this._vulnerableVersions;
  }

  // vulnerable_ranges - computed: false, optional: true, required: false
  private _vulnerableRanges = new CustomIssueComponentVulnerableRangesList(this, "vulnerable_ranges", true);
  public get vulnerableRanges() {
    return this._vulnerableRanges;
  }
  public putVulnerableRanges(value: CustomIssueComponentVulnerableRanges[] | cdktf.IResolvable) {
    this._vulnerableRanges.internalValue = value;
  }
  public resetVulnerableRanges() {
    this._vulnerableRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerableRangesInput() {
    return this._vulnerableRanges.internalValue;
  }
}

export class CustomIssueComponentList extends cdktf.ComplexList {
  public internalValue? : CustomIssueComponent[] | cdktf.IResolvable

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
  public get(index: number): CustomIssueComponentOutputReference {
    return new CustomIssueComponentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomIssueCve {
  /**
  * CVE ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#cve CustomIssue#cve}
  */
  readonly cve?: string;
  /**
  * CVSS v2 score
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#cvss_v2 CustomIssue#cvss_v2}
  */
  readonly cvssV2?: string;
  /**
  * CVSS v3 score
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#cvss_v3 CustomIssue#cvss_v3}
  */
  readonly cvssV3?: string;
}

export function customIssueCveToTerraform(struct?: CustomIssueCve | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cve: cdktf.stringToTerraform(struct!.cve),
    cvss_v2: cdktf.stringToTerraform(struct!.cvssV2),
    cvss_v3: cdktf.stringToTerraform(struct!.cvssV3),
  }
}


export function customIssueCveToHclTerraform(struct?: CustomIssueCve | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cve: {
      value: cdktf.stringToHclTerraform(struct!.cve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvss_v2: {
      value: cdktf.stringToHclTerraform(struct!.cvssV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvss_v3: {
      value: cdktf.stringToHclTerraform(struct!.cvssV3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomIssueCveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomIssueCve | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cve !== undefined) {
      hasAnyValues = true;
      internalValueResult.cve = this._cve;
    }
    if (this._cvssV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvssV2 = this._cvssV2;
    }
    if (this._cvssV3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvssV3 = this._cvssV3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomIssueCve | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cve = undefined;
      this._cvssV2 = undefined;
      this._cvssV3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cve = value.cve;
      this._cvssV2 = value.cvssV2;
      this._cvssV3 = value.cvssV3;
    }
  }

  // cve - computed: false, optional: true, required: false
  private _cve?: string; 
  public get cve() {
    return this.getStringAttribute('cve');
  }
  public set cve(value: string) {
    this._cve = value;
  }
  public resetCve() {
    this._cve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cveInput() {
    return this._cve;
  }

  // cvss_v2 - computed: false, optional: true, required: false
  private _cvssV2?: string; 
  public get cvssV2() {
    return this.getStringAttribute('cvss_v2');
  }
  public set cvssV2(value: string) {
    this._cvssV2 = value;
  }
  public resetCvssV2() {
    this._cvssV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvssV2Input() {
    return this._cvssV2;
  }

  // cvss_v3 - computed: false, optional: true, required: false
  private _cvssV3?: string; 
  public get cvssV3() {
    return this.getStringAttribute('cvss_v3');
  }
  public set cvssV3(value: string) {
    this._cvssV3 = value;
  }
  public resetCvssV3() {
    this._cvssV3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvssV3Input() {
    return this._cvssV3;
  }
}

export class CustomIssueCveList extends cdktf.ComplexList {
  public internalValue? : CustomIssueCve[] | cdktf.IResolvable

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
  public get(index: number): CustomIssueCveOutputReference {
    return new CustomIssueCveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomIssueSource {
  /**
  * ID of the source, e.g. CVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#id CustomIssue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name of the source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#name CustomIssue#name}
  */
  readonly name?: string;
  /**
  * URL of the source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#url CustomIssue#url}
  */
  readonly url?: string;
}

export function customIssueSourceToTerraform(struct?: CustomIssueSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function customIssueSourceToHclTerraform(struct?: CustomIssueSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class CustomIssueSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomIssueSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomIssueSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._url = value.url;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class CustomIssueSourceList extends cdktf.ComplexList {
  public internalValue? : CustomIssueSource[] | cdktf.IResolvable

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
  public get(index: number): CustomIssueSourceOutputReference {
    return new CustomIssueSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue xray_custom_issue}
*/
export class CustomIssue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_custom_issue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomIssue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomIssue to import
  * @param importFromId The id of the existing CustomIssue that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomIssue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_custom_issue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/custom_issue xray_custom_issue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomIssueConfig
  */
  public constructor(scope: Construct, id: string, config: CustomIssueConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_custom_issue',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.3',
        providerVersionConstraint: '3.1.3'
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
    this._name = config.name;
    this._packageType = config.packageType;
    this._providerName = config.providerName;
    this._severity = config.severity;
    this._summary = config.summary;
    this._type = config.type;
    this._component.internalValue = config.component;
    this._cve.internalValue = config.cve;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
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

  // component - computed: false, optional: true, required: false
  private _component = new CustomIssueComponentList(this, "component", true);
  public get component() {
    return this._component;
  }
  public putComponent(value: CustomIssueComponent[] | cdktf.IResolvable) {
    this._component.internalValue = value;
  }
  public resetComponent() {
    this._component.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component.internalValue;
  }

  // cve - computed: false, optional: true, required: false
  private _cve = new CustomIssueCveList(this, "cve", true);
  public get cve() {
    return this._cve;
  }
  public putCve(value: CustomIssueCve[] | cdktf.IResolvable) {
    this._cve.internalValue = value;
  }
  public resetCve() {
    this._cve.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cveInput() {
    return this._cve.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new CustomIssueSourceList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: CustomIssueSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      package_type: cdktf.stringToTerraform(this._packageType),
      provider_name: cdktf.stringToTerraform(this._providerName),
      severity: cdktf.stringToTerraform(this._severity),
      summary: cdktf.stringToTerraform(this._summary),
      type: cdktf.stringToTerraform(this._type),
      component: cdktf.listMapper(customIssueComponentToTerraform, true)(this._component.internalValue),
      cve: cdktf.listMapper(customIssueCveToTerraform, true)(this._cve.internalValue),
      source: cdktf.listMapper(customIssueSourceToTerraform, true)(this._source.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summary: {
        value: cdktf.stringToHclTerraform(this._summary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component: {
        value: cdktf.listMapperHcl(customIssueComponentToHclTerraform, true)(this._component.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CustomIssueComponentList",
      },
      cve: {
        value: cdktf.listMapperHcl(customIssueCveToHclTerraform, true)(this._cve.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CustomIssueCveList",
      },
      source: {
        value: cdktf.listMapperHcl(customIssueSourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CustomIssueSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
