// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publishers_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopeNpaPublishersListConfig extends cdktf.TerraformMetaArguments {
}
export interface DataNetskopeNpaPublishersListDataPublishersAssessmentCaCertsStatus {
}

export function dataNetskopeNpaPublishersListDataPublishersAssessmentCaCertsStatusToTerraform(struct?: DataNetskopeNpaPublishersListDataPublishersAssessmentCaCertsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublishersListDataPublishersAssessmentCaCertsStatusToHclTerraform(struct?: DataNetskopeNpaPublishersListDataPublishersAssessmentCaCertsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublishersListDataPublishersAssessmentCaCertsStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublishersListDataPublishersAssessmentCaCertsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublishersListDataPublishersAssessmentCaCertsStatus | undefined) {
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
export interface DataNetskopeNpaPublishersListDataPublishersAssessment {
}

export function dataNetskopeNpaPublishersListDataPublishersAssessmentToTerraform(struct?: DataNetskopeNpaPublishersListDataPublishersAssessment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublishersListDataPublishersAssessmentToHclTerraform(struct?: DataNetskopeNpaPublishersListDataPublishersAssessment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublishersListDataPublishersAssessmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublishersListDataPublishersAssessment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublishersListDataPublishersAssessment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs_status - computed: true, optional: false, required: false
  private _caCertsStatus = new DataNetskopeNpaPublishersListDataPublishersAssessmentCaCertsStatusOutputReference(this, "ca_certs_status");
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
export interface DataNetskopeNpaPublishersListDataPublishersCapabilitiesPullNsconfig {
}

export function dataNetskopeNpaPublishersListDataPublishersCapabilitiesPullNsconfigToTerraform(struct?: DataNetskopeNpaPublishersListDataPublishersCapabilitiesPullNsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublishersListDataPublishersCapabilitiesPullNsconfigToHclTerraform(struct?: DataNetskopeNpaPublishersListDataPublishersCapabilitiesPullNsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublishersListDataPublishersCapabilitiesPullNsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublishersListDataPublishersCapabilitiesPullNsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublishersListDataPublishersCapabilitiesPullNsconfig | undefined) {
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
export interface DataNetskopeNpaPublishersListDataPublishersCapabilities {
}

export function dataNetskopeNpaPublishersListDataPublishersCapabilitiesToTerraform(struct?: DataNetskopeNpaPublishersListDataPublishersCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublishersListDataPublishersCapabilitiesToHclTerraform(struct?: DataNetskopeNpaPublishersListDataPublishersCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublishersListDataPublishersCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublishersListDataPublishersCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublishersListDataPublishersCapabilities | undefined) {
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
  private _pullNsconfig = new DataNetskopeNpaPublishersListDataPublishersCapabilitiesPullNsconfigOutputReference(this, "pull_nsconfig");
  public get pullNsconfig() {
    return this._pullNsconfig;
  }
}
export interface DataNetskopeNpaPublishersListDataPublishersUpgradeFailedReason {
}

export function dataNetskopeNpaPublishersListDataPublishersUpgradeFailedReasonToTerraform(struct?: DataNetskopeNpaPublishersListDataPublishersUpgradeFailedReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublishersListDataPublishersUpgradeFailedReasonToHclTerraform(struct?: DataNetskopeNpaPublishersListDataPublishersUpgradeFailedReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublishersListDataPublishersUpgradeFailedReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublishersListDataPublishersUpgradeFailedReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublishersListDataPublishersUpgradeFailedReason | undefined) {
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
export interface DataNetskopeNpaPublishersListDataPublishersUpgradeStatus {
}

export function dataNetskopeNpaPublishersListDataPublishersUpgradeStatusToTerraform(struct?: DataNetskopeNpaPublishersListDataPublishersUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublishersListDataPublishersUpgradeStatusToHclTerraform(struct?: DataNetskopeNpaPublishersListDataPublishersUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublishersListDataPublishersUpgradeStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublishersListDataPublishersUpgradeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublishersListDataPublishersUpgradeStatus | undefined) {
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
export interface DataNetskopeNpaPublishersListDataPublishers {
}

export function dataNetskopeNpaPublishersListDataPublishersToTerraform(struct?: DataNetskopeNpaPublishersListDataPublishers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublishersListDataPublishersToHclTerraform(struct?: DataNetskopeNpaPublishersListDataPublishers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublishersListDataPublishersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPublishersListDataPublishers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublishersListDataPublishers | undefined) {
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
  private _assessment = new DataNetskopeNpaPublishersListDataPublishersAssessmentOutputReference(this, "assessment");
  public get assessment() {
    return this._assessment;
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new DataNetskopeNpaPublishersListDataPublishersCapabilitiesOutputReference(this, "capabilities");
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

  // publisher_upgrade_profile_id - computed: true, optional: false, required: false
  public get publisherUpgradeProfileId() {
    return this.getNumberAttribute('publisher_upgrade_profile_id');
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
  private _upgradeFailedReason = new DataNetskopeNpaPublishersListDataPublishersUpgradeFailedReasonOutputReference(this, "upgrade_failed_reason");
  public get upgradeFailedReason() {
    return this._upgradeFailedReason;
  }

  // upgrade_request - computed: true, optional: false, required: false
  public get upgradeRequest() {
    return this.getBooleanAttribute('upgrade_request');
  }

  // upgrade_status - computed: true, optional: false, required: false
  private _upgradeStatus = new DataNetskopeNpaPublishersListDataPublishersUpgradeStatusOutputReference(this, "upgrade_status");
  public get upgradeStatus() {
    return this._upgradeStatus;
  }
}

export class DataNetskopeNpaPublishersListDataPublishersList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPublishersListDataPublishersOutputReference {
    return new DataNetskopeNpaPublishersListDataPublishersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaPublishersListData {
}

export function dataNetskopeNpaPublishersListDataToTerraform(struct?: DataNetskopeNpaPublishersListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublishersListDataToHclTerraform(struct?: DataNetskopeNpaPublishersListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublishersListDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublishersListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublishersListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // publishers - computed: true, optional: false, required: false
  private _publishers = new DataNetskopeNpaPublishersListDataPublishersList(this, "publishers", false);
  public get publishers() {
    return this._publishers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publishers_list netskope_npa_publishers_list}
*/
export class DataNetskopeNpaPublishersList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_publishers_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopeNpaPublishersList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopeNpaPublishersList to import
  * @param importFromId The id of the existing DataNetskopeNpaPublishersList that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publishers_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopeNpaPublishersList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_publishers_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publishers_list netskope_npa_publishers_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopeNpaPublishersListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetskopeNpaPublishersListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_publishers_list',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataNetskopeNpaPublishersListDataOutputReference(this, "data");
  public get data() {
    return this._data;
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
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
