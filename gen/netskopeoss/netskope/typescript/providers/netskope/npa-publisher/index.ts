// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NpaPublisherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow this publisher to be stitched to Local Broker. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher#lbrokerconnect NpaPublisher#lbrokerconnect}
  */
  readonly lbrokerconnect?: boolean | cdktf.IResolvable;
  /**
  * The name of the Publisher as seen in the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher#publisher_name NpaPublisher#publisher_name}
  */
  readonly publisherName: string;
  /**
  * The ID of the upgrade profile to manage this publisher. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher#publisher_upgrade_profiles_id NpaPublisher#publisher_upgrade_profiles_id}
  */
  readonly publisherUpgradeProfilesId?: number;
}
export interface NpaPublisherAssessmentCaCertsStatus {
}

export function npaPublisherAssessmentCaCertsStatusToTerraform(struct?: NpaPublisherAssessmentCaCertsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublisherAssessmentCaCertsStatusToHclTerraform(struct?: NpaPublisherAssessmentCaCertsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublisherAssessmentCaCertsStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublisherAssessmentCaCertsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublisherAssessmentCaCertsStatus | undefined) {
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
export interface NpaPublisherAssessment {
}

export function npaPublisherAssessmentToTerraform(struct?: NpaPublisherAssessment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublisherAssessmentToHclTerraform(struct?: NpaPublisherAssessment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublisherAssessmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublisherAssessment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublisherAssessment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs_status - computed: true, optional: false, required: false
  private _caCertsStatus = new NpaPublisherAssessmentCaCertsStatusOutputReference(this, "ca_certs_status");
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
export interface NpaPublisherCapabilitiesPullNsconfig {
}

export function npaPublisherCapabilitiesPullNsconfigToTerraform(struct?: NpaPublisherCapabilitiesPullNsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublisherCapabilitiesPullNsconfigToHclTerraform(struct?: NpaPublisherCapabilitiesPullNsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublisherCapabilitiesPullNsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublisherCapabilitiesPullNsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublisherCapabilitiesPullNsconfig | undefined) {
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
export interface NpaPublisherCapabilities {
}

export function npaPublisherCapabilitiesToTerraform(struct?: NpaPublisherCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublisherCapabilitiesToHclTerraform(struct?: NpaPublisherCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublisherCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublisherCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublisherCapabilities | undefined) {
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
  private _pullNsconfig = new NpaPublisherCapabilitiesPullNsconfigOutputReference(this, "pull_nsconfig");
  public get pullNsconfig() {
    return this._pullNsconfig;
  }
}
export interface NpaPublisherUpgradeFailedReason {
}

export function npaPublisherUpgradeFailedReasonToTerraform(struct?: NpaPublisherUpgradeFailedReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublisherUpgradeFailedReasonToHclTerraform(struct?: NpaPublisherUpgradeFailedReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublisherUpgradeFailedReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublisherUpgradeFailedReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublisherUpgradeFailedReason | undefined) {
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
export interface NpaPublisherUpgradeStatus {
}

export function npaPublisherUpgradeStatusToTerraform(struct?: NpaPublisherUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPublisherUpgradeStatusToHclTerraform(struct?: NpaPublisherUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPublisherUpgradeStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPublisherUpgradeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPublisherUpgradeStatus | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher netskope_npa_publisher}
*/
export class NpaPublisher extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_publisher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NpaPublisher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NpaPublisher to import
  * @param importFromId The id of the existing NpaPublisher that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NpaPublisher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_publisher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher netskope_npa_publisher} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NpaPublisherConfig
  */
  public constructor(scope: Construct, id: string, config: NpaPublisherConfig) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_publisher',
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
    this._lbrokerconnect = config.lbrokerconnect;
    this._publisherName = config.publisherName;
    this._publisherUpgradeProfilesId = config.publisherUpgradeProfilesId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apps_count - computed: true, optional: false, required: false
  public get appsCount() {
    return this.getNumberAttribute('apps_count');
  }

  // assessment - computed: true, optional: false, required: false
  private _assessment = new NpaPublisherAssessmentOutputReference(this, "assessment");
  public get assessment() {
    return this._assessment;
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new NpaPublisherCapabilitiesOutputReference(this, "capabilities");
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

  // lbrokerconnect - computed: true, optional: true, required: false
  private _lbrokerconnect?: boolean | cdktf.IResolvable; 
  public get lbrokerconnect() {
    return this.getBooleanAttribute('lbrokerconnect');
  }
  public set lbrokerconnect(value: boolean | cdktf.IResolvable) {
    this._lbrokerconnect = value;
  }
  public resetLbrokerconnect() {
    this._lbrokerconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbrokerconnectInput() {
    return this._lbrokerconnect;
  }

  // publisher_id - computed: true, optional: false, required: false
  public get publisherId() {
    return this.getNumberAttribute('publisher_id');
  }

  // publisher_name - computed: false, optional: false, required: true
  private _publisherName?: string; 
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }
  public set publisherName(value: string) {
    this._publisherName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherNameInput() {
    return this._publisherName;
  }

  // publisher_upgrade_profiles_id - computed: true, optional: true, required: false
  private _publisherUpgradeProfilesId?: number; 
  public get publisherUpgradeProfilesId() {
    return this.getNumberAttribute('publisher_upgrade_profiles_id');
  }
  public set publisherUpgradeProfilesId(value: number) {
    this._publisherUpgradeProfilesId = value;
  }
  public resetPublisherUpgradeProfilesId() {
    this._publisherUpgradeProfilesId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherUpgradeProfilesIdInput() {
    return this._publisherUpgradeProfilesId;
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
  private _upgradeFailedReason = new NpaPublisherUpgradeFailedReasonOutputReference(this, "upgrade_failed_reason");
  public get upgradeFailedReason() {
    return this._upgradeFailedReason;
  }

  // upgrade_request - computed: true, optional: false, required: false
  public get upgradeRequest() {
    return this.getBooleanAttribute('upgrade_request');
  }

  // upgrade_status - computed: true, optional: false, required: false
  private _upgradeStatus = new NpaPublisherUpgradeStatusOutputReference(this, "upgrade_status");
  public get upgradeStatus() {
    return this._upgradeStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lbrokerconnect: cdktf.booleanToTerraform(this._lbrokerconnect),
      publisher_name: cdktf.stringToTerraform(this._publisherName),
      publisher_upgrade_profiles_id: cdktf.numberToTerraform(this._publisherUpgradeProfilesId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      lbrokerconnect: {
        value: cdktf.booleanToHclTerraform(this._lbrokerconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      publisher_name: {
        value: cdktf.stringToHclTerraform(this._publisherName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publisher_upgrade_profiles_id: {
        value: cdktf.numberToHclTerraform(this._publisherUpgradeProfilesId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
