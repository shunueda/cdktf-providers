// https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricServiceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Array of contact emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#allowed_emails FabricServiceProfile#allowed_emails}
  */
  readonly allowedEmails?: string[];
  /**
  * User-provided service description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#description FabricServiceProfile#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#id FabricServiceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customer-assigned service profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#name FabricServiceProfile#name}
  */
  readonly name: string;
  /**
  * Self Profile indicating if the profile is created for customer's  self use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#self_profile FabricServiceProfile#self_profile}
  */
  readonly selfProfile?: boolean | cdktf.IResolvable;
  /**
  * Service profile state - ACTIVE, PENDING_APPROVAL, DELETED, REJECTED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#state FabricServiceProfile#state}
  */
  readonly state?: string;
  /**
  * Tags attached to the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#tags FabricServiceProfile#tags}
  */
  readonly tags?: string[];
  /**
  * Service profile type - L2_PROFILE, L3_PROFILE, ECIA_PROFILE, ECMC_PROFILE, IA_PROFILE, IX_PROFILE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#type FabricServiceProfile#type}
  */
  readonly type: string;
  /**
  * Flips view between buyer and seller representation. Available values : aSide, zSide. Default value : aSide
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#view_point FabricServiceProfile#view_point}
  */
  readonly viewPoint?: string;
  /**
  * Service profile visibility - PUBLIC, PRIVATE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#visibility FabricServiceProfile#visibility}
  */
  readonly visibility?: string;
  /**
  * access_point_type_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#access_point_type_configs FabricServiceProfile#access_point_type_configs}
  */
  readonly accessPointTypeConfigs?: FabricServiceProfileAccessPointTypeConfigs[] | cdktf.IResolvable;
  /**
  * custom_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#custom_fields FabricServiceProfile#custom_fields}
  */
  readonly customFields?: FabricServiceProfileCustomFields[] | cdktf.IResolvable;
  /**
  * marketing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#marketing_info FabricServiceProfile#marketing_info}
  */
  readonly marketingInfo?: FabricServiceProfileMarketingInfo;
  /**
  * metros block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#metros FabricServiceProfile#metros}
  */
  readonly metros?: FabricServiceProfileMetros[] | cdktf.IResolvable;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#notifications FabricServiceProfile#notifications}
  */
  readonly notifications?: FabricServiceProfileNotifications[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#ports FabricServiceProfile#ports}
  */
  readonly ports?: FabricServiceProfilePorts[] | cdktf.IResolvable;
  /**
  * project block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#project FabricServiceProfile#project}
  */
  readonly project?: FabricServiceProfileProject;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#timeouts FabricServiceProfile#timeouts}
  */
  readonly timeouts?: FabricServiceProfileTimeouts;
  /**
  * virtual_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#virtual_devices FabricServiceProfile#virtual_devices}
  */
  readonly virtualDevices?: FabricServiceProfileVirtualDevices[] | cdktf.IResolvable;
}
export interface FabricServiceProfileAccount {
}

export function fabricServiceProfileAccountToTerraform(struct?: FabricServiceProfileAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricServiceProfileAccountToHclTerraform(struct?: FabricServiceProfileAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricServiceProfileAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceProfileAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_number - computed: true, optional: false, required: false
  public get accountNumber() {
    return this.getNumberAttribute('account_number');
  }

  // global_cust_id - computed: true, optional: false, required: false
  public get globalCustId() {
    return this.getStringAttribute('global_cust_id');
  }

  // global_org_id - computed: true, optional: false, required: false
  public get globalOrgId() {
    return this.getStringAttribute('global_org_id');
  }

  // global_organization_name - computed: true, optional: false, required: false
  public get globalOrganizationName() {
    return this.getStringAttribute('global_organization_name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // ucm_id - computed: true, optional: false, required: false
  public get ucmId() {
    return this.getStringAttribute('ucm_id');
  }
}

export class FabricServiceProfileAccountList extends cdktf.ComplexList {

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
  public get(index: number): FabricServiceProfileAccountOutputReference {
    return new FabricServiceProfileAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceProfileChangeLog {
}

export function fabricServiceProfileChangeLogToTerraform(struct?: FabricServiceProfileChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricServiceProfileChangeLogToHclTerraform(struct?: FabricServiceProfileChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricServiceProfileChangeLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceProfileChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileChangeLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_full_name - computed: true, optional: false, required: false
  public get createdByFullName() {
    return this.getStringAttribute('created_by_full_name');
  }

  // created_date_time - computed: true, optional: false, required: false
  public get createdDateTime() {
    return this.getStringAttribute('created_date_time');
  }

  // deleted_by - computed: true, optional: false, required: false
  public get deletedBy() {
    return this.getStringAttribute('deleted_by');
  }

  // deleted_by_email - computed: true, optional: false, required: false
  public get deletedByEmail() {
    return this.getStringAttribute('deleted_by_email');
  }

  // deleted_by_full_name - computed: true, optional: false, required: false
  public get deletedByFullName() {
    return this.getStringAttribute('deleted_by_full_name');
  }

  // deleted_date_time - computed: true, optional: false, required: false
  public get deletedDateTime() {
    return this.getStringAttribute('deleted_date_time');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_email - computed: true, optional: false, required: false
  public get updatedByEmail() {
    return this.getStringAttribute('updated_by_email');
  }

  // updated_by_full_name - computed: true, optional: false, required: false
  public get updatedByFullName() {
    return this.getStringAttribute('updated_by_full_name');
  }

  // updated_date_time - computed: true, optional: false, required: false
  public get updatedDateTime() {
    return this.getStringAttribute('updated_date_time');
  }
}

export class FabricServiceProfileChangeLogList extends cdktf.ComplexList {

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
  public get(index: number): FabricServiceProfileChangeLogOutputReference {
    return new FabricServiceProfileChangeLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceProfileAccessPointTypeConfigsApiConfig {
  /**
  * Setting showing that oversubscription support is available (true) or not (false). The default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#allow_over_subscription FabricServiceProfile#allow_over_subscription}
  */
  readonly allowOverSubscription?: boolean | cdktf.IResolvable;
  /**
  * Indicates if it's possible to establish connections based on the given service profile using the Equinix Fabric API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#api_available FabricServiceProfile#api_available}
  */
  readonly apiAvailable?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the connection bandwidth can be obtained directly from the cloud service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#bandwidth_from_api FabricServiceProfile#bandwidth_from_api}
  */
  readonly bandwidthFromApi?: boolean | cdktf.IResolvable;
  /**
  * Setting indicating that the port is managed by Equinix (true) or not (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#equinix_managed_port FabricServiceProfile#equinix_managed_port}
  */
  readonly equinixManagedPort?: boolean | cdktf.IResolvable;
  /**
  * Setting indicating that the VLAN is managed by Equinix (true) or not (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#equinix_managed_vlan FabricServiceProfile#equinix_managed_vlan}
  */
  readonly equinixManagedVlan?: boolean | cdktf.IResolvable;
  /**
  * A unique identifier issued during onboarding and used to integrate the customer's service profile with the Equinix Fabric API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#integration_id FabricServiceProfile#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Port bandwidth multiplier that determines the total bandwidth that can be allocated to users creating connections to your services. For example, a 10 Gbps port combined with an overSubscriptionLimit parameter value of 10 allows your subscribers to create connections with a total bandwidth of 100 Gbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#over_subscription_limit FabricServiceProfile#over_subscription_limit}
  */
  readonly overSubscriptionLimit?: number;
}

export function fabricServiceProfileAccessPointTypeConfigsApiConfigToTerraform(struct?: FabricServiceProfileAccessPointTypeConfigsApiConfigOutputReference | FabricServiceProfileAccessPointTypeConfigsApiConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_over_subscription: cdktf.booleanToTerraform(struct!.allowOverSubscription),
    api_available: cdktf.booleanToTerraform(struct!.apiAvailable),
    bandwidth_from_api: cdktf.booleanToTerraform(struct!.bandwidthFromApi),
    equinix_managed_port: cdktf.booleanToTerraform(struct!.equinixManagedPort),
    equinix_managed_vlan: cdktf.booleanToTerraform(struct!.equinixManagedVlan),
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    over_subscription_limit: cdktf.numberToTerraform(struct!.overSubscriptionLimit),
  }
}


export function fabricServiceProfileAccessPointTypeConfigsApiConfigToHclTerraform(struct?: FabricServiceProfileAccessPointTypeConfigsApiConfigOutputReference | FabricServiceProfileAccessPointTypeConfigsApiConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_over_subscription: {
      value: cdktf.booleanToHclTerraform(struct!.allowOverSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_available: {
      value: cdktf.booleanToHclTerraform(struct!.apiAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bandwidth_from_api: {
      value: cdktf.booleanToHclTerraform(struct!.bandwidthFromApi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    equinix_managed_port: {
      value: cdktf.booleanToHclTerraform(struct!.equinixManagedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    equinix_managed_vlan: {
      value: cdktf.booleanToHclTerraform(struct!.equinixManagedVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    over_subscription_limit: {
      value: cdktf.numberToHclTerraform(struct!.overSubscriptionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfileAccessPointTypeConfigsApiConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceProfileAccessPointTypeConfigsApiConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowOverSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOverSubscription = this._allowOverSubscription;
    }
    if (this._apiAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiAvailable = this._apiAvailable;
    }
    if (this._bandwidthFromApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthFromApi = this._bandwidthFromApi;
    }
    if (this._equinixManagedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.equinixManagedPort = this._equinixManagedPort;
    }
    if (this._equinixManagedVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.equinixManagedVlan = this._equinixManagedVlan;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._overSubscriptionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.overSubscriptionLimit = this._overSubscriptionLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileAccessPointTypeConfigsApiConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowOverSubscription = undefined;
      this._apiAvailable = undefined;
      this._bandwidthFromApi = undefined;
      this._equinixManagedPort = undefined;
      this._equinixManagedVlan = undefined;
      this._integrationId = undefined;
      this._overSubscriptionLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowOverSubscription = value.allowOverSubscription;
      this._apiAvailable = value.apiAvailable;
      this._bandwidthFromApi = value.bandwidthFromApi;
      this._equinixManagedPort = value.equinixManagedPort;
      this._equinixManagedVlan = value.equinixManagedVlan;
      this._integrationId = value.integrationId;
      this._overSubscriptionLimit = value.overSubscriptionLimit;
    }
  }

  // allow_over_subscription - computed: false, optional: true, required: false
  private _allowOverSubscription?: boolean | cdktf.IResolvable; 
  public get allowOverSubscription() {
    return this.getBooleanAttribute('allow_over_subscription');
  }
  public set allowOverSubscription(value: boolean | cdktf.IResolvable) {
    this._allowOverSubscription = value;
  }
  public resetAllowOverSubscription() {
    this._allowOverSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverSubscriptionInput() {
    return this._allowOverSubscription;
  }

  // api_available - computed: false, optional: true, required: false
  private _apiAvailable?: boolean | cdktf.IResolvable; 
  public get apiAvailable() {
    return this.getBooleanAttribute('api_available');
  }
  public set apiAvailable(value: boolean | cdktf.IResolvable) {
    this._apiAvailable = value;
  }
  public resetApiAvailable() {
    this._apiAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAvailableInput() {
    return this._apiAvailable;
  }

  // bandwidth_from_api - computed: false, optional: true, required: false
  private _bandwidthFromApi?: boolean | cdktf.IResolvable; 
  public get bandwidthFromApi() {
    return this.getBooleanAttribute('bandwidth_from_api');
  }
  public set bandwidthFromApi(value: boolean | cdktf.IResolvable) {
    this._bandwidthFromApi = value;
  }
  public resetBandwidthFromApi() {
    this._bandwidthFromApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthFromApiInput() {
    return this._bandwidthFromApi;
  }

  // equinix_managed_port - computed: false, optional: true, required: false
  private _equinixManagedPort?: boolean | cdktf.IResolvable; 
  public get equinixManagedPort() {
    return this.getBooleanAttribute('equinix_managed_port');
  }
  public set equinixManagedPort(value: boolean | cdktf.IResolvable) {
    this._equinixManagedPort = value;
  }
  public resetEquinixManagedPort() {
    this._equinixManagedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equinixManagedPortInput() {
    return this._equinixManagedPort;
  }

  // equinix_managed_vlan - computed: false, optional: true, required: false
  private _equinixManagedVlan?: boolean | cdktf.IResolvable; 
  public get equinixManagedVlan() {
    return this.getBooleanAttribute('equinix_managed_vlan');
  }
  public set equinixManagedVlan(value: boolean | cdktf.IResolvable) {
    this._equinixManagedVlan = value;
  }
  public resetEquinixManagedVlan() {
    this._equinixManagedVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equinixManagedVlanInput() {
    return this._equinixManagedVlan;
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // over_subscription_limit - computed: false, optional: true, required: false
  private _overSubscriptionLimit?: number; 
  public get overSubscriptionLimit() {
    return this.getNumberAttribute('over_subscription_limit');
  }
  public set overSubscriptionLimit(value: number) {
    this._overSubscriptionLimit = value;
  }
  public resetOverSubscriptionLimit() {
    this._overSubscriptionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overSubscriptionLimitInput() {
    return this._overSubscriptionLimit;
  }
}
export interface FabricServiceProfileAccessPointTypeConfigsAuthenticationKey {
  /**
  * Description of authorization key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#description FabricServiceProfile#description}
  */
  readonly description?: string;
  /**
  * Name of the parameter that must be provided to authorize the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#label FabricServiceProfile#label}
  */
  readonly label?: string;
  /**
  * Requirement to configure an authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#required FabricServiceProfile#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function fabricServiceProfileAccessPointTypeConfigsAuthenticationKeyToTerraform(struct?: FabricServiceProfileAccessPointTypeConfigsAuthenticationKeyOutputReference | FabricServiceProfileAccessPointTypeConfigsAuthenticationKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    label: cdktf.stringToTerraform(struct!.label),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function fabricServiceProfileAccessPointTypeConfigsAuthenticationKeyToHclTerraform(struct?: FabricServiceProfileAccessPointTypeConfigsAuthenticationKeyOutputReference | FabricServiceProfileAccessPointTypeConfigsAuthenticationKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfileAccessPointTypeConfigsAuthenticationKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceProfileAccessPointTypeConfigsAuthenticationKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileAccessPointTypeConfigsAuthenticationKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._label = undefined;
      this._required = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._label = value.label;
      this._required = value.required;
    }
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface FabricServiceProfileAccessPointTypeConfigsLinkProtocolConfig {
  /**
  * Data frames encapsulation standard.UNTAGGED - Untagged encapsulation for EPL connections. DOT1Q - DOT1Q encapsulation standard. QINQ - QINQ encapsulation standard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#encapsulation FabricServiceProfile#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Additional tagging information required by the seller profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#encapsulation_strategy FabricServiceProfile#encapsulation_strategy}
  */
  readonly encapsulationStrategy?: string;
  /**
  * Automatically accept subsequent DOT1Q to QINQ connections that use the same authentication key. These connections will have the same VLAN S-tag assigned as the initial connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#reuse_vlan_s_tag FabricServiceProfile#reuse_vlan_s_tag}
  */
  readonly reuseVlanSTag?: boolean | cdktf.IResolvable;
}

export function fabricServiceProfileAccessPointTypeConfigsLinkProtocolConfigToTerraform(struct?: FabricServiceProfileAccessPointTypeConfigsLinkProtocolConfigOutputReference | FabricServiceProfileAccessPointTypeConfigsLinkProtocolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encapsulation: cdktf.stringToTerraform(struct!.encapsulation),
    encapsulation_strategy: cdktf.stringToTerraform(struct!.encapsulationStrategy),
    reuse_vlan_s_tag: cdktf.booleanToTerraform(struct!.reuseVlanSTag),
  }
}


export function fabricServiceProfileAccessPointTypeConfigsLinkProtocolConfigToHclTerraform(struct?: FabricServiceProfileAccessPointTypeConfigsLinkProtocolConfigOutputReference | FabricServiceProfileAccessPointTypeConfigsLinkProtocolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.encapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encapsulation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.encapsulationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reuse_vlan_s_tag: {
      value: cdktf.booleanToHclTerraform(struct!.reuseVlanSTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfileAccessPointTypeConfigsLinkProtocolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceProfileAccessPointTypeConfigsLinkProtocolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulation = this._encapsulation;
    }
    if (this._encapsulationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulationStrategy = this._encapsulationStrategy;
    }
    if (this._reuseVlanSTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseVlanSTag = this._reuseVlanSTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileAccessPointTypeConfigsLinkProtocolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encapsulation = undefined;
      this._encapsulationStrategy = undefined;
      this._reuseVlanSTag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encapsulation = value.encapsulation;
      this._encapsulationStrategy = value.encapsulationStrategy;
      this._reuseVlanSTag = value.reuseVlanSTag;
    }
  }

  // encapsulation - computed: false, optional: true, required: false
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  public resetEncapsulation() {
    this._encapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
  }

  // encapsulation_strategy - computed: false, optional: true, required: false
  private _encapsulationStrategy?: string; 
  public get encapsulationStrategy() {
    return this.getStringAttribute('encapsulation_strategy');
  }
  public set encapsulationStrategy(value: string) {
    this._encapsulationStrategy = value;
  }
  public resetEncapsulationStrategy() {
    this._encapsulationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationStrategyInput() {
    return this._encapsulationStrategy;
  }

  // reuse_vlan_s_tag - computed: false, optional: true, required: false
  private _reuseVlanSTag?: boolean | cdktf.IResolvable; 
  public get reuseVlanSTag() {
    return this.getBooleanAttribute('reuse_vlan_s_tag');
  }
  public set reuseVlanSTag(value: boolean | cdktf.IResolvable) {
    this._reuseVlanSTag = value;
  }
  public resetReuseVlanSTag() {
    this._reuseVlanSTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseVlanSTagInput() {
    return this._reuseVlanSTag;
  }
}
export interface FabricServiceProfileAccessPointTypeConfigs {
  /**
  * Setting to enable or disable the ability of the buyer to change connection bandwidth without approval of the seller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#allow_bandwidth_auto_approval FabricServiceProfile#allow_bandwidth_auto_approval}
  */
  readonly allowBandwidthAutoApproval?: boolean | cdktf.IResolvable;
  /**
  * Availability of a bandwidth upgrade. The default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#allow_bandwidth_upgrade FabricServiceProfile#allow_bandwidth_upgrade}
  */
  readonly allowBandwidthUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Setting to enable or disable the ability of the buyer to customize the bandwidth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#allow_custom_bandwidth FabricServiceProfile#allow_custom_bandwidth}
  */
  readonly allowCustomBandwidth?: boolean | cdktf.IResolvable;
  /**
  * Setting to allow or prohibit remote connections to the service profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#allow_remote_connections FabricServiceProfile#allow_remote_connections}
  */
  readonly allowRemoteConnections?: boolean | cdktf.IResolvable;
  /**
  * Percentage of port bandwidth at which an allocation alert is generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#bandwidth_alert_threshold FabricServiceProfile#bandwidth_alert_threshold}
  */
  readonly bandwidthAlertThreshold?: number;
  /**
  * Custom name for Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#connection_label FabricServiceProfile#connection_label}
  */
  readonly connectionLabel?: string;
  /**
  * Mandate redundant connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#connection_redundancy_required FabricServiceProfile#connection_redundancy_required}
  */
  readonly connectionRedundancyRequired?: boolean | cdktf.IResolvable;
  /**
  * Enable auto generate service key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#enable_auto_generate_service_key FabricServiceProfile#enable_auto_generate_service_key}
  */
  readonly enableAutoGenerateServiceKey?: boolean | cdktf.IResolvable;
  /**
  * Optional redundant connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#selective_redundancy FabricServiceProfile#selective_redundancy}
  */
  readonly selectiveRedundancy?: boolean | cdktf.IResolvable;
  /**
  * Supported bandwidths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#supported_bandwidths FabricServiceProfile#supported_bandwidths}
  */
  readonly supportedBandwidths?: number[];
  /**
  * Type of access point type config - VD, COLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#type FabricServiceProfile#type}
  */
  readonly type: string;
  /**
  * api_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#api_config FabricServiceProfile#api_config}
  */
  readonly apiConfig?: FabricServiceProfileAccessPointTypeConfigsApiConfig;
  /**
  * authentication_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#authentication_key FabricServiceProfile#authentication_key}
  */
  readonly authenticationKey?: FabricServiceProfileAccessPointTypeConfigsAuthenticationKey;
  /**
  * link_protocol_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#link_protocol_config FabricServiceProfile#link_protocol_config}
  */
  readonly linkProtocolConfig?: FabricServiceProfileAccessPointTypeConfigsLinkProtocolConfig;
}

export function fabricServiceProfileAccessPointTypeConfigsToTerraform(struct?: FabricServiceProfileAccessPointTypeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_bandwidth_auto_approval: cdktf.booleanToTerraform(struct!.allowBandwidthAutoApproval),
    allow_bandwidth_upgrade: cdktf.booleanToTerraform(struct!.allowBandwidthUpgrade),
    allow_custom_bandwidth: cdktf.booleanToTerraform(struct!.allowCustomBandwidth),
    allow_remote_connections: cdktf.booleanToTerraform(struct!.allowRemoteConnections),
    bandwidth_alert_threshold: cdktf.numberToTerraform(struct!.bandwidthAlertThreshold),
    connection_label: cdktf.stringToTerraform(struct!.connectionLabel),
    connection_redundancy_required: cdktf.booleanToTerraform(struct!.connectionRedundancyRequired),
    enable_auto_generate_service_key: cdktf.booleanToTerraform(struct!.enableAutoGenerateServiceKey),
    selective_redundancy: cdktf.booleanToTerraform(struct!.selectiveRedundancy),
    supported_bandwidths: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.supportedBandwidths),
    type: cdktf.stringToTerraform(struct!.type),
    api_config: fabricServiceProfileAccessPointTypeConfigsApiConfigToTerraform(struct!.apiConfig),
    authentication_key: fabricServiceProfileAccessPointTypeConfigsAuthenticationKeyToTerraform(struct!.authenticationKey),
    link_protocol_config: fabricServiceProfileAccessPointTypeConfigsLinkProtocolConfigToTerraform(struct!.linkProtocolConfig),
  }
}


export function fabricServiceProfileAccessPointTypeConfigsToHclTerraform(struct?: FabricServiceProfileAccessPointTypeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_bandwidth_auto_approval: {
      value: cdktf.booleanToHclTerraform(struct!.allowBandwidthAutoApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_bandwidth_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.allowBandwidthUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_custom_bandwidth: {
      value: cdktf.booleanToHclTerraform(struct!.allowCustomBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_remote_connections: {
      value: cdktf.booleanToHclTerraform(struct!.allowRemoteConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bandwidth_alert_threshold: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthAlertThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_label: {
      value: cdktf.stringToHclTerraform(struct!.connectionLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_redundancy_required: {
      value: cdktf.booleanToHclTerraform(struct!.connectionRedundancyRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_auto_generate_service_key: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoGenerateServiceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selective_redundancy: {
      value: cdktf.booleanToHclTerraform(struct!.selectiveRedundancy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    supported_bandwidths: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.supportedBandwidths),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_config: {
      value: fabricServiceProfileAccessPointTypeConfigsApiConfigToHclTerraform(struct!.apiConfig),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceProfileAccessPointTypeConfigsApiConfigList",
    },
    authentication_key: {
      value: fabricServiceProfileAccessPointTypeConfigsAuthenticationKeyToHclTerraform(struct!.authenticationKey),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceProfileAccessPointTypeConfigsAuthenticationKeyList",
    },
    link_protocol_config: {
      value: fabricServiceProfileAccessPointTypeConfigsLinkProtocolConfigToHclTerraform(struct!.linkProtocolConfig),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceProfileAccessPointTypeConfigsLinkProtocolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfileAccessPointTypeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceProfileAccessPointTypeConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowBandwidthAutoApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowBandwidthAutoApproval = this._allowBandwidthAutoApproval;
    }
    if (this._allowBandwidthUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowBandwidthUpgrade = this._allowBandwidthUpgrade;
    }
    if (this._allowCustomBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCustomBandwidth = this._allowCustomBandwidth;
    }
    if (this._allowRemoteConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteConnections = this._allowRemoteConnections;
    }
    if (this._bandwidthAlertThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthAlertThreshold = this._bandwidthAlertThreshold;
    }
    if (this._connectionLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLabel = this._connectionLabel;
    }
    if (this._connectionRedundancyRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRedundancyRequired = this._connectionRedundancyRequired;
    }
    if (this._enableAutoGenerateServiceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoGenerateServiceKey = this._enableAutoGenerateServiceKey;
    }
    if (this._selectiveRedundancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectiveRedundancy = this._selectiveRedundancy;
    }
    if (this._supportedBandwidths !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedBandwidths = this._supportedBandwidths;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._apiConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiConfig = this._apiConfig?.internalValue;
    }
    if (this._authenticationKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey?.internalValue;
    }
    if (this._linkProtocolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkProtocolConfig = this._linkProtocolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileAccessPointTypeConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowBandwidthAutoApproval = undefined;
      this._allowBandwidthUpgrade = undefined;
      this._allowCustomBandwidth = undefined;
      this._allowRemoteConnections = undefined;
      this._bandwidthAlertThreshold = undefined;
      this._connectionLabel = undefined;
      this._connectionRedundancyRequired = undefined;
      this._enableAutoGenerateServiceKey = undefined;
      this._selectiveRedundancy = undefined;
      this._supportedBandwidths = undefined;
      this._type = undefined;
      this._apiConfig.internalValue = undefined;
      this._authenticationKey.internalValue = undefined;
      this._linkProtocolConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowBandwidthAutoApproval = value.allowBandwidthAutoApproval;
      this._allowBandwidthUpgrade = value.allowBandwidthUpgrade;
      this._allowCustomBandwidth = value.allowCustomBandwidth;
      this._allowRemoteConnections = value.allowRemoteConnections;
      this._bandwidthAlertThreshold = value.bandwidthAlertThreshold;
      this._connectionLabel = value.connectionLabel;
      this._connectionRedundancyRequired = value.connectionRedundancyRequired;
      this._enableAutoGenerateServiceKey = value.enableAutoGenerateServiceKey;
      this._selectiveRedundancy = value.selectiveRedundancy;
      this._supportedBandwidths = value.supportedBandwidths;
      this._type = value.type;
      this._apiConfig.internalValue = value.apiConfig;
      this._authenticationKey.internalValue = value.authenticationKey;
      this._linkProtocolConfig.internalValue = value.linkProtocolConfig;
    }
  }

  // allow_bandwidth_auto_approval - computed: false, optional: true, required: false
  private _allowBandwidthAutoApproval?: boolean | cdktf.IResolvable; 
  public get allowBandwidthAutoApproval() {
    return this.getBooleanAttribute('allow_bandwidth_auto_approval');
  }
  public set allowBandwidthAutoApproval(value: boolean | cdktf.IResolvable) {
    this._allowBandwidthAutoApproval = value;
  }
  public resetAllowBandwidthAutoApproval() {
    this._allowBandwidthAutoApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBandwidthAutoApprovalInput() {
    return this._allowBandwidthAutoApproval;
  }

  // allow_bandwidth_upgrade - computed: false, optional: true, required: false
  private _allowBandwidthUpgrade?: boolean | cdktf.IResolvable; 
  public get allowBandwidthUpgrade() {
    return this.getBooleanAttribute('allow_bandwidth_upgrade');
  }
  public set allowBandwidthUpgrade(value: boolean | cdktf.IResolvable) {
    this._allowBandwidthUpgrade = value;
  }
  public resetAllowBandwidthUpgrade() {
    this._allowBandwidthUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBandwidthUpgradeInput() {
    return this._allowBandwidthUpgrade;
  }

  // allow_custom_bandwidth - computed: false, optional: true, required: false
  private _allowCustomBandwidth?: boolean | cdktf.IResolvable; 
  public get allowCustomBandwidth() {
    return this.getBooleanAttribute('allow_custom_bandwidth');
  }
  public set allowCustomBandwidth(value: boolean | cdktf.IResolvable) {
    this._allowCustomBandwidth = value;
  }
  public resetAllowCustomBandwidth() {
    this._allowCustomBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCustomBandwidthInput() {
    return this._allowCustomBandwidth;
  }

  // allow_remote_connections - computed: false, optional: true, required: false
  private _allowRemoteConnections?: boolean | cdktf.IResolvable; 
  public get allowRemoteConnections() {
    return this.getBooleanAttribute('allow_remote_connections');
  }
  public set allowRemoteConnections(value: boolean | cdktf.IResolvable) {
    this._allowRemoteConnections = value;
  }
  public resetAllowRemoteConnections() {
    this._allowRemoteConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteConnectionsInput() {
    return this._allowRemoteConnections;
  }

  // bandwidth_alert_threshold - computed: false, optional: true, required: false
  private _bandwidthAlertThreshold?: number; 
  public get bandwidthAlertThreshold() {
    return this.getNumberAttribute('bandwidth_alert_threshold');
  }
  public set bandwidthAlertThreshold(value: number) {
    this._bandwidthAlertThreshold = value;
  }
  public resetBandwidthAlertThreshold() {
    this._bandwidthAlertThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAlertThresholdInput() {
    return this._bandwidthAlertThreshold;
  }

  // connection_label - computed: false, optional: true, required: false
  private _connectionLabel?: string; 
  public get connectionLabel() {
    return this.getStringAttribute('connection_label');
  }
  public set connectionLabel(value: string) {
    this._connectionLabel = value;
  }
  public resetConnectionLabel() {
    this._connectionLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLabelInput() {
    return this._connectionLabel;
  }

  // connection_redundancy_required - computed: false, optional: true, required: false
  private _connectionRedundancyRequired?: boolean | cdktf.IResolvable; 
  public get connectionRedundancyRequired() {
    return this.getBooleanAttribute('connection_redundancy_required');
  }
  public set connectionRedundancyRequired(value: boolean | cdktf.IResolvable) {
    this._connectionRedundancyRequired = value;
  }
  public resetConnectionRedundancyRequired() {
    this._connectionRedundancyRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRedundancyRequiredInput() {
    return this._connectionRedundancyRequired;
  }

  // enable_auto_generate_service_key - computed: false, optional: true, required: false
  private _enableAutoGenerateServiceKey?: boolean | cdktf.IResolvable; 
  public get enableAutoGenerateServiceKey() {
    return this.getBooleanAttribute('enable_auto_generate_service_key');
  }
  public set enableAutoGenerateServiceKey(value: boolean | cdktf.IResolvable) {
    this._enableAutoGenerateServiceKey = value;
  }
  public resetEnableAutoGenerateServiceKey() {
    this._enableAutoGenerateServiceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoGenerateServiceKeyInput() {
    return this._enableAutoGenerateServiceKey;
  }

  // selective_redundancy - computed: false, optional: true, required: false
  private _selectiveRedundancy?: boolean | cdktf.IResolvable; 
  public get selectiveRedundancy() {
    return this.getBooleanAttribute('selective_redundancy');
  }
  public set selectiveRedundancy(value: boolean | cdktf.IResolvable) {
    this._selectiveRedundancy = value;
  }
  public resetSelectiveRedundancy() {
    this._selectiveRedundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectiveRedundancyInput() {
    return this._selectiveRedundancy;
  }

  // supported_bandwidths - computed: false, optional: true, required: false
  private _supportedBandwidths?: number[]; 
  public get supportedBandwidths() {
    return this.getNumberListAttribute('supported_bandwidths');
  }
  public set supportedBandwidths(value: number[]) {
    this._supportedBandwidths = value;
  }
  public resetSupportedBandwidths() {
    this._supportedBandwidths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedBandwidthsInput() {
    return this._supportedBandwidths;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // api_config - computed: false, optional: true, required: false
  private _apiConfig = new FabricServiceProfileAccessPointTypeConfigsApiConfigOutputReference(this, "api_config");
  public get apiConfig() {
    return this._apiConfig;
  }
  public putApiConfig(value: FabricServiceProfileAccessPointTypeConfigsApiConfig) {
    this._apiConfig.internalValue = value;
  }
  public resetApiConfig() {
    this._apiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiConfigInput() {
    return this._apiConfig.internalValue;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey = new FabricServiceProfileAccessPointTypeConfigsAuthenticationKeyOutputReference(this, "authentication_key");
  public get authenticationKey() {
    return this._authenticationKey;
  }
  public putAuthenticationKey(value: FabricServiceProfileAccessPointTypeConfigsAuthenticationKey) {
    this._authenticationKey.internalValue = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey.internalValue;
  }

  // link_protocol_config - computed: false, optional: true, required: false
  private _linkProtocolConfig = new FabricServiceProfileAccessPointTypeConfigsLinkProtocolConfigOutputReference(this, "link_protocol_config");
  public get linkProtocolConfig() {
    return this._linkProtocolConfig;
  }
  public putLinkProtocolConfig(value: FabricServiceProfileAccessPointTypeConfigsLinkProtocolConfig) {
    this._linkProtocolConfig.internalValue = value;
  }
  public resetLinkProtocolConfig() {
    this._linkProtocolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkProtocolConfigInput() {
    return this._linkProtocolConfig.internalValue;
  }
}

export class FabricServiceProfileAccessPointTypeConfigsList extends cdktf.ComplexList {
  public internalValue? : FabricServiceProfileAccessPointTypeConfigs[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceProfileAccessPointTypeConfigsOutputReference {
    return new FabricServiceProfileAccessPointTypeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceProfileCustomFields {
  /**
  * Required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#capture_in_email FabricServiceProfile#capture_in_email}
  */
  readonly captureInEmail?: boolean | cdktf.IResolvable;
  /**
  * Data type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#data_type FabricServiceProfile#data_type}
  */
  readonly dataType: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#description FabricServiceProfile#description}
  */
  readonly description?: string;
  /**
  * Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#label FabricServiceProfile#label}
  */
  readonly label: string;
  /**
  * Options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#options FabricServiceProfile#options}
  */
  readonly options?: string[];
  /**
  * Required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#required FabricServiceProfile#required}
  */
  readonly required: boolean | cdktf.IResolvable;
}

export function fabricServiceProfileCustomFieldsToTerraform(struct?: FabricServiceProfileCustomFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_in_email: cdktf.booleanToTerraform(struct!.captureInEmail),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    description: cdktf.stringToTerraform(struct!.description),
    label: cdktf.stringToTerraform(struct!.label),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function fabricServiceProfileCustomFieldsToHclTerraform(struct?: FabricServiceProfileCustomFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_in_email: {
      value: cdktf.booleanToHclTerraform(struct!.captureInEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfileCustomFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceProfileCustomFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureInEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureInEmail = this._captureInEmail;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileCustomFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureInEmail = undefined;
      this._dataType = undefined;
      this._description = undefined;
      this._label = undefined;
      this._options = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureInEmail = value.captureInEmail;
      this._dataType = value.dataType;
      this._description = value.description;
      this._label = value.label;
      this._options = value.options;
      this._required = value.required;
    }
  }

  // capture_in_email - computed: false, optional: true, required: false
  private _captureInEmail?: boolean | cdktf.IResolvable; 
  public get captureInEmail() {
    return this.getBooleanAttribute('capture_in_email');
  }
  public set captureInEmail(value: boolean | cdktf.IResolvable) {
    this._captureInEmail = value;
  }
  public resetCaptureInEmail() {
    this._captureInEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureInEmailInput() {
    return this._captureInEmail;
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}

export class FabricServiceProfileCustomFieldsList extends cdktf.ComplexList {
  public internalValue? : FabricServiceProfileCustomFields[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceProfileCustomFieldsOutputReference {
    return new FabricServiceProfileCustomFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceProfileMarketingInfoProcessStep {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#description FabricServiceProfile#description}
  */
  readonly description?: string;
  /**
  * Sub Title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#sub_title FabricServiceProfile#sub_title}
  */
  readonly subTitle?: string;
  /**
  * Title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#title FabricServiceProfile#title}
  */
  readonly title?: string;
}

export function fabricServiceProfileMarketingInfoProcessStepToTerraform(struct?: FabricServiceProfileMarketingInfoProcessStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    sub_title: cdktf.stringToTerraform(struct!.subTitle),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function fabricServiceProfileMarketingInfoProcessStepToHclTerraform(struct?: FabricServiceProfileMarketingInfoProcessStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_title: {
      value: cdktf.stringToHclTerraform(struct!.subTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfileMarketingInfoProcessStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceProfileMarketingInfoProcessStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._subTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTitle = this._subTitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileMarketingInfoProcessStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._subTitle = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._subTitle = value.subTitle;
      this._title = value.title;
    }
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

  // sub_title - computed: false, optional: true, required: false
  private _subTitle?: string; 
  public get subTitle() {
    return this.getStringAttribute('sub_title');
  }
  public set subTitle(value: string) {
    this._subTitle = value;
  }
  public resetSubTitle() {
    this._subTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTitleInput() {
    return this._subTitle;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class FabricServiceProfileMarketingInfoProcessStepList extends cdktf.ComplexList {
  public internalValue? : FabricServiceProfileMarketingInfoProcessStep[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceProfileMarketingInfoProcessStepOutputReference {
    return new FabricServiceProfileMarketingInfoProcessStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceProfileMarketingInfo {
  /**
  * Logo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#logo FabricServiceProfile#logo}
  */
  readonly logo?: string;
  /**
  * Promotion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#promotion FabricServiceProfile#promotion}
  */
  readonly promotion?: boolean | cdktf.IResolvable;
  /**
  * process_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#process_step FabricServiceProfile#process_step}
  */
  readonly processStep?: FabricServiceProfileMarketingInfoProcessStep[] | cdktf.IResolvable;
}

export function fabricServiceProfileMarketingInfoToTerraform(struct?: FabricServiceProfileMarketingInfoOutputReference | FabricServiceProfileMarketingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logo: cdktf.stringToTerraform(struct!.logo),
    promotion: cdktf.booleanToTerraform(struct!.promotion),
    process_step: cdktf.listMapper(fabricServiceProfileMarketingInfoProcessStepToTerraform, true)(struct!.processStep),
  }
}


export function fabricServiceProfileMarketingInfoToHclTerraform(struct?: FabricServiceProfileMarketingInfoOutputReference | FabricServiceProfileMarketingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logo: {
      value: cdktf.stringToHclTerraform(struct!.logo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promotion: {
      value: cdktf.booleanToHclTerraform(struct!.promotion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    process_step: {
      value: cdktf.listMapperHcl(fabricServiceProfileMarketingInfoProcessStepToHclTerraform, true)(struct!.processStep),
      isBlock: true,
      type: "list",
      storageClassType: "FabricServiceProfileMarketingInfoProcessStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfileMarketingInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceProfileMarketingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._promotion !== undefined) {
      hasAnyValues = true;
      internalValueResult.promotion = this._promotion;
    }
    if (this._processStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processStep = this._processStep?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileMarketingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logo = undefined;
      this._promotion = undefined;
      this._processStep.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logo = value.logo;
      this._promotion = value.promotion;
      this._processStep.internalValue = value.processStep;
    }
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // promotion - computed: false, optional: true, required: false
  private _promotion?: boolean | cdktf.IResolvable; 
  public get promotion() {
    return this.getBooleanAttribute('promotion');
  }
  public set promotion(value: boolean | cdktf.IResolvable) {
    this._promotion = value;
  }
  public resetPromotion() {
    this._promotion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promotionInput() {
    return this._promotion;
  }

  // process_step - computed: false, optional: true, required: false
  private _processStep = new FabricServiceProfileMarketingInfoProcessStepList(this, "process_step", false);
  public get processStep() {
    return this._processStep;
  }
  public putProcessStep(value: FabricServiceProfileMarketingInfoProcessStep[] | cdktf.IResolvable) {
    this._processStep.internalValue = value;
  }
  public resetProcessStep() {
    this._processStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processStepInput() {
    return this._processStep.internalValue;
  }
}
export interface FabricServiceProfileMetros {
  /**
  * Metro Code - Example SV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#code FabricServiceProfile#code}
  */
  readonly code?: string;
  /**
  * Display Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#display_name FabricServiceProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * IBX- Equinix International Business Exchange list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#ibxs FabricServiceProfile#ibxs}
  */
  readonly ibxs?: string[];
  /**
  * In Trail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#in_trail FabricServiceProfile#in_trail}
  */
  readonly inTrail?: boolean | cdktf.IResolvable;
  /**
  * Metro Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#name FabricServiceProfile#name}
  */
  readonly name?: string;
  /**
  * Seller Regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#seller_regions FabricServiceProfile#seller_regions}
  */
  readonly sellerRegions?: { [key: string]: string };
}

export function fabricServiceProfileMetrosToTerraform(struct?: FabricServiceProfileMetros | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    ibxs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ibxs),
    in_trail: cdktf.booleanToTerraform(struct!.inTrail),
    name: cdktf.stringToTerraform(struct!.name),
    seller_regions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sellerRegions),
  }
}


export function fabricServiceProfileMetrosToHclTerraform(struct?: FabricServiceProfileMetros | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ibxs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ibxs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    in_trail: {
      value: cdktf.booleanToHclTerraform(struct!.inTrail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seller_regions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sellerRegions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfileMetrosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceProfileMetros | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._ibxs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibxs = this._ibxs;
    }
    if (this._inTrail !== undefined) {
      hasAnyValues = true;
      internalValueResult.inTrail = this._inTrail;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sellerRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.sellerRegions = this._sellerRegions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileMetros | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._displayName = undefined;
      this._ibxs = undefined;
      this._inTrail = undefined;
      this._name = undefined;
      this._sellerRegions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._displayName = value.displayName;
      this._ibxs = value.ibxs;
      this._inTrail = value.inTrail;
      this._name = value.name;
      this._sellerRegions = value.sellerRegions;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // ibxs - computed: false, optional: true, required: false
  private _ibxs?: string[]; 
  public get ibxs() {
    return this.getListAttribute('ibxs');
  }
  public set ibxs(value: string[]) {
    this._ibxs = value;
  }
  public resetIbxs() {
    this._ibxs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibxsInput() {
    return this._ibxs;
  }

  // in_trail - computed: false, optional: true, required: false
  private _inTrail?: boolean | cdktf.IResolvable; 
  public get inTrail() {
    return this.getBooleanAttribute('in_trail');
  }
  public set inTrail(value: boolean | cdktf.IResolvable) {
    this._inTrail = value;
  }
  public resetInTrail() {
    this._inTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTrailInput() {
    return this._inTrail;
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

  // seller_regions - computed: false, optional: true, required: false
  private _sellerRegions?: { [key: string]: string }; 
  public get sellerRegions() {
    return this.getStringMapAttribute('seller_regions');
  }
  public set sellerRegions(value: { [key: string]: string }) {
    this._sellerRegions = value;
  }
  public resetSellerRegions() {
    this._sellerRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sellerRegionsInput() {
    return this._sellerRegions;
  }
}

export class FabricServiceProfileMetrosList extends cdktf.ComplexList {
  public internalValue? : FabricServiceProfileMetros[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceProfileMetrosOutputReference {
    return new FabricServiceProfileMetrosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceProfileNotifications {
  /**
  * Array of contact emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#emails FabricServiceProfile#emails}
  */
  readonly emails: string[];
  /**
  * Send interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#send_interval FabricServiceProfile#send_interval}
  */
  readonly sendInterval?: string;
  /**
  * Notification Type - ALL,CONNECTION_APPROVAL,SALES_REP_NOTIFICATIONS, NOTIFICATIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#type FabricServiceProfile#type}
  */
  readonly type: string;
}

export function fabricServiceProfileNotificationsToTerraform(struct?: FabricServiceProfileNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emails),
    send_interval: cdktf.stringToTerraform(struct!.sendInterval),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fabricServiceProfileNotificationsToHclTerraform(struct?: FabricServiceProfileNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    send_interval: {
      value: cdktf.stringToHclTerraform(struct!.sendInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfileNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceProfileNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    if (this._sendInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendInterval = this._sendInterval;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emails = undefined;
      this._sendInterval = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emails = value.emails;
      this._sendInterval = value.sendInterval;
      this._type = value.type;
    }
  }

  // emails - computed: false, optional: false, required: true
  private _emails?: string[]; 
  public get emails() {
    return this.getListAttribute('emails');
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }

  // send_interval - computed: false, optional: true, required: false
  private _sendInterval?: string; 
  public get sendInterval() {
    return this.getStringAttribute('send_interval');
  }
  public set sendInterval(value: string) {
    this._sendInterval = value;
  }
  public resetSendInterval() {
    this._sendInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIntervalInput() {
    return this._sendInterval;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FabricServiceProfileNotificationsList extends cdktf.ComplexList {
  public internalValue? : FabricServiceProfileNotifications[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceProfileNotificationsOutputReference {
    return new FabricServiceProfileNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceProfilePortsLocation {
  /**
  * IBX Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#ibx FabricServiceProfile#ibx}
  */
  readonly ibx?: string;
  /**
  * Access point metro code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#metro_code FabricServiceProfile#metro_code}
  */
  readonly metroCode?: string;
  /**
  * Access point metro name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#metro_name FabricServiceProfile#metro_name}
  */
  readonly metroName?: string;
  /**
  * Access point region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#region FabricServiceProfile#region}
  */
  readonly region?: string;
}

export function fabricServiceProfilePortsLocationToTerraform(struct?: FabricServiceProfilePortsLocationOutputReference | FabricServiceProfilePortsLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ibx: cdktf.stringToTerraform(struct!.ibx),
    metro_code: cdktf.stringToTerraform(struct!.metroCode),
    metro_name: cdktf.stringToTerraform(struct!.metroName),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function fabricServiceProfilePortsLocationToHclTerraform(struct?: FabricServiceProfilePortsLocationOutputReference | FabricServiceProfilePortsLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ibx: {
      value: cdktf.stringToHclTerraform(struct!.ibx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metro_code: {
      value: cdktf.stringToHclTerraform(struct!.metroCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metro_name: {
      value: cdktf.stringToHclTerraform(struct!.metroName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfilePortsLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceProfilePortsLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ibx !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibx = this._ibx;
    }
    if (this._metroCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroCode = this._metroCode;
    }
    if (this._metroName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroName = this._metroName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfilePortsLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ibx = undefined;
      this._metroCode = undefined;
      this._metroName = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ibx = value.ibx;
      this._metroCode = value.metroCode;
      this._metroName = value.metroName;
      this._region = value.region;
    }
  }

  // ibx - computed: true, optional: true, required: false
  private _ibx?: string; 
  public get ibx() {
    return this.getStringAttribute('ibx');
  }
  public set ibx(value: string) {
    this._ibx = value;
  }
  public resetIbx() {
    this._ibx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibxInput() {
    return this._ibx;
  }

  // metro_code - computed: true, optional: true, required: false
  private _metroCode?: string; 
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }
  public set metroCode(value: string) {
    this._metroCode = value;
  }
  public resetMetroCode() {
    this._metroCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodeInput() {
    return this._metroCode;
  }

  // metro_name - computed: true, optional: true, required: false
  private _metroName?: string; 
  public get metroName() {
    return this.getStringAttribute('metro_name');
  }
  public set metroName(value: string) {
    this._metroName = value;
  }
  public resetMetroName() {
    this._metroName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroNameInput() {
    return this._metroName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface FabricServiceProfilePorts {
  /**
  * Cross Connect Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#cross_connect_id FabricServiceProfile#cross_connect_id}
  */
  readonly crossConnectId?: string;
  /**
  * Seller Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#seller_region FabricServiceProfile#seller_region}
  */
  readonly sellerRegion?: string;
  /**
  * Seller Region details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#seller_region_description FabricServiceProfile#seller_region_description}
  */
  readonly sellerRegionDescription?: string;
  /**
  * Colo/Port Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#type FabricServiceProfile#type}
  */
  readonly type: string;
  /**
  * Colo/Port Uuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#uuid FabricServiceProfile#uuid}
  */
  readonly uuid: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#location FabricServiceProfile#location}
  */
  readonly location?: FabricServiceProfilePortsLocation;
}

export function fabricServiceProfilePortsToTerraform(struct?: FabricServiceProfilePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_connect_id: cdktf.stringToTerraform(struct!.crossConnectId),
    seller_region: cdktf.stringToTerraform(struct!.sellerRegion),
    seller_region_description: cdktf.stringToTerraform(struct!.sellerRegionDescription),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    location: fabricServiceProfilePortsLocationToTerraform(struct!.location),
  }
}


export function fabricServiceProfilePortsToHclTerraform(struct?: FabricServiceProfilePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_connect_id: {
      value: cdktf.stringToHclTerraform(struct!.crossConnectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seller_region: {
      value: cdktf.stringToHclTerraform(struct!.sellerRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seller_region_description: {
      value: cdktf.stringToHclTerraform(struct!.sellerRegionDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: fabricServiceProfilePortsLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceProfilePortsLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfilePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceProfilePorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossConnectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossConnectId = this._crossConnectId;
    }
    if (this._sellerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sellerRegion = this._sellerRegion;
    }
    if (this._sellerRegionDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.sellerRegionDescription = this._sellerRegionDescription;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfilePorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossConnectId = undefined;
      this._sellerRegion = undefined;
      this._sellerRegionDescription = undefined;
      this._type = undefined;
      this._uuid = undefined;
      this._location.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossConnectId = value.crossConnectId;
      this._sellerRegion = value.sellerRegion;
      this._sellerRegionDescription = value.sellerRegionDescription;
      this._type = value.type;
      this._uuid = value.uuid;
      this._location.internalValue = value.location;
    }
  }

  // cross_connect_id - computed: false, optional: true, required: false
  private _crossConnectId?: string; 
  public get crossConnectId() {
    return this.getStringAttribute('cross_connect_id');
  }
  public set crossConnectId(value: string) {
    this._crossConnectId = value;
  }
  public resetCrossConnectId() {
    this._crossConnectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossConnectIdInput() {
    return this._crossConnectId;
  }

  // seller_region - computed: false, optional: true, required: false
  private _sellerRegion?: string; 
  public get sellerRegion() {
    return this.getStringAttribute('seller_region');
  }
  public set sellerRegion(value: string) {
    this._sellerRegion = value;
  }
  public resetSellerRegion() {
    this._sellerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sellerRegionInput() {
    return this._sellerRegion;
  }

  // seller_region_description - computed: false, optional: true, required: false
  private _sellerRegionDescription?: string; 
  public get sellerRegionDescription() {
    return this.getStringAttribute('seller_region_description');
  }
  public set sellerRegionDescription(value: string) {
    this._sellerRegionDescription = value;
  }
  public resetSellerRegionDescription() {
    this._sellerRegionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sellerRegionDescriptionInput() {
    return this._sellerRegionDescription;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // location - computed: false, optional: true, required: false
  private _location = new FabricServiceProfilePortsLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: FabricServiceProfilePortsLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}

export class FabricServiceProfilePortsList extends cdktf.ComplexList {
  public internalValue? : FabricServiceProfilePorts[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceProfilePortsOutputReference {
    return new FabricServiceProfilePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceProfileProject {
  /**
  * Project Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#project_id FabricServiceProfile#project_id}
  */
  readonly projectId?: string;
}

export function fabricServiceProfileProjectToTerraform(struct?: FabricServiceProfileProjectOutputReference | FabricServiceProfileProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function fabricServiceProfileProjectToHclTerraform(struct?: FabricServiceProfileProjectOutputReference | FabricServiceProfileProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfileProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceProfileProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface FabricServiceProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#create FabricServiceProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#delete FabricServiceProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#read FabricServiceProfile#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#update FabricServiceProfile#update}
  */
  readonly update?: string;
}

export function fabricServiceProfileTimeoutsToTerraform(struct?: FabricServiceProfileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fabricServiceProfileTimeoutsToHclTerraform(struct?: FabricServiceProfileTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class FabricServiceProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricServiceProfileTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface FabricServiceProfileVirtualDevicesLocation {
  /**
  * IBX Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#ibx FabricServiceProfile#ibx}
  */
  readonly ibx?: string;
  /**
  * Access point metro code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#metro_code FabricServiceProfile#metro_code}
  */
  readonly metroCode?: string;
  /**
  * Access point metro name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#metro_name FabricServiceProfile#metro_name}
  */
  readonly metroName?: string;
  /**
  * Access point region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#region FabricServiceProfile#region}
  */
  readonly region?: string;
}

export function fabricServiceProfileVirtualDevicesLocationToTerraform(struct?: FabricServiceProfileVirtualDevicesLocationOutputReference | FabricServiceProfileVirtualDevicesLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ibx: cdktf.stringToTerraform(struct!.ibx),
    metro_code: cdktf.stringToTerraform(struct!.metroCode),
    metro_name: cdktf.stringToTerraform(struct!.metroName),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function fabricServiceProfileVirtualDevicesLocationToHclTerraform(struct?: FabricServiceProfileVirtualDevicesLocationOutputReference | FabricServiceProfileVirtualDevicesLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ibx: {
      value: cdktf.stringToHclTerraform(struct!.ibx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metro_code: {
      value: cdktf.stringToHclTerraform(struct!.metroCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metro_name: {
      value: cdktf.stringToHclTerraform(struct!.metroName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfileVirtualDevicesLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceProfileVirtualDevicesLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ibx !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibx = this._ibx;
    }
    if (this._metroCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroCode = this._metroCode;
    }
    if (this._metroName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroName = this._metroName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileVirtualDevicesLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ibx = undefined;
      this._metroCode = undefined;
      this._metroName = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ibx = value.ibx;
      this._metroCode = value.metroCode;
      this._metroName = value.metroName;
      this._region = value.region;
    }
  }

  // ibx - computed: true, optional: true, required: false
  private _ibx?: string; 
  public get ibx() {
    return this.getStringAttribute('ibx');
  }
  public set ibx(value: string) {
    this._ibx = value;
  }
  public resetIbx() {
    this._ibx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibxInput() {
    return this._ibx;
  }

  // metro_code - computed: true, optional: true, required: false
  private _metroCode?: string; 
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }
  public set metroCode(value: string) {
    this._metroCode = value;
  }
  public resetMetroCode() {
    this._metroCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodeInput() {
    return this._metroCode;
  }

  // metro_name - computed: true, optional: true, required: false
  private _metroName?: string; 
  public get metroName() {
    return this.getStringAttribute('metro_name');
  }
  public set metroName(value: string) {
    this._metroName = value;
  }
  public resetMetroName() {
    this._metroName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroNameInput() {
    return this._metroName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface FabricServiceProfileVirtualDevices {
  /**
  * Device Interface Uuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#interface_uuid FabricServiceProfile#interface_uuid}
  */
  readonly interfaceUuid?: string;
  /**
  * Virtual Device Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#type FabricServiceProfile#type}
  */
  readonly type: string;
  /**
  * Virtual Device Uuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#uuid FabricServiceProfile#uuid}
  */
  readonly uuid: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#location FabricServiceProfile#location}
  */
  readonly location?: FabricServiceProfileVirtualDevicesLocation;
}

export function fabricServiceProfileVirtualDevicesToTerraform(struct?: FabricServiceProfileVirtualDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_uuid: cdktf.stringToTerraform(struct!.interfaceUuid),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    location: fabricServiceProfileVirtualDevicesLocationToTerraform(struct!.location),
  }
}


export function fabricServiceProfileVirtualDevicesToHclTerraform(struct?: FabricServiceProfileVirtualDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_uuid: {
      value: cdktf.stringToHclTerraform(struct!.interfaceUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: fabricServiceProfileVirtualDevicesLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceProfileVirtualDevicesLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceProfileVirtualDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceProfileVirtualDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceUuid = this._interfaceUuid;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceProfileVirtualDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceUuid = undefined;
      this._type = undefined;
      this._uuid = undefined;
      this._location.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceUuid = value.interfaceUuid;
      this._type = value.type;
      this._uuid = value.uuid;
      this._location.internalValue = value.location;
    }
  }

  // interface_uuid - computed: false, optional: true, required: false
  private _interfaceUuid?: string; 
  public get interfaceUuid() {
    return this.getStringAttribute('interface_uuid');
  }
  public set interfaceUuid(value: string) {
    this._interfaceUuid = value;
  }
  public resetInterfaceUuid() {
    this._interfaceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceUuidInput() {
    return this._interfaceUuid;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // location - computed: false, optional: true, required: false
  private _location = new FabricServiceProfileVirtualDevicesLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: FabricServiceProfileVirtualDevicesLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}

export class FabricServiceProfileVirtualDevicesList extends cdktf.ComplexList {
  public internalValue? : FabricServiceProfileVirtualDevices[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceProfileVirtualDevicesOutputReference {
    return new FabricServiceProfileVirtualDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile equinix_fabric_service_profile}
*/
export class FabricServiceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_service_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricServiceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricServiceProfile to import
  * @param importFromId The id of the existing FabricServiceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricServiceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_service_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_service_profile equinix_fabric_service_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricServiceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: FabricServiceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_service_profile',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.12.0',
        providerVersionConstraint: '4.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedEmails = config.allowedEmails;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._selfProfile = config.selfProfile;
    this._state = config.state;
    this._tags = config.tags;
    this._type = config.type;
    this._viewPoint = config.viewPoint;
    this._visibility = config.visibility;
    this._accessPointTypeConfigs.internalValue = config.accessPointTypeConfigs;
    this._customFields.internalValue = config.customFields;
    this._marketingInfo.internalValue = config.marketingInfo;
    this._metros.internalValue = config.metros;
    this._notifications.internalValue = config.notifications;
    this._ports.internalValue = config.ports;
    this._project.internalValue = config.project;
    this._timeouts.internalValue = config.timeouts;
    this._virtualDevices.internalValue = config.virtualDevices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: false, required: false
  private _account = new FabricServiceProfileAccountList(this, "account", true);
  public get account() {
    return this._account;
  }

  // allowed_emails - computed: false, optional: true, required: false
  private _allowedEmails?: string[]; 
  public get allowedEmails() {
    return this.getListAttribute('allowed_emails');
  }
  public set allowedEmails(value: string[]) {
    this._allowedEmails = value;
  }
  public resetAllowedEmails() {
    this._allowedEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEmailsInput() {
    return this._allowedEmails;
  }

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new FabricServiceProfileChangeLogList(this, "change_log", true);
  public get changeLog() {
    return this._changeLog;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // self_profile - computed: false, optional: true, required: false
  private _selfProfile?: boolean | cdktf.IResolvable; 
  public get selfProfile() {
    return this.getBooleanAttribute('self_profile');
  }
  public set selfProfile(value: boolean | cdktf.IResolvable) {
    this._selfProfile = value;
  }
  public resetSelfProfile() {
    this._selfProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfProfileInput() {
    return this._selfProfile;
  }

  // state - computed: false, optional: true, required: false
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // view_point - computed: false, optional: true, required: false
  private _viewPoint?: string; 
  public get viewPoint() {
    return this.getStringAttribute('view_point');
  }
  public set viewPoint(value: string) {
    this._viewPoint = value;
  }
  public resetViewPoint() {
    this._viewPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewPointInput() {
    return this._viewPoint;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // access_point_type_configs - computed: false, optional: true, required: false
  private _accessPointTypeConfigs = new FabricServiceProfileAccessPointTypeConfigsList(this, "access_point_type_configs", false);
  public get accessPointTypeConfigs() {
    return this._accessPointTypeConfigs;
  }
  public putAccessPointTypeConfigs(value: FabricServiceProfileAccessPointTypeConfigs[] | cdktf.IResolvable) {
    this._accessPointTypeConfigs.internalValue = value;
  }
  public resetAccessPointTypeConfigs() {
    this._accessPointTypeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointTypeConfigsInput() {
    return this._accessPointTypeConfigs.internalValue;
  }

  // custom_fields - computed: false, optional: true, required: false
  private _customFields = new FabricServiceProfileCustomFieldsList(this, "custom_fields", false);
  public get customFields() {
    return this._customFields;
  }
  public putCustomFields(value: FabricServiceProfileCustomFields[] | cdktf.IResolvable) {
    this._customFields.internalValue = value;
  }
  public resetCustomFields() {
    this._customFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields.internalValue;
  }

  // marketing_info - computed: false, optional: true, required: false
  private _marketingInfo = new FabricServiceProfileMarketingInfoOutputReference(this, "marketing_info");
  public get marketingInfo() {
    return this._marketingInfo;
  }
  public putMarketingInfo(value: FabricServiceProfileMarketingInfo) {
    this._marketingInfo.internalValue = value;
  }
  public resetMarketingInfo() {
    this._marketingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketingInfoInput() {
    return this._marketingInfo.internalValue;
  }

  // metros - computed: false, optional: true, required: false
  private _metros = new FabricServiceProfileMetrosList(this, "metros", false);
  public get metros() {
    return this._metros;
  }
  public putMetros(value: FabricServiceProfileMetros[] | cdktf.IResolvable) {
    this._metros.internalValue = value;
  }
  public resetMetros() {
    this._metros.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metrosInput() {
    return this._metros.internalValue;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications = new FabricServiceProfileNotificationsList(this, "notifications", false);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: FabricServiceProfileNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new FabricServiceProfilePortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: FabricServiceProfilePorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // project - computed: false, optional: true, required: false
  private _project = new FabricServiceProfileProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: FabricServiceProfileProject) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FabricServiceProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FabricServiceProfileTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_devices - computed: false, optional: true, required: false
  private _virtualDevices = new FabricServiceProfileVirtualDevicesList(this, "virtual_devices", false);
  public get virtualDevices() {
    return this._virtualDevices;
  }
  public putVirtualDevices(value: FabricServiceProfileVirtualDevices[] | cdktf.IResolvable) {
    this._virtualDevices.internalValue = value;
  }
  public resetVirtualDevices() {
    this._virtualDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDevicesInput() {
    return this._virtualDevices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedEmails),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      self_profile: cdktf.booleanToTerraform(this._selfProfile),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      view_point: cdktf.stringToTerraform(this._viewPoint),
      visibility: cdktf.stringToTerraform(this._visibility),
      access_point_type_configs: cdktf.listMapper(fabricServiceProfileAccessPointTypeConfigsToTerraform, true)(this._accessPointTypeConfigs.internalValue),
      custom_fields: cdktf.listMapper(fabricServiceProfileCustomFieldsToTerraform, true)(this._customFields.internalValue),
      marketing_info: fabricServiceProfileMarketingInfoToTerraform(this._marketingInfo.internalValue),
      metros: cdktf.listMapper(fabricServiceProfileMetrosToTerraform, true)(this._metros.internalValue),
      notifications: cdktf.listMapper(fabricServiceProfileNotificationsToTerraform, true)(this._notifications.internalValue),
      ports: cdktf.listMapper(fabricServiceProfilePortsToTerraform, true)(this._ports.internalValue),
      project: fabricServiceProfileProjectToTerraform(this._project.internalValue),
      timeouts: fabricServiceProfileTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_devices: cdktf.listMapper(fabricServiceProfileVirtualDevicesToTerraform, true)(this._virtualDevices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_profile: {
        value: cdktf.booleanToHclTerraform(this._selfProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_point: {
        value: cdktf.stringToHclTerraform(this._viewPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_point_type_configs: {
        value: cdktf.listMapperHcl(fabricServiceProfileAccessPointTypeConfigsToHclTerraform, true)(this._accessPointTypeConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricServiceProfileAccessPointTypeConfigsList",
      },
      custom_fields: {
        value: cdktf.listMapperHcl(fabricServiceProfileCustomFieldsToHclTerraform, true)(this._customFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricServiceProfileCustomFieldsList",
      },
      marketing_info: {
        value: fabricServiceProfileMarketingInfoToHclTerraform(this._marketingInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricServiceProfileMarketingInfoList",
      },
      metros: {
        value: cdktf.listMapperHcl(fabricServiceProfileMetrosToHclTerraform, true)(this._metros.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricServiceProfileMetrosList",
      },
      notifications: {
        value: cdktf.listMapperHcl(fabricServiceProfileNotificationsToHclTerraform, true)(this._notifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricServiceProfileNotificationsList",
      },
      ports: {
        value: cdktf.listMapperHcl(fabricServiceProfilePortsToHclTerraform, true)(this._ports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricServiceProfilePortsList",
      },
      project: {
        value: fabricServiceProfileProjectToHclTerraform(this._project.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricServiceProfileProjectList",
      },
      timeouts: {
        value: fabricServiceProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricServiceProfileTimeouts",
      },
      virtual_devices: {
        value: cdktf.listMapperHcl(fabricServiceProfileVirtualDevicesToHclTerraform, true)(this._virtualDevices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricServiceProfileVirtualDevicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
