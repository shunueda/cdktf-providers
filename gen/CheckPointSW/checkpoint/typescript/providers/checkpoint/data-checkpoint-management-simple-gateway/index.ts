// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementSimpleGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#id DataCheckpointManagementSimpleGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#name DataCheckpointManagementSimpleGateway#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#uid DataCheckpointManagementSimpleGateway#uid}
  */
  readonly uid?: string;
  /**
  * ips_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#ips_settings DataCheckpointManagementSimpleGateway#ips_settings}
  */
  readonly ipsSettings?: DataCheckpointManagementSimpleGatewayIpsSettings;
}
export interface DataCheckpointManagementSimpleGatewayAdvancedSettingsSamPurgeSamFile {
}

export function dataCheckpointManagementSimpleGatewayAdvancedSettingsSamPurgeSamFileToTerraform(struct?: DataCheckpointManagementSimpleGatewayAdvancedSettingsSamPurgeSamFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayAdvancedSettingsSamPurgeSamFileToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayAdvancedSettingsSamPurgeSamFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayAdvancedSettingsSamPurgeSamFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayAdvancedSettingsSamPurgeSamFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayAdvancedSettingsSamPurgeSamFile | undefined) {
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

export class DataCheckpointManagementSimpleGatewayAdvancedSettingsSamPurgeSamFileList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayAdvancedSettingsSamPurgeSamFileOutputReference {
    return new DataCheckpointManagementSimpleGatewayAdvancedSettingsSamPurgeSamFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersions {
}

export function dataCheckpointManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsToTerraform(struct?: DataCheckpointManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersions | undefined) {
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

export class DataCheckpointManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsOutputReference {
    return new DataCheckpointManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayAdvancedSettingsSam {
}

export function dataCheckpointManagementSimpleGatewayAdvancedSettingsSamToTerraform(struct?: DataCheckpointManagementSimpleGatewayAdvancedSettingsSam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayAdvancedSettingsSamToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayAdvancedSettingsSam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayAdvancedSettingsSamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayAdvancedSettingsSam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayAdvancedSettingsSam | undefined) {
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
  private _purgeSamFile = new DataCheckpointManagementSimpleGatewayAdvancedSettingsSamPurgeSamFileList(this, "purge_sam_file", false);
  public get purgeSamFile() {
    return this._purgeSamFile;
  }

  // use_early_versions - computed: true, optional: false, required: false
  private _useEarlyVersions = new DataCheckpointManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsList(this, "use_early_versions", false);
  public get useEarlyVersions() {
    return this._useEarlyVersions;
  }
}

export class DataCheckpointManagementSimpleGatewayAdvancedSettingsSamList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayAdvancedSettingsSamOutputReference {
    return new DataCheckpointManagementSimpleGatewayAdvancedSettingsSamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayAdvancedSettings {
}

export function dataCheckpointManagementSimpleGatewayAdvancedSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayAdvancedSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayAdvancedSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayAdvancedSettings | undefined) {
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
  private _sam = new DataCheckpointManagementSimpleGatewayAdvancedSettingsSamList(this, "sam", false);
  public get sam() {
    return this._sam;
  }
}

export class DataCheckpointManagementSimpleGatewayAdvancedSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayAdvancedSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayAdvancedSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayApplicationControlAndUrlFilteringSettings {
}

export function dataCheckpointManagementSimpleGatewayApplicationControlAndUrlFilteringSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayApplicationControlAndUrlFilteringSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayApplicationControlAndUrlFilteringSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayApplicationControlAndUrlFilteringSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayApplicationControlAndUrlFilteringSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayApplicationControlAndUrlFilteringSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayApplicationControlAndUrlFilteringSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // global_settings_mode - computed: true, optional: false, required: false
  public get globalSettingsMode() {
    return this.getStringAttribute('global_settings_mode');
  }

  // override_global_settings - computed: true, optional: false, required: false
  private _overrideGlobalSettings = new cdktf.StringMap(this, "override_global_settings");
  public get overrideGlobalSettings() {
    return this._overrideGlobalSettings;
  }
}

export class DataCheckpointManagementSimpleGatewayApplicationControlAndUrlFilteringSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayApplicationControlAndUrlFilteringSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayApplicationControlAndUrlFilteringSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayHttpsInspectionBypassOnFailure {
}

export function dataCheckpointManagementSimpleGatewayHttpsInspectionBypassOnFailureToTerraform(struct?: DataCheckpointManagementSimpleGatewayHttpsInspectionBypassOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayHttpsInspectionBypassOnFailureToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayHttpsInspectionBypassOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayHttpsInspectionBypassOnFailureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayHttpsInspectionBypassOnFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayHttpsInspectionBypassOnFailure | undefined) {
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

export class DataCheckpointManagementSimpleGatewayHttpsInspectionBypassOnFailureList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayHttpsInspectionBypassOnFailureOutputReference {
    return new DataCheckpointManagementSimpleGatewayHttpsInspectionBypassOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayHttpsInspectionDenyExpiredServerCert {
}

export function dataCheckpointManagementSimpleGatewayHttpsInspectionDenyExpiredServerCertToTerraform(struct?: DataCheckpointManagementSimpleGatewayHttpsInspectionDenyExpiredServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayHttpsInspectionDenyExpiredServerCertToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayHttpsInspectionDenyExpiredServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayHttpsInspectionDenyExpiredServerCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayHttpsInspectionDenyExpiredServerCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayHttpsInspectionDenyExpiredServerCert | undefined) {
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

export class DataCheckpointManagementSimpleGatewayHttpsInspectionDenyExpiredServerCertList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayHttpsInspectionDenyExpiredServerCertOutputReference {
    return new DataCheckpointManagementSimpleGatewayHttpsInspectionDenyExpiredServerCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayHttpsInspectionDenyRevokedServerCert {
}

export function dataCheckpointManagementSimpleGatewayHttpsInspectionDenyRevokedServerCertToTerraform(struct?: DataCheckpointManagementSimpleGatewayHttpsInspectionDenyRevokedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayHttpsInspectionDenyRevokedServerCertToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayHttpsInspectionDenyRevokedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayHttpsInspectionDenyRevokedServerCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayHttpsInspectionDenyRevokedServerCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayHttpsInspectionDenyRevokedServerCert | undefined) {
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

export class DataCheckpointManagementSimpleGatewayHttpsInspectionDenyRevokedServerCertList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayHttpsInspectionDenyRevokedServerCertOutputReference {
    return new DataCheckpointManagementSimpleGatewayHttpsInspectionDenyRevokedServerCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCert {
}

export function dataCheckpointManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCertToTerraform(struct?: DataCheckpointManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCertToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCert | undefined) {
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

export class DataCheckpointManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCertList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCertOutputReference {
    return new DataCheckpointManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowMode {
}

export function dataCheckpointManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeToTerraform(struct?: DataCheckpointManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowMode | undefined) {
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

export class DataCheckpointManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeOutputReference {
    return new DataCheckpointManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayHttpsInspection {
}

export function dataCheckpointManagementSimpleGatewayHttpsInspectionToTerraform(struct?: DataCheckpointManagementSimpleGatewayHttpsInspection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayHttpsInspectionToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayHttpsInspection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayHttpsInspectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayHttpsInspection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayHttpsInspection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bypass_on_failure - computed: true, optional: false, required: false
  private _bypassOnFailure = new DataCheckpointManagementSimpleGatewayHttpsInspectionBypassOnFailureList(this, "bypass_on_failure", false);
  public get bypassOnFailure() {
    return this._bypassOnFailure;
  }

  // deny_expired_server_cert - computed: true, optional: false, required: false
  private _denyExpiredServerCert = new DataCheckpointManagementSimpleGatewayHttpsInspectionDenyExpiredServerCertList(this, "deny_expired_server_cert", false);
  public get denyExpiredServerCert() {
    return this._denyExpiredServerCert;
  }

  // deny_revoked_server_cert - computed: true, optional: false, required: false
  private _denyRevokedServerCert = new DataCheckpointManagementSimpleGatewayHttpsInspectionDenyRevokedServerCertList(this, "deny_revoked_server_cert", false);
  public get denyRevokedServerCert() {
    return this._denyRevokedServerCert;
  }

  // deny_untrusted_server_cert - computed: true, optional: false, required: false
  private _denyUntrustedServerCert = new DataCheckpointManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCertList(this, "deny_untrusted_server_cert", false);
  public get denyUntrustedServerCert() {
    return this._denyUntrustedServerCert;
  }

  // site_categorization_allow_mode - computed: true, optional: false, required: false
  private _siteCategorizationAllowMode = new DataCheckpointManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeList(this, "site_categorization_allow_mode", false);
  public get siteCategorizationAllowMode() {
    return this._siteCategorizationAllowMode;
  }
}

export class DataCheckpointManagementSimpleGatewayHttpsInspectionList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayHttpsInspectionOutputReference {
    return new DataCheckpointManagementSimpleGatewayHttpsInspectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories | undefined) {
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

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings | undefined) {
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
  private _usersDirectories = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesList(this, "users_directories", false);
  public get usersDirectories() {
    return this._usersDirectories;
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility | undefined) {
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
  private _internalAccessSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsList(this, "internal_access_settings", false);
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accessibility - computed: true, optional: false, required: false
  private _accessibility = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityList(this, "accessibility", false);
  public get accessibility() {
    return this._accessibility;
  }

  // certificate_settings - computed: true, optional: false, required: false
  private _certificateSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsList(this, "certificate_settings", false);
  public get certificateSettings() {
    return this._certificateSettings;
  }

  // portal_web_settings - computed: true, optional: false, required: false
  private _portalWebSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsList(this, "portal_web_settings", false);
  public get portalWebSettings() {
    return this._portalWebSettings;
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_settings - computed: true, optional: false, required: false
  private _authenticationSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsList(this, "authentication_settings", false);
  public get authenticationSettings() {
    return this._authenticationSettings;
  }

  // browser_based_authentication_portal_settings - computed: true, optional: false, required: false
  private _browserBasedAuthenticationPortalSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsList(this, "browser_based_authentication_portal_settings", false);
  public get browserBasedAuthenticationPortalSettings() {
    return this._browserBasedAuthenticationPortalSettings;
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories | undefined) {
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

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings | undefined) {
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
  private _usersDirectories = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesList(this, "users_directories", false);
  public get usersDirectories() {
    return this._usersDirectories;
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility | undefined) {
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
  private _internalAccessSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsList(this, "internal_access_settings", false);
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accessibility - computed: true, optional: false, required: false
  private _accessibility = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityList(this, "accessibility", false);
  public get accessibility() {
    return this._accessibility;
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettings | undefined) {
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
  private _authenticationSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsList(this, "authentication_settings", false);
  public get authenticationSettings() {
    return this._authenticationSettings;
  }

  // identity_agent_portal_settings - computed: true, optional: false, required: false
  private _identityAgentPortalSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsList(this, "identity_agent_portal_settings", false);
  public get identityAgentPortalSettings() {
    return this._identityAgentPortalSettings;
  }

  // user_reauthenticate_interval - computed: true, optional: false, required: false
  public get userReauthenticateInterval() {
    return this.getNumberAttribute('user_reauthenticate_interval');
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories | undefined) {
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

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // users_directories - computed: true, optional: false, required: false
  private _usersDirectories = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesList(this, "users_directories", false);
  public get usersDirectories() {
    return this._usersDirectories;
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients | undefined) {
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

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility | undefined) {
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
  private _internalAccessSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsList(this, "internal_access_settings", false);
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accessibility - computed: true, optional: false, required: false
  private _accessibility = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityList(this, "accessibility", false);
  public get accessibility() {
    return this._accessibility;
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_settings - computed: true, optional: false, required: false
  private _authenticationSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsList(this, "authentication_settings", false);
  public get authenticationSettings() {
    return this._authenticationSettings;
  }

  // authorized_clients - computed: true, optional: false, required: false
  private _authorizedClients = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsList(this, "authorized_clients", false);
  public get authorizedClients() {
    return this._authorizedClients;
  }

  // client_access_permissions - computed: true, optional: false, required: false
  private _clientAccessPermissions = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsList(this, "client_access_permissions", false);
  public get clientAccessPermissions() {
    return this._clientAccessPermissions;
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsProxySettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsProxySettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsProxySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsProxySettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsProxySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsProxySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsProxySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsProxySettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsProxySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsProxySettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsProxySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIdentityAwarenessSettings {
}

export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIdentityAwarenessSettings | undefined) {
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
  private _browserBasedAuthenticationSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsList(this, "browser_based_authentication_settings", false);
  public get browserBasedAuthenticationSettings() {
    return this._browserBasedAuthenticationSettings;
  }

  // identity_agent - computed: true, optional: false, required: false
  public get identityAgent() {
    return this.getBooleanAttribute('identity_agent');
  }

  // identity_agent_settings - computed: true, optional: false, required: false
  private _identityAgentSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsList(this, "identity_agent_settings", false);
  public get identityAgentSettings() {
    return this._identityAgentSettings;
  }

  // identity_collector - computed: true, optional: false, required: false
  public get identityCollector() {
    return this.getBooleanAttribute('identity_collector');
  }

  // identity_collector_settings - computed: true, optional: false, required: false
  private _identityCollectorSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsList(this, "identity_collector_settings", false);
  public get identityCollectorSettings() {
    return this._identityCollectorSettings;
  }

  // identity_sharing_settings - computed: true, optional: false, required: false
  private _identitySharingSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsList(this, "identity_sharing_settings", false);
  public get identitySharingSettings() {
    return this._identitySharingSettings;
  }

  // proxy_settings - computed: true, optional: false, required: false
  private _proxySettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsProxySettingsList(this, "proxy_settings", false);
  public get proxySettings() {
    return this._proxySettings;
  }

  // remote_access - computed: true, optional: false, required: false
  public get remoteAccess() {
    return this.getBooleanAttribute('remote_access');
  }
}

export class DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayInterfaces {
}

export function dataCheckpointManagementSimpleGatewayInterfacesToTerraform(struct?: DataCheckpointManagementSimpleGatewayInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayInterfacesToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayInterfaces | undefined) {
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

export class DataCheckpointManagementSimpleGatewayInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayInterfacesOutputReference {
    return new DataCheckpointManagementSimpleGatewayInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettings {
}

export function dataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibility {
}

export function dataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityToTerraform(struct?: DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibility | undefined) {
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
  private _internalAccessSettings = new DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsList(this, "internal_access_settings", false);
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
}

export class DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityOutputReference {
    return new DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayPlatformPortalSettingsCertificateSettings {
}

export function dataCheckpointManagementSimpleGatewayPlatformPortalSettingsCertificateSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayPlatformPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayPlatformPortalSettingsCertificateSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayPlatformPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayPlatformPortalSettingsCertificateSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayPlatformPortalSettingsCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayPlatformPortalSettingsCertificateSettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayPlatformPortalSettingsCertificateSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayPlatformPortalSettingsCertificateSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayPlatformPortalSettingsCertificateSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayPlatformPortalSettingsPortalWebSettings {
}

export function dataCheckpointManagementSimpleGatewayPlatformPortalSettingsPortalWebSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayPlatformPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayPlatformPortalSettingsPortalWebSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayPlatformPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayPlatformPortalSettingsPortalWebSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayPlatformPortalSettingsPortalWebSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayPlatformPortalSettingsPortalWebSettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayPlatformPortalSettingsPortalWebSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayPlatformPortalSettingsPortalWebSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayPlatformPortalSettingsPortalWebSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayPlatformPortalSettings {
}

export function dataCheckpointManagementSimpleGatewayPlatformPortalSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayPlatformPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayPlatformPortalSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayPlatformPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayPlatformPortalSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayPlatformPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayPlatformPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accessibility - computed: true, optional: false, required: false
  private _accessibility = new DataCheckpointManagementSimpleGatewayPlatformPortalSettingsAccessibilityList(this, "accessibility", false);
  public get accessibility() {
    return this._accessibility;
  }

  // certificate_settings - computed: true, optional: false, required: false
  private _certificateSettings = new DataCheckpointManagementSimpleGatewayPlatformPortalSettingsCertificateSettingsList(this, "certificate_settings", false);
  public get certificateSettings() {
    return this._certificateSettings;
  }

  // portal_web_settings - computed: true, optional: false, required: false
  private _portalWebSettings = new DataCheckpointManagementSimpleGatewayPlatformPortalSettingsPortalWebSettingsList(this, "portal_web_settings", false);
  public get portalWebSettings() {
    return this._portalWebSettings;
  }
}

export class DataCheckpointManagementSimpleGatewayPlatformPortalSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayPlatformPortalSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayPlatformPortalSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettings {
}

export function dataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibility {
}

export function dataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityToTerraform(struct?: DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibility | undefined) {
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
  private _internalAccessSettings = new DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsList(this, "internal_access_settings", false);
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
}

export class DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityOutputReference {
    return new DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsCertificateSettings {
}

export function dataCheckpointManagementSimpleGatewayUsercheckPortalSettingsCertificateSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayUsercheckPortalSettingsCertificateSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsCertificateSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsCertificateSettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsCertificateSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsCertificateSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsCertificateSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettings {
}

export function dataCheckpointManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettings | undefined) {
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

export class DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayUsercheckPortalSettings {
}

export function dataCheckpointManagementSimpleGatewayUsercheckPortalSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayUsercheckPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementSimpleGatewayUsercheckPortalSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayUsercheckPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementSimpleGatewayUsercheckPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayUsercheckPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accessibility - computed: true, optional: false, required: false
  private _accessibility = new DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsAccessibilityList(this, "accessibility", false);
  public get accessibility() {
    return this._accessibility;
  }

  // certificate_settings - computed: true, optional: false, required: false
  private _certificateSettings = new DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsCertificateSettingsList(this, "certificate_settings", false);
  public get certificateSettings() {
    return this._certificateSettings;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // portal_web_settings - computed: true, optional: false, required: false
  private _portalWebSettings = new DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsList(this, "portal_web_settings", false);
  public get portalWebSettings() {
    return this._portalWebSettings;
  }
}

export class DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsOutputReference {
    return new DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections {
  /**
  * Duration (in hours) for disabling the protections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#disable_period DataCheckpointManagementSimpleGateway#disable_period}
  */
  readonly disablePeriod?: number;
  /**
  * Temporarily disable/enable top CPU consuming IPS protections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#disable_under_load DataCheckpointManagementSimpleGateway#disable_under_load}
  */
  readonly disableUnderLoad?: boolean | cdktf.IResolvable;
}

export function dataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsOutputReference | DataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_period: cdktf.numberToTerraform(struct!.disablePeriod),
    disable_under_load: cdktf.booleanToTerraform(struct!.disableUnderLoad),
  }
}


export function dataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsOutputReference | DataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_period: {
      value: cdktf.numberToHclTerraform(struct!.disablePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_under_load: {
      value: cdktf.booleanToHclTerraform(struct!.disableUnderLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePeriod = this._disablePeriod;
    }
    if (this._disableUnderLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUnderLoad = this._disableUnderLoad;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disablePeriod = undefined;
      this._disableUnderLoad = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disablePeriod = value.disablePeriod;
      this._disableUnderLoad = value.disableUnderLoad;
    }
  }

  // disable_period - computed: false, optional: true, required: false
  private _disablePeriod?: number; 
  public get disablePeriod() {
    return this.getNumberAttribute('disable_period');
  }
  public set disablePeriod(value: number) {
    this._disablePeriod = value;
  }
  public resetDisablePeriod() {
    this._disablePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePeriodInput() {
    return this._disablePeriod;
  }

  // disable_under_load - computed: false, optional: true, required: false
  private _disableUnderLoad?: boolean | cdktf.IResolvable; 
  public get disableUnderLoad() {
    return this.getBooleanAttribute('disable_under_load');
  }
  public set disableUnderLoad(value: boolean | cdktf.IResolvable) {
    this._disableUnderLoad = value;
  }
  public resetDisableUnderLoad() {
    this._disableUnderLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUnderLoadInput() {
    return this._disableUnderLoad;
  }
}
export interface DataCheckpointManagementSimpleGatewayIpsSettings {
  /**
  * Defines whether the IPS blade operates in Detect Only mode or enforces the configured IPS Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#activation_mode DataCheckpointManagementSimpleGateway#activation_mode}
  */
  readonly activationMode?: string;
  /**
  * Disable/enable all IPS protections until CPU and memory levels are back to normal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#bypass_all_under_load DataCheckpointManagementSimpleGateway#bypass_all_under_load}
  */
  readonly bypassAllUnderLoad?: boolean | cdktf.IResolvable;
  /**
  * Track options when all IPS protections are disabled until CPU/memory levels are back to normal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#bypass_track_method DataCheckpointManagementSimpleGateway#bypass_track_method}
  */
  readonly bypassTrackMethod?: string;
  /**
  * CPU usage high threshold percentage (1-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#cpu_usage_high_threshold DataCheckpointManagementSimpleGateway#cpu_usage_high_threshold}
  */
  readonly cpuUsageHighThreshold?: number;
  /**
  * CPU usage low threshold percentage (1-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#cpu_usage_low_threshold DataCheckpointManagementSimpleGateway#cpu_usage_low_threshold}
  */
  readonly cpuUsageLowThreshold?: number;
  /**
  * Memory usage high threshold percentage (1-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#memory_usage_high_threshold DataCheckpointManagementSimpleGateway#memory_usage_high_threshold}
  */
  readonly memoryUsageHighThreshold?: number;
  /**
  * Memory usage low threshold percentage (1-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#memory_usage_low_threshold DataCheckpointManagementSimpleGateway#memory_usage_low_threshold}
  */
  readonly memoryUsageLowThreshold?: number;
  /**
  * Help improve Check Point Threat Prevention product by sending anonymous information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#send_threat_cloud_info DataCheckpointManagementSimpleGateway#send_threat_cloud_info}
  */
  readonly sendThreatCloudInfo?: boolean | cdktf.IResolvable;
  /**
  * top_cpu_consuming_protections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#top_cpu_consuming_protections DataCheckpointManagementSimpleGateway#top_cpu_consuming_protections}
  */
  readonly topCpuConsumingProtections?: DataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections;
}

export function dataCheckpointManagementSimpleGatewayIpsSettingsToTerraform(struct?: DataCheckpointManagementSimpleGatewayIpsSettingsOutputReference | DataCheckpointManagementSimpleGatewayIpsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_mode: cdktf.stringToTerraform(struct!.activationMode),
    bypass_all_under_load: cdktf.booleanToTerraform(struct!.bypassAllUnderLoad),
    bypass_track_method: cdktf.stringToTerraform(struct!.bypassTrackMethod),
    cpu_usage_high_threshold: cdktf.numberToTerraform(struct!.cpuUsageHighThreshold),
    cpu_usage_low_threshold: cdktf.numberToTerraform(struct!.cpuUsageLowThreshold),
    memory_usage_high_threshold: cdktf.numberToTerraform(struct!.memoryUsageHighThreshold),
    memory_usage_low_threshold: cdktf.numberToTerraform(struct!.memoryUsageLowThreshold),
    send_threat_cloud_info: cdktf.booleanToTerraform(struct!.sendThreatCloudInfo),
    top_cpu_consuming_protections: dataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsToTerraform(struct!.topCpuConsumingProtections),
  }
}


export function dataCheckpointManagementSimpleGatewayIpsSettingsToHclTerraform(struct?: DataCheckpointManagementSimpleGatewayIpsSettingsOutputReference | DataCheckpointManagementSimpleGatewayIpsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation_mode: {
      value: cdktf.stringToHclTerraform(struct!.activationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_all_under_load: {
      value: cdktf.booleanToHclTerraform(struct!.bypassAllUnderLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bypass_track_method: {
      value: cdktf.stringToHclTerraform(struct!.bypassTrackMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_usage_high_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuUsageHighThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_usage_low_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuUsageLowThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_usage_high_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memoryUsageHighThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_usage_low_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memoryUsageLowThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_threat_cloud_info: {
      value: cdktf.booleanToHclTerraform(struct!.sendThreatCloudInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    top_cpu_consuming_protections: {
      value: dataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsToHclTerraform(struct!.topCpuConsumingProtections),
      isBlock: true,
      type: "list",
      storageClassType: "DataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCheckpointManagementSimpleGatewayIpsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCheckpointManagementSimpleGatewayIpsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationMode = this._activationMode;
    }
    if (this._bypassAllUnderLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassAllUnderLoad = this._bypassAllUnderLoad;
    }
    if (this._bypassTrackMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassTrackMethod = this._bypassTrackMethod;
    }
    if (this._cpuUsageHighThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsageHighThreshold = this._cpuUsageHighThreshold;
    }
    if (this._cpuUsageLowThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsageLowThreshold = this._cpuUsageLowThreshold;
    }
    if (this._memoryUsageHighThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsageHighThreshold = this._memoryUsageHighThreshold;
    }
    if (this._memoryUsageLowThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsageLowThreshold = this._memoryUsageLowThreshold;
    }
    if (this._sendThreatCloudInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendThreatCloudInfo = this._sendThreatCloudInfo;
    }
    if (this._topCpuConsumingProtections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topCpuConsumingProtections = this._topCpuConsumingProtections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementSimpleGatewayIpsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activationMode = undefined;
      this._bypassAllUnderLoad = undefined;
      this._bypassTrackMethod = undefined;
      this._cpuUsageHighThreshold = undefined;
      this._cpuUsageLowThreshold = undefined;
      this._memoryUsageHighThreshold = undefined;
      this._memoryUsageLowThreshold = undefined;
      this._sendThreatCloudInfo = undefined;
      this._topCpuConsumingProtections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activationMode = value.activationMode;
      this._bypassAllUnderLoad = value.bypassAllUnderLoad;
      this._bypassTrackMethod = value.bypassTrackMethod;
      this._cpuUsageHighThreshold = value.cpuUsageHighThreshold;
      this._cpuUsageLowThreshold = value.cpuUsageLowThreshold;
      this._memoryUsageHighThreshold = value.memoryUsageHighThreshold;
      this._memoryUsageLowThreshold = value.memoryUsageLowThreshold;
      this._sendThreatCloudInfo = value.sendThreatCloudInfo;
      this._topCpuConsumingProtections.internalValue = value.topCpuConsumingProtections;
    }
  }

  // activation_mode - computed: false, optional: true, required: false
  private _activationMode?: string; 
  public get activationMode() {
    return this.getStringAttribute('activation_mode');
  }
  public set activationMode(value: string) {
    this._activationMode = value;
  }
  public resetActivationMode() {
    this._activationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationModeInput() {
    return this._activationMode;
  }

  // bypass_all_under_load - computed: false, optional: true, required: false
  private _bypassAllUnderLoad?: boolean | cdktf.IResolvable; 
  public get bypassAllUnderLoad() {
    return this.getBooleanAttribute('bypass_all_under_load');
  }
  public set bypassAllUnderLoad(value: boolean | cdktf.IResolvable) {
    this._bypassAllUnderLoad = value;
  }
  public resetBypassAllUnderLoad() {
    this._bypassAllUnderLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassAllUnderLoadInput() {
    return this._bypassAllUnderLoad;
  }

  // bypass_track_method - computed: false, optional: true, required: false
  private _bypassTrackMethod?: string; 
  public get bypassTrackMethod() {
    return this.getStringAttribute('bypass_track_method');
  }
  public set bypassTrackMethod(value: string) {
    this._bypassTrackMethod = value;
  }
  public resetBypassTrackMethod() {
    this._bypassTrackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassTrackMethodInput() {
    return this._bypassTrackMethod;
  }

  // cpu_usage_high_threshold - computed: false, optional: true, required: false
  private _cpuUsageHighThreshold?: number; 
  public get cpuUsageHighThreshold() {
    return this.getNumberAttribute('cpu_usage_high_threshold');
  }
  public set cpuUsageHighThreshold(value: number) {
    this._cpuUsageHighThreshold = value;
  }
  public resetCpuUsageHighThreshold() {
    this._cpuUsageHighThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageHighThresholdInput() {
    return this._cpuUsageHighThreshold;
  }

  // cpu_usage_low_threshold - computed: false, optional: true, required: false
  private _cpuUsageLowThreshold?: number; 
  public get cpuUsageLowThreshold() {
    return this.getNumberAttribute('cpu_usage_low_threshold');
  }
  public set cpuUsageLowThreshold(value: number) {
    this._cpuUsageLowThreshold = value;
  }
  public resetCpuUsageLowThreshold() {
    this._cpuUsageLowThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageLowThresholdInput() {
    return this._cpuUsageLowThreshold;
  }

  // memory_usage_high_threshold - computed: false, optional: true, required: false
  private _memoryUsageHighThreshold?: number; 
  public get memoryUsageHighThreshold() {
    return this.getNumberAttribute('memory_usage_high_threshold');
  }
  public set memoryUsageHighThreshold(value: number) {
    this._memoryUsageHighThreshold = value;
  }
  public resetMemoryUsageHighThreshold() {
    this._memoryUsageHighThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageHighThresholdInput() {
    return this._memoryUsageHighThreshold;
  }

  // memory_usage_low_threshold - computed: false, optional: true, required: false
  private _memoryUsageLowThreshold?: number; 
  public get memoryUsageLowThreshold() {
    return this.getNumberAttribute('memory_usage_low_threshold');
  }
  public set memoryUsageLowThreshold(value: number) {
    this._memoryUsageLowThreshold = value;
  }
  public resetMemoryUsageLowThreshold() {
    this._memoryUsageLowThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageLowThresholdInput() {
    return this._memoryUsageLowThreshold;
  }

  // send_threat_cloud_info - computed: false, optional: true, required: false
  private _sendThreatCloudInfo?: boolean | cdktf.IResolvable; 
  public get sendThreatCloudInfo() {
    return this.getBooleanAttribute('send_threat_cloud_info');
  }
  public set sendThreatCloudInfo(value: boolean | cdktf.IResolvable) {
    this._sendThreatCloudInfo = value;
  }
  public resetSendThreatCloudInfo() {
    this._sendThreatCloudInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendThreatCloudInfoInput() {
    return this._sendThreatCloudInfo;
  }

  // top_cpu_consuming_protections - computed: false, optional: true, required: false
  private _topCpuConsumingProtections = new DataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsOutputReference(this, "top_cpu_consuming_protections");
  public get topCpuConsumingProtections() {
    return this._topCpuConsumingProtections;
  }
  public putTopCpuConsumingProtections(value: DataCheckpointManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections) {
    this._topCpuConsumingProtections.internalValue = value;
  }
  public resetTopCpuConsumingProtections() {
    this._topCpuConsumingProtections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topCpuConsumingProtectionsInput() {
    return this._topCpuConsumingProtections.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway checkpoint_management_simple_gateway}
*/
export class DataCheckpointManagementSimpleGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_simple_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementSimpleGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementSimpleGateway to import
  * @param importFromId The id of the existing DataCheckpointManagementSimpleGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementSimpleGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_simple_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_simple_gateway checkpoint_management_simple_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementSimpleGatewayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementSimpleGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_simple_gateway',
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
    this._ipsSettings.internalValue = config.ipsSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_settings - computed: true, optional: false, required: false
  private _advancedSettings = new DataCheckpointManagementSimpleGatewayAdvancedSettingsList(this, "advanced_settings", false);
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

  // application_control_and_url_filtering_settings - computed: true, optional: false, required: false
  private _applicationControlAndUrlFilteringSettings = new DataCheckpointManagementSimpleGatewayApplicationControlAndUrlFilteringSettingsList(this, "application_control_and_url_filtering_settings", false);
  public get applicationControlAndUrlFilteringSettings() {
    return this._applicationControlAndUrlFilteringSettings;
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

  // hardware - computed: true, optional: false, required: false
  public get hardware() {
    return this.getStringAttribute('hardware');
  }

  // hit_count - computed: true, optional: false, required: false
  public get hitCount() {
    return this.getBooleanAttribute('hit_count');
  }

  // https_inspection - computed: true, optional: false, required: false
  private _httpsInspection = new DataCheckpointManagementSimpleGatewayHttpsInspectionList(this, "https_inspection", false);
  public get httpsInspection() {
    return this._httpsInspection;
  }

  // icap_server - computed: true, optional: false, required: false
  public get icapServer() {
    return this.getBooleanAttribute('icap_server');
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
  private _identityAwarenessSettings = new DataCheckpointManagementSimpleGatewayIdentityAwarenessSettingsList(this, "identity_awareness_settings", false);
  public get identityAwarenessSettings() {
    return this._identityAwarenessSettings;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataCheckpointManagementSimpleGatewayInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getBooleanAttribute('ips');
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

  // one_time_password - computed: true, optional: false, required: false
  public get oneTimePassword() {
    return this.getStringAttribute('one_time_password');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // platform_portal_settings - computed: true, optional: false, required: false
  private _platformPortalSettings = new DataCheckpointManagementSimpleGatewayPlatformPortalSettingsList(this, "platform_portal_settings", false);
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

  // threat_extraction - computed: true, optional: false, required: false
  public get threatExtraction() {
    return this.getBooleanAttribute('threat_extraction');
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
  private _usercheckPortalSettings = new DataCheckpointManagementSimpleGatewayUsercheckPortalSettingsList(this, "usercheck_portal_settings", false);
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

  // ips_settings - computed: false, optional: true, required: false
  private _ipsSettings = new DataCheckpointManagementSimpleGatewayIpsSettingsOutputReference(this, "ips_settings");
  public get ipsSettings() {
    return this._ipsSettings;
  }
  public putIpsSettings(value: DataCheckpointManagementSimpleGatewayIpsSettings) {
    this._ipsSettings.internalValue = value;
  }
  public resetIpsSettings() {
    this._ipsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSettingsInput() {
    return this._ipsSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
      ips_settings: dataCheckpointManagementSimpleGatewayIpsSettingsToTerraform(this._ipsSettings.internalValue),
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
      ips_settings: {
        value: dataCheckpointManagementSimpleGatewayIpsSettingsToHclTerraform(this._ipsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCheckpointManagementSimpleGatewayIpsSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
