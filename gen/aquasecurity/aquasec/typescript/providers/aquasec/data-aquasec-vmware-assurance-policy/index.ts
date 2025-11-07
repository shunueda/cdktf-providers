// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/vmware_assurance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAquasecVmwareAssurancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/vmware_assurance_policy#name DataAquasecVmwareAssurancePolicy#name}
  */
  readonly name: string;
}
export interface DataAquasecVmwareAssurancePolicyAggregatedVulnerability {
}

export function dataAquasecVmwareAssurancePolicyAggregatedVulnerabilityToTerraform(struct?: DataAquasecVmwareAssurancePolicyAggregatedVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecVmwareAssurancePolicyAggregatedVulnerabilityToHclTerraform(struct?: DataAquasecVmwareAssurancePolicyAggregatedVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecVmwareAssurancePolicyAggregatedVulnerabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecVmwareAssurancePolicyAggregatedVulnerability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecVmwareAssurancePolicyAggregatedVulnerability | undefined) {
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

export class DataAquasecVmwareAssurancePolicyAggregatedVulnerabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecVmwareAssurancePolicyAggregatedVulnerabilityOutputReference {
    return new DataAquasecVmwareAssurancePolicyAggregatedVulnerabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecVmwareAssurancePolicyAutoScanTime {
}

export function dataAquasecVmwareAssurancePolicyAutoScanTimeToTerraform(struct?: DataAquasecVmwareAssurancePolicyAutoScanTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecVmwareAssurancePolicyAutoScanTimeToHclTerraform(struct?: DataAquasecVmwareAssurancePolicyAutoScanTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecVmwareAssurancePolicyAutoScanTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecVmwareAssurancePolicyAutoScanTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecVmwareAssurancePolicyAutoScanTime | undefined) {
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

export class DataAquasecVmwareAssurancePolicyAutoScanTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecVmwareAssurancePolicyAutoScanTimeOutputReference {
    return new DataAquasecVmwareAssurancePolicyAutoScanTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecVmwareAssurancePolicyCustomChecks {
}

export function dataAquasecVmwareAssurancePolicyCustomChecksToTerraform(struct?: DataAquasecVmwareAssurancePolicyCustomChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecVmwareAssurancePolicyCustomChecksToHclTerraform(struct?: DataAquasecVmwareAssurancePolicyCustomChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecVmwareAssurancePolicyCustomChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecVmwareAssurancePolicyCustomChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecVmwareAssurancePolicyCustomChecks | undefined) {
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

export class DataAquasecVmwareAssurancePolicyCustomChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecVmwareAssurancePolicyCustomChecksOutputReference {
    return new DataAquasecVmwareAssurancePolicyCustomChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecVmwareAssurancePolicyForbiddenLabels {
}

export function dataAquasecVmwareAssurancePolicyForbiddenLabelsToTerraform(struct?: DataAquasecVmwareAssurancePolicyForbiddenLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecVmwareAssurancePolicyForbiddenLabelsToHclTerraform(struct?: DataAquasecVmwareAssurancePolicyForbiddenLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecVmwareAssurancePolicyForbiddenLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecVmwareAssurancePolicyForbiddenLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecVmwareAssurancePolicyForbiddenLabels | undefined) {
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

export class DataAquasecVmwareAssurancePolicyForbiddenLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecVmwareAssurancePolicyForbiddenLabelsOutputReference {
    return new DataAquasecVmwareAssurancePolicyForbiddenLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecVmwareAssurancePolicyPackagesBlackListStruct {
}

export function dataAquasecVmwareAssurancePolicyPackagesBlackListStructToTerraform(struct?: DataAquasecVmwareAssurancePolicyPackagesBlackListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecVmwareAssurancePolicyPackagesBlackListStructToHclTerraform(struct?: DataAquasecVmwareAssurancePolicyPackagesBlackListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecVmwareAssurancePolicyPackagesBlackListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecVmwareAssurancePolicyPackagesBlackListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecVmwareAssurancePolicyPackagesBlackListStruct | undefined) {
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

export class DataAquasecVmwareAssurancePolicyPackagesBlackListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecVmwareAssurancePolicyPackagesBlackListStructOutputReference {
    return new DataAquasecVmwareAssurancePolicyPackagesBlackListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecVmwareAssurancePolicyPackagesWhiteListStruct {
}

export function dataAquasecVmwareAssurancePolicyPackagesWhiteListStructToTerraform(struct?: DataAquasecVmwareAssurancePolicyPackagesWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecVmwareAssurancePolicyPackagesWhiteListStructToHclTerraform(struct?: DataAquasecVmwareAssurancePolicyPackagesWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecVmwareAssurancePolicyPackagesWhiteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecVmwareAssurancePolicyPackagesWhiteListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecVmwareAssurancePolicyPackagesWhiteListStruct | undefined) {
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

export class DataAquasecVmwareAssurancePolicyPackagesWhiteListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecVmwareAssurancePolicyPackagesWhiteListStructOutputReference {
    return new DataAquasecVmwareAssurancePolicyPackagesWhiteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecVmwareAssurancePolicyPolicySettings {
}

export function dataAquasecVmwareAssurancePolicyPolicySettingsToTerraform(struct?: DataAquasecVmwareAssurancePolicyPolicySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecVmwareAssurancePolicyPolicySettingsToHclTerraform(struct?: DataAquasecVmwareAssurancePolicyPolicySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecVmwareAssurancePolicyPolicySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecVmwareAssurancePolicyPolicySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecVmwareAssurancePolicyPolicySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }

  // is_audit_checked - computed: true, optional: false, required: false
  public get isAuditChecked() {
    return this.getBooleanAttribute('is_audit_checked');
  }

  // warn - computed: true, optional: false, required: false
  public get warn() {
    return this.getBooleanAttribute('warn');
  }

  // warning_message - computed: true, optional: false, required: false
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
}

export class DataAquasecVmwareAssurancePolicyPolicySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecVmwareAssurancePolicyPolicySettingsOutputReference {
    return new DataAquasecVmwareAssurancePolicyPolicySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecVmwareAssurancePolicyRequiredLabels {
}

export function dataAquasecVmwareAssurancePolicyRequiredLabelsToTerraform(struct?: DataAquasecVmwareAssurancePolicyRequiredLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecVmwareAssurancePolicyRequiredLabelsToHclTerraform(struct?: DataAquasecVmwareAssurancePolicyRequiredLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecVmwareAssurancePolicyRequiredLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecVmwareAssurancePolicyRequiredLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecVmwareAssurancePolicyRequiredLabels | undefined) {
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

export class DataAquasecVmwareAssurancePolicyRequiredLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecVmwareAssurancePolicyRequiredLabelsOutputReference {
    return new DataAquasecVmwareAssurancePolicyRequiredLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecVmwareAssurancePolicyScopeVariables {
}

export function dataAquasecVmwareAssurancePolicyScopeVariablesToTerraform(struct?: DataAquasecVmwareAssurancePolicyScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecVmwareAssurancePolicyScopeVariablesToHclTerraform(struct?: DataAquasecVmwareAssurancePolicyScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecVmwareAssurancePolicyScopeVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecVmwareAssurancePolicyScopeVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecVmwareAssurancePolicyScopeVariables | undefined) {
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

export class DataAquasecVmwareAssurancePolicyScopeVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecVmwareAssurancePolicyScopeVariablesOutputReference {
    return new DataAquasecVmwareAssurancePolicyScopeVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecVmwareAssurancePolicyScope {
}

export function dataAquasecVmwareAssurancePolicyScopeToTerraform(struct?: DataAquasecVmwareAssurancePolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecVmwareAssurancePolicyScopeToHclTerraform(struct?: DataAquasecVmwareAssurancePolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecVmwareAssurancePolicyScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecVmwareAssurancePolicyScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecVmwareAssurancePolicyScope | undefined) {
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
  private _variables = new DataAquasecVmwareAssurancePolicyScopeVariablesList(this, "variables", true);
  public get variables() {
    return this._variables;
  }
}

export class DataAquasecVmwareAssurancePolicyScopeList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecVmwareAssurancePolicyScopeOutputReference {
    return new DataAquasecVmwareAssurancePolicyScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecVmwareAssurancePolicyTrustedBaseImages {
}

export function dataAquasecVmwareAssurancePolicyTrustedBaseImagesToTerraform(struct?: DataAquasecVmwareAssurancePolicyTrustedBaseImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecVmwareAssurancePolicyTrustedBaseImagesToHclTerraform(struct?: DataAquasecVmwareAssurancePolicyTrustedBaseImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecVmwareAssurancePolicyTrustedBaseImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecVmwareAssurancePolicyTrustedBaseImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecVmwareAssurancePolicyTrustedBaseImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // imagename - computed: true, optional: false, required: false
  public get imagename() {
    return this.getStringAttribute('imagename');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }
}

export class DataAquasecVmwareAssurancePolicyTrustedBaseImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecVmwareAssurancePolicyTrustedBaseImagesOutputReference {
    return new DataAquasecVmwareAssurancePolicyTrustedBaseImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/vmware_assurance_policy aquasec_vmware_assurance_policy}
*/
export class DataAquasecVmwareAssurancePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_vmware_assurance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAquasecVmwareAssurancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAquasecVmwareAssurancePolicy to import
  * @param importFromId The id of the existing DataAquasecVmwareAssurancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/vmware_assurance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAquasecVmwareAssurancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_vmware_assurance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/vmware_assurance_policy aquasec_vmware_assurance_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAquasecVmwareAssurancePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAquasecVmwareAssurancePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_vmware_assurance_policy',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0'
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
  private _aggregatedVulnerability = new DataAquasecVmwareAssurancePolicyAggregatedVulnerabilityList(this, "aggregated_vulnerability", false);
  public get aggregatedVulnerability() {
    return this._aggregatedVulnerability;
  }

  // allowed_images - computed: true, optional: false, required: false
  public get allowedImages() {
    return this.getListAttribute('allowed_images');
  }

  // application_scopes - computed: true, optional: false, required: false
  public get applicationScopes() {
    return this.getListAttribute('application_scopes');
  }

  // assurance_type - computed: true, optional: false, required: false
  public get assuranceType() {
    return this.getStringAttribute('assurance_type');
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
  private _autoScanTime = new DataAquasecVmwareAssurancePolicyAutoScanTimeList(this, "auto_scan_time", true);
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
  private _customChecks = new DataAquasecVmwareAssurancePolicyCustomChecksList(this, "custom_checks", false);
  public get customChecks() {
    return this._customChecks;
  }

  // custom_checks_enabled - computed: true, optional: false, required: false
  public get customChecksEnabled() {
    return this.getBooleanAttribute('custom_checks_enabled');
  }

  // custom_severity - computed: true, optional: false, required: false
  public get customSeverity() {
    return this.getStringAttribute('custom_severity');
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

  // disallow_exploit_types - computed: true, optional: false, required: false
  public get disallowExploitTypes() {
    return this.getListAttribute('disallow_exploit_types');
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

  // exclude_application_scopes - computed: true, optional: false, required: false
  public get excludeApplicationScopes() {
    return this.getListAttribute('exclude_application_scopes');
  }

  // fail_cicd - computed: true, optional: false, required: false
  public get failCicd() {
    return this.getBooleanAttribute('fail_cicd');
  }

  // forbidden_labels - computed: true, optional: false, required: false
  private _forbiddenLabels = new DataAquasecVmwareAssurancePolicyForbiddenLabelsList(this, "forbidden_labels", true);
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

  // kubernetes_controls - computed: true, optional: false, required: false
  public get kubernetesControls() {
    return this.getListAttribute('kubernetes_controls');
  }

  // kubernetes_controls_avd_ids - computed: true, optional: false, required: false
  public get kubernetesControlsAvdIds() {
    return this.getListAttribute('kubernetes_controls_avd_ids');
  }

  // kubernetes_controls_names - computed: true, optional: false, required: false
  public get kubernetesControlsNames() {
    return this.getListAttribute('kubernetes_controls_names');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // linux_cis_enabled - computed: true, optional: false, required: false
  public get linuxCisEnabled() {
    return this.getBooleanAttribute('linux_cis_enabled');
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

  // openshift_hardening_enabled - computed: true, optional: false, required: false
  public get openshiftHardeningEnabled() {
    return this.getBooleanAttribute('openshift_hardening_enabled');
  }

  // packages_black_list - computed: true, optional: false, required: false
  private _packagesBlackList = new DataAquasecVmwareAssurancePolicyPackagesBlackListStructList(this, "packages_black_list", true);
  public get packagesBlackList() {
    return this._packagesBlackList;
  }

  // packages_black_list_enabled - computed: true, optional: false, required: false
  public get packagesBlackListEnabled() {
    return this.getBooleanAttribute('packages_black_list_enabled');
  }

  // packages_white_list - computed: true, optional: false, required: false
  private _packagesWhiteList = new DataAquasecVmwareAssurancePolicyPackagesWhiteListStructList(this, "packages_white_list", true);
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

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // policy_settings - computed: true, optional: false, required: false
  private _policySettings = new DataAquasecVmwareAssurancePolicyPolicySettingsList(this, "policy_settings", false);
  public get policySettings() {
    return this._policySettings;
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
  private _requiredLabels = new DataAquasecVmwareAssurancePolicyRequiredLabelsList(this, "required_labels", true);
  public get requiredLabels() {
    return this._requiredLabels;
  }

  // required_labels_enabled - computed: true, optional: false, required: false
  public get requiredLabelsEnabled() {
    return this.getBooleanAttribute('required_labels_enabled');
  }

  // scan_malware_in_archives - computed: true, optional: false, required: false
  public get scanMalwareInArchives() {
    return this.getBooleanAttribute('scan_malware_in_archives');
  }

  // scan_nfs_mounts - computed: true, optional: false, required: false
  public get scanNfsMounts() {
    return this.getBooleanAttribute('scan_nfs_mounts');
  }

  // scan_process_memory - computed: true, optional: false, required: false
  public get scanProcessMemory() {
    return this.getBooleanAttribute('scan_process_memory');
  }

  // scan_sensitive_data - computed: true, optional: false, required: false
  public get scanSensitiveData() {
    return this.getBooleanAttribute('scan_sensitive_data');
  }

  // scan_windows_registry - computed: true, optional: false, required: false
  public get scanWindowsRegistry() {
    return this.getBooleanAttribute('scan_windows_registry');
  }

  // scap_enabled - computed: true, optional: false, required: false
  public get scapEnabled() {
    return this.getBooleanAttribute('scap_enabled');
  }

  // scap_files - computed: true, optional: false, required: false
  public get scapFiles() {
    return this.getListAttribute('scap_files');
  }

  // scope - computed: true, optional: false, required: false
  private _scope = new DataAquasecVmwareAssurancePolicyScopeList(this, "scope", true);
  public get scope() {
    return this._scope;
  }

  // trusted_base_images - computed: true, optional: false, required: false
  private _trustedBaseImages = new DataAquasecVmwareAssurancePolicyTrustedBaseImagesList(this, "trusted_base_images", true);
  public get trustedBaseImages() {
    return this._trustedBaseImages;
  }

  // trusted_base_images_enabled - computed: true, optional: false, required: false
  public get trustedBaseImagesEnabled() {
    return this.getBooleanAttribute('trusted_base_images_enabled');
  }

  // vulnerability_exploitability - computed: true, optional: false, required: false
  public get vulnerabilityExploitability() {
    return this.getBooleanAttribute('vulnerability_exploitability');
  }

  // vulnerability_score_range - computed: true, optional: false, required: false
  public get vulnerabilityScoreRange() {
    return this.getNumberListAttribute('vulnerability_score_range');
  }

  // whitelisted_licenses - computed: true, optional: false, required: false
  public get whitelistedLicenses() {
    return this.getListAttribute('whitelisted_licenses');
  }

  // whitelisted_licenses_enabled - computed: true, optional: false, required: false
  public get whitelistedLicensesEnabled() {
    return this.getBooleanAttribute('whitelisted_licenses_enabled');
  }

  // windows_cis_enabled - computed: true, optional: false, required: false
  public get windowsCisEnabled() {
    return this.getBooleanAttribute('windows_cis_enabled');
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
