// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIllumioCoreVensConfig extends cdktf.TerraformMetaArguments {
  /**
  * The method in which the VEN was activated. Allowed values are "pairing_key", "kerberos" and "certificate"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#activation_type DataIllumioCoreVens#activation_type}
  */
  readonly activationType?: string;
  /**
  * FQDN of the PCE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#active_pce_fqdn DataIllumioCoreVens#active_pce_fqdn}
  */
  readonly activePceFqdn?: string;
  /**
  * A specific error condition to filter by. Allowed values are "agent.upgrade_time_out", "agent.missing_heartbeats_after_upgrade", "agent.clone_detected" and "agent.missed_heartbeats"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#condition DataIllumioCoreVens#condition}
  */
  readonly condition?: string;
  /**
  * Array of container cluster URIs, encoded as a JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#container_clusters DataIllumioCoreVens#container_clusters}
  */
  readonly containerClusters?: string;
  /**
  * Description of VEN(s) to return. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#description DataIllumioCoreVens#description}
  */
  readonly description?: string;
  /**
  * Return VENs that have been disconnected since the given time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#disconnected_before DataIllumioCoreVens#disconnected_before}
  */
  readonly disconnectedBefore?: string;
  /**
  * The overall health (condition) of the VEN. Allowed values are  "healthy", "unhealthy", "error" and "warning"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#health DataIllumioCoreVens#health}
  */
  readonly health?: string;
  /**
  * Hostname of VEN(s) to return. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#hostname DataIllumioCoreVens#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#id DataIllumioCoreVens#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address of VEN(s) to return. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#ip_address DataIllumioCoreVens#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * 2D Array of label URIs, encoded as a JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#labels DataIllumioCoreVens#labels}
  */
  readonly labels?: string;
  /**
  * Greater than or equal to value for last goodbye at timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#last_goodbye_at_gte DataIllumioCoreVens#last_goodbye_at_gte}
  */
  readonly lastGoodbyeAtGte?: string;
  /**
  * Greater than or equal to value for last goodbye at timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#last_goodbye_at_lte DataIllumioCoreVens#last_goodbye_at_lte}
  */
  readonly lastGoodbyeAtLte?: string;
  /**
  * Greater than or equal to value for last heartbeat timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#last_heartbeat_at_gte DataIllumioCoreVens#last_heartbeat_at_gte}
  */
  readonly lastHeartbeatAtGte?: string;
  /**
  * Less than or equal to value for last heartbeat timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#last_heartbeat_at_lte DataIllumioCoreVens#last_heartbeat_at_lte}
  */
  readonly lastHeartbeatAtLte?: string;
  /**
  * Indicates whether to return all partially-matching names or only exact matches. Allowed values are "partial" and "exact". Default value: "partial"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#match_type DataIllumioCoreVens#match_type}
  */
  readonly matchType?: string;
  /**
  * Maximum number of VENs to return. The integer should be a non-zero positive integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#max_results DataIllumioCoreVens#max_results}
  */
  readonly maxResults?: string;
  /**
  * Name of VEN(s) to return. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#name DataIllumioCoreVens#name}
  */
  readonly name?: string;
  /**
  * Operating System of VEN(s) to return. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#os DataIllumioCoreVens#os}
  */
  readonly os?: string;
  /**
  * The current status of the VEN. Allowed values are "active", "suspended", "stopped" and "uninstalled"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#status DataIllumioCoreVens#status}
  */
  readonly status?: string;
  /**
  * Only return VENs with/without a pending upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#upgrade_pending DataIllumioCoreVens#upgrade_pending}
  */
  readonly upgradePending?: string;
  /**
  * Greater than or equal to value for version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#version_gte DataIllumioCoreVens#version_gte}
  */
  readonly versionGte?: string;
  /**
  * Less than or equal to value for version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#version_lte DataIllumioCoreVens#version_lte}
  */
  readonly versionLte?: string;
}
export interface DataIllumioCoreVensItemsConditionsLatestEventInfo {
}

export function dataIllumioCoreVensItemsConditionsLatestEventInfoToTerraform(struct?: DataIllumioCoreVensItemsConditionsLatestEventInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVensItemsConditionsLatestEventInfoToHclTerraform(struct?: DataIllumioCoreVensItemsConditionsLatestEventInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVensItemsConditionsLatestEventInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVensItemsConditionsLatestEventInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVensItemsConditionsLatestEventInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent - computed: true, optional: false, required: false
  private _agent = new cdktf.StringMap(this, "agent");
  public get agent() {
    return this._agent;
  }
}

export class DataIllumioCoreVensItemsConditionsLatestEventInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVensItemsConditionsLatestEventInfoOutputReference {
    return new DataIllumioCoreVensItemsConditionsLatestEventInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVensItemsConditionsLatestEvent {
}

export function dataIllumioCoreVensItemsConditionsLatestEventToTerraform(struct?: DataIllumioCoreVensItemsConditionsLatestEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVensItemsConditionsLatestEventToHclTerraform(struct?: DataIllumioCoreVensItemsConditionsLatestEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVensItemsConditionsLatestEventOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVensItemsConditionsLatestEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVensItemsConditionsLatestEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataIllumioCoreVensItemsConditionsLatestEventInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // notification_type - computed: true, optional: false, required: false
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class DataIllumioCoreVensItemsConditionsLatestEventList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVensItemsConditionsLatestEventOutputReference {
    return new DataIllumioCoreVensItemsConditionsLatestEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVensItemsConditions {
}

export function dataIllumioCoreVensItemsConditionsToTerraform(struct?: DataIllumioCoreVensItemsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVensItemsConditionsToHclTerraform(struct?: DataIllumioCoreVensItemsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVensItemsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVensItemsConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVensItemsConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // first_reported_timestamp - computed: true, optional: false, required: false
  public get firstReportedTimestamp() {
    return this.getStringAttribute('first_reported_timestamp');
  }

  // latest_event - computed: true, optional: false, required: false
  private _latestEvent = new DataIllumioCoreVensItemsConditionsLatestEventList(this, "latest_event", false);
  public get latestEvent() {
    return this._latestEvent;
  }
}

export class DataIllumioCoreVensItemsConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVensItemsConditionsOutputReference {
    return new DataIllumioCoreVensItemsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVensItemsContainerCluster {
}

export function dataIllumioCoreVensItemsContainerClusterToTerraform(struct?: DataIllumioCoreVensItemsContainerCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVensItemsContainerClusterToHclTerraform(struct?: DataIllumioCoreVensItemsContainerCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVensItemsContainerClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVensItemsContainerCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVensItemsContainerCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIllumioCoreVensItemsContainerClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVensItemsContainerClusterOutputReference {
    return new DataIllumioCoreVensItemsContainerClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVensItemsInterfaces {
}

export function dataIllumioCoreVensItemsInterfacesToTerraform(struct?: DataIllumioCoreVensItemsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVensItemsInterfacesToHclTerraform(struct?: DataIllumioCoreVensItemsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVensItemsInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVensItemsInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVensItemsInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getNumberAttribute('cidr_block');
  }

  // default_gateway_address - computed: true, optional: false, required: false
  public get defaultGatewayAddress() {
    return this.getStringAttribute('default_gateway_address');
  }

  // friendly_name - computed: true, optional: false, required: false
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // link_state - computed: true, optional: false, required: false
  public get linkState() {
    return this.getStringAttribute('link_state');
  }

  // loopback - computed: true, optional: false, required: false
  public get loopback() {
    return this.getBooleanAttribute('loopback');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  private _network = new cdktf.StringMap(this, "network");
  public get network() {
    return this._network;
  }

  // network_detection_mode - computed: true, optional: false, required: false
  public get networkDetectionMode() {
    return this.getStringAttribute('network_detection_mode');
  }
}

export class DataIllumioCoreVensItemsInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVensItemsInterfacesOutputReference {
    return new DataIllumioCoreVensItemsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVensItemsLabels {
}

export function dataIllumioCoreVensItemsLabelsToTerraform(struct?: DataIllumioCoreVensItemsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVensItemsLabelsToHclTerraform(struct?: DataIllumioCoreVensItemsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVensItemsLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVensItemsLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVensItemsLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIllumioCoreVensItemsLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVensItemsLabelsOutputReference {
    return new DataIllumioCoreVensItemsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVensItemsSecureConnect {
}

export function dataIllumioCoreVensItemsSecureConnectToTerraform(struct?: DataIllumioCoreVensItemsSecureConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVensItemsSecureConnectToHclTerraform(struct?: DataIllumioCoreVensItemsSecureConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVensItemsSecureConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVensItemsSecureConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVensItemsSecureConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // matching_issuer_name - computed: true, optional: false, required: false
  public get matchingIssuerName() {
    return this.getStringAttribute('matching_issuer_name');
  }
}

export class DataIllumioCoreVensItemsSecureConnectList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVensItemsSecureConnectOutputReference {
    return new DataIllumioCoreVensItemsSecureConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVensItemsWorkloadsInterfaces {
}

export function dataIllumioCoreVensItemsWorkloadsInterfacesToTerraform(struct?: DataIllumioCoreVensItemsWorkloadsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVensItemsWorkloadsInterfacesToHclTerraform(struct?: DataIllumioCoreVensItemsWorkloadsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVensItemsWorkloadsInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVensItemsWorkloadsInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVensItemsWorkloadsInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getNumberAttribute('cidr_block');
  }

  // default_gateway_address - computed: true, optional: false, required: false
  public get defaultGatewayAddress() {
    return this.getStringAttribute('default_gateway_address');
  }

  // friendly_name - computed: true, optional: false, required: false
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }

  // link_state - computed: true, optional: false, required: false
  public get linkState() {
    return this.getStringAttribute('link_state');
  }

  // loopback - computed: true, optional: false, required: false
  public get loopback() {
    return this.getBooleanAttribute('loopback');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  private _network = new cdktf.StringMap(this, "network");
  public get network() {
    return this._network;
  }

  // network_detection_mode - computed: true, optional: false, required: false
  public get networkDetectionMode() {
    return this.getStringAttribute('network_detection_mode');
  }
}

export class DataIllumioCoreVensItemsWorkloadsInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVensItemsWorkloadsInterfacesOutputReference {
    return new DataIllumioCoreVensItemsWorkloadsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVensItemsWorkloadsLabels {
}

export function dataIllumioCoreVensItemsWorkloadsLabelsToTerraform(struct?: DataIllumioCoreVensItemsWorkloadsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVensItemsWorkloadsLabelsToHclTerraform(struct?: DataIllumioCoreVensItemsWorkloadsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVensItemsWorkloadsLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVensItemsWorkloadsLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVensItemsWorkloadsLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIllumioCoreVensItemsWorkloadsLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVensItemsWorkloadsLabelsOutputReference {
    return new DataIllumioCoreVensItemsWorkloadsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVensItemsWorkloads {
}

export function dataIllumioCoreVensItemsWorkloadsToTerraform(struct?: DataIllumioCoreVensItemsWorkloads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVensItemsWorkloadsToHclTerraform(struct?: DataIllumioCoreVensItemsWorkloads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVensItemsWorkloadsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVensItemsWorkloads | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVensItemsWorkloads | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforcement_mode - computed: true, optional: false, required: false
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataIllumioCoreVensItemsWorkloadsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new DataIllumioCoreVensItemsWorkloadsLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // online - computed: true, optional: false, required: false
  public get online() {
    return this.getBooleanAttribute('online');
  }

  // os_detail - computed: true, optional: false, required: false
  public get osDetail() {
    return this.getStringAttribute('os_detail');
  }

  // os_id - computed: true, optional: false, required: false
  public get osId() {
    return this.getStringAttribute('os_id');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // security_policy_applied_at - computed: true, optional: false, required: false
  public get securityPolicyAppliedAt() {
    return this.getStringAttribute('security_policy_applied_at');
  }

  // security_policy_received_at - computed: true, optional: false, required: false
  public get securityPolicyReceivedAt() {
    return this.getStringAttribute('security_policy_received_at');
  }

  // visibility_level - computed: true, optional: false, required: false
  public get visibilityLevel() {
    return this.getStringAttribute('visibility_level');
  }
}

export class DataIllumioCoreVensItemsWorkloadsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVensItemsWorkloadsOutputReference {
    return new DataIllumioCoreVensItemsWorkloadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreVensItems {
}

export function dataIllumioCoreVensItemsToTerraform(struct?: DataIllumioCoreVensItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreVensItemsToHclTerraform(struct?: DataIllumioCoreVensItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreVensItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreVensItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreVensItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activation_type - computed: true, optional: false, required: false
  public get activationType() {
    return this.getStringAttribute('activation_type');
  }

  // active_pce_fqdn - computed: true, optional: false, required: false
  public get activePceFqdn() {
    return this.getStringAttribute('active_pce_fqdn');
  }

  // caps - computed: true, optional: false, required: false
  public get caps() {
    return this.getListAttribute('caps');
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataIllumioCoreVensItemsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // container_cluster - computed: true, optional: false, required: false
  private _containerCluster = new DataIllumioCoreVensItemsContainerClusterList(this, "container_cluster", false);
  public get containerCluster() {
    return this._containerCluster;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataIllumioCoreVensItemsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new DataIllumioCoreVensItemsLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // last_goodbye_at - computed: true, optional: false, required: false
  public get lastGoodbyeAt() {
    return this.getStringAttribute('last_goodbye_at');
  }

  // last_heartbeat_at - computed: true, optional: false, required: false
  public get lastHeartbeatAt() {
    return this.getStringAttribute('last_heartbeat_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os_detail - computed: true, optional: false, required: false
  public get osDetail() {
    return this.getStringAttribute('os_detail');
  }

  // os_id - computed: true, optional: false, required: false
  public get osId() {
    return this.getStringAttribute('os_id');
  }

  // os_platform - computed: true, optional: false, required: false
  public get osPlatform() {
    return this.getStringAttribute('os_platform');
  }

  // secure_connect - computed: true, optional: false, required: false
  private _secureConnect = new DataIllumioCoreVensItemsSecureConnectList(this, "secure_connect", false);
  public get secureConnect() {
    return this._secureConnect;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_pce_fqdn - computed: true, optional: false, required: false
  public get targetPceFqdn() {
    return this.getStringAttribute('target_pce_fqdn');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // unpair_allowed - computed: true, optional: false, required: false
  public get unpairAllowed() {
    return this.getBooleanAttribute('unpair_allowed');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // workloads - computed: true, optional: false, required: false
  private _workloads = new DataIllumioCoreVensItemsWorkloadsList(this, "workloads", false);
  public get workloads() {
    return this._workloads;
  }
}

export class DataIllumioCoreVensItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreVensItemsOutputReference {
    return new DataIllumioCoreVensItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens illumio-core_vens}
*/
export class DataIllumioCoreVens extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_vens";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIllumioCoreVens resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIllumioCoreVens to import
  * @param importFromId The id of the existing DataIllumioCoreVens that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIllumioCoreVens to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_vens", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/vens illumio-core_vens} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIllumioCoreVensConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIllumioCoreVensConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_vens',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationType = config.activationType;
    this._activePceFqdn = config.activePceFqdn;
    this._condition = config.condition;
    this._containerClusters = config.containerClusters;
    this._description = config.description;
    this._disconnectedBefore = config.disconnectedBefore;
    this._health = config.health;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._labels = config.labels;
    this._lastGoodbyeAtGte = config.lastGoodbyeAtGte;
    this._lastGoodbyeAtLte = config.lastGoodbyeAtLte;
    this._lastHeartbeatAtGte = config.lastHeartbeatAtGte;
    this._lastHeartbeatAtLte = config.lastHeartbeatAtLte;
    this._matchType = config.matchType;
    this._maxResults = config.maxResults;
    this._name = config.name;
    this._os = config.os;
    this._status = config.status;
    this._upgradePending = config.upgradePending;
    this._versionGte = config.versionGte;
    this._versionLte = config.versionLte;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_type - computed: false, optional: true, required: false
  private _activationType?: string; 
  public get activationType() {
    return this.getStringAttribute('activation_type');
  }
  public set activationType(value: string) {
    this._activationType = value;
  }
  public resetActivationType() {
    this._activationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationTypeInput() {
    return this._activationType;
  }

  // active_pce_fqdn - computed: false, optional: true, required: false
  private _activePceFqdn?: string; 
  public get activePceFqdn() {
    return this.getStringAttribute('active_pce_fqdn');
  }
  public set activePceFqdn(value: string) {
    this._activePceFqdn = value;
  }
  public resetActivePceFqdn() {
    this._activePceFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activePceFqdnInput() {
    return this._activePceFqdn;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // container_clusters - computed: false, optional: true, required: false
  private _containerClusters?: string; 
  public get containerClusters() {
    return this.getStringAttribute('container_clusters');
  }
  public set containerClusters(value: string) {
    this._containerClusters = value;
  }
  public resetContainerClusters() {
    this._containerClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerClustersInput() {
    return this._containerClusters;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disconnected_before - computed: false, optional: true, required: false
  private _disconnectedBefore?: string; 
  public get disconnectedBefore() {
    return this.getStringAttribute('disconnected_before');
  }
  public set disconnectedBefore(value: string) {
    this._disconnectedBefore = value;
  }
  public resetDisconnectedBefore() {
    this._disconnectedBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectedBeforeInput() {
    return this._disconnectedBefore;
  }

  // health - computed: false, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataIllumioCoreVensItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // last_goodbye_at_gte - computed: false, optional: true, required: false
  private _lastGoodbyeAtGte?: string; 
  public get lastGoodbyeAtGte() {
    return this.getStringAttribute('last_goodbye_at_gte');
  }
  public set lastGoodbyeAtGte(value: string) {
    this._lastGoodbyeAtGte = value;
  }
  public resetLastGoodbyeAtGte() {
    this._lastGoodbyeAtGte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastGoodbyeAtGteInput() {
    return this._lastGoodbyeAtGte;
  }

  // last_goodbye_at_lte - computed: false, optional: true, required: false
  private _lastGoodbyeAtLte?: string; 
  public get lastGoodbyeAtLte() {
    return this.getStringAttribute('last_goodbye_at_lte');
  }
  public set lastGoodbyeAtLte(value: string) {
    this._lastGoodbyeAtLte = value;
  }
  public resetLastGoodbyeAtLte() {
    this._lastGoodbyeAtLte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastGoodbyeAtLteInput() {
    return this._lastGoodbyeAtLte;
  }

  // last_heartbeat_at_gte - computed: false, optional: true, required: false
  private _lastHeartbeatAtGte?: string; 
  public get lastHeartbeatAtGte() {
    return this.getStringAttribute('last_heartbeat_at_gte');
  }
  public set lastHeartbeatAtGte(value: string) {
    this._lastHeartbeatAtGte = value;
  }
  public resetLastHeartbeatAtGte() {
    this._lastHeartbeatAtGte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastHeartbeatAtGteInput() {
    return this._lastHeartbeatAtGte;
  }

  // last_heartbeat_at_lte - computed: false, optional: true, required: false
  private _lastHeartbeatAtLte?: string; 
  public get lastHeartbeatAtLte() {
    return this.getStringAttribute('last_heartbeat_at_lte');
  }
  public set lastHeartbeatAtLte(value: string) {
    this._lastHeartbeatAtLte = value;
  }
  public resetLastHeartbeatAtLte() {
    this._lastHeartbeatAtLte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastHeartbeatAtLteInput() {
    return this._lastHeartbeatAtLte;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: string; 
  public get maxResults() {
    return this.getStringAttribute('max_results');
  }
  public set maxResults(value: string) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
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

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // upgrade_pending - computed: false, optional: true, required: false
  private _upgradePending?: string; 
  public get upgradePending() {
    return this.getStringAttribute('upgrade_pending');
  }
  public set upgradePending(value: string) {
    this._upgradePending = value;
  }
  public resetUpgradePending() {
    this._upgradePending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePendingInput() {
    return this._upgradePending;
  }

  // version_gte - computed: false, optional: true, required: false
  private _versionGte?: string; 
  public get versionGte() {
    return this.getStringAttribute('version_gte');
  }
  public set versionGte(value: string) {
    this._versionGte = value;
  }
  public resetVersionGte() {
    this._versionGte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionGteInput() {
    return this._versionGte;
  }

  // version_lte - computed: false, optional: true, required: false
  private _versionLte?: string; 
  public get versionLte() {
    return this.getStringAttribute('version_lte');
  }
  public set versionLte(value: string) {
    this._versionLte = value;
  }
  public resetVersionLte() {
    this._versionLte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionLteInput() {
    return this._versionLte;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_type: cdktf.stringToTerraform(this._activationType),
      active_pce_fqdn: cdktf.stringToTerraform(this._activePceFqdn),
      condition: cdktf.stringToTerraform(this._condition),
      container_clusters: cdktf.stringToTerraform(this._containerClusters),
      description: cdktf.stringToTerraform(this._description),
      disconnected_before: cdktf.stringToTerraform(this._disconnectedBefore),
      health: cdktf.stringToTerraform(this._health),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      labels: cdktf.stringToTerraform(this._labels),
      last_goodbye_at_gte: cdktf.stringToTerraform(this._lastGoodbyeAtGte),
      last_goodbye_at_lte: cdktf.stringToTerraform(this._lastGoodbyeAtLte),
      last_heartbeat_at_gte: cdktf.stringToTerraform(this._lastHeartbeatAtGte),
      last_heartbeat_at_lte: cdktf.stringToTerraform(this._lastHeartbeatAtLte),
      match_type: cdktf.stringToTerraform(this._matchType),
      max_results: cdktf.stringToTerraform(this._maxResults),
      name: cdktf.stringToTerraform(this._name),
      os: cdktf.stringToTerraform(this._os),
      status: cdktf.stringToTerraform(this._status),
      upgrade_pending: cdktf.stringToTerraform(this._upgradePending),
      version_gte: cdktf.stringToTerraform(this._versionGte),
      version_lte: cdktf.stringToTerraform(this._versionLte),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_type: {
        value: cdktf.stringToHclTerraform(this._activationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_pce_fqdn: {
        value: cdktf.stringToHclTerraform(this._activePceFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_clusters: {
        value: cdktf.stringToHclTerraform(this._containerClusters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disconnected_before: {
        value: cdktf.stringToHclTerraform(this._disconnectedBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health: {
        value: cdktf.stringToHclTerraform(this._health),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.stringToHclTerraform(this._labels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_goodbye_at_gte: {
        value: cdktf.stringToHclTerraform(this._lastGoodbyeAtGte),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_goodbye_at_lte: {
        value: cdktf.stringToHclTerraform(this._lastGoodbyeAtLte),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_heartbeat_at_gte: {
        value: cdktf.stringToHclTerraform(this._lastHeartbeatAtGte),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_heartbeat_at_lte: {
        value: cdktf.stringToHclTerraform(this._lastHeartbeatAtLte),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_results: {
        value: cdktf.stringToHclTerraform(this._maxResults),
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
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_pending: {
        value: cdktf.stringToHclTerraform(this._upgradePending),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_gte: {
        value: cdktf.stringToHclTerraform(this._versionGte),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_lte: {
        value: cdktf.stringToHclTerraform(this._versionLte),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
