// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/private_cloud_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaPrivateCloudControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/private_cloud_controller#id DataZpaPrivateCloudController#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/private_cloud_controller#microtenant_id DataZpaPrivateCloudController#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/private_cloud_controller#name DataZpaPrivateCloudController#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/private_cloud_controller zpa_private_cloud_controller}
*/
export class DataZpaPrivateCloudController extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_private_cloud_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaPrivateCloudController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaPrivateCloudController to import
  * @param importFromId The id of the existing DataZpaPrivateCloudController that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/private_cloud_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaPrivateCloudController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_private_cloud_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/private_cloud_controller zpa_private_cloud_controller} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaPrivateCloudControllerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaPrivateCloudControllerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_private_cloud_controller',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2',
        providerVersionConstraint: '4.3.2'
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
    this._microtenantId = config.microtenantId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_start_time - computed: true, optional: false, required: false
  public get applicationStartTime() {
    return this.getStringAttribute('application_start_time');
  }

  // control_channel_status - computed: true, optional: false, required: false
  public get controlChannelStatus() {
    return this.getStringAttribute('control_channel_status');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // ctrl_broker_name - computed: true, optional: false, required: false
  public get ctrlBrokerName() {
    return this.getStringAttribute('ctrl_broker_name');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // enrollment_cert - computed: true, optional: false, required: false
  private _enrollmentCert = new cdktf.StringMap(this, "enrollment_cert");
  public get enrollmentCert() {
    return this._enrollmentCert;
  }

  // expected_sarge_version - computed: true, optional: false, required: false
  public get expectedSargeVersion() {
    return this.getStringAttribute('expected_sarge_version');
  }

  // expected_upgrade_time - computed: true, optional: false, required: false
  public get expectedUpgradeTime() {
    return this.getStringAttribute('expected_upgrade_time');
  }

  // expected_version - computed: true, optional: false, required: false
  public get expectedVersion() {
    return this.getStringAttribute('expected_version');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // ip_acl - computed: true, optional: false, required: false
  public get ipAcl() {
    return this.getListAttribute('ip_acl');
  }

  // issued_cert_id - computed: true, optional: false, required: false
  public get issuedCertId() {
    return this.getStringAttribute('issued_cert_id');
  }

  // last_broker_connect_time - computed: true, optional: false, required: false
  public get lastBrokerConnectTime() {
    return this.getStringAttribute('last_broker_connect_time');
  }

  // last_broker_connect_time_duration - computed: true, optional: false, required: false
  public get lastBrokerConnectTimeDuration() {
    return this.getStringAttribute('last_broker_connect_time_duration');
  }

  // last_broker_disconnect_time - computed: true, optional: false, required: false
  public get lastBrokerDisconnectTime() {
    return this.getStringAttribute('last_broker_disconnect_time');
  }

  // last_broker_disconnect_time_duration - computed: true, optional: false, required: false
  public get lastBrokerDisconnectTimeDuration() {
    return this.getStringAttribute('last_broker_disconnect_time_duration');
  }

  // last_os_upgrade_time - computed: true, optional: false, required: false
  public get lastOsUpgradeTime() {
    return this.getStringAttribute('last_os_upgrade_time');
  }

  // last_sarge_upgrade_time - computed: true, optional: false, required: false
  public get lastSargeUpgradeTime() {
    return this.getStringAttribute('last_sarge_upgrade_time');
  }

  // last_upgrade_time - computed: true, optional: false, required: false
  public get lastUpgradeTime() {
    return this.getStringAttribute('last_upgrade_time');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getStringAttribute('latitude');
  }

  // listen_ips - computed: true, optional: false, required: false
  public get listenIps() {
    return this.getListAttribute('listen_ips');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getStringAttribute('longitude');
  }

  // master_last_sync_time - computed: true, optional: false, required: false
  public get masterLastSyncTime() {
    return this.getStringAttribute('master_last_sync_time');
  }

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
  }

  // microtenant_name - computed: true, optional: false, required: false
  public get microtenantName() {
    return this.getStringAttribute('microtenant_name');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
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

  // os_upgrade_enabled - computed: true, optional: false, required: false
  public get osUpgradeEnabled() {
    return this.getBooleanAttribute('os_upgrade_enabled');
  }

  // os_upgrade_status - computed: true, optional: false, required: false
  public get osUpgradeStatus() {
    return this.getStringAttribute('os_upgrade_status');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // platform_detail - computed: true, optional: false, required: false
  public get platformDetail() {
    return this.getStringAttribute('platform_detail');
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // previous_version - computed: true, optional: false, required: false
  public get previousVersion() {
    return this.getStringAttribute('previous_version');
  }

  // private_cloud_controller_group_id - computed: true, optional: false, required: false
  public get privateCloudControllerGroupId() {
    return this.getStringAttribute('private_cloud_controller_group_id');
  }

  // private_cloud_controller_group_name - computed: true, optional: false, required: false
  public get privateCloudControllerGroupName() {
    return this.getStringAttribute('private_cloud_controller_group_name');
  }

  // private_cloud_controller_version - computed: true, optional: false, required: false
  private _privateCloudControllerVersion = new cdktf.StringMap(this, "private_cloud_controller_version");
  public get privateCloudControllerVersion() {
    return this._privateCloudControllerVersion;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // provisioning_key_id - computed: true, optional: false, required: false
  public get provisioningKeyId() {
    return this.getStringAttribute('provisioning_key_id');
  }

  // provisioning_key_name - computed: true, optional: false, required: false
  public get provisioningKeyName() {
    return this.getStringAttribute('provisioning_key_name');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // publish_ips - computed: true, optional: false, required: false
  public get publishIps() {
    return this.getListAttribute('publish_ips');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // restriction_type - computed: true, optional: false, required: false
  public get restrictionType() {
    return this.getStringAttribute('restriction_type');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // sarge_upgrade_attempt - computed: true, optional: false, required: false
  public get sargeUpgradeAttempt() {
    return this.getStringAttribute('sarge_upgrade_attempt');
  }

  // sarge_upgrade_status - computed: true, optional: false, required: false
  public get sargeUpgradeStatus() {
    return this.getStringAttribute('sarge_upgrade_status');
  }

  // sarge_version - computed: true, optional: false, required: false
  public get sargeVersion() {
    return this.getStringAttribute('sarge_version');
  }

  // shard_last_sync_time - computed: true, optional: false, required: false
  public get shardLastSyncTime() {
    return this.getStringAttribute('shard_last_sync_time');
  }

  // site_sp_dns_name - computed: true, optional: false, required: false
  public get siteSpDnsName() {
    return this.getStringAttribute('site_sp_dns_name');
  }

  // upgrade_attempt - computed: true, optional: false, required: false
  public get upgradeAttempt() {
    return this.getStringAttribute('upgrade_attempt');
  }

  // upgrade_status - computed: true, optional: false, required: false
  public get upgradeStatus() {
    return this.getStringAttribute('upgrade_status');
  }

  // userdb_last_sync_time - computed: true, optional: false, required: false
  public get userdbLastSyncTime() {
    return this.getStringAttribute('userdb_last_sync_time');
  }

  // zpn_sub_module_upgrade_list - computed: true, optional: false, required: false
  public get zpnSubModuleUpgradeList() {
    return this.getListAttribute('zpn_sub_module_upgrade_list');
  }

  // zscaler_managed - computed: true, optional: false, required: false
  public get zscalerManaged() {
    return this.getBooleanAttribute('zscaler_managed');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
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
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
