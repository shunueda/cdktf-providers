// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/service_edge_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaServiceEdgeControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/service_edge_controller#id DataZpaServiceEdgeController#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/service_edge_controller#microtenant_id DataZpaServiceEdgeController#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/service_edge_controller#microtenant_name DataZpaServiceEdgeController#microtenant_name}
  */
  readonly microtenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/service_edge_controller#name DataZpaServiceEdgeController#name}
  */
  readonly name?: string;
}
export interface DataZpaServiceEdgeControllerPrivateBrokerVersionZpnSubModuleUpgrade {
}

export function dataZpaServiceEdgeControllerPrivateBrokerVersionZpnSubModuleUpgradeToTerraform(struct?: DataZpaServiceEdgeControllerPrivateBrokerVersionZpnSubModuleUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaServiceEdgeControllerPrivateBrokerVersionZpnSubModuleUpgradeToHclTerraform(struct?: DataZpaServiceEdgeControllerPrivateBrokerVersionZpnSubModuleUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaServiceEdgeControllerPrivateBrokerVersionZpnSubModuleUpgradeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaServiceEdgeControllerPrivateBrokerVersionZpnSubModuleUpgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaServiceEdgeControllerPrivateBrokerVersionZpnSubModuleUpgrade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // entity_gid - computed: true, optional: false, required: false
  public get entityGid() {
    return this.getStringAttribute('entity_gid');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // expected_version - computed: true, optional: false, required: false
  public get expectedVersion() {
    return this.getStringAttribute('expected_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // previous_version - computed: true, optional: false, required: false
  public get previousVersion() {
    return this.getStringAttribute('previous_version');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // upgrade_status - computed: true, optional: false, required: false
  public get upgradeStatus() {
    return this.getStringAttribute('upgrade_status');
  }

  // upgrade_time - computed: true, optional: false, required: false
  public get upgradeTime() {
    return this.getStringAttribute('upgrade_time');
  }
}

export class DataZpaServiceEdgeControllerPrivateBrokerVersionZpnSubModuleUpgradeList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaServiceEdgeControllerPrivateBrokerVersionZpnSubModuleUpgradeOutputReference {
    return new DataZpaServiceEdgeControllerPrivateBrokerVersionZpnSubModuleUpgradeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaServiceEdgeControllerPrivateBrokerVersion {
}

export function dataZpaServiceEdgeControllerPrivateBrokerVersionToTerraform(struct?: DataZpaServiceEdgeControllerPrivateBrokerVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaServiceEdgeControllerPrivateBrokerVersionToHclTerraform(struct?: DataZpaServiceEdgeControllerPrivateBrokerVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaServiceEdgeControllerPrivateBrokerVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaServiceEdgeControllerPrivateBrokerVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaServiceEdgeControllerPrivateBrokerVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_start_time - computed: true, optional: false, required: false
  public get applicationStartTime() {
    return this.getStringAttribute('application_start_time');
  }

  // broker_id - computed: true, optional: false, required: false
  public get brokerId() {
    return this.getStringAttribute('broker_id');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // disable_auto_update - computed: true, optional: false, required: false
  public get disableAutoUpdate() {
    return this.getBooleanAttribute('disable_auto_update');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_connect_time - computed: true, optional: false, required: false
  public get lastConnectTime() {
    return this.getStringAttribute('last_connect_time');
  }

  // last_disconnect_time - computed: true, optional: false, required: false
  public get lastDisconnectTime() {
    return this.getStringAttribute('last_disconnect_time');
  }

  // last_upgraded_time - computed: true, optional: false, required: false
  public get lastUpgradedTime() {
    return this.getStringAttribute('last_upgraded_time');
  }

  // lone_warrior - computed: true, optional: false, required: false
  public get loneWarrior() {
    return this.getBooleanAttribute('lone_warrior');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // platform_detail - computed: true, optional: false, required: false
  public get platformDetail() {
    return this.getStringAttribute('platform_detail');
  }

  // previous_version - computed: true, optional: false, required: false
  public get previousVersion() {
    return this.getStringAttribute('previous_version');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // restart_instructions - computed: true, optional: false, required: false
  public get restartInstructions() {
    return this.getStringAttribute('restart_instructions');
  }

  // restart_time_in_sec - computed: true, optional: false, required: false
  public get restartTimeInSec() {
    return this.getStringAttribute('restart_time_in_sec');
  }

  // runtime_os - computed: true, optional: false, required: false
  public get runtimeOs() {
    return this.getStringAttribute('runtime_os');
  }

  // sarge_version - computed: true, optional: false, required: false
  public get sargeVersion() {
    return this.getStringAttribute('sarge_version');
  }

  // service_edge_group_id - computed: true, optional: false, required: false
  public get serviceEdgeGroupId() {
    return this.getStringAttribute('service_edge_group_id');
  }

  // system_start_time - computed: true, optional: false, required: false
  public get systemStartTime() {
    return this.getStringAttribute('system_start_time');
  }

  // tunnel_id - computed: true, optional: false, required: false
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }

  // upgrade_attempt - computed: true, optional: false, required: false
  public get upgradeAttempt() {
    return this.getStringAttribute('upgrade_attempt');
  }

  // upgrade_now_once - computed: true, optional: false, required: false
  public get upgradeNowOnce() {
    return this.getBooleanAttribute('upgrade_now_once');
  }

  // upgrade_status - computed: true, optional: false, required: false
  public get upgradeStatus() {
    return this.getStringAttribute('upgrade_status');
  }

  // zpn_sub_module_upgrade - computed: true, optional: false, required: false
  private _zpnSubModuleUpgrade = new DataZpaServiceEdgeControllerPrivateBrokerVersionZpnSubModuleUpgradeList(this, "zpn_sub_module_upgrade", false);
  public get zpnSubModuleUpgrade() {
    return this._zpnSubModuleUpgrade;
  }
}

export class DataZpaServiceEdgeControllerPrivateBrokerVersionList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaServiceEdgeControllerPrivateBrokerVersionOutputReference {
    return new DataZpaServiceEdgeControllerPrivateBrokerVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/service_edge_controller zpa_service_edge_controller}
*/
export class DataZpaServiceEdgeController extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_service_edge_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaServiceEdgeController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaServiceEdgeController to import
  * @param importFromId The id of the existing DataZpaServiceEdgeController that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/service_edge_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaServiceEdgeController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_service_edge_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/service_edge_controller zpa_service_edge_controller} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaServiceEdgeControllerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaServiceEdgeControllerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_service_edge_controller',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.3',
        providerVersionConstraint: '4.3.3'
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
    this._microtenantName = config.microtenantName;
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

  // ip_acl - computed: true, optional: false, required: false
  public get ipAcl() {
    return this.getStringAttribute('ip_acl');
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
    return cdktf.Fn.tolist(this.getListAttribute('listen_ips'));
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getStringAttribute('longitude');
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

  // microtenant_name - computed: false, optional: true, required: false
  private _microtenantName?: string; 
  public get microtenantName() {
    return this.getStringAttribute('microtenant_name');
  }
  public set microtenantName(value: string) {
    this._microtenantName = value;
  }
  public resetMicrotenantName() {
    this._microtenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantNameInput() {
    return this._microtenantName;
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

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // previous_version - computed: true, optional: false, required: false
  public get previousVersion() {
    return this.getStringAttribute('previous_version');
  }

  // private_broker_version - computed: true, optional: false, required: false
  private _privateBrokerVersion = new DataZpaServiceEdgeControllerPrivateBrokerVersionList(this, "private_broker_version", false);
  public get privateBrokerVersion() {
    return this._privateBrokerVersion;
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
    return cdktf.Fn.tolist(this.getListAttribute('publish_ips'));
  }

  // publish_ipv6 - computed: true, optional: false, required: false
  public get publishIpv6() {
    return this.getBooleanAttribute('publish_ipv6');
  }

  // runtime_os - computed: true, optional: false, required: false
  public get runtimeOs() {
    return this.getStringAttribute('runtime_os');
  }

  // sarge_version - computed: true, optional: false, required: false
  public get sargeVersion() {
    return this.getStringAttribute('sarge_version');
  }

  // service_edge_group_id - computed: true, optional: false, required: false
  public get serviceEdgeGroupId() {
    return this.getStringAttribute('service_edge_group_id');
  }

  // service_edge_group_name - computed: true, optional: false, required: false
  public get serviceEdgeGroupName() {
    return this.getStringAttribute('service_edge_group_name');
  }

  // upgrade_attempt - computed: true, optional: false, required: false
  public get upgradeAttempt() {
    return this.getStringAttribute('upgrade_attempt');
  }

  // upgrade_status - computed: true, optional: false, required: false
  public get upgradeStatus() {
    return this.getStringAttribute('upgrade_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      microtenant_name: cdktf.stringToTerraform(this._microtenantName),
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
      microtenant_name: {
        value: cdktf.stringToHclTerraform(this._microtenantName),
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
