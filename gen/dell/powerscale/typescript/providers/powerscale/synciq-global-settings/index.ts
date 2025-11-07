// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynciqGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The amount of SyncIQ bandwidth to reserve in kb/s for policies that did not specify a bandwidth reservation. This field takes precedence over bandwidth_reservation_reserve_percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#bandwidth_reservation_reserve_absolute SynciqGlobalSettings#bandwidth_reservation_reserve_absolute}
  */
  readonly bandwidthReservationReserveAbsolute?: number;
  /**
  * The percentage of SyncIQ bandwidth to reserve for policies that did not specify a bandwidth reservation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#bandwidth_reservation_reserve_percentage SynciqGlobalSettings#bandwidth_reservation_reserve_percentage}
  */
  readonly bandwidthReservationReservePercentage?: number;
  /**
  * The ID of this cluster's certificate being used for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#cluster_certificate_id SynciqGlobalSettings#cluster_certificate_id}
  */
  readonly clusterCertificateId?: string;
  /**
  * The cipher list being used with encryption. For SyncIQ targets, this list serves as a list of supported ciphers. For SyncIQ sources, the list of ciphers will be attempted to be used in order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#encryption_cipher_list SynciqGlobalSettings#encryption_cipher_list}
  */
  readonly encryptionCipherList?: string;
  /**
  * If true, requires all SyncIQ policies to utilize encrypted communications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#encryption_required SynciqGlobalSettings#encryption_required}
  */
  readonly encryptionRequired?: boolean | cdktf.IResolvable;
  /**
  * NOTE: This field should not be changed without the help of PowerScale support.  Default for the "force_interface" property that will be applied to each new sync policy unless otherwise specified at the time of policy creation.  Determines whether data is sent only through the subnet and pool specified in the "source_network" field. This option can be useful if there are multiple interfaces for the given source subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#force_interface SynciqGlobalSettings#force_interface}
  */
  readonly forceInterface?: boolean | cdktf.IResolvable;
  /**
  * The address of the OCSP responder to which to connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#ocsp_address SynciqGlobalSettings#ocsp_address}
  */
  readonly ocspAddress?: string;
  /**
  * The ID of the certificate authority that issued the certificate whose revocation status is being checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#ocsp_issuer_certificate_id SynciqGlobalSettings#ocsp_issuer_certificate_id}
  */
  readonly ocspIssuerCertificateId?: string;
  /**
  * If specified, display as default RPO Alert value for new policy creation via WebUI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#preferred_rpo_alert SynciqGlobalSettings#preferred_rpo_alert}
  */
  readonly preferredRpoAlert?: number;
  /**
  * If specified, the duration to persist encrypted connection before forcing a renegotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#renegotiation_period SynciqGlobalSettings#renegotiation_period}
  */
  readonly renegotiationPeriod?: number;
  /**
  * Email sync reports to these addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#report_email SynciqGlobalSettings#report_email}
  */
  readonly reportEmail?: string[];
  /**
  * ID of the Cluster Email Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#report_max_age SynciqGlobalSettings#report_max_age}
  */
  readonly reportMaxAge?: number;
  /**
  * The default length of time (in seconds) a policy report will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#report_max_count SynciqGlobalSettings#report_max_count}
  */
  readonly reportMaxCount?: number;
  /**
  * Default for the "restrict_target_network" property that will be applied to each new sync policy unless otherwise specified at the time of policy creation.  If you specify true, and you specify a SmartConnect zone in the "target_host" field, replication policies will connect only to nodes in the specified SmartConnect zone.  If you specify false, replication policies are not restricted to specific nodes on the target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#restrict_target_network SynciqGlobalSettings#restrict_target_network}
  */
  readonly restrictTargetNetwork?: boolean | cdktf.IResolvable;
  /**
  * If disabled, no RPO alerts will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#rpo_alerts SynciqGlobalSettings#rpo_alerts}
  */
  readonly rpoAlerts?: boolean | cdktf.IResolvable;
  /**
  * Specifies if the SyncIQ service currently on, paused, or off.  If paused, all sync jobs will be paused.  If turned off, all jobs will be canceled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#service SynciqGlobalSettings#service}
  */
  readonly service?: string;
  /**
  * Maximum age of service information to maintain, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#service_history_max_age SynciqGlobalSettings#service_history_max_age}
  */
  readonly serviceHistoryMaxAge?: number;
  /**
  * Maximum number of historical service information records to maintain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#service_history_max_count SynciqGlobalSettings#service_history_max_count}
  */
  readonly serviceHistoryMaxCount?: number;
  /**
  * Restricts replication policies on the local cluster to running on the specified subnet and pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#source_network SynciqGlobalSettings#source_network}
  */
  readonly sourceNetwork?: SynciqGlobalSettingsSourceNetwork;
  /**
  * If enabled, SyncIQ will use the deprecated workers_per_node field with worker pools functionality and limit workers accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#use_workers_per_node SynciqGlobalSettings#use_workers_per_node}
  */
  readonly useWorkersPerNode?: boolean | cdktf.IResolvable;
}
export interface SynciqGlobalSettingsSourceNetwork {
  /**
  * The pool to restrict replication policies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#pool SynciqGlobalSettings#pool}
  */
  readonly pool?: string;
  /**
  * The subnet to restrict replication policies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#subnet SynciqGlobalSettings#subnet}
  */
  readonly subnet?: string;
}

export function synciqGlobalSettingsSourceNetworkToTerraform(struct?: SynciqGlobalSettingsSourceNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool: cdktf.stringToTerraform(struct!.pool),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function synciqGlobalSettingsSourceNetworkToHclTerraform(struct?: SynciqGlobalSettingsSourceNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynciqGlobalSettingsSourceNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SynciqGlobalSettingsSourceNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynciqGlobalSettingsSourceNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pool = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pool = value.pool;
      this._subnet = value.subnet;
    }
  }

  // pool - computed: true, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings powerscale_synciq_global_settings}
*/
export class SynciqGlobalSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_synciq_global_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SynciqGlobalSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SynciqGlobalSettings to import
  * @param importFromId The id of the existing SynciqGlobalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SynciqGlobalSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_synciq_global_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_global_settings powerscale_synciq_global_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynciqGlobalSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SynciqGlobalSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_synciq_global_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidthReservationReserveAbsolute = config.bandwidthReservationReserveAbsolute;
    this._bandwidthReservationReservePercentage = config.bandwidthReservationReservePercentage;
    this._clusterCertificateId = config.clusterCertificateId;
    this._encryptionCipherList = config.encryptionCipherList;
    this._encryptionRequired = config.encryptionRequired;
    this._forceInterface = config.forceInterface;
    this._ocspAddress = config.ocspAddress;
    this._ocspIssuerCertificateId = config.ocspIssuerCertificateId;
    this._preferredRpoAlert = config.preferredRpoAlert;
    this._renegotiationPeriod = config.renegotiationPeriod;
    this._reportEmail = config.reportEmail;
    this._reportMaxAge = config.reportMaxAge;
    this._reportMaxCount = config.reportMaxCount;
    this._restrictTargetNetwork = config.restrictTargetNetwork;
    this._rpoAlerts = config.rpoAlerts;
    this._service = config.service;
    this._serviceHistoryMaxAge = config.serviceHistoryMaxAge;
    this._serviceHistoryMaxCount = config.serviceHistoryMaxCount;
    this._sourceNetwork.internalValue = config.sourceNetwork;
    this._useWorkersPerNode = config.useWorkersPerNode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_reservation_reserve_absolute - computed: true, optional: true, required: false
  private _bandwidthReservationReserveAbsolute?: number; 
  public get bandwidthReservationReserveAbsolute() {
    return this.getNumberAttribute('bandwidth_reservation_reserve_absolute');
  }
  public set bandwidthReservationReserveAbsolute(value: number) {
    this._bandwidthReservationReserveAbsolute = value;
  }
  public resetBandwidthReservationReserveAbsolute() {
    this._bandwidthReservationReserveAbsolute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthReservationReserveAbsoluteInput() {
    return this._bandwidthReservationReserveAbsolute;
  }

  // bandwidth_reservation_reserve_percentage - computed: true, optional: true, required: false
  private _bandwidthReservationReservePercentage?: number; 
  public get bandwidthReservationReservePercentage() {
    return this.getNumberAttribute('bandwidth_reservation_reserve_percentage');
  }
  public set bandwidthReservationReservePercentage(value: number) {
    this._bandwidthReservationReservePercentage = value;
  }
  public resetBandwidthReservationReservePercentage() {
    this._bandwidthReservationReservePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthReservationReservePercentageInput() {
    return this._bandwidthReservationReservePercentage;
  }

  // cluster_certificate_id - computed: true, optional: true, required: false
  private _clusterCertificateId?: string; 
  public get clusterCertificateId() {
    return this.getStringAttribute('cluster_certificate_id');
  }
  public set clusterCertificateId(value: string) {
    this._clusterCertificateId = value;
  }
  public resetClusterCertificateId() {
    this._clusterCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCertificateIdInput() {
    return this._clusterCertificateId;
  }

  // encryption_cipher_list - computed: true, optional: true, required: false
  private _encryptionCipherList?: string; 
  public get encryptionCipherList() {
    return this.getStringAttribute('encryption_cipher_list');
  }
  public set encryptionCipherList(value: string) {
    this._encryptionCipherList = value;
  }
  public resetEncryptionCipherList() {
    this._encryptionCipherList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionCipherListInput() {
    return this._encryptionCipherList;
  }

  // encryption_required - computed: true, optional: true, required: false
  private _encryptionRequired?: boolean | cdktf.IResolvable; 
  public get encryptionRequired() {
    return this.getBooleanAttribute('encryption_required');
  }
  public set encryptionRequired(value: boolean | cdktf.IResolvable) {
    this._encryptionRequired = value;
  }
  public resetEncryptionRequired() {
    this._encryptionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionRequiredInput() {
    return this._encryptionRequired;
  }

  // force_interface - computed: true, optional: true, required: false
  private _forceInterface?: boolean | cdktf.IResolvable; 
  public get forceInterface() {
    return this.getBooleanAttribute('force_interface');
  }
  public set forceInterface(value: boolean | cdktf.IResolvable) {
    this._forceInterface = value;
  }
  public resetForceInterface() {
    this._forceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInterfaceInput() {
    return this._forceInterface;
  }

  // ocsp_address - computed: true, optional: true, required: false
  private _ocspAddress?: string; 
  public get ocspAddress() {
    return this.getStringAttribute('ocsp_address');
  }
  public set ocspAddress(value: string) {
    this._ocspAddress = value;
  }
  public resetOcspAddress() {
    this._ocspAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspAddressInput() {
    return this._ocspAddress;
  }

  // ocsp_issuer_certificate_id - computed: true, optional: true, required: false
  private _ocspIssuerCertificateId?: string; 
  public get ocspIssuerCertificateId() {
    return this.getStringAttribute('ocsp_issuer_certificate_id');
  }
  public set ocspIssuerCertificateId(value: string) {
    this._ocspIssuerCertificateId = value;
  }
  public resetOcspIssuerCertificateId() {
    this._ocspIssuerCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspIssuerCertificateIdInput() {
    return this._ocspIssuerCertificateId;
  }

  // preferred_rpo_alert - computed: true, optional: true, required: false
  private _preferredRpoAlert?: number; 
  public get preferredRpoAlert() {
    return this.getNumberAttribute('preferred_rpo_alert');
  }
  public set preferredRpoAlert(value: number) {
    this._preferredRpoAlert = value;
  }
  public resetPreferredRpoAlert() {
    this._preferredRpoAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredRpoAlertInput() {
    return this._preferredRpoAlert;
  }

  // renegotiation_period - computed: true, optional: true, required: false
  private _renegotiationPeriod?: number; 
  public get renegotiationPeriod() {
    return this.getNumberAttribute('renegotiation_period');
  }
  public set renegotiationPeriod(value: number) {
    this._renegotiationPeriod = value;
  }
  public resetRenegotiationPeriod() {
    this._renegotiationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegotiationPeriodInput() {
    return this._renegotiationPeriod;
  }

  // report_email - computed: true, optional: true, required: false
  private _reportEmail?: string[]; 
  public get reportEmail() {
    return cdktf.Fn.tolist(this.getListAttribute('report_email'));
  }
  public set reportEmail(value: string[]) {
    this._reportEmail = value;
  }
  public resetReportEmail() {
    this._reportEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportEmailInput() {
    return this._reportEmail;
  }

  // report_max_age - computed: true, optional: true, required: false
  private _reportMaxAge?: number; 
  public get reportMaxAge() {
    return this.getNumberAttribute('report_max_age');
  }
  public set reportMaxAge(value: number) {
    this._reportMaxAge = value;
  }
  public resetReportMaxAge() {
    this._reportMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportMaxAgeInput() {
    return this._reportMaxAge;
  }

  // report_max_count - computed: true, optional: true, required: false
  private _reportMaxCount?: number; 
  public get reportMaxCount() {
    return this.getNumberAttribute('report_max_count');
  }
  public set reportMaxCount(value: number) {
    this._reportMaxCount = value;
  }
  public resetReportMaxCount() {
    this._reportMaxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportMaxCountInput() {
    return this._reportMaxCount;
  }

  // restrict_target_network - computed: true, optional: true, required: false
  private _restrictTargetNetwork?: boolean | cdktf.IResolvable; 
  public get restrictTargetNetwork() {
    return this.getBooleanAttribute('restrict_target_network');
  }
  public set restrictTargetNetwork(value: boolean | cdktf.IResolvable) {
    this._restrictTargetNetwork = value;
  }
  public resetRestrictTargetNetwork() {
    this._restrictTargetNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTargetNetworkInput() {
    return this._restrictTargetNetwork;
  }

  // rpo_alerts - computed: true, optional: true, required: false
  private _rpoAlerts?: boolean | cdktf.IResolvable; 
  public get rpoAlerts() {
    return this.getBooleanAttribute('rpo_alerts');
  }
  public set rpoAlerts(value: boolean | cdktf.IResolvable) {
    this._rpoAlerts = value;
  }
  public resetRpoAlerts() {
    this._rpoAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoAlertsInput() {
    return this._rpoAlerts;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_history_max_age - computed: true, optional: true, required: false
  private _serviceHistoryMaxAge?: number; 
  public get serviceHistoryMaxAge() {
    return this.getNumberAttribute('service_history_max_age');
  }
  public set serviceHistoryMaxAge(value: number) {
    this._serviceHistoryMaxAge = value;
  }
  public resetServiceHistoryMaxAge() {
    this._serviceHistoryMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHistoryMaxAgeInput() {
    return this._serviceHistoryMaxAge;
  }

  // service_history_max_count - computed: true, optional: true, required: false
  private _serviceHistoryMaxCount?: number; 
  public get serviceHistoryMaxCount() {
    return this.getNumberAttribute('service_history_max_count');
  }
  public set serviceHistoryMaxCount(value: number) {
    this._serviceHistoryMaxCount = value;
  }
  public resetServiceHistoryMaxCount() {
    this._serviceHistoryMaxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHistoryMaxCountInput() {
    return this._serviceHistoryMaxCount;
  }

  // source_network - computed: true, optional: true, required: false
  private _sourceNetwork = new SynciqGlobalSettingsSourceNetworkOutputReference(this, "source_network");
  public get sourceNetwork() {
    return this._sourceNetwork;
  }
  public putSourceNetwork(value: SynciqGlobalSettingsSourceNetwork) {
    this._sourceNetwork.internalValue = value;
  }
  public resetSourceNetwork() {
    this._sourceNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkInput() {
    return this._sourceNetwork.internalValue;
  }

  // use_workers_per_node - computed: true, optional: true, required: false
  private _useWorkersPerNode?: boolean | cdktf.IResolvable; 
  public get useWorkersPerNode() {
    return this.getBooleanAttribute('use_workers_per_node');
  }
  public set useWorkersPerNode(value: boolean | cdktf.IResolvable) {
    this._useWorkersPerNode = value;
  }
  public resetUseWorkersPerNode() {
    this._useWorkersPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWorkersPerNodeInput() {
    return this._useWorkersPerNode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_reservation_reserve_absolute: cdktf.numberToTerraform(this._bandwidthReservationReserveAbsolute),
      bandwidth_reservation_reserve_percentage: cdktf.numberToTerraform(this._bandwidthReservationReservePercentage),
      cluster_certificate_id: cdktf.stringToTerraform(this._clusterCertificateId),
      encryption_cipher_list: cdktf.stringToTerraform(this._encryptionCipherList),
      encryption_required: cdktf.booleanToTerraform(this._encryptionRequired),
      force_interface: cdktf.booleanToTerraform(this._forceInterface),
      ocsp_address: cdktf.stringToTerraform(this._ocspAddress),
      ocsp_issuer_certificate_id: cdktf.stringToTerraform(this._ocspIssuerCertificateId),
      preferred_rpo_alert: cdktf.numberToTerraform(this._preferredRpoAlert),
      renegotiation_period: cdktf.numberToTerraform(this._renegotiationPeriod),
      report_email: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reportEmail),
      report_max_age: cdktf.numberToTerraform(this._reportMaxAge),
      report_max_count: cdktf.numberToTerraform(this._reportMaxCount),
      restrict_target_network: cdktf.booleanToTerraform(this._restrictTargetNetwork),
      rpo_alerts: cdktf.booleanToTerraform(this._rpoAlerts),
      service: cdktf.stringToTerraform(this._service),
      service_history_max_age: cdktf.numberToTerraform(this._serviceHistoryMaxAge),
      service_history_max_count: cdktf.numberToTerraform(this._serviceHistoryMaxCount),
      source_network: synciqGlobalSettingsSourceNetworkToTerraform(this._sourceNetwork.internalValue),
      use_workers_per_node: cdktf.booleanToTerraform(this._useWorkersPerNode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_reservation_reserve_absolute: {
        value: cdktf.numberToHclTerraform(this._bandwidthReservationReserveAbsolute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_reservation_reserve_percentage: {
        value: cdktf.numberToHclTerraform(this._bandwidthReservationReservePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_certificate_id: {
        value: cdktf.stringToHclTerraform(this._clusterCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_cipher_list: {
        value: cdktf.stringToHclTerraform(this._encryptionCipherList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_required: {
        value: cdktf.booleanToHclTerraform(this._encryptionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_interface: {
        value: cdktf.booleanToHclTerraform(this._forceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ocsp_address: {
        value: cdktf.stringToHclTerraform(this._ocspAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_issuer_certificate_id: {
        value: cdktf.stringToHclTerraform(this._ocspIssuerCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_rpo_alert: {
        value: cdktf.numberToHclTerraform(this._preferredRpoAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renegotiation_period: {
        value: cdktf.numberToHclTerraform(this._renegotiationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      report_email: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reportEmail),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      report_max_age: {
        value: cdktf.numberToHclTerraform(this._reportMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      report_max_count: {
        value: cdktf.numberToHclTerraform(this._reportMaxCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restrict_target_network: {
        value: cdktf.booleanToHclTerraform(this._restrictTargetNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rpo_alerts: {
        value: cdktf.booleanToHclTerraform(this._rpoAlerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_history_max_age: {
        value: cdktf.numberToHclTerraform(this._serviceHistoryMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_history_max_count: {
        value: cdktf.numberToHclTerraform(this._serviceHistoryMaxCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_network: {
        value: synciqGlobalSettingsSourceNetworkToHclTerraform(this._sourceNetwork.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SynciqGlobalSettingsSourceNetwork",
      },
      use_workers_per_node: {
        value: cdktf.booleanToHclTerraform(this._useWorkersPerNode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
