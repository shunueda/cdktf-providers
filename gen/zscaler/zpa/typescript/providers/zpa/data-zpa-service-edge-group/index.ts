// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/service_edge_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaServiceEdgeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/service_edge_group#id DataZpaServiceEdgeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Service Edge Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/service_edge_group#name DataZpaServiceEdgeGroup#name}
  */
  readonly name?: string;
}
export interface DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionZpnSubModuleUpgrade {
}

export function dataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionZpnSubModuleUpgradeToTerraform(struct?: DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionZpnSubModuleUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionZpnSubModuleUpgradeToHclTerraform(struct?: DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionZpnSubModuleUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionZpnSubModuleUpgradeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionZpnSubModuleUpgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionZpnSubModuleUpgrade | undefined) {
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

export class DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionZpnSubModuleUpgradeList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionZpnSubModuleUpgradeOutputReference {
    return new DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionZpnSubModuleUpgradeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersion {
}

export function dataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionToTerraform(struct?: DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionToHclTerraform(struct?: DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersion | undefined) {
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
  private _zpnSubModuleUpgrade = new DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionZpnSubModuleUpgradeList(this, "zpn_sub_module_upgrade", false);
  public get zpnSubModuleUpgrade() {
    return this._zpnSubModuleUpgrade;
  }
}

export class DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionOutputReference {
    return new DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaServiceEdgeGroupServiceEdges {
}

export function dataZpaServiceEdgeGroupServiceEdgesToTerraform(struct?: DataZpaServiceEdgeGroupServiceEdges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaServiceEdgeGroupServiceEdgesToHclTerraform(struct?: DataZpaServiceEdgeGroupServiceEdges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaServiceEdgeGroupServiceEdgesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaServiceEdgeGroupServiceEdges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaServiceEdgeGroupServiceEdges | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // microtenant_id - computed: true, optional: false, required: false
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
  private _privateBrokerVersion = new DataZpaServiceEdgeGroupServiceEdgesPrivateBrokerVersionList(this, "private_broker_version", false);
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
}

export class DataZpaServiceEdgeGroupServiceEdgesList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaServiceEdgeGroupServiceEdgesOutputReference {
    return new DataZpaServiceEdgeGroupServiceEdgesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaServiceEdgeGroupTrustedNetworks {
}

export function dataZpaServiceEdgeGroupTrustedNetworksToTerraform(struct?: DataZpaServiceEdgeGroupTrustedNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaServiceEdgeGroupTrustedNetworksToHclTerraform(struct?: DataZpaServiceEdgeGroupTrustedNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaServiceEdgeGroupTrustedNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaServiceEdgeGroupTrustedNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaServiceEdgeGroupTrustedNetworks | undefined) {
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

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // master_customer_id - computed: true, optional: false, required: false
  public get masterCustomerId() {
    return this.getStringAttribute('master_customer_id');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // zscaler_cloud - computed: true, optional: false, required: false
  public get zscalerCloud() {
    return this.getStringAttribute('zscaler_cloud');
  }
}

export class DataZpaServiceEdgeGroupTrustedNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaServiceEdgeGroupTrustedNetworksOutputReference {
    return new DataZpaServiceEdgeGroupTrustedNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/service_edge_group zpa_service_edge_group}
*/
export class DataZpaServiceEdgeGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_service_edge_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaServiceEdgeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaServiceEdgeGroup to import
  * @param importFromId The id of the existing DataZpaServiceEdgeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/service_edge_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaServiceEdgeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_service_edge_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/data-sources/service_edge_group zpa_service_edge_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaServiceEdgeGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaServiceEdgeGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_service_edge_group',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alt_cloud - computed: true, optional: false, required: false
  public get altCloud() {
    return this.getStringAttribute('alt_cloud');
  }

  // city_country - computed: true, optional: false, required: false
  public get cityCountry() {
    return this.getStringAttribute('city_country');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // geo_location_id - computed: true, optional: false, required: false
  public get geoLocationId() {
    return this.getStringAttribute('geo_location_id');
  }

  // grace_distance_enabled - computed: true, optional: false, required: false
  public get graceDistanceEnabled() {
    return this.getBooleanAttribute('grace_distance_enabled');
  }

  // grace_distance_value - computed: true, optional: false, required: false
  public get graceDistanceValue() {
    return this.getStringAttribute('grace_distance_value');
  }

  // grace_distance_value_unit - computed: true, optional: false, required: false
  public get graceDistanceValueUnit() {
    return this.getStringAttribute('grace_distance_value_unit');
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

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getStringAttribute('is_public');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getStringAttribute('latitude');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getStringAttribute('longitude');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // name - computed: true, optional: true, required: false
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

  // override_version_profile - computed: true, optional: false, required: false
  public get overrideVersionProfile() {
    return this.getBooleanAttribute('override_version_profile');
  }

  // service_edges - computed: true, optional: false, required: false
  private _serviceEdges = new DataZpaServiceEdgeGroupServiceEdgesList(this, "service_edges", false);
  public get serviceEdges() {
    return this._serviceEdges;
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // trusted_networks - computed: true, optional: false, required: false
  private _trustedNetworks = new DataZpaServiceEdgeGroupTrustedNetworksList(this, "trusted_networks", false);
  public get trustedNetworks() {
    return this._trustedNetworks;
  }

  // upgrade_day - computed: true, optional: false, required: false
  public get upgradeDay() {
    return this.getStringAttribute('upgrade_day');
  }

  // upgrade_time_in_secs - computed: true, optional: false, required: false
  public get upgradeTimeInSecs() {
    return this.getStringAttribute('upgrade_time_in_secs');
  }

  // use_in_dr_mode - computed: true, optional: false, required: false
  public get useInDrMode() {
    return this.getBooleanAttribute('use_in_dr_mode');
  }

  // version_profile_id - computed: true, optional: false, required: false
  public get versionProfileId() {
    return this.getStringAttribute('version_profile_id');
  }

  // version_profile_name - computed: true, optional: false, required: false
  public get versionProfileName() {
    return this.getStringAttribute('version_profile_name');
  }

  // version_profile_visibility_scope - computed: true, optional: false, required: false
  public get versionProfileVisibilityScope() {
    return this.getStringAttribute('version_profile_visibility_scope');
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
