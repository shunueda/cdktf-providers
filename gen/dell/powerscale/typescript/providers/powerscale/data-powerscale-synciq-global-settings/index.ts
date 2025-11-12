// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_global_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleSynciqGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPowerscaleSynciqGlobalSettingsSourceNetwork {
}

export function dataPowerscaleSynciqGlobalSettingsSourceNetworkToTerraform(struct?: DataPowerscaleSynciqGlobalSettingsSourceNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqGlobalSettingsSourceNetworkToHclTerraform(struct?: DataPowerscaleSynciqGlobalSettingsSourceNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqGlobalSettingsSourceNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSynciqGlobalSettingsSourceNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqGlobalSettingsSourceNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pool - computed: true, optional: false, required: false
  public get pool() {
    return this.getStringAttribute('pool');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_global_settings powerscale_synciq_global_settings}
*/
export class DataPowerscaleSynciqGlobalSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_synciq_global_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleSynciqGlobalSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleSynciqGlobalSettings to import
  * @param importFromId The id of the existing DataPowerscaleSynciqGlobalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_global_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleSynciqGlobalSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_synciq_global_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_global_settings powerscale_synciq_global_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleSynciqGlobalSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleSynciqGlobalSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_synciq_global_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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

  // bandwidth_reservation_reserve_absolute - computed: true, optional: false, required: false
  public get bandwidthReservationReserveAbsolute() {
    return this.getNumberAttribute('bandwidth_reservation_reserve_absolute');
  }

  // bandwidth_reservation_reserve_percentage - computed: true, optional: false, required: false
  public get bandwidthReservationReservePercentage() {
    return this.getNumberAttribute('bandwidth_reservation_reserve_percentage');
  }

  // cluster_certificate_id - computed: true, optional: false, required: false
  public get clusterCertificateId() {
    return this.getStringAttribute('cluster_certificate_id');
  }

  // encryption_cipher_list - computed: true, optional: false, required: false
  public get encryptionCipherList() {
    return this.getStringAttribute('encryption_cipher_list');
  }

  // encryption_required - computed: true, optional: false, required: false
  public get encryptionRequired() {
    return this.getBooleanAttribute('encryption_required');
  }

  // force_interface - computed: true, optional: false, required: false
  public get forceInterface() {
    return this.getBooleanAttribute('force_interface');
  }

  // max_concurrent_jobs - computed: true, optional: false, required: false
  public get maxConcurrentJobs() {
    return this.getNumberAttribute('max_concurrent_jobs');
  }

  // ocsp_address - computed: true, optional: false, required: false
  public get ocspAddress() {
    return this.getStringAttribute('ocsp_address');
  }

  // ocsp_issuer_certificate_id - computed: true, optional: false, required: false
  public get ocspIssuerCertificateId() {
    return this.getStringAttribute('ocsp_issuer_certificate_id');
  }

  // password_set - computed: true, optional: false, required: false
  public get passwordSet() {
    return this.getBooleanAttribute('password_set');
  }

  // preferred_rpo_alert - computed: true, optional: false, required: false
  public get preferredRpoAlert() {
    return this.getNumberAttribute('preferred_rpo_alert');
  }

  // renegotiation_period - computed: true, optional: false, required: false
  public get renegotiationPeriod() {
    return this.getNumberAttribute('renegotiation_period');
  }

  // report_email - computed: true, optional: false, required: false
  public get reportEmail() {
    return cdktf.Fn.tolist(this.getListAttribute('report_email'));
  }

  // report_max_age - computed: true, optional: false, required: false
  public get reportMaxAge() {
    return this.getNumberAttribute('report_max_age');
  }

  // report_max_count - computed: true, optional: false, required: false
  public get reportMaxCount() {
    return this.getNumberAttribute('report_max_count');
  }

  // restrict_target_network - computed: true, optional: false, required: false
  public get restrictTargetNetwork() {
    return this.getBooleanAttribute('restrict_target_network');
  }

  // rpo_alerts - computed: true, optional: false, required: false
  public get rpoAlerts() {
    return this.getBooleanAttribute('rpo_alerts');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // service_history_max_age - computed: true, optional: false, required: false
  public get serviceHistoryMaxAge() {
    return this.getNumberAttribute('service_history_max_age');
  }

  // service_history_max_count - computed: true, optional: false, required: false
  public get serviceHistoryMaxCount() {
    return this.getNumberAttribute('service_history_max_count');
  }

  // source_network - computed: true, optional: false, required: false
  private _sourceNetwork = new DataPowerscaleSynciqGlobalSettingsSourceNetworkOutputReference(this, "source_network");
  public get sourceNetwork() {
    return this._sourceNetwork;
  }

  // tw_chkpt_interval - computed: true, optional: false, required: false
  public get twChkptInterval() {
    return this.getNumberAttribute('tw_chkpt_interval');
  }

  // use_workers_per_node - computed: true, optional: false, required: false
  public get useWorkersPerNode() {
    return this.getBooleanAttribute('use_workers_per_node');
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
