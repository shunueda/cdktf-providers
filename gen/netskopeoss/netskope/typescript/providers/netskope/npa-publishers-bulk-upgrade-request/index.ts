// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_upgrade_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NpaPublishersBulkUpgradeRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_upgrade_request#publishers NpaPublishersBulkUpgradeRequest#publishers}
  */
  readonly publishers?: NpaPublishersBulkUpgradeRequestPublishers;
}
export interface NpaPublishersBulkUpgradeRequestDataPublishersAssessmentCaCertsStatus {
}

export function npaPublishersBulkUpgradeRequestDataPublishersAssessmentCaCertsStatusToTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishersAssessmentCaCertsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkUpgradeRequestDataPublishersAssessmentCaCertsStatusToHclTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishersAssessmentCaCertsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkUpgradeRequestDataPublishersAssessmentCaCertsStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkUpgradeRequestDataPublishersAssessmentCaCertsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkUpgradeRequestDataPublishersAssessmentCaCertsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hashes - computed: true, optional: false, required: false
  public get hashes() {
    return this.getListAttribute('hashes');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
  }
}
export interface NpaPublishersBulkUpgradeRequestDataPublishersAssessment {
}

export function npaPublishersBulkUpgradeRequestDataPublishersAssessmentToTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishersAssessment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkUpgradeRequestDataPublishersAssessmentToHclTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishersAssessment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkUpgradeRequestDataPublishersAssessmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkUpgradeRequestDataPublishersAssessment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkUpgradeRequestDataPublishersAssessment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs_status - computed: true, optional: false, required: false
  private _caCertsStatus = new NpaPublishersBulkUpgradeRequestDataPublishersAssessmentCaCertsStatusOutputReference(this, "ca_certs_status");
  public get caCertsStatus() {
    return this._caCertsStatus;
  }

  // eee_support - computed: true, optional: false, required: false
  public get eeeSupport() {
    return this.getBooleanAttribute('eee_support');
  }

  // hdd_free - computed: true, optional: false, required: false
  public get hddFree() {
    return this.getStringAttribute('hdd_free');
  }

  // hdd_total - computed: true, optional: false, required: false
  public get hddTotal() {
    return this.getStringAttribute('hdd_total');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // latency - computed: true, optional: false, required: false
  public get latency() {
    return this.getNumberAttribute('latency');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface NpaPublishersBulkUpgradeRequestDataPublishersCapabilitiesPullNsconfig {
}

export function npaPublishersBulkUpgradeRequestDataPublishersCapabilitiesPullNsconfigToTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishersCapabilitiesPullNsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkUpgradeRequestDataPublishersCapabilitiesPullNsconfigToHclTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishersCapabilitiesPullNsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkUpgradeRequestDataPublishersCapabilitiesPullNsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkUpgradeRequestDataPublishersCapabilitiesPullNsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkUpgradeRequestDataPublishersCapabilitiesPullNsconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // orgkey_exist - computed: true, optional: false, required: false
  public get orgkeyExist() {
    return this.getBooleanAttribute('orgkey_exist');
  }

  // orguri_exist - computed: true, optional: false, required: false
  public get orguriExist() {
    return this.getBooleanAttribute('orguri_exist');
  }
}
export interface NpaPublishersBulkUpgradeRequestDataPublishersCapabilities {
}

export function npaPublishersBulkUpgradeRequestDataPublishersCapabilitiesToTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishersCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkUpgradeRequestDataPublishersCapabilitiesToHclTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishersCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkUpgradeRequestDataPublishersCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkUpgradeRequestDataPublishersCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkUpgradeRequestDataPublishersCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_upgrade - computed: true, optional: false, required: false
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }

  // dtls - computed: true, optional: false, required: false
  public get dtls() {
    return this.getBooleanAttribute('dtls');
  }

  // eee - computed: true, optional: false, required: false
  public get eee() {
    return this.getBooleanAttribute('eee');
  }

  // nwa_ba - computed: true, optional: false, required: false
  public get nwaBa() {
    return this.getBooleanAttribute('nwa_ba');
  }

  // pull_nsconfig - computed: true, optional: false, required: false
  private _pullNsconfig = new NpaPublishersBulkUpgradeRequestDataPublishersCapabilitiesPullNsconfigOutputReference(this, "pull_nsconfig");
  public get pullNsconfig() {
    return this._pullNsconfig;
  }
}
export interface NpaPublishersBulkUpgradeRequestDataPublishersUpgradeFailedReason {
}

export function npaPublishersBulkUpgradeRequestDataPublishersUpgradeFailedReasonToTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishersUpgradeFailedReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkUpgradeRequestDataPublishersUpgradeFailedReasonToHclTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishersUpgradeFailedReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkUpgradeRequestDataPublishersUpgradeFailedReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkUpgradeRequestDataPublishersUpgradeFailedReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkUpgradeRequestDataPublishersUpgradeFailedReason | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface NpaPublishersBulkUpgradeRequestDataPublishersUpgradeStatus {
}

export function npaPublishersBulkUpgradeRequestDataPublishersUpgradeStatusToTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishersUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkUpgradeRequestDataPublishersUpgradeStatusToHclTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishersUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkUpgradeRequestDataPublishersUpgradeStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkUpgradeRequestDataPublishersUpgradeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkUpgradeRequestDataPublishersUpgradeStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // upstat - computed: true, optional: false, required: false
  public get upstat() {
    return this.getStringAttribute('upstat');
  }
}
export interface NpaPublishersBulkUpgradeRequestDataPublishers {
}

export function npaPublishersBulkUpgradeRequestDataPublishersToTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkUpgradeRequestDataPublishersToHclTerraform(struct?: NpaPublishersBulkUpgradeRequestDataPublishers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkUpgradeRequestDataPublishersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NpaPublishersBulkUpgradeRequestDataPublishers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkUpgradeRequestDataPublishers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apps_count - computed: true, optional: false, required: false
  public get appsCount() {
    return this.getNumberAttribute('apps_count');
  }

  // assessment - computed: true, optional: false, required: false
  private _assessment = new NpaPublishersBulkUpgradeRequestDataPublishersAssessmentOutputReference(this, "assessment");
  public get assessment() {
    return this._assessment;
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new NpaPublishersBulkUpgradeRequestDataPublishersCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // connected_apps - computed: true, optional: false, required: false
  public get connectedApps() {
    return this.getListAttribute('connected_apps');
  }

  // lbrokerconnect - computed: true, optional: false, required: false
  public get lbrokerconnect() {
    return this.getBooleanAttribute('lbrokerconnect');
  }

  // publisher_id - computed: true, optional: false, required: false
  public get publisherId() {
    return this.getNumberAttribute('publisher_id');
  }

  // publisher_name - computed: true, optional: false, required: false
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }

  // publisher_upgrade_profiles_id - computed: true, optional: false, required: false
  public get publisherUpgradeProfilesId() {
    return this.getNumberAttribute('publisher_upgrade_profiles_id');
  }

  // registered - computed: true, optional: false, required: false
  public get registered() {
    return this.getBooleanAttribute('registered');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stitcher_id - computed: true, optional: false, required: false
  public get stitcherId() {
    return this.getNumberAttribute('stitcher_id');
  }

  // stitcher_pop - computed: true, optional: false, required: false
  public get stitcherPop() {
    return this.getStringAttribute('stitcher_pop');
  }

  // upgrade_failed_reason - computed: true, optional: false, required: false
  private _upgradeFailedReason = new NpaPublishersBulkUpgradeRequestDataPublishersUpgradeFailedReasonOutputReference(this, "upgrade_failed_reason");
  public get upgradeFailedReason() {
    return this._upgradeFailedReason;
  }

  // upgrade_request - computed: true, optional: false, required: false
  public get upgradeRequest() {
    return this.getBooleanAttribute('upgrade_request');
  }

  // upgrade_status - computed: true, optional: false, required: false
  private _upgradeStatus = new NpaPublishersBulkUpgradeRequestDataPublishersUpgradeStatusOutputReference(this, "upgrade_status");
  public get upgradeStatus() {
    return this._upgradeStatus;
  }
}

export class NpaPublishersBulkUpgradeRequestDataPublishersList extends cdktf.ComplexList {

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
  public get(index: number): NpaPublishersBulkUpgradeRequestDataPublishersOutputReference {
    return new NpaPublishersBulkUpgradeRequestDataPublishersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NpaPublishersBulkUpgradeRequestData {
}

export function npaPublishersBulkUpgradeRequestDataToTerraform(struct?: NpaPublishersBulkUpgradeRequestData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkUpgradeRequestDataToHclTerraform(struct?: NpaPublishersBulkUpgradeRequestData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkUpgradeRequestDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkUpgradeRequestData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkUpgradeRequestData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // publishers - computed: true, optional: false, required: false
  private _publishers = new NpaPublishersBulkUpgradeRequestDataPublishersList(this, "publishers", false);
  public get publishers() {
    return this._publishers;
  }
}
export interface NpaPublishersBulkUpgradeRequestPublishersApply {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_upgrade_request#upgrade_request NpaPublishersBulkUpgradeRequest#upgrade_request}
  */
  readonly upgradeRequest: boolean | cdktf.IResolvable;
}

export function npaPublishersBulkUpgradeRequestPublishersApplyToTerraform(struct?: NpaPublishersBulkUpgradeRequestPublishersApply | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upgrade_request: cdktf.booleanToTerraform(struct!.upgradeRequest),
  }
}


export function npaPublishersBulkUpgradeRequestPublishersApplyToHclTerraform(struct?: NpaPublishersBulkUpgradeRequestPublishersApply | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    upgrade_request: {
      value: cdktf.booleanToHclTerraform(struct!.upgradeRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaPublishersBulkUpgradeRequestPublishersApplyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkUpgradeRequestPublishersApply | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upgradeRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeRequest = this._upgradeRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkUpgradeRequestPublishersApply | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._upgradeRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._upgradeRequest = value.upgradeRequest;
    }
  }

  // upgrade_request - computed: false, optional: false, required: true
  private _upgradeRequest?: boolean | cdktf.IResolvable; 
  public get upgradeRequest() {
    return this.getBooleanAttribute('upgrade_request');
  }
  public set upgradeRequest(value: boolean | cdktf.IResolvable) {
    this._upgradeRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeRequestInput() {
    return this._upgradeRequest;
  }
}
export interface NpaPublishersBulkUpgradeRequestPublishers {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_upgrade_request#apply NpaPublishersBulkUpgradeRequest#apply}
  */
  readonly apply?: NpaPublishersBulkUpgradeRequestPublishersApply;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_upgrade_request#publisher_id NpaPublishersBulkUpgradeRequest#publisher_id}
  */
  readonly publisherId: string[];
}

export function npaPublishersBulkUpgradeRequestPublishersToTerraform(struct?: NpaPublishersBulkUpgradeRequestPublishers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply: npaPublishersBulkUpgradeRequestPublishersApplyToTerraform(struct!.apply),
    publisher_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publisherId),
  }
}


export function npaPublishersBulkUpgradeRequestPublishersToHclTerraform(struct?: NpaPublishersBulkUpgradeRequestPublishers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply: {
      value: npaPublishersBulkUpgradeRequestPublishersApplyToHclTerraform(struct!.apply),
      isBlock: true,
      type: "struct",
      storageClassType: "NpaPublishersBulkUpgradeRequestPublishersApply",
    },
    publisher_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.publisherId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaPublishersBulkUpgradeRequestPublishersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkUpgradeRequestPublishers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apply?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apply = this._apply?.internalValue;
    }
    if (this._publisherId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisherId = this._publisherId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkUpgradeRequestPublishers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apply.internalValue = undefined;
      this._publisherId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apply.internalValue = value.apply;
      this._publisherId = value.publisherId;
    }
  }

  // apply - computed: false, optional: true, required: false
  private _apply = new NpaPublishersBulkUpgradeRequestPublishersApplyOutputReference(this, "apply");
  public get apply() {
    return this._apply;
  }
  public putApply(value: NpaPublishersBulkUpgradeRequestPublishersApply) {
    this._apply.internalValue = value;
  }
  public resetApply() {
    this._apply.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply.internalValue;
  }

  // publisher_id - computed: false, optional: false, required: true
  private _publisherId?: string[]; 
  public get publisherId() {
    return this.getListAttribute('publisher_id');
  }
  public set publisherId(value: string[]) {
    this._publisherId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherIdInput() {
    return this._publisherId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_upgrade_request netskope_npa_publishers_bulk_upgrade_request}
*/
export class NpaPublishersBulkUpgradeRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_publishers_bulk_upgrade_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NpaPublishersBulkUpgradeRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NpaPublishersBulkUpgradeRequest to import
  * @param importFromId The id of the existing NpaPublishersBulkUpgradeRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_upgrade_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NpaPublishersBulkUpgradeRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_publishers_bulk_upgrade_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_upgrade_request netskope_npa_publishers_bulk_upgrade_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NpaPublishersBulkUpgradeRequestConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NpaPublishersBulkUpgradeRequestConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_publishers_bulk_upgrade_request',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._publishers.internalValue = config.publishers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new NpaPublishersBulkUpgradeRequestDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }

  // publishers - computed: false, optional: true, required: false
  private _publishers = new NpaPublishersBulkUpgradeRequestPublishersOutputReference(this, "publishers");
  public get publishers() {
    return this._publishers;
  }
  public putPublishers(value: NpaPublishersBulkUpgradeRequestPublishers) {
    this._publishers.internalValue = value;
  }
  public resetPublishers() {
    this._publishers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishersInput() {
    return this._publishers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      publishers: npaPublishersBulkUpgradeRequestPublishersToTerraform(this._publishers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      publishers: {
        value: npaPublishersBulkUpgradeRequestPublishersToHclTerraform(this._publishers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NpaPublishersBulkUpgradeRequestPublishers",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
