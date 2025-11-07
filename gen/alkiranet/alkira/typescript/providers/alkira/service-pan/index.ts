// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#billing_tag_ids ServicePan#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The software image bundle that would be used forPAN instance deployment. This is applicable for licenseType`PAY_AS_YOU_GO` only. If not provided, the default`PAN_VM_300_BUNDLE_2` would be used. However `PAN_VM_300_BUNDLE_2`is legacy bundle and is not supported on AWS. It is recommendedto use `VM_SERIES_BUNDLE_1` and `VM_SERIES_BUNDLE_2` (supports Global Protect).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#bundle ServicePan#bundle}
  */
  readonly bundle?: string;
  /**
  * The CXP where the service should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#cxp ServicePan#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#description ServicePan#description}
  */
  readonly description?: string;
  /**
  * Enable global protect option or not. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#global_protect_enabled ServicePan#global_protect_enabled}
  */
  readonly globalProtectEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#id ServicePan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PAN sub license type, either `CREDIT_BASED` or `MODEL_BASED`. (BETA)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#license_sub_type ServicePan#license_sub_type}
  */
  readonly licenseSubType?: string;
  /**
  * PAN license type, either `BRING_YOUR_OWN` or `PAY_AS_YOU_GO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#license_type ServicePan#license_type}
  */
  readonly licenseType: string;
  /**
  * Management Segment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#management_segment_id ServicePan#management_segment_id}
  */
  readonly managementSegmentId: number;
  /**
  * Master Key for PAN instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#master_key ServicePan#master_key}
  */
  readonly masterKey?: string;
  /**
  * Enable Master Key for PAN instances or not. It's default to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#master_key_enabled ServicePan#master_key_enabled}
  */
  readonly masterKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * PAN Master Key Expiry. The date should be in format of `YYYY-MM-DD`, e.g. `2000-01-01`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#master_key_expiry ServicePan#master_key_expiry}
  */
  readonly masterKeyExpiry?: string;
  /**
  * Max number of Panorama instances for auto scale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#max_instance_count ServicePan#max_instance_count}
  */
  readonly maxInstanceCount: number;
  /**
  * Minimal number of Panorama instances for auto scale. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#min_instance_count ServicePan#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Name of the PAN service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#name ServicePan#name}
  */
  readonly name: string;
  /**
  * PAN Panorama license Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#pan_license_key ServicePan#pan_license_key}
  */
  readonly panLicenseKey?: string;
  /**
  * PAN Panorama password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#pan_password ServicePan#pan_password}
  */
  readonly panPassword: string;
  /**
  * PAN Panorama username. For AWS, username should be `admin`. For AZURE, it should be `akadmin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#pan_username ServicePan#pan_username}
  */
  readonly panUsername: string;
  /**
  * Panorama device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#panorama_device_group ServicePan#panorama_device_group}
  */
  readonly panoramaDeviceGroup?: string;
  /**
  * Enable Panorama or not. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#panorama_enabled ServicePan#panorama_enabled}
  */
  readonly panoramaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Panorama IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#panorama_ip_addresses ServicePan#panorama_ip_addresses}
  */
  readonly panoramaIpAddresses?: string[];
  /**
  * Panorama Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#panorama_template ServicePan#panorama_template}
  */
  readonly panoramaTemplate?: string;
  /**
  * PAN Registration PIN Expiry. The date should be in format of `YYYY-MM-DD`, e.g. `2000-01-01`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#registration_pin_expiry ServicePan#registration_pin_expiry}
  */
  readonly registrationPinExpiry: string;
  /**
  * PAN Registration PIN ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#registration_pin_id ServicePan#registration_pin_id}
  */
  readonly registrationPinId: string;
  /**
  * PAN Registration PIN Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#registration_pin_value ServicePan#registration_pin_value}
  */
  readonly registrationPinValue: string;
  /**
  * IDs of segments associated with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#segment_ids ServicePan#segment_ids}
  */
  readonly segmentIds: number[];
  /**
  * The size of the service, one of `SMALL`, `MEDIUM`, `LARGE`, `2LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#size ServicePan#size}
  */
  readonly size: string;
  /**
  * Tunnel Protocol, default to `IPSEC`, could be either `IPSEC` or `GRE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#tunnel_protocol ServicePan#tunnel_protocol}
  */
  readonly tunnelProtocol?: string;
  /**
  * The type of the PAN firewall. Either 'VM-300', 'VM-500' or 'VM-700'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#type ServicePan#type}
  */
  readonly type?: string;
  /**
  * The version of the PAN firewall. Please check Alkira Portal for all supported versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#version ServicePan#version}
  */
  readonly version: string;
  /**
  * global_protect_segment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#global_protect_segment_options ServicePan#global_protect_segment_options}
  */
  readonly globalProtectSegmentOptions?: ServicePanGlobalProtectSegmentOptions[] | cdktf.IResolvable;
  /**
  * instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#instance ServicePan#instance}
  */
  readonly instance: ServicePanInstance[] | cdktf.IResolvable;
  /**
  * segment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#segment_options ServicePan#segment_options}
  */
  readonly segmentOptions?: ServicePanSegmentOptions[] | cdktf.IResolvable;
}
export interface ServicePanGlobalProtectSegmentOptions {
  /**
  * Prefix for the global protect portal FQDN, this would be prepended to customer specific alkira domain For Example: if prefix is abc and tenant name is example then the FQDN would be abc.example.gpportal.alkira.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#portal_fqdn_prefix ServicePan#portal_fqdn_prefix}
  */
  readonly portalFqdnPrefix: string;
  /**
  * Firewall security zone is created using the zone name for remote user sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#remote_user_zone_name ServicePan#remote_user_zone_name}
  */
  readonly remoteUserZoneName: string;
  /**
  * The name of the segment to which the global protect options should apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#segment_id ServicePan#segment_id}
  */
  readonly segmentId: string;
  /**
  * The name of the service group. A group with the same name will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#service_group_name ServicePan#service_group_name}
  */
  readonly serviceGroupName: string;
}

export function servicePanGlobalProtectSegmentOptionsToTerraform(struct?: ServicePanGlobalProtectSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    portal_fqdn_prefix: cdktf.stringToTerraform(struct!.portalFqdnPrefix),
    remote_user_zone_name: cdktf.stringToTerraform(struct!.remoteUserZoneName),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
    service_group_name: cdktf.stringToTerraform(struct!.serviceGroupName),
  }
}


export function servicePanGlobalProtectSegmentOptionsToHclTerraform(struct?: ServicePanGlobalProtectSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    portal_fqdn_prefix: {
      value: cdktf.stringToHclTerraform(struct!.portalFqdnPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_user_zone_name: {
      value: cdktf.stringToHclTerraform(struct!.remoteUserZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_group_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePanGlobalProtectSegmentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePanGlobalProtectSegmentOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portalFqdnPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.portalFqdnPrefix = this._portalFqdnPrefix;
    }
    if (this._remoteUserZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteUserZoneName = this._remoteUserZoneName;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._serviceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupName = this._serviceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePanGlobalProtectSegmentOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portalFqdnPrefix = undefined;
      this._remoteUserZoneName = undefined;
      this._segmentId = undefined;
      this._serviceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portalFqdnPrefix = value.portalFqdnPrefix;
      this._remoteUserZoneName = value.remoteUserZoneName;
      this._segmentId = value.segmentId;
      this._serviceGroupName = value.serviceGroupName;
    }
  }

  // portal_fqdn_prefix - computed: false, optional: false, required: true
  private _portalFqdnPrefix?: string; 
  public get portalFqdnPrefix() {
    return this.getStringAttribute('portal_fqdn_prefix');
  }
  public set portalFqdnPrefix(value: string) {
    this._portalFqdnPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalFqdnPrefixInput() {
    return this._portalFqdnPrefix;
  }

  // remote_user_zone_name - computed: false, optional: false, required: true
  private _remoteUserZoneName?: string; 
  public get remoteUserZoneName() {
    return this.getStringAttribute('remote_user_zone_name');
  }
  public set remoteUserZoneName(value: string) {
    this._remoteUserZoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUserZoneNameInput() {
    return this._remoteUserZoneName;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // service_group_name - computed: false, optional: false, required: true
  private _serviceGroupName?: string; 
  public get serviceGroupName() {
    return this.getStringAttribute('service_group_name');
  }
  public set serviceGroupName(value: string) {
    this._serviceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupNameInput() {
    return this._serviceGroupName;
  }
}

export class ServicePanGlobalProtectSegmentOptionsList extends cdktf.ComplexList {
  public internalValue? : ServicePanGlobalProtectSegmentOptions[] | cdktf.IResolvable

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
  public get(index: number): ServicePanGlobalProtectSegmentOptionsOutputReference {
    return new ServicePanGlobalProtectSegmentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePanInstanceGlobalProtectSegmentOptions {
  /**
  * indicates if the Global Protect Gateway is enabled on this PAN instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#gateway_enabled ServicePan#gateway_enabled}
  */
  readonly gatewayEnabled: boolean | cdktf.IResolvable;
  /**
  * indicates if the GlobalProtect Portal is enabled on this PAN instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#portal_enabled ServicePan#portal_enabled}
  */
  readonly portalEnabled: boolean | cdktf.IResolvable;
  /**
  * Prefix List with Client IP Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#prefix_list_id ServicePan#prefix_list_id}
  */
  readonly prefixListId: number;
  /**
  * The segment ID for Global Protect options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#segment_id ServicePan#segment_id}
  */
  readonly segmentId: string;
}

export function servicePanInstanceGlobalProtectSegmentOptionsToTerraform(struct?: ServicePanInstanceGlobalProtectSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_enabled: cdktf.booleanToTerraform(struct!.gatewayEnabled),
    portal_enabled: cdktf.booleanToTerraform(struct!.portalEnabled),
    prefix_list_id: cdktf.numberToTerraform(struct!.prefixListId),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
  }
}


export function servicePanInstanceGlobalProtectSegmentOptionsToHclTerraform(struct?: ServicePanInstanceGlobalProtectSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.gatewayEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    portal_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.portalEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_list_id: {
      value: cdktf.numberToHclTerraform(struct!.prefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePanInstanceGlobalProtectSegmentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePanInstanceGlobalProtectSegmentOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayEnabled = this._gatewayEnabled;
    }
    if (this._portalEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.portalEnabled = this._portalEnabled;
    }
    if (this._prefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListId = this._prefixListId;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePanInstanceGlobalProtectSegmentOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayEnabled = undefined;
      this._portalEnabled = undefined;
      this._prefixListId = undefined;
      this._segmentId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayEnabled = value.gatewayEnabled;
      this._portalEnabled = value.portalEnabled;
      this._prefixListId = value.prefixListId;
      this._segmentId = value.segmentId;
    }
  }

  // gateway_enabled - computed: false, optional: false, required: true
  private _gatewayEnabled?: boolean | cdktf.IResolvable; 
  public get gatewayEnabled() {
    return this.getBooleanAttribute('gateway_enabled');
  }
  public set gatewayEnabled(value: boolean | cdktf.IResolvable) {
    this._gatewayEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayEnabledInput() {
    return this._gatewayEnabled;
  }

  // portal_enabled - computed: false, optional: false, required: true
  private _portalEnabled?: boolean | cdktf.IResolvable; 
  public get portalEnabled() {
    return this.getBooleanAttribute('portal_enabled');
  }
  public set portalEnabled(value: boolean | cdktf.IResolvable) {
    this._portalEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalEnabledInput() {
    return this._portalEnabled;
  }

  // prefix_list_id - computed: false, optional: false, required: true
  private _prefixListId?: number; 
  public get prefixListId() {
    return this.getNumberAttribute('prefix_list_id');
  }
  public set prefixListId(value: number) {
    this._prefixListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }
}

export class ServicePanInstanceGlobalProtectSegmentOptionsList extends cdktf.ComplexList {
  public internalValue? : ServicePanInstanceGlobalProtectSegmentOptions[] | cdktf.IResolvable

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
  public get(index: number): ServicePanInstanceGlobalProtectSegmentOptionsOutputReference {
    return new ServicePanInstanceGlobalProtectSegmentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePanInstance {
  /**
  * PAN instance auth code. Only required when `license_type` is `BRING_YOUR_OWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#auth_code ServicePan#auth_code}
  */
  readonly authCode?: string;
  /**
  * PAN instance auth key. This is only required when `panorama_enabled` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#auth_key ServicePan#auth_key}
  */
  readonly authKey?: string;
  /**
  * Enable traffic on the PAN instance. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#enable_traffic ServicePan#enable_traffic}
  */
  readonly enableTraffic?: boolean | cdktf.IResolvable;
  /**
  * The name of the PAN instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#name ServicePan#name}
  */
  readonly name?: string;
  /**
  * global_protect_segment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#global_protect_segment_options ServicePan#global_protect_segment_options}
  */
  readonly globalProtectSegmentOptions?: ServicePanInstanceGlobalProtectSegmentOptions[] | cdktf.IResolvable;
}

export function servicePanInstanceToTerraform(struct?: ServicePanInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    auth_key: cdktf.stringToTerraform(struct!.authKey),
    enable_traffic: cdktf.booleanToTerraform(struct!.enableTraffic),
    name: cdktf.stringToTerraform(struct!.name),
    global_protect_segment_options: cdktf.listMapper(servicePanInstanceGlobalProtectSegmentOptionsToTerraform, true)(struct!.globalProtectSegmentOptions),
  }
}


export function servicePanInstanceToHclTerraform(struct?: ServicePanInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_code: {
      value: cdktf.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_key: {
      value: cdktf.stringToHclTerraform(struct!.authKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.enableTraffic),
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
    global_protect_segment_options: {
      value: cdktf.listMapperHcl(servicePanInstanceGlobalProtectSegmentOptionsToHclTerraform, true)(struct!.globalProtectSegmentOptions),
      isBlock: true,
      type: "set",
      storageClassType: "ServicePanInstanceGlobalProtectSegmentOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePanInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePanInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._enableTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTraffic = this._enableTraffic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._globalProtectSegmentOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalProtectSegmentOptions = this._globalProtectSegmentOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePanInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authCode = undefined;
      this._authKey = undefined;
      this._enableTraffic = undefined;
      this._name = undefined;
      this._globalProtectSegmentOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authCode = value.authCode;
      this._authKey = value.authKey;
      this._enableTraffic = value.enableTraffic;
      this._name = value.name;
      this._globalProtectSegmentOptions.internalValue = value.globalProtectSegmentOptions;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }

  // enable_traffic - computed: false, optional: true, required: false
  private _enableTraffic?: boolean | cdktf.IResolvable; 
  public get enableTraffic() {
    return this.getBooleanAttribute('enable_traffic');
  }
  public set enableTraffic(value: boolean | cdktf.IResolvable) {
    this._enableTraffic = value;
  }
  public resetEnableTraffic() {
    this._enableTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrafficInput() {
    return this._enableTraffic;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // global_protect_segment_options - computed: false, optional: true, required: false
  private _globalProtectSegmentOptions = new ServicePanInstanceGlobalProtectSegmentOptionsList(this, "global_protect_segment_options", true);
  public get globalProtectSegmentOptions() {
    return this._globalProtectSegmentOptions;
  }
  public putGlobalProtectSegmentOptions(value: ServicePanInstanceGlobalProtectSegmentOptions[] | cdktf.IResolvable) {
    this._globalProtectSegmentOptions.internalValue = value;
  }
  public resetGlobalProtectSegmentOptions() {
    this._globalProtectSegmentOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectSegmentOptionsInput() {
    return this._globalProtectSegmentOptions.internalValue;
  }
}

export class ServicePanInstanceList extends cdktf.ComplexList {
  public internalValue? : ServicePanInstance[] | cdktf.IResolvable

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
  public get(index: number): ServicePanInstanceOutputReference {
    return new ServicePanInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePanSegmentOptions {
  /**
  * The list of groups associated with the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#groups ServicePan#groups}
  */
  readonly groups: string[];
  /**
  * The ID of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#segment_id ServicePan#segment_id}
  */
  readonly segmentId: string;
  /**
  * The name of the associated firewall zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#zone_name ServicePan#zone_name}
  */
  readonly zoneName: string;
}

export function servicePanSegmentOptionsToTerraform(struct?: ServicePanSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function servicePanSegmentOptionsToHclTerraform(struct?: ServicePanSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePanSegmentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePanSegmentOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePanSegmentOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._segmentId = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups = value.groups;
      this._segmentId = value.segmentId;
      this._zoneName = value.zoneName;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

export class ServicePanSegmentOptionsList extends cdktf.ComplexList {
  public internalValue? : ServicePanSegmentOptions[] | cdktf.IResolvable

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
  public get(index: number): ServicePanSegmentOptionsOutputReference {
    return new ServicePanSegmentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan alkira_service_pan}
*/
export class ServicePan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_service_pan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicePan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicePan to import
  * @param importFromId The id of the existing ServicePan that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicePan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_service_pan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_pan alkira_service_pan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePanConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePanConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_service_pan',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingTagIds = config.billingTagIds;
    this._bundle = config.bundle;
    this._cxp = config.cxp;
    this._description = config.description;
    this._globalProtectEnabled = config.globalProtectEnabled;
    this._id = config.id;
    this._licenseSubType = config.licenseSubType;
    this._licenseType = config.licenseType;
    this._managementSegmentId = config.managementSegmentId;
    this._masterKey = config.masterKey;
    this._masterKeyEnabled = config.masterKeyEnabled;
    this._masterKeyExpiry = config.masterKeyExpiry;
    this._maxInstanceCount = config.maxInstanceCount;
    this._minInstanceCount = config.minInstanceCount;
    this._name = config.name;
    this._panLicenseKey = config.panLicenseKey;
    this._panPassword = config.panPassword;
    this._panUsername = config.panUsername;
    this._panoramaDeviceGroup = config.panoramaDeviceGroup;
    this._panoramaEnabled = config.panoramaEnabled;
    this._panoramaIpAddresses = config.panoramaIpAddresses;
    this._panoramaTemplate = config.panoramaTemplate;
    this._registrationPinExpiry = config.registrationPinExpiry;
    this._registrationPinId = config.registrationPinId;
    this._registrationPinValue = config.registrationPinValue;
    this._segmentIds = config.segmentIds;
    this._size = config.size;
    this._tunnelProtocol = config.tunnelProtocol;
    this._type = config.type;
    this._version = config.version;
    this._globalProtectSegmentOptions.internalValue = config.globalProtectSegmentOptions;
    this._instance.internalValue = config.instance;
    this._segmentOptions.internalValue = config.segmentOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_tag_ids - computed: false, optional: true, required: false
  private _billingTagIds?: number[]; 
  public get billingTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('billing_tag_ids')));
  }
  public set billingTagIds(value: number[]) {
    this._billingTagIds = value;
  }
  public resetBillingTagIds() {
    this._billingTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTagIdsInput() {
    return this._billingTagIds;
  }

  // bundle - computed: false, optional: true, required: false
  private _bundle?: string; 
  public get bundle() {
    return this.getStringAttribute('bundle');
  }
  public set bundle(value: string) {
    this._bundle = value;
  }
  public resetBundle() {
    this._bundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInput() {
    return this._bundle;
  }

  // cxp - computed: false, optional: false, required: true
  private _cxp?: string; 
  public get cxp() {
    return this.getStringAttribute('cxp');
  }
  public set cxp(value: string) {
    this._cxp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpInput() {
    return this._cxp;
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

  // global_protect_enabled - computed: false, optional: true, required: false
  private _globalProtectEnabled?: boolean | cdktf.IResolvable; 
  public get globalProtectEnabled() {
    return this.getBooleanAttribute('global_protect_enabled');
  }
  public set globalProtectEnabled(value: boolean | cdktf.IResolvable) {
    this._globalProtectEnabled = value;
  }
  public resetGlobalProtectEnabled() {
    this._globalProtectEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectEnabledInput() {
    return this._globalProtectEnabled;
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

  // license_sub_type - computed: false, optional: true, required: false
  private _licenseSubType?: string; 
  public get licenseSubType() {
    return this.getStringAttribute('license_sub_type');
  }
  public set licenseSubType(value: string) {
    this._licenseSubType = value;
  }
  public resetLicenseSubType() {
    this._licenseSubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseSubTypeInput() {
    return this._licenseSubType;
  }

  // license_type - computed: false, optional: false, required: true
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // management_segment_id - computed: false, optional: false, required: true
  private _managementSegmentId?: number; 
  public get managementSegmentId() {
    return this.getNumberAttribute('management_segment_id');
  }
  public set managementSegmentId(value: number) {
    this._managementSegmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementSegmentIdInput() {
    return this._managementSegmentId;
  }

  // master_key - computed: false, optional: true, required: false
  private _masterKey?: string; 
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }
  public set masterKey(value: string) {
    this._masterKey = value;
  }
  public resetMasterKey() {
    this._masterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterKeyInput() {
    return this._masterKey;
  }

  // master_key_enabled - computed: false, optional: true, required: false
  private _masterKeyEnabled?: boolean | cdktf.IResolvable; 
  public get masterKeyEnabled() {
    return this.getBooleanAttribute('master_key_enabled');
  }
  public set masterKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._masterKeyEnabled = value;
  }
  public resetMasterKeyEnabled() {
    this._masterKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterKeyEnabledInput() {
    return this._masterKeyEnabled;
  }

  // master_key_expiry - computed: false, optional: true, required: false
  private _masterKeyExpiry?: string; 
  public get masterKeyExpiry() {
    return this.getStringAttribute('master_key_expiry');
  }
  public set masterKeyExpiry(value: string) {
    this._masterKeyExpiry = value;
  }
  public resetMasterKeyExpiry() {
    this._masterKeyExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterKeyExpiryInput() {
    return this._masterKeyExpiry;
  }

  // max_instance_count - computed: false, optional: false, required: true
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
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

  // pan_credential_id - computed: true, optional: false, required: false
  public get panCredentialId() {
    return this.getStringAttribute('pan_credential_id');
  }

  // pan_credential_name - computed: true, optional: false, required: false
  public get panCredentialName() {
    return this.getStringAttribute('pan_credential_name');
  }

  // pan_license_key - computed: false, optional: true, required: false
  private _panLicenseKey?: string; 
  public get panLicenseKey() {
    return this.getStringAttribute('pan_license_key');
  }
  public set panLicenseKey(value: string) {
    this._panLicenseKey = value;
  }
  public resetPanLicenseKey() {
    this._panLicenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panLicenseKeyInput() {
    return this._panLicenseKey;
  }

  // pan_master_key_credential_id - computed: true, optional: false, required: false
  public get panMasterKeyCredentialId() {
    return this.getStringAttribute('pan_master_key_credential_id');
  }

  // pan_password - computed: false, optional: false, required: true
  private _panPassword?: string; 
  public get panPassword() {
    return this.getStringAttribute('pan_password');
  }
  public set panPassword(value: string) {
    this._panPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get panPasswordInput() {
    return this._panPassword;
  }

  // pan_registration_credential_id - computed: true, optional: false, required: false
  public get panRegistrationCredentialId() {
    return this.getStringAttribute('pan_registration_credential_id');
  }

  // pan_username - computed: false, optional: false, required: true
  private _panUsername?: string; 
  public get panUsername() {
    return this.getStringAttribute('pan_username');
  }
  public set panUsername(value: string) {
    this._panUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get panUsernameInput() {
    return this._panUsername;
  }

  // panorama_device_group - computed: false, optional: true, required: false
  private _panoramaDeviceGroup?: string; 
  public get panoramaDeviceGroup() {
    return this.getStringAttribute('panorama_device_group');
  }
  public set panoramaDeviceGroup(value: string) {
    this._panoramaDeviceGroup = value;
  }
  public resetPanoramaDeviceGroup() {
    this._panoramaDeviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceGroupInput() {
    return this._panoramaDeviceGroup;
  }

  // panorama_enabled - computed: false, optional: true, required: false
  private _panoramaEnabled?: boolean | cdktf.IResolvable; 
  public get panoramaEnabled() {
    return this.getBooleanAttribute('panorama_enabled');
  }
  public set panoramaEnabled(value: boolean | cdktf.IResolvable) {
    this._panoramaEnabled = value;
  }
  public resetPanoramaEnabled() {
    this._panoramaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaEnabledInput() {
    return this._panoramaEnabled;
  }

  // panorama_ip_addresses - computed: false, optional: true, required: false
  private _panoramaIpAddresses?: string[]; 
  public get panoramaIpAddresses() {
    return this.getListAttribute('panorama_ip_addresses');
  }
  public set panoramaIpAddresses(value: string[]) {
    this._panoramaIpAddresses = value;
  }
  public resetPanoramaIpAddresses() {
    this._panoramaIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaIpAddressesInput() {
    return this._panoramaIpAddresses;
  }

  // panorama_template - computed: false, optional: true, required: false
  private _panoramaTemplate?: string; 
  public get panoramaTemplate() {
    return this.getStringAttribute('panorama_template');
  }
  public set panoramaTemplate(value: string) {
    this._panoramaTemplate = value;
  }
  public resetPanoramaTemplate() {
    this._panoramaTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaTemplateInput() {
    return this._panoramaTemplate;
  }

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // registration_pin_expiry - computed: false, optional: false, required: true
  private _registrationPinExpiry?: string; 
  public get registrationPinExpiry() {
    return this.getStringAttribute('registration_pin_expiry');
  }
  public set registrationPinExpiry(value: string) {
    this._registrationPinExpiry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationPinExpiryInput() {
    return this._registrationPinExpiry;
  }

  // registration_pin_id - computed: false, optional: false, required: true
  private _registrationPinId?: string; 
  public get registrationPinId() {
    return this.getStringAttribute('registration_pin_id');
  }
  public set registrationPinId(value: string) {
    this._registrationPinId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationPinIdInput() {
    return this._registrationPinId;
  }

  // registration_pin_value - computed: false, optional: false, required: true
  private _registrationPinValue?: string; 
  public get registrationPinValue() {
    return this.getStringAttribute('registration_pin_value');
  }
  public set registrationPinValue(value: string) {
    this._registrationPinValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationPinValueInput() {
    return this._registrationPinValue;
  }

  // segment_ids - computed: false, optional: false, required: true
  private _segmentIds?: number[]; 
  public get segmentIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('segment_ids')));
  }
  public set segmentIds(value: number[]) {
    this._segmentIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdsInput() {
    return this._segmentIds;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tunnel_protocol - computed: false, optional: true, required: false
  private _tunnelProtocol?: string; 
  public get tunnelProtocol() {
    return this.getStringAttribute('tunnel_protocol');
  }
  public set tunnelProtocol(value: string) {
    this._tunnelProtocol = value;
  }
  public resetTunnelProtocol() {
    this._tunnelProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelProtocolInput() {
    return this._tunnelProtocol;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // global_protect_segment_options - computed: false, optional: true, required: false
  private _globalProtectSegmentOptions = new ServicePanGlobalProtectSegmentOptionsList(this, "global_protect_segment_options", true);
  public get globalProtectSegmentOptions() {
    return this._globalProtectSegmentOptions;
  }
  public putGlobalProtectSegmentOptions(value: ServicePanGlobalProtectSegmentOptions[] | cdktf.IResolvable) {
    this._globalProtectSegmentOptions.internalValue = value;
  }
  public resetGlobalProtectSegmentOptions() {
    this._globalProtectSegmentOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectSegmentOptionsInput() {
    return this._globalProtectSegmentOptions.internalValue;
  }

  // instance - computed: false, optional: false, required: true
  private _instance = new ServicePanInstanceList(this, "instance", false);
  public get instance() {
    return this._instance;
  }
  public putInstance(value: ServicePanInstance[] | cdktf.IResolvable) {
    this._instance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance.internalValue;
  }

  // segment_options - computed: false, optional: true, required: false
  private _segmentOptions = new ServicePanSegmentOptionsList(this, "segment_options", true);
  public get segmentOptions() {
    return this._segmentOptions;
  }
  public putSegmentOptions(value: ServicePanSegmentOptions[] | cdktf.IResolvable) {
    this._segmentOptions.internalValue = value;
  }
  public resetSegmentOptions() {
    this._segmentOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentOptionsInput() {
    return this._segmentOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      bundle: cdktf.stringToTerraform(this._bundle),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      global_protect_enabled: cdktf.booleanToTerraform(this._globalProtectEnabled),
      id: cdktf.stringToTerraform(this._id),
      license_sub_type: cdktf.stringToTerraform(this._licenseSubType),
      license_type: cdktf.stringToTerraform(this._licenseType),
      management_segment_id: cdktf.numberToTerraform(this._managementSegmentId),
      master_key: cdktf.stringToTerraform(this._masterKey),
      master_key_enabled: cdktf.booleanToTerraform(this._masterKeyEnabled),
      master_key_expiry: cdktf.stringToTerraform(this._masterKeyExpiry),
      max_instance_count: cdktf.numberToTerraform(this._maxInstanceCount),
      min_instance_count: cdktf.numberToTerraform(this._minInstanceCount),
      name: cdktf.stringToTerraform(this._name),
      pan_license_key: cdktf.stringToTerraform(this._panLicenseKey),
      pan_password: cdktf.stringToTerraform(this._panPassword),
      pan_username: cdktf.stringToTerraform(this._panUsername),
      panorama_device_group: cdktf.stringToTerraform(this._panoramaDeviceGroup),
      panorama_enabled: cdktf.booleanToTerraform(this._panoramaEnabled),
      panorama_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._panoramaIpAddresses),
      panorama_template: cdktf.stringToTerraform(this._panoramaTemplate),
      registration_pin_expiry: cdktf.stringToTerraform(this._registrationPinExpiry),
      registration_pin_id: cdktf.stringToTerraform(this._registrationPinId),
      registration_pin_value: cdktf.stringToTerraform(this._registrationPinValue),
      segment_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._segmentIds),
      size: cdktf.stringToTerraform(this._size),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      global_protect_segment_options: cdktf.listMapper(servicePanGlobalProtectSegmentOptionsToTerraform, true)(this._globalProtectSegmentOptions.internalValue),
      instance: cdktf.listMapper(servicePanInstanceToTerraform, true)(this._instance.internalValue),
      segment_options: cdktf.listMapper(servicePanSegmentOptionsToTerraform, true)(this._segmentOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._billingTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      bundle: {
        value: cdktf.stringToHclTerraform(this._bundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
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
      global_protect_enabled: {
        value: cdktf.booleanToHclTerraform(this._globalProtectEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_sub_type: {
        value: cdktf.stringToHclTerraform(this._licenseSubType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_segment_id: {
        value: cdktf.numberToHclTerraform(this._managementSegmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_key: {
        value: cdktf.stringToHclTerraform(this._masterKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_key_enabled: {
        value: cdktf.booleanToHclTerraform(this._masterKeyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      master_key_expiry: {
        value: cdktf.stringToHclTerraform(this._masterKeyExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_instance_count: {
        value: cdktf.numberToHclTerraform(this._maxInstanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_instance_count: {
        value: cdktf.numberToHclTerraform(this._minInstanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pan_license_key: {
        value: cdktf.stringToHclTerraform(this._panLicenseKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pan_password: {
        value: cdktf.stringToHclTerraform(this._panPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pan_username: {
        value: cdktf.stringToHclTerraform(this._panUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      panorama_device_group: {
        value: cdktf.stringToHclTerraform(this._panoramaDeviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      panorama_enabled: {
        value: cdktf.booleanToHclTerraform(this._panoramaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      panorama_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._panoramaIpAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      panorama_template: {
        value: cdktf.stringToHclTerraform(this._panoramaTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_pin_expiry: {
        value: cdktf.stringToHclTerraform(this._registrationPinExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_pin_id: {
        value: cdktf.stringToHclTerraform(this._registrationPinId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_pin_value: {
        value: cdktf.stringToHclTerraform(this._registrationPinValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._segmentIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_protocol: {
        value: cdktf.stringToHclTerraform(this._tunnelProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_protect_segment_options: {
        value: cdktf.listMapperHcl(servicePanGlobalProtectSegmentOptionsToHclTerraform, true)(this._globalProtectSegmentOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServicePanGlobalProtectSegmentOptionsList",
      },
      instance: {
        value: cdktf.listMapperHcl(servicePanInstanceToHclTerraform, true)(this._instance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePanInstanceList",
      },
      segment_options: {
        value: cdktf.listMapperHcl(servicePanSegmentOptionsToHclTerraform, true)(this._segmentOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServicePanSegmentOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
