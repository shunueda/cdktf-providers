// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_profile_updates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NpaPublishersBulkProfileUpdatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_profile_updates#publishers NpaPublishersBulkProfileUpdates#publishers}
  */
  readonly publishers?: NpaPublishersBulkProfileUpdatesPublishers;
}
export interface NpaPublishersBulkProfileUpdatesDataPublishersAssessmentCaCertsStatus {
}

export function npaPublishersBulkProfileUpdatesDataPublishersAssessmentCaCertsStatusToTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishersAssessmentCaCertsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkProfileUpdatesDataPublishersAssessmentCaCertsStatusToHclTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishersAssessmentCaCertsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkProfileUpdatesDataPublishersAssessmentCaCertsStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkProfileUpdatesDataPublishersAssessmentCaCertsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkProfileUpdatesDataPublishersAssessmentCaCertsStatus | undefined) {
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
export interface NpaPublishersBulkProfileUpdatesDataPublishersAssessment {
}

export function npaPublishersBulkProfileUpdatesDataPublishersAssessmentToTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishersAssessment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkProfileUpdatesDataPublishersAssessmentToHclTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishersAssessment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkProfileUpdatesDataPublishersAssessmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkProfileUpdatesDataPublishersAssessment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkProfileUpdatesDataPublishersAssessment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs_status - computed: true, optional: false, required: false
  private _caCertsStatus = new NpaPublishersBulkProfileUpdatesDataPublishersAssessmentCaCertsStatusOutputReference(this, "ca_certs_status");
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
export interface NpaPublishersBulkProfileUpdatesDataPublishersCapabilitiesPullNsconfig {
}

export function npaPublishersBulkProfileUpdatesDataPublishersCapabilitiesPullNsconfigToTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishersCapabilitiesPullNsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkProfileUpdatesDataPublishersCapabilitiesPullNsconfigToHclTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishersCapabilitiesPullNsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkProfileUpdatesDataPublishersCapabilitiesPullNsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkProfileUpdatesDataPublishersCapabilitiesPullNsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkProfileUpdatesDataPublishersCapabilitiesPullNsconfig | undefined) {
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
export interface NpaPublishersBulkProfileUpdatesDataPublishersCapabilities {
}

export function npaPublishersBulkProfileUpdatesDataPublishersCapabilitiesToTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishersCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkProfileUpdatesDataPublishersCapabilitiesToHclTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishersCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkProfileUpdatesDataPublishersCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkProfileUpdatesDataPublishersCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkProfileUpdatesDataPublishersCapabilities | undefined) {
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
  private _pullNsconfig = new NpaPublishersBulkProfileUpdatesDataPublishersCapabilitiesPullNsconfigOutputReference(this, "pull_nsconfig");
  public get pullNsconfig() {
    return this._pullNsconfig;
  }
}
export interface NpaPublishersBulkProfileUpdatesDataPublishersUpgradeFailedReason {
}

export function npaPublishersBulkProfileUpdatesDataPublishersUpgradeFailedReasonToTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishersUpgradeFailedReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkProfileUpdatesDataPublishersUpgradeFailedReasonToHclTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishersUpgradeFailedReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkProfileUpdatesDataPublishersUpgradeFailedReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkProfileUpdatesDataPublishersUpgradeFailedReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkProfileUpdatesDataPublishersUpgradeFailedReason | undefined) {
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
export interface NpaPublishersBulkProfileUpdatesDataPublishersUpgradeStatus {
}

export function npaPublishersBulkProfileUpdatesDataPublishersUpgradeStatusToTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishersUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkProfileUpdatesDataPublishersUpgradeStatusToHclTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishersUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkProfileUpdatesDataPublishersUpgradeStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkProfileUpdatesDataPublishersUpgradeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkProfileUpdatesDataPublishersUpgradeStatus | undefined) {
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
export interface NpaPublishersBulkProfileUpdatesDataPublishers {
}

export function npaPublishersBulkProfileUpdatesDataPublishersToTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkProfileUpdatesDataPublishersToHclTerraform(struct?: NpaPublishersBulkProfileUpdatesDataPublishers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkProfileUpdatesDataPublishersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NpaPublishersBulkProfileUpdatesDataPublishers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkProfileUpdatesDataPublishers | undefined) {
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
  private _assessment = new NpaPublishersBulkProfileUpdatesDataPublishersAssessmentOutputReference(this, "assessment");
  public get assessment() {
    return this._assessment;
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new NpaPublishersBulkProfileUpdatesDataPublishersCapabilitiesOutputReference(this, "capabilities");
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // publisher_id - computed: true, optional: false, required: false
  public get publisherId() {
    return this.getNumberAttribute('publisher_id');
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

  // sticher_pop - computed: true, optional: false, required: false
  public get sticherPop() {
    return this.getStringAttribute('sticher_pop');
  }

  // stitcher_id - computed: true, optional: false, required: false
  public get stitcherId() {
    return this.getNumberAttribute('stitcher_id');
  }

  // upgrade_failed_reason - computed: true, optional: false, required: false
  private _upgradeFailedReason = new NpaPublishersBulkProfileUpdatesDataPublishersUpgradeFailedReasonOutputReference(this, "upgrade_failed_reason");
  public get upgradeFailedReason() {
    return this._upgradeFailedReason;
  }

  // upgrade_request - computed: true, optional: false, required: false
  public get upgradeRequest() {
    return this.getBooleanAttribute('upgrade_request');
  }

  // upgrade_status - computed: true, optional: false, required: false
  private _upgradeStatus = new NpaPublishersBulkProfileUpdatesDataPublishersUpgradeStatusOutputReference(this, "upgrade_status");
  public get upgradeStatus() {
    return this._upgradeStatus;
  }
}

export class NpaPublishersBulkProfileUpdatesDataPublishersList extends cdktf.ComplexList {

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
  public get(index: number): NpaPublishersBulkProfileUpdatesDataPublishersOutputReference {
    return new NpaPublishersBulkProfileUpdatesDataPublishersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NpaPublishersBulkProfileUpdatesData {
}

export function npaPublishersBulkProfileUpdatesDataToTerraform(struct?: NpaPublishersBulkProfileUpdatesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublishersBulkProfileUpdatesDataToHclTerraform(struct?: NpaPublishersBulkProfileUpdatesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublishersBulkProfileUpdatesDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkProfileUpdatesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkProfileUpdatesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // publishers - computed: true, optional: false, required: false
  private _publishers = new NpaPublishersBulkProfileUpdatesDataPublishersList(this, "publishers", false);
  public get publishers() {
    return this._publishers;
  }
}
export interface NpaPublishersBulkProfileUpdatesPublishersApply {
  /**
  * Please use the `external_id` of the upgrade profile for this value. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_profile_updates#publisher_upgrade_profiles_id NpaPublishersBulkProfileUpdates#publisher_upgrade_profiles_id}
  */
  readonly publisherUpgradeProfilesId: string;
}

export function npaPublishersBulkProfileUpdatesPublishersApplyToTerraform(struct?: NpaPublishersBulkProfileUpdatesPublishersApply | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    publisher_upgrade_profiles_id: cdktf.stringToTerraform(struct!.publisherUpgradeProfilesId),
  }
}


export function npaPublishersBulkProfileUpdatesPublishersApplyToHclTerraform(struct?: NpaPublishersBulkProfileUpdatesPublishersApply | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    publisher_upgrade_profiles_id: {
      value: cdktf.stringToHclTerraform(struct!.publisherUpgradeProfilesId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaPublishersBulkProfileUpdatesPublishersApplyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkProfileUpdatesPublishersApply | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publisherUpgradeProfilesId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisherUpgradeProfilesId = this._publisherUpgradeProfilesId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublishersBulkProfileUpdatesPublishersApply | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publisherUpgradeProfilesId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publisherUpgradeProfilesId = value.publisherUpgradeProfilesId;
    }
  }

  // publisher_upgrade_profiles_id - computed: false, optional: false, required: true
  private _publisherUpgradeProfilesId?: string; 
  public get publisherUpgradeProfilesId() {
    return this.getStringAttribute('publisher_upgrade_profiles_id');
  }
  public set publisherUpgradeProfilesId(value: string) {
    this._publisherUpgradeProfilesId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherUpgradeProfilesIdInput() {
    return this._publisherUpgradeProfilesId;
  }
}
export interface NpaPublishersBulkProfileUpdatesPublishers {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_profile_updates#apply NpaPublishersBulkProfileUpdates#apply}
  */
  readonly apply?: NpaPublishersBulkProfileUpdatesPublishersApply;
  /**
  * This is an array of publisher `id` values. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_profile_updates#publisher_id NpaPublishersBulkProfileUpdates#publisher_id}
  */
  readonly publisherId: string[];
}

export function npaPublishersBulkProfileUpdatesPublishersToTerraform(struct?: NpaPublishersBulkProfileUpdatesPublishers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply: npaPublishersBulkProfileUpdatesPublishersApplyToTerraform(struct!.apply),
    publisher_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publisherId),
  }
}


export function npaPublishersBulkProfileUpdatesPublishersToHclTerraform(struct?: NpaPublishersBulkProfileUpdatesPublishers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply: {
      value: npaPublishersBulkProfileUpdatesPublishersApplyToHclTerraform(struct!.apply),
      isBlock: true,
      type: "struct",
      storageClassType: "NpaPublishersBulkProfileUpdatesPublishersApply",
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

export class NpaPublishersBulkProfileUpdatesPublishersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublishersBulkProfileUpdatesPublishers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NpaPublishersBulkProfileUpdatesPublishers | cdktf.IResolvable | undefined) {
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
  private _apply = new NpaPublishersBulkProfileUpdatesPublishersApplyOutputReference(this, "apply");
  public get apply() {
    return this._apply;
  }
  public putApply(value: NpaPublishersBulkProfileUpdatesPublishersApply) {
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
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_profile_updates netskope_npa_publishers_bulk_profile_updates}
*/
export class NpaPublishersBulkProfileUpdates extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_publishers_bulk_profile_updates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NpaPublishersBulkProfileUpdates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NpaPublishersBulkProfileUpdates to import
  * @param importFromId The id of the existing NpaPublishersBulkProfileUpdates that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_profile_updates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NpaPublishersBulkProfileUpdates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_publishers_bulk_profile_updates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publishers_bulk_profile_updates netskope_npa_publishers_bulk_profile_updates} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NpaPublishersBulkProfileUpdatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NpaPublishersBulkProfileUpdatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_publishers_bulk_profile_updates',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2'
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
  private _data = new NpaPublishersBulkProfileUpdatesDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }

  // publishers - computed: false, optional: true, required: false
  private _publishers = new NpaPublishersBulkProfileUpdatesPublishersOutputReference(this, "publishers");
  public get publishers() {
    return this._publishers;
  }
  public putPublishers(value: NpaPublishersBulkProfileUpdatesPublishers) {
    this._publishers.internalValue = value;
  }
  public resetPublishers() {
    this._publishers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishersInput() {
    return this._publishers.internalValue;
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      publishers: npaPublishersBulkProfileUpdatesPublishersToTerraform(this._publishers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      publishers: {
        value: npaPublishersBulkProfileUpdatesPublishersToHclTerraform(this._publishers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NpaPublishersBulkProfileUpdatesPublishers",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
