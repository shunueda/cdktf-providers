// https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/cloud_browser_isolation_external_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaCloudBrowserIsolationExternalProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/cloud_browser_isolation_external_profile#id DataZpaCloudBrowserIsolationExternalProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/cloud_browser_isolation_external_profile#name DataZpaCloudBrowserIsolationExternalProfile#name}
  */
  readonly name?: string;
}
export interface DataZpaCloudBrowserIsolationExternalProfileDebugMode {
}

export function dataZpaCloudBrowserIsolationExternalProfileDebugModeToTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileDebugMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaCloudBrowserIsolationExternalProfileDebugModeToHclTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileDebugMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaCloudBrowserIsolationExternalProfileDebugModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaCloudBrowserIsolationExternalProfileDebugMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaCloudBrowserIsolationExternalProfileDebugMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed - computed: true, optional: false, required: false
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }

  // file_password - computed: true, optional: false, required: false
  public get filePassword() {
    return this.getStringAttribute('file_password');
  }
}

export class DataZpaCloudBrowserIsolationExternalProfileDebugModeList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaCloudBrowserIsolationExternalProfileDebugModeOutputReference {
    return new DataZpaCloudBrowserIsolationExternalProfileDebugModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaCloudBrowserIsolationExternalProfileRegions {
}

export function dataZpaCloudBrowserIsolationExternalProfileRegionsToTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaCloudBrowserIsolationExternalProfileRegionsToHclTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaCloudBrowserIsolationExternalProfileRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaCloudBrowserIsolationExternalProfileRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaCloudBrowserIsolationExternalProfileRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZpaCloudBrowserIsolationExternalProfileRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaCloudBrowserIsolationExternalProfileRegionsOutputReference {
    return new DataZpaCloudBrowserIsolationExternalProfileRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaCloudBrowserIsolationExternalProfileSecurityControlsDeepLink {
}

export function dataZpaCloudBrowserIsolationExternalProfileSecurityControlsDeepLinkToTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileSecurityControlsDeepLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaCloudBrowserIsolationExternalProfileSecurityControlsDeepLinkToHclTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileSecurityControlsDeepLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaCloudBrowserIsolationExternalProfileSecurityControlsDeepLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaCloudBrowserIsolationExternalProfileSecurityControlsDeepLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaCloudBrowserIsolationExternalProfileSecurityControlsDeepLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applications - computed: true, optional: false, required: false
  public get applications() {
    return this.getListAttribute('applications');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataZpaCloudBrowserIsolationExternalProfileSecurityControlsDeepLinkList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaCloudBrowserIsolationExternalProfileSecurityControlsDeepLinkOutputReference {
    return new DataZpaCloudBrowserIsolationExternalProfileSecurityControlsDeepLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaCloudBrowserIsolationExternalProfileSecurityControlsWatermark {
}

export function dataZpaCloudBrowserIsolationExternalProfileSecurityControlsWatermarkToTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileSecurityControlsWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaCloudBrowserIsolationExternalProfileSecurityControlsWatermarkToHclTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileSecurityControlsWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaCloudBrowserIsolationExternalProfileSecurityControlsWatermarkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaCloudBrowserIsolationExternalProfileSecurityControlsWatermark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaCloudBrowserIsolationExternalProfileSecurityControlsWatermark | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // show_message - computed: true, optional: false, required: false
  public get showMessage() {
    return this.getBooleanAttribute('show_message');
  }

  // show_timestamp - computed: true, optional: false, required: false
  public get showTimestamp() {
    return this.getBooleanAttribute('show_timestamp');
  }

  // show_user_id - computed: true, optional: false, required: false
  public get showUserId() {
    return this.getBooleanAttribute('show_user_id');
  }
}

export class DataZpaCloudBrowserIsolationExternalProfileSecurityControlsWatermarkList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaCloudBrowserIsolationExternalProfileSecurityControlsWatermarkOutputReference {
    return new DataZpaCloudBrowserIsolationExternalProfileSecurityControlsWatermarkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaCloudBrowserIsolationExternalProfileSecurityControls {
}

export function dataZpaCloudBrowserIsolationExternalProfileSecurityControlsToTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileSecurityControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaCloudBrowserIsolationExternalProfileSecurityControlsToHclTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileSecurityControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaCloudBrowserIsolationExternalProfileSecurityControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaCloudBrowserIsolationExternalProfileSecurityControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaCloudBrowserIsolationExternalProfileSecurityControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_printing - computed: true, optional: false, required: false
  public get allowPrinting() {
    return this.getBooleanAttribute('allow_printing');
  }

  // copy_paste - computed: true, optional: false, required: false
  public get copyPaste() {
    return this.getStringAttribute('copy_paste');
  }

  // deep_link - computed: true, optional: false, required: false
  private _deepLink = new DataZpaCloudBrowserIsolationExternalProfileSecurityControlsDeepLinkList(this, "deep_link", true);
  public get deepLink() {
    return this._deepLink;
  }

  // document_viewer - computed: true, optional: false, required: false
  public get documentViewer() {
    return this.getBooleanAttribute('document_viewer');
  }

  // flattened_pdf - computed: true, optional: false, required: false
  public get flattenedPdf() {
    return this.getBooleanAttribute('flattened_pdf');
  }

  // local_render - computed: true, optional: false, required: false
  public get localRender() {
    return this.getBooleanAttribute('local_render');
  }

  // restrict_keystrokes - computed: true, optional: false, required: false
  public get restrictKeystrokes() {
    return this.getBooleanAttribute('restrict_keystrokes');
  }

  // upload_download - computed: true, optional: false, required: false
  public get uploadDownload() {
    return this.getStringAttribute('upload_download');
  }

  // watermark - computed: true, optional: false, required: false
  private _watermark = new DataZpaCloudBrowserIsolationExternalProfileSecurityControlsWatermarkList(this, "watermark", true);
  public get watermark() {
    return this._watermark;
  }
}

export class DataZpaCloudBrowserIsolationExternalProfileSecurityControlsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaCloudBrowserIsolationExternalProfileSecurityControlsOutputReference {
    return new DataZpaCloudBrowserIsolationExternalProfileSecurityControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaCloudBrowserIsolationExternalProfileUserExperienceForwardToZia {
}

export function dataZpaCloudBrowserIsolationExternalProfileUserExperienceForwardToZiaToTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileUserExperienceForwardToZia): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaCloudBrowserIsolationExternalProfileUserExperienceForwardToZiaToHclTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileUserExperienceForwardToZia): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaCloudBrowserIsolationExternalProfileUserExperienceForwardToZiaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaCloudBrowserIsolationExternalProfileUserExperienceForwardToZia | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaCloudBrowserIsolationExternalProfileUserExperienceForwardToZia | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // pac_file_url - computed: true, optional: false, required: false
  public get pacFileUrl() {
    return this.getStringAttribute('pac_file_url');
  }
}

export class DataZpaCloudBrowserIsolationExternalProfileUserExperienceForwardToZiaList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaCloudBrowserIsolationExternalProfileUserExperienceForwardToZiaOutputReference {
    return new DataZpaCloudBrowserIsolationExternalProfileUserExperienceForwardToZiaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaCloudBrowserIsolationExternalProfileUserExperience {
}

export function dataZpaCloudBrowserIsolationExternalProfileUserExperienceToTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileUserExperience): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaCloudBrowserIsolationExternalProfileUserExperienceToHclTerraform(struct?: DataZpaCloudBrowserIsolationExternalProfileUserExperience): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaCloudBrowserIsolationExternalProfileUserExperienceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaCloudBrowserIsolationExternalProfileUserExperience | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaCloudBrowserIsolationExternalProfileUserExperience | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // browser_in_browser - computed: true, optional: false, required: false
  public get browserInBrowser() {
    return this.getBooleanAttribute('browser_in_browser');
  }

  // forward_to_zia - computed: true, optional: false, required: false
  private _forwardToZia = new DataZpaCloudBrowserIsolationExternalProfileUserExperienceForwardToZiaList(this, "forward_to_zia", false);
  public get forwardToZia() {
    return this._forwardToZia;
  }

  // persist_isolation_bar - computed: true, optional: false, required: false
  public get persistIsolationBar() {
    return this.getBooleanAttribute('persist_isolation_bar');
  }

  // session_persistence - computed: true, optional: false, required: false
  public get sessionPersistence() {
    return this.getBooleanAttribute('session_persistence');
  }

  // translate - computed: true, optional: false, required: false
  public get translate() {
    return this.getBooleanAttribute('translate');
  }

  // zgpu - computed: true, optional: false, required: false
  public get zgpu() {
    return this.getBooleanAttribute('zgpu');
  }
}

export class DataZpaCloudBrowserIsolationExternalProfileUserExperienceList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaCloudBrowserIsolationExternalProfileUserExperienceOutputReference {
    return new DataZpaCloudBrowserIsolationExternalProfileUserExperienceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/cloud_browser_isolation_external_profile zpa_cloud_browser_isolation_external_profile}
*/
export class DataZpaCloudBrowserIsolationExternalProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_cloud_browser_isolation_external_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaCloudBrowserIsolationExternalProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaCloudBrowserIsolationExternalProfile to import
  * @param importFromId The id of the existing DataZpaCloudBrowserIsolationExternalProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/cloud_browser_isolation_external_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaCloudBrowserIsolationExternalProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_cloud_browser_isolation_external_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/cloud_browser_isolation_external_profile zpa_cloud_browser_isolation_external_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaCloudBrowserIsolationExternalProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaCloudBrowserIsolationExternalProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_cloud_browser_isolation_external_profile',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.4',
        providerVersionConstraint: '4.3.4'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // banner_id - computed: true, optional: false, required: false
  public get bannerId() {
    return this.getStringAttribute('banner_id');
  }

  // certificate_ids - computed: true, optional: false, required: false
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }

  // debug_mode - computed: true, optional: false, required: false
  private _debugMode = new DataZpaCloudBrowserIsolationExternalProfileDebugModeList(this, "debug_mode", true);
  public get debugMode() {
    return this._debugMode;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: false, optional: true, required: false
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
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

  // regions - computed: true, optional: false, required: false
  private _regions = new DataZpaCloudBrowserIsolationExternalProfileRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }

  // security_controls - computed: true, optional: false, required: false
  private _securityControls = new DataZpaCloudBrowserIsolationExternalProfileSecurityControlsList(this, "security_controls", true);
  public get securityControls() {
    return this._securityControls;
  }

  // user_experience - computed: true, optional: false, required: false
  private _userExperience = new DataZpaCloudBrowserIsolationExternalProfileUserExperienceList(this, "user_experience", true);
  public get userExperience() {
    return this._userExperience;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
