// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/image_assurance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAquasecImageAssurancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/image_assurance_policy#name DataAquasecImageAssurancePolicy#name}
  */
  readonly name: string;
}
export interface DataAquasecImageAssurancePolicyAggregatedVulnerability {
}

export function dataAquasecImageAssurancePolicyAggregatedVulnerabilityToTerraform(struct?: DataAquasecImageAssurancePolicyAggregatedVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecImageAssurancePolicyAggregatedVulnerabilityToHclTerraform(struct?: DataAquasecImageAssurancePolicyAggregatedVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecImageAssurancePolicyAggregatedVulnerabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecImageAssurancePolicyAggregatedVulnerability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecImageAssurancePolicyAggregatedVulnerability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_severity_enabled - computed: true, optional: false, required: false
  public get customSeverityEnabled() {
    return this.getBooleanAttribute('custom_severity_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // score_range - computed: true, optional: false, required: false
  public get scoreRange() {
    return this.getNumberListAttribute('score_range');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class DataAquasecImageAssurancePolicyAggregatedVulnerabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecImageAssurancePolicyAggregatedVulnerabilityOutputReference {
    return new DataAquasecImageAssurancePolicyAggregatedVulnerabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecImageAssurancePolicyAllowedImages {
}

export function dataAquasecImageAssurancePolicyAllowedImagesToTerraform(struct?: DataAquasecImageAssurancePolicyAllowedImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecImageAssurancePolicyAllowedImagesToHclTerraform(struct?: DataAquasecImageAssurancePolicyAllowedImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecImageAssurancePolicyAllowedImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecImageAssurancePolicyAllowedImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecImageAssurancePolicyAllowedImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // blacklisted - computed: true, optional: false, required: false
  public get blacklisted() {
    return this.getBooleanAttribute('blacklisted');
  }

  // imagedigest - computed: true, optional: false, required: false
  public get imagedigest() {
    return this.getStringAttribute('imagedigest');
  }

  // imageid - computed: true, optional: false, required: false
  public get imageid() {
    return this.getNumberAttribute('imageid');
  }

  // imagename - computed: true, optional: false, required: false
  public get imagename() {
    return this.getStringAttribute('imagename');
  }

  // lastupdated - computed: true, optional: false, required: false
  public get lastupdated() {
    return this.getNumberAttribute('lastupdated');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // whitelisted - computed: true, optional: false, required: false
  public get whitelisted() {
    return this.getBooleanAttribute('whitelisted');
  }
}

export class DataAquasecImageAssurancePolicyAllowedImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecImageAssurancePolicyAllowedImagesOutputReference {
    return new DataAquasecImageAssurancePolicyAllowedImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecImageAssurancePolicyAutoScanTime {
}

export function dataAquasecImageAssurancePolicyAutoScanTimeToTerraform(struct?: DataAquasecImageAssurancePolicyAutoScanTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecImageAssurancePolicyAutoScanTimeToHclTerraform(struct?: DataAquasecImageAssurancePolicyAutoScanTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecImageAssurancePolicyAutoScanTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecImageAssurancePolicyAutoScanTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecImageAssurancePolicyAutoScanTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iteration - computed: true, optional: false, required: false
  public get iteration() {
    return this.getNumberAttribute('iteration');
  }

  // iteration_type - computed: true, optional: false, required: false
  public get iterationType() {
    return this.getStringAttribute('iteration_type');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }

  // week_days - computed: true, optional: false, required: false
  public get weekDays() {
    return this.getListAttribute('week_days');
  }
}

export class DataAquasecImageAssurancePolicyAutoScanTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecImageAssurancePolicyAutoScanTimeOutputReference {
    return new DataAquasecImageAssurancePolicyAutoScanTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecImageAssurancePolicyCustomChecks {
}

export function dataAquasecImageAssurancePolicyCustomChecksToTerraform(struct?: DataAquasecImageAssurancePolicyCustomChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecImageAssurancePolicyCustomChecksToHclTerraform(struct?: DataAquasecImageAssurancePolicyCustomChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecImageAssurancePolicyCustomChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecImageAssurancePolicyCustomChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecImageAssurancePolicyCustomChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // script_id - computed: true, optional: false, required: false
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
}

export class DataAquasecImageAssurancePolicyCustomChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecImageAssurancePolicyCustomChecksOutputReference {
    return new DataAquasecImageAssurancePolicyCustomChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecImageAssurancePolicyForbiddenLabels {
}

export function dataAquasecImageAssurancePolicyForbiddenLabelsToTerraform(struct?: DataAquasecImageAssurancePolicyForbiddenLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecImageAssurancePolicyForbiddenLabelsToHclTerraform(struct?: DataAquasecImageAssurancePolicyForbiddenLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecImageAssurancePolicyForbiddenLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecImageAssurancePolicyForbiddenLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecImageAssurancePolicyForbiddenLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAquasecImageAssurancePolicyForbiddenLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecImageAssurancePolicyForbiddenLabelsOutputReference {
    return new DataAquasecImageAssurancePolicyForbiddenLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecImageAssurancePolicyPackagesBlackListStruct {
}

export function dataAquasecImageAssurancePolicyPackagesBlackListStructToTerraform(struct?: DataAquasecImageAssurancePolicyPackagesBlackListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecImageAssurancePolicyPackagesBlackListStructToHclTerraform(struct?: DataAquasecImageAssurancePolicyPackagesBlackListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecImageAssurancePolicyPackagesBlackListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecImageAssurancePolicyPackagesBlackListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecImageAssurancePolicyPackagesBlackListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arch - computed: true, optional: false, required: false
  public get arch() {
    return this.getStringAttribute('arch');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // epoch - computed: true, optional: false, required: false
  public get epoch() {
    return this.getStringAttribute('epoch');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // license - computed: true, optional: false, required: false
  public get license() {
    return this.getStringAttribute('license');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // release - computed: true, optional: false, required: false
  public get release() {
    return this.getStringAttribute('release');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_range - computed: true, optional: false, required: false
  public get versionRange() {
    return this.getStringAttribute('version_range');
  }
}

export class DataAquasecImageAssurancePolicyPackagesBlackListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecImageAssurancePolicyPackagesBlackListStructOutputReference {
    return new DataAquasecImageAssurancePolicyPackagesBlackListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecImageAssurancePolicyPackagesWhiteListStruct {
}

export function dataAquasecImageAssurancePolicyPackagesWhiteListStructToTerraform(struct?: DataAquasecImageAssurancePolicyPackagesWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecImageAssurancePolicyPackagesWhiteListStructToHclTerraform(struct?: DataAquasecImageAssurancePolicyPackagesWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecImageAssurancePolicyPackagesWhiteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecImageAssurancePolicyPackagesWhiteListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecImageAssurancePolicyPackagesWhiteListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arch - computed: true, optional: false, required: false
  public get arch() {
    return this.getStringAttribute('arch');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // epoch - computed: true, optional: false, required: false
  public get epoch() {
    return this.getStringAttribute('epoch');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // license - computed: true, optional: false, required: false
  public get license() {
    return this.getStringAttribute('license');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // release - computed: true, optional: false, required: false
  public get release() {
    return this.getStringAttribute('release');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_range - computed: true, optional: false, required: false
  public get versionRange() {
    return this.getStringAttribute('version_range');
  }
}

export class DataAquasecImageAssurancePolicyPackagesWhiteListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecImageAssurancePolicyPackagesWhiteListStructOutputReference {
    return new DataAquasecImageAssurancePolicyPackagesWhiteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecImageAssurancePolicyRequiredLabels {
}

export function dataAquasecImageAssurancePolicyRequiredLabelsToTerraform(struct?: DataAquasecImageAssurancePolicyRequiredLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecImageAssurancePolicyRequiredLabelsToHclTerraform(struct?: DataAquasecImageAssurancePolicyRequiredLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecImageAssurancePolicyRequiredLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecImageAssurancePolicyRequiredLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecImageAssurancePolicyRequiredLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAquasecImageAssurancePolicyRequiredLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecImageAssurancePolicyRequiredLabelsOutputReference {
    return new DataAquasecImageAssurancePolicyRequiredLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecImageAssurancePolicyScapFiles {
}

export function dataAquasecImageAssurancePolicyScapFilesToTerraform(struct?: DataAquasecImageAssurancePolicyScapFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecImageAssurancePolicyScapFilesToHclTerraform(struct?: DataAquasecImageAssurancePolicyScapFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecImageAssurancePolicyScapFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecImageAssurancePolicyScapFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecImageAssurancePolicyScapFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // avd_id - computed: true, optional: false, required: false
  public get avdId() {
    return this.getStringAttribute('avd_id');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getStringAttribute('custom');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }

  // recommended_actions - computed: true, optional: false, required: false
  public get recommendedActions() {
    return this.getListAttribute('recommended_actions');
  }

  // script_id - computed: true, optional: false, required: false
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAquasecImageAssurancePolicyScapFilesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecImageAssurancePolicyScapFilesOutputReference {
    return new DataAquasecImageAssurancePolicyScapFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecImageAssurancePolicyScopeVariables {
}

export function dataAquasecImageAssurancePolicyScopeVariablesToTerraform(struct?: DataAquasecImageAssurancePolicyScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecImageAssurancePolicyScopeVariablesToHclTerraform(struct?: DataAquasecImageAssurancePolicyScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecImageAssurancePolicyScopeVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecImageAssurancePolicyScopeVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecImageAssurancePolicyScopeVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAquasecImageAssurancePolicyScopeVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecImageAssurancePolicyScopeVariablesOutputReference {
    return new DataAquasecImageAssurancePolicyScopeVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecImageAssurancePolicyScope {
}

export function dataAquasecImageAssurancePolicyScopeToTerraform(struct?: DataAquasecImageAssurancePolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecImageAssurancePolicyScopeToHclTerraform(struct?: DataAquasecImageAssurancePolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecImageAssurancePolicyScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecImageAssurancePolicyScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecImageAssurancePolicyScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataAquasecImageAssurancePolicyScopeVariablesList(this, "variables", true);
  public get variables() {
    return this._variables;
  }
}

export class DataAquasecImageAssurancePolicyScopeList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecImageAssurancePolicyScopeOutputReference {
    return new DataAquasecImageAssurancePolicyScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecImageAssurancePolicyTrustedBaseImages {
}

export function dataAquasecImageAssurancePolicyTrustedBaseImagesToTerraform(struct?: DataAquasecImageAssurancePolicyTrustedBaseImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecImageAssurancePolicyTrustedBaseImagesToHclTerraform(struct?: DataAquasecImageAssurancePolicyTrustedBaseImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecImageAssurancePolicyTrustedBaseImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecImageAssurancePolicyTrustedBaseImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecImageAssurancePolicyTrustedBaseImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // imagedigest - computed: true, optional: false, required: false
  public get imagedigest() {
    return this.getStringAttribute('imagedigest');
  }

  // imageid - computed: true, optional: false, required: false
  public get imageid() {
    return this.getNumberAttribute('imageid');
  }

  // imagename - computed: true, optional: false, required: false
  public get imagename() {
    return this.getStringAttribute('imagename');
  }

  // lastupdated - computed: true, optional: false, required: false
  public get lastupdated() {
    return this.getNumberAttribute('lastupdated');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }
}

export class DataAquasecImageAssurancePolicyTrustedBaseImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecImageAssurancePolicyTrustedBaseImagesOutputReference {
    return new DataAquasecImageAssurancePolicyTrustedBaseImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/image_assurance_policy aquasec_image_assurance_policy}
*/
export class DataAquasecImageAssurancePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_image_assurance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAquasecImageAssurancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAquasecImageAssurancePolicy to import
  * @param importFromId The id of the existing DataAquasecImageAssurancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/image_assurance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAquasecImageAssurancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_image_assurance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/image_assurance_policy aquasec_image_assurance_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAquasecImageAssurancePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAquasecImageAssurancePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_image_assurance_policy',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregated_vulnerability - computed: true, optional: false, required: false
  private _aggregatedVulnerability = new DataAquasecImageAssurancePolicyAggregatedVulnerabilityList(this, "aggregated_vulnerability", false);
  public get aggregatedVulnerability() {
    return this._aggregatedVulnerability;
  }

  // allowed_images - computed: true, optional: false, required: false
  private _allowedImages = new DataAquasecImageAssurancePolicyAllowedImagesList(this, "allowed_images", false);
  public get allowedImages() {
    return this._allowedImages;
  }

  // application_scopes - computed: true, optional: false, required: false
  public get applicationScopes() {
    return this.getListAttribute('application_scopes');
  }

  // audit_on_failure - computed: true, optional: false, required: false
  public get auditOnFailure() {
    return this.getBooleanAttribute('audit_on_failure');
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // auto_scan_configured - computed: true, optional: false, required: false
  public get autoScanConfigured() {
    return this.getBooleanAttribute('auto_scan_configured');
  }

  // auto_scan_enabled - computed: true, optional: false, required: false
  public get autoScanEnabled() {
    return this.getBooleanAttribute('auto_scan_enabled');
  }

  // auto_scan_time - computed: true, optional: false, required: false
  private _autoScanTime = new DataAquasecImageAssurancePolicyAutoScanTimeList(this, "auto_scan_time", true);
  public get autoScanTime() {
    return this._autoScanTime;
  }

  // blacklist_permissions - computed: true, optional: false, required: false
  public get blacklistPermissions() {
    return this.getListAttribute('blacklist_permissions');
  }

  // blacklist_permissions_enabled - computed: true, optional: false, required: false
  public get blacklistPermissionsEnabled() {
    return this.getBooleanAttribute('blacklist_permissions_enabled');
  }

  // blacklisted_licenses - computed: true, optional: false, required: false
  public get blacklistedLicenses() {
    return this.getListAttribute('blacklisted_licenses');
  }

  // blacklisted_licenses_enabled - computed: true, optional: false, required: false
  public get blacklistedLicensesEnabled() {
    return this.getBooleanAttribute('blacklisted_licenses_enabled');
  }

  // block_failed - computed: true, optional: false, required: false
  public get blockFailed() {
    return this.getBooleanAttribute('block_failed');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // control_exclude_no_fix - computed: true, optional: false, required: false
  public get controlExcludeNoFix() {
    return this.getBooleanAttribute('control_exclude_no_fix');
  }

  // custom_checks - computed: true, optional: false, required: false
  private _customChecks = new DataAquasecImageAssurancePolicyCustomChecksList(this, "custom_checks", false);
  public get customChecks() {
    return this._customChecks;
  }

  // custom_checks_enabled - computed: true, optional: false, required: false
  public get customChecksEnabled() {
    return this.getBooleanAttribute('custom_checks_enabled');
  }

  // custom_severity_enabled - computed: true, optional: false, required: false
  public get customSeverityEnabled() {
    return this.getBooleanAttribute('custom_severity_enabled');
  }

  // cves_black_list - computed: true, optional: false, required: false
  public get cvesBlackList() {
    return this.getListAttribute('cves_black_list');
  }

  // cves_black_list_enabled - computed: true, optional: false, required: false
  public get cvesBlackListEnabled() {
    return this.getBooleanAttribute('cves_black_list_enabled');
  }

  // cves_white_list - computed: true, optional: false, required: false
  public get cvesWhiteList() {
    return this.getListAttribute('cves_white_list');
  }

  // cves_white_list_enabled - computed: true, optional: false, required: false
  public get cvesWhiteListEnabled() {
    return this.getBooleanAttribute('cves_white_list_enabled');
  }

  // cvss_severity - computed: true, optional: false, required: false
  public get cvssSeverity() {
    return this.getStringAttribute('cvss_severity');
  }

  // cvss_severity_enabled - computed: true, optional: false, required: false
  public get cvssSeverityEnabled() {
    return this.getBooleanAttribute('cvss_severity_enabled');
  }

  // cvss_severity_exclude_no_fix - computed: true, optional: false, required: false
  public get cvssSeverityExcludeNoFix() {
    return this.getBooleanAttribute('cvss_severity_exclude_no_fix');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disallow_malware - computed: true, optional: false, required: false
  public get disallowMalware() {
    return this.getBooleanAttribute('disallow_malware');
  }

  // docker_cis_enabled - computed: true, optional: false, required: false
  public get dockerCisEnabled() {
    return this.getBooleanAttribute('docker_cis_enabled');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // dta_enabled - computed: true, optional: false, required: false
  public get dtaEnabled() {
    return this.getBooleanAttribute('dta_enabled');
  }

  // dta_severity - computed: true, optional: false, required: false
  public get dtaSeverity() {
    return this.getStringAttribute('dta_severity');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }

  // enforce_after_days - computed: true, optional: false, required: false
  public get enforceAfterDays() {
    return this.getNumberAttribute('enforce_after_days');
  }

  // enforce_excessive_permissions - computed: true, optional: false, required: false
  public get enforceExcessivePermissions() {
    return this.getBooleanAttribute('enforce_excessive_permissions');
  }

  // exceptional_monitored_malware_paths - computed: true, optional: false, required: false
  public get exceptionalMonitoredMalwarePaths() {
    return this.getListAttribute('exceptional_monitored_malware_paths');
  }

  // fail_cicd - computed: true, optional: false, required: false
  public get failCicd() {
    return this.getBooleanAttribute('fail_cicd');
  }

  // forbidden_labels - computed: true, optional: false, required: false
  private _forbiddenLabels = new DataAquasecImageAssurancePolicyForbiddenLabelsList(this, "forbidden_labels", true);
  public get forbiddenLabels() {
    return this._forbiddenLabels;
  }

  // forbidden_labels_enabled - computed: true, optional: false, required: false
  public get forbiddenLabelsEnabled() {
    return this.getBooleanAttribute('forbidden_labels_enabled');
  }

  // force_microenforcer - computed: true, optional: false, required: false
  public get forceMicroenforcer() {
    return this.getBooleanAttribute('force_microenforcer');
  }

  // function_integrity_enabled - computed: true, optional: false, required: false
  public get functionIntegrityEnabled() {
    return this.getBooleanAttribute('function_integrity_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_base_image_vln - computed: true, optional: false, required: false
  public get ignoreBaseImageVln() {
    return this.getBooleanAttribute('ignore_base_image_vln');
  }

  // ignore_recently_published_fix_vln - computed: true, optional: false, required: false
  public get ignoreRecentlyPublishedFixVln() {
    return this.getBooleanAttribute('ignore_recently_published_fix_vln');
  }

  // ignore_recently_published_fix_vln_period - computed: true, optional: false, required: false
  public get ignoreRecentlyPublishedFixVlnPeriod() {
    return this.getNumberAttribute('ignore_recently_published_fix_vln_period');
  }

  // ignore_recently_published_vln - computed: true, optional: false, required: false
  public get ignoreRecentlyPublishedVln() {
    return this.getBooleanAttribute('ignore_recently_published_vln');
  }

  // ignore_recently_published_vln_period - computed: true, optional: false, required: false
  public get ignoreRecentlyPublishedVlnPeriod() {
    return this.getNumberAttribute('ignore_recently_published_vln_period');
  }

  // ignore_risk_resources_enabled - computed: true, optional: false, required: false
  public get ignoreRiskResourcesEnabled() {
    return this.getBooleanAttribute('ignore_risk_resources_enabled');
  }

  // ignored_risk_resources - computed: true, optional: false, required: false
  public get ignoredRiskResources() {
    return this.getListAttribute('ignored_risk_resources');
  }

  // ignored_sensitive_resources - computed: true, optional: false, required: false
  public get ignoredSensitiveResources() {
    return this.getListAttribute('ignored_sensitive_resources');
  }

  // images - computed: true, optional: false, required: false
  public get images() {
    return this.getListAttribute('images');
  }

  // kube_cis_enabled - computed: true, optional: false, required: false
  public get kubeCisEnabled() {
    return this.getBooleanAttribute('kube_cis_enabled');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // malware_action - computed: true, optional: false, required: false
  public get malwareAction() {
    return this.getStringAttribute('malware_action');
  }

  // maximum_score - computed: true, optional: false, required: false
  public get maximumScore() {
    return this.getNumberAttribute('maximum_score');
  }

  // maximum_score_enabled - computed: true, optional: false, required: false
  public get maximumScoreEnabled() {
    return this.getBooleanAttribute('maximum_score_enabled');
  }

  // maximum_score_exclude_no_fix - computed: true, optional: false, required: false
  public get maximumScoreExcludeNoFix() {
    return this.getBooleanAttribute('maximum_score_exclude_no_fix');
  }

  // monitored_malware_paths - computed: true, optional: false, required: false
  public get monitoredMalwarePaths() {
    return this.getListAttribute('monitored_malware_paths');
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

  // only_none_root_users - computed: true, optional: false, required: false
  public get onlyNoneRootUsers() {
    return this.getBooleanAttribute('only_none_root_users');
  }

  // packages_black_list - computed: true, optional: false, required: false
  private _packagesBlackList = new DataAquasecImageAssurancePolicyPackagesBlackListStructList(this, "packages_black_list", true);
  public get packagesBlackList() {
    return this._packagesBlackList;
  }

  // packages_black_list_enabled - computed: true, optional: false, required: false
  public get packagesBlackListEnabled() {
    return this.getBooleanAttribute('packages_black_list_enabled');
  }

  // packages_white_list - computed: true, optional: false, required: false
  private _packagesWhiteList = new DataAquasecImageAssurancePolicyPackagesWhiteListStructList(this, "packages_white_list", true);
  public get packagesWhiteList() {
    return this._packagesWhiteList;
  }

  // packages_white_list_enabled - computed: true, optional: false, required: false
  public get packagesWhiteListEnabled() {
    return this.getBooleanAttribute('packages_white_list_enabled');
  }

  // partial_results_image_fail - computed: true, optional: false, required: false
  public get partialResultsImageFail() {
    return this.getBooleanAttribute('partial_results_image_fail');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // registries - computed: true, optional: false, required: false
  public get registries() {
    return this.getListAttribute('registries');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // required_labels - computed: true, optional: false, required: false
  private _requiredLabels = new DataAquasecImageAssurancePolicyRequiredLabelsList(this, "required_labels", true);
  public get requiredLabels() {
    return this._requiredLabels;
  }

  // required_labels_enabled - computed: true, optional: false, required: false
  public get requiredLabelsEnabled() {
    return this.getBooleanAttribute('required_labels_enabled');
  }

  // scan_nfs_mounts - computed: true, optional: false, required: false
  public get scanNfsMounts() {
    return this.getBooleanAttribute('scan_nfs_mounts');
  }

  // scan_sensitive_data - computed: true, optional: false, required: false
  public get scanSensitiveData() {
    return this.getBooleanAttribute('scan_sensitive_data');
  }

  // scap_enabled - computed: true, optional: false, required: false
  public get scapEnabled() {
    return this.getBooleanAttribute('scap_enabled');
  }

  // scap_files - computed: true, optional: false, required: false
  private _scapFiles = new DataAquasecImageAssurancePolicyScapFilesList(this, "scap_files", false);
  public get scapFiles() {
    return this._scapFiles;
  }

  // scope - computed: true, optional: false, required: false
  private _scope = new DataAquasecImageAssurancePolicyScopeList(this, "scope", true);
  public get scope() {
    return this._scope;
  }

  // trusted_base_images - computed: true, optional: false, required: false
  private _trustedBaseImages = new DataAquasecImageAssurancePolicyTrustedBaseImagesList(this, "trusted_base_images", true);
  public get trustedBaseImages() {
    return this._trustedBaseImages;
  }

  // trusted_base_images_enabled - computed: true, optional: false, required: false
  public get trustedBaseImagesEnabled() {
    return this.getBooleanAttribute('trusted_base_images_enabled');
  }

  // whitelisted_licenses - computed: true, optional: false, required: false
  public get whitelistedLicenses() {
    return this.getListAttribute('whitelisted_licenses');
  }

  // whitelisted_licenses_enabled - computed: true, optional: false, required: false
  public get whitelistedLicensesEnabled() {
    return this.getBooleanAttribute('whitelisted_licenses_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
