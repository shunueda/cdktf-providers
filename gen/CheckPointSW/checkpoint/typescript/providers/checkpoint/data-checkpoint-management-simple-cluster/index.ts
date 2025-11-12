// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementSimpleClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_cluster#id DataCheckpointManagementSimpleCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_cluster#name DataCheckpointManagementSimpleCluster#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_cluster#uid DataCheckpointManagementSimpleCluster#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementSimpleClusterAdvancedSettingsSamPurgeSamFile {
}

export function dataCheckpointManagementSimpleClusterAdvancedSettingsSamPurgeSamFileToTerraform(struct?: DataCheckpointManagementSimpleClusterAdvancedSettingsSamPurgeSamFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterAdvancedSettingsSamPurgeSamFileToHclTerraform(struct?: DataCheckpointManagementSimpleClusterAdvancedSettingsSamPurgeSamFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterAdvancedSettingsSamPurgeSamFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterAdvancedSettingsSamPurgeSamFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterAdvancedSettingsSamPurgeSamFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // purge_when_size_reaches_to - computed: true, optional: false, required: false
  public get purgeWhenSizeReachesTo() {
    return this.getNumberAttribute('purge_when_size_reaches_to');
  }
}

export class DataCheckpointManagementSimpleClusterAdvancedSettingsSamPurgeSamFileList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterAdvancedSettingsSamPurgeSamFileOutputReference {
    return new DataCheckpointManagementSimpleClusterAdvancedSettingsSamPurgeSamFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterAdvancedSettingsSamUseEarlyVersions {
}

export function dataCheckpointManagementSimpleClusterAdvancedSettingsSamUseEarlyVersionsToTerraform(struct?: DataCheckpointManagementSimpleClusterAdvancedSettingsSamUseEarlyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterAdvancedSettingsSamUseEarlyVersionsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterAdvancedSettingsSamUseEarlyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterAdvancedSettingsSamUseEarlyVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterAdvancedSettingsSamUseEarlyVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterAdvancedSettingsSamUseEarlyVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compatibility_mode - computed: true, optional: false, required: false
  public get compatibilityMode() {
    return this.getStringAttribute('compatibility_mode');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataCheckpointManagementSimpleClusterAdvancedSettingsSamUseEarlyVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterAdvancedSettingsSamUseEarlyVersionsOutputReference {
    return new DataCheckpointManagementSimpleClusterAdvancedSettingsSamUseEarlyVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterAdvancedSettingsSam {
}

export function dataCheckpointManagementSimpleClusterAdvancedSettingsSamToTerraform(struct?: DataCheckpointManagementSimpleClusterAdvancedSettingsSam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterAdvancedSettingsSamToHclTerraform(struct?: DataCheckpointManagementSimpleClusterAdvancedSettingsSam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterAdvancedSettingsSamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterAdvancedSettingsSam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterAdvancedSettingsSam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forward_to_other_sam_servers - computed: true, optional: false, required: false
  public get forwardToOtherSamServers() {
    return this.getBooleanAttribute('forward_to_other_sam_servers');
  }

  // purge_sam_file - computed: true, optional: false, required: false
  private _purgeSamFile = new DataCheckpointManagementSimpleClusterAdvancedSettingsSamPurgeSamFileList(this, "purge_sam_file", false);
  public get purgeSamFile() {
    return this._purgeSamFile;
  }

  // use_early_versions - computed: true, optional: false, required: false
  private _useEarlyVersions = new DataCheckpointManagementSimpleClusterAdvancedSettingsSamUseEarlyVersionsList(this, "use_early_versions", false);
  public get useEarlyVersions() {
    return this._useEarlyVersions;
  }
}

export class DataCheckpointManagementSimpleClusterAdvancedSettingsSamList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterAdvancedSettingsSamOutputReference {
    return new DataCheckpointManagementSimpleClusterAdvancedSettingsSamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterAdvancedSettings {
}

export function dataCheckpointManagementSimpleClusterAdvancedSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterAdvancedSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterAdvancedSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_persistence - computed: true, optional: false, required: false
  public get connectionPersistence() {
    return this.getStringAttribute('connection_persistence');
  }

  // sam - computed: true, optional: false, required: false
  private _sam = new DataCheckpointManagementSimpleClusterAdvancedSettingsSamList(this, "sam", false);
  public get sam() {
    return this._sam;
  }
}

export class DataCheckpointManagementSimpleClusterAdvancedSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterAdvancedSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterAdvancedSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterHttpsInspectionBypassOnFailure {
}

export function dataCheckpointManagementSimpleClusterHttpsInspectionBypassOnFailureToTerraform(struct?: DataCheckpointManagementSimpleClusterHttpsInspectionBypassOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterHttpsInspectionBypassOnFailureToHclTerraform(struct?: DataCheckpointManagementSimpleClusterHttpsInspectionBypassOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterHttpsInspectionBypassOnFailureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterHttpsInspectionBypassOnFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterHttpsInspectionBypassOnFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override_profile - computed: true, optional: false, required: false
  public get overrideProfile() {
    return this.getBooleanAttribute('override_profile');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataCheckpointManagementSimpleClusterHttpsInspectionBypassOnFailureList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterHttpsInspectionBypassOnFailureOutputReference {
    return new DataCheckpointManagementSimpleClusterHttpsInspectionBypassOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterHttpsInspectionDenyExpiredServerCert {
}

export function dataCheckpointManagementSimpleClusterHttpsInspectionDenyExpiredServerCertToTerraform(struct?: DataCheckpointManagementSimpleClusterHttpsInspectionDenyExpiredServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterHttpsInspectionDenyExpiredServerCertToHclTerraform(struct?: DataCheckpointManagementSimpleClusterHttpsInspectionDenyExpiredServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterHttpsInspectionDenyExpiredServerCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterHttpsInspectionDenyExpiredServerCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterHttpsInspectionDenyExpiredServerCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override_profile - computed: true, optional: false, required: false
  public get overrideProfile() {
    return this.getBooleanAttribute('override_profile');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataCheckpointManagementSimpleClusterHttpsInspectionDenyExpiredServerCertList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterHttpsInspectionDenyExpiredServerCertOutputReference {
    return new DataCheckpointManagementSimpleClusterHttpsInspectionDenyExpiredServerCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterHttpsInspectionDenyRevokedServerCert {
}

export function dataCheckpointManagementSimpleClusterHttpsInspectionDenyRevokedServerCertToTerraform(struct?: DataCheckpointManagementSimpleClusterHttpsInspectionDenyRevokedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterHttpsInspectionDenyRevokedServerCertToHclTerraform(struct?: DataCheckpointManagementSimpleClusterHttpsInspectionDenyRevokedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterHttpsInspectionDenyRevokedServerCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterHttpsInspectionDenyRevokedServerCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterHttpsInspectionDenyRevokedServerCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override_profile - computed: true, optional: false, required: false
  public get overrideProfile() {
    return this.getBooleanAttribute('override_profile');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataCheckpointManagementSimpleClusterHttpsInspectionDenyRevokedServerCertList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterHttpsInspectionDenyRevokedServerCertOutputReference {
    return new DataCheckpointManagementSimpleClusterHttpsInspectionDenyRevokedServerCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterHttpsInspectionDenyUntrustedServerCert {
}

export function dataCheckpointManagementSimpleClusterHttpsInspectionDenyUntrustedServerCertToTerraform(struct?: DataCheckpointManagementSimpleClusterHttpsInspectionDenyUntrustedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterHttpsInspectionDenyUntrustedServerCertToHclTerraform(struct?: DataCheckpointManagementSimpleClusterHttpsInspectionDenyUntrustedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterHttpsInspectionDenyUntrustedServerCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterHttpsInspectionDenyUntrustedServerCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterHttpsInspectionDenyUntrustedServerCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override_profile - computed: true, optional: false, required: false
  public get overrideProfile() {
    return this.getBooleanAttribute('override_profile');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataCheckpointManagementSimpleClusterHttpsInspectionDenyUntrustedServerCertList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterHttpsInspectionDenyUntrustedServerCertOutputReference {
    return new DataCheckpointManagementSimpleClusterHttpsInspectionDenyUntrustedServerCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterHttpsInspectionSiteCategorizationAllowMode {
}

export function dataCheckpointManagementSimpleClusterHttpsInspectionSiteCategorizationAllowModeToTerraform(struct?: DataCheckpointManagementSimpleClusterHttpsInspectionSiteCategorizationAllowMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterHttpsInspectionSiteCategorizationAllowModeToHclTerraform(struct?: DataCheckpointManagementSimpleClusterHttpsInspectionSiteCategorizationAllowMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterHttpsInspectionSiteCategorizationAllowModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterHttpsInspectionSiteCategorizationAllowMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterHttpsInspectionSiteCategorizationAllowMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override_profile - computed: true, optional: false, required: false
  public get overrideProfile() {
    return this.getBooleanAttribute('override_profile');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCheckpointManagementSimpleClusterHttpsInspectionSiteCategorizationAllowModeList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterHttpsInspectionSiteCategorizationAllowModeOutputReference {
    return new DataCheckpointManagementSimpleClusterHttpsInspectionSiteCategorizationAllowModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterHttpsInspection {
}

export function dataCheckpointManagementSimpleClusterHttpsInspectionToTerraform(struct?: DataCheckpointManagementSimpleClusterHttpsInspection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterHttpsInspectionToHclTerraform(struct?: DataCheckpointManagementSimpleClusterHttpsInspection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterHttpsInspectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterHttpsInspection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterHttpsInspection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bypass_on_failure - computed: true, optional: false, required: false
  private _bypassOnFailure = new DataCheckpointManagementSimpleClusterHttpsInspectionBypassOnFailureList(this, "bypass_on_failure", false);
  public get bypassOnFailure() {
    return this._bypassOnFailure;
  }

  // deny_expired_server_cert - computed: true, optional: false, required: false
  private _denyExpiredServerCert = new DataCheckpointManagementSimpleClusterHttpsInspectionDenyExpiredServerCertList(this, "deny_expired_server_cert", false);
  public get denyExpiredServerCert() {
    return this._denyExpiredServerCert;
  }

  // deny_revoked_server_cert - computed: true, optional: false, required: false
  private _denyRevokedServerCert = new DataCheckpointManagementSimpleClusterHttpsInspectionDenyRevokedServerCertList(this, "deny_revoked_server_cert", false);
  public get denyRevokedServerCert() {
    return this._denyRevokedServerCert;
  }

  // deny_untrusted_server_cert - computed: true, optional: false, required: false
  private _denyUntrustedServerCert = new DataCheckpointManagementSimpleClusterHttpsInspectionDenyUntrustedServerCertList(this, "deny_untrusted_server_cert", false);
  public get denyUntrustedServerCert() {
    return this._denyUntrustedServerCert;
  }

  // site_categorization_allow_mode - computed: true, optional: false, required: false
  private _siteCategorizationAllowMode = new DataCheckpointManagementSimpleClusterHttpsInspectionSiteCategorizationAllowModeList(this, "site_categorization_allow_mode", false);
  public get siteCategorizationAllowMode() {
    return this._siteCategorizationAllowMode;
  }
}

export class DataCheckpointManagementSimpleClusterHttpsInspectionList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterHttpsInspectionOutputReference {
    return new DataCheckpointManagementSimpleClusterHttpsInspectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_user_profile - computed: true, optional: false, required: false
  public get externalUserProfile() {
    return this.getBooleanAttribute('external_user_profile');
  }

  // internal_users - computed: true, optional: false, required: false
  public get internalUsers() {
    return this.getBooleanAttribute('internal_users');
  }

  // specific - computed: true, optional: false, required: false
  public get specific() {
    return cdktf.Fn.tolist(this.getListAttribute('specific'));
  }

  // users_from_external_directories - computed: true, optional: false, required: false
  public get usersFromExternalDirectories() {
    return this.getStringAttribute('users_from_external_directories');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_method - computed: true, optional: false, required: false
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }

  // identity_provider - computed: true, optional: false, required: false
  public get identityProvider() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_provider'));
  }

  // radius - computed: true, optional: false, required: false
  public get radius() {
    return this.getStringAttribute('radius');
  }

  // users_directories - computed: true, optional: false, required: false
  private _usersDirectories = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesList(this, "users_directories", false);
  public get usersDirectories() {
    return this._usersDirectories;
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dmz - computed: true, optional: false, required: false
  public get dmz() {
    return this.getBooleanAttribute('dmz');
  }

  // undefined - computed: true, optional: false, required: false
  public get undefined() {
    return this.getBooleanAttribute('undefined');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_access_from - computed: true, optional: false, required: false
  public get allowAccessFrom() {
    return this.getStringAttribute('allow_access_from');
  }

  // internal_access_settings - computed: true, optional: false, required: false
  private _internalAccessSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsList(this, "internal_access_settings", false);
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base64_certificate - computed: true, optional: false, required: false
  public get base64Certificate() {
    return this.getStringAttribute('base64_certificate');
  }

  // base64_password - computed: true, optional: false, required: false
  public get base64Password() {
    return this.getStringAttribute('base64_password');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return cdktf.Fn.tolist(this.getListAttribute('aliases'));
  }

  // main_url - computed: true, optional: false, required: false
  public get mainUrl() {
    return this.getStringAttribute('main_url');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accessibility - computed: true, optional: false, required: false
  private _accessibility = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityList(this, "accessibility", false);
  public get accessibility() {
    return this._accessibility;
  }

  // certificate_settings - computed: true, optional: false, required: false
  private _certificateSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsList(this, "certificate_settings", false);
  public get certificateSettings() {
    return this._certificateSettings;
  }

  // portal_web_settings - computed: true, optional: false, required: false
  private _portalWebSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsList(this, "portal_web_settings", false);
  public get portalWebSettings() {
    return this._portalWebSettings;
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_settings - computed: true, optional: false, required: false
  private _authenticationSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsList(this, "authentication_settings", false);
  public get authenticationSettings() {
    return this._authenticationSettings;
  }

  // browser_based_authentication_portal_settings - computed: true, optional: false, required: false
  private _browserBasedAuthenticationPortalSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsList(this, "browser_based_authentication_portal_settings", false);
  public get browserBasedAuthenticationPortalSettings() {
    return this._browserBasedAuthenticationPortalSettings;
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_user_profile - computed: true, optional: false, required: false
  public get externalUserProfile() {
    return this.getBooleanAttribute('external_user_profile');
  }

  // internal_users - computed: true, optional: false, required: false
  public get internalUsers() {
    return this.getBooleanAttribute('internal_users');
  }

  // specific - computed: true, optional: false, required: false
  public get specific() {
    return cdktf.Fn.tolist(this.getListAttribute('specific'));
  }

  // users_from_external_directories - computed: true, optional: false, required: false
  public get usersFromExternalDirectories() {
    return this.getStringAttribute('users_from_external_directories');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_method - computed: true, optional: false, required: false
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }

  // radius - computed: true, optional: false, required: false
  public get radius() {
    return this.getStringAttribute('radius');
  }

  // users_directories - computed: true, optional: false, required: false
  private _usersDirectories = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesList(this, "users_directories", false);
  public get usersDirectories() {
    return this._usersDirectories;
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dmz - computed: true, optional: false, required: false
  public get dmz() {
    return this.getBooleanAttribute('dmz');
  }

  // undefined - computed: true, optional: false, required: false
  public get undefined() {
    return this.getBooleanAttribute('undefined');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_access_from - computed: true, optional: false, required: false
  public get allowAccessFrom() {
    return this.getStringAttribute('allow_access_from');
  }

  // internal_access_settings - computed: true, optional: false, required: false
  private _internalAccessSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsList(this, "internal_access_settings", false);
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accessibility - computed: true, optional: false, required: false
  private _accessibility = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityList(this, "accessibility", false);
  public get accessibility() {
    return this._accessibility;
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agents_interval_keepalive - computed: true, optional: false, required: false
  public get agentsIntervalKeepalive() {
    return this.getNumberAttribute('agents_interval_keepalive');
  }

  // authentication_settings - computed: true, optional: false, required: false
  private _authenticationSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsList(this, "authentication_settings", false);
  public get authenticationSettings() {
    return this._authenticationSettings;
  }

  // identity_agent_portal_settings - computed: true, optional: false, required: false
  private _identityAgentPortalSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsList(this, "identity_agent_portal_settings", false);
  public get identityAgentPortalSettings() {
    return this._identityAgentPortalSettings;
  }

  // user_reauthenticate_interval - computed: true, optional: false, required: false
  public get userReauthenticateInterval() {
    return this.getNumberAttribute('user_reauthenticate_interval');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_user_profile - computed: true, optional: false, required: false
  public get externalUserProfile() {
    return this.getBooleanAttribute('external_user_profile');
  }

  // internal_users - computed: true, optional: false, required: false
  public get internalUsers() {
    return this.getBooleanAttribute('internal_users');
  }

  // specific - computed: true, optional: false, required: false
  public get specific() {
    return cdktf.Fn.tolist(this.getListAttribute('specific'));
  }

  // users_from_external_directories - computed: true, optional: false, required: false
  public get usersFromExternalDirectories() {
    return this.getStringAttribute('users_from_external_directories');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // users_directories - computed: true, optional: false, required: false
  private _usersDirectories = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesList(this, "users_directories", false);
  public get usersDirectories() {
    return this._usersDirectories;
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client - computed: true, optional: false, required: false
  public get client() {
    return this.getStringAttribute('client');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dmz - computed: true, optional: false, required: false
  public get dmz() {
    return this.getBooleanAttribute('dmz');
  }

  // undefined - computed: true, optional: false, required: false
  public get undefined() {
    return this.getBooleanAttribute('undefined');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_access_from - computed: true, optional: false, required: false
  public get allowAccessFrom() {
    return this.getStringAttribute('allow_access_from');
  }

  // internal_access_settings - computed: true, optional: false, required: false
  private _internalAccessSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsList(this, "internal_access_settings", false);
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accessibility - computed: true, optional: false, required: false
  private _accessibility = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityList(this, "accessibility", false);
  public get accessibility() {
    return this._accessibility;
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_settings - computed: true, optional: false, required: false
  private _authenticationSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsList(this, "authentication_settings", false);
  public get authenticationSettings() {
    return this._authenticationSettings;
  }

  // authorized_clients - computed: true, optional: false, required: false
  private _authorizedClients = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsList(this, "authorized_clients", false);
  public get authorizedClients() {
    return this._authorizedClients;
  }

  // client_access_permissions - computed: true, optional: false, required: false
  private _clientAccessPermissions = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsList(this, "client_access_permissions", false);
  public get clientAccessPermissions() {
    return this._clientAccessPermissions;
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // receive_from - computed: true, optional: false, required: false
  public get receiveFrom() {
    return cdktf.Fn.tolist(this.getListAttribute('receive_from'));
  }

  // receive_from_other_gateways - computed: true, optional: false, required: false
  public get receiveFromOtherGateways() {
    return this.getBooleanAttribute('receive_from_other_gateways');
  }

  // share_with_other_gateways - computed: true, optional: false, required: false
  public get shareWithOtherGateways() {
    return this.getBooleanAttribute('share_with_other_gateways');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsProxySettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsProxySettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsProxySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsProxySettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsProxySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsProxySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsProxySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsProxySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detect_using_x_forward_for - computed: true, optional: false, required: false
  public get detectUsingXForwardFor() {
    return this.getBooleanAttribute('detect_using_x_forward_for');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsProxySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsProxySettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsProxySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIdentityAwarenessSettings {
}

export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIdentityAwarenessSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIdentityAwarenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIdentityAwarenessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIdentityAwarenessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // browser_based_authentication - computed: true, optional: false, required: false
  public get browserBasedAuthentication() {
    return this.getBooleanAttribute('browser_based_authentication');
  }

  // browser_based_authentication_settings - computed: true, optional: false, required: false
  private _browserBasedAuthenticationSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsList(this, "browser_based_authentication_settings", false);
  public get browserBasedAuthenticationSettings() {
    return this._browserBasedAuthenticationSettings;
  }

  // identity_agent - computed: true, optional: false, required: false
  public get identityAgent() {
    return this.getBooleanAttribute('identity_agent');
  }

  // identity_agent_settings - computed: true, optional: false, required: false
  private _identityAgentSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsList(this, "identity_agent_settings", false);
  public get identityAgentSettings() {
    return this._identityAgentSettings;
  }

  // identity_collector - computed: true, optional: false, required: false
  public get identityCollector() {
    return this.getBooleanAttribute('identity_collector');
  }

  // identity_collector_settings - computed: true, optional: false, required: false
  private _identityCollectorSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsList(this, "identity_collector_settings", false);
  public get identityCollectorSettings() {
    return this._identityCollectorSettings;
  }

  // identity_sharing_settings - computed: true, optional: false, required: false
  private _identitySharingSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsList(this, "identity_sharing_settings", false);
  public get identitySharingSettings() {
    return this._identitySharingSettings;
  }

  // proxy_settings - computed: true, optional: false, required: false
  private _proxySettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsProxySettingsList(this, "proxy_settings", false);
  public get proxySettings() {
    return this._proxySettings;
  }

  // remote_access - computed: true, optional: false, required: false
  public get remoteAccess() {
    return this.getBooleanAttribute('remote_access');
  }
}

export class DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterInterfaces {
}

export function dataCheckpointManagementSimpleClusterInterfacesToTerraform(struct?: DataCheckpointManagementSimpleClusterInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterInterfacesToHclTerraform(struct?: DataCheckpointManagementSimpleClusterInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anti_spoofing - computed: true, optional: false, required: false
  public get antiSpoofing() {
    return this.getBooleanAttribute('anti_spoofing');
  }

  // anti_spoofing_settings - computed: true, optional: false, required: false
  private _antiSpoofingSettings = new cdktf.StringMap(this, "anti_spoofing_settings");
  public get antiSpoofingSettings() {
    return this._antiSpoofingSettings;
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_mask_length - computed: true, optional: false, required: false
  public get ipv4MaskLength() {
    return this.getStringAttribute('ipv4_mask_length');
  }

  // ipv4_network_mask - computed: true, optional: false, required: false
  public get ipv4NetworkMask() {
    return this.getStringAttribute('ipv4_network_mask');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_mask_length - computed: true, optional: false, required: false
  public get ipv6MaskLength() {
    return this.getStringAttribute('ipv6_mask_length');
  }

  // ipv6_network_mask - computed: true, optional: false, required: false
  public get ipv6NetworkMask() {
    return this.getStringAttribute('ipv6_network_mask');
  }

  // multicast_address - computed: true, optional: false, required: false
  public get multicastAddress() {
    return this.getStringAttribute('multicast_address');
  }

  // multicast_address_type - computed: true, optional: false, required: false
  public get multicastAddressType() {
    return this.getStringAttribute('multicast_address_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // security_zone - computed: true, optional: false, required: false
  public get securityZone() {
    return this.getBooleanAttribute('security_zone');
  }

  // security_zone_settings - computed: true, optional: false, required: false
  private _securityZoneSettings = new cdktf.StringMap(this, "security_zone_settings");
  public get securityZoneSettings() {
    return this._securityZoneSettings;
  }

  // topology - computed: true, optional: false, required: false
  public get topology() {
    return this.getStringAttribute('topology');
  }

  // topology_automatic_calculation - computed: true, optional: false, required: false
  public get topologyAutomaticCalculation() {
    return this.getStringAttribute('topology_automatic_calculation');
  }

  // topology_settings - computed: true, optional: false, required: false
  private _topologySettings = new cdktf.StringMap(this, "topology_settings");
  public get topologySettings() {
    return this._topologySettings;
  }
}

export class DataCheckpointManagementSimpleClusterInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterInterfacesOutputReference {
    return new DataCheckpointManagementSimpleClusterInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIpsSettingsTopCpuConsumingProtections {
}

export function dataCheckpointManagementSimpleClusterIpsSettingsTopCpuConsumingProtectionsToTerraform(struct?: DataCheckpointManagementSimpleClusterIpsSettingsTopCpuConsumingProtections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIpsSettingsTopCpuConsumingProtectionsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIpsSettingsTopCpuConsumingProtections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIpsSettingsTopCpuConsumingProtectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIpsSettingsTopCpuConsumingProtections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIpsSettingsTopCpuConsumingProtections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_period - computed: true, optional: false, required: false
  public get disablePeriod() {
    return this.getNumberAttribute('disable_period');
  }

  // disable_under_load - computed: true, optional: false, required: false
  public get disableUnderLoad() {
    return this.getBooleanAttribute('disable_under_load');
  }
}

export class DataCheckpointManagementSimpleClusterIpsSettingsTopCpuConsumingProtectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIpsSettingsTopCpuConsumingProtectionsOutputReference {
    return new DataCheckpointManagementSimpleClusterIpsSettingsTopCpuConsumingProtectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterIpsSettings {
}

export function dataCheckpointManagementSimpleClusterIpsSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterIpsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterIpsSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterIpsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterIpsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterIpsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterIpsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activation_mode - computed: true, optional: false, required: false
  public get activationMode() {
    return this.getStringAttribute('activation_mode');
  }

  // bypass_all_under_load - computed: true, optional: false, required: false
  public get bypassAllUnderLoad() {
    return this.getBooleanAttribute('bypass_all_under_load');
  }

  // bypass_track_method - computed: true, optional: false, required: false
  public get bypassTrackMethod() {
    return this.getStringAttribute('bypass_track_method');
  }

  // cpu_usage_high_threshold - computed: true, optional: false, required: false
  public get cpuUsageHighThreshold() {
    return this.getNumberAttribute('cpu_usage_high_threshold');
  }

  // cpu_usage_low_threshold - computed: true, optional: false, required: false
  public get cpuUsageLowThreshold() {
    return this.getNumberAttribute('cpu_usage_low_threshold');
  }

  // memory_usage_high_threshold - computed: true, optional: false, required: false
  public get memoryUsageHighThreshold() {
    return this.getNumberAttribute('memory_usage_high_threshold');
  }

  // memory_usage_low_threshold - computed: true, optional: false, required: false
  public get memoryUsageLowThreshold() {
    return this.getNumberAttribute('memory_usage_low_threshold');
  }

  // reject_on_cluster_fail_over - computed: true, optional: false, required: false
  public get rejectOnClusterFailOver() {
    return this.getBooleanAttribute('reject_on_cluster_fail_over');
  }

  // send_threat_cloud_info - computed: true, optional: false, required: false
  public get sendThreatCloudInfo() {
    return this.getBooleanAttribute('send_threat_cloud_info');
  }

  // top_cpu_consuming_protections - computed: true, optional: false, required: false
  private _topCpuConsumingProtections = new DataCheckpointManagementSimpleClusterIpsSettingsTopCpuConsumingProtectionsList(this, "top_cpu_consuming_protections", false);
  public get topCpuConsumingProtections() {
    return this._topCpuConsumingProtections;
  }
}

export class DataCheckpointManagementSimpleClusterIpsSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterIpsSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterIpsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterMembersInterfaces {
}

export function dataCheckpointManagementSimpleClusterMembersInterfacesToTerraform(struct?: DataCheckpointManagementSimpleClusterMembersInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterMembersInterfacesToHclTerraform(struct?: DataCheckpointManagementSimpleClusterMembersInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterMembersInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterMembersInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterMembersInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_mask_length - computed: true, optional: false, required: false
  public get ipv4MaskLength() {
    return this.getStringAttribute('ipv4_mask_length');
  }

  // ipv4_network_mask - computed: true, optional: false, required: false
  public get ipv4NetworkMask() {
    return this.getStringAttribute('ipv4_network_mask');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_mask_length - computed: true, optional: false, required: false
  public get ipv6MaskLength() {
    return this.getStringAttribute('ipv6_mask_length');
  }

  // ipv6_network_mask - computed: true, optional: false, required: false
  public get ipv6NetworkMask() {
    return this.getStringAttribute('ipv6_network_mask');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCheckpointManagementSimpleClusterMembersInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterMembersInterfacesOutputReference {
    return new DataCheckpointManagementSimpleClusterMembersInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterMembers {
}

export function dataCheckpointManagementSimpleClusterMembersToTerraform(struct?: DataCheckpointManagementSimpleClusterMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterMembersToHclTerraform(struct?: DataCheckpointManagementSimpleClusterMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataCheckpointManagementSimpleClusterMembersInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sic_message - computed: true, optional: false, required: false
  public get sicMessage() {
    return this.getStringAttribute('sic_message');
  }

  // sic_state - computed: true, optional: false, required: false
  public get sicState() {
    return this.getStringAttribute('sic_state');
  }
}

export class DataCheckpointManagementSimpleClusterMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterMembersOutputReference {
    return new DataCheckpointManagementSimpleClusterMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettings {
}

export function dataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dmz - computed: true, optional: false, required: false
  public get dmz() {
    return this.getBooleanAttribute('dmz');
  }

  // undefined - computed: true, optional: false, required: false
  public get undefined() {
    return this.getBooleanAttribute('undefined');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
}

export class DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibility {
}

export function dataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityToTerraform(struct?: DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityToHclTerraform(struct?: DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_access_from - computed: true, optional: false, required: false
  public get allowAccessFrom() {
    return this.getStringAttribute('allow_access_from');
  }

  // internal_access_settings - computed: true, optional: false, required: false
  private _internalAccessSettings = new DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsList(this, "internal_access_settings", false);
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
}

export class DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityOutputReference {
    return new DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterPlatformPortalSettingsCertificateSettings {
}

export function dataCheckpointManagementSimpleClusterPlatformPortalSettingsCertificateSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterPlatformPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterPlatformPortalSettingsCertificateSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterPlatformPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterPlatformPortalSettingsCertificateSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterPlatformPortalSettingsCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterPlatformPortalSettingsCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base64_certificate - computed: true, optional: false, required: false
  public get base64Certificate() {
    return this.getStringAttribute('base64_certificate');
  }

  // base64_password - computed: true, optional: false, required: false
  public get base64Password() {
    return this.getStringAttribute('base64_password');
  }
}

export class DataCheckpointManagementSimpleClusterPlatformPortalSettingsCertificateSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterPlatformPortalSettingsCertificateSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterPlatformPortalSettingsCertificateSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterPlatformPortalSettingsPortalWebSettings {
}

export function dataCheckpointManagementSimpleClusterPlatformPortalSettingsPortalWebSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterPlatformPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterPlatformPortalSettingsPortalWebSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterPlatformPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterPlatformPortalSettingsPortalWebSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterPlatformPortalSettingsPortalWebSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterPlatformPortalSettingsPortalWebSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return cdktf.Fn.tolist(this.getListAttribute('aliases'));
  }

  // main_url - computed: true, optional: false, required: false
  public get mainUrl() {
    return this.getStringAttribute('main_url');
  }
}

export class DataCheckpointManagementSimpleClusterPlatformPortalSettingsPortalWebSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterPlatformPortalSettingsPortalWebSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterPlatformPortalSettingsPortalWebSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterPlatformPortalSettings {
}

export function dataCheckpointManagementSimpleClusterPlatformPortalSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterPlatformPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterPlatformPortalSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterPlatformPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterPlatformPortalSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterPlatformPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterPlatformPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accessibility - computed: true, optional: false, required: false
  private _accessibility = new DataCheckpointManagementSimpleClusterPlatformPortalSettingsAccessibilityList(this, "accessibility", false);
  public get accessibility() {
    return this._accessibility;
  }

  // certificate_settings - computed: true, optional: false, required: false
  private _certificateSettings = new DataCheckpointManagementSimpleClusterPlatformPortalSettingsCertificateSettingsList(this, "certificate_settings", false);
  public get certificateSettings() {
    return this._certificateSettings;
  }

  // portal_web_settings - computed: true, optional: false, required: false
  private _portalWebSettings = new DataCheckpointManagementSimpleClusterPlatformPortalSettingsPortalWebSettingsList(this, "portal_web_settings", false);
  public get portalWebSettings() {
    return this._portalWebSettings;
  }
}

export class DataCheckpointManagementSimpleClusterPlatformPortalSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterPlatformPortalSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterPlatformPortalSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettings {
}

export function dataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dmz - computed: true, optional: false, required: false
  public get dmz() {
    return this.getBooleanAttribute('dmz');
  }

  // undefined - computed: true, optional: false, required: false
  public get undefined() {
    return this.getBooleanAttribute('undefined');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
}

export class DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibility {
}

export function dataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityToTerraform(struct?: DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityToHclTerraform(struct?: DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_access_from - computed: true, optional: false, required: false
  public get allowAccessFrom() {
    return this.getStringAttribute('allow_access_from');
  }

  // internal_access_settings - computed: true, optional: false, required: false
  private _internalAccessSettings = new DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsList(this, "internal_access_settings", false);
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
}

export class DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityOutputReference {
    return new DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterUsercheckPortalSettingsCertificateSettings {
}

export function dataCheckpointManagementSimpleClusterUsercheckPortalSettingsCertificateSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterUsercheckPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterUsercheckPortalSettingsCertificateSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterUsercheckPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterUsercheckPortalSettingsCertificateSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterUsercheckPortalSettingsCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterUsercheckPortalSettingsCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base64_certificate - computed: true, optional: false, required: false
  public get base64Certificate() {
    return this.getStringAttribute('base64_certificate');
  }

  // base64_password - computed: true, optional: false, required: false
  public get base64Password() {
    return this.getStringAttribute('base64_password');
  }
}

export class DataCheckpointManagementSimpleClusterUsercheckPortalSettingsCertificateSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterUsercheckPortalSettingsCertificateSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterUsercheckPortalSettingsCertificateSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterUsercheckPortalSettingsPortalWebSettings {
}

export function dataCheckpointManagementSimpleClusterUsercheckPortalSettingsPortalWebSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterUsercheckPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterUsercheckPortalSettingsPortalWebSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterUsercheckPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterUsercheckPortalSettingsPortalWebSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterUsercheckPortalSettingsPortalWebSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterUsercheckPortalSettingsPortalWebSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return cdktf.Fn.tolist(this.getListAttribute('aliases'));
  }

  // main_url - computed: true, optional: false, required: false
  public get mainUrl() {
    return this.getStringAttribute('main_url');
  }
}

export class DataCheckpointManagementSimpleClusterUsercheckPortalSettingsPortalWebSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterUsercheckPortalSettingsPortalWebSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterUsercheckPortalSettingsPortalWebSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleClusterUsercheckPortalSettings {
}

export function dataCheckpointManagementSimpleClusterUsercheckPortalSettingsToTerraform(struct?: DataCheckpointManagementSimpleClusterUsercheckPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleClusterUsercheckPortalSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleClusterUsercheckPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleClusterUsercheckPortalSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleClusterUsercheckPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleClusterUsercheckPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accessibility - computed: true, optional: false, required: false
  private _accessibility = new DataCheckpointManagementSimpleClusterUsercheckPortalSettingsAccessibilityList(this, "accessibility", false);
  public get accessibility() {
    return this._accessibility;
  }

  // certificate_settings - computed: true, optional: false, required: false
  private _certificateSettings = new DataCheckpointManagementSimpleClusterUsercheckPortalSettingsCertificateSettingsList(this, "certificate_settings", false);
  public get certificateSettings() {
    return this._certificateSettings;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // portal_web_settings - computed: true, optional: false, required: false
  private _portalWebSettings = new DataCheckpointManagementSimpleClusterUsercheckPortalSettingsPortalWebSettingsList(this, "portal_web_settings", false);
  public get portalWebSettings() {
    return this._portalWebSettings;
  }
}

export class DataCheckpointManagementSimpleClusterUsercheckPortalSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleClusterUsercheckPortalSettingsOutputReference {
    return new DataCheckpointManagementSimpleClusterUsercheckPortalSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_cluster checkpoint_management_simple_cluster}
*/
export class DataCheckpointManagementSimpleCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_simple_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementSimpleCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementSimpleCluster to import
  * @param importFromId The id of the existing DataCheckpointManagementSimpleCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementSimpleCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_simple_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_cluster checkpoint_management_simple_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementSimpleClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementSimpleClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_simple_cluster',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_settings - computed: true, optional: false, required: false
  private _advancedSettings = new DataCheckpointManagementSimpleClusterAdvancedSettingsList(this, "advanced_settings", false);
  public get advancedSettings() {
    return this._advancedSettings;
  }

  // anti_bot - computed: true, optional: false, required: false
  public get antiBot() {
    return this.getBooleanAttribute('anti_bot');
  }

  // anti_virus - computed: true, optional: false, required: false
  public get antiVirus() {
    return this.getBooleanAttribute('anti_virus');
  }

  // application_control - computed: true, optional: false, required: false
  public get applicationControl() {
    return this.getBooleanAttribute('application_control');
  }

  // cluster_mode - computed: true, optional: false, required: false
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // content_awareness - computed: true, optional: false, required: false
  public get contentAwareness() {
    return this.getBooleanAttribute('content_awareness');
  }

  // data_awareness - computed: true, optional: false, required: false
  public get dataAwareness() {
    return this.getBooleanAttribute('data_awareness');
  }

  // dynamic_ip - computed: true, optional: false, required: false
  public get dynamicIp() {
    return this.getBooleanAttribute('dynamic_ip');
  }

  // enable_https_inspection - computed: true, optional: false, required: false
  public get enableHttpsInspection() {
    return this.getBooleanAttribute('enable_https_inspection');
  }

  // fetch_policy - computed: true, optional: false, required: false
  public get fetchPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('fetch_policy'));
  }

  // firewall - computed: true, optional: false, required: false
  public get firewall() {
    return this.getBooleanAttribute('firewall');
  }

  // firewall_settings - computed: true, optional: false, required: false
  private _firewallSettings = new cdktf.StringMap(this, "firewall_settings");
  public get firewallSettings() {
    return this._firewallSettings;
  }

  // geo_mode - computed: true, optional: false, required: false
  public get geoMode() {
    return this.getBooleanAttribute('geo_mode');
  }

  // hardware - computed: true, optional: false, required: false
  public get hardware() {
    return this.getStringAttribute('hardware');
  }

  // hit_count - computed: true, optional: false, required: false
  public get hitCount() {
    return this.getBooleanAttribute('hit_count');
  }

  // https_inspection - computed: true, optional: false, required: false
  private _httpsInspection = new DataCheckpointManagementSimpleClusterHttpsInspectionList(this, "https_inspection", false);
  public get httpsInspection() {
    return this._httpsInspection;
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

  // identity_awareness - computed: true, optional: false, required: false
  public get identityAwareness() {
    return this.getBooleanAttribute('identity_awareness');
  }

  // identity_awareness_settings - computed: true, optional: false, required: false
  private _identityAwarenessSettings = new DataCheckpointManagementSimpleClusterIdentityAwarenessSettingsList(this, "identity_awareness_settings", false);
  public get identityAwarenessSettings() {
    return this._identityAwarenessSettings;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataCheckpointManagementSimpleClusterInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getBooleanAttribute('ips');
  }

  // ips_settings - computed: true, optional: false, required: false
  private _ipsSettings = new DataCheckpointManagementSimpleClusterIpsSettingsList(this, "ips_settings", false);
  public get ipsSettings() {
    return this._ipsSettings;
  }

  // ips_update_policy - computed: true, optional: false, required: false
  public get ipsUpdatePolicy() {
    return this.getStringAttribute('ips_update_policy');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // logs_settings - computed: true, optional: false, required: false
  private _logsSettings = new cdktf.StringMap(this, "logs_settings");
  public get logsSettings() {
    return this._logsSettings;
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataCheckpointManagementSimpleClusterMembersList(this, "members", false);
  public get members() {
    return this._members;
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

  // nat_hide_internal_interfaces - computed: true, optional: false, required: false
  public get natHideInternalInterfaces() {
    return this.getBooleanAttribute('nat_hide_internal_interfaces');
  }

  // nat_settings - computed: true, optional: false, required: false
  private _natSettings = new cdktf.StringMap(this, "nat_settings");
  public get natSettings() {
    return this._natSettings;
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // platform_portal_settings - computed: true, optional: false, required: false
  private _platformPortalSettings = new DataCheckpointManagementSimpleClusterPlatformPortalSettingsList(this, "platform_portal_settings", false);
  public get platformPortalSettings() {
    return this._platformPortalSettings;
  }

  // proxy_settings - computed: true, optional: false, required: false
  private _proxySettings = new cdktf.StringMap(this, "proxy_settings");
  public get proxySettings() {
    return this._proxySettings;
  }

  // qos - computed: true, optional: false, required: false
  public get qos() {
    return this.getBooleanAttribute('qos');
  }

  // save_logs_locally - computed: true, optional: false, required: false
  public get saveLogsLocally() {
    return this.getBooleanAttribute('save_logs_locally');
  }

  // send_alerts_to_server - computed: true, optional: false, required: false
  public get sendAlertsToServer() {
    return cdktf.Fn.tolist(this.getListAttribute('send_alerts_to_server'));
  }

  // send_logs_to_backup_server - computed: true, optional: false, required: false
  public get sendLogsToBackupServer() {
    return cdktf.Fn.tolist(this.getListAttribute('send_logs_to_backup_server'));
  }

  // send_logs_to_server - computed: true, optional: false, required: false
  public get sendLogsToServer() {
    return cdktf.Fn.tolist(this.getListAttribute('send_logs_to_server'));
  }

  // sic_name - computed: true, optional: false, required: false
  public get sicName() {
    return this.getStringAttribute('sic_name');
  }

  // sic_state - computed: true, optional: false, required: false
  public get sicState() {
    return this.getStringAttribute('sic_state');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // threat_emulation - computed: true, optional: false, required: false
  public get threatEmulation() {
    return this.getBooleanAttribute('threat_emulation');
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // url_filtering - computed: true, optional: false, required: false
  public get urlFiltering() {
    return this.getBooleanAttribute('url_filtering');
  }

  // usercheck_portal_settings - computed: true, optional: false, required: false
  private _usercheckPortalSettings = new DataCheckpointManagementSimpleClusterUsercheckPortalSettingsList(this, "usercheck_portal_settings", false);
  public get usercheckPortalSettings() {
    return this._usercheckPortalSettings;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }

  // vpn_settings - computed: true, optional: false, required: false
  private _vpnSettings = new cdktf.StringMap(this, "vpn_settings");
  public get vpnSettings() {
    return this._vpnSettings;
  }

  // zero_phishing - computed: true, optional: false, required: false
  public get zeroPhishing() {
    return this.getBooleanAttribute('zero_phishing');
  }

  // zero_phishing_fqdn - computed: true, optional: false, required: false
  public get zeroPhishingFqdn() {
    return this.getStringAttribute('zero_phishing_fqdn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
