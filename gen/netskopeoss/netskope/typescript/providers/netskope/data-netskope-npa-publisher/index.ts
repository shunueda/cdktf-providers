// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopeNpaPublisherConfig extends cdktf.TerraformMetaArguments {
  /**
  * publisher id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher#publisher_id DataNetskopeNpaPublisher#publisher_id}
  */
  readonly publisherId: number;
}
export interface DataNetskopeNpaPublisherAssessmentCaCertsStatus {
}

export function dataNetskopeNpaPublisherAssessmentCaCertsStatusToTerraform(struct?: DataNetskopeNpaPublisherAssessmentCaCertsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherAssessmentCaCertsStatusToHclTerraform(struct?: DataNetskopeNpaPublisherAssessmentCaCertsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherAssessmentCaCertsStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublisherAssessmentCaCertsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherAssessmentCaCertsStatus | undefined) {
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
export interface DataNetskopeNpaPublisherAssessment {
}

export function dataNetskopeNpaPublisherAssessmentToTerraform(struct?: DataNetskopeNpaPublisherAssessment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherAssessmentToHclTerraform(struct?: DataNetskopeNpaPublisherAssessment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherAssessmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublisherAssessment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherAssessment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs_status - computed: true, optional: false, required: false
  private _caCertsStatus = new DataNetskopeNpaPublisherAssessmentCaCertsStatusOutputReference(this, "ca_certs_status");
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
export interface DataNetskopeNpaPublisherCapabilitiesPullNsconfig {
}

export function dataNetskopeNpaPublisherCapabilitiesPullNsconfigToTerraform(struct?: DataNetskopeNpaPublisherCapabilitiesPullNsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherCapabilitiesPullNsconfigToHclTerraform(struct?: DataNetskopeNpaPublisherCapabilitiesPullNsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherCapabilitiesPullNsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublisherCapabilitiesPullNsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherCapabilitiesPullNsconfig | undefined) {
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
export interface DataNetskopeNpaPublisherCapabilities {
}

export function dataNetskopeNpaPublisherCapabilitiesToTerraform(struct?: DataNetskopeNpaPublisherCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherCapabilitiesToHclTerraform(struct?: DataNetskopeNpaPublisherCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublisherCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherCapabilities | undefined) {
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
  private _pullNsconfig = new DataNetskopeNpaPublisherCapabilitiesPullNsconfigOutputReference(this, "pull_nsconfig");
  public get pullNsconfig() {
    return this._pullNsconfig;
  }
}
export interface DataNetskopeNpaPublisherUpgradeFailedReason {
}

export function dataNetskopeNpaPublisherUpgradeFailedReasonToTerraform(struct?: DataNetskopeNpaPublisherUpgradeFailedReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherUpgradeFailedReasonToHclTerraform(struct?: DataNetskopeNpaPublisherUpgradeFailedReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherUpgradeFailedReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublisherUpgradeFailedReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherUpgradeFailedReason | undefined) {
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
export interface DataNetskopeNpaPublisherUpgradeStatus {
}

export function dataNetskopeNpaPublisherUpgradeStatusToTerraform(struct?: DataNetskopeNpaPublisherUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPublisherUpgradeStatusToHclTerraform(struct?: DataNetskopeNpaPublisherUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPublisherUpgradeStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaPublisherUpgradeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPublisherUpgradeStatus | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher netskope_npa_publisher}
*/
export class DataNetskopeNpaPublisher extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_publisher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopeNpaPublisher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopeNpaPublisher to import
  * @param importFromId The id of the existing DataNetskopeNpaPublisher that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopeNpaPublisher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_publisher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publisher netskope_npa_publisher} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopeNpaPublisherConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetskopeNpaPublisherConfig) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_publisher',
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
    this._publisherId = config.publisherId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apps_count - computed: true, optional: false, required: false
  public get appsCount() {
    return this.getNumberAttribute('apps_count');
  }

  // assessment - computed: true, optional: false, required: false
  private _assessment = new DataNetskopeNpaPublisherAssessmentOutputReference(this, "assessment");
  public get assessment() {
    return this._assessment;
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new DataNetskopeNpaPublisherCapabilitiesOutputReference(this, "capabilities");
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

  // publisher_id - computed: false, optional: false, required: true
  private _publisherId?: number; 
  public get publisherId() {
    return this.getNumberAttribute('publisher_id');
  }
  public set publisherId(value: number) {
    this._publisherId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherIdInput() {
    return this._publisherId;
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

  // sticher_pop - computed: true, optional: false, required: false
  public get sticherPop() {
    return this.getStringAttribute('sticher_pop');
  }

  // stitcher_id - computed: true, optional: false, required: false
  public get stitcherId() {
    return this.getNumberAttribute('stitcher_id');
  }

  // upgrade_failed_reason - computed: true, optional: false, required: false
  private _upgradeFailedReason = new DataNetskopeNpaPublisherUpgradeFailedReasonOutputReference(this, "upgrade_failed_reason");
  public get upgradeFailedReason() {
    return this._upgradeFailedReason;
  }

  // upgrade_request - computed: true, optional: false, required: false
  public get upgradeRequest() {
    return this.getBooleanAttribute('upgrade_request');
  }

  // upgrade_status - computed: true, optional: false, required: false
  private _upgradeStatus = new DataNetskopeNpaPublisherUpgradeStatusOutputReference(this, "upgrade_status");
  public get upgradeStatus() {
    return this._upgradeStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      publisher_id: cdktf.numberToTerraform(this._publisherId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      publisher_id: {
        value: cdktf.numberToHclTerraform(this._publisherId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
