// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationIntegrationInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#compartment_id IntegrationIntegrationInstance#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#consumption_model IntegrationIntegrationInstance#consumption_model}
  */
  readonly consumptionModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#convert_instance_trigger IntegrationIntegrationInstance#convert_instance_trigger}
  */
  readonly convertInstanceTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#data_retention_period IntegrationIntegrationInstance#data_retention_period}
  */
  readonly dataRetentionPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#defined_tags IntegrationIntegrationInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#disable_process_automation_trigger IntegrationIntegrationInstance#disable_process_automation_trigger}
  */
  readonly disableProcessAutomationTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#display_name IntegrationIntegrationInstance#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#domain_id IntegrationIntegrationInstance#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#enable_process_automation_trigger IntegrationIntegrationInstance#enable_process_automation_trigger}
  */
  readonly enableProcessAutomationTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#extend_data_retention_trigger IntegrationIntegrationInstance#extend_data_retention_trigger}
  */
  readonly extendDataRetentionTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#failover_trigger IntegrationIntegrationInstance#failover_trigger}
  */
  readonly failoverTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#freeform_tags IntegrationIntegrationInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#idcs_at IntegrationIntegrationInstance#idcs_at}
  */
  readonly idcsAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#integration_instance_type IntegrationIntegrationInstance#integration_instance_type}
  */
  readonly integrationInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#is_byol IntegrationIntegrationInstance#is_byol}
  */
  readonly isByol: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#is_disaster_recovery_enabled IntegrationIntegrationInstance#is_disaster_recovery_enabled}
  */
  readonly isDisasterRecoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#is_file_server_enabled IntegrationIntegrationInstance#is_file_server_enabled}
  */
  readonly isFileServerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#is_visual_builder_enabled IntegrationIntegrationInstance#is_visual_builder_enabled}
  */
  readonly isVisualBuilderEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#log_group_id IntegrationIntegrationInstance#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#message_packs IntegrationIntegrationInstance#message_packs}
  */
  readonly messagePacks: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#security_attributes IntegrationIntegrationInstance#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#shape IntegrationIntegrationInstance#shape}
  */
  readonly shape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#state IntegrationIntegrationInstance#state}
  */
  readonly state?: string;
  /**
  * alternate_custom_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#alternate_custom_endpoints IntegrationIntegrationInstance#alternate_custom_endpoints}
  */
  readonly alternateCustomEndpoints?: IntegrationIntegrationInstanceAlternateCustomEndpoints[] | cdktf.IResolvable;
  /**
  * custom_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#custom_endpoint IntegrationIntegrationInstance#custom_endpoint}
  */
  readonly customEndpoint?: IntegrationIntegrationInstanceCustomEndpoint;
  /**
  * network_endpoint_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#network_endpoint_details IntegrationIntegrationInstance#network_endpoint_details}
  */
  readonly networkEndpointDetails?: IntegrationIntegrationInstanceNetworkEndpointDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#timeouts IntegrationIntegrationInstance#timeouts}
  */
  readonly timeouts?: IntegrationIntegrationInstanceTimeouts;
}
export interface IntegrationIntegrationInstanceAttachments {
}

export function integrationIntegrationInstanceAttachmentsToTerraform(struct?: IntegrationIntegrationInstanceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationIntegrationInstanceAttachmentsToHclTerraform(struct?: IntegrationIntegrationInstanceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationIntegrationInstanceAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationIntegrationInstanceAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_implicit - computed: true, optional: false, required: false
  public get isImplicit() {
    return this.getBooleanAttribute('is_implicit');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_instance_url - computed: true, optional: false, required: false
  public get targetInstanceUrl() {
    return this.getStringAttribute('target_instance_url');
  }

  // target_role - computed: true, optional: false, required: false
  public get targetRole() {
    return this.getStringAttribute('target_role');
  }

  // target_service_type - computed: true, optional: false, required: false
  public get targetServiceType() {
    return this.getStringAttribute('target_service_type');
  }
}

export class IntegrationIntegrationInstanceAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationIntegrationInstanceAttachmentsOutputReference {
    return new IntegrationIntegrationInstanceAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails {
}

export function integrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsToTerraform(struct?: IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsToHclTerraform(struct?: IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // time_role_changed - computed: true, optional: false, required: false
  public get timeRoleChanged() {
    return this.getStringAttribute('time_role_changed');
  }
}

export class IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference {
    return new IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationIntegrationInstanceDisasterRecoveryDetails {
}

export function integrationIntegrationInstanceDisasterRecoveryDetailsToTerraform(struct?: IntegrationIntegrationInstanceDisasterRecoveryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationIntegrationInstanceDisasterRecoveryDetailsToHclTerraform(struct?: IntegrationIntegrationInstanceDisasterRecoveryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationIntegrationInstanceDisasterRecoveryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceDisasterRecoveryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cross_region_integration_instance_details - computed: true, optional: false, required: false
  private _crossRegionIntegrationInstanceDetails = new IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList(this, "cross_region_integration_instance_details", false);
  public get crossRegionIntegrationInstanceDetails() {
    return this._crossRegionIntegrationInstanceDetails;
  }

  // regional_instance_url - computed: true, optional: false, required: false
  public get regionalInstanceUrl() {
    return this.getStringAttribute('regional_instance_url');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class IntegrationIntegrationInstanceDisasterRecoveryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference {
    return new IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationIntegrationInstanceIdcsInfo {
}

export function integrationIntegrationInstanceIdcsInfoToTerraform(struct?: IntegrationIntegrationInstanceIdcsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationIntegrationInstanceIdcsInfoToHclTerraform(struct?: IntegrationIntegrationInstanceIdcsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationIntegrationInstanceIdcsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationIntegrationInstanceIdcsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceIdcsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idcs_app_display_name - computed: true, optional: false, required: false
  public get idcsAppDisplayName() {
    return this.getStringAttribute('idcs_app_display_name');
  }

  // idcs_app_id - computed: true, optional: false, required: false
  public get idcsAppId() {
    return this.getStringAttribute('idcs_app_id');
  }

  // idcs_app_location_url - computed: true, optional: false, required: false
  public get idcsAppLocationUrl() {
    return this.getStringAttribute('idcs_app_location_url');
  }

  // idcs_app_name - computed: true, optional: false, required: false
  public get idcsAppName() {
    return this.getStringAttribute('idcs_app_name');
  }

  // instance_primary_audience_url - computed: true, optional: false, required: false
  public get instancePrimaryAudienceUrl() {
    return this.getStringAttribute('instance_primary_audience_url');
  }
}

export class IntegrationIntegrationInstanceIdcsInfoList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationIntegrationInstanceIdcsInfoOutputReference {
    return new IntegrationIntegrationInstanceIdcsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationIntegrationInstancePrivateEndpointOutboundConnection {
}

export function integrationIntegrationInstancePrivateEndpointOutboundConnectionToTerraform(struct?: IntegrationIntegrationInstancePrivateEndpointOutboundConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationIntegrationInstancePrivateEndpointOutboundConnectionToHclTerraform(struct?: IntegrationIntegrationInstancePrivateEndpointOutboundConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationIntegrationInstancePrivateEndpointOutboundConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstancePrivateEndpointOutboundConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_all_outbound_traffic_private - computed: true, optional: false, required: false
  public get isAllOutboundTrafficPrivate() {
    return this.getBooleanAttribute('is_all_outbound_traffic_private');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }

  // outbound_connection_type - computed: true, optional: false, required: false
  public get outboundConnectionType() {
    return this.getStringAttribute('outbound_connection_type');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference {
    return new IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationIntegrationInstanceAlternateCustomEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}
  */
  readonly certificateSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}
  */
  readonly hostname: string;
}

export function integrationIntegrationInstanceAlternateCustomEndpointsToTerraform(struct?: IntegrationIntegrationInstanceAlternateCustomEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_secret_id: cdktf.stringToTerraform(struct!.certificateSecretId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function integrationIntegrationInstanceAlternateCustomEndpointsToHclTerraform(struct?: IntegrationIntegrationInstanceAlternateCustomEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationIntegrationInstanceAlternateCustomEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSecretId = this._certificateSecretId;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceAlternateCustomEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateSecretId = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateSecretId = value.certificateSecretId;
      this._hostname = value.hostname;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // certificate_secret_id - computed: true, optional: true, required: false
  private _certificateSecretId?: string; 
  public get certificateSecretId() {
    return this.getStringAttribute('certificate_secret_id');
  }
  public set certificateSecretId(value: string) {
    this._certificateSecretId = value;
  }
  public resetCertificateSecretId() {
    this._certificateSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSecretIdInput() {
    return this._certificateSecretId;
  }

  // certificate_secret_version - computed: true, optional: false, required: false
  public get certificateSecretVersion() {
    return this.getNumberAttribute('certificate_secret_version');
  }

  // dns_type - computed: true, optional: false, required: false
  public get dnsType() {
    return this.getStringAttribute('dns_type');
  }

  // dns_zone_name - computed: true, optional: false, required: false
  public get dnsZoneName() {
    return this.getStringAttribute('dns_zone_name');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // managed_type - computed: true, optional: false, required: false
  public get managedType() {
    return this.getStringAttribute('managed_type');
  }
}

export class IntegrationIntegrationInstanceAlternateCustomEndpointsList extends cdktf.ComplexList {
  public internalValue? : IntegrationIntegrationInstanceAlternateCustomEndpoints[] | cdktf.IResolvable

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
  public get(index: number): IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference {
    return new IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationIntegrationInstanceCustomEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}
  */
  readonly certificateSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#dns_type IntegrationIntegrationInstance#dns_type}
  */
  readonly dnsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#dns_zone_name IntegrationIntegrationInstance#dns_zone_name}
  */
  readonly dnsZoneName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}
  */
  readonly hostname: string;
}

export function integrationIntegrationInstanceCustomEndpointToTerraform(struct?: IntegrationIntegrationInstanceCustomEndpointOutputReference | IntegrationIntegrationInstanceCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_secret_id: cdktf.stringToTerraform(struct!.certificateSecretId),
    dns_type: cdktf.stringToTerraform(struct!.dnsType),
    dns_zone_name: cdktf.stringToTerraform(struct!.dnsZoneName),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function integrationIntegrationInstanceCustomEndpointToHclTerraform(struct?: IntegrationIntegrationInstanceCustomEndpointOutputReference | IntegrationIntegrationInstanceCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_type: {
      value: cdktf.stringToHclTerraform(struct!.dnsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_zone_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIntegrationInstanceCustomEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationIntegrationInstanceCustomEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSecretId = this._certificateSecretId;
    }
    if (this._dnsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsType = this._dnsType;
    }
    if (this._dnsZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneName = this._dnsZoneName;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceCustomEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateSecretId = undefined;
      this._dnsType = undefined;
      this._dnsZoneName = undefined;
      this._hostname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateSecretId = value.certificateSecretId;
      this._dnsType = value.dnsType;
      this._dnsZoneName = value.dnsZoneName;
      this._hostname = value.hostname;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // certificate_secret_id - computed: true, optional: true, required: false
  private _certificateSecretId?: string; 
  public get certificateSecretId() {
    return this.getStringAttribute('certificate_secret_id');
  }
  public set certificateSecretId(value: string) {
    this._certificateSecretId = value;
  }
  public resetCertificateSecretId() {
    this._certificateSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSecretIdInput() {
    return this._certificateSecretId;
  }

  // certificate_secret_version - computed: true, optional: false, required: false
  public get certificateSecretVersion() {
    return this.getNumberAttribute('certificate_secret_version');
  }

  // dns_type - computed: false, optional: true, required: false
  private _dnsType?: string; 
  public get dnsType() {
    return this.getStringAttribute('dns_type');
  }
  public set dnsType(value: string) {
    this._dnsType = value;
  }
  public resetDnsType() {
    this._dnsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTypeInput() {
    return this._dnsType;
  }

  // dns_zone_name - computed: false, optional: false, required: true
  private _dnsZoneName?: string; 
  public get dnsZoneName() {
    return this.getStringAttribute('dns_zone_name');
  }
  public set dnsZoneName(value: string) {
    this._dnsZoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneNameInput() {
    return this._dnsZoneName;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // managed_type - computed: true, optional: false, required: false
  public get managedType() {
    return this.getStringAttribute('managed_type');
  }
}
export interface IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#allowlisted_ips IntegrationIntegrationInstance#allowlisted_ips}
  */
  readonly allowlistedIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function integrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsToTerraform(struct?: IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlisted_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlistedIps),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function integrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsToHclTerraform(struct?: IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlisted_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlistedIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlistedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedIps = this._allowlistedIps;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowlistedIps = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowlistedIps = value.allowlistedIps;
      this._id = value.id;
    }
  }

  // allowlisted_ips - computed: true, optional: true, required: false
  private _allowlistedIps?: string[]; 
  public get allowlistedIps() {
    return cdktf.Fn.tolist(this.getListAttribute('allowlisted_ips'));
  }
  public set allowlistedIps(value: string[]) {
    this._allowlistedIps = value;
  }
  public resetAllowlistedIps() {
    this._allowlistedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedIpsInput() {
    return this._allowlistedIps;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList extends cdktf.ComplexList {
  public internalValue? : IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns[] | cdktf.IResolvable

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
  public get(index: number): IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference {
    return new IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#allowlisted_ips IntegrationIntegrationInstance#allowlisted_ips}
  */
  readonly allowlistedIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function integrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcnsToTerraform(struct?: IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlisted_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlistedIps),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function integrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcnsToHclTerraform(struct?: IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlisted_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlistedIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlistedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedIps = this._allowlistedIps;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowlistedIps = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowlistedIps = value.allowlistedIps;
      this._id = value.id;
    }
  }

  // allowlisted_ips - computed: true, optional: true, required: false
  private _allowlistedIps?: string[]; 
  public get allowlistedIps() {
    return cdktf.Fn.tolist(this.getListAttribute('allowlisted_ips'));
  }
  public set allowlistedIps(value: string[]) {
    this._allowlistedIps = value;
  }
  public resetAllowlistedIps() {
    this._allowlistedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedIpsInput() {
    return this._allowlistedIps;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcnsList extends cdktf.ComplexList {
  public internalValue? : IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcns[] | cdktf.IResolvable

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
  public get(index: number): IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcnsOutputReference {
    return new IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#allowlisted_http_ips IntegrationIntegrationInstance#allowlisted_http_ips}
  */
  readonly allowlistedHttpIps?: string[];
  /**
  * allowlisted_http_vcns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#allowlisted_http_vcns IntegrationIntegrationInstance#allowlisted_http_vcns}
  */
  readonly allowlistedHttpVcns?: IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcns[] | cdktf.IResolvable;
}

export function integrationIntegrationInstanceNetworkEndpointDetailsDesignTimeToTerraform(struct?: IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeOutputReference | IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlisted_http_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlistedHttpIps),
    allowlisted_http_vcns: cdktf.listMapper(integrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcnsToTerraform, true)(struct!.allowlistedHttpVcns),
  }
}


export function integrationIntegrationInstanceNetworkEndpointDetailsDesignTimeToHclTerraform(struct?: IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeOutputReference | IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlisted_http_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlistedHttpIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowlisted_http_vcns: {
      value: cdktf.listMapperHcl(integrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcnsToHclTerraform, true)(struct!.allowlistedHttpVcns),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlistedHttpIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedHttpIps = this._allowlistedHttpIps;
    }
    if (this._allowlistedHttpVcns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedHttpVcns = this._allowlistedHttpVcns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowlistedHttpIps = undefined;
      this._allowlistedHttpVcns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowlistedHttpIps = value.allowlistedHttpIps;
      this._allowlistedHttpVcns.internalValue = value.allowlistedHttpVcns;
    }
  }

  // allowlisted_http_ips - computed: true, optional: true, required: false
  private _allowlistedHttpIps?: string[]; 
  public get allowlistedHttpIps() {
    return this.getListAttribute('allowlisted_http_ips');
  }
  public set allowlistedHttpIps(value: string[]) {
    this._allowlistedHttpIps = value;
  }
  public resetAllowlistedHttpIps() {
    this._allowlistedHttpIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedHttpIpsInput() {
    return this._allowlistedHttpIps;
  }

  // allowlisted_http_vcns - computed: false, optional: true, required: false
  private _allowlistedHttpVcns = new IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcnsList(this, "allowlisted_http_vcns", false);
  public get allowlistedHttpVcns() {
    return this._allowlistedHttpVcns;
  }
  public putAllowlistedHttpVcns(value: IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeAllowlistedHttpVcns[] | cdktf.IResolvable) {
    this._allowlistedHttpVcns.internalValue = value;
  }
  public resetAllowlistedHttpVcns() {
    this._allowlistedHttpVcns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedHttpVcnsInput() {
    return this._allowlistedHttpVcns.internalValue;
  }
}
export interface IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#allowlisted_ips IntegrationIntegrationInstance#allowlisted_ips}
  */
  readonly allowlistedIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function integrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcnsToTerraform(struct?: IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlisted_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlistedIps),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function integrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcnsToHclTerraform(struct?: IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlisted_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlistedIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlistedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedIps = this._allowlistedIps;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowlistedIps = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowlistedIps = value.allowlistedIps;
      this._id = value.id;
    }
  }

  // allowlisted_ips - computed: true, optional: true, required: false
  private _allowlistedIps?: string[]; 
  public get allowlistedIps() {
    return cdktf.Fn.tolist(this.getListAttribute('allowlisted_ips'));
  }
  public set allowlistedIps(value: string[]) {
    this._allowlistedIps = value;
  }
  public resetAllowlistedIps() {
    this._allowlistedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedIpsInput() {
    return this._allowlistedIps;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcnsList extends cdktf.ComplexList {
  public internalValue? : IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcns[] | cdktf.IResolvable

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
  public get(index: number): IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcnsOutputReference {
    return new IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationIntegrationInstanceNetworkEndpointDetailsRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#allowlisted_http_ips IntegrationIntegrationInstance#allowlisted_http_ips}
  */
  readonly allowlistedHttpIps?: string[];
  /**
  * allowlisted_http_vcns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#allowlisted_http_vcns IntegrationIntegrationInstance#allowlisted_http_vcns}
  */
  readonly allowlistedHttpVcns?: IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcns[] | cdktf.IResolvable;
}

export function integrationIntegrationInstanceNetworkEndpointDetailsRuntimeToTerraform(struct?: IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeOutputReference | IntegrationIntegrationInstanceNetworkEndpointDetailsRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlisted_http_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlistedHttpIps),
    allowlisted_http_vcns: cdktf.listMapper(integrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcnsToTerraform, true)(struct!.allowlistedHttpVcns),
  }
}


export function integrationIntegrationInstanceNetworkEndpointDetailsRuntimeToHclTerraform(struct?: IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeOutputReference | IntegrationIntegrationInstanceNetworkEndpointDetailsRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlisted_http_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlistedHttpIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowlisted_http_vcns: {
      value: cdktf.listMapperHcl(integrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcnsToHclTerraform, true)(struct!.allowlistedHttpVcns),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationIntegrationInstanceNetworkEndpointDetailsRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlistedHttpIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedHttpIps = this._allowlistedHttpIps;
    }
    if (this._allowlistedHttpVcns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedHttpVcns = this._allowlistedHttpVcns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceNetworkEndpointDetailsRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowlistedHttpIps = undefined;
      this._allowlistedHttpVcns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowlistedHttpIps = value.allowlistedHttpIps;
      this._allowlistedHttpVcns.internalValue = value.allowlistedHttpVcns;
    }
  }

  // allowlisted_http_ips - computed: true, optional: true, required: false
  private _allowlistedHttpIps?: string[]; 
  public get allowlistedHttpIps() {
    return this.getListAttribute('allowlisted_http_ips');
  }
  public set allowlistedHttpIps(value: string[]) {
    this._allowlistedHttpIps = value;
  }
  public resetAllowlistedHttpIps() {
    this._allowlistedHttpIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedHttpIpsInput() {
    return this._allowlistedHttpIps;
  }

  // allowlisted_http_vcns - computed: false, optional: true, required: false
  private _allowlistedHttpVcns = new IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcnsList(this, "allowlisted_http_vcns", false);
  public get allowlistedHttpVcns() {
    return this._allowlistedHttpVcns;
  }
  public putAllowlistedHttpVcns(value: IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeAllowlistedHttpVcns[] | cdktf.IResolvable) {
    this._allowlistedHttpVcns.internalValue = value;
  }
  public resetAllowlistedHttpVcns() {
    this._allowlistedHttpVcns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedHttpVcnsInput() {
    return this._allowlistedHttpVcns.internalValue;
  }
}
export interface IntegrationIntegrationInstanceNetworkEndpointDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#allowlisted_http_ips IntegrationIntegrationInstance#allowlisted_http_ips}
  */
  readonly allowlistedHttpIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#is_integration_vcn_allowlisted IntegrationIntegrationInstance#is_integration_vcn_allowlisted}
  */
  readonly isIntegrationVcnAllowlisted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#network_endpoint_type IntegrationIntegrationInstance#network_endpoint_type}
  */
  readonly networkEndpointType: string;
  /**
  * allowlisted_http_vcns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#allowlisted_http_vcns IntegrationIntegrationInstance#allowlisted_http_vcns}
  */
  readonly allowlistedHttpVcns?: IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns[] | cdktf.IResolvable;
  /**
  * design_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#design_time IntegrationIntegrationInstance#design_time}
  */
  readonly designTime?: IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTime;
  /**
  * runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#runtime IntegrationIntegrationInstance#runtime}
  */
  readonly runtime?: IntegrationIntegrationInstanceNetworkEndpointDetailsRuntime;
}

export function integrationIntegrationInstanceNetworkEndpointDetailsToTerraform(struct?: IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference | IntegrationIntegrationInstanceNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlisted_http_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlistedHttpIps),
    is_integration_vcn_allowlisted: cdktf.booleanToTerraform(struct!.isIntegrationVcnAllowlisted),
    network_endpoint_type: cdktf.stringToTerraform(struct!.networkEndpointType),
    allowlisted_http_vcns: cdktf.listMapper(integrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsToTerraform, true)(struct!.allowlistedHttpVcns),
    design_time: integrationIntegrationInstanceNetworkEndpointDetailsDesignTimeToTerraform(struct!.designTime),
    runtime: integrationIntegrationInstanceNetworkEndpointDetailsRuntimeToTerraform(struct!.runtime),
  }
}


export function integrationIntegrationInstanceNetworkEndpointDetailsToHclTerraform(struct?: IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference | IntegrationIntegrationInstanceNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlisted_http_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlistedHttpIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    is_integration_vcn_allowlisted: {
      value: cdktf.booleanToHclTerraform(struct!.isIntegrationVcnAllowlisted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_endpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.networkEndpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowlisted_http_vcns: {
      value: cdktf.listMapperHcl(integrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsToHclTerraform, true)(struct!.allowlistedHttpVcns),
      isBlock: true,
      type: "set",
      storageClassType: "IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList",
    },
    design_time: {
      value: integrationIntegrationInstanceNetworkEndpointDetailsDesignTimeToHclTerraform(struct!.designTime),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeList",
    },
    runtime: {
      value: integrationIntegrationInstanceNetworkEndpointDetailsRuntimeToHclTerraform(struct!.runtime),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationIntegrationInstanceNetworkEndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlistedHttpIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedHttpIps = this._allowlistedHttpIps;
    }
    if (this._isIntegrationVcnAllowlisted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIntegrationVcnAllowlisted = this._isIntegrationVcnAllowlisted;
    }
    if (this._networkEndpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkEndpointType = this._networkEndpointType;
    }
    if (this._allowlistedHttpVcns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedHttpVcns = this._allowlistedHttpVcns?.internalValue;
    }
    if (this._designTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.designTime = this._designTime?.internalValue;
    }
    if (this._runtime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceNetworkEndpointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowlistedHttpIps = undefined;
      this._isIntegrationVcnAllowlisted = undefined;
      this._networkEndpointType = undefined;
      this._allowlistedHttpVcns.internalValue = undefined;
      this._designTime.internalValue = undefined;
      this._runtime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowlistedHttpIps = value.allowlistedHttpIps;
      this._isIntegrationVcnAllowlisted = value.isIntegrationVcnAllowlisted;
      this._networkEndpointType = value.networkEndpointType;
      this._allowlistedHttpVcns.internalValue = value.allowlistedHttpVcns;
      this._designTime.internalValue = value.designTime;
      this._runtime.internalValue = value.runtime;
    }
  }

  // allowlisted_http_ips - computed: true, optional: true, required: false
  private _allowlistedHttpIps?: string[]; 
  public get allowlistedHttpIps() {
    return cdktf.Fn.tolist(this.getListAttribute('allowlisted_http_ips'));
  }
  public set allowlistedHttpIps(value: string[]) {
    this._allowlistedHttpIps = value;
  }
  public resetAllowlistedHttpIps() {
    this._allowlistedHttpIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedHttpIpsInput() {
    return this._allowlistedHttpIps;
  }

  // is_integration_vcn_allowlisted - computed: true, optional: true, required: false
  private _isIntegrationVcnAllowlisted?: boolean | cdktf.IResolvable; 
  public get isIntegrationVcnAllowlisted() {
    return this.getBooleanAttribute('is_integration_vcn_allowlisted');
  }
  public set isIntegrationVcnAllowlisted(value: boolean | cdktf.IResolvable) {
    this._isIntegrationVcnAllowlisted = value;
  }
  public resetIsIntegrationVcnAllowlisted() {
    this._isIntegrationVcnAllowlisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIntegrationVcnAllowlistedInput() {
    return this._isIntegrationVcnAllowlisted;
  }

  // network_endpoint_type - computed: false, optional: false, required: true
  private _networkEndpointType?: string; 
  public get networkEndpointType() {
    return this.getStringAttribute('network_endpoint_type');
  }
  public set networkEndpointType(value: string) {
    this._networkEndpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEndpointTypeInput() {
    return this._networkEndpointType;
  }

  // allowlisted_http_vcns - computed: false, optional: true, required: false
  private _allowlistedHttpVcns = new IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList(this, "allowlisted_http_vcns", true);
  public get allowlistedHttpVcns() {
    return this._allowlistedHttpVcns;
  }
  public putAllowlistedHttpVcns(value: IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns[] | cdktf.IResolvable) {
    this._allowlistedHttpVcns.internalValue = value;
  }
  public resetAllowlistedHttpVcns() {
    this._allowlistedHttpVcns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedHttpVcnsInput() {
    return this._allowlistedHttpVcns.internalValue;
  }

  // design_time - computed: false, optional: true, required: false
  private _designTime = new IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTimeOutputReference(this, "design_time");
  public get designTime() {
    return this._designTime;
  }
  public putDesignTime(value: IntegrationIntegrationInstanceNetworkEndpointDetailsDesignTime) {
    this._designTime.internalValue = value;
  }
  public resetDesignTime() {
    this._designTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get designTimeInput() {
    return this._designTime.internalValue;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime = new IntegrationIntegrationInstanceNetworkEndpointDetailsRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: IntegrationIntegrationInstanceNetworkEndpointDetailsRuntime) {
    this._runtime.internalValue = value;
  }
  public resetRuntime() {
    this._runtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }
}
export interface IntegrationIntegrationInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#create IntegrationIntegrationInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#delete IntegrationIntegrationInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#update IntegrationIntegrationInstance#update}
  */
  readonly update?: string;
}

export function integrationIntegrationInstanceTimeoutsToTerraform(struct?: IntegrationIntegrationInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function integrationIntegrationInstanceTimeoutsToHclTerraform(struct?: IntegrationIntegrationInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIntegrationInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationIntegrationInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIntegrationInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance oci_integration_integration_instance}
*/
export class IntegrationIntegrationInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_integration_integration_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationIntegrationInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationIntegrationInstance to import
  * @param importFromId The id of the existing IntegrationIntegrationInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationIntegrationInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_integration_integration_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/integration_integration_instance oci_integration_integration_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationIntegrationInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationIntegrationInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_integration_integration_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._consumptionModel = config.consumptionModel;
    this._convertInstanceTrigger = config.convertInstanceTrigger;
    this._dataRetentionPeriod = config.dataRetentionPeriod;
    this._definedTags = config.definedTags;
    this._disableProcessAutomationTrigger = config.disableProcessAutomationTrigger;
    this._displayName = config.displayName;
    this._domainId = config.domainId;
    this._enableProcessAutomationTrigger = config.enableProcessAutomationTrigger;
    this._extendDataRetentionTrigger = config.extendDataRetentionTrigger;
    this._failoverTrigger = config.failoverTrigger;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._idcsAt = config.idcsAt;
    this._integrationInstanceType = config.integrationInstanceType;
    this._isByol = config.isByol;
    this._isDisasterRecoveryEnabled = config.isDisasterRecoveryEnabled;
    this._isFileServerEnabled = config.isFileServerEnabled;
    this._isVisualBuilderEnabled = config.isVisualBuilderEnabled;
    this._logGroupId = config.logGroupId;
    this._messagePacks = config.messagePacks;
    this._securityAttributes = config.securityAttributes;
    this._shape = config.shape;
    this._state = config.state;
    this._alternateCustomEndpoints.internalValue = config.alternateCustomEndpoints;
    this._customEndpoint.internalValue = config.customEndpoint;
    this._networkEndpointDetails.internalValue = config.networkEndpointDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachments - computed: true, optional: false, required: false
  private _attachments = new IntegrationIntegrationInstanceAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // consumption_model - computed: true, optional: true, required: false
  private _consumptionModel?: string; 
  public get consumptionModel() {
    return this.getStringAttribute('consumption_model');
  }
  public set consumptionModel(value: string) {
    this._consumptionModel = value;
  }
  public resetConsumptionModel() {
    this._consumptionModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumptionModelInput() {
    return this._consumptionModel;
  }

  // convert_instance_trigger - computed: false, optional: true, required: false
  private _convertInstanceTrigger?: number; 
  public get convertInstanceTrigger() {
    return this.getNumberAttribute('convert_instance_trigger');
  }
  public set convertInstanceTrigger(value: number) {
    this._convertInstanceTrigger = value;
  }
  public resetConvertInstanceTrigger() {
    this._convertInstanceTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertInstanceTriggerInput() {
    return this._convertInstanceTrigger;
  }

  // data_retention_period - computed: false, optional: true, required: false
  private _dataRetentionPeriod?: string; 
  public get dataRetentionPeriod() {
    return this.getStringAttribute('data_retention_period');
  }
  public set dataRetentionPeriod(value: string) {
    this._dataRetentionPeriod = value;
  }
  public resetDataRetentionPeriod() {
    this._dataRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionPeriodInput() {
    return this._dataRetentionPeriod;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // disable_process_automation_trigger - computed: false, optional: true, required: false
  private _disableProcessAutomationTrigger?: number; 
  public get disableProcessAutomationTrigger() {
    return this.getNumberAttribute('disable_process_automation_trigger');
  }
  public set disableProcessAutomationTrigger(value: number) {
    this._disableProcessAutomationTrigger = value;
  }
  public resetDisableProcessAutomationTrigger() {
    this._disableProcessAutomationTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProcessAutomationTriggerInput() {
    return this._disableProcessAutomationTrigger;
  }

  // disaster_recovery_details - computed: true, optional: false, required: false
  private _disasterRecoveryDetails = new IntegrationIntegrationInstanceDisasterRecoveryDetailsList(this, "disaster_recovery_details", false);
  public get disasterRecoveryDetails() {
    return this._disasterRecoveryDetails;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // enable_process_automation_trigger - computed: false, optional: true, required: false
  private _enableProcessAutomationTrigger?: number; 
  public get enableProcessAutomationTrigger() {
    return this.getNumberAttribute('enable_process_automation_trigger');
  }
  public set enableProcessAutomationTrigger(value: number) {
    this._enableProcessAutomationTrigger = value;
  }
  public resetEnableProcessAutomationTrigger() {
    this._enableProcessAutomationTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProcessAutomationTriggerInput() {
    return this._enableProcessAutomationTrigger;
  }

  // extend_data_retention_trigger - computed: false, optional: true, required: false
  private _extendDataRetentionTrigger?: number; 
  public get extendDataRetentionTrigger() {
    return this.getNumberAttribute('extend_data_retention_trigger');
  }
  public set extendDataRetentionTrigger(value: number) {
    this._extendDataRetentionTrigger = value;
  }
  public resetExtendDataRetentionTrigger() {
    this._extendDataRetentionTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendDataRetentionTriggerInput() {
    return this._extendDataRetentionTrigger;
  }

  // failover_trigger - computed: false, optional: true, required: false
  private _failoverTrigger?: number; 
  public get failoverTrigger() {
    return this.getNumberAttribute('failover_trigger');
  }
  public set failoverTrigger(value: number) {
    this._failoverTrigger = value;
  }
  public resetFailoverTrigger() {
    this._failoverTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTriggerInput() {
    return this._failoverTrigger;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // idcs_at - computed: false, optional: true, required: false
  private _idcsAt?: string; 
  public get idcsAt() {
    return this.getStringAttribute('idcs_at');
  }
  public set idcsAt(value: string) {
    this._idcsAt = value;
  }
  public resetIdcsAt() {
    this._idcsAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsAtInput() {
    return this._idcsAt;
  }

  // idcs_info - computed: true, optional: false, required: false
  private _idcsInfo = new IntegrationIntegrationInstanceIdcsInfoList(this, "idcs_info", false);
  public get idcsInfo() {
    return this._idcsInfo;
  }

  // instance_design_time_url - computed: true, optional: false, required: false
  public get instanceDesignTimeUrl() {
    return this.getStringAttribute('instance_design_time_url');
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // integration_instance_type - computed: false, optional: false, required: true
  private _integrationInstanceType?: string; 
  public get integrationInstanceType() {
    return this.getStringAttribute('integration_instance_type');
  }
  public set integrationInstanceType(value: string) {
    this._integrationInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInstanceTypeInput() {
    return this._integrationInstanceType;
  }

  // is_byol - computed: false, optional: false, required: true
  private _isByol?: boolean | cdktf.IResolvable; 
  public get isByol() {
    return this.getBooleanAttribute('is_byol');
  }
  public set isByol(value: boolean | cdktf.IResolvable) {
    this._isByol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isByolInput() {
    return this._isByol;
  }

  // is_disaster_recovery_enabled - computed: true, optional: true, required: false
  private _isDisasterRecoveryEnabled?: boolean | cdktf.IResolvable; 
  public get isDisasterRecoveryEnabled() {
    return this.getBooleanAttribute('is_disaster_recovery_enabled');
  }
  public set isDisasterRecoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._isDisasterRecoveryEnabled = value;
  }
  public resetIsDisasterRecoveryEnabled() {
    this._isDisasterRecoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisasterRecoveryEnabledInput() {
    return this._isDisasterRecoveryEnabled;
  }

  // is_file_server_enabled - computed: true, optional: true, required: false
  private _isFileServerEnabled?: boolean | cdktf.IResolvable; 
  public get isFileServerEnabled() {
    return this.getBooleanAttribute('is_file_server_enabled');
  }
  public set isFileServerEnabled(value: boolean | cdktf.IResolvable) {
    this._isFileServerEnabled = value;
  }
  public resetIsFileServerEnabled() {
    this._isFileServerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFileServerEnabledInput() {
    return this._isFileServerEnabled;
  }

  // is_visual_builder_enabled - computed: true, optional: true, required: false
  private _isVisualBuilderEnabled?: boolean | cdktf.IResolvable; 
  public get isVisualBuilderEnabled() {
    return this.getBooleanAttribute('is_visual_builder_enabled');
  }
  public set isVisualBuilderEnabled(value: boolean | cdktf.IResolvable) {
    this._isVisualBuilderEnabled = value;
  }
  public resetIsVisualBuilderEnabled() {
    this._isVisualBuilderEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVisualBuilderEnabledInput() {
    return this._isVisualBuilderEnabled;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // log_group_id - computed: false, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // message_packs - computed: false, optional: false, required: true
  private _messagePacks?: number; 
  public get messagePacks() {
    return this.getNumberAttribute('message_packs');
  }
  public set messagePacks(value: number) {
    this._messagePacks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messagePacksInput() {
    return this._messagePacks;
  }

  // private_endpoint_outbound_connection - computed: true, optional: false, required: false
  private _privateEndpointOutboundConnection = new IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList(this, "private_endpoint_outbound_connection", false);
  public get privateEndpointOutboundConnection() {
    return this._privateEndpointOutboundConnection;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // shape - computed: true, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // alternate_custom_endpoints - computed: false, optional: true, required: false
  private _alternateCustomEndpoints = new IntegrationIntegrationInstanceAlternateCustomEndpointsList(this, "alternate_custom_endpoints", true);
  public get alternateCustomEndpoints() {
    return this._alternateCustomEndpoints;
  }
  public putAlternateCustomEndpoints(value: IntegrationIntegrationInstanceAlternateCustomEndpoints[] | cdktf.IResolvable) {
    this._alternateCustomEndpoints.internalValue = value;
  }
  public resetAlternateCustomEndpoints() {
    this._alternateCustomEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateCustomEndpointsInput() {
    return this._alternateCustomEndpoints.internalValue;
  }

  // custom_endpoint - computed: false, optional: true, required: false
  private _customEndpoint = new IntegrationIntegrationInstanceCustomEndpointOutputReference(this, "custom_endpoint");
  public get customEndpoint() {
    return this._customEndpoint;
  }
  public putCustomEndpoint(value: IntegrationIntegrationInstanceCustomEndpoint) {
    this._customEndpoint.internalValue = value;
  }
  public resetCustomEndpoint() {
    this._customEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointInput() {
    return this._customEndpoint.internalValue;
  }

  // network_endpoint_details - computed: false, optional: true, required: false
  private _networkEndpointDetails = new IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference(this, "network_endpoint_details");
  public get networkEndpointDetails() {
    return this._networkEndpointDetails;
  }
  public putNetworkEndpointDetails(value: IntegrationIntegrationInstanceNetworkEndpointDetails) {
    this._networkEndpointDetails.internalValue = value;
  }
  public resetNetworkEndpointDetails() {
    this._networkEndpointDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEndpointDetailsInput() {
    return this._networkEndpointDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IntegrationIntegrationInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IntegrationIntegrationInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      consumption_model: cdktf.stringToTerraform(this._consumptionModel),
      convert_instance_trigger: cdktf.numberToTerraform(this._convertInstanceTrigger),
      data_retention_period: cdktf.stringToTerraform(this._dataRetentionPeriod),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      disable_process_automation_trigger: cdktf.numberToTerraform(this._disableProcessAutomationTrigger),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain_id: cdktf.stringToTerraform(this._domainId),
      enable_process_automation_trigger: cdktf.numberToTerraform(this._enableProcessAutomationTrigger),
      extend_data_retention_trigger: cdktf.numberToTerraform(this._extendDataRetentionTrigger),
      failover_trigger: cdktf.numberToTerraform(this._failoverTrigger),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      idcs_at: cdktf.stringToTerraform(this._idcsAt),
      integration_instance_type: cdktf.stringToTerraform(this._integrationInstanceType),
      is_byol: cdktf.booleanToTerraform(this._isByol),
      is_disaster_recovery_enabled: cdktf.booleanToTerraform(this._isDisasterRecoveryEnabled),
      is_file_server_enabled: cdktf.booleanToTerraform(this._isFileServerEnabled),
      is_visual_builder_enabled: cdktf.booleanToTerraform(this._isVisualBuilderEnabled),
      log_group_id: cdktf.stringToTerraform(this._logGroupId),
      message_packs: cdktf.numberToTerraform(this._messagePacks),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      shape: cdktf.stringToTerraform(this._shape),
      state: cdktf.stringToTerraform(this._state),
      alternate_custom_endpoints: cdktf.listMapper(integrationIntegrationInstanceAlternateCustomEndpointsToTerraform, true)(this._alternateCustomEndpoints.internalValue),
      custom_endpoint: integrationIntegrationInstanceCustomEndpointToTerraform(this._customEndpoint.internalValue),
      network_endpoint_details: integrationIntegrationInstanceNetworkEndpointDetailsToTerraform(this._networkEndpointDetails.internalValue),
      timeouts: integrationIntegrationInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumption_model: {
        value: cdktf.stringToHclTerraform(this._consumptionModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      convert_instance_trigger: {
        value: cdktf.numberToHclTerraform(this._convertInstanceTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_retention_period: {
        value: cdktf.stringToHclTerraform(this._dataRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      disable_process_automation_trigger: {
        value: cdktf.numberToHclTerraform(this._disableProcessAutomationTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_process_automation_trigger: {
        value: cdktf.numberToHclTerraform(this._enableProcessAutomationTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extend_data_retention_trigger: {
        value: cdktf.numberToHclTerraform(this._extendDataRetentionTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failover_trigger: {
        value: cdktf.numberToHclTerraform(this._failoverTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idcs_at: {
        value: cdktf.stringToHclTerraform(this._idcsAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_instance_type: {
        value: cdktf.stringToHclTerraform(this._integrationInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_byol: {
        value: cdktf.booleanToHclTerraform(this._isByol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_disaster_recovery_enabled: {
        value: cdktf.booleanToHclTerraform(this._isDisasterRecoveryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_file_server_enabled: {
        value: cdktf.booleanToHclTerraform(this._isFileServerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_visual_builder_enabled: {
        value: cdktf.booleanToHclTerraform(this._isVisualBuilderEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_group_id: {
        value: cdktf.stringToHclTerraform(this._logGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_packs: {
        value: cdktf.numberToHclTerraform(this._messagePacks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alternate_custom_endpoints: {
        value: cdktf.listMapperHcl(integrationIntegrationInstanceAlternateCustomEndpointsToHclTerraform, true)(this._alternateCustomEndpoints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationIntegrationInstanceAlternateCustomEndpointsList",
      },
      custom_endpoint: {
        value: integrationIntegrationInstanceCustomEndpointToHclTerraform(this._customEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationIntegrationInstanceCustomEndpointList",
      },
      network_endpoint_details: {
        value: integrationIntegrationInstanceNetworkEndpointDetailsToHclTerraform(this._networkEndpointDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationIntegrationInstanceNetworkEndpointDetailsList",
      },
      timeouts: {
        value: integrationIntegrationInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationIntegrationInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
